const webpack = require('webpack')
const argv = require('yargs').argv

const exampleDir = argv.example
if (exampleDir === undefined) {
    throw '缺少示例目录名称，如npm run build -- --example 1-base'
}

const webpackConfig = require('../examples/' + exampleDir + '/webpack.config')

if (argv.watch) webpackConfig.watch = true //开启监视模式

webpack(webpackConfig, function (err, stats) {
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n')

    console.log('Build complete.')
})
