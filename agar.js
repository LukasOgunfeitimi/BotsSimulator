
/*const WebSocket = require('ws');
const request = require('request');
const { SocksProxyAgent } = require('socks-proxy-agent');
const EventSource = require('eventsource');
const alpha = 'abcdefghijklmnopqrstuvwxyz'
var dfe = 'qff9x'
alpha.charCodeAt = function (b) {
    "qff9x" != dfe && (dfe = "qff9x");
    return 0
}
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
*/
class bot {
    constructor() {
        this.protocolKey = 0
        this.clientKey = 0
        //wss://live-arena-1lvknag.agar.io/?party_id=QLH8VE
        //this.ip = 'wss://live-arena-3bcpkm.agar.io/?party_id=229S24'
        this.ip = 'wss://live-arena-1lvknag.agar.io/?party_id=4G6BSC'
        this.ipd = 'wss://live-arena-1lvknag.agar.io:443?party_id=4G6BSC'
        this.init()
    }
    init(proxy) {
        //this.ws = new WebSocket('ws://157.90.131.252:4701/',['7, 3, WaWdft, eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYXB0Y2hhIjoiMDNBR2RCcTI2Yk44X1YzWms2VEZSZGJYR3YtR2d6a2I1OTNFcTNlX3FURExNNUNCZU5XVTdrUzBiT25yNENDQnk2SFZRckE3NHd0cjlTTlhLemRXbFJkZXd2YnQxV0lQVkNNOXVUS0FpTjVXMHVoT1RnWTRXbEU3MkpfY0g4dG1uV1JTQi1Kcldrbi10NG9LeFRBaHV3WGc4MFJINUhscElNZENkaW12NGRMMHNTcy1fNldpdE9GZ3FURUJlVHUxZjBNX1hnekF1eDJNeFZLLXQ5UWVxSjhDWE93R2ZtU2U1NDF3VGQtRFk2VWZQSjdkam1jQzgxTG1YMjdfZHgwbTNuWGhTTXcwdmxlLTNJS0VRQkZfVUdERC1JRDNEb0dyZ053QW1lU3Y3N0htdms0RVlYemlqWjBSd2lrTjhxUkt0S19EY3hHaHhUTDM3MkVpTFk4VTJiZjdCYVJwVUVEZWVRVmNtUlpkWkxxT1lNdTNHX2VxcF83TlNpdkg1dEFjZk1icUZwNkZHbTdINDdxaS11dHg4SUd6bEhIRDljY3RYdDByVklxVWN4UHV0TFdoS1RYRnA4RXUxY1VSRXZrRFp6amU1V19Mc0ZEVmNJYV85V3RQMWVCVFBFa0xyVGRpUDF0TVU3QWJma01RZVA5MnA0TXU4a0xkcXJMdEFWMkdkOUhJUTlkd3I2X2RibmxlTDBJNWVLbjU3SnFGRnUySm93UnciLCJpYXQiOjE2NTAxMTgyMDEsImV4cCI6MTY1MDM3NzQwMX0.8jSZNE0y5HJSZp4gQcDX3Y3Nh4Bnczt783ooDT-xqOA']
        //this.ws = new WebSocket('wss://game-eu-7.vanis.io:5012/','tFoL46WDlZuRja7W6qCl', {
            this.ws = new WebSocket(this.ip)
            this.ws.binaryType = 'arraybuffer'
        this.ws.onopen = this.onopen.bind(this)
        this.ws.onmessage = this.onmessage.bind(this)
        this.ws.onclose = this.onclose.bind(this)
        this.ws.onerror = this.onerror.bind(this)
    }
    onopen(c) {
        console.log('c')
        var bufPro = new DataView(new ArrayBuffer(5))
        bufPro.setUint8(0,254)
        bufPro.setUint32(1,23,true)
        var bufCli = new DataView(new ArrayBuffer(5))
        bufCli.setUint8(0,255)
        bufCli.setUint32(1,31104,true)
        this.send(bufPro)
        this.send(bufCli)
        setTimeout(() => {
            this.sendSpawn('lukas')
        }, 1000);
        
     }
   onmessage(msg) {
       var message = new DataView(msg.data)
       var offset = 0
       var opcode = message.getUint8(offset++)
       if (opcode === 54) opcode = 53
        switch (opcode) {
            case 241: //PRO KEY
                this.protocolKey = message.getUint32(offset, true)
                var agarreader = new Uint8Array(message.buffer, offset += 4)
                this.clientKey = this.generateCliKey(this.ipd, agarreader)
                console.log('done')
        }
   }
   onclose(d) {
       console.log('d')
   }
   onerror(err) {
       console.log(err)
   }
   sendSpawn(name) {
       var token = '0'
       var nick = window.unescape(window.encodeURIComponent(name))
       var nickBuf = new DataView(new ArrayBuffer(1+nick.length+1+token.length+1))
       var pos
       for (var i = 0; i < nick.length; i++, pos++) nickBuf.setUint8(pos,nick.charCodeAt(length))
       pos++
       for (var i = 0; i < token.length; i++, pos++) nickBuf.setUint8(pos,token.charCodeAt(length))
       this.sendPacket(nickBuf)
   }
   generateCliKey(ip, options) {
    if (!ip.length || !options.byteLength) {
        return null;
    }
    let x = null;
    const Length = 1540483477;
    console.log(ip)
    const ipCheck = ip.match(/(ws+:\/\/)([^:]*)(:\d+)/)[2];
    const newLength = ipCheck.length + options.byteLength;
    const uint8Arr = new Uint8Array(newLength);
    for (let length = 0; length < ipCheck.length; length++) {
        uint8Arr[length] = ipCheck.charCodeAt(length);
    }
    uint8Arr.set(options, ipCheck.length);
    const dataview = new DataView(uint8Arr.buffer);
    let type = newLength - 1;
    const value = (type - 4 & -4) + 4 | 0;
    let newValue = type ^ 255;
    let offset = 0;
    while (type > 3) {
        x = Math.imul(dataview.getInt32(offset, true), Length) | 0;
        newValue = (Math.imul(x >>> 24 ^ x, Length) | 0) ^ (Math.imul(newValue, Length) | 0);
        type -= 4;
        offset += 4;
    }
    switch (type) {
        case 3:
            newValue = uint8Arr[value + 2] << 16 ^ newValue;
            newValue = uint8Arr[value + 1] << 8 ^ newValue;
            break;
        case 2:
            newValue = uint8Arr[value + 1] << 8 ^ newValue;
            break;
        case 1:
            break;
        default:
            x = newValue;
            break;
    }
    if (x != newValue) {
        x = Math.imul(uint8Arr[value] ^ newValue, Length) | 0;
    }
    newValue = x >>> 13;
    x = newValue ^ x;
    x = Math.imul(x, Length) | 0;
    newValue = x >>> 15;
    x = newValue ^ x;
    console.log(`[Client 1] Generated client key:`, x);
    return x;
   }
   shiftMSG(msg, key) {
        for (var length = 0; length < msg.byteLength; length++) {
            msg.setUint8(length, msg.getUint8(length) ^ key >>> length % 4 * 8 & 255);
        }
        return msg
   }
   shiftKey(key) {
    const value = 1540483477;
    key = Math.imul(key, value) | 0;
    key = (Math.imul(key >>> 24 ^ key, value) | 0) ^ 114296087;
    key = Math.imul(key >>> 13 ^ key, value) | 0;
    return key >>> 15 ^ key;
   }
   sendPacket(msg) {
       msg = this.shiftMSG(msg, this.clientKey)
       this.clientKey = this.shiftKey(this.clientKey)
       this.send(msg.buffer)
   }
   send(msg){
    if (this.ws && this.ws.readyState == 1) {
        this.ws.send(msg)
    }
   }
}
setInterval(() => {
    new bot()
}, 1000);