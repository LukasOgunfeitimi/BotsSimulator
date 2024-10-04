const WebSocket = require('ws')
class Vanis {
    constructor() {
        this.keys = [5, 104, 253, 62, 175, 116, 238, 41] // hard coded encryption keys, offset = 0x80C
    }
    #getEncryptionKeys() { // WASM
        const keys = []
        const wasmMemory = new Uint8Array($G.buffer)
        for (var i = 0; i < 8; i++) {
            keys[i] = wasmMemory[i + 0x80C]
        }
        return keys
    }
    randomSeed() {
        return 1 + Math.floor(2147483646 * Math.random())
    }
    build(key) {
        var seed = this.randomSeed()
        var encryptedBufferKey = 0
        for (var i = 0; i < 8; i++) {
            const bufferKey = key[i]
            const shifter = (bufferKey + 5) % 7
            encryptedBufferKey = (((bufferKey << shifter) & 255) | ((bufferKey >> (8 - shifter) & 31)) ^ encryptedBufferKey ^ this.keys[i] ^ 62)
            key[i] = encryptedBufferKey & 0xFF;
        }

        key[8] = ((key[0] ^ (seed >> 24)) & 0xFF)
        key[9] = ((key[1] ^ (seed >> 16)) & 0xFF)
        key[10] = ((key[2] ^ (seed >> 8)) & 0xFF)
        key[11] = (key[3] ^ seed) & 0xFF
        key[12] = (key[0] ^ 31 ^ 31) & 0xFF
        return key
    }
}
class VanisWasmInstance {
    /**
     * Class constructor that initializes the keys, constant bytes and a constant value.
     *
     * @param {Uint8Array} keys - A 13-byte long Uint8Array storing the authentication keys.
     */
    constructor(keys) {
        // The authentication keys received from the server.
        this.keys = keys;
        // An array of constant bytes used in the encoding process.
        this.constantBytes = [5, 104, 253, 62, 175, 116, 238, 41];
  
        // A constant value used in the encoding process.
        this.constantValue = 31; // Nullified but left as is for consistency.
    }
  
    /**
     * Encodes the authentication keys using a combination of constant bytes, 
     * randomly generated key, and a constant value.
     *
     * The first eight bytes of the keys are encoded with the constant bytes.
     * Bytes 9 to 11 are encoded with a randomly generated key.
     * The twelfth byte is encoded by the first byte and a constant value.
     *
     * @returns {Uint8Array} The encoded keys.
     */
    encode() {
        // Generate a random integer key within a specific range.
        let keyGenerator = 1 + Math.floor(2147483646 * Math.random());
  
        let tempVal = 0;
        // Iterate over the first 8 bytes of the keys.
        for (let index = 0; index < 8; index++) {
            let keyIndex = this.keys[index];
            // Calculate a temporary value based on the current key byte and constant byte.
            let temp = (keyIndex + 5) & 7;
            tempVal = (((keyIndex << temp) & 255) | ((keyIndex >> (8 - temp)) & 31)) ^ tempVal ^ this.constantBytes[index] ^ 62;
            // Encode the current byte of the keys.
            this.keys[index] = tempVal & 0xFF;
        }
  
        // Encode the bytes from index 9 to 12 of the keys using the generated key.
        this.keys[8] = ((this.keys[0] ^ (keyGenerator >> 24)) & 0xFF);
        this.keys[9] = ((this.keys[1] ^ (keyGenerator >> 16)) & 0xFF);
        this.keys[10] = ((this.keys[2] ^ (keyGenerator >> 8)) & 0xFF);
        this.keys[11] = ((keyGenerator ^ this.keys[3]) & 0xFF);
  
        // Encode the last byte of the keys using the first byte of the keys and the constant value.
        this.keys[12] = ((this.keys[0] ^ this.constantValue ^ 31) & 0xFF);
  
        // Return the encoded keys.
        return this.keys;
    }
  }
class bot {
    constructor(server) {
        this.socket = null;
        this.vanis = new Vanis()
        this.server = server
        this.headers = {
            'Connection': 'Upgrade',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
            'Upgrade': 'websocket',
            'Origin': 'https://vanis.io',
            'Host': 'eu.senpa.io:1200',
            'Sec-WebSocket-Version': '13',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
            'Sec-WebSocket-Extensions': 'permessage-deflate; client_max_window_bits',
            'Sec-WebSocket-Protocol': 'tFoL46WDlZuRja7W6qCl'
        }
        this.connect()
    }
    connect() {
            this.socket = new WebSocket(this.server, 'tFoL46WDlZuRja7W6qCl',{
                headers: this.headers
            })
        this.socket.binaryType = 'arraybuffer'
        this.socket.onopen = this.onopen.bind(this)
        this.socket.onclose = this.onclose.bind(this)
        this.socket.onerror = this.onerror.bind(this)
        this.socket.onmessage = this.onmessage.bind(this)
    }
    onopen() {
        console.log('connected')
    }
    onclose() {
        console.log('disconnected')
    }
    onmessage(msg) {
        const data = new DataView(msg.data)
        const opcode = data.getUint8(0)
        switch (opcode) {
            case 2:
                console.log('auth')
                var buf = [5, 27]
                console.log(new Uint8Array(data.buffer, 1))
                const v = new VanisWasmInstance(new Uint8Array(data.buffer, 1))
                var key = this.vanis.build(new Uint8Array(data.buffer, 1))
                //var key = v.encode()
                for (var i = 0; i < key.length; i++) buf.push(key[i])
                this.send(buf)
                break;
            default:
                console.log(opcode)

        }
    }
    onerror(err) {
        console.log('err')
    }
    send(msg) {
        if (this.socket !== null&& this.socket.readyState === this.socket.OPEN) {
            this.socket.send(msg)
        }
    }
    close() {
        this.socket.close()
    }
}

new bot('wss://game-eu-2.vanis.io:5004/')


function getEncryptionKeys() {
    const keys = []
    const wasmMemory = new Uint8Array($G.buffer)
    for (var i = 0; i < 8; i++) {
        keys[i] = wasmMemory[i + 0x80C]
    }
    return keys
}

