module.exports = class {
    constructor(size) {
        this.buffer = Buffer.allocUnsafe(size)
        this.byteOffset = 0
    }
    Uint8(value) {
        this.buffer.writeUInt8(value, this.byteOffset++)
    }
    Int8(value) {
        this.buffer.writeInt8(value, this.byteOffset++)
    }
    Uint16(value) {
        this.buffer.writeUInt16LE(value, this.byteOffset)
        this.byteOffset += 2
    }
    Int16(value) {
        this.buffer.writeInt16LE(value, this.byteOffset)
        this.byteOffset += 2
    }
    Uint32(value) {
        this.buffer.writeUInt32LE(value, this.byteOffset)
        this.byteOffset += 4
    }
    Int32(value) {
        this.buffer.writeInt32LE(value, this.byteOffset)
        this.byteOffset += 4
    }
    string8(string) {
        for (let i = 0; i < string.length; i++) {
            this.Uint8(string.charCodeAt(i))
        }
    }
    string16(string, zero) {
        for (let i = 0; i < string.length; i++) {
            this.Uint16(string.charCodeAt(i))
        }
    }
}