const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

function exampleDir(filepath) {
    return path.resolve(__dirname, filepath)
}

const webpackConfig = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
        exampleDir('src/app.js')
    ],
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
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
}

module.exports = webpackConfig