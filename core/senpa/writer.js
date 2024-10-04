module.exports = class Writer {
    constructor(e=128) {
        const t = new ArrayBuffer(e);
        this.view = new DataView(t);
        this.index = 0;
        this.maxIndex = e
    }
    writeInt8(e) {
        this.view.setInt8(this.index, e, true);
        this.index += 1
    }
    writeUInt8(e) {
        this.view.setUint8(this.index, e, true);
        this.index += 1
    }
    writeInt16(e) {
        this.view.setInt16(this.index, e, true);
        this.index += 2
    }
    writeUInt16(e) {
        this.view.setUint16(this.index, e, true);
        this.index += 2
    }
    writeInt32(e) {
        this.view.setInt32(this.index, e, true);
        this.index += 4
    }
    writeUInt32(e) {
        this.view.setUint32(this.index, e, true);
        this.index += 4
    }
    writeFloat(e) {
        this.view.setFloat32(this.index, e, true);
        this.index += 4
    }
    writeDouble(e) {
        this.view.setFloat64(this.index, e, true);
        this.index += 8
    }
    writeString8(e) {
        this.writeUInt8(e.length);
        for (let t = 0; t < e.length; t++) {
            const n = e.charCodeAt(t);
            this.writeUInt8(n)
        }
    }
    writeLongString8(e) {
        this.writeUInt16(e.length);
        for (let t = 0; t < e.length; t++) {
            const n = e.charCodeAt(t);
            this.writeUInt8(n)
        }
    }
    writeString16(e) {
        this.writeUInt8(e.length);
        for (let t = 0; t < e.length; t++) {
            const n = e.charCodeAt(t);
            this.writeUInt16(n)
        }
    }
    writeLongString16(e) {
        this.writeUInt16(e.length);
        for (let t = 0; t < e.length; t++) {
            const n = e.charCodeAt(t);
            this.writeUInt16(n)
        }
    }
    encodeString(e) {
        return encodeURI(e)
    }
    reset() {
        this.index = 0
    }
    get buffer() {
        const e = this.view.buffer;
        return this.index === this.maxIndex ? e : e.slice(0, this.index)
    }
}