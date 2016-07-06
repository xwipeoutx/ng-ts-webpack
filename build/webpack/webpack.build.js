var loaders = require("./loaders");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: ['./app/app.ts'],
    output: {
        filename: 'build.js',
        path: 'dist'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js', '.json']
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    devtool: "source-map",
    plugins: [
        new webpack.optimize.UglifyJsPlugin(
            {
                warning: false,
                mangle: true,
                comments: false
            }
        ),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body',
            hash: true
        }),
        new webpack.ProvidePlugin({
            // globals go here
        })
    ],
    module: {
        loaders: loaders
    }
};