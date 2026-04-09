module.exports = class writer {
    init() {
        this.data = [];
        this.length = 0;
    }
    writeUInt8(c2) {
        this.data.push({
            method: 'setUint8',
            value: c2,
            offset: 1
        })
        this.length++;
    }
    writeUInt16(c2) {
        this.data.push({
            method: 'setUint16',
            value: c2,
            offset: 2
        })
        this.length += 2;
    }
    writeUInt32(c2) {
        this.data.push({
            method: 'setUint32',
            value: c2,
            offset: 4
        })
        this.length += 4;
    }
    writeInt8(c2) {
        this.data.push({
            method: 'setInt8',
            value: c2,
            offset: 1
        })
        this.length++;
    }
    writeInt16(c2) {
          this.data.push({
            method: 'setInt16',
            value: c2,
            offset: 2
        })
        this.length += 2;
    }
    writeInt32(c2) {
        this.data.push({
            method: 'setInt32',
            value: c2,
            offset: 4
        })
        this.length += 4;
    }
    writeFloat32(c2) {
        this.data.push({
            method: 'setFloat32',
            value: c2,
            offset: 4
        })
        this.length += 4;
    }
    writeString8(c2) {
        this.writeUInt8(c2.length);
        for (let c4 = 0; c4 < c2.length; ++c4) {
            this.writeUInt8(c2.charCodeAt(c4));
        }
    }
    writeString16(c2) {
        this.writeUInt8(c2.length);
        for (let c4 = 0; c4 < c2.length; ++c4) {
            this.writeUInt16(c2.charCodeAt(c4));
        }
    }
    get buffer() {
        const buffer = new ArrayBuffer(this.length)
        const view = new DataView(buffer)
        let offset = 0
        for (const item of this.data) {
            view[item.method](offset, item.value, !![])
            offset += item.offset
        }
        return buffer
    }
}
