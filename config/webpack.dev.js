const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../build"),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "../build"),
    historyApiFallback: true,
    port: 4000,
    hot: true,
  },
});
const config = {
  target: "web",
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "../src/index.tsx"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../build"),
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        include: path.resolve(__dirname, "../src"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
            plugins: [
              [
                "@babel/plugin-transform-runtime",
                {
                  regenerator: true,
                },
              ],
              "react-refresh/babel",
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", {
          loader: "css-loader",
          options: {
            modules: true,
          },
        },],
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          {
            loader: "less-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    // 热更新插件
    new ReactRefreshWebpackPlugin({
      exclude: [/node_modules/],
    }),
    // 构建过程中添加类型检查
    new ForkTsCheckerWebpackPlugin({
      async: false
    }),
    // 构建过程中添加代码规范校验
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    // contentBase: path.join(__dirname, "../build"),
    static:'./public',
    historyApiFallback: true,
    port: 4000,
    hot: true,
  },
};

module.exports = config;
