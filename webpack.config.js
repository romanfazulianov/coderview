"use strict";

const NODE_ENV = process.env.NODE_ENV || 'development';
const isProductionMode = NODE_ENV === 'production';
const isDebugMode = NODE_ENV === 'development';
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CompressionPlugin = require("compression-webpack-plugin");

const config = {

    entry: './app/App.js',
    output: {
        filename: 'dist/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                //     plugins: [
                //         'transform-runtime'
                // ],
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    watch: isDebugMode,
    watchOptions: {
        aggregateTimeout: 50
    },
    devtool: isDebugMode ? 'inline-cheap-module-source-map' : null,
    plugins: [

        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('dist/styles/main.css', {
            allChunks: true
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     children: true,
        //     async: true,
        // }),

        // new webpack.optimize.DedupePlugin(),
        // new webpack.optimize.OccurrenceOrderPlugin(),
        // new CompressionPlugin({
        //     asset: "[path].gz[query]",
        //     algorithm: "gzip",
        //     test: /\.js$|\.html$/,
        //     threshold: 10240,
        //     minRatio: 0.8
        // })
        // new webpack.DefinePlugin({
        //     NODE_ENV: JSON.stringify(NODE_ENV)
        // })
    ]
};

if (isDebugMode) {
    config.plugins.push(
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            proxy: 'localhost:3100',
            host: 'localhost',
            port: 3000,
            // server: {
            //   baseDir: ['./public'],
            //   index: 'index.html'
            // }
        })
    );
}

if (isProductionMode) {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            compress: {
                sequences     : true,
                booleans      : true,
                loops         : true,
                unused      : true,
                warnings    : false,
                drop_console: true,
                unsafe      : true
            }
        })
    );
}

module.exports = config;

