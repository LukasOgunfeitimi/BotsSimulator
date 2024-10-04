var enckeys =[100,96,131,229,205,27,241,129,226,85,149,143,171,1,29,139,
    180,246,44,213,13,18,115,166,227,108,246,
    143,89,69,153,121,136,97,174,116,98,176,134,27,172,206,78,37,21 ,217,8,
    82,29,156,214,135,166,231,117,190,187,81,54,57,214,213,253,46]
function SHIFT(keys) {
    var bits = keys.length * 8
    if (bits % 32 !== 0) return 0
    var buffer = new Uint32Array((bits) / 32)
    for (var i = 0; i < buffer.length; i++) {
        var buf = 0
        for (var j = 0; j < 4; j++) {
            buf = buf | keys[(i * 4) + j] << ((((4 - j) * 8)) - 8)
        }
        buffer[i] = buf
    }
    return buffer
}
console.log(SHIFT(enckeys))