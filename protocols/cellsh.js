/*
    needs good proxies
*/
const WebSocket = require('ws')
const request = require('request')
const {SocksProxyAgent} = require('socks-proxy-agent');
class bot {
    constructor(user, proxy) {
        this.socket = null;
        this.user = user
        this.server = user.server
        this.origin = user.origin
        this.ws = user.ws
        this.proxy = proxy;
        this.authed = 0
        this.botName = 'lukas'
        this.getServer()

    }
    getServer() {
            request({
                uri: 'https://cell.sh/master/api.php/findServerV2',
                headers: {
                    "accept": "application/json, text/javascript, */*; q=0.01",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "application/json",
                    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Microsoft Edge\";v=\"101\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "x-requested-with": "XMLHttpRequest",
                    "cookie": "_ga=GA1.2.1732995570.1649804035; G_ENABLED_IDPS=google; 1gdjqft63853338GDkGGDKkT33gd=1h5hdhr3qlq8nap9376135o675; _gid=GA1.2.54571542.1651323224",
                    "Referer": "https://cell.sh/",
                    "Referrer-Policy": "strict-origin-when-cross-origin"
                },
                method: 'POST',
                agent: new SocksProxyAgent(`socks://${this.proxy}`),
                body: JSON.stringify({"ssl":"on","region":"eu","gamemode":"15"})
            },
            (err, response, body)=>{
                if (String(body).startsWith('{'))
                    for (var i = 0; i < 3; i++) {
                        setTimeout(() => {
                            this.connect(JSON.parse(body).host)
                        }, 2000 * i);
                    }
            })
    }
    connect(server) {
        //console.log(`trying: ${this.proxy}`)
        this.socket = new WebSocket(server, {
            agent: new SocksProxyAgent(`socks://${this.proxy}`)
        });
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
        var init = new DataView(new ArrayBuffer(5))
        init.setUint8(0, 254)
        init.setUint32(1, 501,true)
        this.send(init.buffer)
        var init = new DataView(new ArrayBuffer(5))
        init.setUint8(0, 255)
        init.setUint32(1, 1237145238,true)
        this.send(init.buffer)
        setInterval(() => {
            this.spawn() 
        }, 2000);
    }
    onmessage(message) {
        var msg = new DataView(message.data)
        var offset = 0
        240 == msg.getUint8(offset) && (offset += 5);
        var code = msg.getUint8(offset++)
        switch (code) {
            default:
                this.authed = 1
        }
    }
    onerror(err) {
    };
    spawn() {
        if (this.authed) {
            var spawn = new DataView(new ArrayBuffer(1 + 2 * this.botName.length))
            spawn.setUint8(0, 0)
            for (var i = 0; i < this.botName.length; i++) {
                spawn.setUint16(1 + 2 * i, this.botName.charCodeAt(i), true)
            }
            this.send(spawn)
        }
    }
    mouse(x, y) {
        if (this.authed) {
            var mouse = new DataView(new ArrayBuffer(21))
            mouse.setUint8(0, 16)
            mouse.setFloat64(1, x, true)
            mouse.setFloat64(9, y, true)
            mouse.setUint32(17, 0, true)
            this.send(mouse)
        }
    }
    split() {
        this.send([17])
    }
    eject() {
        this.send([3])
    }
    ping() {
        this.send([71])
    }
    close() {
        this.socket.close()
    }
    log(msg) {
        console.log(msg);
    }
    send(buf) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(buf)
        }
    }
}
module.exports = bot