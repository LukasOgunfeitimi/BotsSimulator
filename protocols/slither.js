const WebSocket = require('ws');
const Socks = require('socks');
const request = require('request');
const {SocksProxyAgent} = require('socks-proxy-agent');
var bots = [];
process.on('uncaughtException', function(err) {
    console.log(err);
});
var xPos, yPos = 0

    class test {
        constructor(user, proxy) {
            this.socket = null;
            this.origin = user.origin;
            this.server = user.server;
            this.proxy = proxy
            this.needPing = false
            this.snakeID = null
            this.snakeX = 0
            this.snakeY = 0
            this.headX = 0
            this.headY = 0
            this.snakeAngle = 0
            this.haveSnakeID = false
            this.isBoost = false
            this.hasConnected = false
            this.headers = {
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Connection': 'Upgrade',
                'Host': this.server,
                'Upgrade': 'websocket',
                'Origin': this.origin,
                'Sec-WebSocket-Extensions': 'permessage-deflate; client_max_window_bits',
                'Sec-WebSocket-Version': '13',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36'
            }
            this.connect()

        }
        connect() {
            console.log(`trying: ${this.proxy}`)
            this.socket = new WebSocket(`ws://${this.server}/slither`, {
                headers: this.headers,
                agent: new SocksProxyAgent(`socks://${this.proxy}`)
            });
            this.socket.onopen = this.onopen.bind(this)
            this.socket.onerror = this.onerror.bind(this)
            this.socket.onmessage = this.onmessage.bind(this)
        }
        onopen() {
            console.log(`connected`)
            this.send([99]) //INIT
            ws.send(JSON.stringify({
                type: 'connection',
                status: 'open'
            }))
            this.socket.on('close', () => {
                ws.send(JSON.stringify({
                    type: 'connection',
                    status: 'close'
                }))
            })
        }
        onmessage(msg) {
            var lol = new Uint8Array(msg.data);
            var f = String.fromCharCode(lol[2]);
            var snakeSpeed, lastPacket;
            console.log(msg.data)
            if (2 <= lol.length) {
                if ("6" == f) {
                    var e = 165;
                    var c = 3;
                    var h = "";
                    for (h = ""; c < e;) {
                        h += String.fromCharCode(lol[c]),
                            c++;
                    }
                    this.send(this.rotateKey(lol));
                    this.send([115, 10, 7, 5, 108, 117, 107, 97, 115])
                } else if ("p" == f) {
                    this.needPing = true;
                } else if ("a" == f) {
                    console.log("Initial setup");
                    setInterval(() => {
                        this.moveTo(xPos, yPos);
                    }, 100);
                    setInterval(() => {
                        this.send([251]);
                    }, 250);
                } else if ("v" == f) {
                    console.log("dead");
                    this.haveSnakeID = false;
                    this.close();
                    setTimeout(() => {
                        this.connect()
                    }, 1000);
                } else if ("g" == f) {
                    if ((lol[3] << 8 | lol[4]) == this.snakeID) {
                        this.snakeX = lol[5] << 8 | lol[6];
                        this.snakeY = lol[7] << 8 | lol[8];
                    }
                } else if ("n" == f) {
                    if ((lol[3] << 8 | lol[4]) == this.snakeID) {
                        this.snakeX = lol[5] << 8 | lol[6];
                        this.snakeY = lol[7] << 8 | lol[8];
                    }
                } else if ("G" == f) {
                    if ((lol[3] << 8 | lol[4]) == this.snakeID) {
                        this.snakeX = this.snakeX + lol[5] - 128;
                        this.snakeY = this.snakeY + lol[6] - 128;
                    }
                } else if ("N" == f) {
                    if ((lol[3] << 8 | lol[4]) == this.snakeID) {
                        this.snakeX = this.snakeX + lol[5] - 128;
                        this.snakeY = this.snakeY + lol[6] - 128;
                    }

                } else if ("s" == f) {
                    if (!this.haveSnakeID) {
                        this.snakeID = lol[3] << 8 | lol[4];
                        this.haveSnakeID = true;
                    }
                    if ((lol[3] << 8 | lol[4]) == this.snakeID) {
                        if (lol.length >= 31) {
                            snakeSpeed = (lol[12] << 8 | lol[13]) / 1e3;

                        }
                        if (lol.length >= 31 && (((((lol[18] << 16) | (lol[19] << 8) | lol[20]) / 5.0) > 99) || ((((lol[21] << 16) | (lol[22] << 8) | lol[23]) / 5.0) > 99))) {
                            this.snakeX = ((lol[18] << 16) | (lol[19] << 8) | lol[20]) / 5.0;
                            this.snakeY = ((lol[21] << 16) | (lol[22] << 8) | lol[23]) / 5.0;
                        }
                    }

                } else if ("g" || "n" || "G" || "N" && (lol[3] << 8 | lol[4]) === this.snakeID) {

                    if (lastPacket != null) {
                        var deltaTime = Date.now() - lastPacket;


                        var distance = snakeSpeed * deltaTime / 4.0;
                        this.snakeX += Math.cos(this.snakeAngle) * distance;
                        this.snakeY += Math.sin(this.snakeAngle) * distance;
                    }
                    lastPacket = Date.now();

                }
            }
        }
        moveTo(x, y) {
            //var randomInt = getRandomInt(-25, 25);
            var value = this.getValue(this.snakeX, this.snakeY, x, y);
            this.snakeAngle = value;
            if (value < 0 || value > 250) {
                console.log("Error!");
            }
            //

            //console.log("x "+this.snakeX+" y "+this.snakeY + " v "+Math.ceil(value));
            //var buf = new Buffer(value * 251 / (2*Math.PI));
            this.send([~~value]);
        }
        getValue(originX, originY, targetX, targetY) {
            var dx = originX - targetX;
            var dy = originY - targetY;
            var theta = Math.atan2(-dy, -dx);
            theta *= 125 / Math.PI; // [0, 180] then [-180, 0]; clockwise; 0° = east
            if (theta < 0) theta += 250; // [0, 360]; clockwise; 0° = east

            return theta
        }
        rotateKey(secret) {
            var result = new Uint8Array(24);
            var globalValue = 0;
            for (var i = 0; i < 24; i++) {
                var value1 = secret[17 + i * 2];
                if (value1 <= 96) {
                    value1 += 32;
                }
                value1 = (value1 - 98 - i * 34) % 26;
                if (value1 < 0) {
                    value1 += 26;
                }

                var value2 = secret[18 + i * 2];
                if (value2 <= 96) {
                    value2 += 32;
                }
                value2 = (value2 - 115 - i * 34) % 26;
                if (value2 < 0) {
                    value2 += 26;
                }

                var interimResult = (value1 << 4) | value2;
                var offset = interimResult >= 97 ? 97 : 65;
                interimResult -= offset;
                if (i == 0) {
                    globalValue = 2 + interimResult;
                }
                result[i] = ((interimResult + globalValue) % 26 + offset);
                globalValue += 3 + interimResult;
            }

            return result;
        }
        onerror(err) {
            console.log('err')
        };
        split() {
            this.send([17])
        }
        eject() {
            this.send([21])
        }
        close() {
            this.socket.close()
        }
        log(msg) {
            console.log(msg);
        }
        send(buf) {
            if (this.socket.readyState === WebSocket.OPEN) {
                this.socket.send(buf)
            }
        }
    }
module.exports = test