const WebSocket = require('ws')
const writer = require('./writer.js')
const reader = require('./reader.js')
const { SocksProxyAgent } = require('socks-proxy-agent');
const { HttpProxyAgent } = require('http-proxy-agent');
const { HttpsProxyAgent } = require('https-proxy-agent');
const UserAgent = require('user-agents');

function randomLetters(length) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let out = '';

    for (let i = 0; i < length; i++) {
        out += letters[Math.floor(Math.random() * letters.length)];
    }

    return out;
}
class bot {
    constructor(user, proxy, proxyType, botIndex) {
        this.socket = null;
        this.user = user
        this.server = user.server
        this.origin = user.origin
        this.ws = user.ws
        this.proxy = proxy;
        this.proxyType = proxyType;
        this.index = 0
        this.botIndex = botIndex
        this.xorByte = 0
        this.headers = {
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
            'Cache-Control': 'no-cache',
            'Connection': 'Upgrade',
            'Host': 'astrio.io',
            'Origin': 'https://astrio.io',
            'Pragma': 'no-cache',
            'Sec-WebSocket-Extensions': 'permessage-deflate; client_max_window_bits',
            'Sec-WebSocket-Version': '13',
            'Upgrade': 'websocket',
            'User-Agent': new UserAgent().toString()
        }
        this.connect()
    }
    connect() {
        this.xorByte = 0;
        let agent = null;
        if (this.proxy) {
            const proxyUrl = /^[a-z]+:\/\//i.test(this.proxy) ? this.proxy : `${this.proxyType || 'socks'}://${this.proxy}`;
            if (proxyUrl.startsWith('http://') || proxyUrl.startsWith('https://')) {
                agent = this.server.startsWith('wss://') ? new HttpsProxyAgent(proxyUrl) : new HttpProxyAgent(proxyUrl);
            } else {
                agent = new SocksProxyAgent(proxyUrl);
            }
        }
        this.socket = new WebSocket(this.server, {
            agent,
            headers: this.headers
        })
        this.socket.binaryType = 'arraybuffer'
        this.socket.onopen = this.onopen.bind(this)
        this.socket.onerror = this.onerror.bind(this)
        this.socket.onmessage = this.onmessage.bind(this)
    }
    onopen() {
        this.ws.send(JSON.stringify({
            type: 'connection',
            status: 'open'
        }))
        this.socket.on('close', (msg) => {
            this.connect()
            this.ws.send(JSON.stringify({
                type: 'connection',
                status: 'close'
            }))
            console.log('disconnected')
        })
        console.log('connected')
        this.init()

    }
    room() {
        var room = new writer()
        room.init()
        room.writeUInt8(20)
        room.writeUInt8(4)
        //room.writeString16(randomLetters(3))
        //room.writeString16(randomLetters(2))
        room.writeString16("Acyd")
        room.writeString16("111")
        this.send(room.buffer)
    }
    nick() {
        var nick = new writer()
        nick.init()
        nick.writeUInt8(10)
        nick.writeString16("Acydwarp")
        this.send(nick.buffer)
    }
    init() {
        this.nick();
        this.room();
        // setInterval(() => {
        this.spawn()
        this.ping();
        // }, 1000);
        setInterval(() => {
            this.tab()
        }, 50);
    }

    tab() {
        setTimeout(() => {
            const tab = new writer()
            tab.init()
            tab.writeUInt8(100)
            tab.writeUInt8(1)
            this.send(tab.buffer)
            const tab2 = new writer()
            tab2.init()
            tab2.writeUInt8(100)
            tab2.writeUInt8(2)
            this.send(tab2.buffer)
        }, 1000);
    }

    onmessage({ data }) {
        const message = new reader(data);
        const opcode = message.uint8()
        //console.log(opcode)
        switch (opcode) {
            case 50:
            case 100:
            case 130:
            case 90:
            case 30:
                break;
            default:
            //  console.log(opcode)
        }
        switch (opcode) {
            case 160: {
                const a = message.uint8()
                const b = message.uint8()
                this.challengeAnswer(a + b)
                break
            }
            case 222: {
                const enabled = message.uint8()
                if (!enabled) {
                    this.xorByte = 0
                    break
                }
                const seed = message.uint32()
                const response = ((seed ^ 0x5f3759df) >>> 1) >>> 0
                this.authResponse(response)
                this.xorByte = (response & 0xff) | 1
                break
            }
            case 120: {
                // this.send([32, 0])
                // setTimeout(() => {
                //     this.spawn();
                // }, 500);
                // break;
            }
        }
    }
    authResponse(response) {
        const auth = new writer()
        auth.init()
        auth.writeUInt8(222)
        auth.writeUInt32(response)
        this.send(auth.buffer)
    }
    challengeAnswer(answer) {
        const challenge = new writer()
        challenge.init()
        challenge.writeUInt8(161)
        challenge.writeUInt8(Math.min(255, Math.max(0, answer)))
        this.send(challenge.buffer)
    }
    onerror(err) {
        //  console.log(err)
        setTimeout(() => this.connect(), 1000)
    }
    spawn() {
        const spawn = new writer()
        spawn.init()
        spawn.writeUInt8(30)
        spawn.writeUInt16(24623)
        spawn.writeUInt16(42149)
        spawn.writeUInt8(0)
        this.send(spawn.buffer)
        this.send([32, 1])
        this.send([2, 87, 7, 255])
    }
    mouse(x, y) {
        const mouse = new writer();
        mouse.init()
        mouse.writeUInt8(60);
        mouse.writeUInt8(1);
        mouse.writeUInt16(x);
        mouse.writeUInt16(y);
        mouse.writeUInt8(0);
        this.send(mouse.buffer)
        const mouse2 = new writer();
        mouse2.init()
        mouse2.writeUInt8(60);
        mouse2.writeUInt8(2);
        mouse2.writeUInt16(x);
        mouse2.writeUInt16(y);
        mouse2.writeUInt8(0);
        this.send(mouse2.buffer)
    }
    split() {
        for (const tab of [1, 2]) {
            const split = new writer()
            split.init()
            split.writeUInt8(50)
            split.writeUInt8(tab)
            split.writeUInt8(1)
            this.send(split.buffer)
        }
    }
    eject() {
        for (const tab of [1, 2]) {
            const eject = new writer()
            eject.init()
            eject.writeUInt8(40)
            eject.writeUInt8(tab)
            this.send(eject.buffer)
        }
    }
    ping() {
        const ping = new writer()
        ping.init()
        ping.writeUInt8(0x50)
        this.send(ping.buffer)
        setTimeout(() => this.ping(), 5000)
    }
    chat() {
        var chat = 'i dont like negros ' + String(this.index++ + this.index)
        var chatBuffer = new writer()
        chatBuffer.int(8, 11)
        chatBuffer.int(8, 1)
        chatBuffer.int(8, 0)
        chatBuffer.int(8, chat.length)
        chatBuffer.string(16, chat)
        this.send(chatBuffer.arraybuffer)
        setTimeout(() => this.chat(), 1500)
    }
    close() {
        this.socket.close()
    }
    send(buf) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            if (this.xorByte) {
                buf = buf.slice(0)
                new Uint8Array(buf)[0] ^= this.xorByte
            }
            this.socket.send(buf)
        }
    }
}

module.exports = bot
