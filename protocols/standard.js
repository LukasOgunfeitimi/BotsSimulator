const Writer = require('../core/writer')
const WebSocket = require('ws')
const { SocksProxyAgent } = require('socks-proxy-agent');
const botName = 'lukas'
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
class bot {
    constructor(user, proxy) {
        this.socket = null;
        this.server = user.server
        this.origin = user.origin
        this.ws = user.ws
        this.proxy = proxy;
        this.headers = {
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Connection': 'Upgrade',
            'Upgrade': 'websocket',
            'Origin': this.origin,
            'Sec-WebSocket-Extensions': 'permessage-deflate; client_max_window_bits',
            'Sec-WebSocket-Version': '13',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36'
        }
        this.connect()

    }
    connect() {
        console.log(`trying: ${this.proxy}`)
        console.log(this.server)
        if (this.proxy)
            this.socket = new WebSocket(this.server, {
                headers: this.headers,
                agent: new SocksProxyAgent(`socks://${this.proxy}`)
            });
        else
            this.socket = new WebSocket(this.server, {
                headers: this.headers,
            });
        this.socket.onopen = this.onopen.bind(this)
        this.socket.onerror = this.onerror.bind(this)
        this.socket.onmessage = this.onmessage.bind(this)
    }
    onopen() {
        console.log(`connected`)
        this.ws.send(JSON.stringify({
            type: 'connection',
            status: 'open'
        }))
        switch (this.origin) {
            case "https://agarr.live/":
                this.sendVersions(5, 123456789)
                var buffer = new Writer((botName.length << 1) + 1)
                buffer.Uint8(0)
                buffer.string8(botName, true)
                setInterval(() => {
                    this.send(buffer.buffer)
                }, 1000);
                break
            case "http://sakuragame.starfree.jp":
                this.sendVersions(5, 1)
                var buffer = new Writer((botName.length << 1) + 9)
                buffer.Uint8(0)
                buffer.Uint16(0)
                buffer.Uint16(botName.length)
                buffer.string16(botName)
                buffer.Uint16(0)
                buffer.Uint16(0)
                setInterval(() => {
                    this.send(new Uint8Array([0, 0, 0, 8, 0, 112, 0, 114, 0, 111, 0, 102, 0, 105, 0, 108, 0, 101, 0, 49, 0, 0, 0, 0, 0]))
                }, (Math.random() * 1500) + 1000);
                break
            case "http://de.agar.bio/":
                this.sendVersions(1, 1332175218)
                var buffer = new Writer((botName.length << 1) + 1)
                buffer.Uint8(0)
                buffer.string8(botName, true)
                setInterval(() => {
                    this.send(buffer.buffer)
                }, 1000);
                break
            case "https://imsolo.pro":
                this.sendVersions(6, 1)
                var buffer = new Writer(botName.length + 2)
                buffer.Uint8(0)
                buffer.string8(botName)
                buffer.Uint8(0)
                setTimeout(() => {
                    setInterval(() => {
                        this.send(buffer.buffer)
                    }, 500);
                }, 2000);
                break
            case "http://splitex.io":
                this.sendVersions(6, 1)
                var buffer = new Writer(botName.length + 2)
                buffer.Uint8(0)
                buffer.string8(botName)
                buffer.Uint8(0)
                setTimeout(() => {
                    setInterval(() => {
                        this.send(buffer.buffer)
                    }, 500);
                }, 2000);
                break
            case "https://agar.io":
                this.sendVersions(369098752, 628686848)
                var buffer = new Writer(botName.length + 4)
                buffer.Uint8(0)
                buffer.string8(botName)
                buffer.Uint8(0)
                buffer.Uint8(48)
                buffer.Uint8(0)
                setInterval(() => {
                    this.send(buffer.buffer)
                }, 2000);
                break
            case "https://myagar.pro":
                this.sendVersions(5, 154669603)
                var int80 = new Writer(5)
                int80.Uint8(80)
                int80.Uint32(154669603)
                this.send(int80.buffer)
                var buffer = new Writer((botName.length << 1) + 1)
                buffer.Uint8(0)
                buffer.string8(botName, true)
                setInterval(() => {
                    this.send(buffer.buffer)
                }, 2000);
                break
            case 'https://bublex.io':
                var buf = new Writer(4 + 1)
                buf.Uint8(3)
                buf.string8(Math.floor(1000 + Math.random() * 9000))
                setInterval(() => {
                    this.send([4, 123, 34, 110, 97, 109, 101, 34, 58, 34, 34, 44, 34, 116, 97, 103, 34, 58, 34, 34, 44, 34, 115, 107, 105, 110, 67, 111, 100, 101, 34, 58, 34, 34, 44, 34, 104, 97, 116, 67, 111, 100, 101, 34, 58, 34, 34, 125])
                }, 1000);
                setInterval(() => {
                    this.send([7])
                    //this.send(buf.buffer)
                }, 500);
                break
        }
        this.socket.on('close', (msg) => {
            this.ws.send(JSON.stringify({
                type: 'connection',
                status: 'close'
            }))
            console.log('disconnected')
        })
    }
    sendVersions(proto, client) {
        var pVersion = new Writer(5)
        pVersion.Uint8(254)
        pVersion.Uint32(proto)
        this.send(pVersion.buffer)
        var cVersion = new Writer(5)
        cVersion.Uint8(255)
        cVersion.Uint32(client)
        this.send(cVersion.buffer)
    }
    mouse(x, y) {
        var tab = new DataView(new ArrayBuffer(13))
        tab.setUint8(0, 16)
        tab.setInt32(1, x, true)
        tab.setInt32(5, y, true)
        tab.setUint32(9, 0, true)
        this.send(new Uint8Array(tab.buffer))
    }
    onmessage(msg) {
        //console.log(msg.data)
    }
    onerror(err) {
        console.log('err')
    };
    split() {
        this.send([17])
        this.send([22])
    }
    eject() {
        this.send([21])
    }
    close() {
        this.socket.close()
    }
    log(msg) {
        console.log(msg);
    }
    send(buf) {
        if (this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(buf)
        }
    }
}
module.exports = bot