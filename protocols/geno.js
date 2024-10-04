const WebSocket = require('ws')
const { SocksProxyAgent } = require('socks-proxy-agent');
const { writer } = require('c:/Users/all4l/Documents/XOR/lukas/bin');
class bot {
    constructor(user, proxy, botIndex) {
        this.socket = null;
        this.user = user
        this.server = user.server
        this.origin = user.origin
        this.ws = user.ws
        this.proxy = proxy;
        this.index = 0
        this.botIndex = botIndex
        this.headers = {
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
            'Cache-Control': 'no-cache',
            'Connection': 'Upgrade',
            'Host': 'europe.dual-geno.me',
            'Origin': 'https://dual-geno.me',
            'Pragma': 'no-cache',
            'Sec-WebSocket-Extensions': 'permessage-deflate; client_max_window_bits',
            'Sec-WebSocket-Version': '13',
            'Upgrade': 'websocket',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'
        }
        this.connect()
    }
    connect() {
        if (!this.user.connectState) return
        this.socket = new WebSocket(this.server, {
            agent: this.proxy ? new SocksProxyAgent(`socks://${this.proxy}`) : null,
            headers: this.headers
        })
        this.socket.binaryType = 'arraybuffer'
        this.socket.onopen = this.onopen.bind(this)
        this.socket.onerror = this.onerror.bind(this)
        this.socket.onmessage = this.onmessage.bind(this)
    }
    onopen() {
        console.log('connected')
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
        var names = ['test', '14', 'gg']
        var tag = '..'
        var pin = ''
        var skin = 'https://i.imgur.com/t14KwhZ.png'
        var name = names[Math.floor(Math.random() * names.length)] + ' | ' + String(this.botIndex)

        var init = new writer()
        init.int(8, 14)
        this.send(init.arraybuffer)

        var tagBuffer = new writer()
        tagBuffer.int(8, 4)
        tagBuffer.int(8, tag.length)
        tagBuffer.string(16, tag)
        this.send(tagBuffer.arraybuffer)

        var pinBuffer = new writer()
        pinBuffer.int(8, 5)
        pinBuffer.int(8, pin.length)
        pinBuffer.string(16, pin)
        this.send(pinBuffer.arraybuffer)

        var nameBuffer = new writer()
        nameBuffer.int(8, 6)
        nameBuffer.int(8, name.length)
        nameBuffer.string(16, name)
        this.send(nameBuffer.arraybuffer)

        var skinBuffer = new writer()
        skinBuffer.int(8, 7)
        skinBuffer.int(8, skin.length)
        skinBuffer.string(8, skin)
        skinBuffer.int(8, skin.length)
        skinBuffer.string(8, skin)
        this.send(skinBuffer.arraybuffer)

        //this.chat()

        this.ping()

        this.send([1])
        setTimeout(() => {
            this.spawn()
        }, 500);
    }
    onmessage(message) {
    }
    onerror() {
        setTimeout(() => this.connect(), 5000)
    };
    spawn() {
        this.send(new Uint8Array([1]).buffer)
        this.send(new Uint8Array([0, 2]).buffer) 
        var playBuffer = new writer()
        playBuffer.int(8, 0)
        playBuffer.int(8, 1)
        this.send(playBuffer.arraybuffer)
        var playBuffer2 = new writer()
        playBuffer2.int(8, 0)
        playBuffer2.int(8, 2)
        this.send(playBuffer2.arraybuffer)
        setTimeout(() => this.spawn(), 100)      
    }
    mouse(x, y) {
        var mouse = new writer()
        mouse.int(8, 10)
        mouse.int(8, 1)
        mouse.int(16, x)
        mouse.int(16, y)
        this.send(mouse.arraybuffer)
        var mouse2 = new writer()
        mouse2.int(8, 10)
        mouse2.int(8, 2)
        mouse2.int(16, x)
        mouse2.int(16, y)
        this.send(mouse2.arraybuffer)   
    }
    split() {
        this.send([9, 1])
        this.send([9, 2])
    }
    eject() {
        this.send([8, 1])
        this.send([8, 2])
    }
    ping() {
        var pingBuffer = new writer()
        pingBuffer.int(8, 13)
        this.send(pingBuffer.arraybuffer)
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
            this.socket.send(buf)
        }
    }
}
module.exports = bot
