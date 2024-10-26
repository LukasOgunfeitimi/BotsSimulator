const Writer = require('../core/senpa/writer')
const WebSocket = require('ws')
const request = require('request')
const {SocksProxyAgent} = require('socks-proxy-agent');
class bot {
    constructor(user, proxy) {
        //this.socket = null;
        //this.user = user
        //this.server = user.server
        //this.origin = user.origin
        //this.ws = user.ws
        //this.proxy = proxy;

        this.client_protocol = 28;
        this.client_version = 123456;
        this.pingId = 0;
        this.tabs = {
            1: 0,
            2: 0
        }
        this.name = "Anonym #0";
        this.ip = 'wss://exp.delt.io/'
        this.init()
    }
    init(proxy) {
        this.ws = new WebSocket(this.ip, "b5aa361feb1d9cf66805e76dbb4db7f6")
        this.ws.binaryType = 'arraybuffer'
        this.ws.onopen = this.onopen.bind(this)
        this.ws.onmessage = this.onmessage.bind(this)
        this.ws.onclose = this.onclose.bind(this)
        this.ws.onerror = this.onerror.bind(this)
    }
    onopen(c) {
        console.log('c')
        this.sendClientProtocol();
        this.sendClientVersion();
        this.sendPing();
        this.sendFlag();
        
     }
   onmessage(msg) {
       const message = new DataView(msg.data)
       let offset = 0
       const opcode = message.getUint8(offset++)
       //console.log(opcode + " " + message.byteLength);
       switch (opcode) {
            case 62:
                const key = message.getUint32(offset, true);
                if (this.tabs[1] === 0) this.tabs[1] = key;
                else this.tabs[2] = key;
                
                offset += 4;
                console.log(key);
                break;
            case 64:
                console.log("protocol found");
                this.sendPing();
                setInterval(() => {
                    this.sendPing()
                    this.mouse();
                    this.spawn();
                }, 3000);
                break;
            case 251:
                this.decryptPayload(message);
                break;
       }
   }
   decryptPayload(buffer) {
        let payload = ''
        for (let i = 1; i < buffer.byteLength; i++)
            payload += String.fromCharCode(128 ^ buffer.getUint8(i));

        payload = payload.replaceAll(' ', '');
        let key = payload.match(/\d+(?=\^)|(?<=\^)\d+/g).reduce((total, key) => total ^= key, 0) 

        const writer = new Writer();
        writer.writeUInt8(252);
        writer.writeUInt16(1);
        let result = JSON.stringify({ result: key });

        for (var i = 0; i < result.length - 2; i++)
            writer.writeUInt8(128 ^ result.charCodeAt(i));

        writer.writeUInt8(result.charCodeAt(i++));
        writer.writeUInt8(result.charCodeAt(i++));
        writer.writeUInt8(0);
        this.send(writer.buffer);
   }
   sendClientProtocol() {
        const writer = new Writer();
        writer.writeUInt8(126)
        writer.writeUInt32(this.client_protocol)
        this.send(writer.buffer)
   }
   sendClientVersion() {
        const writer = new Writer();
        writer.writeUInt8(255)
        writer.writeUInt32(this.client_version) 
        this.send(writer.buffer)
    }
    sendFlag() {
        const writer = new Writer();
        writer.writeUInt8(134)
        writer.writeUInt8(0) 
        this.send(writer.buffer)
    }
    sendPing() {
        this.pingTime = Date.now();
        const writer = new Writer();
        writer.writeUInt8(226),
        writer.writeUInt16(this.pingId = this.pingId++ % 65536),
        this.send(writer.buffer)
    }
    spawn() {
        const writer = new Writer();
        writer.writeUInt8(0);
        writer.writeUInt16(this.tabs[0]);
        writer.writeString8(this.name)
        writer.writeUInt8(0);
        this.send(writer.buffer);
    }
    mouse(x, y) {
        const writer = new Writer();
        writer.writeUInt8(16),
        writer.writeInt32(10829),
        writer.writeInt32(-41),
        writer.writeUInt16(this.tabs[0]), 
        this.send(writer.buffer)
    }
   onclose(d) {
       console.log('d')
   }
   onerror(err) {
       console.log(err)
   }
   send(msg){
    if (this.ws && this.ws.readyState == 1) {
        this.ws.send(msg)
    }
   }
}

new bot()
