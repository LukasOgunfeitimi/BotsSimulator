// ==UserScript==
// @name         lukas
// @namespace    xD
// @version      47
// @description  The best bots for popular agar.io clone games.
// @author       lukas
// @match        *.imsolo.pro/*
// @match        *.de.agar.bio/*
// @match        *.bublex.io/*
// @match        *.slither.io/*
// @match        *.agarr.live/*
// @match        *.sakuragame.starfree.jp/*
// @match        *.agar.live/*
// @match        *.cirlzgame.tk/*
// @match        *.cell.sh/*
// @match        *.agarix.ru/*
// @match        *.ryuten.io/*
// @match        *.senpa.io/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

let clientIP = 'ws://127.0.0.1:8083/';
var test

function parseData(data) {
    if (data instanceof DataView)
        data = new Uint8Array(data.buffer);
    else if (data instanceof ArrayBuffer)
        data = new Uint8Array(data);
    else
        try { data = JSON.parse(data); } catch (err) {}
    return data;
}
class Client {
    constructor(server) {
        this.server = server;
        this.ws = null;
        this.gameServer;
        this.moveBots = 0;
        this.x = 0;
        this.y = 0;
        this.byteLength = 0;
        this.data
        this.addListener();
        this.connect();
        this.connected = 0;
    }
    connect(msg) {
        this.ws = new WebSocket(this.server);
        this.ws.onopen = this.onopen.bind(this)
        this.ws.onerror = this.onerror.bind(this)
        this.ws.onmessage = this.onmessage.bind(this)
        this.log('Client: Connecting to server...');
        setTimeout(() => {
            var box = document.getElementById('start')
            box.style.backgroundColor = 'red'
            this.tryGetSenpa();
            box.addEventListener('click', (event) => {
                if (box.style.backgroundColor === 'red') {
                    box.innerText = 'START'
                    box.style.backgroundColor = 'green'
                    if (this.gameServer !== undefined) {
                        this.send(JSON.stringify({
                            type: 'lxbauth',
                            origin: location.origin,
                            server: this.gameServer,
                            //tag: document.getElementById("team-input").value,
                            //pin: document.getElementById("pin-input").value
                        }));
                    }
                    // }
                } else {
                    box.innerText = 'STOP'
                    box.style.backgroundColor = 'red'
                    this.send(JSON.stringify({
                        type: 'bye'
                    }))

                }
            });
        }, 2000);
    }
    tryGetSenpa() {
        if (window.Socket?.ws) this.gameServer = (window.Socket.ws.url);
    }
    onopen() {
        this.ws.onclose = this.onclose.bind(this)
        this.log('Client: Success connecting.');
        setInterval(() => {
            //console.log(this.x, this.y)
            this.send(JSON.stringify({
                type: 'mouse',
                x: this.x,
                y : this.y

            }))
        }, 40)
        /*
        setInterval(()=>{
            this.send(JSON.stringify({
                type: 'mouse',
                x: snake.xx,
                y: snake.yy
            }))
        },100)
        */
        this.startMoving()
        // this.generateTokens();
        var box = document.getElementById('box')
        document.getElementById('box').childNodes[0].nodeValue = 'connected'
        document.querySelector('.circle-loader').classList.toggle('load-complete');
        document.querySelector('.checkmark').style.display = ''
        setTimeout(() => {
            document.querySelector('.circle-loader').style.visibility = 'hidden';
            document.getElementById('box').style.height = '145px'
            document.getElementById('box').style.backgroundColor = 'orange'
            document.getElementById('start').style.opacity = 1
            document.getElementById('start').style.top = '83px';
        }, 1000);
    }
    generateTokens() {
        setInterval(() => {
            window.gotacaptcha.execute('6LcycFwUAAAAANrun52k-J1_eNnF9zeLvgfJZSY3').then(token => {
                this.send(JSON.stringify({
                    type: 'captcha',
                    token: token
                }))
            })
        }, 750)
    }

    onmessage(msg) {
        var newMsg = JSON.parse(msg.data)
        switch (newMsg.type) {
            case 'connection':
                switch (newMsg.status) {
                    case 'open':
                        this.connected++
                        document.getElementById('bots').innerText = `${this.connected}`
                        break
                    case 'close':
                        this.connected--
                        document.getElementById('bots').innerText = `${this.connected}`
                        break
                    case 'reset':
                        this.connected = 0
                        document.getElementById('bots').innerText = `${this.connected}`
                }
        }
    }
    onerror(e) {
        //setTimeout(this.connect.bind(this), 500);
        this.log('Client: Error connecting.');
        document.getElementById('box').childNodes[0].nodeValue = 'errored out'
    }
    onclose(e) {
        //setTimeout(this.connect.bind(this), 500);
        this.log('Client: Connection closed.');
        document.getElementById('box').childNodes[0].nodeValue = 'closed'
    }
    split() {
        this.send(JSON.stringify({
            type: 'split'
        }))
    }
    eject() {
        this.send(JSON.stringify({
            type: 'eject'
        }))
    }
    addListener() {
        document.addEventListener('mousemove', event => {
            this.xPos = event.screenX; //bots will follow the x position of your mouse
            this.yPos = event.screenY; //bots will follow the y position of your mouse
        });
        document.addEventListener('keydown', k => {
            var key = k.keyCode;
            switch (key) {
                case "E".charCodeAt(0): // keyCode of E is 69
                    this.split();
                    break;
                case "R".charCodeAt(0): // keyCode of R is 82
                    this.eject();
                    break;
            }
        });
    }
    startMoving() {
        WebSocket.prototype.realSend = WebSocket.prototype.send;
        WebSocket.prototype.send = function(pkt) {
            this.realSend(pkt);
            if (typeof pkt == 'string') return;
            if (this.url.includes('localhost')) return;
            if (this.url.includes('127.0.0.1')) return;
            if (pkt instanceof ArrayBuffer) pkt = new DataView(pkt);
            else if (pkt instanceof DataView) pkt = pkt;
            else pkt = new DataView(pkt.buffer);
            if (test.gameServer !== this.url) test.gameServer = this.url
            switch (pkt.getUint8(0, true)) {
                case 16:
                    /*
                    test.x = pkt.getInt32(1, true)
                    test.y = pkt.getInt32(5, true)
                    */
            }
        }


        switch (location.origin) {
            case 'https://ryuten.io':
                DataView.prototype.realSet = DataView.prototype.setUint16
                DataView.prototype.setUint16 = function() {
                    this.realSet(...arguments)
                    const type = this.getUint8()
                    const offset = type === 30 ? 2 : type === 41 ? 1 : 0
                    const bufferOffset = arguments[0]
                    const buffer = arguments[1]
                    switch (bufferOffset) {
                        case offset:
                            test.x = buffer | 0
                            break
                        case offset + 2:
                            test.y = buffer | 0
                            break
                    }
                }
                break;
            case 'https://senpa.io':
                DataView.prototype.realSet = DataView.prototype.setInt32
                DataView.prototype.setInt32 = function() {
                    this.realSet(...arguments)
                    const offset = 2 + this.getUint8(1) ^ 1;
                    const bufferOffset = arguments[0]
                    const buffer = arguments[1]
                    switch (bufferOffset) {
                        case offset:
                            test.x = buffer | 0
                            break
                        case offset + 4:
                            test.y = buffer | 0
                            break
                    }
                }
                break;
        }

    }

    log(msg) {
        console.log(msg);
    }
    send(buf) {
        if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return; // if connection isn't opened return.
        this.ws.send(buf); //send something.
    }
}

class GUI {
    constructor() {
        this.createGUI();
    }
    createGUI() {
        document.body.insertAdjacentHTML('afterbegin', `
<body>
<div id='box'>connecting
<div id='bots'>0
</div>
<div class="circle-loader">
<div class="checkmark draw"></div>
</div>
<div id='start'>START</div>
</div>
<style>
#start {
position: absolute;
display: block;
background-color: red;
align-content: center;
margin: 10px;
padding: 0px 15px 0px 15px;
top: 100%;
z-index: 100000;
visibility: visible;
opacity: 0;
transition: all 1s ease-in;
-khtml-user-select: none;
}

#box {
position: absolute;
height: 188.5px;
left: 10px;
margin: 20px auto;
padding: 0px 10px 30px 10px;
z-index: 100000;
vertical-align: top;
background-color: #6b1111;
color: white;
font-family: Oswald;
font-weight: bold;
font-size: 30px;
animation: 1.5s ease-out 0s 1 slideInFromLeft;
transition: background-color 3s;
transition-property: height;
transition-duration: 2s;
transition-delay: 0s;
transition: all 2.5s ease-out;
border-radius: 10px;
}

@keyframes slideInFromLeft {
0% {
transform: translateX(-100%);
}
100% {
transform: translateX(0);
}
}

.circle-loader {
position: relative;
border: 5px solid rgba(0, 0, 0, 0.2);
border-left-color: #5cb85c;
animation: loader-spin 1s infinite linear;
border-radius: 50%;
left: 21px;
width: 3em;
height: 3em;
}

.load-complete {
-webkit-animation: none;
animation: none;
border-color: #5cb85c;
transition: border 500ms ease-out;
}

.checkmark {
display: none;
bottom: -10px;
left: 13px;
}

.checkmark::after {

animation-duration: 300ms;
animation-timing-function: ease;
animation-name: checkmark;
transform: scaleX(-1) rotate(135deg);
opacity: 1;
height: 1.75em;
width: 0.875em;
transform-origin: left top;
border-right: 3px solid #5cb85c;
border-top: 3px solid #5cb85c;
content: '';
position: absolute;
bottom: -10px;
left: 13px;
}

@keyframes loader-spin {
0% {
transform: rotate(0deg);
}
100% {
transform: rotate(360deg);
}
}

@keyframes checkmark {
0% {
height: 1em;
width: 2;
opacity: 1;
bottom: -10px;
left: 13px;
}
20% {
height: 1.25em;
width: 2;
opacity: 1;
bottom: -10px;
left: 13px;
}
40% {
height: 1.5em;
width: 2;
bottom: -10px;
left: 13px;
opacity: 1;
}
100% {
height: 1.75em;
width: 2;
opacity: 1;
bottom: -10px;
left: 13px;
}
}
</style>
</body>
</style>
<script>
document.getElementById('start').click();
document.querySelector('.checkmark').style.display = 'none'
</script>
</body>
`);
    }
}
//Load constructors
if (location.origin.includes('gota.io')) {
    var captchaInt = setInterval(() => {
        if (window.grecaptcha) {
            window.gotacaptcha = window.grecaptcha
            clearInterval(captchaInt)
        }
    })
    }
setTimeout(() => {
    test = new Client(clientIP);
}, 3000);
setTimeout(() => {
    new GUI();
}, 2000);