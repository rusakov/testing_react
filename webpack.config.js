var path = require("path");
var webpack = require("webpack");
var nodeExternals = require("webpack-node-externals");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

var browserConfig = {
  target: "web",
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "build/client"),
    filename: "client.js",
    publicPath: "/"
  },
  module: {
    rules: [{ test: /\.(js)$/, use: "babel-loader" }]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ]
};

var serverConfig = {
  target: "node",
  entry: "./server/index.js",
  target: "node",
  output: {
    path: path.resolve(__dirname, "build/server"),
    filename: "server.js",
    publicPath: "/"
  },
  module: {
    rules: [{ test: /\.(js)$/, use: "babel-loader" }]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
};

module.exports = [browserConfig, serverConfig];
