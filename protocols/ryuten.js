const WebSocket = require('ws')
const { SocksProxyAgent } = require('socks-proxy-agent');
const Writer = require('../core/writer')
class nicewasm { // don't touch
    constructor() {
      this.keys = []
    }
    encrypt(data) {
      var encData = []
      for (var i = 0; i < data.length; i++)
        encData[i] = this.step(data[i] ^ this.keys[i])
      this.rotateKeys()
      return encData
    }
    rotateKeys() {
      for (var i = 0; i < this.keys.length; i++)
        this.keys[i] = this.step((this.keys[i] * -17) & 255)
    }
    step(key) { 
      return ((key << 4) ^ (key >> 4)) & 255
    }
    setKeys(keys) {
      this.keys = keys
    }
}
class bot {
    constructor(user, proxy) {
        this.socket = null;
        this.user = user
        this.server = user.server
        this.origin = user.origin
        this.ws = user.ws
        this.proxy = proxy;
        this.authed = 0
        this.randomtag = String(Math.floor(Math.random()*(999-100+1)+100))
        this.ryuten = new nicewasm()
        this.lastmessage = null
        this.connect()

    }
    connect() {
        //console.log(`trying: ${this.proxy}`)
        if (this.proxy) {   
            this.socket = new WebSocket(this.server, {
                agent: new SocksProxyAgent(`socks://${this.proxy}`)
            })
        } else {
            this.socket = new WebSocket(this.server, {
            })
        }
        this.socket.binaryType = 'arraybuffer'
        this.socket.onopen = this.onopen.bind(this)
        this.socket.onerror = this.onerror.bind(this)
        this.socket.onmessage = this.onmessage.bind(this)
    }
    onopen() {
        console.log('connected')
        setInterval(() => {
            this.spawn()
        }, 1000);
        this.ws.send(JSON.stringify({
            type: 'connection',
            status: 'open'
        }))
        this.socket.on('close', (msg) => {
            this.ws.send(JSON.stringify({
                type: 'connection',
                status: 'close'
            }))
            console.log('disconnected')
        })
        this.socket.on('error', (msg) => {
            console.log(msg)
        })
    }
    onmessage(message) {
        if (!this.authed) {
            this.ryuten.setKeys(new Uint8Array(message.data))
            this.authed = 1
        } else {
            var msg = new DataView(message.data)
            switch(msg.getUint8(0)) {
                case 10:
                this.send([42, 0])
                this.send([21, 0])
                this.send([23, 0])
                var tag = new Writer(1 + 2 * (1 + this.randomtag.length))
                tag.Uint8(21)
                tag.Uint8(this.randomtag.length)
                tag.string16(this.randomtag)
                this.send(tag.buffer.slice(0, 8))
                this.send([22, 0, 1, 7, 80, 122, 107, 77, 73, 53, 83])
                this.send([22, 1, 1, 7, 80, 122, 107, 77, 73, 53, 83])
                setInterval(() => {
                    this.ping()
                }, 5000);
                this.spawn()
                default:
            }
        }
    }
    onerror(err) {
        setTimeout(() => {
            this.connect()
        }, 5000);
    };
    spawn() {
        if (this.authed) {
            this.send([10, 0])
            setTimeout(() => {
                this.send([10, 1])
                this.spawn()
            }, 300);
        }
    }
    mouse(x, y) {
        if (this.authed) {
            var tab1 = new DataView(new ArrayBuffer(6))
            tab1.setUint8(0, 30)
            tab1.setUint8(1, 0)
            tab1.setUint16(2, x, true)
            tab1.setUint16(4, y, true)
            this.send(tab1.buffer)
            var tab2 = new DataView(new ArrayBuffer(6))
            tab2.setUint8(0, 30)
            tab2.setUint8(1, 1)
            tab2.setUint16(2,x, true)
            tab2.setUint16(4,y, true)
            this.send(tab2.buffer)
        }
    }
    randomx(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }
    split() {
        this.send([31, 0, 1])
        this.send([31, 1, 1])
    }
    eject() {
        this.send([32, 0])
        this.send([32, 1])
    }
    ping() {
        if (this.authed) {
        this.send([52])
        }
    }
    close() {
        this.socket.close()
    }
    log(msg) {
        console.log(msg);
    }
    send(buf) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN && this.authed) {
            this.socket.send(new Uint8Array(this.ryuten.encrypt(new Uint8Array(buf))))
        }
    }
}
module.exports = bot