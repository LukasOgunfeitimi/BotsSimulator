module.exports = class reader {
    constructor(buffer) {
        this.dataview = null;
        this.length = 0;
        this.isLittleEndian = true;
        this.maxLength = 0;

        if (buffer) {
            this.init(buffer);
        }
    }

    init(buffer) {
        this.dataview = new DataView(buffer);
        this.length = 0;
        this.maxLength = this.dataview.byteLength;
    }

    get end() {
        return this.length >= this.maxLength;
    }

    uint8() {
        const value = this.dataview.getUint8(this.length);
        this.length++;
        return value;
    }

    int8() {
        const value = this.dataview.getInt8(this.length);
        this.length++;
        return value;
    }

    uint16() {
        const value = this.dataview.getUint16(this.length, this.isLittleEndian);
        this.length += 2;
        return value;
    }

    int16() {
        const value = this.dataview.getInt16(this.length, this.isLittleEndian);
        this.length += 2;
        return value;
    }

    uint32() {
        const value = this.dataview.getUint32(this.length, this.isLittleEndian);
        this.length += 4;
        return value;
    }

    int32() {
        const value = this.dataview.getInt32(this.length, this.isLittleEndian);
        this.length += 4;
        return value;
    }

    float() {
        const value = this.dataview.getFloat32(this.length, this.isLittleEndian);
        this.length += 4;
        return value;
    }

    double() {
        const value = this.dataview.getFloat64(this.length, this.isLittleEndian);
        this.length += 8;
        return value;
    }

    skipBytes(count) {
        this.length += count;
    }

    string8() {
        let value = '';
        const length = this.uint8();

        for (let i = 0; i < length; i++) {
            value += String.fromCharCode(this.uint8());
        }

        return value;
    }

    string16() {
        let value = '';
        const length = this.uint8();

        for (let i = 0; i < length; i++) {
            value += String.fromCharCode(this.uint16());
        }

        return value;
    }

    readUInt8() {
        return this.uint8();
    }

    readUInt16() {
        return this.uint16();
    }

    readUInt32() {
        return this.uint32();
    }

    readFloat() {
        return this.float();
    }

    readString16() {
        return this.string16();
    }
}
