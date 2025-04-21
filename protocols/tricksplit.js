const WebSocket = require('ws')
const TricksplitWasmInstance = require('../core/tricksplit.js')

const { SocksProxyAgent } = require('socks-proxy-agent')
const { HttpProxyAgent } = require('http-proxy-agent')

const Writer = require('../core/senpa/writer.js')
const Reader = require('../core/senpa/reader.js')


class Minion {
    constructor(user, proxy, headers, id, proxyType) {
        this.clientws = user.ws;
        this.ws = null;
        this.user = user;
        this.id = id;
        this.proxy = proxy;
        this.proxyType = proxyType;
        this.server = user.server
        this.startedBots = false;
        this.isReconnecting = false;
        this.useID = false;
        this.headers = {
            "accept-encoding": "gzip, deflate, br, zstd",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
            "cache-control": "no-cache",
            "connection": "Upgrade",
            "host": "tricksplit.nebulaaaa.lol",
            "origin": "https://tricksplit.io",
            "pragma": "no-cache",
            "sec-websocket-extensions": "permessage-deflate; client_max_window_bits",
            "sec-websocket-version": "13",
            "upgrade": "websocket",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
        }
        this.spawnInfo = '{"name":"LONG LIVE TS!","skin":"","skin2":"","hat":"","hat2":"","nameColor":"","borderColor":"","shape":""}';
        this.connect();
    }

    connect() {
        let proxy = null
        this.startedBots = true;
        //this.serverUrl = url;

        if (this.proxyType === "http") proxy = new HttpProxyAgent(`http://${this.proxy}`);
        else if (this.proxyType === "socks4") proxy = new SocksProxyAgent(`socks4://${this.proxy}`);
        else if (this.proxyType === "socks5") proxy = new SocksProxyAgent(`socks5://${this.proxy}`);
        
        this.ws = new WebSocket(this.server, {
            agent: proxy,
            rejectUnauthorized: true,
            headers: this.headers,
            timeout: 5000
        });

        this.ws.binaryType = 'arraybuffer';
        this.ws.onmessage = this.onMessage.bind(this);
        this.ws.onopen = this.onOpen.bind(this);
        this.ws.onclose = this.onClose.bind(this);
        this.ws.onerror = this.onError.bind(this);
        console.log(this.proxy);

        this.id = Math.floor(Math.pow(2, 14) * Math.random()).toString(36);
        this.name = "L" + this.id
    }

    onMessage(message) {
        var reader = new Reader(message.data);
        const op = reader.readUInt8(0x0)
        switch (op) {
            case 91:
                this.sendPong();
                break;

            case 0x10:
                for (var EatenNodes = reader.readUInt16(); EatenNodes--;) {
                    reader.readUInt32(), reader.readUInt32();
                }

                for (; ;) {
                    var NodeID = reader.readUInt32();

                    if (NodeID == 0) break;

                    reader.readInt32();
                    reader.readInt32();
                    reader.readUInt16();
                    reader.readUInt8();
                    reader.readUInt8();
                    reader.readUInt8();

                    var x = reader.readUInt8();

                    if (4 & x) {
                        reader.readLongString16();
                    }
                    reader.readLongString16();
                }
                for (var i = reader.readUInt32(); i--;) {
                    reader.readUInt32();
                }

                if (reader.index < reader.maxIndex - 1) {
                    this.clientws.send(JSON.stringify({
                        type: 'connection',
                        status: 'open'
                    }))
                    
                    this.ws.on('close', (msg) => {
                        console.log('d')
                        this.clientws.send(JSON.stringify({
                            type: 'connection',
                            status: 'close'
                        }))
                    })
                    this.solveSecret(new Uint8Array(reader.view.buffer).slice(reader.index, reader.maxIndex));
                }
        }
    }

    solveSecret(VMbyteCode) {
        VMbyteCode = this.wasmInstance.decrypt(VMbyteCode);

        this.wasmInstance.processVMBytecode(VMbyteCode);

        this.sendAuthentication = setInterval(() => {
            if (this.wasmInstance.CanvasCaptureMediaStreamTrack.contextBufferFactory !== 0) {
                this.sendMouseMove(
                    this.wasmInstance.final(),
                    this.wasmInstance.randomSeed()
                );
                this.wasmInstance.CanvasCaptureMediaStreamTrack.contextBufferFactory = 0;
                this.readyToSpawn = true;
                this.startupSpawn();
            }
        }, 40);
    }

    sendPong() {
        this.sendUint8(91);
    }

    sendFeed() {
        this.sendUint8(21);
        this.sendUint8(0x1a);
        this.sendUint8(21);
    }

    sendSplit() {
        this.sendUint8(17);
        this.sendUint8(0x1a);
        this.sendUint8(17);
    }

    sendSpawn(json) {
        const spawnBuffer = new Writer(3 + 2 * json.length);
        spawnBuffer.writeUInt8(0);
        spawnBuffer.writeString16(json);
        this.send(spawnBuffer.buffer);
        this.sendUint8(0x1a);
    }

    startupSpawn() {
        setInterval(() => {
            this.sendSpawn(this.spawnInfo);
        }, 500);
    }

    onOpen() {
        this.wasmInstance = new TricksplitWasmInstance();

        this.readyToSpawn = false;
        console.log('c');
        this.sendHandshake();
        this.send(this.wasmInstance.first());
        this.sendVerifyToken();
        this.sendJWTToken();
    }

    sendHandshake(protocol = 5) {
        var Init = new Writer(5);
        Init.writeUInt8(254)
        Init.writeUInt32(protocol, true);
        this.send(Init.buffer);
        Init = new Writer(5);
        Init.writeUInt8(255);
        Init.writeUInt32(0, true);
        this.send(Init.buffer);
    }

    sendJWTToken(token = '') {
        const tokenBuffer = new Writer(2 + token.length);
        tokenBuffer.writeUInt8(30);
        tokenBuffer.writeString8(token);
        this.send(tokenBuffer.buffer);
    }

    sendVerifyToken(token = '') {
        const tokenBuffer = new Writer(2);
        tokenBuffer.writeUInt8(32);
        tokenBuffer.writeString8(token);
        this.send(tokenBuffer.buffer);
    }

    onClose() {
        console.log('d')
    }

    onError(error) {
        //console.error(error);
    }

    disconnect() {3
        this.startedBots = false;
        this.clearIntervals();

        if (this.ws) {
            this.ws.terminate();
            this.ws = null;
        }
    }


    clearIntervals() {
        clearInterval(this.pingInterval);
        clearTimeout(this.spawnInterval);
        clearInterval(this.sendAuthentication);
    }


    spawn() { }

    split() {
        if (!this.readyToSpawn) return;
        this.sendSplit();
    }

    eject() {
        if (!this.readyToSpawn) return;
        this.sendFeed();
    }

    sendUint8(data) {
        const onebyte = new Writer(1);
        onebyte.writeUInt8(data);
        this.send(onebyte.buffer);
    }

    mouse(x, y) {
        if (!this.readyToSpawn) return;
        this.sendMouseMove(x, y);
    }

    sendMouseMove(x = 0, y = 0) {
        const mouseBuffer = new Writer(13);
        mouseBuffer.writeUInt8(16);
        mouseBuffer.writeInt32(x);
        mouseBuffer.writeInt32(y);
        mouseBuffer.writeUInt32(0);
        this.send(mouseBuffer.buffer);
        this.sendUint8(0x1a);
        this.send(mouseBuffer.buffer);
    }

    sendChat(message) {
        // Need login.
    }

    get wsOPEN() {
        return this.ws && this.ws.readyState === WebSocket.OPEN;
    }

    Buffer(buf = 1) {
        return new DataView(new ArrayBuffer(buf));
    }

    send(data) {
        if (this.wsOPEN) {
            this.ws.send(data);
        }
    }
};
module.exports = Minion;
//const test = new Minion()

//test.connect('wss://proxy.tricksplit.io/4600')
