const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

function exampleDir(filepath) {
    return path.resolve(__dirname, filepath)
}

const webpackConfig = {
    devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-cheap-source-map',
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
                test: /\.my/,
                use: {
                    loader: "my-loader",
                    options: {
                        debug: true
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.my', '.json']
    },
    resolveLoader: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "../../build/loaders")
        ]
    },
    plugins: [
        new CleanWebpackPlugin([exampleDir('dist')]),
        new HtmlWebpackPlugin({
            title: 'write a loader',
            template: exampleDir('index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
}

module.exports = webpackConfig