const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {

    mode: 'development',

    context: path.join(__dirname, 'src'),

    entry: {
        home: './',
    },

    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },

    devServer: {
        port:4000,
        contentBase: path.join(__dirname, './dist'),
        inline: true,
        hot: true,
        historyApiFallback: true,
    },

    plugins: [
        new HtmlWebpackPlugin(),
    ],

}
