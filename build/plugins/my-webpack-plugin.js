function MyWebpackPlugin() {

}

MyWebpackPlugin.prototype.apply = function (compiler) {
    compiler.plugin("compilation", function (compilation) {
        compilation.plugin('normal-module-loader', function (loaderContext, module) {
            console.log('module', module.request)
        });
    });
}

module.exports = MyWebpackPlugin;