const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: "eval-source-map",
  context: path.join(__dirname, "src"),
  entry: ["./main.js"],
  output: {
    path: path.join(__dirname, "www"),
    filename: "bundle.js"
  },
  module: {
    rules: [{ test: /\.js/, exclude: /node_modules/, use: ["babel-loader"] }]
  },
  resolve: {
    modules: [path.join(__dirname, "node_modules")]
  },
  plugins: [new webpack.NoEmitOnErrorsPlugin()]
};
