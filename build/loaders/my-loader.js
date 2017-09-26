const loaderUtils = require("loader-utils")

module.exports = function myLoader(source, map) {
    const options = loaderUtils.getOptions(this)

    //处理source

    this.callback(null, source, map);
    return;
}