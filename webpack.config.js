var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
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
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [
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
        }),
        new ExtractTextPlugin('dist/styles/main.css', {
            allChunks: true
        })
    ]
};