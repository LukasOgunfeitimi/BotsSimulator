const WebSocket = require('ws')
const {SocksProxyAgent} = require('socks-proxy-agent');
class bot {
    constructor(user, proxy) {
        this.socket = null;
        this.user = user
        this.server = user.server
        this.origin = user.origin
        this.ws = user.ws
        this.proxy = proxy;
        this.authed = 0
        this.connect()

    }
    connect() {
        //console.log(`trying: ${this.proxy}`)
        this.socket = new WebSocket(this.server, {
            agent: new SocksProxyAgent(`socks://${this.proxy}`),
            headers: {
                "Accept-Encoding": "gzip, deflate",
                "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
                "Cache-Control": "no-cache",
                "Connection": " Upgrade",
                "Origin": "http://cirlzgame.tk",
                "Pragma": "no-cache",
                "Sec-WebSocket-Extensions": " permessage-deflate; client_max_window_bits",
                "Sec-WebSocket-Version": "13",
                "Upgrade": "websocket",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36"
            }
        });
        this.socket.binaryType = 'arraybuffer'
        this.socket.onopen = this.onopen.bind(this)
        this.socket.onerror = this.onerror.bind(this)
        this.socket.onmessage = this.onmessage.bind(this)
    }
    onopen() {
        console.log('connected')
        var init = new DataView(new ArrayBuffer(15))
        init.setUint8(0, 119)
        init.setUint16(1, 128,true)
        init.setUint16(3, 674,true)
        init.setUint8(6,  Math.floor(Math.random() * 2), true)
        init.setUint8(8, 1 + ~~(Math.random() * 1e9), true)
        this.send(init)
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
    }
    onmessage(message) {
        var msg = new DataView(message.data)
        switch(msg.getUint8(0)) {
            case 86:
                var xorKey = msg.getUint32(1, true)
                var shiftInt = msg.getUint8(8, true)
                var xorHash = msg.getUint32(10, true)
                var auth = new DataView(new ArrayBuffer(15))
                auth.setUint8(0, 247)
                auth.setUint32(1, this.shiftKey(xorKey, xorHash, shiftInt))
                auth.setUint32(8, xorHash * 2)
                this.send(auth)
                this.authed = 1
                break
            default:
               // console.log(msg.getUint8(0))
        }
    }
    onerror(err) {
        setTimeout(() => {
            this.connect()
        }, 5000);
    };
    spawn() {
        if (this.authed) {
            console.log('spawned')
            var spawn = new DataView(new ArrayBuffer(2))
            spawn.setUint8(0, 0)
            spawn.setUint8(1, 0)
            this.send(spawn)
        }
    }
    mouse(x, y) {
        if (this.authed) {
            var mouse = new DataView(new ArrayBuffer(13))
            mouse.setUint8(0, 16)
            mouse.setUint32(1, x, true)
            mouse.setUint32(5, y, true)
            mouse.setUint32(9, 0)
            this.send(mouse)
        }
    }
    shiftKey(xorKey, xorHash, shiftInt) {
        return ((((((999045 - xorHash) + (((651 - xorHash) + ((xorKey + 255) - xorHash)) + -384) | 0) - (shiftInt = 43)) - -354) - ((((Math.imul((xorHash = shiftInt >> 1), shiftInt) >> xorHash >> (shiftInt + -3)) << 16) + 1310720) >> 16)) - 48) - 65
    }
    split() {
        this.send([17])
    }
    eject() {
        this.send([3])
    }
    ping() {
        this.send([71])
    }
    close() {
        this.socket.close()
    }
    log(msg) {
        console.log(msg);
    }
    send(buf) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(buf)
        }
    }
}
module.exports = bot