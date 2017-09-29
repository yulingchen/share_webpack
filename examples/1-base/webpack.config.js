const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const webpackConfig = {
    devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'cheap-module-eval-source-map',
    entry: path.resolve(__dirname, 'src/app.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
        new HtmlWebpackPlugin({
            title: 'base',
            template: path.resolve(__dirname, 'index.html')
        })
    ]
}

module.exports = webpackConfig