module.exports = class Reader {
    constructor(e) {
        this.view = new DataView(e);
        this.index = 0;
        this.maxIndex = e.byteLength
    }
    readInt8() {
        const e = this.view.getInt8(this.index, true);
        this.index += 1;
        return e
    }
    readUInt8() {
        const e = this.view.getUint8(this.index, true);
        this.index += 1;
        return e
    }
    readInt16() {
        const e = this.view.getInt16(this.index, true);
        this.index += 2;
        return e
    }
    readUInt16() {
        const e = this.view.getUint16(this.index, true);
        this.index += 2;
        return e
    }
    readInt32() {
        const e = this.view.getInt32(this.index, true);
        this.index += 4;
        return e
    }
    readUInt32() {
        const e = this.view.getUint32(this.index, true);
        this.index += 4;
        return e
    }
    readFloat() {
        const e = this.view.getFloat32(this.index, true);
        this.index += 4;
        return e
    }
    readDouble() {
        const e = this.view.getFloat64(this.index, true);
        this.index += 8;
        return e
    }
    readString8() {
        const e = this.readUInt8();
        let t = "";
        for (let n = 0; n < e; n++) {
            if (this.end)
                break;
            const e = this.readUInt8();
            t += String.fromCharCode(e)
        }
        return t
    }
    readLongString8() {
        const e = this.readUInt16();
        let t = "";
        for (let n = 0; n < e; n++) {
            if (this.end)
                break;
            const e = this.readUInt8();
            t += String.fromCharCode(e)
        }
        return t
    }
    readString16() {
        const e = this.readUInt8();
        let t = "";
        for (let n = 0; n < e; n++) {
            if (this.end)
                break;
            const e = this.readUInt16();
            t += String.fromCharCode(e)
        }
        return t
    }
    readLongString16() {
        const e = this.readUInt16();
        let t = "";
        for (let n = 0; n < e; n++) {
            if (this.end)
                break;
            const e = this.readUInt16();
            t += String.fromCharCode(e)
        }
        return t
    }
    decodeString(e) {
        return decodeURI(e)
    }
    get bytesLeft() {
        return this.maxIndex - this.index
    }
    get end() {
        return this.index === this.maxIndex
    }
}