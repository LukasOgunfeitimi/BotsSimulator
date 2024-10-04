class Reader {
    constructor(t) {
        this._4143 = new DataView(t),
        this._3891 = 0,
        this._1027 = t.byteLength
    }
    get _6493() {
        return this._3891 >= this._1027
    }
    getUint8() {
        const t = this._4143.getUint8(this._3891);
        return this._3891 += 1,
        t
    }
    getInt8() {
        const t = this._4143.getInt8(this._3891);
        return this._3891 += 1,
        t
    }
    getUint16() {
        const t = this._4143.getUint16(this._3891, !0);
        return this._3891 += 2,
        t
    }
    _5837() {
        const t = this._4143.getInt16(this._3891, !0);
        return this._3891 += 2,
        t
    }
    getUint32() {
        const t = this._4143.getUint32(this._3891, !0);
        return this._3891 += 4,
        t
    }
    getInt32() {
        const t = this._4143.getInt32(this._3891, !0);
        return this._3891 += 4,
        t
    }
    _3653() {
        const t = this._4143.getFloat32(this._3891, !0);
        return this._3891 += 4,
        t
    }
    _4142() {
        const t = this._4143.getFloat64(this._3891, !0);
        return this._3891 += 8,
        t
    }
    getString8() {
        let t = "";
        const _ = this.getUint8();
        for (let e = 0; e < _; e++) {
            const _ = this.getUint8();
            t += String.fromCharCode(_)
        }
        return decodeURIComponent(t)
    }
    _5661() {
        let t = "";
        const _ = this.getUint16();
        for (let e = 0; e < _; e++) {
            const _ = this.getUint8();
            t += String.fromCharCode(_)
        }
        return t
    }
    getString16() {
        let t = "";
        const _ = this.getUint8();
        for (let e = 0; e < _; e++) {
            const _ = this.getUint16();
            t += String.fromCharCode(_)
        }
        return decodeURIComponent(t)
    }
    _8198() {
        let t = "";
        const _ = this.getUint16();
        for (let e = 0; e < _; e++) {
            const _ = this.getUint16();
            t += String.fromCharCode(_)
        }
        return t
    }
    _7190(t) {
        this._3891 += t
    }
    _9909() {
        this._3891 = 0
    }
}
module.exports = Reader