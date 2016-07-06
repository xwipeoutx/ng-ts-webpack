var loaders = require("./loaders");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
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
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body',
            hash: true
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 8080,
            server: {
                baseDir: 'dist'
            },
            ui: false,
            online: false,
            notify: false
        }),
        new webpack.ProvidePlugin({
            // globals go here
        })
    ],
    module:{
        loaders: loaders
    }
};