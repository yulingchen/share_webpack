const os = require('os');
const opn = require('opn');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const argv = require('yargs').argv

const exampleDir = argv.example
if (exampleDir === undefined) {
    throw '缺少示例目录名称，如npm run dev -- --example 3-webpack-dev-middle'
}

const app = express();
const config = require('../examples/' + exampleDir + '/webpack.config')
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
}));

const IP = function () {
    var interfaces = os.networkInterfaces()
    var IPv4 = '127.0.0.1'
    for (var key in interfaces) {
        var alias = 0
        interfaces[key].forEach(function (details) {
            if (details.family == 'IPv4' && details.address.indexOf('10.5') > -1) {
                IPv4 = details.address
            }
        })
    }
    return IPv4
}()

const port = 3000
const uri = 'http://' + IP + ':' + port

// Serve the files on port 3000.
app.listen(port, function () {
    console.log('Listening on port 3000!\n');

    opn(uri)
});