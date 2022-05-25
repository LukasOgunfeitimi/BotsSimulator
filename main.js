const WebSocket = require('ws')
const request = require('request')
const http = require('http')
const fs = require('fs')
process.on('uncaughtException', function(err) {
    console.log(err);
});
class user {
    constructor(ws) {
        this.ws = ws
        this.origin = null
        this.server = null
        this.bots = []
        this.captchaTokens = []
        this.duplicateBot
        this.ws.on('message', this.onmessage.bind(this));
        this.ws.on('close', this.onclose.bind(this));
    }
    init() {
        /*
        fetch('https://api.proxyscrape.com?request=getproxies&proxytype=socks5&timeout=10000&country=all')
            .then(response => response.text())
            .then(body => {
                body.replace(/\r/g, '').split('\n').forEach((proxy, i) => {
                    setTimeout(() => {
                        this.start(proxy)
                    }, 500 * i);
                });
            })
            */
           this.start()
            request('https://api.proxyscrape.com?request=getproxies&proxytype=socks5&timeout=10000&country=all', (err, req, body) => {
                body.replace(/\r/g, '').split('\n').forEach((proxy, index) => {
                    this.start(proxy)
                    this.start(proxy)
                });
            });
            
            
    }
    start(proxy) {
        switch (this.origin) {
            case "https://gota.io":
                this.bots.push(new(require('./protocols/gota'))(this, proxy))
                break
            case 'https://vanis.io':
                this.bots.push(new(require('./protocols/vanis'))(this, proxy))
                break
            case 'http://abs0rb.me':
                this.bots.push(new(require('./protocols/absorb'))(this, proxy))
                break
            case 'http://slither.io':
                this.bots.push(new(require('./protocols/slither'))(this, proxy))
                break
            case 'http://cirlzgame.tk':
                this.bots.push(new(require('./protocols/turk'))(this, proxy))
                break
            case 'https://cell.sh':
                this.bots.push(new(require('./protocols/cellsh'))(this, proxy))
                break
            case 'https://ryuten.io':
                this.bots.push(new(require('./protocols/ryuten'))(this, proxy))
                break
            default:
                this.bots.push(new(require('./protocols/standard'))(this, proxy))
                break
        }
    }
    onmessage(msg) {
        const message = JSON.parse(msg)
        switch (message.type) {
            case 'lxbauth':
                this.origin = message.origin
                this.server = message.server
                this.init()
                break
            case 'mouse':
                for (const bot in this.bots) this.bots[bot].mouse(message.x, message.y)
                break
            case 'split':
                for (const bot in this.bots) this.bots[bot].split()
                break
            case 'eject':
                for (const bot in this.bots) this.bots[bot].eject()
                break
            case 'bye':
                this.origin = null
                this.server = null
                for (const bot in this.bots) this.bots[bot].close()
                this.bots = []
                this.captchaTokens = []
                break
            case 'captcha':
                this.captchaTokens.push(message.token)
        }
    }
    get captchaToken() {
        return this.captchaTokens.shift()
    }
    onclose() {
        delete this
    }

}
/*
new http.createServer(function (req, res) { // serve client
    if (req.url === '/client') {
        fs.readFile('userscript.js','utf-8', (err,data)=>{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data)
            res.end();
        })
    }
}).listen(8082);
*/
new WebSocket.Server({ port: 8083 }).on('connection', (ws, req) => { // serve connection
    console.log('user connected')
    new user(ws)
}) 
