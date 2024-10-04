( () => {
    var e = {
        797: (e, t, n) => {
            "use strict";
            var s = n(933);
            var i = n.n(s);
            class r {
                constructor(e) {
                    this.view = new DataView(e);
                    this.index = 0;
                    this.maxIndex = e.byteLength
                }
                readInt8() {
                    const e = this.view.getInt8(this.index, true);
                    this.index += 1;
                    return e
                }
                readUInt8() {
                    const e = this.view.getUint8(this.index, true);
                    this.index += 1;
                    return e
                }
                readInt16() {
                    const e = this.view.getInt16(this.index, true);
                    this.index += 2;
                    return e
                }
                readUInt16() {
                    const e = this.view.getUint16(this.index, true);
                    this.index += 2;
                    return e
                }
                readInt32() {
                    const e = this.view.getInt32(this.index, true);
                    this.index += 4;
                    return e
                }
                readUInt32() {
                    const e = this.view.getUint32(this.index, true);
                    this.index += 4;
                    return e
                }
                readFloat() {
                    const e = this.view.getFloat32(this.index, true);
                    this.index += 4;
                    return e
                }
                readDouble() {
                    const e = this.view.getFloat64(this.index, true);
                    this.index += 8;
                    return e
                }
                readString8() {
                    const e = this.readUInt8();
                    let t = "";
                    for (let n = 0; n < e; n++) {
                        if (this.end)
                            break;
                        const e = this.readUInt8();
                        t += String.fromCharCode(e)
                    }
                    return t
                }
                readLongString8() {
                    const e = this.readUInt16();
                    let t = "";
                    for (let n = 0; n < e; n++) {
                        if (this.end)
                            break;
                        const e = this.readUInt8();
                        t += String.fromCharCode(e)
                    }
                    return t
                }
                readString16() {
                    const e = this.readUInt8();
                    let t = "";
                    for (let n = 0; n < e; n++) {
                        if (this.end)
                            break;
                        const e = this.readUInt16();
                        t += String.fromCharCode(e)
                    }
                    return t
                }
                readLongString16() {
                    const e = this.readUInt16();
                    let t = "";
                    for (let n = 0; n < e; n++) {
                        if (this.end)
                            break;
                        const e = this.readUInt16();
                        t += String.fromCharCode(e)
                    }
                    return t
                }
                decodeString(e) {
                    return decodeURI(e)
                }
                get bytesLeft() {
                    return this.maxIndex - this.index
                }
                get end() {
                    return this.index === this.maxIndex
                }
            }
            const a = r;
            class o {
                constructor() {
                    this.left = 0;
                    this.top = 0;
                    this.right = 14e3;
                    this.bottom = 14e3;
                    this.width = 14142;
                    this.height = 14142
                }
                update(e, t, n, s) {
                    this.left = e;
                    this.top = t;
                    this.right = n;
                    this.bottom = s;
                    this.width = n - e;
                    this.height = s - t
                }
            }
            const l = new o;
            const c = {};
            if (false) {}
            const h = c;
            class d {
                constructor(e=-1, t=false, n="", s="", i="#ffffff", r=0, a=0, o=0, l=false) {
                    this.id = e;
                    this.isBot = t;
                    this.nick = n;
                    this.tag = s;
                    this.teamColor = i;
                    this.r = r;
                    this.g = a;
                    this.b = o;
                    this.hasReservedName = l
                }
            }
            const u = d;
            class f {
                constructor(e=-1, t=-1, n="#858585", s="", i=0, r=0, a=0) {
                    this.id = e;
                    this.parentClientID = t;
                    this.parentClient = new u;
                    this.color = n;
                    this.skinURL = s;
                    this.r = i;
                    this.g = r;
                    this.b = a
                }
            }
            const p = f;
            class m {
                static rgb2hex(e, t, n) {
                    const s = 16777216 | e << 16 | t << 8 | n;
                    const i = "#" + s.toString(16).substring(1);
                    return i
                }
                static randomColor() {
                    const e = [255, Math.random() * 100 | 0, Math.random() * 256 | 0];
                    e.sort(( () => Math.random() - .5));
                    return m.rgb2hex(...e)
                }
                static toNumber(e) {
                    if (isNaN(e)) {
                        return parseInt(e.replace("#", "0x"))
                    }
                    return e
                }
            }
            const g = m;
            class w {
                constructor() {
                    const e = "e";
                    let t = 0;
                    const n = () => e + t++;
                    this.Chat_ToggleMode = n();
                    this.Chat_Toggle = n();
                    this.Notify_ShowNotification = n();
                    this.Notify_TagChange = n();
                    this.Player_Tag = n();
                    this.LeaderBoard_TitleChanged = n();
                    this.Toggle_SpectatePlayContinue_Buttons = n();
                    this.ClanWars_Update = n();
                    this.ClanWars_Toggle = n();
                    this.RoomStats_Update = n();
                    this.ServerStats_Update = n();
                    this.PlayerStats_Update = n();
                    this.Server_Message_Update = n();
                    this.Update_Nickname = n();
                    this.LeaderBoard_Update = n();
                    this.Teamlist_Update = n();
                    this.Player_Died = n();
                    this.Player_Spawned = n();
                    this.Socket_Cleanup = n();
                    this.Settings = n();
                    this.Clear_Notifications = n();
                    this.Replays = n();
                    this.Replay_Bar = n();
                    this.Show_Menu = n();
                    this.Show_HUD = n();
                    this.Server_Time = n();
                    this.Custom_Games = n();
                    this.Custom_Games_List = n();
                    this.Request_Captcha = n();
                    this.Assign_PlayerInfo = n();
                    this.Auth_Token = n();
                    this.Request_Connect = n();
                    this.Request_Play = n();
                    this.Request_Spectate = n();
                    this.Request_Settings = n();
                    this.Request_Continue = n();
                    this.Replay_Action = n();
                    this.Chat_Mode_Toggled = n();
                    this.ClanWars_UpdatePlayer = n();
                    this.ClanWars_RequestUpdate = n();
                    this.Send_Chat = n();
                    this.Send_Nick = n();
                    this.Send_Tag = n();
                    this.Reload_Account = n();
                    this.Hide_Modals = n();
                    this.Render_Ad = n()
                }
            }
            const y = new w;
            class v {
                log(e) {
                    console.log(e)
                }
                info(e) {
                    console.info(e)
                }
                warn(e) {
                    console.warn(e)
                }
            }
            const C = new v;
            class x {
                isClanWarsGame = false;
                gameStarted = false;
                isHost = false;
                data = new Map;
                show() {
                    St.dispatch(y.ClanWars_Toggle)
                }
                update() {
                    Wt.clientsList.forEach((e => {
                        const t = this.get(e.id);
                        this.updatePlayer(e.id, t.team || 0)
                    }
                    ));
                    St.dispatch(y.ClanWars_Update, Wt.clientsList, this.data, this.isHost)
                }
                updatePlayer(e, t) {
                    const n = this.get(e);
                    n.team = t
                }
                get(e) {
                    return this.data.get(e) || this.data.set(e, {}).get(e)
                }
                reset() {
                    this.isClanWarsGame = false;
                    this.gameStarted = false;
                    this.isHost = false;
                    this.data.clear()
                }
            }
            const k = new x;
            var b = n(483);
            var I = n.n(b);
            var T = n(162);
            var S = n.n(T);
            var U = n(733);
            var P = n.n(U);
            class M {
                constructor() {
                    this.x = 7e3;
                    this.y = 7e3;
                    this.zoom = .15;
                    this.targetZoom = .15;
                    this.lastZoom = .25;
                    this.autoZoom = 1;
                    this.spectatePoint = {
                        x: 0,
                        y: 0
                    };
                    this.attachEvents()
                }
                attachEvents() {
                    document.addEventListener("wheel", (e => {
                        if (V.isOpen)
                            return;
                        this.onMouseWheel(e)
                    }
                    ), {
                        passive: true
                    })
                }
                onMouseWheel(e) {
                    let t = this.targetZoom;
                    const n = .02 * (14142 / (l.right - l.left));
                    const s = e.deltaY > 0;
                    if (s)
                        t *= h.zoomSpeed;
                    else
                        t /= h.zoomSpeed;
                    t = t > .6 ? .6 : t < n ? n : t;
                    this.targetZoom = t;
                    this.lastZoom = t
                }
                update() {
                    if (R.isAlive) {
                        this.x += (R.x - this.x) / (31 - h.cameraSpeed);
                        this.y += (R.y - this.y) / (31 - h.cameraSpeed)
                    } else {
                        this.x = (29 * this.x + this.spectatePoint.x) / 30;
                        this.y = (29 * this.y + this.spectatePoint.y) / 30
                    }
                    const e = h.autoZoom ? this.targetZoom * this.autoZoom : this.targetZoom;
                    this.zoom += (e - this.zoom) / 8
                }
                setSpectatePoint(e, t) {
                    this.spectatePoint.x = e;
                    this.spectatePoint.y = t
                }
            }
            const E = new M;
            class A {
                constructor() {
                    this.nick = "";
                    this.teamTag = "";
                    this.teamCode = "";
                    this.skin1 = "https://i.imgur.com/vX3zql0.png";
                    this.skin2 = "https://i.imgur.com/vX3zql0.png";
                    this.x = 0;
                    this.y = 0;
                    this.activeTab = 0;
                    this.score = 0;
                    this.mass = 0;
                    this.biggestCellMass = 0;
                    this.isTR = false;
                    this.isStopped = false;
                    this.isSpectating = false
                }
                tagChange(e) {
                    this.teamTag = e;
                    St.dispatch(y.Notify_TagChange)
                }
                get myCellCount() {
                    let e = 0;
                    for (const t of Wt.myCells)
                        e += t.size;
                    return e
                }
                get isAlive() {
                    return this.myCellCount > 0
                }
                update() {
                    if (!this.isAlive)
                        return;
                    const e = Wt.clientsList.get(Wt.myClientID) || new u;
                    this.isTR = Pt.trainingMode && e.tag === Pt.trainingModeTag;
                    let t = 0;
                    this.x = 0;
                    this.y = 0;
                    this.mass = 0;
                    this.biggestCellMass = 0;
                    for (const e of Wt.myCells) {
                        for (const [n,s] of e) {
                            n;
                            t += s.radius;
                            this.x += s.x;
                            this.y += s.y;
                            this.mass += s.mass;
                            if (this.biggestCellMass < s.mass)
                                this.biggestCellMass = s.mass
                        }
                    }
                    this.x /= this.myCellCount;
                    this.y /= this.myCellCount;
                    if (this.score < this.mass)
                        this.score = this.mass;
                    const n = Math.pow(Math.min(64 / t, 1), .4);
                    const s = Math.max(self.innerWidth / 1920, self.innerHeight / 1080);
                    const i = n * s;
                    E.autoZoom = i
                }
                onSpawn() {
                    this.score = 0;
                    this.mass = 0;
                    this.biggestCellMass = 0;
                    this.isSpectating = false;
                    E.targetZoom = E.lastZoom;
                    St.dispatch(y.Player_Spawned)
                }
                onDeath() {
                    H.clear(false);
                    St.dispatch(y.Player_Died);
                    this.isTR = false;
                    this.activeTab = 0
                }
            }
            const R = new A;
            var D = n(764)["lW"];
            class _ {
                constructor() {
                    this.buffer = D.allocUnsafe(1048576);
                    this.offset = 0
                }
                writeUInt8(e) {
                    this.offset = this.buffer.writeUInt8(e, this.offset)
                }
                writeInt8(e) {
                    this.offset = this.buffer.writeInt8(e, this.offset)
                }
                writeUInt16(e) {
                    this.offset = this.buffer.writeUInt16LE(e, this.offset)
                }
                writeInt16(e) {
                    this.offset = this.buffer.writeInt16LE(e, this.offset)
                }
                writeUInt32(e) {
                    this.offset = this.buffer.writeUInt32LE(e, this.offset)
                }
                writeInt32(e) {
                    this.offset = this.buffer.writeInt32LE(e, this.offset)
                }
                writeString8(e) {
                    this.writeUInt8(e.length);
                    for (let t = 0; t < e.length; t++) {
                        const n = e.charCodeAt(t);
                        this.writeUInt8(n)
                    }
                }
                writeLongString8(e) {
                    this.writeUInt16(e.length);
                    for (let t = 0; t < e.length; t++) {
                        const n = e.charCodeAt(t);
                        this.writeUInt8(n)
                    }
                }
                writeString16(e) {
                    this.writeUInt8(e.length);
                    for (let t = 0; t < e.length; t++) {
                        const n = e.charCodeAt(t);
                        this.writeUInt16(n)
                    }
                }
                writeLongString16(e) {
                    this.writeUInt16(e.length);
                    for (let t = 0; t < e.length; t++) {
                        const n = e.charCodeAt(t);
                        this.writeUInt16(n)
                    }
                }
                get final() {
                    const e = D.alloc(this.offset);
                    this.buffer.copy(e, 0, 0, this.offset);
                    return e.buffer
                }
            }
            class F {
                handle(e) {
                    const t = e.readUInt16();
                    for (let n = 0; n < t; n++) {
                        const t = e.readUInt32();
                        const n = e.readUInt32();
                        Wt.eatCell(t, n)
                    }
                    const n = e.readUInt16();
                    for (let t = 0; t < n; t++) {
                        const t = e.readUInt32();
                        const n = e.readInt32();
                        const s = e.readInt32();
                        const i = e.readUInt16();
                        const r = e.readUInt8();
                        const a = Wt.newCell(t, n, s, i, r);
                        if (r === 0) {
                            const t = e.readUInt16();
                            a.parentPlayerID = t;
                            Wt.ownCellCheck(a);
                            const n = e.readUInt8();
                            const s = e.readUInt8();
                            const i = e.readUInt8();
                            a.r = n;
                            a.g = s;
                            a.b = i;
                            a.color = g.rgb2hex(n, s, i)
                        }
                        if (r === 2) {
                            const t = e.readUInt8();
                            const n = e.readUInt8();
                            const s = e.readUInt8();
                            a.r = t;
                            a.g = n;
                            a.b = s;
                            a.color = g.rgb2hex(t, n, s)
                        }
                        if (r === 5) {
                            const t = e.readUInt16();
                            const n = document.createElement("canvas");
                            n.render = new Uint8Array(t);
                            for (let s = 0; s < t; s++) {
                                n.render[s] = e.readUInt8()
                            }
                            a.lol = n
                        }
                        a && (a.hidden = false)
                    }
                    const s = e.readUInt16();
                    for (let t = 0; t < s; t++) {
                        const t = e.readUInt32();
                        const n = e.readInt32();
                        const s = e.readInt32();
                        const i = e.readUInt16();
                        const r = Wt.getCell(t);
                        if (r)
                            r.update(n, s, i);
                        else {
                            console.warn(`No cell with ID ${t} exist. Request full sync.`);
                            return An.fullSync()
                        }
                        r && (r.hidden = false)
                    }
                    const i = e.readUInt16();
                    for (let t = 0; t < i; t++) {
                        const t = e.readUInt32();
                        Wt.removeCell(t)
                    }
                    if (e.index + 1 <= e.maxIndex) {
                        R.activeTab = e.readUInt8()
                    }
                    if (e.index + 4 <= e.maxIndex) {
                        const t = e.readUInt32();
                        l.update(0, 0, t, t)
                    }
                }
                create(e, t, n, s) {
                    const i = new _;
                    i.writeUInt8(20);
                    i.writeUInt16(e.length);
                    for (let t = 0; t < e.length; t++) {
                        const n = e[t];
                        i.writeUInt32(n.hunter);
                        i.writeUInt32(n.prey)
                    }
                    i.writeUInt16(t.length);
                    for (let e = 0; e < t.length; e++) {
                        const n = t[e];
                        i.writeUInt32(n.id);
                        i.writeInt32(n.x);
                        i.writeInt32(n.y);
                        i.writeUInt16(n.radius);
                        i.writeUInt8(n.type);
                        if (n.type === 0) {
                            i.writeUInt16(n.parentPlayerID);
                            i.writeUInt8(n.r);
                            i.writeUInt8(n.g);
                            i.writeUInt8(n.b)
                        }
                        if (n.type === 2) {
                            i.writeUInt8(n.r);
                            i.writeUInt8(n.g);
                            i.writeUInt8(n.b)
                        }
                    }
                    i.writeUInt16(n.length);
                    for (let e = 0; e < n.length; e++) {
                        const t = n[e];
                        i.writeUInt32(t.id);
                        i.writeInt32(t.x);
                        i.writeInt32(t.y);
                        i.writeUInt16(t.radius)
                    }
                    i.writeUInt16(s.length);
                    for (let e = 0; e < s.length; e++) {
                        i.writeUInt32(s[e])
                    }
                    return i.final
                }
            }
            const W = new F;
            class z {
                handle(e) {
                    const t = e.readUInt8();
                    for (let n = 0; n < t; n++) {
                        const t = e.readUInt16();
                        const n = e.readUInt16();
                        const s = e.readUInt8();
                        const i = e.readUInt8();
                        const r = e.readUInt8();
                        const a = g.rgb2hex(s, i, r);
                        const o = e.readString8();
                        const l = new p(t,n,a,o,s,i,r);
                        Wt.playersList.set(t, l)
                    }
                    const n = e.readUInt8();
                    for (let t = 0; t < n; t++) {
                        const t = e.readUInt16();
                        const n = Wt.playersList.get(t) || new p;
                        const s = e.readUInt8();
                        if (s & 1) {
                            const t = e.readUInt8();
                            const s = e.readUInt8();
                            const i = e.readUInt8();
                            n.color = g.rgb2hex(t, s, i)
                        }
                        if (s & 2) {
                            n.skinURL = e.readString8()
                        }
                    }
                    const s = e.readUInt8();
                    for (let t = 0; t < s; t++) {
                        const t = e.readUInt16();
                        Wt.playersList.delete(t)
                    }
                }
                create(e) {
                    const t = new _;
                    t.writeUInt8(11);
                    t.writeUInt8(e.length);
                    for (let n = 0; n < e.length; n++) {
                        const s = e[n];
                        t.writeUInt16(s.id);
                        t.writeUInt16(s.parentClientID);
                        t.writeUInt8(s.r);
                        t.writeUInt8(s.g);
                        t.writeUInt8(s.b);
                        t.writeString8(s.skinURL)
                    }
                    t.writeUInt8(0);
                    t.writeUInt8(0);
                    return t.final
                }
            }
            const O = new z;
            class B {
                handle(e) {
                    const t = e.readUInt8();
                    for (let n = 0; n < t; n++) {
                        const t = e.readUInt16();
                        const n = e.readUInt8() !== 0;
                        const s = e.readString16().replace(/(\r|\n)/, "");
                        const i = e.readString16();
                        const r = e.readUInt8();
                        const a = e.readUInt8();
                        const o = e.readUInt8();
                        const l = Sn.isReplay ? true : e.readInt8() !== 0;
                        const c = g.rgb2hex(r, a, o);
                        const h = new u(t,n,s,i,c,r,a,o,l);
                        Wt.clientsList.set(t, h)
                    }
                    const n = e.readUInt8();
                    for (let t = 0; t < n; t++) {
                        const t = e.readUInt16();
                        const n = Wt.clientsList.get(t) || new u;
                        const s = e.readUInt8();
                        if (s & 1)
                            n.nick = e.readString16();
                        if (s & 2)
                            n.tag = e.readString16();
                        if (s & 4) {
                            const t = e.readUInt8();
                            const s = e.readUInt8();
                            const i = e.readUInt8();
                            const r = Sn.isReplay ? true : e.readInt8() !== 0;
                            n.teamColor = g.rgb2hex(t, s, i);
                            n.hasReservedName = r
                        }
                    }
                    const s = e.readUInt8();
                    for (let t = 0; t < s; t++) {
                        const t = e.readUInt16();
                        Wt.clientsList.delete(t)
                    }
                    if ((t || n || s) && k.isClanWarsGame) {
                        k.update()
                    }
                }
                create(e) {
                    const t = new _;
                    t.writeUInt8(10);
                    t.writeUInt8(e.length);
                    for (let n = 0; n < e.length; n++) {
                        const s = e[n];
                        t.writeUInt16(s.id);
                        t.writeUInt8(Number(s.isBot));
                        t.writeString16(s.nick);
                        t.writeString16(s.tag);
                        t.writeUInt8(s.r);
                        t.writeUInt8(s.g);
                        t.writeUInt8(s.b)
                    }
                    t.writeUInt8(0);
                    t.writeUInt8(0);
                    return t.final
                }
            }
            const L = new B;
            var G = n(764)["lW"];
            class N {
                constructor() {
                    this.list = new Map;
                    this.localForage = I().createInstance({
                        name: "replays-new"
                    });
                    this.opacity = 1;
                    this.paused = false;
                    this.tick = 0;
                    this.replayLength = 1e4;
                    this.currentReplay = null;
                    this.packets = {
                        preinfo: null,
                        worldUpdate: [],
                        newWorldUpdates: [],
                        newClientUpdate: [],
                        newPlayerUpdate: []
                    }
                }
                cancel() {
                    clearInterval(this.interval);
                    this.paused = false;
                    Sn.isReplay = false;
                    Sn.cleanUp();
                    V.showHUD(true);
                    St.dispatch(y.Replay_Bar, {
                        show: false
                    })
                }
                save() {
                    const e = (new Date).toISOString();
                    const t = {
                        preinfo: this.packets.preinfo,
                        worldUpdate: this.packets.worldUpdate,
                        newWorldUpdates: this.packets.newWorldUpdates,
                        newClientUpdate: this.packets.newClientUpdate[0],
                        newPlayerUpdate: this.packets.newPlayerUpdate[0]
                    };
                    if (t.worldUpdate && t.newWorldUpdates && t.newClientUpdate && t.newPlayerUpdate) {
                        const n = {
                            time: performance.now(),
                            img: this.createImage(),
                            packets: t
                        };
                        this.list.set(e, n);
                        this.localForage.setItem(e, this.createExport(n));
                        return true
                    }
                    return false
                }
                createImage() {
                    const e = this.canvas;
                    const t = this.ctx;
                    t.clearRect(0, 0, e.width, e.height);
                    e.width = 240;
                    e.height = 135;
                    t.drawImage(document.getElementById("screen"), 0, 0, e.width, e.height);
                    return e.toDataURL()
                }
                sort() {
                    this.list = new Map([...this.list.entries()].sort(( (e, t) => e.time - t.time)))
                }
                initialize() {
                    this.localForage.iterate(( (e, t) => {
                        const n = this.parse(e);
                        if (n !== null)
                            this.list.set(t, n)
                    }
                    )).then(( () => {
                        this.sort()
                    }
                    ));
                    this.canvas = document.createElement("canvas");
                    this.ctx = this.canvas.getContext("2d");
                    St.register(y.Replay_Action, (async e => {
                        switch (e.type) {
                        case "request":
                            this.sendReplays();
                            break;
                        case "delete":
                            for (const t of e.replays) {
                                this.list.delete(t);
                                this.localForage.removeItem(t)
                            }
                            this.sendReplays();
                            break;
                        case "play":
                            const t = this.list.get(e.key);
                            this.run(t);
                            break;
                        case "jump":
                            this.paused = true;
                            this.nextTick(this.currentReplay, e.to, true);
                            break;
                        case "jumpEnded":
                            this.paused = false;
                            break;
                        case "opacity":
                            this.opacity = e.value / 100;
                            break;
                        case "import":
                            const {key: n, data: s} = e;
                            const i = this.parse(s);
                            if (i !== null) {
                                this.localForage.setItem(n, s);
                                this.list.set(n, i);
                                this.sort();
                                this.sendReplays()
                            } else
                                window.alert("Invalid replay!");
                            break;
                        case "download":
                            const r = e.replays;
                            if (r.length > 1) {
                                const e = new (P());
                                await this.localForage.iterate(( (t, n) => {
                                    e.file(`${n}.senpa`, t)
                                }
                                ));
                                e.generateAsync({
                                    type: "blob"
                                }).then((e => {
                                    S()(e, `senpa-replays-${(new Date).toISOString()}.zip`)
                                }
                                ))
                            } else {
                                const e = r[0];
                                const t = await this.localForage.getItem(e);
                                const n = new Blob([t]);
                                S()(n, `${e}.senpa`)
                            }
                            break;
                        default:
                            console.log("unknown replay action", e);
                            break
                        }
                    }
                    ))
                }
                sendReplays() {
                    let e = [];
                    this.list.forEach(( ({img: t}, n) => {
                        e.push({
                            key: n,
                            image: t,
                            date: new Date(n)
                        })
                    }
                    ));
                    e = e.sort(( (e, t) => t.date - e.date));
                    St.dispatch(y.Replays, e)
                }
                clear(e=true) {
                    const t = e ? null : this.packets.preinfo;
                    this.packets = {
                        preinfo: t,
                        worldUpdate: [],
                        newWorldUpdates: [],
                        newClientUpdate: [],
                        newPlayerUpdate: []
                    }
                }
                add(e, t) {
                    switch (e) {
                    case 0:
                        if (!this.packets.preinfo) {
                            this.packets.preinfo = t
                        }
                        break;
                    case 10:
                        if (R.isAlive) {
                            this.packets.newClientUpdate.push(L.create(Array.from(Wt.clientsList.values())));
                            this.packets.newClientUpdate = this.packets.newClientUpdate.slice(Math.max(this.packets.newClientUpdate.length - this.replayLength / 1e3, 0))
                        }
                        break;
                    case 11:
                        if (R.isAlive) {
                            this.packets.newPlayerUpdate.push(O.create(Array.from(Wt.playersList.values())));
                            this.packets.newPlayerUpdate = this.packets.newPlayerUpdate.slice(Math.max(this.packets.newPlayerUpdate.length - this.replayLength / 1e3, 0))
                        }
                        break;
                    case 20:
                        if (R.isAlive) {
                            const e = [];
                            Wt.cells.forEach(( (t, n) => {
                                if (typeof n === "number") {
                                    e.push(t)
                                }
                            }
                            ));
                            const n = new ArrayBuffer(t.byteLength + 1);
                            new Uint8Array(n).set(new Uint8Array(t));
                            new DataView(n).setUint8(n.byteLength - 1, R.activeTab);
                            this.packets.worldUpdate.push(n);
                            this.packets.worldUpdate = this.packets.worldUpdate.slice(Math.max(this.packets.worldUpdate.length - this.packetCount, 0));
                            this.packets.newWorldUpdates.push(W.create([], e, [], []));
                            this.packets.newWorldUpdates = this.packets.newWorldUpdates.slice(Math.max(this.packets.newWorldUpdates.length - this.packetCount, 0))
                        }
                        break
                    }
                }
                run(e) {
                    this.currentReplay = e;
                    clearInterval(this.interval);
                    St.dispatch(y.Replay_Bar, {
                        show: true,
                        action: {
                            type: "start",
                            max: e.packets.worldUpdate.length
                        }
                    });
                    this.tick = 0;
                    Sn.isReplay = true;
                    if (Sn.ws) {
                        Sn.ws.close()
                    }
                    Sn.cleanUp();
                    Sn.onMessage(e.packets.preinfo);
                    Sn.onMessage(e.packets.newClientUpdate);
                    Sn.onMessage(e.packets.newPlayerUpdate);
                    Sn.onMessage(e.packets.newWorldUpdates[0]);
                    V.hide();
                    V.showHUD(false);
                    this.interval = setInterval(( () => {
                        if (!this.paused) {
                            this.nextTick(e, this.tick)
                        }
                    }
                    ), 1e3 / 25)
                }
                nextTick(e, t, n=false) {
                    if (t + 1 > e.packets.worldUpdate.length) {
                        clearInterval(this.interval);
                        return this.run(e)
                    }
                    if (n) {
                        Wt.myCells = [new Map, new Map];
                        Wt.cells.forEach((e => {
                            e && (e.hidden = true)
                        }
                        ));
                        Sn.onMessage(e.packets.newWorldUpdates[t])
                    }
                    Sn.onMessage(e.packets.worldUpdate[t++]);
                    St.dispatch(y.Replay_Bar, {
                        show: true,
                        action: {
                            type: "update",
                            value: t
                        }
                    });
                    this.tick = t
                }
                get packetCount() {
                    return this.replayLength / 1e3 * 25
                }
                parse(e) {
                    if (e.startsWith("REPLAY")) {
                        const t = e.split("|");
                        let n = 1;
                        const s = t[n++];
                        const i = t[n++];
                        const r = new G(t[n++],"base64").buffer;
                        const a = t[n++];
                        const o = [];
                        for (let e = 0; e < a; e++) {
                            o.push(new G(t[n++],"base64").buffer)
                        }
                        const l = t[n++];
                        const c = [];
                        for (let e = 0; e < l; e++) {
                            c.push(new G(t[n++],"base64").buffer)
                        }
                        const h = new G(t[n++],"base64").buffer;
                        const d = new G(t[n++],"base64").buffer;
                        return {
                            img: s,
                            time: i,
                            packets: {
                                preinfo: r,
                                worldUpdate: o,
                                newWorldUpdates: c,
                                newClientUpdate: h,
                                newPlayerUpdate: d
                            }
                        }
                    }
                    return null
                }
                createExport(e) {
                    let t = "REPLAY";
                    const n = () => {
                        t += "|"
                    }
                    ;
                    n();
                    t += e.img;
                    n();
                    t += e.time;
                    n();
                    t += G.from(e.packets.preinfo).toString("base64");
                    n();
                    t += e.packets.worldUpdate.length;
                    n();
                    e.packets.worldUpdate.forEach((e => {
                        t += G.from(e).toString("base64");
                        n()
                    }
                    ));
                    t += e.packets.newWorldUpdates.length;
                    n();
                    e.packets.newWorldUpdates.forEach((e => {
                        t += G.from(e).toString("base64");
                        n()
                    }
                    ));
                    t += G.from(e.packets.newClientUpdate).toString("base64");
                    n();
                    t += G.from(e.packets.newPlayerUpdate).toString("base64");
                    return t
                }
            }
            const H = new N;
            class j {
                constructor(e) {
                    this.id = "";
                    this.lastUpdateTime = 0;
                    this.updateTimeout = e;
                    this.rendered = false
                }
                firstRender(e) {
                    this.id = e;
                    this.rendered = true;
                    this.update(true)
                }
                update(e=false) {
                    if (!this.rendered)
                        return;
                    const t = Date.now();
                    if (this.lastUpdateTime + this.updateTimeout < t || e) {
                        aiptag.cmd.display.push(( () => {
                            aipDisplayTag.display(this.id)
                        }
                        ));
                        this.lastUpdateTime = t
                    }
                }
            }
            class $ {
                constructor() {
                    this.isOpen = true;
                    this.isSettingsMenuOpen = false;
                    this.isChatFocused = false;
                    this.adRefreshTimeout = 1e3 * 60 * 5;
                    this.middleHomeAd = new j(this.adRefreshTimeout);
                    this.middleEndgameAd = new j(this.adRefreshTimeout);
                    this.bottomAd = new j(this.adRefreshTimeout)
                }
                initialize() {
                    St.register(y.Render_Ad, ( (e, t) => {
                        switch (t) {
                        case "bottom":
                            this.bottomAd.firstRender(e);
                            break;
                        case "middleHome":
                            this.middleHomeAd.firstRender(e);
                            break;
                        case "middleEndgame":
                            this.middleEndgameAd.firstRender(e);
                            break
                        }
                    }
                    ))
                }
                onSpectate() {
                    this.hide()
                }
                onPlay() {
                    this.hide();
                    this.middleHomeAd.update();
                    this.bottomAd.update()
                }
                onContinue() {
                    this.middleEndgameAd.update();
                    this.bottomAd.update()
                }
                showHUD(e) {
                    const t = !h.hideHUD && !Sn.isReplay;
                    St.dispatch(y.Show_HUD, t && e)
                }
                hide() {
                    if (!this.isOpen)
                        return;
                    this.isOpen = false;
                    St.dispatch(y.Show_Menu, false)
                }
                show() {
                    if (this.isOpen)
                        return;
                    this.isOpen = true;
                    St.dispatch(y.Show_Menu, true);
                    this.middleHomeAd.update()
                }
                toggle() {
                    if (Sn.isReplay) {
                        if (window.confirm("Press ok to stop watching the replay")) {
                            H.cancel();
                            Sn.connect(localStorage.getItem("senpaio:server"))
                        } else {
                            return
                        }
                    }
                    if (this.isOpen)
                        this.hide();
                    else
                        this.show()
                }
                toggleChat() {
                    this.isChatFocused = !this.isChatFocused;
                    St.dispatch(y.Chat_Toggle)
                }
            }
            const V = new $;
            class q {
                render(e) {
                    if (!h.mapSectors)
                        return;
                    const t = l.left;
                    const n = l.top;
                    const s = l.bottom - l.top;
                    const i = l.bottom - l.top;
                    const r = s / 5;
                    const a = i / 5;
                    const o = r / 2;
                    const c = a / 2;
                    const d = "ABCDE".split("");
                    e.beginPath();
                    e.rect(t + r, n, r, i);
                    e.rect(t + r * 3, n, r, i);
                    e.rect(t, n + a, s, a);
                    e.rect(t, n + a * 3, s, a);
                    e.rect(t, n, s, i);
                    e.closePath();
                    e.lineWidth = h.sectorGridWidth;
                    e.strokeStyle = h.sectorGridColor;
                    e.stroke();
                    e.font = `400 ${h.sectorTextSize}px ${"Ubuntu"}`;
                    e.textAlign = "center";
                    e.textBaseline = "middle";
                    e.fillStyle = h.sectorTextColor;
                    for (let s = 0; s < 5; s++) {
                        const i = n + c + s * a;
                        for (let n = 0; n < 5; n++) {
                            const a = t + o + n * r;
                            const l = d[s] + (n + 1);
                            e.fillText(l, a, i)
                        }
                    }
                }
            }
            const Z = new q;
            class K {
                constructor() {
                    this.textures = {
                        food: document.createElement("canvas"),
                        virus: document.createElement("canvas"),
                        border: document.createElement("canvas")
                    }
                }
                init() {
                    this.createFoodTexture();
                    this.createVirusTexture()
                }
                createFoodTexture() {
                    const e = 256;
                    const t = this.textures.food;
                    const n = t.getContext("2d");
                    n.clearRect(0, 0, t.width, t.height);
                    t.width = t.height = e;
                    const s = h.useFoodGlow;
                    n.fillStyle = h.foodColor;
                    if (s) {
                        n.shadowBlur = h.foodGlowDistance;
                        n.shadowColor = h.foodGlowColor
                    }
                    n.arc(e / 2, e / 2, 15, 0, Math.PI * 2, false);
                    const i = s ? h.foodGlowStrength : 1;
                    for (let e = 0; e < i; e++) {
                        n.fill()
                    }
                }
                createVirusTexture() {
                    const e = 512;
                    const t = this.textures.virus;
                    const n = t.getContext("2d");
                    n.clearRect(0, 0, t.width, t.height);
                    t.width = t.height = e;
                    const s = h.useVirusGlow;
                    n.beginPath();
                    n.fillStyle = h.virusColor2;
                    n.globalAlpha = .8;
                    n.arc(e / 2, e / 2, 100, 0, Math.PI * 2, false);
                    n.fill();
                    n.globalAlpha = 1;
                    if (s) {
                        n.shadowColor = h.virusGlowColor;
                        n.shadowBlur = h.virusGlowDistance
                    }
                    n.strokeStyle = h.virusColor1;
                    n.lineWidth = h.virusBorderWidth;
                    const i = s ? h.virusGlowStrength : 1;
                    for (let e = 0; e < i; e++) {
                        n.stroke()
                    }
                    n.closePath()
                }
                createBorderTexture() {
                    const e = h.useBorderGlow;
                    const t = h.borderWidth;
                    const n = h.borderGlowDistance;
                    const s = this.textures.border;
                    s.getContext("2d").clearRect(0, 0, s.width, s.height);
                    s.width = s.height = 2304;
                    const i = s.getContext("2d");
                    i.translate(s.width / 2, s.height / 2);
                    const r = s.width / 14142;
                    i.shadowBlur = n * r;
                    i.shadowColor = h.borderGlowColor;
                    i.lineWidth = t / 2 * r;
                    i.strokeStyle = h.borderColor;
                    i.rect(-1024, -1024, 2048, 2048);
                    const a = e ? h.borderGlowStrength : 1;
                    for (let e = 0; e < a; e++) {
                        i.stroke()
                    }
                }
            }
            const Y = new K;
            function X(e) {
                e = (e || 0) / 180 * Math.PI;
                var t = Math.cos(e)
                  , n = Math.sin(e)
                  , s = Math.sqrt;
                var i = 1 / 3
                  , r = s(i);
                var a = t + (1 - t) * i;
                var o = i * (1 - t) - r * n;
                var l = i * (1 - t) + r * n;
                var c = i * (1 - t) + r * n;
                var h = t + i * (1 - t);
                var d = i * (1 - t) - r * n;
                var u = i * (1 - t) - r * n;
                var f = i * (1 - t) + r * n;
                var p = t + i * (1 - t);
                var m = [a, o, l, 0, 0, c, h, d, 0, 0, u, f, p, 0, 0, 0, 0, 0, 1, 0];
                return m.join(" ")
            }
            var Q = n(114);
            var J = n.n(Q);
            const ee = new Image;
            ee.src = J();
            class te {
                constructor() {
                    this.hue = 0
                }
                render(e) {
                    if (!h.mapBorders)
                        return;
                    if (h.useRainbow) {
                        this.renderRainbow(e)
                    }
                    const t = Number(h.borderWidth);
                    const n = t >> 1;
                    const s = l.left - n;
                    const i = l.top - n;
                    const r = l.right - l.left + t;
                    const a = l.bottom - l.top + t;
                    if (h.useBorderGlow && !h.useRainbow) {
                        const t = l.left;
                        const n = l.top;
                        const s = l.right - l.left;
                        const i = l.bottom - l.top;
                        const r = s * Y.textures.border.width / 2048;
                        const a = i * Y.textures.border.height / 2048;
                        const o = r - s;
                        e.drawImage(Y.textures.border, t - o / 2, n - o / 2, r, a)
                    } else {
                        e.strokeStyle = h.borderColor;
                        e.lineWidth = t;
                        e.strokeRect(s, i, r, a)
                    }
                }
                renderRainbow(e) {
                    const t = Number(h.borderWidth);
                    const n = t >> 1;
                    const s = l.left - n;
                    const i = l.top - n;
                    const r = l.right - l.left + t;
                    const a = l.bottom - l.top + t;
                    const o = r / 720;
                    const c = 10;
                    const d = (10 + c / 2) * o;
                    e.save();
                    if (this.hue > 360) {
                        this.hue = 0
                    }
                    const u = this.hue++;
                    document.getElementById("matrix").setAttribute("values", X(u));
                    e.filter = `url(#hue-rotate)`;
                    e.drawImage(ee, s - d, i - d, r + d * 2, a + d * 2);
                    e.restore()
                }
            }
            const ne = new te;
            class se {
                constructor(e, t) {
                    this.element = e;
                    this.listener = t;
                    this.baseKeys = this.getBaseKeys();
                    this.attachListeners()
                }
                attachListeners() {
                    this.element.addEventListener("keydown", (e => {
                        this.handleEvent("keydown", e)
                    }
                    ));
                    this.element.addEventListener("keyup", (e => {
                        this.handleEvent("keyup", e)
                    }
                    ))
                }
                getKeyName(e) {
                    let t = e.code;
                    t = t.replace("Key", "");
                    t = t.replace("Digit", "");
                    t = t.replace("Arrow", "");
                    if (t.startsWith("Shift"))
                        t = "Shift";
                    else if (t.startsWith("Control"))
                        t = "Control";
                    else if (t.startsWith("Alt"))
                        t = "Alt";
                    t = t.toUpperCase();
                    switch (t) {
                    case "BACKQUOTE":
                        t = "TILDE";
                        break
                    }
                    const n = this.baseKeys.has(t);
                    if (!n)
                        return false;
                    if (e.ctrlKey)
                        return `CTRL+${t}`;
                    if (e.altKey)
                        return `ALT+${t}`;
                    return t
                }
                handleEvent(e, t) {
                    if (t.code === "Tab")
                        t.preventDefault();
                    if (t.repeat)
                        return;
                    const n = this.getKeyName(t);
                    if (!n)
                        return;
                    this.listener(t, e, n)
                }
                getBaseKeys() {
                    const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
                    const t = "0123456789".split("");
                    const n = "TAB SHIFT ENTER TILDE SPACE UP DOWN LEFT RIGHT ESCAPE".split(" ");
                    const s = new Set([...e, ...t, ...n]);
                    return s
                }
            }
            const ie = se;
            class re {
                constructor(e, t) {
                    this.element = e;
                    this.listener = t;
                    this.x = 0;
                    this.y = 0;
                    this.attachListeners()
                }
                attachListeners() {
                    this.element.addEventListener("mousedown", (e => {
                        this.handleEvent("mousedown", e)
                    }
                    ));
                    this.element.addEventListener("mouseup", (e => {
                        this.handleEvent("mouseup", e)
                    }
                    ));
                    this.element.addEventListener("contextmenu", (e => {
                        e.preventDefault()
                    }
                    ));
                    this.element.addEventListener("mousemove", (e => {
                        this.setMouse(e)
                    }
                    ))
                }
                getButtonName(e) {
                    switch (e.button) {
                    case 0:
                        return "LEFT BUTTON";
                    case 1:
                        return "MIDDLE BUTTON";
                    case 2:
                        return "RIGHT BUTTON";
                    default:
                        return `BUTTON ${e.button + 1}`
                    }
                }
                handleEvent(e, t) {
                    const n = this.getButtonName(t);
                    this.listener(t, e, n)
                }
                setMouse(e) {
                    this.x = e.clientX;
                    this.y = e.clientY
                }
            }
            const ae = re;
            class oe {
                constructor() {
                    this.keyboard = null;
                    this.mouse = null
                }
                initialize() {
                    this.keyboard = new ie(document,( (e, t, n) => {
                        this.handle(e, t, n)
                    }
                    ));
                    this.mouse = new ae(document,( (e, t, n) => {
                        this.handle(e, t, n)
                    }
                    ))
                }
                handle(e, t, n) {
                    switch (t) {
                    case "keydown":
                        this.onKeyDown(e, n);
                        break;
                    case "keyup":
                        this.onKeyUp(e, n);
                        break;
                    case "mousedown":
                        this.onMouseDown(e, n);
                        break;
                    case "mouseup":
                        this.onMouseUp(e, n);
                        break
                    }
                }
                onKeyDown(e, t) {
                    if (t === "TAB")
                        e.preventDefault();
                    if (V.isSettingsMenuOpen)
                        return;
                    if (V.isChatFocused && t !== h.hkToggleChat)
                        return;
                    if (t === h.hkToggleChat)
                        return void V.toggleChat();
                    if (t === h.hkToggleMenu)
                        return void V.toggle();
                    if (V.isOpen)
                        return;
                    e.preventDefault();
                    if (R.isAlive) {
                        switch (t) {
                        case h.hkSplit:
                            It.split();
                            return;
                        case h.hkDoubleSplit:
                            It.doubleSplit();
                            return;
                        case h.hkTripleSplit:
                            It.tripleSplit();
                            return;
                        case h.hkSplit16:
                            It.split16();
                            return;
                        case h.hkSplit32:
                            It.split32();
                            return;
                        case h.hkSplit64:
                            It.split64();
                            return;
                        case h.hkFeed:
                            It.feed();
                            return;
                        case h.hkMacroFeed:
                            It.macroFeed(true);
                            return;
                        case h.hkTogglePlayer:
                            It.togglePlayer();
                            return;
                        case h.hkReplay:
                            It.replay();
                            return
                        }
                    }
                    switch (t) {
                    case h.hkStop:
                        It.stop();
                        return;
                    case h.hkToggleNick:
                        It.toggleNick();
                        return;
                    case h.hkToggleHUD:
                        It.toggleHUDs();
                        return;
                    case h.hkToggleMass:
                        It.toggleMass();
                        return;
                    case h.hkToggleOwnSkin:
                        It.toggleSkin();
                        return;
                    case h.hkToggleChatMessage:
                        It.toggleChatMessages();
                        return;
                    case h.hkToggleChatMode:
                        It.toggleChatMode();
                        return;
                    case h.hkToggleSpectateMode:
                        It.toggleSpectateMode();
                        return;
                    case h.hkToggleSectors:
                        It.toggleSectors();
                        return;
                    case h.hkCommand1:
                        It.command(h.command1);
                        return;
                    case h.hkCommand2:
                        It.command(h.command2);
                        return;
                    case h.hkCommand3:
                        It.command(h.command3);
                        return;
                    case h.hkCommand4:
                        It.command(h.command4);
                        return;
                    case h.hkCommand5:
                        It.command(h.command5);
                        return;
                    case h.hkCommand6:
                        It.command(h.command6);
                        return;
                    case h.hkCommand7:
                        It.command(h.command7);
                        return;
                    case h.hkCommand8:
                        It.command(h.command8);
                        return;
                    case h.hkCommand9:
                        It.command(h.command9);
                        return;
                    case h.hkCommand10:
                        It.command(h.command10);
                        return;
                    case h.hkZoom1:
                        It.zoom(1);
                        return;
                    case h.hkZoom2:
                        It.zoom(.5);
                        return;
                    case h.hkZoom3:
                        It.zoom(.25);
                        return;
                    case h.hkZoom4:
                        It.zoom(.125);
                        return;
                    case h.hkZoom5:
                        It.zoom(.0712);
                        return
                    }
                }
                onKeyUp(e, t) {
                    switch (t) {
                    case h.hkMacroFeed:
                        It.macroFeed(false);
                        return
                    }
                }
                onMouseDown(e, t) {
                    if (V.isOpen)
                        return;
                    let n = false;
                    switch (t) {
                    case "LEFT BUTTON":
                        n = h.leftClick;
                        break;
                    case "MIDDLE BUTTON":
                        n = h.middleClick;
                        break;
                    case "RIGHT BUTTON":
                        n = h.rightClick;
                        break
                    }
                    switch (n) {
                    case "none":
                        break;
                    case "feed":
                        It.feed();
                        break;
                    case "macroFeed":
                        It.macroFeed(true);
                        break;
                    case "split":
                        It.split();
                        break;
                    case "doubleSplit":
                        It.doubleSplit();
                        break;
                    case "split16":
                        It.split16();
                        break;
                    case "split32":
                        It.split32();
                        break;
                    case "split64":
                        It.split64();
                        break;
                    case "dualToggle":
                        It.togglePlayer();
                        break
                    }
                }
                onMouseUp(e, t) {
                    let n = false;
                    switch (t) {
                    case "LEFT BUTTON":
                        n = h.leftClick;
                        break;
                    case "MIDDLE BUTTON":
                        n = h.middleClick;
                        break;
                    case "RIGHT BUTTON":
                        n = h.rightClick;
                        break
                    }
                    switch (n) {
                    case "macroFeed":
                        It.macroFeed(false);
                        break
                    }
                }
            }
            const le = new oe;
            class ce {
                render(e) {
                    if (!h.mouseTracker)
                        return;
                    e.strokeStyle = "#fff";
                    e.lineWidth = 4;
                    e.lineCap = "round";
                    e.lineJoin = "round";
                    const t = (le.mouse.x - window.innerWidth / 2) / E.zoom + E.x;
                    const n = (le.mouse.y - window.innerHeight / 2) / E.zoom + E.y;
                    const s = Wt.myCells[R.activeTab];
                    if (!s)
                        return;
                    e.beginPath();
                    for (const [i,r] of s) {
                        e.moveTo(r.x, r.y);
                        e.lineTo(t, n)
                    }
                    e.closePath();
                    e.stroke()
                }
            }
            const he = new ce;
            class de {
                constructor() {
                    this.lastUseTime = 0;
                    this.pool = [document.createElement("canvas"), document.createElement("canvas"), document.createElement("canvas"), document.createElement("canvas"), document.createElement("canvas")];
                    this.text = "";
                    this.font = "ubuntu";
                    this.shadow = false;
                    this.color = "#ffffff";
                    this.shadowColor = "#000000";
                    this.canvas = [false, false, false, false, false]
                }
                setText(e) {
                    if (this.text === e)
                        return;
                    this.text = e;
                    this.resetCache()
                }
                setFont(e) {
                    if (this.font === e)
                        return;
                    this.font = e;
                    this.resetCache()
                }
                setShadow(e) {
                    if (this.shadow === e)
                        return;
                    this.shadow = e;
                    this.resetCache()
                }
                setColor(e) {
                    if (this.color === e)
                        return;
                    this.color = e;
                    this.resetCache()
                }
                setShadowColor(e) {
                    if (this.shadowColor === e)
                        return;
                    this.shadowColor = e;
                    this.resetCache()
                }
                getCanvas(e) {
                    const t = this.getQuality(e);
                    this.lastUseTime = Date.now();
                    return this.canvas[t]
                }
                resetCache() {
                    this.canvas = [false, false, false, false, false]
                }
                renderCanvas(e) {
                    const t = this.getQuality(e);
                    const n = this.pool[t];
                    const s = n.getContext("2d");
                    const i = (t + 1) * 300 * .8;
                    const r = i * .3;
                    const a = 8 * (t + 1);
                    s.font = `500 ${r | 0}px ${this.font}`;
                    const o = s.measureText(this.text).width;
                    n.height = (r | 0) + a;
                    n.width = (o | 0) + a;
                    s.font = `500 ${r | 0}px ${this.font}`;
                    s.textBaseline = `middle`;
                    if (this.shadow) {
                        s.strokeStyle = this.shadowColor;
                        s.lineWidth = a;
                        s.strokeText(this.text, a >> 1, n.height >> 1)
                    }
                    s.fillStyle = this.color;
                    s.fillText(this.text, a >> 1, n.height >> 1);
                    this.canvas[t] = n;
                    this.lastUseTime = Date.now();
                    return n
                }
                getQuality(e) {
                    return Math.min(e / 300, 4) | 0
                }
            }
            const ue = de;
            class fe {
                constructor() {
                    this.lastUseTime = 0;
                    this.lastTextUpdateTime = 0;
                    this.canvas = document.createElement("canvas");
                    this.ctx = this.canvas.getContext("2d");
                    this.size = 30;
                    this.text = "0";
                    this.font = "ubuntu";
                    this.shadow = false;
                    this.color = "#ffffff";
                    this.shadowColor = "#000000";
                    this.isTainted = false
                }
                get updateInterval() {
                    return 500
                }
                setSize(e) {
                    if (this.size / e < .9 || e / this.size < .8) {
                        this.size = e;
                        this.isTainted = true
                    }
                }
                setText(e) {
                    const t = Date.now();
                    const n = t - this.lastTextUpdateTime > this.updateInterval;
                    if (this.text !== e && n) {
                        this.text = e;
                        this.lastTextUpdateTime = t;
                        this.isTainted = true
                    }
                }
                setFont(e) {
                    if (this.font === e)
                        return;
                    this.font = e;
                    this.isTainted = true
                }
                setShadow(e) {
                    if (this.shadow === e)
                        return;
                    this.shadow = e;
                    this.isTainted = true
                }
                setColor(e) {
                    if (this.color === e)
                        return;
                    this.color = e;
                    this.isTainted = true
                }
                setShadowColor(e) {
                    if (this.shadowColor === e)
                        return;
                    this.shadowColor = e;
                    this.isTainted = true
                }
                render() {
                    const e = this.canvas;
                    const t = this.ctx;
                    const n = 55 * (this.size / 1500) | 0;
                    const s = this.size * .3;
                    const i = Math.min(s, 50);
                    t.font = `500 ${i | 0}px ${this.font}`;
                    const r = t.measureText(this.text).width;
                    e.height = (s | 0) + n;
                    e.width = (r * (s / i) | 0) + n;
                    t.font = `500 ${s | 0}px ${this.font}`;
                    t.textBaseline = `middle`;
                    if (this.shadow) {
                        t.strokeStyle = this.shadowColor;
                        t.lineWidth = n;
                        t.strokeText(this.text, n >> 1, e.height >> 1)
                    }
                    t.fillStyle = this.color;
                    t.fillText(this.text, n >> 1, e.height >> 1);
                    this.isTainted = false
                }
                getCanvas() {
                    if (this.isTainted)
                        this.render();
                    this.lastUseTime = Date.now();
                    return this.canvas
                }
            }
            const pe = fe;
            class me {
                constructor() {
                    this.nickCaches = new Map;
                    this.massCaches = new Map;
                    this.maxCacheLife = 2e3;
                    this.nickCachePool = [];
                    this.massCachePool = []
                }
                nick(e, t, n, s) {
                    if (!e)
                        return false;
                    if (s < 34 && h.autoHideText)
                        return false;
                    if (s < 5)
                        return false;
                    const i = this.nickCaches.get(e) || this.newNickCache(e);
                    i.setFont("ubuntu");
                    i.setShadow(n);
                    i.setColor(t);
                    i.setShadowColor("#000");
                    i.setText(e);
                    const r = i.getCanvas(s);
                    return r || i.renderCanvas(s)
                }
                newNickCache(e) {
                    const t = this.nickCachePool.shift() || new ue;
                    this.nickCaches.set(e, t);
                    return t
                }
                mass(e, t, n, s, i) {
                    if (i < 34 && h.autoHideText)
                        return false;
                    if (i < 5)
                        return false;
                    const r = this.massCaches.get(e) || this.newMassCache(e);
                    r.setFont("ubuntu");
                    r.setShadow(s);
                    r.setColor(n);
                    r.setShadowColor("#000");
                    r.setSize(i);
                    r.setText(t);
                    return r.getCanvas()
                }
                newMassCache(e) {
                    const t = this.massCachePool.shift() || new pe;
                    this.massCaches.set(e, t);
                    return t
                }
                cleaner() {
                    const e = Date.now();
                    for (const [t,n] of this.nickCaches) {
                        if (e - n.lastUseTime < this.maxCacheLife)
                            continue;
                        this.nickCaches.delete(t);
                        this.nickCachePool.push(n)
                    }
                    for (const [t,n] of this.massCaches) {
                        if (e - n.lastUseTime < this.maxCacheLife)
                            continue;
                        this.massCaches.delete(t);
                        this.massCachePool.push(n)
                    }
                }
            }
            const ge = new me;
            class we {
                constructor() {
                    this.downloads = new Map;
                    this.canvas = document.createElement("canvas");
                    this.ctx = this.canvas.getContext("2d");
                    this.initialize()
                }
                initialize() {
                    this.canvas.width = 512;
                    this.canvas.height = 512;
                    this.ctx.beginPath();
                    this.ctx.arc(256, 256, 256, 0, Math.PI * 2, true);
                    this.ctx.closePath();
                    this.ctx.clip()
                }
                get(e) {
                    if (e === "no-skin")
                        return false;
                    if (!e)
                        return false;
                    const t = this.downloads.get(e);
                    if (t === "downloading")
                        return false;
                    if (t === "error")
                        return false;
                    if (t === undefined)
                        return void this.download(e);
                    return t
                }
                download(e) {
                    this.downloads.set(e, "downloading");
                    const t = new Image;
                    t.crossOrigin = "anonymous";
                    t.onload = () => {
                        this.ctx.clearRect(0, 0, 512, 512);
                        this.ctx.drawImage(t, 0, 0, 512, 512);
                        const n = this.canvas.toDataURL();
                        t.onload = null;
                        t.src = n;
                        this.downloads.set(e, t)
                    }
                    ;
                    t.onerror = () => {
                        this.downloads.set(e, "error")
                    }
                    ;
                    t.src = e
                }
            }
            const ye = new we;
            var ve = n(45);
            var Ce = n.n(ve);
            class xe {
                constructor() {
                    this.shield = new Image;
                    this.shieldActiveImg = new Image;
                    this.shieldActive = document.createElement("canvas");
                    this.shieldActiveImg.src = Ce()
                }
                init() {
                    this.cache()
                }
                cache() {
                    this.shield.src = Ce();
                    this.updateTexture()
                }
                updateTexture() {
                    const e = 512;
                    const t = this.shieldActive;
                    const n = t.getContext("2d");
                    n.clearRect(0, 0, t.width, t.height);
                    t.width = t.height = e * 1.25;
                    n.save();
                    n.translate(t.width / 2, t.height / 2);
                    n.shadowColor = h.activeCellBorderColor;
                    n.shadowBlur = 40;
                    for (let t = 0; t < 4; t++) {
                        n.drawImage(this.shieldActiveImg, 0 - e / 2, 0 - e / 2, e, e)
                    }
                    n.restore()
                }
            }
            const ke = new xe;
            class be {
                constructor() {
                    this.canvas = document.createElement("canvas");
                    this.size = 150
                }
                init() {
                    this.cache()
                }
                draw(e, t) {
                    const n = h.activeCellIndicatorSize;
                    e.drawImage(this.canvas, t.x - n / 2, t.y - t.radius - n, n, n)
                }
                cache() {
                    const e = this.canvas;
                    const t = e.getContext("2d");
                    t.clearRect(0, 0, e.width, e.height);
                    e.width = e.height = this.size;
                    t.textAlign = "center";
                    t.textBaseline = "middle";
                    t.font = `900 ${this.size}px 'Font Awesome 5 Free'`;
                    t.fillStyle = h.activeCellIndicatorColor;
                    t.fillText("", e.width / 2, e.height / 2)
                }
            }
            const Ie = new be;
            class Te {
                constructor() {
                    this.PI2 = Math.PI * 2
                }
                render(e) {
                    const t = h.activeCellBorder;
                    const n = h.shieldMarker;
                    const s = h.activeCellBorderWidth;
                    const i = h.activeCellBorderColor;
                    const r = h.nickSize;
                    const a = h.massSize;
                    const o = h.cellMass;
                    const l = h.ownCellMass;
                    const c = h.cellMassStroke;
                    const d = h.cellMassFormat;
                    const f = h.cellNick;
                    const p = h.ownCellNick;
                    const m = h.cellNickStroke;
                    const g = h.cellSkin;
                    const w = h.enemyCellSkin;
                    const y = h.pellets;
                    const v = Wt.clientsList.get(Wt.myClientID) || new u;
                    const C = Wt.myPlayerIDs[R.activeTab];
                    for (const u of Wt.sortedCells) {
                        if (!y && u.isFood)
                            continue;
                        u.animate();
                        if (Sn.isReplay && u.hidden) {
                            continue
                        }
                        e.globalAlpha = 1;
                        e.beginPath();
                        e.arc(u.x, u.y, u.radius, 0, this.PI2, true);
                        e.closePath();
                        if (u.isFood && (!h.rainbowFood || h.useFoodGlow)) {
                            const t = Y.textures.food;
                            const n = u.radius * t.width / 15;
                            e.drawImage(t, u.x - n / 2, u.y - n / 2, n, n);
                            continue
                        } else if (u.isFood && h.rainbowFood) {
                            e.fillStyle = u.color;
                            e.fill();
                            continue
                        }
                        if (u.isEject) {
                            e.fillStyle = u.color;
                            e.fill();
                            continue
                        }
                        if (u.isVirus) {
                            const t = Y.textures.virus;
                            const n = u.radius * t.width / 100;
                            e.drawImage(t, u.x - n / 2, u.y - n / 2, n, n)
                        }
                        let x = false;
                        if (u.isPlayerCell) {
                            let a = e.globalAlpha = Sn.isReplay ? H.opacity : h.cellOpacity / 100;
                            if (a !== 1) {
                                a = 1
                            }
                            const o = u.parentPlayer.parentClient;
                            const l = v.tag === o.tag;
                            const c = o.isBot;
                            let d = false;
                            if (!c && R.isTR && !u.isTR)
                                e.globalAlpha *= .35;
                            if (!c && !R.isTR && u.isTR)
                                e.globalAlpha *= .35;
                            if (u.removed)
                                e.globalAlpha *= 1 - u.dt;
                            if (!c) {
                                if (l || u.isOwn >= 0) {
                                    if (g)
                                        d = ye.get(u.skin)
                                } else {
                                    if (w)
                                        d = ye.get(u.skin)
                                }
                            }
                            if (!d || !u.removed) {
                                let t = u.color;
                                if (u.isOwn >= 0 && Wt.myPlayerIDs.length > 1 && h.ownCellColoring === "multibox") {
                                    t = u.isOwn === R.activeTab ? h.activeCellBorderColor : "#ffffff"
                                }
                                e.fillStyle = t;
                                e.fill()
                            }
                            if (a !== e.globalAlpha) {
                                e.globalAlpha = a
                            }
                            if (u.isOwn >= 0 && n && Wt.myPlayerIDs.length > 1) {
                                let t = u.radius;
                                u.parentPlayer.id === C ? t *= 1.25 : void 0;
                                const n = t + 14 * t / 100;
                                const s = u.parentPlayer && u.parentPlayer.id === C ? ke.shieldActive : ke.shield;
                                e.drawImage(s, u.x - n, u.y - n, n * 2, n * 2)
                            }
                            if (d) {
                                const t = u.isOwn >= 0 && Wt.myPlayerIDs.length > 1 && h.shieldMarker ? .65 : 1;
                                const n = 2 * (u.radius * t);
                                e.drawImage(d, u.x - n / 2, u.y - n / 2, n, n)
                            }
                            if (u.isOwn >= 0 && t && Wt.myPlayerIDs.length > 1) {
                                const t = u.isOwn >= 0 && Wt.myPlayerIDs.length > 1 && h.shieldMarker ? .65 : 1;
                                const n = u.radius * t;
                                const r = n * (s / 100);
                                const a = r / 2;
                                e.beginPath();
                                e.arc(u.x, u.y, n - a | 0, 0, this.PI2, true);
                                e.closePath();
                                e.lineWidth = r | 0;
                                e.strokeStyle = u.parentPlayer && u.parentPlayer.id === C ? i : "#FFF";
                                e.stroke()
                            }
                            if (u.isOwn >= 0 && p || u.isOwn < 0 && f) {
                                x = true;
                                const t = u.radius * E.zoom * r;
                                const n = o.teamColor;
                                const s = ge.nick(u.nick || Pt.defaultCellName, n, m, t);
                                const i = s.width / 768;
                                const a = i > 1 ? 768 / s.width : 1;
                                if (s && s.width && s.height) {
                                    const t = u.radius * r * .3 / s.height * a;
                                    const n = s.width * t;
                                    const i = s.height * t;
                                    e.drawImage(s, u.x - n / 2, u.y - i / 2, n, i)
                                }
                            }
                            if (u.isOwn >= 0 && Wt.myPlayerIDs.length > 1 && u.isOwn === R.activeTab && h.activeCellIndicator) {
                                Ie.draw(e, u)
                            }
                        }
                        if (u.isOwn >= 0 && l || u.isOwn < 0 && o) {
                            const t = u.radius * E.zoom * a;
                            const n = u.parentPlayer.parentClient.teamColor;
                            const s = u.mass > 999 && d === "shortened" ? `${(u.mass / 100 | 0) / 10}k` : u.mass;
                            const i = ge.mass(u.id, s, n, c, t);
                            if (i && i.width && i.height) {
                                const t = u.radius * a * .3 / i.height;
                                const n = i.width * t;
                                const s = i.height * t;
                                e.drawImage(i, u.x - n / 2, u.y + (x ? s / 4 / r : -(s / 2)), n, s)
                            }
                        }
                    }
                    e.globalAlpha = 1;
                    ge.cleaner()
                }
            }
            const Se = new Te;
            class Ue {
                constructor() {
                    this.canvas = document.createElement("canvas");
                    this.ctx = this.canvas.getContext("2d");
                    this.image = new Image;
                    this.image.crossOrigin = "anonymous";
                    this.image.onload = () => {
                        this.updateCache()
                    }
                }
                render(e) {
                    if (!h.backgroundImage)
                        return;
                    this.update();
                    e.drawImage(this.canvas, l.left, l.top, l.right - l.left, l.bottom - l.top)
                }
                update() {
                    const e = h.backgroundImageURL;
                    if (this.image.src !== e)
                        this.image.src = e
                }
                updateCache() {
                    const e = this.image;
                    if (!e.complete || !e.naturalWidth || !e.naturalHeight)
                        return;
                    const t = Math.min(Math.max(e.naturalWidth, e.naturalHeight), 2048);
                    this.canvas.width = t;
                    this.canvas.height = t;
                    this.ctx.drawImage(e, 0, 0, t, t)
                }
            }
            const Pe = new Ue;
            class Me {
                constructor() {
                    this.levels = new Map([[0, new Set], [1, new Set], [2, new Set], [3, new Set], [4, new Set], [5, new Set]]);
                    this.levelColors = ["#FF0000", "#FF6600", "#FFFF00", "#00DDFF", "#00FF00", "#0000FF"];
                    this.PI2 = Math.PI * 2
                }
                render(e) {
                    this.clear();
                    if (!R.isAlive || !h.splitIndicators)
                        return;
                    this.sort();
                    e.lineWidth = 2 / E.zoom | 0;
                    for (const [t,n] of this.levels) {
                        e.strokeStyle = this.levelColors[t];
                        this.renderGroup(e, n)
                    }
                }
                renderGroup(e, t) {
                    e.beginPath();
                    for (const n of t) {
                        const t = 3 / E.zoom | 0;
                        e.moveTo(n.x + n.radius + t * 2, n.y);
                        e.arc(n.x, n.y, n.radius + t * 2, 0, this.PI2, true)
                    }
                    e.closePath();
                    e.stroke()
                }
                sort() {
                    const e = R.biggestCellMass;
                    for (const [t,n] of Wt.cells) {
                        if (!n.isPlayerCell || n.isOwn >= 0)
                            continue;
                        const t = n.mass;
                        let s = 5;
                        if (t > e * 2 * 1.3)
                            s = 0;
                        else if (t > e * 1.3)
                            s = 1;
                        else if (t > e * .77)
                            s = 2;
                        else if (t > e * .5 * .77)
                            s = 3;
                        else if (t > e / 16 * 1.3)
                            s = 4;
                        this.levels.get(s).add(n)
                    }
                }
                clear() {
                    for (const [e,t] of this.levels)
                        t.clear()
                }
            }
            const Ee = new Me;
            class Ae {
                initialize() {
                    if (this.initialized)
                        return;
                    this.initialized = true;
                    this.canvas = document.getElementById("screen");
                    this.ctx = this.canvas.getContext("2d");
                    ke.init();
                    Y.init();
                    Ie.init();
                    this.setScreenSize();
                    window.addEventListener("resize", ( () => {
                        this.setScreenSize()
                    }
                    ), {
                        passive: true
                    })
                }
                setScreenSize() {
                    this.initialize();
                    const e = h.graphicsQuality;
                    this.canvas.width = window.innerWidth * e | 0;
                    this.canvas.height = window.innerHeight * e | 0
                }
                run() {
                    if (!this.ctx)
                        return;
                    this.ctx.imageSmoothingQuality = "high";
                    this.clearCanvas();
                    this.setCamera();
                    Pe.render(this.ctx);
                    Z.render(this.ctx);
                    ne.render(this.ctx);
                    he.render(this.ctx);
                    Ee.render(this.ctx);
                    Se.render(this.ctx);
                    this.resetCamera()
                }
                clearCanvas() {
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                }
                setCamera() {
                    const e = E.zoom * h.graphicsQuality;
                    const t = (this.canvas.width >> 1) / e - E.x;
                    const n = (this.canvas.height >> 1) / e - E.y;
                    this.ctx.scale(e, e);
                    this.ctx.translate(t, n)
                }
                resetCamera() {
                    this.ctx.resetTransform()
                }
            }
            const Re = Ae;
            var De = n(832);
            class _e {
                constructor() {
                    this.glowTexture = De.xE.WHITE;
                    this.glowSprite = null;
                    this.options = {
                        tint: true,
                        position: true,
                        vertices: true
                    };
                    this.container = new De.TY(4,this.options);
                    this.glowContainer = new De.W2;
                    this.texture = De.xE.WHITE;
                    this.sprites = [];
                    this.PI2 = Math.PI * 2
                }
                updateGlow() {
                    if (!this.glow)
                        return;
                    if (this.glowSprite && this.glow && this.glowContainer) {
                        this.createGlowTexture();
                        this.glowSprite = new De.jy(this.glowTexture);
                        this.glowContainer.removeChildren()
                    }
                }
                initialize() {
                    this.glow = document.createElement("canvas");
                    this.createGlowTexture();
                    this.glowSprite = De.jy.from(this.glowTexture);
                    this.glowContainer.addChild(this.glowSprite);
                    for (let e = 0; e < 4; e++) {
                        const t = new De.jy(this.texture);
                        t.anchor.x = .5;
                        t.anchor.y = .5;
                        t.rotation = this.PI2 / 4 * e;
                        this.sprites.push(t);
                        this.container.addChild(t)
                    }
                }
                createGlowTexture() {
                    const e = h.useBorderGlow;
                    const t = Number(h.borderWidth);
                    const n = h.borderGlowDistance;
                    const s = this.glow;
                    const i = s.getContext("2d");
                    i.clearRect(0, 0, s.width, s.height);
                    s.width = s.height = 2304;
                    i.translate(s.width / 2, s.height / 2);
                    const r = s.width / 14142;
                    i.shadowBlur = n * r;
                    i.shadowColor = h.borderGlowColor;
                    i.lineWidth = t * r;
                    i.strokeStyle = h.borderColor;
                    i.rect(-1024, -1024, 2048, 2048);
                    const a = e ? h.borderGlowStrength : 1;
                    for (let e = 0; e < a; e++) {
                        i.stroke()
                    }
                    if (this.glowTexture === De.xE.WHITE) {
                        this.glowTexture = De.xE.from(s)
                    } else {
                        this.glowTexture.update()
                    }
                }
                run() {
                    if (!this.glow)
                        return;
                    if (h.mapBorders) {
                        if (this.container.children.length !== 4 && !(h.useBorderGlow && !h.useRainbow)) {
                            for (const e of this.sprites)
                                this.container.addChild(e)
                        } else if (h.useBorderGlow && !h.useRainbow) {
                            this.container.removeChildren()
                        }
                        this.runGlow()
                    } else {
                        if (this.container.children.length !== 0 || h.useBorderGlow && !h.useRainbow) {
                            this.container.removeChildren()
                        }
                        this.runGlow();
                        return
                    }
                    const e = Number(h.borderWidth);
                    const t = parseInt(h.borderColor.replace("#", "0x"));
                    const n = l.right - l.left;
                    const s = l.bottom - l.top;
                    for (let e = 0; e < 4; e++) {
                        const n = this.sprites[e];
                        n.tint = t
                    }
                    if (!(h.useBorderGlow && !h.useRainbow)) {
                        const t = this.sprites[0];
                        t.x = l.left + n / 2;
                        t.y = l.top;
                        t.width = n + e;
                        t.height = e;
                        const i = this.sprites[1];
                        i.x = l.right;
                        i.y = l.top + s / 2;
                        i.width = s + e;
                        i.height = e;
                        const r = this.sprites[2];
                        r.x = l.left + n / 2;
                        r.y = l.bottom;
                        r.width = n + e;
                        r.height = e;
                        const a = this.sprites[3];
                        a.x = l.left;
                        a.y = l.top + s / 2;
                        a.width = s + e;
                        a.height = e
                    }
                }
                runGlow() {
                    if (h.useBorderGlow && !h.useRainbow) {
                        if (this.glowContainer.children.length !== 1) {
                            this.glowContainer.addChild(this.glowSprite)
                        }
                    } else {
                        if (this.glowContainer.children.length !== 0) {
                            this.glowContainer.removeChildren()
                        }
                        return
                    }
                    const e = l.left;
                    const t = l.top;
                    const n = l.right - l.left;
                    const s = l.bottom - l.top;
                    const i = n * this.glowTexture.width / 2048;
                    const r = s * this.glowTexture.height / 2048;
                    const a = i - n;
                    const o = this.glowSprite;
                    o.x = e - a / 2;
                    o.y = t - a / 2;
                    o.width = i;
                    o.height = r
                }
            }
            const Fe = new _e;
            class We {
                initialize() {
                    this.canvas = document.createElement("canvas");
                    this.ctx = this.canvas.getContext("2d");
                    this.canvas.width = this.canvas.height = 2048;
                    this.texture = null;
                    this.cache();
                    this.container = new De.W2;
                    this.sprite = De.jy.from(this.texture);
                    this.sprite.anchor.x = .5;
                    this.sprite.anchor.y = .5
                }
                run() {
                    if (!this.canvas)
                        return;
                    if (h.mapSectors) {
                        if (this.container.children.length !== 1) {
                            this.container.addChild(this.sprite)
                        }
                    } else {
                        if (this.container.children.length !== 0) {
                            this.container.removeChildren()
                        }
                        return
                    }
                    const e = l.right - l.left;
                    const t = l.bottom - l.top;
                    this.sprite.x = l.left + e / 2;
                    this.sprite.y = l.top + t / 2;
                    this.sprite.width = e;
                    this.sprite.height = t
                }
                cache() {
                    if (!this.canvas)
                        return;
                    const {ctx: e, canvas: t} = this;
                    e.clearRect(0, 0, t.width, t.height);
                    e.save();
                    const n = 2048 / 14142;
                    const s = "ABCDE".split("");
                    const i = 5;
                    const r = 5;
                    const a = t.width / i;
                    const o = t.height / r;
                    e.beginPath();
                    e.font = `400 ${h.sectorTextSize * n}px ${"Ubuntu"}`;
                    e.textAlign = "center";
                    e.textBaseline = "middle";
                    e.lineWidth = h.sectorGridWidth * n;
                    e.strokeStyle = h.sectorGridColor;
                    e.fillStyle = h.sectorTextColor;
                    for (let t = 0; t < r; t++) {
                        for (let n = 0; n < i; n++) {
                            e.fillText(`${s[t]}${n + 1}`, (n + .5) * a, (t + .5) * o, a, o);
                            if (n !== 0) {
                                e.beginPath();
                                e.strokeStyle = h.sectorGridColor;
                                e.moveTo(a * n, 0);
                                e.lineTo(a * n, 2048);
                                e.stroke();
                                e.closePath()
                            }
                        }
                        if (t !== 0) {
                            e.beginPath();
                            e.strokeStyle = h.sectorGridColor;
                            e.moveTo(0, o * t);
                            e.lineTo(2048, o * t);
                            e.stroke();
                            e.closePath()
                        }
                    }
                    e.strokeStyle = h.sectorGridColor;
                    e.strokeRect(0 + e.lineWidth / 2, 0 + e.lineWidth / 2, 2048 - e.lineWidth, 2048 - e.lineWidth);
                    e.closePath();
                    e.restore();
                    if (!this.texture) {
                        this.texture = De.xE.from(this.canvas)
                    } else {
                        this.texture.update()
                    }
                }
            }
            const ze = new We;
            class Oe {
                initialize() {
                    this.container = new De.W2;
                    this.canvas = document.createElement("canvas");
                    this.ctx = this.canvas.getContext("2d");
                    this.sprite = new De.jy;
                    this.image = new Image;
                    this.image.crossOrigin = "anonymous";
                    this.image.onload = () => {
                        this.updateCache()
                    }
                }
                updateCache() {
                    if (!this.canvas)
                        return;
                    const e = this.image;
                    if (!e.complete || !e.naturalWidth || !e.naturalHeight)
                        return;
                    const t = Math.min(Math.max(e.naturalWidth, e.naturalHeight), 2048);
                    this.canvas.width = t;
                    this.canvas.height = t;
                    this.ctx.drawImage(e, 0, 0, t, t);
                    this.container.removeChild(this.sprite);
                    this.sprite.destroy(true);
                    this.sprite = De.jy.from(this.canvas);
                    this.container.addChild(this.sprite)
                }
                run() {
                    if (!this.canvas)
                        return;
                    if (h.backgroundImage) {
                        if (this.container.children.length !== 1) {
                            this.container.addChild(this.sprite)
                        }
                    } else {
                        if (this.container.children.length !== 0) {
                            this.container.removeChildren()
                        }
                        return
                    }
                    const e = h.backgroundImageURL;
                    if (this.image.src !== e)
                        this.image.src = e;
                    const t = l.right - l.left;
                    const n = l.bottom - l.top;
                    this.sprite.anchor.set(.5, .5);
                    this.sprite.x = l.left + t / 2;
                    this.sprite.y = l.top + n / 2;
                    this.sprite.width = t;
                    this.sprite.height = n
                }
            }
            const Be = new Oe;
            const Le = 128;
            class Ge {
                constructor() {
                    this.options = {
                        vertices: true,
                        rotation: true,
                        tint: true
                    };
                    this.container = new De.TY(Le,this.options);
                    this.texture = De.xE.WHITE;
                    this.sprites = []
                }
                initialize() {
                    for (let e = 0; e < Le; e++) {
                        const e = new De.jy(this.texture);
                        e.anchor.x = .5;
                        this.sprites.push(e)
                    }
                }
                run() {
                    if (h.mouseTracker) {
                        if (this.container.children.length !== Le) {
                            for (const e of this.sprites)
                                this.container.addChild(e)
                        }
                    } else {
                        if (this.container.children.length !== 0) {
                            this.container.removeChildren()
                        }
                        return
                    }
                    for (let e = 0; e < this.sprites.length; e++) {
                        const t = this.sprites[e];
                        t.alpha = 0
                    }
                    const e = (le.mouse.x - window.innerWidth / 2) / E.zoom + E.x;
                    const t = (le.mouse.y - window.innerHeight / 2) / E.zoom + E.y;
                    const n = Wt.myCells[R.activeTab];
                    if (!n)
                        return;
                    let s = 0;
                    for (const i of n.values()) {
                        if (s === Le)
                            break;
                        const n = e - i.x;
                        const r = t - i.y;
                        const a = Math.sqrt(n * n + r * r);
                        const o = Math.atan(n / r) || 0;
                        const l = this.sprites[s++];
                        l.x = e;
                        l.y = t;
                        l.width = 4;
                        l.height = a;
                        l.rotation = (t < i.y ? 0 : Math.PI) - o;
                        l.alpha = 1
                    }
                }
            }
            const Ne = new Ge;
            class He {
                constructor() {
                    this.size = 256;
                    this.textures = {
                        base: De.xE.WHITE,
                        ring: De.xE.WHITE,
                        inner: De.xE.WHITE
                    };
                    this.pools = {
                        base: [],
                        ring: [],
                        inner: []
                    };
                    this.index = {
                        base: 0,
                        ring: 0,
                        inner: 0
                    }
                }
                clean() {
                    if (!this.canvas)
                        return;
                    this.createTextures();
                    this.textures.base.update();
                    this.textures.ring.update();
                    this.reset();
                    this.pools = {
                        base: [],
                        ring: [],
                        inner: []
                    }
                }
                initialize() {
                    this.canvas = document.createElement("canvas");
                    this.glowCanvas = document.createElement("canvas");
                    this.baseTexture = new De.VL;
                    this.createTextures();
                    this.createInnerTexture()
                }
                reset() {
                    this.index.base = 0;
                    this.index.ring = 0
                }
                add(e, t) {
                    if (!this.canvas)
                        return;
                    const n = t.radius / 100;
                    const s = this.pools.base[this.index.base++] || this.newBase();
                    const i = this.pools.ring[this.index.ring++] || this.newRing();
                    s.scale.set(n, n);
                    s.position.set(t.x, t.y);
                    s.tint = parseInt(h.virusColor2.replace("#", "0x"));
                    e.addChild(s);
                    i.scale.set(n, n);
                    i.position.set(t.x, t.y);
                    if (!h.useVirusGlow) {
                        i.tint = parseInt(h.virusColor1.replace("#", "0x"))
                    }
                    e.addChild(i)
                }
                createTextures() {
                    const e = this.canvas;
                    const t = e.getContext("2d");
                    t.clearRect(0, 0, e.width, e.height);
                    const n = this.size;
                    e.width = n * 2;
                    e.height = n * 2;
                    t.beginPath();
                    t.arc(n / 2, n / 2, 100, 0, Math.PI * 2, true);
                    t.closePath();
                    t.fillStyle = "#ffffff";
                    t.fill();
                    if (!h.useVirusGlow) {
                        t.beginPath();
                        t.arc(n + n / 2, n / 2, 100, 0, Math.PI * 2, true);
                        t.closePath();
                        t.strokeStyle = "#ffffff";
                        t.lineWidth = h.virusBorderWidth;
                        t.stroke()
                    }
                    const s = De.VL.from(e);
                    this.textures.base = new De.xE(s,new De.Ae(0,0,this.size,this.size));
                    if (!h.useVirusGlow) {
                        this.textures.ring = new De.xE(s,new De.Ae(this.size,0,this.size,this.size))
                    }
                    if (h.useVirusGlow) {
                        this.createGlowTexture()
                    }
                }
                createInnerTexture() {
                    const e = this.glowCanvas;
                    const t = e.getContext("2d");
                    t.clearRect(0, 0, e.width, e.height);
                    const n = 256;
                    e.width = e.height = n;
                    t.beginPath();
                    t.fillStyle = "#fff";
                    t.arc(n / 2, n / 2, n / 2, 0, Math.PI * 2, false);
                    t.fill();
                    t.closePath();
                    this.textures.inner = De.xE.from(e)
                }
                createGlowTexture() {
                    if (h.useVirusGlow) {
                        const e = document.createElement("canvas");
                        const t = e.getContext("2d");
                        const n = 512;
                        e.width = n;
                        e.height = n;
                        t.beginPath();
                        t.arc(n / 2, n / 2, 100, 0, Math.PI * 2, true);
                        t.closePath();
                        t.shadowBlur = h.virusGlowDistance;
                        t.shadowColor = h.virusGlowColor;
                        t.strokeStyle = h.virusColor1;
                        t.lineWidth = h.virusBorderWidth;
                        for (let e = 0; e < h.virusGlowStrength; e++) {
                            t.stroke()
                        }
                        this.textures.ring = De.xE.from(e)
                    }
                }
                newBase() {
                    const e = new De.jy(this.textures.base);
                    e.anchor.x = .5;
                    e.anchor.y = .5;
                    e.alpha = .7;
                    this.pools.base.push(e);
                    return e
                }
                newRing() {
                    const e = new De.jy(this.textures.ring);
                    e.anchor.x = .5;
                    e.anchor.y = .5;
                    this.pools.ring.push(e);
                    return e
                }
                newInner() {
                    const e = new De.jy(this.textures.inner);
                    e.anchor.x = .5;
                    e.anchor.y = .5;
                    this.pools.inner.push(e);
                    return e
                }
            }
            const je = new He;
            class $e {
                constructor() {
                    this.texture = De.xE.WHITE;
                    this.pool = [];
                    this.index = 0
                }
                initialize() {
                    this.canvas = document.createElement("canvas");
                    this.createTexture()
                }
                clean() {
                    if (!this.canvas)
                        return;
                    this.createTexture();
                    this.texture.update();
                    this.reset();
                    this.pool = []
                }
                reset() {
                    this.index = 0
                }
                add(e, t) {
                    if (!this.canvas)
                        return;
                    const n = this.pool[this.index++] || this.newSprite();
                    const s = !h.rainbowFood ? h.foodColor : t.color;
                    n.x = t.x;
                    n.y = t.y;
                    if (h.useFoodGlow) {
                        n.width = n.height = t.radius * 128 / 15 * 2
                    } else {
                        n.width = n.height = t.radius * 2
                    }
                    if (!h.useFoodGlow) {
                        n.tint = parseInt(s.replace("#", "0x"))
                    } else {
                        n.tint = 16777215
                    }
                    e.addChild(n)
                }
                createTexture() {
                    const e = this.canvas;
                    const t = e.getContext("2d");
                    t.clearRect(0, 0, e.width, e.height);
                    const n = 256;
                    e.width = n;
                    e.height = n;
                    if (!h.useFoodGlow) {
                        t.beginPath();
                        t.arc(n / 2, n / 2, n / 2, 0, Math.PI * 2, true);
                        t.closePath();
                        t.fillStyle = "#ffffff";
                        t.fill()
                    } else if (h.useFoodGlow) {
                        const e = h.foodGlowStrength;
                        const s = h.foodGlowDistance;
                        t.beginPath();
                        t.shadowBlur = s;
                        t.shadowColor = h.foodGlowColor;
                        t.arc(n / 2, n / 2, 15, 0, Math.PI * 2, true);
                        t.closePath();
                        t.fillStyle = h.foodColor;
                        for (let n = 0; n < e; n++) {
                            t.fill()
                        }
                    }
                    this.texture = De.xE.from(e)
                }
                newSprite() {
                    const e = new De.jy(this.texture);
                    e.anchor.x = .5;
                    e.anchor.y = .5;
                    this.pool.push(e);
                    return e
                }
            }
            const Ve = new $e;
            class qe {
                constructor() {
                    this.texture = De.xE.WHITE;
                    this.pool = [];
                    this.index = 0
                }
                initialize() {
                    this.createTexture()
                }
                reset() {
                    this.index = 0
                }
                add(e, t) {
                    const n = this.pool[this.index++] || this.newSprite();
                    n.x = t.x;
                    n.y = t.y;
                    n.width = t.radius * 2;
                    n.height = t.radius * 2;
                    n.tint = parseInt(t.color.replace("#", "0x"));
                    e.addChild(n)
                }
                createTexture() {
                    const e = document.createElement("canvas");
                    const t = e.getContext("2d");
                    const n = 64;
                    e.width = n;
                    e.height = n;
                    t.beginPath();
                    t.arc(n / 2, n / 2, n / 2, 0, Math.PI * 2, true);
                    t.closePath();
                    t.fillStyle = "#ffffff";
                    t.fill();
                    this.texture = De.xE.from(e)
                }
                newSprite() {
                    const e = new De.jy(this.texture);
                    e.anchor.x = .5;
                    e.anchor.y = .5;
                    this.pool.push(e);
                    return e
                }
            }
            const Ze = new qe;
            class Ke {
                constructor(e) {
                    this.texture = De.xE.from(e);
                    this.pool = [];
                    this.index = 0;
                    this.lastUsed = Date.now()
                }
                getSprite() {
                    this.lastUsed = Date.now();
                    return this.pool[this.index++] || this.newSprite()
                }
                newSprite() {
                    const e = new De.jy(this.texture);
                    e.anchor.set(.5, .5);
                    this.pool.push(e);
                    return e
                }
                reset() {
                    this.index = 0
                }
                destroy() {
                    for (const e of this.pool)
                        e.destroy(false);
                    this.texture.destroy(true)
                }
            }
            const Ye = Ke;
            class Xe {
                constructor() {
                    this.skins = new Map;
                    this.downloading = new Map
                }
                initialize() {}
                reset() {
                    const e = Date.now();
                    for (const [t,n] of this.skins) {
                        const s = e - n.lastUsed < 2e3;
                        if (s) {
                            n.reset()
                        } else {
                            n.destroy();
                            this.skins.delete(t)
                        }
                    }
                }
                get(e) {
                    if (e === "no-skin")
                        return false;
                    if (!e)
                        return false;
                    const t = this.skins.get(e);
                    if (t !== undefined)
                        return t.getSprite();
                    const n = this.downloading.has(e);
                    if (!n)
                        this.download(e);
                    return false
                }
                download(e) {
                    const t = new Image;
                    t.crossOrigin = "anonymous";
                    t.onload = () => {
                        const n = document.createElement("canvas");
                        const s = n.getContext("2d");
                        const i = 512;
                        n.width = i;
                        n.height = i;
                        s.beginPath();
                        s.arc(i >> 1, i >> 1, i >> 1, 0, Math.PI * 2, true);
                        s.closePath();
                        s.clip();
                        if (t.width && t.height)
                            s.drawImage(t, 0, 0, i, i);
                        const r = new Ye(n);
                        this.downloading.delete(e);
                        this.skins.set(e, r);
                        t.onload = null;
                        t.onerror = null
                    }
                    ;
                    t.onerror = () => {
                        this.downloading.delete(e);
                        t.onload = null;
                        t.onerror = null
                    }
                    ;
                    t.src = e;
                    this.downloading.set(e, true)
                }
            }
            const Qe = new Xe;
            class Je {
                constructor() {
                    this.texture = De.xE.WHITE;
                    this.pool = [];
                    this.index = 0
                }
                initialize() {
                    this.canvas = document.createElement("canvas");
                    this.createTexture()
                }
                update() {
                    if (!this.canvas)
                        return;
                    this.createTexture();
                    this.texture.update()
                }
                reset() {
                    this.index = 0
                }
                getSprite() {
                    if (!this.canvas)
                        return;
                    return this.pool[this.index++] || this.newSprite()
                }
                createTexture() {
                    const e = this.canvas;
                    const t = e.getContext("2d");
                    t.clearRect(0, 0, e.width, e.height);
                    const n = 512;
                    const s = n / 2;
                    const i = s * (h.activeCellBorderWidth / 100);
                    const r = i / 2;
                    e.width = n;
                    e.height = n;
                    t.beginPath();
                    t.arc(n / 2, n / 2, s - r | 0, 0, Math.PI * 2, true);
                    t.closePath();
                    t.lineWidth = i | 0;
                    t.strokeStyle = "#ffffff";
                    t.stroke();
                    this.texture = De.xE.from(e)
                }
                newSprite() {
                    const e = new De.jy(this.texture);
                    e.anchor.x = .5;
                    e.anchor.y = .5;
                    this.pool.push(e);
                    return e
                }
            }
            const et = new Je;
            class tt {
                constructor() {
                    this.pool = [];
                    this.index = 0;
                    this.loaded = false
                }
                reset() {
                    this.index = 0
                }
                initialize() {
                    this.loadFonts()
                }
                get(e) {
                    const t = this.pool[this.index++] || this.newText();
                    t.text = `${e}`;
                    t.fontName = h.cellMassStroke ? "UbuntuStroked" : "Ubuntu";
                    t.fontSize = 256;
                    return t
                }
                newText() {
                    const e = {
                        fontName: "Ubuntu",
                        fontSize: 256
                    };
                    const t = new De.Xz("000",e);
                    t.anchor = .5;
                    this.pool.push(t);
                    return t
                }
                loadFonts() {
                    const e = {
                        crossOrigin: true
                    };
                    const t = new De.aN;
                    const n = "./bitmapFonts/";
                    t.add("ubuntu-font-png", n + "ubuntuBold_0.png", e);
                    t.add("ubuntu-font", n + "ubuntuBold.fnt", e);
                    t.add("ubuntu-font-stroked-png", n + "ubuntuBoldStroked_0.png", e);
                    t.add("ubuntu-font-stroked", n + "ubuntuBoldStroked.fnt", e);
                    t.load(( () => {
                        this.loaded = true
                    }
                    ))
                }
            }
            const nt = new tt;
            class st {
                constructor(e) {
                    this.texture = De.xE.from(e);
                    this.pool = [];
                    this.index = 0;
                    this.lastUsed = Date.now()
                }
                getSprite() {
                    this.lastUsed = Date.now();
                    return this.pool[this.index++] || this.newSprite()
                }
                newSprite() {
                    const e = new De.jy(this.texture);
                    e.anchor.set(.5, .5);
                    this.pool.push(e);
                    return e
                }
                reset() {
                    this.index = 0
                }
                destroy() {
                    for (const e of this.pool)
                        e.destroy(false);
                    this.texture.destroy(true)
                }
            }
            const it = st;
            class rt {
                constructor() {
                    this.cacheMap = new Map
                }
                reset() {
                    const e = Date.now();
                    for (const [t,n] of this.cacheMap) {
                        if (e - n.lastUsed < 5e3) {
                            n.reset()
                        } else {
                            n.destroy();
                            this.cacheMap.delete(t)
                        }
                    }
                }
                get(e) {
                    const t = this.cacheMap.get(e) || this.newNickCache(e);
                    return t.getSprite()
                }
                newNickCache(e) {
                    const t = document.createElement("canvas");
                    const n = t.getContext("2d");
                    const s = h.cellNickStroke ? 20 : 0;
                    n.font = "500 32px Ubuntu";
                    const i = 128 + s * 2;
                    const r = n.measureText(e).width * 4 + s * 2 | 0;
                    t.height = i;
                    t.width = r;
                    n.font = "500 128px Ubuntu";
                    n.textBaseline = "middle";
                    if (s > 0) {
                        n.lineWidth = s;
                        n.strokeStyle = "#000000";
                        n.strokeText(e, s, i >> 1)
                    }
                    n.fillStyle = "#ffffff";
                    n.fillText(e, s, i >> 1);
                    const a = new it(t);
                    this.cacheMap.set(e, a);
                    return a
                }
            }
            const at = new rt;
            class ot {
                constructor() {
                    this.size = 512;
                    this.texture = De.xE.WHITE;
                    this.activeTexture = De.xE.WHITE;
                    this.image = new Image;
                    this.indexes = {
                        shield: 0,
                        shieldActive: 0
                    };
                    this.pools = {
                        shield: [],
                        shieldActive: []
                    }
                }
                update() {
                    if (!this.canvas)
                        return;
                    this.createTextures();
                    this.texture.update();
                    this.activeTexture.update()
                }
                initialize() {
                    this.canvas = document.createElement("canvas");
                    this.ctx = this.canvas.getContext("2d");
                    this.image.src = Ce();
                    this.image.onload = () => {
                        this.texture = De.xE.from(this.image)
                    }
                    ;
                    this.createTextures()
                }
                reset() {
                    this.indexes = {
                        shield: 0,
                        shieldActive: 0
                    }
                }
                add(e, t, n) {
                    let s = t.radius;
                    if (n) {
                        s *= 1.25
                    }
                    const i = 14 * s / 100;
                    const r = n ? this.pools.shieldActive[this.indexes.shieldActive++] || this.newSpriteActive() : this.pools.shield[this.indexes.shield++] || this.newSprite();
                    r.x = t.x;
                    r.y = t.y;
                    r.width = (s + i) * 2;
                    r.height = (s + i) * 2;
                    e.addChild(r)
                }
                createTextures() {
                    const e = this.ctx;
                    e.clearRect(0, 0, this.canvas.width, this.canvas.height);
                    this.canvas.width = this.canvas.height = this.size * 1.25;
                    e.save();
                    e.translate(this.canvas.width / 2, this.canvas.height / 2);
                    e.shadowColor = h.activeCellBorderColor;
                    e.shadowBlur = 40;
                    for (let t = 0; t < 4; t++) {
                        e.drawImage(this.image, 0 - this.size / 2, 0 - this.size / 2, this.size, this.size)
                    }
                    e.restore();
                    const t = De.VL.from(this.canvas);
                    this.activeTexture = new De.xE(t)
                }
                newSprite() {
                    const e = new De.jy(this.texture);
                    e.anchor.x = .5;
                    e.anchor.y = .5;
                    this.pools.shield.push(e);
                    return e
                }
                newSpriteActive() {
                    const e = new De.jy(this.activeTexture);
                    e.anchor.x = .5;
                    e.anchor.y = .5;
                    this.pools.shieldActive.push(e);
                    return e
                }
            }
            const lt = new ot;
            class ct {
                constructor() {
                    this.texture = De.xE.WHITE;
                    this.size = 150;
                    this.index = 0;
                    this.pool = []
                }
                reset() {
                    this.index = 0
                }
                add(e, t) {
                    if (!this.canvas)
                        return;
                    const n = h.activeCellIndicatorSize;
                    const s = this.pool[this.index++] || this.new();
                    s.position.set(t.x - n / 2, t.y - t.radius - n);
                    s.width = s.height = n;
                    s.tint = parseInt(h.activeCellIndicatorColor.replace("#", "0x"));
                    e.addChild(s)
                }
                initialize() {
                    this.canvas = document.createElement("canvas");
                    this.createTexture()
                }
                createTexture() {
                    const e = this.canvas;
                    const t = e.getContext("2d");
                    e.width = e.height = this.size;
                    t.textAlign = "center";
                    t.textBaseline = "middle";
                    t.font = `900 ${this.size}px 'Font Awesome 5 Free'`;
                    t.fillStyle = "white";
                    t.fillText("", e.width / 2, e.height / 2);
                    this.texture = De.xE.from(e);
                    this.texture.update()
                }
                new() {
                    const e = new De.jy(this.texture);
                    this.pool.push(e);
                    return e
                }
            }
            const ht = new ct;
            class dt {
                constructor() {
                    this.texture = De.xE.WHITE;
                    this.pool = [];
                    this.index = 0;
                    this.ownTag = 0;
                    this.ownTeamColor = "#555555"
                }
                initialize() {
                    this.createTexture();
                    ht.initialize();
                    Qe.initialize();
                    et.initialize();
                    nt.initialize();
                    lt.initialize()
                }
                reset() {
                    this.index = 0;
                    const e = Wt.clientsList.get(Wt.myClientID) || new u;
                    this.ownTag = e.tag;
                    this.ownTeamColor = e.teamColor;
                    ht.reset();
                    lt.reset();
                    Qe.reset();
                    et.reset();
                    nt.reset();
                    at.reset()
                }
                add(e, t) {
                    if (!this.texture)
                        return;
                    const n = t.parentPlayer.parentClient;
                    const s = n.tag === this.ownTag;
                    const i = n.isBot;
                    const r = this.pool[this.index++] || this.newBase();
                    let a = t.color;
                    if (t.isOwn >= 0 && Wt.myPlayerIDs.length > 1 && h.ownCellColoring === "multibox") {
                        a = t.isOwn === R.activeTab ? h.activeCellBorderColor : "#ffffff"
                    }
                    r.x = t.x;
                    r.y = t.y;
                    r.width = t.radius * 2;
                    r.height = t.radius * 2;
                    r.tint = parseInt(a.replace("#", "0x"));
                    let o = r.alpha = Sn.isReplay ? H.opacity : h.cellOpacity / 100;
                    if (o !== 1) {
                        o = 1
                    }
                    if (!i && R.isTR && !t.isTR)
                        o *= .35;
                    if (!i && !R.isTR && t.isTR)
                        o *= .35;
                    if (t.removed)
                        o *= 1 - t.dt;
                    e.addChild(r);
                    let l = false;
                    if (!n.isBot) {
                        if (s || t.isOwn >= 0) {
                            if (h.cellSkin) {
                                l = Qe.get(t.skin)
                            }
                        } else {
                            if (h.enemyCellSkin) {
                                l = Qe.get(t.skin)
                            }
                        }
                    }
                    if (t.isOwn >= 0 && Wt.myPlayerIDs.length > 1 && h.shieldMarker) {
                        lt.add(e, t, t.isOwn === R.activeTab)
                    }
                    if (l !== false) {
                        const n = t.isOwn >= 0 && Wt.myPlayerIDs.length > 1 && h.shieldMarker ? .65 : 1;
                        l.x = t.x;
                        l.y = t.y;
                        l.width = t.radius * n * 2;
                        l.height = t.radius * n * 2;
                        l.alpha = o;
                        e.addChild(l)
                    }
                    if (t.isOwn >= 0 && Wt.myPlayerIDs.length > 1 && h.activeCellBorder) {
                        const n = h.shieldMarker ? .65 : 1;
                        const s = t.isOwn === R.activeTab ? h.activeCellBorderColor : "#ffffff";
                        const i = parseInt(s.replace("#", "0x"));
                        const r = et.getSprite();
                        r.x = t.x;
                        r.y = t.y;
                        r.width = t.radius * n * 2;
                        r.height = t.radius * n * 2;
                        r.tint = i;
                        e.addChild(r)
                    }
                    if (t.radius * E.zoom < 34 && h.autoHideText)
                        return false;
                    const c = t.isOwn >= 0 && h.ownCellNick || t.isOwn < 0 && h.cellNick;
                    if (c) {
                        const s = at.get(n.nick || Pt.defaultCellName);
                        const i = s.texture.width / 768;
                        const r = i > 1.6 ? 768 / s.texture.width : 1;
                        const a = h.nickSize * (t.radius * .3) / 128;
                        const l = parseInt(n.teamColor.replace("#", "0x"));
                        s.position.set(t.x, t.y);
                        s.scale.set(a * r, a * r);
                        s.alpha = o;
                        s.tint = l;
                        e.addChild(s)
                    }
                    const d = t.isOwn >= 0 && h.ownCellMass || t.isOwn < 0 && h.cellMass;
                    if (d) {
                        const s = t.mass > 999 && h.cellMassFormat === "shortened" ? `${(t.mass / 100 | 0) / 10}k` : t.mass;
                        const i = nt.get(s);
                        const r = h.massSize * (t.radius * .3) / 256;
                        const a = parseInt(n.teamColor.replace("#", "0x"));
                        i.x = t.x;
                        i.y = t.y + (c ? t.radius * .3 : 0);
                        i.scale.x = r;
                        i.scale.y = r;
                        i.alpha = o;
                        i.tint = a;
                        e.addChild(i)
                    }
                    if (t.isOwn >= 0 && Wt.myPlayerIDs.length > 1 && t.isOwn === R.activeTab && h.activeCellIndicator) {
                        ht.add(e, t)
                    }
                }
                createTexture() {
                    const e = document.createElement("canvas");
                    const t = e.getContext("2d");
                    const n = 1024;
                    e.width = n;
                    e.height = n;
                    t.beginPath();
                    t.arc(n / 2, n / 2, n / 2, 0, Math.PI * 2, true);
                    t.closePath();
                    t.fillStyle = "#ffffff";
                    t.fill();
                    this.texture = De.xE.from(e)
                }
                newBase() {
                    const e = new De.jy(this.texture);
                    e.anchor.x = .5;
                    e.anchor.y = .5;
                    this.pool.push(e);
                    return e
                }
            }
            const ut = new dt;
            class ft {
                constructor() {
                    this.container = new De.W2
                }
                initialize() {
                    Ve.initialize();
                    Ze.initialize();
                    je.initialize();
                    ut.initialize()
                }
                reset() {
                    this.container.removeChildren();
                    Ve.reset();
                    Ze.reset();
                    je.reset();
                    ut.reset()
                }
                run() {
                    if (nt.loaded === false) {
                        return
                    }
                    this.reset();
                    this.setup()
                }
                setup() {
                    for (const e of Wt.sortedCells) {
                        e.animate();
                        if (e.hidden && Sn.isReplay) {
                            continue
                        }
                        if (e.isVirus)
                            je.add(this.container, e);
                        else if (e.isFood) {
                            if (h.pellets)
                                Ve.add(this.container, e)
                        } else if (e.isEject)
                            Ze.add(this.container, e);
                        else if (e.isPlayerCell)
                            ut.add(this.container, e)
                    }
                }
            }
            const pt = new ft;
            class mt {
                constructor() {
                    this.container = new De.W2;
                    this.sprite = De.jy.from(J());
                    this.filter = new De.u8.ColorMatrixFilter;
                    this.hue = 0
                }
                initialize() {
                    this.sprite.anchor.x = .5;
                    this.sprite.anchor.y = .5;
                    this.container.filters = [this.filter]
                }
                run() {
                    if (h.mapBorders && h.useRainbow) {
                        if (this.container.children.length !== 1) {
                            this.container.addChild(this.sprite)
                        }
                    } else {
                        if (this.container.children.length !== 0) {
                            this.container.removeChildren()
                        }
                        return
                    }
                    const e = l.right - l.left;
                    const t = l.bottom - l.top;
                    const n = e / 720;
                    const s = 10;
                    const i = (10 + s / 2) * n;
                    this.sprite.x = l.left + e / 2;
                    this.sprite.y = l.top + t / 2;
                    this.sprite.width = e + i * 2;
                    this.sprite.height = t + i * 2;
                    if (this.hue > 360) {
                        this.hue = 0
                    }
                    this.filter.hue(this.hue++)
                }
            }
            const gt = new mt;
            class wt {
                static get isSupported() {
                    return De.P6.isWebGLSupported()
                }
                initialize() {
                    if (this.initialized)
                        return;
                    this.initialized = true;
                    this.canvas = document.getElementById("screen");
                    this.options = {
                        view: this.canvas,
                        antialias: true,
                        resolution: 1,
                        transparent: true,
                        preserveDrawingBuffer: true
                    };
                    this.application = new De.Mx(this.options);
                    this.renderer = this.application.renderer;
                    this.stage = new De.W2;
                    Be.initialize();
                    this.stage.addChild(Be.container);
                    ze.initialize();
                    this.stage.addChild(ze.container);
                    gt.initialize();
                    this.stage.addChild(gt.container);
                    Fe.initialize();
                    this.stage.addChild(Fe.glowContainer);
                    this.stage.addChild(Fe.container);
                    Ne.initialize();
                    this.stage.addChild(Ne.container);
                    pt.initialize();
                    this.stage.addChild(pt.container);
                    this.setScreenSize();
                    window.addEventListener("resize", ( () => {
                        this.setScreenSize()
                    }
                    ), {
                        passive: true
                    })
                }
                setScreenSize() {
                    this.initialize();
                    const e = h.graphicsQuality;
                    const t = window.innerWidth * e | 0;
                    const n = window.innerHeight * e | 0;
                    this.renderer.resize(t, n)
                }
                run() {
                    if (!this.canvas)
                        return;
                    this.setCamera();
                    Be.run();
                    ze.run();
                    gt.run();
                    Fe.run();
                    Ne.run();
                    pt.run();
                    this.renderer.render(this.stage)
                }
                setCamera() {
                    const e = E.zoom * h.graphicsQuality;
                    const t = this.canvas.width / 2 - E.x * e;
                    const n = this.canvas.height / 2 - E.y * e;
                    this.stage.setTransform(t, n, e, e)
                }
            }
            const yt = wt;
            const vt = yt.isSupported;
            const Ct = localStorage.getItem("Senpaio:WebGL") === "OK";
            const xt = Ct && vt ? yt : Re;
            if (Ct && !vt) {
                delete h.useWebGL;
                localStorage.setItem("Senpaio:settings", JSON.stringify(h));
                localStorage.removeItem("Senpa:WebGL");
                alert("WebGL not supported, falling back to canvas rendering")
            }
            const kt = new xt;
            class bt {
                constructor() {
                    this.specMode = 1;
                    this.isMacroFeeding = false;
                    this.isChatInPrivateTeamMode = false;
                    this.lastChatType = "chatroom"
                }
                toggleSpectateMode() {
                    this.specMode = !(this.specMode - 1) + 1
                }
                replay() {
                    if (!Sn.isReplay) {
                        if (H.save()) {
                            St.showNotification({
                                type: "normal",
                                nick: "CLIENT",
                                message: "Replay saved!",
                                type: 1,
                                room: Number(this.isChatInPrivateTeamMode),
                                time: Date.now()
                            })
                        }
                    }
                }
                feed() {
                    An.feed(R.activeTab, true)
                }
                macroFeed(e) {
                    this.isMacroFeeding = e;
                    An.feed(R.activeTab, false, e ? 1 : 0)
                }
                split() {
                    An.split(R.activeTab, 1)
                }
                doubleSplit() {
                    An.split(R.activeTab, 2)
                }
                tripleSplit() {
                    An.split(R.activeTab, 3)
                }
                split16() {
                    An.split(R.activeTab, 4)
                }
                split32() {
                    An.split(R.activeTab, 5)
                }
                split64() {
                    An.split(R.activeTab, 6)
                }
                togglePlayer() {
                    if (Sn.isReplay) {
                        return
                    }
                    const e = this.isMacroFeeding;
                    if (e)
                        this.macroFeed(false);
                    const t = Wt.myPlayerIDs.length;
                    const n = (R.activeTab + 1) % t;
                    R.activeTab = n;
                    if (Wt.myCells[n].size < 1)
                        An.spawn(n);
                    if (e)
                        this.macroFeed(true)
                }
                sendMouse() {
                    if (R.isStopped)
                        return;
                    const e = E.zoom * h.graphicsQuality;
                    const t = E.x + (le.mouse.x * h.graphicsQuality - (kt.canvas.width >> 1)) / e;
                    const n = E.y + (le.mouse.y * h.graphicsQuality - (kt.canvas.height >> 1)) / e;
                    An.cursor(t, n, R.activeTab)
                }
                command(e) {
                    An.chat(2, e)
                }
                zoom(e) {
                    E.targetZoom = e
                }
                toggleNick() {
                    const e = R.isAlive ? h.ownCellNick : h.cellNick;
                    h.ownCellNick = !e;
                    h.cellNick = !e
                }
                toggleMass() {
                    const e = R.isAlive ? h.ownCellMass : h.cellMass;
                    h.ownCellMass = !e;
                    h.cellMass = !e
                }
                toggleSectors() {
                    h.mapSectors = !h.mapSectors
                }
                toggleHUDs() {
                    h.hideHUD = !h.hideHUD;
                    V.showHUD(!h.hideHUD)
                }
                toggleSkin() {
                    h.cellSkin = !h.cellSkin
                }
                toggleEnemySkin() {
                    h.enemyCellSkin = !h.enemyCellSkin
                }
                toggleChatMessages() {
                    if (h.chatType === "off") {
                        h.chatType = this.lastChatType
                    } else {
                        this.lastChatType = h.chatType;
                        h.chatType = "off"
                    }
                }
                toggleChatMode() {
                    St.dispatch(y.Chat_ToggleMode)
                }
                stop() {
                    if (R.isStopped) {
                        R.isStopped = false
                    } else {
                        R.isStopped = true
                    }
                }
            }
            const It = new bt;
            class Tt {
                constructor() {
                    this.listeners = {};
                    this.register(y.Player_Died, ( () => {
                        V.isOpen = true
                    }
                    ));
                    this.register(y.Request_Connect, (e => {
                        C.log("connecting to " + e);
                        Sn.connect(e)
                    }
                    ));
                    this.register(y.Assign_PlayerInfo, ( ({nick: e, tag: t, code: n, skin1: s, skin2: i}) => {
                        R.nick = e;
                        R.teamTag = t;
                        R.teamCode = n;
                        R.skin1 = s;
                        R.skin2 = i
                    }
                    ));
                    this.register(y.Request_Play, ( () => {
                        V.onPlay();
                        if (R.isAlive)
                            return;
                        An.spawn()
                    }
                    ));
                    this.register(y.Request_Spectate, ( () => {
                        V.onSpectate();
                        if (!R.isAlive)
                            R.isSpectating = true
                    }
                    ));
                    this.register(y.Request_Continue, ( () => {
                        V.onContinue()
                    }
                    ));
                    this.register(y.Chat_Mode_Toggled, (e => {
                        It.isChatInPrivateTeamMode = e === 1
                    }
                    ));
                    this.register(y.ClanWars_RequestUpdate, ( () => {
                        k.update()
                    }
                    ));
                    this.register(y.ClanWars_UpdatePlayer, ( (e, t) => {
                        k.updatePlayer(e, t)
                    }
                    ));
                    this.register(y.Send_Chat, (e => {
                        An.chat(1, e)
                    }
                    ));
                    this.register(y.Send_Nick, (e => {
                        R.nick = e;
                        An.nick()
                    }
                    ));
                    this.register(y.Send_Tag, (e => {
                        R.teamTag = e;
                        An.tag();
                        this.dispatch(y.Player_Tag, R.teamTag)
                    }
                    ));
                    window.dispatchEvent(new Event("dispatcher-loaded"))
                }
                showNotification(e) {
                    this.dispatch(y.Notify_ShowNotification, e)
                }
                dispatch(e, ...t) {
                    if (this.listeners[e]) {
                        this.listeners[e];
                        this.listeners[e].forEach((e => {
                            e(...t)
                        }
                        ))
                    }
                }
                register(e, t) {
                    if (this.listeners[e] === undefined)
                        this.listeners[e] = [];
                    this.listeners[e].push(t);
                    return this.listeners[e].length - 1
                }
                reset(e, t=null) {
                    if (this.listeners[e]) {
                        if (t !== null) {
                            this.listeners[e].splice(t, 1)
                        } else {
                            this.listeners[e] = []
                        }
                    }
                }
            }
            self.Dispatcher = new Tt;
            const St = self.Dispatcher;
            class Ut {
                constructor() {
                    this.leaderboardTitle = "SENPA.IO";
                    this.trainingMode = true;
                    this.trainingModeTag = "TR";
                    this.defaultCellName = "Unnamed cell";
                    this.adDelayDeathPenalty = 0;
                    this.adDelayGameStart = 0;
                    this.adDelayMainPanelOpened = 0;
                    this.adRefreshCooldown = 0
                }
                onChange() {
                    St.dispatch(y.LeaderBoard_TitleChanged, this.leaderboardTitle)
                }
            }
            const Pt = new Ut;
            class Mt {
                constructor(e=-1, t=0, n=0, s=0, i=0) {
                    this.id = e;
                    this.parentPlayerID = -1;
                    this.parentPlayer = new p;
                    this.type = i;
                    this.isOwn = -1;
                    this.startX = t;
                    this.x = t;
                    this.endX = t;
                    this.startY = n;
                    this.y = n;
                    this.endY = n;
                    this.startRadius = s;
                    this.radius = s;
                    this.endRadius = s;
                    this._color = g.randomColor();
                    this.updateTime = performance.now();
                    this.removed = false;
                    this.dt = 0
                }
                animate() {
                    const e = performance.now();
                    let t = (e - this.updateTime) / h.cellAnimation;
                    t = t > 1 ? 1 : t < 0 ? 0 : t;
                    this.x = this.startX + (this.endX - this.startX) * t;
                    this.y = this.startY + (this.endY - this.startY) * t;
                    this.radius = this.startRadius + (this.endRadius - this.startRadius) * t;
                    this.dt = t
                }
                update(e, t, n) {
                    this.animate();
                    this.startX = this.x;
                    this.startY = this.y;
                    this.startRadius = this.radius;
                    this.endX = e;
                    this.endY = t;
                    this.endRadius = n;
                    this.updateTime = performance.now()
                }
                set color(e) {
                    this._color = e
                }
                get color() {
                    return this._color
                }
                get isTR() {
                    return Pt.trainingMode && this.parentPlayer.parentClient.tag === Pt.trainingModeTag
                }
                get nick() {
                    return this.parentPlayer.parentClient.nick
                }
                get skin() {
                    return this.parentPlayer.skinURL
                }
                get mass() {
                    return this.endRadius * this.endRadius / 100 | 0
                }
                get shortMass() {
                    const e = ~~this.mass;
                    if (e < 1e3)
                        return e;
                    const t = (0 | e / 100) / 10;
                    return `${t}k`
                }
                get isBot() {
                    return this.parentPlayer.parentClient.isBot
                }
                get isPlayerCell() {
                    return this.type === 0
                }
                get isVirus() {
                    return this.type === 1
                }
                get isEject() {
                    return this.type === 2
                }
                get isFood() {
                    return this.type === 3
                }
                get clientLoaded() {
                    return this.parentPlayer.parentClientID !== -1
                }
            }
            const Et = Mt;
            var At = n(237);
            var Rt = n.n(At);
            class Dt {
                constructor(e, t, n, s) {
                    this.id = e;
                    this.startX = t;
                    this.x = t;
                    this.endX = t;
                    this.startY = n;
                    this.y = n;
                    this.endY = n;
                    this.startRadius = s;
                    this.radius = s;
                    this.endRadius = s;
                    this.updateTime = performance.now();
                    this.dt = 0
                }
                animate() {
                    const e = performance.now();
                    let t = (e - this.updateTime) / 3e3;
                    t = t > 1 ? 1 : t < 0 ? 0 : t;
                    this.x = this.startX + (this.endX - this.startX) * t;
                    this.y = this.startY + (this.endY - this.startY) * t;
                    this.radius = this.startRadius + (this.endRadius - this.startRadius) * t;
                    this.dt = t
                }
                update(e, t, n) {
                    this.animate();
                    this.startX = this.x;
                    this.startY = this.y;
                    this.startRadius = this.radius;
                    this.endX = e;
                    this.endY = t;
                    this.endRadius = n;
                    this.updateTime = performance.now()
                }
            }
            const _t = Dt;
            class Ft {
                constructor() {
                    this.clientsList = new Map;
                    this.playersList = new Map;
                    this.myClientID = -1;
                    this.myPlayerIDs = [];
                    this.myCells = [];
                    this.cells = new Map;
                    this.minimapPlayers = new Map;
                    this.sortedCells = [];
                    this.lastTeamlistDispatch = 0;
                    this.teamlistDispatchInterval = 1e3
                }
                getNewMinimapPlayer(e, t, n, s) {
                    const i = new _t(e,t,n,s);
                    this.minimapPlayers.set(e, i);
                    return i
                }
                updateMinimapPlayer(e, t, n, s) {
                    const i = this.minimapPlayers.get(e) || this.getNewMinimapPlayer(e, t, n, s);
                    i.update(t, n, s)
                }
                removeMinimapPlayer(e) {
                    this.minimapPlayers.delete(e)
                }
                newCell(e, t, n, s, i) {
                    if (Sn.isReplay && this.cells.has(e)) {
                        return this.cells.get(e)
                    }
                    const r = new Et(e,t,n,s,i);
                    this.cells.set(e, r);
                    return r
                }
                getCell(e) {
                    return this.cells.get(e)
                }
                eatCell(e, t) {
                    const n = this.cells.get(e);
                    const s = this.cells.get(t);
                    if (!s)
                        return;
                    const i = !h.eatAnimation;
                    if (i) {
                        s.removed = true;
                        if (s.renderer)
                            s.renderer.onRemove();
                        this.cells.delete(t);
                        if (s.isOwn >= 0) {
                            this.onOwnCellDeath(s);
                            const e = R.myCellCount;
                            if (e === 0)
                                R.onDeath()
                        }
                        return
                    }
                    if (!n)
                        return void this.removeCell(t);
                    s.update(n.x, n.y, s.radius);
                    s.removed = true;
                    this.cells.delete(t);
                    if (s.isOwn >= 0) {
                        this.onOwnCellDeath(s);
                        const e = R.myCellCount;
                        if (e === 0)
                            R.onDeath()
                    }
                    this.cells.set(`${t}:removed`, s)
                }
                removeCell(e) {
                    const t = this.cells.get(e);
                    if (!t)
                        return;
                    t.removed = true;
                    if (t.renderer) {
                        t.renderer.onRemove()
                    }
                    this.cells.delete(e);
                    if (t.isOwn >= 0) {
                        this.onOwnCellDeath(t);
                        const e = R.myCellCount;
                        if (e === 0)
                            R.onDeath()
                    }
                }
                onOwnCellDeath(e) {
                    const t = this.myCells[e.isOwn];
                    t.delete(e.id);
                    if (e.isOwn === R.activeTab && t.size === 0 && h.autoSwitchCells) {
                        let t = (e.isOwn + 1) % this.myPlayerIDs.length;
                        let n = 0;
                        while (t !== e.isOwn || n === this.myPlayerIDs.length) {
                            if (this.myCells[t].size > 0)
                                break;
                            t = (t + 1) % this.myPlayerIDs.length;
                            n++
                        }
                        R.activeTab = t
                    }
                }
                ownCellCheck(e) {
                    const t = this.myPlayerIDs.indexOf(e.parentPlayerID);
                    if (t < 0)
                        return;
                    e.isOwn = t;
                    const n = R.myCellCount;
                    this.myCells[t].set(e.id, e);
                    if (n === 0)
                        R.onSpawn()
                }
                getLocation(e, t) {
                    const n = 5;
                    const s = 5;
                    const i = l.right - l.left;
                    let r = t / (i / s) | 0;
                    let a = e / (i / n) | 0;
                    r = r < 0 ? 0 : r >= s ? s - 1 : r;
                    a = a < 0 ? 0 : a >= n ? n - 1 : a;
                    return String.fromCharCode(r + 65) + (a + 1)
                }
                updateTeamlist() {
                    const e = [];
                    const t = [];
                    for (const n of this.minimapPlayers.keys()) {
                        const s = this.playersList.get(n) || new p;
                        const i = s.parentClient.isBot;
                        if (i || t.indexOf(s.parentClient.id) !== -1) {
                            continue
                        }
                        t.push(s.parentClient.id);
                        let r = 0;
                        let a = 0;
                        let o = 0;
                        let l = 0;
                        for (const e of this.minimapPlayers.values()) {
                            if (this.playersList.has(e.id) && this.playersList.get(e.id).parentClient.id === s.parentClient.id) {
                                r++;
                                a += e.x;
                                o += e.y;
                                l += e.radius * e.radius / 100 | 0
                            }
                        }
                        a /= r;
                        o /= r;
                        if (e.length < 5) {
                            e.push({
                                nick: s.parentClient ? s.parentClient.nick : "",
                                location: this.getLocation(a, o),
                                mass: l > 999 ? `${(l / 100 | 0) / 10}k` : l,
                                massInt: l
                            })
                        }
                    }
                    e.sort(( (e, t) => t.massInt - e.massInt));
                    Dispatcher.dispatch(y.Teamlist_Update, e)
                }
                update() {
                    this.sortedCells = [];
                    const e = performance.now();
                    if (e - this.lastTeamlistDispatch >= this.teamlistDispatchInterval) {
                        this.updateTeamlist();
                        this.lastTeamlistDispatch = e
                    }
                    for (const e of this.playersList.values()) {
                        if (e.parentClientID !== e.parentClient.id) {
                            const t = this.clientsList.get(e.parentClientID);
                            if (t !== undefined)
                                e.parentClient = t
                        }
                    }
                    for (const [e,t] of this.cells) {
                        if (t.parentPlayerID !== t.parentPlayer.id) {
                            const e = this.playersList.get(t.parentPlayerID);
                            if (e !== undefined)
                                t.parentPlayer = e
                        }
                        if (t.removed && t.dt === 1) {
                            this.cells.delete(e);
                            if (t.renderer) {
                                t.renderer.onRemove()
                            }
                            continue
                        }
                        t.animate();
                        if (t.id === 4919 + 105) {
                            Rt()._alloc(8, t.lol.render);
                            t.lol.render = null;
                            t.lol = null;
                            if (t.renderer) {
                                t.renderer.onRemove()
                            }
                            this.cells.delete(t.id)
                        } else {
                            this.sortedCells.push(t)
                        }
                        this.sortedCells.sort(this.sort)
                    }
                }
                sort(e, t) {
                    return Math.round(e.radius - t.radius)
                }
            }
            const Wt = new Ft;
            class zt {
                handle(e) {
                    const t = e.readUInt32();
                    l.update(0, 0, t, t);
                    Wt.myClientID = e.readUInt16();
                    Wt.myPlayerIDs = [];
                    Wt.myCells = [];
                    const n = e.readUInt8();
                    for (let t = 0; t < n; t++) {
                        const t = e.readUInt16();
                        const n = new Map;
                        Wt.myPlayerIDs.push(t);
                        Wt.myCells.push(n)
                    }
                    An.playerInfo()
                }
            }
            const Ot = new zt;
            class Bt {
                constructor() {
                    this.lastDispatch = 0;
                    this.dispatchInterval = 1e3
                }
                handle(e) {
                    const t = [];
                    const n = e.readUInt8();
                    for (let s = 0; s < n; s++) {
                        const n = e.readUInt16();
                        const s = Wt.clientsList.get(n) || new u;
                        const i = s.nick || Pt.defaultCellName;
                        const r = s.teamColor;
                        const a = e.readUInt32();
                        t.push({
                            nick: i,
                            mass: a,
                            color: r
                        })
                    }
                    const s = performance.now();
                    if (s - this.lastDispatch >= this.dispatchInterval) {
                        St.dispatch(y.LeaderBoard_Update, t);
                        this.lastDispatch = s
                    }
                }
            }
            const Lt = new Bt;
            class Gt {
                handle(e) {
                    const t = e.readUInt8();
                    for (let n = 0; n < t; n++) {
                        const t = e.readUInt16();
                        const n = e.readInt32();
                        const s = e.readInt32();
                        const i = e.readUInt16();
                        Wt.updateMinimapPlayer(t, n, s, i)
                    }
                }
            }
            const Nt = new Gt;
            class Ht {
                handle(e) {
                    E.spectatePoint.x = e.readInt32();
                    E.spectatePoint.y = e.readInt32()
                }
            }
            const jt = new Ht;
            class $t {
                handle() {
                    Sn.latency = performance.now() - Sn.pingTime | 0
                }
            }
            const Vt = new $t;
            class qt {
                handle(e) {
                    const t = e.readUInt16();
                    const n = Wt.clientsList.get(t) || new u;
                    const s = e.readUInt8();
                    const i = e.readUInt8();
                    const r = e.readString16();
                    const a = n.nick || Pt.defaultCellName;
                    const o = n.teamColor;
                    const l = n.hasReservedName;
                    St.showNotification({
                        nick: a,
                        message: r,
                        type: s,
                        room: i,
                        tag: "",
                        color: o,
                        hasReservedName: l,
                        time: Date.now()
                    })
                }
            }
            const Zt = new qt;
            class Kt {
                handle(e) {
                    const t = e.readUInt8();
                    const n = e.readString16();
                    switch (t) {
                    case 0:
                        St.dispatch(y.Server_Message_Update, n);
                        break;
                    case 1:
                        St.showNotification({
                            type: "normal",
                            nick: "SERVER",
                            message: n,
                            type: 1,
                            room: Number(It.isChatInPrivateTeamMode),
                            time: Date.now()
                        });
                        break;
                    case 2:
                        {
                            const e = n.split("|");
                            St.showNotification({
                                type: "normal",
                                nick: "SERVER",
                                message: e[1],
                                type: 1,
                                room: Number(It.isChatInPrivateTeamMode),
                                time: Date.now()
                            });
                            St.dispatch(y.Update_Nickname, e[0]);
                            break
                        }
                    }
                }
            }
            const Yt = new Kt;
            class Xt {
                handle(e) {
                    const t = e.readUInt8();
                    const n = e.readUInt8();
                    const s = e.readUInt8();
                    const i = e.readUInt8();
                    const r = n - t;
                    const a = `FPS: ${e.readUInt8()}`;
                    const o = `Average load: ${e.readUInt8()}%`;
                    const l = `Worst load: ${e.readUInt8()}%`;
                    const c = `Memory: ${e.readUInt16()}MB`;
                    St.dispatch(y.ServerStats_Update, {
                        fps: a,
                        loadAverage: o,
                        loadWorst: l,
                        memory: c
                    });
                    St.dispatch(y.RoomStats_Update, {
                        playerCount: n,
                        maxPlayerCount: s,
                        alivePlayerCount: t,
                        specPlayerCount: r,
                        botCount: i
                    })
                }
            }
            const Qt = new Xt;
            class Jt {
                handle(e) {
                    Pt.leaderboardTitle = e.readString16();
                    Pt.trainingMode = e.readUInt8() === 1;
                    Pt.trainingModeTag = e.readString16();
                    Pt.onChange()
                }
            }
            const en = new Jt;
            class tn {
                constructor() {
                    this.authToken = null;
                    St.register(y.Auth_Token, (e => {
                        this.authToken = e;
                        An.auth()
                    }
                    ))
                }
                addExp(e) {
                    St.dispatch(y.Reload_Account)
                }
            }
            const nn = new tn;
            class sn {
                handle(e) {
                    const t = e.readUInt32();
                    nn.addExp(t)
                }
            }
            const rn = new sn;
            class an {
                handle(e) {
                    const t = e.readUInt32();
                    l.update(0, 0, t, t)
                }
            }
            const on = new an;
            class ln {
                constructor() {
                    this.refreshInterval = 1e3 * 2
                }
                fetchCustomServers() {
                    clearTimeout(this.refetchTimeout);
                    fetch(`https://${Sn.url}?jwt=` + nn.authToken).then((e => e.json())).then((e => {
                        St.dispatch(y.Custom_Games_List, e)
                    }
                    )).catch((e => console.log("Failed to fetch server list ", e)));
                    this.refetchTimeout = setTimeout(( () => {
                        this.fetchCustomServers()
                    }
                    ), this.refreshInterval)
                }
            }
            const cn = new ln;
            class hn {
                handle(e) {
                    let t;
                    const n = e.readUInt8();
                    const s = Array(n + 1);
                    s[0] = 0;
                    for (t = 0; t < n; t++)
                        s[t + 1] = e.readUInt16();
                    const i = e.readUInt8();
                    const r = Array(i + 1);
                    r[0] = 0;
                    for (t = 0; t < i; t++)
                        r[t + 1] = e.readUInt16();
                    const a = e.readUInt8();
                    const o = Array(a + 1);
                    o[0] = 0;
                    for (t = 0; t < a; t++)
                        o[t + 1] = e.readUInt16();
                    const l = e.readUInt8();
                    const c = Array(l + 1);
                    c[0] = 0;
                    for (t = 0; t < l; t++)
                        c[t + 1] = e.readUInt16();
                    const h = e.readUInt8();
                    const d = e.readUInt8();
                    const u = Array(d);
                    const f = new Map;
                    for (t = 0; t < d; t++) {
                        const n = e.readString8();
                        u[t] = n;
                        const s = [];
                        f.set(n, s);
                        for (let t = 0; t < h; t++) {
                            const n = e.readUInt16();
                            s[t] = n
                        }
                    }
                    const p = e.readUInt16();
                    St.dispatch(y.Custom_Games, {
                        maxSlots: p,
                        configs: f,
                        mapSizes: s,
                        virusCount: r,
                        botCount: c,
                        startMass: o,
                        modes: u,
                        maxSlots: p
                    });
                    cn.fetchCustomServers()
                }
            }
            const dn = new hn;
            class un {
                handle(e) {
                    const t = e.readUInt16();
                    Sn.customGameLobby = Sn.url;
                    Sn.onCustomGame = true;
                    Sn.connect(Sn.host + ":" + t, Sn.lastPassword);
                    Sn.lastPassword = ""
                }
            }
            const fn = new un;
            class pn {
                handle(e) {
                    const t = e.readUInt8();
                    const n = e.readUInt8();
                    if (n) {
                        const e = k.get(Wt.myClientID);
                        k.gameStarted = true;
                        if (!e || e.team == 0) {
                            V.onSpectate()
                        } else if (e && e.team !== 0) {
                            V.onPlay()
                        }
                    } else if (t) {
                        k.isHost = true;
                        k.show()
                    } else {
                        if (!k.isHost)
                            k.show();
                        const t = e.readUInt8();
                        for (let n = 0; n < t; n++) {
                            const t = e.readUInt32();
                            const n = e.readUInt8();
                            k.updatePlayer(t, n)
                        }
                    }
                    k.isClanWarsGame = true;
                    k.update()
                }
            }
            const mn = new pn;
            class gn {
                async handle(e) {
                    An.handshakeDone = true;
                    An.auth()
                }
            }
            const wn = new gn;
            class yn {
                handle(e) {
                    let t = e.readUInt32();
                    t /= 1e3;
                    const n = Math.floor(t / 3600).toString().padStart(2, "0");
                    t %= 3600;
                    const s = Math.floor(t / 60).toString().padStart(2, "0");
                    const i = Math.floor(t % 60).toString().padStart(2, "0");
                    St.dispatch(y.Server_Time, `${n}:${s}:${i}`)
                }
            }
            const vn = new yn;
            class Cn {
                handle(e) {
                    const t = e.readUInt8();
                    const n = e.readUInt8();
                    St.dispatch(y.Request_Captcha, {
                        loggedUsersOnly: t,
                        version: n
                    })
                }
            }
            const xn = new Cn;
            class kn {
                constructor() {
                    this.handlers = new Map([[0, Ot.handle.bind(Ot)], [1, on.handle], [2, dn.handle], [3, fn.handle], [4, mn.handle], [5, vn.handle], [7, xn.handle.bind(xn)], [8, wn.handle.bind(wn)], [10, L.handle.bind(L)], [11, O.handle.bind(O)], [20, W.handle.bind(W)], [21, Lt.handle.bind(Lt)], [22, Nt.handle.bind(Nt)], [23, jt.handle.bind(jt)], [30, Vt.handle.bind(Vt)], [40, Zt.handle.bind(Zt)], [41, Yt.handle.bind(Yt)], [42, Qt.handle.bind(Qt)], [43, en.handle.bind(en)], [51, rn.handle.bind(rn)]])
                }
                parse(e) {
                    const t = new a(e);
                    const n = t.readUInt8();
                    const s = this.handlers.get(n);
                    if (typeof s === "function") {
                        if (!Sn.isReplay) {
                            H.add(n, t.view.buffer)
                        }
                        s(t)
                    }
                }
            }
            const bn = new kn;
            class In {
                constructor() {
                    this.ws = null;
                    this.url = "";
                    this.host = "";
                    this.lastPassword = "";
                    this.customGameLobby = "";
                    this.pingTime = 0;
                    this.latency = 0;
                    this.reconnectWait = 1e3;
                    this.passwordProtected = false;
                    this.onCustomGame = false;
                    this.isReplay = false
                }
                send(e) {
                    this.ws.send(e)
                }
                connect(e, t="") {
                    if (!Rt().create) {
                        return
                    }
                    if (t)
                        this.passwordProtected = true;
                    this.cleanUp();
                    this.isReplay = false;
                    self.game_server = e;
                    this.url = e;
                    this.host = e.replace(/:\d+/, "");
                    this.lastPassword = t;
                    const n = e.includes("localhost") ? "ws" : "wss";
                    this.ws = Rt().create(`${n}://${e}?password=${t}`, this.onOpen.bind(this), this.onClose.bind(this), this.onMessage.bind(this), this.onError.bind(this))
                }
                cleanUp() {
                    if (this.ws) {
                        this.ws.onopen = null;
                        this.ws.onmessage = null;
                        this.ws.onclose = null;
                        this.ws.onerror = null;
                        this.ws.close();
                        this.ws = null
                    }
                    if (!this.isReplay) {
                        H.clear()
                    }
                    Wt.clientsList.clear();
                    Wt.playersList.clear();
                    Wt.minimapPlayers.clear();
                    Wt.myClientID = -1;
                    Wt.myPlayerIDs = [];
                    Wt.myCells = [];
                    Wt.cells.forEach((e => {
                        if (e.renderer) {
                            e.renderer.onRemove()
                        }
                    }
                    ));
                    Wt.cells.clear();
                    Wt.sortedCells = [];
                    R.isSpectating = false;
                    St.dispatch(y.Socket_Cleanup);
                    St.dispatch(y.Clear_Notifications);
                    St.dispatch(y.Server_Message_Update, "")
                }
                onOpen() {
                    this.passwordProtected = false;
                    this.reconnectWait = 1e3;
                    An.initialize();
                    C.info(`[Game server] Connected to ${this.url}`);
                    St.dispatch(y.Custom_Games, null)
                }
                onMessage(e) {
                    bn.parse(e)
                }
                onClose() {
                    if (this.passwordProtected) {
                        this.passwordProtected = false;
                        window.alert("Incorrect password!")
                    }
                    const e = this.onCustomGame;
                    if (!this.isReplay) {
                        C.info(`[Game server] Connection to ${this.url} closed. Trying to reconnect...`);
                        setTimeout(( () => {
                            if (this.ws.readyState == WebSocket.OPEN)
                                return;
                            this.connect(e ? this.customGameLobby : this.url);
                            this.customGameLobby = null;
                            this.reconnectWait *= 2
                        }
                        ), this.reconnectWait);
                        V.show()
                    }
                }
                onError() {
                    C.warn(`[Game server] connection to ${this.url} failed.`)
                }
                get connected() {
                    return this.ws && this.ws.readyState === this.ws.OPEN
                }
            }
            const Tn = new In;
            window.Socket = Tn;
            const Sn = Tn;
            class Un {
                constructor(e=128) {
                    const t = new ArrayBuffer(e);
                    this.view = new DataView(t);
                    this.index = 0;
                    this.maxIndex = e
                }
                writeInt8(e) {
                    this.view.setInt8(this.index, e, true);
                    this.index += 1
                }
                writeUInt8(e) {
                    this.view.setUint8(this.index, e, true);
                    this.index += 1
                }
                writeInt16(e) {
                    this.view.setInt16(this.index, e, true);
                    this.index += 2
                }
                writeUInt16(e) {
                    this.view.setUint16(this.index, e, true);
                    this.index += 2
                }
                writeInt32(e) {
                    this.view.setInt32(this.index, e, true);
                    this.index += 4
                }
                writeUInt32(e) {
                    this.view.setUint32(this.index, e, true);
                    this.index += 4
                }
                writeFloat(e) {
                    this.view.setFloat32(this.index, e, true);
                    this.index += 4
                }
                writeDouble(e) {
                    this.view.setFloat64(this.index, e, true);
                    this.index += 8
                }
                writeString8(e) {
                    this.writeUInt8(e.length);
                    for (let t = 0; t < e.length; t++) {
                        const n = e.charCodeAt(t);
                        this.writeUInt8(n)
                    }
                }
                writeLongString8(e) {
                    this.writeUInt16(e.length);
                    for (let t = 0; t < e.length; t++) {
                        const n = e.charCodeAt(t);
                        this.writeUInt8(n)
                    }
                }
                writeString16(e) {
                    this.writeUInt8(e.length);
                    for (let t = 0; t < e.length; t++) {
                        const n = e.charCodeAt(t);
                        this.writeUInt16(n)
                    }
                }
                writeLongString16(e) {
                    this.writeUInt16(e.length);
                    for (let t = 0; t < e.length; t++) {
                        const n = e.charCodeAt(t);
                        this.writeUInt16(n)
                    }
                }
                encodeString(e) {
                    return encodeURI(e)
                }
                reset() {
                    this.index = 0
                }
                get buffer() {
                    const e = this.view.buffer;
                    return this.index === this.maxIndex ? e : e.slice(0, this.index)
                }
            }
            const Pn = Un;
            class Mn {
                constructor() {
                    this.handshakeDone = false
                }
                async initialize() {
                    this.handshakeDone = false;
                    Sn.scrambling = false;
                    nn.onTokenChange = () => {
                        this.auth()
                    }
                }
                auth() {
                    if (!Sn.connected || !this.handshakeDone)
                        return;
                    const e = nn.authToken + "";
                    const t = new Pn(1 + 2 * (e.length + 1));
                    t.writeUInt8(13);
                    t.writeString16(e);
                    Sn.send(t.buffer)
                }
                auth2(e) {
                    if (!Sn.connected || !e)
                        return;
                    const t = new Pn(2 + e.length);
                    t.writeUInt8(150);
                    t.writeString8(e);
                    Sn.send(t.buffer)
                }
                playerInfo() {
                    this.nick();
                    this.tag();
                    this.skin(0);
                    this.skin(1)
                }
                spawn(e) {
                    if (!Sn.connected || !this.handshakeDone)
                        return;
                    if (e === undefined)
                        e = R.activeTab;
                    this.playerInfo();
                    const t = new Pn(2);
                    t.writeUInt8(0);
                    t.writeUInt8(e);
                    Sn.send(t.buffer)
                }
                captcha(e, t) {
                    const n = new Pn(2 ** 11);
                    n.writeUInt8(14);
                    n.writeUInt8(e);
                    n.writeLongString8(t);
                    Sn.send(n.buffer)
                }
                nick() {
                    if (!Sn.connected || !this.handshakeDone || R.isAlive)
                        return;
                    const e = nn.authToken != null;
                    let t = 1 + 2 * (R.nick.length + 1);
                    if (e)
                        t += 2 * (nn.authToken.length + 1);
                    const n = new Pn(t);
                    n.writeUInt8(10);
                    n.writeString16(R.nick);
                    if (e) {
                        n.writeString16(nn.authToken)
                    }
                    Sn.send(n.buffer)
                }
                tag() {
                    if (!Sn.connected || !this.handshakeDone || R.isAlive)
                        return;
                    const e = new Pn(1 + 2 * (R.teamTag.length + 1));
                    e.writeUInt8(11);
                    e.writeString16(R.teamTag);
                    Sn.send(e.buffer)
                }
                cursor(e, t, n) {
                    if (!Sn.connected || !this.handshakeDone)
                        return;
                    if (!R.isAlive && !R.isSpectating)
                        return;
                    if (n === undefined)
                        n = R.activeTab;
                    const s = !R.isAlive;
                    const i = new Pn(s ? 10 : 11);
                    i.writeUInt8(20);
                    i.writeUInt8(s ? It.specMode : 0);
                    if (!s)
                        i.writeUInt8(n);
                    i.writeInt32(e);
                    i.writeInt32(t);
                    Sn.send(i.buffer)
                }
                customGameInfo(e, t, n, s, i, r, a, o, l, c) {
                    if (!Sn.connected || !this.handshakeDone)
                        return;
                    const h = new Pn(8 + 2 * (t.length + 1) + 2 * (e.length + 1));
                    h.writeUInt8(2);
                    h.writeUInt8(n | 0);
                    h.writeString16(e);
                    if (!n) {
                        h.writeString16(t);
                        h.writeUInt8(s ? 1 : 0);
                        h.writeUInt8(i);
                        h.writeUInt8(r);
                        h.writeUInt8(a);
                        h.writeUInt8(o);
                        h.writeUInt8(l);
                        h.writeUInt8(c)
                    }
                    Sn.send(h.buffer)
                }
                clanWarsInfo(e) {
                    const t = new Pn(3 + 5 * k.data.size);
                    t.writeUInt8(4);
                    t.writeUInt8(k.data.size);
                    t.writeUInt8(e);
                    k.data.forEach(( (e, n) => {
                        t.writeUInt32(n);
                        t.writeUInt8(e.team | 0)
                    }
                    ));
                    Sn.send(t.buffer)
                }
                skin(e) {
                    if (!Sn.connected || !this.handshakeDone || R.isAlive)
                        return;
                    if (e === undefined)
                        e = R.activeTab;
                    if (e >= Wt.myPlayerIDs.length)
                        return;
                    const t = e === 0 ? R.skin1 : e === 1 ? R.skin2 : "";
                    const n = nn.authToken != null;
                    let s = 2 + t.length + 1;
                    if (n)
                        s += 2 * (nn.authToken.length + 1);
                    const i = new Pn(s);
                    i.writeUInt8(21);
                    i.writeUInt8(e);
                    i.writeString8(t);
                    if (n)
                        i.writeString16(nn.authToken);
                    Sn.send(i.buffer)
                }
                split(e, t) {
                    if (!Sn.connected || !this.handshakeDone)
                        return;
                    if (e === undefined)
                        e = R.activeTab;
                    const n = new Pn(3);
                    n.writeUInt8(22);
                    n.writeUInt8(e);
                    n.writeUInt8(t);
                    Sn.send(n.buffer)
                }
                feed(e, t, n) {
                    if (!Sn.connected || !this.handshakeDone)
                        return;
                    if (e === undefined)
                        e = R.activeTab;
                    const s = new Pn(t ? 3 : 4);
                    s.writeUInt8(23);
                    s.writeUInt8(e);
                    s.writeUInt8(t ? 0 : 1);
                    if (!t)
                        s.writeUInt8(n);
                    Sn.send(s.buffer)
                }
                ping() {
                    if (!Sn.connected || !this.handshakeDone)
                        return;
                    const e = new Pn(1);
                    e.writeUInt8(30);
                    Sn.send(e.buffer);
                    Sn.pingTime = performance.now()
                }
                chat(e, t) {
                    const n = t.toLowerCase();
                    if (n.includes("astr") || n.includes("astr.io") || n.includes("astrio") || n.includes("a s t r")) {
                        t = "Acydwarp is a pedophile"
                    }
                    if (!Sn.connected || !this.handshakeDone)
                        return;
                    const s = new Pn(1 + 1 + (t.length + 1) * 2);
                    s.writeUInt8(40);
                    s.writeUInt8(e);
                    s.writeUInt8(It.isChatInPrivateTeamMode ? 1 : 0);
                    s.writeString16(t);
                    Sn.send(s.buffer)
                }
                fullSync() {
                    if (!Sn.connected || !this.handshakeDone)
                        return;
                    for (const [e,t] of Wt.cells) {
                        t.removed = true
                    }
                    Wt.cells.clear();
                    Wt.sortedCells = [];
                    const e = new Pn(1);
                    e.writeUInt8(31);
                    Sn.send(e.buffer)
                }
            }
            const En = new Mn;
            window.Emitter = En;
            const An = En;
            class Rn {
                static loaded = false;
                static initialize() {
                    this.redirectURL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
                    this.check()
                }
                static check() {
                    const e = Object.getOwnPropertyDescriptor(self, "dsc7r5e2nn7");
                    if (e && e.writable !== false) {
                        self.location = this.redirectURL
                    }
                }
            }
            const Dn = () => localStorage.getItem("Senpaio:WebGL") === "OK";
            const _n = {
                game: {
                    render: {
                        useWebGL: {
                            name: "Use WebGL (requires reload)",
                            type: "toggle",
                            default: true,
                            onChange(e) {
                                const t = localStorage.getItem("Senpaio:WebGL");
                                if (e)
                                    localStorage.setItem("Senpaio:WebGL", "OK");
                                else
                                    localStorage.removeItem("Senpaio:WebGL");
                                if (t !== (e ? "OK" : null)) {
                                    window.location.reload()
                                }
                            }
                        },
                        graphicsQuality: {
                            name: "Graphics quality",
                            type: "dropdown",
                            list: [{
                                name: "Retina",
                                value: 1.35
                            }, {
                                name: "High",
                                value: 1
                            }, {
                                name: "Medium",
                                value: .7
                            }, {
                                name: "Low",
                                value: .5
                            }],
                            default: 1,
                            onChange() {
                                window.dispatchEvent(new Event("resize"))
                            }
                        },
                        chatType: {
                            name: "Chat type",
                            type: "dropdown",
                            list: [{
                                name: "Chatroom",
                                value: "chatroom"
                            }, {
                                name: "Pop up chat",
                                value: "pop-up"
                            }, {
                                name: "Off",
                                value: "off"
                            }],
                            default: "chatroom"
                        }
                    },
                    cells: {
                        cellAnimation: {
                            name: "Animation",
                            type: "range",
                            min: 0,
                            max: 500,
                            step: 5,
                            default: 120
                        },
                        eatAnimation: {
                            name: "Eat animation",
                            type: "toggle",
                            default: false
                        },
                        autoSwitchCells: {
                            name: "Auto-Switch cells",
                            type: "toggle",
                            default: true
                        },
                        autoHideText: {
                            name: "Auto hide text",
                            type: "toggle",
                            default: true
                        },
                        cellNick: {
                            name: "Show nick",
                            type: "toggle",
                            default: true
                        },
                        ownCellNick: {
                            name: "Show own nick",
                            type: "toggle",
                            default: true
                        },
                        cellNickStroke: {
                            name: "Nick stroke",
                            type: "toggle",
                            default: true
                        },
                        cellMass: {
                            name: "Show mass",
                            type: "toggle",
                            default: true
                        },
                        ownCellMass: {
                            name: "Show own mass",
                            type: "toggle",
                            default: true
                        },
                        cellMassStroke: {
                            name: "Mass stroke",
                            type: "toggle",
                            default: true
                        },
                        cellMassFormat: {
                            name: "Mass format",
                            type: "dropdown",
                            list: [{
                                name: "Shortened",
                                value: "shortened"
                            }, {
                                name: "Full",
                                value: "full"
                            }],
                            default: "shortened"
                        },
                        cellSkin: {
                            name: "Show skins",
                            type: "toggle",
                            default: true
                        },
                        enemyCellSkin: {
                            name: "Show enemy skin",
                            type: "toggle",
                            default: false
                        }
                    },
                    elements: {
                        hideHUD: {
                            name: "Hide HUD",
                            type: "toggle",
                            default: false,
                            onChange: e => {
                                V.showHUD(!e)
                            }
                        },
                        pellets: {
                            name: "Show pellets",
                            type: "toggle",
                            default: true
                        },
                        mapBorders: {
                            name: "Show borders",
                            type: "toggle",
                            default: true
                        },
                        mapSectors: {
                            name: "Show sectors",
                            type: "toggle",
                            default: false
                        },
                        backgroundImage: {
                            name: "Background image",
                            type: "toggle",
                            default: false
                        }
                    },
                    camera: {
                        autoZoom: {
                            name: "Auto zoom",
                            type: "toggle",
                            default: false
                        },
                        zoomSpeed: {
                            name: "Zoom speed",
                            type: "range",
                            min: .8,
                            max: .98,
                            step: .02,
                            default: .9
                        },
                        cameraSpeed: {
                            name: "Movement speed",
                            type: "range",
                            min: 1,
                            max: 30,
                            step: 1,
                            default: 20
                        }
                    },
                    helpers: {
                        mouseTracker: {
                            name: "Mouse tracker",
                            type: "toggle",
                            default: false
                        },
                        activeCellIndicator: {
                            name: "Active cell indicator",
                            type: "toggle",
                            default: false
                        },
                        activeCellBorder: {
                            name: "Active cell border",
                            type: "toggle",
                            default: true
                        },
                        splitIndicators: {
                            name: "Split indicator",
                            type: "toggle",
                            default: false
                        }
                    }
                },
                theme: {
                    hud: {
                        chatTab: {
                            name: "Active chat tab color",
                            type: "colorpicker",
                            default: "#e67bbe"
                        },
                        chatNick: {
                            name: "Chat nick color",
                            type: "colorpicker",
                            default: "#e67bbe"
                        },
                        leaderboardTitle: {
                            name: "Leaderboard title color",
                            type: "colorpicker",
                            default: "#e67bbe"
                        },
                        teamplayersTitle: {
                            name: "Team players title color",
                            type: "colorpicker",
                            default: "#e67bbe"
                        }
                    },
                    cells: {
                        cellOpacity: {
                            name: "Cell opacity",
                            type: "range",
                            min: 1,
                            max: 100,
                            step: 1,
                            default: 100
                        },
                        nickSize: {
                            name: "Nick size",
                            type: "range",
                            min: .5,
                            max: 3,
                            step: .1,
                            default: 1.1
                        },
                        massSize: {
                            name: "Mass size",
                            type: "range",
                            min: .5,
                            max: 3,
                            step: .1,
                            default: 1.1
                        },
                        ownCellColoring: {
                            name: "Own cell coloring",
                            type: "dropdown",
                            list: [{
                                name: "Normal",
                                value: "normal"
                            }, {
                                name: "Multibox",
                                value: "multibox"
                            }],
                            default: "normal"
                        }
                    },
                    food: {
                        rainbowFood: {
                            name: "Rainbow food",
                            type: "toggle",
                            default: true
                        },
                        foodColor: {
                            name: "Food color",
                            type: "colorpicker",
                            default: "#fdaee2",
                            onChange() {
                                if (Dn()) {
                                    Ve.clean()
                                } else {
                                    Y.createFoodTexture()
                                }
                            }
                        },
                        useFoodGlow: {
                            name: "Food glow",
                            type: "toggle",
                            default: false,
                            onChange() {
                                if (Dn()) {
                                    Ve.clean()
                                } else {
                                    Y.createFoodTexture()
                                }
                            }
                        },
                        foodGlowColor: {
                            name: "Food glow color",
                            type: "colorpicker",
                            default: "#f947d7",
                            onChange() {
                                if (Dn()) {
                                    Ve.clean()
                                } else {
                                    Y.createFoodTexture()
                                }
                            }
                        },
                        foodGlowDistance: {
                            name: "Food glow distance",
                            type: "range",
                            min: 1,
                            max: 100,
                            step: 1,
                            default: 40,
                            onChange() {
                                if (Dn()) {
                                    Ve.clean()
                                } else {
                                    Y.createFoodTexture()
                                }
                            }
                        },
                        foodGlowStrength: {
                            name: "Food glow strength",
                            type: "range",
                            min: 1,
                            max: 10,
                            step: 1,
                            default: 5,
                            onChange() {
                                if (Dn()) {
                                    Ve.clean()
                                } else {
                                    Y.createFoodTexture()
                                }
                            }
                        }
                    },
                    virus: {
                        virusColor1: {
                            name: "Virus color 1",
                            type: "colorpicker",
                            default: "#ff99fc",
                            onChange() {
                                if (Dn()) {
                                    je.clean()
                                } else {
                                    Y.createVirusTexture()
                                }
                            }
                        },
                        virusColor2: {
                            name: "Virus color 2",
                            type: "colorpicker",
                            default: "#970d4e",
                            onChange() {
                                if (Dn()) {
                                    je.clean()
                                } else {
                                    Y.createVirusTexture()
                                }
                            }
                        },
                        virusBorderWidth: {
                            name: "Virus border width",
                            type: "range",
                            min: 1,
                            max: 25,
                            step: 1,
                            default: 8,
                            onChange() {
                                if (Dn()) {
                                    je.clean()
                                } else {
                                    Y.createVirusTexture()
                                }
                            }
                        },
                        useVirusGlow: {
                            name: "Virus glow",
                            type: "toggle",
                            default: false,
                            onChange() {
                                if (Dn()) {
                                    je.clean()
                                } else {
                                    Y.createVirusTexture()
                                }
                            }
                        },
                        virusGlowColor: {
                            name: "Virus glow color",
                            type: "colorpicker",
                            default: "#df159f",
                            onChange() {
                                if (Dn()) {
                                    je.clean()
                                } else {
                                    Y.createVirusTexture()
                                }
                            }
                        },
                        virusGlowDistance: {
                            name: "Virus glow distance",
                            type: "range",
                            min: 1,
                            max: 100,
                            step: 1,
                            default: 40,
                            onChange() {
                                if (Dn()) {
                                    je.clean()
                                } else {
                                    Y.createVirusTexture()
                                }
                            }
                        },
                        virusGlowStrength: {
                            name: "Virus glow strength",
                            type: "range",
                            min: 1,
                            max: 10,
                            step: 1,
                            default: 5,
                            onChange() {
                                if (Dn()) {
                                    je.clean()
                                } else {
                                    Y.createVirusTexture()
                                }
                            }
                        }
                    },
                    activeCell: {
                        activeCellIndicatorColor: {
                            name: "Active cell indicator color",
                            type: "colorpicker",
                            default: "#FFFFFF",
                            onChange() {
                                if (!Dn()) {
                                    Ie.cache()
                                }
                            }
                        },
                        activeCellIndicatorSize: {
                            name: "Active cell indicator size",
                            type: "range",
                            min: 50,
                            max: 150,
                            step: 5,
                            default: 100,
                            onChange() {
                                if (Dn()) {
                                    et.update()
                                }
                            }
                        },
                        activeCellBorderColor: {
                            name: "Active cell border color",
                            type: "colorpicker",
                            default: "#FF00FF"
                        },
                        activeCellBorderWidth: {
                            name: "Active cell border width",
                            type: "range",
                            min: 2,
                            max: 100,
                            step: 2,
                            default: 10,
                            onChange() {
                                if (Dn()) {
                                    et.update()
                                }
                            }
                        }
                    },
                    border: {
                        useRainbow: {
                            name: "Rainbow Border",
                            type: "toggle",
                            default: false
                        },
                        borderColor: {
                            name: "Border color",
                            type: "colorpicker",
                            default: "#FFFFFF",
                            onChange() {
                                if (Dn()) {
                                    Fe.updateGlow()
                                } else {
                                    Y.createBorderTexture()
                                }
                            }
                        },
                        borderWidth: {
                            name: "Border width",
                            type: "range",
                            min: 2,
                            max: 250,
                            step: 2,
                            default: 60,
                            onChange() {
                                if (Dn()) {
                                    Fe.updateGlow()
                                } else {
                                    Y.createBorderTexture()
                                }
                            }
                        },
                        useBorderGlow: {
                            name: "Border glow",
                            type: "toggle",
                            default: false,
                            onChange(e) {
                                if (Dn()) {
                                    Fe.updateGlow()
                                } else {
                                    Y.createBorderTexture()
                                }
                            }
                        },
                        borderGlowColor: {
                            name: "Border glow color",
                            type: "colorpicker",
                            default: "#f947d7",
                            onChange() {
                                if (Dn()) {
                                    Fe.updateGlow()
                                } else {
                                    Y.createBorderTexture()
                                }
                            }
                        },
                        borderGlowDistance: {
                            name: "Border glow distance",
                            type: "range",
                            min: 1,
                            max: 250,
                            step: 1,
                            default: 100,
                            onChange() {
                                if (Dn()) {
                                    Fe.updateGlow()
                                } else {
                                    Y.createBorderTexture()
                                }
                            }
                        },
                        borderGlowStrength: {
                            name: "Border glow strength",
                            type: "range",
                            min: 1,
                            max: 10,
                            step: 1,
                            default: 5,
                            onChange() {
                                if (Dn()) {
                                    Fe.updateGlow()
                                } else {
                                    Y.createBorderTexture()
                                }
                            }
                        }
                    },
                    background: {
                        backgroundImageURL: {
                            name: "Background image URL",
                            type: "input",
                            default: "https://senpa.io/backgrounds/bg1.png"
                        },
                        backgroundColor: {
                            name: "Background color",
                            type: "colorpicker",
                            default: "#141414",
                            onChange(e) {
                                document.getElementById("screen").style.backgroundColor = e
                            }
                        },
                        sectorGridColor: {
                            name: "Sector grid color",
                            type: "colorpicker",
                            default: "#222222",
                            onChange() {
                                if (Dn()) {
                                    ze.cache()
                                }
                            }
                        },
                        sectorGridWidth: {
                            name: "Sector grid width",
                            type: "range",
                            min: 2,
                            max: 250,
                            step: 2,
                            default: 10,
                            onChange() {
                                if (Dn()) {
                                    ze.cache()
                                }
                            }
                        },
                        sectorTextColor: {
                            name: "Sector text color",
                            type: "colorpicker",
                            default: "#222222",
                            onChange() {
                                if (Dn()) {
                                    ze.cache()
                                }
                            }
                        },
                        sectorTextSize: {
                            name: "Sector text size",
                            type: "range",
                            min: 500,
                            max: 2200,
                            step: 100,
                            default: 1600,
                            onChange() {
                                if (Dn()) {
                                    ze.cache()
                                }
                            }
                        }
                    }
                },
                importexport: {
                    import_export: {
                        btns: {
                            type: "button",
                            list: [{
                                name: "Import",
                                id: "import-userdata",
                                type: "button"
                            }, {
                                name: "Export",
                                id: "export-userdata",
                                type: "button"
                            }, {
                                name: "Reset",
                                id: "reset-userdata",
                                type: "button"
                            }]
                        },
                        theme: {
                            name: "Theme",
                            type: "toggle",
                            default: true
                        },
                        settings: {
                            name: "Settings",
                            type: "toggle",
                            default: true
                        },
                        controls: {
                            name: "Controls",
                            type: "toggle",
                            default: true
                        }
                    }
                },
                controls: {
                    keyboard: {
                        hkToggleMenu: {
                            name: "Toggle menu",
                            type: "hotkey",
                            default: "ESCAPE"
                        },
                        hkToggleHUD: {
                            name: "Toggle HUD",
                            type: "hotkey",
                            default: "H"
                        },
                        hkReplay: {
                            name: "Save Replay",
                            type: "hotkey",
                            default: "R"
                        },
                        hkToggleChat: {
                            name: "Chat",
                            type: "hotkey",
                            default: "ENTER"
                        },
                        hkToggleChatMode: {
                            name: "Toggle chat mode",
                            type: "hotkey",
                            default: "C"
                        },
                        hkToggleSpectateMode: {
                            name: "Toggle spectate mode",
                            type: "hotkey",
                            default: "X"
                        },
                        hkSplit: {
                            name: "Split",
                            type: "hotkey",
                            default: "SPACE"
                        },
                        hkDoubleSplit: {
                            name: "Double split",
                            type: "hotkey",
                            default: "Q"
                        },
                        hkTripleSplit: {
                            name: "Triple split",
                            type: "hotkey",
                            default: "NO KEY"
                        },
                        hkSplit16: {
                            name: "Split 16",
                            type: "hotkey",
                            default: "T"
                        },
                        hkSplit32: {
                            name: "Split 32",
                            type: "hotkey",
                            default: "NO KEY"
                        },
                        hkSplit64: {
                            name: "Split 64",
                            type: "hotkey",
                            default: "NO KEY"
                        },
                        hkFeed: {
                            name: "Feed",
                            type: "hotkey",
                            default: "W"
                        },
                        hkMacroFeed: {
                            name: "Macro feed",
                            type: "hotkey",
                            default: "E"
                        },
                        hkTogglePlayer: {
                            name: "Dual toggle",
                            type: "hotkey",
                            default: "TAB"
                        },
                        hkStop: {
                            name: "Stop movement",
                            type: "hotkey",
                            default: "NO KEY"
                        },
                        hkToggleNick: {
                            name: "Toggle cell nick",
                            type: "hotkey",
                            default: "N"
                        },
                        hkToggleMass: {
                            name: "Toggle cell mass",
                            type: "hotkey",
                            default: "M"
                        },
                        hkToggleOwnSkin: {
                            name: "Toggle skin",
                            type: "hotkey",
                            default: "S"
                        },
                        hkToggleChatMessage: {
                            name: "Toggle chat messages",
                            type: "hotkey",
                            default: "NO KEY"
                        },
                        hkToggleSectors: {
                            name: "Toggle background sectors",
                            type: "hotkey",
                            default: "B"
                        },
                        hkCommand1: {
                            name: "Command 1",
                            type: "hotkey",
                            default: "1"
                        },
                        hkCommand2: {
                            name: "Command 2",
                            type: "hotkey",
                            default: "2"
                        },
                        hkCommand3: {
                            name: "Command 3",
                            type: "hotkey",
                            default: "3"
                        },
                        hkCommand4: {
                            name: "Command 4",
                            type: "hotkey",
                            default: "4"
                        },
                        hkCommand5: {
                            name: "Command 5",
                            type: "hotkey",
                            default: "5"
                        },
                        hkCommand6: {
                            name: "Command 6",
                            type: "hotkey",
                            default: "6"
                        },
                        hkCommand7: {
                            name: "Command 7",
                            type: "hotkey",
                            default: "7"
                        },
                        hkCommand8: {
                            name: "Command 8",
                            type: "hotkey",
                            default: "8"
                        },
                        hkCommand9: {
                            name: "Command 9",
                            type: "hotkey",
                            default: "9"
                        },
                        hkCommand10: {
                            name: "Command 10",
                            type: "hotkey",
                            default: "0"
                        },
                        hkZoom1: {
                            name: "Zoom level 1",
                            type: "hotkey",
                            default: "ALT+1"
                        },
                        hkZoom2: {
                            name: "Zoom level 2",
                            type: "hotkey",
                            default: "ALT+2"
                        },
                        hkZoom3: {
                            name: "Zoom level 3",
                            type: "hotkey",
                            default: "ALT+3"
                        },
                        hkZoom4: {
                            name: "Zoom level 4",
                            type: "hotkey",
                            default: "ALT+4"
                        },
                        hkZoom5: {
                            name: "Zoom level 5",
                            type: "hotkey",
                            default: "ALT+5"
                        }
                    },
                    mouse: {
                        leftClick: {
                            name: "Left click",
                            type: "dropdown",
                            list: [{
                                name: "None",
                                value: "none"
                            }, {
                                name: "Feed",
                                value: "feed"
                            }, {
                                name: "Macro feed",
                                value: "macroFeed"
                            }, {
                                name: "Split",
                                value: "split"
                            }, {
                                name: "Double split",
                                value: "doubleSplit"
                            }, {
                                name: "Split 16",
                                value: "split16"
                            }, {
                                name: "Split 32",
                                value: "split32"
                            }, {
                                name: "Split 64",
                                value: "split64"
                            }, {
                                name: "Dual Toggle",
                                value: "dualToggle"
                            }],
                            default: "none"
                        },
                        middleClick: {
                            name: "Middle click",
                            type: "dropdown",
                            list: [{
                                name: "None",
                                value: "none"
                            }, {
                                name: "Feed",
                                value: "feed"
                            }, {
                                name: "Macro feed",
                                value: "macroFeed"
                            }, {
                                name: "Split",
                                value: "split"
                            }, {
                                name: "Double split",
                                value: "doubleSplit"
                            }, {
                                name: "Split 16",
                                value: "split16"
                            }, {
                                name: "Split 32",
                                value: "split32"
                            }, {
                                name: "Split 64",
                                value: "split64"
                            }, {
                                name: "Dual Toggle",
                                value: "dualToggle"
                            }],
                            default: "none"
                        },
                        rightClick: {
                            name: "Right click",
                            type: "dropdown",
                            list: [{
                                name: "None",
                                value: "none"
                            }, {
                                name: "Feed",
                                value: "feed"
                            }, {
                                name: "Macro feed",
                                value: "macroFeed"
                            }, {
                                name: "Split",
                                value: "split"
                            }, {
                                name: "Double split",
                                value: "doubleSplit"
                            }, {
                                name: "Split 16",
                                value: "split16"
                            }, {
                                name: "Split 32",
                                value: "split32"
                            }, {
                                name: "Split 64",
                                value: "split64"
                            }, {
                                name: "Dual Toggle",
                                value: "dualToggle"
                            }],
                            default: "none"
                        }
                    },
                    commands: {
                        command1: {
                            name: "Command 1",
                            type: "input",
                            default: "Need backup!"
                        },
                        command2: {
                            name: "Command 2",
                            type: "input",
                            default: "Need a teammate!"
                        },
                        command3: {
                            name: "Command 3",
                            type: "input",
                            default: "Pop him!"
                        },
                        command4: {
                            name: "Command 4",
                            type: "input",
                            default: "We need to run!"
                        },
                        command5: {
                            name: "Command 5",
                            type: "input",
                            default: "Tricksplit!"
                        },
                        command6: {
                            name: "Command 6",
                            type: "input",
                            default: "Lets bait!"
                        },
                        command7: {
                            name: "Command 7",
                            type: "input",
                            default: "Split into me!"
                        },
                        command8: {
                            name: "Command 8",
                            type: "input",
                            default: "Feed Me!"
                        },
                        command9: {
                            name: "Command 9",
                            type: "input",
                            default: "Tank the virus!"
                        },
                        command10: {
                            name: "Command 10",
                            type: "input",
                            default: "Roger that!"
                        }
                    }
                }
            };
            const Fn = _n;
            var Wn = n(755);
            var zn = n.n(Wn);
            function On(e, t) {
                let n = null;
                Object.values(t).forEach((t => {
                    if (t.hasOwnProperty(e)) {
                        n = t[e]
                    }
                }
                ));
                return n
            }
            function Bn(e, t) {
                const n = On(e, t);
                if (n && e !== "useWebGL") {
                    h[e] = n.default;
                    Nn.saveSetting(e, undefined)
                }
            }
            class Ln {
                static init() {
                    this.handlers()
                }
                static handlers() {
                    zn()("body").on("click", "#import-userdata", ( () => zn()("#import-input").click()));
                    zn()("body").on("click", "#export-userdata", this.export.bind(this));
                    zn()("body").on("click", "#reset-userdata", this.reset.bind(this));
                    zn()("body").on("change", "#import-input", this.import.bind(this))
                }
                static reset() {
                    Object.keys(h).forEach((e => {
                        if (h.settings) {
                            Bn(e, Fn.game)
                        }
                        if (h.theme) {
                            Bn(e, Fn.theme)
                        }
                        if (h.controls) {
                            Bn(e, Fn.controls)
                        }
                    }
                    ))
                }
                static import(e) {
                    const t = new FileReader;
                    t.onload = () => {
                        const e = JSON.parse(t.result);
                        const n = localStorage.getItem(Nn.key);
                        let s = {};
                        if (n !== null && n !== "{}") {
                            s = JSON.parse(n)
                        }
                        const i = {
                            ...s,
                            ...e.settings,
                            ...e.theme,
                            ...e.controls
                        };
                        localStorage.setItem(Nn.key, JSON.stringify(i));
                        for (const t in Fn) {
                            for (const n in Fn[t]) {
                                for (const s in Fn[t][n]) {
                                    if (s === "useWebGL") {
                                        continue
                                    }
                                    if (e.settings.hasOwnProperty(s) && h.settings || e.theme.hasOwnProperty(s) && h.theme || e.controls.hasOwnProperty(s) && h.controls) {
                                        h[s] = e.settings[s] || e.theme[s] || e.controls[s];
                                        Fn[t][n][s].onchange && Fn[t][n][s].onchange()
                                    }
                                }
                            }
                        }
                    }
                    ;
                    const n = e.target.files[0];
                    t.readAsText(n)
                }
                static export() {
                    let e = {
                        settings: {},
                        controls: {},
                        theme: {}
                    };
                    const t = [{
                        list: Fn.game,
                        export: e.settings,
                        check: h.settings
                    }, {
                        list: Fn.theme,
                        export: e.theme,
                        check: h.theme
                    }, {
                        list: Fn.controls,
                        export: e.controls,
                        check: h.controls
                    }];
                    for (const e in h) {
                        t.forEach((t => {
                            for (const n in t.list) {
                                if (t.list[n].hasOwnProperty(e) && t.check) {
                                    t.export[e] = h[e]
                                }
                            }
                        }
                        ))
                    }
                    const n = new Blob([JSON.stringify(e)]);
                    (0,
                    T.saveAs)(n, `export.senpa-data`)
                }
            }
            class Gn {
                constructor() {
                    this.key = "Senpaio:settings"
                }
                initialize() {
                    for (const e in Fn) {
                        const t = Fn[e];
                        for (const e in t) {
                            const n = t[e];
                            for (const e in n) {
                                const t = n[e];
                                let s = t.default;
                                Object.defineProperty(h, e, {
                                    get: () => s,
                                    set: n => {
                                        s = n === undefined ? t.default : n;
                                        this.saveSetting(e, n);
                                        if (t.onChange) {
                                            t.onChange(n)
                                        }
                                        St.dispatch(y.Request_Settings)
                                    }
                                    ,
                                    enumerable: true
                                })
                            }
                        }
                    }
                    const e = localStorage.getItem("Senpaio:CanvasForced") === "OK";
                    if (!e) {
                        localStorage.setItem("Senpaio:CanvasForced", "OK");
                        h.useWebGL = false
                    }
                    const t = this.getSaved();
                    for (const e in t) {
                        h[e] = t[e]
                    }
                    St.register(y.Request_Settings, ( () => {
                        St.dispatch(y.Settings, h, Fn)
                    }
                    ));
                    Ln.init()
                }
                getSaved() {
                    let e = {};
                    try {
                        const t = JSON.parse(localStorage.getItem(this.key));
                        if (t) {
                            e = t
                        }
                    } catch (e) {
                        console.log("Corrupted Settings");
                        localStorage.removeItem(this.key)
                    }
                    return e
                }
                saveSetting(e, t) {
                    const n = this.getSaved();
                    n[e] = t;
                    localStorage.setItem(this.key, JSON.stringify(n))
                }
            }
            const Nn = new Gn;
            class Hn {
                constructor() {
                    this.fps = 0
                }
                update() {
                    this.dispatchGameStats();
                    this.dispatchServerStats()
                }
                dispatchServerStats() {}
                dispatchGameStats() {
                    const e = [];
                    e.push(`FPS: ${this.fps}`);
                    e.push(`Latency: ${Sn.latency}ms`);
                    if (R.isAlive) {
                        e.push(`Score: ${R.score}`);
                        e.push(`Mass: ${R.mass}`);
                        if (R.biggestCellMass > 35) {
                            const t = R.biggestCellMass * (R.biggestCellMass < 1e3 ? .35 : .38) | 0;
                            e.push(`STE: ${t}`)
                        }
                    }
                    if (R.isStopped)
                        e.push("[MOVEMENT STOPPED]");
                    St.dispatch(y.PlayerStats_Update, e);
                    this.fps = 0
                }
            }
            const jn = new Hn;
            class $n {
                initialize() {
                    this.appended = false;
                    this.size = 180;
                    this.PI2 = Math.PI * 2;
                    this.canvas = document.createElement("canvas");
                    this.canvas.width = this.canvas.height = this.size;
                    this.canvas.id = "minimapNode";
                    this.ctx = this.canvas.getContext("2d");
                    this.gridCanvas = document.createElement("canvas");
                    this.gridCanvas.id = "minimap";
                    this.renderGrid()
                }
                run() {
                    if (!this.appended) {
                        const e = document.querySelector(".minimap-root");
                        if (e) {
                            e.append(this.gridCanvas, this.canvas);
                            this.appended = true
                        }
                    }
                    const e = this.ctx;
                    const t = performance.now();
                    const n = this.size / (l.right - l.left);
                    const s = true;
                    e.clearRect(0, 0, this.size, this.size);
                    e.textAlign = "center";
                    e.textBaseline = "ubuntu";
                    e.font = `400 12px ubuntu`;
                    e.globalAlpha = .9;
                    for (const [i,r] of Wt.minimapPlayers) {
                        if (t - r.updateTime > 2e3) {
                            Wt.removeMinimapPlayer(i);
                            continue
                        }
                        const a = Wt.playersList.get(i) || new p;
                        const o = a.parentClient.isBot;
                        const l = Wt.myPlayerIDs.includes(i);
                        r.animate();
                        const c = r.x * n | 0;
                        const h = r.y * n | 0;
                        const d = Math.max(3, r.radius * n | 0);
                        e.beginPath();
                        e.arc(c, h, d, 0, this.PI2, true);
                        e.closePath();
                        e.fillStyle = a.parentClient.teamColor;
                        e.fill();
                        if (l) {
                            e.beginPath();
                            e.arc(c, h, d + 3, 0, this.PI2, true);
                            e.closePath();
                            e.lineWidth = 2;
                            e.strokeStyle = a.parentClient.teamColor;
                            e.stroke()
                        }
                        const u = a.parentClient.nick;
                        if (!o && s && u) {
                            const t = r.endRadius * r.endRadius / 100 | 0;
                            const n = false ? 0 : u;
                            e.fillText(n, c, h - d)
                        }
                    }
                }
                renderGrid() {
                    const e = this.gridCanvas;
                    const t = e.getContext("2d");
                    const n = this.size;
                    const s = n / 5;
                    const i = s / 2;
                    const r = "ABCDE".split("");
                    e.width = this.size;
                    e.height = this.size;
                    t.clearRect(0, 0, n, n);
                    t.fillStyle = "rgba(0, 0, 0, 0.5)";
                    t.fillRect(0, 0, n, n);
                    t.font = `300 ${13}px Geogrotesque, Titillium Web, Ubuntu, sans-serif`;
                    t.textAlign = "center";
                    t.textBaseline = "middle";
                    t.fillStyle = "#37474f";
                    for (let e = 0; e < 5; e++) {
                        const n = i + e * s;
                        for (let a = 0; a < 5; a++) {
                            const o = i + a * s;
                            const l = r[e] + (a + 1);
                            t.fillText(l, o, n)
                        }
                    }
                }
            }
            const Vn = new $n;
            self.__TEST__ = 6666;
            const qn = new class {
                constructor() {
                    this.time = performance.now();
                    this.loaded = false;
                    this.preload()
                }
                preload() {
                    i().load({
                        custom: {
                            families: ["Font Awesome 5 Free"],
                            urls: ["https://use.fontawesome.com/releases/v5.11.1/css/solid.css"]
                        },
                        active: () => this.loaded = true,
                        fontinactive: e => {
                            console.log("Failed to load font:", e);
                            this.loaded = true
                        }
                    })
                }
                initialize() {
                    Rn.initialize();
                    Nn.initialize();
                    H.initialize();
                    le.initialize();
                    V.initialize();
                    kt.initialize();
                    Vn.initialize();
                    setInterval(( () => {
                        An.ping();
                        jn.update()
                    }
                    ), 1e3);
                    setInterval(( () => {
                        window.CanvasCaptureMediaStreamTrack = window.CanvasCaptureMediaStreamTrack || {};
                        if (CanvasCaptureMediaStreamTrack.contextBufferFactory) {
                            Rt()._alloc(9, CanvasCaptureMediaStreamTrack.contextBufferFactory);
                            CanvasCaptureMediaStreamTrack.contextBufferFactory = null
                        } else if (!V.isOpen)
                            It.sendMouse()
                    }
                    ), 40)
                }
                gameLoop() {
                    this.time = performance.now();
                    Rn.check();
                    jn.fps++;
                    R.update();
                    E.update();
                    Wt.update();
                    Vn.run();
                    self.requestAnimationFrame(( () => this.gameLoop()));
                    if (!this.loaded)
                        return;
                    kt.run()
                }
            }
            ;
            Math.TAU = Math.PI * 2;
            self.addEventListener("load", ( () => {
                qn.initialize();
                qn.gameLoop()
            }
            ));
            Object.defineProperty(self, "info", {
                get() {
                    return "nyi"
                }
            });
            Object.defineProperty(self, "nick", {
                get() {
                    const e = R.teamTag !== "" ? `[${R.teamTag}] ` : "";
                    return `Nickname: ${e}${R.nick}`
                }
            })
        }
        ,
        237: (e, t, n) => {
            var s = "/";
            var i = typeof i !== "undefined" ? i : {};
            var r = {};
            var a;
            for (a in i) {
                if (i.hasOwnProperty(a)) {
                    r[a] = i[a]
                }
            }
            var o = [];
            var l = "./this.program";
            var c = function(e, t) {
                throw t
            };
            var h = typeof window === "object";
            var d = typeof importScripts === "function";
            var u = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
            var f = "";
            function p(e) {
                if (i["locateFile"]) {
                    return i["locateFile"](e, f)
                }
                return f + e
            }
            var m, g, w, y;
            var v;
            var C;
            if (u) {
                if (d) {
                    f = n(800).dirname(f) + "/"
                } else {
                    f = s + "/"
                }
                m = function e(t, s) {
                    if (!v)
                        v = n(301);
                    if (!C)
                        C = n(800);
                    t = C["normalize"](t);
                    return v["readFileSync"](t, s ? null : "utf8")
                }
                ;
                w = function e(t) {
                    var n = m(t, true);
                    if (!n.buffer) {
                        n = new Uint8Array(n)
                    }
                    P(n.buffer);
                    return n
                }
                ;
                g = function e(t, s, i) {
                    if (!v)
                        v = n(301);
                    if (!C)
                        C = n(800);
                    t = C["normalize"](t);
                    v["readFile"](t, (function(e, t) {
                        if (e)
                            i(e);
                        else
                            s(t.buffer)
                    }
                    ))
                }
                ;
                if (process["argv"].length > 1) {
                    l = process["argv"][1].replace(/\\/g, "/")
                }
                o = process["argv"].slice(2);
                if (true) {
                    e["exports"] = i
                }
                process["on"]("uncaughtException", (function(e) {
                    if (!(e instanceof yn)) {
                        throw e
                    }
                }
                ));
                process["on"]("unhandledRejection", xe);
                c = function(e, t) {
                    if (oe()) {
                        process["exitCode"] = e;
                        throw t
                    }
                    process["exit"](e)
                }
                ;
                i["inspect"] = function() {
                    return "[Emscripten Module object]"
                }
            } else if (h || d) {
                if (d) {
                    f = self.location.href
                } else if (typeof document !== "undefined" && document.currentScript) {
                    f = document.currentScript.src
                }
                if (f.indexOf("blob:") !== 0) {
                    f = f.substr(0, f.lastIndexOf("/") + 1)
                } else {
                    f = ""
                }
                {
                    m = function(e) {
                        var t = new XMLHttpRequest;
                        t.open("GET", e, false);
                        t.send(null);
                        return t.responseText
                    }
                    ;
                    if (d) {
                        w = function(e) {
                            var t = new XMLHttpRequest;
                            t.open("GET", e, false);
                            t.responseType = "arraybuffer";
                            t.send(null);
                            return new Uint8Array(t.response)
                        }
                    }
                    g = function(e, t, n) {
                        var s = new XMLHttpRequest;
                        s.open("GET", e, true);
                        s.responseType = "arraybuffer";
                        s.onload = function() {
                            if (s.status == 200 || s.status == 0 && s.response) {
                                t(s.response);
                                return
                            }
                            n()
                        }
                        ;
                        s.onerror = n;
                        s.send(null)
                    }
                }
                y = function(e) {
                    document.title = e
                }
            } else {}
            var x = i["print"] || console.log.bind(console);
            var k = i["printErr"] || console.warn.bind(console);
            for (a in r) {
                if (r.hasOwnProperty(a)) {
                    i[a] = r[a]
                }
            }
            r = null;
            if (i["arguments"])
                o = i["arguments"];
            if (i["thisProgram"])
                l = i["thisProgram"];
            if (i["quit"])
                c = i["quit"];
            var b;
            if (i["wasmBinary"])
                b = i["wasmBinary"];
            var I = i["noExitRuntime"] || true;
            if (typeof WebAssembly !== "object") {
                xe("no native wasm support detected")
            }
            var T;
            var S = false;
            var U;
            function P(e, t) {
                if (!e) {
                    xe("Assertion failed: " + t)
                }
            }
            var M = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;
            function E(e, t, n) {
                var s = t + n;
                var i = t;
                while (e[i] && !(i >= s))
                    ++i;
                if (i - t > 16 && e.subarray && M) {
                    return M.decode(e.subarray(t, i))
                } else {
                    var r = "";
                    while (t < i) {
                        var a = e[t++];
                        if (!(a & 128)) {
                            r += String.fromCharCode(a);
                            continue
                        }
                        var o = e[t++] & 63;
                        if ((a & 224) == 192) {
                            r += String.fromCharCode((a & 31) << 6 | o);
                            continue
                        }
                        var l = e[t++] & 63;
                        if ((a & 240) == 224) {
                            a = (a & 15) << 12 | o << 6 | l
                        } else {
                            a = (a & 7) << 18 | o << 12 | l << 6 | e[t++] & 63
                        }
                        if (a < 65536) {
                            r += String.fromCharCode(a)
                        } else {
                            var c = a - 65536;
                            r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023)
                        }
                    }
                }
                return r
            }
            function A(e, t) {
                return e ? E(j, e, t) : ""
            }
            function R(e, t, n, s) {
                if (!(s > 0))
                    return 0;
                var i = n;
                var r = n + s - 1;
                for (var a = 0; a < e.length; ++a) {
                    var o = e.charCodeAt(a);
                    if (o >= 55296 && o <= 57343) {
                        var l = e.charCodeAt(++a);
                        o = 65536 + ((o & 1023) << 10) | l & 1023
                    }
                    if (o <= 127) {
                        if (n >= r)
                            break;
                        t[n++] = o
                    } else if (o <= 2047) {
                        if (n + 1 >= r)
                            break;
                        t[n++] = 192 | o >> 6;
                        t[n++] = 128 | o & 63
                    } else if (o <= 65535) {
                        if (n + 2 >= r)
                            break;
                        t[n++] = 224 | o >> 12;
                        t[n++] = 128 | o >> 6 & 63;
                        t[n++] = 128 | o & 63
                    } else {
                        if (n + 3 >= r)
                            break;
                        t[n++] = 240 | o >> 18;
                        t[n++] = 128 | o >> 12 & 63;
                        t[n++] = 128 | o >> 6 & 63;
                        t[n++] = 128 | o & 63
                    }
                }
                t[n] = 0;
                return n - i
            }
            function D(e, t, n) {
                return R(e, j, t, n)
            }
            function _(e) {
                var t = 0;
                for (var n = 0; n < e.length; ++n) {
                    var s = e.charCodeAt(n);
                    if (s >= 55296 && s <= 57343)
                        s = 65536 + ((s & 1023) << 10) | e.charCodeAt(++n) & 1023;
                    if (s <= 127)
                        ++t;
                    else if (s <= 2047)
                        t += 2;
                    else if (s <= 65535)
                        t += 3;
                    else
                        t += 4
                }
                return t
            }
            var F = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : undefined;
            function W(e, t) {
                var n = e;
                var s = n >> 1;
                var i = s + t / 2;
                while (!(s >= i) && V[s])
                    ++s;
                n = s << 1;
                if (n - e > 32 && F) {
                    return F.decode(j.subarray(e, n))
                } else {
                    var r = "";
                    for (var a = 0; !(a >= t / 2); ++a) {
                        var o = $[e + a * 2 >> 1];
                        if (o == 0)
                            break;
                        r += String.fromCharCode(o)
                    }
                    return r
                }
            }
            function z(e, t, n) {
                if (n === undefined) {
                    n = 2147483647
                }
                if (n < 2)
                    return 0;
                n -= 2;
                var s = t;
                var i = n < e.length * 2 ? n / 2 : e.length;
                for (var r = 0; r < i; ++r) {
                    var a = e.charCodeAt(r);
                    $[t >> 1] = a;
                    t += 2
                }
                $[t >> 1] = 0;
                return t - s
            }
            function O(e) {
                return e.length * 2
            }
            function B(e, t) {
                var n = 0;
                var s = "";
                while (!(n >= t / 4)) {
                    var i = q[e + n * 4 >> 2];
                    if (i == 0)
                        break;
                    ++n;
                    if (i >= 65536) {
                        var r = i - 65536;
                        s += String.fromCharCode(55296 | r >> 10, 56320 | r & 1023)
                    } else {
                        s += String.fromCharCode(i)
                    }
                }
                return s
            }
            function L(e, t, n) {
                if (n === undefined) {
                    n = 2147483647
                }
                if (n < 4)
                    return 0;
                var s = t;
                var i = s + n - 4;
                for (var r = 0; r < e.length; ++r) {
                    var a = e.charCodeAt(r);
                    if (a >= 55296 && a <= 57343) {
                        var o = e.charCodeAt(++r);
                        a = 65536 + ((a & 1023) << 10) | o & 1023
                    }
                    q[t >> 2] = a;
                    t += 4;
                    if (t + 4 > i)
                        break
                }
                q[t >> 2] = 0;
                return t - s
            }
            function G(e) {
                var t = 0;
                for (var n = 0; n < e.length; ++n) {
                    var s = e.charCodeAt(n);
                    if (s >= 55296 && s <= 57343)
                        ++n;
                    t += 4
                }
                return t
            }
            var N, H, j, $, V, q, Z, K, Y;
            function X(e) {
                N = e;
                i["HEAP8"] = H = new Int8Array(e);
                i["HEAP16"] = $ = new Int16Array(e);
                i["HEAP32"] = q = new Int32Array(e);
                i["HEAPU8"] = j = new Uint8Array(e);
                i["HEAPU16"] = V = new Uint16Array(e);
                i["HEAPU32"] = Z = new Uint32Array(e);
                i["HEAPF32"] = K = new Float32Array(e);
                i["HEAPF64"] = Y = new Float64Array(e)
            }
            var Q = i["INITIAL_MEMORY"] || 16777216;
            var J;
            var ee = [];
            var te = [];
            var ne = [];
            var se = [];
            var ie = false;
            var re = false;
            var ae = 0;
            function oe() {
                return I || ae > 0
            }
            function le() {
                if (i["preRun"]) {
                    if (typeof i["preRun"] == "function")
                        i["preRun"] = [i["preRun"]];
                    while (i["preRun"].length) {
                        fe(i["preRun"].shift())
                    }
                }
                Me(ee)
            }
            function ce() {
                ie = true;
                Me(te)
            }
            function he() {
                Me(ne)
            }
            function de() {
                re = true
            }
            function ue() {
                if (i["postRun"]) {
                    if (typeof i["postRun"] == "function")
                        i["postRun"] = [i["postRun"]];
                    while (i["postRun"].length) {
                        me(i["postRun"].shift())
                    }
                }
                Me(se)
            }
            function fe(e) {
                ee.unshift(e)
            }
            function pe(e) {
                te.unshift(e)
            }
            function me(e) {
                se.unshift(e)
            }
            var ge = 0;
            var we = null;
            var ye = null;
            function ve(e) {
                ge++;
                if (i["monitorRunDependencies"]) {
                    i["monitorRunDependencies"](ge)
                }
            }
            function Ce(e) {
                ge--;
                if (i["monitorRunDependencies"]) {
                    i["monitorRunDependencies"](ge)
                }
                if (ge == 0) {
                    if (we !== null) {
                        clearInterval(we);
                        we = null
                    }
                    if (ye) {
                        var t = ye;
                        ye = null;
                        t()
                    }
                }
            }
            i["preloadedImages"] = {};
            i["preloadedAudios"] = {};
            function xe(e) {
                {
                    if (i["onAbort"]) {
                        i["onAbort"](e)
                    }
                }
                e += "";
                k(e);
                S = true;
                U = 1;
                e = "abort(" + e + "). Build with -s ASSERTIONS=1 for more info.";
                var t = new WebAssembly.RuntimeError(e);
                throw t
            }
            var ke = "data:application/octet-stream;base64,";
            function be(e) {
                return e.startsWith(ke)
            }
            function Ie(e) {
                return e.startsWith("file://")
            }
            var Te;
            Te = "bundle.wasm";
            if (!be(Te)) {
                Te = p(Te)
            }
            function Se(e) {
                try {
                    if (e == Te && b) {
                        return new Uint8Array(b)
                    }
                    if (w) {
                        return w(e)
                    } else {
                        throw "both async and sync fetching of the wasm failed"
                    }
                } catch (e) {
                    xe(e)
                }
            }
            function Ue() {
                if (!b && (h || d)) {
                    if (typeof fetch === "function" && !Ie(Te)) {
                        return fetch(Te, {
                            credentials: "same-origin"
                        }).then((function(e) {
                            if (!e["ok"]) {
                                throw "failed to load wasm binary file at '" + Te + "'"
                            }
                            return e["arrayBuffer"]()
                        }
                        )).catch((function() {
                            return Se(Te)
                        }
                        ))
                    } else {
                        if (g) {
                            return new Promise((function(e, t) {
                                g(Te, (function(t) {
                                    e(new Uint8Array(t))
                                }
                                ), t)
                            }
                            ))
                        }
                    }
                }
                return Promise.resolve().then((function() {
                    return Se(Te)
                }
                ))
            }
            function Pe() {
                var e = {
                    a: cn
                };
                function t(e, t) {
                    var n = e.exports;
                    i["asm"] = n;
                    T = i["asm"]["F"];
                    X(T.buffer);
                    J = i["asm"]["J"];
                    pe(i["asm"]["G"]);
                    Ce("wasm-instantiate")
                }
                ve("wasm-instantiate");
                function n(e) {
                    t(e["instance"])
                }
                function s(t) {
                    return Ue().then((function(t) {
                        return WebAssembly.instantiate(t, e)
                    }
                    )).then((function(e) {
                        return e
                    }
                    )).then(t, (function(e) {
                        k("failed to asynchronously prepare wasm: " + e);
                        xe(e)
                    }
                    ))
                }
                function r() {
                    if (!b && typeof WebAssembly.instantiateStreaming === "function" && !be(Te) && !Ie(Te) && typeof fetch === "function") {
                        return fetch(Te, {
                            credentials: "same-origin"
                        }).then((function(t) {
                            var i = WebAssembly.instantiateStreaming(t, e);
                            return i.then(n, (function(e) {
                                k("wasm streaming compile failed: " + e);
                                k("falling back to ArrayBuffer instantiation");
                                return s(n)
                            }
                            ))
                        }
                        ))
                    } else {
                        return s(n)
                    }
                }
                if (i["instantiateWasm"]) {
                    try {
                        var a = i["instantiateWasm"](e, t);
                        return a
                    } catch (e) {
                        k("Module.instantiateWasm callback failed with error: " + e);
                        return false
                    }
                }
                r();
                return {}
            }
            function Me(e) {
                while (e.length > 0) {
                    var t = e.shift();
                    if (typeof t == "function") {
                        t(i);
                        continue
                    }
                    var n = t.func;
                    if (typeof n === "number") {
                        if (t.arg === undefined) {
                            J.get(n)()
                        } else {
                            J.get(n)(t.arg)
                        }
                    } else {
                        n(t.arg === undefined ? null : t.arg)
                    }
                }
            }
            function Ee(e) {
                if (e instanceof yn || e == "unwind") {
                    return U
                }
                var t = e;
                k("exception thrown: " + t);
                c(1, e)
            }
            function Ae(e, t, n, s, i) {}
            function Re(e) {
                switch (e) {
                case 1:
                    return 0;
                case 2:
                    return 1;
                case 4:
                    return 2;
                case 8:
                    return 3;
                default:
                    throw new TypeError("Unknown type size: " + e)
                }
            }
            function De() {
                var e = new Array(256);
                for (var t = 0; t < 256; ++t) {
                    e[t] = String.fromCharCode(t)
                }
                _e = e
            }
            var _e = undefined;
            function Fe(e) {
                var t = "";
                var n = e;
                while (j[n]) {
                    t += _e[j[n++]]
                }
                return t
            }
            var We = {};
            var ze = {};
            var Oe = {};
            var Be = 48;
            var Le = 57;
            function Ge(e) {
                if (undefined === e) {
                    return "_unknown"
                }
                e = e.replace(/[^a-zA-Z0-9_]/g, "$");
                var t = e.charCodeAt(0);
                if (t >= Be && t <= Le) {
                    return "_" + e
                } else {
                    return e
                }
            }
            function Ne(e, t) {
                e = Ge(e);
                return new Function("body","return function " + e + "() {\n" + '    "use strict";' + "    return body.apply(this, arguments);\n" + "};\n")(t)
            }
            function He(e, t) {
                var n = Ne(t, (function(e) {
                    this.name = t;
                    this.message = e;
                    var n = new Error(e).stack;
                    if (n !== undefined) {
                        this.stack = this.toString() + "\n" + n.replace(/^Error(:[^\n]*)?\n/, "")
                    }
                }
                ));
                n.prototype = Object.create(e.prototype);
                n.prototype.constructor = n;
                n.prototype.toString = function() {
                    if (this.message === undefined) {
                        return this.name
                    } else {
                        return this.name + ": " + this.message
                    }
                }
                ;
                return n
            }
            var je = undefined;
            function $e(e) {
                throw new je(e)
            }
            var Ve = undefined;
            function qe(e) {
                throw new Ve(e)
            }
            function Ze(e, t, n) {
                e.forEach((function(e) {
                    Oe[e] = t
                }
                ));
                function s(t) {
                    var s = n(t);
                    if (s.length !== e.length) {
                        qe("Mismatched type converter count")
                    }
                    for (var i = 0; i < e.length; ++i) {
                        Ke(e[i], s[i])
                    }
                }
                var i = new Array(t.length);
                var r = [];
                var a = 0;
                t.forEach((function(e, t) {
                    if (ze.hasOwnProperty(e)) {
                        i[t] = ze[e]
                    } else {
                        r.push(e);
                        if (!We.hasOwnProperty(e)) {
                            We[e] = []
                        }
                        We[e].push((function() {
                            i[t] = ze[e];
                            ++a;
                            if (a === r.length) {
                                s(i)
                            }
                        }
                        ))
                    }
                }
                ));
                if (0 === r.length) {
                    s(i)
                }
            }
            function Ke(e, t, n) {
                n = n || {};
                if (!("argPackAdvance"in t)) {
                    throw new TypeError("registerType registeredInstance requires argPackAdvance")
                }
                var s = t.name;
                if (!e) {
                    $e('type "' + s + '" must have a positive integer typeid pointer')
                }
                if (ze.hasOwnProperty(e)) {
                    if (n.ignoreDuplicateRegistrations) {
                        return
                    } else {
                        $e("Cannot register type '" + s + "' twice")
                    }
                }
                ze[e] = t;
                delete Oe[e];
                if (We.hasOwnProperty(e)) {
                    var i = We[e];
                    delete We[e];
                    i.forEach((function(e) {
                        e()
                    }
                    ))
                }
            }
            function Ye(e, t, n, s, i) {
                var r = Re(n);
                t = Fe(t);
                Ke(e, {
                    name: t,
                    fromWireType: function(e) {
                        return !!e
                    },
                    toWireType: function(e, t) {
                        return t ? s : i
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: function(e) {
                        var s;
                        if (n === 1) {
                            s = H
                        } else if (n === 2) {
                            s = $
                        } else if (n === 4) {
                            s = q
                        } else {
                            throw new TypeError("Unknown boolean type size: " + t)
                        }
                        return this["fromWireType"](s[e >> r])
                    },
                    destructorFunction: null
                })
            }
            var Xe = [];
            var Qe = [{}, {
                value: undefined
            }, {
                value: null
            }, {
                value: true
            }, {
                value: false
            }];
            function Je(e) {
                if (e > 4 && 0 === --Qe[e].refcount) {
                    Qe[e] = undefined;
                    Xe.push(e)
                }
            }
            function et() {
                var e = 0;
                for (var t = 5; t < Qe.length; ++t) {
                    if (Qe[t] !== undefined) {
                        ++e
                    }
                }
                return e
            }
            function tt() {
                for (var e = 5; e < Qe.length; ++e) {
                    if (Qe[e] !== undefined) {
                        return Qe[e]
                    }
                }
                return null
            }
            function nt() {
                i["count_emval_handles"] = et;
                i["get_first_emval"] = tt
            }
            function st(e) {
                switch (e) {
                case undefined:
                    {
                        return 1
                    }
                case null:
                    {
                        return 2
                    }
                case true:
                    {
                        return 3
                    }
                case false:
                    {
                        return 4
                    }
                default:
                    {
                        var t = Xe.length ? Xe.pop() : Qe.length;
                        Qe[t] = {
                            refcount: 1,
                            value: e
                        };
                        return t
                    }
                }
            }
            function it(e) {
                return this["fromWireType"](Z[e >> 2])
            }
            function rt(e, t) {
                t = Fe(t);
                Ke(e, {
                    name: t,
                    fromWireType: function(e) {
                        var t = Qe[e].value;
                        Je(e);
                        return t
                    },
                    toWireType: function(e, t) {
                        return st(t)
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: it,
                    destructorFunction: null
                })
            }
            function at(e) {
                if (e === null) {
                    return "null"
                }
                var t = typeof e;
                if (t === "object" || t === "array" || t === "function") {
                    return e.toString()
                } else {
                    return "" + e
                }
            }
            function ot(e, t) {
                switch (t) {
                case 2:
                    return function(e) {
                        return this["fromWireType"](K[e >> 2])
                    }
                    ;
                case 3:
                    return function(e) {
                        return this["fromWireType"](Y[e >> 3])
                    }
                    ;
                default:
                    throw new TypeError("Unknown float type: " + e)
                }
            }
            function lt(e, t, n) {
                var s = Re(n);
                t = Fe(t);
                Ke(e, {
                    name: t,
                    fromWireType: function(e) {
                        return e
                    },
                    toWireType: function(e, t) {
                        if (typeof t !== "number" && typeof t !== "boolean") {
                            throw new TypeError('Cannot convert "' + at(t) + '" to ' + this.name)
                        }
                        return t
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: ot(t, s),
                    destructorFunction: null
                })
            }
            function ct(e, t) {
                if (!(e instanceof Function)) {
                    throw new TypeError("new_ called with constructor type " + typeof e + " which is not a function")
                }
                var n = Ne(e.name || "unknownFunctionName", (function() {}
                ));
                n.prototype = e.prototype;
                var s = new n;
                var i = e.apply(s, t);
                return i instanceof Object ? i : s
            }
            function ht(e) {
                while (e.length) {
                    var t = e.pop();
                    var n = e.pop();
                    n(t)
                }
            }
            function dt(e, t, n, s, i) {
                var r = t.length;
                if (r < 2) {
                    $e("argTypes array size mismatch! Must at least get return value and 'this' types!")
                }
                var a = t[1] !== null && n !== null;
                var o = false;
                for (var l = 1; l < t.length; ++l) {
                    if (t[l] !== null && t[l].destructorFunction === undefined) {
                        o = true;
                        break
                    }
                }
                var c = t[0].name !== "void";
                var h = "";
                var d = "";
                for (var l = 0; l < r - 2; ++l) {
                    h += (l !== 0 ? ", " : "") + "arg" + l;
                    d += (l !== 0 ? ", " : "") + "arg" + l + "Wired"
                }
                var u = "return function " + Ge(e) + "(" + h + ") {\n" + "if (arguments.length !== " + (r - 2) + ") {\n" + "throwBindingError('function " + e + " called with ' + arguments.length + ' arguments, expected " + (r - 2) + " args!');\n" + "}\n";
                if (o) {
                    u += "var destructors = [];\n"
                }
                var f = o ? "destructors" : "null";
                var p = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"];
                var m = [$e, s, i, ht, t[0], t[1]];
                if (a) {
                    u += "var thisWired = classParam.toWireType(" + f + ", this);\n"
                }
                for (var l = 0; l < r - 2; ++l) {
                    u += "var arg" + l + "Wired = argType" + l + ".toWireType(" + f + ", arg" + l + "); // " + t[l + 2].name + "\n";
                    p.push("argType" + l);
                    m.push(t[l + 2])
                }
                if (a) {
                    d = "thisWired" + (d.length > 0 ? ", " : "") + d
                }
                u += (c ? "var rv = " : "") + "invoker(fn" + (d.length > 0 ? ", " : "") + d + ");\n";
                if (o) {
                    u += "runDestructors(destructors);\n"
                } else {
                    for (var l = a ? 1 : 2; l < t.length; ++l) {
                        var g = l === 1 ? "thisWired" : "arg" + (l - 2) + "Wired";
                        if (t[l].destructorFunction !== null) {
                            u += g + "_dtor(" + g + "); // " + t[l].name + "\n";
                            p.push(g + "_dtor");
                            m.push(t[l].destructorFunction)
                        }
                    }
                }
                if (c) {
                    u += "var ret = retType.fromWireType(rv);\n" + "return ret;\n"
                } else {}
                u += "}\n";
                p.push(u);
                var w = ct(Function, p).apply(null, m);
                return w
            }
            function ut(e, t, n) {
                if (undefined === e[t].overloadTable) {
                    var s = e[t];
                    e[t] = function() {
                        if (!e[t].overloadTable.hasOwnProperty(arguments.length)) {
                            $e("Function '" + n + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + e[t].overloadTable + ")!")
                        }
                        return e[t].overloadTable[arguments.length].apply(this, arguments)
                    }
                    ;
                    e[t].overloadTable = [];
                    e[t].overloadTable[s.argCount] = s
                }
            }
            function ft(e, t, n) {
                if (i.hasOwnProperty(e)) {
                    if (undefined === n || undefined !== i[e].overloadTable && undefined !== i[e].overloadTable[n]) {
                        $e("Cannot register public name '" + e + "' twice")
                    }
                    ut(i, e, e);
                    if (i.hasOwnProperty(n)) {
                        $e("Cannot register multiple overloads of a function with the same number of arguments (" + n + ")!")
                    }
                    i[e].overloadTable[n] = t
                } else {
                    i[e] = t;
                    if (undefined !== n) {
                        i[e].numArguments = n
                    }
                }
            }
            function pt(e, t) {
                var n = [];
                for (var s = 0; s < e; s++) {
                    n.push(q[(t >> 2) + s])
                }
                return n
            }
            function mt(e, t, n) {
                if (!i.hasOwnProperty(e)) {
                    qe("Replacing nonexistant public symbol")
                }
                if (undefined !== i[e].overloadTable && undefined !== n) {
                    i[e].overloadTable[n] = t
                } else {
                    i[e] = t;
                    i[e].argCount = n
                }
            }
            function gt(e, t, n) {
                var s = i["dynCall_" + e];
                return n && n.length ? s.apply(null, [t].concat(n)) : s.call(null, t)
            }
            function wt(e, t, n) {
                if (e.includes("j")) {
                    return gt(e, t, n)
                }
                return J.get(t).apply(null, n)
            }
            function yt(e, t) {
                var n = [];
                return function() {
                    n.length = arguments.length;
                    for (var s = 0; s < arguments.length; s++) {
                        n[s] = arguments[s]
                    }
                    return wt(e, t, n)
                }
            }
            function vt(e, t) {
                e = Fe(e);
                function n() {
                    if (e.includes("j")) {
                        return yt(e, t)
                    }
                    return J.get(t)
                }
                var s = n();
                if (typeof s !== "function") {
                    $e("unknown function pointer with signature " + e + ": " + t)
                }
                return s
            }
            var Ct = undefined;
            function xt(e) {
                var t = pn(e);
                var n = Fe(t);
                gn(t);
                return n
            }
            function kt(e, t) {
                var n = [];
                var s = {};
                function i(e) {
                    if (s[e]) {
                        return
                    }
                    if (ze[e]) {
                        return
                    }
                    if (Oe[e]) {
                        Oe[e].forEach(i);
                        return
                    }
                    n.push(e);
                    s[e] = true
                }
                t.forEach(i);
                throw new Ct(e + ": " + n.map(xt).join([", "]))
            }
            function bt(e, t, n, s, i, r) {
                var a = pt(t, n);
                e = Fe(e);
                i = vt(s, i);
                ft(e, (function() {
                    kt("Cannot call " + e + " due to unbound types", a)
                }
                ), t - 1);
                Ze([], a, (function(n) {
                    var s = [n[0], null].concat(n.slice(1));
                    mt(e, dt(e, s, null, i, r), t - 1);
                    return []
                }
                ))
            }
            function It(e, t, n) {
                switch (t) {
                case 0:
                    return n ? function e(t) {
                        return H[t]
                    }
                    : function e(t) {
                        return j[t]
                    }
                    ;
                case 1:
                    return n ? function e(t) {
                        return $[t >> 1]
                    }
                    : function e(t) {
                        return V[t >> 1]
                    }
                    ;
                case 2:
                    return n ? function e(t) {
                        return q[t >> 2]
                    }
                    : function e(t) {
                        return Z[t >> 2]
                    }
                    ;
                default:
                    throw new TypeError("Unknown integer type: " + e)
                }
            }
            function Tt(e, t, n, s, i) {
                t = Fe(t);
                if (i === -1) {
                    i = 4294967295
                }
                var r = Re(n);
                var a = function(e) {
                    return e
                };
                if (s === 0) {
                    var o = 32 - 8 * n;
                    a = function(e) {
                        return e << o >>> o
                    }
                }
                var l = t.includes("unsigned");
                Ke(e, {
                    name: t,
                    fromWireType: a,
                    toWireType: function(e, n) {
                        if (typeof n !== "number" && typeof n !== "boolean") {
                            throw new TypeError('Cannot convert "' + at(n) + '" to ' + this.name)
                        }
                        if (n < s || n > i) {
                            throw new TypeError('Passing a number "' + at(n) + '" from JS side to C/C++ side to an argument of type "' + t + '", which is outside the valid range [' + s + ", " + i + "]!")
                        }
                        return l ? n >>> 0 : n | 0
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: It(t, r, s !== 0),
                    destructorFunction: null
                })
            }
            function St(e, t, n) {
                var s = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
                var i = s[t];
                function r(e) {
                    e = e >> 2;
                    var t = Z;
                    var n = t[e];
                    var s = t[e + 1];
                    return new i(N,s,n)
                }
                n = Fe(n);
                Ke(e, {
                    name: n,
                    fromWireType: r,
                    argPackAdvance: 8,
                    readValueFromPointer: r
                }, {
                    ignoreDuplicateRegistrations: true
                })
            }
            function Ut(e, t) {
                t = Fe(t);
                var n = t === "std::string";
                Ke(e, {
                    name: t,
                    fromWireType: function(e) {
                        var t = Z[e >> 2];
                        var s;
                        if (n) {
                            var i = e + 4;
                            for (var r = 0; r <= t; ++r) {
                                var a = e + 4 + r;
                                if (r == t || j[a] == 0) {
                                    var o = a - i;
                                    var l = A(i, o);
                                    if (s === undefined) {
                                        s = l
                                    } else {
                                        s += String.fromCharCode(0);
                                        s += l
                                    }
                                    i = a + 1
                                }
                            }
                        } else {
                            var c = new Array(t);
                            for (var r = 0; r < t; ++r) {
                                c[r] = String.fromCharCode(j[e + 4 + r])
                            }
                            s = c.join("")
                        }
                        gn(e);
                        return s
                    },
                    toWireType: function(e, t) {
                        if (t instanceof ArrayBuffer) {
                            t = new Uint8Array(t)
                        }
                        var s;
                        var i = typeof t === "string";
                        if (!(i || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int8Array)) {
                            $e("Cannot pass non-string to std::string")
                        }
                        if (n && i) {
                            s = function() {
                                return _(t)
                            }
                        } else {
                            s = function() {
                                return t.length
                            }
                        }
                        var r = s();
                        var a = un(4 + r + 1);
                        Z[a >> 2] = r;
                        if (n && i) {
                            D(t, a + 4, r + 1)
                        } else {
                            if (i) {
                                for (var o = 0; o < r; ++o) {
                                    var l = t.charCodeAt(o);
                                    if (l > 255) {
                                        gn(a);
                                        $e("String has UTF-16 code units that do not fit in 8 bits")
                                    }
                                    j[a + 4 + o] = l
                                }
                            } else {
                                for (var o = 0; o < r; ++o) {
                                    j[a + 4 + o] = t[o]
                                }
                            }
                        }
                        if (e !== null) {
                            e.push(gn, a)
                        }
                        return a
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: it,
                    destructorFunction: function(e) {
                        gn(e)
                    }
                })
            }
            function Pt(e, t, n) {
                n = Fe(n);
                var s, i, r, a, o;
                if (t === 2) {
                    s = W;
                    i = z;
                    a = O;
                    r = function() {
                        return V
                    }
                    ;
                    o = 1
                } else if (t === 4) {
                    s = B;
                    i = L;
                    a = G;
                    r = function() {
                        return Z
                    }
                    ;
                    o = 2
                }
                Ke(e, {
                    name: n,
                    fromWireType: function(e) {
                        var n = Z[e >> 2];
                        var i = r();
                        var a;
                        var l = e + 4;
                        for (var c = 0; c <= n; ++c) {
                            var h = e + 4 + c * t;
                            if (c == n || i[h >> o] == 0) {
                                var d = h - l;
                                var u = s(l, d);
                                if (a === undefined) {
                                    a = u
                                } else {
                                    a += String.fromCharCode(0);
                                    a += u
                                }
                                l = h + t
                            }
                        }
                        gn(e);
                        return a
                    },
                    toWireType: function(e, s) {
                        if (!(typeof s === "string")) {
                            $e("Cannot pass non-string to C++ string type " + n)
                        }
                        var r = a(s);
                        var l = un(4 + r + t);
                        Z[l >> 2] = r >> o;
                        i(s, l + 4, r + t);
                        if (e !== null) {
                            e.push(gn, l)
                        }
                        return l
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: it,
                    destructorFunction: function(e) {
                        gn(e)
                    }
                })
            }
            function Mt(e, t) {
                t = Fe(t);
                Ke(e, {
                    isVoid: true,
                    name: t,
                    argPackAdvance: 0,
                    fromWireType: function() {
                        return undefined
                    },
                    toWireType: function(e, t) {
                        return undefined
                    }
                })
            }
            function Et(e) {
                if (!e) {
                    $e("Cannot use deleted val. handle = " + e)
                }
                return Qe[e].value
            }
            function At(e, t) {
                var n = ze[e];
                if (undefined === n) {
                    $e(t + " has unknown type " + xt(e))
                }
                return n
            }
            function Rt(e, t, n) {
                e = Et(e);
                t = At(t, "emval::as");
                var s = [];
                var i = st(s);
                q[n >> 2] = i;
                return t["toWireType"](s, e)
            }
            function Dt(e, t) {
                var n = new Array(e);
                for (var s = 0; s < e; ++s) {
                    n[s] = At(q[(t >> 2) + s], "parameter " + s)
                }
                return n
            }
            function _t(e, t, n, s) {
                e = Et(e);
                var i = Dt(t, n);
                var r = new Array(t);
                for (var a = 0; a < t; ++a) {
                    var o = i[a];
                    r[a] = o["readValueFromPointer"](s);
                    s += o["argPackAdvance"]
                }
                var l = e.apply(undefined, r);
                return st(l)
            }
            function Ft(e) {
                var t = [];
                q[e >> 2] = st(t);
                return t
            }
            var Wt = {};
            function zt(e) {
                var t = Wt[e];
                if (t === undefined) {
                    return Fe(e)
                } else {
                    return t
                }
            }
            var Ot = [];
            function Bt(e, t, n, s, i) {
                e = Ot[e];
                t = Et(t);
                n = zt(n);
                return e(t, n, Ft(s), i)
            }
            function Lt(e, t, n, s) {
                e = Ot[e];
                t = Et(t);
                n = zt(n);
                e(t, n, null, s)
            }
            function Gt() {
                if (typeof globalThis === "object") {
                    return globalThis
                }
                return function() {
                    return Function
                }()("return this")()
            }
            function Nt(e) {
                if (e === 0) {
                    return st(Gt())
                } else {
                    e = zt(e);
                    return st(Gt()[e])
                }
            }
            function Ht(e) {
                var t = Ot.length;
                Ot.push(e);
                return t
            }
            function jt(e, t) {
                var n = Dt(e, t);
                var s = n[0];
                var i = s.name + "_$" + n.slice(1).map((function(e) {
                    return e.name
                }
                )).join("_") + "$";
                var r = ["retType"];
                var a = [s];
                var o = "";
                for (var l = 0; l < e - 1; ++l) {
                    o += (l !== 0 ? ", " : "") + "arg" + l;
                    r.push("argType" + l);
                    a.push(n[1 + l])
                }
                var c = Ge("methodCaller_" + i);
                var h = "return function " + c + "(handle, name, destructors, args) {\n";
                var d = 0;
                for (var l = 0; l < e - 1; ++l) {
                    h += "    var arg" + l + " = argType" + l + ".readValueFromPointer(args" + (d ? "+" + d : "") + ");\n";
                    d += n[l + 1]["argPackAdvance"]
                }
                h += "    var rv = handle[name](" + o + ");\n";
                for (var l = 0; l < e - 1; ++l) {
                    if (n[l + 1]["deleteObject"]) {
                        h += "    argType" + l + ".deleteObject(arg" + l + ");\n"
                    }
                }
                if (!s.isVoid) {
                    h += "    return retType.toWireType(destructors, rv);\n"
                }
                h += "};\n";
                r.push(h);
                var u = ct(Function, r).apply(null, a);
                return Ht(u)
            }
            function $t(e) {
                e = zt(e);
                return st(i[e])
            }
            function Vt(e, t) {
                e = Et(e);
                t = Et(t);
                return st(e[t])
            }
            function qt(e) {
                if (e > 4) {
                    Qe[e].refcount += 1
                }
            }
            function Zt(e, t) {
                e = Et(e);
                t = Et(t);
                return e instanceof t
            }
            function Kt(e) {
                var t = "";
                for (var n = 0; n < e; ++n) {
                    t += (n !== 0 ? ", " : "") + "arg" + n
                }
                var s = "return function emval_allocator_" + e + "(constructor, argTypes, args) {\n";
                for (var n = 0; n < e; ++n) {
                    s += "var argType" + n + " = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + " + n + '], "parameter ' + n + '");\n' + "var arg" + n + " = argType" + n + ".readValueFromPointer(args);\n" + "args += argType" + n + "['argPackAdvance'];\n"
                }
                s += "var obj = new constructor(" + t + ");\n" + "return __emval_register(obj);\n" + "}\n";
                return new Function("requireRegisteredType","Module","__emval_register",s)(At, i, st)
            }
            var Yt = {};
            function Xt(e, t, n, s) {
                e = Et(e);
                var i = Yt[t];
                if (!i) {
                    i = Kt(t);
                    Yt[t] = i
                }
                return i(e, n, s)
            }
            function Qt() {
                return st([])
            }
            function Jt(e) {
                return st(zt(e))
            }
            function en() {
                return st({})
            }
            function tn(e) {
                var t = Qe[e].value;
                ht(t);
                Je(e)
            }
            function nn(e, t, n) {
                e = Et(e);
                t = Et(t);
                n = Et(n);
                e[t] = n
            }
            function sn(e, t) {
                e = At(e, "_emval_take_value");
                var n = e["readValueFromPointer"](t);
                return st(n)
            }
            function rn(e) {
                e = Et(e);
                return st(typeof e)
            }
            function an() {
                xe()
            }
            function on(e) {
                xe("OOM")
            }
            function ln(e) {
                var t = j.length;
                e = e >>> 0;
                on(e)
            }
            De();
            je = i["BindingError"] = He(Error, "BindingError");
            Ve = i["InternalError"] = He(Error, "InternalError");
            nt();
            Ct = i["UnboundTypeError"] = He(Error, "UnboundTypeError");
            var cn = {
                t: Ae,
                w: Ye,
                v: rt,
                o: lt,
                l: bt,
                d: Tt,
                c: St,
                p: Ut,
                j: Pt,
                x: Mt,
                g: Rt,
                D: _t,
                b: Bt,
                f: Lt,
                m: Je,
                y: Nt,
                a: jt,
                r: $t,
                i: Vt,
                h: qt,
                q: Zt,
                s: Xt,
                C: Qt,
                z: Jt,
                E: en,
                A: tn,
                e: nn,
                k: sn,
                B: rn,
                n: an,
                u: ln
            };
            var hn = Pe();
            var dn = i["___wasm_call_ctors"] = function() {
                return (dn = i["___wasm_call_ctors"] = i["asm"]["G"]).apply(null, arguments)
            }
            ;
            var un = i["_malloc"] = function() {
                return (un = i["_malloc"] = i["asm"]["H"]).apply(null, arguments)
            }
            ;
            var fn = i["_main"] = function() {
                return (fn = i["_main"] = i["asm"]["I"]).apply(null, arguments)
            }
            ;
            var pn = i["___getTypeName"] = function() {
                return (pn = i["___getTypeName"] = i["asm"]["K"]).apply(null, arguments)
            }
            ;
            var mn = i["___embind_register_native_and_builtin_types"] = function() {
                return (mn = i["___embind_register_native_and_builtin_types"] = i["asm"]["L"]).apply(null, arguments)
            }
            ;
            var gn = i["_free"] = function() {
                return (gn = i["_free"] = i["asm"]["M"]).apply(null, arguments)
            }
            ;
            var wn;
            function yn(e) {
                this.name = "ExitStatus";
                this.message = "Program terminated with exit(" + e + ")";
                this.status = e
            }
            var vn = false;
            ye = function e() {
                if (!wn)
                    xn();
                if (!wn)
                    ye = e
            }
            ;
            function Cn(e) {
                var t = i["_main"];
                var n = 0;
                var s = 0;
                try {
                    var r = t(n, s);
                    kn(r, true);
                    return r
                } catch (e) {
                    return Ee(e)
                } finally {
                    vn = true
                }
            }
            function xn(e) {
                e = e || o;
                if (ge > 0) {
                    return
                }
                le();
                if (ge > 0) {
                    return
                }
                function t() {
                    if (wn)
                        return;
                    wn = true;
                    i["calledRun"] = true;
                    if (S)
                        return;
                    ce();
                    he();
                    if (i["onRuntimeInitialized"])
                        i["onRuntimeInitialized"]();
                    if (In)
                        Cn(e);
                    ue()
                }
                if (i["setStatus"]) {
                    i["setStatus"]("Running...");
                    setTimeout((function() {
                        setTimeout((function() {
                            i["setStatus"]("")
                        }
                        ), 1);
                        t()
                    }
                    ), 1)
                } else {
                    t()
                }
            }
            i["run"] = xn;
            function kn(e, t) {
                U = e;
                if (oe()) {} else {
                    de()
                }
                bn(e)
            }
            function bn(e) {
                U = e;
                if (!oe()) {
                    if (i["onExit"])
                        i["onExit"](e);
                    S = true
                }
                c(e, new yn(e))
            }
            if (i["preInit"]) {
                if (typeof i["preInit"] == "function")
                    i["preInit"] = [i["preInit"]];
                while (i["preInit"].length > 0) {
                    i["preInit"].pop()()
                }
            }
            var In = true;
            if (i["noInitialRun"])
                In = false;
            xn();
            e.exports = i
        }
        ,
        114: e => {
            e.exports = "build/resources/img/rainbow.png"
        }
        ,
        45: e => {
            e.exports = "build/resources/img/shield.png"
        }
        ,
        301: () => {}
        ,
        800: () => {}
    };
    var t = {};
    function n(s) {
        var i = t[s];
        if (i !== undefined) {
            return i.exports
        }
        var r = t[s] = {
            id: s,
            loaded: false,
            exports: {}
        };
        e[s].call(r.exports, r, r.exports, n);
        r.loaded = true;
        return r.exports
    }
    n.m = e;
    ( () => {
        var e = [];
        n.O = (t, s, i, r) => {
            if (s) {
                r = r || 0;
                for (var a = e.length; a > 0 && e[a - 1][2] > r; a--)
                    e[a] = e[a - 1];
                e[a] = [s, i, r];
                return
            }
            var o = Infinity;
            for (var a = 0; a < e.length; a++) {
                var [s,i,r] = e[a];
                var l = true;
                for (var c = 0; c < s.length; c++) {
                    if ((r & 1 === 0 || o >= r) && Object.keys(n.O).every((e => n.O[e](s[c])))) {
                        s.splice(c--, 1)
                    } else {
                        l = false;
                        if (r < o)
                            o = r
                    }
                }
                if (l) {
                    e.splice(a--, 1);
                    var h = i();
                    if (h !== undefined)
                        t = h
                }
            }
            return t
        }
    }
    )();
    ( () => {
        n.n = e => {
            var t = e && e.__esModule ? () => e["default"] : () => e;
            n.d(t, {
                a: t
            });
            return t
        }
    }
    )();
    ( () => {
        n.d = (e, t) => {
            for (var s in t) {
                if (n.o(t, s) && !n.o(e, s)) {
                    Object.defineProperty(e, s, {
                        enumerable: true,
                        get: t[s]
                    })
                }
            }
        }
    }
    )();
    ( () => {
        n.g = function() {
            if (typeof globalThis === "object")
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if (typeof window === "object")
                    return window
            }
        }()
    }
    )();
    ( () => {
        n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)
    }
    )();
    ( () => {
        n.r = e => {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                })
            }
            Object.defineProperty(e, "__esModule", {
                value: true
            })
        }
    }
    )();
    ( () => {
        n.nmd = e => {
            e.paths = [];
            if (!e.children)
                e.children = [];
            return e
        }
    }
    )();
    ( () => {
        var e = {
            516: 0
        };
        n.O.j = t => e[t] === 0;
        var t = (t, s) => {
            var [i,r,a] = s;
            var o, l, c = 0;
            if (i.some((t => e[t] !== 0))) {
                for (o in r) {
                    if (n.o(r, o)) {
                        n.m[o] = r[o]
                    }
                }
                if (a)
                    var h = a(n)
            }
            if (t)
                t(s);
            for (; c < i.length; c++) {
                l = i[c];
                if (n.o(e, l) && e[l]) {
                    e[l][0]()
                }
                e[l] = 0
            }
            return n.O(h)
        }
        ;
        var s = self["webpackChunksenpaio_engine"] = self["webpackChunksenpaio_engine"] || [];
        s.forEach(t.bind(null, 0));
        s.push = t.bind(null, s.push.bind(s))
    }
    )();
    var s = n.O(undefined, [216], ( () => n(797)));
    s = n.O(s)
}
)();
