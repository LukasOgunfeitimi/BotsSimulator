const WebSocket = require('ws')

const { SocksProxyAgent } = require('socks-proxy-agent')
const { HttpProxyAgent } = require('http-proxy-agent')
const ProxyAgent = require("proxy-agent")

const SenpaWasmInstance = require('../core/senpa/auth.js')

const Reader = require('../core/senpa/reader.js')
const writer = require('../core/senpa/writer.js')

const request = require("request")

class bot {
    constructor(user, proxy, headers, id, proxyType) {
        this.socket = null;
        this.user = user
        this.id = id
        this.proxyType = proxyType;
        this.server = user.server //'wss://eu.senpa.io:1200/?password='
        this.origin = user.origin
        this.ws = user.ws
        this.proxy = proxy;
        this.authed = 0
        this.senpa = new SenpaWasmInstance()
        this.botName = "nigger" //this.getRandomName(7) //'test'
        this.botTag = 'xx'//this.getRandomName(3) //'xx'
        this.authToken = 'null'
        this.headers = {
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Connection': 'Upgrade',
            'Upgrade': 'websocket',
            'Origin': 'https://senpa.io',
            'Sec-WebSocket-Extensions': 'permessage-deflate; client_max_window_bits',
            'Sec-WebSocket-Version': '13',
            //'User-Agent': headers
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36'
        }
        this.connect()
    }
    rand(min, max) {
        return Math.random() * (max - min) + min;
    }
    getRandomName(length) {
        let str = ''
        for (let i = 0; i < length; i++) 
            str += String.fromCharCode(this.rand(33, 126))
        return str
    }
    connect() {
        let proxy = null;
        
        if (this.proxyType === "http") proxy = new HttpProxyAgent(`http://${this.proxy}`);
        else if (this.proxyType === "socks4") proxy = new SocksProxyAgent(`socks4://${this.proxy}`);
        else if (this.proxyType === "socks5") proxy = new SocksProxyAgent(`socks5://${this.proxy}`);
        
        this.socket = new WebSocket(this.server, {
            headers: this.headers,
            agent: proxy
        });
        this.socket.onopen = this.onopen.bind(this)
        this.socket.onclose = this.onclose.bind(this)
        this.socket.onerror = this.onerror.bind(this)
        this.socket.onmessage = this.onmessage.bind(this)
        this.socket.binaryType = 'arraybuffer'
    }
    onopen() {
        //console.log("connected")
        const initauth = this.senpa.initializeAuthentication()
        this.send(initauth)
        this.ws.send(JSON.stringify({
            type: 'connection',
            status: 'open'
        }))

        this.socket.on('close', (msg) => {
            this.ws.send(JSON.stringify({
                type: 'connection',
                status: 'close'
            }))
        })
            
    }
    onclose() {
        //console.log('disconnected')
    }
    onmessage(msg) {
        if (this.senpa.encryptionEnabled) { // && this.user.authedRyutenBots < 200) {
            const deDate = this.senpa.decryptMessage(msg.data)
            var reader = new Reader(deDate);
            const opcode = reader.readUInt8(0)
            switch (opcode) {
                case 8: // first
                    const data = new writer(1 + 2 * (this.authToken.length + 1))
                    data.writeUInt8(13)
                    data.writeString16(this.authToken)
                    this.send(this.senpa.encryptMessage(data.buffer));
                    break
                case 0:
                    this.playerInfo()
                    this.ping()
                    break
                case 20: // cells, the auth is disguised here
                    const e = reader
                    const t = e.readUInt16();
                    for (let n = 0; n < t; n++) {
                        const t = e.readUInt32();
                        const n = e.readUInt32();
                    }
                    const n = e.readUInt16();
                    for (let t = 0; t < n; t++) {
                        const t = e.readUInt32();
                        const n = e.readInt32();
                        const s = e.readInt32();
                        const i = e.readUInt16();
                        const r = e.readUInt8();
                        if (r === 0) {
                            const t = e.readUInt16();
                            const n = e.readUInt8();
                            const s = e.readUInt8();
                            const i = e.readUInt8();
                        }
                        if (r === 2) {
                            const t = e.readUInt8();
                            const n = e.readUInt8();
                            const s = e.readUInt8();
                        }
                        if (r === 5) {
                            const t = e.readUInt16();
                            const payload = new Uint8Array(t);
                            for (let s = 0; s < t; s++) {
                                payload[s] = e.readUInt8()
                            }
                            this.senpa.processVMBytecode(payload)
                            const finalKey = this.senpa.CanvasCaptureMediaStreamTrack.contextBufferFactory
                            const finalMessage = this.senpa.completeAuthentication(finalKey)
                            this.authed = 1
                            this.send(this.senpa.encryptMessage(finalMessage))
                            this.spawn()
                            return;
                            if (this.user.authedRyutenBots > 200) {
                                this.close()
                                delete this
                                return
                            } else {
                                this.authed = 1
                                this.send(this.senpa.encryptMessage(finalMessage))
                                this.spawn()
                                //this.split()
                            }
                        }
                    }
                default:
                 // console.log(opcode)
            }
        }  else if (msg.data.byteLength === 65) {
            this.senpa.processDecryptionKeys(msg.data)
        }  else if (msg.data.byteLength === 16) {
            const keys = this.senpa.processServerKeys(msg.data)
            this.send(keys)
        }
    }

    nick() {
      const data = new writer(1 + 2 * (this.botName.length + 1))
      data.writeUInt8(10)
      data.writeString16(this.botName)
      this.send(this.senpa.encryptMessage(data.buffer))
    }
    tag() {
      const data = new writer(1 + 2 * (this.botTag.length + 1))
      data.writeUInt8(11)
      data.writeString16(this.botTag)
      this.send(this.senpa.encryptMessage(data.buffer))
    }
    skin(tab) {
      const data = new writer(2 + 0 + 1)
      data.writeUInt8(21)
      data.writeUInt8(tab)
      data.writeString8("") // add skins later
  
      this.send(this.senpa.encryptMessage(data.buffer))
    }
    playerInfo() {
      this.nick()
      this.tag()
      this.skin(0)
      this.skin(1)
    }
    spawn() {
      this.playerInfo()
      const spawn = this.senpa.encryptMessage(new Uint8Array([0, 0]).buffer)
      const spawn1 = this.senpa.encryptMessage(new Uint8Array([0, 1]).buffer)
      this.send(spawn)
      this.send(spawn1)
      setTimeout(() => this.spawn(), 1e3)
    }
    split() {
        if (!this.senpa.encryptionEnabled) return
        var tab = new DataView(new ArrayBuffer(6))
        tab.setUint8(0, 22)
        tab.setUint8(2, 1)
        this.send(this.senpa.encryptMessage(tab.buffer))
        tab.setUint8(1,1)
        this.send(this.senpa.encryptMessage(tab.buffer))
    }
    eject() {
        return;
    }
    mouse(x, y) {
        if (!this.senpa.encryptionEnabled) return
        const mouse = new DataView(new ArrayBuffer(11))
        mouse.setUint8(0, 20)
        //mouse.setInt32(3, (x + this.rand(-200, 200)) | 0, true)
        //mouse.setInt32(7, (y + this.rand(-200, 200)) | 0, true)
        mouse.setInt32(3, x | 0, true)
        mouse.setInt32(7, y | 0, true)
        this.send(this.senpa.encryptMessage(mouse.buffer))
        mouse.setUint8(2, 1)
        this.send(this.senpa.encryptMessage(mouse.buffer))
    }
    ping() {
      this.send(this.senpa.encryptMessage(new Uint8Array([30]).buffer))
      setTimeout(() => this.ping(), 1e3)
    }
    onerror(err) {
       //console.log(err)
    };

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
//new bot(undefined, undefined, undefined, 1)
//new bot(undefined, undefined, undefined, 2)
module.exports = bot;