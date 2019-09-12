const webpack = require('webpack');
const dev = process.env.NODE_ENV !== "production";
const path = require("path");

module.exports = {
    mode: dev ? "development" : "production",
    context: path.join(__dirname, "src"),
    devtool: dev ? "none" : "source-map",
    entry: {
        app: "./client.js",
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader']
                use: ['ignore-loader']
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
    },
    node: {
        fs: "empty"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],


}
