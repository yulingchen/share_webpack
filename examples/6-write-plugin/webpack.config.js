const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MyWebpackPlugin = require('../../build/plugins/my-webpack-plugin')

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
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([exampleDir('dist')]),
        new HtmlWebpackPlugin({
            title: 'write a plugin',
            template: exampleDir('index.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MyWebpackPlugin()
    ],
}

module.exports = webpackConfig