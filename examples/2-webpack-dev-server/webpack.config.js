const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

function exampleDir(filepath) {
    return path.resolve(__dirname, filepath)
}

const webpackConfig = {
    entry: exampleDir('src/app.js'),
    devtool: 'inline-source-map',
    devServer: {
        contentBase: exampleDir('dist')
    },
    output: {
        path: exampleDir('dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack-dev-server',
            template: exampleDir('index.html')
        })
    ],
}

module.exports = webpackConfig