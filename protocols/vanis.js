const fetch = require('node-fetch')
const WebSocket = require('ws')
const {SocksProxyAgent} = require('socks-proxy-agent')
class bot {
    constructor(user, proxy) {
        this.socket = null;
        this.server = user.server
        this.origin = user.origin
        this.ws = user.ws
        this.proxy = new SocksProxyAgent(`socks://${proxy}`);
        this.socketheaders = {
            "Connection": "Upgrade",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
            "Upgrade": " websocket",
            "Origin": "https://vanis.io",
            "Sec-WebSocket-Version": "13",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
            "Sec-WebSocket-Extensions": "permessage-deflate; client_max_window_bits",
            "Sec-WebSocket-Protocol": "tFoL46WDlZuRja7W6qCl"
        }
        this.connect()
    }
    connect() {
        this.socket = new WebSocket(this.server, "tFoL46WDlZuRja7W6qCl", {
            headers: this.socketheaders,
            agent: this.proxy
        })
        this.socket.binaryType = 'arraybuffer'
        this.socket.onopen = this.onopen.bind(this)
        this.socket.onerror = this.onerror.bind(this)
        this.socket.onmessage = this.onmessage.bind(this)
    }
    onopen() {
        setInterval(() => {
            this.send(new Uint8Array([3]))
        }, 3000);
        console.log(`connected`.green)
        this.ws.send(JSON.stringify({
            type: 'connection',
            status: 'open'
        }))
        this.socket.on('close', (msg) => {
            this.ws.send(JSON.stringify({
                type: 'connection',
                status: 'close'
            }))
            console.log('disconnected'.red)
        })
    }
    onmessage(msg) {
        var buffer = new DataView(msg.data)
        switch (buffer.getUint8(0)) {
            case 1:
                this.send(new Uint8Array([3]))
                this.send(new Uint8Array([21, 0]))
                this.send(new Uint8Array([1, 116, 101, 115, 116, 49, 50, 52, 55, 56, 57, 56, 56, 0, 104, 116, 116, 112, 115, 58, 47, 47, 115, 107, 105, 110, 115, 46, 118, 97, 110, 105, 115, 46, 105, 111, 47, 115, 47, 118, 97, 110, 105, 115, 49, 0, 0]))
                break
            case 2:
                var buf = [5, 18]
                var key = this.rotateKey(new Uint8Array(buffer.buffer, 1))
                for (var i = 0; i < key.length; i++) buf.push(key[i])
                this.send(buf)
                break
            case 20:
                setTimeout(() => {
                    this.send(new Uint8Array([1, 116, 101, 115, 116, 49, 50, 52, 55, 56, 57, 56, 56, 0, 104, 116, 116, 112, 115, 58, 47, 47, 115, 107, 105, 110, 115, 46, 118, 97, 110, 105, 115, 46, 105, 111, 47, 115, 47, 118, 97, 110, 105, 115, 49, 0, 0]))
                }, 3000 + (Math.random() * 1500));
                break
            default:
                console.log(Buffer.from(msg.data))
        }
    }
    rotateKey(key) { // credits to Aero
        const hash = [55, 3, 170, 32, 65, 27, 9, 128];
        const result = [];
        let last, current,
            mask = (current = key[0]) + 4 & 7;
        result.push(last = hash[0] ^ (current << mask | current >>> 8 - mask) & 0xff);
        for (let i = 1; i < 8; i++) {
            mask = (current = key[i]) + 4 & 7;
            result.push(last = (current << mask | current >>> 8 - mask) & 0xff ^ last ^ hash[i]);
        }
        const seed = ~~((Math.pow(2, 32) - 1) * Math.random());
        result.push((result[0] ^ seed >>> 24) & 0xff)
        result.push((result[1] ^ seed >>> 16) & 0xff)
        result.push((result[2] ^ seed >>> 8) & 0xff)
        result.push((seed ^ result[3]) & 0xff)
        result.push((result[0] ^ 0x1F & -0x20) & 0xff)
        return result;
    }
    onerror() {}
    split() {
        this.send(new Uint8Array([17, 1]))
    }
    eject() {
        this.send(new Uint8Array([21]))
    }
    send(buf) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(buf)
        }
    }
    close() {}
}
module.exports = bot