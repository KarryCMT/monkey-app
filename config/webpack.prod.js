const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "",
    path: path.resolve(__dirname, "../build"),
    // 打包前清空输出目录
    clean: true,
  },
});

const config = {
  mode: "production",

  entry: {
    main: path.resolve(__dirname, "../src/index.tsx"),
  },
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "",
    path: path.resolve(__dirname, "../build"),
    // 打包前清空输出目录
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader,  {
          loader: "css-loader",
          options: {
            modules: true,
          },
        }],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
};

module.exports = config;
