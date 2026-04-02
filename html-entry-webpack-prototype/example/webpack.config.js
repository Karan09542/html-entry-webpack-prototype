import path from "path";
import { fileURLToPath } from "url";
import HTMLEntryPlugin from "../plugin/HTMLEntryPlugin.js";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basename = `./html-entry-webpack-prototype/example/src`;

export default {
	name: "HTML_AS_ENTRY_POINT",
	mode: "development",
	// mode: "production",
	// entry: "./z/src/index.js",
	entry: {
		index: `${basename}/two.js`,
		one: {
			import: `${basename}/one.js`,
			filename: "ONE.js"
		},
		main: `${basename}/main.html`
	},
	output: {
		filename: "[name]-[contenthash].js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
		assetModuleFilename: "public/[hash][ext]",
		clean: true
	},

	// optimization: {
	// 	minimize: true,
	// 	splitChunks: {
	// 		chunks: "all"
	// 	}
	// },
	resolveLoader: {
		alias: {
			"html-entry-loader": path.join(
				__dirname,
				"../loader/html-entry-loader.js"
			)
		}
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				type: "javascript/auto",
				use: [
					{
						loader: "html-entry-loader"
					}
				]
			},
			{
				test: /\.s?[ca]ss$/,
				oneOf: [
					{
						resourceQuery: /html-entry/,
						use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
					},
					{
						use: ["style-loader", "css-loader", "sass-loader"]
					}
				]
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				type: "asset/resource"
			}
		]
	},
	plugins: [
		new HTMLEntryPlugin(),
		new MiniCssExtractPlugin({
			filename: "[name]-[contenthash].css",
			chunkFilename: "[id]-[contenthash].css"
		})
	]
};
