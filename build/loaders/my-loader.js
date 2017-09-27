const loaderUtils = require("loader-utils")

module.exports = function myLoader(source, map) {
    const options = loaderUtils.getOptions(this)

    //显示my文件内容
    return `module.exports = function(){alert('${source}')}`
}