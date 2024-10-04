/*
    a lot of integrity checks
    bots dont last long
    https://media.discordapp.net/attachments/833119812812144710/974395499526361218/unknown.png
*/
const WebSocket = require('ws')
const { SocksProxyAgent } = require('socks-proxy-agent');
const { Ryuten } = require('../core/auth')
const Writer = require('../core/writer');
const Reader = require('../core/reader')
const request = require('request');
class Server {
    constructor() {
        this.myid = 0;
        this.client = {}
        this.player = {}
        this.mycells = []
        this.myplayers = []
        this.display()
    }
    display() {
        setInterval(() => {
        }, 250);
    }
    addClient(clientid, name) {
        this.client = {id: clientid,name: name}
    }
    addPlayer(playerid, clientid) {
        this.player = {
            client: this.client,
            player: {
                id: playerid,
                cells: []
            }
        }
        this.myplayers.push(playerid)
    }
    addCell(cellid, playerid, x, y) {
        if (!this.myplayers.includes(playerid)) return
        let cellData = {
            id: cellid,
            pos: {x:x, y:y}
        }
        this.player.player.cells.push(cellData)
        this.mycells.push(cellid)
    }
    updateCell(cellid, x, y) {
        if (!this.mycells.includes(cellid)) return
        let cellData = this.player.player.cells
        for (let i = 0; i < cellData.length; i++) {
            if (cellData[i].id === cellid) {
                this.player.player.cells[i].pos = {x:x, y:y}
            }
        }
    }
}
class bot {
    constructor(user, proxy) {
        this.socket = null;
        this.user = user
        this.server = user.server
        this.origin = user.origin
        this.ws = user.ws
        this.proxy = proxy;
        this.angle = 2 * Math.PI * Math.random()
        this.degree = Math.floor(Math.random() * 360)
        this.authed = 0
        this.tag = user.RyutenInfo?.tag || 'fwe'
        this.pin = user.RyutenInfo?.pin || ''
        this.ryuten = new Ryuten()
        this.SERVER = new Server()
        this.lastmessage = null
        this.headers = {
            'Connection': 'Upgrade',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
            'Upgrade': 'websocket',
            'Origin': 'https://ryuten.io',
            'Host': 'eu3.ryuten.io',
            'Sec-WebSocket-Version': '13',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9',
            'Sec-WebSocket-Extensions': 'permessage-deflate; client_max_window_bits'
        }
        this.connect()
    }
    async login() {
        let ops = {
            url: 'https://lancelot.ryuten.io/auth/status',
            method: 'POST',
            agent: new SocksProxyAgent(`socks://${this.proxy}`),
            headers: {
                "accept": "*/*",
                "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
                "lancelot-version": "2",
                "sec-ch-ua": "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                'origin': 'https://ryuten.io',
                "cookie": "_ga=GA1.1.1368697313.1661372203; _ga_E5CC214ZES=GS1.1.1680085334.196.1.1680085645.0.0.0",
                "Referer": "https://ryuten.io/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            body: null
        }
        return new Promise((resolve, rej)=>{
            request(ops,function(err, res, body){
                if (res.statusCode === 200) resolve()
                else rej()
            })
        })
    }
    connect() {
        //if (!this.user.connectState) return
        this.socket = new WebSocket(this.server, {
            agent: this.proxy ? new SocksProxyAgent(`socks://${this.proxy}`) : undefined,
            headers: this.headers
        })
        this.socket.binaryType = 'arraybuffer'
        this.socket.onopen = this.onopen.bind(this)
        this.socket.onerror = this.onerror.bind(this)
        this.socket.onmessage = this.onmessage.bind(this)
    }
    onopen() {
        console.log('connected')
    }
    onmessage(message) {
        if (!this.authed) {
            this.ryuten.setKeys(new Uint8Array(message.data))
            this.authed = 1
            return
        }
        const msg = new Reader(message.data)
        switch(msg.getUint8()) {
            case 10: //auth
            if (this.user.authedRyutenBots >= 500 || !this.user.connectedState) {
                this.close()
                delete this
                return
            }
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
            msg.getString8()
            this.SERVER.myid = msg.getUint16()
            this.send([42, 0])
            var tag = new Writer(2 + 2 * (this.tag.length))
            tag.Uint8(21)
            tag.Uint8(this.tag.length)
            tag.string16(this.tag)
            this.send(tag.buffer)
            var pin = new Writer(2 + 2 * (this.pin.length))
            pin.Uint8(23)
            pin.Uint8(this.pin.length)
            pin.string16(this.pin)
            this.send(pin.buffer)
            this.ping()
            this.spawn()
            break
        case 20: //skins
            this.skins(msg)
            break
        case 21: //cells
            this.world(msg)
            break
        case 22: //teammates
            break
        case 23: //idk
            break
        case 24: //clear
            break
        case 25: //dead
            break
        case 32: //ping
            break 
        default:
        }
    }
    skins(msg) {
        // delete
        const deleteLen = msg.getUint16()
        for (let i = 0; i < deleteLen; i++) {
            msg.getUint16()
        }
        const deleteLen2 = msg.getUint16()
        for (let i = 0; i < deleteLen2; i++) {
            msg.getUint16()
        }
        // data
        const dataLen = msg.getUint16()
        for (let i = 0; i < dataLen; i++) {
            msg.getUint16()
            const dataFlags = msg.getUint8()
            if (dataFlags & 1) msg.getString16()
            if (dataFlags & 2) msg.getString16()
            if (dataFlags & 4) msg.getUint8()
            if (dataFlags & 8) msg.getString8()
            if (dataFlags & 16) msg.getString8(), msg.getUint8()
        }
        // data
        const skinLen = msg.getUint16()
        for (let i = 0; i < skinLen; i++) {
            msg.getUint16()
            const skinFlags = msg.getUint8()
            if (skinFlags & 1) msg.getUint8(), msg.getUint8(), msg.getUint8()
            if (skinFlags & 2) msg.getUint8(), msg.getString8()
        }
        // new client
        const newClient = msg.getUint16()
        for (let i = 0; i < newClient; i++) {
            const id = msg.getUint16()
            const name = msg.getString16()
            msg.getString16()
            msg.getUint8()
            msg.getString8()
            msg.getString8()
            msg.getUint8()
            if (id === this.SERVER.myid) this.SERVER.addClient(id, name)
        }
        // new player
        const newPlayerLen = msg.getUint16()
        for (let i = 0; i < newPlayerLen; i++) {
            const playerId = msg.getUint16()
            const clientId = msg.getUint16()
            msg.getUint8()
            msg.getUint8()
            msg.getUint8()
            msg.getUint8()
            msg.getString8()
            if (clientId === this.SERVER.myid) this.SERVER.addPlayer(playerId, clientId)
        }
    }
    world(msg) {
        // camera
        const cameraLen = msg.getUint16()
        msg.getUint8()
        if (0 !== msg.getUint8()) {
            msg.getUint8()
            msg.getUint16()
            msg.getUint16()
        }
        // delete cells
        const deleteCellLen = msg.getUint16()
        for (let i = 0; i < deleteCellLen; i++) {
            msg.getUint16()
        }
        const deleteCellLen2 = msg.getUint16()
        for (let i = 0; i < deleteCellLen2; i++) {
            msg.getUint16()
            msg.getUint16()
        }
        // update cells
        const updateCellLen = msg.getUint16()
        for (let i = 0; i < updateCellLen; i++) {
            const cellId = msg.getUint16()
            const x = msg.getUint16()
            const y = msg.getUint16()
            msg.getUint16()
            this.SERVER.updateCell(cellId, x, y)
        }
        // add cells
        const addCellLen = msg.getUint16()
        for (let i = 0; i < addCellLen; i++) {
            const cellId = msg.getUint16()
            const cellflag = msg.getUint8()
            const x = msg.getUint16()
            const y = msg.getUint16()
            if (cellflag === 4) msg.getUint8()
            else msg.getUint16()
            if (cellflag === 1) {
                const playerid = msg.getUint16()
                this.SERVER.addCell(cellId, playerid, x, y)
            } else if (cellflag === 2) {
                msg.getUint16()
            }
        }   
    }
    onerror() {
        setTimeout(() => this.connect(), 5000)
    };
    spawn() {
        this.send([10, 0])
        this.send([10, 1])
        //setTimeout(() => this.spawn(), Math.max(500, Math.random() * 1000))       
    }
    mouse(x, y) {
        var tab = new DataView(new ArrayBuffer(6))
        tab.setUint8(0, 30)
        tab.setUint16(2, x | 0, true)
        tab.setUint16(4, y | 0, true)
        this.send(tab.buffer)
        tab.setUint8(1,1)
        this.send(tab.buffer)
        return
        const cells = this.SERVER.player?.player?.cells
        if (cells === undefined || cells !== []) return
        var data = {x:0,y:0}
        for (let i = 0; i < cells.length; i++) {
            data.x += cells[i].pos.x
            data.y += cells[i].pos.y
        }
        data.x /= cells.length
        data.y /= cells.length

        var dx = (data.x + x) / 2
        var dy = (data.y + y) / 2
        const distanceStep = ~~(Math.random() * 500) + 200
        var tab = new DataView(new ArrayBuffer(6))
        tab.setUint8(0, 30)
        tab.setUint16(2, (dx) | 0, true)
        tab.setUint16(4, (dy) | 0, true)
        this.send(tab.buffer)


        /*
        const distanceStep = (Math.random() * 500) + 500
        data.x += Math.cos(this.angle) * distanceStep
        data.y += Math.sin(this.angle) * distanceStep

        var tab = new DataView(new ArrayBuffer(6))
        tab.setUint8(0, 30)
        tab.setUint16(2, data.x | 0, true)
        tab.setUint16(4, data.y | 0, true)
        this.send(tab.buffer)
        var data = {x:20000,y:30000}
        function rad(degrees)
        {
          var pi = Math.PI;
          return degrees * (pi/180);
        }
        const d = rad(360)
        const ran = (Math.PI * 2) * Math.random()
        const distanceStep = (Math.random() * 5000) + 100
        data.x += Math.round(Math.cos(ran) * distanceStep)
        data.y += Math.round(Math.sin(ran) * distanceStep)
        console.log(data)
        */
        
    }
    radToDeg(rad) {
        return ~~(rad * (180 / Math.PI))
    }
    degToRad(deg) {
        return deg * (Math.PI / 180)
    }
    rotateAngle() {
        this.degree = this.degree > 359 ? 0 : ++this.degree
        this.angle = this.degToRad(this.degree)
    }
    split() {
        this.send([31, 0, 1])
        this.send([31, 1, 1])
        //setTimeout(() => this.split(), 50)
    }
    eject() {
        this.send([32, 0])
    }
    ping() {
        this.send([52])
        setTimeout(() => this.ping(), 5000)
    }
    close() {
        this.socket.close()
        this.authed = 0
    }
    send(buf) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN && this.authed) {  
            this.socket.send(this.ryuten.encrypt(new Uint8Array(buf)))
        }
    }
}
//new bot({server: 'wss://eu3.ryuten.io/classic-1/?'})
module.exports = bot
