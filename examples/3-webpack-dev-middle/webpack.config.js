const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

function exampleDir(filepath) {
    return path.resolve(__dirname, filepath)
}

const webpackConfig = {
    devtool: 'inline-source-map',
    entry: exampleDir('src/app.js'),
    output: {
        path: exampleDir('dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin([exampleDir('dist')]),
        new HtmlWebpackPlugin({
            title: 'webpack-dev-middle',
            template: exampleDir('index.html')
        })
    ],
}

module.exports = webpackConfig