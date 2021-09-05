/** @type {import('webpack').Configuration} */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const { resolve, join } = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
    },
    mode: "development",
    devtool: "source-map",

    resolve: {
        extensions: [".js"],
    },

    module: {
        rules: [{
                test: /\.js$/,

                use: {
                    loader: "babel-loader",
                },

                exclude: /node_modules/,
            },
            {
                test: /\.(css|scss)$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/images/[hash][ext][query]",
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: "body",
            template: "./public/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
        /*activar para usar variables de entorno*/
        new Dotenv(),
    ],
    devServer: {
        contentBase: join(__dirname, "dist"),
        compress: true,
        port: 3009,
        open: true,
    },
};