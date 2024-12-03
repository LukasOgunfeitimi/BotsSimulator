const Writer = require('../core/senpa/writer')
const WebSocket = require('ws')
const request = require('request')
const fetch = require('node-fetch');
const {SocksProxyAgent} = require('socks-proxy-agent');

class key {
    constructor() {}
    static async init() {
        const a = await fetch("https://unami.delt.io/api/send", {
            "headers": {
                "accept": "*/*",
                "accept-encoding": "gzip, deflate, br, zstd",
                "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
                "content-length": "202",
                "content-type": "application/json",
                "origin": "https://agar.io",
                "priority": "u=1, i",
                "referer": "https://agar.io/",
                "sec-ch-ua": "\"Chromium\";v=\"130\", \"Google Chrome\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36"
            },
            "referrer": "https://agar.io/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": JSON.stringify({
                "type": "event",
                "payload": {
                    "website": "8189e496-6ce6-44f1-8aef-35d175c6f818",
                    "hostname": "agar.io",
                    "screen": "1489x838",
                    "language": "en-GB",
                    "title": "Delta Agario",
                    "url": "/",
                    "referrer": "https://agar.io/"
                },
            }),
            "method": "POST",
            "mode": "cors",
            "credentials": "omit"
        })
        return await a.text();
    }
    static async play(currentMami) {
        const a = await fetch("https://unami.delt.io/api/send", {
            "headers": {
                "x-umami-cache": currentMami,
                "accept": "*/*",
                "accept-encoding": "gzip, deflate, br, zstd",
                "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
                "content-length": "202",
                "content-type": "application/json",
                "origin": "https://agar.io",
                "priority": "u=1, i",
                "referer": "https://agar.io/",
                "sec-ch-ua": "\"Chromium\";v=\"130\", \"Google Chrome\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36"
            },
            "referrer": "https://agar.io/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": JSON.stringify({
                "type": "event",
                "payload": {
                    "website": "8189e496-6ce6-44f1-8aef-35d175c6f818",
                    "hostname": "agar.io",
                    "screen": "1489x838",
                    "language": "en-GB",
                    "title": "Delta Agario",
                    "url": "/",
                    "referrer": "https://agar.io/",
                    "name": "click-play"
                }
            }),
            "method": "POST",
            "mode": "cors",
            "credentials": "omit"
        });
        return await a.text();
    }
}
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
        this.name = "lukas";
        this.ip = 'wss://party.delt.io/'
        this.cacheKey;
        this.init()
    }
    init(proxy) {
        this.ws = new WebSocket(this.ip, "b5aa361feb1d9cf66805e76dbb4db7f6", {
            headers: {
                "Host": "party.delt.io",
                "Connection": "Upgrade",
                "Pragma": "no-cache",
                "Cache-Control": "no-cache",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
                "Upgrade": "websocket",
                "Origin": "https://agar.io",
                "Sec-WebSocket-Version": "13",
                "Accept-Encoding": "gzip, deflate, br, zstd",
                "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
                "Sec-WebSocket-Extensions": "permessage-deflate; client_max_window_bits",
            }
        })
        this.ws.binaryType = 'arraybuffer'
        this.ws.onopen = this.onopen.bind(this)
        this.ws.onmessage = this.onmessage.bind(this)
        this.ws.onclose = this.onclose.bind(this)
        this.ws.onerror = this.onerror.bind(this)
    }
    async onopen(c) {
        //this.getCacheKey();
        this.mami = await key.init(); 
        console.log('c')
        console.log(this.mami)
        this.sendClientProtocol();
        this.sendClientVersion();
        this.sendPing();
        this.sendFlag();
        
    }
onmessage(msg) {
    const message = new DataView(msg.data)
    let offset = 0
    const opcode = message.getUint8(offset++)
    switch (opcode) {
            case 62:
                const key = message.getUint32(offset, true);
                if (this.tabs[1] === 0) this.tabs[1] = key;
                else this.tabs[2] = key;
                break;
            case 64: // protocol found;
                break;
            case 7:
                console.log("7");
                console.log(message.buffer.byteLength);
                setInterval(() => {
                    this.sendPing()
                    this.spawn();
                }, 3000);
                setInterval(() => {
                    this.mouse();
                }, 40);
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
    async spawn() {
        const writer = new Writer();
        writer.writeUInt8(0);
        writer.writeUInt16(this.tabs[1]);
        writer.writeString8(this.name)
        writer.writeUInt8(0);
        this.send(writer.buffer);
        this.mami = await key.play(this.mami);
        console.log(this.mami);
        //console.log(writer.buffer.byteLength);
    }
    mouse(x, y) {
        const writer = new Writer();
        writer.writeUInt8(16),
        writer.writeInt32(10829),
        writer.writeInt32(-41),
        writer.writeUInt16(this.tabs[1]), 
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
        //console.log(msg.byteLength)
        this.ws.send(msg)
    }
}
}
new bot()
