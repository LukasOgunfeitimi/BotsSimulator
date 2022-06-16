/*
    a lot of integrity checks
    bots dont last long
    https://media.discordapp.net/attachments/833119812812144710/974395499526361218/unknown.png
*/
const WebSocket = require('ws')
const { SocksProxyAgent } = require('socks-proxy-agent');
const Writer = require('../core/writer')

class Ryuten { // WASM to JS port (key encryption)
    constructor() {
      this.keys = []
    } 
    encrypt(data) {
      var encData = []
      for (var i = 0; i < data.length; i++)
        encData[i] = this.invertKey(data[i] ^ this.keys[i]) // 0x0A43A
      this.rotateKeys()
      return encData
    }
    rotateKeys() {
      for (var i = 0; i < this.keys.length; i++)
        this.keys[i] = this.invertKey((this.keys[i] * -17) & 0xFF) // 0x0A408
    }
    invertKey(key) {
      return (key << 4 | key >> 4) & 0xFF // 0x07CB6
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
        this.tag = user.RyutenInfo.tag || '555'
        this.pin = user.RyutenInfo.pin || ''
        this.ryuten = new Ryuten()
        this.lastmessage = null
        this.connect()
    }
    connect() {
        if (!this.user.connectState) return
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
    }
    onmessage(message) {
        if (!this.authed) {
            this.ryuten.setKeys(new Uint8Array(message.data))
            this.authed = 1
        } else {
            var msg = new DataView(message.data)
            switch(msg.getUint8(0)) {
                case 10:
                    if (this.user.authedRyutenBots > 5 || !this.user.connectedState) {
                        this.close()
                    } else {
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
                        this.send([42, 0])
                        var tag = new Writer(2 + 2 * (this.tag.length))
                        tag.Uint8(21)
                        tag.Uint8(this.tag.length)
                        tag.string16(this.tag)
                        this.send(tag.buffer)
                        var pin = new Writer(2 + 2 * (this.pin.length))
                        pin.Uint8(23)
                        pin.Uint8(this.pin.length)
                        pin.string16(this.pin)
                        this.send(pin.buffer)
                        setInterval(() => {
                            this.ping()
                        }, 5000);
                        this.spawn()
                        setInterval(() => {
                            this.split()
                        }, 10);
                    }
                    break
                case 20: //skins
                    break
                case 21: //cells
                    break
                case 22: //
                    break
                case 23: //detected bot (i think)
                    break
                case 25: //dead
                    break
                case 32: //ping
                    break 
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
        this.send([10, 0])
        setTimeout(() => {
            this.send([10, 1])
            this.spawn()
        }, 100);
    }
    mouse(x, y) {
        var tab = new DataView(new ArrayBuffer(6))
        tab.setUint8(0, 30)
        tab.setUint16(2, x, true)
        tab.setUint16(4, y, true)
        this.send(tab.buffer)
        tab.setUint8(1, 1)
        this.send(tab.buffer)
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
        this.send([52])
    }
    close() {
        this.socket.close()
        this.authed = 0
    }
    send(buf) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN && this.authed) {  
            this.socket.send(new Uint8Array(this.ryuten.encrypt(new Uint8Array(buf))))
        }
    }
}
module.exports = bot
