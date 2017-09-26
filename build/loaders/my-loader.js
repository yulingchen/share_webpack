module.exports = function myLoader(source, map) {
    this.callback(null, source, map);
}