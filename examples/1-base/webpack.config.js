const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
    entry: path.resolve(__dirname, 'src/app.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'base',
            template: path.resolve(__dirname, 'index.html')
        })
    ]
}

module.exports = webpackConfig