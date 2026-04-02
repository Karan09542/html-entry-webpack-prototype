import fs from "fs";
import path from "path";
import EntryDependency from "../../lib/dependencies/EntryDependency.js";
import * as cheerio from "cheerio";

import webpack from "webpack";
const { NormalModule } = webpack;

/**
 * @typedef {object} Tag
 * @property {"head" | "body"} location - location where the tag should be placed i.e. head or body
 * @property {"top"|"bottom"} position - position of the tag i.e. top or bottom
 */

/**
 * @typedef {"head" | "body"} HeadOrBody
 */

/**
 * @typedef {object} Config
 * @property {Tag | HeadOrBody} script
 * @property {Tag | HeadOrBody} link
 */

/** @type {Config} */
const DefaultConfig = {
	script: {
		location: "body",
		position: "bottom"
	},
	link: {
		location: "head",
		position: "bottom"
	}
};

const PLUGIN_NAME = "EntryPlugin";
const HTML_PLUGIN = "HTMLEntryPlugin";
class HTMLEntryPlugin {
	constructor(config) {
		this.htmlEntries = {};
		this.virtualModulePaths = {};
		this.dependencyTwoHTMLEntriesMap = {};
		this.RegEx = {
			HTML_REGEX: /\.(html|htm)$/i,
			SCRIPT_REGEX:
				/<script\s+[^>]*?\S*src\s*=\s*['"](.*?)['"][^>]*>\s*<\/script>/g,
			IMAGE_REGEX: /\.(jpg|jpeg|png|gif|svg)$/i
		};

		// tags appending to html config --just ignore
		if (config) {
			if (typeof config !== "object")
				throw new Error("config must be an object");

			// if tags strings are passed
			if (
				typeof config.script !== "object" ||
				typeof config.style !== "object"
			) {
				if (config.script !== "body" || config.script !== "head")
					config.script = DefaultConfig.script;
				if (config.link !== "head") config.link = DefaultConfig.link;
			} else {
				// if tags objects are passed
				if (
					config.script.location !== "body" ||
					config.script.location !== "head"
				)
					config.script = DefaultConfig.script;
				if (config.link.location !== "head") config.link = DefaultConfig.link;
			}
			this.config = config;
		} else {
			/** @type {Config} */
			this.config = DefaultConfig;
		}

		this.cleanup();
	}

	apply(compiler) {
		// const entries = compiler.options.entry;

		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				NormalModule.getCompilationHooks(compilation).loader.tap(
					HTML_PLUGIN,
					(loaderContext, normalModule) => {
						loaderContext.sendDataToPlugin = (data) => {
							// const moduleId = compilation.chunkGraph.getModuleId(normalModule); // null
							this.htmlEntries[normalModule.resource] = {
								...data,
								module: normalModule
							};
						};
					}
				);
			}
		);

		compiler.hooks.thisCompilation.tap(HTML_PLUGIN, (compilation) => {
			const { RawSource } = compiler.webpack.sources;
			compilation.hooks.processAssets.tap(
				{
					name: HTML_PLUGIN,
					stage: compilation.constructor.PROCESS_ASSETS_STAGE_ADDITIONS
				},
				(assets) => {
					for (const [name, entrypoint] of compilation.entrypoints) {
						const modules = entrypoint.getEntrypointChunk().getModules();
						const htmlModule = modules.find((m) =>
							m.resource.endsWith(".html")
						);
						if (!htmlModule) continue;
						const htmlEntry = this.htmlEntries[htmlModule.resource]; // entry
						if (!htmlEntry) continue;

						const files = entrypoint.getFiles();
						const allAssets = compilation.getAssets();

						const jsFiles = files.filter((f) => f.endsWith(".js"));
						const cssFiles = files.filter((f) => f.endsWith(".css"));
						const imgFiles = {}; // { name: 'public/2285cc3c75dcb12a4e10.png', sourceFilename: 'example/src/public/mahadev.png', immutable: true, contenthash: '2285cc3c75dcb12a4e10' }

						for (const asset of allAssets) {
							if (this.RegEx.IMAGE_REGEX.test(asset.name)) {
								imgFiles[asset.info.sourceFilename] = {
									name: asset.name,
									...asset.info
								};
							}
						}

						const htmlFile = htmlEntry.source;
						const $ = cheerio.load(htmlFile);

						if (jsFiles.length) {
							const scripts = jsFiles
								.map((f) => `<script type="module" src="${f}"></script>`)
								.join("");
							$("script").each((_, el) => {
								if (this.isValidSource($(el).attr("src"))) {
									$(el).remove();
								}
							});

							// Add scripts to html
							const { location, position } = this.config.script;
							if (location === "body") {
								position === "bottom"
									? $("body").append(scripts)
									: $("body").prepend(scripts);
							} else {
								position === "bottom"
									? $("head").append(scripts)
									: $("head").prepend(scripts);
							}
						}

						if (cssFiles.length) {
							const links = cssFiles
								.map((f) => `<link rel="stylesheet" href="${f}">`)
								.join("");
							$("link[rel=stylesheet]").each((_, el) => {
								if (this.isValidSource($(el).attr("href"))) {
									$(el).remove();
								}
							});

							// Add css to html
							const { position } = this.config.link;
							position === "bottom"
								? $("head").append(links)
								: $("head").prepend(links);
						}

						const imgSources = Object.keys(imgFiles);
						if (imgSources.length) {
							$("img").each((index, ele) => {
								const src = $(ele)
									.attr("src")
									.replace(/^(\.\/)/, ""); // may start with `./` but imageFiles name always start with root directory i.e z/src/public/mahadev.png

								if (!this.isValidSource(src)) return;
								const path = imgSources.find((p) => p.endsWith(src));
								if (path) {
									$(ele).attr("src", imgFiles[path].name);
								}
							});
						}

						const html = $.html().replace(/(^\s+$)|(^\s+)|(\s+$)/gm, "");
						compilation.emitAsset(`${name}.html`, new RawSource(html));
					}
				}
			);
		});

		compiler.hooks.done.tap(HTML_PLUGIN, (stats) => {
			this.cleanup();
		});
	}

	addEntry(context, entry, options, compilation, resolve, reject) {
		const dep = HTMLEntryPlugin.createDependency(entry, options);
		compilation.addEntry(context, dep, options, (err) => {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		});
	}

	static createDependency(entry, options) {
		const dep = new EntryDependency(entry);
		// TODO webpack 6 remove string option
		dep.loc = {
			name:
				typeof options === "object"
					? /** @type {string} */ (options.name)
					: options
		};
		return dep;
	}

	getBaseName(entry) {
		return path.basename(entry).split(".")[0];
	}

	cleanup = () => {
		const clean = () => {
			try {
				for (const name in this.virtualModulePaths) {
					fs.unlinkSync(this.virtualModulePaths[name]);
				}
			} catch (error) {}
		};

		process.on("exit", clean);
		process.on("SIGINT", clean);
		process.on("SIGTERM", clean);
	};

	isValidSource(src) {
		if (
			!src ||
			src.startsWith("http://") ||
			src.startsWith("https://") ||
			src.startsWith("data:")
		) {
			return false;
		}
		return true;
	}
}
export default HTMLEntryPlugin;
