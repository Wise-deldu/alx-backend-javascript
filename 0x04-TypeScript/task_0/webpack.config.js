const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  mode: "development", // Explicitly set the mode to avoid warnings. Use "production" for production builds.
  entry: "./js/main.ts",
  devtool: "inline-source-map", // Keeps source maps for easier debugging in development.
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true, // ForkTsChecker will handle type checking.
        },
        exclude: /node_modules/, // Always exclude node_modules for performance.
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // Resolve file extensions for TypeScript and JavaScript.
  },
  devServer: {
    static: "./dist", // Updated `contentBase` to `static` (modern Webpack).
    port: 3000, // Optional: Set a custom port for the development server.
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(), // Cleans the `dist` folder before each build.
    new HtmlWebpackPlugin({
      title: "Development", // Title for the generated `index.html`.
      template: "./src/index.html", // Optional: Use a custom HTML template if available.
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
