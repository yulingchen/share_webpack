const path = require('path')

const webpackConfig = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-library.js',
        library: 'MyLibrary',
        libraryTarget: 'umd'
    }
}

module.exports = webpackConfig