function getObjectType(obj) {
    return Object.prototype.toString.call(this, obj).match(/\[object ([^\]]+)\]/)[1]
}

export default {
    getObjectType
}