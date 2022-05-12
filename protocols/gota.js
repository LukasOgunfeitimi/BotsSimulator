/*
    needs good proxies
*/
const Writer = require('../core/writer')
const WebSocket = require('ws')
const {SocksProxyAgent} = require('socks-proxy-agent');
const botName = 'lukas'
const names = ['test', '23432', '??', 'lmao', 'xD']
class bot {
    constructor(user, proxy) {
        this.socket = null;
        this.user = user
        this.server = user.server
        this.origin = user.origin
        this.ws = user.ws
        this.proxy = proxy;
        this.gotaVersion = 'Gota Web 3.5.1'
        this.name = names[~~(Math.random() * 4)]
        this.connect()

    }
    connect() {
        console.log(`trying: ${this.proxy}`)
        this.socket = new WebSocket(this.server, {
            agent: new SocksProxyAgent(`socks://${this.proxy}`)
        });
        this.socket.onopen = this.onopen.bind(this)
        this.socket.onerror = this.onerror.bind(this)
        this.socket.onmessage = this.onmessage.bind(this)
    }
    onopen() {
        console.log('connected')
        this.captcha().then(() => {
            var init = new Writer(this.gotaVersion.length + 3)
            init.Uint8(255)
            init.Uint8(6)
            init.string8(this.gotaVersion)
            init.Uint8(0)
            this.send(init.buffer)
            this.ping()
            var spawn = new Writer(2 + ((this.name.length + 1) * 2))
            spawn.Uint8(0)
            spawn.string16(this.name)
            spawn.Uint16(0)
            setTimeout(() => {
                this.send(spawn.buffer)
            }, 2000);
            setInterval(() => { this.send(spawn.buffer) }, 1000)
            setInterval(() => { this.ping() }, 30000)
            this.send([104, 100, 0])
        }).catch((err) => console.log(err))

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
    captcha() {
        return new Promise((resolve, reject) => {
            const token = this.user.captchaToken
            if (token === undefined) return reject()
            var buf = new Writer(1 + (token.length + 1))
            buf.Uint8(100)
            buf.string8(token)
            buf.Uint8(0)
            this.send(buf.buffer)
            resolve()
        })
    }
    onmessage(msg) {}
    onerror(err) {};
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
            this.socket.send(new Uint8Array(buf).buffer)
        }
    }
}
module.exports = bot