import path from "path";
import { pathToFileURL } from "url";
import * as cheerio from "cheerio";

export default async function (source) {
	const entry = this.resourcePath;
	const $ = cheerio.load(source);
	const jsMatches = [];
	const cssMatches = [];
	const imgMatches = [];

	$("script").each((i, elem) => {
		let src = $(elem).attr("src");
		if (!isValidSource(src)) return;
		src = path.resolve(path.dirname(entry), $(elem).attr("src"));
		jsMatches.push({ ...elem.attribs, src });
	});

	$("link[rel='stylesheet']").each((i, elem) => {
		let href = $(elem).attr("href");
		if (!isValidSource(href)) return;

		href = path.resolve(path.dirname(entry), $(elem).attr("href"));

		cssMatches.push({ ...elem.attribs, href });
	});
	$("img").each((i, elem) => {
		let src = $(elem).attr("src");
		if (!isValidSource(src)) return;

		src = path.resolve(path.dirname(entry), src);
		imgMatches.push({ ...elem.attribs, src });
	});

	const toPosix = (p) => {
		return pathToFileURL(p).href; // webpack and Es6 compatible
		// return p.split(path.sep).join("/");
	};

	const sourceToJs =
		cssMatches
			.map(({ href }) => `import "${toPosix(href)}?html-entry";`)
			.join("\n") +
		"\n" +
		jsMatches.map(({ src }) => `import "${toPosix(src)}";`).join("\n") +
		"\n" +
		imgMatches.map(({ src }) => `import "${toPosix(src)}";`).join("\n");

	if (this.sendDataToPlugin) {
		this.sendDataToPlugin({ source });
	}
	this.addDependency(entry);
	return sourceToJs;
}

function isValidSource(src) {
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
