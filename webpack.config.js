'use strict';
const path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'development';
const isProductionMode = NODE_ENV === 'production';
const isDebugMode = NODE_ENV === 'development';
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {

    entry: {
        vendor: 'babel-polyfill',
        main: './app/App.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?-babelrc,presets[]=es2015,presets[]=stage-0,presets[]=react'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            }
        ]
    },
    watch: isDebugMode,
    watchOptions: {
        aggregateTimeout: 50
    },
    devtool: isDebugMode ? 'inline-cheap-module-source-map' : false,
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        //CommonChunksPlugin will now extract all the common modules from vendor and main bundles
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({
            filename: 'styles/[name].css',
            allChunks: true
        }),
    ]
};

if (isDebugMode) {
    config.plugins.push(
        new BrowserSyncPlugin({
            proxy: 'localhost:3100',
            host: 'localhost',
            port: 3000,
        })
    );
}

if (isProductionMode) {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            compress: {
                sequences   : true,
                booleans    : true,
                loops       : true,
                unused      : true,
                warnings    : false,
                drop_console: true,
                unsafe      : true
            }
        })
    );
}

module.exports = config;

