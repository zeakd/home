module.exports = function (exts) {
    exts.map(function (key) {
        require.extensions[key] = function () {};
    })
}