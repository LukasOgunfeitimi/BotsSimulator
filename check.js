const WebSocket = require('ws')

class bot {
    constructor(server) {
        this.server = server
        this.socket = null;
        this.connect()
    }
    connect() {
        this.socket = new WebSocket(this.server)
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
            case 16:
                console.log(data.byteLength)
                break
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

new bot('ws://157.90.131.252:4701/')


