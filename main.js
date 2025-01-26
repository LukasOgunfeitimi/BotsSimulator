const WebSocket = require('ws')
const request = require('request')
const {SocksProxyAgent} = require('socks-proxy-agent')
const fs = require('fs')
process.on('uncaughtException', function(err) {
    console.log(err);
});
const agents = fs.readFileSync('./core/agents.txt', 'utf-8').replace(/\r/g, '').split('\n').filter(a => !a.includes('iPad'))
class user {
    constructor(ws) {
        this.ws = ws
        this.origin = null
        this.server = null
        this.bots = []
        this.captchaTokens = []
        this.duplicateBot
        this.connectState =  true
        this.ryutentag = undefined
        this.ryutenpin = undefined
        this.ryutenmatrix = [
            [41, 46, 100, 235, 159],
            [41, 252, 100, 4, 140],
            [41, 6, 100, 238, 116],
            [41, 39, 100, 149, 96],

            [41, 77, 134, 235, 159],
            [41, 77, 134, 4, 140],
            [41, 77, 134, 238, 116],
            [41, 77, 134, 149, 96],

            [41, 26, 153, 235, 159],
            [41, 26, 153, 4, 140],
            [41, 26, 153, 238, 116],
            [41, 26, 153, 149, 96],

        ]
        //this.setMatrix()
        this.ws.on('message', this.onmessage.bind(this));
        this.ws.on('close', this.onclose.bind(this));
    }
    setMatrix() {
        this.ryutenmatrix = []
        var x = 25000
        var y = 41000
        var xor = 0
        for (var i = 0; i < 15; i++) {
            this.ryutenmatrix[i] = [41]
        }
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 5; j++) {
                this.ryutenmatrix[xor][1] = (x & 0xFF00) >> 8
                this.ryutenmatrix[xor][2] = x & 0xFF
                this.ryutenmatrix[xor][3] = (y & 0xFF00) >> 8
                this.ryutenmatrix[xor][4] = y & 0xFF
                y -= 5000
                xor++
            }
            x += 8000
            y = 41000
        }
    }
    initFullmap(core) {
        class bot {
            constructor(server, proxy, i) {
                this.i = i
                this.socket = null;
                this.server = server
                this.proxy = proxy;
                this.status = false
                this.connect()
            }
            connect() {
                this.socket = new WebSocket(this.server, {
                    agent: new SocksProxyAgent(`socks://${this.proxy}`),
                })
                this.socket.binaryType = 'arraybuffer'
                this.socket.onopen = this.onopen.bind(this)
                this.socket.onclose = this.onclose.bind(this)
                this.socket.onerror = this.onerror.bind(this)
            }
            onerror() {}
            onopen() {
                //console.log('connected', this.i)
                this.status = true
            }
            onclose() {
                //console.log('disconnected', this.i)
                this.status = false
            }
            close() {
                this.socket.close()
            }
        }
        class proxyChecker {
            constructor(proxies, endpoint) {
                this.endpoint = endpoint
                this.proxies = proxies
                this.goodProxies = []
                this.timer = 0
                this.timerInt = 0
            }
            start() {
                for (var i = 0; i < this.proxies.length; i++) {
                    this.proxies[i] = new bot('wss://ws.postman-echo.com/raw', this.proxies[i], i)
                }
                this.startTimer()
            }
            stop() {
                this.goodProxies = this.proxies.filter((i)=>i.status)
                for (var i = 0; i < this.proxies.length; i++) {
                    this.proxies[i].close()
                }
                for (var i = 0; i < core.ryutenmatrix.length; i++) {
                    if (this.goodProxies[i]) {
                        core.bots.push(new(require('./protocols/ryutenxor'))(core, this.goodProxies[i].proxy, core.ryutenmatrix[i], i))
                    }
                }
            }
            startTimer() {
                this.timerInt = setInterval(() => {
                    this.timer++
                    console.log(this.timer)
                    if (this.timer === 5) this.stopTimer()
                }, 1000);
            }
            stopTimer() {
                clearInterval(this.timerInt)
                this.stop()
                this.timerInt = 0
                this.timer = 0
            }
        }
        var XORPROXY=["104.227.133.163:7225","192.241.118.206:8773","23.236.182.162:7711","138.128.78.10:7096","23.229.107.125:7650","192.241.94.253:7808","181.177.91.94:8667","144.168.220.183:8229","193.9.32.53:6730","69.88.137.36:7122","84.21.190.164:6165","192.241.118.42:8609","138.128.107.82:8671","91.246.192.70:6071","104.144.78.130:9175","185.230.47.219:6142","138.128.107.129:8718","45.86.65.64:6355","104.144.78.28:9073","92.119.82.155:5728","69.88.137.25:7111","138.128.78.98:7184","45.151.253.86:6251","185.230.47.93:6016","23.229.107.139:7664","104.144.72.203:6235","5.181.42.170:6231","193.142.200.172:7363","185.196.0.223:7188","104.144.72.23:6055","23.229.107.251:7776","95.164.135.186:6719","69.88.137.48:7134","23.236.182.100:7649","45.130.127.252:8256","45.57.168.251:7255","185.196.0.225:7190","93.190.245.37:9063","23.229.107.89:7614","45.57.168.203:7207","144.168.220.178:8224","144.168.220.91:8137","23.236.182.84:7633","192.241.94.35:7590","23.236.182.47:7596","45.57.168.104:7108","84.21.190.168:6169","138.122.194.246:7322","192.241.94.220:7775","192.241.94.80:7635","185.245.26.93:6610","23.236.170.220:9253","104.144.72.219:6251","5.183.35.30:5300","84.21.190.247:6248","23.229.122.123:8151","23.229.122.50:8078","45.57.168.105:7109","93.190.245.177:9203","185.230.47.194:6117","185.245.26.170:6687","104.144.235.229:7309","45.57.168.144:7148","192.241.118.13:8580","23.254.113.104:6173","66.151.50.32:6835","138.128.78.227:7313","181.177.91.18:8591","138.128.107.167:8756","107.152.222.17:9040","104.227.28.139:9197","181.177.91.90:8663","144.168.140.178:8249","194.35.122.214:5105","84.21.190.98:6099","138.128.68.12:7080","138.122.194.237:7313","185.230.47.184:6107","192.241.94.25:7580","193.9.32.15:6692","138.128.68.246:7314","95.164.135.6:6539","107.179.60.180:5212","5.183.35.5:5275","93.190.245.4:9030","45.72.119.254:9330","104.227.133.119:7181","23.254.113.158:6227","84.21.190.105:6106","161.123.151.83:6067","5.252.142.138:5962","193.42.96.222:7567","181.177.91.104:8677","157.52.252.131:6695","161.0.70.47:5636","23.229.122.114:8142","23.236.182.117:7666","161.123.5.26:5075","107.152.222.176:9199","23.254.113.96:6165"];
        var check = new proxyChecker(XORPROXY)
        check.start()
    }

    init() {
        const fetchProxies = (url, type) => {
            return new Promise((resolve, reject) => {
                request(url, (err, req, body) => {
                    if (err) return reject(err);
                    
                    const proxies = body.replace(/\r/g, '').split('\n').filter(proxy => proxy); 
                    let completed = 0; 
        
                    if (proxies.length === 0) {
                        resolve();
                        return;
                    }
        
                    proxies.forEach((proxy, index) => {
                        setTimeout(() => {
                            //console.log(proxy, url)
                            this.start(proxy, type);
                            this.start(proxy, type);
                            completed++; 
                            if (completed === proxies.length) {
                                resolve();
                            }
                        }, index * 5);
                    });
                });
            });
        };
        
        const runRequestsSequentially = async () => {
            try {
                this.start();
                await fetchProxies('https://raw.githubusercontent.com/monosans/proxy-list/refs/heads/main/proxies_anonymous/socks4.txt', 'socks4');
                await fetchProxies('https://raw.githubusercontent.com/monosans/proxy-list/refs/heads/main/proxies/socks4.txt', 'socks4');
                await fetchProxies('https://api.proxyscrape.com?request=getproxies&proxytype=http&timeout=10000&country=all', 'http');
                await fetchProxies('https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/socks4.txt', 'socks4');
                await fetchProxies('https://api.proxyscrape.com?request=getproxies&proxytype=socks4&timeout=10000&country=all', 'socks4');
            } catch (error) {
                console.error('Error fetching proxies:', error);
            }
        };
        runRequestsSequentially();
            
    }
    start(proxy, proxytype) {
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
                this.bots.push(new(require('./protocols/ryuten'))(this, proxy, undefined, 0, proxytype))
                break
            case 'https://dual-geno.me':
                this.bots.push(new(require('./protocols/geno'))(this, proxy, boti))
                break
            case 'https://senpa.io':
                this.bots.push(new(require('./protocols/senpa'))(this, proxy, agents[Math.floor(Math.random() * agents.length)], 0, proxytype))
                break
            case 'https://tricksplit.io':
                this.bots.push(new(require('./protocols/tricksplit'))(this, proxy, undefined, 0, proxytype))
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
                this.connectState = true
                this.origin = message.origin
                this.server = message.server
                //this.ryutentag = message.tag
                //this.ryutenpin = message.pin
                this.init()
                break
                if (message.fullmap) {
                  this.initFullmap(this)  
                } else {
                    this.init()
                }
                //this.init()
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
                this.connectState = false
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
    get connectedState() {
        return this.connectState
    }
    get RyutenInfo() {
        return {tag: this.ryutentag, pin: this.ryutenpin}
    }
    get authedRyutenBots() {
        return this.bots.filter(bot => bot.authed).length
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
