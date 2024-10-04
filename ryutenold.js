(()=>{
    var t, _, e, s, i = {
        835: (t,_,e)=>{
            "use strict";
            class s {
                constructor(t, _, e) {
                    this._7237 = t,
                    this._6614 = _,
                    this._1773 = e
                }
                _7472(t) {
                    return this._7237 === t
                }
                _7369(t) {
                    this._7237.apply(this._1773, t)
                }
            }
            const i = class {
                constructor() {
                    this._6967 = new Map
                }
                _6206(t, _, e=null) {
                    const i = new s(_,!1,e);
                    (this._6967.get(t) || this._9445(t)).add(i)
                }
                _6614(t, _, e=null) {
                    const i = new s(_,!0,e);
                    (this._6967.get(t) || this._9445(t)).add(i)
                }
                _5685(t, _) {
                    const e = this._6967.get(t);
                    if (void 0 !== e)
                        for (const s of e)
                            if (s._7472(_)) {
                                1 === e.size ? this._6967.delete(t) : e.delete(s);
                                break
                            }
                }
                _9445(t) {
                    const _ = new Set;
                    return this._6967.set(t, _),
                    _
                }
                _9199(t, _=[]) {
                    const e = this._6967.get(t);
                    if (void 0 !== e)
                        for (const s of e)
                            s._7369(_),
                            s._6614 && (1 === e.size ? this._6967.delete(t) : e.delete(s))
                }
            }
              , n = new class {
                constructor() {
                    this._8276 = 0
                }
                _2081() {
                    this._8276 = performance.now()
                }
                get _1398() {
                    return performance.now()
                }
            }
              , o = new class {
                constructor() {
                    this._3443 = new Set,
                    this._1885 = {
                        _2091: new Set,
                        _8762: new Set
                    }
                }
                _8973(t) {
                    this._3443.add(t)
                }
                _9146(t) {
                    this._3443.delete(t)
                }
                _3153(t) {
                    this._1885._2091.add(t)
                }
                _4428(t) {
                    this._1885._8762.add(t)
                }
                _3682() {
                    const t = this._1885._2091;
                    this._1885._2091 = new Set;
                    for (const _ of t)
                        _()
                }
                _1360() {
                    for (const t of this._3443)
                        t._5987();
                    this._3443.clear();
                    const t = this._1885._8762;
                    this._1885._8762 = new Set;
                    for (const _ of t)
                        _()
                }
            }
              , r = class {
                constructor(t) {
                    this._5635 = t,
                    this._1781 = {
                        _5764: new Set,
                        _8282: new Set,
                        _9437: new Set
                    },
                    this._2127 = {
                        _5764: new Map,
                        _9603: new Map
                    },
                    this._6462 = {
                        _5764: "",
                        _8282: ""
                    },
                    this._7713 = !1
                }
                get _8684() {
                    return this._5635
                }
                _5599() {
                    const t = this._1781._8282.size > 0 || this._1781._9437.size > 0
                      , _ = this._2127._9603.size > 0
                      , e = this._6462._5764 !== this._6462._8282
                      , s = t || _ || e;
                    s !== this._7713 && (s ? o._8973(this) : o._9146(this),
                    this._7713 = s)
                }
                set _4667(t) {
                    this._6462._8282 = t,
                    this._5599()
                }
                get _4667() {
                    return this._6462._8282
                }
                _4438(t) {
                    this._1781._9437.delete(t) || (this._1781._5764.has(t) || this._1781._8282.add(t),
                    this._5599())
                }
                _4652(t) {
                    this._1781._8282.delete(t) || (this._1781._5764.has(t) && this._1781._9437.add(t),
                    this._5599())
                }
                _1759(t) {
                    return !!this._1781._8282.has(t) || !this._1781._9437.has(t) && this._1781._5764.has(t)
                }
                _9596(t, _) {
                    this._2127._5764.get(t) === _ ? this._2127._9603.delete(t) : this._2127._9603.set(t, _),
                    this._5599()
                }
                _6988(t) {
                    return this._2127._9603.get(t) || this._2127._5764.get(t) || ""
                }
                _5987() {
                    for (const t of this._1781._8282)
                        this._5635.classList.add(t),
                        this._1781._5764.add(t);
                    for (const t of this._1781._9437)
                        this._5635.classList.remove(t),
                        this._1781._5764.delete(t);
                    this._1781._8282.clear(),
                    this._1781._9437.clear();
                    for (const [t,_] of this._2127._9603)
                        this._5635.style.setProperty(t, _),
                        this._2127._5764.set(t, _);
                    this._2127._9603.clear(),
                    this._6462._5764 !== this._6462._8282 && (this._5635.innerText = this._6462._8282,
                    this._6462._5764 = this._6462._8282),
                    this._7713 = !1
                }
                static _6246(t) {
                    const _ = new this(t);
                    for (const e of t.classList)
                        _._1781._5764.add(e);
                    for (let e = 0; Object.prototype.hasOwnProperty.call(t, e) && e < 100; e++) {
                        const s = t.style[e]
                          , i = t.style.getPropertyValue(s);
                        _._2127._5764.set(s, i)
                    }
                    return 0 === t.children.length && null !== t.innerText && (_._6462._5764 = t.innerText,
                    _._6462._8282 = t.innerText),
                    _
                }
            }
              , h = class extends i {
                constructor(t) {
                    super();
                    const _ = document.getElementById(t);
                    this._6255 = t,
                    this._9843 = r._6246(_),
                    this._9207 = !1,
                    this._8262 = null,
                    this._6730 = 0,
                    this._9843._9596("transition", "transform 200ms, opacity 200ms")
                }
                get _8001() {
                    return this._6255
                }
                get _3235() {
                    return this._9207
                }
                _9718() {
                    null !== this._8262 && this._8262(),
                    this._9199("transition")
                }
                _8506() {
                    this._3235 || (this._9207 = !0,
                    this._8262 = ()=>{
                        this._9843._9596("opacity", "0"),
                        this._9843._9596("transform", "perspective(100px) translateZ(-50px)"),
                        this._9843._9596("z-index", "1"),
                        this._9843._9596("display", "flex"),
                        this._8262 = ()=>{
                            this._9843._9596("opacity", "1"),
                            this._9843._9596("transform", "perspective(100px) translateZ(0px)"),
                            this._6730 = n._8276,
                            this._8262 = ()=>{
                                n._8276 - this._6730 >= 200 && (this._8262 = null,
                                this._9199("visible"))
                            }
                        }
                    }
                    ,
                    this._9199("show"))
                }
                _7486() {
                    this._3235 && (this._9207 = !1,
                    this._8262 = ()=>{
                        this._9843._9596("opacity", "1"),
                        this._9843._9596("transform", "perspective(100px) translateZ(0px)"),
                        this._9843._9596("z-index", "2"),
                        this._9843._9596("display", "flex"),
                        this._8262 = ()=>{
                            this._9843._9596("opacity", "0"),
                            this._9843._9596("transform", "perspective(100px) translateZ(25px)"),
                            this._6730 = n._8276,
                            this._8262 = ()=>{
                                n._8276 - this._6730 >= 200 && (this._9843._9596("display", "none"),
                                this._8262 = null,
                                this._9199("invisible"))
                            }
                        }
                    }
                    ,
                    this._9199("hide"))
                }
            }
              , a = new class {
                constructor() {
                    this._8611 = new Audio("assets/sfx/button-hover-1.wav"),
                    this._6414 = new Audio("assets/sfx/button-click-1.wav"),
                    this._2957 = new Audio("assets/sfx/button-disabled-1.wav"),
                    this._6538 = new Audio("assets/sfx/button-change-1.wav"),
                    this._9255 = new Audio("assets/sfx/notification-1.wav"),
                    this._1952 = new Audio("assets/sfx/alert-1.wav"),
                    this._7189 = !1
                }
                _1489() {
                    window.addEventListener("click", (()=>{
                        this._7189 = !0
                    }
                    ), {
                        once: !0
                    })
                }
                _8375(t) {
                    this._7189 ? (t.currentTime = 0,
                    t.play().catch(console.error)) : console.log("[SFX] User hasn't interacted yet. Skipping playback...")
                }
            }
            ;
            var c = e(182);
            const l = new class {
                constructor() {
                    this._5665 = null,
                    this._3630 = new Set
                    this._9736("XOR", "Client injected.")
                }
                _1489() {
                    this._5665 = document.getElementById("notifications")
                }
                _9736(t, _, e=5e3) {
                    const s = new class {
                        constructor(t, _, e, s) {
                            const i = document.createElement("div");
                            i.classList.add("notification");
                            const n = document.createElement("div");
                            n.classList.add("notification-header"),
                            i.appendChild(n);
                            const o = document.createElement("i");
                            o.classList.add("notification-icon", "iconfont", "iconfont-" + t),
                            n.appendChild(o);
                            const h = document.createElement("div");
                            h.classList.add("notification-title"),
                            h.textContent = _,
                            n.appendChild(h);
                            const a = document.createElement("div");
                            a.classList.add("notification-content"),
                            a.textContent = e,
                            i.appendChild(a),
                            this._9843 = r._6246(i),
                            this._7217 = r._6246(h),
                            this._6732 = r._6246(a),
                            this._9659 = s,
                            this._9997 = !1
                        }
                        get _8684() {
                            return this._9843._8684
                        }
                        get _5384() {
                            return this._9659
                        }
                        get _2150() {
                            return this._9997
                        }
                        _9902(t) {
                            this._7217._4667 = t
                        }
                        _9072(t) {
                            this._6732._4667 = t
                        }
                        _8506() {
                            this._9843._9596("opacity", "1"),
                            this._9843._9596("transform", "translate(0%)")
                        }
                        _7486() {
                            this._9843._9596("opacity", "0"),
                            this._9843._9596("transform", "translate(-100%)")
                        }
                        _1928() {
                            this._9997 = !0
                        }
                    }
                    ("info-fa-white",t,_,e);
                    this._2100(s)
                }
                _2100(t) {
                    t._2150 ? console.warn("Notification has been previously removed.") : this._3630.has(t) ? console.warn("Notification already in use.") : (this._3630.add(t),
                    a._8375(a._6414),
                    o._4428((()=>{
                        t._2150 || (this._5665.appendChild(t._8684),
                        t._5384 > 0 && setTimeout(this._9437.bind(this, t), t._5384),
                        o._3153((()=>{
                            t._2150 || t._8506()
                        }
                        )))
                    }
                    )))
                }
                _9437(t) {
                    t._2150 ? console.warn("Notification has already been removed.") : this._3630.has(t) ? (t._1928(),
                    t._7486(),
                    this._3630.delete(t),
                    setTimeout((()=>{
                        o._4428((()=>{
                            this._5665.removeChild(t._8684)
                        }
                        ))
                    }
                    ), 500)) : console.warn("Notification hasn't been added yet.")
                }
            }
              , u = new class {
                constructor() {
                    this._3630 = [["rgb(252, 201, 113)", "#000000"], ["rgb(181, 27, 0)", "#ffffff"], ["rgb(70, 145, 80)", "#ffffff"], ["rgb(119, 70, 145)", "#ffffff"], ["rgb(255, 181, 253)", "#000000"], ["rgb(187, 250, 246)", "#000000"], ["rgb(252, 153, 66)", "#000000"], ["rgb(248, 250, 112)", "#000000"], ["rgb(222, 222, 222)", "#000000"], ["rgb(177, 252, 186)", "#000000"], ["rgb(177, 252, 186)", "#000000"], ["rgb(104, 107, 156)", "#ffffff"], ["rgb(122, 64, 73)", "#ffffff"]],
                    this._3630.sort((()=>Math.random() - .5)),
                    this._2864 = Math.floor(this._3630.length * Math.random()),
                    this._8043 = new Map
                }
                _4287(t) {
                    let _ = this._8043.get(t);
                    return void 0 === _ && (_ = this._3630[this._2864++ % this._3630.length],
                    this._8043.set(t, _)),
                    _
                }
            }
            ;
            class d {
                constructor(t, _, e, s, i, n) {
                    this._8001 = t,
                    this._6216 = _,
                    this._4663 = e,
                    this._5512 = s,
                    this._4185 = i,
                    this._2434 = n[0],
                    this._8623 = new Map,
                    this._3195 = !1,
                    this._8921 = u._4287(e)
                }
            }
            const m = new d(-1,"","","",0,["", 0])
              , f = d
              , p = class {
                constructor(t=0, _=0) {
                    this._4526 = t,
                    this._6966 = _
                }
                _8093(t, _) {
                    this._4526 = t,
                    this._6966 = _
                }
            }
            ;
            class g {
                constructor(t=255, _=255, e=255) {
                    this._3712 = t,
                    this._4866 = _,
                    this._8040 = e
                }
                _9734(t) {
                    this._3712 = t._3712,
                    this._4866 = t._4866,
                    this._8040 = t._8040
                }
                _2081(t, _, e) {
                    this._3712 = t,
                    this._4866 = _,
                    this._8040 = e
                }
                get _9458() {
                    return this._3712 << 16 | this._4866 << 8 | this._8040
                }
                get _5936() {
                    return `#${(16777216 | this._9458).toString(16).substring(1)}`
                }
                get _9065() {
                    return `rgb(${this._3712},${this._4866},${this._8040})`
                }
            }
            const E = new g
              , y = g;
            class w {
                constructor(t, _, e) {
                    this._8001 = t,
                    this._2993 = m,
                    this._3891 = -1,
                    this._7614 = _,
                    this._2371 = e,
                    this._1420 = new Map
                }
            }
            const v = new w(-1,E,"")
              , b = w;
            var C;
            !function(t) {
                t[t._2978 = 1] = "_2978",
                t[t._1223 = 2] = "_1223",
                t[t._4509 = 3] = "_4509",
                t[t._4244 = 4] = "_4244",
                t[t._7825 = 5] = "_7825"
            }(C || (C = {}));
            const A = C;
            class S extends i {
                constructor(t) {
                    super(),
                    this._7478 = t._7478,
                    this._9111 = t._9111,
                    this._5301 = t._5301,
                    this._3003 = t._3003,
                    this._6250 = t._6250,
                    this._8169 = t._8042,
                    this._8158 = t._8158
                }
                _2230() {
                    return this._8169
                }
                _9917(t) {
                    this._8169 !== t && (this._8158(t) ? (this._8169 = t,
                    this._9199("change", [t])) : console.warn(`[Setting] > ${this._7478}: value validation failed. Recieved value:`, t))
                }
            }
            class T extends S {
                constructor(t) {
                    super({
                        _7478: t._7478,
                        _9111: t._9111,
                        _5301: t._5301,
                        _3003: t._3003 || !1,
                        _6250: t._6250 || [],
                        _8042: t._8042,
                        _8158: t._8158 || T._1922
                    })
                }
            }
            T._1922 = t=>!0 === t || !1 === t;
            class I extends S {
                constructor(t) {
                    super({
                        _7478: t._7478,
                        _9111: t._9111,
                        _5301: t._5301,
                        _3003: t._3003 || !1,
                        _6250: t._6250 || [],
                        _8042: t._8042,
                        _8158: t._8158 || (_=>I._1922(t._8265, t._1479, _))
                    }),
                    this._8265 = t._8265,
                    this._1479 = t._1479,
                    this._3231 = t._3231,
                    this._2581 = t._2581 || I._3769
                }
            }
            I._1922 = (t,_,e)=>{
                const s = Math.min(_, t)
                  , i = Math.max(_, t);
                return "number" == typeof e && e >= s && e <= i
            }
            ,
            I._3769 = t=>t.toString();
            class O extends S {
                constructor(t) {
                    super({
                        _7478: t._7478,
                        _9111: t._9111,
                        _5301: t._5301,
                        _3003: t._3003 || !1,
                        _6250: t._6250 || [],
                        _8042: t._8042,
                        _8158: t._8158 || (_=>O._1922(t._9071, _))
                    }),
                    this._9071 = t._9071
                }
            }
            O._1922 = (t,_)=>"string" == typeof _ && t.includes(_);
            class L extends S {
                constructor(t) {
                    super({
                        _7478: t._7478,
                        _9111: t._9111,
                        _5301: t._5301,
                        _3003: t._3003 || !1,
                        _6250: t._6250 || [],
                        _8042: t._8042,
                        _8158: t._8158 || (_=>L._1922(t._2287 || 0, _))
                    }),
                    this._2287 = t._2287 || 0
                }
            }
            L._1922 = (t,_)=>"string" == typeof _ && (0 === t || _.length <= t);
            class P extends S {
                constructor(t) {
                    super({
                        _7478: t._7478,
                        _9111: t._9111,
                        _5301: t._5301,
                        _3003: t._3003 || !1,
                        _6250: t._6250 || [],
                        _8042: (t._9101 || 0) << 24 | t._7614,
                        _8158: t._8158 || P._1922
                    }),
                    this._5409 = void 0 !== t._9101
                }
            }
            P._1922 = t=>"number" == typeof t;
            class N extends S {
                constructor(t) {
                    super({
                        _7478: t._7478,
                        _9111: t._9111,
                        _5301: t._5301,
                        _3003: t._3003 || !1,
                        _6250: t._6250 || [],
                        _8042: t._8042,
                        _8158: t._8158 || N._1922
                    }),
                    this._3360 = t._3360 || 1
                }
            }
            N._1922 = t=>Array.isArray(t) && 2 === t.length && "string" == typeof t[0] && "string" == typeof t[1];
            const M = {
                QUICK_CHAT_1_MESSAGE: new L({
                    _7478: "Quick chat 1 message",
                    _9111: "Quick chat 1 message.",
                    _5301: ["Chat", "Quick chat"],
                    _8042: "Feed me!",
                    _2287: 80
                }),
                QUICK_CHAT_2_MESSAGE: new L({
                    _7478: "Quick chat 2 message",
                    _9111: "Quick chat 2 message.",
                    _5301: ["Chat", "Quick chat"],
                    _8042: "Split into me!",
                    _2287: 80
                }),
                QUICK_CHAT_3_MESSAGE: new L({
                    _7478: "Quick chat 3 message",
                    _9111: "Quick chat 3 message.",
                    _5301: ["Chat", "Quick chat"],
                    _8042: "Need backup!",
                    _2287: 80
                }),
                QUICK_CHAT_4_MESSAGE: new L({
                    _7478: "Quick chat 4 message",
                    _9111: "Quick chat 4 message.",
                    _5301: ["Chat", "Quick chat"],
                    _8042: "Enemy spotted!",
                    _2287: 80
                }),
                QUICK_CHAT_5_MESSAGE: new L({
                    _7478: "Quick chat 5 message",
                    _9111: "Quick chat 5 message.",
                    _5301: ["Chat", "Quick chat"],
                    _8042: "Need a teammate!",
                    _2287: 80
                }),
                QUICK_CHAT_6_MESSAGE: new L({
                    _7478: "Quick chat 6 message",
                    _9111: "Quick chat 6 message.",
                    _5301: ["Chat", "Quick chat"],
                    _8042: "",
                    _2287: 80
                }),
                QUICK_CHAT_7_MESSAGE: new L({
                    _7478: "Quick chat 7 message",
                    _9111: "Quick chat 7 message.",
                    _5301: ["Chat", "Quick chat"],
                    _8042: "",
                    _2287: 80
                }),
                QUICK_CHAT_8_MESSAGE: new L({
                    _7478: "Quick chat 8 message",
                    _9111: "Quick chat 8 message.",
                    _5301: ["Chat", "Quick chat"],
                    _8042: "",
                    _2287: 80
                }),
                QUICK_CHAT_9_MESSAGE: new L({
                    _7478: "Quick chat 9 message",
                    _9111: "Quick chat 9 message.",
                    _5301: ["Chat", "Quick chat"],
                    _8042: "",
                    _2287: 80
                }),
                QUICK_CHAT_10_MESSAGE: new L({
                    _7478: "Quick chat 10 message",
                    _9111: "Quick chat 10 message.",
                    _5301: ["Chat", "Quick chat"],
                    _8042: "",
                    _2287: 80
                })
            }
              , R = {
                HK_SELECT_PLAYER_FOR_SPECTATING: new N({
                    _7478: "Select player to spectate",
                    _9111: "Select a player to spectate.",
                    _5301: ["Controls", "Spectate controls"],
                    _8042: ["NONE", "NONE"],
                    _3360: 2
                }),
                HK_SPLIT: new N({
                    _7478: "Split",
                    _9111: "Split your orbs into 2 equal halves.",
                    _5301: ["Controls", "Player controls"],
                    _8042: ["SPACE", "NONE"]
                }),
                HK_SPLIT_2X: new N({
                    _7478: "Split 2X",
                    _9111: "Split 2 times.",
                    _5301: ["Controls", "Player controls"],
                    _8042: ["R", "NONE"]
                }),
                HK_SPLIT_3X: new N({
                    _7478: "Split 3X",
                    _9111: "Split 3 times.",
                    _5301: ["Controls", "Player controls"],
                    _8042: ["G", "NONE"]
                }),
                HK_SPLIT_4X: new N({
                    _7478: "Split 4X",
                    _9111: "Split 4 times.",
                    _5301: ["Controls", "Player controls"],
                    _8042: ["T", "NONE"]
                }),
                HK_SPLIT_6X: new N({
                    _7478: "Split 6X",
                    _9111: "Split 6 times.",
                    _5301: ["Controls", "Player controls"],
                    _8042: ["F", "NONE"]
                }),
                HK_EJECT: new N({
                    _7478: "Eject",
                    _9111: "Eject a microrb from each of your orbs.",
                    _5301: ["Controls", "Player controls"],
                    _8042: ["W", "NONE"]
                }),
                HK_MACRO_EJECT: new N({
                    _7478: "Macro eject",
                    _9111: "Keep ejecting microrbs until the button is released.",
                    _5301: ["Controls", "Player controls"],
                    _8042: ["E", "NONE"]
                }),
                HK_COMMANDER: new N({
                    _7478: "Commander",
                    _9111: "Emit a visual ping to direct teammate where to go.",
                    _5301: ["Controls", "Player controls"],
                    _8042: ["NONE", "NONE"],
                    _6250: [{
                        _8001: "COMMANDER",
                        _8042: !0
                    }]
                }),
                HK_RESPAWN: new N({
                    _7478: "Respawn",
                    _9111: "Respawn at a new position (only possible for 10 seconds after spawning).",
                    _5301: ["Controls", "Player controls"],
                    _8042: ["BACKQUOTE", "NONE"]
                }),
                HK_SWITCH_ACTIVE_PLAYER_UNIT: new N({
                    _7478: "Switch active player unit",
                    _9111: "Switch the active player unit in multibox mode.",
                    _5301: ["Controls", "Player controls"],
                    _8042: ["TAB", "NONE"]
                }),
                HK_CHANGE_SPECTATE_MODE: new N({
                    _7478: "Change spectate mode",
                    _9111: "Change the spectate mode.",
                    _5301: ["Controls", "Player controls"],
                    _8042: ["Q", "NONE"],
                    _3360: 2
                }),
                HK_STOP_MOVEMENT: new N({
                    _7478: "Stop movement",
                    _9111: "Stop the movement of your orbs.",
                    _5301: ["Controls", "Player controls"],
                    _8042: ["S", "NONE"]
                }),
                HK_TOGGLE_OWN_USERNAME: new N({
                    _7478: "Toggle own username",
                    _9111: "Toggle own orb username on or off.",
                    _5301: ["Controls", "Toggles"],
                    _8042: ["NONE", "NONE"]
                }),
                HK_TOGGLE_ENEMY_USERNAME: new N({
                    _7478: "Toggle enemy username",
                    _9111: "Toggle enemy orb username on or off.",
                    _5301: ["Controls", "Toggles"],
                    _8042: ["NONE", "NONE"]
                }),
                HK_TOGGLE_OWN_ENERGY: new N({
                    _7478: "Toggle own energy",
                    _9111: "Toggle own orb energy on or off.",
                    _5301: ["Controls", "Toggles"],
                    _8042: ["NONE", "NONE"]
                }),
                HK_TOGGLE_ENEMY_ENERGY: new N({
                    _7478: "Toggle enemy energy",
                    _9111: "Toggle enemy orb energy on or off.",
                    _5301: ["Controls", "Toggles"],
                    _8042: ["NONE", "NONE"]
                }),
                HK_TOGGLE_CUSTOM_SKINS: new N({
                    _7478: "Toggle teammates' custom skins",
                    _9111: "Toggle teammates' custom skins on or off.",
                    _5301: ["Controls", "Toggles"],
                    _8042: ["NONE", "NONE"]
                }),
                HK_TOGGLE_OWN_CUSTOM_SKINS: new N({
                    _7478: "Toggle own custom skin",
                    _9111: "Toggle own custom skin on or off.",
                    _5301: ["Controls", "Toggles"],
                    _8042: ["NONE", "NONE"]
                }),
                HK_CHATROOM_SWITCH_TO_GLOBAL: new N({
                    _7478: "Global channel",
                    _9111: "Switch to global channel in chatroom.",
                    _5301: ["Controls", "Chatroom channel"],
                    _8042: ["NONE", "NONE"]
                }),
                HK_CHATROOM_SWITCH_TO_TEAM: new N({
                    _7478: "Team channel",
                    _9111: "Switch to team channel in chatroom.",
                    _5301: ["Controls", "Chatroom channel"],
                    _8042: ["NONE", "NONE"]
                }),
                HK_SAVE_INSTANT_REPLAY: new N({
                    _7478: "Save instant replay",
                    _9111: "Save an instant replay.",
                    _5301: ["Controls", "Replay controls"],
                    _8042: ["NONE", "NONE"],
                    _6250: [{
                        _8001: "INSTANT_REPLAY",
                        _8042: !0
                    }]
                }),
                HK_QUICK_CHAT_1: new N({
                    _7478: "Quick chat 1",
                    _9111: "Send quick chat 1 message.",
                    _5301: ["Controls", "Quick chat"],
                    _8042: ["1", "NONE"]
                }),
                HK_QUICK_CHAT_2: new N({
                    _7478: "Quick chat 2",
                    _9111: "Send quick chat 2 message.",
                    _5301: ["Controls", "Quick chat"],
                    _8042: ["2", "NONE"]
                }),
                HK_QUICK_CHAT_3: new N({
                    _7478: "Quick chat 3",
                    _9111: "Send quick chat 3 message.",
                    _5301: ["Controls", "Quick chat"],
                    _8042: ["3", "NONE"]
                }),
                HK_QUICK_CHAT_4: new N({
                    _7478: "Quick chat 4",
                    _9111: "Send quick chat 4 message.",
                    _5301: ["Controls", "Quick chat"],
                    _8042: ["4", "NONE"]
                }),
                HK_QUICK_CHAT_5: new N({
                    _7478: "Quick chat 5",
                    _9111: "Send quick chat 5 message.",
                    _5301: ["Controls", "Quick chat"],
                    _8042: ["5", "NONE"]
                }),
                HK_QUICK_CHAT_6: new N({
                    _7478: "Quick chat 6",
                    _9111: "Send quick chat 6 message.",
                    _5301: ["Controls", "Quick chat"],
                    _8042: ["6", "NONE"]
                }),
                HK_QUICK_CHAT_7: new N({
                    _7478: "Quick chat 7",
                    _9111: "Send quick chat 7 message.",
                    _5301: ["Controls", "Quick chat"],
                    _8042: ["7", "NONE"]
                }),
                HK_QUICK_CHAT_8: new N({
                    _7478: "Quick chat 8",
                    _9111: "Send quick chat 8 message.",
                    _5301: ["Controls", "Quick chat"],
                    _8042: ["8", "NONE"]
                }),
                HK_QUICK_CHAT_9: new N({
                    _7478: "Quick chat 9",
                    _9111: "Send quick chat 9 message.",
                    _5301: ["Controls", "Quick chat"],
                    _8042: ["9", "NONE"]
                }),
                HK_QUICK_CHAT_10: new N({
                    _7478: "Quick chat 10",
                    _9111: "Send quick chat 10 message.",
                    _5301: ["Controls", "Quick chat"],
                    _8042: ["0", "NONE"]
                }),
                HK_ZOOM_LEVEL_1: new N({
                    _7478: "Camera zoom level 1",
                    _9111: "Set camera zoom to level 1.",
                    _5301: ["Controls", "Camera zoom level"],
                    _8042: ["ALT+1", "NONE"]
                }),
                HK_ZOOM_LEVEL_2: new N({
                    _7478: "Camera zoom level 2",
                    _9111: "Set camera zoom to level 2.",
                    _5301: ["Controls", "Camera zoom level"],
                    _8042: ["ALT+2", "NONE"]
                }),
                HK_ZOOM_LEVEL_3: new N({
                    _7478: "Camera zoom level 3",
                    _9111: "Set camera zoom to level 3.",
                    _5301: ["Controls", "Camera zoom level"],
                    _8042: ["ALT+3", "NONE"]
                }),
                HK_ZOOM_LEVEL_4: new N({
                    _7478: "Camera zoom level 4",
                    _9111: "Set camera zoom to level 4.",
                    _5301: ["Controls", "Camera zoom level"],
                    _8042: ["ALT+4", "NONE"]
                }),
                HK_ZOOM_LEVEL_5: new N({
                    _7478: "Camera zoom level 5",
                    _9111: "Set camera zoom to level 5.",
                    _5301: ["Controls", "Camera zoom level"],
                    _8042: ["ALT+5", "NONE"]
                })
            }
              , x = {
                STOP_MOVEMENT_ON_MENU_OPEN: new T({
                    _7478: "Stop movement on menu open",
                    _9111: "Stop the movement of your orbs if the menu is open.",
                    _5301: ["Gameplay", "Menu"],
                    _8042: !0
                }),
                ELEMENT_ANIMATION_SOFTENING: new I({
                    _7478: "Element animation softening",
                    _9111: "Soften the animation of the elements.",
                    _5301: ["Gameplay", "Animation"],
                    _8042: 160,
                    _8265: 100,
                    _1479: 300,
                    _3231: 10,
                    _2581: t=>(t - 100) / 2 + "%"
                }),
                CAMERA_MOVEMENT_SPEED: new I({
                    _7478: "Camera movement speed",
                    _9111: "Set the movement speed of the camera.",
                    _5301: ["Gameplay", "Camera"],
                    _8042: 8,
                    _8265: 101,
                    _1479: 2,
                    _3231: -1,
                    _2581: t=>102 - t + "%"
                }),
                CAMERA_ZOOM_SPEED: new I({
                    _7478: "Camera zoom speed",
                    _9111: "Set the zoom speed of the camera.",
                    _5301: ["Gameplay", "Camera"],
                    _8042: 4,
                    _8265: 2,
                    _1479: 20,
                    _3231: 1,
                    _2581: t=>.5 * t + "x"
                }),
                CAMERA_AUTO_ZOOM: new T({
                    _7478: "Camera auto zoom",
                    _9111: "Automatically set the camera zoom level based on your total energy.",
                    _5301: ["Gameplay", "Camera"],
                    _8042: !1
                }),
                SHOW_OWN_USERNAME: new T({
                    _7478: "Show own username",
                    _9111: "Show own username on orbs.",
                    _5301: ["Gameplay", "Orb"],
                    _8042: !0
                }),
                SHOW_ENEMY_USERNAME: new T({
                    _7478: "Show enemy's username",
                    _9111: "Show enemy's username on orbs.",
                    _5301: ["Gameplay", "Orb"],
                    _8042: !0
                }),
                SHOW_OWN_ENERGY: new T({
                    _7478: "Show own energy",
                    _9111: "Show energy amount on own orbs.",
                    _5301: ["Gameplay", "Orb"],
                    _8042: !0
                }),
                SHOW_ENEMY_ENERGY: new T({
                    _7478: "Show enemy's energy",
                    _9111: "Show energy amount on enemy's orbs.",
                    _5301: ["Gameplay", "Orb"],
                    _8042: !0
                }),
                SHOW_TEAM_NAME: new T({
                    _7478: "Show team name",
                    _9111: "Show team names on orbs.",
                    _5301: ["Gameplay", "Orb"],
                    _8042: !0
                }),
                SHOW_CUSTOM_SKINS: new T({
                    _7478: "Show teammates' custom skins",
                    _9111: "Show custom skins on orbs.",
                    _5301: ["Gameplay", "Orb"],
                    _8042: !0
                }),
                SHOW_OWN_CUSTOM_SKINS: new T({
                    _7478: "Show own custom skin",
                    _9111: "Show custom skins on own orbs.",
                    _5301: ["Gameplay", "Orb"],
                    _8042: !0
                }),
                SHOW_SHIELDS: new T({
                    _7478: "Show shields",
                    _9111: "Show shields on orbs.",
                    _5301: ["Gameplay", "Orb"],
                    _8042: !0
                }),
                ORB_OVERLAP_HIGHLIGHTING: new O({
                    _7478: "Orb overlap highlighting",
                    _9111: "Highlight overlapped orbs.",
                    _5301: ["Gameplay", "Orb"],
                    _8042: "auto",
                    _9071: ["off", "auto", "on"]
                }),
                AUTO_SWITCH_ACTIVE_PLAYER_UNIT: new T({
                    _7478: "Auto switch active player unit",
                    _9111: "Auto switch active player unit upon death of the active one.",
                    _5301: ["Gameplay", "Multibox"],
                    _8042: !0
                }),
                ACTIVE_PLAYER_UNIT_ARROW_INDICATOR: new T({
                    _7478: "Active player unit arrow indicator",
                    _9111: "Show an arrow indicator on own orbs to distinguish between active and inactive player unit.",
                    _5301: ["Gameplay", "Multibox"],
                    _8042: !0
                }),
                INSTANT_REPLAY: new T({
                    _7478: "Instant replay",
                    _9111: "Toggle instant replay on or off.",
                    _5301: ["Gameplay", "Instant replay"],
                    _8042: !0
                }),
                INSTANT_REPLAY_LENGTH: new I({
                    _7478: "Instant replay clip length",
                    _9111: "Set the length of the instant replay clip (in seconds).",
                    _5301: ["Gameplay", "Instant replay"],
                    _8042: 5,
                    _8265: 5,
                    _1479: 120,
                    _3231: 5,
                    _2581: t=>`${t}s`,
                    _6250: [{
                        _8001: "INSTANT_REPLAY",
                        _8042: !0
                    }]
                }),
                CURSOR_LINES: new T({
                    _7478: "Cursor lines",
                    _9111: "Toggle cursor lines on or off.",
                    _5301: ["Gameplay", "Misc"],
                    _8042: !1
                }),
                WORLD_BACKGROUND_IMAGE: new T({
                    _7478: "World background",
                    _9111: "Toggle world background on or off.",
                    _5301: ["Gameplay", "Misc"],
                    _8042: !0
                }),
                COMMANDER: new T({
                    _7478: "Commander",
                    _9111: "Toggle commander on or off.",
                    _5301: ["Gameplay", "Misc"],
                    _8042: !0
                })
            }
              , k = {
                RESOLUTION: new I({
                    _7478: "Resolution",
                    _9111: "Change the resolution of the screen. Lower resolution means more FPS.",
                    _5301: ["Graphics", "General"],
                    _8042: 100,
                    _8265: 50,
                    _1479: 100,
                    _3231: 10,
                    _2581: t=>`${t}%`
                }),
                ANTI_ALIASING: new O({
                    _7478: "Antialiasing",
                    _9111: "Select the antialiasing method or turn it off.",
                    _5301: ["Graphics", "General"],
                    _8042: "off",
                    _9071: ["off", "msaa"],
                    _3003: !0
                }),
                TEXTURE_QUALITY: new O({
                    _7478: "Global texture quality",
                    _9111: "Select global texture quality.",
                    _5301: ["Graphics", "Textures"],
                    _8042: "medium",
                    _9071: ["low", "medium", "high"],
                    _3003: !0
                }),
                BACKGROUND_IMAGE_QUALITY: new O({
                    _7478: "Background image quality",
                    _9111: "Select background image quality.\nLow: 1024px\nMedium: 2048px\nHigh: 4096px",
                    _5301: ["Graphics", "Textures"],
                    _8042: "medium",
                    _9071: ["low", "medium", "high"]
                }),
                ORB_SHADOW: new T({
                    _7478: "Orb shadow",
                    _9111: "Toggle orb shadow on or off.",
                    _5301: ["Graphics", "General"],
                    _8042: !0
                })
            }
              , B = {
                SHOW_TEAM_LIST: new O({
                    _7478: "Show team list",
                    _9111: "Show or hide team list hud.",
                    _5301: ["Huds", "General"],
                    _8042: "show",
                    _9071: ["show", "hide"]
                }),
                SHOW_LEADERBOARD: new O({
                    _7478: "Show leaderboard",
                    _9111: "Show or hide leaderboard hud.",
                    _5301: ["Huds", "General"],
                    _8042: "show",
                    _9071: ["show", "hide"]
                }),
                SHOW_CHATBOX: new O({
                    _7478: "Show chat box",
                    _9111: "Show or hide chat box hud.",
                    _5301: ["Huds", "General"],
                    _8042: "show",
                    _9071: ["show", "hide"]
                }),
                SHOW_METRICS: new O({
                    _7478: "Show metrics",
                    _9111: "Show or hide metrics hud.",
                    _5301: ["Huds", "General"],
                    _8042: "show",
                    _9071: ["show", "hide"]
                }),
                SHOW_MINIMAP: new O({
                    _7478: "Show minimap",
                    _9111: "Show or hide minimap hud.",
                    _5301: ["Huds", "General"],
                    _8042: "show",
                    _9071: ["show", "hide"]
                })
            }
              , H = {
                BORDER_COLOR: new P({
                    _7478: "Border color",
                    _9111: "Change the color of the world border.",
                    _5301: ["Theme", "World border"],
                    _7614: 16739748
                }),
                BORDER_SIZE: new I({
                    _7478: "Border size",
                    _9111: "Change the size of the world border.",
                    _5301: ["Theme", "World border"],
                    _8042: 50,
                    _8265: 0,
                    _1479: 100,
                    _3231: 2
                }),
                BORDER_GLOW_COLOR: new P({
                    _7478: "Border glow color",
                    _9111: "Change the color of the world border's glow.",
                    _5301: ["Theme", "World border"],
                    _7614: 16739748,
                    _9101: 20
                }),
                BORDER_GLOW_SIZE: new I({
                    _7478: "Border glow size",
                    _9111: "Change the size of the world border's glow.",
                    _5301: ["Theme", "World border"],
                    _8042: 0,
                    _8265: 0,
                    _1479: 100,
                    _3231: 2
                }),
                ORB_SHADOW_INTENSITY: new I({
                    _7478: "Orb shadow intensity",
                    _9111: "Change the intensity of orb shadow.",
                    _5301: ["Theme", "Orb"],
                    _8042: 15,
                    _8265: 10,
                    _1479: 100,
                    _3231: 5,
                    _6250: [{
                        _8001: "ORB_SHADOW",
                        _8042: !0
                    }]
                }),
                ORB_STYLE: new O({
                    _7478: "Orb style",
                    _9111: "Choose the visual style of orbs",
                    _5301: ["Theme", "Orb"],
                    _8042: "flat",
                    _9071: ["flat", "convex"]
                }),
                ORB_TRANSPARENCY: new I({
                    _7478: "Orb transparency",
                    _9111: "Change the transparency of orbs.",
                    _5301: ["Theme", "Orb"],
                    _8042: 0,
                    _8265: 0,
                    _1479: 50,
                    _3231: 5
                }),
                ORB_COLORING: new O({
                    _7478: "Orb coloring",
                    _9111: "Choose the coloring mode of orbs. DEFAULT: use the default orb color, CUSTOM: use the custom orb tint color",
                    _5301: ["Theme", "Orb"],
                    _8042: "default",
                    _9071: ["default", "tint"]
                }),
                ORB_TINT_COLOR: new P({
                    _7478: "Orb tint color",
                    _9111: "Set the tint color to use for orbs. Required Orb Coloring setting to be set as TINT.",
                    _5301: ["Theme", "Orb"],
                    _7614: 16777215,
                    _6250: [{
                        _8001: "ORB_COLORING",
                        _8042: "tint"
                    }]
                }),
                OWN_ORB_COLORING: new O({
                    _7478: "Own orb coloring",
                    _9111: "Choose the coloring mode of your orbs. DEFAULT: use the default orb color, CUSTOM: use the custom own orb color, MULTIBOX: use multibox accent colors (available only in multibox mode)",
                    _5301: ["Theme", "Orb"],
                    _8042: "multibox",
                    _9071: ["default", "custom", "multibox"]
                }),
                CUSTOM_OWN_ORB_COLOR: new P({
                    _7478: "Custom own orb color",
                    _9111: "Set the custom orb color to use for your orbs. Required Own Orb Coloring setting to be set as CUSTOM.",
                    _5301: ["Theme", "Orb"],
                    _7614: 16739748,
                    _6250: [{
                        _8001: "OWN_ORB_COLORING",
                        _8042: "custom"
                    }]
                }),
                ILL_ORB_BASE_COLOR: new P({
                    _7478: "Ill orb base color",
                    _9111: "Change the base color of ill orb.",
                    _5301: ["Theme", "Ill orb"],
                    _7614: 16739747,
                    _9101: 20
                }),
                ILL_ORB_BORDER_COLOR: new P({
                    _7478: "Ill orb border color",
                    _9111: "Change the border color of ill orb.",
                    _5301: ["Theme", "Ill orb"],
                    _7614: 16739748
                }),
                ILL_ORB_GLOW_COLOR: new P({
                    _7478: "Ill orb glow color",
                    _9111: "Change ill orb's glow color.",
                    _5301: ["Theme", "Ill orb"],
                    _7614: 15678849,
                    _9101: 25
                }),
                ILL_ORB_GLOW_SIZE: new I({
                    _7478: "Ill orb glow size",
                    _9111: "Change ill orb's glow size.",
                    _5301: ["Theme", "Ill orb"],
                    _8042: 100,
                    _8265: 0,
                    _1479: 100,
                    _3231: 5
                }),
                PARTICLE_COLOR: new P({
                    _7478: "Particle color",
                    _9111: "Change the color of particle.",
                    _5301: ["Theme", "Particle"],
                    _7614: 16739748
                }),
                PARTICLE_GLOW_COLOR: new P({
                    _7478: "Particle glow color",
                    _9111: "Change the color of particle's glow.",
                    _5301: ["Theme", "Particle"],
                    _7614: 16739748,
                    _9101: 20
                }),
                PARTICLE_GLOW_SIZE: new I({
                    _7478: "Particle glow size",
                    _9111: "Change the size of particle's glow.",
                    _5301: ["Theme", "Particle"],
                    _8042: 0,
                    _8265: 0,
                    _1479: 100,
                    _3231: 5
                }),
                BACKGROUND_COLOR: new P({
                    _7478: "Background color",
                    _9111: "Change the background color of the screen.",
                    _5301: ["Theme", "Background"],
                    _7614: 1315860
                }),
                BACKGROUND_IMAGE_URL: new L({
                    _7478: "Background image url",
                    _9111: "URL of the background image of the world.",
                    _5301: ["Theme", "Background"],
                    _8042: "https://i.imgur.com/aKvo1jQ.png",
                    _6250: [{
                        _8001: "WORLD_BACKGROUND_IMAGE",
                        _8042: !0
                    }]
                }),
                BACKGROUND_IMAGE_COLOR: new P({
                    _7478: "Background image color",
                    _9111: "Change the color of the background image.",
                    _5301: ["Theme", "Background"],
                    _7614: 12632256,
                    _6250: [{
                        _8001: "WORLD_BACKGROUND_IMAGE",
                        _8042: !0
                    }]
                }),
                ACTIVE_PLAYER_UNIT_ACCENT_COLOR: new P({
                    _7478: "Active player unit accent color",
                    _9111: "Set the accent color for the active player unit.",
                    _5301: ["Theme", "Multibox"],
                    _7614: 9588991
                }),
                INACTIVE_PLAYER_UNIT_ACCENT_COLOR: new P({
                    _7478: "Inactive player unit accent color",
                    _9111: "Set the accent color for the inactive player unit.",
                    _5301: ["Theme", "Multibox"],
                    _7614: 16777215
                }),
                CURSOR_LINE_COLOR: new P({
                    _7478: "Cursor line color",
                    _9111: "Set the color for the cursor line.",
                    _5301: ["Theme", "Cursor line"],
                    _7614: 16777215,
                    _6250: [{
                        _8001: "CURSOR_LINES",
                        _8042: !0
                    }]
                }),
                CURSOR_LINE_THICKNESS: new I({
                    _7478: "Cursor line thickness",
                    _9111: "Change the thickness of the cursor line.",
                    _5301: ["Theme", "Cursor line"],
                    _8042: 6,
                    _8265: 6,
                    _1479: 15,
                    _3231: 1,
                    _2581: t=>(t - 5).toString(),
                    _6250: [{
                        _8001: "CURSOR_LINES",
                        _8042: !0
                    }]
                })
            }
              , U = {
                _2CL10158EFC9A0D: "QUICK_CHAT_1_MESSAGE",
                _2CL20D949AF5FBC: "QUICK_CHAT_2_MESSAGE",
                _2CLF0E10A597C51: "QUICK_CHAT_3_MESSAGE",
                _2CLEA74D2B8D59E: "QUICK_CHAT_4_MESSAGE",
                _2CL0761F5BA438D: "QUICK_CHAT_5_MESSAGE",
                _2CLF44141CAB824: "QUICK_CHAT_6_MESSAGE",
                _2CL448EAE79802D: "QUICK_CHAT_7_MESSAGE",
                _2CLFAD3B9D78FAE: "QUICK_CHAT_8_MESSAGE",
                _2CL2027D6DD1341: "QUICK_CHAT_9_MESSAGE",
                _2CL5878AE03FCE7: "QUICK_CHAT_10_MESSAGE",
                _2CLB5621C064221: "HK_SPLIT",
                _2CL0F31F36CE95B: "HK_SPLIT_2X",
                _2CL32B4393129E7: "HK_SPLIT_3X",
                _2CL2E904405CBA6: "HK_SPLIT_4X",
                _2CL0944F301F3A4: "HK_SPLIT_6X",
                _2CLD52795A3E62C: "HK_EJECT",
                _2CLDE45139D235B: "HK_MACRO_EJECT",
                _2CLC4D966FFBB0E: "HK_COMMANDER",
                _2CL1D49D985B9E6: "HK_RESPAWN",
                _2CLDCFED7A3AADB: "HK_SWITCH_ACTIVE_PLAYER_UNIT",
                _2CL944AC744A078: "HK_CHANGE_SPECTATE_MODE",
                _2CL90FE5576323F: "HK_STOP_MOVEMENT",
                _2CL734BBC5FD485: "HK_TOGGLE_OWN_USERNAME",
                _2CL3082040446C0: "HK_TOGGLE_ENEMY_USERNAME",
                _2CL564F44B97BFE: "HK_TOGGLE_OWN_ENERGY",
                _2CLBF4832077F83: "HK_TOGGLE_ENEMY_ENERGY",
                _2CLF93F011888F2: "HK_TOGGLE_CUSTOM_SKINS",
                _2CL40E297B2D34A: "HK_SAVE_INSTANT_REPLAY",
                _2CL9DCB9CE7F18A: "HK_QUICK_CHAT_1",
                _2CL598E2BC5742D: "HK_QUICK_CHAT_2",
                _2CLA70E61F1374D: "HK_QUICK_CHAT_3",
                _2CL39C4326D5D67: "HK_QUICK_CHAT_4",
                _2CL0102A4CD3F22: "HK_QUICK_CHAT_5",
                _2CL8159CE70CB8E: "HK_QUICK_CHAT_6",
                _2CL40F9BE443713: "HK_QUICK_CHAT_7",
                _2CL92E3C8E2ADC1: "HK_QUICK_CHAT_8",
                _2CL224FD617C1B4: "HK_QUICK_CHAT_9",
                _2CL3D956CDF6896: "HK_QUICK_CHAT_10",
                _2CL110A324AAA03: "HK_ZOOM_LEVEL_1",
                _2CLD5940B909ECC: "HK_ZOOM_LEVEL_2",
                _2CL41066FD39670: "HK_ZOOM_LEVEL_3",
                _2CLED23D7925C90: "HK_ZOOM_LEVEL_4",
                _2CL766202CDC580: "HK_ZOOM_LEVEL_5",
                _2CL05AB06FB5401: "STOP_MOVEMENT_ON_MENU_OPEN",
                _2CLA73D898728FD: "ELEMENT_ANIMATION_SPEED",
                _2CLAD17CCCD71BD: "CAMERA_MOVEMENT_SPEED",
                _2CL46A6271543B8: "CAMERA_ZOOM_SPEED",
                _2CL8507767AC142: "CAMERA_AUTO_ZOOM",
                _2CL6CAAFD81E8AC: "SHOW_OWN_USERNAME",
                _2CL20703844B4B7: "SHOW_ENEMY_USERNAME",
                _2CLA20455F7B6F7: "SHOW_OWN_ENERGY",
                _2CL25F3984940BD: "SHOW_ENEMY_ENERGY",
                _2CL4F093C617C4F: "SHOW_TEAM_NAME",
                _2CLC78809FF0F8C: "SHOW_CUSTOM_SKINS",
                _2CL8E0D35D45D5C: "SHOW_SHIELDS",
                _2CL870B980D6F11: "ORB_OVERLAP_HIGHLIGHTING",
                _2CL5B9E5418CDE6: "AUTO_SWITCH_ACTIVE_PLAYER_UNIT",
                _2CL51FD314D68BB: "ACTIVE_PLAYER_UNIT_ARROW_INDICATOR",
                _2CL33E17C769461: "CURSOR_LINES",
                _2CLDD77A1B9101F: "WORLD_BACKGROUND_IMAGE",
                _2CLC451972E4484: "COMMANDER",
                _2CL688E93087DC2: "RESOLUTION",
                _2CLAEC936286C9B: "ANTI_ALIASING",
                _2CL4B5D280D1BB8: "TEXTURE_QUALITY",
                _2CL1856C69EDA38: "ORB_SHADOW",
                _2CLED9F8D24DF67: "SHOW_TEAM_LIST",
                _2CLF0E5BA40DA16: "SHOW_LEADERBOARD",
                _2CLDA1EAFD7CDF6: "SHOW_CHATBOX",
                _2CLACC06FC76121: "SHOW_METRICS",
                _2CLB66A67B0BA2B: "SHOW_MINIMAP",
                _2CLA36E6ABAF5A0: "INSTANT_REPLAY",
                _2CLC910E3BA1951: "INSTANT_REPLAY_LENGTH",
                _2CL7020992A4B9A: "BORDER_COLOR",
                _2CLEE920EDEB873: "BORDER_SIZE",
                _2CLCC4A9E6424D6: "BORDER_GLOW_COLOR",
                _2CL9CAD2DC88431: "BORDER_GLOW_SIZE",
                _2CL5D8FFBE162F2: "ORB_SHADOW_INTENSITY",
                _2CL9FAFB4DD3B21: "ORB_STYLE",
                _2CL4CE5FBD69AEA: "ORB_TRANSPARENCY",
                _2CL79BFA909FB7F: "ORB_COLORING",
                _2CLCF5BCED581AF: "ORB_TINT_COLOR",
                _2CL3F38024CAF1E: "OWN_ORB_COLORING",
                _2CL1F5645F6A576: "CUSTOM_OWN_ORB_COLOR",
                _2CLDF9831271970: "ILL_ORB_BASE_COLOR",
                _2CL4064EE827247: "ILL_ORB_BORDER_COLOR",
                _2CL99104E114CCF: "ILL_ORB_GLOW_COLOR",
                _2CL264384E031E6: "ILL_ORB_GLOW_SIZE",
                _2CLD566F21390D4: "PARTICLE_COLOR",
                _2CL9D3ECB15DADF: "PARTICLE_GLOW_COLOR",
                _2CLEFE36AED07F9: "PARTICLE_GLOW_SIZE",
                _2CL6876E416A9D7: "BACKGROUND_COLOR",
                _2CLEB1D54347707: "BACKGROUND_IMAGE_URL",
                _2CLACE7F9203388: "BACKGROUND_IMAGE_COLOR",
                _2CLA1FE5DCF1749: "ACTIVE_PLAYER_UNIT_ACCENT_COLOR",
                _2CLA66C739C922C: "INACTIVE_PLAYER_UNIT_ACCENT_COLOR",
                _2CLD82071960B61: "CURSOR_LINE_COLOR",
                _2CLCE9D0A5C7004: "CURSOR_LINE_THICKNESS"
            }
              , D = t=>{
                const _ = {
                    settings: {},
                    version: 2
                }
                  , e = Object.getOwnPropertyNames(t);
                for (const s of e) {
                    const e = t[s];
                    if ("object" == typeof e || null !== e) {
                        const t = e
                          , s = Object.getOwnPropertyNames(t);
                        for (const e of s) {
                            const s = U[e];
                            void 0 !== s && (_.settings[s] = t[e])
                        }
                    }
                }
                return _
            }
              , W = "R10:SETTINGS"
              , G = new Map([D, t=>{
                const _ = {
                    settings: {},
                    version: 3
                };
                if ("object" == typeof t.settings && null !== t.settings) {
                    const e = Object.assign({}, t.settings);
                    if ("number" == typeof e.ELEMENT_ANIMATION_SPEED) {
                        const t = e.ELEMENT_ANIMATION_SPEED;
                        e.ELEMENT_ANIMATION_SOFTENING = Math.min(300, Math.max(100, t)),
                        delete e.ELEMENT_ANIMATION_SPEED
                    }
                    "number" == typeof e.CAMERA_MOVEMENT_SPEED && (e.CAMERA_MOVEMENT_SPEED = 22 - e.CAMERA_MOVEMENT_SPEED),
                    _.settings = Object.assign({}, e)
                }
                return _
            }
            ].map(((t,_)=>[_ + 1, t])))
              , K = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, x), k), H), R), M), B)
              , F = (()=>{
                const t = {}
                  , _ = Object.getOwnPropertyNames(K);
                for (const e of _) {
                    const _ = K[e];
                    t[e] = _._2230()
                }
                return t
            }
            )();
            function Z(t) {
                for (; 3 !== t.version; )
                    t = (G.get(t.version) || D)(t);
                return t
            }
            function $() {
                const t = {
                    version: 3,
                    settings: {}
                }
                  , _ = Object.getOwnPropertyNames(K);
                for (const e of _) {
                    const _ = K[e];
                    t.settings[e] = _._2230()
                }
                localStorage.setItem(W, JSON.stringify(t))
            }
            !function() {
                !function() {
                    const t = localStorage.getItem("settings");
                    null !== t && (localStorage.setItem(W, t),
                    localStorage.removeItem("settings"),
                    localStorage.removeItem("settings:version"))
                }();
                let t = {};
                try {
                    const _ = localStorage.getItem(W);
                    if (null !== _) {
                        const e = JSON.parse(_);
                        if ("object" != typeof e || null === e)
                            throw new Error("Invalid saved settings.");
                        t = e
                    }
                } catch (t) {
                    console.error(t),
                    console.warn("[Settings] > Failed to load settings, using defaults.")
                }
                const _ = Z(t).settings
                  , e = Object.getOwnPropertyNames(_);
                for (const t of e)
                    if (Object.prototype.hasOwnProperty.call(K, t)) {
                        const e = K[t]
                          , s = _[t];
                        e._9917(s)
                    }
            }(),
            function() {
                const t = Object.getOwnPropertyNames(K);
                for (const _ of t)
                    K[_]._6206("change", $)
            }();
            const Y = K
              , Q = class {
                constructor(t) {
                    this._4143 = new DataView(t),
                    this._3891 = 0,
                    this._1027 = t.byteLength
                }
                get _6493() {
                    return this._3891 >= this._1027
                }
                getUint8() {
                    const t = this._4143.getUint8(this._3891);
                    return this._3891 += 1,
                    t
                }
                getInt8() {
                    const t = this._4143.getInt8(this._3891);
                    return this._3891 += 1,
                    t
                }
                getUint16() {
                    const t = this._4143.getUint16(this._3891, !0);
                    return this._3891 += 2,
                    t
                }
                _5837() {
                    const t = this._4143.getInt16(this._3891, !0);
                    return this._3891 += 2,
                    t
                }
                getUint32() {
                    const t = this._4143.getUint32(this._3891, !0);
                    return this._3891 += 4,
                    t
                }
                getInt32() {
                    const t = this._4143.getInt32(this._3891, !0);
                    return this._3891 += 4,
                    t
                }
                _3653() {
                    const t = this._4143.getFloat32(this._3891, !0);
                    return this._3891 += 4,
                    t
                }
                _4142() {
                    const t = this._4143.getFloat64(this._3891, !0);
                    return this._3891 += 8,
                    t
                }
                getString8() {
                    let t = "";
                    const _ = this.getUint8();
                    for (let e = 0; e < _; e++) {
                        const _ = this.getUint8();
                        t += String.fromCharCode(_)
                    }
                    return t
                }
                _5661() {
                    let t = "";
                    const _ = this.getUint16();
                    for (let e = 0; e < _; e++) {
                        const _ = this.getUint8();
                        t += String.fromCharCode(_)
                    }
                    return t
                }
                getString16() {
                    let t = "";
                    const _ = this.getUint8();
                    for (let e = 0; e < _; e++) {
                        const _ = this.getUint16();
                        t += String.fromCharCode(_)
                    }
                    return t
                }
                _8198() {
                    let t = "";
                    const _ = this.getUint16();
                    for (let e = 0; e < _; e++) {
                        const _ = this.getUint16();
                        t += String.fromCharCode(_)
                    }
                    return t
                }
                _7190(t) {
                    this._3891 += t
                }
                _9909() {
                    this._3891 = 0
                }
            }
              , j = class {
                constructor(t=0, _=0, e=0, s=0) {
                    this._6457 = t,
                    this._2706 = _,
                    this._2689 = e,
                    this._9957 = s
                }
            }
            ;
            var V;
            !function(t) {
                t[t._1581 = 1] = "_1581",
                t[t._5706 = 2] = "_5706",
                t[t._4455 = 3] = "_4455"
            }(V || (V = {}));
            const X = V
              , z = new class extends i {
                constructor() {
                    super(),
                    this._4636 = 0,
                    this._8650 = 0
                }
                get _6006() {
                    return this._4636
                }
                get _5286() {
                    return this._8650
                }
                _1489() {
                    this._4636 = window.innerWidth,
                    this._8650 = window.innerHeight,
                    window.addEventListener("resize", this._8959.bind(this))
                }
                _8959() {
                    this._4636 = window.innerWidth,
                    this._8650 = window.innerHeight,
                    this._9199("resize")
                }
            }
              , q = class {
                constructor(t) {
                    const _ = t.querySelector(":scope > [data-scrollable=content]");
                    if (null === _)
                        throw new Error("Content not found.");
                    const e = t.querySelector(":scope > [data-scrollable=scrollbar]");
                    if (null === e)
                        throw new Error("Scrollbar not found.");
                    const s = e.querySelector(":scope > [data-scrollable=slider]");
                    if (null === s)
                        throw new Error("Slider not found.");
                    this._5665 = t,
                    this._5804 = _,
                    this._8134 = e,
                    this._4383 = r._6246(s)
                }
                _1489() {
                    this._5665.addEventListener("mouseenter", this._2081.bind(this)),
                    this._5804.addEventListener("scroll", this._2081.bind(this)),
                    window.addEventListener("resize", this._2081.bind(this));
                    const t = this._4383._8684;
                    let _ = !1
                      , e = 0
                      , s = 0;
                    t.addEventListener("mousedown", (t=>{
                        _ = !0,
                        o._3153((()=>{
                            e = t.clientY,
                            s = this._5804.scrollTop
                        }
                        ))
                    }
                    )),
                    window.addEventListener("mousemove", (i=>{
                        _ && null !== t.parentElement && o._3153((()=>{
                            const t = i.clientY - e
                              , _ = this._5804.scrollHeight / this._8134.offsetHeight
                              , n = s + t * _;
                            (n < 0 || n > this._5804.scrollHeight - this._5804.offsetHeight) && (e = i.clientY,
                            s = this._5804.scrollTop),
                            o._4428((()=>{
                                this._5804.scroll(0, n)
                            }
                            ))
                        }
                        ))
                    }
                    )),
                    window.addEventListener("mouseup", (()=>{
                        _ = !1
                    }
                    ))
                }
                _2081() {
                    o._3153((()=>{
                        const t = this._5804.scrollTop / this._5804.scrollHeight * 100
                          , _ = this._8134.offsetHeight * (t / 100);
                        this._4383._9596("top", `${Math.floor(_)}px`);
                        const e = this._5804.offsetHeight / this._5804.scrollHeight * 100
                          , s = this._8134.offsetHeight * (e / 100);
                        this._4383._9596("height", `${Math.floor(s)}px`)
                    }
                    ))
                }
                _3148() {
                    o._3153((()=>{
                        const t = this._5804.scrollHeight;
                        o._4428((()=>{
                            this._5804.scroll(0, t)
                        }
                        ))
                    }
                    ))
                }
                _2265() {
                    o._3153((()=>{
                        o._4428((()=>{
                            this._5804.scroll(0, 0)
                        }
                        ))
                    }
                    ))
                }
            }
              , J = class extends i {
                constructor(t) {
                    super(),
                    t.addEventListener("mouseenter", (()=>{
                        this._9199("mouseenter")
                    }
                    )),
                    this._9843 = r._6246(t),
                    this._9207 = !1
                }
                _7115() {
                    return this._9843._8684
                }
                _3235() {
                    return this._9207
                }
                _8506() {
                    this._9207 || (this._9843._9596("display", "flex"),
                    this._9207 = !0)
                }
                _7486() {
                    this._9207 && (this._9843._9596("display", "none"),
                    this._9207 = !1)
                }
            }
            ;
            var tt = e(357);
            const _t = class extends J {
                constructor(t, _) {
                    const e = tt.ZP.createElement("div", {
                        class: "sm-row"
                    }, tt.ZP.createElement("div", {
                        class: "sm-setting-name"
                    }, t.toUpperCase()), tt.ZP.createElement("div", {
                        class: "sm-toggle",
                        onClick: ()=>{
                            this._9199("change", [!this._8169])
                        }
                    }, tt.ZP.createElement("div", {
                        class: ["sm-toggle__slider", _ && "sm-toggle__slider--active"]
                    })))
                      , s = e.children[1].children[0];
                    super(e),
                    this._6897 = r._6246(s),
                    this._8169 = _
                }
                _9917(t) {
                    this._8169 !== t && (t ? this._6897._4438("sm-toggle__slider--active") : this._6897._4652("sm-toggle__slider--active"),
                    this._8169 = t)
                }
                _2230() {
                    return this._8169
                }
            }
              , et = class extends J {
                constructor(t, _, e, s, i, n) {
                    const o = (i - _) / (e - _) * 100
                      , h = n(i);
                    let a = !1;
                    const c = ()=>{
                        a = !1
                    }
                      , l = tt.ZP.createElement("div", {
                        class: "sm-row"
                    }, tt.ZP.createElement("div", {
                        class: "sm-setting-name"
                    }, t.toUpperCase()), tt.ZP.createElement("div", {
                        class: "sm-range-value"
                    }, h), tt.ZP.createElement("div", {
                        class: "sm-range",
                        onMouseDown: t=>{
                            a = !0;
                            const _ = this._7902(t.offsetX);
                            this._9199("change", [_])
                        }
                        ,
                        onMouseMove: t=>{
                            if (!a || 0 === t.movementX)
                                return;
                            const _ = this._7902(t.offsetX);
                            this._9199("change", [_])
                        }
                        ,
                        onMouseUp: c,
                        onMouseLeave: c
                    }, tt.ZP.createElement("div", {
                        class: "sm-range__fill",
                        style: `width: ${o.toFixed(0)}%`
                    })));
                    super(l),
                    this._4118 = r._6246(l.children[1]),
                    this._6507 = r._6246(l.children[2].children[0]),
                    this._6174 = _,
                    this._6715 = e,
                    this._1296 = s,
                    this._8169 = i,
                    this._3762 = n
                }
                _7902(t) {
                    const _ = 30 + window.innerWidth / 100 * 5 - 6;
                    t = Math.max(0, t - 3),
                    t = Math.min(_, t);
                    const e = (this._6715 - this._6174) * (t / _);
                    return this._6174 + Math.floor(e / this._1296) * this._1296
                }
                _9917(t) {
                    if (this._8169 !== t) {
                        const _ = (t - this._6174) / (this._6715 - this._6174) * 100;
                        this._6507._9596("width", `${_.toFixed(0)}%`),
                        this._4118._4667 = this._3762(t),
                        this._8169 = t
                    }
                }
                _2230() {
                    return this._8169
                }
            }
              , st = class extends J {
                constructor(t, _, e) {
                    const s = new Map;
                    for (const t of _) {
                        const _ = ["sm-multi-choice__item", t === e && "sm-multi-choice__item--active"]
                          , i = ()=>{
                            this._9199("change", [t])
                        }
                          , n = tt.ZP.createElement("div", {
                            class: _,
                            onMouseDown: i
                        }, t.toUpperCase())
                          , o = r._6246(n);
                        s.set(t, o)
                    }
                    const i = [...s.values()].map((t=>t._8684));
                    super(tt.ZP.createElement("div", {
                        class: "sm-row"
                    }, tt.ZP.createElement("div", {
                        class: "sm-setting-name"
                    }, t.toUpperCase()), tt.ZP.createElement("div", {
                        class: "sm-multi-choice"
                    }, i))),
                    this._5140 = s,
                    this._8169 = e
                }
                _9917(t) {
                    if (this._8169 !== t) {
                        const _ = this._5140.get(this._8169)
                          , e = this._5140.get(t);
                        void 0 !== _ && void 0 !== e ? (_._4652("sm-multi-choice__item--active"),
                        e._4438("sm-multi-choice__item--active"),
                        this._8169 = t) : console.error("MultiChoice value set failed. Item is undefined.", [_, e])
                    }
                }
                _2230() {
                    return this._8169
                }
            }
              , it = class extends J {
                constructor(t, _) {
                    const e = tt.ZP.createElement("div", {
                        class: "sm-row"
                    }, tt.ZP.createElement("div", {
                        class: "sm-setting-name"
                    }, t.toUpperCase()), tt.ZP.createElement("input", {
                        class: "sm-input-box",
                        value: _,
                        tabIndex: -1,
                        onBlur: ()=>{
                            this._9199("change", [this._6192.value])
                        }
                        ,
                        onInput: ()=>{
                            this._9199("input")
                        }
                    }));
                    super(e),
                    this._6192 = e.children[1],
                    this._8169 = _
                }
                _9917(t) {
                    this._8169 !== t && (this._6192.value = t,
                    this._8169 = t)
                }
                _2230() {
                    return this._8169
                }
            }
            ;
            var nt = e(54)
              , ot = e.n(nt);
            class rt extends J {
                constructor(t, _, e) {
                    const s = rt._3545(_, e)
                      , i = tt.ZP.createElement("div", {
                        class: "sm-row"
                    }, tt.ZP.createElement("div", {
                        class: "sm-setting-name"
                    }, t.toUpperCase()), tt.ZP.createElement("div", {
                        class: "sm-color-box"
                    }, tt.ZP.createElement("div", {
                        class: "sm-color-box__preview",
                        style: {
                            backgroundColor: s
                        }
                    })))
                      , n = i.children[1]
                      , o = n.children[0]
                      , h = new (ot())({
                        el: n,
                        container: "#settings-menu",
                        theme: "monolith",
                        closeOnScroll: !0,
                        appClass: "sm-color-picker",
                        useAsButton: !0,
                        padding: 4,
                        autoReposition: !1,
                        lockOpacity: !e,
                        comparison: !1,
                        default: s,
                        defaultRepresentation: "RGBA",
                        position: "bottom-end",
                        components: {
                            preview: !1,
                            opacity: e,
                            hue: !0,
                            interaction: {
                                input: !0
                            }
                        }
                    })
                      , a = ()=>{
                        this._2447.setColor(s),
                        this._2447.off("show", a)
                    }
                    ;
                    h.on("change", (()=>{
                        const t = this._2447.getColor().toRGBA()
                          , _ = t[0] << 16 | t[1] << 8 | t[2] << 0
                          , e = (this._1651 ? Math.round(100 * t[3]) : 0) << 24 | _;
                        this._8169 !== e && this._9199("change", [e])
                    }
                    )),
                    h.on("show", a),
                    super(i),
                    this._1012 = r._6246(o),
                    this._2447 = h,
                    this._1651 = e,
                    this._8169 = _
                }
                _9917(t) {
                    if (this._8169 !== t) {
                        const _ = rt._3545(t, this._1651);
                        this._1012._9596("background-color", _),
                        this._2447.setColor(_),
                        this._8169 = t
                    }
                }
                _2230() {
                    return this._8169
                }
                static _3545(t, _) {
                    const e = t >> 16 & 255
                      , s = t >> 8 & 255
                      , i = 255 & t;
                    return _ ? `rgba(${e}, ${s}, ${i}, ${(t >> 24 & 255) / 100})` : `rgb(${e}, ${s}, ${i})`
                }
            }
            const ht = rt
              , at = new Map([..."0123456789".split("").map((t=>[`Digit${t}`, t])), ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((t=>[`Key${t}`, t])), ["Escape", "ESC"], ["Backspace", "BACKSPACE"], ["Tab", "TAB"], ["Enter", "ENTER"], ["NumpadEnter", "ENTER"], ["ShiftLeft", "SHIFT"], ["ShiftRight", "SHIFT"], ["Space", "SPACE"], ["ArrowUp", "UP"], ["ArrowDown", "DOWN"], ["ArrowLeft", "LEFT"], ["ArrowRight", "RIGHT"], ["Backquote", "BACKQUOTE"], ["Delete", "DELETE"]]);
            function ct(t, _, e, s) {
                const i = at.get(t);
                if (void 0 !== i) {
                    const t = [];
                    return _ && t.push("CTRL"),
                    e && t.push("ALT"),
                    s && t.push("META"),
                    t.push(i),
                    t.join("+")
                }
                return ""
            }
            class lt {
                constructor(t) {
                    this._7237 = t
                }
                _1489() {
                    document.addEventListener("keydown", (t=>{
                        this._3180("keydown", t)
                    }
                    )),
                    document.addEventListener("keyup", (t=>{
                        this._3180("keyup", t)
                    }
                    ))
                }
                _3180(t, _) {
                    if ("Tab" === _.key && _.preventDefault(),
                    _.repeat)
                        return;
                    const e = ct(_.code, _.ctrlKey, _.altKey, _.metaKey);
                    e.length < 1 || this._7237(_, t, e)
                }
            }
            function ut(t) {
                switch (t) {
                case 0:
                    return "LEFT BTN";
                case 1:
                    return "MIDDLE BTN";
                case 2:
                    return "RIGHT BTN";
                default:
                    return `BTN ${t + 1}`
                }
            }
            class dt {
                constructor(t) {
                    this._7237 = t,
                    this._4526 = 0,
                    this._6966 = 0
                }
                _1489() {
                    document.addEventListener("mousedown", this._4763.bind(this)),
                    document.addEventListener("mouseup", this._8522.bind(this)),
                    document.addEventListener("mousemove", this._8329.bind(this)),
                    document.addEventListener("contextmenu", this._2452.bind(this)),
                    document.addEventListener("wheel", this._8629.bind(this))
                }
                _4763(t) {
                    const _ = ut(t.button);
                    this._7237(t, "mousedown", _)
                }
                _8522(t) {
                    const _ = ut(t.button);
                    this._7237(t, "mouseup", _)
                }
                _8329(t) {
                    this._4526 = t.clientX,
                    this._6966 = t.clientY
                }
                _2452(t) {
                    t.preventDefault(),
                    this._7237(t, "contextmenu", "")
                }
                _8629(t) {
                    this._7237(t, "mousescroll", "")
                }
            }
            const mt = class extends J {
                constructor(t, _, e) {
                    const s = tt.ZP.createElement("div", {
                        class: "sm-row"
                    }, tt.ZP.createElement("div", {
                        class: "sm-setting-name"
                    }, t.toUpperCase()), tt.ZP.createElement("div", {
                        class: "sm-control-input-box",
                        tabIndex: -1
                    }, tt.ZP.createElement("span", null, _[0]), tt.ZP.createElement("div", {
                        class: "sm-control-input-box__label"
                    }, "KEYBOARD")), tt.ZP.createElement("div", {
                        class: "sm-control-input-box",
                        tabIndex: -1
                    }, tt.ZP.createElement("span", null, _[1]), tt.ZP.createElement("div", {
                        class: "sm-control-input-box__label"
                    }, "MOUSE")))
                      , i = s.children[1]
                      , n = s.children[2]
                      , o = i.children[0]
                      , h = n.children[0];
                    i.addEventListener("keydown", (t=>{
                        t.preventDefault();
                        const _ = ct(t.code, t.ctrlKey, t.altKey, t.metaKey);
                        this._9199("change-keyboard", [_])
                    }
                    )),
                    n.addEventListener("mousedown", (t=>{
                        if (document.activeElement === n) {
                            const _ = ut(t.button);
                            this._9199("change-mouse-m", [_])
                        }
                    }
                    )),
                    n.addEventListener("keydown", (t=>{
                        t.preventDefault();
                        const _ = ct(t.code, t.ctrlKey, t.altKey, t.metaKey);
                        this._9199("change-mouse-k", [_])
                    }
                    )),
                    super(s),
                    this._1434 = r._6246(o),
                    this._5139 = r._6246(h),
                    this._8169 = _,
                    this._6678 = e
                }
                _9917(t) {
                    this._8169[0] !== t[0] && (this._8169[0] = t[0],
                    this._1434._4667 = t[0]),
                    this._8169[1] !== t[1] && (this._8169[1] = t[1],
                    this._5139._4667 = t[1])
                }
                _2230() {
                    return this._8169
                }
            }
              , ft = class extends J {
                constructor(t) {
                    super(tt.ZP.createElement("div", {
                        class: "sm-sub-category-header"
                    }, tt.ZP.createElement("div", {
                        class: "sm-sub-category-header__decor"
                    }), tt.ZP.createElement("div", {
                        class: "sm-sub-category-header__text"
                    }, t.toUpperCase()), tt.ZP.createElement("div", {
                        class: "sm-sub-category-header__decor"
                    })))
                }
            }
              , pt = class extends i {
                constructor(t) {
                    super();
                    const _ = tt.ZP.createElement("div", {
                        className: "sm-category-selector"
                    }, t.toUpperCase());
                    _.addEventListener("click", (()=>{
                        this._9199("click")
                    }
                    )),
                    this._9843 = r._6246(_),
                    this._4387 = !1
                }
                _7115() {
                    return this._9843._8684
                }
                _8617(t) {
                    this._4387 !== t && (t ? this._9843._4438("sm-category-selector--active") : this._9843._4652("sm-category-selector--active"),
                    this._4387 = t)
                }
                _5037() {
                    return this._4387
                }
            }
              , gt = new class {
                constructor() {
                    this._4718 = null,
                    this._4726 = null
                }
                _1489() {
                    const t = document.getElementById("sm-info-setting-name")
                      , _ = document.getElementById("sm-info-setting-description");
                    this._4718 = r._6246(t),
                    this._4726 = r._6246(_)
                }
                _2081(t, _) {
                    if (null === this._4718 || null === this._4726)
                        throw new Error("Settings menu info box > called update before setup.");
                    this._4718._4667 = t,
                    this._4726._4667 = _
                }
            }
            ;
            class Et extends i {
                constructor() {
                    super();
                    const t = tt.ZP.createElement("i", {
                        class: "dialog-box__checkbox iconfont iconfont-checkbox"
                    });
                    t.addEventListener("click", (()=>{
                        this._8169 = !this._8169,
                        this._1372(),
                        this._9199("change", [this._8169])
                    }
                    )),
                    this._9843 = r._6246(t),
                    this._8169 = !0
                }
                _2230() {
                    return this._8169
                }
                _7115() {
                    return this._9843._8684
                }
                _1372() {
                    this._8169 ? (this._9843._4438("iconfont-checkbox"),
                    this._9843._4652("iconfont-checkbox-outline")) : (this._9843._4438("iconfont-checkbox-outline"),
                    this._9843._4652("iconfont-checkbox"))
                }
            }
            const yt = new class extends i {
                constructor() {
                    super(),
                    this._7951 = null,
                    this._9134 = new Set
                }
                _7764() {
                    this._7869(),
                    document.getElementById("imex-menu-close-btn").onclick = ()=>{
                        this._7486()
                    }
                    ;
                    const t = document.getElementById("import-settings-file-input");
                    t.addEventListener("change", (()=>{
                        if (null !== t.files && t.files.length > 0) {
                            const _ = t=>{
                                try {
                                    const _ = JSON.parse(t);
                                    if ("object" != typeof _ || null === _)
                                        throw "Invalid json";
                                    this._9199("import", [_, this._9134])
                                } catch (t) {
                                    console.error(t),
                                    l._9736("Settings", "Corrupt file, import failed.")
                                }
                            }
                            ;
                            t.files[0].text().then(_).catch(console.error)
                        }
                        t.value = ""
                    }
                    )),
                    document.getElementById("import-settings-button").addEventListener("click", (()=>{
                        t.click()
                    }
                    )),
                    document.getElementById("export-settings-button").addEventListener("click", (()=>{
                        this._9199("export", [this._9134])
                    }
                    ));
                    const _ = document.getElementById("import-export-menu");
                    this._7951 = r._6246(_)
                }
                _7869() {
                    const t = document.getElementById("imex-menu-categories")
                      , _ = ["Gameplay", "Graphics", "Theme", "Controls", "Chat", "Huds"];
                    for (const e of _) {
                        const _ = new Et;
                        _._6206("change", (t=>{
                            t ? this._9134.add(e) : this._9134.delete(e)
                        }
                        ));
                        const s = tt.ZP.createElement("div", {
                            class: "imex-menu__category"
                        }, tt.ZP.createElement("div", {
                            class: "dialog-box__text imex-menu__category-title"
                        }, e, " settings"), _._7115());
                        this._9134.add(e),
                        t.appendChild(s)
                    }
                }
                _8506() {
                    this._7951._9596("display", "flex")
                }
                _7486() {
                    this._7951._9596("display", "none")
                }
            }
            ;
            class wt extends i {
                constructor(t) {
                    super();
                    const _ = document.getElementById(t);
                    if (!(_ instanceof HTMLDivElement))
                        throw new Error(`[Settings Menu] > Invalid bottom button id: ${t}`);
                    _.addEventListener("click", (()=>{
                        this._9199("click")
                    }
                    )),
                    _.addEventListener("mouseenter", (()=>{
                        this._9199("mouseenter")
                    }
                    )),
                    this._5635 = _
                }
                _7115() {
                    return this._5635
                }
            }
            const vt = new class {
                constructor() {
                    this._2649 = null,
                    this._3478 = null,
                    this._3103 = null,
                    this._9778 = null,
                    this._7671 = null,
                    this._7508 = null
                }
                get _3297() {
                    if (null === this._2649)
                        throw new Error("[Settings Menu Bottom Buttons] > setup not called.");
                    return this._2649
                }
                get _3863() {
                    if (null === this._3478)
                        throw new Error("[Settings Menu Bottom Buttons] > setup not called.");
                    return this._3478
                }
                get _9909() {
                    if (null === this._3103)
                        throw new Error("[Settings Menu Bottom Buttons] > setup not called.");
                    return this._3103
                }
                get _8453() {
                    if (null === this._9778)
                        throw new Error("[Settings Menu Bottom Buttons] > setup not called.");
                    return this._9778
                }
                get _6991() {
                    if (null === this._7671)
                        throw new Error("[Settings Menu Bottom Buttons] > setup not called.");
                    return this._7671
                }
                _1489() {
                    this._2649 = new wt("sm-btn-back"),
                    this._3478 = new wt("sm-btn-discard"),
                    this._3103 = new wt("sm-btn-reset"),
                    this._9778 = new wt("sm-btn-import-export"),
                    this._7671 = new wt("sm-btn-restart"),
                    this._7508 = r._6246(this._7671._7115()),
                    this._7508._9596("display", "none")
                }
                _1485(t) {
                    if (null === this._7508)
                        throw new Error("[Settings Menu Bottom Buttons] > setup not called.");
                    this._7508._9596("display", t ? "flex" : "none")
                }
            }
              , bt = new class extends h {
                constructor() {
                    super("settings-menu"),
                    this._5124 = "",
                    this._9462 = {},
                    this._8134 = null,
                    this._9134 = new Map
                }
                _1489() {
                    vt._1489(),
                    gt._1489(),
                    this._8000(),
                    this._1769(),
                    this._6206("show", this._9719.bind(this)),
                    this._6206("hide", this._2259.bind(this)),
                    yt._7764(),
                    yt._6206("import", this._9666.bind(this)),
                    yt._6206("export", this._1503.bind(this));
                    const t = document.getElementById("sm-category-container-wrapper");
                    this._8134 = new q(t),
                    this._8134._1489()
                }
                _6441() {
                    return this._5124
                }
                _8420() {
                    for (const [t,_] of this._9134)
                        if (this._5124 !== t)
                            for (const t of _._4463.values()) {
                                t._7406._7486();
                                for (const _ of t._1420.values())
                                    _._7486()
                            }
                    const t = this._9134.get(this._5124);
                    if (void 0 !== t)
                        for (const _ of t._4463.values()) {
                            let t = !0;
                            for (const [e,s] of _._1420) {
                                const _ = Y[e];
                                let i = !0;
                                for (const t of _._6250)
                                    if (Y[t._8001]._2230() !== t._8042) {
                                        i = !1;
                                        break
                                    }
                                i ? (s._8506(),
                                t = !1) : s._7486()
                            }
                            t ? _._7406._7486() : _._7406._8506()
                        }
                    else
                        console.error("Active settings category is undefined.")
                }
                _8000() {
                    this._7267(),
                    this._7869()
                }
                _5356(t) {
                    const _ = {
                        _4463: new Map
                    };
                    return this._9134.set(t, _),
                    _
                }
                _6830(t, _) {
                    const e = {
                        _7406: new ft(_),
                        _1420: new Map
                    };
                    return t._4463.set(_, e),
                    e
                }
                _8804(t) {
                    if (t instanceof T)
                        return this._3048(t);
                    if (t instanceof I)
                        return this._6277(t);
                    if (t instanceof O)
                        return this._5949(t);
                    if (t instanceof L)
                        return this._9410(t);
                    if (t instanceof P)
                        return this._5188(t);
                    if (t instanceof N)
                        return this._1881(t);
                    throw new Error("Unknown category element type.")
                }
                _7267() {
                    const t = Object.getOwnPropertyNames(Y);
                    for (const _ of t) {
                        const t = Y[_]
                          , e = t._5301[0]
                          , s = this._9134.get(e) || this._5356(e)
                          , i = t._5301[1]
                          , n = s._4463.get(i) || this._6830(s, i)
                          , o = this._8804(t);
                        n._1420.set(_, o),
                        t._6206("change", (()=>{
                            this._8420(),
                            this._5196()
                        }
                        )),
                        o._6206("mouseenter", (()=>{
                            gt._2081(t._7478, t._9111)
                        }
                        ))
                    }
                    const _ = document.getElementById("sm-category-container");
                    for (const t of this._9134.values())
                        for (const e of t._4463.values()) {
                            _.appendChild(e._7406._7115());
                            for (const t of e._1420.values())
                                _.appendChild(t._7115())
                        }
                }
                _7869() {
                    const t = document.getElementById("sm-category-selectors")
                      , _ = [];
                    for (const e of this._9134.keys()) {
                        const s = new pt(e);
                        s._6206("click", (()=>{
                            for (const t of _)
                                t._8617(!1);
                            s._8617(!0),
                            this._5124 = e,
                            this._8420(),
                            null !== this._8134 && (this._8134._2081(),
                            this._8134._2265())
                        }
                        )),
                        _.push(s),
                        t.appendChild(s._7115())
                    }
                    _[0]._7115().click()
                }
                _1769() {
                    vt._3297._6206("mouseenter", (()=>{
                        a._8375(a._8611)
                    }
                    )),
                    vt._3297._6206("click", (()=>{
                        this._9918(),
                        a._8375(a._6538)
                    }
                    )),
                    vt._3863._6206("mouseenter", (()=>{
                        a._8375(a._8611),
                        gt._2081("Discard changes", "Discard all the changes made.")
                    }
                    )),
                    vt._3863._6206("click", (()=>{
                        this._5440(),
                        a._8375(a._6538)
                    }
                    )),
                    vt._9909._6206("mouseenter", (()=>{
                        a._8375(a._8611),
                        gt._2081("Reset", "Reset all the settings of the active category to their default values.")
                    }
                    )),
                    vt._9909._6206("click", (()=>{
                        this._1058(),
                        a._8375(a._6538)
                    }
                    )),
                    vt._8453._6206("mouseenter", (()=>{
                        a._8375(a._8611),
                        gt._2081("Import and export", "Import or export your settings.")
                    }
                    )),
                    vt._8453._6206("click", (()=>{
                        yt._8506(),
                        a._8375(a._6538)
                    }
                    )),
                    vt._6991._6206("mouseenter", (()=>{
                        a._8375(a._8611),
                        gt._2081("Restart", "Some changes require a game restart. Click the button to restart the game (This will reload the page).")
                    }
                    )),
                    vt._6991._6206("click", (()=>{
                        this._5523()
                    }
                    ))
                }
                _3048(t) {
                    const _ = new _t(t._7478,t._2230());
                    return _._6206("change", (_=>{
                        t._9917(_)
                    }
                    )),
                    t._6206("change", (t=>{
                        _._9917(t)
                    }
                    )),
                    _
                }
                _6277(t) {
                    const _ = new et(t._7478,t._8265,t._1479,t._3231,t._2230(),t._2581);
                    return _._6206("change", (_=>{
                        t._9917(_)
                    }
                    )),
                    t._6206("change", (t=>{
                        _._9917(t)
                    }
                    )),
                    _
                }
                _5949(t) {
                    const _ = new st(t._7478,t._9071,t._2230());
                    return _._6206("change", (_=>{
                        t._9917(_)
                    }
                    )),
                    t._6206("change", (t=>{
                        _._9917(t)
                    }
                    )),
                    _
                }
                _9410(t) {
                    const _ = new it(t._7478,t._2230());
                    return _._6206("change", (_=>{
                        t._9917(_)
                    }
                    )),
                    t._6206("change", (t=>{
                        _._9917(t)
                    }
                    )),
                    _
                }
                _5188(t) {
                    const _ = new ht(t._7478,t._2230(),t._5409);
                    return _._6206("change", (_=>{
                        t._9917(_)
                    }
                    )),
                    t._6206("change", (t=>{
                        _._9917(t)
                    }
                    )),
                    _
                }
                _1881(t) {
                    const _ = new mt(t._7478,[...t._2230()],t._3360);
                    return _._6206("change-keyboard", (_=>{
                        if (["", "ESC", "ENTER"].includes(_))
                            return;
                        ["BACKSPACE", "DELETE"].includes(_) && (_ = "NONE");
                        const e = [_, t._2230()[1]];
                        t._9917(e)
                    }
                    )),
                    _._6206("change-mouse-m", (_=>{
                        const e = [t._2230()[0], _];
                        t._9917(e)
                    }
                    )),
                    _._6206("change-mouse-k", (_=>{
                        if (["BACKSPACE", "DELETE"].includes(_)) {
                            const _ = [t._2230()[0], "NONE"];
                            t._9917(_)
                        }
                    }
                    )),
                    t._6206("change", (t=>{
                        _._9917([...t])
                    }
                    )),
                    _
                }
                _9918() {
                    ps._6116()
                }
                _5440() {
                    const t = Object.getOwnPropertyNames(this._9462);
                    for (const _ of t) {
                        const t = this._9462[_];
                        Y[_]._9917(Array.isArray(t) ? t.slice() : t)
                    }
                    vt._1485(!1)
                }
                _1058() {
                    const t = Object.getOwnPropertyNames(F);
                    for (const _ of t) {
                        const t = Y[_];
                        if (t._5301[0] === this._5124) {
                            const e = F[_];
                            t._9917(Array.isArray(e) ? e.slice() : e)
                        }
                    }
                    this._5196()
                }
                _5523() {
                    window.location.reload()
                }
                _9719() {
                    this._9462 = {};
                    const t = Object.getOwnPropertyNames(Y);
                    for (const _ of t) {
                        const t = Y[_]._2230();
                        this._9462[_] = Array.isArray(t) ? t.slice() : t
                    }
                }
                _2259() {
                    const t = Object.getOwnPropertyNames(Y);
                    for (const _ of t) {
                        const t = Y[_]
                          , e = this._9462[_];
                        t._3003 && t._2230() !== e && t._9917(e)
                    }
                }
                _5196() {
                    let t = !1;
                    const _ = Object.getOwnPropertyNames(Y);
                    for (const e of _) {
                        const _ = Y[e];
                        if (_._3003) {
                            const s = this._9462[e]
                              , i = _._2230();
                            if (Array.isArray(s) && Array.isArray(i)) {
                                if (s[0] !== i[0] || s[1] !== i[1]) {
                                    t = !0;
                                    break
                                }
                            } else if (s !== i) {
                                t = !0;
                                break
                            }
                        }
                    }
                    vt._1485(t)
                }
                _9666(t, _) {
                    const e = Z(t)
                      , s = Object.getOwnPropertyNames(Y);
                    for (const t of s) {
                        const s = Y[t]
                          , i = s._5301[0];
                        if (_.has(i) && Object.prototype.hasOwnProperty.call(e.settings, t)) {
                            const _ = e.settings[t];
                            s._9917(Array.isArray(_) ? _.slice() : _)
                        }
                    }
                    l._9736("Settings", "Import was successful.")
                }
                _1503(t) {
                    const _ = {
                        version: 3,
                        settings: {}
                    }
                      , e = Object.getOwnPropertyNames(Y);
                    for (const s of e) {
                        const e = Y[s]
                          , i = e._5301[0];
                        t.has(i) && (_.settings[s] = e._2230())
                    }
                    const s = new Blob([JSON.stringify(_)],{
                        type: "plain/text"
                    })
                      , i = URL.createObjectURL(s)
                      , n = document.createElement("a");
                    n.href = i,
                    n.download = "ryuten-settings.ryuset",
                    n.style.cssText = "position: fixed; top: 100%; left: 100%; opacity: 0;",
                    document.body.appendChild(n),
                    n.click(),
                    setTimeout((()=>{
                        document.body.removeChild(n),
                        l._9736("Settings", "Export was successful.")
                    }
                    ), 50)
                }
            }
              , Ct = new class {
                constructor() {
                    this._5665 = {},
                    this._8585 = null,
                    this._4570 = {
                        _8686: null,
                        _4698: null
                    },
                    this._7067 = {
                        _8686: null,
                        _4698: null
                    },
                    this._2246 = {
                        _7253: 0,
                        _1398: 0,
                        _7518: 0,
                        _3824: 0
                    },
                    this._9995 = {
                        _5347: !1,
                        _7031: 0
                    }
                }
                get _7541() {
                    return this._5665
                }
                _1489() {
                    this._5665 = new c.W20;
                    const t = e(389)
                      , _ = e(418)
                      , s = new c.$rD(t,_,"screen-overlay-shader")
                      , i = new c.exe(s);
                    this._4570._8686 = new Float32Array([].concat([-1, -1, 0, 0, 0, .5], [-1, 1, 0, 0, 0, .5], [1, -1, 0, 0, 0, .5], [1, 1, 0, 0, 0, .5])),
                    this._4570._4698 = new Uint16Array([0, 1, 2, 1, 2, 3]),
                    this._7067._8686 = new c.lWr(this._4570._8686,!1,!1),
                    this._7067._4698 = new c.lWr(this._4570._4698,!0,!0);
                    const n = new c.ZXM;
                    n.addAttribute("aPosition", this._7067._8686, 2, !1, c.vK6.FLOAT, 24, 0),
                    n.addAttribute("aColor", this._7067._8686, 4, !1, c.vK6.FLOAT, 24, 8),
                    n.addIndex(this._7067._4698),
                    this._8585 = new c.Kj0(n,i),
                    this._7541.addChild(this._8585)
                }
                _2081() {
                    const t = ps._9136;
                    this._3836(t ? 1 : 0),
                    this._3410();
                    const _ = bt._3235 && "Theme" === bt._6441();
                    _ ? this._9995._5347 || (this._9995._5347 = !0,
                    this._9995._7031 = n._8276) : this._9995._5347 && (this._9995._5347 = !1,
                    this._9995._7031 = n._8276);
                    const e = Math.min(1, (n._8276 - this._9995._7031) / 400) ** .5
                      , s = 2 * Math.min(e, .5)
                      , i = 2 * Math.max(e - .5, 0);
                    _ ? (this._8802([1006799822, 1006946523, 1324929 | Math.floor(60 * (1 - s)) << 24, 313563 | Math.floor(60 * (1 - s)) << 24]),
                    this._4570._8686[12] = 1 - .75 * i,
                    this._4570._8686[18] = 1 - .5 * i) : (this._8802([1006799822, 1006946523, 1324929 | Math.floor(60 * i) << 24, 313563 | Math.floor(60 * i) << 24]),
                    this._4570._8686[12] = .25 + .75 * s,
                    this._4570._8686[18] = .5 + .5 * s),
                    this._7067._8686.update(),
                    this._2246._1398 > 0 ? 1 !== this._5665.children.length && this._5665.addChild(this._8585) : 0 !== this._5665.children.length && this._5665.removeChildren()
                }
                _3410() {
                    const t = Math.min(1, (n._8276 - this._2246._3824) / 200);
                    this._2246._1398 = this._2246._7253 + (this._2246._7518 - this._2246._7253) * t
                }
                _3836(t) {
                    t !== this._2246._7518 && (this._2246._7253 = this._2246._1398,
                    this._2246._7518 = t,
                    this._2246._3824 = n._8276)
                }
                _8802(t) {
                    const _ = [];
                    for (const e of t) {
                        const t = ((16711680 & e) >> 16) / 255
                          , s = ((65280 & e) >> 8) / 255
                          , i = ((255 & e) >> 0) / 255
                          , n = ((4278190080 & e) >> 24) / 100;
                        _.push([t, s, i, n])
                    }
                    for (let t = 0; t < 4; t++) {
                        const e = _[t]
                          , s = e[3] * this._2246._1398;
                        this._4570._8686[6 * t + 2] = e[0] * s,
                        this._4570._8686[6 * t + 3] = e[1] * s,
                        this._4570._8686[6 * t + 4] = e[2] * s,
                        this._4570._8686[6 * t + 5] = s
                    }
                    this._7067._8686.update()
                }
            }
              , At = class {
            }
              , St = new class extends At {
                constructor() {
                    super(),
                    this._5665 = null,
                    this._2891 = null,
                    this._3043 = null,
                    this._8585 = null,
                    this._7067 = {
                        _3112: {
                            _8686: null,
                            _4698: null
                        },
                        _1969: {
                            _8686: null,
                            _4698: null
                        }
                    },
                    this._1799 = {
                        _5173: null,
                        _1390: null,
                        _3041: null
                    },
                    this._7315 = {
                        _7614: -1,
                        _1109: -1,
                        _7928: -1
                    }
                }
                _6360() {
                    return this._5665
                }
                _1489() {
                    this._5665 = new c.W20,
                    this._2891 = document.createElement("canvas"),
                    this._3043 = this._2891.getContext("2d"),
                    this._1799._5173 = new Float32Array(2),
                    this._1799._1390 = new Float32Array(2),
                    this._1799._3041 = new c.VL4(this._2891);
                    const t = e(109)
                      , _ = e(578)
                      , s = new c.$rD(t,_,"particles-shader")
                      , i = new c.exe(s,{
                        uTranslate: this._1799._5173,
                        uScale: this._1799._1390,
                        uTexture: this._1799._3041
                    })
                      , n = this._7067;
                    n._1969._8686 = new Float32Array(163830),
                    n._1969._4698 = new Uint16Array(65532),
                    n._3112._8686 = new c.lWr(new Float32Array(0),!1,!1),
                    n._3112._4698 = new c.lWr(new Uint16Array(0),!1,!0);
                    const o = new c.ZXM;
                    o.addAttribute("aPosition", n._3112._8686, 2, !1, c.vK6.FLOAT, 20, 0),
                    o.addAttribute("aAlpha", n._3112._8686, 1, !1, c.vK6.FLOAT, 20, 16),
                    o.addAttribute("aUV", n._3112._8686, 2, !1, c.vK6.FLOAT, 20, 8),
                    o.addIndex(n._3112._4698),
                    this._8585 = new c.Kj0(o,i),
                    this._5665.addChild(this._8585),
                    this._6843()
                }
                _6843() {
                    const t = [];
                    for (let _ = 0; _ < 6; _++) {
                        const e = 2 * Math.PI * (_ / 6)
                          , s = .5 + .5 * Math.cos(e)
                          , i = .5 + .5 * Math.sin(e);
                        t.push([s, i])
                    }
                    let _ = 0
                      , e = 0;
                    for (let s = 0; s < 5461; s++) {
                        for (let e = 0; e < 6; e++)
                            _ += 2,
                            this._7067._1969._8686[_++] = t[e][0],
                            this._7067._1969._8686[_++] = t[e][1],
                            _ += 1;
                        const i = 6 * s;
                        this._7067._1969._4698[e++] = i + 0,
                        this._7067._1969._4698[e++] = i + 1,
                        this._7067._1969._4698[e++] = i + 5,
                        this._7067._1969._4698[e++] = i + 1,
                        this._7067._1969._4698[e++] = i + 2,
                        this._7067._1969._4698[e++] = i + 5,
                        this._7067._1969._4698[e++] = i + 3,
                        this._7067._1969._4698[e++] = i + 4,
                        this._7067._1969._4698[e++] = i + 2,
                        this._7067._1969._4698[e++] = i + 4,
                        this._7067._1969._4698[e++] = i + 5,
                        this._7067._1969._4698[e++] = i + 2
                    }
                }
                _1256() {
                    const t = Y.PARTICLE_COLOR._2230()
                      , _ = Y.PARTICLE_GLOW_SIZE._2230()
                      , e = Y.PARTICLE_GLOW_COLOR._2230();
                    if (this._7315._7614 === t && this._7315._1109 === _ && this._7315._7928 === e)
                        return;
                    this._7315._7614 = t,
                    this._7315._1109 = _,
                    this._7315._7928 = e;
                    const s = this._2891
                      , i = this._3043
                      , n = 8 + _
                      , o = n * (2 / Math.sqrt(3))
                      , r = (l = o,
                    l--,
                    l |= l >> 1,
                    l |= l >> 2,
                    1 + ((l |= l >> 4) | l >> 8))
                      , h = this._8557(t, !1)
                      , a = this._8557(e, !0)
                      , c = this._8557(16777215 & e, !0);
                    var l;
                    if (s.width = 2 * r,
                    s.height = 2 * r,
                    _ > 0) {
                        const t = i.createRadialGradient(r, r, 8, r, r, n);
                        t.addColorStop(0, a),
                        t.addColorStop(1, c),
                        i.beginPath(),
                        i.arc(r, r, n, 0, 2 * Math.PI),
                        i.closePath(),
                        i.fillStyle = t,
                        i.fill()
                    }
                    i.beginPath(),
                    i.arc(r, r, 8, 0, 2 * Math.PI),
                    i.closePath(),
                    i.fillStyle = h,
                    i.fill(),
                    this._1799._3041.update(),
                    this._1799._3041.setSize(this._2891.width, this._2891.height)
                }
                _9257() {
                    const t = Math.min(5461, ee._7311.length);
                    let _ = 0;
                    for (let e = 0; e < t; e++) {
                        const t = ee._7311[e]
                          , s = t._9617 / 8 * (this._3043.canvas.width / 2);
                        for (let e = 0; e < 6; e++) {
                            const i = 2 * Math.PI * (e / 6)
                              , n = Math.cos(i)
                              , o = Math.sin(i);
                            this._7067._1969._8686[_++] = t._4526 + n * s,
                            this._7067._1969._8686[_++] = t._6966 + o * s,
                            _ += 2,
                            this._7067._1969._8686[_++] = t._9101
                        }
                    }
                    this._7067._3112._8686.update(this._7067._1969._8686.subarray(0, 30 * t)),
                    this._7067._3112._4698.update(this._7067._1969._4698.subarray(0, 12 * t))
                }
                _4555() {
                    this._1799._5173[0] = j_._6000._4526,
                    this._1799._5173[1] = j_._6000._6966,
                    this._1799._1390[0] = j_._9830 / (Q_._2023 / 2),
                    this._1799._1390[1] = -j_._9830 / (Q_._2231 / 2)
                }
                _8557(t, _) {
                    const e = (16711680 & t) >>> 16
                      , s = (65280 & t) >>> 8
                      , i = (255 & t) >>> 0;
                    return _ ? `rgba(${e}, ${s}, ${i}, ${((4278190080 & t) >>> 24) / 100})` : `rgb(${e}, ${s}, ${i})`
                }
                _2081() {
                    this._1256(),
                    this._9257(),
                    this._4555()
                }
            }
              , Tt = new class extends At {
                constructor() {
                    super(),
                    this._5665 = null,
                    this._8585 = null,
                    this._7067 = {
                        _8686: null,
                        _4698: null
                    },
                    this._1799 = {
                        uTranslate: null,
                        uScale: null,
                        uTexture: null,
                        uTint: null
                    },
                    this._7315 = {
                        _6649: .5,
                        _9587: -1,
                        _6334: ""
                    }
                }
                _6360() {
                    return this._5665
                }
                _1489() {
                    this._5665 = new c.W20,
                    this._4764(),
                    this._6843();
                    const t = this._8649()
                      , _ = this._8478();
                    this._8585 = new c.Kj0(t,_)
                }
                _2081() {
                    this._5665.removeChildren(),
                    Y.WORLD_BACKGROUND_IMAGE._2230() && (this._1256(),
                    this._9257(),
                    this._4555(),
                    this._5665.addChild(this._8585))
                }
                _4764() {
                    this._1799.uTranslate = new Float32Array(2),
                    this._1799.uScale = new Float32Array(2),
                    this._1799.uTexture = c.xEZ.WHITE.baseTexture,
                    this._1799.uTint = new Float32Array(4)
                }
                _6843() {
                    const t = new Float32Array(16)
                      , _ = new Uint16Array([0, 1, 2, 1, 2, 3]);
                    this._7067._8686 = new c.lWr(t,!1,!1),
                    this._7067._4698 = new c.lWr(_,!0,!0)
                }
                _8649() {
                    const t = new c.ZXM;
                    return t.addAttribute("aPosition", this._7067._8686, 2, !1, c.vK6.FLOAT, 16, 0),
                    t.addAttribute("aUV", this._7067._8686, 2, !1, c.vK6.FLOAT, 16, 8),
                    t.addIndex(this._7067._4698),
                    t
                }
                _8478() {
                    const t = new c.$rD(e(290),e(313),"background-shader");
                    return new c.exe(t,this._1799)
                }
                _1256() {
                    const t = this._1799.uTexture !== c.xEZ.WHITE.baseTexture ? Y.BACKGROUND_IMAGE_COLOR._2230() : Y.BACKGROUND_COLOR._2230();
                    this._7315._9587 !== t && (this._7315._9587 = t,
                    this._1799.uTint[0] = ((16711680 & t) >> 16) / 255,
                    this._1799.uTint[1] = ((65280 & t) >> 8) / 255,
                    this._1799.uTint[2] = ((255 & t) >> 0) / 255,
                    this._1799.uTint[3] = 1);
                    const _ = Y.BACKGROUND_IMAGE_URL._2230()
                      , e = Y.BACKGROUND_IMAGE_QUALITY._2230()
                      , s = 2 ** ("low" === e ? -1 : "high" === e ? 1 : 0);
                    this._7315._6334 === _ && this._7315._6649 === s || (this._7315._6334 = _,
                    this._7315._6649 = s,
                    this._1209(_, s).catch(console.error))
                }
                async _1209(t, _) {
                    this._1799.uTexture !== c.xEZ.WHITE.baseTexture && (this._1799.uTexture.destroy(),
                    this._1799.uTexture = c.xEZ.WHITE.baseTexture);
                    const e = new Image;
                    if (e.src = t,
                    e.crossOrigin = "anonymous",
                    await e.decode(),
                    this._7315._6334 !== t || this._7315._6649 !== _)
                        return;
                    const s = document.createElement("canvas")
                      , i = s.getContext("2d")
                      , n = 2048 * _;
                    s.width = s.height = n,
                    i.imageSmoothingEnabled = !0,
                    i.imageSmoothingQuality = "high",
                    i.drawImage(e, 0, 0, n, n);
                    const o = await new Promise(((t,_)=>{
                        s.toBlob((e=>{
                            null === e ? _() : t(e)
                        }
                        ))
                    }
                    ));
                    if (this._7315._6334 !== t || this._7315._6649 !== _)
                        return;
                    const r = URL.createObjectURL(o)
                      , h = new Image;
                    if (h.src = r,
                    await h.decode(),
                    URL.revokeObjectURL(r),
                    this._7315._6334 !== t || this._7315._6649 !== _)
                        return;
                    const a = new c.VL4(h,{
                        mipmap: c.WBB.OFF
                    });
                    this._1799.uTexture = a
                }
                _9257() {
                    const t = (65535 - ee._4006) / 2
                      , _ = t
                      , e = t
                      , s = t + ee._4006
                      , i = t + ee._4006
                      , n = j_._9716
                      , o = n._6457 > _ ? n._6457 : _
                      , r = n._2706 > e ? n._2706 : e
                      , h = n._2689 < s ? n._2689 : s
                      , a = n._9957 < i ? n._9957 : i
                      , c = (o - _) / ee._4006
                      , l = (r - e) / ee._4006
                      , u = (h - _) / ee._4006
                      , d = (a - e) / ee._4006;
                    this._9529(0, o, r, c, l),
                    this._9529(1, h, r, u, l),
                    this._9529(2, o, a, c, d),
                    this._9529(3, h, a, u, d),
                    this._7067._8686.update()
                }
                _9529(t, _, e, s, i) {
                    t *= 4,
                    this._7067._8686.data[t] = _,
                    this._7067._8686.data[t + 1] = e,
                    this._7067._8686.data[t + 2] = s,
                    this._7067._8686.data[t + 3] = i
                }
                _4555() {
                    this._1799.uTranslate[0] = j_._6000._4526,
                    this._1799.uTranslate[1] = j_._6000._6966,
                    this._1799.uScale[0] = j_._9830 / (Q_._2023 / 2),
                    this._1799.uScale[1] = -j_._9830 / (Q_._2231 / 2)
                }
            }
            ;
            var It = e(526);
            const Ot = new class extends At {
                constructor() {
                    super(),
                    this._5665 = null,
                    this._8585 = null,
                    this._7067 = {
                        _8686: null,
                        _4698: null
                    },
                    this._1799 = {
                        _5173: new Float32Array(2),
                        _1390: new Float32Array(2)
                    }
                }
                _6360() {
                    return this._5665
                }
                _1489() {
                    this._5665 = new c.W20;
                    const t = e(995)
                      , _ = e(403)
                      , s = new c.$rD(t,_,"border-shader")
                      , i = new c.exe(s,{
                        uTranslate: this._1799._5173,
                        uScale: this._1799._1390
                    })
                      , n = It.mesh_gen_border_get_buffers();
                    this._7067._8686 = new c.lWr(n[0],!1,!1),
                    this._7067._4698 = new c.lWr(n[1],!1,!0);
                    const o = new c.ZXM;
                    o.addAttribute("aPosition", this._7067._8686, 2, !1, c.vK6.FLOAT, 24, 0),
                    o.addAttribute("aColor", this._7067._8686, 4, !1, c.vK6.FLOAT, 24, 8),
                    o.addIndex(this._7067._4698),
                    this._8585 = new c.Kj0(o,i),
                    this._5665.addChild(this._8585)
                }
                _9257() {
                    It.mesh_gen_border_update_buffers(ee._4006, Y.BORDER_SIZE._2230(), Y.BORDER_COLOR._2230(), 3.5 * Y.BORDER_GLOW_SIZE._2230(), Y.BORDER_GLOW_COLOR._2230()),
                    this._7067._8686.update(),
                    this._7067._4698.update()
                }
                _4555() {
                    this._1799._5173[0] = j_._6000._4526,
                    this._1799._5173[1] = j_._6000._6966,
                    this._1799._1390[0] = j_._9830 / (Q_._2023 / 2),
                    this._1799._1390[1] = -j_._9830 / (Q_._2231 / 2)
                }
                _2081() {
                    this._9257(),
                    this._4555()
                }
            }
              , Lt = new class {
                constructor() {
                    this._5665 = document.getElementById("loading-screen"),
                    this._7477 = document.getElementById("ls-background"),
                    this._6462 = {
                        _6457: document.getElementById("ls-text-left"),
                        _2689: document.getElementById("ls-text-right")
                    },
                    this._1319 = document.getElementById("ls-progress-bar-fill"),
                    this._6363 = 0,
                    this._5319 = 1
                }
                async _1489() {
                    await this._6020(),
                    this._6363 = window.setInterval((()=>{
                        this._5319 = (this._5319 + 1) % 4;
                        const t = ".".repeat(this._5319);
                        this._6462._6457.textContent = `Please wait ${t}`
                    }
                    ), 300)
                }
                _9437() {
                    this._5665.style.opacity = "0",
                    window.clearInterval(this._6363),
                    window.setTimeout((()=>{
                        document.body.removeChild(this._5665),
                        this._5665 = null,
                        this._7477 = null,
                        this._6462._6457 = null,
                        this._6462._2689 = null,
                        this._1319 = null
                    }
                    ), 500)
                }
                _8809(t) {
                    this._6462._2689.textContent = t
                }
                _5876(t) {
                    this._1319.style.width = `${t}%`
                }
                async _6020() {
                    this._7477.src = "assets/images/loading-screen/background.webp?version=0.16.4";
                    try {
                        await this._7477.decode(),
                        this._7477.style.opacity = "1",
                        await this._2934(500)
                    } catch (t) {
                        console.warn("Loading screen background image failed to load. Skipping...")
                    }
                }
                async _2934(t) {
                    return new Promise((_=>{
                        window.setTimeout(_, t)
                    }
                    ))
                }
            }
              , Pt = [{
                _3901: "img",
                _8001: "TEXTURE_ATLAS_SHIELD_1",
                _6334: "assets/images/textures/shields/ATLAS_1.webp"
            }, {
                _3901: "img",
                _8001: "TEXTURE/SSS/P1",
                _6334: "assets/images/textures/SSS/p1.webp"
            }, {
                _3901: "img",
                _8001: "TEXTURE/SSS/P2",
                _6334: "assets/images/textures/SSS/p2.webp"
            }, {
                _3901: "img",
                _8001: "TEXTURE/H3D/COMMANDER",
                _6334: "assets/images/textures/H3D/commander.webp"
            }, {
                _3901: "img",
                _8001: "TEXTURE/H3D/OVERLAP_HELPER",
                _6334: "assets/images/textures/H3D/OVERLAP_HELPER.webp"
            }, {
                _3901: "txt",
                _8001: "titillium-web-font-xml",
                _6334: "assets/bitmap-fonts/titillium_web.fnt"
            }, {
                _3901: "img",
                _8001: "titillium-web-font-atlas",
                _6334: "assets/bitmap-fonts/titillium_web_0.png"
            }, {
                _3901: "json",
                _8001: "titles-info",
                _6334: "assets/misc/titles_info.json"
            }];
            Pt.forEach((t=>{
                const _ = new URL(t._6334,location.href);
                _.searchParams.append("version", "0.16.4"),
                t._6334 = _.toString()
            }
            ));
            const Nt = new class {
                constructor() {
                    this._5635 = document.getElementById("error-screen"),
                    this._1230 = document.getElementById("es-error"),
                    this._1030 = document.getElementById("es-description")
                }
                _8506(t, _, e) {
                    throw this._1230.textContent = `error: ${t}`,
                    void 0 === _ ? this._1030.style.display = "none" : (this._1030.style.display = "block",
                    this._1030.textContent = _),
                    this._5635.style.opacity = "1",
                    this._5635.style.transform = "perspective(1px) translateZ(0px)",
                    this._5635.style.visibility = "visible",
                    void 0 === e ? t : e
                }
            }
              , Mt = new class {
                constructor() {
                    this._5846 = new Map,
                    this._6809 = {
                        _1045: 0,
                        _6493: 0
                    }
                }
                async _8772() {
                    Lt._8809("Loading game resources");
                    const t = [];
                    for (const _ of Pt)
                        switch (_._3901) {
                        case "img":
                            t.push(this._6494(_));
                            break;
                        case "txt":
                            t.push(this._5727(_));
                            break;
                        case "json":
                            t.push(this._2116(_))
                        }
                    this._6809._1045 = t.length;
                    try {
                        await Promise.all(t)
                    } catch (t) {
                        Nt._8506("resource_load_failed", "One or more game resource has failed to load. Please try reloading the page to fix the problem.", t)
                    }
                }
                _7625(t) {
                    return this._5846.get(t)
                }
                async _6494(t) {
                    return new Promise(((_,e)=>{
                        const s = new Image;
                        s.crossOrigin = "anonymous",
                        s.addEventListener("load", (()=>{
                            s.decode().catch((()=>{
                                console.warn(["Failed to decode image resource:", `id: ${t._8001 || "none"}`, `url: ${t._6334}`].join("\n  "))
                            }
                            )).finally((()=>{
                                this._6215(t, s),
                                _()
                            }
                            ))
                        }
                        )),
                        s.addEventListener("error", (()=>{
                            e(this._3035(t))
                        }
                        )),
                        s.src = t._6334
                    }
                    ))
                }
                async _5727(t) {
                    return new Promise(((_,e)=>{
                        const s = new XMLHttpRequest;
                        s.addEventListener("load", (()=>{
                            this._6215(t, s.responseText),
                            _()
                        }
                        )),
                        s.addEventListener("error", (()=>{
                            const _ = this._3035(t);
                            e(_)
                        }
                        )),
                        s.open("GET", t._6334),
                        s.send()
                    }
                    ))
                }
                async _2116(t) {
                    return new Promise(((_,e)=>{
                        const s = new XMLHttpRequest;
                        s.addEventListener("load", (()=>{
                            this._6215(t, s.response),
                            _()
                        }
                        )),
                        s.addEventListener("error", (()=>{
                            const _ = this._3035(t);
                            e(_)
                        }
                        )),
                        s.responseType = "json",
                        s.open("GET", t._6334),
                        s.send()
                    }
                    ))
                }
                _6215(t, _) {
                    t._8001 && this._5846.set(t._8001, _),
                    this._6809._6493++,
                    this._9329()
                }
                _3035(t) {
                    return new Error(["Failed to load resource:", `id: ${t._8001 || "none"}`, `url: ${t._6334}`].join("\n  "))
                }
                _9329() {
                    const t = this._6809._1045
                      , _ = this._6809._6493;
                    Lt._8809(`Loading game resources (${_}/${t})`),
                    Lt._5876(10 + _ / t * 80)
                }
            }
              , Rt = new class {
                constructor() {
                    this._2891 = null,
                    this._3043 = null,
                    this._5142 = !1,
                    this._3731 = null,
                    this._7889 = {
                        _5377: null,
                        _3900: {
                            _1613: null,
                            _3042: null
                        },
                        _6416: null,
                        _8035: null
                    },
                    this._4197 = {
                        _5377: {
                            _6039: "",
                            _5409: 0
                        },
                        _3900: {
                            _1241: 0,
                            _7079: 0,
                            _1109: 0,
                            _7928: 0
                        }
                    }
                }
                _1489() {
                    this._2891 = document.createElement("canvas"),
                    this._2891.width = 1024,
                    this._2891.height = 1024,
                    this._3043 = this._2891.getContext("2d"),
                    this._3731 = new c.VL4(this._2891),
                    this._7889._5377 = new c.xEZ(this._3731,this._6204(512, 0, 512)),
                    this._7889._3900._1613 = new c.xEZ(this._3731,this._6204(512, 512, 256)),
                    this._7889._3900._3042 = new c.xEZ(this._3731,this._6204(768, 512, 256)),
                    this._7889._6416 = new c.xEZ(this._3731,this._6204(512, 768, 64)),
                    this._7889._8035 = new Map,
                    this._2282(),
                    this._8433()
                }
                _2081() {
                    this._6123(),
                    this._5142 && (this._3731.update(),
                    this._5142 = !1)
                }
                _6123() {
                    this._5983(),
                    this._8670()
                }
                _5983() {
                    const t = Y.ORB_STYLE._2230()
                      , _ = Y.ORB_TRANSPARENCY._2230();
                    this._4197._5377._6039 === t && this._4197._5377._5409 === _ || (this._4197._5377._6039 = t,
                    this._4197._5377._5409 = _,
                    this._2791())
                }
                _8670() {
                    const t = Y.ILL_ORB_BORDER_COLOR._2230()
                      , _ = Y.ILL_ORB_BASE_COLOR._2230()
                      , e = Y.ILL_ORB_GLOW_SIZE._2230()
                      , s = Y.ILL_ORB_GLOW_COLOR._2230();
                    this._4197._3900._1241 === t && this._4197._3900._7079 === _ && this._4197._3900._1109 === e && this._4197._3900._7928 === s || (this._4197._3900._1241 = t,
                    this._4197._3900._7079 = _,
                    this._4197._3900._1109 = e,
                    this._4197._3900._7928 = s,
                    this._4839())
                }
                _8433() {
                    const t = Mt._7625("titillium-web-font-atlas");
                    this._3043.drawImage(t, 0, 0, 512, 512);
                    const _ = [[0, 65, 95, 105], [346, 290, 72, 105], [176, 290, 86, 105], [89, 290, 87, 105], [190, 65, 93, 105], [0, 290, 89, 105], [283, 65, 93, 105], [262, 290, 84, 105], [95, 65, 95, 105], [376, 65, 93, 105]];
                    for (let t = 0; t < 10; t++) {
                        const e = t.toString()
                          , s = _[t];
                        this._7889._8035.set(e, new c.xEZ(this._3731,new c.AeJ(s[0],s[1],s[2],s[3])))
                    }
                    this._5142 = !0
                }
                _2791() {
                    const t = this._3043
                      , _ = 512
                      , e = Math.log2(_)
                      , s = (_ - 2 * e) / 2
                      , i = this._4197._5377._6039
                      , n = 1 - this._4197._5377._5409 / 100;
                    if (t.save(),
                    t.clearRect(512, 0, _, _),
                    t.translate(512 + e, 0 + e),
                    t.beginPath(),
                    t.arc(s, s, s, 0, 2 * Math.PI),
                    t.closePath(),
                    "flat" === i)
                        t.fillStyle = `rgba(255, 255, 255, ${n})`,
                        t.fill();
                    else if ("convex" === i) {
                        const _ = t.createRadialGradient(s, s, 0, s, s, s)
                          , e = 215 + 40 * (1 - 2 * n);
                        _.addColorStop(0, `rgba(${e}, ${e}, ${e}, ${n})`),
                        _.addColorStop(1, "rgba(255, 255, 255, 1)"),
                        t.fillStyle = _,
                        t.fill()
                    }
                    t.restore(),
                    this._5142 = !0
                }
                _4839() {
                    this._8368(),
                    this._1800(),
                    this._5142 = !0
                }
                _8368() {
                    const t = this._3043
                      , _ = 256
                      , e = Math.log2(_)
                      , s = (_ - 2 * e) / 2
                      , i = this._4197._3900._7079
                      , n = this._4197._3900._1241
                      , o = this._4197._3900._7928
                      , r = s * (this._4197._3900._1109 / 100);
                    if (t.save(),
                    t.clearRect(512, 512, _, _),
                    t.translate(512 + e, 512 + e),
                    t.beginPath(),
                    t.arc(s, s, 36, 0, 2 * Math.PI),
                    t.closePath(),
                    t.fillStyle = this._8557(i, !0),
                    t.fill(),
                    r > 0) {
                        const _ = t.createRadialGradient(s, s, 0, s, s, r);
                        _.addColorStop(0, this._8557(16777215 & o, !0)),
                        _.addColorStop(Math.min(1, 36 / r), this._8557(o, !0)),
                        _.addColorStop(1, this._8557(16777215 & o, !0)),
                        t.beginPath(),
                        t.arc(s, s, r, 0, 2 * Math.PI),
                        t.closePath(),
                        t.fillStyle = _,
                        t.fill()
                    }
                    const h = 2 * Math.PI * 36;
                    t.beginPath(),
                    t.arc(s, s, 36, 0, 2 * Math.PI),
                    t.closePath(),
                    t.setLineDash([h / 6 * .9, h / 6 * .1]),
                    t.lineWidth = 2,
                    t.strokeStyle = this._8557(n, !1),
                    t.stroke();
                    const a = 2 * Math.PI * 31;
                    t.beginPath(),
                    t.arc(s, s, 31, 0, 2 * Math.PI),
                    t.closePath(),
                    t.setLineDash([.3 * a, .2 * a]),
                    t.lineWidth = 4,
                    t.strokeStyle = this._8557(n, !1),
                    t.stroke();
                    const c = 2 * Math.PI * 31;
                    t.beginPath(),
                    t.arc(s, s, 31, 0 + .5 * Math.PI, 2 * Math.PI + .5 * Math.PI),
                    t.closePath(),
                    t.setLineDash([.005 * c, .01 * c]),
                    t.lineWidth = 4,
                    t.strokeStyle = this._8557(n, !1),
                    t.stroke(),
                    t.restore(),
                    this._5142 = !0
                }
                _1800() {
                    const t = this._3043
                      , _ = 256
                      , e = Math.log2(_)
                      , s = (_ - 2 * e) / 2
                      , i = this._4197._3900._7079
                      , n = this._4197._3900._1241
                      , o = this._4197._3900._7928
                      , r = s * (this._4197._3900._1109 / 100);
                    if (t.save(),
                    t.clearRect(768, 512, _, _),
                    t.translate(768 + e, 512 + e),
                    t.beginPath(),
                    t.arc(s, s, 36, 0, 2 * Math.PI),
                    t.closePath(),
                    t.fillStyle = this._8557(i, !0),
                    t.fill(),
                    r > 0) {
                        const _ = t.createRadialGradient(s, s, 0, s, s, r);
                        _.addColorStop(0, this._8557(16777215 & o, !0)),
                        _.addColorStop(Math.min(1, 36 / r), this._8557(o, !0)),
                        _.addColorStop(1, this._8557(16777215 & o, !0)),
                        t.beginPath(),
                        t.arc(s, s, r, 0, 2 * Math.PI),
                        t.closePath(),
                        t.fillStyle = _,
                        t.fill()
                    }
                    t.beginPath(),
                    t.arc(s, s, 36, 0, 2 * Math.PI),
                    t.closePath(),
                    t.fillStyle = this._8557(n, !1),
                    t.fill(),
                    t.restore(),
                    this._5142 = !0
                }
                _2282() {
                    const t = this._3043
                      , _ = Math.log2(64)
                      , e = 64 - 2 * _;
                    t.save(),
                    t.clearRect(0, 0, 64, 64),
                    t.translate(512 + _, 768 + _),
                    t.beginPath(),
                    t.moveTo(0, .2 * e),
                    t.lineTo(e, .2 * e),
                    t.lineTo(e / 2, e - .2 * e),
                    t.closePath(),
                    t.fillStyle = "#ffffff",
                    t.fill(),
                    t.restore()
                }
                _6204(t, _, e) {
                    const s = Math.log2(e);
                    return new c.AeJ(t + s,_ + s,e - 2 * s,e - 2 * s)
                }
                _8557(t, _) {
                    const e = (16711680 & t) >>> 16
                      , s = (65280 & t) >>> 8
                      , i = (255 & t) >>> 0;
                    return _ ? `rgba(${e}, ${s}, ${i}, ${((4278190080 & t) >>> 24) / 100})` : `rgb(${e}, ${s}, ${i})`
                }
            }
              , xt = new class {
                constructor() {
                    this._1974 = {
                        _1613: [],
                        _3042: []
                    },
                    this._2864 = {
                        _1613: 0,
                        _3042: 0
                    },
                    this._3027 = 36
                }
                _1489() {}
                _2100(t, _) {
                    const e = Y.ELEMENT_ANIMATION_SOFTENING._2230();
                    let s = 1;
                    t._6671 ? s = 1 - t._7696 : n._8276 - t._1826 < e && (s = (n._8276 - t._1826) / e);
                    const i = this._1974._1613[this._2864._1613++] || this._9161()
                      , o = t._3900._6679;
                    i.position.set(t._4526, t._6966),
                    i.scale.set(t._9617 / this._3027, t._9617 / this._3027),
                    i.alpha = s,
                    i.rotation = n._8276 % o / o * (2 * Math.PI),
                    _.addChild(i);
                    const r = t._7845
                      , h = this._1974._3042[this._2864._3042++] || this._1756()
                      , a = (r - 100) / 112 * .8 + .2;
                    h.position.set(t._4526, t._6966),
                    h.scale.set(t._9617 * a / this._3027, t._9617 * a / this._3027),
                    h.alpha = s,
                    _.addChild(h)
                }
                _9161() {
                    const t = new c.jyi(Rt._7889._3900._1613);
                    return t.anchor.set(.5, .5),
                    this._1974._1613.push(t),
                    t
                }
                _1756() {
                    const t = new c.jyi(Rt._7889._3900._3042);
                    return t.anchor.set(.5, .5),
                    this._1974._3042.push(t),
                    t
                }
                _9909() {
                    this._2864._1613 = 0,
                    this._2864._3042 = 0
                }
            }
              , kt = new class {
                constructor() {
                    this._1974 = [],
                    this._2864 = 0
                }
                _2100(t, _) {
                    const e = Y.ELEMENT_ANIMATION_SOFTENING._2230();
                    let s = 1;
                    t._6671 ? s = 1 - t._7696 : n._8276 - t._1826 < e && (s = (n._8276 - t._1826) / e);
                    const i = this._1974[this._2864++] || this._2917();
                    i.position.set(t._4526, t._6966),
                    i.width = 2 * t._9617,
                    i.height = 2 * t._9617,
                    "tint" === Y.ORB_COLORING._2230() ? i.tint = t._7317._9458 : i.tint = t._7614._9458,
                    i.alpha = s,
                    _.addChild(i)
                }
                _2917() {
                    const t = new c.jyi(Rt._7889._5377);
                    return t.anchor.set(.5, .5),
                    this._1974.push(t),
                    t
                }
                _9909() {
                    this._2864 = 0
                }
            }
              , Bt = new class {
                constructor() {
                    this._9492 = [],
                    this._2864 = 0
                }
                _4287() {
                    return this._9492[this._2864++] || this._2917()
                }
                _2917() {
                    const t = new c.jyi(Rt._7889._6416);
                    return t.anchor.set(.5, 1),
                    t.scale.set(4, 4),
                    this._9492.push(t),
                    t
                }
                _9909() {
                    this._2864 = 0
                }
            }
              , Ht = new class {
                constructor() {
                    this._1974 = new Map,
                    this._9450 = new Map
                }
                _1489() {
                    for (let t = 0; t < 10; t++) {
                        const _ = t.toString();
                        this._1974.set(_, []),
                        this._9450.set(_, 0)
                    }
                }
                _9909() {
                    for (const t of this._9450.keys())
                        this._9450.set(t, 0)
                }
                _4287(t) {
                    const _ = [];
                    for (let e = 0; e < t.length; e++) {
                        const s = this._9629(t[e]);
                        s.position.set(72 * e - 36 * t.length, 0),
                        _.push(s)
                    }
                    const e = new c.W20;
                    return e.addChild(..._),
                    e
                }
                _9629(t) {
                    const _ = this._1974.get(t)
                      , e = this._9450.get(t)
                      , s = e < _.length ? _[e] : this._2917(t, _);
                    return this._9450.set(t, e + 1),
                    s
                }
                _2917(t, _) {
                    const e = Rt._7889._8035.get(t)
                      , s = new c.jyi(e);
                    return _.push(s),
                    s
                }
            }
              , Ut = /(\bass\b)|(\btits)|bitch|shit|noob|fuck|nigg|negro|penis|vagina|(\bdick)|pussy|suck|whore|(\bhoe)|jizz|sex|porn|hentai|boob|(\brape)|slut|stupid|idiot/gi
              , Dt = new class {
                _4876(t) {
                    return t.replace(Ut, (t=>"*".repeat(t.length)))
                }
            }
            ;
            var Wt = e(586);
            const Gt = class {
                constructor(t, _, e, s) {
                    this._3043 = t,
                    this._3731 = _,
                    this._1422 = e,
                    this._5896 = s,
                    this._4052 = null,
                    this._4390 = null,
                    this._1974 = [],
                    this._2864 = 0,
                    this._1618 = -1 / 0
                }
                _8728() {
                    return null === this._4052
                }
                _3604() {
                    return this._1618
                }
                _2207() {
                    if (null !== this._4052)
                        return this._4052;
                    throw new Error("Dynamic texture key is null.")
                }
                _1001() {
                    if (null !== this._4390)
                        return this._1618 = n._8276,
                        this._1974[this._2864++] || this._2917();
                    throw new Error("Texture is null")
                }
                _9909() {
                    this._2864 = 0
                }
                _6801(t, _) {
                    const e = this._3043
                      , s = Math.ceil(Math.log2(this._1422._6006))
                      , i = Math.ceil(Math.log2(this._1422._5286))
                      , n = this._1422._6006 - 2 * s
                      , o = this._1422._5286 - 2 * i;
                    e.clearRect(this._1422._4526, this._1422._6966, this._1422._6006, this._1422._5286),
                    e.save(),
                    e.translate(this._1422._4526 + s, this._1422._6966 + i),
                    e.rect(0, 0, n, o),
                    e.clip();
                    const r = this._5896(e, t, _, n, o);
                    e.restore(),
                    this._4052 = t,
                    this._4390 = new c.xEZ(this._3731,new c.AeJ(this._1422._4526 + s + (n - r._6006) / 2,this._1422._6966 + i + (o - r._5286) / 2,r._6006,r._5286)),
                    this._1974 = [],
                    this._2864 = 0
                }
                _2917() {
                    const t = new c.jyi(this._4390);
                    return t.anchor.set(.5, .5),
                    this._1974.push(t),
                    t
                }
            }
              , Kt = class {
                constructor(t, _) {
                    this._7315 = t,
                    this._3009 = [],
                    this._6137 = 0,
                    this._5896 = _
                }
                _4287(t, _) {
                    for (const _ of this._3009) {
                        const e = _._4287(t);
                        if (null !== e)
                            return e._1001()
                    }
                    if (this._6137 >= this._7315._9598._6913)
                        return null;
                    this._6137++;
                    for (const e of this._3009)
                        if (!e._7215())
                            return e._6246(t, _)._1001();
                    const e = new class {
                        constructor(t, _, e, s, i) {
                            this._2891 = document.createElement("canvas"),
                            this._2891.width = t,
                            this._2891.height = t;
                            const n = this._2891.getContext("2d");
                            if (null === n)
                                throw new Error("Failed to get CanvasRenderingContext2D.");
                            this._3043 = n,
                            this._3731 = new Wt.VL(this._2891),
                            this._6908 = new Map,
                            this._8810 = s,
                            this._8175 = {
                                _9784: [],
                                _8944: []
                            },
                            this._5142 = !1;
                            const o = Math.floor(t / _)
                              , r = Math.floor(t / e);
                            for (let t = 0; t < o; t++)
                                for (let s = 0; s < r; s++) {
                                    const n = new Gt(this._3043,this._3731,{
                                        _4526: t * _,
                                        _6966: s * e,
                                        _6006: _,
                                        _5286: e
                                    },i);
                                    this._8175._9784.push(n),
                                    this._8175._8944.push(n)
                                }
                        }
                        _7976() {
                            return this._8175._8944.length === this._8175._9784.length
                        }
                        _7215() {
                            return 0 === this._8175._8944.length
                        }
                        _4287(t) {
                            return this._6908.get(t) || null
                        }
                        _6246(t, _) {
                            const e = this._8175._8944.pop();
                            if (void 0 !== e)
                                return e._8728() || this._6908.delete(e._2207()),
                                e._6801(t, _),
                                this._5142 = !0,
                                this._6908.set(t, e),
                                e;
                            throw new Error("Dynnamic texture: no free slots are available.")
                        }
                        _9909() {
                            for (const t of this._6908.values())
                                t._9909()
                        }
                        _8439() {
                            this._8175._8944 = [];
                            for (const t of this._8175._9784)
                                n._8276 - t._3604() > this._8810 && this._8175._8944.push(t);
                            this._8175._8944.sort(((t,_)=>_._3604() - t._3604())),
                            this._5142 && (this._3731.update(),
                            this._5142 = !1)
                        }
                        _5747() {
                            this._3731.destroy()
                        }
                    }
                    (this._7315._6183._4006,this._7315._9598._6006,this._7315._9598._5286,this._7315._9598._8981,this._5896);
                    return this._3009.push(e),
                    e._6246(t, _)._1001()
                }
                _9909() {
                    this._6137 = 0;
                    for (const t of this._3009)
                        t._9909()
                }
                _8439() {
                    for (let t = this._3009.length - 1; t >= 0; --t) {
                        const _ = this._3009[t];
                        _._8439(),
                        _._7976() && (_._5747(),
                        this._3009.splice(t))
                    }
                }
            }
              , Ft = (()=>{
                switch (Y.TEXTURE_QUALITY._2230()) {
                case "low":
                    return .5;
                case "medium":
                    return 1;
                case "high":
                    return 2;
                default:
                    return 1
                }
            }
            )()
              , Zt = new Kt({
                _6183: {
                    _4006: 2048 * Ft
                },
                _9598: {
                    _6006: 680 * Ft,
                    _5286: 128 * Ft,
                    _8981: 8e3,
                    _6913: 1
                }
            },((t,_,e,s,i)=>{
                _ = Dt._4876(_);
                const n = 10 * Ft
                  , o = i - 2 * n - 5 * Ft * 2;
                t.font = `600 ${o}px 'Titillium Web'`,
                t.lineJoin = "round",
                t.textBaseline = "middle",
                t.textAlign = "center",
                t.fillStyle = "#ffffff",
                t.strokeStyle = "rgba(0, 0, 0, 0.5)",
                t.lineWidth = n;
                const r = t.measureText(_)
                  , h = r.width + n > s ? s : r.width + n
                  , a = h / (r.width + n)
                  , c = i * a
                  , l = o * a / 10;
                return t.font = `600 ${Math.floor(o * a)}px 'Titillium Web'`,
                t.textAlign = "center",
                t.textBaseline = "middle",
                t.strokeText(_, s / 2, i / 2 + l),
                t.fillText(_, s / 2, i / 2 + l),
                {
                    _6006: h,
                    _5286: c
                }
            }
            ))
              , $t = (()=>{
                switch (Y.TEXTURE_QUALITY._2230()) {
                case "low":
                    return .5;
                case "medium":
                    return 1;
                case "high":
                    return 2;
                default:
                    return 1
                }
            }
            )()
              , Yt = new Kt({
                _6183: {
                    _4006: 1024 * $t
                },
                _9598: {
                    _6006: 320 * $t,
                    _5286: 64 * $t,
                    _8981: 8e3,
                    _6913: 1
                }
            },((t,_,e,s,i)=>{
                _ = Dt._4876(_);
                const n = 10 * $t
                  , o = i - 2 * n;
                t.font = `600 ${o}px 'Titillium Web'`;
                const r = t.measureText(_)
                  , h = r.width + 2 * n > s ? s : r.width + 2 * n
                  , a = h / (r.width + 2 * n)
                  , c = i * a
                  , l = Math.floor(o * a)
                  , u = l / 10;
                return t.lineJoin = "round",
                t.textBaseline = "middle",
                t.textAlign = "center",
                t.fillStyle = e[0],
                t.fillRect((s - h) / 2, (i - c) / 2, h, c),
                t.fillStyle = e[1],
                t.strokeStyle = "#000",
                t.font = `${"#000000" === e[1] ? 400 : 600} ${l}px 'Titillium Web'`,
                t.strokeText(_, s / 2, i / 2 + u),
                t.fillText(_, s / 2, i / 2 + u),
                {
                    _6006: h,
                    _5286: c
                }
            }
            ))
              , Qt = (()=>{
                switch (Y.TEXTURE_QUALITY._2230()) {
                case "low":
                    return .5;
                case "medium":
                    return 1;
                case "high":
                    return 2;
                default:
                    return 1
                }
            }
            )()
              , jt = new class {
                constructor() {
                    this._5720 = new Map,
                    this._3025 = new Kt({
                        _6183: {
                            _4006: 2048 * Qt
                        },
                        _9598: {
                            _6006: 512 * Qt,
                            _5286: 512 * Qt,
                            _8981: 8e3,
                            _6913: 1
                        }
                    },this._5896.bind(this))
                }
                _5896(t, _, e, s, i) {
                    const n = s / 2;
                    return t.save(),
                    t.beginPath(),
                    t.arc(n, n, n, 0, 2 * Math.PI),
                    t.closePath(),
                    t.clip(),
                    t.imageSmoothingEnabled = !0,
                    t.imageSmoothingQuality = "high",
                    t.drawImage(e, 0, 0, s, i),
                    t.restore(),
                    {
                        _6006: s,
                        _5286: i
                    }
                }
                _4287(t) {
                    const _ = this._5720.get(t);
                    return void 0 !== _ ? _.complete && _.naturalWidth > 0 && _.naturalHeight > 0 ? this._3025._4287(t, _) : null : (this._9478(t),
                    null)
                }
                _9478(t) {
                    const _ = new Image;
                    _.crossOrigin = "anonymous",
                    _.src = t,
                    this._5720.set(t, _)
                }
                _9909() {
                    this._3025._9909()
                }
                _8439() {
                    this._3025._8439()
                }
            }
              , Vt = new class {
                constructor() {
                    this._3009 = []
                }
                _1489() {
                    for (let t = 0; t < 1; t++) {
                        const _ = `TEXTURE_ATLAS_SHIELD_${t + 1}`
                          , e = Mt._7625(_);
                        if (void 0 === e || !(e instanceof HTMLImageElement))
                            throw new Error("Invalid shield atlas image.");
                        const s = new c.VL4(e,{
                            format: c.I2L.LUMINANCE_ALPHA
                        });
                        this._3009.push(s)
                    }
                }
                _4051(t) {
                    return t < 1 || t > this._3009.length ? null : this._3009[t - 1]
                }
            }
              , Xt = 2 * Math.PI;
            class zt {
                constructor(t, _, e, s, i) {
                    this._4390 = t,
                    this._7875 = _,
                    this._8620 = e,
                    this._9588 = s,
                    this._2611 = i,
                    this._1974 = [],
                    this._2864 = 0
                }
                _9909() {
                    this._2864 = 0
                }
                _6430(t, _, e, s, i, o) {
                    o = this._9588(o);
                    const r = [];
                    s *= this._8620;
                    const h = this._2611._2683
                      , a = 0 === h._9378 ? 0 : n._8276 % h._9378 / h._9378 * (Xt * h._6737);
                    if (0 === this._7875) {
                        const t = this._9629();
                        t.anchor.set(.5, .5),
                        t.position.set(_, e),
                        t.scale.set(1, 1),
                        t.width = 2 * s,
                        t.height = 2 * s,
                        r.push(t)
                    } else if (1 === this._7875) {
                        const t = this._9629();
                        t.anchor.set(1, .5),
                        t.position.set(_, e),
                        t.scale.set(1, 1),
                        t.width = s,
                        t.height = 2 * s,
                        r.push(t);
                        const i = this._9629();
                        i.anchor.set(1, .5),
                        i.position.set(_, e),
                        i.scale.set(-1, 1),
                        i.width = s,
                        i.height = 2 * s,
                        r.push(i)
                    } else if (2 === this._7875) {
                        const t = this._9629();
                        t.anchor.set(1, 1),
                        t.position.set(_, e),
                        t.scale.set(1, 1),
                        t.width = s,
                        t.height = s,
                        r.push(t);
                        const i = this._9629();
                        i.anchor.set(1, 1),
                        i.position.set(_, e),
                        i.scale.set(-1, 1),
                        i.width = s,
                        i.height = s,
                        r.push(i);
                        const n = this._9629();
                        n.anchor.set(1, 1),
                        n.position.set(_, e),
                        n.scale.set(-1, -1),
                        n.width = s,
                        n.height = s,
                        r.push(n);
                        const o = this._9629();
                        o.anchor.set(1, 1),
                        o.position.set(_, e),
                        o.scale.set(1, -1),
                        o.width = s,
                        o.height = s,
                        r.push(o)
                    }
                    for (let _ = 0; _ < r.length; _++) {
                        const e = r[_];
                        e.tint = o,
                        e.alpha = i,
                        e.rotation = a,
                        t.addChild(e)
                    }
                }
                _9629() {
                    if (this._2864 < this._1974.length)
                        return this._1974[this._2864++];
                    {
                        const t = new c.jyi(this._4390);
                        return this._1974.push(t),
                        this._2864++,
                        t
                    }
                }
            }
            const qt = class {
                constructor(t, _, e=1) {
                    this._9339 = t,
                    this._8681 = _,
                    this._2172 = e,
                    this._7983 = {
                        _3515: null,
                        _1613: null,
                        _1117: null
                    }
                }
                _1489() {
                    const t = Vt._4051(this._9339);
                    if (null === t)
                        throw new Error("Shield base texture is null.");
                    const _ = this._8681._1613;
                    if (void 0 !== _) {
                        const e = this._4612(_._4526, _._6966, _._7579)
                          , s = new c.xEZ(t,e);
                        this._7983._1613 = new zt(s,_._7579,_._8953,_._3080,_._5616)
                    }
                    const e = this._8681._3515;
                    if (void 0 !== e) {
                        const _ = this._4612(e._4526, e._6966, e._7579)
                          , s = new c.xEZ(t,_);
                        this._7983._3515 = new zt(s,e._7579,e._8953,e._3080,e._5616)
                    }
                    const s = this._8681._1117;
                    if (void 0 !== s) {
                        const _ = this._4612(s._4526, s._6966, s._7579)
                          , e = new c.xEZ(t,_);
                        this._7983._1117 = new zt(e,s._7579,s._8953,s._3080,s._5616)
                    }
                }
                _9909() {
                    null !== this._7983._1613 && this._7983._1613._9909(),
                    null !== this._7983._3515 && this._7983._3515._9909(),
                    null !== this._7983._1117 && this._7983._1117._9909()
                }
                _2091(t, _, e, s, i, n) {
                    null !== this._7983._1613 && this._7983._1613._6430(t, _, e, s, i, n)
                }
                _8762(t, _, e, s, i, n) {
                    null !== this._7983._3515 && this._7983._3515._6430(t, _, e, s, i, n),
                    null !== this._7983._1117 && this._7983._1117._6430(t, _, e, s, i, n)
                }
                _4352() {
                    return this._2172
                }
                _4612(t, _, e) {
                    if (t *= 512,
                    _ *= 512,
                    2 === e) {
                        const e = Math.log2(512);
                        return new c.AeJ(t + e,_ + e,512 - 2 * e,512 - 2 * e)
                    }
                    if (1 === e) {
                        const e = Math.log2(512)
                          , s = Math.log2(1024);
                        return new c.AeJ(t + e,_ + s,512 - 2 * e,1024 - 2 * s)
                    }
                    const s = Math.log2(1024);
                    return new c.AeJ(t + s,_ + s,1024 - 2 * s,1024 - 2 * s)
                }
            }
              , Jt = new Map([["BASIC_RING", new qt(1,{
                _1613: {
                    _4526: 2,
                    _6966: 1,
                    _8953: 1,
                    _7579: 0,
                    _3080: t=>t,
                    _5616: {
                        _2683: {
                            _9378: 0,
                            _6737: 1
                        }
                    }
                },
                _3515: {
                    _4526: 0,
                    _6966: 0,
                    _8953: 1,
                    _7579: 2,
                    _3080: t=>t,
                    _5616: {
                        _2683: {
                            _9378: 0,
                            _6737: 1
                        }
                    }
                }
            },.9)], ["BASIC_RING_THIN", new qt(1,{
                _1613: {
                    _4526: 2,
                    _6966: 1,
                    _8953: 1,
                    _7579: 0,
                    _3080: t=>t,
                    _5616: {
                        _2683: {
                            _9378: 0,
                            _6737: 1
                        }
                    }
                },
                _3515: {
                    _4526: 1,
                    _6966: 0,
                    _8953: 1,
                    _7579: 2,
                    _3080: t=>t,
                    _5616: {
                        _2683: {
                            _9378: 0,
                            _6737: 1
                        }
                    }
                }
            },.95)], ["BASIC_RING_THICK", new qt(1,{
                _1613: {
                    _4526: 2,
                    _6966: 1,
                    _8953: 1,
                    _7579: 0,
                    _3080: t=>t,
                    _5616: {
                        _2683: {
                            _9378: 0,
                            _6737: 1
                        }
                    }
                },
                _3515: {
                    _4526: 2,
                    _6966: 0,
                    _8953: 1,
                    _7579: 2,
                    _3080: t=>t,
                    _5616: {
                        _2683: {
                            _9378: 0,
                            _6737: 1
                        }
                    }
                }
            },.83)], ["MESH_RING", new qt(1,{
                _1613: {
                    _4526: 2,
                    _6966: 1,
                    _8953: 1,
                    _7579: 0,
                    _3080: t=>t,
                    _5616: {
                        _2683: {
                            _9378: 0,
                            _6737: 1
                        }
                    }
                },
                _3515: {
                    _4526: 3,
                    _6966: 0,
                    _8953: 1,
                    _7579: 2,
                    _3080: t=>t,
                    _5616: {
                        _2683: {
                            _9378: 0,
                            _6737: 1
                        }
                    }
                }
            })], ["GREMORY_G3_R1", new qt(1,{
                _1613: {
                    _4526: 2,
                    _6966: 1,
                    _8953: 1,
                    _7579: 0,
                    _3080: t=>t,
                    _5616: {
                        _2683: {
                            _9378: 0,
                            _6737: 1
                        }
                    }
                },
                _3515: {
                    _4526: 4,
                    _6966: 0,
                    _8953: 1.1,
                    _7579: 2,
                    _3080: t=>t,
                    _5616: {
                        _2683: {
                            _9378: 0,
                            _6737: 1
                        }
                    }
                },
                _1117: {
                    _4526: 5,
                    _6966: 0,
                    _8953: 1.1,
                    _7579: 2,
                    _3080: t=>t,
                    _5616: {
                        _2683: {
                            _9378: 0,
                            _6737: 1
                        }
                    }
                }
            },.7)], ["GREMORY_G3_R2", new qt(1,{
                _1613: {
                    _4526: 2,
                    _6966: 1,
                    _8953: 1,
                    _7579: 0,
                    _3080: t=>t,
                    _5616: {
                        _2683: {
                            _9378: 0,
                            _6737: 1
                        }
                    }
                },
                _3515: {
                    _4526: 4,
                    _6966: 0,
                    _8953: 1.1,
                    _7579: 2,
                    _3080: ()=>16777215,
                    _5616: {
                        _2683: {
                            _9378: 0,
                            _6737: 1
                        }
                    }
                },
                _1117: {
                    _4526: 5,
                    _6966: 0,
                    _8953: 1.1,
                    _7579: 2,
                    _3080: t=>t,
                    _5616: {
                        _2683: {
                            _9378: 0,
                            _6737: 1
                        }
                    }
                }
            },.7)], ["VALI", new qt(1,{
                _1613: {
                    _4526: 7,
                    _6966: 0,
                    _8953: 1.09,
                    _7579: 2,
                    _3080: t=>t,
                    _5616: {
                        _2683: {
                            _9378: 0,
                            _6737: 1
                        }
                    }
                },
                _3515: {
                    _4526: 6,
                    _6966: 0,
                    _8953: 1.15,
                    _7579: 1,
                    _3080: ()=>16777215,
                    _5616: {
                        _2683: {
                            _9378: 0,
                            _6737: 1
                        }
                    }
                }
            },.6)], ["HSLO", new qt(1,{
                _1613: {
                    _4526: 0,
                    _6966: 1,
                    _8953: 1.11,
                    _7579: 2,
                    _3080: ()=>16777215,
                    _5616: {
                        _2683: {
                            _9378: 0,
                            _6737: 1
                        }
                    }
                },
                _3515: {
                    _4526: 1,
                    _6966: 1,
                    _8953: 1.11,
                    _7579: 2,
                    _3080: t=>t,
                    _5616: {
                        _2683: {
                            _9378: 0,
                            _6737: 1
                        }
                    }
                }
            },.625)], ["TRINITY_R1", new qt(1,{
                _1613: {
                    _4526: 4,
                    _6966: 1,
                    _8953: 1.1,
                    _7579: 2,
                    _3080: ()=>16777215,
                    _5616: {
                        _2683: {
                            _9378: 0,
                            _6737: 1
                        }
                    }
                },
                _3515: {
                    _4526: 5,
                    _6966: 1,
                    _8953: 1.1,
                    _7579: 2,
                    _3080: t=>t,
                    _5616: {
                        _2683: {
                            _9378: 1e5,
                            _6737: 1
                        }
                    }
                },
                _1117: {
                    _4526: 7,
                    _6966: 1,
                    _8953: .91,
                    _7579: 2,
                    _3080: t=>t,
                    _5616: {
                        _2683: {
                            _9378: 0,
                            _6737: 1
                        }
                    }
                }
            },.7)], ["TRINITY_R2", new qt(1,{
                _1613: {
                    _4526: 4,
                    _6966: 1,
                    _8953: 1.1,
                    _7579: 2,
                    _3080: ()=>16777215,
                    _5616: {
                        _2683: {
                            _9378: 0,
                            _6737: 1
                        }
                    }
                },
                _3515: {
                    _4526: 5,
                    _6966: 1,
                    _8953: 1.1,
                    _7579: 2,
                    _3080: t=>t,
                    _5616: {
                        _2683: {
                            _9378: 1e5,
                            _6737: -1
                        }
                    }
                },
                _1117: {
                    _4526: 0,
                    _6966: 2,
                    _8953: .9,
                    _7579: 2,
                    _3080: ()=>16777215,
                    _5616: {
                        _2683: {
                            _9378: 1e5,
                            _6737: 1
                        }
                    }
                }
            },.7)], ["CERAMIC_SNOW", new qt(1,{
                _1613: {
                    _4526: 7,
                    _6966: 0,
                    _8953: 1.09,
                    _7579: 2,
                    _3080: t=>t,
                    _5616: {
                        _2683: {
                            _9378: 0,
                            _6737: 1
                        }
                    }
                },
                _3515: {
                    _4526: 1,
                    _6966: 2,
                    _8953: 1.05,
                    _7579: 2,
                    _3080: ()=>16777215,
                    _5616: {
                        _2683: {
                            _9378: 1e5,
                            _6737: 1
                        }
                    }
                }
            },.7)], ["CRYSTAL_S", new qt(1,{
                _1613: {
                    _4526: 4,
                    _6966: 1,
                    _8953: 1.1,
                    _7579: 2,
                    _3080: t=>t,
                    _5616: {
                        _2683: {
                            _9378: 0,
                            _6737: 1
                        }
                    }
                },
                _3515: {
                    _4526: 5,
                    _6966: 2,
                    _8953: 1.05,
                    _7579: 2,
                    _3080: t=>.9 * ((16711680 & t) >>> 16) << 16 | .9 * ((65280 & t) >>> 8) << 8 | .9 * ((255 & t) >>> 0) << 0,
                    _5616: {
                        _2683: {
                            _9378: 1e5,
                            _6737: 1
                        }
                    }
                },
                _1117: {
                    _4526: 4,
                    _6966: 2,
                    _8953: 1.05,
                    _7579: 2,
                    _3080: ()=>16777215,
                    _5616: {
                        _2683: {
                            _9378: 1e5,
                            _6737: 1
                        }
                    }
                }
            },.9)]])
              , t_ = (()=>{
                switch (Y.TEXTURE_QUALITY._2230()) {
                case "low":
                    return .5;
                case "medium":
                    return 1;
                case "high":
                    return 2;
                default:
                    return 1
                }
            }
            )()
              , __ = new class {
                constructor() {
                    this._4681 = {},
                    this._8174 = new Kt({
                        _6183: {
                            _4006: 1024 * t_
                        },
                        _9598: {
                            _6006: 320 * t_,
                            _5286: 64 * t_,
                            _8981: 8e3,
                            _6913: 1
                        }
                    },this._5896.bind(this)),
                    this._5720 = new Map
                }
                _1489() {
                    const t = Mt._7625("titles-info");
                    this._4681 = t
                }
                _5896(t, _, e, s, i) {
                    const n = i / e._5938.naturalHeight
                      , o = e._5938.naturalWidth * n
                      , r = e._5938.naturalHeight * n;
                    if (t.imageSmoothingEnabled = !0,
                    t.imageSmoothingQuality = "high",
                    t.drawImage(e._5938, (s - o) / 2, (i - r) / 2, o, r),
                    e._4667.length > 0) {
                        const _ = 4 * t_
                          , n = r - 2 * _ - 6 * t_ * 2;
                        t.font = `600 ${n}px 'Titillium Web'`;
                        const h = o / 5 * 4
                          , a = t.measureText(e._4667)
                          , c = (a.width + _ > h ? h : a.width + _) / (a.width + _)
                          , l = Math.floor(n * c)
                          , u = (s - o) / 2 + o / 5 + o / 5 * 2
                          , d = (i - r) / 2 + r / 2 + l / 10;
                        t.textAlign = "center",
                        t.textBaseline = "middle",
                        t.fillStyle = "#ffffff",
                        t.strokeStyle = "rgba(0,0,0,0.5)",
                        t.font = `600 ${l}px 'Titillium Web'`,
                        t.lineJoin = "round",
                        t.lineWidth = _,
                        t.strokeText(e._4667, u, d),
                        t.fillText(e._4667, u, d)
                    }
                    return {
                        _6006: o,
                        _5286: r
                    }
                }
                _4287(t) {
                    const _ = this._4681[t];
                    if (void 0 !== _) {
                        const e = this._5720.get(_.pid || t);
                        if (void 0 !== e) {
                            if (e.complete && e.naturalWidth > 0 && e.naturalHeight > 0)
                                return this._8174._4287(t, {
                                    _5938: e,
                                    _4667: _.text
                                })
                        } else
                            this._9478(_.pid || t)
                    }
                    return null
                }
                _9909() {
                    this._8174._9909()
                }
                _8439() {
                    this._8174._8439()
                }
                _9478(t) {
                    const _ = new Image;
                    _.crossOrigin = "anonymous",
                    _.src = `assets/images/textures/titles/${t}.webp`,
                    this._5720.set(t, _)
                }
            }
              , e_ = (()=>{
                switch (Y.TEXTURE_QUALITY._2230()) {
                case "low":
                    return .5;
                case "medium":
                    return 1;
                case "high":
                    return 2;
                default:
                    return 1
                }
            }
            )()
              , s_ = new class {
                constructor() {
                    this._1974 = [],
                    this._2864 = 0
                }
                _2100(t, _) {
                    const e = V_._5347 ? t._3047._7760.length > 0 : t._9486._2993._3195
                      , s = t._9101
                      , i = 1 - Y.ORB_TRANSPARENCY._2230() / 100
                      , n = Y.SHOW_SHIELDS._2230()
                      , o = Y.OWN_ORB_COLORING._2230();
                    let r = 16777215;
                    r = e ? "custom" === o ? Y.CUSTOM_OWN_ORB_COLOR._2230() : "multibox" !== o || 2 !== Fe._2993._8623.size || V_._5347 ? V_._5347 ? t._7614._9458 : t._9486._7614._9458 : t._9486._3891 === Fe._8370 ? Y.ACTIVE_PLAYER_UNIT_ACCENT_COLOR._2230() : Y.INACTIVE_PLAYER_UNIT_ACCENT_COLOR._2230() : "tint" === Y.ORB_COLORING._2230() ? t._7317._9458 : V_._5347 ? t._7614._9458 : t._9486._7614._9458;
                    let h = "";
                    (e || n) && (h = t._9486._2993._5512);
                    const a = Jt.get(h.substring(7));
                    if (void 0 === a) {
                        const e = this._1974[this._2864++] || this._2917();
                        e.position.set(t._4526, t._6966),
                        e.width = 2 * t._9617,
                        e.height = 2 * t._9617,
                        e.tint = r,
                        e.alpha = s * i,
                        _.addChild(e)
                    } else
                        a._2091(_, t._4526, t._6966, t._9617, s * i, r);
                    const c = Y.SHOW_CUSTOM_SKINS._2230()
                      , l = Y.SHOW_OWN_CUSTOM_SKINS._2230()
                      , u = Fe._4663.length + Fe._8080.length > 0 && ee._5482.has(t._9486._8001);
                    let d = "";
                    V_._5347 && c ? d = t._3047._7760 : (u && !e && c || e && l) && (d = t._9486._2371);
                    const m = d.length ? jt._4287(d) : null;
                    if (null !== m) {
                        m.position.set(t._4526, t._6966);
                        const e = void 0 === a ? 1 : a._4352();
                        m.width = 2 * t._9617 * e,
                        m.height = 2 * t._9617 * e,
                        m.alpha = s,
                        _.addChild(m)
                    }
                    if (!V_._5347 && e && Y.ACTIVE_PLAYER_UNIT_ARROW_INDICATOR._2230() && Fe._2993._8623.size > 1 && t._9486._3891 === Fe._8370) {
                        const e = Bt._4287();
                        e.position.set(t._4526, t._6966 - t._9617 - 10),
                        e.alpha = s,
                        _.addChild(e)
                    }
                    void 0 !== a && a._8762(_, t._4526, t._6966, t._9617, s * i, r);
                    const f = t._9617 / 3 * j_._9830
                      , p = t._9617 / 30;
                    if (t._7997._6216 = 0,
                    t._7997._4663 = 0,
                    t._7997._7845 = 0,
                    f > 8 && (e && Y.SHOW_OWN_USERNAME._2230() || !e && Y.SHOW_ENEMY_USERNAME._2230())) {
                        const e = (V_._5347 ? t._3047._6216 : t._9486._2993._6216) || "Unnamed player"
                          , i = Zt._4287(e, void 0);
                        if (null !== i) {
                            const e = t._9617 / 3 / (128 * e_) * 1;
                            i.scale.set(e, e);
                            const n = i.height;
                            t._7997._6216 = n,
                            i.position.set(t._4526, t._6966),
                            i.alpha = s,
                            _.addChild(i);
                            const o = t._9486._2993._2434;
                            if (o.length > 0) {
                                const e = __._4287(o);
                                if (null !== e) {
                                    const o = t._9617 / 3 / 64 * .6 / e_;
                                    e.scale.set(o, o),
                                    e.position.set(e.width < i.width ? t._4526 - (i.width - e.width) / 2 : t._4526, t._6966 - n / 2 - e.height / 2),
                                    e.alpha = s,
                                    _.addChild(e)
                                }
                            }
                        }
                    }
                    const g = V_._5347 ? t._3047._4663 : t._9486._2993._4663;
                    if (f > 8 && Y.SHOW_TEAM_NAME._2230() && g.length > 0 && "ITS-BOT-TEAM" !== g) {
                        const e = Yt._4287(g, t._9486._2993._8921);
                        if (null !== e) {
                            const i = t._9617 / 3 / 64 * .8 / e_;
                            e.scale.set(i, i);
                            const n = t._7997._6216
                              , o = e.height;
                            t._7997._4663 = o,
                            e.position.set(t._4526, t._6966 + .5 * n + p + .5 * e.height),
                            e.alpha = s,
                            _.addChild(e)
                        }
                    }
                    if (f > 8 && (e && Y.SHOW_OWN_ENERGY._2230() || !e && Y.SHOW_ENEMY_ENERGY._2230())) {
                        const e = Ht._4287(t._7845.toFixed(0))
                          , i = t._9617 / 3 / 128 * .8;
                        e.scale.set(i, i);
                        const n = t._7997._6216
                          , o = t._7997._4663;
                        t._7997._7845 = e.height,
                        e.position.set(t._4526, t._6966 + .5 * n + p + (o > 0 ? o + p : 0) + .5 * e.height),
                        e.alpha = s,
                        _.addChild(e)
                    }
                }
                _2917() {
                    const t = new c.jyi(Rt._7889._5377);
                    return t.anchor.set(.5, .5),
                    this._1974.push(t),
                    t
                }
                _9909() {
                    this._2864 = 0
                }
            }
            ;
            class i_ {
                constructor(t, _) {
                    this._1415 = new c.jyi(t),
                    this._3897 = [],
                    this._5665 = new c.W20,
                    this._1651 = [],
                    this._6124 = 3e3,
                    this._1415.position.set(0, 0),
                    this._1415.anchor.set(.5, .5),
                    this._5665.addChild(this._1415);
                    for (let t = 0; t < 19; t++) {
                        const t = new c.jyi(_);
                        t.position.set(0, 0),
                        t.anchor.set(.5, .5),
                        this._3897.push(t),
                        this._5665.addChild(t),
                        this._1651.push(Math.random() * this._6124)
                    }
                }
                get _7541() {
                    return this._5665
                }
                _2081(t) {
                    this._2704(t),
                    this._9877(t)
                }
                _2704(t) {
                    let _ = (n._8276 - t._1826) / 750;
                    _ %= 1,
                    _ = Math.pow(_, .4);
                    const e = 1.2 * t._9617 * _;
                    this._1415.width = 2 * e * 1.28,
                    this._1415.height = 2 * e * 1.28,
                    this._1415.alpha = e > t._9617 ? 1 - (e - t._9617) / (.2 * t._9617) : 1
                }
                _9877(t) {
                    let _ = (n._8276 - t._1826) / 600;
                    _ = Math.min(1, _);
                    let e = (n._8276 - t._1826 - 600) / 600;
                    e = Math.max(0, Math.min(1, e));
                    let s = (n._8276 - t._1826 - 1200) / 600;
                    s = Math.max(0, Math.min(1, s));
                    const i = t._9617 / 1125
                      , o = this._3897[0];
                    o.scale.set(i, i),
                    o.alpha = _;
                    for (let t = 0; t < 6; t++) {
                        const _ = this._3897[t + 1]
                          , s = Math.PI / 3 * t
                          , n = Math.cos(s)
                          , o = Math.sin(s);
                        _.position.set(450 * i * n, 450 * i * o),
                        _.scale.set(i, i),
                        _.alpha = e * (.5 + .5 * this._7289(t + 1))
                    }
                    for (let t = 0; t < 6; t++) {
                        const _ = this._3897[t + 7]
                          , e = Math.PI / 3 * t
                          , n = Math.cos(e)
                          , o = Math.sin(e);
                        _.position.set(900 * i * n, 900 * i * o),
                        _.scale.set(i, i),
                        _.alpha = s * (.5 + .5 * this._7289(t + 7))
                    }
                    for (let t = 0; t < 6; t++) {
                        const _ = this._3897[t + 13]
                          , e = Math.PI / 3 * t + Math.PI / 6
                          , n = Math.cos(e)
                          , o = Math.sin(e);
                        _.position.set(Math.sqrt(3) / 2 * 900 * i * n, Math.sqrt(3) / 2 * 900 * i * o),
                        _.scale.set(i, i),
                        _.alpha = s * (.5 + .5 * this._7289(t + 13))
                    }
                }
                _7289(t) {
                    const _ = (n._8276 + this._1651[t]) % this._6124 / this._6124 * (2 * Math.PI);
                    return .5 * (Math.sin(_) + 1)
                }
            }
            const n_ = new class {
                constructor() {
                    this._4390 = {
                        _4072: null,
                        _8040: null
                    },
                    this._1974 = [],
                    this._2864 = 0
                }
                _1489() {
                    const t = Mt._7625("shield-pieces")
                      , _ = new c.VL4(t);
                    this._4390._4072 = new c.xEZ(_,new c.AeJ(512,0,512,512)),
                    this._4390._8040 = new c.xEZ(_,new c.AeJ(0,0,512,512))
                }
                _2100(t, _) {
                    const e = Y.ELEMENT_ANIMATION_SOFTENING._2230();
                    let s = 1;
                    t._6671 ? s = 1 - t._7696 : n._8276 - t._1826 < e && (s = (n._8276 - t._1826) / e);
                    const i = this._1974[this._2864++] || this._2789();
                    i._2081(t);
                    const o = i._7541;
                    o.position.set(t._4526, t._6966),
                    o.alpha = s,
                    _.addChild(o)
                }
                _2789() {
                    const t = new i_(this._4390._4072,this._4390._8040);
                    return this._1974.push(t),
                    t
                }
                _9909() {
                    this._2864 = 0
                }
            }
              , o_ = new class extends At {
                constructor() {
                    super(),
                    this._5665 = new c.W20
                }
                _6360() {
                    return this._5665
                }
                _1489() {
                    n_._1489(),
                    __._1489(),
                    Vt._1489();
                    for (const t of Jt.values())
                        t._1489();
                    Ht._1489(),
                    xt._1489()
                }
                _2081() {
                    Zt._9909(),
                    Yt._9909(),
                    jt._9909(),
                    __._9909(),
                    this._5665.removeChildren();
                    for (const t of ee._4456)
                        t._2098(),
                        t._3901 === A._2978 ? s_._2100(t, this._5665) : t._3901 === A._1223 || t._3901 === A._7825 ? kt._2100(t, this._5665) : t._3901 === A._4509 && xt._2100(t, this._5665);
                    s_._9909(),
                    kt._9909(),
                    xt._9909(),
                    n_._9909(),
                    Bt._9909();
                    for (const t of Jt.values())
                        t._9909();
                    Ht._9909(),
                    Zt._8439(),
                    Yt._8439(),
                    jt._8439(),
                    __._8439()
                }
            }
              , r_ = new class extends At {
                constructor() {
                    super(),
                    this._5665 = null,
                    this._8585 = null,
                    this._7067 = {
                        _8686: null,
                        _4698: null
                    },
                    this._1799 = {
                        _5173: new Float32Array(2),
                        _1390: new Float32Array(2),
                        _3041: null
                    },
                    this._2092 = null
                }
                _6360() {
                    return this._5665
                }
                _1489() {
                    this._5665 = new c.W20;
                    const t = document.createElement("canvas")
                      , _ = t.getContext("2d");
                    It.mesh_gen_orb_shadow_render(_, 512),
                    this._1799._3041 = new c.VL4(t);
                    const s = e(296)
                      , i = e(845)
                      , n = new c.$rD(s,i,"orb-shadow-shader")
                      , o = new c.exe(n,{
                        uTranslate: this._1799._5173,
                        uScale: this._1799._1390,
                        uTexture: this._1799._3041
                    });
                    this._7067._8686 = new c.lWr(new Float32Array(0),!1,!1),
                    this._7067._4698 = new c.lWr(new Uint16Array(0),!1,!0);
                    const r = new c.ZXM;
                    r.addAttribute("aPosition", this._7067._8686, 2, !1, c.vK6.FLOAT, 20, 0),
                    r.addAttribute("aAlpha", this._7067._8686, 1, !1, c.vK6.FLOAT, 20, 8),
                    r.addAttribute("aUV", this._7067._8686, 2, !1, c.vK6.FLOAT, 20, 12),
                    r.addIndex(this._7067._4698),
                    this._8585 = new c.Kj0(r,o),
                    this._2092 = It.mesh_gen_orb_shadow_get_info_buffer(),
                    It.mesh_gen_orb_shadow_setup()
                }
                _9257() {
                    const t = Y.ORB_SHADOW_INTENSITY._2230() / 100;
                    let _ = 0;
                    for (const e of ee._4456) {
                        if (_ >= 1365)
                            break;
                        if (e._3901 !== A._2978)
                            continue;
                        const s = 4 * _;
                        this._2092[s] = e._4526,
                        this._2092[s + 1] = e._6966,
                        this._2092[s + 2] = e._9617,
                        this._2092[s + 3] = e._9101 * t,
                        _++
                    }
                    It.mesh_gen_orb_shadow_update_buffers(_),
                    this._7067._8686.update(It.mesh_gen_orb_shadow_get_vertices_buffer()),
                    this._7067._4698.update(It.mesh_gen_orb_shadow_get_indices_buffer())
                }
                _4555() {
                    this._1799._5173[0] = j_._6000._4526,
                    this._1799._5173[1] = j_._6000._6966,
                    this._1799._1390[0] = j_._9830 / (Q_._2023 / 2),
                    this._1799._1390[1] = -j_._9830 / (Q_._2231 / 2)
                }
                _2081() {
                    Y.ORB_SHADOW._2230() ? (1 !== this._5665.children.length && this._5665.addChild(this._8585),
                    this._9257(),
                    this._4555()) : 0 !== this._5665.children.length && this._5665.removeChildren()
                }
            }
            ;
            class h_ {
                constructor(t, _, e) {
                    this._4526 = t,
                    this._6966 = _,
                    this._9617 = e
                }
            }
            class a_ {
                constructor(t, _, e, s, i, n, o, r) {
                    this._4526 = t,
                    this._6966 = _,
                    this._9617 = e,
                    this._3901 = s,
                    this._7614 = i,
                    this._6216 = n,
                    this._4663 = o,
                    this._7760 = r
                }
            }
            const c_ = class {
                constructor(t) {
                    const _ = new ArrayBuffer(t);
                    this._4143 = new DataView(_),
                    this._2864 = 0,
                    this._1027 = t
                }
                _8521(t) {
                    this._4143.setUint8(this._2864, t),
                    this._2864 += 1
                }
                _6035(t) {
                    this._4143.setInt8(this._2864, t),
                    this._2864 += 1
                }
                _3740(t) {
                    this._4143.setUint16(this._2864, t, !0),
                    this._2864 += 2
                }
                _4623(t) {
                    this._4143.setInt16(this._2864, t, !0),
                    this._2864 += 2
                }
                _7250(t) {
                    this._4143.setUint32(this._2864, t, !0),
                    this._2864 += 4
                }
                _4372(t) {
                    this._4143.setInt32(this._2864, t, !0),
                    this._2864 += 4
                }
                _2980(t) {
                    this._4143.setFloat32(this._2864, t, !0),
                    this._2864 += 4
                }
                _3654(t) {
                    this._4143.setFloat64(this._2864, t, !0),
                    this._2864 += 8
                }
                _3533(t) {
                    const _ = t.length;
                    this._8521(_);
                    for (let e = 0; e < _; e++) {
                        const _ = t.charCodeAt(e);
                        this._8521(_)
                    }
                }
                _2365(t) {
                    const _ = t.length;
                    this._3740(_);
                    for (let e = 0; e < _; e++) {
                        const _ = t.charCodeAt(e);
                        this._8521(_)
                    }
                }
                _2442(t) {
                    const _ = t.length;
                    this._8521(_);
                    for (let e = 0; e < _; e++) {
                        const _ = t.charCodeAt(e);
                        this._3740(_)
                    }
                }
                _7642(t) {
                    const _ = t.length;
                    this._3740(_);
                    for (let e = 0; e < _; e++) {
                        const _ = t.charCodeAt(e);
                        this._3740(_)
                    }
                }
                _9909() {
                    this._2864 = 0
                }
                get _4549() {
                    return this._2864 < this._1027 ? this._4143.buffer.slice(0, this._2864) : this._4143.buffer
                }
            }
              , l_ = new c_(131072)
              , u_ = class {
                constructor() {
                    this._6920 = 0,
                    this._1437 = 0,
                    this._4300 = new p,
                    this._8636 = new Set,
                    this._4130 = new Map,
                    this._9904 = new Map,
                    this._8742 = new Map
                }
                _5415(t) {
                    this._6920 = t
                }
                get _8089() {
                    return this._6920
                }
                _2058(t) {
                    this._1437 = t
                }
                get _4556() {
                    return this._1437
                }
                _4980(t, _) {
                    this._4300._8093(t, _)
                }
                get _3121() {
                    return this._4300
                }
                _1035(t) {
                    this._8636.add(t)
                }
                _3528(t, _) {
                    this._4130.set(_, t)
                }
                _8172(t, _, e, s) {
                    const i = new h_(_,e,s);
                    this._9904.set(t, i)
                }
                _3543(t, _, e, s, i, n, o, r, h) {
                    const a = new a_(_,e,s,i,n,o,r,h);
                    this._8742.set(t, a)
                }
                _7369(t) {
                    this._5415(t._8089),
                    this._2058(t._4556),
                    this._4980(t._3121._4526, t._3121._6966);
                    for (const _ of t._8636)
                        this._8742.delete(_);
                    for (const _ of t._4130.keys())
                        this._8742.delete(_);
                    for (const [_,e] of t._9904) {
                        return
                        const t = this._8742.get(_);
                        t._4526 = e._4526,
                        t._6966 = e._6966,
                        t._9617 = e._9617
                    }
                    for (const [_,e] of t._8742)
                        this._8742.set(_, e)
                }
                _5610(t) {
                    l_._9909(),
                    l_._7250(this._8089),
                    l_._3740(this._4556),
                    l_._3740(this._3121._4526),
                    l_._3740(this._3121._6966),
                    l_._3740(this._8636.size);
                    for (const t of this._8636)
                        l_._3740(t);
                    l_._3740(this._4130.size);
                    for (const [t,_] of this._4130)
                        l_._3740(_),
                        l_._3740(t);
                    l_._3740(this._9904.size);
                    for (const [t,_] of this._9904)
                        l_._3740(t),
                        l_._3740(_._4526),
                        l_._3740(_._6966),
                        l_._3740(_._9617);
                    l_._3740(this._8742.size);
                    for (const [_,e] of this._8742)
                        if (l_._3740(_),
                        l_._3740(e._4526),
                        l_._3740(e._6966),
                        l_._3740(e._9617),
                        l_._8521(e._3901),
                        1 === e._3901) {
                            const _ = t._8627(e._6216)
                              , s = t._8627(e._4663)
                              , i = t._8627(e._7760);
                            l_._8521((16711680 & e._7614) >>> 16),
                            l_._8521((65280 & e._7614) >>> 8),
                            l_._8521((255 & e._7614) >>> 0),
                            l_._3740(_),
                            l_._3740(s),
                            l_._3740(i)
                        } else
                            2 === e._3901 && (l_._8521((16711680 & e._7614) >>> 16),
                            l_._8521((65280 & e._7614) >>> 8),
                            l_._8521((255 & e._7614) >>> 0));
                    return l_._4549
                }
            }
            ;
            class d_ extends i {
                constructor(t) {
                    super();
                    const _ = t.split("~")
                      , e = _[1]
                      , s = _[2]
                      , i = _[3]
                      , n = "rec" === e ? "recording" : "replay"
                      , o = {
                        color: "rec" === e ? "#ee2222" : "#444444"
                    }
                      , r = tt.ZP.createElement("div", {
                        className: "gl-entry"
                    }, tt.ZP.createElement("div", {
                        className: "gl-entry-main"
                    }, tt.ZP.createElement("i", {
                        className: `gl-entry-main-type iconfont iconfont-${n}`,
                        style: o
                    }), tt.ZP.createElement("div", {
                        className: "gl-entry-main-info"
                    }, s, tt.ZP.createElement("br", null), "Duration: ", i)), tt.ZP.createElement("div", {
                        className: "gl-entry-buttons"
                    }, tt.ZP.createElement("i", {
                        className: "gl-entry-button iconfont iconfont-play",
                        onClick: ()=>{
                            this._9199("play")
                        }
                    }), tt.ZP.createElement("i", {
                        className: "gl-entry-button iconfont iconfont-save",
                        onClick: ()=>{
                            this._9199("save")
                        }
                    }), tt.ZP.createElement("i", {
                        className: "gl-entry-button iconfont iconfont-delete",
                        onClick: ()=>{
                            this._9199("delete")
                        }
                    })));
                    this._8001 = t,
                    this._8684 = r
                }
            }
            const m_ = new class {
                constructor() {
                    const t = document.getElementById("gl-alert")
                      , _ = document.getElementById("gl-alert-message")
                      , e = document.getElementById("gl-alert-yes")
                      , s = document.getElementById("gl-alert-cancel");
                    e.addEventListener("click", (()=>{
                        null !== this._4196 && this._4196(),
                        this._3742()
                    }
                    )),
                    s.addEventListener("click", (()=>{
                        this._3742()
                    }
                    )),
                    this._9843 = r._6246(t),
                    this._5573 = r._6246(_),
                    this._2494 = !1,
                    this._4196 = null
                }
                _8506(t, _) {
                    this._2494 || (this._9843._9596("display", "flex"),
                    this._2494 = !0),
                    this._5573._4667 = t,
                    this._4196 = _
                }
                _3742() {
                    this._2494 && (this._9843._9596("display", "none"),
                    this._2494 = !1),
                    this._4196 = null
                }
            }
              , f_ = new class extends h {
                constructor() {
                    super("gallery"),
                    this._5665 = document.getElementById("gl-container"),
                    this._3630 = new Map,
                    this._8134 = new q(document.querySelector(".gl-container-wrapper"))
                }
                _1489() {
                    const t = document.getElementById("gl-back-button");
                    t.addEventListener("click", (()=>{
                        this._9918(),
                        a._8375(a._6414)
                    }
                    )),
                    t.addEventListener("mouseenter", a._8375.bind(a, a._8611)),
                    this._5120(),
                    this._8134._1489()
                }
                _5120() {
                    const t = indexedDB.open("Gallery", 1);
                    t.addEventListener("success", (()=>{
                        const _ = t.result.transaction("clips", "readonly").objectStore("clips").getAllKeys();
                        _.addEventListener("success", (()=>{
                            for (const t of _.result)
                                this._8742(t.toString())
                        }
                        )),
                        _.addEventListener("error", (()=>{
                            console.error(_.error),
                            l._9736("Gallery", "Failed to load the clip from the database.")
                        }
                        ))
                    }
                    )),
                    t.addEventListener("error", (()=>{
                        console.error(t.error),
                        l._9736("Gallery", "Failed to load the clip from the database.")
                    }
                    )),
                    t.addEventListener("upgradeneeded", (_=>{
                        0 === _.oldVersion && t.result.createObjectStore("clips")
                    }
                    ))
                }
                _8742(t) {
                    const _ = new d_(t);
                    if (_._6206("play", (()=>{
                        this._7101(t)
                    }
                    )),
                    _._6206("save", (()=>{
                        this._8628(t)
                    }
                    )),
                    _._6206("delete", (()=>{
                        this._1689(t)
                    }
                    )),
                    this._5665.children.length > 0) {
                        const t = this._5665.firstChild;
                        this._5665.insertBefore(_._8684, t)
                    } else
                        this._5665.appendChild(_._8684);
                    this._3630.set(t, _),
                    this._8134._2081()
                }
                _3997(t, _) {
                    const e = indexedDB.open("Gallery", 1);
                    e.addEventListener("success", (()=>{
                        const s = e.result.transaction("clips", "readwrite").objectStore("clips").put(_, t);
                        s.addEventListener("success", (()=>{
                            this._8742(t)
                        }
                        )),
                        s.addEventListener("error", (()=>{
                            console.error(s.error),
                            l._9736("Gallery", "Failed to save the clip.")
                        }
                        ))
                    }
                    )),
                    e.addEventListener("error", (()=>{
                        console.error(e.error),
                        l._9736("Gallery", "Failed to save the clip.")
                    }
                    ))
                }
                _7101(t) {
                    const _ = ()=>{
                        const _ = indexedDB.open("Gallery", 1);
                        _.addEventListener("success", (()=>{
                            const e = _.result.transaction("clips", "readonly").objectStore("clips").get(t);
                            e.addEventListener("success", (()=>{
                                const t = e.result;
                                V_._9640(t),
                                ps._6116(),
                                ps._6116()
                            }
                            )),
                            e.addEventListener("error", (()=>{
                                console.error(e.error),
                                l._9736("Gallery", "Failed to play the clip.")
                            }
                            ))
                        }
                        )),
                        _.addEventListener("error", (()=>{
                            console.error(_.error),
                            l._9736("Gallery", "Failed to play the clip.")
                        }
                        ))
                    }
                    ;
                    Ge._8283 ? m_._8506("Are you sure you want to play this clip? You will be disconnected from the game server.", _) : _()
                }
                _8628(t) {
                    const _ = "https://ryuten.io/converter#" + encodeURI(t)
                      , e = window.open(_, "_blank");
                    null !== e && e.focus()
                }
                _1689(t) {
                    const _ = t.replace(/[~ :]/g, "_").toLowerCase();
                    m_._8506(`Are you sure you want to delete the clip ${_}?`, (()=>{
                        const _ = indexedDB.open("Gallery", 1);
                        _.addEventListener("success", (()=>{
                            const e = _.result.transaction("clips", "readwrite").objectStore("clips").delete(t);
                            e.addEventListener("success", (()=>{
                                const _ = this._3630.get(t);
                                this._5665.removeChild(_._8684),
                                this._3630.delete(t),
                                this._8134._2081()
                            }
                            )),
                            e.addEventListener("error", (()=>{
                                console.error(e.error),
                                l._9736("Gallery", "Failed to delete the clip.")
                            }
                            ))
                        }
                        )),
                        _.addEventListener("error", (()=>{
                            console.error(_.error),
                            l._9736("Gallery", "Failed to delete the clip.")
                        }
                        ))
                    }
                    ))
                }
                _9918() {
                    ps._6116()
                }
            }
              , p_ = new class extends i {
                constructor() {
                    super(),
                    this._9185 = [],
                    this._2653 = new class {
                        constructor() {
                            this._1472 = [],
                            this._7546 = 2
                        }
                        _8627(t) {
                            const _ = this._1472.indexOf(t);
                            return _ < 0 ? (this._7546 += 2 * t.length + 1,
                            this._1472.push(t) - 1) : _
                        }
                        _9909() {
                            this._1472 = [],
                            this._7546 = 2
                        }
                        _5610() {
                            if (this._1472.length > 0) {
                                const t = new c_(this._7546 + 9);
                                t._3740(this._1472.length),
                                t._3533("string16");
                                for (const _ of this._1472)
                                    t._2442(_);
                                return t._4549
                            }
                            {
                                const t = new c_(this._7546);
                                return t._3740(0),
                                t._4549
                            }
                        }
                    }
                }
                _3423() {
                    if (this._9185.length < 2)
                        l._9736("Instant replay", "Not enough frames to create a replay.");
                    else {
                        let t = 0;
                        const _ = [];
                        for (const e of this._9185) {
                            const s = e._5610(this._2653);
                            _.push(s),
                            t += s.byteLength
                        }
                        const e = this._2653._5610()
                          , s = this._1761(e, _, e.byteLength + t)
                          , i = this._9185[0]._8089
                          , n = this._9185[this._9185.length - 1]._8089
                          , o = Math.floor((n - i) / 1e3)
                          , r = Math.floor(Date.now() - (n - i))
                          , h = this._9730("replay", r, o);
                        f_._3997(h, s),
                        l._9736("Instant replay", "Saved to gallery.")
                    }
                    this._2653._9909(),
                    this._9185 = []
                }
                _1761(t, _, e) {
                    const s = new Uint8Array(e);
                    let i = 0;
                    const n = new Uint8Array(t);
                    for (let t = 0; t < n.length; t++)
                        s[i++] = n[t];
                    for (const t of _) {
                        const _ = new Uint8Array(t);
                        for (let t = 0; t < _.length; t++)
                            s[i++] = _[t]
                    }
                    return s.buffer
                }
                _9730(t, _, e) {
                    const s = new Date(_).toString().substring(4, 24)
                      , i = Math.floor(e / 3600).toString().padStart(2, "0")
                      , n = Math.floor(e % 3600 / 60).toString().padStart(2, "0")
                      , o = (e % 60).toString().padStart(2, "0");
                    return `${Date.now()}~${t}~${s}~${i}:${n}:${o}`
                }
                _8598(t) {
                    if (!Y.INSTANT_REPLAY._2230())
                        return void (this._9185.length > 0 && (this._9185 = [],
                        this._2653._9909()));
                    const _ = new u_;
                    _._5415(n._8276),
                    _._2058(ee._4006),
                    _._4980(j_._6000._4526, j_._6000._6966),
                    t._7190(4),
                    t.getUint8() && (t.getUint8() === X._4455 ? t._7190(11) : t._7190(4));
                    const e = t.getUint16();
                    for (let s = 0; s < e; s++) {
                        const e = t.getUint16();
                        _._1035(e)
                    }
                    const s = t.getUint16();
                    for (let e = 0; e < s; e++) {
                        const e = t.getUint16()
                          , s = t.getUint16();
                        _._3528(e, s)
                    }
                    const i = t.getUint16();
                    for (let e = 0; e < i; e++) {
                        const e = t.getUint16()
                          , s = ee._7115(e)
                          , i = t.getUint16()
                          , n = t.getUint16()
                          , o = s._3901 === A._4244 ? t.getUint8() : t.getUint16();
                        _._8172(e, i, n, o)
                    }
                    const o = t.getUint16();
                    for (let e = 0; e < o; e++) {
                        const e = t.getUint16()
                          , s = t.getUint8()
                          , i = t.getUint16()
                          , n = t.getUint16()
                          , o = s === A._4244 ? t.getUint8() : t.getUint16();
                        if (s === A._2978) {
                            const r = t.getUint16()
                              , h = ee._2959(r)
                              , a = Fe._4663.length + Fe._8080.length > 0 && ee._5482.has(r)
                              , c = h._2993._3195
                              , l = h._7614._9458
                              , u = h._2993._6216
                              , d = h._2993._4663
                              , m = a || c ? h._2371 : "";
                            _._3543(e, i, n, o, s, l, u, d, m)
                        } else if (s === A._1223) {
                            const r = t.getUint16()
                              , h = ee._2959(r);
                            _._3543(e, i, n, o, s, h._7614._9458, "", "", "")
                        } else
                            _._3543(e, i, n, o, s, 0, "", "", "")
                    }
                    this._6239(_)
                }
                _6239(t) {
                    this._9185.length < 1 && (t = this._9524()),
                    this._9185.push(t);
                    const _ = 1e3 * Y.INSTANT_REPLAY_LENGTH._2230()
                      , e = this._9185[0];
                    let s = this._9185[this._9185.length - 1];
                    for (; this._9185.length > 1 && s._8089 - e._8089 > _; ) {
                        const t = this._9185[1];
                        e._7369(t),
                        this._9185[1] = this._9185[0],
                        this._9185.shift(),
                        s = this._9185[this._9185.length - 1]
                    }
                }
                _9524() {
                    const t = new u_;
                    t._5415(n._8276),
                    t._2058(ee._4006),
                    t._4980(j_._6000._4526, j_._6000._6966);
                    for (const _ of ee._1420.values()) {
                        if (_._6671)
                            continue;
                        const e = _._3901 === A._2978 && Fe._4663.length + Fe._8080.length > 0 && ee._5482.has(_._9486._8001)
                          , s = _._3901 === A._2978 && _._9486._2993._3195
                          , {_8001: i, _8447: n, _6261: o, _4784: r, _3901: h} = _;
                        if (h === A._4244)
                            t._3543(i, n, o, r, h, 0, "", "", "");
                        else if (h === A._2978) {
                            const a = _._9486._7614._9458
                              , c = _._9486._2993._6216
                              , l = _._9486._2993._4663
                              , u = e || s ? _._9486._2371 : "";
                            t._3543(i, n, o, r, h, a, c, l, u)
                        } else if (h === A._1223) {
                            const e = _._7614._9458;
                            t._3543(i, n, o, r, h, e, "", "", "")
                        } else
                            h === A._4509 && t._3543(i, n, o, r, h, 0, "", "", "")
                    }
                    return t
                }
                _9389() {
                    this._2653._9909(),
                    this._9185 = []
                }
            }
              , g_ = new class {
                constructor() {
                    this._5635 = null
                }
                _1489() {
                    const t = document.getElementById("context-menu");
                    this._5635 = r._6246(t)
                }
                _8506(t) {
                    const _ = document.createDocumentFragment();
                    for (const e of t) {
                        const t = tt.ZP.createElement("div", {
                            class: "come-option",
                            onClick: e._5195
                        }, tt.ZP.createElement("i", {
                            class: ["come-option-icon", "iconfont", `iconfont-${e._1809}`]
                        }), tt.ZP.createElement("div", {
                            class: "come-option-text"
                        }, e._4667));
                        _.appendChild(t)
                    }
                    this._5635._9596("visibility", "visible"),
                    this._5635._9596("opacity", "1"),
                    this._5635._9596("transform", "translateY(0px)");
                    const e = z._5286 / 100
                      , s = (12 + 1 * e) * t.length + .4 * e + 2;
                    D_._6998._6966 + s < z._5286 ? (this._5635._9596("top", `${D_._6998._6966}px`),
                    this._5635._9596("bottom", "auto"),
                    this._5635._9596("left", `${D_._6998._4526}px`)) : (this._5635._9596("top", "auto"),
                    this._5635._9596("bottom", z._5286 - D_._6998._6966 + "px"),
                    this._5635._9596("left", `${D_._6998._4526}px`)),
                    o._4428((()=>{
                        this._5635._8684.appendChild(_)
                    }
                    )),
                    window.addEventListener("mouseup", this._7486.bind(this), {
                        once: !0
                    })
                }
                _7486() {
                    this._5635._9596("visibility", "collapse"),
                    this._5635._9596("opacity", "0"),
                    this._5635._9596("transform", "translateY(-50px)"),
                    o._4428((()=>{
                        this._5635._8684.innerHTML = ""
                    }
                    ))
                }
            }
              , E_ = new class {
                constructor() {
                    this._9182 = null,
                    this._6732 = null,
                    this._7336 = null,
                    this._5575 = !1
                }
                _3419() {
                    return this._5575
                }
                _1489() {
                    const t = document.getElementById("chbx-body")
                      , _ = document.getElementById("chbx-body-content");
                    t.addEventListener("mouseenter", (()=>{
                        this._5575 = !0
                    }
                    )),
                    t.addEventListener("mouseleave", (()=>{
                        this._5575 = !1
                    }
                    )),
                    this._9182 = r._6246(t),
                    this._6732 = r._6246(_),
                    this._7336 = new q(t),
                    this._7336._1489()
                }
                _2100(t) {
                    o._4428((()=>{
                        this._6732._8684.appendChild(t._8684)
                    }
                    ))
                }
                _9437(t) {
                    o._4428((()=>{
                        this._6732._8684.removeChild(t._8684)
                    }
                    ))
                }
                _1483() {
                    this._9182._9596("flex", "0 0 calc(130px + 15vh)"),
                    E_._7336._3148()
                }
                _9463() {
                    this._9182._9596("flex", "0 0 calc(65px + 7.5vh)"),
                    E_._7336._2081(),
                    E_._7336._3148()
                }
                _4838(t) {
                    this._9182._9596("opacity", t.toString())
                }
                _4903(t) {
                    const _ = this._6732._8684.querySelectorAll(".chbx-message-time");
                    for (const e of _)
                        e.style.display = t ? "none" : "inline-block"
                }
            }
              , y_ = new class {
                constructor() {
                    this._6646 = !0
                }
                _1489() {
                    const t = document.getElementById("chbx-resize")
                      , _ = r._6246(t);
                    t.onclick = ()=>{
                        this._6646 ? (_._9596("transform", "rotate(180deg)"),
                        E_._9463(),
                        localStorage.setItem("chatbox-shrink", "yes")) : (_._9596("transform", "rotate(0deg)"),
                        E_._1483(),
                        localStorage.removeItem("chatbox-shrink")),
                        this._6646 = !this._6646
                    }
                    ,
                    null !== localStorage.getItem("chatbox-shrink") && t.click()
                }
            }
              , w_ = new class {
                constructor() {
                    this._9843 = null
                }
                _1489() {
                    const t = document.getElementById("chbx-channel-close");
                    this._9843 = r._6246(t),
                    this._9843._8684.onclick = ()=>{
                        N_._4825(N_._5752)
                    }
                }
                _8506() {
                    this._9843._9596("display", "inline")
                }
                _7486() {
                    this._9843._9596("display", "none")
                }
            }
            ;
            class v_ {
                constructor() {
                    this._8684 = tt.ZP.createElement("div", {
                        class: "chbx-body-channel"
                    }),
                    this._9843 = r._6246(this._8684),
                    this._4960 = []
                }
                _2100(t) {
                    o._4428((()=>{
                        if (this._8684.appendChild(t._8684),
                        this._4960.length > 30) {
                            const t = this._4960.shift();
                            void 0 !== t && this._8684.removeChild(t._8684)
                        }
                        E_._7336._2081(),
                        E_._7336._3148()
                    }
                    )),
                    this._4960.push(t)
                }
                _8506() {
                    this._9843._9596("display", "block"),
                    o._3153((()=>{
                        E_._7336._2081(),
                        E_._7336._3148()
                    }
                    ))
                }
                _7486() {
                    this._9843._9596("display", "none"),
                    o._3153((()=>{
                        E_._7336._2081()
                    }
                    ))
                }
                _7364() {
                    const t = [];
                    for (const _ of this._4960)
                        t.push(_._1681());
                    return t.join("\n")
                }
            }
            class b_ {
                constructor(t, _) {
                    this._8001 = t,
                    this._9846 = _,
                    this._5622 = new v_,
                    this._6819 = new A_(t),
                    this._8516 = !1,
                    this._9742 = !1
                }
                get _1840() {
                    return this._8516
                }
                set _1840(t) {
                    this._8516 = t,
                    t ? this._6819._5538() : this._6819._6426()
                }
                _2516(t, _) {
                    const e = new C_(t,_);
                    this._5622._2100(e),
                    this._9742 || (this._1840 = !0)
                }
                _5740() {
                    this._9742 || (this._5622._8506(),
                    this._1840 = !1,
                    this._9742 = !0)
                }
                _7163() {
                    this._9742 && (this._5622._7486(),
                    this._9742 = !1)
                }
            }
            class C_ {
                constructor(t, _) {
                    const e = this._2012()
                      , s = [{
                        _1809: "copy",
                        _4667: "Copy message",
                        _5195: ()=>{
                            const t = this._1681();
                            navigator.clipboard.writeText(t).catch(console.error)
                        }
                    }, {
                        _1809: "copy-all",
                        _4667: "Copy all",
                        _5195: ()=>{
                            const t = N_._8692._5622._7364();
                            navigator.clipboard.writeText(t).catch(console.error)
                        }
                    }];
                    Fe._6216 !== t && s.push({
                        _1809: "mute",
                        _4667: `Mute ${t}`,
                        _5195: ()=>{
                            I_._2100(t)
                        }
                    }, {
                        _1809: "chat-bubble",
                        _4667: `Message ${t}`,
                        _5195: ()=>{
                            const _ = `[DM] ${t}`;
                            N_._2322(_),
                            N_._4119(_)
                        }
                    });
                    const i = P_._5739.HIDE_TIMESTAMPS
                      , n = tt.ZP.createElement("div", {
                        class: "chbx-message",
                        onContextMenu: ()=>{
                            g_._8506(s)
                        }
                    }, tt.ZP.createElement("div", {
                        class: "chbx-message-time",
                        style: {
                            display: i ? "none" : "inline-block"
                        }
                    }, e), tt.ZP.createElement("div", {
                        class: "chbx-message-sender"
                    }, t), tt.ZP.createElement("div", {
                        class: "chbx-message-content"
                    }, _));
                    this._8684 = n,
                    this._6920 = e,
                    this._6802 = t,
                    this._5804 = _
                }
                _2012() {
                    const t = new Date;
                    return `${`0${t.getHours()}`.slice(-2)}:${`0${t.getMinutes()}`.slice(-2)}`
                }
                _1681() {
                    return `(${this._6920}) ${this._6802}: ${this._5804}`
                }
            }
            class A_ {
                constructor(t) {
                    const _ = tt.ZP.createElement("i", {
                        class: "iconfont iconfont-circle chbx-dropup-unread"
                    })
                      , e = tt.ZP.createElement("div", {
                        class: "chbx-dropup-list-item"
                    }, _, t);
                    this._8001 = t,
                    this._8684 = e,
                    this._6111 = r._6246(_)
                }
                _5538() {
                    this._6111._9596("display", "inline")
                }
                _6426() {
                    this._6111._9596("display", "none")
                }
            }
            const S_ = new class {
                constructor() {
                    this._7086 = null,
                    this._5804 = null,
                    this._8134 = null,
                    this._8125 = !1
                }
                _1489() {
                    const t = document.getElementById("chbx-dropup-list")
                      , _ = document.getElementById("chbx-dropup-list-content");
                    this._7086 = r._6246(t),
                    this._5804 = _,
                    this._8134 = new q(t),
                    this._8134._1489()
                }
                _2100(t) {
                    o._4428((()=>{
                        this._5804.appendChild(t._8684),
                        this._8134._2081()
                    }
                    ))
                }
                _9437(t) {
                    o._4428((()=>{
                        this._5804.removeChild(t._8684),
                        this._8134._2081()
                    }
                    ))
                }
                _8506() {
                    this._8125 || (this._7086._9596("transform", "translateY(-100%) rotateX(0deg)"),
                    this._8125 = !0)
                }
                _7486() {
                    this._8125 && (this._7086._9596("transform", "translateY(-100%) rotateX(90deg)"),
                    this._8125 = !1)
                }
            }
              , T_ = new class {
                constructor() {
                    this._9017 = null,
                    this._6111 = null,
                    this._7507 = null
                }
                _1489() {
                    const t = document.getElementById("chbx-dropup-selected")
                      , _ = document.getElementById("chbx-dropup-unread")
                      , e = document.getElementById("chbx-dropup-arrow");
                    this._9017 = r._6246(t),
                    this._6111 = r._6246(_),
                    this._7507 = r._6246(e),
                    document.getElementById("chbx-dropup").onclick = ()=>{
                        S_._8125 ? this._1266() : this._8766()
                    }
                }
                _8766() {
                    S_._8506(),
                    this._7507._9596("transform", "rotate(180deg)")
                }
                _1266() {
                    S_._7486(),
                    this._7507._9596("transform", "rotate(0deg)")
                }
                _5538() {
                    this._6111._9596("display", "inline")
                }
                _6426() {
                    this._6111._9596("display", "none")
                }
                _9894(t) {
                    this._9017._4667 = t._8001
                }
            }
              , I_ = new class {
                constructor() {
                    this._6951 = "chatbox-mute-list",
                    this._8811 = [],
                    this._5804 = null,
                    this._8134 = null,
                    this._9843 = null,
                    this._2494 = !1,
                    this._5575 = !1
                }
                _3419() {
                    return this._5575
                }
                _1489() {
                    const t = document.getElementById("chatbox-mute-list")
                      , _ = document.getElementById("chbxml-body")
                      , e = document.getElementById("chbxml-body-content")
                      , s = document.getElementById("chbxml-close");
                    this._5804 = e,
                    this._8134 = new q(_),
                    this._8134._1489(),
                    this._9843 = r._6246(t),
                    this._5120(),
                    this._5673(),
                    s.onclick = ()=>{
                        this._7486()
                    }
                    ,
                    t.addEventListener("mouseenter", (()=>{
                        this._5575 = !0
                    }
                    )),
                    t.addEventListener("mouseleave", (()=>{
                        this._5575 = !1
                    }
                    ))
                }
                _2100(t) {
                    t !== Fe._6216 ? this._8811.indexOf(t) < 0 ? (this._8811.push(t),
                    this._6575(),
                    this._5673(),
                    l._9736("Chat", `${t} has been muted.`)) : l._9736("Chat", `${t} is already muted.`) : l._9736("Chat", "You cannot mute yourself.")
                }
                _9437(t) {
                    const _ = this._8811.indexOf(t);
                    _ >= 0 ? (this._8811.splice(_, 1),
                    this._6575(),
                    this._5673(),
                    l._9736("Chat", `${t} has been unmuted.`)) : l._9736("Chat", `${t} is already unmuted.`)
                }
                _8506() {
                    this._2494 || (this._9843._9596("visibility", "visible"),
                    this._9843._9596("opacity", "1"),
                    this._9843._9596("transform", "translate(-50%,-50%)"),
                    this._2494 = !0)
                }
                _7486() {
                    this._2494 && (this._9843._9596("visibility", "hidden"),
                    this._9843._9596("opacity", "0"),
                    this._9843._9596("transform", "translate(-50%,-40%)"),
                    this._2494 = !1)
                }
                _7557() {
                    this._2494 ? this._7486() : this._8506()
                }
                _7554(t) {
                    return this._8811.includes(t)
                }
                _6575() {
                    const t = /^Guest\d{4}$/
                      , _ = this._8811.filter((_=>!t.test(_)));
                    0 === _.length ? localStorage.removeItem(this._6951) : localStorage.setItem(this._6951, _.join("\n"))
                }
                _5120() {
                    const t = localStorage.getItem(this._6951);
                    null !== t && (this._8811 = t.split("\n"))
                }
                _5673() {
                    o._4428((()=>{
                        this._5804.innerHTML = "";
                        for (const t of this._8811) {
                            const _ = ()=>{
                                this._9437(t)
                            }
                              , e = tt.ZP.createElement("div", {
                                class: "chbxml-entry"
                            }, tt.ZP.createElement("div", {
                                class: "chbxml-entry-name"
                            }, t), tt.ZP.createElement("i", {
                                class: "iconfont iconfont-delete chbxml-entry-remove",
                                onClick: _
                            }));
                            this._5804.appendChild(e),
                            this._8134._2081()
                        }
                    }
                    ))
                }
            }
              , O_ = new class {
                _1489() {
                    document.getElementById("chbx-mute-list").onclick = ()=>{
                        I_._7557()
                    }
                }
            }
              , L_ = new class {
                _1489() {
                    document.getElementById("chbx-settings").onclick = ()=>{
                        P_._7557()
                    }
                }
            }
              , P_ = new class {
                constructor() {
                    this._6951 = "chatbox-settings",
                    this._9843 = null,
                    this._2494 = !1,
                    this._5739 = {
                        HIDE_TIMESTAMPS: !1,
                        AUTO_DIM_CHATROOM: !0
                    }
                }
                _1489() {
                    this._5120();
                    const t = document.getElementById("chbx-settings-menu")
                      , _ = document.getElementById("chbxsm-hide-timestamps")
                      , e = r._6246(_);
                    e._4438(this._5739.HIDE_TIMESTAMPS ? "iconfont-checkbox" : "iconfont-checkbox-outline"),
                    _.onclick = ()=>{
                        this._5739.HIDE_TIMESTAMPS = !this._5739.HIDE_TIMESTAMPS,
                        this._5739.HIDE_TIMESTAMPS ? (e._4438("iconfont-checkbox"),
                        e._4652("iconfont-checkbox-outline")) : (e._4438("iconfont-checkbox-outline"),
                        e._4652("iconfont-checkbox")),
                        E_._4903(this._5739.HIDE_TIMESTAMPS),
                        this._6575()
                    }
                    ;
                    const s = document.getElementById("chbxsm-dim-when-inactive")
                      , i = r._6246(s);
                    i._4438(this._5739.AUTO_DIM_CHATROOM ? "iconfont-checkbox" : "iconfont-checkbox-outline"),
                    s.onclick = ()=>{
                        this._5739.AUTO_DIM_CHATROOM = !this._5739.AUTO_DIM_CHATROOM,
                        this._5739.AUTO_DIM_CHATROOM ? (i._4438("iconfont-checkbox"),
                        i._4652("iconfont-checkbox-outline")) : (i._4438("iconfont-checkbox-outline"),
                        i._4652("iconfont-checkbox")),
                        this._6575()
                    }
                    ,
                    document.getElementById("chbxsm-close").onclick = ()=>{
                        this._7486()
                    }
                    ,
                    this._9843 = r._6246(t)
                }
                _8506() {
                    this._2494 || (this._9843._9596("visibility", "visible"),
                    this._9843._9596("opacity", "1"),
                    this._9843._9596("transform", "translate(-50%,-50%)"),
                    this._2494 = !0)
                }
                _7486() {
                    this._2494 && (this._9843._9596("visibility", "hidden"),
                    this._9843._9596("opacity", "0"),
                    this._9843._9596("transform", "translate(-50%,-40%)"),
                    this._2494 = !1)
                }
                _7557() {
                    this._2494 ? this._7486() : this._8506()
                }
                _5120() {
                    const t = localStorage.getItem(this._6951);
                    if (null !== t) {
                        const _ = t.replace("_2CL8CFE783F3DEA", "ALLOW_MESSAGE_FROM_GUESTS").replace("_2CLCD98CA41AEF2", "HIDE_TIMESTAMPS").replace("_2CL60EF6FBFBC67", "AUTO_DIM_CHATROOM");
                        try {
                            const t = JSON.parse(_);
                            if ("object" == typeof t) {
                                const _ = t
                                  , e = Object.getOwnPropertyNames(_);
                                for (const t of e)
                                    Object.prototype.hasOwnProperty.call(this._5739, t) && "boolean" == typeof _[t] && Object.defineProperty(this._5739, t, {
                                        value: _[t]
                                    })
                            }
                        } catch (t) {
                            console.error("Corrupt chatbox settings."),
                            localStorage.removeItem(this._6951)
                        }
                    }
                }
                _6575() {
                    localStorage.setItem(this._6951, JSON.stringify(this._5739))
                }
            }
              , N_ = new class {
                constructor() {
                    this._9843 = null,
                    this._4785 = new Map,
                    this._5752 = "",
                    this._3586 = 0,
                    this._9207 = !0,
                    this._5569 = 0,
                    this._5575 = !1,
                    this._4782 = !1
                }
                _1489() {
                    E_._1489(),
                    y_._1489(),
                    w_._1489(),
                    T_._1489(),
                    S_._1489(),
                    I_._1489(),
                    O_._1489(),
                    P_._1489(),
                    L_._1489(),
                    this._2322("GLOBAL", !0),
                    this._2322("TEAM", !0),
                    this._4119("GLOBAL");
                    const t = document.getElementById("chatbox");
                    this._9843 = r._6246(t),
                    t.addEventListener("mouseenter", (()=>{
                        this._5575 = !0
                    }
                    )),
                    t.addEventListener("mouseleave", (()=>{
                        this._5575 = !1,
                        this._5569 = n._8276
                    }
                    ))
                }
                get _9539() {
                    return this._3586
                }
                set _9539(t) {
                    this._3586 = t,
                    t > 0 ? T_._5538() : T_._6426()
                }
                get _8692() {
                    return this._4785.get(this._5752)
                }
                _2081() {
                    const t = "show" === Y.SHOW_CHATBOX._2230();
                    if (this._9207 !== t && (this._9843._9596("display", t ? "flex" : "none"),
                    this._9207 = t),
                    t) {
                        const t = P_._5739.AUTO_DIM_CHATROOM && n._8276 - this._5569 > 1e4 && !this._5575;
                        this._4782 ? t || (E_._4838(1),
                        this._4782 = !1) : t && (E_._4838(.1),
                        this._4782 = !0)
                    }
                }
                _2516(t, _, e) {
                    if (I_._7554(_))
                        return;
                    const s = this._4785.get(t) || this._2322(t);
                    s._1840 && this._9539--,
                    s._2516(_, e),
                    s._1840 && this._9539++,
                    this._5569 = n._8276
                }
                _2322(t, _=!1) {
                    if (this._4785.has(t))
                        return this._4785.get(t);
                    const e = new b_(t,_);
                    return this._4785.set(t, e),
                    E_._2100(e._5622),
                    S_._2100(e._6819),
                    e._6819._8684.addEventListener("click", (()=>{
                        this._4119(e._8001)
                    }
                    )),
                    e
                }
                _4825(t, _=!1) {
                    const e = this._4785.get(t);
                    if (void 0 === e)
                        throw new Error("Channel is undefined");
                    if (e._9846 && !_)
                        throw new Error("Channel is permanent");
                    if (E_._9437(e._5622),
                    S_._9437(e._6819),
                    this._4785.delete(t),
                    e._9742) {
                        const t = [...this._4785.values()][0];
                        this._4119(t._8001)
                    }
                }
                _4119(t) {
                    for (const _ of this._4785.values())
                        _._8001 === t ? (_._1840 && this._9539--,
                        _._5740(),
                        T_._9894(_._6819),
                        this._5752 = t,
                        _._9846 ? w_._7486() : w_._8506()) : _._7163();
                    T_._1266()
                }
                _6874() {
                    for (const t of this._4785.keys())
                        t.startsWith("[DM] ") && this._4825(t)
                }
            }
              , M_ = [10, 20, 31, 42, 54, 67, 80, 94, 109, 125, 142, 160, 179, 199, 220, 243, 267, 292, 319, 348, 378, 410, 444, 480, 518, 558, 601, 646, 694, 745, 799, 856, 917, 982, 1050, 1123, 1200, 1281, 1367, 1459, 1556, 1659, 1768, 1884, 2007, 2137, 2275, 2421, 2576, 2740, 2914, 3098, 3293, 3500, 3719, 3952, 4199, 4460, 4737, 5031, 5342, 5672, 6022, 6393, 6786, 7202, 7643, 8111, 8607, 9133, 9690, 10281, 10907, 11571, 12275, 13021, 13812, 14650, 15538, 16480, 17478, 18536, 19657, 20846, 22106, 23442, 24858, 26359, 27950, 29636, 31423, 33318, 35326, 37455, 39712, 42104, 44639, 47327, 50176, 53196]
              , R_ = new class {
                constructor() {
                    this._9444 = !1,
                    this._5753 = "Guest0000",
                    this._6076 = 0,
                    this._1500 = {
                        _9011: 0,
                        _1432: 0
                    }
                }
                _9147(t) {
                    t ? this._9444 = !0 : (this._9444 = !1,
                    this._5753 = "Guest0000",
                    this._6076 = 0,
                    this._1500._9011 = 0,
                    this._1500._1432 = 0)
                }
                _1284() {
                    return this._9444
                }
                _7173(t) {
                    this._5753 = t
                }
                _4985() {
                    return this._5753
                }
                _6518(t) {
                    this._6076 = t;
                    const _ = function(t) {
                        let _ = 1;
                        for (let e = 0; e < M_.length; e++) {
                            const s = M_[e];
                            t >= s && (t -= s,
                            _++)
                        }
                        return _ > 100 && (_ = 100),
                        {
                            _6964: t,
                            _8672: M_[_ - 1],
                            _3467: _
                        }
                    }(t);
                    Xe._2263(_._6964, _._8672, _._3467)
                }
                _8438() {
                    return this._6076
                }
                _3797(t, _) {
                    switch (t) {
                    case "rp":
                        this._1500._9011 = _;
                        break;
                    case "rc":
                        this._1500._1432 = _
                    }
                }
                _3977(t) {
                    switch (t) {
                    case "rp":
                        return this._1500._9011;
                    case "rc":
                        return this._1500._1432
                    }
                }
            }
              , x_ = new class {
                constructor() {
                    this._3870 = {
                        _6783: !1,
                        _5809: 0
                    },
                    this._8238 = !1,
                    this._2919 = 0
                }
                get _9180() {
                    return this._8238
                }
                _1489() {
                    Fe._6206("active-player-change", ((t,_)=>{
                        this._3870._6783 && (Ke._6278(_, !1),
                        Ke._6278(t, !0),
                        this._3870._5809 = t)
                    }
                    ))
                }
                _8375() {
                    Fe._7297 ? ds._3235 && ps._6116() : Ke._7884(Fe._8370)
                }
                _7030() {
                    const t = Fe._8370;
                    if (Fe._5605[t]) {
                        const _ = n._1398 - Fe._9013[t];
                        _ < 1e3 ? l._9736("Respawn", "Spam control. Respawn failed") : _ > 1e4 ? l._9736("Respawn", "Active player unit has been alive for more than 10 seconds. Respawn failed.") : (Ke._7030(t),
                        j_._5799 = X._1581)
                    }
                }
                _4615() {
                    Fe._7297 && Ke._4615(Fe._8370)
                }
                _6278(t) {
                    t !== this._3870._6783 && (t && !Fe._7297 || (this._3870._6783 = t,
                    this._3870._5809 = Fe._8370,
                    Ke._6278(Fe._8370, t)))
                }
                _7324(t=1) {
                    Fe._7297 && Ke._7324(Fe._8370, t)
                }
                _6998() {
                    if (this._8238)
                        return;
                    const t = ps._9136 && (Y.STOP_MOVEMENT_ON_MENU_OPEN._2230() || !Fe._7297) || this._8238;
                    if (t && !Fe._7297)
                        return;
                    const _ = Y.RESOLUTION._2230() / 100
                      , e = window.devicePixelRatio
                      , s = t ? Fe._6166[Fe._8370]._4526 : (D_._6998._4526 - z._6006 / 2) * _ * e / j_._9830 + j_._6000._4526
                      , i = t ? Fe._6166[Fe._8370]._6966 : (D_._6998._6966 - z._5286 / 2) * _ * e / j_._9830 + j_._6000._6966;
                    Fe._7297 ? Ke._6998(Fe._8370, s, i) : Ke._4753(s, i)
                    ws.mouseX = s
                    ws.mouseY = i

                }
                _9092() {
                    if (!Fe._7297 || Fe._5136 < 2)
                        return;
                    const t = (Fe._8370 + 1) % Fe._5136;
                    Fe._8370 = t,
                    this._6998(),
                    Fe._5605[t] || Ke._7884(t)
                }
                _8053() {
                    this._8238 = !this._8238;
                    for (let t = 0; t < 2; t++)
                        Ke._8840(t, this._8238)
                }
                _3874() {
                    Fe._7297 || (j_._5799 === X._1581 || j_._5799 === X._4455 ? Ke._7316() : Ke._2273())
                }
                _6178(t) {
                    const _ = n._1398;
                    if (_ - this._2919 < 500)
                        return void l._9736("Quick chat", "Slow down, you are sending messages too fast.");
                    if (t.length < 1)
                        return;
                    const e = N_._5752;
                    if (e.startsWith("[DM] ")) {
                        const _ = e.substring(5);
                        let s = -1;
                        for (const [t,e] of ee._3412)
                            if (e._6216 === _) {
                                s = t;
                                break
                            }
                        -1 !== s ? Ke._3846(s, t) : l._9736("Direct message failed", "The user seems to be disconnected.")
                    } else
                        "GLOBAL" === N_._5752 ? R_._1284() ? Ke._2698(100, t) : l._9736("In game chat", "Please login to chat globally.") : 0 === Fe._4663.length ? l._9736("In game chat", "Please join a team to chat in the team channel.") : Ke._2698(1, t);
                    this._2919 = _
                }
                _4808(t) {
                    j_._5426 = t
                }
                _9249() {
                    const t = Y.RESOLUTION._2230() / 100
                      , _ = window.devicePixelRatio
                      , e = (D_._6998._4526 - z._6006 / 2) * t * _ / j_._9830 + j_._6000._4526
                      , s = (D_._6998._6966 - z._5286 / 2) * t * _ / j_._9830 + j_._6000._6966;
                    Ke._9249(e, s)
                }
                _3646() {
                    Y.INSTANT_REPLAY._2230() && p_._3423()
                }
                _2645() {
                    const t = Y.RESOLUTION._2230() / 100
                      , _ = window.devicePixelRatio
                      , e = (D_._6998._4526 - z._6006 / 2) * t * _ / j_._9830 + j_._6000._4526
                      , s = (D_._6998._6966 - z._5286 / 2) * t * _ / j_._9830 + j_._6000._6966;
                    let i = Number.MAX_SAFE_INTEGER
                      , n = null;
                    for (const t of ee._1420.values())
                        if (t._3901 === A._2978) {
                            const _ = Math.abs(e - t._4526)
                              , o = Math.abs(s - t._6966)
                              , r = Math.sqrt(_ ** 2 + o ** 2);
                            r < t._9617 && r < i && (n = t,
                            i = r)
                        }
                    null !== n && Ke._1330(n._9486._2993._8001)
                }
            }
              , k_ = new class {
                constructor() {
                    this._5635 = document.getElementById("chat-input"),
                    this._9843 = r._6246(this._5635),
                    this._9207 = !1,
                    this._5575 = !1,
                    this._7552 = 0
                }
                get _3419() {
                    return this._5575
                }
                _1489() {
                    this._5635.addEventListener("focus", (()=>{
                        this._5575 = !0
                    }
                    )),
                    this._5635.addEventListener("blur", (()=>{
                        this._5575 = !1
                    }
                    ))
                }
                _4243() {
                    const t = n._1398;
                    if (t - this._7552 < 500)
                        return l._9736("Chat", "Slow down, you are sending messages too fast."),
                        this._2170(!0),
                        setTimeout((()=>{
                            this._2170(!1)
                        }
                        ), 1e3),
                        !1;
                    const _ = this._5635.value.substring(0, 75);
                    if (_.length < 1)
                        return !0;
                    const e = N_._5752;
                    if (e.startsWith("[DM] ")) {
                        const t = e.substring(5);
                        let s = -1;
                        for (const [_,e] of ee._3412)
                            if (e._6216 === t) {
                                s = _;
                                break
                            }
                        -1 !== s ? Ke._3846(s, _) : l._9736("Direct message failed", "The user seems to be disconnected.")
                    } else
                        "GLOBAL" === N_._5752 ? R_._1284() ? Ke._2698(100, _) : l._9736("In game chat", "Please login to chat globally.") : 0 === Fe._4663.length ? l._9736("In game chat", "Please join a team to chat in the team channel.") : Ke._2698(1, _);
                    return this._5635.value = "",
                    this._7552 = t,
                    this._2170(!1),
                    !0
                }
                _8506() {
                    this._9207 || (this._5635.style.display = "block",
                    this._9207 = !0),
                    this._5575 || this._5635.focus()
                }
                _7486() {
                    this._9207 && (this._5635.style.display = "none",
                    this._9207 = !1),
                    this._5575 && window.focus()
                }
                _2170(t) {
                    t ? (this._9843._9596("animation", "chat_input_shake 100ms linear infinite"),
                    this._9843._9596("border-color", "red")) : (this._9843._9596("animation", "none"),
                    this._9843._9596("border-color", "transparent"))
                }
            }
              , B_ = new class {
                constructor() {
                    this._9843 = null,
                    this._9893 = null,
                    this._3778 = null,
                    this._5851 = null,
                    this._8286 = null,
                    this._6315 = null,
                    this._9207 = !1,
                    this._7213 = 0,
                    this._4267 = !1,
                    this._9933 = !1
                }
                _1489() {
                    const t = document.getElementById("playback-bar")
                      , _ = document.getElementById("playback-play")
                      , e = document.getElementById("playback-pause")
                      , s = document.getElementById("playback-progress")
                      , i = document.getElementById("playback-progress-text")
                      , n = document.getElementById("playback-speed")
                      , o = document.getElementById("playback-speed-text");
                    _.addEventListener("click", (()=>{
                        V_._8375()
                    }
                    )),
                    e.addEventListener("click", (()=>{
                        V_._8803()
                    }
                    )),
                    n.addEventListener("input", (()=>{
                        const t = 2 ** parseInt(n.value);
                        this._6315._4667 = t.toFixed(2) + "x"
                    }
                    )),
                    n.addEventListener("change", (()=>{
                        const t = parseInt(n.value);
                        V_._9378 = 2 ** t
                    }
                    )),
                    s.addEventListener("input", (()=>{
                        this._4267 = !0
                    }
                    )),
                    s.addEventListener("change", (()=>{
                        const t = parseInt(s.value);
                        V_._9870 = t,
                        this._4267 = !1
                    }
                    )),
                    V_._6206("play", (()=>{
                        this._9893._9596("display", "none"),
                        this._3778._9596("display", "block")
                    }
                    )),
                    V_._6206("pause", (()=>{
                        this._3778._9596("display", "none"),
                        this._9893._9596("display", "block")
                    }
                    )),
                    this._9843 = r._6246(t),
                    this._9893 = r._6246(_),
                    this._3778 = r._6246(e),
                    this._5851 = s,
                    this._8286 = r._6246(i),
                    this._6315 = r._6246(o)
                }
                _2081() {
                    if (!this._9207)
                        return;
                    if (ps._9136 ? this._9933 && this._5355() : this._9933 || this._6740(),
                    this._4267)
                        return;
                    this._5851.value = V_._9870.toString();
                    const t = Math.floor((V_._5405 - this._7213) / 1e3)
                      , _ = Math.floor(t / 3600).toString().padStart(2, "0")
                      , e = Math.floor(t % 3600 / 60).toString().padStart(2, "0")
                      , s = (t % 60).toString().padStart(2, "0");
                    this._8286._4667 = `${_}:${e}:${s}`
                }
                _8506(t, _) {
                    this._7213 = t,
                    this._5851.max = _.toString(),
                    this._5851.value = "0",
                    this._9843._9596("display", "flex"),
                    this._9207 = !0
                }
                _7486() {
                    this._9843._9596("display", "none"),
                    this._9207 = !1
                }
                _6740() {
                    this._9933 = !0,
                    this._9843._9596("opacity", "1")
                }
                _5355() {
                    this._9933 = !1,
                    this._9843._9596("opacity", "0")
                }
                _1978() {
                    "hidden" === this._9843._6988("visibility") ? this._9843._9596("visibility", "visible") : this._9843._9596("visibility", "hidden")
                }
            }
              , H_ = new class {
                constructor() {
                    const t = document.getElementById("tr-result-table")
                      , _ = document.getElementById("tr-result-table-scrollbar-slider");
                    t.addEventListener("scroll", this._2081.bind(this)),
                    t.addEventListener("mouseenter", this._2081.bind(this), {
                        once: !0
                    }),
                    z._6206("resize", this._2081.bind(this));
                    let e = !1
                      , s = 0;
                    _.addEventListener("mousedown", (t=>{
                        e = !0,
                        s = t.clientY
                    }
                    )),
                    window.addEventListener("mousemove", (i=>{
                        if (!e || null === _.parentElement)
                            return;
                        const n = _.parentElement.offsetTop
                          , o = _.parentElement.offsetHeight
                          , r = _.offsetTop
                          , h = o - _.offsetHeight;
                        let a = r - n + (i.clientY - s);
                        a = a > h ? h : a < 0 ? 0 : a;
                        const c = a / o;
                        t.scrollTop = t.scrollHeight * c >>> 0,
                        _.style.setProperty("top", `${a}px`),
                        s = i.clientY
                    }
                    )),
                    window.addEventListener("mouseup", (()=>{
                        e = !1
                    }
                    )),
                    this._5665 = t,
                    this._4383 = r._6246(_)
                }
                _2081() {
                    const t = this._5665.scrollHeight
                      , _ = this._5665.offsetHeight
                      , e = _ * (_ / t)
                      , s = this._5665.scrollTop * (_ / t);
                    this._4383._9596("height", `${e.toFixed(0)}px`),
                    this._4383._9596("top", `${s.toFixed(0)}px`)
                }
            }
              , U_ = new class {
                constructor() {
                    this._2343 = null,
                    this._6517 = "players",
                    this._6787 = "tp",
                    this._3630 = [],
                    this._9207 = !1
                }
                get _3235() {
                    return this._9207
                }
                _1489() {
                    const t = document.getElementById("tournament-result")
                      , _ = document.getElementById("tr-result-by-players")
                      , e = _.querySelector(".tr-result-nav-selected")
                      , s = document.getElementById("tr-result-by-teams")
                      , i = s.querySelector(".tr-result-nav-selected");
                    _.addEventListener("click", (()=>{
                        _.style.opacity = "1",
                        e.style.opacity = "1",
                        s.style.opacity = "0.5",
                        i.style.opacity = "0",
                        this._6517 = "players",
                        this._5673()
                    }
                    )),
                    s.addEventListener("click", (()=>{
                        _.style.opacity = "0.5",
                        e.style.opacity = "0",
                        s.style.opacity = "1",
                        i.style.opacity = "1",
                        this._6517 = "teams",
                        this._5673()
                    }
                    ));
                    const n = [document.getElementById("tr-result-sort-tp"), document.getElementById("tr-result-sort-end-energy"), document.getElementById("tr-result-sort-avg-energy"), document.getElementById("tr-result-sort-sp")];
                    for (const t of n)
                        t.addEventListener("click", (()=>{
                            for (const t of n)
                                t.querySelector("i").style.display = "none";
                            t.querySelector("i").style.display = "block",
                            this._6787 = t.id.substring(15),
                            this._5673()
                        }
                        ));
                    this._2343 = r._6246(t)
                }
                _8506(t) {
                    t.length < 1 || (this._3630 = t,
                    this._5673(),
                    this._2343._9596("display", "flex"),
                    this._9207 = !0)
                }
                _7486() {
                    this._2343._9596("display", "none"),
                    this._9207 = !1
                }
                _5673() {
                    const t = new Map;
                    for (const _ of this._3630) {
                        const e = "players" === this._6517 ? "" : _._4663 + "\0" + _._8080;
                        t.has(e) || t.set(e, []),
                        t.get(e).push(_)
                    }
                    for (const _ of t.values())
                        "tp" === this._6787 ? _.sort(((t,_)=>_._8354 - t._8354)) : "end-energy" === this._6787 ? _.sort(((t,_)=>_._1482 - t._1482)) : "avg-energy" === this._6787 && _.sort(((t,_)=>_._5947 - t._5947));
                    const _ = [];
                    for (const [e,s] of t) {
                        const t = {
                            _7478: e.split("\0")[0],
                            _8623: s,
                            _8354: 0,
                            _1482: 0,
                            _5947: 0,
                            _7024: 0
                        };
                        for (const _ of s)
                            t._8354 += _._8354,
                            t._1482 += _._1482,
                            t._5947 += _._5947,
                            t._7024 += _._7024;
                        _.push(t)
                    }
                    "tp" === this._6787 ? _.sort(((t,_)=>_._8354 - t._8354)) : "end-energy" === this._6787 ? _.sort(((t,_)=>_._1482 - t._1482)) : "avg-energy" === this._6787 ? _.sort(((t,_)=>_._5947 - t._5947)) : "sp" === this._6787 && _.sort(((t,_)=>_._7024 - t._7024));
                    const e = document.getElementById("tr-result-table");
                    e.innerHTML = "";
                    for (let t = 0; t < _.length; t++) {
                        const s = _[t];
                        if (t > 0) {
                            const t = tt.ZP.createElement("div", {
                                class: "tr-result-spacer"
                            });
                            e.appendChild(t)
                        }
                        if (s._7478.length > 0) {
                            const _ = (t + 1).toString().padStart(2, "0")
                              , i = tt.ZP.createElement("div", {
                                class: "tr-result-row tr-result-row-team"
                            }, tt.ZP.createElement("div", {
                                class: "tr-result-column tr-result-column-name"
                            }, _, ". ", s._7478), tt.ZP.createElement("div", {
                                class: "tr-result-column"
                            }, s._8354), tt.ZP.createElement("div", {
                                class: "tr-result-column"
                            }, s._1482), tt.ZP.createElement("div", {
                                class: "tr-result-column"
                            }, s._5947), tt.ZP.createElement("div", {
                                class: "tr-result-column"
                            }, s._7024));
                            e.appendChild(i)
                        }
                        for (let t = 0; t < s._8623.length; t++) {
                            const _ = s._8623[t]
                              , i = (t + 1).toString().padStart(2, "0")
                              , n = tt.ZP.createElement("div", {
                                class: "tr-result-row"
                            }, tt.ZP.createElement("div", {
                                class: "tr-result-column tr-result-column-name"
                            }, i, ". ", _._7478), tt.ZP.createElement("div", {
                                class: "tr-result-column"
                            }, _._8354), tt.ZP.createElement("div", {
                                class: "tr-result-column"
                            }, _._1482), tt.ZP.createElement("div", {
                                class: "tr-result-column"
                            }, _._5947), tt.ZP.createElement("div", {
                                class: "tr-result-column"
                            }, _._7024));
                            e.appendChild(n)
                        }
                    }
                    H_._2081()
                }
            }
              , D_ = new class {
                constructor() {
                    this._7201 = new lt(this._1254.bind(this)),
                    this._6998 = new dt(this._4140.bind(this))
                }
                _1489() {
                    this._7201._1489(),
                    this._6998._1489();
                    const t = Object.getOwnPropertyNames(Y);
                    for (const _ of t) {
                        const t = Y[_];
                        t instanceof N && t._6206("change", this._6306.bind(this, t))
                    }
                    setInterval(x_._6998.bind(x_), 40)
                }
                _1254(t, _, e) {
                    switch (_) {
                    case "keydown":
                        this._6241(t, e);
                        break;
                    case "keyup":
                        this._6681(t, e)
                    }
                }
                _4140(t, _, e) {
                    switch (_) {
                    case "mousedown":
                        this._6232(t, e);
                        break;
                    case "mouseup":
                        this._1599(t, e);
                        break;
                    case "contextmenu":
                        this._5834(t);
                        break;
                    case "mousescroll":
                        this._5998(t)
                    }
                }
                _6241(t, _) {
                    if (!E_._3419() || "CTRL+C" !== _) {
                        if (null !== document.activeElement && "INPUT" === document.activeElement.nodeName || t.preventDefault(),
                        "ESC" === _) {
                            if (!U_._3235)
                                return ps._9136 ? void ps._6116() : k_._3419 ? void k_._7486() : void ps._2751(ds);
                            U_._7486()
                        }
                        if ("ENTER" !== _ || ps._9136)
                            "H" === _ && V_._5347 && B_._1978(),
                            "SPACE" === _ && V_._5347 && (V_._4091 ? V_._8803() : V_._8375()),
                            this._5093(_, 0);
                        else {
                            if (k_._3419)
                                return void (k_._4243() && k_._7486());
                            k_._8506()
                        }
                    }
                }
                _6681(t, _) {
                    this._4618(_, 0)
                }
                _6232(t, _) {
                    if (null !== t.target) {
                        if (t.target instanceof HTMLInputElement && "chat-input" === t.target.id)
                            return;
                        if (t.target instanceof HTMLDivElement && "chat-box-channel" === t.target.className)
                            return
                    }
                    this._5093(_, 1)
                }
                _1599(t, _) {
                    this._4618(_, 1)
                }
                _5834(t) {}
                _5998(t) {
                    ps._9136 || U_._3235 || E_._3419() || I_._3419() || (t.deltaY < 0 ? j_._1179() : j_._5194())
                }
                _5093(t, _) {
                    if (ps._9136 || k_._3419)
                        return;
                    const e = Y;
                    switch (t) {
                    case e.HK_SPLIT._2230()[_]:
                        x_._7324(1);
                        break;
                    case e.HK_SPLIT_2X._2230()[_]:
                        x_._7324(2);
                        break;
                    case e.HK_SPLIT_3X._2230()[_]:
                        x_._7324(3);
                        break;
                    case e.HK_SPLIT_4X._2230()[_]:
                        x_._7324(4);
                        break;
                    case e.HK_SPLIT_6X._2230()[_]:
                        x_._7324(6);
                        break;
                    case e.HK_EJECT._2230()[_]:
                        x_._4615();
                        break;
                    case e.HK_COMMANDER._2230()[_]:
                        x_._9249();
                        break;
                    case e.HK_RESPAWN._2230()[_]:
                        x_._7030();
                        break;
                    case e.HK_MACRO_EJECT._2230()[_]:
                        x_._6278(!0);
                        break;
                    case e.HK_SWITCH_ACTIVE_PLAYER_UNIT._2230()[_]:
                        x_._9092();
                        break;
                    case e.HK_STOP_MOVEMENT._2230()[_]:
                        x_._8053();
                        break;
                    case e.HK_SAVE_INSTANT_REPLAY._2230()[_]:
                        x_._3646();
                        break;
                    case e.HK_TOGGLE_OWN_USERNAME._2230()[_]:
                        Y.SHOW_OWN_USERNAME._9917(!Y.SHOW_OWN_USERNAME._2230());
                        break;
                    case e.HK_TOGGLE_ENEMY_USERNAME._2230()[_]:
                        Y.SHOW_ENEMY_USERNAME._9917(!Y.SHOW_ENEMY_USERNAME._2230());
                        break;
                    case e.HK_TOGGLE_OWN_ENERGY._2230()[_]:
                        Y.SHOW_OWN_ENERGY._9917(!Y.SHOW_OWN_ENERGY._2230());
                        break;
                    case e.HK_TOGGLE_ENEMY_ENERGY._2230()[_]:
                        Y.SHOW_ENEMY_ENERGY._9917(!Y.SHOW_ENEMY_ENERGY._2230());
                        break;
                    case e.HK_TOGGLE_CUSTOM_SKINS._2230()[_]:
                        Y.SHOW_CUSTOM_SKINS._9917(!Y.SHOW_CUSTOM_SKINS._2230());
                        break;
                    case e.HK_TOGGLE_OWN_CUSTOM_SKINS._2230()[_]:
                        Y.SHOW_OWN_CUSTOM_SKINS._9917(!Y.SHOW_OWN_CUSTOM_SKINS._2230());
                        break;
                    case e.HK_CHATROOM_SWITCH_TO_GLOBAL._2230()[_]:
                        N_._4119("GLOBAL");
                        break;
                    case e.HK_CHATROOM_SWITCH_TO_TEAM._2230()[_]:
                        N_._4119("TEAM");
                        break;
                    case e.HK_QUICK_CHAT_1._2230()[_]:
                        x_._6178(Y.QUICK_CHAT_1_MESSAGE._2230());
                        break;
                    case e.HK_QUICK_CHAT_2._2230()[_]:
                        x_._6178(Y.QUICK_CHAT_2_MESSAGE._2230());
                        break;
                    case e.HK_QUICK_CHAT_3._2230()[_]:
                        x_._6178(Y.QUICK_CHAT_3_MESSAGE._2230());
                        break;
                    case e.HK_QUICK_CHAT_4._2230()[_]:
                        x_._6178(Y.QUICK_CHAT_4_MESSAGE._2230());
                        break;
                    case e.HK_QUICK_CHAT_5._2230()[_]:
                        x_._6178(Y.QUICK_CHAT_5_MESSAGE._2230());
                        break;
                    case e.HK_QUICK_CHAT_6._2230()[_]:
                        x_._6178(Y.QUICK_CHAT_6_MESSAGE._2230());
                        break;
                    case e.HK_QUICK_CHAT_7._2230()[_]:
                        x_._6178(Y.QUICK_CHAT_7_MESSAGE._2230());
                        break;
                    case e.HK_QUICK_CHAT_8._2230()[_]:
                        x_._6178(Y.QUICK_CHAT_8_MESSAGE._2230());
                        break;
                    case e.HK_QUICK_CHAT_9._2230()[_]:
                        x_._6178(Y.QUICK_CHAT_9_MESSAGE._2230());
                        break;
                    case e.HK_QUICK_CHAT_10._2230()[_]:
                        x_._6178(Y.QUICK_CHAT_10_MESSAGE._2230());
                        break;
                    case e.HK_ZOOM_LEVEL_1._2230()[_]:
                        x_._4808(.5);
                        break;
                    case e.HK_ZOOM_LEVEL_2._2230()[_]:
                        x_._4808(.25);
                        break;
                    case e.HK_ZOOM_LEVEL_3._2230()[_]:
                        x_._4808(.125);
                        break;
                    case e.HK_ZOOM_LEVEL_4._2230()[_]:
                        x_._4808(.0625);
                        break;
                    case e.HK_ZOOM_LEVEL_5._2230()[_]:
                        x_._4808(.04)
                    }
                    switch (t) {
                    case e.HK_SELECT_PLAYER_FOR_SPECTATING._2230()[_]:
                        x_._2645();
                        break;
                    case e.HK_CHANGE_SPECTATE_MODE._2230()[_]:
                        x_._3874()
                    }
                }
                _4618(t, _) {
                    ps._9136 || k_._3419 || t === Y.HK_MACRO_EJECT._2230()[_] && x_._6278(!1)
                }
                _6306(t) {
                    const _ = t._2230()
                      , e = Object.getOwnPropertyNames(Y);
                    for (const s of e) {
                        const e = Y[s];
                        if (e !== t && e instanceof N && e._3360 === t._3360) {
                            const t = e._2230();
                            "NONE" !== _[0] && t[0] === _[0] && e._9917(["NONE", t[1]]),
                            "NONE" !== _[1] && t[1] === _[1] && e._9917([t[0], "NONE"])
                        }
                    }
                }
            }
              , W_ = new class extends At {
                constructor() {
                    super(),
                    this._5665 = null,
                    this._1974 = []
                }
                _6360() {
                    return this._5665
                }
                _1489() {
                    this._5665 = new c.W20
                }
                _2081() {
                    if (this._5665.removeChildren(),
                    !Y.CURSOR_LINES._2230() || !Fe._7297)
                        return;
                    const t = [...Fe._2993._8623.values()][Fe._8370];
                    if (void 0 === t)
                        return void console.warn("Player doesn't exist.");
                        
                    let _ = 0;
                    const e = Y.CURSOR_LINE_THICKNESS._2230()
                      , s = Y.CURSOR_LINE_COLOR._2230()
                      , i = Y.RESOLUTION._2230() / 100
                      , n = window.devicePixelRatio
                      , o = (D_._6998._4526 - z._6006 / 2) * i * n / j_._9830 + j_._6000._4526
                      , r = (D_._6998._6966 - z._5286 / 2) * i * n / j_._9830 + j_._6000._6966;
                    for (const i of t._1420.values()) {
                        const t = o - i._4526
                          , n = r - i._6966
                          , h = Math.sqrt(t * t + n * n)
                          , a = Math.atan(t / n)
                          , c = this._1974[_++] || this._3071();
                        c.position.set(o, r),
                        c.width = e,
                        c.height = h,
                        c.rotation = (r < i._6966 ? 0 : Math.PI) - a,
                        c.alpha = i._9101,
                        c.tint = s,
                        this._5665.addChild(c)
                    }
                }
                _3071() {
                    const t = new c.jyi(c.xEZ.WHITE);
                    return t.anchor.x = .5,
                    this._1974.push(t),
                    t
                }
            }
              , G_ = new class extends At {
                constructor() {
                    super(),
                    this._5665 = null,
                    this._8164 = new Set,
                    this._1974 = [],
                    this._4390 = null
                }
                _6360() {
                    return this._5665
                }
                _1489() {
                    this._5665 = new c.W20;
                    const t = Mt._7625("TEXTURE/H3D/COMMANDER")
                      , _ = new c.VL4(t)
                      , e = new c.xEZ(_);
                    this._4390 = e
                }
                _2100(t, _, e) {
                    const s = {
                        _4526: t,
                        _6966: _,
                        _7614: e,
                        _1826: n._8276
                    };
                    this._8164.add(s)
                }
                _2081() {
                    if (this._5665.removeChildren(),
                    !Y.COMMANDER._2230())
                        return;
                    let t = 0;
                    for (const _ of this._8164) {
                        const e = n._8276 - _._1826;
                        if (e > 1e3 || 0 === e) {
                            this._8164.delete(_);
                            continue
                        }
                        const s = Math.pow(e / 1e3, .5)
                          , i = 2e3 * s
                          , o = s > .6 ? 1 - (s - .6) / .4 : 1
                          , r = this._1974[t++] || this._6812();
                        this._8774(r, i, _._4526, _._6966, _._7614, o)
                    }
                }
                _6812() {
                    const t = [];
                    for (let _ = 0; _ < 4; ++_) {
                        const _ = new c.jyi(this._4390);
                        _.anchor.set(1, 1),
                        t.push(_)
                    }
                    return this._1974.push(t),
                    t
                }
                _8774(t, _, e, s, i, n) {
                    for (let o = 0; o < 4; o++) {
                        const r = t[o];
                        r.width = _ / 2,
                        r.height = _ / 2,
                        r.position.set(e, s),
                        r.tint = i,
                        r.alpha = n,
                        r.rotation = Math.PI / 2 * o,
                        this._5665.addChild(r)
                    }
                }
            }
              , K_ = new class extends At {
                constructor() {
                    super(),
                    this._5665 = null,
                    this._1974 = [],
                    this._2864 = 0,
                    this._4390 = null
                }
                _6360() {
                    return this._5665
                }
                _1489() {
                    this._5665 = new c.W20;
                    const t = Mt._7625("TEXTURE/H3D/OVERLAP_HELPER")
                      , _ = new c.VL4(t)
                      , e = new c.xEZ(_);
                    this._4390 = e
                }
                _2081() {
                    this._5665.removeChildren(),
                    this._2864 = 0;
                    const t = Y.ORB_OVERLAP_HIGHLIGHTING._2230();
                    if (V_._5347 || "off" === t)
                        return;
                    const _ = [];
                    for (const e of ee._1420.values())
                        e._3901 === A._2978 && (e._6671 || "auto" === t && e._7845 < 1e4 || _.push(e));
                    const e = new Set;
                    for (let t = 0; t < _.length; t++) {
                        const s = _[t];
                        for (let i = t; i < _.length; i++) {
                            const t = _[i];
                            if (s._9486 === t._9486)
                                continue;
                            const n = s._4526 - t._4526
                              , o = s._6966 - t._6966;
                            Math.sqrt(n * n + o * o) >= s._9617 + t._9617 || e.add(s._9617 < t._9617 ? s : t)
                        }
                    }
                    for (const t of e)
                        this._1657(t)
                }
                _1657(t) {
                    const _ = t._9486._2993._3195
                      , e = Y.OWN_ORB_COLORING._2230();
                    let s = 16777215;
                    s = _ ? "custom" === e ? Y.CUSTOM_OWN_ORB_COLOR._2230() : "multibox" !== e || 2 !== Fe._2993._8623.size || V_._5347 ? t._9486._7614._9458 : t._9486._3891 === Fe._8370 ? Y.ACTIVE_PLAYER_UNIT_ACCENT_COLOR._2230() : Y.INACTIVE_PLAYER_UNIT_ACCENT_COLOR._2230() : "tint" === Y.ORB_COLORING._2230() ? t._7317._9458 : t._9486._7614._9458;
                    const i = this._1974[this._2864++] || this._2917()
                      , n = this._1974[this._2864++] || this._2917()
                      , o = this._1974[this._2864++] || this._2917()
                      , r = this._1974[this._2864++] || this._2917();
                    if (i.width = i.height = t._9617,
                    i.position.set(t._4526 - t._9617, t._6966 - t._9617),
                    i.rotation = 0,
                    i.tint = s,
                    this._5665.addChild(i),
                    n.width = n.height = t._9617,
                    n.position.set(t._4526 + t._9617, t._6966 - t._9617),
                    n.rotation = Math.PI / 2,
                    n.tint = s,
                    this._5665.addChild(n),
                    o.width = o.height = t._9617,
                    o.position.set(t._4526 - t._9617, t._6966 + t._9617),
                    o.rotation = 1.5 * Math.PI,
                    o.tint = s,
                    this._5665.addChild(o),
                    r.width = r.height = t._9617,
                    r.position.set(t._4526 + t._9617, t._6966 + t._9617),
                    r.rotation = Math.PI,
                    r.tint = s,
                    this._5665.addChild(r),
                    t._9617 / 3 * j_._9830 > 8 && (_ && Y.SHOW_OWN_ENERGY._2230() || !_ && Y.SHOW_ENEMY_ENERGY._2230())) {
                        const _ = Ht._4287(t._7845.toFixed(0))
                          , e = t._9617 / 3 / 128 * .8;
                        _.scale.set(e, e);
                        const s = t._7997._6216
                          , i = t._7997._4663
                          , n = t._9617 / 30;
                        _.position.set(t._4526, t._6966 + .5 * s + n + (i > 0 ? i + n : 0) + _.height / 2),
                        _.alpha = .7,
                        this._5665.addChild(_)
                    }
                }
                _2917() {
                    const t = new c.jyi(this._4390);
                    return this._1974.push(t),
                    t
                }
            }
              , F_ = new class extends At {
                constructor() {
                    super(),
                    this._5665 = null,
                    this._1974 = [],
                    this._2864 = 0
                }
                _6360() {
                    return this._5665
                }
                _1489() {
                    this._5665 = new c.W20
                }
                _2081() {
                    if (this._5665.removeChildren(),
                    this._2864 = 0,
                    Fe._7297 || V_._5347 || ps._9136)
                        return;
                    const t = Y.HK_SELECT_PLAYER_FOR_SPECTATING._2230();
                    if ("NONE" === t[0] && "NONE" === t[1])
                        return;
                    const _ = Y.RESOLUTION._2230() / 100
                      , e = window.devicePixelRatio
                      , s = (D_._6998._4526 - z._6006 / 2) * _ * e / j_._9830 + j_._6000._4526
                      , i = (D_._6998._6966 - z._5286 / 2) * _ * e / j_._9830 + j_._6000._6966;
                    let n = Number.MAX_SAFE_INTEGER
                      , o = null;
                    for (const t of ee._1420.values())
                        if (t._3901 === A._2978) {
                            const _ = Math.abs(s - t._4526)
                              , e = Math.abs(i - t._6966)
                              , r = Math.sqrt(_ ** 2 + e ** 2);
                            r < t._9617 && r < n && (o = t,
                            n = r)
                        }
                    if (null !== o)
                        for (const t of o._9486._2993._8623.values())
                            for (const _ of t._1420.values())
                                this._1657(_)
                }
                _1657(t) {
                    const _ = this._1974[this._2864++] || this._2917();
                    _.width = _.height = 2 * t._9617,
                    _.position.set(t._4526, t._6966),
                    this._5665.addChild(_)
                }
                _2917() {
                    const t = new c.jyi(Rt._7889._5377);
                    return t.anchor.set(.5, .5),
                    t.alpha = .15,
                    this._1974.push(t),
                    t
                }
            }
              , Z_ = new class extends At {
                constructor() {
                    super(),
                    this._5665 = null,
                    this._7060 = [],
                    this._4648 = [],
                    this._3486 = [],
                    this._4387 = !1,
                    this._2956 = 0,
                    this._1651 = 0,
                    this._4195 = []
                }
                _6360() {
                    return this._5665
                }
                _3405(t) {
                    this._4387 !== t && (this._4387 = t,
                    this._2956 = n._8276)
                }
                _5389() {
                    this._1651 = Math.min(1, (n._8276 - this._2956) / 1e4),
                    this._4387 || (this._1651 = 1 - this._1651)
                }
                _1489() {
                    this._5665 = new c.W20;
                    const t = Mt._7625("TEXTURE/SSS/P1")
                      , _ = new c.xEZ(new c.VL4(t));
                    for (let t = 0; t < 37; t++) {
                        const t = new c.jyi(_);
                        t.anchor.set(.5),
                        this._7060.push(t),
                        this._4648.push(1e4 * Math.random())
                    }
                    const e = Mt._7625("TEXTURE/SSS/P2")
                      , s = e.naturalWidth / 32
                      , i = new c.VL4(e);
                    for (let t = 0; t < 32; t++) {
                        const _ = [];
                        this._4195.push([]);
                        for (let e = 0; e < 32; e++) {
                            const n = new c.AeJ(s * e,s * t,s,s)
                              , o = new c.xEZ(i,n)
                              , r = new c.jyi(o)
                              , h = this._7791(t, e);
                            _.push(r),
                            this._4195[t].push(h)
                        }
                        this._3486.push(_)
                    }
                }
                _2081() {
                    if (this._5665.removeChildren(),
                    this._5389(),
                    this._1651 <= 0)
                        return;
                    const t = Math.pow(n._8276 % 1e4 / 1e4, .8)
                      , _ = 1.2 * ee._4006 * t
                      , e = .4 * (t > .7 ? 1 - (t - .7) / .3 : 1);
                    this._8393(_, e),
                    this._1005();
                    for (const t of this._5665.children)
                        t.alpha *= this._1651
                }
                _6199(t) {
                    const _ = (n._8276 + t) % 1e4;
                    return _ < 5e3 ? _ / 5e3 : 1 - (_ - 5e3) / 5e3
                }
                _1005() {
                    const t = 3800
                      , _ = .3;
                    for (let e = 0; e < 1; e++) {
                        const s = this._7060[e];
                        s.x = 32767.5,
                        s.y = 32767.5,
                        s.width = t,
                        s.height = t,
                        s.alpha = _ * this._6199(this._4648[e]),
                        this._5665.addChild(s)
                    }
                    for (let e = 1; e < 7; e++) {
                        const s = this._7060[e]
                          , i = 2 * Math.PI / 6 * (e - 1)
                          , n = Math.cos(i)
                          , o = Math.sin(i);
                        s.x = 32767.5 + 3500 * n,
                        s.y = 32767.5 + 3500 * o,
                        s.width = t,
                        s.height = t,
                        s.alpha = _ * this._6199(this._4648[e]),
                        this._5665.addChild(s)
                    }
                    for (let e = 7; e < 13; e++) {
                        const s = this._7060[e]
                          , i = 2 * Math.PI / 6 * (e - 7)
                          , n = Math.cos(i)
                          , o = Math.sin(i);
                        s.x = 32767.5 + 7e3 * n,
                        s.y = 32767.5 + 7e3 * o,
                        s.width = t,
                        s.height = t,
                        s.alpha = _ * this._6199(this._4648[e]),
                        this._5665.addChild(s)
                    }
                    for (let e = 13; e < 19; e++) {
                        const s = this._7060[e]
                          , i = 2 * Math.PI / 12 + 2 * Math.PI / 6 * (e - 13)
                          , n = Math.cos(i)
                          , o = Math.sin(i);
                        s.x = 32767.5 + 6e3 * n,
                        s.y = 32767.5 + 6e3 * o,
                        s.width = t,
                        s.height = t,
                        s.alpha = _ * this._6199(this._4648[e]),
                        this._5665.addChild(s)
                    }
                    for (let e = 19; e < 25; e++) {
                        const s = this._7060[e]
                          , i = 2 * Math.PI / 6 * (e - 19)
                          , n = Math.cos(i)
                          , o = Math.sin(i);
                        s.x = 32767.5 + 10500 * n,
                        s.y = 32767.5 + 10500 * o,
                        s.width = t,
                        s.height = t,
                        s.alpha = _ * this._6199(this._4648[e]),
                        this._5665.addChild(s)
                    }
                    for (let e = 25; e < 31; e++) {
                        const s = this._7060[e]
                          , i = 41 * Math.PI / 180 + 2 * Math.PI / 6 * (e - 25)
                          , n = Math.cos(i)
                          , o = Math.sin(i);
                        s.x = 32767.5 + 9250 * n,
                        s.y = 32767.5 + 9250 * o,
                        s.width = t,
                        s.height = t,
                        s.alpha = _ * this._6199(this._4648[e]),
                        this._5665.addChild(s)
                    }
                    for (let e = 31; e < 37; e++) {
                        const s = this._7060[e]
                          , i = 79 * Math.PI / 180 + 2 * Math.PI / 6 * (e - 31)
                          , n = Math.cos(i)
                          , o = Math.sin(i);
                        s.x = 32767.5 + 9250 * n,
                        s.y = 32767.5 + 9250 * o,
                        s.width = t,
                        s.height = t,
                        s.alpha = _ * this._6199(this._4648[e]),
                        this._5665.addChild(s)
                    }
                }
                _8393(t, _) {
                    const e = t / 32
                      , s = (ee._4006 - t) / 2;
                    for (let t = 0; t < 32; t++)
                        for (let i = 0; i < 32; i++)
                            if (this._4195[t][i]) {
                                const n = this._3486[i][t];
                                n.width = e,
                                n.height = e,
                                n.x = ee._9820._6457 + s + t * e,
                                n.y = ee._9820._2706 + s + i * e,
                                n.alpha = _,
                                this._5665.addChild(n)
                            }
                }
                _7791(t, _) {
                    const e = 32 * t
                      , s = 32 * _
                      , i = 32 * (t + 1)
                      , n = 32 * (_ + 1)
                      , o = [[e, s], [i, s], [e, n], [i, n]];
                    let r = !1;
                    for (const t of o) {
                        const _ = t[0] - 512
                          , e = t[1] - 512
                          , s = Math.sqrt(_ ** 2 + e ** 2);
                        if (s < 460.8 && s > 256) {
                            r = !0;
                            break
                        }
                    }
                    return r
                }
            }
            ;
            new class extends At {
                constructor() {
                    super(),
                    this._5665 = null,
                    this._3043 = null,
                    this._8585 = null,
                    this._7067 = {
                        _8686: null,
                        _4698: null
                    },
                    this._1799 = {
                        _5173: new Float32Array(2),
                        _1390: new Float32Array(2),
                        _3041: null,
                        _3168: new Float32Array(4)
                    },
                    this._2092 = null,
                    this._1389 = 0
                }
                _6360() {
                    return this._5665
                }
                _1489() {
                    this._5665 = new c.W20;
                    const t = document.createElement("canvas");
                    this._3043 = t.getContext("2d"),
                    t.width = t.height = 16,
                    this._3043.beginPath(),
                    this._3043.arc(8, 8, 8, 0, 2 * Math.PI),
                    this._3043.closePath(),
                    this._3043.fillStyle = "#ffffff",
                    this._3043.fill(),
                    this._1799._3041 = new c.VL4(t);
                    const _ = e(125)
                      , s = e(851)
                      , i = new c.$rD(_,s,"aura-shader")
                      , n = new c.exe(i,{
                        uTranslate: this._1799._5173,
                        uScale: this._1799._1390,
                        uTexture: this._1799._3041,
                        uTint: this._1799._3168
                    });
                    this._7067._8686 = new c.lWr(new Float32Array(0),!1,!1),
                    this._7067._4698 = new c.lWr(new Uint16Array(0),!1,!0);
                    const o = new c.ZXM;
                    o.addAttribute("aPosition", this._7067._8686, 2, !1, c.vK6.FLOAT, 20, 0),
                    o.addAttribute("aAlpha", this._7067._8686, 1, !1, c.vK6.FLOAT, 20, 8),
                    o.addAttribute("aUV", this._7067._8686, 2, !1, c.vK6.FLOAT, 20, 12),
                    o.addIndex(this._7067._4698),
                    this._8585 = new c.Kj0(o,n),
                    this._5665.addChild(this._8585),
                    this._2092 = It.mesh_gen_aura_get_info_buffer(),
                    It.mesh_gen_aura_setup()
                }
                _1936() {
                    const t = V_._5347 ? 1e3 / V_._9378 : 1e3;
                    if (n._8276 - this._1389 < t)
                        return;
                    let _ = 0;
                    if (V_._5347)
                        for (const t of ee._1420.values()) {
                            if (_ >= 1536)
                                break;
                            t._3901 !== A._2978 || t._3047._7760.length < 1 || "assets/images/h3d/default-skin.webp" === t._3047._7760 || (this._2092[_++] = t._4526,
                            this._2092[_++] = t._6966,
                            this._2092[_++] = t._9617)
                        }
                    else
                        for (const t of ee._1420.values()) {
                            if (_ >= 1536)
                                break;
                            const e = t._9486._2993._2434;
                            t._3901 === A._2978 && e.length > 0 && (this._2092[_++] = t._4526,
                            this._2092[_++] = t._6966,
                            this._2092[_++] = t._9617)
                        }
                    It.mesh_gen_aura_generate(_ / 3, n._8276, V_._5347 ? V_._9378 : 1),
                    this._1389 = n._8276
                }
                _9257() {
                    It.mesh_gen_aura_update(n._8276, V_._5347 ? V_._9378 : 1),
                    this._7067._8686.update(It.mesh_gen_aura_get_vertices_buffer()),
                    this._7067._4698.update(It.mesh_gen_aura_get_indices_buffer())
                }
                _4555() {
                    this._1799._5173[0] = j_._6000._4526,
                    this._1799._5173[1] = j_._6000._6966,
                    this._1799._1390[0] = j_._9830 / (Q_._2023 / 2),
                    this._1799._1390[1] = -j_._9830 / (Q_._2231 / 2)
                }
                _9391() {
                    this._1799._3168[0] = .998046875,
                    this._1799._3168[1] = .998046875,
                    this._1799._3168[2] = .998046875,
                    this._1799._3168[3] = 1
                }
                _2081() {
                    this._9391(),
                    this._1936(),
                    this._9257(),
                    this._4555()
                }
            }
            ;
            const $_ = new class {
                constructor() {
                    this._5665 = {},
                    this._9547 = []
                }
                get _7541() {
                    return this._5665
                }
                _1489() {
                    this._5665 = new c.W20,
                    this._9547 = [Tt, Ot, Z_, St, r_, W_, o_, K_, F_, G_];
                    for (const t of this._9547) {
                        t._1489();
                        const _ = t._6360();
                        this._5665.addChild(_)
                    }
                }
                _2081() {
                    this._2115();
                    for (const t of this._9547)
                        t._2081()
                }
                _2115() {
                    const t = Q_._2023 / 2 - j_._6000._4526 * j_._9830
                      , _ = Q_._2231 / 2 - j_._6000._6966 * j_._9830;
                    this._5665.setTransform(t, _, j_._9830, j_._9830)
                }
            }
              , Y_ = new class {
                _1489() {
                    Rt._1489()
                }
                _2081() {
                    Rt._2081()
                }
            }
              , Q_ = new class extends i {
                constructor() {
                    super(),
                    this._2891 = null,
                    this._5896 = null,
                    this._3702 = null,
                    this._3521 = 1,
                    this._5478 = 1
                }
                _1459() {
                    switch (Y.TEXTURE_QUALITY._2230()) {
                    case "low":
                        return .5;
                    case "medium":
                        return 1;
                    case "high":
                        return 2;
                    default:
                        return 1
                    }
                }
                get _2023() {
                    return this._3521
                }
                get _2231() {
                    return this._5478
                }
                _1489() {
                    const t = Y.ANTI_ALIASING._2230();
                    this._2891 = document.getElementById("main-canvas"),
                    this._5896 = new c.Thl({
                        width: 1,
                        height: 1,
                        view: this._2891,
                        antialias: "msaa" === t,
                        backgroundColor: 0,
                        powerPreference: "high-performance"
                    }),
                    this._3702 = new c.W20,
                    c.vB5.shared.stop(),
                    Y_._1489(),
                    $_._1489(),
                    Ct._1489(),
                    this._3702.addChild($_._7541),
                    this._3702.addChild(Ct._7541)
                }
                _3893() {
                    const t = Y.RESOLUTION._2230() / 100
                      , _ = window.devicePixelRatio
                      , e = Math.round(z._6006 * _ * t)
                      , s = Math.round(z._5286 * _ * t);
                    this._3521 === e && this._5478 === s || (this._5896.resize(e, s),
                    this._3521 = e,
                    this._5478 = s)
                }
                _9981() {
                    const t = Y.BACKGROUND_COLOR._2230();
                    this._5896.backgroundColor !== t && (this._5896.backgroundColor = t)
                }
                _2081() {
                    this._9199("frame-start"),
                    this._3893(),
                    this._9981(),
                    Y_._2081(),
                    $_._2081(),
                    Ct._2081(),
                    this._5896.render(this._3702),
                    this._9199("frame-end")
                }
            }
              , j_ = new class {
                constructor() {
                    this._6000 = new p(32767.5,32767.5),
                    this._9716 = new j,
                    this._9830 = .1,
                    this._5426 = .1,
                    this._4579 = .5,
                    this._5799 = X._1581,
                    this._4753 = new p(32767.5,32767.5)
                }
                _9909() {
                    this._6000._8093(32767.5, 32767.5),
                    this._5426 = .1,
                    this._5799 = X._1581,
                    this._4753._8093(32767.5, 32767.5)
                }
                _2081() {
                    this._5958(),
                    this._8734(),
                    this._5630(),
                    this._4255()
                }
                _5958() {
                    if (!Fe._7297)
                        return void (this._4579 = .5);
                    let t = 0;
                    for (const _ of Fe._2993._8623.values())
                        for (const e of _._1420.values())
                            t += e._9617;
                    this._4579 = 1 / Math.max(t / 64, 1) ** .4
                }
                _8734() {
                    let t = Y.CAMERA_MOVEMENT_SPEED._2230();
                    V_._5347 && (t /= V_._9378),
                    Fe._7297 ? (this._6000._4526 += (Fe._4411._4526 - this._6000._4526) / t,
                    this._6000._6966 += (Fe._4411._6966 - this._6000._6966) / t) : (this._6000._4526 += (this._4753._4526 - this._6000._4526) / Math.max(30, t),
                    this._6000._6966 += (this._4753._6966 - this._6000._6966) / Math.max(30, t))
                }
                _5630() {
                    const t = .5
                      , _ = Math.min(Q_._2023, Q_._2231) / (1.5 * ee._4006);
                    if (this._5426 > t ? this._5426 = t : this._5426 < _ && (this._5426 = _),
                    Y.CAMERA_AUTO_ZOOM._2230() && Fe._7297) {
                        let e = this._4579 * this._5426 * 2;
                        e > t ? e = t : e < _ && (e = _),
                        this._9830 += (e - this._9830) / 16
                    } else
                        this._9830 += (this._5426 - this._9830) / 8
                }
                _4255() {
                    const t = Q_._2023 / 2 / this._9830
                      , _ = Q_._2231 / 2 / this._9830;
                    this._9716._6457 = -t + this._6000._4526,
                    this._9716._2689 = t + this._6000._4526,
                    this._9716._2706 = -_ + this._6000._6966,
                    this._9716._9957 = _ + this._6000._6966
                }
                _1179() {
                    const t = 1 - Y.CAMERA_ZOOM_SPEED._2230() / 100;
                    this._5426 /= t
                }
                _5194() {
                    const t = 1 - Y.CAMERA_ZOOM_SPEED._2230() / 100;
                    this._5426 *= t
                }
            }
              , V_ = new class extends i {
                constructor() {
                    super(),
                    this._6943 = null,
                    this._9768 = [],
                    this._3242 = [],
                    this._2520 = 0,
                    this._9609 = 0,
                    this._8618 = 0,
                    this._6746 = 0,
                    this._7526 = 1,
                    this._6521 = !1,
                    this._9315 = !1
                }
                get _5347() {
                    return this._9315
                }
                set _9378(t) {
                    this._7526 = t,
                    this._2520 = n._8276,
                    this._9609 = this._9870
                }
                get _9378() {
                    return this._7526
                }
                set _9870(t) {
                    this._7911(t),
                    this._2520 = n._8276,
                    this._9609 = t
                }
                get _9870() {
                    return this._8618
                }
                get _5405() {
                    return this._6746
                }
                get _4091() {
                    return this._6521
                }
                get _6493() {
                    return this._8618 === this._3242.length - 1
                }
                _2016(t) {
                    const _ = this._6943._3891;
                    this._6943._3891 = this._3242[t];
                    const e = this._6943.getUint32();
                    return this._6943._3891 = _,
                    e
                }
                _8375() {
                    this._6493 || (this._6521 = !0,
                    this._2520 = n._8276,
                    this._9609 = this._8618,
                    this._9199("play"))
                }
                _8803() {
                    this._6521 = !1,
                    this._9199("pause")
                }
                _9640(t) {
                    Ge._3565(),
                    ee._9909();
                    const _ = new Q(t)
                      , e = []
                      , s = [];
                    let i = !1;
                    const n = _.getUint16();
                    if (n > 0) {
                        const t = _.getString8();
                        "string16" === t ? i = !0 : _._3891 -= t.length + 1
                    }
                    for (let t = 0; t < n; t++) {
                        const t = i ? _.getString16() : _.getString8();
                        e.push(t)
                    }
                    for (; !_._6493; ) {
                        s.push(_._3891),
                        _._7190(10),
                        _._7190(2 * _.getUint16()),
                        _._7190(4 * _.getUint16()),
                        _._7190(8 * _.getUint16());
                        const t = _.getUint16();
                        for (let e = 0; e < t; e++) {
                            _._7190(8);
                            const t = _.getUint8();
                            1 === t ? _._7190(9) : 2 === t && _._7190(3)
                        }
                    }
                    _._3891 = s[0];
                    const o = _.getUint32();
                    this._6943 = _,
                    this._9768 = e,
                    this._3242 = s,
                    this._2520 = 0,
                    this._9609 = 0,
                    this._8618 = 0,
                    this._6746 = o,
                    this._6521 = !1,
                    this._9315 = !0,
                    this._5369(0),
                    B_._8506(o, this._3242.length - 1),
                    l._9736("Playback bar controls", "H - toggle playback bar visibility, SPACEBAR - Play / Pause")
                }
                _2054() {
                    ee._9909(),
                    this._6943 = null,
                    this._9315 = !1,
                    B_._7486()
                }
                _2081() {
                    if (!this._9315 || !this._6521 || this._6493)
                        return;
                    const t = this._2520
                      , _ = (n._8276 - t) * this._7526
                      , e = this._9609
                      , s = this._3242[e]
                      , i = this._6943;
                    i._3891 = s;
                    const o = i.getUint32() + _;
                    let r = this._8618;
                    for (; r < this._3242.length - 1; ) {
                        const t = r + 1
                          , _ = this._3242[t];
                        if (i._3891 = _,
                        i.getInt32() > o)
                            break;
                        r++
                    }
                    this._7911(r)
                }
                _7911(t) {
                    if (this._8618 !== t) {
                        if (this._8618 < t)
                            for (let _ = this._8618 + 1; _ <= t; _++)
                                this._5369(_);
                        else {
                            ee._9909();
                            for (let _ = 0; _ <= t; _++)
                                this._5369(_)
                        }
                        this._8618 = t,
                        this._6746 = this._2016(t),
                        this._6493 && this._8803()
                    }
                }
                _5369(t) {
                    const _ = this._3242[t]
                      , e = this._6943;
                    e._3891 = _ + 4;
                    const s = e.getUint16();
                    ee._3070(s);
                    const i = e.getUint16()
                      , n = e.getUint16();
                    j_._4753._8093(i, n);
                    const o = e.getUint16();
                    for (let t = 0; t < o; t++) {
                        const t = e.getUint16();
                        ee._8451(t)
                    }
                    const r = e.getUint16();
                    for (let t = 0; t < r; t++) {
                        const t = e.getUint16()
                          , _ = e.getUint16();
                        ee._9377(t, _)
                    }
                    const h = e.getUint16();
                    for (let t = 0; t < h; t++) {
                        const t = e.getUint16()
                          , _ = e.getUint16()
                          , s = e.getUint16()
                          , i = e.getUint16();
                        ee._7115(t)._2081(_, s, i)
                    }
                    const a = e.getUint16();
                    for (let t = 0; t < a; t++) {
                        const t = e.getUint16()
                          , _ = e.getUint16()
                          , s = e.getUint16()
                          , i = e.getUint16()
                          , n = e.getUint8()
                          , o = ee._3459(t, _, s, i, n);
                        if (1 === n) {
                            o._7614._2081(e.getUint8(), e.getUint8(), e.getUint8());
                            const t = e.getUint16();
                            o._3047._6216 = this._9768[t];
                            const _ = e.getUint16();
                            o._3047._4663 = this._9768[_];
                            const s = e.getUint16();
                            o._3047._7760 = this._9768[s]
                        } else
                            2 === n && o._7614._2081(e.getUint8(), e.getUint8(), e.getUint8())
                    }
                }
            }
            ;
            class X_ {
                constructor(t, _, e, s, i) {
                    this._8001 = t,
                    this._9486 = v,
                    this._8447 = _, // x
                    this._6261 = e, // y
                    this._4784 = s,
                    this._4526 = _, // x
                    this._6966 = e, // y
                    this._9617 = s,
                    this._3611 = _, // x
                    this._6828 = e, // y
                    this._9687 = s,
                    this._3901 = i,
                    this._7614 = new y,
                    this._6671 = !1,
                    this._1826 = n._8276,
                    this._3824 = 0,
                    this._7696 = 0,
                    this._3900 = {
                        _6679: Math.round(2e4 * (Math.random() - .5) + 5e4 * (Math.random() < .5 ? 1 : -1))
                    },
                    this._3047 = {
                        _6216: "",
                        _4663: "",
                        _7760: ""
                    },
                    this._7997 = {
                        _6216: 0,
                        _4663: 0,
                        _7845: 0
                    }
                }
                get _7845() {
                    return this._9617 * this._9617 / 100
                }
                get _1482() {
                    return this._4784 * this._4784 / 100
                }
                get _9101() {
                    const t = Y.ELEMENT_ANIMATION_SOFTENING._2230();
                    return this._6671 ? 1 - this._7696 : n._8276 - this._1826 < t ? (n._8276 - this._1826) / t : 1
                }
                get _7317() {
                    const t = V_._5347 ? this._7614 : this._9486._7614;
                    let _ = 256;
                    _ = 255 !== t._3712 && 100 !== t._3712 ? t._3712 : 255 !== t._4866 && 100 !== t._4866 ? t._4866 : t._8040,
                    _ = 127 + (_ >>> 1);
                    const e = Y.ORB_TINT_COLOR._2230();
                    return new y(_ / 255 * ((16711680 & e) >>> 16) >>> 0,_ / 255 * ((65280 & e) >>> 8) >>> 0,_ / 255 * ((255 & e) >>> 0) >>> 0)
                }
                _2081(t, _, e) {
                    this._2098(),
                    this._3611 = this._4526,
                    this._6828 = this._6966,
                    this._9687 = this._9617,
                    this._8447 = t,
                    this._6261 = _,
                    this._4784 = e,
                    this._3824 = n._8276
                }
                _2098() {
                    let t = Y.ELEMENT_ANIMATION_SOFTENING._2230();
                    V_._5347 && (t /= V_._9378),
                    this._7696 = Math.min((n._8276 - this._3824) / t, 1),
                    this._4526 = this._3611 + (this._8447 - this._3611) * this._7696,
                    this._6966 = this._6828 + (this._6261 - this._6828) * this._7696,
                    this._9617 = this._9687 + (this._4784 - this._9687) * this._7696
                }
            }
            const z_ = new X_(-1,32767.5,32767.5,1,A._2978)
              , q_ = X_;
            class J_ {
                constructor(t, _) {
                    this._8001 = t,
                    this._9486 = _,
                    this._3141 = !1,
                    this._7845 = 0,
                    this._8447 = 32767.5,
                    this._6261 = 32767.5,
                    this._4526 = 32767.5,
                    this._6966 = 32767.5,
                    this._3611 = 32767.5,
                    this._6828 = 32767.5,
                    this._3824 = 0
                }
                _2081(t, _, e) {
                    this._2098(),
                    this._3611 = this._4526,
                    this._6828 = this._6966,
                    this._8447 = t,
                    this._6261 = _,
                    this._7845 = e,
                    this._3824 = n._8276
                }
                _2098() {
                    const t = Math.min((n._8276 - this._3824) / 1e3, 1);
                    this._4526 = this._3611 + (this._8447 - this._3611) * t,
                    this._6966 = this._6828 + (this._6261 - this._6828) * t
                }
            }  
              const XORee = class {
                constructor() {
                    this._te = new J_(-1,v)
                    this._e = J_
                    this._3412 = new Map,
                    this._8623 = new Map,
                    this._1420 = new Map,
                    this._5482 = new Map,
                    this._4456 = [],
                    this._7311 = [],
                    this._4006 = 14e3,
                    this._9820 = new j(25767.5,25767.5,39767.5,39767.5)
                }
                _9909() {
                    this._3412.clear(),
                    this._8623.clear(),
                    this._1420.clear(),
                    this._5482.clear(),
                    this._4456 = [],
                    this._7311 = []
                }
                _7609(t, _, e, s, i, n) {
                    const o = new f(t,_,e,s,i,n);
                    return t === Fe._3539 && (o._3195 = !0,
                    Fe._2993 = o),
                    this._3412.set(t, o),
                    o
                }
                _3629(t) {
                    const _ = this._3412.get(t);
                    return void 0 === _ ? (console.warn(`Client with id ${t} doesn't exist. Returning dummy instance...`),
                    m) : _
                }
                _6844(t) {
                    this._3412.delete(t) || console.warn(`Client with id ${t} doesn't exist.`)
                }
                _1381(t, _, e) {
                    const s = new b(t,_,e);
                    return this._8623.set(t, s),
                    s
                }
                _2959(t) {
                    const _ = this._8623.get(t);
                    return void 0 === _ ? (console.warn(`Player with id ${t} doesn't exist. Returning dummy instance...`),
                    v) : _
                }
                _9034(t) {
                    this._8623.delete(t) || console.warn(`Player with id ${t} doesn't exist.`)
                }
                _3459(t, _, e, s, i) {
                    const n = new q_(t,_,e,s,i);
                    return this._1420.set(t, n),
                    n
                }
                _7115(t) {
                    const _ = this._1420.get(t);
                    return void 0 === _ ? (console.warn(`Element with id ${t} doesn't exist. Returning dummy instance...`),
                    z_) : _
                }
                _9377(t, _) {
                    const e = this._1420.get(t);
                    if (void 0 === e)
                        return void this._8451(_);
                    const s = this._1420.get(_);
                    void 0 !== s ? (s._2081(e._4526, e._6966, s._9617),
                    s._6671 = !0,
                    this._1420.delete(_),
                    this._1420.set(4294967296 + _, s)) : console.warn(`Absorbed element with id ${_} doesn't exist.`)
                }
                _8451(t) {
                    const _ = this._1420.get(t);
                    void 0 !== _ ? (_._2081(_._4526, _._6966, _._9617),
                    _._6671 = !0,
                    this._1420.delete(t),
                    this._1420.set(4294967296 + t, _)) : console.warn(`Element with id ${t} doesn't exist.`)
                }
                _1249(t, _) {
                    const e = new this._e(t,_);
                    return this._5482.set(t, e),
                    e
                }
                _1589(t) {
                    const _ = this._5482.get(t);
                    return void 0 === _ ? (console.warn(`Teammate with id ${t} doesn't exist. Returning dummy instance...`),
                    this._te) : _
                }
                _5800(t) {
                    this._5482.delete(t) || console.warn(`Teammate with id ${t} doesn't exist.`)
                }
                _6486(t, _) {
                    _._2993._3195 && 0 === _._1420.size && Fe._8713(_._3891, !0),
                    _._1420.set(t._8001, t),
                    t._9486 = _
                }
                _8854(t) {
                    t._9486 === v ? console.warn("No parent player to detach.") : (t._9486._1420.delete(t._8001),
                    t._9486._2993._3195 && 0 === t._9486._1420.size && Fe._8713(t._9486._3891, !1))
                }
                _9944(t, _) {
                    2 === _._8623.size && console.warn("Client already has 2 players."),
                    t._3891 = _._8623.size,
                    _._8623.set(t._8001, t),
                    t._2993 = _,
                    _._3195 && (Ke._2371(t._3891, Fe._8167(t._3891)),
                    1 === _._8623.size && ds._9769 && (ds._9769 = !1),
                    2 !== _._8623.size || ds._9769 || (ds._9769 = !0))
                }
                _2714(t) {
                    t._2993 === m ? console.warn("No parent client to detach.") : (t._3891 = -1,
                    t._2993._8623.delete(t._8001))
                }
                _2081() {
                    this._4456 = [],
                    this._7311 = [];
                    for (const [t,_] of this._1420)
                        _._2098(),
                        _._6671 && 1 === _._7696 ? this._1420.delete(t) : this._1632(_) || (_._3901 === A._4244 ? this._7311.push(_) : this._4456.push(_));
                    this._4456.sort(this._6335.bind(this))
                }
                _6335(t, _) {
                    return t._9617 === _._9617 ? _._8001 - t._8001 : t._9617 - _._9617
                }
                _1632(t) {
                    return t._8001 < 0
                }
                _3070(t) {
                    const _ = (65535 - t) / 2;
                    this._9820._6457 = _,
                    this._9820._2706 = _,
                    this._9820._2689 = _ + t,
                    this._9820._9957 = _ + t,
                    this._4006 = t
                }
              }
              const ee = new class {
                constructor() {
                    this._te = new J_(-1,v)
                    this._e = J_
                    this._3412 = new Map,
                    this._8623 = new Map,
                    this._1420 = new Map,
                    this._5482 = new Map,
                    this._4456 = [],
                    this._7311 = [],
                    this._4006 = 14e3,
                    this._9820 = new j(25767.5,25767.5,39767.5,39767.5)
                }
                _9909() {
                    this._3412.clear(),
                    this._8623.clear(),
                    this._1420.clear(),
                    this._5482.clear(),
                    this._4456 = [],
                    this._7311 = []
                }
                _7609(t, _, e, s, i, n) {
                    const o = new f(t,_,e,s,i,n);
                    return t === Fe._3539 && (o._3195 = !0,
                    Fe._2993 = o),
                    this._3412.set(t, o),
                    o
                }
                _3629(t) {
                    const _ = this._3412.get(t);
                    return void 0 === _ ? (console.warn(`Client with id ${t} doesn't exist. Returning dummy instance...`),
                    m) : _
                }
                _6844(t) {
                    this._3412.delete(t) || console.warn(`Client with id ${t} doesn't exist.`)
                }
                _1381(t, _, e) {
                    const s = new b(t,_,e);
                    return this._8623.set(t, s),
                    s
                }
                _2959(t) {
                    const _ = this._8623.get(t);
                    return void 0 === _ ? (console.warn(`Player with id ${t} doesn't exist. Returning dummy instance...`),
                    v) : _
                }
                _9034(t) {
                    this._8623.delete(t) || console.warn(`Player with id ${t} doesn't exist.`)
                }
                _3459(t, _, e, s, i) {
                    const n = new q_(t,_,e,s,i);
                    return this._1420.set(t, n),
                    n
                }
                _7115(t) {
                    const _ = this._1420.get(t);
                    return void 0 === _ ? (console.warn(`Element with id ${t} doesn't exist. Returning dummy instance...`),
                    z_) : _
                }
                _9377(t, _) {
                    const e = this._1420.get(t);
                    if (void 0 === e)
                        return void this._8451(_);
                    const s = this._1420.get(_);
                    void 0 !== s ? (s._2081(e._4526, e._6966, s._9617),
                    s._6671 = !0,
                    this._1420.delete(_),
                    this._1420.set(4294967296 + _, s)) : console.warn(`Absorbed element with id ${_} doesn't exist.`)
                }
                _8451(t) {
                    const _ = this._1420.get(t);
                    void 0 !== _ ? (_._2081(_._4526, _._6966, _._9617),
                    _._6671 = !0,
                    this._1420.delete(t),
                    this._1420.set(4294967296 + t, _)) : console.warn(`Element with id ${t} doesn't exist.`)
                }
                _1249(t, _) {
                    const e = new this._e(t,_);
                    return this._5482.set(t, e),
                    e
                }
                _1589(t) {
                    const _ = this._5482.get(t);
                    return void 0 === _ ? (console.warn(`Teammate with id ${t} doesn't exist. Returning dummy instance...`),
                    this._te) : _
                }
                _5800(t) {
                    this._5482.delete(t) || console.warn(`Teammate with id ${t} doesn't exist.`)
                }
                _6486(t, _) {
                    _._2993._3195 && 0 === _._1420.size && Fe._8713(_._3891, !0),
                    _._1420.set(t._8001, t),
                    t._9486 = _
                }
                _8854(t) {
                    t._9486 === v ? console.warn("No parent player to detach.") : (t._9486._1420.delete(t._8001),
                    t._9486._2993._3195 && 0 === t._9486._1420.size && Fe._8713(t._9486._3891, !1))
                }
                _9944(t, _) {
                    2 === _._8623.size && console.warn("Client already has 2 players."),
                    t._3891 = _._8623.size,
                    _._8623.set(t._8001, t),
                    t._2993 = _,
                    _._3195 && (Ke._2371(t._3891, Fe._8167(t._3891)),
                    1 === _._8623.size && ds._9769 && (ds._9769 = !1),
                    2 !== _._8623.size || ds._9769 || (ds._9769 = !0))
                }
                _2714(t) {
                    t._2993 === m ? console.warn("No parent client to detach.") : (t._3891 = -1,
                    t._2993._8623.delete(t._8001))
                }
                _2081() {
                    this._4456 = [],
                    this._7311 = [];
                    for (const [t,_] of this._1420)
                        _._2098(),
                        _._6671 && 1 === _._7696 ? this._1420.delete(t) : this._1632(_) || (_._3901 === A._4244 ? this._7311.push(_) : this._4456.push(_));
                    this._4456.sort(this._6335.bind(this))
                }
                _6335(t, _) {
                    return t._9617 === _._9617 ? _._8001 - t._8001 : t._9617 - _._9617
                }
                _1632(t) {
                    return t._8001 < 0
                }
                _3070(t) {
                    const _ = (65535 - t) / 2;
                    this._9820._6457 = _,
                    this._9820._2706 = _,
                    this._9820._2689 = _ + t,
                    this._9820._9957 = _ + t,
                    this._4006 = t
                }
            }
            const ne = {
                _2301: { "_6792": 10,
                        "_9374": 20,
                        "_4100": 21,
                        "_8361": 22,
                        "_5775": 23,
                        "_1202": 24,
                        "_9867": 25,
                        "_3129": 30,
                        "_5615": 31,
                        "_2967": 32,
                        "_7147": 33,
                        "_7620": 40,
                        "_4263": 41,
                        "_6336": 42,
                        "_2958": 43,
                        "_8800": 100,
                        "_1226": 101,
                        "_5070": 110,
                        "_7294": 111,
                        "_2552": 112,
                        "_5175": 113
                },
                _2607: {
                        "_2845": 10,
                        "_4955": 11,
                        "_6304": 21,
                        "_3398": 22,
                        "_7768": 23,
                        "_9775": 24,
                        "_7917": 30,
                        "_7366": 31,
                        "_9508": 32,
                        "_3246": 33,
                        "_3527": 34,
                        "_7151": 40,
                        "_8608": 41,
                        "_3933": 42,
                        "_3129": 50,
                        "_5615": 51,
                        "_6769": 52,
                        "_7147": 53,
                        "_1594": 54,
                        "_6065": 55,
                        "_9438": 56,
                        "_5991": 57,
                        "_5057": 100
                }
            };
            class oe {
                constructor() {
                    const t = tt.ZP.createElement("div", {
                        className: "leaderboard-entry"
                    }, tt.ZP.createElement("div", {
                        className: "leaderboard-team"
                    }), tt.ZP.createElement("div", {
                        className: "leaderboard-nick"
                    }), tt.ZP.createElement("div", {
                        className: "leaderboard-energy"
                    }), tt.ZP.createElement("div", {
                        className: "leaderboard-team-color"
                    }));
                    this._9843 = r._6246(t),
                    this._7437 = r._6246(t.children[0]),
                    this._6888 = r._6246(t.children[1]),
                    this._2531 = r._6246(t.children[2]),
                    this._2664 = r._6246(t.children[3]),
                    this._9207 = !0
                }
                get _8684() {
                    return this._9843._8684
                }
                _2081(t, _, e, s) {
                    "ITS-BOT-TEAM" === (t = Dt._4876(t)) && (t = ""),
                    "ITS-BOT-TEAM" === t && (s = "transparent"),
                    t.length > 0 ? (this._7437._9596("display", "block"),
                    this._7437._4667 = `[${t}]`,
                    this._2664._9596("background-color", s)) : (this._7437._9596("display", "none"),
                    this._2664._9596("background-color", "transparent")),
                    this._6888._4667 = _ || "Unnamed player",
                    this._2531._4667 = e < 1e3 ? e.toString() : (e / 1e3).toFixed(1) + "k"
                }
                _8506() {
                    this._9207 || (this._9843._9596("opacity", "1"),
                    this._9207 = !0)
                }
                _7486() {
                    this._9207 && (this._9843._9596("opacity", "0"),
                    this._9207 = !1)
                }
            }
            const re = new class {
                constructor() {
                    this._9843 = null,
                    this._8175 = [],
                    this._1208 = [],
                    this._2494 = !0
                }
                _1489() {
                    const t = document.getElementById("leaderboard");
                    for (let _ = 0; _ < 10; _++) {
                        const _ = new oe;
                        this._8175.push(_),
                        t.appendChild(_._8684)
                    }
                    this._9843 = r._6246(t)
                }
                _2081() {
                    if ("show" === Y.SHOW_LEADERBOARD._2230()) {
                        this._8506();
                        for (let t = 0; t < 10; t++) {
                            const _ = this._8175[t];
                            if (t < this._1208.length) {
                                const e = this._1208[t];
                                _._2081(e[0], e[1], e[2], e[3]),
                                _._8506()
                            } else
                                _._7486()
                        }
                    } else
                        this._7486()
                }
                _2100(t, _, e) {
                    this._1208.push([t, _, e, u._4287(t)[0]])
                }
                _9909() {
                    this._1208 = []
                }
                _8506() {
                    this._2494 || (this._9843._9596("display", "flex"),
                    this._2494 = !0)
                }
                _7486() {
                    this._2494 && (this._9843._9596("display", "none"),
                    this._2494 = !1)
                }
            }
              , he = new class {
                constructor() {
                    this._9843 = null,
                    this._4115 = 0,
                    this._3901 = "XP",
                    this._2494 = !0
                }
                _1489() {
                    const t = document.getElementById("ryuten-points");
                    this._9843 = r._6246(t)
                }
                _2081() {
                    Math.random() < 0 ? (this._8506(),
                    this._9843._4667 = `${this._4115} ${this._3901}`) : this._7486()
                }
                _8506() {
                    this._2494 || (this._9843._9596("display", "block"),
                    this._2494 = !0)
                }
                _7486() {
                    this._2494 && (this._9843._9596("display", "none"),
                    this._2494 = !1)
                }
            }
            ;
            var ae = e(395)
              , ce = e.n(ae)
              , le = e(428)
              , ue = e.n(le)
              , de = e(100)
              , me = e.n(de)
              , fe = e(31)
              , pe = e.n(fe)
              , ge = e(171)
              , Ee = e.n(ge)
              , ye = e(750)
              , we = e.n(ye)
              , ve = e(67)
              , be = e.n(ve)
              , Ce = e(909)
              , Ae = e.n(Ce)
              , Se = e(565)
              , Te = e.n(Se);
            const Ie = ["SHIELD", "TITLE", "MISC"]
              , Oe = new class extends h {
                constructor() {
                    super("shop-menu"),
                    this._5285 = new Map,
                    this._1289 = new Map,
                    this._3380 = "";
                    const t = document.getElementById("inventory-content");
                    this._8134 = new q(t)
                }
                _1489() {
                    const t = document.getElementById("shop-navbar");
                    for (const _ of Ie) {
                        const e = tt.ZP.createElement("div", {
                            class: "shop-nb-item"
                        }, _, tt.ZP.createElement("div", {
                            class: "shop-nb-item-decor"
                        }));
                        e.onclick = ()=>{
                            this._4818(_)
                        }
                        ,
                        t.appendChild(e),
                        this._5285.set(_, e)
                    }
                    this._4818(Ie[0]),
                    this._3403();
                    const _ = document.getElementById("shop-back");
                    _.addEventListener("click", (()=>{
                        ps._6116(),
                        a._8375(a._6414)
                    }
                    )),
                    _.addEventListener("mouseenter", a._8375.bind(a, a._8611))
                }
                _3403() {
                    const t = document.getElementById("shop-wait");
                    t.style.display = "none";
                    const _ = document.getElementById("shop-items");
                    _.innerHTML = "",
                    this._1289.clear();
                    const e = Object.getOwnPropertyNames(Le._5627)
                      , s = Object.getOwnPropertyNames(Le._1137);
                    for (const _ of e) {
                        if (s.includes(_))
                            continue;
                        const e = Le._5627[_]
                          , i = ()=>{
                            Ge._8283 ? (Ke._6161(_),
                            t.style.display = "flex") : l._9736("Error", "Please connect to a game server first.")
                        }
                          , n = tt.ZP.createElement("div", {
                            class: "shop-item"
                        }, tt.ZP.createElement("div", {
                            class: "shop-item-preview",
                            style: {
                                backgroundImage: `url(assets/images/UI/game-item-previews/${_}.webp)`
                            }
                        }, tt.ZP.createElement("div", {
                            class: "shop-item-name"
                        }, e.name)), tt.ZP.createElement("div", {
                            class: "shop-item-buy",
                            onClick: i
                        }, tt.ZP.createElement("i", {
                            class: "iconfont iconfont-coin"
                        }), " ", e.rp > 0 ? e.rp : "FREE"));
                        n.style.display = _.startsWith(`${this._3380}_`) ? "block" : "none",
                        this._1289.set(_, n)
                    }
                    const i = [...this._1289.values()].reverse();
                    for (const t of i)
                        _.appendChild(t);
                    this._8134._2081()
                }
                _4818(t) {
                    const _ = this._5285.get(t);
                    if (void 0 === _)
                        throw "Category button is undefined.";
                    for (const t of this._5285.values())
                        t.classList.remove("shop-nb-item-active");
                    _.classList.add("shop-nb-item-active");
                    for (const [_,e] of this._1289)
                        e.style.display = _.startsWith(`${t}_`) ? "block" : "none";
                    this._3380 = t,
                    this._8134._2081()
                }
                _8151(t, _) {
                    document.getElementById("shop-wallet-rp").textContent = t.toString(),
                    document.getElementById("shop-wallet-rc").textContent = _.toString()
                }
            }
            ;
            ce().setMasterURL("https://lancelot.ryuten.io");
            const Le = new class {
                constructor() {
                    this._8701 = {
                        _4185: document.getElementById("mame-trb-user-data-rank"),
                        _4115: document.getElementById("mame-trb-user-data-xp")
                    },
                    this._9444 = !1,
                    this._1137 = {},
                    this._2989 = {
                        shield: "",
                        title: ""
                    },
                    this._7515 = {
                        rp: 0,
                        rc: 0
                    },
                    this._5627 = {}
                }
                get _2072() {
                    return this._9444
                }
                _9023(t) {
                    this._9444 = t,
                    R_._9147(!0),
                    t || (this._8701._4185.textContent = "UNRANKED",
                    this._8701._4115.textContent = "0XP")
                }
                async _2176() {
                    Lt._8809("Connecting to Lancelot"),
                    await this._9737(),
                    this._9444
                }
                async _9737() {
                    const t = await ue()();
                    if (null === t || "error" === t.status)
                        return;
                    if (void 0 === t.active_till)
                        return;
                    if (0 === t.active_till) {
                        const t = await me()();
                        if (null === t || "error" === t.status)
                            return
                    }
                    const _ = await pe()();
                    if (null === _ || "error" === _.status)
                        return;
                    this._9023(!0),
                    this._7776(t.active_till);
                    const e = [this._1167(), this._8263(), this._7573(), this._5718()];
                    await Promise.all(e),
                    document.getElementById("mame-trb-user-data-username").textContent = _.username,
                    document.getElementById("mame-trb-user-data-rp").textContent = `${this._7515.rp} RP`,
                    document.getElementById("mame-trb-user-data-rc").textContent = `${this._7515.rc} RC`,
                    document.getElementById("login-button").style.display = "none",
                    Oe._8151(this._7515.rp, this._7515.rc)
                }
                _7776(t) {
                    const _ = 0 === t ? 0 : Math.max(1e3 * t - Date.now());
                    window.setTimeout((()=>{
                        me()(),
                        window.setInterval((()=>{
                            me()()
                        }
                        ), 36e5)
                    }
                    ), _)
                }
                async _1167() {
                    const t = await Ee()();
                    null !== t && ("error" === t.status ? console.error(t.error) : this._1137 = t.inventory)
                }
                async _8263() {
                    const t = await we()();
                    null !== t && ("error" === t.status ? console.error(t.error) : this._2989 = t.active_items)
                }
                async _7573() {
                    const t = await be()();
                    null !== t && ("error" === t.status ? console.error(t.error) : this._7515 = {
                        rp: t.rp,
                        rc: t.rc
                    })
                }
                async _5718() {
                    const t = await Ae()();
                    null !== t && ("error" === t.status ? console.error(t.error) : this._5627 = t.shop_items)
                }
                async _7132(t) {
                    return await Te()(t)
                }
            }
              , Pe = new class {
                constructor() {
                    const t = document.getElementById("ffar-players-container")
                      , _ = document.getElementById("ffar-players-scrollbar-slider")
                      , e = _.parentElement;
                    t.addEventListener("scroll", this._2081.bind(this));
                    let s = !1
                      , i = 0
                      , n = 0;
                    _.addEventListener("mousedown", (t=>{
                        s = !0,
                        i = t.clientY,
                        n = _.offsetTop,
                        this._8820 = !0
                    }
                    )),
                    window.addEventListener("mousemove", (o=>{
                        if (!s)
                            return;
                        const r = o.clientY - i;
                        let h = n + r;
                        h < 0 ? h = 0 : h > e.offsetHeight - _.offsetHeight && (h = e.offsetHeight - _.offsetHeight),
                        _.style.setProperty("top", `${h}px`);
                        const a = h / _.offsetHeight;
                        t.scrollTo(0, t.scrollHeight * a)
                    }
                    )),
                    window.addEventListener("mouseup", (()=>{
                        s = !1,
                        this._8820 = !1
                    }
                    )),
                    this._5665 = t,
                    this._4383 = r._6246(_),
                    this._8820 = !1
                }
                _2081() {
                    if (this._8820)
                        return;
                    const t = this._5665.scrollHeight
                      , _ = this._5665.offsetHeight
                      , e = _ / t * 100
                      , s = this._5665.scrollTop / t * _;
                    this._4383._9596("height", `${e.toFixed(0)}%`),
                    this._4383._9596("top", `${s.toFixed(0)}px`)
                }
            }
              , Ne = new class {
                constructor() {
                    this._3381 = null,
                    this._5665 = null,
                    this._2494 = !1,
                    this._1208 = {
                        _3631: [],
                        _9396: [],
                        _3680: [],
                        _6139: !1
                    },
                    this._2440 = !1
                }
                _1489() {
                    this._3381 = r._6246(document.getElementById("ffar-players")),
                    this._5665 = document.getElementById("ffar-players-container"),
                    document.getElementById("ffar-players-close").onclick = ()=>{
                        this._7486()
                    }
                }
                _5073(t, _, e, s) {
                    this._1208._3631 = t,
                    this._1208._9396 = _,
                    this._1208._3680 = e,
                    this._1208._6139 = s,
                    this._2440 = !0
                }
                _2081() {
                    if (!this._2440)
                        return;
                    if (!this._2494)
                        return;
                    const t = [];
                    if (this._1208._6139) {
                        const _ = this._5835("Ready");
                        t.push(_);
                        for (const _ of this._1208._9396) {
                            const e = ee._3629(_);
                            t.push(this._6259(e._6216))
                        }
                        const e = this._5835("Not ready");
                        t.push(e);
                        for (const _ of this._1208._3680) {
                            const e = ee._3629(_);
                            t.push(tt.ZP.createElement("div", {
                                class: "ffar-players-h2"
                            }, e._6216))
                        }
                    } else {
                        const _ = this._5835("In match");
                        t.push(_);
                        for (const _ of this._1208._3631) {
                            const e = ee._3629(_);
                            t.push(this._6259(e._6216))
                        }
                        const e = this._5835("Waiting");
                        t.push(e);
                        for (const _ of this._1208._9396) {
                            const e = ee._3629(_);
                            t.push(this._6259(e._6216))
                        }
                        for (const _ of this._1208._3680) {
                            const e = ee._3629(_);
                            t.push(this._6259(e._6216))
                        }
                    }
                    o._4428((()=>{
                        this._5665.innerHTML = "";
                        for (const _ of t)
                            this._5665.appendChild(_);
                        Pe._2081()
                    }
                    )),
                    this._2440 = !1
                }
                _8506() {
                    this._3381._9596("display", "flex"),
                    this._2494 = !0
                }
                _7486() {
                    this._3381._9596("display", "none"),
                    this._2494 = !1
                }
                _5835(t) {
                    return tt.ZP.createElement("div", {
                        class: "ffar-players-h1"
                    }, t, tt.ZP.createElement("i", {
                        class: "iconfont iconfont-arrow-down",
                        style: "margin-top: 4px; margin-left: 2px;"
                    }))
                }
                _6259(t) {
                    return tt.ZP.createElement("div", {
                        class: "ffar-players-h2"
                    }, t)
                }
            }
              , Me = new class {
                constructor() {
                    this._3381 = null,
                    this._7524 = null,
                    this._6578 = null,
                    this._7534 = null,
                    this._6766 = {
                        _8271: null,
                        _8089: null,
                        _8623: null
                    },
                    this._2867 = !1,
                    this._2494 = !1,
                    this._1208 = {
                        _3631: 0,
                        _9396: 0,
                        _3680: 0,
                        _8089: 0,
                        _6139: !1,
                        _4101: !1
                    },
                    this._2440 = !1
                }
                get _8125() {
                    return this._2494
                }
                _1489() {
                    this._3381 = r._6246(document.getElementById("ffar-bar")),
                    this._7524 = r._6246(document.getElementById("ffar-bar-ready")),
                    this._7524._8684.onclick = ()=>{
                        Le._2072 ? (this._2867 = !this._2867,
                        Ke._7091(this._2867),
                        this._7524._4667 = this._2867 ? "READY" : "NOT READY",
                        this._7524._9596("background-color", this._2867 ? "rgba(111, 255, 84, 0.45)" : "rgba(255, 84, 84, 0.45)")) : l._9736("Error", "Please login first", 5e3)
                    }
                    ,
                    this._6578 = r._6246(document.getElementById("ffar-bar-freeroam")),
                    this._6578._8684.onclick = ()=>{
                        Le._2072 ? !Fe._7297 && this._1208._6139 && Ke._7884(0) : l._9736("Error", "Please login first", 5e3)
                    }
                    ,
                    this._7534 = r._6246(document.getElementById("ffar-bar-spawn")),
                    this._7534._8684.onclick = ()=>{
                        Le._2072 ? Fe._7297 || this._1208._6139 || this._1208._4101 || Ke._7884(0) : l._9736("Error", "Please login first", 5e3)
                    }
                    ,
                    this._6766 = {
                        _8271: r._6246(document.getElementById("ffar-bar-status")),
                        _8089: r._6246(document.getElementById("ffar-bar-time")),
                        _8623: r._6246(document.getElementById("ffar-bar-players-text"))
                    },
                    document.getElementById("ffar-bar-players").onclick = ()=>{
                        Ne._8506()
                    }
                }
                _5073(t, _, e, s, i, n) {
                    this._1208._3631 = t,
                    this._1208._9396 = _,
                    this._1208._3680 = e,
                    this._1208._8089 = s,
                    this._1208._6139 = i,
                    this._1208._4101 = n,
                    this._2440 = !0
                }
                _2081() {
                    if (!this._2440)
                        return;
                    if (!this._2494)
                        return;
                    this._1208._6139 ? this._6766._8271._4667 = "Waiting for players" : this._1208._4101 ? this._6766._8271._4667 = "Match ending, spawn disabled" : this._6766._8271._4667 = "Match in progress";
                    const t = (this._1208._8089 % 60).toString().padStart(2, "0")
                      , _ = Math.floor(this._1208._8089 / 60).toString().padStart(2, "0");
                    if (this._6766._8089._4667 = `${_}:${t}`,
                    this._1208._8089 <= 10 && a._8375(a._1952),
                    this._1208._6139) {
                        const t = this._1208._9396
                          , _ = this._1208._9396 + this._1208._3680;
                        this._6766._8623._4667 = `${t}/${_} players ready`
                    } else {
                        const t = this._1208._3631;
                        this._6766._8623._4667 = `${t} players left`
                    }
                    this._7524._9596("display", this._1208._6139 ? "block" : "none"),
                    this._6578._9596("display", this._1208._6139 ? "block" : "none"),
                    this._1208._6139 ? this._7534._9596("display", "none") : (this._7534._9596("display", "block"),
                    this._1208._4101 ? (this._7534._4667 = "Spawning is locked now.",
                    this._7534._9596("background-color", "rgba(255, 84, 84, 0.45)")) : (this._7534._4667 = "Spawn",
                    this._7534._9596("background-color", "rgba(111, 255, 84, 0.45)"))),
                    this._2440 = !1
                }
                _8506() {
                    this._3381._9596("display", "block"),
                    this._2494 = !0,
                    this._2867 && this._7524._8684.click()
                }
                _7486() {
                    this._3381._9596("display", "none"),
                    this._2494 = !1,
                    this._2867 && this._7524._8684.click()
                }
            }
              , Re = new class {
                constructor() {
                    const t = document.getElementById("ffar-results-container")
                      , _ = document.getElementById("ffar-results-scrollbar-slider")
                      , e = _.parentElement;
                    t.addEventListener("scroll", this._2081.bind(this));
                    let s = !1
                      , i = 0
                      , n = 0;
                    _.addEventListener("mousedown", (t=>{
                        s = !0,
                        i = t.clientY,
                        n = _.offsetTop,
                        this._8820 = !0
                    }
                    )),
                    window.addEventListener("mousemove", (o=>{
                        if (!s)
                            return;
                        const r = o.clientY - i;
                        let h = n + r;
                        h < 0 ? h = 0 : h > e.offsetHeight - _.offsetHeight && (h = e.offsetHeight - _.offsetHeight),
                        _.style.setProperty("top", `${h}px`);
                        const a = h / _.offsetHeight;
                        t.scrollTo(0, t.scrollHeight * a)
                    }
                    )),
                    window.addEventListener("mouseup", (()=>{
                        s = !1,
                        this._8820 = !1
                    }
                    )),
                    this._5665 = t,
                    this._4383 = r._6246(_),
                    this._8820 = !1
                }
                _2081() {
                    if (this._8820)
                        return;
                    const t = this._5665.scrollHeight
                      , _ = this._5665.offsetHeight
                      , e = _ / t * 100
                      , s = this._5665.scrollTop / t * _;
                    this._4383._9596("height", `${e.toFixed(0)}%`),
                    this._4383._9596("top", `${s.toFixed(0)}px`)
                }
            }
              , xe = new class {
                constructor() {
                    this._3381 = null,
                    this._5665 = null,
                    this._2494 = !1,
                    this._1208 = [],
                    this._2440 = !1
                }
                _1489() {
                    this._3381 = r._6246(document.getElementById("ffar-results")),
                    this._5665 = document.getElementById("ffar-results-container"),
                    document.getElementById("ffar-results-close").onclick = ()=>{
                        this._7486()
                    }
                }
                _5073(t) {
                    this._1208 = t,
                    this._2440 = !0
                }
                _2081() {
                    if (!this._2440)
                        return;
                    if (!this._2494)
                        return;
                    const t = [];
                    let _ = 1;
                    for (const e of this._1208) {
                        const s = (_++).toString().padStart(2, "0") + "."
                          , i = (e._6419 < 0 ? "-" : "+") + Math.abs(e._6419).toString()
                          , n = ee._3629(e._1660)
                          , o = tt.ZP.createElement("div", {
                            class: "ffar-results-row"
                        }, tt.ZP.createElement("div", {
                            class: "ffar-results-rank"
                        }, s), tt.ZP.createElement("div", {
                            class: "ffar-results-username"
                        }, n._6216), tt.ZP.createElement("div", {
                            class: "ffar-results-points",
                            style: {
                                color: e._6419 < 0 ? "#ff0000" : "#00ff00"
                            }
                        }, e._9903, " (", i, ")"));
                        t.push(o)
                    }
                    o._4428((()=>{
                        this._5665.innerHTML = "";
                        for (const _ of t)
                            this._5665.appendChild(_);
                        Re._2081()
                    }
                    )),
                    this._2440 = !1
                }
                _8506() {
                    this._3381._9596("display", "flex"),
                    this._2494 = !0
                }
                _7486() {
                    this._3381._9596("display", "none"),
                    this._2494 = !1
                }
            }
              , ke = new class {
                constructor() {
                    this._9843 = null,
                    this._2494 = !1
                }
                _1489() {
                    const t = document.getElementById("timer2");
                    this._9843 = r._6246(t)
                }
                _2081(t) {
                    this._9843._4667 = t
                }
                _8506() {
                    this._2494 || (this._9843._9596("display", "block"),
                    this._2494 = !0)
                }
                _7486() {
                    this._2494 && (this._9843._9596("display", "none"),
                    this._2494 = !1)
                }
            }
              , Be = new class extends i {
                constructor() {
                    super();
                    const t = document.getElementById("inventory-rename-box")
                      , _ = document.getElementById("inventory-rename-input")
                      , e = document.getElementById("inventory-rename-box-close");
                    _.addEventListener("keydown", (t=>{
                        "Enter" === t.key && (this._9199("submit", [_.value]),
                        _.value = "",
                        this._7486())
                    }
                    )),
                    e.addEventListener("click", (()=>{
                        this._7486()
                    }
                    )),
                    this._5442 = r._6246(t),
                    this._6192 = r._6246(_),
                    this._9207 = !1
                }
                _8506() {
                    this._9207 || (this._5442._9596("display", "flex"),
                    this._9207 = !0,
                    o._4428((()=>{
                        this._6192._8684.focus()
                    }
                    )))
                }
                _7486() {
                    this._9207 && (this._5442._9596("display", "none"),
                    this._9207 = !1)
                }
                get _3235() {
                    return this._9207
                }
            }
              , He = ["SHIELD", "TITLE", "MISC"]
              , Ue = new class extends h {
                constructor() {
                    super("inventory-menu"),
                    this._5285 = new Map,
                    this._6169 = new Map,
                    this._3380 = "";
                    const t = document.getElementById("inventory-content");
                    this._8134 = new q(t)
                }
                _1489() {
                    this._8134._1489();
                    const t = document.getElementById("inventory-navbar");
                    for (const _ of He) {
                        const e = tt.ZP.createElement("div", {
                            class: "inventory-nb-item"
                        }, _, tt.ZP.createElement("div", {
                            class: "inventory-nb-item-decor"
                        }));
                        e.onclick = ()=>{
                            this._4818(_)
                        }
                        ,
                        t.appendChild(e),
                        this._5285.set(_, e)
                    }
                    this._4818(He[0]),
                    this._3403();
                    const _ = document.getElementById("inventory-back");
                    _.addEventListener("click", (()=>{
                        ps._6116(),
                        a._8375(a._6414)
                    }
                    )),
                    _.addEventListener("mouseenter", a._8375.bind(a, a._8611));
                    const e = document.getElementById("inventory-wait");
                    Be._6206("submit", (t=>{
                        e.style.display = "flex",
                        Le._7132(t).then((t=>{
                            if (null === t)
                                l._9736("Error", "Failed to change the username.");
                            else if ("error" === t.status)
                                switch (console.error(t.error),
                                t.error) {
                                case "username_too_small":
                                    l._9736("Username change failed", "The username should have more than 3 characters.");
                                    break;
                                case "username_too_big":
                                    l._9736("Username change failed", "The username should have max 16 characters.");
                                    break;
                                case "username_contains_invalid_character":
                                    l._9736("Username change failed", "The username contains invalid character(s).");
                                    break;
                                case "username_unavailable":
                                case "username_blacklisted":
                                case "username_already_exists":
                                    l._9736("Username change failed", "The username is unavailable.");
                                    break;
                                default:
                                    l._9736("Error", "Failed to change the username.")
                                }
                            else
                                l._9736("Info", "Username successfully changed."),
                                Ke._7132(),
                                delete Le._1137.MISC_RENAME_CARD,
                                this._3403(),
                                Oe._3403();
                            e.style.display = "none"
                        }
                        )).catch((t=>{
                            console.error(t),
                            e.style.display = "none",
                            l._9736("Error", "Failed to change the username.")
                        }
                        ))
                    }
                    ))
                }
                _3403() {
                    document.getElementById("inventory-wait").style.display = "none";
                    const t = document.getElementById("inventory-items");
                    t.innerHTML = "",
                    this._6169.clear();
                    const _ = Object.getOwnPropertyNames(Le._1137);
                    for (const t of _) {
                        const _ = Le._1137[t]
                          , e = tt.ZP.createElement("div", {
                            class: "inventory-item"
                        }, tt.ZP.createElement("div", {
                            class: "inventory-item-preview",
                            style: {
                                backgroundImage: `url(assets/images/UI/game-item-previews/${t}.webp)`
                            }
                        }, tt.ZP.createElement("div", {
                            class: "inventory-item-name"
                        }, _.name)));
                        e.onclick = ()=>{
                            if (Ge._8283)
                                if (t.startsWith("SHIELD_"))
                                    if (Le._2989.shield === t)
                                        Ke._1134(""),
                                        e.classList.remove("inventory-item-active"),
                                        Le._2989.shield = "";
                                    else {
                                        Ke._1134(t);
                                        for (const [t,_] of this._6169)
                                            t.startsWith("SHIELD_") && _.classList.remove("inventory-item-active");
                                        e.classList.add("inventory-item-active"),
                                        Le._2989.shield = t
                                    }
                                else if (t.startsWith("TITLE_"))
                                    if (Le._2989.title === t)
                                        Ke._8667(""),
                                        e.classList.remove("inventory-item-active"),
                                        Le._2989.title = "";
                                    else {
                                        Ke._8667(t);
                                        for (const [t,_] of this._6169)
                                            t.startsWith("TITLE_") && _.classList.remove("inventory-item-active");
                                        e.classList.add("inventory-item-active"),
                                        Le._2989.title = t
                                    }
                                else
                                    "MISC_RENAME_CARD" === t && Be._8506();
                            else
                                l._9736("Error", "Please connect to a game server first.")
                        }
                        ,
                        e.style.display = t.startsWith(`${this._3380}_`) ? "block" : "none",
                        t.startsWith("SHIELD_") && t === Le._2989.shield && e.classList.add("inventory-item-active"),
                        t.startsWith("TITLE_") && t === Le._2989.title && e.classList.add("inventory-item-active"),
                        this._6169.set(t, e)
                    }
                    const e = [...this._6169.values()].reverse();
                    for (const _ of e)
                        t.appendChild(_);
                    this._8134._2081()
                }
                _4818(t) {
                    const _ = this._5285.get(t);
                    if (void 0 === _)
                        throw "Category button is undefined.";
                    for (const t of this._5285.values())
                        t.classList.remove("inventory-nb-item-active");
                    _.classList.add("inventory-nb-item-active");
                    for (const [_,e] of this._6169)
                        e.style.display = _.startsWith(`${t}_`) ? "block" : "none";
                    this._3380 = t,
                    this._8134._2081()
                }
            }
              , De = new class {
                constructor() {
                    this._9843 = null,
                    this._9207 = !1,
                    this._9346 = {
                        _8001: 0,
                        _3141: !1,
                        _7845: 0
                    }
                }
                _1489() {
                    const t = document.getElementById("spectate-info");
                    this._9843 = r._6246(t)
                }
                _2081() {
                    if (Fe._7297)
                        this._3742();
                    else {
                        if (j_._5799 === X._1581)
                            this._9843._4667 = "Spectating #1";
                        else if (j_._5799 === X._5706)
                            this._9843._4667 = "Freeroam";
                        else {
                            const t = ee._3412.get(this._9346._8001);
                            if (void 0 !== t)
                                if (this._9346._3141) {
                                    const _ = this._9346._7845 < 1e3 ? this._9346._7845 : (this._9346._7845 / 1e3).toFixed(1) + "k";
                                    this._9843._4667 = `Spectating: ${t._6216} (${_})`
                                } else
                                    this._9843._4667 = `Waiting for ${t._6216} to spawn...`;
                            else
                                this._9843._4667 = "Please wait..."
                        }
                        this._8419()
                    }
                }
                _8419() {
                    this._9207 || (this._9843._9596("display", "block"),
                    this._9207 = !0)
                }
                _3742() {
                    this._9207 && (this._9843._9596("display", "none"),
                    this._9207 = !1)
                }
            }  
            const WeXOR = class {
                constructor() {
                    this.ee = new XORee()
                }
                _8423(t) {
                    const _ = new Q(t);
                    switch (_.getUint8()) {
                    case ne._2301._6792:
                        //this.auth(_); DONT AUTH OTHER CONNECTIONS IT HAS ALREADY BEEN DONE
                        break;
                    case ne._2301._9374:
                        this.skins(_);
                        break;
                    case ne._2301._4100:
                        this.camera(_);
                        break;
                    case ne._2301._8361:
                        this.teammate(_);
                        break;
                    case ne._2301._5775:
                        this.teammate(_);
                        break;
                    case ne._2301._1202:
                        this._5427();
                        break;
                    case ne._2301._9867:
                        this._6496(_);
                        break;
                    case ne._2301._3129:
                        this._2134(_);
                        break;
                    case ne._2301._7147:
                        this.directMessage(_);
                        break;
                    case ne._2301._5615:
                        this.commandar(_);
                        break;
                    case ne._2301._2967:
                        this.ping();
                        break;
                    case ne._2301._7620:
                        this._8122();
                        break;
                    case ne._2301._4263:
                        this._7848();
                        break;
                    case ne._2301._6336:
                        this._4241(_);
                        break;
                    case ne._2301._2958:
                        this.shopPurchase(_);
                        break;
                    case ne._2301._8800:
                        this._8287(_);
                        break;
                    case ne._2301._1226:
                        this._5904(_);
                        break;
                    case ne._2301._5070:
                        this.XPSet(_);
                        break;
                    case ne._2301._7294:
                        this._1677(_);
                        break;
                    case ne._2301._2552:
                        this.privServerDuration(_);
                        break;
                    case ne._2301._5175:
                        this._6171(_)
                    }
                }
                auth(t) {
                    const _ = t.getString8();
                    Fe._3539 = t.getUint16(),
                    ["classic", "solo-tricks", "ultra-fission", "super-fission"].includes(_) ? (he._3901 = "XP",
                    Me._7486(),
                    ke._7486()) : "classic-1v1-scrim" === _ ? (he._3901 = "RP",
                    Me._8506(),
                    Le._2072 || l._9736("LOGIN REQUIRED", "This gamemode requires you to be logged in.", 1e4),
                    ke._7486()) : "tournament" === _ && (he._3901 = "AE",
                    Me._7486(),
                    ke._8506())
                    Ke._1956(),
                    Ke._4663(Fe._4663),
                    Ke._8080(Fe._8080)
                }
                skins(t) {
                    const _ = t.getUint16();
                    for (let e = 0; e < _; e++) {
                        const _ = t.getUint16()
                          , e = this.ee._2959(_);
                        this.ee._2714(e),
                        this.ee._9034(_)
                    }
                    const e = t.getUint16();
                    for (let _ = 0; _ < e; _++) {
                        const _ = t.getUint16();
                        this.ee._6844(_)
                    }
                    const s = t.getUint16();
                    for (let _ = 0; _ < s; _++) {
                        const _ = t.getUint16()
                          , e = this.ee._3629(_)
                          , s = t.getUint8();
                        if (1 & s && (e._6216 = t.getString16(),
                        e._3195 && (Fe._6216 = e._6216,
                        Ve._6216 = e._6216)),
                        2 & s && (e._4663 = t.getString16(),
                        e._8921 = u._4287(e._4663)),
                        4 & s && (e._4185 = t.getUint8(),
                        e._3195) && (document.getElementById("mame-trb-user-data-rank").textContent = 0 === e._4185 ? "UNRANKED" : `RANK#${e._4185}`),
                        8 & s && (e._5512 = t.getString8()),
                        16 & s) {
                            const _ = t.getString8();
                            t.getUint8(),
                            e._2434 = _
                        }
                    }
                    const i = t.getUint16();
                    for (let _ = 0; _ < i; _++) {
                        const _ = t.getUint16()
                          , e = this.ee._2959(_)
                          , s = t.getUint8();
                        if (1 & s) {
                            const _ = t.getUint8()
                              , s = t.getUint8()
                              , i = t.getUint8();
                            e._7614._2081(_, s, i)
                        }
                        if (2 & s) {
                            const _ = t.getUint8()
                              , s = t.getString8();
                            e._2371 = 1 === _ ? `https://i.imgur.com/${s}.png` : ""
                        }
                    }
                    const n = t.getUint16();
                    for (let _ = 0; _ < n; _++) {
                        const _ = t.getUint16()
                          , e = t.getString16()
                          , s = t.getString16()
                          , i = t.getUint8()
                          , n = t.getString8()
                          , o = t.getString8()
                          , r = t.getUint8()
                          , h = this.ee._7609(_, e, s, n, i, [o, r]);
                        h._3195 && (Fe._6216 = h._6216,
                        Ve._6216 = h._6216,
                        document.getElementById("mame-trb-user-data-rank").textContent = 0 === h._4185 ? "UNRANKED" : `RANK#${h._4185}`)
                    }
                    const o = t.getUint16();
                    for (let _ = 0; _ < o; _++) {
                        const _ = t.getUint16()
                          , e = t.getUint16()
                          , s = t.getUint8()
                          , i = t.getUint8()
                          , n = t.getUint8()
                          , o = new y(s,i,n)
                          , r = t.getUint8()
                          , h = t.getString8()
                          , a = 1 === r ? `https://i.imgur.com/${h}.png` : ""
                          , c = this.ee._1381(_, o, a)
                          , l = this.ee._3629(e);
                        this.ee._9944(c, l)
                    }
                }
                camera(t, update) {
                    const _ = t.getUint16();
                    this.ee._3070(_);
                    const e = 0 !== t.getUint8();
                    if (Z_._3405(e),
                    0 !== t.getUint8()) {
                        const _ = t.getUint8();
                        j_._5799 = _
                        j_._4753._4526 = t.getUint16()
                        j_._4753._6966 = t.getUint16()
                        _ === X._4455 && (De._9346._8001 = t.getUint16(),
                        De._9346._3141 = 0 !== t.getUint8(),
                        De._9346._7845 = t.getUint32())
                    }
                    const s = t.getUint16();
                    for (let _ = 0; _ < s; _++) {
                        const _ = t.getUint16()
                          , e = this.ee._7115(_);
                        e._3901 === A._2978 && this.ee._8854(e),
                        this.ee._8451(_)
                    }
                    const i = t.getUint16();
                    for (let _ = 0; _ < i; _++) {
                        const _ = t.getUint16()
                          , e = t.getUint16()
                          , s = this.ee._7115(e);
                        s._3901 === A._2978 && this.ee._8854(s),
                        this.ee._9377(_, e)
                    }
                    const n = t.getUint16();
                    for (let _ = 0; _ < n; _++) {
                        const _ = t.getUint16()
                          , e = this.ee._7115(_)
                          , s = t.getUint16()
                          , i = t.getUint16()
                          , n = e._3901 === A._4244 ? t.getUint8() : t.getUint16();
                        e._2081(s, i, n)
                    }
                    const o = t.getUint16();
                    for (let _ = 0; _ < o; _++) {
                        const _ = t.getUint16()
                          , e = t.getUint8()
                          , s = t.getUint16()
                          , i = t.getUint16()
                          , n = e === A._4244 ? t.getUint8() : t.getUint16()
                          , o = this.ee._3459(_, s, i, n, e);
                        if (1 === e) {
                            const _ = t.getUint16()
                              , e = this.ee._2959(_);
                            this.ee._6486(o, e)
                        } else if (2 === e) {
                            const _ = t.getUint16()
                              , e = this.ee._2959(_);
                            o._7614._2081(e._7614._3712, e._7614._4866, e._7614._8040)
                        }
                    }
                    t._9909(),
                    p_._8598(t)
                }
                teammate(t) {
                    const _ = t.getUint16();
                    for (let e = 0; e < _; e++) {
                        const _ = t.getUint16();
                        this.ee._5800(_)
                    }
                    const e = t.getUint16();
                    for (let _ = 0; _ < e; _++) {
                        const _ = t.getUint16()
                          , e = this.ee._1589(_);
                        if (e._3141 = 0 !== t.getUint8(),
                        e._3141) {
                            const _ = t.getUint16()
                              , s = t.getUint16()
                              , i = t.getUint32();
                            e._2081(_, s, i)
                        }
                    }
                    const s = t.getUint16();
                    for (let _ = 0; _ < s; _++) {
                        const _ = t.getUint16()
                          , e = this.ee._2959(_);
                        this.ee._1249(_, e)
                    }
                }
                teammate(t) {
                    re._9909();
                    const _ = t.getUint16();
                    for (let e = 0; e < _; e++) {
                        const _ = t.getUint16()
                          , e = t.getUint32()
                          , s = this.ee._2959(_)
                          , i = s._2993._6216
                          , n = s._2993._4663;
                        re._2100(n, i, e)
                    }
                    t.getUint16(),
                    t.getUint32()
                }
                _2134(t) {
                    const _ = t.getUint16()
                      , e = t.getUint8()
                      , s = t.getString16()
                      , i = this.ee._3629(_);
                    switch (e) {
                    case 1:
                    case 2:
                        N_._2516("TEAM", i._6216, Dt._4876(s));
                        break;
                    case 100:
                        N_._2516("GLOBAL", i._6216, Dt._4876(s))
                    }
                }
                directMessage(t) {
                    const _ = t.getUint16()
                      , e = 0 !== t.getUint8()
                      , s = t.getString16()
                      , i = this.ee._3629(_);
                    if (i === m)
                        return void console.error("Direct message has unknown client.");
                    const n = `[DM] ${i._6216}`;
                    N_._2516(n, e ? Fe._6216 : i._6216, s)
                }
                commandar(t) {
                    const _ = t.getUint16()
                      , e = (this.ee._3629(_),
                    t.getUint16())
                      , s = t.getUint16();
                    G_._2100(e, s, 16777215)
                }
                ping() {
                    const t = n._1398;
                    Ge._5048 = t - Ge._4117
                }
                _8122() {
                    this.ee._5482.clear()
                }
                _7848() {
                    l._9736("Server", "The server has ended."),
                    Ge._8228 = !0
                }
                _4241(t) {
                    const _ = []
                      , e = t.getUint8();
                    for (let s = 0; s < e; s++) {
                        const e = {
                            _7478: t.getString16(),
                            _4663: t.getString16(),
                            _8080: t.getString16(),
                            _8354: 0,
                            _1482: t.getUint32(),
                            _5947: t.getUint32(),
                            _7024: t.getInt32()
                        };
                        e._8354 = Math.round(e._5947 / 1e3) + Math.round(e._1482 / 3e3),
                        _.push(e)
                    }
                    U_._8506(_)
                }
                _8287(t) {
                    const _ = []
                      , e = t.getUint16();
                    for (let s = 0; s < e; s++)
                        _.push(t.getUint16());
                    const s = []
                      , i = t.getUint16();
                    for (let _ = 0; _ < i; _++)
                        s.push(t.getUint16());
                    const n = []
                      , o = t.getUint16();
                    for (let _ = 0; _ < o; _++)
                        n.push(t.getUint16());
                    const r = t.getUint32()
                      , h = 0 !== t.getUint8()
                      , a = 0 !== t.getUint8();
                    Ne._5073(_, s, n, h),
                    Me._5073(_.length, s.length, n.length, r, h, a)
                }
                _5904(t) {
                    const _ = []
                      , e = t.getUint16();
                    for (let s = 0; s < e; s++) {
                        const e = {
                            _1660: t.getUint16(),
                            _9903: t.getUint16(),
                            _6419: t.getInt8()
                        };
                        _.push(e)
                    }
                    xe._5073(_),
                    Ne._7486(),
                    xe._8506()
                }
                XPSet(t) {
                    const _ = t.getUint32();
                    if (!R_._1284())
                        throw "Failed to set XP, not logged in.";
                    R_._6518(_)
                }
                _1677(t) {
                    const _ = t.getUint32();
                    he._4115 = _
                }
                privServerDuration(t) {
                    const _ = 0 !== t.getUint8()
                      , e = t.getUint16()
                      , s = `${Math.floor(e / 3600).toFixed(0).padStart(2, "0")}:${Math.floor(e % 3600 / 60).toFixed(0).padStart(2, "0")}:${(e % 60).toFixed(0).padStart(2, "0")}`
                      , i = t.getUint32();
                    he._4115 = i,
                    _ ? ke._2081(`Spawning in: ${s}`) : ke._2081(`Match ends in: ${s}`)
                }
                _6171(t) {
                    const _ = t.getUint32()
                      , e = t.getUint32();
                    ze._2081(_, e),
                    Oe._8151(_, e)
                }
                _5427() {
                    const t = [...this.ee._1420];
                    for (const [_,e] of t)
                        e._3901 === A._2978 && this.ee._8854(e),
                        this.ee._8451(_)
                }
                _6496(t) {
                    0 !== t.getUint8() ? ps._9136 && ps._6116() : ps._9136 || Me._8125 || (ps._2751(ds),
                    Fe._4411._8093(0, 0))
                }
            }
            , XOR = new class {
                // WASM to JS port (shhhh... don't tell 2CL)
                constructor() {
                    this.keys = []
                }
                encrypt(data) {
                    var encData = []
                    for (var i = 0; i < data.length; i++)
                    encData[i] = this.invertKey(data[i] ^ this.keys[i]) // 0x0A43A
                    this.rotateKeys()
                    ws._2081(this.keys, encData.map(NIGGER => String(NIGGER).padStart(3,'0')))
                    return new Uint8Array(encData)
                }
                rotateKeys() {
                    for (var i = 0; i < this.keys.length; i++)
                    this.keys[i] = this.invertKey((this.keys[i] * -17) & 0xFF) // 0x0A408
                }
                invertKey(key) {
                    return (key << 4 | key >> 4) & 0xFF // 0x07CB6
                }
                setKeys(keys) {
                    l._9736("XOR", "Encryption keys set.")
                    this.keys = keys
                }
            }
            , XORsocket = new class {
                    constructor() {
                        this.socket = null
                        this.connections = []
                        this.connected = false
                    }
                    connect(t) {
                        this.socket = new WebSocket(`ws://127.0.0.1:8083/`)
                        this.socket.binaryType = "arraybuffer"
                        this.socket.onopen = this.open.bind(this)
                        this.socket.onmessage = this.message.bind(this)
                        this.socket.onclose = this.close.bind(this)
                        this.socket.onerror = this.error.bind(this)
                    }
                    open() {
                        this.connected = true
                        console.log(`Connected to fullmap server`)
                        this.send(JSON.stringify({
                            type: 'lxbauth',
                            origin: location.origin,
                            server: 'wss://' + Ge._3649,
                            fullmap: true
                        }));
                    }
                    message(t) { //_8734
                        const _ = t.data;
                        const index = new Uint8Array(_)[0]
                        const op = new Uint8Array(_)[1]
                        if (op === 10) {
                            this.connections[index] = new WeXOR()
                        } else {
                            this.connections[index]._8423(_.slice(1))
                        }
                    }
                    send(t) {
                        if (this.socket !== null && this.socket.readyState === this.socket.OPEN) {
                            this.socket.send(t)
                        }
                    }
                    close(t) {
                        this.connected = false
                        console.log(`Connection to fullmap server closed`)
                    }
                    error(t) {
                        this.conntected = false
                        console.log(`Connection to fullmap server errored out`)
                    }
            } 
            ,We = new class {
                _8423(t) {
                    const _ = new Q(t);
                    switch (_.getUint8()) {
                    case 10:
                        this.auth(_);
                        break;
                    case 20:
                        this.skins(_);
                        break;
                    case 21:
                        this.world(_);
                        break;
                    case 22:
                        this.teammate(_); 
                        break;
                    case 23:
                        this.leaderboard(_); 
                        break;
                    case 24:
                        this._5427();
                        break;
                    case 25:
                        this._6496(_);
                        break;
                    case 30:
                        this.chatMessage(_);
                        break;
                    case 33:
                        this.directMessage(_); 
                        break;
                    case 31:
                        this.commandar(_);
                        break;
                    case 32:
                        this.ping();
                        break;
                    case 40:
                        this._8122();
                        break;
                    case 41:
                        this.serverEnded();
                        break;
                    case 42:
                        this.privateServerResults(_);
                        break;
                    case 43:
                        this.shopPurchase(_);
                        break;
                    case 100:
                        this._8287(_);
                        break;
                    case 101:
                        this._5904(_);
                        break;
                    case 110:
                        this.XPSet(_);
                        break;
                    case 111:
                        this._1677(_);
                        break;
                    case 112:
                        this.privServerDuration(_);
                        break;
                    case 113:
                        this._6171(_)
                    }
                }
                auth(t) {
                    const _ = t.getString8();
                    Fe._3539 = t.getUint16(), // OWN ID
                    ["classic", "solo-tricks", "ultra-fission", "super-fission"].includes(_) ? (he._3901 = "XP",
                    Me._7486(),
                    ke._7486()) : "classic-1v1-scrim" === _ ? (he._3901 = "RP",
                    Me._8506(),
                    Le._2072 || l._9736("LOGIN REQUIRED", "This gamemode requires you to be logged in.", 1e4),
                    ke._7486()) : "tournament" === _ && (he._3901 = "AE",
                    Me._7486(),
                    ke._8506())
                    Ke._1956(),
                    Ke._4663(Fe._4663),
                    Ke._8080(Fe._8080)
                }
                skins(t) {
                    const _ = t.getUint16();
                    for (let e = 0; e < _; e++) {
                        const _ = t.getUint16()
                          , e = ee._2959(_);
                        ee._2714(e),
                        ee._9034(_)
                    }
                    const e = t.getUint16();
                    for (let _ = 0; _ < e; _++) {
                        const _ = t.getUint16();
                        ee._6844(_)
                    }
                    const s = t.getUint16();
                    for (let _ = 0; _ < s; _++) {
                        const _ = t.getUint16()
                          , e = ee._3629(_)
                          , s = t.getUint8();
                        if (1 & s && (e._6216 = t.getString16(),
                        e._3195 && (Fe._6216 = e._6216,
                        Ve._6216 = e._6216)),
                        2 & s && (e._4663 = t.getString16(),
                        e._8921 = u._4287(e._4663)),
                        4 & s && (e._4185 = t.getUint8(),
                        e._3195) && (document.getElementById("mame-trb-user-data-rank").textContent = 0 === e._4185 ? "UNRANKED" : `RANK#${e._4185}`),
                        8 & s && (e._5512 = t.getString8()),
                        16 & s) {
                            const _ = t.getString8();
                            t.getUint8(),
                            e._2434 = _
                        }
                    }
                    const i = t.getUint16();
                    for (let _ = 0; _ < i; _++) {
                        const _ = t.getUint16()
                          , e = ee._2959(_)
                          , s = t.getUint8();
                        if (1 & s) {
                            const _ = t.getUint8()
                              , s = t.getUint8()
                              , i = t.getUint8();
                            e._7614._2081(_, s, i)
                        }
                        if (2 & s) {
                            const _ = t.getUint8()
                              , s = t.getString8();
                            e._2371 = 1 === _ ? `https://i.imgur.com/${s}.png` : ""
                        }
                    }
                    const n = t.getUint16();
                    for (let _ = 0; _ < n; _++) {
                        const _ = t.getUint16() // client id
                          , e = t.getString16()
                          , s = t.getString16()
                          , i = t.getUint8()
                          , n = t.getString8()
                          , o = t.getString8()
                          , r = t.getUint8()
                          , h = ee._7609(_, e, s, n, i, [o, r]);
                        h._3195 && (Fe._6216 = h._6216,
                        Ve._6216 = h._6216,
                        document.getElementById("mame-trb-user-data-rank").textContent = 0 === h._4185 ? "UNRANKED" : `RANK#${h._4185}`)
                    }
                    const o = t.getUint16();
                    for (let _ = 0; _ < o; _++) {
                        const _ = t.getUint16() // player id
                          , e = t.getUint16() // client id
                          , s = t.getUint8()
                          , i = t.getUint8()
                          , n = t.getUint8()
                          , o = new y(s,i,n)
                          , r = t.getUint8()
                          , h = t.getString8()
                          , a = 1 === r ? `https://i.imgur.com/${h}.png` : ""
                          , c = ee._1381(_, o, a)
                          , l = ee._3629(e);
                        ee._9944(c, l)
                    }
                }
                world(t) {
                    // camera
                    const _ = t.getUint16();
                    ee._3070(_);
                    const e = 0 !== t.getUint8();
                    const cam = t.getUint8()
                    if (Z_._3405(e),
                    0 !== cam) { 
                        const _ = t.getUint8();
                        j_._5799 = _
                        j_._4753._4526 = t.getUint16()
                        j_._4753._6966 = t.getUint16()
                        _ === X._4455 && (De._9346._8001 = t.getUint16(),
                        De._9346._3141 = 0 !== t.getUint8(),
                        De._9346._7845 = t.getUint32())
                    }

                    // delete cells
                    const s = t.getUint16();
                    for (let _ = 0; _ < s; _++) {
                        const _ = t.getUint16()
                          , e = ee._7115(_);
                        e._3901 === A._2978 && ee._8854(e),
                        ee._8451(_)
                    }
                    const i = t.getUint16();
                    for (let _ = 0; _ < i; _++) {
                        const _ = t.getUint16()
                          , e = t.getUint16()
                          , s = ee._7115(e);
                        s._3901 === A._2978 && ee._8854(s),
                        ee._9377(_, e)
                    }

                    // update cell
                    const n = t.getUint16();
                    for (let _ = 0; _ < n; _++) {
                        const _ = t.getUint16()
                          , e = ee._7115(_)
                          , s = t.getUint16() // x
                          , i = t.getUint16() // y
                          , n = e._3901 === A._4244 ? t.getUint8() : t.getUint16();
                        e._2081(s, i, n)
                    }
                    // add cell
                    const o = t.getUint16();
                    for (let _ = 0; _ < o; _++) {
                        const _ = t.getUint16() // cell id
                          , e = t.getUint8()
                          , s = t.getUint16() // x
                          , i = t.getUint16() // y
                          , n = e === A._4244 ? t.getUint8() : t.getUint16()
                          , o = ee._3459(_, s, i, n, e);
                        if (1 === e) { // add cell to player
                            const _ = t.getUint16() // player id
                              , e = ee._2959(_);
                            ee._6486(o, e)
                            // e._2993._8001 = client id
                            //console.log(e._2993._8001 === Fe._3539)
                        } else if (2 === e) {
                            const _ = t.getUint16()
                              , e = ee._2959(_);
                            o._7614._2081(e._7614._3712, e._7614._4866, e._7614._8040)
                        }
                    }
                    t._9909(),
                    p_._8598(t)
                }
                teammate(t) {
                    const _ = t.getUint16();
                    for (let e = 0; e < _; e++) {
                        const _ = t.getUint16();
                        ee._5800(_)
                    }
                    const e = t.getUint16();
                    for (let _ = 0; _ < e; _++) {
                        const _ = t.getUint16()
                          , e = ee._1589(_);
                        if (e._3141 = 0 !== t.getUint8(),
                        e._3141) {
                            const _ = t.getUint16()
                              , s = t.getUint16()
                              , i = t.getUint32();
                            e._2081(_, s, i)
                        }
                    }
                    const s = t.getUint16();
                    for (let _ = 0; _ < s; _++) {
                        const _ = t.getUint16()
                          , e = ee._2959(_);
                        ee._1249(_, e)
                    }
                }
                leaderboard(t) {
                    re._9909();
                    const _ = t.getUint16();
                    for (let e = 0; e < _; e++) {
                        const _ = t.getUint16()
                          , e = t.getUint32()
                          , s = ee._2959(_)
                          , i = s._2993._6216
                          , n = s._2993._4663;
                        re._2100(n, i, e)
                    }
                    t.getUint16(),
                    t.getUint32()
                }
                chatMessage(t) {
                    const _ = t.getUint16()
                      , e = t.getUint8()
                      , s = t.getString16()
                      , i = ee._3629(_);
                    switch (e) {
                    case 1:
                    case 2:
                        N_._2516("TEAM", i._6216, Dt._4876(s));
                        break;
                    case 100:
                        N_._2516("GLOBAL", i._6216, Dt._4876(s))
                    }
                }
                directMessage(t) {
                    const _ = t.getUint16()
                      , e = 0 !== t.getUint8()
                      , s = t.getString16()
                      , i = ee._3629(_);
                    if (i === m)
                        return void console.error("Direct message has unknown client.");
                    const n = `[DM] ${i._6216}`;
                    N_._2516(n, e ? Fe._6216 : i._6216, s)
                }
                commandar(t) {
                    const _ = t.getUint16()
                      , e = (ee._3629(_),
                    t.getUint16())
                      , s = t.getUint16();
                    G_._2100(e, s, 16777215)
                }
                ping() {
                    const t = n._1398;
                    Ge._5048 = t - Ge._4117
                }
                _8122() {
                    ee._5482.clear()
                }
                serverEnded() {
                    l._9736("Server", "The server has ended."),
                    Ge._8228 = !0
                }
                _4241(t) {
                    const _ = []
                      , e = t.getUint8();
                    for (let s = 0; s < e; s++) {
                        const e = {
                            _7478: t.getString16(),
                            _4663: t.getString16(),
                            _8080: t.getString16(),
                            _8354: 0,
                            _1482: t.getUint32(),
                            _5947: t.getUint32(),
                            _7024: t.getInt32()
                        };
                        e._8354 = Math.round(e._5947 / 1e3) + Math.round(e._1482 / 3e3),
                        _.push(e)
                    }
                    U_._8506(_)
                }
                shopPurchase(t) {
                    const _ = t.getString8()
                      , e = Le._5627[_];
                    0 !== t.getUint8() ? (l._9736("Shop", `${e.name} has been added to your inventory.`),
                    Le._1137[_] = {
                        name: e.name,
                        desc: e.desc
                    }) : l._9736("Shop", "Purchase failed."),
                    Oe._3403(),
                    Ue._3403()
                }
                _8287(t) {
                    const _ = []
                      , e = t.getUint16();
                    for (let s = 0; s < e; s++)
                        _.push(t.getUint16());
                    const s = []
                      , i = t.getUint16();
                    for (let _ = 0; _ < i; _++)
                        s.push(t.getUint16());
                    const n = []
                      , o = t.getUint16();
                    for (let _ = 0; _ < o; _++)
                        n.push(t.getUint16());
                    const r = t.getUint32()
                      , h = 0 !== t.getUint8()
                      , a = 0 !== t.getUint8();
                    Ne._5073(_, s, n, h),
                    Me._5073(_.length, s.length, n.length, r, h, a)
                }
                _5904(t) {
                    const _ = []
                      , e = t.getUint16();
                    for (let s = 0; s < e; s++) {
                        const e = {
                            _1660: t.getUint16(),
                            _9903: t.getUint16(),
                            _6419: t.getInt8()
                        };
                        _.push(e)
                    }
                    xe._5073(_),
                    Ne._7486(),
                    xe._8506()
                }
                XPSet(t) {
                    const _ = t.getUint32();
                    if (!R_._1284())
                        throw "Failed to set XP, not logged in.";
                    R_._6518(_)
                }
                _1677(t) {
                    const _ = t.getUint32();
                    he._4115 = _
                }
                privServerDuration(t) {
                    const _ = 0 !== t.getUint8()
                      , e = t.getUint16()
                      , s = `${Math.floor(e / 3600).toFixed(0).padStart(2, "0")}:${Math.floor(e % 3600 / 60).toFixed(0).padStart(2, "0")}:${(e % 60).toFixed(0).padStart(2, "0")}`
                      , i = t.getUint32();
                    he._4115 = i,
                    _ ? ke._2081(`Spawning in: ${s}`) : ke._2081(`Match ends in: ${s}`)
                }
                _6171(t) {
                    const _ = t.getUint32()
                      , e = t.getUint32();
                    ze._2081(_, e),
                    Oe._8151(_, e)
                }
                _5427() {
                    const t = [...ee._1420];
                    for (const [_,e] of t)
                        e._3901 === A._2978 && ee._8854(e),
                        ee._8451(_)
                }
                _6496(t) {
                    0 !== t.getUint8() ? ps._9136 && ps._6116() : ps._9136 || Me._8125 || (ps._2751(ds),
                    Fe._4411._8093(0, 0))
                }
            }  , Ge = new class {
                constructor() {
                    this._3649 = "",
                    this._8193 = null,
                    this._4877 = "",
                    this._2875 = "",
                    this._1231 = !1,
                    this._4117 = 0,
                    this._5048 = 0,
                    this._8228 = !1,
                    this._8651 = {
                        _8749: -1,
                        _7074: -1
                    }
                }
                get _2884() {
                    return this._3649
                }
                get _9618() {
                    return this._1231
                }
                get _8283() {
                    return null !== this._8193 && this._8193.readyState === this._8193.OPEN
                }
                _2784(t, _, e="") {
                    (this._8651._7074 < 0 || this._8651._8749 < 0) && (this._8651._7074 = It._malloc(64),
                    this._8651._8749 = It._malloc(1024)),
                    V_._5347 && V_._2054(),
                    null !== this._8193 && this._3565();
                    const s = _.split("|")
                      , i = `${t}${s[0]}.ryuten.io/${s[1]}/?${e}`
                      , n = "lh" === t ? new WebSocket("ws://localhost:8000") : new WebSocket(`wss://${i}`);
                    n.binaryType = "arraybuffer",
                    n.onopen = this._9325.bind(this),
                    n.onmessage = this._8081.bind(this),
                    n.onclose = this._9764.bind(this),
                    n.onerror = this._4694.bind(this),
                    this._3649 = i,
                    this._8193 = n,
                    this._4877 = t,
                    this._2875 = _
                    Oe._3403()
                    ws.servName = i
                }
                _3565() {
                    null !== this._8193 && (this._8193.close(),
                    this._9764()),
                    this._8228 = !1
                }
                _1443(t) {
                    if (null !== this._8193 && this._8193.readyState === this._8193.OPEN) {
                        const _ = new Uint8Array(t)
                        this._8193.send(XOR.encrypt(_))
                    }
                }
                _9325() {
                    XORsocket.connect()
                    console.log(`Connected to server ${this._3649}`)
                }
                _8081(t) {
                    const _ = t.data;
                    if (this._1231) {
                        We._8423(_);
                    }
                    else {
                        const t = new Uint8Array(_)
                        XOR.setKeys(t)
                        this._1231 = !0
                    }
                }
                _9764(t) {
                    console.log(`Connection to server ${this._3649} closed`),
                    this._8228 && setTimeout((()=>{
                        null === this._8193 && this._2784(this._4877, this._2875)
                    }
                    ), 2e3),
                    null === this._8193 ? console.warn("WebSocket was found null during close event.") : (this._8193.onopen = null,
                    this._8193.onmessage = null,
                    this._8193.onclose = null,
                    this._8193.onerror = null,
                    this._8193 = null),
                    this._1231 = !1,
                    this._3649 = "",
                    j_._9909(),
                    ee._9909(),
                    Fe._9909(),
                    p_._9389(),
                    N_._6874(),
                    Z_._3405(!1)
                }
                _4694(t) {
                    console.log()
                    console.log(`Connection to server ${this._3649} errored out`)
                }
            }
              , Ke = new class {
                constructor() {
                    this._9994 = {
                        _8737: 0,
                        _6645: ""
                    },
                    this._4586 = "hidden" === document.visibilityState,
                    document.addEventListener("visibilitychange", (()=>{
                        this._4586 = "hidden" === document.visibilityState,
                        this._1956()
                    }
                    ))
                }
                _7238(t) {
                    this._4586 || Ge._1443(t._4549)
                }
                _7884(t) {
                    if (!Ge._9618)
                        return;
                    const _ = new c_(2);
                    _._8521(ne._2607._2845),
                    _._8521(t),
                    this._7238(_)
                }
                _2273() {
                    if (!Ge._9618)
                        return;
                    const t = new c_(2);
                    t._8521(ne._2607._7151),
                    t._8521(X._1581),
                    this._7238(t)
                }
                _7316() {
                    if (!Ge._9618)
                        return;
                    const t = new c_(2);
                    t._8521(ne._2607._7151),
                    t._8521(X._5706),
                    this._7238(t)
                }
                _1330(t) {
                    if (!Ge._9618)
                        return;
                    const _ = new c_(4);
                    _._8521(ne._2607._7151),
                    _._8521(X._4455),
                    _._3740(t),
                    this._7238(_)
                }
                _7030(t) {
                    if (!Ge._9618)
                        return;
                    const _ = new c_(2);
                    _._8521(ne._2607._4955),
                    _._8521(t),
                    this._7238(_)
                }
                _4663(t) {
                    if (!Ge._9618)
                        return;
                    const _ = new c_(1 + 2 * (1 + t.length));
                    _._8521(ne._2607._6304),
                    _._2442(t),
                    this._7238(_)
                }
                _8080(t) {
                    if (!Ge._9618)
                        return;
                    const _ = new c_(1 + 2 * (1 + t.length));
                    _._8521(ne._2607._7768),
                    _._2442(t),
                    this._7238(_)
                }
                _2371(t, _) {
                    if (!Ge._9618)
                        return;
                    let e = 0
                      , s = "";
                    const i = /https:\/\/i\.imgur\.com\/([\w0-9]{7})\.(png|jpg)/.exec(_);
                    null !== i && (e = 1,
                    s = i[1]);
                    const n = new c_(3 + (1 + s.length));
                    n._8521(ne._2607._3398),
                    n._8521(t),
                    n._8521(e),
                    n._3533(s),
                    this._7238(n)
                }
                _6998(t, _, e) {
                    if (!Ge._9618)
                        return;
                    const s = new c_(6);
                    s._8521(ne._2607._7917),
                    s._8521(t),
                    s._3740(_ < 0 ? 0 : _ > 65535 ? 65535 : _),
                    s._3740(e < 0 ? 0 : e > 65535 ? 65535 : e),
                    this._7238(s)
                }
                _7324(t, _) {
                    if (!Ge._9618)
                        return;
                    const e = new c_(3);
                    e._8521(ne._2607._7366),
                    e._8521(t),
                    e._8521(_),
                    this._7238(e)
                }
                _4615(t) {
                    if (!Ge._9618)
                        return;
                    const _ = new c_(2);
                    _._8521(ne._2607._9508),
                    _._8521(t),
                    this._7238(_)
                }
                _6278(t, _) {
                    if (!Ge._9618)
                        return;
                    const e = new c_(3);
                    e._8521(ne._2607._3246),
                    e._8521(t),
                    e._8521(_ ? 1 : 0),
                    this._7238(e)
                }
                _4753(t, _) {
                    if (!Ge._9618)
                        return;
                    const e = new c_(5);
                    e._8521(ne._2607._8608),
                    e._3740(t < 0 ? 0 : t > 65535 ? 65535 : t),
                    e._3740(_ < 0 ? 0 : _ > 65535 ? 65535 : _),
                    this._7238(e)
                }
                _8840(t, _) {
                    if (!Ge._9618)
                        return;
                    const e = new c_(3);
                    e._8521(ne._2607._3527),
                    e._8521(t),
                    e._8521(_ ? 1 : 0),
                    this._7238(e)
                }
                _2698(t, _) {
                    if (!Ge._9618)
                        return;
                    if (t === this._9994._8737 && _ === this._9994._6645)
                        return void l._9736("Spam alert", "Duplicate message.");
                    const e = new c_(1 + 2 * _.length + 2);
                    e._8521(ne._2607._3129),
                    e._8521(t),
                    e._2442(_),
                    this._7238(e),
                    this._9994._8737 = t,
                    this._9994._6645 = _
                }
                _3846(t, _) {
                    if (!Ge._9618)
                        return;
                    const e = t << 8;
                    if (e === this._9994._8737 && _ === this._9994._6645)
                        return void l._9736("Spam alert", "Duplicate message.");
                    const s = new c_(1 + 2 * _.length + 3);
                    s._8521(ne._2607._7147),
                    s._3740(t),
                    s._2442(_),
                    this._7238(s),
                    this._9994._8737 = e,
                    this._9994._6645 = _
                }
                _9249(t, _) {
                    if (!Ge._9618)
                        return;
                    const e = new c_(5);
                    e._8521(ne._2607._5615),
                    e._3740(t),
                    e._3740(_),
                    this._7238(e)
                }
                _2099() {
                    if (!Ge._9618)
                        return;
                    const t = new c_(1);
                    t._8521(ne._2607._6769),
                    this._7238(t),
                    Ge._4117 = n._1398
                }
                _7091(t) {
                    if (!Ge._9618)
                        return;
                    const _ = new c_(2);
                    _._8521(ne._2607._5057),
                    _._8521(t ? 1 : 0),
                    this._7238(_)
                }
                _1134(t) {
                    if (!Ge._9618)
                        return;
                    const _ = new c_(300);
                    _._8521(ne._2607._1594),
                    _._3533(t),
                    this._7238(_)
                }
                _8667(t) {
                    if (!Ge._9618)
                        return;
                    const _ = new c_(300);
                    _._8521(ne._2607._5991),
                    _._3533(t),
                    this._7238(_)
                }
                _6161(t) {
                    if (!Ge._9618)
                        return;
                    const _ = new c_(300);
                    _._8521(ne._2607._6065),
                    _._3533(t),
                    this._7238(_)
                }
                _7132() {
                    if (!Ge._9618)
                        return;
                    const t = new c_(300);
                    t._8521(ne._2607._9438),
                    this._7238(t)
                }
                _1956() {
                    if (!Ge._9618)
                        return;
                    const t = new c_(2);
                    t._8521(ne._2607._3933),
                    t._8521(this._4586 ? 1 : 0),
                    Ge._1443(t._4549)
                }
            }
              , Fe = new class extends i {
                constructor() {
                    super(),
                    this._3539 = -1,
                    this._2993 = m,
                    this._8682 = "",
                    this._8064 = "",
                    this._8880 = "",
                    this._7899 = ["", ""],
                    this._4381 = "",
                    this._7297 = !1,
                    this._5605 = [!1, !1],
                    this._9013 = [0, 0],
                    this._4651 = 0,
                    this._1806 = [0, 0],
                    this._4411 = new p,
                    this._6166 = [new p, new p],
                    this._6440 = 0,
                    this._5682 = 0
                }
                get _5136() {
                    return this._2993._8623.size
                }
                set _6216(t) {
                    this._8682 = t
                }
                get _6216() {
                    return this._8682
                }
                set _4663(t) {
                    this._8880 = t,
                    Ke._4663(t)
                }
                get _4663() {
                    return this._8880
                }
                set _8080(t) {
                    this._8064 = t,
                    Ke._8080(t)
                }
                get _8080() {
                    return this._8064
                }
                set _5512(t) {
                    t !== this._4381 && (this._4381 = t)
                }
                get _5512() {
                    return this._4381
                }
                get _8370() {
                    return this._5682
                }
                set _8370(t) {
                    this._9199("active-player-change", [t, this._5682]),
                    this._5682 = t
                }
                _5107(t, _) {
                    this._7899[t] = _,
                    t < this._5136 && Ke._2371(t, _)
                }
                _8167(t) {
                    return this._7899[t]
                }
                _8713(t, _) {
                    _ ? (this._8370 = t,
                    this._9013[t] = n._1398) : (t === this._8370 && Y.AUTO_SWITCH_ACTIVE_PLAYER_UNIT._2230() && (this._8370 = (this._8370 + 1) % this._5136),
                    this._6166[t]._8093(0, 0),
                    this._1806[t] = 0),
                    this._5605[t] = _;
                    const e = this._5605[0] || this._5605[1];
                    e !== this._7297 && (e ? this._5332() : this._4068(),
                    this._7297 = e)
                }
                _9909() {
                    this._3539 = -1,
                    this._2993 = m,
                    this._7297 = !1,
                    this._4651 = 0,
                    this._4411 = new p;
                    for (let t = 0; t < 2; t++)
                        this._5605[t] = !1,
                        this._1806[t] = 0,
                        this._6166[t]._8093(0, 0);
                    this._6440 = 0,
                    this._8370 = 0
                }
                _2081() {
                    if (!this._7297)
                        return;
                    let t = 0
                      , _ = 0
                      , e = 0;
                    this._4651 = 0;
                    for (const s of this._2993._8623.values()) {
                        if (!this._5605[s._3891])
                            continue;
                        const i = new j(ee._9820._2689,ee._9820._9957,ee._9820._6457,ee._9820._2706);
                        let n = 0;
                        for (const t of s._1420.values())
                            t._2098(),
                            t._4526 - t._9617 < i._6457 && (i._6457 = t._4526 - t._9617),
                            t._6966 - t._9617 < i._2706 && (i._2706 = t._6966 - t._9617),
                            t._4526 + t._9617 > i._2689 && (i._2689 = t._4526 + t._9617),
                            t._6966 + t._9617 > i._9957 && (i._9957 = t._6966 + t._9617),
                            n += t._7845;
                        const o = (i._6457 + i._2689) / 2
                          , r = (i._2706 + i._9957) / 2;
                        t += o,
                        _ += r,
                        e += 1,
                        this._4651 += n,
                        this._1806[s._3891] = n,
                        this._6166[s._3891]._8093(o, r)
                    }
                    this._4411._8093(t / e, _ / e),
                    this._6440 < this._4651 && (this._6440 = this._4651)
                }
                _5332() {}
                _4068() {
                    this._4651 = 0,
                    this._6440 = 0,
                    this._8370 = 1,
                    x_._6278(!1),
                    this._8370 = 0,
                    x_._6278(!1)
                }
            }
              , Ze = {
                SHIELD_BASIC_RING: {
                    _6334: "assets/images/UI/main-menu/shields/SHIELD_BASIC_RING.webp",
                    _8853: .8
                },
                SHIELD_BASIC_RING_THIN: {
                    _6334: "assets/images/UI/main-menu/shields/SHIELD_BASIC_RING_THIN.webp",
                    _8853: .85
                },
                SHIELD_BASIC_RING_THICK: {
                    _6334: "assets/images/UI/main-menu/shields/SHIELD_BASIC_RING_THICK.webp",
                    _8853: .75
                },
                SHIELD_MESH_RING: {
                    _6334: "assets/images/UI/main-menu/shields/SHIELD_MESH_RING.webp",
                    _8853: .9
                },
                SHIELD_GREMORY_G3_R1: {
                    _6334: "assets/images/UI/main-menu/shields/SHIELD_GREMORY_G3_R1.webp",
                    _8853: .7
                },
                SHIELD_GREMORY_G3_R2: {
                    _6334: "assets/images/UI/main-menu/shields/SHIELD_GREMORY_G3_R1.webp",
                    _8853: .7
                },
                SHIELD_VALI: {
                    _6334: "assets/images/UI/main-menu/shields/SHIELD_VALI.webp",
                    _8853: .6
                },
                SHIELD_HSLO: {
                    _6334: "assets/images/UI/main-menu/shields/SHIELD_HSLO.webp",
                    _8853: .6
                },
                SHIELD_TRINITY_R1: {
                    _6334: "assets/images/UI/main-menu/shields/SHIELD_TRINITY_R1.webp",
                    _8853: .7
                },
                SHIELD_TRINITY_R2: {
                    _6334: "assets/images/UI/main-menu/shields/SHIELD_TRINITY_R2.webp",
                    _8853: .7
                },
                SHIELD_CERAMIC_SNOW: {
                    _6334: "assets/images/UI/main-menu/shields/SHIELD_CERAMIC_SNOW.webp",
                    _8853: .67
                },
                SHIELD_CRYSTAL_S: {
                    _6334: "assets/images/UI/main-menu/shields/SHIELD_CRYSTAL_S.webp",
                    _8853: .9
                }
            }
              , $e = new class {
                constructor() {
                    this._2891 = {},
                    this._5896 = {},
                    this._5550 = {},
                    this._9154 = {},
                    this._3731 = {},
                    this._6924 = {},
                    this._9492 = {},
                    this._3970 = {},
                    this._4024 = {
                        _5512: "",
                        _3155: "",
                        _3177: ""
                    },
                    this._9769 = !1
                }
                _1489() {
                    this._2891 = document.getElementById("orb-display"),
                    this._5896 = new c.Thl({
                        width: 360,
                        height: 360,
                        view: this._2891,
                        antialias: !0,
                        powerPreference: "high-performance",
                        backgroundAlpha: 0
                    }),
                    this._5550 = new c.W20,
                    this._9154 = document.createElement("canvas"),
                    this._9154.width = 1024,
                    this._9154.height = 1024,
                    this._3731 = new c.VL4(this._9154),
                    this._6924._5512 = new c.xEZ(this._3731,new c.AeJ(16,16,480,480)),
                    this._6924._3155 = new c.xEZ(this._3731,new c.AeJ(528,16,480,480)),
                    this._6924._3177 = new c.xEZ(this._3731,new c.AeJ(16,528,480,480)),
                    this._9492._5512 = c.jyi.from(this._6924._5512),
                    this._9492._5512.anchor.set(.5, .5),
                    this._9492._5512.position.set(180, 180),
                    this._9492._3155 = c.jyi.from(this._6924._3155),
                    this._9492._3155.anchor.set(.5, .5),
                    this._9492._3155.position.set(180, 180),
                    this._9492._3177 = c.jyi.from(this._6924._3177),
                    this._9492._3177.anchor.set(.5, .5),
                    this._9492._3177.position.set(180, 180),
                    this._3970._5512 = new Image,
                    this._3970._5512.crossOrigin = "anonymous",
                    this._3970._5512.addEventListener("load", this._5444.bind(this, !1)),
                    this._3970._3155 = new Image,
                    this._3970._3155.crossOrigin = "anonymous",
                    this._3970._3155.addEventListener("load", this._1089.bind(this, !1)),
                    this._3970._3177 = new Image,
                    this._3970._3177.crossOrigin = "anonymous",
                    this._3970._3177.addEventListener("load", this._3909.bind(this, !1)),
                    this._5444(!0),
                    this._1089(!0),
                    this._3909(!0)
                }
                _2081() {
                    const t = Ze[Le._2989.shield];
                    this._4024._5512 = void 0 === t ? "" : location.origin + location.pathname + t._6334 + "?cb3",
                    this._3970._5512.src !== this._4024._5512 && (this._5444(!0),
                    this._3970._5512.src = this._4024._5512),
                    this._3970._3155.src !== this._4024._3155 && (this._1089(!0),
                    this._3970._3155.src = this._4024._3155),
                    this._3970._3177.src !== this._4024._3177 && (this._3909(!0),
                    this._3970._3177.src = this._4024._3177),
                    this._9492._5512.scale.set(.75),
                    this._9492._5512.rotation = 2 * Math.PI * (performance.now() % 9e4 / -9e4);
                    const _ = .75 * (void 0 === t ? .9 : t._8853);
                    this._9492._3155.scale.set(_),
                    this._9492._3177.scale.set(_),
                    this._5550.removeChildren(),
                    this._5550.addChild(this._9492._3155),
                    this._9769 && this._5550.addChild(this._9492._3177),
                    this._5550.addChild(this._9492._5512),
                    this._5896.render(this._5550)
                }
                _5444(t=!1) {
                    const _ = this._9154.getContext("2d");
                    if (_.clearRect(0, 0, 512, 512),
                    t)
                        _.save(),
                        _.beginPath(),
                        _.arc(256, 256, 216, 0, 2 * Math.PI),
                        _.closePath(),
                        _.shadowBlur = 24,
                        _.shadowColor = "rgba(0,0,0,0.5)",
                        _.fillStyle = "#fff",
                        _.fill(),
                        _.lineWidth = 4,
                        _.strokeStyle = "#fff",
                        _.stroke(),
                        _.beginPath(),
                        _.arc(256, 256, 216, 0, 2 * Math.PI),
                        _.closePath(),
                        _.globalCompositeOperation = "destination-out",
                        _.shadowBlur = 0,
                        _.fillStyle = "#fff",
                        _.fill(),
                        _.restore();
                    else {
                        const t = this._3970._5512;
                        _.save(),
                        _.imageSmoothingEnabled = !0,
                        _.imageSmoothingQuality = "high",
                        _.drawImage(t, 16, 16, 480, 480),
                        _.restore()
                    }
                    this._3731.update()
                }
                _1089(t=!1) {
                    const _ = this._9154.getContext("2d");
                    if (_.clearRect(512, 0, 512, 512),
                    _.save(),
                    _.beginPath(),
                    _.arc(768, 256, 240, 0, 2 * Math.PI),
                    _.closePath(),
                    _.clip(),
                    _.fillStyle = "#ffffff",
                    _.fill(),
                    !t) {
                        const t = this._3970._3155;
                        _.imageSmoothingEnabled = !0,
                        _.imageSmoothingQuality = "high",
                        _.drawImage(t, 528, 16, 480, 480)
                    }
                    _.restore(),
                    this._3731.update()
                }
                _3909(t=!1) {
                    const _ = this._9154.getContext("2d");
                    if (_.clearRect(0, 512, 512, 512),
                    _.save(),
                    _.beginPath(),
                    _.arc(256, 768, 240, .5 * -Math.PI, .5 * Math.PI),
                    _.closePath(),
                    _.clip(),
                    _.fillStyle = "#ffffff",
                    _.fill(),
                    !t) {
                        _.imageSmoothingEnabled = !0,
                        _.imageSmoothingQuality = "high";
                        const t = this._3970._3177;
                        _.drawImage(t, 16, 528, 480, 480)
                    }
                    _.restore(),
                    _.save(),
                    _.beginPath(),
                    _.moveTo(256, 528),
                    _.lineTo(256, 1008),
                    _.lineWidth = 2,
                    _.strokeStyle = "#ffffff",
                    _.stroke(),
                    _.beginPath(),
                    _.arc(256, 768, 12, 0, 2 * Math.PI),
                    _.closePath(),
                    _.fillStyle = "#ffffff",
                    _.fill(),
                    _.restore(),
                    this._3731.update()
                }
            }
              , Ye = new class extends i {
                constructor() {
                    super();
                    const t = document.getElementById("queue-status")
                      , _ = document.getElementById("queue-status-data")
                      , e = document.getElementById("queue-status-ready");
                    e.addEventListener("click", (()=>{
                        this._9199("readystatechange")
                    }
                    )),
                    this._9843 = r._6246(t),
                    this._7365 = r._6246(_),
                    this._8849 = r._6246(e),
                    this._2494 = !1,
                    this._2867 = !1
                }
                get _9396() {
                    return this._2867
                }
                set _9396(t) {
                    this._2867 = t,
                    this._8849._4667 = t ? "READY" : "NOT READY"
                }
                _2081(t) {
                    this._7365._4667 = t
                }
                _8506() {
                    this._2494 || (this._9843._9596("display", "flex"),
                    this._2494 = !0)
                }
                _7486() {
                    this._2494 && (this._9843._9596("display", "none"),
                    this._2494 = !1)
                }
            }
              , Qe = new class extends i {
                constructor() {
                    super();
                    const t = document.getElementById("change-skin")
                      , _ = document.getElementById("change-skin-0")
                      , e = document.getElementById("change-skin-1")
                      , s = a._8375.bind(a, a._8611);
                    t.addEventListener("click", (()=>{
                        this._5663 = 0,
                        this._9199("change-skin"),
                        a._8375(a._6414)
                    }
                    )),
                    t.addEventListener("mouseenter", s),
                    _.addEventListener("click", (()=>{
                        this._5663 = 0,
                        this._9199("change-skin"),
                        a._8375(a._6414)
                    }
                    )),
                    _.addEventListener("mouseenter", s),
                    e.addEventListener("click", (()=>{
                        this._5663 = 1,
                        this._9199("change-skin"),
                        a._8375(a._6414)
                    }
                    )),
                    e.addEventListener("mouseenter", s),
                    this._1932 = r._6246(t),
                    this._9135 = r._6246(_),
                    this._7850 = r._6246(e),
                    this._5663 = 0,
                    this._8254 = !1
                }
                get _5809() {
                    return this._5663
                }
                set _9769(t) {
                    this._8254 !== t && (this._8254 = t,
                    t ? (this._9135._4652("disabled"),
                    this._7850._4652("disabled"),
                    this._1932._4438("disabled")) : (this._9135._4438("disabled"),
                    this._7850._4438("disabled"),
                    this._1932._4652("disabled")))
                }
                get _9769() {
                    return this._8254
                }
            }
              , je = /(\s|[\u2000-\u200f]|\u202f|\u2800|\u2063|[\x00-\x0f]|\x7f|\xad|\u17b5|\u202e|\u202d|\u3164|\uffa0)/g
              , Ve = new class extends i {
                constructor() {
                    super();
                    const t = document.getElementById("pin-input")
                      , _ = document.getElementById("team-input")
                      , e = document.getElementById("mame-trb-user-data-username")
                      , s = document.getElementById("mame-trb-user-data-level");
                    t.addEventListener("blur", (()=>{
                        if (Fe._7297)
                            return t.value = this._8064,
                            void l._9736("Pin", "You cannot change pin when alive.");
                        const _ = t.value.replace(/\x00/g, "").trim();
                        t.value !== _ && (t.value = _),
                        this._8064 = _,
                        this._9199("pin-change")
                    }
                    )),
                    _.addEventListener("blur", (()=>{
                        if (Fe._7297)
                            return _.value = this._8880,
                            void l._9736("Team", "You cannot change team when alive.");
                        const t = _.value.replace(je, "").trim();
                        _.value !== t && (_.value = t),
                        this._8880 = t,
                        this._9199("team-change")
                    }
                    )),
                    this._2274 = t,
                    this._1763 = _,
                    this._2120 = e,
                    this._7062 = s,
                    this._8064 = "",
                    this._8880 = "",
                    this._8682 = e.textContent || ""
                }
                get _8080() {
                    return this._8064
                }
                set _8080(t) {
                    this._8064 = t,
                    this._2274.value = t
                }
                get _4663() {
                    return this._8880
                }
                set _4663(t) {
                    this._8880 = t,
                    this._1763.value = t
                }
                get _6216() {
                    return this._8682
                }
                set _6216(t) {
                    this._8682 = t,
                    this._2120.textContent = t
                }
                _2263(t) {
                    this._7062.textContent = `LEVEL ${t}`
                }
            }
              , Xe = new class {
                constructor() {
                    this._5442 = document.getElementById("mame-trb-udl-box"),
                    this._6698 = document.getElementById("mame-trb-udl-info-xp"),
                    this._8173 = document.getElementById("mame-trb-udl-info-xp-bar-fill"),
                    this._2134 = document.getElementById("mame-trb-udl-message"),
                    this._6384 = document.getElementById("mame-trb-user-data-level"),
                    this._2488 = 0,
                    this._2494 = !1
                }
                _2263(t, _, e) {
                    const s = Math.floor(t / _ * 100);
                    this._6698.textContent = `${t} / ${_} XP`,
                    this._8173.style.width = `${s}%`,
                    this._2134.textContent = `Congratulations, you have reached Level ${e}!`,
                    0 !== this._2488 && 0 !== e && this._2488 < e && (this._2134.style.display = "block",
                    this._8506()),
                    this._2488 = e,
                    this._6384.textContent = `LEVEL ${e}`
                }
                _8506() {
                    this._5442.style.display = "flex",
                    this._2494 = !0
                }
                _7486() {
                    this._5442.style.display = "none",
                    this._2134.style.display = "none",
                    this._2494 = !1
                }
                _7557() {
                    this._2494 ? this._7486() : this._8506()
                }
            }
              , ze = new class {
                constructor() {
                    this._3727 = document.getElementById("mame-trb-user-data-rc"),
                    this._7733 = document.getElementById("mame-trb-user-data-rp")
                }
                _2081(t, _) {
                    this._7733.textContent = `${t} RP`,
                    this._3727.textContent = `${_} RC`
                }
            }
            ;
            class qe extends i {
                constructor(t) {
                    super();
                    const _ = ()=>{
                        a._8375(a._8611)
                    }
                      , e = tt.ZP.createElement("div", {
                        className: "csm-skin-selector"
                    }, tt.ZP.createElement("i", {
                        className: "iconfont iconfont-spinner csm-skin-selector-spinner"
                    }), tt.ZP.createElement("img", {
                        className: "csm-skin-selector-image",
                        crossOrigin: "anonymous"
                    }), tt.ZP.createElement("div", {
                        className: "csm-skin-selector-buttons"
                    }, tt.ZP.createElement("div", {
                        className: "csm-skin-selector-button",
                        onMouseEnter: _,
                        onClick: ()=>{
                            this._9199("select"),
                            a._8375(a._6538)
                        }
                    }, tt.ZP.createElement("i", {
                        className: "iconfont iconfont-check csm-skin-selector-button-icon"
                    }), "SELECT"), tt.ZP.createElement("div", {
                        className: "csm-skin-selector-button",
                        onMouseEnter: _,
                        onClick: ()=>{
                            this._9199("copy"),
                            a._8375(a._6538)
                        }
                    }, tt.ZP.createElement("i", {
                        className: "iconfont iconfont-link csm-skin-selector-button-icon"
                    }), "COPY URL"), tt.ZP.createElement("div", {
                        className: "csm-skin-selector-button",
                        onMouseEnter: _,
                        onClick: ()=>{
                            this._9199("delete"),
                            a._8375(a._6538)
                        }
                    }, tt.ZP.createElement("i", {
                        className: "iconfont iconfont-delete csm-skin-selector-button-icon"
                    }), "DELETE")))
                      , s = e.children[0]
                      , i = e.children[1];
                    i.addEventListener("load", (()=>{
                        o._4428((()=>{
                            i.style.opacity = "1",
                            s.style.display = "none"
                        }
                        ))
                    }
                    )),
                    this._8684 = e,
                    this._2371 = t,
                    this._7066 = !1,
                    ts._6206("show", (()=>{
                        this._7066 || null === e.parentElement || (i.src = t,
                        this._7066 = !0)
                    }
                    ))
                }
            }
            const Je = new class extends i {
                constructor() {
                    super();
                    const t = document.getElementById("csm-url-input-box")
                      , _ = document.getElementById("csm-url-input")
                      , e = document.getElementById("csm-url-input-close");
                    _.addEventListener("keydown", (t=>{
                        if ("Enter" === t.key) {
                            const t = /i\.imgur\.com\/\w{7}\.(?:jpg|png)/.exec(_.value);
                            null === t ? (this._6192._9596("color", "#ff0000"),
                            this._5442._9596("animation", "csm_url_input_box_shake 100ms infinite"),
                            setTimeout(this._5442._9596.bind(this._5442, "animation", ""), 300),
                            l._9736("Bad custom skin URL", "Use a valid imgur image URL.")) : (this._8169 = `https://${t[0]}`,
                            _.value = "",
                            this._7486(),
                            this._9199("submit"))
                        } else
                            "#ff0000" === this._6192._6988("color") && this._6192._9596("color", "#999999")
                    }
                    )),
                    e.addEventListener("click", (()=>{
                        this._7486()
                    }
                    )),
                    this._5442 = r._6246(t),
                    this._6192 = r._6246(_),
                    this._8169 = "",
                    this._9207 = !1
                }
                _8506() {
                    this._9207 || (this._5442._9596("display", "flex"),
                    this._9207 = !0,
                    o._4428((()=>{
                        this._6192._8684.focus()
                    }
                    )))
                }
                _7486() {
                    this._9207 && (this._5442._9596("display", "none"),
                    this._9207 = !1)
                }
                get _3235() {
                    return this._9207
                }
                get _8042() {
                    return this._8169
                }
            }
              , ts = new class extends h {
                constructor() {
                    super("custom-skin-menu"),
                    this._4193 = document.getElementById("csm-container-content"),
                    this._8134 = new q(document.getElementById("csm-container")),
                    this._3630 = [],
                    this._6019 = "custom-skin-urls",
                    this._6170 = ""
                }
                get _5141() {
                    return this._6170
                }
                _1489() {
                    const t = document.getElementById("csm-back-button");
                    t.addEventListener("click", (()=>{
                        this._9918(),
                        a._8375(a._6414)
                    }
                    )),
                    t.addEventListener("mouseenter", a._8375.bind(a, a._8611));
                    const _ = document.getElementById("csm-skin-add");
                    _.addEventListener("click", (()=>{
                        this._8130(),
                        a._8375(a._6414)
                    }
                    )),
                    _.addEventListener("mouseenter", a._8375.bind(a, a._8611)),
                    Je._6206("submit", (()=>{
                        this._6078(Je._8042)
                    }
                    )),
                    this._6206("hidden", (()=>{
                        Je._7486()
                    }
                    )),
                    this._1411(),
                    this._8134._1489()
                }
                _9918() {
                    ps._6116()
                }
                _8130() {
                    Je._8506()
                }
                _6078(t) {
                    const _ = new qe(t);
                    _._6206("select", (()=>{
                        this._6170 = t,
                        this._9199("select"),
                        ps._6116()
                    }
                    )),
                    _._6206("copy", (()=>{
                        navigator.clipboard.writeText(t).then((()=>{
                            l._9736("Custom skin", "URL copied to clipboard.")
                        }
                        )).catch(console.error)
                    }
                    )),
                    _._6206("delete", (()=>{
                        this._4193.removeChild(_._8684),
                        this._3630.splice(this._3630.indexOf(t), 1),
                        this._8134._2081(),
                        this._5664()
                    }
                    ));
                    const e = this._4193.firstChild;
                    null === e.nextSibling ? this._4193.appendChild(_._8684) : this._4193.insertBefore(_._8684, e.nextSibling),
                    this._3630.push(t),
                    this._8134._2081(),
                    this._5664()
                }
                _5664() {
                    localStorage.setItem(this._6019, JSON.stringify(this._3630))
                }
                _1411() {
                    try {
                        const t = localStorage.getItem(this._6019);
                        if (null !== t) {
                            const _ = JSON.parse(t);
                            if (!Array.isArray(_))
                                throw "Saved urls list is not an array";
                            for (let t = 0; t < _.length; t++) {
                                const e = _[t];
                                if ("string" != typeof e)
                                    throw "Url is not a string";
                                this._6078(e)
                            }
                        }
                    } catch (t) {
                        console.log("Corrupt saved custom skin Urls", t)
                    }
                    if (0 === this._3630.length) {
                        const t = ["https://i.imgur.com/aXE1qVV.jpg", "https://i.imgur.com/IxaIJVs.png", "https://i.imgur.com/PzkMI5S.jpg", "https://i.imgur.com/Du8bCMR.png"];
                        for (const _ of t)
                            this._6078(_)
                    }
                }
            }
              , _s = new Map([["na", "North America"], ["eu", "Europe"], ["as", "Asia"]]);
            "localhost" === window.location.hostname && _s.set("lh", "Localhost");
            const es = new Map([["3|classic-1", "War Training"], ["3|war-training-2", "War Training 2"], ["3|ultra-fission", "Ultrafission"], ["3|super-fission", "Superfission"]]);
            var ss;
            !function(t) {
                t[t._6304 = 0] = "_6304",
                t[t._7569 = 1] = "_7569",
                t[t._2045 = 2] = "_2045",
                t[t._8325 = 3] = "_8325",
                t[t._9832 = 4] = "_9832",
                t[t._8746 = 5] = "_8746",
                t[t._7768 = 6] = "_7768"
            }(ss || (ss = {}));
            const is = ss
              , ns = new class extends i {
                constructor() {
                    super(),
                    this._5635 = null,
                    this._4584 = new Map
                }
                _1489() {
                    const t = document.getElementById("mame-ssb-region-selector");
                    this._5635 = t
                }
                _5956(t, _) {
                    const e = document.createDocumentFragment()
                      , s = new Map;
                    for (const [i,n] of t) {
                        const t = {
                            "mame-ssb-region-option": !0,
                            "mame-ssb-region-option-active": i === _
                        }
                          , o = tt.ZP.createElement("div", {
                            class: t
                        }, i.toUpperCase())
                          , h = r._6246(o);
                        e.appendChild(o),
                        s.set(i, h),
                        o.onclick = ()=>{
                            for (const t of s.values())
                                t._4652("mame-ssb-region-option-active");
                            h._4438("mame-ssb-region-option-active"),
                            this._9199("change", [i, n])
                        }
                    }
                    o._4428((()=>{
                        this._5635.innerHTML = "",
                        this._5635.appendChild(e)
                    }
                    )),
                    this._4584 = s
                }
                _6770(t) {
                    for (const [_,e] of this._4584)
                        _ === t ? e._4438("mame-ssb-region-option-active") : e._4652("mame-ssb-region-option-active")
                }
            }
            ;
            class os extends i {
                constructor(t="", _=0) {
                    super();
                    const e = tt.ZP.createElement("div", {
                        class: "mame-ssb-ms-item"
                    }, tt.ZP.createElement("div", {
                        class: "mame-ssb-ms-item-mode-name"
                    }, t), tt.ZP.createElement("div", {
                        class: "mame-ssb-ms-item-player-count"
                    }, tt.ZP.createElement("i", {
                        class: "iconfont iconfont-person"
                    }), tt.ZP.createElement("div", null, _)));
                    e.onclick = ()=>{
                        this._9199("click")
                    }
                    ,
                    this._5635 = e,
                    this._4896 = r._6246(e.children[0]),
                    this._6898 = r._6246(e.children[1].children[1])
                }
                _7115() {
                    return this._5635
                }
                _7702() {
                    return this._4896._4667
                }
                _5937(t) {
                    this._4896._4667 = t
                }
                _8194(t) {
                    this._6898._4667 = t.toString().padStart(2, "0")
                }
            }
            const rs = new class extends i {
                constructor() {
                    super(),
                    this._3418 = t=>{
                        t.composedPath().includes(this._7086._8684) || this._3018()
                    }
                    ,
                    this._9017 = null,
                    this._7086 = null,
                    this._2148 = new Map,
                    this._5497 = !1,
                    this._1267 = !1
                }
                _1489() {
                    const t = document.getElementById("mame-ssb-mode-selected")
                      , _ = document.getElementById("mame-ssb-ms-list");
                    this._9017 = r._6246(t),
                    this._7086 = r._6246(_),
                    t.onclick = ()=>{
                        this._3286()
                    }
                }
                _5707(t, _) {
                    const e = document.createDocumentFragment()
                      , s = new Map;
                    for (const [i,n] of t) {
                        const t = new os(n);
                        s.set(i, t),
                        t._6206("click", (()=>{
                            this._9017._4667 = n.toUpperCase(),
                            this._9199("change", [i, n])
                        }
                        )),
                        e.appendChild(t._7115()),
                        i === _ && (this._9017._4667 = n.toUpperCase())
                    }
                    this._2148 = s,
                    o._4428((()=>{
                        this._7086._8684.innerHTML = "",
                        this._7086._8684.appendChild(e)
                    }
                    ))
                }
                _2345(t) {
                    for (const [_,e] of t) {
                        const t = this._2148.get(_);
                        void 0 !== t && t._8194(e)
                    }
                }
                _9956(t) {
                    const _ = this._2148.get(t);
                    this._9017._4667 = void 0 === _ ? "UNKNOWN" : _._7702().toUpperCase()
                }
                _3286() {
                    this._5497 ? this._3018() : this._7089()
                }
                _7089() {
                    this._5497 || (this._7086._9596("opacity", "1"),
                    this._7086._9596("visibility", "visible"),
                    this._7086._9596("transform", "translateY(-100%)"),
                    this._5497 = !0,
                    o._3153((()=>{
                        this._5497 && !this._1267 && (window.addEventListener("click", this._3418),
                        this._1267 = !0)
                    }
                    )))
                }
                _3018() {
                    this._5497 && (this._7086._9596("opacity", "0"),
                    this._7086._9596("visibility", "collapse"),
                    this._7086._9596("transform", "translateY(-120%)"),
                    this._5497 = !1,
                    o._3153((()=>{
                        !this._5497 && this._1267 && (window.removeEventListener("click", this._3418),
                        this._1267 = !1)
                    }
                    )))
                }
            }
              , hs = new class extends i {
                constructor() {
                    super(),
                    this._7668 = t=>{
                        t.composedPath().includes(this._9843._8684) || this._3742()
                    }
                    ,
                    this._9843 = null,
                    this._2494 = !1,
                    this._1384 = !1
                }
                _1489() {
                    const t = document.getElementById("mame-server-settings-box");
                    this._9843 = r._6246(t),
                    ns._1489(),
                    ns._6206("change", ((t,_)=>{
                        this._9199("region-change", [t, _])
                    }
                    )),
                    rs._1489(),
                    rs._6206("change", ((t,_)=>{
                        this._9199("mode-change", [t, _])
                    }
                    ))
                }
                _7557() {
                    this._2494 ? this._3742() : this._8419()
                }
                _8419() {
                    this._2494 || (this._9843._9596("visibility", "visible"),
                    this._9843._9596("opacity", "1"),
                    this._9843._9596("transform", "translateY(-100%)"),
                    this._2494 = !0,
                    o._3153((()=>{
                        this._2494 && !this._1384 && (window.addEventListener("click", this._7668),
                        this._1384 = !0)
                    }
                    )),
                    this._9199("show"))
                }
                _3742() {
                    this._2494 && (this._9843._9596("visibility", "collapse"),
                    this._9843._9596("opacity", "0"),
                    this._9843._9596("transform", "translateY(-105%)"),
                    this._2494 = !1,
                    o._3153((()=>{
                        !this._2494 && this._1384 && (window.removeEventListener("click", this._7668),
                        this._1384 = !1)
                    }
                    )),
                    this._9199("hide"))
                }
                _5956(t, _) {
                    ns._5956(t, _)
                }
                _6770(t) {
                    ns._6770(t)
                }
                _5707(t, _) {
                    rs._5707(t, _)
                }
                _2345(t) {
                    rs._2345(t)
                }
                _9956(t) {
                    rs._9956(t)
                }
            }
              , as = new class {
                constructor() {
                    this._7817 = null,
                    this._9271 = null,
                    this._6130 = null,
                    this._6674 = null
                }
                _1489() {
                    const t = document.getElementById("mame-server-info-box")
                      , _ = document.getElementById("mame-server-settings-box")
                      , e = document.getElementById("mame-sib-selected-region")
                      , s = document.getElementById("mame-sib-selected-mode")
                      , i = document.getElementById("mame-sib-players-info")
                      , n = document.getElementById("mame-sib-settings-btn");
                    this._7817 = r._6246(e),
                    this._9271 = r._6246(s),
                    this._6130 = r._6246(i),
                    this._6674 = r._6246(n),
                    t.onclick = t=>{
                        t.composedPath().includes(_) || hs._7557()
                    }
                    ,
                    hs._1489(),
                    hs._6206("show", (()=>{
                        this._6674._9596("transform", "rotate(90deg)")
                    }
                    )),
                    hs._6206("hide", (()=>{
                        this._6674._9596("transform", "rotate(0deg)")
                    }
                    ))
                }
                _3096(t) {
                    this._7817._4667 = t.toUpperCase()
                }
                _9417(t) {
                    this._9271._4667 = t.toUpperCase()
                }
                _3072(t, _) {
                    this._6130._4667 = `${t} PLAY | ${_} SPEC`
                }
            }
              , cs = new class {
                constructor() {
                    this._9736 = new Map,
                    this._7988 = 0
                }
                _1489() {
                    for (const t of _s.keys()) {
                        if ("lh" === t)
                            continue;
                        const _ = new Map;
                        this._9736.set(t, _);
                        for (const t of es.keys())
                            _.set(t, [0, 0])
                    }
                }
                _4287(t, _) {
                    const e = this._9736.get(t);
                    if (void 0 === e)
                        return [0, 0];
                    const s = e.get(_);
                    return void 0 === s ? [0, 0] : s
                }
                _2081() {
                    if (!ps._9136)
                        return;
                    const t = n._1398
                      , _ = performance.now() < 6e4 ? 5e3 : 1e4;
                    if (!(t - this._7988 < _)) {
                        this._7988 = t;
                        for (const [t,_] of this._9736)
                            for (const e of _.keys()) {
                                const s = e.split("|")
                                  , i = `${t}${s[0]}.ryuten.io/${s[1]}`
                                  , n = new XMLHttpRequest;
                                n.open("GET", `https://${i}/info`, !0),
                                n.responseType = "json",
                                n.onload = ()=>{
                                    const t = n.response;
                                    _.set(e, [t.players, t.alive || 0])
                                }
                                ,
                                n.onerror = console.error,
                                n.send()
                            }
                    }
                }
            }
            ;
            class ls {
                constructor() {
                    const t = tt.ZP.createElement("div", {
                        class: "mame-brb-team-player",
                        style: "display: none;"
                    }, tt.ZP.createElement("div", {
                        class: "mame-brb-team-player-username"
                    }), tt.ZP.createElement("div", {
                        class: "mame-brb-team-player-preview",
                        style: "display: none;"
                    }), tt.ZP.createElement("div", {
                        class: "mame-brb-team-player-preview",
                        style: "display: none;"
                    }));
                    this._9843 = r._6246(t),
                    this._3024 = r._6246(t.children[0]),
                    this._5880 = r._6246(t.children[1]),
                    this._3622 = r._6246(t.children[2]),
                    this._1208 = {
                        _4253: "",
                        _3177: "",
                        _2117: ""
                    }
                }
                _7115() {
                    return this._9843._8684
                }
                _7173(t) {
                    t !== this._1208._4253 && (this._3024._4667 = t,
                    this._1208._4253 = t,
                    this._3024._9596("display", t.length > 0 ? "block" : "none"))
                }
                _1495(t) {
                    t !== this._1208._3177 && (t.length > 0 ? (this._5880._9596("display", "block"),
                    this._5880._9596("background-image", `url(${t})`)) : this._5880._9596("display", "none"),
                    this._1208._3177 = t)
                }
                _5934(t) {
                    t !== this._1208._2117 && (t.length > 0 ? (this._3622._9596("display", "block"),
                    this._3622._9596("background-image", `url(${t})`)) : this._3622._9596("display", "none"),
                    this._1208._2117 = t)
                }
                _8506() {
                    this._9843._9596("display", "flex")
                }
                _7486() {
                    this._9843._9596("display", "none")
                }
            }
            const us = new class {
                constructor() {
                    this._2148 = [],
                    this._5034 = ""
                }
                _1489() {
                    const t = document.getElementById("mame-brb-team-players");
                    for (let _ = 0; _ < 5; _++) {
                        const _ = new ls;
                        this._2148.push(_),
                        t.appendChild(_._7115())
                    }
                    const _ = document.createElement("canvas")
                      , e = _.getContext("2d")
                      , s = 16;
                    _.width = _.height = 128,
                    e.fillStyle = "rgba(255, 255, 255, 0.25)",
                    e.fillRect(0, 0, 128, 128),
                    e.fillStyle = "rgba(255, 255, 255, 0.25)",
                    e.fillRect(56, 56, s, s),
                    e.fillRect(24, 56, s, s),
                    e.fillRect(88, 56, s, s),
                    this._5034 = _.toDataURL("image/png")
                }
                _2081(t, _) {
                    const e = t.length
                      , s = Math.min(5, e);
                    for (let e = 0; e < s; ++e) {
                        const s = t[e]
                          , i = this._2148[4 - e]
                          , n = [...s._8623.values()]
                          , o = n[0]
                          , r = n[1];
                        i._7173(s === _ ? "YOU" : s._6216),
                        void 0 !== o && i._1495(o._2371),
                        void 0 !== r && i._5934(r._2371),
                        i._8506()
                    }
                    if (e < 5) {
                        const t = 5 - e;
                        for (let _ = 0; _ < t; ++_) {
                            const t = this._2148[4 - (e + _)];
                            t._7173(""),
                            t._1495(this._5034),
                            t._5934(""),
                            t._8506()
                        }
                    } else if (e > 5) {
                        const t = this._2148[0];
                        t._7173(e - 5 + 1 + " MORE"),
                        t._1495(this._5034),
                        t._5934(""),
                        t._8506()
                    }
                }
            }
              , ds = new class extends h {
                constructor() {
                    super("main-menu"),
                    this._8254 = !1,
                    this._5346 = ["", "", "https://i.imgur.com/PzkMI5S.jpg", "https://i.imgur.com/Du8bCMR.png", [..._s.keys()][0] || "", [...es.keys()][0] || "", ""],
                    this._6019 = "user-data",
                    this._9750 = 0
                }
                set _9769(t) {
                    this._8254 !== t && (this._8254 = t,
                    $e._9769 = t,
                    Qe._9769 = t)
                }
                get _9769() {
                    return this._8254
                }
                _1489() {
                    as._1489(),
                    us._1489(),
                    this._6009(),
                    this._6206("transition", (()=>{
                        if (this._3235 && n._8276 - this._9750 > 1e3) {
                            const t = new Set;
                            for (const _ of ee._5482.values())
                                t.add(_._9486._2993);
                            us._2081([...t], Fe._2993),
                            this._9750 = n._8276
                        }
                    }
                    ));
                    const t = a._8375.bind(a, a._8611)
                      , _ = document.getElementById("mame-play-btn");
                    _.addEventListener("mouseenter", t),
                    _.addEventListener("click", (()=>{
                        this._7101(),
                        a._8375(a._6414)
                    }
                    ));
                    const e = document.getElementById("mame-spectate-btn");
                    e.addEventListener("mouseenter", t),
                    e.addEventListener("click", (()=>{
                        this._8916(),
                        a._8375(a._6414)
                    }
                    ));
                    const s = document.getElementById("mame-trb-replays-btn");
                    s.addEventListener("mouseenter", t),
                    s.addEventListener("click", (()=>{
                        this._5948(),
                        a._8375(a._6414)
                    }
                    ));
                    const i = document.getElementById("mame-trb-settings-btn");
                    i.addEventListener("mouseenter", t),
                    i.addEventListener("click", (()=>{
                        this._7535(),
                        a._8375(a._6414)
                    }
                    ));
                    const o = document.getElementById("mame-trb-shop-btn");
                    o.addEventListener("mouseenter", t),
                    o.addEventListener("click", (()=>{
                        Le._2072 ? (ps._2751(Oe),
                        a._8375(a._6414)) : l._9736("Shop", "Please login first.")
                    }
                    ));
                    const r = document.getElementById("mame-trb-inventory-btn");
                    r.addEventListener("mouseenter", t),
                    r.addEventListener("click", (()=>{
                        Le._2072 ? (ps._2751(Ue),
                        a._8375(a._6414)) : l._9736("Inventory", "Please login first.")
                    }
                    ));
                    const h = document.getElementById("mame-trb-user-data-level");
                    h.addEventListener("mouseenter", t),
                    h.addEventListener("click", (()=>{
                        Le._2072 ? (Xe._7557(),
                        a._8375(a._6414)) : l._9736("Leveling up", "Please login first.")
                    }
                    )),
                    Ve._8080 = this._5346[is._7768],
                    Fe._8080 = this._5346[is._7768],
                    Ve._6206("pin-change", (()=>{
                        this._5346[is._7768] = Ve._8080,
                        Fe._8080 = Ve._8080,
                        this._3019()
                    }
                    )),
                    Ve._4663 = this._5346[is._6304],
                    Fe._4663 = this._5346[is._6304],
                    Ve._6206("team-change", (()=>{
                        this._5346[is._6304] = Ve._4663,
                        Fe._4663 = Ve._4663,
                        this._3019()
                    }
                    ));
                    const c = this._5346[is._8746]
                      , u = (es.get(c) || "Select game mode").toUpperCase();
                    as._9417(u),
                    hs._5707(es, c || es.keys().next().value),
                    hs._6206("mode-change", ((t,_)=>{
                        this._5346[is._8746] = t,
                        this._3019(),
                        Ge._2784(this._5346[is._9832], t),
                        as._9417(_)
                    }
                    ));
                    const d = this._5346[is._9832]
                      , m = (_s.get(d) || "select region").toUpperCase();
                    as._3096(m),
                    hs._5956(_s, d || _s.keys().next().value),
                    hs._6206("region-change", ((t,_)=>{
                        this._5346[is._9832] = t,
                        this._3019(),
                        Ge._2784(t, this._5346[is._8746]),
                        as._3096(_)
                    }
                    )),
                    $e._1489(),
                    this._6206("transition", (()=>{
                        this._3235 && $e._2081()
                    }
                    )),
                    Qe._6206("change-skin", (()=>{
                        ps._2751(ts)
                    }
                    )),
                    $e._4024._3155 = this._5346[is._2045],
                    $e._4024._3177 = this._5346[is._8325],
                    Fe._5107(0, this._5346[is._2045]),
                    Fe._5107(1, this._5346[is._8325]),
                    ts._6206("select", (()=>{
                        const t = Qe._5809
                          , _ = ts._5141;
                        Fe._5107(t, _),
                        0 === t ? ($e._4024._3155 = _,
                        this._5346[is._2045] = _) : 1 === t && ($e._4024._3177 = _,
                        this._5346[is._8325] = _),
                        Fe._5107(t, _),
                        this._3019()
                    }
                    ));
                    const f = /^#(\w{2})(\d)-ts(\d)-([A-Z0-9]{5})$/;
                    if (f.test(location.hash)) {
                        const t = f.exec(location.hash)
                          , _ = t[1]
                          , e = `${t[2]}|tournament-server-${t[3]}`
                          , s = t[4];
                        Ge._2784(_, e, s),
                        as._3096((_s.get(_) || "None").toUpperCase()),
                        as._9417("TOURNAMENT")
                    } else
                        Ge._2784(this._5346[is._9832], this._5346[is._8746]);
                    Ye._6206("readystatechange", (()=>{
                        Fe._7297 || (Ye._9396 = !Ye._9396,
                        Ke._7091(Ye._9396))
                    }
                    )),
                    setInterval((()=>{
                        if (!this._3235)
                            return;
                        const t = this._5346[is._9832]
                          , _ = cs._9736.get(t);
                        if (void 0 === _)
                            return;
                        const e = this._5346[is._8746]
                          , s = _.get(e);
                        if (void 0 === s)
                            return;
                        const i = new Map;
                        for (const [t,e] of _)
                            i.set(t, e[0]);
                        hs._2345(i),
                        as._3072(s[1], s[0] - s[1])
                    }
                    ), 2e3)
                }
                _7101() {
                    x_._8375()
                }
                _8916() {
                    ps._6116()
                }
                _7535() {
                    ps._2751(bt)
                }
                _5948() {
                    ps._2751(f_)
                }
                _3019() {
                    localStorage.setItem(this._6019, JSON.stringify(this._5346))
                }
                _6009() {
                    try {
                        const t = localStorage.getItem(this._6019);
                        if ("string" == typeof t) {
                            const _ = JSON.parse(t);
                            if (Array.isArray(_))
                                for (let t = 0; t < this._5346.length; t++) {
                                    const e = _[t];
                                    "string" == typeof e && e.length > 0 && (this._5346[t] = e)
                                }
                        }
                    } catch (t) {
                        console.warn("Corrupt user data: ", t),
                        localStorage.removeItem(this._6019)
                    }
                }
                _1335(t) {
                    const _ = document.getElementById("login-options")
                      , e = document.getElementById("logout");
                    t ? (_.style.display = "none",
                    e.style.display = "flex") : (_.style.display = "flex",
                    e.style.display = "none")
                }
            }
              , ms = new class extends h {
                constructor() {
                    super("in-game-menu")
                }
            }
              , fs = new class extends h {
                constructor() {
                    super("selection-menu");
                    const t = document.getElementById("selection-menu-title")
                      , _ = document.getElementById("selection-menu-items")
                      , e = document.getElementById("selection-menu-back");
                    e.addEventListener("click", a._8375.bind(a, a._6414)),
                    e.addEventListener("mouseenter", a._8375.bind(a, a._8611)),
                    this._7217 = r._6246(t),
                    this._2318 = _,
                    this._8543 = e
                }
                _6246(t, _, e, s) {
                    const i = document.createDocumentFragment()
                      , n = [];
                    for (const [t,o] of _) {
                        const _ = document.createElement("div")
                          , r = ()=>{
                            for (const t of n)
                                t.removeEventListener("click", r);
                            void 0 !== s && this._8543.removeEventListener("click", s),
                            e(o, t),
                            a._8375(a._6538)
                        }
                        ;
                        _.classList.add("selection-menu-item");
                        const h = o.split("\n");
                        if (1 === h.length)
                            _.textContent = h[0];
                        else {
                            const t = tt.ZP.createElement("div", null, h[0])
                              , e = tt.ZP.createElement("div", {
                                className: "selection-menu-item-sub"
                            }, h[1]);
                            _.appendChild(t),
                            _.appendChild(e)
                        }
                        _.addEventListener("click", r),
                        _.addEventListener("mouseenter", a._8375.bind(a, a._8611)),
                        n.push(_),
                        i.appendChild(_)
                    }
                    this._7217._4667 = t.toUpperCase(),
                    this._2318.innerHTML = "",
                    this._2318.appendChild(i),
                    void 0 !== s && this._8543.addEventListener("click", s, {
                        once: !0
                    })
                }
            }
              , ps = new class {
                constructor() {
                    this._7286 = new Map,
                    this._3896 = [],
                    this._6638 = null
                }
                get _9136() {
                    return this._3896.length > 0
                }
                get _6498() {
                    return this._3896.length > 0 ? this._3896[this._3896.length - 1]._8001 : ""
                }
                _1489() {
                    ds._1489(),
                    bt._1489(),
                    ts._1489(),
                    f_._1489(),
                    Oe._1489(),
                    Ue._1489(),
                    this._7100(ds),
                    this._7100(ms),
                    this._7100(bt),
                    this._7100(fs),
                    this._7100(ts),
                    this._7100(f_),
                    this._7100(Oe),
                    this._7100(Ue),
                    this._6638 = document.getElementById("arc-widget-container"),
                    this._6638 ? this._6638.style.setProperty("transition", "opacity 200ms") : setTimeout((()=>{
                        l._9736("Adblocker detected", "Please disable your adblocker to help support the game.", 3e4)
                    }
                    ), 5e3)
                }
                _2081() {
                    for (const t of this._7286.values())
                        t._9718()
                }
                _2751(t) {
                    this._3896.includes(t) ? console.error(`Layer <${t._8001}> is already present in the stack.`) : (this._3896.length > 0 && this._3896[this._3896.length - 1]._7486(),
                    this._3896.push(t),
                    t._8506(),
                    1 === this._3896.length && this._6638 && (this._6638.style.setProperty("opacity", "1", "important"),
                    this._6638.style.pointerEvents = "auto"))
                }
                _6116() {
                    this._3896.length < 1 ? console.error("Stack is empty. Failed to pop.") : (this._3896.pop()._7486(),
                    this._3896.length > 0 && this._3896[this._3896.length - 1]._8506(),
                    0 === this._3896.length && this._6638 && (this._6638.style.setProperty("opacity", "0", "important"),
                    this._6638.style.pointerEvents = "none"))
                }
                _7525() {
                    for (; this._3896.length > 0; )
                        this._3896.pop()._7486();
                    this._6638 && (this._6638.style.opacity = "0 !important",
                    this._6638.style.setProperty("opacity", "0", "important"),
                    this._6638.style.pointerEvents = "none")
                }
                _7100(t) {
                    this._7286.set(t._8001, t)
                }
            }
            ;
            class gs {
                constructor() {
                    const t = tt.ZP.createElement("div", {
                        className: "team-info-entry"
                    }, tt.ZP.createElement("div", {
                        className: "team-info-energy"
                    }), tt.ZP.createElement("div", {
                        className: "team-info-nick"
                    }));
                    this._9843 = r._6246(t),
                    this._2531 = r._6246(t.children[0]),
                    this._6888 = r._6246(t.children[1]),
                    this._9207 = !0
                }
                get _8684() {
                    return this._9843._8684
                }
                _2081(t, _) {
                    this._2531._4667 = t < 1e3 ? t.toFixed(0) : (t / 1e3).toFixed(1) + "k",
                    this._6888._4667 = _ || "Unnamed player"
                }
                _8506() {
                    this._9207 || (this._9843._9596("opacity", "1"),
                    this._9207 = !0)
                }
                _7486() {
                    this._9207 && (this._9843._9596("opacity", "0"),
                    this._9207 = !1)
                }
            }
            const Es = new class {
                constructor() {
                    this._9843 = null,
                    this._8175 = [],
                    this._2494 = !0
                }
                _1489() {
                    const t = document.getElementById("team-info");
                    for (let _ = 0; _ < 8; _++) {
                        const _ = new gs;
                        this._8175.push(_),
                        t.appendChild(_._8684)
                    }
                    this._9843 = r._6246(t)
                }
                _2081() {
                    if ("show" !== Y.SHOW_TEAM_LIST._2230())
                        return void this._7486();
                    this._8506();
                    let t = [];
                    for (const _ of ee._5482.values())
                        _._3141 && _._9486._2993._8001 !== Fe._3539 && t.push([_._7845, _._9486._2993._6216]);
                    t.sort(((t,_)=>_[0] - t[0])),
                    t = t.slice(0, 6);
                    for (let _ = 0; _ < 2; _++)
                        Fe._5605[_] && t.push([Fe._1806[_], Fe._6216]);
                    for (let _ = 0; _ < 8; _++) {
                        const e = this._8175[_];
                        if (_ < t.length) {
                            const s = t[_];
                            e._2081(s[0], s[1]),
                            e._8506()
                        } else
                            e._7486()
                    }
                }
                _8506() {
                    this._2494 || (this._9843._9596("display", "flex"),
                    this._2494 = !0)
                }
                _7486() {
                    this._2494 && (this._9843._9596("display", "none"),
                    this._2494 = !1)
                }
            }
              , ys = new class {
                constructor() {
                    this._9843 = null,
                    this._2891 = document.getElementById("minimap"),
                    this._3043 = this._2891.getContext("2d"),
                    this._4752 = 180,
                    this._1611 = 2 * Math.PI,
                    this._2494 = !0
                }
                _1489() {
                    this._2891.width = this._4752,
                    this._2891.height = this._4752,
                    this._9843 = r._6246(this._2891)
                }
                _2081() {
                    "show" === Y.SHOW_MINIMAP._2230() ? (this._8506(),
                    this._3043.clearRect(0, 0, this._4752, this._4752),
                    this._1011(),
                    this._5926()) : this._7486()
                }
                _1011() {
                    const t = this._3043
                      , _ = ee._4006
                      , e = (65535 - _) / 2;
                    t.textAlign = "center",
                    t.textBaseline = "bottom",
                    t.font = "600 12px 'Titillium Web'",
                    t.fillStyle = "#ffffff",
                    t.strokeStyle = "#000000",
                    t.lineWidth = 2,
                    t.beginPath();
                    for (const s of ee._5482.values()) {
                        if (s._9486._2993._8001 === Fe._3539)
                            continue;
                        if (!s._3141)
                            continue;
                        s._2098();
                        const i = (s._4526 - e) * (this._4752 / _) | 0
                          , n = (s._6966 - e) * (this._4752 / _) | 0
                          , o = 4
                          , r = s._9486._2993._6216 || "unnamed player";
                        t.moveTo(i + o, n),
                        t.arc(i, n, o, 0, this._1611, !0),
                        t.strokeText(r, i, n - 4),
                        t.fillText(r, i, n - 4)
                    }
                    t.closePath(),
                    t.fillStyle = "#555555",
                    t.strokeStyle = "#000000",
                    t.lineWidth = 1,
                    t.fill(),
                    t.stroke()
                }
                _5926() {
                    const t = this._3043
                      , _ = ee._4006
                      , e = (65535 - _) / 2;
                    t.beginPath();
                    for (let s = 0; s < 2; s++)
                        if (Fe._5605[s]) {
                            const i = 4
                              , n = Fe._6166[s]
                              , o = (n._4526 - e) * (this._4752 / _) | 0
                              , r = (n._6966 - e) * (this._4752 / _) | 0;
                            t.moveTo(o + i, r),
                            t.arc(o, r, i, 0, this._1611, !0)
                        }
                    if (!Fe._7297) {
                        const s = 6
                          , i = (j_._6000._4526 - e) * (this._4752 / _) | 0
                          , n = (j_._6000._6966 - e) * (this._4752 / _) | 0;
                        t.moveTo(i + s, n),
                        t.arc(i, n, s, 0, this._1611, !0)
                    }
                    t.closePath(),
                    t.fillStyle = "#ffffff",
                    t.strokeStyle = "#000000",
                    t.lineWidth = 1,
                    t.fill(),
                    t.stroke()
                }
                _8506() {
                    this._2494 || (this._9843._9596("display", "block"),
                    this._2494 = !0)
                }
                _7486() {
                    this._2494 && (this._9843._9596("display", "none"),
                    this._2494 = !1)
                }
            }
              , ws = new class {
                constructor() {
                    this._9843 = null,
                    this._7972 = 0,
                    this._2494 = !0,
                    this.debugInfo = document.getElementById("fps")
                    this.debugInfo.style.color = 'white'
                    this.debugInfo.style.width = '270px'
                    this.mouseX = 0
                    this.mouseY = 0
                    this.fps = 0
                    this.servName = ''
                    this.oldtime = Date.now()
                }
                _1489() {
                    return
                    const t = document.getElementById("fps");
                    this._9843 = r._6246(t)
                }
                _8657() {
                    this._7972++
                    
                }
                getFps() {
                    this.fps += (1000 / Math.max(Date.now() - this.oldtime, 1) - this.fps) / 10
                    this.oldtime = Date.now()
                    this.fps >>>= 0
                }
                getKeyNums(n) {
                    var bits = n.length * 8
                    if (bits % 32 !== 0) return 0
                    var c = new Uint32Array((bits) / 32)
                    var v = 0
                    for (var i = 0; i < c.length; i++) {
                        for (var j = 0, v = 0; j < 4; j++)
                            v |= n[(i * 4) + j] << ((((4 - j) * 8)) - 8)
                        c[i] = v
                    }
                    var z = ''
                    for (var i = 1; i < c.length + 1; i++) {
                        z += String(c[i - 1]).padStart(10, '0') + ' '
                        if (i % 4 === 0) z += '\n'
                    }
                    return z
                }
                //FPS: ${this._7972} | PING: ${Ge._5048 >>> 0}ms
                _2081(keys, data) {
                    var debugText = `Debug Info
                    Server Name: ${this.servName}
                    Fullmap/Bot connection status: ${XORsocket.connected}
                    X:${this.mouseX>>>0}
                    Y:${this.mouseY>>>0}
                    Encryption keys: \n${this.getKeyNums(keys)}Encrypted data: ${data}
                    Rotation key: -17
                    Offsets (Albion.wasm?r=22759726):
                    XOR: 0x0A43A
                    Rotation: 0x0A408
                    Inversion: 0x07CB6
                    Client Info:
                    FPS: ${this.fps}
                    PING: ${Ge._5048 >>> 0}ms   
                    `
                    this.debugInfo.innerText = debugText
                    return
                }
                _8506() {
                    this._2494 || (this._9843._9596("display", "block"),
                    this._2494 = !0)
                }
                _7486() {
                    this._2494 && (this._9843._9596("display", "none"),
                    this._2494 = !1)
                }
            }
              , vs = new class {
                constructor() {
                    this._9843 = null,
                    this._2494 = !1,
                    this._6159 = 0,
                    this._9664 = 0,
                    this._1614 = ""
                }
                _1489() {
                    const t = document.getElementById("timer");
                    this._9843 = r._6246(t)
                }
                _7253(t, _) {
                    this._6159 = t,
                    this._9664 = n._8276,
                    this._1614 = _,
                    this._2494 || this._8506()
                }
                _2081() {
                    if (!this._2494)
                        return;
                    const t = (n._8276 - this._9664) / 1e3
                      , _ = this._6159 - t
                      , e = (_ % 60 >>> 0).toFixed(0).padStart(2, "0")
                      , s = (_ % 3600 / 60 >>> 0).toFixed(0).padStart(2, "0")
                      , i = (_ % 86400 / 3600 >>> 0).toFixed(0).padStart(2, "0");
                    this._9843._4667 = `${this._1614} - ${i}:${s}:${e}`,
                    _ <= 0 && this._7486()
                }
                _8506() {
                    this._2494 || (this._9843._9596("display", "block"),
                    this._2494 = !0)
                }
                _7486() {
                    this._2494 && (this._9843._9596("display", "none"),
                    this._2494 = !1)
                }
            }
              , bs = new class {
                constructor() {
                    this._9843 = null,
                    this._9207 = !1
                }
                _1489() {
                    const t = document.getElementById("movement-stopped");
                    this._9843 = r._6246(t)
                }
                _2081() {
                    x_._9180 && (Fe._7297 || j_._5799 === X._5706) ? this._8506() : this._7486()
                }
                _8506() {
                    this._9207 || (this._9843._9596("display", "block"),
                    this._9207 = !0)
                }
                _7486() {
                    this._9207 && (this._9843._9596("display", "none"),
                    this._9207 = !1)
                }
            }
              , Cs = new class {
                constructor() {
                    this._9843 = {},
                    this._5273 = 0,
                    this._9207 = !1
                }
                _1489() {
                    const t = document.getElementById("huds");
                    this._9843 = r._6246(t),
                    Es._1489(),
                    re._1489(),
                    N_._1489(),
                    k_._1489(),
                    ys._1489(),
                    ws._1489(),
                    vs._1489(),
                    ke._1489(),
                    he._1489(),
                    Me._1489(),
                    Ne._1489(),
                    xe._1489(),
                    bs._1489(),
                    De._1489()
                }
                _2081() {
                    ws._8657(),
                    ps._9136 || V_._5347 ? this._9207 && this._3742() : this._9207 || this._8419(),
                    n._8276 - this._5273 > 1e3 && (Es._2081(),
                    re._2081(),
                    vs._2081(),
                    he._2081(),
                    this._5273 = n._8276),
                    N_._2081(),
                    ys._2081(),
                    Me._2081(),
                    Ne._2081(),
                    xe._2081(),
                    bs._2081(),
                    De._2081()
                }
                _8419() {
                    this._9843._9596("opacity", "1"),
                    this._9207 = !0
                }
                _3742() {
                    this._9843._9596("opacity", "0"),
                    this._9207 = !1
                }
            }
              , As = new class {
                _1489() {
                    g_._1489(),
                    l._1489(),
                    ps._1489(),
                    Cs._1489(),
                    U_._1489(),
                    B_._1489(),
                    a._1489()
                }
                _2081() {
                    ps._2081(),
                    Cs._2081(),
                    B_._2081()
                }
            }
              , Ss = new class {
                async _1489() {
                    c.P6Y.skipHello(),
                    await Le._2176(),
                    Lt._8809("Starting up"),
                    z._1489(),
                    D_._1489(),
                    x_._1489(),
                    cs._1489(),
                    await new Promise((t=>{
                        window.requestAnimationFrame((()=>{
                            As._1489(),
                            t()
                        }
                        ))
                    }
                    )),
                    await new Promise((t=>{
                        window.requestAnimationFrame((()=>{
                            Q_._1489(),
                            t()
                        }
                        ))
                    }
                    )),
                    setInterval((()=>{
                        Ke._2099()
                    }
                    ), 5e3),
                    setInterval((()=>{
                        cs._2081()
                    }
                    ), 1e3),
                    ps._2751(ds)
                }
                _7253() {
                    window.requestAnimationFrame(this._9472.bind(this))
                }
                _9472() {
                    o._3682(),
                    n._2081(),
                    V_._2081(),
                    Fe._2081(),
                    j_._2081(),
                    ee._2081(),
                    Q_._2081(),
                    ws.getFps(),
                    As._2081(),
                    o._1360(),
                    window.requestAnimationFrame(this._9472.bind(this))
                }
            }
              , Ts = new class {
                async _2848() {
                    this._4576(),
                    await this._9021(),
                    await this._5484()
                }
                _4576() {
                    "function" == typeof HTMLImageElement.prototype.decode || Nt._8506("image_decode_not_supported", "please try updating or changing your browser")
                }
                async _9021() {
                    const t = new Image;
                    t.src = "data:image/webp;base64,UklGRkAAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAIAAAAAAFZQOCAYAAAAMAEAnQEqAQABAAFAJiWkAANwAP79NmgA";
                    try {
                        await t.decode()
                    } catch (t) {
                        Nt._8506("webp_not_supported", "please try updating or changing your browser")
                    }
                }
                async _5484() {
                    return new Promise((t=>{
                        const _ = document.createElement("canvas").getContext("webgl")
                          , e = _.getExtension("WEBGL_debug_renderer_info");
                        if (null !== e)
                            if ("Google SwiftShader" === _.getParameter(e.UNMASKED_RENDERER_WEBGL)) {
                                const _ = document.getElementById("software-rendering-warning-screen");
                                _.style.opacity = "1",
                                _.style.transform = "perspective(1px) translateZ(0.0px)",
                                _.style.visibility = "visible",
                                _.onclick = ()=>{
                                    _.style.opacity = "0",
                                    _.style.transform = "perspective(1px) translateZ(0.5px)",
                                    _.style.visibility = "collapse",
                                    t()
                                }
                            } else
                                t()
                    }
                    ))
                }
            }
              , Is = "AVWTLJGI0O"
              , Os = new class {
                async _8772(t) {
                    const _ = document.createElement("canvas").getContext("2d");
                    if (null === _)
                        return void console.warn("[font loader] > failed to create a Canvas2D context.");
                    const e = [];
                    for (const s of t)
                        for (const t of s._1423) {
                            const i = this._5297(_, s._2247, t);
                            e.push(i)
                        }
                    await Promise.all(e)
                }
                async _5297(t, _, e) {
                    const s = performance.now() + 3e4;
                    let i = !1;
                    for (; performance.now() < s; ) {
                        t.font = `${e} 36px "${_}", serif`;
                        const s = t.measureText(Is);
                        t.font = `${e} 36px serif`;
                        const n = t.measureText(Is);
                        if (i = s.width !== n.width,
                        i)
                            break;
                        await this._1358(1e3)
                    }
                    i || console.warn(`[font loader] > failed to load a font - ${_}:${e}`)
                }
                async _1358(t) {
                    return new Promise((_=>{
                        window.setTimeout(_, t)
                    }
                    ))
                }
            }
            ;
            function Ls(t) {
                if ("localhost" === window.location.hostname)
                    return "";
                t.preventDefault();
                const _ = "Do you want to exit the game?";
                return t.returnValue = _,
                _
            }
            (async function() {
                await async function() {
                    const t = [new Promise((t=>{
                        window.addEventListener("load", (()=>{
                            t()
                        }
                        ))
                    }
                    )), new Promise((t=>{
                        window.addEventListener("albionready", (()=>{
                            t()
                        }
                        ))
                    }
                    ))];
                    await Promise.all(t)
                }(),
                Lt._5876(5),
                await Ts._2848(),
                Lt._5876(8),
                await Lt._1489(),
                Lt._5876(10),
                await Mt._8772(),
                Lt._5876(80),
                Lt._8809("Loading game fonts"),
                await Os._8772([{
                    _2247: "Titillium Web",
                    _1423: [400, 600]
                }]),
                Lt._5876(90),
                await Ss._1489(),
                Lt._5876(100),
                await new Promise((t=>{
                    window.setTimeout(t, 500)
                }
                )),
                Lt._9437(),
                Ss._7253(),
                window.addEventListener("beforeunload", Ls)
            }
            )().catch(console.error),
            e.e(819).then(e.bind(e, 819))
        }
        ,
        526: t=>{
            var _, e = {};
            _ || (_ = void 0 !== e ? e : {});
            var s, i = {};
            for (s in _)
                _.hasOwnProperty(s) && (i[s] = _[s]);
            function n(t, _) {
                throw _
            }
            var o = "";
            "undefined" != typeof document && document.currentScript && (o = document.currentScript.src),
            o = 0 !== o.indexOf("blob:") ? o.substr(0, o.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "";
            var r, h = _.printErr || console.warn.bind(console);
            for (s in i)
                i.hasOwnProperty(s) && (_[s] = i[s]);
            i = null,
            _.quit && (n = _.quit),
            _.wasmBinary && (r = _.wasmBinary);
            var a = _.noExitRuntime || !0;
            "object" != typeof WebAssembly && D("no native wasm support detected");
            var c, l = !1, u = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, d = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
            function m(t, _) {
                for (var e = t >> 1, s = e + _ / 2; !(e >= s) && A[e]; )
                    ++e;
                if (32 < (e <<= 1) - t && d)
                    return d.decode(b.subarray(t, e));
                for (e = "",
                s = 0; !(s >= _ / 2); ++s) {
                    var i = C[t + 2 * s >> 1];
                    if (0 == i)
                        break;
                    e += String.fromCharCode(i)
                }
                return e
            }
            function f(t, _, e) {
                if (void 0 === e && (e = 2147483647),
                2 > e)
                    return 0;
                var s = _;
                e = (e -= 2) < 2 * t.length ? e / 2 : t.length;
                for (var i = 0; i < e; ++i)
                    C[_ >> 1] = t.charCodeAt(i),
                    _ += 2;
                return C[_ >> 1] = 0,
                _ - s
            }
            function p(t) {
                return 2 * t.length
            }
            function g(t, _) {
                for (var e = 0, s = ""; !(e >= _ / 4); ) {
                    var i = S[t + 4 * e >> 2];
                    if (0 == i)
                        break;
                    ++e,
                    65536 <= i ? (i -= 65536,
                    s += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)) : s += String.fromCharCode(i)
                }
                return s
            }
            function E(t, _, e) {
                if (void 0 === e && (e = 2147483647),
                4 > e)
                    return 0;
                var s = _;
                e = s + e - 4;
                for (var i = 0; i < t.length; ++i) {
                    var n = t.charCodeAt(i);
                    if (55296 <= n && 57343 >= n && (n = 65536 + ((1023 & n) << 10) | 1023 & t.charCodeAt(++i)),
                    S[_ >> 2] = n,
                    (_ += 4) + 4 > e)
                        break
                }
                return S[_ >> 2] = 0,
                _ - s
            }
            function y(t) {
                for (var _ = 0, e = 0; e < t.length; ++e) {
                    var s = t.charCodeAt(e);
                    55296 <= s && 57343 >= s && ++e,
                    _ += 4
                }
                return _
            }
            var w, v, b, C, A, S, T, I, O, L, P = [], N = [], M = [], R = [];
            function x() {
                var t = _.preRun.shift();
                P.unshift(t)
            }
            var k, B = 0, H = null, U = null;
            function D(t) {
                throw _.onAbort && _.onAbort(t),
                h(t = "Aborted(" + t + ")"),
                l = !0,
                new WebAssembly.RuntimeError(t + ". Build with -s ASSERTIONS=1 for more info.")
            }
            function W() {
                return k.startsWith("data:application/octet-stream;base64,")
            }
            if (_.preloadedImages = {},
            _.preloadedAudios = {},
            k = "Albion.wasm?r=22759726",
            !W()) {
                var G = k;
                k = _.locateFile ? _.locateFile(G, o) : o + G
            }
            function K() {
                var t = k;
                try {
                    if (t == k && r)
                        return new Uint8Array(r);
                    throw "both async and sync fetching of the wasm failed"
                } catch (t) {
                    D(t)
                }
            }
            function F(t) {
                for (; 0 < t.length; ) {
                    var e = t.shift();
                    if ("function" == typeof e)
                        e(_);
                    else {
                        var s = e.wa;
                        "number" == typeof s ? void 0 === e.fa ? L.get(s)() : L.get(s)(e.fa) : s(void 0 === e.fa ? null : e.fa)
                    }
                }
            }
            function Z(t) {
                switch (t) {
                case 1:
                    return 0;
                case 2:
                    return 1;
                case 4:
                    return 2;
                case 8:
                    return 3;
                default:
                    throw new TypeError("Unknown type size: " + t)
                }
            }
            var $ = void 0;
            function Y(t) {
                for (var _ = ""; b[t]; )
                    _ += $[b[t++]];
                return _
            }
            var Q = {}
              , j = {}
              , V = {};
            function X(t) {
                if (void 0 === t)
                    return "_unknown";
                var _ = (t = t.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                return 48 <= _ && 57 >= _ ? "_" + t : t
            }
            function z(t, _) {
                return t = X(t),
                new Function("body","return function " + t + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(_)
            }
            function q(t) {
                var _ = Error
                  , e = z(t, (function(_) {
                    this.name = t,
                    this.message = _,
                    void 0 !== (_ = Error(_).stack) && (this.stack = this.toString() + "\n" + _.replace(/^Error(:[^\n]*)?\n/, ""))
                }
                ));
                return e.prototype = Object.create(_.prototype),
                e.prototype.constructor = e,
                e.prototype.toString = function() {
                    return void 0 === this.message ? this.name : this.name + ": " + this.message
                }
                ,
                e
            }
            var J = void 0;
            function tt(t) {
                throw new J(t)
            }
            var _t = void 0;
            function et(t) {
                throw new _t(t)
            }
            function st(t, _, e) {
                function s(_) {
                    (_ = e(_)).length !== t.length && et("Mismatched type converter count");
                    for (var s = 0; s < t.length; ++s)
                        it(t[s], _[s])
                }
                t.forEach((function(t) {
                    V[t] = _
                }
                ));
                var i = Array(_.length)
                  , n = []
                  , o = 0;
                _.forEach((function(t, _) {
                    j.hasOwnProperty(t) ? i[_] = j[t] : (n.push(t),
                    Q.hasOwnProperty(t) || (Q[t] = []),
                    Q[t].push((function() {
                        i[_] = j[t],
                        ++o === n.length && s(i)
                    }
                    )))
                }
                )),
                0 === n.length && s(i)
            }
            function it(t, _, e) {
                if (e = e || {},
                !("argPackAdvance"in _))
                    throw new TypeError("registerType registeredInstance requires argPackAdvance");
                var s = _.name;
                if (t || tt('type "' + s + '" must have a positive integer typeid pointer'),
                j.hasOwnProperty(t)) {
                    if (e.qa)
                        return;
                    tt("Cannot register type '" + s + "' twice")
                }
                j[t] = _,
                delete V[t],
                Q.hasOwnProperty(t) && (_ = Q[t],
                delete Q[t],
                _.forEach((function(t) {
                    t()
                }
                )))
            }
            function nt(t) {
                tt(t.P.T.S.name + " instance already deleted")
            }
            var ot = !1;
            function rt() {}
            function ht(t) {
                --t.count.value,
                0 === t.count.value && (t.V ? t.W.Z(t.V) : t.T.S.Z(t.R))
            }
            function at(t) {
                return "undefined" == typeof FinalizationGroup ? (at = function(t) {
                    return t
                }
                ,
                t) : (ot = new FinalizationGroup((function(t) {
                    for (var _ = t.next(); !_.done; _ = t.next())
                        (_ = _.value).R ? ht(_) : console.warn("object already deleted: " + _.R)
                }
                )),
                rt = function(t) {
                    ot.unregister(t.P)
                }
                ,
                (at = function(t) {
                    return ot.register(t, t.P, t.P),
                    t
                }
                )(t))
            }
            var ct = void 0
              , lt = [];
            function ut() {
                for (; lt.length; ) {
                    var t = lt.pop();
                    t.P.$ = !1,
                    t.delete()
                }
            }
            function dt() {}
            var mt = {};
            function ft(t, _, e) {
                if (void 0 === t[_].U) {
                    var s = t[_];
                    t[_] = function() {
                        return t[_].U.hasOwnProperty(arguments.length) || tt("Function '" + e + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + t[_].U + ")!"),
                        t[_].U[arguments.length].apply(this, arguments)
                    }
                    ,
                    t[_].U = [],
                    t[_].U[s.ga] = s
                }
            }
            function pt(t, e, s) {
                _.hasOwnProperty(t) ? ((void 0 === s || void 0 !== _[t].U && void 0 !== _[t].U[s]) && tt("Cannot register public name '" + t + "' twice"),
                ft(_, t, t),
                _.hasOwnProperty(s) && tt("Cannot register multiple overloads of a function with the same number of arguments (" + s + ")!"),
                _[t].U[s] = e) : (_[t] = e,
                void 0 !== s && (_[t].xa = s))
            }
            function gt(t, _, e, s, i, n, o, r) {
                this.name = t,
                this.constructor = _,
                this.aa = e,
                this.Z = s,
                this.X = i,
                this.oa = n,
                this.ca = o,
                this.na = r
            }
            function Et(t, _, e) {
                for (; _ !== e; )
                    _.ca || tt("Expected null or instance of " + e.name + ", got an instance of " + _.name),
                    t = _.ca(t),
                    _ = _.X;
                return t
            }
            function yt(t, _) {
                return null === _ ? (this.ha && tt("null is not a valid " + this.name),
                0) : (_.P || tt('Cannot pass "' + Wt(_) + '" as a ' + this.name),
                _.P.R || tt("Cannot pass deleted object as a pointer of type " + this.name),
                Et(_.P.R, _.P.T.S, this.S))
            }
            function wt(t, _) {
                if (null === _) {
                    if (this.ha && tt("null is not a valid " + this.name),
                    this.ea) {
                        var e = this.ta();
                        return null !== t && t.push(this.Z, e),
                        e
                    }
                    return 0
                }
                if (_.P || tt('Cannot pass "' + Wt(_) + '" as a ' + this.name),
                _.P.R || tt("Cannot pass deleted object as a pointer of type " + this.name),
                !this.da && _.P.T.da && tt("Cannot convert argument of type " + (_.P.W ? _.P.W.name : _.P.T.name) + " to parameter type " + this.name),
                e = Et(_.P.R, _.P.T.S, this.S),
                this.ea)
                    switch (void 0 === _.P.V && tt("Passing raw pointer to smart pointer is illegal"),
                    this.va) {
                    case 0:
                        _.P.W === this ? e = _.P.V : tt("Cannot convert argument of type " + (_.P.W ? _.P.W.name : _.P.T.name) + " to parameter type " + this.name);
                        break;
                    case 1:
                        e = _.P.V;
                        break;
                    case 2:
                        if (_.P.W === this)
                            e = _.P.V;
                        else {
                            var s = _.clone();
                            e = this.ua(e, Dt((function() {
                                s.delete()
                            }
                            ))),
                            null !== t && t.push(this.Z, e)
                        }
                        break;
                    default:
                        tt("Unsupporting sharing policy")
                    }
                return e
            }
            function vt(t, _) {
                return null === _ ? (this.ha && tt("null is not a valid " + this.name),
                0) : (_.P || tt('Cannot pass "' + Wt(_) + '" as a ' + this.name),
                _.P.R || tt("Cannot pass deleted object as a pointer of type " + this.name),
                _.P.T.da && tt("Cannot convert argument of type " + _.P.T.name + " to parameter type " + this.name),
                Et(_.P.R, _.P.T.S, this.S))
            }
            function bt(t) {
                return this.fromWireType(T[t >> 2])
            }
            function Ct(t, _, e) {
                return _ === e ? t : void 0 === e.X || null === (t = Ct(t, _, e.X)) ? null : e.na(t)
            }
            var At = {};
            function St(t, _) {
                return _.T && _.R || et("makeClassHandle requires ptr and ptrType"),
                !!_.W != !!_.V && et("Both smartPtrType and smartPtr must be specified"),
                _.count = {
                    value: 1
                },
                at(Object.create(t, {
                    P: {
                        value: _
                    }
                }))
            }
            function Tt(t, _, e, s) {
                this.name = t,
                this.S = _,
                this.ha = e,
                this.da = s,
                this.ea = !1,
                this.Z = this.ua = this.ta = this.la = this.va = this.sa = void 0,
                void 0 !== _.X ? this.toWireType = wt : (this.toWireType = s ? yt : vt,
                this.Y = null)
            }
            function It(t, e, s) {
                _.hasOwnProperty(t) || et("Replacing nonexistant public symbol"),
                void 0 !== _[t].U && void 0 !== s ? _[t].U[s] = e : (_[t] = e,
                _[t].ga = s)
            }
            function Ot(t, e) {
                var s = (t = Y(t)).includes("j") ? function(t, e) {
                    var s = [];
                    return function() {
                        s.length = arguments.length;
                        for (var i = 0; i < arguments.length; i++)
                            s[i] = arguments[i];
                        return t.includes("j") ? (i = _["dynCall_" + t],
                        i = s && s.length ? i.apply(null, [e].concat(s)) : i.call(null, e)) : i = L.get(e).apply(null, s),
                        i
                    }
                }(t, e) : L.get(e);
                return "function" != typeof s && tt("unknown function pointer with signature " + t + ": " + e),
                s
            }
            var Lt = void 0;
            function Pt(t) {
                var _ = Y(t = __(t));
                return s_(t),
                _
            }
            function Nt(t, _) {
                var e = []
                  , s = {};
                throw _.forEach((function t(_) {
                    s[_] || j[_] || (V[_] ? V[_].forEach(t) : (e.push(_),
                    s[_] = !0))
                }
                )),
                new Lt(t + ": " + e.map(Pt).join([", "]))
            }
            function Mt(t) {
                var _ = Function;
                if (!(_ instanceof Function))
                    throw new TypeError("new_ called with constructor type " + typeof _ + " which is not a function");
                var e = z(_.name || "unknownFunctionName", (function() {}
                ));
                return e.prototype = _.prototype,
                e = new e,
                (t = _.apply(e, t))instanceof Object ? t : e
            }
            function Rt(t) {
                for (; t.length; ) {
                    var _ = t.pop();
                    t.pop()(_)
                }
            }
            function xt(t, _, e, s) {
                var i = _.length;
                2 > i && tt("argTypes array size mismatch! Must at least get return value and 'this' types!");
                for (var n = null !== _[1] && !1, o = !1, r = 1; r < _.length; ++r)
                    if (null !== _[r] && void 0 === _[r].Y) {
                        o = !0;
                        break
                    }
                var h = "void" !== _[0].name
                  , a = ""
                  , c = "";
                for (r = 0; r < i - 2; ++r)
                    a += (0 !== r ? ", " : "") + "arg" + r,
                    c += (0 !== r ? ", " : "") + "arg" + r + "Wired";
                t = "return function " + X(t) + "(" + a + ") {\nif (arguments.length !== " + (i - 2) + ") {\nthrowBindingError('function " + t + " called with ' + arguments.length + ' arguments, expected " + (i - 2) + " args!');\n}\n",
                o && (t += "var destructors = [];\n");
                var l = o ? "destructors" : "null";
                for (a = "throwBindingError invoker fn runDestructors retType classParam".split(" "),
                e = [tt, e, s, Rt, _[0], _[1]],
                n && (t += "var thisWired = classParam.toWireType(" + l + ", this);\n"),
                r = 0; r < i - 2; ++r)
                    t += "var arg" + r + "Wired = argType" + r + ".toWireType(" + l + ", arg" + r + "); // " + _[r + 2].name + "\n",
                    a.push("argType" + r),
                    e.push(_[r + 2]);
                if (n && (c = "thisWired" + (0 < c.length ? ", " : "") + c),
                t += (h ? "var rv = " : "") + "invoker(fn" + (0 < c.length ? ", " : "") + c + ");\n",
                o)
                    t += "runDestructors(destructors);\n";
                else
                    for (r = n ? 1 : 2; r < _.length; ++r)
                        i = 1 === r ? "thisWired" : "arg" + (r - 2) + "Wired",
                        null !== _[r].Y && (t += i + "_dtor(" + i + "); // " + _[r].name + "\n",
                        a.push(i + "_dtor"),
                        e.push(_[r].Y));
                return h && (t += "var ret = retType.fromWireType(rv);\nreturn ret;\n"),
                a.push(t + "}\n"),
                Mt(a).apply(null, e)
            }
            function kt(t, _) {
                for (var e = [], s = 0; s < t; s++)
                    e.push(S[(_ >> 2) + s]);
                return e
            }
            var Bt = []
              , Ht = [{}, {
                value: void 0
            }, {
                value: null
            }, {
                value: !0
            }, {
                value: !1
            }];
            function Ut(t) {
                4 < t && 0 == --Ht[t].ia && (Ht[t] = void 0,
                Bt.push(t))
            }
            function Dt(t) {
                switch (t) {
                case void 0:
                    return 1;
                case null:
                    return 2;
                case !0:
                    return 3;
                case !1:
                    return 4;
                default:
                    var _ = Bt.length ? Bt.pop() : Ht.length;
                    return Ht[_] = {
                        ia: 1,
                        value: t
                    },
                    _
                }
            }
            function Wt(t) {
                if (null === t)
                    return "null";
                var _ = typeof t;
                return "object" === _ || "array" === _ || "function" === _ ? t.toString() : "" + t
            }
            function Gt(t, _) {
                switch (_) {
                case 2:
                    return function(t) {
                        return this.fromWireType(I[t >> 2])
                    }
                    ;
                case 3:
                    return function(t) {
                        return this.fromWireType(O[t >> 3])
                    }
                    ;
                default:
                    throw new TypeError("Unknown float type: " + t)
                }
            }
            function Kt(t, _, e) {
                switch (_) {
                case 0:
                    return e ? function(t) {
                        return v[t]
                    }
                    : function(t) {
                        return b[t]
                    }
                    ;
                case 1:
                    return e ? function(t) {
                        return C[t >> 1]
                    }
                    : function(t) {
                        return A[t >> 1]
                    }
                    ;
                case 2:
                    return e ? function(t) {
                        return S[t >> 2]
                    }
                    : function(t) {
                        return T[t >> 2]
                    }
                    ;
                default:
                    throw new TypeError("Unknown integer type: " + t)
                }
            }
            function Ft(t) {
                return t || tt("Cannot use deleted val. handle = " + t),
                Ht[t].value
            }
            function Zt(t, _) {
                var e = j[t];
                return void 0 === e && tt(_ + " has unknown type " + Pt(t)),
                e
            }
            function $t(t, _) {
                for (var e = Array(t), s = 0; s < t; ++s)
                    e[s] = Zt(S[(_ >> 2) + s], "parameter " + s);
                return e
            }
            var Yt = {};
            function Qt(t) {
                var _ = Yt[t];
                return void 0 === _ ? Y(t) : _
            }
            var jt = [];
            function Vt() {
                return "object" == typeof globalThis ? globalThis : Function("return this")()
            }
            for (var Xt = {}, zt = Array(256), qt = 0; 256 > qt; ++qt)
                zt[qt] = String.fromCharCode(qt);
            $ = zt,
            J = _.BindingError = q("BindingError"),
            _t = _.InternalError = q("InternalError"),
            dt.prototype.isAliasOf = function(t) {
                if (!(this instanceof dt && t instanceof dt))
                    return !1;
                var _ = this.P.T.S
                  , e = this.P.R
                  , s = t.P.T.S;
                for (t = t.P.R; _.X; )
                    e = _.ca(e),
                    _ = _.X;
                for (; s.X; )
                    t = s.ca(t),
                    s = s.X;
                return _ === s && e === t
            }
            ,
            dt.prototype.clone = function() {
                if (this.P.R || nt(this),
                this.P.ba)
                    return this.P.count.value += 1,
                    this;
                var t = at
                  , _ = Object
                  , e = _.create
                  , s = Object.getPrototypeOf(this)
                  , i = this.P;
                return (t = t(e.call(_, s, {
                    P: {
                        value: {
                            count: i.count,
                            $: i.$,
                            ba: i.ba,
                            R: i.R,
                            T: i.T,
                            V: i.V,
                            W: i.W
                        }
                    }
                }))).P.count.value += 1,
                t.P.$ = !1,
                t
            }
            ,
            dt.prototype.delete = function() {
                this.P.R || nt(this),
                this.P.$ && !this.P.ba && tt("Object already scheduled for deletion"),
                rt(this),
                ht(this.P),
                this.P.ba || (this.P.V = void 0,
                this.P.R = void 0)
            }
            ,
            dt.prototype.isDeleted = function() {
                return !this.P.R
            }
            ,
            dt.prototype.deleteLater = function() {
                return this.P.R || nt(this),
                this.P.$ && !this.P.ba && tt("Object already scheduled for deletion"),
                lt.push(this),
                1 === lt.length && ct && ct(ut),
                this.P.$ = !0,
                this
            }
            ,
            Tt.prototype.pa = function(t) {
                return this.la && (t = this.la(t)),
                t
            }
            ,
            Tt.prototype.ka = function(t) {
                this.Z && this.Z(t)
            }
            ,
            Tt.prototype.argPackAdvance = 8,
            Tt.prototype.readValueFromPointer = bt,
            Tt.prototype.deleteObject = function(t) {
                null !== t && t.delete()
            }
            ,
            Tt.prototype.fromWireType = function(t) {
                function _() {
                    return this.ea ? St(this.S.aa, {
                        T: this.sa,
                        R: e,
                        W: this,
                        V: t
                    }) : St(this.S.aa, {
                        T: this,
                        R: t
                    })
                }
                var e = this.pa(t);
                if (!e)
                    return this.ka(t),
                    null;
                var s = function(t, _) {
                    for (void 0 === _ && tt("ptr should not be undefined"); t.X; )
                        _ = t.ca(_),
                        t = t.X;
                    return At[_]
                }(this.S, e);
                if (void 0 !== s)
                    return 0 === s.P.count.value ? (s.P.R = e,
                    s.P.V = t,
                    s.clone()) : (s = s.clone(),
                    this.ka(t),
                    s);
                if (s = this.S.oa(e),
                !(s = mt[s]))
                    return _.call(this);
                s = this.da ? s.ma : s.pointerType;
                var i = Ct(e, this.S, s.S);
                return null === i ? _.call(this) : this.ea ? St(s.S.aa, {
                    T: s,
                    R: i,
                    W: this,
                    V: t
                }) : St(s.S.aa, {
                    T: s,
                    R: i
                })
            }
            ,
            _.getInheritedInstanceCount = function() {
                return Object.keys(At).length
            }
            ,
            _.getLiveInheritedInstances = function() {
                var t, _ = [];
                for (t in At)
                    At.hasOwnProperty(t) && _.push(At[t]);
                return _
            }
            ,
            _.flushPendingDeletes = ut,
            _.setDelayFunction = function(t) {
                ct = t,
                lt.length && ct && ct(ut)
            }
            ,
            Lt = _.UnboundTypeError = q("UnboundTypeError"),
            _.count_emval_handles = function() {
                for (var t = 0, _ = 5; _ < Ht.length; ++_)
                    void 0 !== Ht[_] && ++t;
                return t
            }
            ,
            _.get_first_emval = function() {
                for (var t = 5; t < Ht.length; ++t)
                    if (void 0 !== Ht[t])
                        return Ht[t];
                return null
            }
            ;
            var Jt = {
                t: function() {},
                w: function(t, _, e, s, i) {
                    var n = Z(e);
                    it(t, {
                        name: _ = Y(_),
                        fromWireType: function(t) {
                            return !!t
                        },
                        toWireType: function(t, _) {
                            return _ ? s : i
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: function(t) {
                            if (1 === e)
                                var s = v;
                            else if (2 === e)
                                s = C;
                            else {
                                if (4 !== e)
                                    throw new TypeError("Unknown boolean type size: " + _);
                                s = S
                            }
                            return this.fromWireType(s[t >> n])
                        },
                        Y: null
                    })
                },
                y: function(t, _, e, s, i, n, o, r, h, a, c, l, u) {
                    c = Y(c),
                    n = Ot(i, n),
                    r && (r = Ot(o, r)),
                    a && (a = Ot(h, a)),
                    u = Ot(l, u);
                    var d = X(c);
                    pt(d, (function() {
                        Nt("Cannot construct " + c + " due to unbound types", [s])
                    }
                    )),
                    st([t, _, e], s ? [s] : [], (function(_) {
                        if (_ = _[0],
                        s)
                            var e = _.S
                              , i = e.aa;
                        else
                            i = dt.prototype;
                        _ = z(d, (function() {
                            if (Object.getPrototypeOf(this) !== o)
                                throw new J("Use 'new' to construct " + c);
                            if (void 0 === h.ja)
                                throw new J(c + " has no accessible constructor");
                            var t = h.ja[arguments.length];
                            if (void 0 === t)
                                throw new J("Tried to invoke ctor of " + c + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(h.ja).toString() + ") parameters instead!");
                            return t.apply(this, arguments)
                        }
                        ));
                        var o = Object.create(i, {
                            constructor: {
                                value: _
                            }
                        });
                        _.prototype = o;
                        var h = new gt(c,_,o,u,e,n,r,a);
                        e = new Tt(c,h,!0,!1),
                        i = new Tt(c + "*",h,!1,!1);
                        var l = new Tt(c + " const*",h,!1,!0);
                        return mt[t] = {
                            pointerType: i,
                            ma: l
                        },
                        It(d, _),
                        [e, i, l]
                    }
                    ))
                },
                o: function(t, _, e, s, i, n, o) {
                    var r = kt(e, s);
                    _ = Y(_),
                    n = Ot(i, n),
                    st([], [t], (function(t) {
                        function s() {
                            Nt("Cannot call " + i + " due to unbound types", r)
                        }
                        var i = (t = t[0]).name + "." + _;
                        _.startsWith("@@") && (_ = Symbol[_.substring(2)]);
                        var h = t.S.constructor;
                        return void 0 === h[_] ? (s.ga = e - 1,
                        h[_] = s) : (ft(h, _, i),
                        h[_].U[e - 1] = s),
                        st([], r, (function(t) {
                            return t = xt(i, [t[0], null].concat(t.slice(1)), n, o),
                            void 0 === h[_].U ? (t.ga = e - 1,
                            h[_] = t) : h[_].U[e - 1] = t,
                            []
                        }
                        )),
                        []
                    }
                    ))
                },
                v: function(t, _) {
                    it(t, {
                        name: _ = Y(_),
                        fromWireType: function(t) {
                            var _ = Ht[t].value;
                            return Ut(t),
                            _
                        },
                        toWireType: function(t, _) {
                            return Dt(_)
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: bt,
                        Y: null
                    })
                },
                m: function(t, _, e) {
                    e = Z(e),
                    it(t, {
                        name: _ = Y(_),
                        fromWireType: function(t) {
                            return t
                        },
                        toWireType: function(t, _) {
                            if ("number" != typeof _ && "boolean" != typeof _)
                                throw new TypeError('Cannot convert "' + Wt(_) + '" to ' + this.name);
                            return _
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: Gt(_, e),
                        Y: null
                    })
                },
                e: function(t, _, e, s, i, n) {
                    var o = kt(_, e);
                    t = Y(t),
                    i = Ot(s, i),
                    pt(t, (function() {
                        Nt("Cannot call " + t + " due to unbound types", o)
                    }
                    ), _ - 1),
                    st([], o, (function(e) {
                        return It(t, xt(t, [e[0], null].concat(e.slice(1)), i, n), _ - 1),
                        []
                    }
                    ))
                },
                d: function(t, _, e, s, i) {
                    function n(t) {
                        return t
                    }
                    _ = Y(_),
                    -1 === i && (i = 4294967295);
                    var o = Z(e);
                    if (0 === s) {
                        var r = 32 - 8 * e;
                        n = function(t) {
                            return t << r >>> r
                        }
                    }
                    var h = _.includes("unsigned");
                    it(t, {
                        name: _,
                        fromWireType: n,
                        toWireType: function(t, e) {
                            if ("number" != typeof e && "boolean" != typeof e)
                                throw new TypeError('Cannot convert "' + Wt(e) + '" to ' + this.name);
                            if (e < s || e > i)
                                throw new TypeError('Passing a number "' + Wt(e) + '" from JS side to C/C++ side to an argument of type "' + _ + '", which is outside the valid range [' + s + ", " + i + "]!");
                            return h ? e >>> 0 : 0 | e
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: Kt(_, o, 0 !== s),
                        Y: null
                    })
                },
                a: function(t, _, e) {
                    function s(t) {
                        var _ = T;
                        return new i(w,_[1 + (t >>= 2)],_[t])
                    }
                    var i = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][_];
                    it(t, {
                        name: e = Y(e),
                        fromWireType: s,
                        argPackAdvance: 8,
                        readValueFromPointer: s
                    }, {
                        qa: !0
                    })
                },
                n: function(t, _) {
                    var e = "std::string" === (_ = Y(_));
                    it(t, {
                        name: _,
                        fromWireType: function(t) {
                            var _ = T[t >> 2];
                            if (e)
                                for (var s = t + 4, i = 0; i <= _; ++i) {
                                    var n = t + 4 + i;
                                    if (i == _ || 0 == b[n]) {
                                        if (s) {
                                            var o = s
                                              , r = b
                                              , h = o + (n - s);
                                            for (s = o; r[s] && !(s >= h); )
                                                ++s;
                                            if (16 < s - o && r.subarray && u)
                                                o = u.decode(r.subarray(o, s));
                                            else {
                                                for (h = ""; o < s; ) {
                                                    var a = r[o++];
                                                    if (128 & a) {
                                                        var c = 63 & r[o++];
                                                        if (192 == (224 & a))
                                                            h += String.fromCharCode((31 & a) << 6 | c);
                                                        else {
                                                            var l = 63 & r[o++];
                                                            65536 > (a = 224 == (240 & a) ? (15 & a) << 12 | c << 6 | l : (7 & a) << 18 | c << 12 | l << 6 | 63 & r[o++]) ? h += String.fromCharCode(a) : (a -= 65536,
                                                            h += String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a))
                                                        }
                                                    } else
                                                        h += String.fromCharCode(a)
                                                }
                                                o = h
                                            }
                                        } else
                                            o = "";
                                        if (void 0 === d)
                                            var d = o;
                                        else
                                            d += String.fromCharCode(0),
                                            d += o;
                                        s = n + 1
                                    }
                                }
                            else {
                                for (d = Array(_),
                                i = 0; i < _; ++i)
                                    d[i] = String.fromCharCode(b[t + 4 + i]);
                                d = d.join("")
                            }
                            return s_(t),
                            d
                        },
                        toWireType: function(t, _) {
                            _ instanceof ArrayBuffer && (_ = new Uint8Array(_));
                            var s = "string" == typeof _;
                            s || _ instanceof Uint8Array || _ instanceof Uint8ClampedArray || _ instanceof Int8Array || tt("Cannot pass non-string to std::string");
                            var i = (e && s ? function() {
                                for (var t = 0, e = 0; e < _.length; ++e) {
                                    var s = _.charCodeAt(e);
                                    55296 <= s && 57343 >= s && (s = 65536 + ((1023 & s) << 10) | 1023 & _.charCodeAt(++e)),
                                    127 >= s ? ++t : t = 2047 >= s ? t + 2 : 65535 >= s ? t + 3 : t + 4
                                }
                                return t
                            }
                            : function() {
                                return _.length
                            }
                            )()
                              , n = t_(4 + i + 1);
                            if (T[n >> 2] = i,
                            e && s)
                                !function(t, _, e) {
                                    var s = b;
                                    if (0 < e) {
                                        e = _ + e - 1;
                                        for (var i = 0; i < t.length; ++i) {
                                            var n = t.charCodeAt(i);
                                            if (55296 <= n && 57343 >= n && (n = 65536 + ((1023 & n) << 10) | 1023 & t.charCodeAt(++i)),
                                            127 >= n) {
                                                if (_ >= e)
                                                    break;
                                                s[_++] = n
                                            } else {
                                                if (2047 >= n) {
                                                    if (_ + 1 >= e)
                                                        break;
                                                    s[_++] = 192 | n >> 6
                                                } else {
                                                    if (65535 >= n) {
                                                        if (_ + 2 >= e)
                                                            break;
                                                        s[_++] = 224 | n >> 12
                                                    } else {
                                                        if (_ + 3 >= e)
                                                            break;
                                                        s[_++] = 240 | n >> 18,
                                                        s[_++] = 128 | n >> 12 & 63
                                                    }
                                                    s[_++] = 128 | n >> 6 & 63
                                                }
                                                s[_++] = 128 | 63 & n
                                            }
                                        }
                                        s[_] = 0
                                    }
                                }(_, n + 4, i + 1);
                            else if (s)
                                for (s = 0; s < i; ++s) {
                                    var o = _.charCodeAt(s);
                                    255 < o && (s_(n),
                                    tt("String has UTF-16 code units that do not fit in 8 bits")),
                                    b[n + 4 + s] = o
                                }
                            else
                                for (s = 0; s < i; ++s)
                                    b[n + 4 + s] = _[s];
                            return null !== t && t.push(s_, n),
                            n
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: bt,
                        Y: function(t) {
                            s_(t)
                        }
                    })
                },
                k: function(t, _, e) {
                    if (e = Y(e),
                    2 === _)
                        var s = m
                          , i = f
                          , n = p
                          , o = function() {
                            return A
                        }
                          , r = 1;
                    else
                        4 === _ && (s = g,
                        i = E,
                        n = y,
                        o = function() {
                            return T
                        }
                        ,
                        r = 2);
                    it(t, {
                        name: e,
                        fromWireType: function(t) {
                            for (var e, i = T[t >> 2], n = o(), h = t + 4, a = 0; a <= i; ++a) {
                                var c = t + 4 + a * _;
                                a != i && 0 != n[c >> r] || (h = s(h, c - h),
                                void 0 === e ? e = h : (e += String.fromCharCode(0),
                                e += h),
                                h = c + _)
                            }
                            return s_(t),
                            e
                        },
                        toWireType: function(t, s) {
                            "string" != typeof s && tt("Cannot pass non-string to C++ string type " + e);
                            var o = n(s)
                              , h = t_(4 + o + _);
                            return T[h >> 2] = o >> r,
                            i(s, h + 4, o + _),
                            null !== t && t.push(s_, h),
                            h
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: bt,
                        Y: function(t) {
                            s_(t)
                        }
                    })
                },
                x: function(t, _) {
                    it(t, {
                        ra: !0,
                        name: _ = Y(_),
                        argPackAdvance: 0,
                        fromWireType: function() {},
                        toWireType: function() {}
                    })
                },
                j: function(t, _, e) {
                    t = Ft(t),
                    _ = Zt(_, "emval::as");
                    var s = []
                      , i = Dt(s);
                    return S[e >> 2] = i,
                    _.toWireType(s, t)
                },
                q: function(t, _, e, s) {
                    t = Ft(t),
                    e = $t(_, e);
                    for (var i = Array(_), n = 0; n < _; ++n) {
                        var o = e[n];
                        i[n] = o.readValueFromPointer(s),
                        s += o.argPackAdvance
                    }
                    return Dt(t = t.apply(void 0, i))
                },
                c: function(t, _, e, s, i) {
                    t = jt[t],
                    _ = Ft(_),
                    e = Qt(e);
                    var n = [];
                    return S[s >> 2] = Dt(n),
                    t(_, e, n, i)
                },
                A: Ut,
                G: function(t) {
                    return 0 === t ? Dt(Vt()) : (t = Qt(t),
                    Dt(Vt()[t]))
                },
                b: function(t, _) {
                    for (var e = (_ = $t(t, _))[0], s = e.name + "_$" + _.slice(1).map((function(t) {
                        return t.name
                    }
                    )).join("_") + "$", i = ["retType"], n = [e], o = "", r = 0; r < t - 1; ++r)
                        o += (0 !== r ? ", " : "") + "arg" + r,
                        i.push("argType" + r),
                        n.push(_[1 + r]);
                    s = "return function " + X("methodCaller_" + s) + "(handle, name, destructors, args) {\n";
                    var h = 0;
                    for (r = 0; r < t - 1; ++r)
                        s += "    var arg" + r + " = argType" + r + ".readValueFromPointer(args" + (h ? "+" + h : "") + ");\n",
                        h += _[r + 1].argPackAdvance;
                    for (s += "    var rv = handle[name](" + o + ");\n",
                    r = 0; r < t - 1; ++r)
                        _[r + 1].deleteObject && (s += "    argType" + r + ".deleteObject(arg" + r + ");\n");
                    return e.ra || (s += "    return retType.toWireType(destructors, rv);\n"),
                    i.push(s + "};\n"),
                    function(t) {
                        var _ = jt.length;
                        return jt.push(t),
                        _
                    }(t = Mt(i).apply(null, n))
                },
                h: function(t, _) {
                    return Dt((t = Ft(t))[_ = Ft(_)])
                },
                l: function(t) {
                    4 < t && (Ht[t].ia += 1)
                },
                E: function(t) {
                    return "number" == typeof (t = Ft(t))
                },
                r: function(t) {
                    return "string" == typeof (t = Ft(t))
                },
                D: function(t, e, s, i) {
                    t = Ft(t);
                    var n = Xt[e];
                    if (!n) {
                        n = "";
                        for (var o = 0; o < e; ++o)
                            n += (0 !== o ? ", " : "") + "arg" + o;
                        var r = "return function emval_allocator_" + e + "(constructor, argTypes, args) {\n";
                        for (o = 0; o < e; ++o)
                            r += "var argType" + o + " = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + " + o + '], "parameter ' + o + '");\nvar arg' + o + " = argType" + o + ".readValueFromPointer(args);\nargs += argType" + o + "['argPackAdvance'];\n";
                        n = new Function("requireRegisteredType","Module","__emval_register",r + "var obj = new constructor(" + n + ");\nreturn __emval_register(obj);\n}\n")(Zt, _, Dt),
                        Xt[e] = n
                    }
                    return n(t, s, i)
                },
                z: function() {
                    return Dt([])
                },
                F: function(t) {
                    return Dt(Qt(t))
                },
                C: function() {
                    return Dt({})
                },
                B: function(t) {
                    Rt(Ht[t].value),
                    Ut(t)
                },
                g: function(t, _, e) {
                    t = Ft(t),
                    _ = Ft(_),
                    e = Ft(e),
                    t[_] = e
                },
                f: function(t, _) {
                    return Dt(t = (t = Zt(t, "_emval_take_value")).readValueFromPointer(_))
                },
                s: function(t) {
                    return Dt(typeof (t = Ft(t)))
                },
                p: function() {
                    D("")
                },
                i: function() {
                    return Math.random()
                },
                u: function() {
                    D("OOM")
                }
            };
            !function() {
                function t(t) {
                    _.asm = t.exports,
                    c = _.asm.H,
                    w = t = c.buffer,
                    _.HEAP8 = v = new Int8Array(t),
                    _.HEAP16 = C = new Int16Array(t),
                    _.HEAP32 = S = new Int32Array(t),
                    _.HEAPU8 = b = new Uint8Array(t),
                    _.HEAPU16 = A = new Uint16Array(t),
                    _.HEAPU32 = T = new Uint32Array(t),
                    _.HEAPF32 = I = new Float32Array(t),
                    _.HEAPF64 = O = new Float64Array(t),
                    L = _.asm.K,
                    N.unshift(_.asm.I),
                    B--,
                    _.monitorRunDependencies && _.monitorRunDependencies(B),
                    0 == B && (null !== H && (clearInterval(H),
                    H = null),
                    U && (t = U,
                    U = null,
                    t()))
                }
                function e(_) {
                    t(_.instance)
                }
                function s(t) {
                    return (r || "function" != typeof fetch ? Promise.resolve().then((function() {
                        return K()
                    }
                    )) : fetch(k, {
                        credentials: "same-origin"
                    }).then((function(t) {
                        if (!t.ok)
                            throw "failed to load wasm binary file at '" + k + "'";
                        return t.arrayBuffer()
                    }
                    )).catch((function() {
                        return K()
                    }
                    ))).then((function(t) {
                        return WebAssembly.instantiate(t, i)
                    }
                    )).then((function(t) {
                        return t
                    }
                    )).then(t, (function(t) {
                        h("failed to asynchronously prepare wasm: " + t),
                        D(t)
                    }
                    ))
                }
                var i = {
                    a: Jt
                };
                if (B++,
                _.monitorRunDependencies && _.monitorRunDependencies(B),
                _.instantiateWasm)
                    try {
                        return _.instantiateWasm(i, t)
                    } catch (t) {
                        return h("Module.instantiateWasm callback failed with error: " + t),
                        !1
                    }
                r || "function" != typeof WebAssembly.instantiateStreaming || W() || "function" != typeof fetch ? s(e) : fetch(k, {
                    credentials: "same-origin"
                }).then((function(t) {
                    return WebAssembly.instantiateStreaming(t, i).then(e, (function(t) {
                        return h("wasm streaming compile failed: " + t),
                        h("falling back to ArrayBuffer instantiation"),
                        s(e)
                    }
                    ))
                }
                ))
            }(),
            _.___wasm_call_ctors = function() {
                return (_.___wasm_call_ctors = _.asm.I).apply(null, arguments)
            }
            ;
            var t_ = _._malloc = function() {
                return (t_ = _._malloc = _.asm.J).apply(null, arguments)
            }
            ;
            _._main = function() {
                return (_._main = _.asm.L).apply(null, arguments)
            }
            ;
            var __ = _.___getTypeName = function() {
                return (__ = _.___getTypeName = _.asm.M).apply(null, arguments)
            }
            ;
            _.___embind_register_native_and_builtin_types = function() {
                return (_.___embind_register_native_and_builtin_types = _.asm.N).apply(null, arguments)
            }
            ;
            var e_, s_ = _._free = function() {
                return (s_ = _._free = _.asm.O).apply(null, arguments)
            }
            ;
            function i_(t) {
                this.name = "ExitStatus",
                this.message = "Program terminated with exit(" + t + ")",
                this.status = t
            }
            function n_() {
                function t() {
                    if (!e_ && (e_ = !0,
                    _.calledRun = !0,
                    !l)) {
                        if (F(N),
                        F(M),
                        _.onRuntimeInitialized && _.onRuntimeInitialized(),
                        o_) {
                            var t = _._main;
                            try {
                                var e = t(0, 0);
                                a || (_.onExit && _.onExit(e),
                                l = !0),
                                n(e, new i_(e))
                            } catch (t) {
                                t instanceof i_ || "unwind" == t || n(1, t)
                            }
                        }
                        if (_.postRun)
                            for ("function" == typeof _.postRun && (_.postRun = [_.postRun]); _.postRun.length; )
                                t = _.postRun.shift(),
                                R.unshift(t);
                        F(R)
                    }
                }
                if (!(0 < B)) {
                    if (_.preRun)
                        for ("function" == typeof _.preRun && (_.preRun = [_.preRun]); _.preRun.length; )
                            x();
                    F(P),
                    0 < B || (_.setStatus ? (_.setStatus("Running..."),
                    setTimeout((function() {
                        setTimeout((function() {
                            _.setStatus("")
                        }
                        ), 1),
                        t()
                    }
                    ), 1)) : t())
                }
            }
            if (U = function t() {
                e_ || n_(),
                e_ || (U = t)
            }
            ,
            _.run = n_,
            _.preInit)
                for ("function" == typeof _.preInit && (_.preInit = [_.preInit]); 0 < _.preInit.length; )
                    _.preInit.pop()();
            var o_ = !0;
            _.noInitialRun && (o_ = !1),
            n_(),
            t.exports = e
        }
        ,
        851: t=>{
            "use strict";
            t.exports = "uniform sampler2D uTexture;\nuniform vec4 uTint;\n\nvarying float vAlpha;\nvarying vec2 vUV;\n\nvoid main() {\n  gl_FragColor = texture2D(uTexture, vUV) * vAlpha * uTint;\n}\n"
        }
        ,
        313: t=>{
            "use strict";
            t.exports = "uniform sampler2D uTexture;\nuniform vec4 uTint;\n\nvarying vec2 vUV;\n\nvoid main() {\n  gl_FragColor = texture2D(uTexture, vUV) * uTint;\n}\n"
        }
        ,
        403: t=>{
            "use strict";
            t.exports = "varying vec4 vColor;\n\nvoid main() {\n  gl_FragColor = vColor;\n}"
        }
        ,
        845: t=>{
            "use strict";
            t.exports = "uniform sampler2D uTexture;\n\nvarying float vAlpha;\nvarying vec2 vUV;\n\nvoid main() {\n  gl_FragColor = texture2D(uTexture, vUV) * vAlpha;\n}\n"
        }
        ,
        578: t=>{
            "use strict";
            t.exports = "uniform sampler2D uTexture;\n\nvarying float vAlpha;\nvarying vec2 vUV;\n\nvoid main() {\n  gl_FragColor = texture2D(uTexture, vUV) * vAlpha;\n}\n"
        }
        ,
        418: t=>{
            "use strict";
            t.exports = "varying vec4 vColor;\n\nvoid main() {\n  gl_FragColor = vColor;\n}\n"
        }
        ,
        125: t=>{
            "use strict";
            t.exports = "uniform vec2 uTranslate;\nuniform vec2 uScale;\n\nattribute vec2 aPosition;\nattribute float aAlpha;\nattribute vec2 aUV;\n\nvarying vec2 vUV;\nvarying float vAlpha;\n\nvoid main() {\n  gl_Position = vec4(((aPosition - uTranslate) * uScale), 0.0, 1.0);\n  vUV = aUV;\n  vAlpha = aAlpha;\n}\n"
        }
        ,
        290: t=>{
            "use strict";
            t.exports = "uniform vec2 uTranslate;\nuniform vec2 uScale;\n\nattribute vec2 aPosition;\nattribute vec2 aUV;\n\nvarying vec2 vUV;\n\nvoid main() {\n  gl_Position = vec4(((aPosition - uTranslate) * uScale), 0.0, 1.0);\n  vUV = aUV;\n}\n"
        }
        ,
        995: t=>{
            "use strict";
            t.exports = "uniform vec2 uTranslate;\nuniform vec2 uScale;\n\nattribute vec2 aPosition;\nattribute vec4 aColor;\n\nvarying vec4 vColor;\n\nvoid main() {\n  gl_Position = vec4(((aPosition - uTranslate) * uScale), 0.0, 1.0);\n  vColor = aColor;\n}"
        }
        ,
        296: t=>{
            "use strict";
            t.exports = "uniform vec2 uTranslate;\nuniform vec2 uScale;\n\nattribute vec2 aPosition;\nattribute float aAlpha;\nattribute vec2 aUV;\n\nvarying vec2 vUV;\nvarying float vAlpha;\n\nvoid main() {\n  gl_Position = vec4(((aPosition - uTranslate) * uScale), 0.0, 1.0);\n  vUV = aUV;\n  vAlpha = aAlpha;\n}\n"
        }
        ,
        109: t=>{
            "use strict";
            t.exports = "uniform vec2 uTranslate;\nuniform vec2 uScale;\n\nattribute vec2 aPosition;\nattribute float aAlpha;\nattribute vec2 aUV;\n\nvarying vec2 vUV;\nvarying float vAlpha;\n\nvoid main() {\n  gl_Position = vec4(((aPosition - uTranslate) * uScale), 0.0, 1.0);\n  vUV = aUV;\n  vAlpha = aAlpha;\n}\n"
        }
        ,
        389: t=>{
            "use strict";
            t.exports = "attribute vec2 aPosition;\nattribute vec4 aColor;\n\nvarying vec4 vColor;\n\nvoid main() {\n  gl_Position = vec4(aPosition, 0.0, 1.0);\n  vColor = aColor;\n}\n"
        }
    }, n = {};
    function o(t) {
        var _ = n[t];
        if (void 0 !== _)
            return _.exports;
        var e = n[t] = {
            id: t,
            loaded: !1,
            exports: {}
        };
        return i[t].call(e.exports, e, e.exports, o),
        e.loaded = !0,
        e.exports
    }
    o.m = i,
    t = [],
    o.O = (_,e,s,i)=>{
        if (!e) {
            var n = 1 / 0;
            for (c = 0; c < t.length; c++) {
                for (var [e,s,i] = t[c], r = !0, h = 0; h < e.length; h++)
                    (!1 & i || n >= i) && Object.keys(o.O).every((t=>o.O[t](e[h]))) ? e.splice(h--, 1) : (r = !1,
                    i < n && (n = i));
                if (r) {
                    t.splice(c--, 1);
                    var a = s();
                    void 0 !== a && (_ = a)
                }
            }
            return _
        }
        i = i || 0;
        for (var c = t.length; c > 0 && t[c - 1][2] > i; c--)
            t[c] = t[c - 1];
        t[c] = [e, s, i]
    }
    ,
    o.n = t=>{
        var _ = t && t.__esModule ? ()=>t.default : ()=>t;
        return o.d(_, {
            a: _
        }),
        _
    }
    ,
    o.d = (t,_)=>{
        for (var e in _)
            o.o(_, e) && !o.o(t, e) && Object.defineProperty(t, e, {
                enumerable: !0,
                get: _[e]
            })
    }
    ,
    o.f = {},
    o.e = t=>Promise.all(Object.keys(o.f).reduce(((_,e)=>(o.f[e](t, _),
    _)), [])),
    o.u = t=>"chunk-" + t + ".js?62987bb5",
    o.miniCssF = t=>819 === t ? "bundle.819.css?e1d04902" : "bundle.ryuten.css?65f6df61",
    o.o = (t,_)=>Object.prototype.hasOwnProperty.call(t, _),
    _ = {},
    o.l = (t,e,s,i)=>{
        if (_[t])
            _[t].push(e);
        else {
            var n, r;
            if (void 0 !== s)
                for (var h = document.getElementsByTagName("script"), a = 0; a < h.length; a++) {
                    var c = h[a];
                    if (c.getAttribute("src") == t) {
                        n = c;
                        break
                    }
                }
            n || (r = !0,
            (n = document.createElement("script")).charset = "utf-8",
            n.timeout = 120,
            o.nc && n.setAttribute("nonce", o.nc),
            n.src = t),
            _[t] = [e];
            var l = (e,s)=>{
                n.onerror = n.onload = null,
                clearTimeout(u);
                var i = _[t];
                if (delete _[t],
                n.parentNode && n.parentNode.removeChild(n),
                i && i.forEach((t=>t(s))),
                e)
                    return e(s)
            }
              , u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: n
            }), 12e4);
            n.onerror = l.bind(null, n.onerror),
            n.onload = l.bind(null, n.onload),
            r && document.head.appendChild(n)
        }
    }
    ,
    o.r = t=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    o.nmd = t=>(t.paths = [],
    t.children || (t.children = []),
    t),
    o.p = "",
    e = t=>new Promise(((_,e)=>{
        var s = o.miniCssF(t)
          , i = o.p + s;
        if (((t,_)=>{
            for (var e = document.getElementsByTagName("link"), s = 0; s < e.length; s++) {
                var i = (o = e[s]).getAttribute("data-href") || o.getAttribute("href");
                if ("stylesheet" === o.rel && (i === t || i === _))
                    return o
            }
            var n = document.getElementsByTagName("style");
            for (s = 0; s < n.length; s++) {
                var o;
                if ((i = (o = n[s]).getAttribute("data-href")) === t || i === _)
                    return o
            }
        }
        )(s, i))
            return _();
        ((t,_,e,s)=>{
            var i = document.createElement("link");
            i.rel = "stylesheet",
            i.type = "text/css",
            i.onerror = i.onload = n=>{
                if (i.onerror = i.onload = null,
                "load" === n.type)
                    e();
                else {
                    var o = n && ("load" === n.type ? "missing" : n.type)
                      , r = n && n.target && n.target.href || _
                      , h = new Error("Loading CSS chunk " + t + " failed.\n(" + r + ")");
                    h.code = "CSS_CHUNK_LOAD_FAILED",
                    h.type = o,
                    h.request = r,
                    i.parentNode.removeChild(i),
                    s(h)
                }
            }
            ,
            i.href = _,
            document.head.appendChild(i)
        }
        )(t, i, _, e)
    }
    )),
    s = {
        937: 0
    },
    o.f.miniCss = (t,_)=>{
        s[t] ? _.push(s[t]) : 0 !== s[t] && {
            819: 1
        }[t] && _.push(s[t] = e(t).then((()=>{
            s[t] = 0
        }
        ), (_=>{
            throw delete s[t],
            _
        }
        )))
    }
    ,
    (()=>{
        var t = {
            937: 0
        };
        o.f.j = (_,e)=>{
            var s = o.o(t, _) ? t[_] : void 0;
            if (0 !== s)
                if (s)
                    e.push(s[2]);
                else {
                    var i = new Promise(((e,i)=>s = t[_] = [e, i]));
                    e.push(s[2] = i);
                    var n = o.p + o.u(_)
                      , r = new Error;
                    o.l(n, (e=>{
                        if (o.o(t, _) && (0 !== (s = t[_]) && (t[_] = void 0),
                        s)) {
                            var i = e && ("load" === e.type ? "missing" : e.type)
                              , n = e && e.target && e.target.src;
                            r.message = "Loading chunk " + _ + " failed.\n(" + i + ": " + n + ")",
                            r.name = "ChunkLoadError",
                            r.type = i,
                            r.request = n,
                            s[1](r)
                        }
                    }
                    ), "chunk-" + _, _)
                }
        }
        ,
        o.O.j = _=>0 === t[_];
        var _ = (_,e)=>{
            var s, i, [n,r,h] = e, a = 0;
            if (n.some((_=>0 !== t[_]))) {
                for (s in r)
                    o.o(r, s) && (o.m[s] = r[s]);
                if (h)
                    var c = h(o)
            }
            for (_ && _(e); a < n.length; a++)
                i = n[a],
                o.o(t, i) && t[i] && t[i][0](),
                t[n[a]] = 0;
            return o.O(c)
        }
          , e = self.webpackChunk = self.webpackChunk || [];
        e.forEach(_.bind(null, 0)),
        e.push = _.bind(null, e.push.bind(e))
    }
    )();
    var r = o.O(void 0, [216], (()=>o(835)));
    r = o.O(r)
}
)();
