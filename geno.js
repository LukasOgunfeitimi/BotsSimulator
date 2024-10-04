(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[901], {
    5926: function(a, b, c) {
        "use strict";
        c.d(b, {
            Z: function() {
                return aW
            }
        });
        var d = c(1438)
          , e = c(2951)
          , f = !0
          , g = null
          , h = 0
          , i = 0
          , j = function() {
            var a = g.getUint8(h);
            return h++,
            a
        }
          , k = function() {
            var a = g.getUint16(h, f);
            return h += 2,
            a
        }
          , l = function() {
            var a = g.getUint32(h, f);
            return h += 4,
            a
        }
          , m = function() {
            var a = g.getFloat32(h, f);
            return h += 4,
            a
        }
          , n = function() {
            for (var a = "", b = j(), c = 0; c < b; c++) {
                var d = k();
                a += String.fromCharCode(d)
            }
            return a
        }
          , o = {
            init: function(a) {
                g = new DataView(a),
                h = 0,
                i = g.byteLength
            }
        }
          , p = c(1069)
          , q = {
            handle: function() {
                var a = j()
                  , b = j()
                  , c = k();
                p.Z.set({
                    dualMode: a,
                    ejectSpeed: b,
                    maxCells: c
                })
            }
        }
          , r = c(5354)
          , s = c(825)
          , t = {
            handle: function() {
                var a = j();
                r.Z.setType(a);
                var b = k()
                  , c = k()
                  , d = c - b;
                r.Z.setPoints({
                    left: b,
                    right: c,
                    centerX: c + b >> 1,
                    centerY: c + b >> 1,
                    edge: d
                }),
                s.Z.setPoints({
                    left: b,
                    edge: d
                })
            }
        }
          , u = c(4906)
          , v = c(2024)
          , w = {
            handle: function() {
                u.h.get("settings").settings.autoSwitchCell && (v.Z.tab = j())
            }
        }
          , x = c(9995)
          , y = c(1754)
          , z = {
            1: "serverInfo",
            2: "border",
            3: "switchTab",
            4: "world",
            5: "spectate",
            6: "chat",
            7: "commander",
            8: "allies",
            9: "leaderboard",
            10: "teams",
            11: "playerList",
            12: "playerUpdate",
            13: "playerRemove",
            14: "clearWorld",
            15: "pong",
            flags: {
                worldFlags: {
                    isVirus: 1,
                    isEjected: 2,
                    isFood: 4,
                    isFriend: 8,
                    tab: 16,
                    ownerId: 32
                },
                allies: {
                    isTab1Alive: 1,
                    isTab2Alive: 2
                },
                playerList: {
                    isBot: 1,
                    tag: 2,
                    nickname: 4,
                    color1: 8,
                    color2: 16,
                    skin1: 32,
                    skin2: 64
                },
                playerUpdate: {
                    tag: 1,
                    nickname: 2,
                    color1: 4,
                    color2: 8,
                    skin1: 16,
                    skin2: 32
                }
            }
        }
          , A = {
            switchTab: 0,
            spawn: 1,
            spectate: 2,
            freeSpectate: 3,
            tag: 4,
            pin: 5,
            nickname: 6,
            skin: 7,
            eject: 8,
            split: 9,
            mouse: 10,
            chat: 11,
            commander: 12,
            ping: 13,
            handshake: 14,
            login: 15
        }
          , B = z.flags.worldFlags
          , C = {
            newcells: function() {
                for (var a = k(), b = 0; b < a; b++) {
                    var c = {
                        id: l(),
                        x: k(),
                        y: k(),
                        radius: k()
                    }
                      , d = j();
                    d & B.isVirus && (c.isVirus = !0),
                    d & B.isEjected && (c.isEjected = !0),
                    d & B.isFood && (c.isFood = !0),
                    d & B.isFriend && (c.friendId = l()),
                    d & B.tab && (c.tab = j()),
                    d & B.ownerId && (c.ownerId = l()),
                    y.Z.setPlanet(c)
                }
            },
            updatecells: function() {
                for (var a = k(), b = 0; b < a; b++) {
                    var c = {
                        id: l(),
                        x: k(),
                        y: k(),
                        radius: k()
                    };
                    y.Z.updatePlanet(c)
                }
            },
            mergedcells: function() {
                for (var a = k(), b = 0; b < a; b++) {
                    var c = l()
                      , d = l();
                    y.Z.suckPlanet(d, c)
                }
            },
            removecells: function() {
                for (var a = k(), b = 0; b < a; b++)
                    y.Z.removePlanet(l())
            }
        }
          , D = c(7906)
          , E = {
            handle: function() {
                var a = k()
                  , b = k()
                  , c = m();
                D.Z.setSpectate(a, b, c)
            }
        }
          , F = {
            handle: function() {
                var a = j()
                  , b = j()
                  , c = l()
                  , d = n()
                  , e = x.Z.get(c);
                if (e) {
                    var f = {
                        type: b,
                        time: new Date().toLocaleString("en-US", {
                            hour12: !0,
                            timeStyle: "short"
                        }),
                        nickname: e.nickname,
                        message: d
                    }
                      , g = a ? "global" : "team";
                    u.h.dispatch("chatbox/".concat(g, "/render"), f)
                }
            }
        }
          , G = c(5975)
          , H = {
            handle: function() {
                G.Z.set({
                    x: k(),
                    y: k()
                })
            }
        }
          , I = c(828)
          , J = c(7698)
          , K = z.flags.allies
          , L = function(a) {
            var b = j();
            if (p.Z.dualMode)
                for (var c = 1; c <= 2; c++)
                    a["isTab".concat(c, "Alive")] = b & K["isTab".concat(c, "Alive")],
                    a["isTab".concat(c, "Alive")] && (a["tab".concat(c)].x = k(),
                    a["tab".concat(c)].y = k());
            else
                a.coordinates.x = k(),
                a.coordinates.y = k()
        }
          , M = {
            newAllies: function() {
                for (var a = j(), b = 0; b < a; b++) {
                    var c = l()
                      , d = x.Z.get(c);
                    d.isAllie = !0;
                    var e = d.allie;
                    L(e),
                    e.totalMass = (0,
                    J.Ch)(l())
                }
            },
            oldAllies: function() {
                for (var a = j(), b = 0; b < a; b++) {
                    var c = l()
                      , d = x.Z.get(c);
                    d.isAllie = !0;
                    var e = d.allie;
                    L(e),
                    e.totalMass = (0,
                    J.Ch)(l())
                }
            },
            removeAllies: function() {
                for (var a = j(), b = 0; b < a; b++) {
                    var c = l()
                      , d = x.Z.get(c);
                    d && (d.isAllie = !1)
                }
            },
            render: function() {
                var a = Array.from(x.Z.list).filter(function(a) {
                    return (0,
                    I.Z)(a, 2)[1].isAllie
                });
                v.Z.isAlive && a.unshift([v.Z.id, v.Z]),
                u.h.dispatch("teammates/render", a)
            }
        }
          , N = c(6377)
          , O = c.n(N)
          , P = function(a) {
            var b = O()(a).int32();
            return b = (b % R.length + R.length) % R.length,
            R[b]
        }
          , Q = P
          , R = ["#ff5252", "#FF4081", "#E040FB", "#7C4DFF", "#536DFE", "#448AFF", "#40C4FF", "#FFFF00", "#FFD740", "#FFAB40", "#FF6E40", "#ff1744", "#F50057", "#D500F9", "#651FFF", "#3D5AFE", "#2979FF", "#00B0FF", "#00E5FF", "#1DE9B6", "#00E676", "#FFEA00", "#FFC400", "#FF9100", "#FF3D00", "#AA00FF", "#304FFE", "#2962FF", "#0091EA", "#00B8D4", "#00BFA5", "#00C853", "#64DD17", "#AEEA00", "#FFD600", "#FFAB00", "#FF6D00", "#DD2C00"]
          , S = new Set
          , T = function() {
            S.clear();
            for (var a = j(), b = 1; b <= a; b++) {
                var c = l()
                  , d = x.Z.get(c)
                  , e = l();
                if (!d)
                    return;
                S.add({
                    isSelf: false,
                    tag: d.tag,
                    color: "",
                    nickname: d.nickname || String(~~(Math.random() * 1000)),
                    mass: (0,
                    J.Ch)(e),
                    index: b
                })
            }
            u.h.dispatch("leaderboard/render", Array.from(S))
        }
          , U = {
            handle: T
        }
          , V = new Set
          , W = function() {
            V.clear();
            for (var a = j(), b = 1; b <= a; b++) {
                var c = n()
                  , d = j()
                  , e = (0,
                J.Ch)(l())
                  , f = Q("[".concat(c, "] "))
                  , g = v.Z.tag === c;
                V.add({
                    isSelf: g,
                    tag: c,
                    size: d,
                    mass: e,
                    color: f,
                    index: b
                })
            }
            u.h.dispatch("teams/render", Array.from(V))
        }
          , X = {
            handle: W
        }
          , Y = c(4045)
          , Z = z.flags.playerList
          , $ = function() {
            var a = l();
            v.Z.setId(a);
            for (var b = k(), c = 0; c < b; c++) {
                var d = l()
                  , e = j();
                new Y.Z(d,{
                    isBot: e & Z.isBot && !0,
                    tag: e & Z.tag && n(),
                    nickname: e & Z.nickname && n(),
                    color1: e & Z.color1 && [j(), j(), j()],
                    color2: e & Z.color2 && [j(), j(), j()],
                    skin1: e & Z.skin1 && n(),
                    skin2: e & Z.skin2 && n()
                })
            }
        }
          , _ = {
            handle: $
        }
          , aa = z.flags.playerUpdate
          , ab = function() {
            var a = l()
              , b = j();
            x.Z.update({
                id: a,
                tag: b & aa.tag && n(),
                nickname: b & aa.nickname && n(),
                color1: b & aa.color1 && [j(), j(), j()],
                color2: b & aa.color2 && [j(), j(), j()],
                skin1: b & aa.skin1 && n(),
                skin2: b & aa.skin2 && n()
            })
        }
          , ac = {
            handle: ab
        }
          , ad = function() {
            x.Z.remove(l())
        }
          , ae = {
            handle: ad
        }
          , af = function() {
            y.Z.clear()
        }
          , ag = {
            handle: af
        }
          , ah = function() {
            var a = Date.now();
            aW.latency = a - aW.lastPing
        }
          , ai = {
            handle: ah
        }
          , aj = function() {
            q.handle()
        }
          , ak = function() {
            t.handle()
        }
          , al = function() {
            w.handle()
        }
          , am = function() {
            C.newcells(),
            C.updatecells(),
            C.mergedcells(),
            C.removecells()
        }
          , an = function() {
            E.handle()
        }
          , ao = function() {
            F.handle()
        }
          , ap = function() {
            H.handle()
        }
          , aq = function() {
            M.newAllies(),
            M.oldAllies(),
            M.removeAllies(),
            M.render()
        }
          , ar = function() {
            U.handle()
        }
          , as = function() {
            X.handle()
        }
          , at = function() {
            _.handle()
        }
          , au = function() {
            ac.handle()
        }
          , av = function() {
            ae.handle()
        }
          , aw = function() {
            ag.handle()
        }
          , ax = function() {
            ai.handle()
        }
          , ay = {
            serverInfo: aj,
            border: ak,
            switchTab: al,
            world: am,
            spectate: an,
            chat: ao,
            commander: ap,
            allies: aq,
            leaderboard: ar,
            teams: as,
            playerList: at,
            playerUpdate: au,
            playerRemove: av,
            clearWorld: aw,
            pong: ax
        }
          , az = new Set
          , aA = 0
          , aB = function(a) {
            !(a < 0) && !(a > 255) && (az.add([a, "Uint8", 1]),
            aA++)
        }
          , aC = function(a) {
            a < 0 || a > 65535 || (az.add([a, "Uint16", 2]),
            aA += 2)
        }
          , aD = function(a) {
            aB(a.length);
            for (var b = 0; b < a.length; b++)
                aB(a.charCodeAt(b))
        }
          , aE = function(a) {
            aB(a.length);
            for (var b = 0; b < a.length; b++)
                aC(a.charCodeAt(b))
        }
          , aF = {
            init: function() {
                az.clear(),
                aA = 0
            },
            buffer: function() {
                var a = 0
                  , b = new DataView(new ArrayBuffer(aA))
                  , c = !0
                  , d = !1
                  , e = void 0;
                try {
                    for (var f, g = az[Symbol.iterator](); !(c = (f = g.next()).done); c = !0) {
                        var h = f.value
                          , i = (0,
                        I.Z)(h, 3)
                          , j = i[0]
                          , k = i[1]
                          , l = i[2];
                        b["set".concat(k)](a, j, !0),
                        a += l
                    }
                } catch (m) {
                    d = !0,
                    e = m
                } finally {
                    try {
                        c || null == g.return || g.return()
                    } finally {
                        if (d)
                            throw e
                    }
                }
                return b.buffer
            }
        }
          , aG = {
            handle: function() {
                aB(v.Z.tab)
            }
        }
          , aH = {
            handle: function() {
                v.Z.setMenu(!1)
            }
        }
          , aI = {
            handle: function() {
                v.Z.setMenu(!1)
            }
        }
          , aJ = {
            handle: function() {
                var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v.Z.tag;
                aE(a)
            }
        }
          , aK = {
            handle: function() {
                var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v.Z.pin;
                aE(a)
            }
        }
          , aL = {
            handle: function() {
                var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v.Z.nickname;
                aE(a)
            }
        }
          , aM = {
            handle: function() {
                aD(v.Z.skin1),
                aD(v.Z.skin2)
            }
        }
          , aN = {
            handle: function(a) {
                aB(a)
            }
        }
          , aO = {
            handle: function(a) {
                aB(a)
            }
        }
          , aP = c(3912)
          , aQ = {
            handle: function(a) {
                aB(a),
                aC(aP.Z.mouseX),
                aC(aP.Z.mouseY)
            }
        }
          , aR = {
            handle: function(a, b) {
                aB(v.Z.isGlobalChat),
                aB(b),
                aE(a)
            }
        }
          , aS = {
            handle: function(a, b) {
                aC(aP.Z.mouseX),
                aC(aP.Z.mouseY)
            }
        }
          , aT = {
            handle: function() {
                aW.lastPing = Date.now()
            }
        }
          , aU = {
            handle: function() {}
        }
          , aV = {
            switchTab: function() {
                aG.handle()
            },
            spawn: function() {
                aH.handle()
            },
            spectate: function() {
                aI.handle()
            },
            freeSpectate: function() {},
            tag: function() {
                aJ.handle()
            },
            pin: function() {
                aK.handle()
            },
            nickname: function() {
                aL.handle()
            },
            skin: function() {
                aM.handle()
            },
            eject: function(a) {
                aN.handle(a)
            },
            split: function(a) {
                aO.handle(a)
            },
            mouse: function(a) {
                aQ.handle(a)
            },
            chat: function(a, b) {
                aR.handle(a, b)
            },
            commander: function() {
                aS.handle()
            },
            ping: function() {
                aT.handle()
            },
            handshake: function() {
                aU.handle()
            },
            login: function() {}
        }
          , aW = new (function() {
            function a() {
                (0,
                d.Z)(this, a),
                this.ip = "",
                this.ws = "",
                this.localhost = !1,
                this.pingInterval = null,
                this.latency = 0,
                this.lastPing = 0,
                this.fakeDelay = 20
            }
            return (0,
            e.Z)(a, [{
                key: "readyToSend",
                get: function() {
                    return this.ip && this.ws && 1 === this.ws.readyState
                }
            }, {
                key: "connect",
                value: function(a) {
                    var b = this;
                    this.ws && a && this.clearData(),
                    this.localhost = "localhost" === location.hostname || a && (a.includes("localhost") || a.includes("127.0.0.1")),
                    this.ip = this.localhost ? "ws://localhost:2053" : "wss://europe.dual-geno.me/domination",
                    this.ws = new WebSocket(this.ip),
                    this.ws.binaryType = "arraybuffer",
                    this.ws.onopen = function() {
                        b.onOpen()
                    }
                    ,
                    this.ws.onmessage = function(a) {
                        var c = a.data;
                        if (b.localhost) {
                            setTimeout(function() {
                                b.onReceive(c)
                            }, b.fakeDelay);
                            return
                        }
                        b.onReceive(c)
                    }
                    ,
                    this.ws.onerror = function() {
                        b.onError()
                    }
                    ,
                    this.ws.onclose = function(a) {
                        b.onClose(a)
                    }
                }
            }, {
                key: "onOpen",
                value: function() {
                    var a = this;
                    this.send("handshake"),
                    this.send("tag"),
                    this.send("pin"),
                    this.send("nickname"),
                    this.send("skin"),
                    this.send("ping"),
                    this.pingInterval = setInterval(function() {
                        a.send("ping")
                    }, 5e3)
                }
            }, {
                key: "onReceive",
                value: function(a) {
                    o.init(a),
                    ay[z[k()]]()
                }
            }, {
                key: "send",
                value: function(a, b) {
                    if (this.readyToSend) {
                        if (this.localhost) {
                            this.ship(a, b);
                            return
                        }
                        this.ship(a, b)
                    }
                }
            }, {
                key: "ship",
                value: function(a, b) {
                    var c = A[a];
                    aF.init(),
                    aB(c),
                    aV[a](b),
                    this.ws.send(aF.buffer())
                }
            }, {
                key: "onError",
                value: function() {
                    console.log("socket error")
                }
            }, {
                key: "onClose",
                value: function(a) {
                    console.log("socket close", a)
                }
            }, {
                key: "clearData",
                value: function() {
                    this.ws.close(),
                    this.ip = "",
                    this.ws = null,
                    this.localhost = !1,
                    clearInterval(this.pingInterval),
                    this.latency = 0,
                    this.lastPing = 0,
                    y.Z.clear()
                }
            }]),
            a
        }())
    },
    4045: function(a, b, c) {
        "use strict";
        var d = c(1438)
          , e = c(2951)
          , f = c(6042)
          , g = c(9995)
          , h = c(5354)
          , i = function() {
            function a(b, c) {
                var e = c.isBot
                  , f = c.tag
                  , h = c.nickname
                  , i = c.color1
                  , j = c.color2
                  , k = c.skin1
                  , l = c.skin2;
                (0,
                d.Z)(this, a),
                this.id = b,
                this.isBot = e || !1,
                this.tag = f || "",
                this.nickname = h || "",
                this.color1 = i || [0, 0, 0],
                this.color2 = j || [0, 0, 0],
                this.skin1 = k || "",
                this.skin2 = l || "",
                this.isAllie = !1,
                this._allie = {
                    isTab1Alive: !1,
                    isTab2Alive: !1,
                    tab1: {},
                    tab2: {},
                    coordinates: {},
                    totalMass: 0
                },
                g.Z.add(this)
            }
            return (0,
            e.Z)(a, [{
                key: "isSelf",
                get: function() {
                    return this.id === g.Z.ownId
                }
            }, {
                key: "allie",
                get: function() {
                    return this._allie
                },
                set: function(a) {
                    this._allie = (0,
                    f.Z)({}, this._allie, a)
                }
            }, {
                key: "totalMass",
                get: function() {
                    return this.allie.totalMass
                }
            }, {
                key: "alliePosition",
                value: function(a) {
                    if (!a)
                        return {
                            x: 0,
                            y: 0
                        };
                    var b = h.Z.points
                      , c = b.left
                      , d = b.top
                      , e = b.edge
                      , f = (a.x - c) / e
                      , g = (a.y - d) / e;
                    return {
                        x: Math.round(200 * f * 100) / 100,
                        y: Math.round(200 * g * 100) / 100
                    }
                }
            }]),
            a
        }();
        b.Z = i
    },
    825: function(a, b, c) {
        "use strict";
        var d = c(1438)
          , e = c(2951)
          , f = c(4662)
          , g = c(4906)
          , h = c(6866)
          , i = function() {
            function a() {
                (0,
                d.Z)(this, a);
                var b = g.h.get("theming").theming;
                this.image = new Image,
                this.sprite = f.jyi.from(h.Z.texture),
                this.url = b.backgroundUrl
            }
            return (0,
            e.Z)(a, [{
                key: "setPoints",
                value: function(a) {
                    var b = a.left
                      , c = a.edge;
                    this.sprite.position.set(b, b),
                    this.sprite.width = c,
                    this.sprite.height = c,
                    this.sprite.edge = c
                }
            }]),
            a
        }();
        b.Z = new i
    },
    5354: function(a, b, c) {
        "use strict";
        var d = c(1438)
          , e = c(2951)
          , f = c(4662)
          , g = c(6965)
          , h = function() {
            function a() {
                (0,
                d.Z)(this, a),
                this.points = {},
                this.graphics = new f.TCu,
                this.glow = f.jyi.from(g.Z.borderGlow),
                this.glow.filters = [g.Z.borderGlow.filter]
            }
            return (0,
            e.Z)(a, [{
                key: "init",
                value: function() {}
            }, {
                key: "setType",
                value: function(a) {
                    this.points.type = a
                }
            }, {
                key: "setPoints",
                value: function(a) {
                    var b = a.left
                      , c = a.right
                      , d = a.centerX
                      , e = a.centerY
                      , f = a.edge;
                    this.points.left = this.points.top = b,
                    this.points.right = this.points.bottom = c,
                    this.points.centerX = d,
                    this.points.centerY = e,
                    this.points.edge = f
                }
            }]),
            a
        }();
        b.Z = new h
    },
    7906: function(a, b, c) {
        "use strict";
        var d = c(1438)
          , e = c(2951)
          , f = c(4906)
          , g = c(1754)
          , h = c(3912)
          , i = function() {
            function a() {
                (0,
                d.Z)(this, a),
                this.viewX = 0,
                this.viewY = 0,
                this.viewSize = 0,
                this.camX = 0,
                this.camY = 0,
                this.targetViewport = 0,
                this.viewport = 0
            }
            return (0,
            e.Z)(a, [{
                key: "init",
                value: function() {}
            }, {
                key: "update",
                value: function() {
                    this.move(),
                    this.updateView()
                }
            }, {
                key: "move",
                value: function() {
                    if (g.Z.self.size) {
                        var a = f.h.get("settings").settings;
                        g.Z.setSelfView(),
                        this.camX += (this.viewX - this.camX) / a.cameraDelay,
                        this.camY += (this.viewY - this.camY) / a.cameraDelay;
                        return
                    }
                    this.camX = (29 * this.camX + this.viewX) / 30,
                    this.camY = (29 * this.camY + this.viewY) / 30
                }
            }, {
                key: "updateView",
                value: function() {
                    this.targetViewport = h.Z.scroll,
                    this.viewport += (this.targetViewport - this.viewport) / 8
                }
            }, {
                key: "setSpectate",
                value: function(a, b, c) {
                    this.viewX = a,
                    this.viewY = b,
                    this.viewSize = c
                }
            }]),
            a
        }();
        b.Z = new i
    },
    5975: function(a, b, c) {
        "use strict";
        var d = c(1438)
          , e = c(2951)
          , f = c(4662)
          , g = c(6965)
          , h = function() {
            function a() {
                (0,
                d.Z)(this, a),
                this.points = new Set
            }
            return (0,
            e.Z)(a, [{
                key: "delete",
                value: function(a) {
                    a.sprite.destroy(),
                    this.points.delete(a)
                }
            }, {
                key: "set",
                value: function(a) {
                    var b = a.x
                      , c = a.y;
                    this.points.add({
                        x: b,
                        y: c,
                        createdAt: Date.now(),
                        sprite: new f.jyi(g.Z.commander)
                    })
                }
            }]),
            a
        }();
        b.Z = new h
    },
    3912: function(a, b, c) {
        "use strict";
        var d = c(1438)
          , e = c(2951)
          , f = c(4906)
          , g = c(2024)
          , h = c(3337)
          , i = c(7906)
          , j = function() {
            function a() {
                (0,
                d.Z)(this, a),
                this.clientX = 0,
                this.clientY = 0,
                this.mouseX = 0,
                this.mouseY = 0,
                this.scroll = .1,
                this.scrollDelta = 1,
                this.scrollMin = .016,
                this.scrollMax = .79
            }
            return (0,
            e.Z)(a, [{
                key: "update",
                value: function() {
                    g.Z.menuOpen || (this.mouseX = (this.clientX - window.innerWidth / 2) / this.scroll + i.Z.camX,
                    this.mouseY = (this.clientY - window.innerHeight / 2) / this.scroll + i.Z.camY,
                    this.scroll = this.lerp(this.scroll, this.scrollDelta, .1))
                }
            }, {
                key: "mouseMove",
                value: function(a) {
                    var b = a.clientX
                      , c = a.clientY;
                    this.clientX = b,
                    this.clientY = c
                }
            }, {
                key: "wheel",
                value: function(a) {
                    var b = a.target
                      , c = a.wheelDelta;
                    if (!h.default.canvas || h.default.canvas.view === b) {
                        var d = f.h.get("settings").settings
                          , e = c > 0 ? this.scrollDelta / d.zoomSpeed : this.scrollDelta * d.zoomSpeed;
                        e > this.scrollMax && (e = this.scrollMax),
                        e < this.scrollMin && (e = this.scrollMin),
                        this.scrollDelta = e
                    }
                }
            }, {
                key: "lerp",
                value: function(a, b, c) {
                    return (1 - c) * a + c * b
                }
            }]),
            a
        }();
        b.Z = new j
    },
    9995: function(a, b, c) {
        "use strict";
        var d = c(1438)
          , e = c(2951)
          , f = c(828)
          , g = c(4045)
          , h = c(2024)
          , i = function() {
            function a() {
                (0,
                d.Z)(this, a),
                this.list = new Map
            }
            return (0,
            e.Z)(a, [{
                key: "get",
                value: function(a) {
                    return a === h.Z.id ? h.Z : this.list.get(a)
                }
            }, {
                key: "add",
                value: function(a) {
                    this.list.set(a.id, a)
                }
            }, {
                key: "update",
                value: function(a) {
                    var b = this.list.get(a.id);
                    if (!b) {
                        new g.Z(a.id,a);
                        return
                    }
                    var c = !0
                      , d = !1
                      , e = void 0;
                    try {
                        for (var h, i = Object.entries(a)[Symbol.iterator](); !(c = (h = i.next()).done); c = !0) {
                            var j = (0,
                            f.Z)(h.value, 2)
                              , k = j[0]
                              , l = j[1];
                            l && (b[k] = l)
                        }
                    } catch (m) {
                        d = !0,
                        e = m
                    } finally {
                        try {
                            c || null == i.return || i.return()
                        } finally {
                            if (d)
                                throw e
                        }
                    }
                }
            }, {
                key: "remove",
                value: function(a) {
                    this.list.delete(a)
                }
            }]),
            a
        }();
        b.Z = new i
    },
    2024: function(a, b, c) {
        "use strict";
        c.d(b, {
            Z: function() {
                return m
            }
        });
        var d = c(1438)
          , e = c(2951)
          , f = c(828)
          , g = c(4906)
          , h = c(5926)
          , i = c(5354)
          , j = c(7906)
          , k = function() {
            var a = [255, 8, 255 * Math.random() | 0];
            return a.sort(function() {
                return .5 - Math.random()
            }),
            a
        }
          , l = c(1754)
          , m = new (function() {
            function a() {
                (0,
                d.Z)(this, a);
                var b = (0,
                g.bh)("profiles")
                  , c = b["profile".concat(b.index)];
                this.id = -1,
                this.tag = c.tag,
                this.pin = c.pin,
                this.nickname = c.nickname,
                this.skin1 = c.skin1,
                this.skin2 = c.skin2,
                this.color1 = k(),
                this.color2 = k(),
                this.isAlive = !1,
                this.region = c.region,
                this.mode = c.mode,
                this.menuOpen = !0,
                this.freeSpectate = !1,
                this.chatInput = !1,
                this.isGlobalChat = 1,
                this.x = 0,
                this.y = 0,
                this.x1 = 0,
                this.y1 = 0,
                this.tab1alive = !1,
                this.x2 = 0,
                this.y2 = 0,
                this.tab2alive = !1,
                this.tab = 1,
                this.totalMass = 10,
                this.events()
            }
            return (0,
            e.Z)(a, [{
                key: "isSelf",
                get: function() {
                    return !0
                }
            }, {
                key: "spectateStatus",
                get: function() {
                    return this.freeSpectate ? "Free roam" : "Spectating #1"
                }
            }, {
                key: "setId",
                value: function(a) {
                    this.id = a
                }
            }, {
                key: "setMenu",
                value: function() {
                    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !this.menuOpen;
                    (0,
                    g.PQ)("menu/visibility", a),
                    this.menuOpen = a
                }
            }, {
                key: "setSpectate",
                value: function() {
                    this.freeSpectate = !this.freeSpectate,
                    (0,
                    g.PQ)("spectate/render", this.spectateStatus)
                }
            }, {
                key: "setChatInput",
                value: function() {
                    this.chatInput = !this.chatInput,
                    (0,
                    g.PQ)("chat-input/switch", this.chatInput)
                }
            }, {
                key: "switchTab",
                value: function() {
                    this.tab = 1 === this.tab ? 2 : 1
                }
            }, {
                key: "events",
                value: function() {
                    var a = this;
                    (0,
                    g.j3)("saveProfilesIndex", function(b, c) {
                        var d = b.profiles["profile".concat(c)]
                          , e = d.tag
                          , f = d.pin
                          , g = d.nickname
                          , i = d.skin1
                          , j = d.skin2;
                        a.tag = e,
                        a.pin = f,
                        a.nickname = g,
                        a.skin1 = i,
                        a.skin2 = j,
                        h.Z.send("tag"),
                        h.Z.send("pin"),
                        h.Z.send("nickname"),
                        h.Z.send("skin")
                    }),
                    (0,
                    g.j3)("client/player/setTag", function(b, c) {
                        a.tag = c,
                        h.Z.send("tag", c)
                    }),
                    (0,
                    g.j3)("client/player/setPin", function(b, c) {
                        a.pin = c,
                        h.Z.send("pin", c)
                    }),
                    (0,
                    g.j3)("client/player/setNickname", function(b, c) {
                        a.nickname = c,
                        h.Z.send("nickname", c)
                    }),
                    (0,
                    g.j3)("client/player/setSkins", function(b, c) {
                        var d = (0,
                        f.Z)(c, 2)
                          , e = d[0]
                          , g = d[1];
                        a[e] = g,
                        h.Z.send("skin")
                    }),
                    (0,
                    g.j3)("client/player/spawn", function() {
                        h.Z.send("spawn"),
                        (0,
                        g.PQ)("spectate/render", !1)
                    }),
                    (0,
                    g.j3)("client/player/spectate", function() {
                        h.Z.send("spectate"),
                        a.isAlive || (0,
                        g.PQ)("spectate/render", a.spectateStatus)
                    }),
                    (0,
                    g.j3)("client/player/chat", function(a, b) {
                        h.Z.send("chat", b, 1)
                    }),
                    (0,
                    g.j3)("client/player/isGlobal", function(b, c) {
                        a.isGlobalChat = c
                    })
                }
            }, {
                key: "update",
                value: function(a) {
                    if (this.updateTabs(),
                    a.self.size > 0) {
                        this.totalMass = a.selfScore,
                        this.isAlive || (this.isAlive = !0);
                        return
                    }
                    this.isAlive && (this.setMenu(!0),
                    this.isAlive = !1)
                }
            }, {
                key: "updateTabs",
                value: function() {
                    if (this.isAlive) {
                        for (var a = 1; a <= 2; a++)
                            if (this["tab".concat(a, "alive")] = l.Z.tabAlive(a),
                            this["tab".concat(a, "alive")]) {
                                var b = l.Z.tabCenter(a)
                                  , c = b.x
                                  , d = b.y
                                  , e = i.Z.points
                                  , f = e.left
                                  , g = e.top
                                  , h = e.edge
                                  , k = (c - f) / h
                                  , m = (d - g) / h;
                                this["x".concat(a)] = Math.round(200 * k * 100) / 100,
                                this["y".concat(a)] = Math.round(200 * m * 100) / 100
                            }
                        return
                    }
                    var n = i.Z.points
                      , o = n.left
                      , p = n.top
                      , q = n.edge
                      , r = (j.Z.camX - o) / q
                      , s = (j.Z.camY - p) / q;
                    this.x = Math.round(200 * r * 100) / 100,
                    this.y = Math.round(200 * s * 100) / 100
                }
            }]),
            a
        }())
    },
    1069: function(a, b, c) {
        "use strict";
        var d = c(1438)
          , e = c(2951)
          , f = function() {
            function a() {
                (0,
                d.Z)(this, a),
                this.dualMode = !1,
                this.ejectSpeed = 0,
                this.maxCells = 0
            }
            return (0,
            e.Z)(a, [{
                key: "set",
                value: function(a) {
                    var b = a.dualMode
                      , c = a.ejectSpeed
                      , d = a.maxCells;
                    this.dualMode = b,
                    this.ejectSpeed = c,
                    this.maxCells = this.dualMode ? 2 * d : d
                }
            }]),
            a
        }();
        b.Z = new f
    },
    1754: function(a, b, c) {
        "use strict";
        c.d(b, {
            Z: function() {
                return m
            }
        });
        var d = c(1438)
          , e = c(2951)
          , f = c(828)
          , g = c(4906)
          , h = c(9995)
          , i = function() {
            function a(b) {
                (0,
                d.Z)(this, a),
                this.id = b.id,
                this.x = b.x,
                this.y = b.y,
                this.radius = b.radius,
                this.oldX = b.x,
                this.oldY = b.y,
                this.oldRadius = b.radius,
                this.newX = b.x,
                this.newY = b.y,
                this.newRadius = b.radius,
                this.nickname = "",
                this.color = "",
                this.skinURL = "",
                this.sprite = null,
                this.virusFillSprite = null,
                this.nicknameBitmap = null,
                this.massBitmap = null,
                this.currentTab = null,
                this.indicatorTab = null,
                this.skinSprite = null,
                this.destroyed = !1,
                this.isFood = b.isFood || !1,
                this.isVirus = b.isVirus || !1,
                this.isEjected = b.isEjected || !1,
                this.isFriend = !!b.friendId,
                this.isMine = !1,
                this.isRemoved = !1,
                this.tab = b.tab || 1,
                this.friendId = b.friendId || 0,
                this.ownerId = b.ownerId || 0,
                this.delay = 0,
                this.lastUpdateTime = 0,
                this.planetData()
            }
            return (0,
            e.Z)(a, [{
                key: "massString",
                get: function() {
                    return Math.round(this.radius * this.radius / 100);
                    var a = Math.round(this.radius * this.radius / 100);
                    return a > 999 ? "".concat(Math.trunc(a / 100) / 10, "k") : a
                }
            }, {
                key: "rgb",
                set: function(a) {
                    var b = (0,
                    f.Z)(a, 3)
                      , c = b[0]
                      , d = b[1]
                      , e = b[2];
                    this.color = "0x".concat((16777216 + (c << 16) + (d << 8) + e).toString(16).slice(1))
                }
            }, {
                key: "skin",
                set: function(a) {
                    this.skinURL = a
                }
            }, {
                key: "planetData",
                value: function() {
                    var a = h.Z.get(this.ownerId);
                    a && (this.nickname = a.tag ? "[".concat(a.tag, "] ").concat(a.nickname) : a.nickname,
                    this.isMine = a.isSelf,
                    this.rgb = a["color".concat(this.tab)],
                    this.skin = a["skin".concat(this.tab)])
                }
            }, {
                key: "update",
                value: function(a, b, c) {
                    this.animate(),
                    this.oldX = this.x,
                    this.oldY = this.y,
                    this.oldRadius = this.radius,
                    this.newX = a,
                    this.newY = b,
                    this.newRadius = c,
                    this.lastUpdateTime = performance.now()
                }
            }, {
                key: "animate",
                value: function() {
                    var a = g.h.get("settings").settings
                      , b = performance.now();
                    this.delay = (b - this.lastUpdateTime) / a.animationDelay,
                    this.delay < 0 && (this.delay = 0),
                    this.delay > 1 && (this.delay = 1),
                    this.x = this.delay * (this.newX - this.oldX) + this.oldX,
                    this.y = this.delay * (this.newY - this.oldY) + this.oldY,
                    this.radius = this.delay * (this.newRadius - this.oldRadius) + this.oldRadius
                }
            }, {
                key: "die",
                value: function() {
                    var a, b, c, d, e, f;
                    null === (a = this.sprite) || void 0 === a || a.destroy(),
                    null === (b = this.virusFillSprite) || void 0 === b || b.destroy(),
                    null === (c = this.nicknameBitmap) || void 0 === c || c.destroy(),
                    null === (d = this.currentTab) || void 0 === d || d.destroy(),
                    null === (e = this.indicatorTab) || void 0 === e || e.destroy(),
                    null === (f = this.skinSprite) || void 0 === f || f.destroy(),
                    this.destroyed = !0
                }
            }]),
            a
        }()
          , j = c(7906)
          , k = c(2024)
          , l = c(7698)
          , m = new (function() {
            function a() {
                (0,
                d.Z)(this, a),
                this.planets = new Map,
                this.self = new Map,
                this.sorted = []
            }
            return (0,
            e.Z)(a, [{
                key: "selfScore",
                get: function() {
                    var a = 0
                      , b = !0
                      , c = !1
                      , d = void 0;
                    try {
                        for (var e, g = this.self[Symbol.iterator](); !(b = (e = g.next()).done); b = !0) {
                            var h = (0,
                            f.Z)(e.value, 2)[1];
                            a += (0,
                            l.BY)(h.radius)
                        }
                    } catch (i) {
                        c = !0,
                        d = i
                    } finally {
                        try {
                            b || null == g.return || g.return()
                        } finally {
                            if (c)
                                throw d
                        }
                    }
                    return (0,
                    l.Ch)(a)
                }
            }, {
                key: "tabAlive",
                value: function(a) {
                    var b = !0
                      , c = !1
                      , d = void 0;
                    try {
                        for (var e, g = this.self[Symbol.iterator](); !(b = (e = g.next()).done); b = !0)
                            if ((0,
                            f.Z)(e.value, 2)[1].tab === a)
                                return !0
                    } catch (h) {
                        c = !0,
                        d = h
                    } finally {
                        try {
                            b || null == g.return || g.return()
                        } finally {
                            if (c)
                                throw d
                        }
                    }
                    return !1
                }
            }, {
                key: "tabScore",
                value: function(a) {
                    var b = 0
                      , c = !0
                      , d = !1
                      , e = void 0;
                    try {
                        for (var g, h = this.self[Symbol.iterator](); !(c = (g = h.next()).done); c = !0) {
                            var i = (0,
                            f.Z)(g.value, 2)[1];
                            i.tab === a && (b += (0,
                            l.BY)(i.radius))
                        }
                    } catch (j) {
                        d = !0,
                        e = j
                    } finally {
                        try {
                            c || null == h.return || h.return()
                        } finally {
                            if (d)
                                throw e
                        }
                    }
                    return (0,
                    l.Ch)(b)
                }
            }, {
                key: "tabCenter",
                value: function(a) {
                    var b = 0
                      , c = {
                        x: 0,
                        y: 0
                    }
                      , d = !0
                      , e = !1
                      , g = void 0;
                    try {
                        for (var h, i = this.self[Symbol.iterator](); !(d = (h = i.next()).done); d = !0) {
                            var j = (0,
                            f.Z)(h.value, 2)[1];
                            j.tab === a && (c.x += j.x,
                            c.y += j.y,
                            b++)
                        }
                    } catch (k) {
                        e = !0,
                        g = k
                    } finally {
                        try {
                            d || null == i.return || i.return()
                        } finally {
                            if (e)
                                throw g
                        }
                    }
                    return c.x /= b,
                    c.y /= b,
                    c
                }
            }, {
                key: "init",
                value: function() {}
            }, {
                key: "update",
                value: function() {
                    k.Z.update(this),
                    this.sortPlanets();
                    var a = !0
                      , b = !1
                      , c = void 0;
                    try {
                        for (var d, e = this.planets[Symbol.iterator](); !(a = (d = e.next()).done); a = !0) {
                            var g = (0,
                            f.Z)(d.value, 2)
                              , h = g[0]
                              , i = g[1];
                            i.animate(),
                            i.isRemoved && 1 === i.delay && this.removePlanet(h)
                        }
                    } catch (j) {
                        b = !0,
                        c = j
                    } finally {
                        try {
                            a || null == e.return || e.return()
                        } finally {
                            if (b)
                                throw c
                        }
                    }
                }
            }, {
                key: "setSelfView",
                value: function() {
                    var a = 0
                      , b = 0
                      , c = !0
                      , d = !1
                      , e = void 0;
                    try {
                        for (var g, h = this.self[Symbol.iterator](); !(c = (g = h.next()).done); c = !0) {
                            var i = (0,
                            f.Z)(g.value, 2)
                              , k = (i[0],
                            i[1]);
                            k.animate(),
                            a += k.x / this.self.size,
                            b += k.y / this.self.size
                        }
                    } catch (l) {
                        d = !0,
                        e = l
                    } finally {
                        try {
                            c || null == h.return || h.return()
                        } finally {
                            if (d)
                                throw e
                        }
                    }
                    j.Z.setSpectate(a, b, 0)
                }
            }, {
                key: "setPlanet",
                value: function(a) {
                    if (!this.planets.get(a.id)) {
                        var b = new i(a);
                        this.planets.set(b.id, b),
                        b.isMine && this.self.set(b.id, b)
                    }
                }
            }, {
                key: "updatePlanet",
                value: function(a) {
                    var b = this.planets.get(a.id);
                    b && b.update(a.x, a.y, a.radius)
                }
            }, {
                key: "suckPlanet",
                value: function(a, b) {
                    var c = g.h.get("settings").settings
                      , d = this.planets.get(a)
                      , e = this.planets.get(b);
                    if (e) {
                        if (!c.smoothAnimations || !d || document.hidden) {
                            this.removePlanet(b);
                            return
                        }
                        e.update(d.x, d.y, e.radius),
                        e.isRemoved = !0,
                        e.isMine && this.self.delete(b),
                        this.removePlanet(b),
                        this.planets.set("".concat(b, ":removed"), e)
                    }
                }
            }, {
                key: "removePlanet",
                value: function(a) {
                    var b = g.h.get("settings").settings
                      , c = this.planets.get(a);
                    this.self.has(a) && this.self.delete(a),
                    c && (b.smoothAnimations ? a.toString().includes(":") && c.die() : c.die(),
                    this.planets.delete(a))
                }
            }, {
                key: "sortPlanets",
                value: function() {
                    this.sorted = [];
                    var a = !0
                      , b = !1
                      , c = void 0;
                    try {
                        for (var d, e = this.planets[Symbol.iterator](); !(a = (d = e.next()).done); a = !0) {
                            var g = (0,
                            f.Z)(d.value, 2)[1];
                            this.sorted.push(g)
                        }
                    } catch (h) {
                        b = !0,
                        c = h
                    } finally {
                        try {
                            a || null == e.return || e.return()
                        } finally {
                            if (b)
                                throw c
                        }
                    }
                    this.sorted.sort(function(a, b) {
                        return a.radius === b.radius ? a.id - b.id : a.radius - b.radius
                    })
                }
            }, {
                key: "clear",
                value: function() {
                    var a = !0
                      , b = !1
                      , c = void 0;
                    try {
                        for (var d, e = this.planets[Symbol.iterator](); !(a = (d = e.next()).done); a = !0)
                            (0,
                            f.Z)(d.value, 2)[1].die()
                    } catch (g) {
                        b = !0,
                        c = g
                    } finally {
                        try {
                            a || null == e.return || e.return()
                        } finally {
                            if (b)
                                throw c
                        }
                    }
                    this.planets.clear(),
                    this.self.clear(),
                    this.sorted = []
                }
            }]),
            a
        }())
    },
    6866: function(a, b, c) {
        "use strict";
        var d = c(4662)
          , e = c(4906)
          , f = new Image
          , g = document.createElement("canvas")
          , h = g.getContext("2d")
          , i = d.xEZ.from(g);
        g.width = 2e3,
        g.height = 2e3;
        var j = function() {
            l() && k()
        }
          , k = function() {
            var a = e.h.get("theming").theming.backgroundUrl;
            f.src = a,
            f.crossOrigin = "anonymous",
            f.onload = function() {
                h.clearRect(0, 0, 2e3, 2e3),
                h.drawImage(f, 0, 0, 2e3, 2e3),
                i.update(),
                i.settings = {
                    url: a
                }
            }
        }
          , l = function() {
            var a = e.h.get("theming").theming;
            return !i.settings || i.settings.url !== a.backgroundUrl
        };
        k(),
        b.Z = {
            texture: i,
            update: j,
            draw: k
        }
    },
    6965: function(a, b, c) {
        "use strict";
        c.d(b, {
            Z: function() {
                return aj
            }
        });
        var d = c(1438)
          , e = c(2951)
          , f = c(6866)
          , g = c(4662)
          , h = c(4906)
          , i = c(7698)
          , j = 0
          , k = document.createElement("canvas")
          , l = k.getContext("2d")
          , m = g.xEZ.from(k)
          , n = new Image;
        n.src = "/assets/img/rainbow.png",
        m.filter = new g.u8d.ColorMatrixFilter,
        k.width = 720,
        k.height = 720;
        var o = function() {
            var a = h.h.get("theming").theming;
            p(a),
            s(a) && q(a)
        }
          , p = function(a) {
            "rainbow" === a.borderGlowStyle ? (j > 360 && (j = 0),
            j += 1) : j = 0,
            m.filter.hue(j)
        }
          , q = function(a) {
            var b = a.borderGlowStyle
              , c = a.borderGlowSize
              , d = a.borderGlowEdge
              , e = a.borderGlowIntensity;
            l.clearRect(0, 0, l.canvas.width, l.canvas.height),
            l.save(),
            l.translate(l.canvas.width / 2, l.canvas.height / 2),
            l.filter = "rainbow" !== b && "blur(".concat(e, "px)"),
            l.lineWidth = c,
            l.strokeStyle = "poly" === b ? r(a) : "#ffffff",
            "rainbow" === b ? l.drawImage(n, -320, -320, 640, 640) : (l.roundRect(-320, -320, 640, 640, d),
            l.stroke()),
            l.restore(),
            m.update(),
            m.settings = a
        }
          , r = function(a) {
            var b = a.borderPolyColorOne
              , c = a.borderPolyColorTwo
              , d = a.borderPolyColorThree
              , e = l.createLinearGradient(-1e3, -1e3, 0, 1e3);
            return e.addColorStop(0, (0,
            i.s$)(b)),
            e.addColorStop(.1, (0,
            i.s$)(b)),
            e.addColorStop(.2, (0,
            i.s$)(c)),
            e.addColorStop(.3, (0,
            i.s$)(d)),
            e.addColorStop(.4, (0,
            i.s$)(b)),
            e.addColorStop(.5, (0,
            i.s$)(c)),
            e.addColorStop(.6, (0,
            i.s$)(d)),
            e.addColorStop(.7, (0,
            i.s$)(b)),
            e.addColorStop(.8, (0,
            i.s$)(c)),
            e.addColorStop(.9, (0,
            i.s$)(d)),
            e.addColorStop(1, (0,
            i.s$)(d)),
            e
        }
          , s = function(a) {
            return !m.settings || m.settings.borderGlowStyle !== a.borderGlowStyle || m.settings.borderGlowSize !== a.borderGlowSize || m.settings.borderGlowEdge !== a.borderGlowEdge || m.settings.borderGlowIntensity !== a.borderGlowIntensity || m.settings.borderPolyColorOne !== a.borderPolyColorOne || m.settings.borderPolyColorTwo !== a.borderPolyColorTwo || m.settings.borderPolyColorThree !== a.borderPolyColorThree
        };
        n.onload = function() {
            q(h.h.get("theming").theming)
        }
        ;
        var t = {
            texture: m,
            update: o,
            draw: q
        }
          , u = document.createElement("canvas")
          , v = u.getContext("2d")
          , w = g.xEZ.from(u);
        u.width = 512,
        u.height = 512;
        var x = function() {
            z() && y()
        }
          , y = function() {
            var a = h.h.get("theming").theming
              , b = a.foodSize
              , c = a.foodColor
              , d = a.foodGlowSize
              , e = a.foodGlowIntensity
              , f = a.foodGlowColor
              , g = b + d
              , j = (2 * d + g) / g;
            v.canvas.width = 2 * b + 2 * d + 2 * e,
            v.canvas.height = 2 * b + 2 * d + 2 * e,
            v.setTransform(1, 0, 0, 1, 0, 0),
            v.clearRect(0, 0, v.canvas.width, v.canvas.height),
            v.save(),
            v.fillStyle = "grey",
            v.beginPath(),
            v.restore(),
            v.translate(v.canvas.width / 2, v.canvas.height / 2),
            v.save(),
            v.scale(j, j),
            v.shadowColor = (0,
            i.s$)(f),
            v.shadowBlur = e,
            v.shadowOffsetX = v.canvas.width + d,
            v.shadowOffsetY = v.canvas.height + d,
            v.beginPath(),
            v.arc((0 - d - v.canvas.width) / j, (0 - d - v.canvas.height) / j, g / j, 0, 2 * Math.PI),
            v.fill(),
            v.restore(),
            v.fillStyle = (0,
            i.s$)(c),
            v.arc(0, 0, b, 0, 2 * Math.PI),
            v.fill(),
            w.update(),
            w.settings = {
                foodSize: b,
                foodColor: c,
                foodGlowSize: d,
                foodGlowIntensity: e,
                foodGlowColor: f
            }
        }
          , z = function() {
            var a = h.h.get("theming").theming;
            return !w.settings || w.settings.foodSize !== a.foodSize || w.settings.foodColor !== a.foodColor || w.settings.foodGlowSize !== a.foodGlowSize || w.settings.foodGlowIntensity !== a.foodGlowIntensity || w.settings.foodGlowColor !== a.foodGlowColor
        };
        y();
        var A = {
            texture: w,
            update: x,
            draw: y
        }
          , B = document.createElement("canvas")
          , C = B.getContext("2d")
          , D = g.xEZ.from(B);
        B.width = 1e3,
        B.height = 1e3;
        var E = function() {
            G() && F()
        }
          , F = function() {
            var a = h.h.get("theming").theming
              , b = a.virusColor
              , c = a.virusOpacity
              , d = a.virusGlowSize
              , e = a.virusGlowIntensity
              , f = a.virusGlowColor
              , g = a.virusRingColor
              , j = a.virusRingWidth
              , k = 100 + d
              , l = (2 * d + k) / k;
            C.setTransform(1, 0, 0, 1, 0, 0),
            C.clearRect(0, 0, C.canvas.width, C.canvas.height),
            C.translate(C.canvas.width / 2, C.canvas.height / 2),
            C.save(),
            C.scale(l, l),
            C.globalAlpha = 1,
            C.shadowColor = (0,
            i.s$)(f),
            C.shadowBlur = e,
            C.shadowOffsetX = C.canvas.width + d,
            C.shadowOffsetY = C.canvas.height + d,
            C.beginPath(),
            C.arc((0 - d - C.canvas.width) / l, (0 - d - C.canvas.height) / l, k / l, 0, 2 * Math.PI),
            C.fill(),
            C.restore(),
            C.save(),
            C.fillStyle = (0,
            i.s$)(b),
            C.globalAlpha = c,
            C.beginPath(),
            C.arc(0, 0, 100, 0, 2 * Math.PI),
            C.fill(),
            C.restore(),
            C.save(),
            C.lineWidth = j,
            C.strokeStyle = (0,
            i.s$)(g),
            C.beginPath(),
            C.arc(0, 0, 100 - j / 2, 0, 2 * Math.PI),
            C.stroke(),
            C.restore(),
            D.update(),
            D.settings = {
                virusColor: b,
                virusOpacity: c,
                virusGlowSize: d,
                virusGlowIntensity: e,
                virusGlowColor: f,
                virusRingColor: g,
                virusRingWidth: j
            }
        }
          , G = function() {
            var a = h.h.get("theming").theming;
            return !D.settings || D.settings.virusColor !== a.virusColor || D.settings.virusOpacity !== a.virusOpacity || D.settings.virusGlowSize !== a.virusGlowSize || D.settings.virusGlowIntensity !== a.virusGlowIntensity || D.settings.virusGlowColor !== a.virusGlowColor || D.settings.virusRingColor !== a.virusRingColor || D.settings.virusRingWidth !== a.virusRingWidth
        };
        F();
        var H = {
            texture: D,
            update: E,
            draw: F
        }
          , I = document.createElement("canvas")
          , J = I.getContext("2d")
          , K = new Image;
        K.src = "/assets/img/cell-shadow.png";
        var L = g.xEZ.from(I);
        I.width = 512,
        I.height = 512;
        var M = function() {
            var a = h.h.get("theming").theming;
            O(a) && N(a)
        }
          , N = function(a) {
            var b = a.cellShadow;
            J.clearRect(0, 0, 512, 512),
            J.save(),
            J.translate(256, 256),
            J.fillStyle = "white",
            J.beginPath(),
            J.arc(0, 0, 256, 0, 2 * Math.PI),
            b ? (J.clip(),
            J.drawImage(K, -256, -256, 512, 512)) : J.fill(),
            J.restore(),
            L.update(),
            L.settings = a
        }
          , O = function(a) {
            return !L.settings || L.settings.cellShadow !== a.cellShadow
        };
        K.onload = function() {
            N(h.h.get("theming").theming)
        }
        ;
        var P = {
            texture: L,
            update: M,
            draw: N
        }
          , Q = document.createElement("canvas")
          , R = Q.getContext("2d");
        new Image().src = "/assets/img/cell-shadow.png";
        var S = g.xEZ.from(Q);
        Q.width = 512,
        Q.height = 512;
        var T = function() {
            var a = h.h.get("theming").theming;
            V(a) && U(a)
        }
          , U = function(a) {
            R.clearRect(0, 0, 512, 512),
            R.save(),
            R.translate(256, 256),
            R.beginPath(),
            R.strokeStyle = "#ffffff",
            R.lineWidth = a.cellBorderWidth,
            R.arc(0, 0, 256 - R.lineWidth / 2, 0, 2 * Math.PI),
            R.stroke(),
            R.restore(),
            S.update(),
            S.settings = a
        }
          , V = function(a) {
            return !S.settings || S.settings.cellBorderWidth !== a.cellBorderWidth
        };
        U(h.h.get("theming").theming);
        var W = {
            texture: S,
            update: T,
            draw: U
        }
          , X = document.createElement("canvas")
          , Y = X.getContext("2d")
          , Z = g.xEZ.from(X);
        X.width = 256,
        X.height = 256;
        var $ = function() {
            var a = h.h.get("theming").theming;
            aa(a) && _(a)
        }
          , _ = function(a) {
            var b = 128 - a.commanderGlowSize
              , c = Y.createRadialGradient(0, 0, b, 0, 0, 128);
            c.addColorStop(0, "rgba(0, 0, 0, 0)"),
            c.addColorStop(1, (0,
            i.s$)(a.commanderColor)),
            Y.clearRect(0, 0, 256, 256),
            Y.save(),
            Y.translate(128, 128),
            Y.fillStyle = c,
            Y.beginPath(),
            Y.arc(0, 0, 128, 0, 2 * Math.PI),
            Y.fill(),
            Y.stroke(),
            Y.restore(),
            Z.update(),
            Z.settings = a
        }
          , aa = function(a) {
            return Z.settings.commanderColor !== a.commanderColor || Z.settings.commanderGlowSize !== a.commanderGlowSize
        };
        _(h.h.get("theming").theming);
        var ab = {
            texture: Z,
            update: $,
            draw: _
        }
          , ac = document.createElement("canvas")
          , ad = ac.getContext("2d")
          , ae = g.xEZ.from(ac);
        ac.width = 120,
        ac.height = 65;
        var af = function() {
            if (!ah())
                return
        }
          , ag = function() {
            h.h.get("theming").theming;
            ad.beginPath(),
            ad.moveTo(10, 5),
            ad.lineTo(ad.canvas.width - 10, 5),
            ad.lineTo(ad.canvas.width / 2, ad.canvas.height - 10),
            ad.lineTo(10, 5),
            ad.closePath(),
            ad.lineWidth = 10,
            ad.strokeStyle = "white",
            ad.fillStyle = "white",
            ad.fill(),
            ad.stroke(),
            ae.update(),
            ae.settings = {}
        }
          , ah = function() {
            return h.h.get("theming").theming,
            !1
        };
        ag();
        var ai = {
            texture: ae,
            update: af,
            draw: ag
        }
          , aj = new (function() {
            function a() {
                (0,
                d.Z)(this, a),
                this.background = f.Z.texture,
                this.food = A.texture,
                this.virus = H.texture,
                this.borderGlow = t.texture,
                this.planet = P.texture,
                this.currentTab = W.texture,
                this.indicatorTab = ai.texture,
                this.commander = ab.texture
            }
            return (0,
            e.Z)(a, [{
                key: "update",
                value: function() {
                    f.Z.update(),
                    t.update(),
                    A.update(),
                    H.update(),
                    P.update(),
                    W.update(),
                    ab.update()
                }
            }]),
            a
        }())
    },
    8506: function(a, b, c) {
        "use strict";
        c.r(b);
        var d = c(1438)
          , e = c(2951)
          , f = c(828)
          , g = c(4906)
          , h = c(2024)
          , i = c(9995)
          , j = c(7698)
          , k = function() {
            function a() {
                (0,
                d.Z)(this, a),
                this.canvas = null,
                this.ctx = null
            }
            return (0,
            e.Z)(a, [{
                key: "render",
                value: function() {
                    if (this.canvas && this.ctx) {
                        var a = this.ctx
                          , b = g.h.get("theming").theming;
                        a.clearRect(0, 0, a.canvas.width, a.canvas.height),
                        a.save(),
                        this.self(a, b),
                        this.allies(a, b),
                        a.restore()
                    }
                }
            }, {
                key: "self",
                value: function(a, b) {
                    if (h.Z.isAlive) {
                        for (var c = 1; c <= 2; c++)
                            h.Z["tab".concat(c, "alive")] && (a.fillStyle = (0,
                            j.s$)(b.minimapSelfColor),
                            a.beginPath(),
                            a.arc(h.Z["x".concat(c)], h.Z["y".concat(c)], 5, 0, 2 * Math.PI),
                            a.fill());
                        return
                    }
                    a.save(),
                    a.fillStyle = (0,
                    j.s$)(b.minimapSelfColor),
                    a.beginPath(),
                    a.arc(h.Z.x, h.Z.y, 7, 0, 2 * Math.PI),
                    a.fill(),
                    a.closePath(),
                    a.restore()
                }
            }, {
                key: "allies",
                value: function(a, b) {
                    var c = !0
                      , d = !1
                      , e = void 0;
                    try {
                        for (var g, h = i.Z.list[Symbol.iterator](); !(c = (g = h.next()).done); c = !0) {
                            var k = (0,
                            f.Z)(g.value, 2)[1];
                            if (k.isAllie) {
                                for (var l = k.allie, m = 0; m <= 2; m++)
                                    if (l["isTab".concat(m, "Alive")]) {
                                        var n = k.alliePosition(l["tab".concat(m)])
                                          , o = n.x
                                          , p = n.y;
                                        a.save(),
                                        a.fillStyle = (0,
                                        j.s$)(b.minimapAllieColor),
                                        a.beginPath(),
                                        a.arc(o, p, 5, 0, 2 * Math.PI),
                                        a.fill(),
                                        a.closePath(),
                                        a.restore();
                                        var q = a.measureText(k.nickname).width;
                                        a.fillStyle = "#ffffff",
                                        a.beginPath(),
                                        a.fillText(k.nickname, o - q / 2, p - 10),
                                        a.fill(),
                                        a.closePath()
                                    }
                            }
                        }
                    } catch (r) {
                        d = !0,
                        e = r
                    } finally {
                        try {
                            c || null == h.return || h.return()
                        } finally {
                            if (d)
                                throw e
                        }
                    }
                }
            }, {
                key: "setCanvas",
                value: function(a) {
                    var b = a.current;
                    this.canvas = b,
                    this.ctx = this.canvas.getContext("2d"),
                    this.canvas.width = 200,
                    this.canvas.height = 200
                }
            }]),
            a
        }();
        b.default = new k
    },
    3337: function(a, b, c) {
        "use strict";
        c.r(b),
        c.d(b, {
            default: function() {
                return R
            }
        });
        var d = c(1438)
          , e = c(2951)
          , f = c(4662)
          , g = c(906)
          , h = c(4906)
          , i = c(7906)
          , j = c(6965)
          , k = c(1754)
          , l = c(1069)
          , m = c(5926)
          , n = new (function() {
            function a() {
                (0,
                d.Z)(this, a),
                this.canvas = null,
                this.render()
            }
            return (0,
            e.Z)(a, [{
                key: "values",
                get: function() {
                    var a = [];
                    if (a.push("FPS: ".concat((0 | this.canvas.ticker.FPS) + 1)),
                    k.Z.self.size) {
                        a.push("Score: ".concat(k.Z.selfScore));
                        for (var b = 1; b <= 2; b++)
                            k.Z.tabAlive(b) && a.push("#".concat(b, ": ").concat(k.Z.tabScore(b)));
                        a.push("[".concat(k.Z.self.size, "/").concat(l.Z.maxCells, "]"))
                    }
                    return a.push("Ping: ".concat(m.Z.latency, "ms")),
                    a
                }
            }, {
                key: "render",
                value: function() {
                    var a = this;
                    this.canvas && h.h.dispatch("stats/render", this.values),
                    setTimeout(function() {
                        a.render()
                    }, 1e3)
                }
            }, {
                key: "setCanvas",
                value: function(a) {
                    this.canvas = a
                }
            }]),
            a
        }())
          , o = c(3912)
          , p = c(7568)
          , q = c(828)
          , r = c(4051)
          , s = c.n(r)
          , t = c(7698)
          , u = function() {
            function a() {
                (0,
                d.Z)(this, a),
                this.nicknames = new Map,
                this.maxNickExistence = (0,
                t.y2)(1),
                this.massRefreshUpdate = 0,
                this.fontSize = 200,
                this.fonts()
            }
            return (0,
            e.Z)(a, [{
                key: "fonts",
                value: function() {
                    var a = this;
                    return (0,
                    p.Z)(s().mark(function b() {
                        return s().wrap(function(b) {
                            for (; ; )
                                switch (b.prev = b.next) {
                                case 0:
                                    f.UPD.from("Blender", {
                                        fontSize: a.fontSize,
                                        fill: 16777215,
                                        fontFamily: "Blender",
                                        fontWeight: 600
                                    }, {
                                        chars: [[".", "k"], ["0", "9"], ]
                                    });
                                case 1:
                                case "end":
                                    return b.stop()
                                }
                        }, b)
                    }))()
                }
            }, {
                key: "update",
                value: function() {
                    var a = !0
                      , b = !1
                      , c = void 0;
                    try {
                        for (var d, e = this.nicknames[Symbol.iterator](); !(a = (d = e.next()).done); a = !0) {
                            var f = (0,
                            q.Z)(d.value, 2)
                              , g = f[0]
                              , h = f[1];
                            if (Date.now() - h.lastTimeUsed > this.maxNickExistence) {
                                this.nicknames.delete(g);
                                continue
                            }
                        }
                    } catch (i) {
                        b = !0,
                        c = i
                    } finally {
                        try {
                            a || null == e.return || e.return()
                        } finally {
                            if (b)
                                throw c
                        }
                    }
                }
            }, {
                key: "nickname",
                value: function(a) {
                    if (this.nicknames.has(a)) {
                        var b = this.nicknames.get(a);
                        return b.lastTimeUsed = Date.now(),
                        b.texture
                    }
                    var c = new f.xvT(a,{
                        fontSize: this.fontSize,
                        fill: 16777215
                    });
                    return c.fontFamily = "Blender",
                    c.updateText(),
                    c.lastTimeUsed = Date.now(),
                    this.nicknames.set(a, c),
                    c.texture
                }
            }, {
                key: "mass",
                value: function(a) {
                    var b = new f.Xz2(a,{
                        fontName: "Blender"
                    });
                    return b.fontSize = this.fontSize,
                    b.lastTimeUsed = Date.now(),
                    b
                }
            }]),
            a
        }()
          , v = new u
          , w = c(5354)
          , x = function(a) {
            var b = h.h.get("theming").theming
              , c = "rainbow" === b.borderGlowStyle ? 5.1 : 3.75;
            w.Z.glow.position.set(w.Z.points.centerX, w.Z.points.centerY),
            w.Z.glow.scale.set(w.Z.points.edge / 720 + c),
            w.Z.glow.anchor.set(.5, .5),
            "mono" === b.borderGlowStyle && (w.Z.glow.tint = b.borderGlowColor),
            a[0].addChild(w.Z.glow)
        }
          , y = function(a) {
            var b = h.h.get("theming").theming;
            w.Z.graphics.clear(),
            w.Z.graphics.lineStyle(b.borderWidth, b.borderColor),
            w.Z.graphics.drawRect(w.Z.points.left - b.borderWidth / 2, w.Z.points.top - b.borderWidth / 2, w.Z.points.edge + b.borderWidth, w.Z.points.edge + b.borderWidth),
            a[0].addChild(w.Z.graphics)
        }
          , z = {
            glow: x,
            render: y
        }
          , A = c(825)
          , B = function(a) {
            var b = h.h.get("theming").theming;
            A.Z.sprite.tint = b.backgroundImageTint,
            A.Z.sprite.alpha = b.backgroundImageOpacity,
            a[0].addChild(A.Z.sprite)
        }
          , C = {
            render: B
        }
          , D = function() {
            function a() {
                (0,
                d.Z)(this, a)
            }
            return (0,
            e.Z)(a, [{
                key: "nickname",
                value: function(a, b) {
                    var c = h.h.get("theming").theming
                      , d = c.nickSize * a.radius / v.fontSize;
                    if (!a.nicknameBitmap) {
                        var e = v.nickname(a.nickname);
                        a.nicknameBitmap = f.jyi.from(e),
                        a.nicknameBitmap.anchor.set(.5)
                    }
                    a.nicknameBitmap.scale.set(d),
                    a.nicknameBitmap.position.set(a.x, a.y),
                    a.nicknameBitmap.tint = c.nickColor
                    b.addChild(a.nicknameBitmap)
                }
            }, {
                key: "mass",
                value: function(a, b, c) {
                    var d = c.showOwnNick
                      , e = c.showNicks
                      , f = h.h.get("theming").theming
                      , g = f.massSize * a.radius / v.fontSize;
                    a.massBitmap || (a.massBitmap = v.mass(a.massString),
                    a.massBitmap.anchor.set(.5)),
                    R.time - a.massBitmap.lastTimeUsed > v.massRefreshUpdate && (a.massBitmap.text = a.massString,
                    a.massBitmap.lastTimeUsed = R.time);
                    var i = d ? a.y + a.radius / 2.5 : a.y
                      , j = e ? a.y + a.radius / 2.5 : a.y
                      , k = a.isMine ? i : j;
                    a.massBitmap.scale.set(g),
                    a.massBitmap.position.set(a.x, k),
                    a.massBitmap.tint = f.massColor,
                    b.addChild(a.massBitmap)
                }
            }]),
            a
        }()
          , E = new D
          , F = function(a) {
            var b = document.createElement("canvas")
              , c = f.xEZ.from(b)
              , d = b.getContext("2d");
            b.width = 512,
            b.height = 512;
            var e = new Image;
            return e.crossOrigin = "anonymous",
            e.onload = function() {
                d.clearRect(0, 0, 512, 512),
                d.save(),
                d.translate(256, 256),
                d.fillStyle = "white",
                d.beginPath(),
                d.arc(0, 0, 256, 0, 2 * Math.PI),
                d.clip(),
                d.drawImage(e, -256, -256, 512, 512),
                d.restore(),
                c.update(),
                c.updated = !0
            }
            ,
            e.src = a,
            c
        }
          , G = new (function() {
            function a() {
                (0,
                d.Z)(this, a),
                this.cached = new Map
            }
            return (0,
            e.Z)(a, [{
                key: "get",
                value: function(a) {
                    return this.cached.get(a)
                }
            }, {
                key: "getSkin",
                value: function(a) {
                    var b = this.cached.get(a);
                    if (b)
                        return b;
                    var c = F(a);
                    return this.cached.set(a, c),
                    c
                }
            }]),
            a
        }())
          , H = c(2024)
          , I = function(a, b) {
            a.destroyed || (a.sprite || (a.sprite = new f.jyi(j.Z.food),
            a.sprite.position.set(a.x, a.y),
            a.sprite.anchor.set(.5, .5)),
            b.addChild(a.sprite))
        }
          , J = function(a, b) {
            if (!a.destroyed) {
                var c = h.h.get("theming").theming;
                a.sprite || (a.sprite = new f.jyi(j.Z.planet),
                a.sprite.width = 2 * a.radius,
                a.sprite.height = 2 * a.radius,
                a.sprite.anchor.set(.5, .5)),
                a.sprite.tint = c.cellEjectedColor,
                a.sprite.position.set(a.x, a.y),
                b.addChild(a.sprite)
            }
        }
          , K = function(a, b) {
            if (!a.destroyed) {
                var c = h.h.get("theming").theming;
                a.sprite || (a.sprite = new f.jyi(j.Z.virus),
                a.sprite.anchor.set(.5, .5)),
                a.virusFillSprite || (a.virusFillSprite = new f.jyi(j.Z.planet),
                a.virusFillSprite.anchor.set(.5, .5),
                a.virusFillSprite.tint = "0xffffff");
                var d = (a.radius - c.virusRingWidth) * ((0,
                t.BY)(a.radius) - 100) / 100
                  , e = (a.radius - 100) / 500;
                a.sprite.scale.set(1 + 2 * e),
                a.virusFillSprite.width = d,
                a.virusFillSprite.height = d,
                a.virusFillSprite.alpha = .5,
                a.sprite.position.set(a.x, a.y),
                a.virusFillSprite.position.set(a.x, a.y),
                b.addChild(a.sprite),
                b.addChild(a.virusFillSprite)
            }
        }
          , L = function(a, b, c) {
            if (!a.destroyed) {
                var d = h.h.get("theming").theming;
                a.sprite || (a.sprite = new f.jyi(j.Z.planet),
                a.sprite.anchor.set(.5, .5),
                a.sprite.tint = a.color),
                a.sprite.position.set(a.x, a.y),
                a.sprite.scale.set(a.radius / 256),
                a.sprite.alpha = d.cellOpacity,
                b.addChild(a.sprite),
                M(a, b, c, d)
            }
        }
          , M = function(a, b, c, d) {
            var e = a.isMine && c.showOwnNick
              , g = !a.isMine && c.showNicks
              , h = a.isMine && c.showOwnMass
              , k = !a.isMine && c.showMass
              , l = a.radius * i.Z.viewport * .4;
            if (!a.skinSprite) {
                var m = G.getSkin(a.skinURL);
                a.skinSprite = new f.jyi(m),
                a.skinSprite.anchor.set(.5, .5)
            }
            a.skinSprite.position.set(a.x, a.y),
            a.skinSprite.scale.set(a.radius / 256),
            a.isMine && (a.currentTab || (a.currentTab = new f.jyi(j.Z.currentTab),
            a.currentTab.anchor.set(.5, .5)),
            a.currentTab.position.set(a.x, a.y),
            a.currentTab.scale.set(a.radius / 256),
            a.currentTab.tint = a.tab === H.Z.tab ? d.activeCellBorder : d.inactiveCellBorder,
            a.indicatorTab || (a.indicatorTab = new f.jyi(j.Z.indicatorTab),
            a.indicatorTab.anchor.set(.5, .5)),
            a.indicatorTab.position.set(a.x, a.y - a.radius - 100),
            a.tab === H.Z.tab && b.addChild(a.indicatorTab),
            b.addChild(a.skinSprite),
            b.addChild(a.currentTab)),
            !a.isMine && a.isFriend && b.addChild(a.skinSprite),
            (!c.autoHideText || !(l < 15)) && ((e || g) && E.nickname(a, b),
            (h || k) && E.mass(a, b, c))
        }
          , N = {
            render: function(a, b) {
                var c = !0
                  , d = !1
                  , e = void 0;
                try {
                    for (var f, g = k.Z.sorted[Symbol.iterator](); !(c = (f = g.next()).done); c = !0) {
                        var h = f.value;
                        h.animate(),
                        b.showFood && h.isFood && I(h, a[1]),
                        h.isEjected && J(h, a[2]),
                        h.isVirus && K(h, a[2]),
                        0 !== h.ownerId && L(h, a[2], b)
                    }
                } catch (i) {
                    d = !0,
                    e = i
                } finally {
                    try {
                        c || null == g.return || g.return()
                    } finally {
                        if (d)
                            throw e
                    }
                }
            }
        }
          , O = c(5975)
          , P = {
            render: function(a) {
                var b = 2e3 / 3 | 0
                  , c = 2e3 - b
                  , d = !0
                  , e = !1
                  , f = void 0;
                try {
                    for (var g, h = O.Z.points.values()[Symbol.iterator](); !(d = (g = h.next()).done); d = !0) {
                        var i = g.value
                          , j = i.x
                          , k = i.y
                          , l = R.time - i.createdAt;
                        if (l > 1e3) {
                            O.Z.delete(i);
                            continue
                        }
                        if (!(l < 1)) {
                            var m = 2e3 * l / 1e3;
                            i.sprite.position.set(j, k),
                            i.sprite.width = m,
                            i.sprite.height = m,
                            i.sprite.alpha = m > b ? (2e3 - m) / c : 1,
                            i.sprite.anchor.set(.5, .5),
                            a[2].addChild(i.sprite)
                        }
                    }
                } catch (n) {
                    e = !0,
                    f = n
                } finally {
                    try {
                        d || null == h.return || h.return()
                    } finally {
                        if (e)
                            throw f
                    }
                }
            }
        }
          , Q = c(8506)
          , R = new (function() {
            function a() {
                (0,
                d.Z)(this, a),
                this.canvas = null,
                this.container = new f.W20,
                this.containers = [new f.W20, new f.TYe, new f.W20],
                this.time = Date.now()
            }
            return (0,
            e.Z)(a, [{
                key: "init",
                value: function() {
                    this.setContainers()
                }
            }, {
                key: "run",
                value: function() {
                    var a = this;
                    this.canvas.ticker.add(function(b) {
                        var c = h.h.get("settings").settings
                          , d = h.h.get("theming").theming;
                        a.clearContainers(),
                        i.Z.update(),
                        j.Z.update(),
                        k.Z.update(),
                        o.Z.update(),
                        v.update();
                        var e = a.canvas.screen.width / 2 - i.Z.camX * o.Z.scroll
                          , f = a.canvas.screen.height / 2 - i.Z.camY * o.Z.scroll;
                        a.canvas.renderer.backgroundColor = d.backgroundTint,
                        a.container.scale.set(o.Z.scroll),
                        a.container.position.set(e, f),
                        a.time = Date.now(),
                        Q.default.render(),
                        c.showBackgroundImage && C.render(a.containers),
                        c.showBorderGlow && z.glow(a.containers),
                        c.showBorder && z.render(a.containers),
                        N.render(a.containers, c),
                        P.render(a.containers)
                    }),
                    this.canvas.stage.addChild(this.container)
                }
            }, {
                key: "setCanvas",
                value: function(a) {
                    var b = a.current;
                    this.canvas || (this.canvas = new f.MxU({
                        width: window.innerWidth,
                        height: window.innerHeight,
                        view: b,
                        antialias: !0,
                        resizeTo: window,
                        backgroundColor: 0
                    }),
                    n.setCanvas(this.canvas),
                    this.run())
                }
            }, {
                key: "fonts",
                value: function() {
                    g.de.addBundle("fonts", {
                        blender: "/assets/bitmap/blender.fnt",
                        blenderStroked: "/assets/bitmap/blender_stroked.fnt"
                    })
                }
            }, {
                key: "setContainers",
                value: function() {
                    for (var a = 0; a < this.containers.length; a++)
                        this.container.addChild(this.containers[a])
                }
            }, {
                key: "clearContainers",
                value: function() {
                    for (var a = 0; a < this.containers.length; a++)
                        this.containers[a].removeChildren()
                }
            }]),
            a
        }())
    },
    7698: function(a, b, c) {
        "use strict";
        c.d(b, {
            BY: function() {
                return d
            },
            Ch: function() {
                return g
            },
            "s$": function() {
                return f
            },
            y2: function() {
                return e
            }
        });
        var d = function(a) {
            return a * a / 100
        }
          , e = function(a) {
            return 6e4 * a
        }
          , f = function(a) {
            return a.replace("0x", "#")
        }
          , g = function(a) {
            return a > 999 ? "".concat((a / 100 | 0) / 10, "k") : 0 | a
        }
    },
    5042: function() {}
}])
