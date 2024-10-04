(()=>{
    var t, _, e = {
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
                for (var e = t >> 1, s = e + _ / 2; !(e >= s) && S[e]; )
                    ++e;
                if (32 < (e <<= 1) - t && d)
                    return d.decode(C.subarray(t, e));
                for (e = "",
                s = 0; !(s >= _ / 2); ++s) {
                    var i = b[t + 2 * s >> 1];
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
                    b[_ >> 1] = t.charCodeAt(i),
                    _ += 2;
                return b[_ >> 1] = 0,
                _ - s
            }
            function p(t) {
                return 2 * t.length
            }
            function g(t, _) {
                for (var e = 0, s = ""; !(e >= _ / 4); ) {
                    var i = A[t + 4 * e >> 2];
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
                    A[_ >> 2] = n,
                    (_ += 4) + 4 > e)
                        break
                }
                return A[_ >> 2] = 0,
                _ - s
            }
            function w(t) {
                for (var _ = 0, e = 0; e < t.length; ++e) {
                    var s = t.charCodeAt(e);
                    55296 <= s && 57343 >= s && ++e,
                    _ += 4
                }
                return _
            }
            var y, v, C, b, S, A, T, I, O, L, P = [], N = [], M = [], R = [];
            function k() {
                var t = _.preRun.shift();
                P.unshift(t)
            }
            var x, B = 0, H = null, U = null;
            function D(t) {
                throw _.onAbort && _.onAbort(t),
                h(t = "Aborted(" + t + ")"),
                l = !0,
                new WebAssembly.RuntimeError(t + ". Build with -s ASSERTIONS=1 for more info.")
            }
            function W() {
                return x.startsWith("data:application/octet-stream;base64,")
            }
            if (_.preloadedImages = {},
            _.preloadedAudios = {},
            x = "Albion.wasm?r=22759726",
            !W()) {
                var G = x;
                x = _.locateFile ? _.locateFile(G, o) : o + G
            }
            function K() {
                var t = x;
                try {
                    if (t == x && r)
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
                for (var _ = ""; C[t]; )
                    _ += $[C[t++]];
                return _
            }
            var Q = {}
              , V = {}
              , j = {};
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
                    j[t] = _
                }
                ));
                var i = Array(_.length)
                  , n = []
                  , o = 0;
                _.forEach((function(t, _) {
                    V.hasOwnProperty(t) ? i[_] = V[t] : (n.push(t),
                    Q.hasOwnProperty(t) || (Q[t] = []),
                    Q[t].push((function() {
                        i[_] = V[t],
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
                V.hasOwnProperty(t)) {
                    if (e.qa)
                        return;
                    tt("Cannot register type '" + s + "' twice")
                }
                V[t] = _,
                delete j[t],
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
            function wt(t, _) {
                return null === _ ? (this.ha && tt("null is not a valid " + this.name),
                0) : (_.P || tt('Cannot pass "' + Wt(_) + '" as a ' + this.name),
                _.P.R || tt("Cannot pass deleted object as a pointer of type " + this.name),
                Et(_.P.R, _.P.T.S, this.S))
            }
            function yt(t, _) {
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
            function Ct(t) {
                return this.fromWireType(T[t >> 2])
            }
            function bt(t, _, e) {
                return _ === e ? t : void 0 === e.X || null === (t = bt(t, _, e.X)) ? null : e.na(t)
            }
            var St = {};
            function At(t, _) {
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
                void 0 !== _.X ? this.toWireType = yt : (this.toWireType = s ? wt : vt,
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
                    s[_] || V[_] || (j[_] ? j[_].forEach(t) : (e.push(_),
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
            function kt(t, _, e, s) {
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
            function xt(t, _) {
                for (var e = [], s = 0; s < t; s++)
                    e.push(A[(_ >> 2) + s]);
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
                        return C[t]
                    }
                    ;
                case 1:
                    return e ? function(t) {
                        return b[t >> 1]
                    }
                    : function(t) {
                        return S[t >> 1]
                    }
                    ;
                case 2:
                    return e ? function(t) {
                        return A[t >> 2]
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
                var e = V[t];
                return void 0 === e && tt(_ + " has unknown type " + Pt(t)),
                e
            }
            function $t(t, _) {
                for (var e = Array(t), s = 0; s < t; ++s)
                    e[s] = Zt(A[(_ >> 2) + s], "parameter " + s);
                return e
            }
            var Yt = {};
            function Qt(t) {
                var _ = Yt[t];
                return void 0 === _ ? Y(t) : _
            }
            var Vt = [];
            function jt() {
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
            Tt.prototype.readValueFromPointer = Ct,
            Tt.prototype.deleteObject = function(t) {
                null !== t && t.delete()
            }
            ,
            Tt.prototype.fromWireType = function(t) {
                function _() {
                    return this.ea ? At(this.S.aa, {
                        T: this.sa,
                        R: e,
                        W: this,
                        V: t
                    }) : At(this.S.aa, {
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
                    return St[_]
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
                var i = bt(e, this.S, s.S);
                return null === i ? _.call(this) : this.ea ? At(s.S.aa, {
                    T: s,
                    R: i,
                    W: this,
                    V: t
                }) : At(s.S.aa, {
                    T: s,
                    R: i
                })
            }
            ,
            _.getInheritedInstanceCount = function() {
                return Object.keys(St).length
            }
            ,
            _.getLiveInheritedInstances = function() {
                var t, _ = [];
                for (t in St)
                    St.hasOwnProperty(t) && _.push(St[t]);
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
                                s = b;
                            else {
                                if (4 !== e)
                                    throw new TypeError("Unknown boolean type size: " + _);
                                s = A
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
                    var r = xt(e, s);
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
                            return t = kt(i, [t[0], null].concat(t.slice(1)), n, o),
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
                        readValueFromPointer: Ct,
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
                    var o = xt(_, e);
                    t = Y(t),
                    i = Ot(s, i),
                    pt(t, (function() {
                        Nt("Cannot call " + t + " due to unbound types", o)
                    }
                    ), _ - 1),
                    st([], o, (function(e) {
                        return It(t, kt(t, [e[0], null].concat(e.slice(1)), i, n), _ - 1),
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
                        return new i(y,_[1 + (t >>= 2)],_[t])
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
                                    if (i == _ || 0 == C[n]) {
                                        if (s) {
                                            var o = s
                                              , r = C
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
                                    d[i] = String.fromCharCode(C[t + 4 + i]);
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
                                    var s = C;
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
                                    C[n + 4 + s] = o
                                }
                            else
                                for (s = 0; s < i; ++s)
                                    C[n + 4 + s] = _[s];
                            return null !== t && t.push(s_, n),
                            n
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: Ct,
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
                            return S
                        }
                          , r = 1;
                    else
                        4 === _ && (s = g,
                        i = E,
                        n = w,
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
                        readValueFromPointer: Ct,
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
                    return A[e >> 2] = i,
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
                    t = Vt[t],
                    _ = Ft(_),
                    e = Qt(e);
                    var n = [];
                    return A[s >> 2] = Dt(n),
                    t(_, e, n, i)
                },
                A: Ut,
                G: function(t) {
                    return 0 === t ? Dt(jt()) : (t = Qt(t),
                    Dt(jt()[t]))
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
                        var _ = Vt.length;
                        return Vt.push(t),
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
                    y = t = c.buffer,
                    _.HEAP8 = v = new Int8Array(t),
                    _.HEAP16 = b = new Int16Array(t),
                    _.HEAP32 = A = new Int32Array(t),
                    _.HEAPU8 = C = new Uint8Array(t),
                    _.HEAPU16 = S = new Uint16Array(t),
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
                    )) : fetch(x, {
                        credentials: "same-origin"
                    }).then((function(t) {
                        if (!t.ok)
                            throw "failed to load wasm binary file at '" + x + "'";
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
                r || "function" != typeof WebAssembly.instantiateStreaming || W() || "function" != typeof fetch ? s(e) : fetch(x, {
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
                            k();
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
        770: (t,_,e)=>{
            "use strict";
            class s {
                _2856;
                _9235;
                _2617;
                constructor(t, _, e) {
                    this._2856 = t,
                    this._9235 = _,
                    this._2617 = e
                }
                _2381(t) {
                    return this._2856 === t
                }
                _1993(t) {
                    this._2856.apply(this._2617, t)
                }
            }
            const i = class {
                _3286;
                constructor() {
                    this._3286 = new Map
                }
                _9070(t, _, e=null) {
                    const i = new s(_,!1,e);
                    (this._3286.get(t) || this._2702(t)).add(i)
                }
                _9235(t, _, e=null) {
                    const i = new s(_,!0,e);
                    (this._3286.get(t) || this._2702(t)).add(i)
                }
                _9239(t, _) {
                    const e = this._3286.get(t);
                    if (void 0 !== e)
                        for (const s of e)
                            if (s._2381(_)) {
                                1 === e.size ? this._3286.delete(t) : e.delete(s);
                                break
                            }
                }
                _2702(t) {
                    const _ = new Set;
                    return this._3286.set(t, _),
                    _
                }
                _8079(t, _=[]) {
                    const e = this._3286.get(t);
                    if (void 0 !== e)
                        for (const s of e)
                            s._1993(_),
                            s._9235 && (1 === e.size ? this._3286.delete(t) : e.delete(s))
                }
            }
              , n = new class {
                _4081;
                constructor() {
                    this._4081 = 0
                }
                _6813() {
                    this._4081 = performance.now()
                }
                get _6032() {
                    return performance.now()
                }
            }
              , o = new class {
                _9345;
                _2814;
                constructor() {
                    this._9345 = new Set,
                    this._2814 = {
                        _2969: new Set,
                        _8341: new Set
                    }
                }
                _7835(t) {
                    this._9345.add(t)
                }
                _8690(t) {
                    this._9345.delete(t)
                }
                _3658(t) {
                    this._2814._2969.add(t)
                }
                _3851(t) {
                    this._2814._8341.add(t)
                }
                _1081() {
                    const t = this._2814._2969;
                    this._2814._2969 = new Set;
                    for (const _ of t)
                        _()
                }
                _3065() {
                    for (const t of this._9345)
                        t._3856();
                    this._9345.clear();
                    const t = this._2814._8341;
                    this._2814._8341 = new Set;
                    for (const _ of t)
                        _()
                }
            }
              , r = class {
                _2672;
                _6985;
                _5636;
                _1599;
                _4650;
                constructor(t) {
                    this._2672 = t,
                    this._6985 = {
                        _5760: new Set,
                        _7375: new Set,
                        _5099: new Set
                    },
                    this._5636 = {
                        _5760: new Map,
                        _4911: new Map
                    },
                    this._1599 = {
                        _5760: "",
                        _7375: ""
                    },
                    this._4650 = !1
                }
                get _7800() {
                    return this._2672
                }
                _2206() {
                    const t = this._6985._7375.size > 0 || this._6985._5099.size > 0
                      , _ = this._5636._4911.size > 0
                      , e = this._1599._5760 !== this._1599._7375
                      , s = t || _ || e;
                    s !== this._4650 && (s ? o._7835(this) : o._8690(this),
                    this._4650 = s)
                }
                set _7917(t) {
                    this._1599._7375 = t,
                    this._2206()
                }
                get _7917() {
                    return this._1599._7375
                }
                _8307(t) {
                    this._6985._5099.delete(t) || (this._6985._5760.has(t) || this._6985._7375.add(t),
                    this._2206())
                }
                _4748(t) {
                    this._6985._7375.delete(t) || (this._6985._5760.has(t) && this._6985._5099.add(t),
                    this._2206())
                }
                _6508(t) {
                    return !!this._6985._7375.has(t) || !this._6985._5099.has(t) && this._6985._5760.has(t)
                }
                _9798(t, _) {
                    this._5636._5760.get(t) === _ ? this._5636._4911.delete(t) : this._5636._4911.set(t, _),
                    this._2206()
                }
                _7630(t) {
                    return this._5636._4911.get(t) || this._5636._5760.get(t) || ""
                }
                _3856() {
                    for (const t of this._6985._7375)
                        this._2672.classList.add(t),
                        this._6985._5760.add(t);
                    for (const t of this._6985._5099)
                        this._2672.classList.remove(t),
                        this._6985._5760.delete(t);
                    this._6985._7375.clear(),
                    this._6985._5099.clear();
                    for (const [t,_] of this._5636._4911)
                        this._2672.style.setProperty(t, _),
                        this._5636._5760.set(t, _);
                    this._5636._4911.clear(),
                    this._1599._5760 !== this._1599._7375 && (this._2672.textContent = this._1599._7375,
                    this._1599._5760 = this._1599._7375),
                    this._4650 = !1
                }
                static _2624(t) {
                    const _ = new this(t);
                    for (const e of t.classList)
                        _._6985._5760.add(e);
                    for (let e = 0; Object.prototype.hasOwnProperty.call(t, e) && e < 100; e++) {
                        const s = t.style[e]
                          , i = t.style.getPropertyValue(s);
                        _._5636._5760.set(s, i)
                    }
                    return 0 === t.children.length && null !== t.textContent && (_._1599._5760 = t.textContent,
                    _._1599._7375 = t.textContent),
                    _
                }
            }
              , h = class extends i {
                _9897;
                _5953;
                _9424;
                _1082;
                _7729;
                constructor(t) {
                    super();
                    const _ = document.getElementById(t);
                    this._9897 = t,
                    this._5953 = r._2624(_),
                    this._9424 = !1,
                    this._1082 = null,
                    this._7729 = 0,
                    this._5953._9798("transition", "transform 200ms, opacity 200ms")
                }
                get _6808() {
                    return this._9897
                }
                get _1390() {
                    return this._9424
                }
                _4190() {
                    null !== this._1082 && this._1082(),
                    this._8079("transition")
                }
                _7705() {
                    this._1390 || (this._9424 = !0,
                    this._1082 = ()=>{
                        this._5953._9798("opacity", "0"),
                        this._5953._9798("transform", "perspective(100px) translateZ(-50px)"),
                        this._5953._9798("z-index", "1"),
                        this._5953._9798("display", "flex"),
                        this._1082 = ()=>{
                            this._5953._9798("opacity", "1"),
                            this._5953._9798("transform", "perspective(100px) translateZ(0px)"),
                            this._7729 = n._4081,
                            this._1082 = ()=>{
                                n._4081 - this._7729 >= 200 && (this._1082 = null,
                                this._8079("visible"))
                            }
                        }
                    }
                    ,
                    this._8079("show"))
                }
                _8601() {
                    this._1390 && (this._9424 = !1,
                    this._1082 = ()=>{
                        this._5953._9798("opacity", "1"),
                        this._5953._9798("transform", "perspective(100px) translateZ(0px)"),
                        this._5953._9798("z-index", "2"),
                        this._5953._9798("display", "flex"),
                        this._1082 = ()=>{
                            this._5953._9798("opacity", "0"),
                            this._5953._9798("transform", "perspective(100px) translateZ(25px)"),
                            this._7729 = n._4081,
                            this._1082 = ()=>{
                                n._4081 - this._7729 >= 200 && (this._5953._9798("display", "none"),
                                this._1082 = null,
                                this._8079("invisible"))
                            }
                        }
                    }
                    ,
                    this._8079("hide"))
                }
            }
              , a = new class {
                _5781;
                _9611;
                _2745;
                _5104;
                _8383;
                _8962;
                _9207;
                constructor() {
                    this._5781 = new Audio("assets/sfx/button-hover-1.wav"),
                    this._9611 = new Audio("assets/sfx/button-click-1.wav"),
                    this._2745 = new Audio("assets/sfx/button-disabled-1.wav"),
                    this._5104 = new Audio("assets/sfx/button-change-1.wav"),
                    this._8383 = new Audio("assets/sfx/notification-1.wav"),
                    this._8962 = new Audio("assets/sfx/alert-1.wav"),
                    this._9207 = !1
                }
                _6468() {
                    window.addEventListener("click", (()=>{
                        this._9207 = !0
                    }
                    ), {
                        once: !0
                    })
                }
                _3040(t) {
                    this._9207 ? (t.currentTime = 0,
                    t.play().catch(console.error)) : console.log("[SFX] User hasn't interacted yet. Skipping playback...")
                }
            }
            ;
            var c = e(147);
            const l = class {
                _5953;
                _9410;
                _1281;
                _3711;
                _9373;
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
                    this._5953 = r._2624(i),
                    this._9410 = r._2624(h),
                    this._1281 = r._2624(a),
                    this._3711 = s,
                    this._9373 = !1
                }
                get _7800() {
                    return this._5953._7800
                }
                get _8464() {
                    return this._3711
                }
                get _6613() {
                    return this._9373
                }
                _1811(t) {
                    this._9410._7917 = t
                }
                _4975(t) {
                    this._1281._7917 = t
                }
                _7705() {
                    this._5953._9798("opacity", "1"),
                    this._5953._9798("transform", "translate(0%)")
                }
                _8601() {
                    this._5953._9798("opacity", "0"),
                    this._5953._9798("transform", "translate(-100%)")
                }
                _7918() {
                    this._9373 = !0
                }
            }
              , u = new class {
                _7402;
                _4255;
                constructor() {
                    this._7402 = null,
                    this._4255 = new Set
                }
                _6468() {
                    this._7402 = document.getElementById("notifications")
                }
                _7225(t, _, e=5e3) {
                    const s = new l("info-fa-white",t,_,e);
                    this._9978(s)
                }
                _9978(t) {
                    t._6613 ? console.warn("Notification has been previously removed.") : this._4255.has(t) ? console.warn("Notification already in use.") : (this._4255.add(t),
                    a._3040(a._9611),
                    o._3851((()=>{
                        t._6613 || (this._7402.appendChild(t._7800),
                        t._8464 > 0 && setTimeout(this._5099.bind(this, t), t._8464),
                        o._3658((()=>{
                            t._6613 || t._7705()
                        }
                        )))
                    }
                    )))
                }
                _5099(t) {
                    t._6613 ? console.warn("Notification has already been removed.") : this._4255.has(t) ? (t._7918(),
                    t._8601(),
                    this._4255.delete(t),
                    setTimeout((()=>{
                        o._3851((()=>{
                            this._7402.removeChild(t._7800)
                        }
                        ))
                    }
                    ), 500)) : console.warn("Notification hasn't been added yet.")
                }
            }
              , d = new class {
                _4255;
                _4494;
                _6904;
                constructor() {
                    this._4255 = [["rgb(252, 201, 113)", "#000000"], ["rgb(181, 27, 0)", "#ffffff"], ["rgb(70, 145, 80)", "#ffffff"], ["rgb(119, 70, 145)", "#ffffff"], ["rgb(255, 181, 253)", "#000000"], ["rgb(187, 250, 246)", "#000000"], ["rgb(252, 153, 66)", "#000000"], ["rgb(248, 250, 112)", "#000000"], ["rgb(222, 222, 222)", "#000000"], ["rgb(177, 252, 186)", "#000000"], ["rgb(177, 252, 186)", "#000000"], ["rgb(104, 107, 156)", "#ffffff"], ["rgb(122, 64, 73)", "#ffffff"]],
                    this._4255.sort((()=>Math.random() - .5)),
                    this._4494 = Math.floor(this._4255.length * Math.random()),
                    this._6904 = new Map
                }
                _6194(t) {
                    let _ = this._6904.get(t);
                    return void 0 === _ && (_ = this._4255[this._4494++ % this._4255.length],
                    this._6904.set(t, _)),
                    _
                }
            }
            ;
            class m {
                _6808;
                _2562;
                _4543;
                _4935;
                _6760;
                _4557;
                _2102;
                _6310;
                _2919;
                constructor(t, _, e, s, i, n) {
                    this._6808 = t,
                    this._2562 = _,
                    this._4543 = e,
                    this._4935 = s,
                    this._6760 = i,
                    this._4557 = n[0],
                    this._2102 = new Map,
                    this._6310 = !1,
                    this._2919 = d._6194(e)
                }
            }
            const f = new m(-1,"","","",0,["", 0])
              , p = m
              , g = class {
                _4563;
                _2266;
                constructor(t=0, _=0) {
                    this._4563 = t,
                    this._2266 = _
                }
                _8193(t, _) {
                    this._4563 = t,
                    this._2266 = _
                }
            }
            ;
            class E {
                _6030;
                _8293;
                _4434;
                constructor(t=255, _=255, e=255) {
                    this._6030 = t,
                    this._8293 = _,
                    this._4434 = e
                }
                _1899(t) {
                    this._6030 = t._6030,
                    this._8293 = t._8293,
                    this._4434 = t._4434
                }
                _6813(t, _, e) {
                    this._6030 = t,
                    this._8293 = _,
                    this._4434 = e
                }
                get _9783() {
                    return this._6030 << 16 | this._8293 << 8 | this._4434
                }
                get _9243() {
                    return `#${(16777216 | this._9783).toString(16).substring(1)}`
                }
                get _6224() {
                    return `rgb(${this._6030},${this._8293},${this._4434})`
                }
            }
            const w = new E
              , y = E;
            class v {
                _6808;
                _3636;
                _8212;
                _8955;
                _1633;
                _4764;
                constructor(t, _, e) {
                    this._6808 = t,
                    this._3636 = f,
                    this._8212 = -1,
                    this._8955 = _,
                    this._1633 = e,
                    this._4764 = new Map
                }
            }
            const C = new v(-1,w,"")
              , b = v;
            var S;
            !function(t) {
                t[t._3277 = 1] = "_3277",
                t[t._5555 = 2] = "_5555",
                t[t._2830 = 3] = "_2830",
                t[t._6064 = 4] = "_6064",
                t[t._6132 = 5] = "_6132",
                t[t._4709 = 6] = "_4709",
                t[t._7195 = 7] = "_7195"
            }(S || (S = {}));
            const A = S;
            class T extends i {
                _4087;
                _3334;
                _1559;
                _6161;
                _3411;
                _8999;
                _1513;
                constructor(t) {
                    super(),
                    this._4087 = t._4087,
                    this._3334 = t._3334,
                    this._1559 = t._1559,
                    this._6161 = t._6161,
                    this._3411 = t._3411,
                    this._8999 = t._3671,
                    this._1513 = t._1513
                }
                _7142() {
                    return this._8999
                }
                _1866(t) {
                    this._8999 !== t && (this._1513(t) ? (this._8999 = t,
                    this._8079("change", [t])) : console.warn(`[Setting] > ${this._4087}: value validation failed. Recieved value:`, t))
                }
            }
            class I extends T {
                constructor(t) {
                    super({
                        _4087: t._4087,
                        _3334: t._3334,
                        _1559: t._1559,
                        _6161: t._6161 || !1,
                        _3411: t._3411 || [],
                        _3671: t._3671,
                        _1513: t._1513 || I._2622
                    })
                }
                static _2622 = t=>!0 === t || !1 === t
            }
            class O extends T {
                _4721;
                _8053;
                _7980;
                _1151;
                constructor(t) {
                    super({
                        _4087: t._4087,
                        _3334: t._3334,
                        _1559: t._1559,
                        _6161: t._6161 || !1,
                        _3411: t._3411 || [],
                        _3671: t._3671,
                        _1513: t._1513 || (_=>O._2622(t._4721, t._8053, _))
                    }),
                    this._4721 = t._4721,
                    this._8053 = t._8053,
                    this._7980 = t._7980,
                    this._1151 = t._1151 || O._4621
                }
                static _2622 = (t,_,e)=>{
                    const s = Math.min(_, t)
                      , i = Math.max(_, t);
                    return "number" == typeof e && e >= s && e <= i
                }
                ;
                static _4621 = t=>t.toString()
            }
            class L extends T {
                _3664;
                constructor(t) {
                    super({
                        _4087: t._4087,
                        _3334: t._3334,
                        _1559: t._1559,
                        _6161: t._6161 || !1,
                        _3411: t._3411 || [],
                        _3671: t._3671,
                        _1513: t._1513 || (_=>L._2622(t._3664, _))
                    }),
                    this._3664 = t._3664
                }
                static _2622 = (t,_)=>"string" == typeof _ && t.includes(_)
            }
            class P extends T {
                _3743;
                constructor(t) {
                    super({
                        _4087: t._4087,
                        _3334: t._3334,
                        _1559: t._1559,
                        _6161: t._6161 || !1,
                        _3411: t._3411 || [],
                        _3671: t._3671,
                        _1513: t._1513 || (_=>P._2622(t._3743 || 0, _))
                    }),
                    this._3743 = t._3743 || 0
                }
                static _2622 = (t,_)=>"string" == typeof _ && (0 === t || _.length <= t)
            }
            class N extends T {
                _1045;
                constructor(t) {
                    super({
                        _4087: t._4087,
                        _3334: t._3334,
                        _1559: t._1559,
                        _6161: t._6161 || !1,
                        _3411: t._3411 || [],
                        _3671: (t._3923 || 0) << 24 | t._8955,
                        _1513: t._1513 || N._2622
                    }),
                    this._1045 = void 0 !== t._3923
                }
                static _2622 = t=>"number" == typeof t
            }
            class M extends T {
                _3857;
                constructor(t) {
                    super({
                        _4087: t._4087,
                        _3334: t._3334,
                        _1559: t._1559,
                        _6161: t._6161 || !1,
                        _3411: t._3411 || [],
                        _3671: t._3671,
                        _1513: t._1513 || M._2622
                    }),
                    this._3857 = t._3857 || 1
                }
                static _2622 = t=>Array.isArray(t) && 2 === t.length && "string" == typeof t[0] && "string" == typeof t[1]
            }
            const R = {
                QUICK_CHAT_1_MESSAGE: new P({
                    _4087: "Quick chat 1 message",
                    _3334: "Quick chat 1 message.",
                    _1559: ["Chat", "Quick chat"],
                    _3671: "Feed me!",
                    _3743: 80
                }),
                QUICK_CHAT_2_MESSAGE: new P({
                    _4087: "Quick chat 2 message",
                    _3334: "Quick chat 2 message.",
                    _1559: ["Chat", "Quick chat"],
                    _3671: "Split into me!",
                    _3743: 80
                }),
                QUICK_CHAT_3_MESSAGE: new P({
                    _4087: "Quick chat 3 message",
                    _3334: "Quick chat 3 message.",
                    _1559: ["Chat", "Quick chat"],
                    _3671: "Need backup!",
                    _3743: 80
                }),
                QUICK_CHAT_4_MESSAGE: new P({
                    _4087: "Quick chat 4 message",
                    _3334: "Quick chat 4 message.",
                    _1559: ["Chat", "Quick chat"],
                    _3671: "Enemy spotted!",
                    _3743: 80
                }),
                QUICK_CHAT_5_MESSAGE: new P({
                    _4087: "Quick chat 5 message",
                    _3334: "Quick chat 5 message.",
                    _1559: ["Chat", "Quick chat"],
                    _3671: "Need a teammate!",
                    _3743: 80
                }),
                QUICK_CHAT_6_MESSAGE: new P({
                    _4087: "Quick chat 6 message",
                    _3334: "Quick chat 6 message.",
                    _1559: ["Chat", "Quick chat"],
                    _3671: "",
                    _3743: 80
                }),
                QUICK_CHAT_7_MESSAGE: new P({
                    _4087: "Quick chat 7 message",
                    _3334: "Quick chat 7 message.",
                    _1559: ["Chat", "Quick chat"],
                    _3671: "",
                    _3743: 80
                }),
                QUICK_CHAT_8_MESSAGE: new P({
                    _4087: "Quick chat 8 message",
                    _3334: "Quick chat 8 message.",
                    _1559: ["Chat", "Quick chat"],
                    _3671: "",
                    _3743: 80
                }),
                QUICK_CHAT_9_MESSAGE: new P({
                    _4087: "Quick chat 9 message",
                    _3334: "Quick chat 9 message.",
                    _1559: ["Chat", "Quick chat"],
                    _3671: "",
                    _3743: 80
                }),
                QUICK_CHAT_10_MESSAGE: new P({
                    _4087: "Quick chat 10 message",
                    _3334: "Quick chat 10 message.",
                    _1559: ["Chat", "Quick chat"],
                    _3671: "",
                    _3743: 80
                })
            }
              , k = {
                HK_SELECT_PLAYER_FOR_SPECTATING: new M({
                    _4087: "Select player to spectate",
                    _3334: "Select a player to spectate.",
                    _1559: ["Controls", "Spectate controls"],
                    _3671: ["NONE", "NONE"],
                    _3857: 2
                }),
                HK_SPLIT: new M({
                    _4087: "Split",
                    _3334: "Split your orbs into 2 equal halves.",
                    _1559: ["Controls", "Player controls"],
                    _3671: ["SPACE", "NONE"]
                }),
                HK_SPLIT_2X: new M({
                    _4087: "Split 2X",
                    _3334: "Split 2 times.",
                    _1559: ["Controls", "Player controls"],
                    _3671: ["R", "NONE"]
                }),
                HK_SPLIT_3X: new M({
                    _4087: "Split 3X",
                    _3334: "Split 3 times.",
                    _1559: ["Controls", "Player controls"],
                    _3671: ["G", "NONE"]
                }),
                HK_SPLIT_4X: new M({
                    _4087: "Split 4X",
                    _3334: "Split 4 times.",
                    _1559: ["Controls", "Player controls"],
                    _3671: ["T", "NONE"]
                }),
                HK_SPLIT_6X: new M({
                    _4087: "Split 6X",
                    _3334: "Split 6 times.",
                    _1559: ["Controls", "Player controls"],
                    _3671: ["F", "NONE"]
                }),
                HK_EJECT: new M({
                    _4087: "Eject",
                    _3334: "Eject a microrb from each of your orbs.",
                    _1559: ["Controls", "Player controls"],
                    _3671: ["W", "NONE"]
                }),
                HK_MACRO_EJECT: new M({
                    _4087: "Macro eject",
                    _3334: "Keep ejecting microrbs until the button is released.",
                    _1559: ["Controls", "Player controls"],
                    _3671: ["E", "NONE"]
                }),
                HK_COMMANDER: new M({
                    _4087: "Commander",
                    _3334: "Emit a visual ping to direct teammate where to go.",
                    _1559: ["Controls", "Player controls"],
                    _3671: ["NONE", "NONE"],
                    _3411: [{
                        _6808: "COMMANDER",
                        _3671: !0
                    }]
                }),
                HK_RESPAWN: new M({
                    _4087: "Respawn",
                    _3334: "Respawn at a new position (only possible for 10 seconds after spawning).",
                    _1559: ["Controls", "Player controls"],
                    _3671: ["BACKQUOTE", "NONE"]
                }),
                HK_SWITCH_ACTIVE_PLAYER_UNIT: new M({
                    _4087: "Switch active player unit",
                    _3334: "Switch the active player unit in multibox mode.",
                    _1559: ["Controls", "Player controls"],
                    _3671: ["TAB", "NONE"]
                }),
                HK_CHANGE_SPECTATE_MODE: new M({
                    _4087: "Change spectate mode",
                    _3334: "Change the spectate mode.",
                    _1559: ["Controls", "Player controls"],
                    _3671: ["Q", "NONE"],
                    _3857: 2
                }),
                HK_STOP_MOVEMENT: new M({
                    _4087: "Stop movement",
                    _3334: "Stop the movement of your orbs.",
                    _1559: ["Controls", "Player controls"],
                    _3671: ["S", "NONE"]
                }),
                HK_TOGGLE_OWN_USERNAME: new M({
                    _4087: "Toggle own username",
                    _3334: "Toggle own orb username on or off.",
                    _1559: ["Controls", "Toggles"],
                    _3671: ["NONE", "NONE"]
                }),
                HK_TOGGLE_ENEMY_USERNAME: new M({
                    _4087: "Toggle enemy username",
                    _3334: "Toggle enemy orb username on or off.",
                    _1559: ["Controls", "Toggles"],
                    _3671: ["NONE", "NONE"]
                }),
                HK_TOGGLE_OWN_ENERGY: new M({
                    _4087: "Toggle own energy",
                    _3334: "Toggle own orb energy on or off.",
                    _1559: ["Controls", "Toggles"],
                    _3671: ["NONE", "NONE"]
                }),
                HK_TOGGLE_ENEMY_ENERGY: new M({
                    _4087: "Toggle enemy energy",
                    _3334: "Toggle enemy orb energy on or off.",
                    _1559: ["Controls", "Toggles"],
                    _3671: ["NONE", "NONE"]
                }),
                HK_TOGGLE_CUSTOM_SKINS: new M({
                    _4087: "Toggle teammates' custom skins",
                    _3334: "Toggle teammates' custom skins on or off.",
                    _1559: ["Controls", "Toggles"],
                    _3671: ["NONE", "NONE"]
                }),
                HK_TOGGLE_OWN_CUSTOM_SKINS: new M({
                    _4087: "Toggle own custom skin",
                    _3334: "Toggle own custom skin on or off.",
                    _1559: ["Controls", "Toggles"],
                    _3671: ["NONE", "NONE"]
                }),
                HK_CHATROOM_SWITCH_TO_GLOBAL: new M({
                    _4087: "Global channel",
                    _3334: "Switch to global channel in chatroom.",
                    _1559: ["Controls", "Chatroom channel"],
                    _3671: ["NONE", "NONE"]
                }),
                HK_CHATROOM_SWITCH_TO_TEAM: new M({
                    _4087: "Team channel",
                    _3334: "Switch to team channel in chatroom.",
                    _1559: ["Controls", "Chatroom channel"],
                    _3671: ["NONE", "NONE"]
                }),
                HK_SAVE_INSTANT_REPLAY: new M({
                    _4087: "Save instant replay",
                    _3334: "Save an instant replay.",
                    _1559: ["Controls", "Replay controls"],
                    _3671: ["NONE", "NONE"],
                    _3411: [{
                        _6808: "INSTANT_REPLAY",
                        _3671: !0
                    }]
                }),
                HK_QUICK_CHAT_1: new M({
                    _4087: "Quick chat 1",
                    _3334: "Send quick chat 1 message.",
                    _1559: ["Controls", "Quick chat"],
                    _3671: ["1", "NONE"]
                }),
                HK_QUICK_CHAT_2: new M({
                    _4087: "Quick chat 2",
                    _3334: "Send quick chat 2 message.",
                    _1559: ["Controls", "Quick chat"],
                    _3671: ["2", "NONE"]
                }),
                HK_QUICK_CHAT_3: new M({
                    _4087: "Quick chat 3",
                    _3334: "Send quick chat 3 message.",
                    _1559: ["Controls", "Quick chat"],
                    _3671: ["3", "NONE"]
                }),
                HK_QUICK_CHAT_4: new M({
                    _4087: "Quick chat 4",
                    _3334: "Send quick chat 4 message.",
                    _1559: ["Controls", "Quick chat"],
                    _3671: ["4", "NONE"]
                }),
                HK_QUICK_CHAT_5: new M({
                    _4087: "Quick chat 5",
                    _3334: "Send quick chat 5 message.",
                    _1559: ["Controls", "Quick chat"],
                    _3671: ["5", "NONE"]
                }),
                HK_QUICK_CHAT_6: new M({
                    _4087: "Quick chat 6",
                    _3334: "Send quick chat 6 message.",
                    _1559: ["Controls", "Quick chat"],
                    _3671: ["6", "NONE"]
                }),
                HK_QUICK_CHAT_7: new M({
                    _4087: "Quick chat 7",
                    _3334: "Send quick chat 7 message.",
                    _1559: ["Controls", "Quick chat"],
                    _3671: ["7", "NONE"]
                }),
                HK_QUICK_CHAT_8: new M({
                    _4087: "Quick chat 8",
                    _3334: "Send quick chat 8 message.",
                    _1559: ["Controls", "Quick chat"],
                    _3671: ["8", "NONE"]
                }),
                HK_QUICK_CHAT_9: new M({
                    _4087: "Quick chat 9",
                    _3334: "Send quick chat 9 message.",
                    _1559: ["Controls", "Quick chat"],
                    _3671: ["9", "NONE"]
                }),
                HK_QUICK_CHAT_10: new M({
                    _4087: "Quick chat 10",
                    _3334: "Send quick chat 10 message.",
                    _1559: ["Controls", "Quick chat"],
                    _3671: ["0", "NONE"]
                }),
                HK_ZOOM_LEVEL_1: new M({
                    _4087: "Camera zoom level 1",
                    _3334: "Set camera zoom to level 1.",
                    _1559: ["Controls", "Camera zoom level"],
                    _3671: ["ALT+1", "NONE"]
                }),
                HK_ZOOM_LEVEL_2: new M({
                    _4087: "Camera zoom level 2",
                    _3334: "Set camera zoom to level 2.",
                    _1559: ["Controls", "Camera zoom level"],
                    _3671: ["ALT+2", "NONE"]
                }),
                HK_ZOOM_LEVEL_3: new M({
                    _4087: "Camera zoom level 3",
                    _3334: "Set camera zoom to level 3.",
                    _1559: ["Controls", "Camera zoom level"],
                    _3671: ["ALT+3", "NONE"]
                }),
                HK_ZOOM_LEVEL_4: new M({
                    _4087: "Camera zoom level 4",
                    _3334: "Set camera zoom to level 4.",
                    _1559: ["Controls", "Camera zoom level"],
                    _3671: ["ALT+4", "NONE"]
                }),
                HK_ZOOM_LEVEL_5: new M({
                    _4087: "Camera zoom level 5",
                    _3334: "Set camera zoom to level 5.",
                    _1559: ["Controls", "Camera zoom level"],
                    _3671: ["ALT+5", "NONE"]
                })
            }
              , x = {
                STOP_MOVEMENT_ON_MENU_OPEN: new I({
                    _4087: "Stop movement on menu open",
                    _3334: "Stop the movement of your orbs if the menu is open.",
                    _1559: ["Gameplay", "Menu"],
                    _3671: !0
                }),
                ELEMENT_ANIMATION_SOFTENING: new O({
                    _4087: "Element animation softening",
                    _3334: "Soften the animation of the elements.",
                    _1559: ["Gameplay", "Animation"],
                    _3671: 160,
                    _4721: 100,
                    _8053: 300,
                    _7980: 10,
                    _1151: t=>(t - 100) / 2 + "%"
                }),
                CAMERA_MOVEMENT_SPEED: new O({
                    _4087: "Camera movement speed",
                    _3334: "Set the movement speed of the camera.",
                    _1559: ["Gameplay", "Camera"],
                    _3671: 8,
                    _4721: 101,
                    _8053: 2,
                    _7980: -1,
                    _1151: t=>102 - t + "%"
                }),
                CAMERA_ZOOM_SPEED: new O({
                    _4087: "Camera zoom speed",
                    _3334: "Set the zoom speed of the camera.",
                    _1559: ["Gameplay", "Camera"],
                    _3671: 4,
                    _4721: 2,
                    _8053: 20,
                    _7980: 1,
                    _1151: t=>.5 * t + "x"
                }),
                CAMERA_AUTO_ZOOM: new I({
                    _4087: "Camera auto zoom",
                    _3334: "Automatically set the camera zoom level based on your total energy.",
                    _1559: ["Gameplay", "Camera"],
                    _3671: !1
                }),
                SHOW_OWN_USERNAME: new I({
                    _4087: "Show own username",
                    _3334: "Show own username on orbs.",
                    _1559: ["Gameplay", "Orb"],
                    _3671: !0
                }),
                SHOW_ENEMY_USERNAME: new I({
                    _4087: "Show enemy's username",
                    _3334: "Show enemy's username on orbs.",
                    _1559: ["Gameplay", "Orb"],
                    _3671: !0
                }),
                SHOW_OWN_ENERGY: new I({
                    _4087: "Show own energy",
                    _3334: "Show energy amount on own orbs.",
                    _1559: ["Gameplay", "Orb"],
                    _3671: !0
                }),
                SHOW_ENEMY_ENERGY: new I({
                    _4087: "Show enemy's energy",
                    _3334: "Show energy amount on enemy's orbs.",
                    _1559: ["Gameplay", "Orb"],
                    _3671: !0
                }),
                SHOW_TEAM_NAME: new I({
                    _4087: "Show team name",
                    _3334: "Show team names on orbs.",
                    _1559: ["Gameplay", "Orb"],
                    _3671: !0
                }),
                SHOW_CUSTOM_SKINS: new I({
                    _4087: "Show teammates' custom skins",
                    _3334: "Show custom skins on orbs.",
                    _1559: ["Gameplay", "Orb"],
                    _3671: !0
                }),
                SHOW_OWN_CUSTOM_SKINS: new I({
                    _4087: "Show own custom skin",
                    _3334: "Show custom skins on own orbs.",
                    _1559: ["Gameplay", "Orb"],
                    _3671: !0
                }),
                SHOW_SHIELDS: new I({
                    _4087: "Show shields",
                    _3334: "Show shields on orbs.",
                    _1559: ["Gameplay", "Orb"],
                    _3671: !0
                }),
                ORB_OVERLAP_HIGHLIGHTING: new L({
                    _4087: "Orb overlap highlighting",
                    _3334: "Highlight overlapped orbs.",
                    _1559: ["Gameplay", "Orb"],
                    _3671: "auto",
                    _3664: ["off", "auto", "on"]
                }),
                AUTO_SWITCH_ACTIVE_PLAYER_UNIT: new I({
                    _4087: "Auto switch active player unit",
                    _3334: "Auto switch active player unit upon death of the active one.",
                    _1559: ["Gameplay", "Multibox"],
                    _3671: !0
                }),
                ACTIVE_PLAYER_UNIT_ARROW_INDICATOR: new I({
                    _4087: "Active player unit arrow indicator",
                    _3334: "Show an arrow indicator on own orbs to distinguish between active and inactive player unit.",
                    _1559: ["Gameplay", "Multibox"],
                    _3671: !0
                }),
                INSTANT_REPLAY: new I({
                    _4087: "Instant replay",
                    _3334: "Toggle instant replay on or off.",
                    _1559: ["Gameplay", "Instant replay"],
                    _3671: !0
                }),
                INSTANT_REPLAY_LENGTH: new O({
                    _4087: "Instant replay clip length",
                    _3334: "Set the length of the instant replay clip (in seconds).",
                    _1559: ["Gameplay", "Instant replay"],
                    _3671: 5,
                    _4721: 5,
                    _8053: 120,
                    _7980: 5,
                    _1151: t=>`${t}s`,
                    _3411: [{
                        _6808: "INSTANT_REPLAY",
                        _3671: !0
                    }]
                }),
                CURSOR_LINES: new I({
                    _4087: "Cursor lines",
                    _3334: "Toggle cursor lines on or off.",
                    _1559: ["Gameplay", "Misc"],
                    _3671: !1
                }),
                WORLD_BACKGROUND_IMAGE: new I({
                    _4087: "World background",
                    _3334: "Toggle world background on or off.",
                    _1559: ["Gameplay", "Misc"],
                    _3671: !0
                }),
                COMMANDER: new I({
                    _4087: "Commander",
                    _3334: "Toggle commander on or off.",
                    _1559: ["Gameplay", "Misc"],
                    _3671: !0
                })
            }
              , B = {
                RESOLUTION: new O({
                    _4087: "Resolution",
                    _3334: "Change the resolution of the screen. Lower resolution means more FPS.",
                    _1559: ["Graphics", "General"],
                    _3671: 100,
                    _4721: 50,
                    _8053: 100,
                    _7980: 10,
                    _1151: t=>`${t}%`
                }),
                ANTI_ALIASING: new L({
                    _4087: "Antialiasing",
                    _3334: "Select the antialiasing method or turn it off.",
                    _1559: ["Graphics", "General"],
                    _3671: "off",
                    _3664: ["off", "msaa"],
                    _6161: !0
                }),
                TEXTURE_QUALITY: new L({
                    _4087: "Global texture quality",
                    _3334: "Select global texture quality.",
                    _1559: ["Graphics", "Textures"],
                    _3671: "medium",
                    _3664: ["low", "medium", "high"],
                    _6161: !0
                }),
                BACKGROUND_IMAGE_QUALITY: new L({
                    _4087: "Background image quality",
                    _3334: "Select background image quality.\nLow: 1024px\nMedium: 2048px\nHigh: 4096px",
                    _1559: ["Graphics", "Textures"],
                    _3671: "medium",
                    _3664: ["low", "medium", "high"]
                }),
                ORB_SHADOW: new I({
                    _4087: "Orb shadow",
                    _3334: "Toggle orb shadow on or off.",
                    _1559: ["Graphics", "General"],
                    _3671: !0
                })
            }
              , H = {
                SHOW_TEAM_LIST: new L({
                    _4087: "Show team list",
                    _3334: "Show or hide team list hud.",
                    _1559: ["Huds", "General"],
                    _3671: "show",
                    _3664: ["show", "hide"]
                }),
                SHOW_LEADERBOARD: new L({
                    _4087: "Show leaderboard",
                    _3334: "Show or hide leaderboard hud.",
                    _1559: ["Huds", "General"],
                    _3671: "show",
                    _3664: ["show", "hide"]
                }),
                SHOW_CHATBOX: new L({
                    _4087: "Show chat box",
                    _3334: "Show or hide chat box hud.",
                    _1559: ["Huds", "General"],
                    _3671: "show",
                    _3664: ["show", "hide"]
                }),
                SHOW_KILLFEED: new L({
                    _4087: "Show kill feed",
                    _3334: "Show or hide the kill feed hud.",
                    _1559: ["Huds", "General"],
                    _3671: "show",
                    _3664: ["show", "hide"]
                }),
                SHOW_METRICS: new L({
                    _4087: "Show metrics",
                    _3334: "Show or hide metrics hud.",
                    _1559: ["Huds", "General"],
                    _3671: "show",
                    _3664: ["show", "hide"]
                }),
                SHOW_MINIMAP: new L({
                    _4087: "Show minimap",
                    _3334: "Show or hide minimap hud.",
                    _1559: ["Huds", "General"],
                    _3671: "show",
                    _3664: ["show", "hide"]
                })
            }
              , U = {
                BORDER_COLOR: new N({
                    _4087: "Border color",
                    _3334: "Change the color of the world border.",
                    _1559: ["Theme", "World border"],
                    _8955: 16739748
                }),
                BORDER_SIZE: new O({
                    _4087: "Border size",
                    _3334: "Change the size of the world border.",
                    _1559: ["Theme", "World border"],
                    _3671: 50,
                    _4721: 0,
                    _8053: 100,
                    _7980: 2
                }),
                BORDER_GLOW_COLOR: new N({
                    _4087: "Border glow color",
                    _3334: "Change the color of the world border's glow.",
                    _1559: ["Theme", "World border"],
                    _8955: 16739748,
                    _3923: 20
                }),
                BORDER_GLOW_SIZE: new O({
                    _4087: "Border glow size",
                    _3334: "Change the size of the world border's glow.",
                    _1559: ["Theme", "World border"],
                    _3671: 0,
                    _4721: 0,
                    _8053: 100,
                    _7980: 2
                }),
                ORB_SHADOW_INTENSITY: new O({
                    _4087: "Orb shadow intensity",
                    _3334: "Change the intensity of orb shadow.",
                    _1559: ["Theme", "Orb"],
                    _3671: 15,
                    _4721: 10,
                    _8053: 100,
                    _7980: 5,
                    _3411: [{
                        _6808: "ORB_SHADOW",
                        _3671: !0
                    }]
                }),
                ORB_STYLE: new L({
                    _4087: "Orb style",
                    _3334: "Choose the visual style of orbs",
                    _1559: ["Theme", "Orb"],
                    _3671: "flat",
                    _3664: ["flat", "convex"]
                }),
                ORB_TRANSPARENCY: new O({
                    _4087: "Orb transparency",
                    _3334: "Change the transparency of orbs.",
                    _1559: ["Theme", "Orb"],
                    _3671: 0,
                    _4721: 0,
                    _8053: 50,
                    _7980: 5
                }),
                ORB_COLORING: new L({
                    _4087: "Orb coloring",
                    _3334: "Choose the coloring mode of orbs. DEFAULT: use the default orb color, CUSTOM: use the custom orb tint color",
                    _1559: ["Theme", "Orb"],
                    _3671: "default",
                    _3664: ["default", "tint"]
                }),
                ORB_TINT_COLOR: new N({
                    _4087: "Orb tint color",
                    _3334: "Set the tint color to use for orbs. Required Orb Coloring setting to be set as TINT.",
                    _1559: ["Theme", "Orb"],
                    _8955: 16777215,
                    _3411: [{
                        _6808: "ORB_COLORING",
                        _3671: "tint"
                    }]
                }),
                OWN_ORB_COLORING: new L({
                    _4087: "Own orb coloring",
                    _3334: "Choose the coloring mode of your orbs. DEFAULT: use the default orb color, CUSTOM: use the custom own orb color, MULTIBOX: use multibox accent colors (available only in multibox mode)",
                    _1559: ["Theme", "Orb"],
                    _3671: "multibox",
                    _3664: ["default", "custom", "multibox"]
                }),
                CUSTOM_OWN_ORB_COLOR: new N({
                    _4087: "Custom own orb color",
                    _3334: "Set the custom orb color to use for your orbs. Required Own Orb Coloring setting to be set as CUSTOM.",
                    _1559: ["Theme", "Orb"],
                    _8955: 16739748,
                    _3411: [{
                        _6808: "OWN_ORB_COLORING",
                        _3671: "custom"
                    }]
                }),
                ILL_ORB_BASE_COLOR: new N({
                    _4087: "Ill orb base color",
                    _3334: "Change the base color of ill orb.",
                    _1559: ["Theme", "Ill orb"],
                    _8955: 16739747,
                    _3923: 20
                }),
                ILL_ORB_BORDER_COLOR: new N({
                    _4087: "Ill orb border color",
                    _3334: "Change the border color of ill orb.",
                    _1559: ["Theme", "Ill orb"],
                    _8955: 16739748
                }),
                ILL_ORB_GLOW_COLOR: new N({
                    _4087: "Ill orb glow color",
                    _3334: "Change ill orb's glow color.",
                    _1559: ["Theme", "Ill orb"],
                    _8955: 15678849,
                    _3923: 25
                }),
                ILL_ORB_GLOW_SIZE: new O({
                    _4087: "Ill orb glow size",
                    _3334: "Change ill orb's glow size.",
                    _1559: ["Theme", "Ill orb"],
                    _3671: 100,
                    _4721: 0,
                    _8053: 100,
                    _7980: 5
                }),
                PARTICLE_COLOR: new N({
                    _4087: "Particle color",
                    _3334: "Change the color of particle.",
                    _1559: ["Theme", "Particle"],
                    _8955: 16739748
                }),
                PARTICLE_GLOW_COLOR: new N({
                    _4087: "Particle glow color",
                    _3334: "Change the color of particle's glow.",
                    _1559: ["Theme", "Particle"],
                    _8955: 16739748,
                    _3923: 20
                }),
                PARTICLE_GLOW_SIZE: new O({
                    _4087: "Particle glow size",
                    _3334: "Change the size of particle's glow.",
                    _1559: ["Theme", "Particle"],
                    _3671: 0,
                    _4721: 0,
                    _8053: 100,
                    _7980: 5
                }),
                BACKGROUND_COLOR: new N({
                    _4087: "Background color",
                    _3334: "Change the background color of the screen.",
                    _1559: ["Theme", "Background"],
                    _8955: 1315860
                }),
                BACKGROUND_IMAGE_URL: new P({
                    _4087: "Background image url",
                    _3334: "URL of the background image of the world.",
                    _1559: ["Theme", "Background"],
                    _3671: "https://i.imgur.com/aKvo1jQ.png",
                    _3411: [{
                        _6808: "WORLD_BACKGROUND_IMAGE",
                        _3671: !0
                    }]
                }),
                BACKGROUND_IMAGE_COLOR: new N({
                    _4087: "Background image color",
                    _3334: "Change the color of the background image.",
                    _1559: ["Theme", "Background"],
                    _8955: 12632256,
                    _3411: [{
                        _6808: "WORLD_BACKGROUND_IMAGE",
                        _3671: !0
                    }]
                }),
                ACTIVE_PLAYER_UNIT_ACCENT_COLOR: new N({
                    _4087: "Active player unit accent color",
                    _3334: "Set the accent color for the active player unit.",
                    _1559: ["Theme", "Multibox"],
                    _8955: 9588991
                }),
                INACTIVE_PLAYER_UNIT_ACCENT_COLOR: new N({
                    _4087: "Inactive player unit accent color",
                    _3334: "Set the accent color for the inactive player unit.",
                    _1559: ["Theme", "Multibox"],
                    _8955: 16777215
                }),
                CURSOR_LINE_COLOR: new N({
                    _4087: "Cursor line color",
                    _3334: "Set the color for the cursor line.",
                    _1559: ["Theme", "Cursor line"],
                    _8955: 16777215,
                    _3411: [{
                        _6808: "CURSOR_LINES",
                        _3671: !0
                    }]
                }),
                CURSOR_LINE_THICKNESS: new O({
                    _4087: "Cursor line thickness",
                    _3334: "Change the thickness of the cursor line.",
                    _1559: ["Theme", "Cursor line"],
                    _3671: 6,
                    _4721: 6,
                    _8053: 15,
                    _7980: 1,
                    _1151: t=>(t - 5).toString(),
                    _3411: [{
                        _6808: "CURSOR_LINES",
                        _3671: !0
                    }]
                })
            }
              , D = {
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
              , W = t=>{
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
                            const s = D[e];
                            void 0 !== s && (_.settings[s] = t[e])
                        }
                    }
                }
                return _
            }
              , G = "R10:SETTINGS"
              , K = new Map([W, t=>{
                const _ = {
                    settings: {},
                    version: 3
                };
                if ("object" == typeof t.settings && null !== t.settings) {
                    const e = {
                        ...t.settings
                    };
                    if ("number" == typeof e.ELEMENT_ANIMATION_SPEED) {
                        const t = e.ELEMENT_ANIMATION_SPEED;
                        e.ELEMENT_ANIMATION_SOFTENING = Math.min(300, Math.max(100, t)),
                        delete e.ELEMENT_ANIMATION_SPEED
                    }
                    "number" == typeof e.CAMERA_MOVEMENT_SPEED && (e.CAMERA_MOVEMENT_SPEED = 22 - e.CAMERA_MOVEMENT_SPEED),
                    _.settings = {
                        ...e
                    }
                }
                return _
            }
            ].map(((t,_)=>[_ + 1, t])))
              , F = {
                ...x,
                ...B,
                ...U,
                ...k,
                ...R,
                ...H
            }
              , Z = (()=>{
                const t = {}
                  , _ = Object.getOwnPropertyNames(F);
                for (const e of _) {
                    const _ = F[e];
                    t[e] = _._7142()
                }
                return t
            }
            )();
            function $(t) {
                for (; 3 !== t.version; )
                    t = (K.get(t.version) || W)(t);
                return t
            }
            function Y() {
                const t = {
                    version: 3,
                    settings: {}
                }
                  , _ = Object.getOwnPropertyNames(F);
                for (const e of _) {
                    const _ = F[e];
                    t.settings[e] = _._7142()
                }
                localStorage.setItem(G, JSON.stringify(t))
            }
            !function() {
                !function() {
                    const t = localStorage.getItem("settings");
                    null !== t && (localStorage.setItem(G, t),
                    localStorage.removeItem("settings"),
                    localStorage.removeItem("settings:version"))
                }();
                let t = {};
                try {
                    const _ = localStorage.getItem(G);
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
                const _ = $(t).settings
                  , e = Object.getOwnPropertyNames(_);
                for (const t of e)
                    if (Object.prototype.hasOwnProperty.call(F, t)) {
                        const e = F[t]
                          , s = _[t];
                        e._1866(s)
                    }
            }(),
            function() {
                const t = Object.getOwnPropertyNames(F);
                for (const _ of t)
                    F[_]._9070("change", Y)
            }();
            const Q = F
              , V = class {
                _7996;
                _8212;
                _7155;
                constructor(t) {
                    this._7996 = new DataView(t),
                    this._8212 = 0,
                    this._7155 = t.byteLength
                }
                get _6514() {
                    return this._8212 >= this._7155
                }
                _7249() {
                    const t = this._7996.getUint8(this._8212);
                    return this._8212 += 1,
                    t
                }
                _9782() {
                    const t = this._7996.getInt8(this._8212);
                    return this._8212 += 1,
                    t
                }
                _4067() {
                    const t = this._7996.getUint16(this._8212, !0);
                    return this._8212 += 2,
                    t
                }
                _6832() {
                    const t = this._7996.getInt16(this._8212, !0);
                    return this._8212 += 2,
                    t
                }
                _8740() {
                    const t = this._7996.getUint32(this._8212, !0);
                    return this._8212 += 4,
                    t
                }
                _1584() {
                    const t = this._7996.getInt32(this._8212, !0);
                    return this._8212 += 4,
                    t
                }
                _9341() {
                    const t = this._7996.getFloat32(this._8212, !0);
                    return this._8212 += 4,
                    t
                }
                _2306() {
                    const t = this._7996.getFloat64(this._8212, !0);
                    return this._8212 += 8,
                    t
                }
                _7169() {
                    let t = "";
                    const _ = this._7249();
                    for (let e = 0; e < _; e++) {
                        const _ = this._7249();
                        t += String.fromCharCode(_)
                    }
                    return t
                }
                _9481() {
                    let t = "";
                    const _ = this._4067();
                    for (let e = 0; e < _; e++) {
                        const _ = this._7249();
                        t += String.fromCharCode(_)
                    }
                    return t
                }
                _9746() {
                    let t = "";
                    const _ = this._7249();
                    for (let e = 0; e < _; e++) {
                        const _ = this._4067();
                        t += String.fromCharCode(_)
                    }
                    return t
                }
                _8748() {
                    let t = "";
                    const _ = this._4067();
                    for (let e = 0; e < _; e++) {
                        const _ = this._4067();
                        t += String.fromCharCode(_)
                    }
                    return t
                }
                _3139(t) {
                    this._8212 += t
                }
                _4518() {
                    this._8212 = 0
                }
            }
              , j = class {
                _6149;
                _3185;
                _7633;
                _2243;
                constructor(t=0, _=0, e=0, s=0) {
                    this._6149 = t,
                    this._3185 = _,
                    this._7633 = e,
                    this._2243 = s
                }
            }
            ;
            var X;
            !function(t) {
                t[t._1626 = 1] = "_1626",
                t[t._9800 = 2] = "_9800",
                t[t._1728 = 3] = "_1728"
            }(X || (X = {}));
            const z = X
              , q = new class extends i {
                _7588;
                _3232;
                constructor() {
                    super(),
                    this._7588 = 0,
                    this._3232 = 0
                }
                get _2357() {
                    return this._7588
                }
                get _7899() {
                    return this._3232
                }
                _6468() {
                    this._7588 = window.innerWidth,
                    this._3232 = window.innerHeight,
                    window.addEventListener("resize", this._4718.bind(this))
                }
                _4718() {
                    this._7588 = window.innerWidth,
                    this._3232 = window.innerHeight,
                    this._8079("resize")
                }
            }
              , J = class {
                _7402;
                _8653;
                _1238;
                _3295;
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
                    this._7402 = t,
                    this._8653 = _,
                    this._1238 = e,
                    this._3295 = r._2624(s)
                }
                _6468() {
                    this._7402.addEventListener("mouseenter", this._6813.bind(this)),
                    this._8653.addEventListener("scroll", this._6813.bind(this)),
                    window.addEventListener("resize", this._6813.bind(this));
                    const t = this._3295._7800;
                    let _ = !1
                      , e = 0
                      , s = 0;
                    t.addEventListener("mousedown", (t=>{
                        _ = !0,
                        o._3658((()=>{
                            e = t.clientY,
                            s = this._8653.scrollTop
                        }
                        ))
                    }
                    )),
                    window.addEventListener("mousemove", (i=>{
                        _ && null !== t.parentElement && o._3658((()=>{
                            const t = i.clientY - e
                              , _ = this._8653.scrollHeight / this._1238.offsetHeight
                              , n = s + t * _;
                            (n < 0 || n > this._8653.scrollHeight - this._8653.offsetHeight) && (e = i.clientY,
                            s = this._8653.scrollTop),
                            o._3851((()=>{
                                this._8653.scroll(0, n)
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
                _6813() {
                    o._3658((()=>{
                        const t = this._8653.scrollTop / this._8653.scrollHeight * 100
                          , _ = this._1238.offsetHeight * (t / 100);
                        this._3295._9798("top", `${Math.floor(_)}px`);
                        const e = this._8653.offsetHeight / this._8653.scrollHeight * 100
                          , s = this._1238.offsetHeight * (e / 100);
                        this._3295._9798("height", `${Math.floor(s)}px`)
                    }
                    ))
                }
                _9837() {
                    o._3658((()=>{
                        const t = this._8653.scrollHeight;
                        o._3851((()=>{
                            this._8653.scroll(0, t)
                        }
                        ))
                    }
                    ))
                }
                _5624() {
                    o._3658((()=>{
                        o._3851((()=>{
                            this._8653.scroll(0, 0)
                        }
                        ))
                    }
                    ))
                }
            }
              , tt = class extends i {
                _5953;
                _9424;
                constructor(t) {
                    super(),
                    t.addEventListener("mouseenter", (()=>{
                        this._8079("mouseenter")
                    }
                    )),
                    this._5953 = r._2624(t),
                    this._9424 = !1
                }
                _8032() {
                    return this._5953._7800
                }
                _1390() {
                    return this._9424
                }
                _7705() {
                    this._9424 || (this._5953._9798("display", "flex"),
                    this._9424 = !0)
                }
                _8601() {
                    this._9424 && (this._5953._9798("display", "none"),
                    this._9424 = !1)
                }
            }
            ;
            var _t = e(396);
            const et = class extends tt {
                _4125;
                _8999;
                constructor(t, _) {
                    const e = _t.ZP.createElement("div", {
                        class: "sm-row"
                    }, _t.ZP.createElement("div", {
                        class: "sm-setting-name"
                    }, t.toUpperCase()), _t.ZP.createElement("div", {
                        class: "sm-toggle",
                        onClick: ()=>{
                            this._8079("change", [!this._8999])
                        }
                    }, _t.ZP.createElement("div", {
                        class: ["sm-toggle__slider", _ && "sm-toggle__slider--active"]
                    })))
                      , s = e.children[1].children[0];
                    super(e),
                    this._4125 = r._2624(s),
                    this._8999 = _
                }
                _1866(t) {
                    this._8999 !== t && (t ? this._4125._8307("sm-toggle__slider--active") : this._4125._4748("sm-toggle__slider--active"),
                    this._8999 = t)
                }
                _7142() {
                    return this._8999
                }
            }
              , st = class extends tt {
                _4924;
                _4135;
                _1336;
                _8126;
                _1326;
                _8999;
                _4250;
                constructor(t, _, e, s, i, n) {
                    const o = (i - _) / (e - _) * 100
                      , h = n(i);
                    let a = !1;
                    const c = ()=>{
                        a = !1
                    }
                      , l = _t.ZP.createElement("div", {
                        class: "sm-row"
                    }, _t.ZP.createElement("div", {
                        class: "sm-setting-name"
                    }, t.toUpperCase()), _t.ZP.createElement("div", {
                        class: "sm-range-value"
                    }, h), _t.ZP.createElement("div", {
                        class: "sm-range",
                        onMouseDown: t=>{
                            a = !0;
                            const _ = this._6349(t.offsetX);
                            this._8079("change", [_])
                        }
                        ,
                        onMouseMove: t=>{
                            if (!a || 0 === t.movementX)
                                return;
                            const _ = this._6349(t.offsetX);
                            this._8079("change", [_])
                        }
                        ,
                        onMouseUp: c,
                        onMouseLeave: c
                    }, _t.ZP.createElement("div", {
                        class: "sm-range__fill",
                        style: `width: ${o.toFixed(0)}%`
                    })));
                    super(l),
                    this._4924 = r._2624(l.children[1]),
                    this._4135 = r._2624(l.children[2].children[0]),
                    this._1336 = _,
                    this._8126 = e,
                    this._1326 = s,
                    this._8999 = i,
                    this._4250 = n
                }
                _6349(t) {
                    const _ = 30 + window.innerWidth / 100 * 5 - 6;
                    t = Math.max(0, t - 3),
                    t = Math.min(_, t);
                    const e = (this._8126 - this._1336) * (t / _);
                    return this._1336 + Math.floor(e / this._1326) * this._1326
                }
                _1866(t) {
                    if (this._8999 !== t) {
                        const _ = (t - this._1336) / (this._8126 - this._1336) * 100;
                        this._4135._9798("width", `${_.toFixed(0)}%`),
                        this._4924._7917 = this._4250(t),
                        this._8999 = t
                    }
                }
                _7142() {
                    return this._8999
                }
            }
              , it = class extends tt {
                _1925;
                _8999;
                constructor(t, _, e) {
                    const s = new Map;
                    for (const t of _) {
                        const _ = ["sm-multi-choice__item", t === e && "sm-multi-choice__item--active"]
                          , i = ()=>{
                            this._8079("change", [t])
                        }
                          , n = _t.ZP.createElement("div", {
                            class: _,
                            onMouseDown: i
                        }, t.toUpperCase())
                          , o = r._2624(n);
                        s.set(t, o)
                    }
                    const i = [...s.values()].map((t=>t._7800));
                    super(_t.ZP.createElement("div", {
                        class: "sm-row"
                    }, _t.ZP.createElement("div", {
                        class: "sm-setting-name"
                    }, t.toUpperCase()), _t.ZP.createElement("div", {
                        class: "sm-multi-choice"
                    }, i))),
                    this._1925 = s,
                    this._8999 = e
                }
                _1866(t) {
                    if (this._8999 !== t) {
                        const _ = this._1925.get(this._8999)
                          , e = this._1925.get(t);
                        void 0 !== _ && void 0 !== e ? (_._4748("sm-multi-choice__item--active"),
                        e._8307("sm-multi-choice__item--active"),
                        this._8999 = t) : console.error("MultiChoice value set failed. Item is undefined.", [_, e])
                    }
                }
                _7142() {
                    return this._8999
                }
            }
              , nt = class extends tt {
                _3763;
                _8999;
                constructor(t, _) {
                    const e = _t.ZP.createElement("div", {
                        class: "sm-row"
                    }, _t.ZP.createElement("div", {
                        class: "sm-setting-name"
                    }, t.toUpperCase()), _t.ZP.createElement("input", {
                        class: "sm-input-box",
                        value: _,
                        tabIndex: -1,
                        onBlur: ()=>{
                            this._8079("change", [this._3763.value])
                        }
                        ,
                        onInput: ()=>{
                            this._8079("input")
                        }
                    }));
                    super(e),
                    this._3763 = e.children[1],
                    this._8999 = _
                }
                _1866(t) {
                    this._8999 !== t && (this._3763.value = t,
                    this._8999 = t)
                }
                _7142() {
                    return this._8999
                }
            }
            ;
            var ot = e(508)
              , rt = e.n(ot);
            class ht extends tt {
                _4872;
                _1095;
                _5729;
                _8999;
                constructor(t, _, e) {
                    const s = ht._5325(_, e)
                      , i = _t.ZP.createElement("div", {
                        class: "sm-row"
                    }, _t.ZP.createElement("div", {
                        class: "sm-setting-name"
                    }, t.toUpperCase()), _t.ZP.createElement("div", {
                        class: "sm-color-box"
                    }, _t.ZP.createElement("div", {
                        class: "sm-color-box__preview",
                        style: {
                            backgroundColor: s
                        }
                    })))
                      , n = i.children[1]
                      , o = n.children[0]
                      , h = new (rt())({
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
                        this._1095.setColor(s),
                        this._1095.off("show", a)
                    }
                    ;
                    h.on("change", (()=>{
                        const t = this._1095.getColor().toRGBA()
                          , _ = t[0] << 16 | t[1] << 8 | t[2] << 0
                          , e = (this._5729 ? Math.round(100 * t[3]) : 0) << 24 | _;
                        this._8999 !== e && this._8079("change", [e])
                    }
                    )),
                    h.on("show", a),
                    super(i),
                    this._4872 = r._2624(o),
                    this._1095 = h,
                    this._5729 = e,
                    this._8999 = _
                }
                _1866(t) {
                    if (this._8999 !== t) {
                        const _ = ht._5325(t, this._5729);
                        this._4872._9798("background-color", _),
                        this._1095.setColor(_),
                        this._8999 = t
                    }
                }
                _7142() {
                    return this._8999
                }
                static _5325(t, _) {
                    const e = t >> 16 & 255
                      , s = t >> 8 & 255
                      , i = 255 & t;
                    return _ ? `rgba(${e}, ${s}, ${i}, ${(t >> 24 & 255) / 100})` : `rgb(${e}, ${s}, ${i})`
                }
            }
            const at = ht
              , ct = new Map([..."0123456789".split("").map((t=>[`Digit${t}`, t])), ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((t=>[`Key${t}`, t])), ["Escape", "ESC"], ["Backspace", "BACKSPACE"], ["Tab", "TAB"], ["Enter", "ENTER"], ["NumpadEnter", "ENTER"], ["ShiftLeft", "SHIFT"], ["ShiftRight", "SHIFT"], ["Space", "SPACE"], ["ArrowUp", "UP"], ["ArrowDown", "DOWN"], ["ArrowLeft", "LEFT"], ["ArrowRight", "RIGHT"], ["Backquote", "BACKQUOTE"], ["Delete", "DELETE"]]);
            function lt(t, _, e, s) {
                const i = ct.get(t);
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
            class ut {
                _2856;
                constructor(t) {
                    this._2856 = t
                }
                _6468() {
                    document.addEventListener("keydown", (t=>{
                        this._3298("keydown", t)
                    }
                    )),
                    document.addEventListener("keyup", (t=>{
                        this._3298("keyup", t)
                    }
                    ))
                }
                _3298(t, _) {
                    if ("Tab" === _.key && _.preventDefault(),
                    _.repeat)
                        return;
                    const e = lt(_.code, _.ctrlKey, _.altKey, _.metaKey);
                    e.length < 1 || this._2856(_, t, e)
                }
            }
            function dt(t) {
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
            class mt {
                _2856;
                _4563;
                _2266;
                constructor(t) {
                    this._2856 = t,
                    this._4563 = 0,
                    this._2266 = 0
                }
                _6468() {
                    document.addEventListener("mousedown", this._9942.bind(this)),
                    document.addEventListener("mouseup", this._7897.bind(this)),
                    document.addEventListener("mousemove", this._8796.bind(this)),
                    document.addEventListener("contextmenu", this._4907.bind(this)),
                    document.addEventListener("wheel", this._8952.bind(this))
                }
                _9942(t) {
                    const _ = dt(t.button);
                    this._2856(t, "mousedown", _)
                }
                _7897(t) {
                    const _ = dt(t.button);
                    this._2856(t, "mouseup", _)
                }
                _8796(t) {
                    this._4563 = t.clientX,
                    this._2266 = t.clientY
                }
                _4907(t) {
                    t.preventDefault(),
                    this._2856(t, "contextmenu", "")
                }
                _8952(t) {
                    this._2856(t, "mousescroll", "")
                }
            }
            const ft = class extends tt {
                _2394;
                _1796;
                _8999;
                _2817;
                constructor(t, _, e) {
                    const s = _t.ZP.createElement("div", {
                        class: "sm-row"
                    }, _t.ZP.createElement("div", {
                        class: "sm-setting-name"
                    }, t.toUpperCase()), _t.ZP.createElement("div", {
                        class: "sm-control-input-box",
                        tabIndex: -1
                    }, _t.ZP.createElement("span", null, _[0]), _t.ZP.createElement("div", {
                        class: "sm-control-input-box__label"
                    }, "KEYBOARD")), _t.ZP.createElement("div", {
                        class: "sm-control-input-box",
                        tabIndex: -1
                    }, _t.ZP.createElement("span", null, _[1]), _t.ZP.createElement("div", {
                        class: "sm-control-input-box__label"
                    }, "MOUSE")))
                      , i = s.children[1]
                      , n = s.children[2]
                      , o = i.children[0]
                      , h = n.children[0];
                    i.addEventListener("keydown", (t=>{
                        t.preventDefault();
                        const _ = lt(t.code, t.ctrlKey, t.altKey, t.metaKey);
                        this._8079("change-keyboard", [_])
                    }
                    )),
                    n.addEventListener("mousedown", (t=>{
                        if (document.activeElement === n) {
                            const _ = dt(t.button);
                            this._8079("change-mouse-m", [_])
                        }
                    }
                    )),
                    n.addEventListener("keydown", (t=>{
                        t.preventDefault();
                        const _ = lt(t.code, t.ctrlKey, t.altKey, t.metaKey);
                        this._8079("change-mouse-k", [_])
                    }
                    )),
                    super(s),
                    this._2394 = r._2624(o),
                    this._1796 = r._2624(h),
                    this._8999 = _,
                    this._2817 = e
                }
                _1866(t) {
                    this._8999[0] !== t[0] && (this._8999[0] = t[0],
                    this._2394._7917 = t[0]),
                    this._8999[1] !== t[1] && (this._8999[1] = t[1],
                    this._1796._7917 = t[1])
                }
                _7142() {
                    return this._8999
                }
            }
              , pt = class extends tt {
                constructor(t) {
                    super(_t.ZP.createElement("div", {
                        class: "sm-sub-category-header"
                    }, _t.ZP.createElement("div", {
                        class: "sm-sub-category-header__decor"
                    }), _t.ZP.createElement("div", {
                        class: "sm-sub-category-header__text"
                    }, t.toUpperCase()), _t.ZP.createElement("div", {
                        class: "sm-sub-category-header__decor"
                    })))
                }
            }
              , gt = class extends i {
                _5953;
                _5726;
                constructor(t) {
                    super();
                    const _ = _t.ZP.createElement("div", {
                        className: "sm-category-selector"
                    }, t.toUpperCase());
                    _.addEventListener("click", (()=>{
                        this._8079("click")
                    }
                    )),
                    this._5953 = r._2624(_),
                    this._5726 = !1
                }
                _8032() {
                    return this._5953._7800
                }
                _8269(t) {
                    this._5726 !== t && (t ? this._5953._8307("sm-category-selector--active") : this._5953._4748("sm-category-selector--active"),
                    this._5726 = t)
                }
                _4620() {
                    return this._5726
                }
            }
              , Et = new class {
                _6318;
                _8061;
                constructor() {
                    this._6318 = null,
                    this._8061 = null
                }
                _6468() {
                    const t = document.getElementById("sm-info-setting-name")
                      , _ = document.getElementById("sm-info-setting-description");
                    this._6318 = r._2624(t),
                    this._8061 = r._2624(_)
                }
                _6813(t, _) {
                    if (null === this._6318 || null === this._8061)
                        throw new Error("Settings menu info box > called update before setup.");
                    this._6318._7917 = t,
                    this._8061._7917 = _
                }
            }
            ;
            class wt extends i {
                _5953;
                _8999;
                constructor() {
                    super();
                    const t = _t.ZP.createElement("i", {
                        class: "dialog-box__checkbox iconfont iconfont-checkbox"
                    });
                    t.addEventListener("click", (()=>{
                        this._8999 = !this._8999,
                        this._8542(),
                        this._8079("change", [this._8999])
                    }
                    )),
                    this._5953 = r._2624(t),
                    this._8999 = !0
                }
                _7142() {
                    return this._8999
                }
                _8032() {
                    return this._5953._7800
                }
                _8542() {
                    this._8999 ? (this._5953._8307("iconfont-checkbox"),
                    this._5953._4748("iconfont-checkbox-outline")) : (this._5953._8307("iconfont-checkbox-outline"),
                    this._5953._4748("iconfont-checkbox"))
                }
            }
            const yt = new class extends i {
                _4451;
                _2644;
                constructor() {
                    super(),
                    this._4451 = null,
                    this._2644 = new Set
                }
                _1665() {
                    this._2738(),
                    document.getElementById("imex-menu-close-btn").onclick = ()=>{
                        this._8601()
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
                                    this._8079("import", [_, this._2644])
                                } catch (t) {
                                    console.error(t),
                                    u._7225("Settings", "Corrupt file, import failed.")
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
                        this._8079("export", [this._2644])
                    }
                    ));
                    const _ = document.getElementById("import-export-menu");
                    this._4451 = r._2624(_)
                }
                _2738() {
                    const t = document.getElementById("imex-menu-categories")
                      , _ = ["Gameplay", "Graphics", "Theme", "Controls", "Chat", "Huds"];
                    for (const e of _) {
                        const _ = new wt;
                        _._9070("change", (t=>{
                            t ? this._2644.add(e) : this._2644.delete(e)
                        }
                        ));
                        const s = _t.ZP.createElement("div", {
                            class: "imex-menu__category"
                        }, _t.ZP.createElement("div", {
                            class: "dialog-box__text imex-menu__category-title"
                        }, e, " settings"), _._8032());
                        this._2644.add(e),
                        t.appendChild(s)
                    }
                }
                _7705() {
                    this._4451._9798("display", "flex")
                }
                _8601() {
                    this._4451._9798("display", "none")
                }
            }
            ;
            class vt extends i {
                _2672;
                constructor(t) {
                    super();
                    const _ = document.getElementById(t);
                    if (!(_ instanceof HTMLDivElement))
                        throw new Error(`[Settings Menu] > Invalid bottom button id: ${t}`);
                    _.addEventListener("click", (()=>{
                        this._8079("click")
                    }
                    )),
                    _.addEventListener("mouseenter", (()=>{
                        this._8079("mouseenter")
                    }
                    )),
                    this._2672 = _
                }
                _8032() {
                    return this._2672
                }
            }
            const Ct = new class {
                _6937;
                _5389;
                _2170;
                _6428;
                _7781;
                _7770;
                constructor() {
                    this._6937 = null,
                    this._5389 = null,
                    this._2170 = null,
                    this._6428 = null,
                    this._7781 = null,
                    this._7770 = null
                }
                get _5954() {
                    if (null === this._6937)
                        throw new Error("[Settings Menu Bottom Buttons] > setup not called.");
                    return this._6937
                }
                get _2917() {
                    if (null === this._5389)
                        throw new Error("[Settings Menu Bottom Buttons] > setup not called.");
                    return this._5389
                }
                get _4518() {
                    if (null === this._2170)
                        throw new Error("[Settings Menu Bottom Buttons] > setup not called.");
                    return this._2170
                }
                get _4837() {
                    if (null === this._6428)
                        throw new Error("[Settings Menu Bottom Buttons] > setup not called.");
                    return this._6428
                }
                get _1850() {
                    if (null === this._7781)
                        throw new Error("[Settings Menu Bottom Buttons] > setup not called.");
                    return this._7781
                }
                _6468() {
                    this._6937 = new vt("sm-btn-back"),
                    this._5389 = new vt("sm-btn-discard"),
                    this._2170 = new vt("sm-btn-reset"),
                    this._6428 = new vt("sm-btn-import-export"),
                    this._7781 = new vt("sm-btn-restart"),
                    this._7770 = r._2624(this._7781._8032()),
                    this._7770._9798("display", "none")
                }
                _7188(t) {
                    if (null === this._7770)
                        throw new Error("[Settings Menu Bottom Buttons] > setup not called.");
                    this._7770._9798("display", t ? "flex" : "none")
                }
            }
              , bt = new class extends h {
                _2621;
                _2708;
                _1238;
                _2644;
                constructor() {
                    super("settings-menu"),
                    this._2621 = "",
                    this._2708 = {},
                    this._1238 = null,
                    this._2644 = new Map
                }
                _6468() {
                    Ct._6468(),
                    Et._6468(),
                    this._4337(),
                    this._6992(),
                    this._9070("show", this._4714.bind(this)),
                    this._9070("hide", this._5529.bind(this)),
                    yt._1665(),
                    yt._9070("import", this._2854.bind(this)),
                    yt._9070("export", this._5420.bind(this));
                    const t = document.getElementById("sm-category-container-wrapper");
                    this._1238 = new J(t),
                    this._1238._6468()
                }
                _6179() {
                    return this._2621
                }
                _8951() {
                    for (const [t,_] of this._2644)
                        if (this._2621 !== t)
                            for (const t of _._4019.values()) {
                                t._4207._8601();
                                for (const _ of t._4764.values())
                                    _._8601()
                            }
                    const t = this._2644.get(this._2621);
                    if (void 0 !== t)
                        for (const _ of t._4019.values()) {
                            let t = !0;
                            for (const [e,s] of _._4764) {
                                const _ = Q[e];
                                let i = !0;
                                for (const t of _._3411)
                                    if (Q[t._6808]._7142() !== t._3671) {
                                        i = !1;
                                        break
                                    }
                                i ? (s._7705(),
                                t = !1) : s._8601()
                            }
                            t ? _._4207._8601() : _._4207._7705()
                        }
                    else
                        console.error("Active settings category is undefined.")
                }
                _4337() {
                    this._9212(),
                    this._2738()
                }
                _1217(t) {
                    const _ = {
                        _4019: new Map
                    };
                    return this._2644.set(t, _),
                    _
                }
                _2419(t, _) {
                    const e = {
                        _4207: new pt(_),
                        _4764: new Map
                    };
                    return t._4019.set(_, e),
                    e
                }
                _3513(t) {
                    if (t instanceof I)
                        return this._7565(t);
                    if (t instanceof O)
                        return this._3029(t);
                    if (t instanceof L)
                        return this._2869(t);
                    if (t instanceof P)
                        return this._3663(t);
                    if (t instanceof N)
                        return this._7353(t);
                    if (t instanceof M)
                        return this._3734(t);
                    throw new Error("Unknown category element type.")
                }
                _9212() {
                    const t = Object.getOwnPropertyNames(Q);
                    for (const _ of t) {
                        const t = Q[_]
                          , e = t._1559[0]
                          , s = this._2644.get(e) || this._1217(e)
                          , i = t._1559[1]
                          , n = s._4019.get(i) || this._2419(s, i)
                          , o = this._3513(t);
                        n._4764.set(_, o),
                        t._9070("change", (()=>{
                            this._8951(),
                            this._1649()
                        }
                        )),
                        o._9070("mouseenter", (()=>{
                            Et._6813(t._4087, t._3334)
                        }
                        ))
                    }
                    const _ = document.getElementById("sm-category-container");
                    for (const t of this._2644.values())
                        for (const e of t._4019.values()) {
                            _.appendChild(e._4207._8032());
                            for (const t of e._4764.values())
                                _.appendChild(t._8032())
                        }
                }
                _2738() {
                    const t = document.getElementById("sm-category-selectors")
                      , _ = [];
                    for (const e of this._2644.keys()) {
                        const s = new gt(e);
                        s._9070("click", (()=>{
                            for (const t of _)
                                t._8269(!1);
                            s._8269(!0),
                            this._2621 = e,
                            this._8951(),
                            null !== this._1238 && (this._1238._6813(),
                            this._1238._5624())
                        }
                        )),
                        _.push(s),
                        t.appendChild(s._8032())
                    }
                    _[0]._8032().click()
                }
                _6992() {
                    Ct._5954._9070("mouseenter", (()=>{
                        a._3040(a._5781)
                    }
                    )),
                    Ct._5954._9070("click", (()=>{
                        this._5779(),
                        a._3040(a._5104)
                    }
                    )),
                    Ct._2917._9070("mouseenter", (()=>{
                        a._3040(a._5781),
                        Et._6813("Discard changes", "Discard all the changes made.")
                    }
                    )),
                    Ct._2917._9070("click", (()=>{
                        this._2220(),
                        a._3040(a._5104)
                    }
                    )),
                    Ct._4518._9070("mouseenter", (()=>{
                        a._3040(a._5781),
                        Et._6813("Reset", "Reset all the settings of the active category to their default values.")
                    }
                    )),
                    Ct._4518._9070("click", (()=>{
                        this._2792(),
                        a._3040(a._5104)
                    }
                    )),
                    Ct._4837._9070("mouseenter", (()=>{
                        a._3040(a._5781),
                        Et._6813("Import and export", "Import or export your settings.")
                    }
                    )),
                    Ct._4837._9070("click", (()=>{
                        yt._7705(),
                        a._3040(a._5104)
                    }
                    )),
                    Ct._1850._9070("mouseenter", (()=>{
                        a._3040(a._5781),
                        Et._6813("Restart", "Some changes require a game restart. Click the button to restart the game (This will reload the page).")
                    }
                    )),
                    Ct._1850._9070("click", (()=>{
                        this._8624()
                    }
                    ))
                }
                _7565(t) {
                    const _ = new et(t._4087,t._7142());
                    return _._9070("change", (_=>{
                        t._1866(_)
                    }
                    )),
                    t._9070("change", (t=>{
                        _._1866(t)
                    }
                    )),
                    _
                }
                _3029(t) {
                    const _ = new st(t._4087,t._4721,t._8053,t._7980,t._7142(),t._1151);
                    return _._9070("change", (_=>{
                        t._1866(_)
                    }
                    )),
                    t._9070("change", (t=>{
                        _._1866(t)
                    }
                    )),
                    _
                }
                _2869(t) {
                    const _ = new it(t._4087,t._3664,t._7142());
                    return _._9070("change", (_=>{
                        t._1866(_)
                    }
                    )),
                    t._9070("change", (t=>{
                        _._1866(t)
                    }
                    )),
                    _
                }
                _3663(t) {
                    const _ = new nt(t._4087,t._7142());
                    return _._9070("change", (_=>{
                        t._1866(_)
                    }
                    )),
                    t._9070("change", (t=>{
                        _._1866(t)
                    }
                    )),
                    _
                }
                _7353(t) {
                    const _ = new at(t._4087,t._7142(),t._1045);
                    return _._9070("change", (_=>{
                        t._1866(_)
                    }
                    )),
                    t._9070("change", (t=>{
                        _._1866(t)
                    }
                    )),
                    _
                }
                _3734(t) {
                    const _ = new ft(t._4087,[...t._7142()],t._3857);
                    return _._9070("change-keyboard", (_=>{
                        if (["", "ESC", "ENTER"].includes(_))
                            return;
                        ["BACKSPACE", "DELETE"].includes(_) && (_ = "NONE");
                        const e = [_, t._7142()[1]];
                        t._1866(e)
                    }
                    )),
                    _._9070("change-mouse-m", (_=>{
                        const e = [t._7142()[0], _];
                        t._1866(e)
                    }
                    )),
                    _._9070("change-mouse-k", (_=>{
                        if (["BACKSPACE", "DELETE"].includes(_)) {
                            const _ = [t._7142()[0], "NONE"];
                            t._1866(_)
                        }
                    }
                    )),
                    t._9070("change", (t=>{
                        _._1866([...t])
                    }
                    )),
                    _
                }
                _5779() {
                    ns._2006()
                }
                _2220() {
                    const t = Object.getOwnPropertyNames(this._2708);
                    for (const _ of t) {
                        const t = this._2708[_];
                        Q[_]._1866(Array.isArray(t) ? t.slice() : t)
                    }
                    Ct._7188(!1)
                }
                _2792() {
                    const t = Object.getOwnPropertyNames(Z);
                    for (const _ of t) {
                        const t = Q[_];
                        if (t._1559[0] === this._2621) {
                            const e = Z[_];
                            t._1866(Array.isArray(e) ? e.slice() : e)
                        }
                    }
                    this._1649()
                }
                _8624() {
                    window.location.reload()
                }
                _4714() {
                    this._2708 = {};
                    const t = Object.getOwnPropertyNames(Q);
                    for (const _ of t) {
                        const t = Q[_]._7142();
                        this._2708[_] = Array.isArray(t) ? t.slice() : t
                    }
                }
                _5529() {
                    const t = Object.getOwnPropertyNames(Q);
                    for (const _ of t) {
                        const t = Q[_]
                          , e = this._2708[_];
                        t._6161 && t._7142() !== e && t._1866(e)
                    }
                }
                _1649() {
                    let t = !1;
                    const _ = Object.getOwnPropertyNames(Q);
                    for (const e of _) {
                        const _ = Q[e];
                        if (_._6161) {
                            const s = this._2708[e]
                              , i = _._7142();
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
                    Ct._7188(t)
                }
                _2854(t, _) {
                    const e = $(t)
                      , s = Object.getOwnPropertyNames(Q);
                    for (const t of s) {
                        const s = Q[t]
                          , i = s._1559[0];
                        if (_.has(i) && Object.prototype.hasOwnProperty.call(e.settings, t)) {
                            const _ = e.settings[t];
                            s._1866(Array.isArray(_) ? _.slice() : _)
                        }
                    }
                    u._7225("Settings", "Import was successful.")
                }
                _5420(t) {
                    const _ = {
                        version: 3,
                        settings: {}
                    }
                      , e = Object.getOwnPropertyNames(Q);
                    for (const s of e) {
                        const e = Q[s]
                          , i = e._1559[0];
                        t.has(i) && (_.settings[s] = e._7142())
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
                        u._7225("Settings", "Export was successful.")
                    }
                    ), 50)
                }
            }
              , St = new class {
                _7402;
                _6876;
                _1959;
                _5682;
                _2069;
                _3975;
                constructor() {
                    this._7402 = {},
                    this._6876 = null,
                    this._1959 = {
                        _7328: null,
                        _4289: null
                    },
                    this._5682 = {
                        _7328: null,
                        _4289: null
                    },
                    this._2069 = {
                        _4251: 0,
                        _6032: 0,
                        _8517: 0,
                        _5194: 0
                    },
                    this._3975 = {
                        _2026: !1,
                        _2241: 0
                    }
                }
                get _1839() {
                    return this._7402
                }
                _6468() {
                    this._7402 = new c.W20;
                    const t = e(389)
                      , _ = e(418)
                      , s = new c.$rD(t,_,"screen-overlay-shader")
                      , i = new c.exe(s);
                    this._1959._7328 = new Float32Array([].concat([-1, -1, 0, 0, 0, .5], [-1, 1, 0, 0, 0, .5], [1, -1, 0, 0, 0, .5], [1, 1, 0, 0, 0, .5])),
                    this._1959._4289 = new Uint16Array([0, 1, 2, 1, 2, 3]),
                    this._5682._7328 = new c.lWr(this._1959._7328,!1,!1),
                    this._5682._4289 = new c.lWr(this._1959._4289,!0,!0);
                    const n = new c.ZXM;
                    n.addAttribute("aPosition", this._5682._7328, 2, !1, c.vK6.FLOAT, 24, 0),
                    n.addAttribute("aColor", this._5682._7328, 4, !1, c.vK6.FLOAT, 24, 8),
                    n.addIndex(this._5682._4289),
                    this._6876 = new c.Kj0(n,i),
                    this._1839.addChild(this._6876)
                }
                _6813() {
                    const t = ns._1130;
                    this._4413(t ? 1 : 0),
                    this._8689();
                    const _ = bt._1390 && "Theme" === bt._6179();
                    _ ? this._3975._2026 || (this._3975._2026 = !0,
                    this._3975._2241 = n._4081) : this._3975._2026 && (this._3975._2026 = !1,
                    this._3975._2241 = n._4081);
                    const e = Math.min(1, (n._4081 - this._3975._2241) / 400) ** .5
                      , s = 2 * Math.min(e, .5)
                      , i = 2 * Math.max(e - .5, 0);
                    _ ? (this._7509([1022836363, 1006946523, 1324929 | Math.floor(60 * (1 - s)) << 24, 313563 | Math.floor(60 * (1 - s)) << 24]),
                    this._1959._7328[12] = 1 - .75 * i,
                    this._1959._7328[18] = 1 - .5 * i) : (this._7509([687292043, 1006946523, 1324929 | Math.floor(60 * i) << 24, 313563 | Math.floor(60 * i) << 24]),
                    this._1959._7328[12] = .25 + .75 * s,
                    this._1959._7328[18] = .5 + .5 * s),
                    this._5682._7328.update(),
                    this._2069._6032 > 0 ? 1 !== this._7402.children.length && this._7402.addChild(this._6876) : 0 !== this._7402.children.length && this._7402.removeChildren()
                }
                _8689() {
                    const t = Math.min(1, (n._4081 - this._2069._5194) / 200);
                    this._2069._6032 = this._2069._4251 + (this._2069._8517 - this._2069._4251) * t
                }
                _4413(t) {
                    t !== this._2069._8517 && (this._2069._4251 = this._2069._6032,
                    this._2069._8517 = t,
                    this._2069._5194 = n._4081)
                }
                _7509(t) {
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
                          , s = e[3] * this._2069._6032;
                        this._1959._7328[6 * t + 2] = e[0] * s,
                        this._1959._7328[6 * t + 3] = e[1] * s,
                        this._1959._7328[6 * t + 4] = e[2] * s,
                        this._1959._7328[6 * t + 5] = s
                    }
                    this._5682._7328.update()
                }
            }
              , At = class {
            }
              , Tt = new class extends At {
                _7402;
                _1519;
                _6791;
                _6876;
                _5682;
                _6823;
                _2669;
                constructor() {
                    super(),
                    this._7402 = null,
                    this._1519 = null,
                    this._6791 = null,
                    this._6876 = null,
                    this._5682 = {
                        _6969: {
                            _7328: null,
                            _4289: null
                        },
                        _4408: {
                            _7328: null,
                            _4289: null
                        }
                    },
                    this._6823 = {
                        _7707: null,
                        _3217: null,
                        _2836: null
                    },
                    this._2669 = {
                        _8955: -1,
                        _6461: -1,
                        _3867: -1
                    }
                }
                _8274() {
                    return this._7402
                }
                _6468() {
                    this._7402 = new c.W20,
                    this._1519 = document.createElement("canvas"),
                    this._6791 = this._1519.getContext("2d"),
                    this._6823._7707 = new Float32Array(2),
                    this._6823._3217 = new Float32Array(2),
                    this._6823._2836 = new c.VL4(this._1519);
                    const t = e(109)
                      , _ = e(578)
                      , s = new c.$rD(t,_,"particles-shader")
                      , i = new c.exe(s,{
                        uTranslate: this._6823._7707,
                        uScale: this._6823._3217,
                        uTexture: this._6823._2836
                    })
                      , n = this._5682;
                    n._4408._7328 = new Float32Array(163830),
                    n._4408._4289 = new Uint16Array(65532),
                    n._6969._7328 = new c.lWr(new Float32Array(0),!1,!1),
                    n._6969._4289 = new c.lWr(new Uint16Array(0),!1,!0);
                    const o = new c.ZXM;
                    o.addAttribute("aPosition", n._6969._7328, 2, !1, c.vK6.FLOAT, 20, 0),
                    o.addAttribute("aAlpha", n._6969._7328, 1, !1, c.vK6.FLOAT, 20, 16),
                    o.addAttribute("aUV", n._6969._7328, 2, !1, c.vK6.FLOAT, 20, 8),
                    o.addIndex(n._6969._4289),
                    this._6876 = new c.Kj0(o,i),
                    this._7402.addChild(this._6876),
                    this._2852()
                }
                _2852() {
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
                            this._5682._4408._7328[_++] = t[e][0],
                            this._5682._4408._7328[_++] = t[e][1],
                            _ += 1;
                        const i = 6 * s;
                        this._5682._4408._4289[e++] = i + 0,
                        this._5682._4408._4289[e++] = i + 1,
                        this._5682._4408._4289[e++] = i + 5,
                        this._5682._4408._4289[e++] = i + 1,
                        this._5682._4408._4289[e++] = i + 2,
                        this._5682._4408._4289[e++] = i + 5,
                        this._5682._4408._4289[e++] = i + 3,
                        this._5682._4408._4289[e++] = i + 4,
                        this._5682._4408._4289[e++] = i + 2,
                        this._5682._4408._4289[e++] = i + 4,
                        this._5682._4408._4289[e++] = i + 5,
                        this._5682._4408._4289[e++] = i + 2
                    }
                }
                _7569() {
                    const t = Q.PARTICLE_COLOR._7142()
                      , _ = Q.PARTICLE_GLOW_SIZE._7142()
                      , e = Q.PARTICLE_GLOW_COLOR._7142();
                    if (this._2669._8955 === t && this._2669._6461 === _ && this._2669._3867 === e)
                        return;
                    this._2669._8955 = t,
                    this._2669._6461 = _,
                    this._2669._3867 = e;
                    const s = this._1519
                      , i = this._6791
                      , n = 8 + _
                      , o = n * (2 / Math.sqrt(3))
                      , r = (l = o,
                    l--,
                    l |= l >> 1,
                    l |= l >> 2,
                    1 + ((l |= l >> 4) | l >> 8))
                      , h = this._5216(t, !1)
                      , a = this._5216(e, !0)
                      , c = this._5216(16777215 & e, !0);
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
                    this._6823._2836.update(),
                    this._6823._2836.setSize(this._1519.width, this._1519.height)
                }
                _7251() {
                    const t = Math.min(5461, re._7048.length);
                    let _ = 0;
                    for (let e = 0; e < t; e++) {
                        const t = re._7048[e]
                          , s = t._4464 / 8 * (this._6791.canvas.width / 2);
                        for (let e = 0; e < 6; e++) {
                            const i = 2 * Math.PI * (e / 6)
                              , n = Math.cos(i)
                              , o = Math.sin(i);
                            this._5682._4408._7328[_++] = t._4563 + n * s,
                            this._5682._4408._7328[_++] = t._2266 + o * s,
                            _ += 2,
                            this._5682._4408._7328[_++] = t._3923
                        }
                    }
                    this._5682._6969._7328.update(this._5682._4408._7328.subarray(0, 30 * t)),
                    this._5682._6969._4289.update(this._5682._4408._4289.subarray(0, 12 * t))
                }
                _1591() {
                    this._6823._7707[0] = J_._5130._4563,
                    this._6823._7707[1] = J_._5130._2266,
                    this._6823._3217[0] = J_._5266 / (q_._5578 / 2),
                    this._6823._3217[1] = -J_._5266 / (q_._1264 / 2)
                }
                _5216(t, _) {
                    const e = (16711680 & t) >>> 16
                      , s = (65280 & t) >>> 8
                      , i = (255 & t) >>> 0;
                    return _ ? `rgba(${e}, ${s}, ${i}, ${((4278190080 & t) >>> 24) / 100})` : `rgb(${e}, ${s}, ${i})`
                }
                _6813() {
                    this._7569(),
                    this._7251(),
                    this._1591()
                }
            }
              , It = new class extends At {
                _7402;
                _6876;
                _5682;
                _6823;
                _2669;
                constructor() {
                    super(),
                    this._7402 = null,
                    this._6876 = null,
                    this._5682 = {
                        _7328: null,
                        _4289: null
                    },
                    this._6823 = {
                        uTranslate: null,
                        uScale: null,
                        uTexture: null,
                        uTint: null
                    },
                    this._2669 = {
                        _8861: .5,
                        _4654: -1,
                        _9378: ""
                    }
                }
                _8274() {
                    return this._7402
                }
                _6468() {
                    this._7402 = new c.W20,
                    this._3119(),
                    this._2852();
                    const t = this._2267()
                      , _ = this._3894();
                    this._6876 = new c.Kj0(t,_)
                }
                _6813() {
                    this._7402.removeChildren(),
                    Q.WORLD_BACKGROUND_IMAGE._7142() && (this._7569(),
                    this._7251(),
                    this._1591(),
                    this._7402.addChild(this._6876))
                }
                _3119() {
                    this._6823.uTranslate = new Float32Array(2),
                    this._6823.uScale = new Float32Array(2),
                    this._6823.uTexture = c.xEZ.WHITE.baseTexture,
                    this._6823.uTint = new Float32Array(4)
                }
                _2852() {
                    const t = new Float32Array(16)
                      , _ = new Uint16Array([0, 1, 2, 1, 2, 3]);
                    this._5682._7328 = new c.lWr(t,!1,!1),
                    this._5682._4289 = new c.lWr(_,!0,!0)
                }
                _2267() {
                    const t = new c.ZXM;
                    return t.addAttribute("aPosition", this._5682._7328, 2, !1, c.vK6.FLOAT, 16, 0),
                    t.addAttribute("aUV", this._5682._7328, 2, !1, c.vK6.FLOAT, 16, 8),
                    t.addIndex(this._5682._4289),
                    t
                }
                _3894() {
                    const t = new c.$rD(e(290),e(313),"background-shader");
                    return new c.exe(t,this._6823)
                }
                _7569() {
                    const t = this._6823.uTexture !== c.xEZ.WHITE.baseTexture ? Q.BACKGROUND_IMAGE_COLOR._7142() : Q.BACKGROUND_COLOR._7142();
                    this._2669._4654 !== t && (this._2669._4654 = t,
                    this._6823.uTint[0] = ((16711680 & t) >> 16) / 255,
                    this._6823.uTint[1] = ((65280 & t) >> 8) / 255,
                    this._6823.uTint[2] = ((255 & t) >> 0) / 255,
                    this._6823.uTint[3] = 1);
                    const _ = Q.BACKGROUND_IMAGE_URL._7142()
                      , e = Q.BACKGROUND_IMAGE_QUALITY._7142()
                      , s = 2 ** ("low" === e ? -1 : "high" === e ? 1 : 0);
                    this._2669._9378 === _ && this._2669._8861 === s || (this._2669._9378 = _,
                    this._2669._8861 = s,
                    this._6234(_, s).catch(console.error))
                }
                async _6234(t, _) {
                    this._6823.uTexture !== c.xEZ.WHITE.baseTexture && (this._6823.uTexture.destroy(),
                    this._6823.uTexture = c.xEZ.WHITE.baseTexture);
                    const e = new Image;
                    if (e.src = t,
                    e.crossOrigin = "anonymous",
                    await e.decode(),
                    this._2669._9378 !== t || this._2669._8861 !== _)
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
                    if (this._2669._9378 !== t || this._2669._8861 !== _)
                        return;
                    const r = URL.createObjectURL(o)
                      , h = new Image;
                    if (h.src = r,
                    await h.decode(),
                    URL.revokeObjectURL(r),
                    this._2669._9378 !== t || this._2669._8861 !== _)
                        return;
                    const a = new c.VL4(h,{
                        mipmap: c.WBB.OFF
                    });
                    this._6823.uTexture = a
                }
                _7251() {
                    const t = (65535 - re._7185) / 2
                      , _ = t
                      , e = t
                      , s = t + re._7185
                      , i = t + re._7185
                      , n = J_._3805
                      , o = n._6149 > _ ? n._6149 : _
                      , r = n._3185 > e ? n._3185 : e
                      , h = n._7633 < s ? n._7633 : s
                      , a = n._2243 < i ? n._2243 : i
                      , c = (o - _) / re._7185
                      , l = (r - e) / re._7185
                      , u = (h - _) / re._7185
                      , d = (a - e) / re._7185;
                    this._1776(0, o, r, c, l),
                    this._1776(1, h, r, u, l),
                    this._1776(2, o, a, c, d),
                    this._1776(3, h, a, u, d),
                    this._5682._7328.update()
                }
                _1776(t, _, e, s, i) {
                    t *= 4,
                    this._5682._7328.data[t] = _,
                    this._5682._7328.data[t + 1] = e,
                    this._5682._7328.data[t + 2] = s,
                    this._5682._7328.data[t + 3] = i
                }
                _1591() {
                    this._6823.uTranslate[0] = J_._5130._4563,
                    this._6823.uTranslate[1] = J_._5130._2266,
                    this._6823.uScale[0] = J_._5266 / (q_._5578 / 2),
                    this._6823.uScale[1] = -J_._5266 / (q_._1264 / 2)
                }
            }
            ;
            var Ot = e(526);
            const Lt = new class extends At {
                _7402;
                _6876;
                _5682;
                _6823;
                constructor() {
                    super(),
                    this._7402 = null,
                    this._6876 = null,
                    this._5682 = {
                        _7328: null,
                        _4289: null
                    },
                    this._6823 = {
                        _7707: new Float32Array(2),
                        _3217: new Float32Array(2)
                    }
                }
                _8274() {
                    return this._7402
                }
                _6468() {
                    this._7402 = new c.W20;
                    const t = e(995)
                      , _ = e(403)
                      , s = new c.$rD(t,_,"border-shader")
                      , i = new c.exe(s,{
                        uTranslate: this._6823._7707,
                        uScale: this._6823._3217
                    })
                      , n = Ot.mesh_gen_border_get_buffers();
                    this._5682._7328 = new c.lWr(n[0],!1,!1),
                    this._5682._4289 = new c.lWr(n[1],!1,!0);
                    const o = new c.ZXM;
                    o.addAttribute("aPosition", this._5682._7328, 2, !1, c.vK6.FLOAT, 24, 0),
                    o.addAttribute("aColor", this._5682._7328, 4, !1, c.vK6.FLOAT, 24, 8),
                    o.addIndex(this._5682._4289),
                    this._6876 = new c.Kj0(o,i),
                    this._7402.addChild(this._6876)
                }
                _7251() {
                    Ot.mesh_gen_border_update_buffers(re._7185, Q.BORDER_SIZE._7142(), Q.BORDER_COLOR._7142(), 3.5 * Q.BORDER_GLOW_SIZE._7142(), Q.BORDER_GLOW_COLOR._7142()),
                    this._5682._7328.update(),
                    this._5682._4289.update()
                }
                _1591() {
                    this._6823._7707[0] = J_._5130._4563,
                    this._6823._7707[1] = J_._5130._2266,
                    this._6823._3217[0] = J_._5266 / (q_._5578 / 2),
                    this._6823._3217[1] = -J_._5266 / (q_._1264 / 2)
                }
                _6813() {
                    this._7251(),
                    this._1591()
                }
            }
              , Pt = new class {
                _7402;
                _9181;
                _1599;
                _9594;
                _2930;
                _4073;
                constructor() {
                    this._7402 = document.getElementById("loading-screen"),
                    this._9181 = document.getElementById("ls-background"),
                    this._1599 = {
                        _6149: document.getElementById("ls-text-left"),
                        _7633: document.getElementById("ls-text-right")
                    },
                    this._9594 = document.getElementById("ls-progress-bar-fill"),
                    this._2930 = 0,
                    this._4073 = 1
                }
                async _6468() {
                    await this._3625(),
                    this._2930 = window.setInterval((()=>{
                        this._4073 = (this._4073 + 1) % 4;
                        const t = ".".repeat(this._4073);
                        this._1599._6149.textContent = `Please wait ${t}`
                    }
                    ), 300)
                }
                _5099() {
                    this._7402.style.opacity = "0",
                    window.clearInterval(this._2930),
                    window.setTimeout((()=>{
                        document.body.removeChild(this._7402),
                        this._7402 = null,
                        this._9181 = null,
                        this._1599._6149 = null,
                        this._1599._7633 = null,
                        this._9594 = null
                    }
                    ), 500)
                }
                _2683(t) {
                    this._1599._7633.textContent = t
                }
                _3114(t) {
                    this._9594.style.width = `${t}%`
                }
                async _3625() {
                    this._9181.src = "assets/images/loading-screen/background.webp?version=0.17.1";
                    try {
                        await this._9181.decode(),
                        this._9181.style.opacity = "1",
                        await this._2193(500)
                    } catch (t) {
                        console.warn("Loading screen background image failed to load. Skipping...")
                    }
                }
                async _2193(t) {
                    return new Promise((_=>{
                        window.setTimeout(_, t)
                    }
                    ))
                }
            }
              , Nt = [{
                _6334: "img",
                _6808: "TEXTURE_ATLAS_SHIELD_1",
                _9378: "assets/images/textures/shields/ATLAS_1.webp"
            }, {
                _6334: "img",
                _6808: "TEXTURE/SSS/P1",
                _9378: "assets/images/textures/SSS/p1.webp"
            }, {
                _6334: "img",
                _6808: "TEXTURE/SSS/P2",
                _9378: "assets/images/textures/SSS/p2.webp"
            }, {
                _6334: "img",
                _6808: "TEXTURE/H3D/COMMANDER",
                _9378: "assets/images/textures/H3D/commander.webp"
            }, {
                _6334: "img",
                _6808: "TEXTURE/H3D/OVERLAP_HELPER",
                _9378: "assets/images/textures/H3D/OVERLAP_HELPER.webp"
            }, {
                _6334: "txt",
                _6808: "titillium-web-font-xml",
                _9378: "assets/bitmap-fonts/titillium_web.fnt"
            }, {
                _6334: "img",
                _6808: "titillium-web-font-atlas",
                _9378: "assets/bitmap-fonts/titillium_web_0.png"
            }, {
                _6334: "json",
                _6808: "titles-info",
                _9378: "assets/misc/titles_info.json"
            }];
            Nt.forEach((t=>{
                const _ = new URL(t._9378,location.href);
                _.searchParams.append("version", "0.17.1"),
                t._9378 = _.toString()
            }
            ));
            const Mt = new class {
                _2672;
                _8922;
                _7762;
                constructor() {
                    this._2672 = document.getElementById("error-screen"),
                    this._8922 = document.getElementById("es-error"),
                    this._7762 = document.getElementById("es-description")
                }
                _7705(t, _, e) {
                    throw this._8922.textContent = `error: ${t}`,
                    void 0 === _ ? this._7762.style.display = "none" : (this._7762.style.display = "block",
                    this._7762.textContent = _),
                    this._2672.style.opacity = "1",
                    this._2672.style.transform = "perspective(1px) translateZ(0px)",
                    this._2672.style.visibility = "visible",
                    void 0 === e ? t : e
                }
            }
              , Rt = new class {
                _2773;
                _8853;
                constructor() {
                    this._2773 = new Map,
                    this._8853 = {
                        _7367: 0,
                        _6514: 0
                    }
                }
                async _1840() {
                    Pt._2683("Loading game resources");
                    const t = [];
                    for (const _ of Nt)
                        switch (_._6334) {
                        case "img":
                            t.push(this._5603(_));
                            break;
                        case "txt":
                            t.push(this._9608(_));
                            break;
                        case "json":
                            t.push(this._7272(_))
                        }
                    this._8853._7367 = t.length;
                    try {
                        await Promise.all(t)
                    } catch (t) {
                        Mt._7705("resource_load_failed", "One or more game resource has failed to load. Please try reloading the page to fix the problem.", t)
                    }
                }
                _4104(t) {
                    return this._2773.get(t)
                }
                async _5603(t) {
                    return new Promise(((_,e)=>{
                        const s = new Image;
                        s.crossOrigin = "anonymous",
                        s.addEventListener("load", (()=>{
                            s.decode().catch((()=>{
                                console.warn(["Failed to decode image resource:", `id: ${t._6808 || "none"}`, `url: ${t._9378}`].join("\n  "))
                            }
                            )).finally((()=>{
                                this._5345(t, s),
                                _()
                            }
                            ))
                        }
                        )),
                        s.addEventListener("error", (()=>{
                            e(this._1150(t))
                        }
                        )),
                        s.src = t._9378
                    }
                    ))
                }
                async _9608(t) {
                    return new Promise(((_,e)=>{
                        const s = new XMLHttpRequest;
                        s.addEventListener("load", (()=>{
                            this._5345(t, s.responseText),
                            _()
                        }
                        )),
                        s.addEventListener("error", (()=>{
                            const _ = this._1150(t);
                            e(_)
                        }
                        )),
                        s.open("GET", t._9378),
                        s.send()
                    }
                    ))
                }
                async _7272(t) {
                    return new Promise(((_,e)=>{
                        const s = new XMLHttpRequest;
                        s.addEventListener("load", (()=>{
                            this._5345(t, s.response),
                            _()
                        }
                        )),
                        s.addEventListener("error", (()=>{
                            const _ = this._1150(t);
                            e(_)
                        }
                        )),
                        s.responseType = "json",
                        s.open("GET", t._9378),
                        s.send()
                    }
                    ))
                }
                _5345(t, _) {
                    t._6808 && this._2773.set(t._6808, _),
                    this._8853._6514++,
                    this._2459()
                }
                _1150(t) {
                    return new Error(["Failed to load resource:", `id: ${t._6808 || "none"}`, `url: ${t._9378}`].join("\n  "))
                }
                _2459() {
                    const t = this._8853._7367
                      , _ = this._8853._6514;
                    Pt._2683(`Loading game resources (${_}/${t})`),
                    Pt._3114(10 + _ / t * 80)
                }
            }
              , kt = new class {
                _1519;
                _6791;
                _2414;
                _9729;
                _3651;
                _4470;
                constructor() {
                    this._1519 = null,
                    this._6791 = null,
                    this._2414 = !1,
                    this._9729 = null,
                    this._3651 = {
                        _5638: null,
                        _7399: {
                            _7119: null,
                            _1775: null
                        },
                        _3846: null,
                        _3031: null
                    },
                    this._4470 = {
                        _5638: {
                            _4140: "",
                            _1045: 0
                        },
                        _7399: {
                            _9111: 0,
                            _4942: 0,
                            _6461: 0,
                            _3867: 0
                        }
                    }
                }
                _6468() {
                    this._1519 = document.createElement("canvas"),
                    this._1519.width = 1024,
                    this._1519.height = 1024,
                    this._6791 = this._1519.getContext("2d"),
                    this._9729 = new c.VL4(this._1519),
                    this._3651._5638 = new c.xEZ(this._9729,this._2186(512, 0, 512)),
                    this._3651._7399._7119 = new c.xEZ(this._9729,this._2186(512, 512, 256)),
                    this._3651._7399._1775 = new c.xEZ(this._9729,this._2186(768, 512, 256)),
                    this._3651._3846 = new c.xEZ(this._9729,this._2186(512, 768, 64)),
                    this._3651._3031 = new Map,
                    this._6671(),
                    this._3106()
                }
                _6813() {
                    this._9537(),
                    this._2414 && (this._9729.update(),
                    this._2414 = !1)
                }
                _9537() {
                    this._1439(),
                    this._4589()
                }
                _1439() {
                    const t = Q.ORB_STYLE._7142()
                      , _ = Q.ORB_TRANSPARENCY._7142();
                    this._4470._5638._4140 === t && this._4470._5638._1045 === _ || (this._4470._5638._4140 = t,
                    this._4470._5638._1045 = _,
                    this._4930())
                }
                _4589() {
                    const t = Q.ILL_ORB_BORDER_COLOR._7142()
                      , _ = Q.ILL_ORB_BASE_COLOR._7142()
                      , e = Q.ILL_ORB_GLOW_SIZE._7142()
                      , s = Q.ILL_ORB_GLOW_COLOR._7142();
                    this._4470._7399._9111 === t && this._4470._7399._4942 === _ && this._4470._7399._6461 === e && this._4470._7399._3867 === s || (this._4470._7399._9111 = t,
                    this._4470._7399._4942 = _,
                    this._4470._7399._6461 = e,
                    this._4470._7399._3867 = s,
                    this._8913())
                }
                _3106() {
                    const t = Rt._4104("titillium-web-font-atlas");
                    this._6791.drawImage(t, 0, 0, 512, 512);
                    const _ = [[0, 65, 95, 105], [346, 290, 72, 105], [176, 290, 86, 105], [89, 290, 87, 105], [190, 65, 93, 105], [0, 290, 89, 105], [283, 65, 93, 105], [262, 290, 84, 105], [95, 65, 95, 105], [376, 65, 93, 105]];
                    for (let t = 0; t < 10; t++) {
                        const e = t.toString()
                          , s = _[t];
                        this._3651._3031.set(e, new c.xEZ(this._9729,new c.AeJ(s[0],s[1],s[2],s[3])))
                    }
                    this._2414 = !0
                }
                _4930() {
                    const t = this._6791
                      , _ = 512
                      , e = Math.log2(_)
                      , s = (_ - 2 * e) / 2
                      , i = this._4470._5638._4140
                      , n = 1 - this._4470._5638._1045 / 100;
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
                    this._2414 = !0
                }
                _8913() {
                    this._9500(),
                    this._7561(),
                    this._2414 = !0
                }
                _9500() {
                    const t = this._6791
                      , _ = 256
                      , e = Math.log2(_)
                      , s = (_ - 2 * e) / 2
                      , i = this._4470._7399._4942
                      , n = this._4470._7399._9111
                      , o = this._4470._7399._3867
                      , r = s * (this._4470._7399._6461 / 100);
                    if (t.save(),
                    t.clearRect(512, 512, _, _),
                    t.translate(512 + e, 512 + e),
                    t.beginPath(),
                    t.arc(s, s, 36, 0, 2 * Math.PI),
                    t.closePath(),
                    t.fillStyle = this._5216(i, !0),
                    t.fill(),
                    r > 0) {
                        const _ = t.createRadialGradient(s, s, 0, s, s, r);
                        _.addColorStop(0, this._5216(16777215 & o, !0)),
                        _.addColorStop(Math.min(1, 36 / r), this._5216(o, !0)),
                        _.addColorStop(1, this._5216(16777215 & o, !0)),
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
                    t.strokeStyle = this._5216(n, !1),
                    t.stroke();
                    const a = 2 * Math.PI * 31;
                    t.beginPath(),
                    t.arc(s, s, 31, 0, 2 * Math.PI),
                    t.closePath(),
                    t.setLineDash([.3 * a, .2 * a]),
                    t.lineWidth = 4,
                    t.strokeStyle = this._5216(n, !1),
                    t.stroke();
                    const c = 2 * Math.PI * 31;
                    t.beginPath(),
                    t.arc(s, s, 31, 0 + .5 * Math.PI, 2 * Math.PI + .5 * Math.PI),
                    t.closePath(),
                    t.setLineDash([.005 * c, .01 * c]),
                    t.lineWidth = 4,
                    t.strokeStyle = this._5216(n, !1),
                    t.stroke(),
                    t.restore(),
                    this._2414 = !0
                }
                _7561() {
                    const t = this._6791
                      , _ = 256
                      , e = Math.log2(_)
                      , s = (_ - 2 * e) / 2
                      , i = this._4470._7399._4942
                      , n = this._4470._7399._9111
                      , o = this._4470._7399._3867
                      , r = s * (this._4470._7399._6461 / 100);
                    if (t.save(),
                    t.clearRect(768, 512, _, _),
                    t.translate(768 + e, 512 + e),
                    t.beginPath(),
                    t.arc(s, s, 36, 0, 2 * Math.PI),
                    t.closePath(),
                    t.fillStyle = this._5216(i, !0),
                    t.fill(),
                    r > 0) {
                        const _ = t.createRadialGradient(s, s, 0, s, s, r);
                        _.addColorStop(0, this._5216(16777215 & o, !0)),
                        _.addColorStop(Math.min(1, 36 / r), this._5216(o, !0)),
                        _.addColorStop(1, this._5216(16777215 & o, !0)),
                        t.beginPath(),
                        t.arc(s, s, r, 0, 2 * Math.PI),
                        t.closePath(),
                        t.fillStyle = _,
                        t.fill()
                    }
                    t.beginPath(),
                    t.arc(s, s, 36, 0, 2 * Math.PI),
                    t.closePath(),
                    t.fillStyle = this._5216(n, !1),
                    t.fill(),
                    t.restore(),
                    this._2414 = !0
                }
                _6671() {
                    const t = this._6791
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
                _2186(t, _, e) {
                    const s = Math.log2(e);
                    return new c.AeJ(t + s,_ + s,e - 2 * s,e - 2 * s)
                }
                _5216(t, _) {
                    const e = (16711680 & t) >>> 16
                      , s = (65280 & t) >>> 8
                      , i = (255 & t) >>> 0;
                    return _ ? `rgba(${e}, ${s}, ${i}, ${((4278190080 & t) >>> 24) / 100})` : `rgb(${e}, ${s}, ${i})`
                }
            }
              , xt = new class {
                _8353;
                _4494;
                _6043;
                constructor() {
                    this._8353 = {
                        _7119: [],
                        _1775: []
                    },
                    this._4494 = {
                        _7119: 0,
                        _1775: 0
                    },
                    this._6043 = 36
                }
                _6468() {}
                _9978(t, _) {
                    const e = Q.ELEMENT_ANIMATION_SOFTENING._7142();
                    let s = 1;
                    t._8845 ? s = 1 - t._9157 : n._4081 - t._3082 < e && (s = (n._4081 - t._3082) / e);
                    const i = this._8353._7119[this._4494._7119++] || this._2378()
                      , o = t._7399._1884;
                    i.position.set(t._4563, t._2266),
                    i.scale.set(t._4464 / this._6043, t._4464 / this._6043),
                    i.alpha = s,
                    i.rotation = n._4081 % o / o * (2 * Math.PI),
                    _.addChild(i);
                    const r = t._8445
                      , h = this._8353._1775[this._4494._1775++] || this._7839()
                      , a = (r - 100) / 112 * .8 + .2;
                    h.position.set(t._4563, t._2266),
                    h.scale.set(t._4464 * a / this._6043, t._4464 * a / this._6043),
                    h.alpha = s,
                    _.addChild(h)
                }
                _2378() {
                    const t = new c.jyi(kt._3651._7399._7119);
                    return t.anchor.set(.5, .5),
                    this._8353._7119.push(t),
                    t
                }
                _7839() {
                    const t = new c.jyi(kt._3651._7399._1775);
                    return t.anchor.set(.5, .5),
                    this._8353._1775.push(t),
                    t
                }
                _4518() {
                    this._4494._7119 = 0,
                    this._4494._1775 = 0
                }
            }
              , Bt = new class {
                _8353;
                _4494;
                constructor() {
                    this._8353 = [],
                    this._4494 = 0
                }
                _9978(t, _) {
                    const e = Q.ELEMENT_ANIMATION_SOFTENING._7142();
                    let s = 1;
                    t._8845 ? s = 1 - t._9157 : n._4081 - t._3082 < e && (s = (n._4081 - t._3082) / e);
                    const i = this._8353[this._4494++] || this._5401();
                    i.position.set(t._4563, t._2266),
                    i.width = 2 * t._4464,
                    i.height = 2 * t._4464,
                    "tint" === Q.ORB_COLORING._7142() ? i.tint = t._3163._9783 : i.tint = t._8955._9783,
                    i.alpha = s,
                    _.addChild(i)
                }
                _5401() {
                    const t = new c.jyi(kt._3651._5638);
                    return t.anchor.set(.5, .5),
                    this._8353.push(t),
                    t
                }
                _4518() {
                    this._4494 = 0
                }
            }
              , Ht = new class {
                _9348;
                _4494;
                constructor() {
                    this._9348 = [],
                    this._4494 = 0
                }
                _6194() {
                    return this._9348[this._4494++] || this._5401()
                }
                _5401() {
                    const t = new c.jyi(kt._3651._3846);
                    return t.anchor.set(.5, 1),
                    t.scale.set(4, 4),
                    this._9348.push(t),
                    t
                }
                _4518() {
                    this._4494 = 0
                }
            }
              , Ut = new class {
                _8353;
                _8573;
                constructor() {
                    this._8353 = new Map,
                    this._8573 = new Map
                }
                _6468() {
                    for (let t = 0; t < 10; t++) {
                        const _ = t.toString();
                        this._8353.set(_, []),
                        this._8573.set(_, 0)
                    }
                }
                _4518() {
                    for (const t of this._8573.keys())
                        this._8573.set(t, 0)
                }
                _6194(t) {
                    const _ = [];
                    for (let e = 0; e < t.length; e++) {
                        const s = this._7659(t[e]);
                        s.position.set(72 * e - 36 * t.length, 0),
                        _.push(s)
                    }
                    const e = new c.W20;
                    return e.addChild(..._),
                    e
                }
                _7659(t) {
                    const _ = this._8353.get(t)
                      , e = this._8573.get(t)
                      , s = e < _.length ? _[e] : this._5401(t, _);
                    return this._8573.set(t, e + 1),
                    s
                }
                _5401(t, _) {
                    const e = kt._3651._3031.get(t)
                      , s = new c.jyi(e);
                    return _.push(s),
                    s
                }
            }
              , Dt = /(\bass\b)|(\btits)|bitch|shit|noob|fuck|nigg|negro|penis|vagina|(\bdick)|pussy|suck|whore|(\bhoe)|jizz|sex|porn|hentai|boob|(\brape)|slut|stupid|idiot/gi
              , Wt = new class {
                _4311(t) {
                    return t.replace(Dt, (t=>"*".repeat(t.length)))
                }
            }
            ;
            var Gt = e(140);
            const Kt = class {
                _6791;
                _9729;
                _6702;
                _1677;
                _7815;
                _7843;
                _8353;
                _4494;
                _7108;
                constructor(t, _, e, s) {
                    this._6791 = t,
                    this._9729 = _,
                    this._6702 = e,
                    this._1677 = s,
                    this._7815 = null,
                    this._7843 = null,
                    this._8353 = [],
                    this._4494 = 0,
                    this._7108 = -1 / 0
                }
                _2003() {
                    return null === this._7815
                }
                _5232() {
                    return this._7108
                }
                _5878() {
                    if (null !== this._7815)
                        return this._7815;
                    throw new Error("Dynamic texture key is null.")
                }
                _6441() {
                    if (null !== this._7843)
                        return this._7108 = n._4081,
                        this._8353[this._4494++] || this._5401();
                    throw new Error("Texture is null")
                }
                _4518() {
                    this._4494 = 0
                }
                _5674(t, _) {
                    const e = this._6791
                      , s = Math.ceil(Math.log2(this._6702._2357))
                      , i = Math.ceil(Math.log2(this._6702._7899))
                      , n = this._6702._2357 - 2 * s
                      , o = this._6702._7899 - 2 * i;
                    e.clearRect(this._6702._4563, this._6702._2266, this._6702._2357, this._6702._7899),
                    e.save(),
                    e.translate(this._6702._4563 + s, this._6702._2266 + i),
                    e.rect(0, 0, n, o),
                    e.clip();
                    const r = this._1677(e, t, _, n, o);
                    e.restore(),
                    this._7815 = t,
                    this._7843 = new c.xEZ(this._9729,new c.AeJ(this._6702._4563 + s + (n - r._2357) / 2,this._6702._2266 + i + (o - r._7899) / 2,r._2357,r._7899)),
                    this._8353 = [],
                    this._4494 = 0
                }
                _5401() {
                    const t = new c.jyi(this._7843);
                    return t.anchor.set(.5, .5),
                    this._8353.push(t),
                    t
                }
            }
              , Ft = class {
                _1519;
                _6791;
                _9729;
                _1516;
                _7349;
                _5182;
                _2414;
                constructor(t, _, e, s, i) {
                    this._1519 = document.createElement("canvas"),
                    this._1519.width = t,
                    this._1519.height = t;
                    const n = this._1519.getContext("2d");
                    if (null === n)
                        throw new Error("Failed to get CanvasRenderingContext2D.");
                    this._6791 = n,
                    this._9729 = new Gt.VL(this._1519),
                    this._1516 = new Map,
                    this._7349 = s,
                    this._5182 = {
                        _3911: [],
                        _3083: []
                    },
                    this._2414 = !1;
                    const o = Math.floor(t / _)
                      , r = Math.floor(t / e);
                    for (let t = 0; t < o; t++)
                        for (let s = 0; s < r; s++) {
                            const n = new Kt(this._6791,this._9729,{
                                _4563: t * _,
                                _2266: s * e,
                                _2357: _,
                                _7899: e
                            },i);
                            this._5182._3911.push(n),
                            this._5182._3083.push(n)
                        }
                }
                _7417() {
                    return this._5182._3083.length === this._5182._3911.length
                }
                _5754() {
                    return 0 === this._5182._3083.length
                }
                _6194(t) {
                    return this._1516.get(t) || null
                }
                _2624(t, _) {
                    const e = this._5182._3083.pop();
                    if (void 0 !== e)
                        return e._2003() || this._1516.delete(e._5878()),
                        e._5674(t, _),
                        this._2414 = !0,
                        this._1516.set(t, e),
                        e;
                    throw new Error("Dynnamic texture: no free slots are available.")
                }
                _4518() {
                    for (const t of this._1516.values())
                        t._4518()
                }
                _9638() {
                    this._5182._3083 = [];
                    for (const t of this._5182._3911)
                        n._4081 - t._5232() > this._7349 && this._5182._3083.push(t);
                    this._5182._3083.sort(((t,_)=>_._5232() - t._5232())),
                    this._2414 && (this._9729.update(),
                    this._2414 = !1)
                }
                _6178() {
                    this._9729.destroy()
                }
            }
              , Zt = class {
                _2669;
                _5298;
                _5916;
                _1677;
                constructor(t, _) {
                    this._2669 = t,
                    this._5298 = [],
                    this._5916 = 0,
                    this._1677 = _
                }
                _6194(t, _) {
                    for (const _ of this._5298) {
                        const e = _._6194(t);
                        if (null !== e)
                            return e._6441()
                    }
                    if (this._5916 >= this._2669._1473._1182)
                        return null;
                    this._5916++;
                    for (const e of this._5298)
                        if (!e._5754())
                            return e._2624(t, _)._6441();
                    const e = new Ft(this._2669._2718._7185,this._2669._1473._2357,this._2669._1473._7899,this._2669._1473._4737,this._1677);
                    return this._5298.push(e),
                    e._2624(t, _)._6441()
                }
                _4518() {
                    this._5916 = 0;
                    for (const t of this._5298)
                        t._4518()
                }
                _9638() {
                    for (let t = this._5298.length - 1; t >= 0; --t) {
                        const _ = this._5298[t];
                        _._9638(),
                        _._7417() && (_._6178(),
                        this._5298.splice(t))
                    }
                }
            }
              , $t = (()=>{
                switch (Q.TEXTURE_QUALITY._7142()) {
                case "low":
                    return .5;
                case "medium":
                default:
                    return 1;
                case "high":
                    return 2
                }
            }
            )()
              , Yt = new Zt({
                _2718: {
                    _7185: 2048 * $t
                },
                _1473: {
                    _2357: 680 * $t,
                    _7899: 128 * $t,
                    _4737: 8e3,
                    _1182: 1
                }
            },((t,_,e,s,i)=>{
                _ = Wt._4311(_);
                const n = 10 * $t
                  , o = i - 2 * n - 5 * $t * 2;
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
                    _2357: h,
                    _7899: c
                }
            }
            ))
              , Qt = (()=>{
                switch (Q.TEXTURE_QUALITY._7142()) {
                case "low":
                    return .5;
                case "medium":
                default:
                    return 1;
                case "high":
                    return 2
                }
            }
            )()
              , Vt = new Zt({
                _2718: {
                    _7185: 1024 * Qt
                },
                _1473: {
                    _2357: 320 * Qt,
                    _7899: 64 * Qt,
                    _4737: 8e3,
                    _1182: 1
                }
            },((t,_,e,s,i)=>{
                _ = Wt._4311(_);
                const n = 10 * Qt
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
                    _2357: h,
                    _7899: c
                }
            }
            ))
              , jt = (()=>{
                switch (Q.TEXTURE_QUALITY._7142()) {
                case "low":
                    return .5;
                case "medium":
                default:
                    return 1;
                case "high":
                    return 2
                }
            }
            )()
              , Xt = new class {
                _2493;
                _9623;
                constructor() {
                    this._2493 = new Map,
                    this._9623 = new Zt({
                        _2718: {
                            _7185: 2048 * jt
                        },
                        _1473: {
                            _2357: 512 * jt,
                            _7899: 512 * jt,
                            _4737: 8e3,
                            _1182: 1
                        }
                    },this._1677.bind(this))
                }
                _1677(t, _, e, s, i) {
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
                        _2357: s,
                        _7899: i
                    }
                }
                _6194(t) {
                    const _ = this._2493.get(t);
                    return void 0 !== _ ? _.complete && _.naturalWidth > 0 && _.naturalHeight > 0 ? this._9623._6194(t, _) : null : (this._5869(t),
                    null)
                }
                _5869(t) {
                    const _ = new Image;
                    _.crossOrigin = "anonymous",
                    _.src = t,
                    this._2493.set(t, _)
                }
                _4518() {
                    this._9623._4518()
                }
                _9638() {
                    this._9623._9638()
                }
            }
              , zt = new class {
                _5298;
                constructor() {
                    this._5298 = []
                }
                _6468() {
                    for (let t = 0; t < 1; t++) {
                        const _ = `TEXTURE_ATLAS_SHIELD_${t + 1}`
                          , e = Rt._4104(_);
                        if (void 0 === e || !(e instanceof HTMLImageElement))
                            throw new Error("Invalid shield atlas image.");
                        const s = new c.VL4(e,{
                            format: c.I2L.LUMINANCE_ALPHA
                        });
                        this._5298.push(s)
                    }
                }
                _2741(t) {
                    return t < 1 || t > this._5298.length ? null : this._5298[t - 1]
                }
            }
              , qt = 2 * Math.PI;
            class Jt {
                _7843;
                _1247;
                _6855;
                _1435;
                _4187;
                _8353;
                _4494;
                constructor(t, _, e, s, i) {
                    this._7843 = t,
                    this._1247 = _,
                    this._6855 = e,
                    this._1435 = s,
                    this._4187 = i,
                    this._8353 = [],
                    this._4494 = 0
                }
                _4518() {
                    this._4494 = 0
                }
                _4357(t, _, e, s, i, o) {
                    o = this._1435(o);
                    const r = [];
                    s *= this._6855;
                    const h = this._4187._6195
                      , a = 0 === h._4418 ? 0 : n._4081 % h._4418 / h._4418 * (qt * h._6535);
                    if (0 === this._1247) {
                        const t = this._7659();
                        t.anchor.set(.5, .5),
                        t.position.set(_, e),
                        t.scale.set(1, 1),
                        t.width = 2 * s,
                        t.height = 2 * s,
                        r.push(t)
                    } else if (1 === this._1247) {
                        const t = this._7659();
                        t.anchor.set(1, .5),
                        t.position.set(_, e),
                        t.scale.set(1, 1),
                        t.width = s,
                        t.height = 2 * s,
                        r.push(t);
                        const i = this._7659();
                        i.anchor.set(1, .5),
                        i.position.set(_, e),
                        i.scale.set(-1, 1),
                        i.width = s,
                        i.height = 2 * s,
                        r.push(i)
                    } else if (2 === this._1247) {
                        const t = this._7659();
                        t.anchor.set(1, 1),
                        t.position.set(_, e),
                        t.scale.set(1, 1),
                        t.width = s,
                        t.height = s,
                        r.push(t);
                        const i = this._7659();
                        i.anchor.set(1, 1),
                        i.position.set(_, e),
                        i.scale.set(-1, 1),
                        i.width = s,
                        i.height = s,
                        r.push(i);
                        const n = this._7659();
                        n.anchor.set(1, 1),
                        n.position.set(_, e),
                        n.scale.set(-1, -1),
                        n.width = s,
                        n.height = s,
                        r.push(n);
                        const o = this._7659();
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
                _7659() {
                    if (this._4494 < this._8353.length)
                        return this._8353[this._4494++];
                    {
                        const t = new c.jyi(this._7843);
                        return this._8353.push(t),
                        this._4494++,
                        t
                    }
                }
            }
            const t_ = class {
                _8635;
                _2580;
                _9230;
                _4437;
                constructor(t, _, e=1) {
                    this._8635 = t,
                    this._2580 = _,
                    this._4437 = e,
                    this._9230 = {
                        _6619: null,
                        _7119: null,
                        _1930: null
                    }
                }
                _6468() {
                    const t = zt._2741(this._8635);
                    if (null === t)
                        throw new Error("Shield base texture is null.");
                    const _ = this._2580._7119;
                    if (void 0 !== _) {
                        const e = this._4064(_._4563, _._2266, _._7485)
                          , s = new c.xEZ(t,e);
                        this._9230._7119 = new Jt(s,_._7485,_._4954,_._6140,_._2275)
                    }
                    const e = this._2580._6619;
                    if (void 0 !== e) {
                        const _ = this._4064(e._4563, e._2266, e._7485)
                          , s = new c.xEZ(t,_);
                        this._9230._6619 = new Jt(s,e._7485,e._4954,e._6140,e._2275)
                    }
                    const s = this._2580._1930;
                    if (void 0 !== s) {
                        const _ = this._4064(s._4563, s._2266, s._7485)
                          , e = new c.xEZ(t,_);
                        this._9230._1930 = new Jt(e,s._7485,s._4954,s._6140,s._2275)
                    }
                }
                _4518() {
                    null !== this._9230._7119 && this._9230._7119._4518(),
                    null !== this._9230._6619 && this._9230._6619._4518(),
                    null !== this._9230._1930 && this._9230._1930._4518()
                }
                _2969(t, _, e, s, i, n) {
                    null !== this._9230._7119 && this._9230._7119._4357(t, _, e, s, i, n)
                }
                _8341(t, _, e, s, i, n) {
                    null !== this._9230._6619 && this._9230._6619._4357(t, _, e, s, i, n),
                    null !== this._9230._1930 && this._9230._1930._4357(t, _, e, s, i, n)
                }
                _4501() {
                    return this._4437
                }
                _4064(t, _, e) {
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
              , __ = new Map([["BASIC_RING", new t_(1,{
                _7119: {
                    _4563: 2,
                    _2266: 1,
                    _4954: 1,
                    _7485: 0,
                    _6140: t=>t,
                    _2275: {
                        _6195: {
                            _4418: 0,
                            _6535: 1
                        }
                    }
                },
                _6619: {
                    _4563: 0,
                    _2266: 0,
                    _4954: 1,
                    _7485: 2,
                    _6140: t=>t,
                    _2275: {
                        _6195: {
                            _4418: 0,
                            _6535: 1
                        }
                    }
                }
            },.9)], ["BASIC_RING_THIN", new t_(1,{
                _7119: {
                    _4563: 2,
                    _2266: 1,
                    _4954: 1,
                    _7485: 0,
                    _6140: t=>t,
                    _2275: {
                        _6195: {
                            _4418: 0,
                            _6535: 1
                        }
                    }
                },
                _6619: {
                    _4563: 1,
                    _2266: 0,
                    _4954: 1,
                    _7485: 2,
                    _6140: t=>t,
                    _2275: {
                        _6195: {
                            _4418: 0,
                            _6535: 1
                        }
                    }
                }
            },.95)], ["BASIC_RING_THICK", new t_(1,{
                _7119: {
                    _4563: 2,
                    _2266: 1,
                    _4954: 1,
                    _7485: 0,
                    _6140: t=>t,
                    _2275: {
                        _6195: {
                            _4418: 0,
                            _6535: 1
                        }
                    }
                },
                _6619: {
                    _4563: 2,
                    _2266: 0,
                    _4954: 1,
                    _7485: 2,
                    _6140: t=>t,
                    _2275: {
                        _6195: {
                            _4418: 0,
                            _6535: 1
                        }
                    }
                }
            },.83)], ["MESH_RING", new t_(1,{
                _7119: {
                    _4563: 2,
                    _2266: 1,
                    _4954: 1,
                    _7485: 0,
                    _6140: t=>t,
                    _2275: {
                        _6195: {
                            _4418: 0,
                            _6535: 1
                        }
                    }
                },
                _6619: {
                    _4563: 3,
                    _2266: 0,
                    _4954: 1,
                    _7485: 2,
                    _6140: t=>t,
                    _2275: {
                        _6195: {
                            _4418: 0,
                            _6535: 1
                        }
                    }
                }
            })], ["GREMORY_G3_R1", new t_(1,{
                _7119: {
                    _4563: 2,
                    _2266: 1,
                    _4954: 1,
                    _7485: 0,
                    _6140: t=>t,
                    _2275: {
                        _6195: {
                            _4418: 0,
                            _6535: 1
                        }
                    }
                },
                _6619: {
                    _4563: 4,
                    _2266: 0,
                    _4954: 1.1,
                    _7485: 2,
                    _6140: t=>t,
                    _2275: {
                        _6195: {
                            _4418: 0,
                            _6535: 1
                        }
                    }
                },
                _1930: {
                    _4563: 5,
                    _2266: 0,
                    _4954: 1.1,
                    _7485: 2,
                    _6140: t=>t,
                    _2275: {
                        _6195: {
                            _4418: 0,
                            _6535: 1
                        }
                    }
                }
            },.7)], ["GREMORY_G3_R2", new t_(1,{
                _7119: {
                    _4563: 2,
                    _2266: 1,
                    _4954: 1,
                    _7485: 0,
                    _6140: t=>t,
                    _2275: {
                        _6195: {
                            _4418: 0,
                            _6535: 1
                        }
                    }
                },
                _6619: {
                    _4563: 4,
                    _2266: 0,
                    _4954: 1.1,
                    _7485: 2,
                    _6140: ()=>16777215,
                    _2275: {
                        _6195: {
                            _4418: 0,
                            _6535: 1
                        }
                    }
                },
                _1930: {
                    _4563: 5,
                    _2266: 0,
                    _4954: 1.1,
                    _7485: 2,
                    _6140: t=>t,
                    _2275: {
                        _6195: {
                            _4418: 0,
                            _6535: 1
                        }
                    }
                }
            },.7)], ["VALI", new t_(1,{
                _7119: {
                    _4563: 7,
                    _2266: 0,
                    _4954: 1.09,
                    _7485: 2,
                    _6140: t=>t,
                    _2275: {
                        _6195: {
                            _4418: 0,
                            _6535: 1
                        }
                    }
                },
                _6619: {
                    _4563: 6,
                    _2266: 0,
                    _4954: 1.15,
                    _7485: 1,
                    _6140: ()=>16777215,
                    _2275: {
                        _6195: {
                            _4418: 0,
                            _6535: 1
                        }
                    }
                }
            },.6)], ["HSLO", new t_(1,{
                _7119: {
                    _4563: 0,
                    _2266: 1,
                    _4954: 1.11,
                    _7485: 2,
                    _6140: ()=>16777215,
                    _2275: {
                        _6195: {
                            _4418: 0,
                            _6535: 1
                        }
                    }
                },
                _6619: {
                    _4563: 1,
                    _2266: 1,
                    _4954: 1.11,
                    _7485: 2,
                    _6140: t=>t,
                    _2275: {
                        _6195: {
                            _4418: 0,
                            _6535: 1
                        }
                    }
                }
            },.625)], ["TRINITY_R1", new t_(1,{
                _7119: {
                    _4563: 4,
                    _2266: 1,
                    _4954: 1.1,
                    _7485: 2,
                    _6140: ()=>16777215,
                    _2275: {
                        _6195: {
                            _4418: 0,
                            _6535: 1
                        }
                    }
                },
                _6619: {
                    _4563: 5,
                    _2266: 1,
                    _4954: 1.1,
                    _7485: 2,
                    _6140: t=>t,
                    _2275: {
                        _6195: {
                            _4418: 1e5,
                            _6535: 1
                        }
                    }
                },
                _1930: {
                    _4563: 7,
                    _2266: 1,
                    _4954: .91,
                    _7485: 2,
                    _6140: t=>t,
                    _2275: {
                        _6195: {
                            _4418: 0,
                            _6535: 1
                        }
                    }
                }
            },.7)], ["TRINITY_R2", new t_(1,{
                _7119: {
                    _4563: 4,
                    _2266: 1,
                    _4954: 1.1,
                    _7485: 2,
                    _6140: ()=>16777215,
                    _2275: {
                        _6195: {
                            _4418: 0,
                            _6535: 1
                        }
                    }
                },
                _6619: {
                    _4563: 5,
                    _2266: 1,
                    _4954: 1.1,
                    _7485: 2,
                    _6140: t=>t,
                    _2275: {
                        _6195: {
                            _4418: 1e5,
                            _6535: -1
                        }
                    }
                },
                _1930: {
                    _4563: 0,
                    _2266: 2,
                    _4954: .9,
                    _7485: 2,
                    _6140: ()=>16777215,
                    _2275: {
                        _6195: {
                            _4418: 1e5,
                            _6535: 1
                        }
                    }
                }
            },.7)], ["CERAMIC_SNOW", new t_(1,{
                _7119: {
                    _4563: 7,
                    _2266: 0,
                    _4954: 1.09,
                    _7485: 2,
                    _6140: t=>t,
                    _2275: {
                        _6195: {
                            _4418: 0,
                            _6535: 1
                        }
                    }
                },
                _6619: {
                    _4563: 1,
                    _2266: 2,
                    _4954: 1.05,
                    _7485: 2,
                    _6140: ()=>16777215,
                    _2275: {
                        _6195: {
                            _4418: 1e5,
                            _6535: 1
                        }
                    }
                }
            },.7)], ["CRYSTAL_S", new t_(1,{
                _7119: {
                    _4563: 4,
                    _2266: 1,
                    _4954: 1.1,
                    _7485: 2,
                    _6140: t=>t,
                    _2275: {
                        _6195: {
                            _4418: 0,
                            _6535: 1
                        }
                    }
                },
                _6619: {
                    _4563: 5,
                    _2266: 2,
                    _4954: 1.05,
                    _7485: 2,
                    _6140: t=>.9 * ((16711680 & t) >>> 16) << 16 | .9 * ((65280 & t) >>> 8) << 8 | .9 * ((255 & t) >>> 0) << 0,
                    _2275: {
                        _6195: {
                            _4418: 1e5,
                            _6535: 1
                        }
                    }
                },
                _1930: {
                    _4563: 4,
                    _2266: 2,
                    _4954: 1.05,
                    _7485: 2,
                    _6140: ()=>16777215,
                    _2275: {
                        _6195: {
                            _4418: 1e5,
                            _6535: 1
                        }
                    }
                }
            },.9)]])
              , e_ = (()=>{
                switch (Q.TEXTURE_QUALITY._7142()) {
                case "low":
                    return .5;
                case "medium":
                default:
                    return 1;
                case "high":
                    return 2
                }
            }
            )()
              , s_ = new class {
                _8077;
                _3908;
                _2493;
                constructor() {
                    this._8077 = {},
                    this._3908 = new Zt({
                        _2718: {
                            _7185: 1024 * e_
                        },
                        _1473: {
                            _2357: 320 * e_,
                            _7899: 64 * e_,
                            _4737: 8e3,
                            _1182: 1
                        }
                    },this._1677.bind(this)),
                    this._2493 = new Map
                }
                _6468() {
                    const t = Rt._4104("titles-info");
                    this._8077 = t
                }
                _1677(t, _, e, s, i) {
                    const n = i / e._7201.naturalHeight
                      , o = e._7201.naturalWidth * n
                      , r = e._7201.naturalHeight * n;
                    if (t.imageSmoothingEnabled = !0,
                    t.imageSmoothingQuality = "high",
                    t.drawImage(e._7201, (s - o) / 2, (i - r) / 2, o, r),
                    e._7917.length > 0) {
                        const _ = 4 * e_
                          , n = r - 2 * _ - 6 * e_ * 2;
                        t.font = `600 ${n}px 'Titillium Web'`;
                        const h = o / 5 * 4
                          , a = t.measureText(e._7917)
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
                        t.strokeText(e._7917, u, d),
                        t.fillText(e._7917, u, d)
                    }
                    return {
                        _2357: o,
                        _7899: r
                    }
                }
                _6194(t) {
                    const _ = this._8077[t];
                    if (void 0 !== _) {
                        const e = this._2493.get(_.pid || t);
                        if (void 0 !== e) {
                            if (e.complete && e.naturalWidth > 0 && e.naturalHeight > 0)
                                return this._3908._6194(t, {
                                    _7201: e,
                                    _7917: _.text
                                })
                        } else
                            this._5869(_.pid || t)
                    }
                    return null
                }
                _4518() {
                    this._3908._4518()
                }
                _9638() {
                    this._3908._9638()
                }
                _5869(t) {
                    const _ = new Image;
                    _.crossOrigin = "anonymous",
                    _.src = `assets/images/textures/titles/${t}.webp`,
                    this._2493.set(t, _)
                }
            }
              , i_ = (()=>{
                switch (Q.TEXTURE_QUALITY._7142()) {
                case "low":
                    return .5;
                case "medium":
                default:
                    return 1;
                case "high":
                    return 2
                }
            }
            )()
              , n_ = new class {
                _8353;
                _4494;
                constructor() {
                    this._8353 = [],
                    this._4494 = 0
                }
                _9978(t, _) {
                    const e = te._2026 ? t._4483._2839.length > 0 : t._9087._3636._6310
                      , s = t._3923
                      , i = 1 - Q.ORB_TRANSPARENCY._7142() / 100
                      , n = Q.SHOW_SHIELDS._7142()
                      , o = Q.OWN_ORB_COLORING._7142();
                    let r = 16777215;
                    r = e ? "custom" === o ? Q.CUSTOM_OWN_ORB_COLOR._7142() : "multibox" !== o || 2 !== Me._3636._2102.size || te._2026 ? te._2026 ? t._8955._9783 : t._9087._8955._9783 : t._9087._8212 === Me._3335 ? Q.ACTIVE_PLAYER_UNIT_ACCENT_COLOR._7142() : Q.INACTIVE_PLAYER_UNIT_ACCENT_COLOR._7142() : "tint" === Q.ORB_COLORING._7142() ? t._3163._9783 : te._2026 ? t._8955._9783 : t._9087._8955._9783;
                    let h = "";
                    (e || n) && (h = t._9087._3636._4935);
                    const a = __.get(h.substring(7));
                    if (void 0 === a) {
                        const e = this._8353[this._4494++] || this._5401();
                        e.position.set(t._4563, t._2266),
                        e.width = 2 * t._4464,
                        e.height = 2 * t._4464,
                        e.tint = r,
                        e.alpha = s * i,
                        _.addChild(e)
                    } else
                        a._2969(_, t._4563, t._2266, t._4464, s * i, r);
                    const c = Q.SHOW_CUSTOM_SKINS._7142()
                      , l = Q.SHOW_OWN_CUSTOM_SKINS._7142()
                      , u = Me._4543.length + Me._1754.length > 0 && re._6617.has(t._9087._6808);
                    let d = "";
                    te._2026 && c ? d = t._4483._2839 : (u && !e && c || e && l) && (d = t._9087._1633);
                    const m = d.length ? Xt._6194(d) : null;
                    if (null !== m) {
                        m.position.set(t._4563, t._2266);
                        const e = void 0 === a ? 1 : a._4501();
                        m.width = 2 * t._4464 * e,
                        m.height = 2 * t._4464 * e,
                        m.alpha = s,
                        _.addChild(m)
                    }
                    if (!te._2026 && e && Q.ACTIVE_PLAYER_UNIT_ARROW_INDICATOR._7142() && Me._3636._2102.size > 1 && t._9087._8212 === Me._3335) {
                        const e = Ht._6194();
                        e.position.set(t._4563, t._2266 - t._4464 - 10),
                        e.alpha = s,
                        _.addChild(e)
                    }
                    void 0 !== a && a._8341(_, t._4563, t._2266, t._4464, s * i, r);
                    const f = t._4464 / 3 * J_._5266
                      , p = t._4464 / 30;
                    if (t._1664._2562 = 0,
                    t._1664._4543 = 0,
                    t._1664._8445 = 0,
                    f > 8 && (e && Q.SHOW_OWN_USERNAME._7142() || !e && Q.SHOW_ENEMY_USERNAME._7142())) {
                        const e = (te._2026 ? t._4483._2562 : t._9087._3636._2562) || "Unnamed player"
                          , i = Yt._6194(e, void 0);
                        if (null !== i) {
                            const e = t._4464 / 3 / (128 * i_) * 1;
                            i.scale.set(e, e);
                            const n = i.height;
                            t._1664._2562 = n,
                            i.position.set(t._4563, t._2266),
                            i.alpha = s,
                            _.addChild(i);
                            const o = t._9087._3636._4557;
                            if (o.length > 0) {
                                const e = s_._6194(o);
                                if (null !== e) {
                                    const o = t._4464 / 3 / 64 * .6 / i_;
                                    e.scale.set(o, o),
                                    e.position.set(e.width < i.width ? t._4563 - (i.width - e.width) / 2 : t._4563, t._2266 - n / 2 - e.height / 2),
                                    e.alpha = s,
                                    _.addChild(e)
                                }
                            }
                        }
                    }
                    const g = te._2026 ? t._4483._4543 : t._9087._3636._4543;
                    if (f > 8 && Q.SHOW_TEAM_NAME._7142() && g.length > 0 && "ITS-BOT-TEAM" !== g) {
                        const e = Vt._6194(g, t._9087._3636._2919);
                        if (null !== e) {
                            const i = t._4464 / 3 / 64 * .8 / i_;
                            e.scale.set(i, i);
                            const n = t._1664._2562
                              , o = e.height;
                            t._1664._4543 = o,
                            e.position.set(t._4563, t._2266 + .5 * n + p + .5 * e.height),
                            e.alpha = s,
                            _.addChild(e)
                        }
                    }
                    if (f > 8 && (e && Q.SHOW_OWN_ENERGY._7142() || !e && Q.SHOW_ENEMY_ENERGY._7142())) {
                        const e = Ut._6194(t._8445.toFixed(0))
                          , i = t._4464 / 3 / 128 * .8;
                        e.scale.set(i, i);
                        const n = t._1664._2562
                          , o = t._1664._4543;
                        t._1664._8445 = e.height,
                        e.position.set(t._4563, t._2266 + .5 * n + p + (o > 0 ? o + p : 0) + .5 * e.height),
                        e.alpha = s,
                        _.addChild(e)
                    }
                }
                _5401() {
                    const t = new c.jyi(kt._3651._5638);
                    return t.anchor.set(.5, .5),
                    this._8353.push(t),
                    t
                }
                _4518() {
                    this._4494 = 0
                }
            }
            ;
            class o_ {
                _7559;
                _4342;
                _7402;
                _5729;
                _8491;
                constructor(t, _) {
                    this._7559 = new c.jyi(t),
                    this._4342 = [],
                    this._7402 = new c.W20,
                    this._5729 = [],
                    this._8491 = 3e3,
                    this._7559.position.set(0, 0),
                    this._7559.anchor.set(.5, .5),
                    this._7402.addChild(this._7559);
                    for (let t = 0; t < 19; t++) {
                        const t = new c.jyi(_);
                        t.position.set(0, 0),
                        t.anchor.set(.5, .5),
                        this._4342.push(t),
                        this._7402.addChild(t),
                        this._5729.push(Math.random() * this._8491)
                    }
                }
                get _1839() {
                    return this._7402
                }
                _6813(t) {
                    this._8230(t),
                    this._8118(t)
                }
                _8230(t) {
                    let _ = (n._4081 - t._3082) / 750;
                    _ %= 1,
                    _ = Math.pow(_, .4);
                    const e = 1.2 * t._4464 * _;
                    this._7559.width = 2 * e * 1.28,
                    this._7559.height = 2 * e * 1.28,
                    this._7559.alpha = e > t._4464 ? 1 - (e - t._4464) / (.2 * t._4464) : 1
                }
                _8118(t) {
                    let _ = (n._4081 - t._3082) / 600;
                    _ = Math.min(1, _);
                    let e = (n._4081 - t._3082 - 600) / 600;
                    e = Math.max(0, Math.min(1, e));
                    let s = (n._4081 - t._3082 - 1200) / 600;
                    s = Math.max(0, Math.min(1, s));
                    const i = t._4464 / 1125
                      , o = this._4342[0];
                    o.scale.set(i, i),
                    o.alpha = _;
                    for (let t = 0; t < 6; t++) {
                        const _ = this._4342[t + 1]
                          , s = Math.PI / 3 * t
                          , n = Math.cos(s)
                          , o = Math.sin(s);
                        _.position.set(450 * i * n, 450 * i * o),
                        _.scale.set(i, i),
                        _.alpha = e * (.5 + .5 * this._5531(t + 1))
                    }
                    for (let t = 0; t < 6; t++) {
                        const _ = this._4342[t + 7]
                          , e = Math.PI / 3 * t
                          , n = Math.cos(e)
                          , o = Math.sin(e);
                        _.position.set(900 * i * n, 900 * i * o),
                        _.scale.set(i, i),
                        _.alpha = s * (.5 + .5 * this._5531(t + 7))
                    }
                    for (let t = 0; t < 6; t++) {
                        const _ = this._4342[t + 13]
                          , e = Math.PI / 3 * t + Math.PI / 6
                          , n = Math.cos(e)
                          , o = Math.sin(e);
                        _.position.set(Math.sqrt(3) / 2 * 900 * i * n, Math.sqrt(3) / 2 * 900 * i * o),
                        _.scale.set(i, i),
                        _.alpha = s * (.5 + .5 * this._5531(t + 13))
                    }
                }
                _5531(t) {
                    const _ = (n._4081 + this._5729[t]) % this._8491 / this._8491 * (2 * Math.PI);
                    return .5 * (Math.sin(_) + 1)
                }
            }
            const r_ = new class {
                _7843;
                _8353;
                _4494;
                constructor() {
                    this._7843 = {
                        _1470: null,
                        _4434: null
                    },
                    this._8353 = [],
                    this._4494 = 0
                }
                _6468() {
                    const t = Rt._4104("shield-pieces")
                      , _ = new c.VL4(t);
                    this._7843._1470 = new c.xEZ(_,new c.AeJ(512,0,512,512)),
                    this._7843._4434 = new c.xEZ(_,new c.AeJ(0,0,512,512))
                }
                _9978(t, _) {
                    const e = Q.ELEMENT_ANIMATION_SOFTENING._7142();
                    let s = 1;
                    t._8845 ? s = 1 - t._9157 : n._4081 - t._3082 < e && (s = (n._4081 - t._3082) / e);
                    const i = this._8353[this._4494++] || this._5561();
                    i._6813(t);
                    const o = i._1839;
                    o.position.set(t._4563, t._2266),
                    o.alpha = s,
                    _.addChild(o)
                }
                _5561() {
                    const t = new o_(this._7843._1470,this._7843._4434);
                    return this._8353.push(t),
                    t
                }
                _4518() {
                    this._4494 = 0
                }
            }
              , h_ = new class {
                _9978(t, _) {
                    const e = performance.now()
                      , s = e % 2e3
                      , i = (s > 1e3 ? 1e3 - (s - 1e3) : s) / 1e3
                      , o = Q.ELEMENT_ANIMATION_SOFTENING._7142();
                    let r = 1;
                    t._8845 ? r = 1 - t._9157 : n._4081 - t._3082 < o && (r = (n._4081 - t._3082) / o);
                    const h = Xt._6194("https://i.imgur.com/gBpfVWB.png");
                    null !== h && (h.position.set(t._4563, t._2266),
                    h.width = 2 * t._4464 + 100,
                    h.height = 2 * t._4464 + 100,
                    h.alpha = r,
                    _.addChild(h));
                    const a = Xt._6194("https://i.imgur.com/NToShEd.png");
                    null !== a && (a.position.set(t._4563, t._2266),
                    a.width = 2 * t._4464 + 200 * i ** 2,
                    a.height = 2 * t._4464 + 200 * i ** 2,
                    a.alpha = r,
                    a.rotation = 2 * Math.PI * (e % 12e4) / 12e4,
                    _.addChild(a))
                }
            }
              , a_ = new class {
                _9978(t, _) {
                    const e = Q.ELEMENT_ANIMATION_SOFTENING._7142();
                    let s = 1;
                    t._8845 ? s = 1 - t._9157 : n._4081 - t._3082 < e && (s = (n._4081 - t._3082) / e);
                    const i = Xt._6194("https://i.imgur.com/qjMDi3s.png");
                    null !== i && (i.position.set(t._4563, t._2266),
                    i.width = 512,
                    i.height = 512,
                    i.alpha = s,
                    _.addChild(i))
                }
            }
              , c_ = new class extends At {
                _7402;
                constructor() {
                    super(),
                    this._7402 = new c.W20
                }
                _8274() {
                    return this._7402
                }
                _6468() {
                    r_._6468(),
                    s_._6468(),
                    zt._6468();
                    for (const t of __.values())
                        t._6468();
                    Ut._6468(),
                    xt._6468()
                }
                _6813() {
                    Yt._4518(),
                    Vt._4518(),
                    Xt._4518(),
                    s_._4518(),
                    this._7402.removeChildren();
                    for (const t of re._3661)
                        t._6334 === A._4709 ? (t._5756(),
                        h_._9978(t, this._7402)) : t._6334 === A._7195 && (t._5756(),
                        a_._9978(t, this._7402));
                    for (const t of re._3661)
                        t._5756(),
                        t._6334 === A._3277 ? n_._9978(t, this._7402) : t._6334 === A._5555 || t._6334 === A._6132 ? Bt._9978(t, this._7402) : t._6334 === A._2830 && xt._9978(t, this._7402);
                    n_._4518(),
                    Bt._4518(),
                    xt._4518(),
                    r_._4518(),
                    Ht._4518();
                    for (const t of __.values())
                        t._4518();
                    Ut._4518(),
                    Yt._9638(),
                    Vt._9638(),
                    Xt._9638(),
                    s_._9638()
                }
            }
              , l_ = new class extends At {
                _7402;
                _6876;
                _5682;
                _6823;
                _9998;
                constructor() {
                    super(),
                    this._7402 = null,
                    this._6876 = null,
                    this._5682 = {
                        _7328: null,
                        _4289: null
                    },
                    this._6823 = {
                        _7707: new Float32Array(2),
                        _3217: new Float32Array(2),
                        _2836: null
                    },
                    this._9998 = null
                }
                _8274() {
                    return this._7402
                }
                _6468() {
                    this._7402 = new c.W20;
                    const t = document.createElement("canvas")
                      , _ = t.getContext("2d");
                    Ot.mesh_gen_orb_shadow_render(_, 512),
                    this._6823._2836 = new c.VL4(t);
                    const s = e(296)
                      , i = e(845)
                      , n = new c.$rD(s,i,"orb-shadow-shader")
                      , o = new c.exe(n,{
                        uTranslate: this._6823._7707,
                        uScale: this._6823._3217,
                        uTexture: this._6823._2836
                    });
                    this._5682._7328 = new c.lWr(new Float32Array(0),!1,!1),
                    this._5682._4289 = new c.lWr(new Uint16Array(0),!1,!0);
                    const r = new c.ZXM;
                    r.addAttribute("aPosition", this._5682._7328, 2, !1, c.vK6.FLOAT, 20, 0),
                    r.addAttribute("aAlpha", this._5682._7328, 1, !1, c.vK6.FLOAT, 20, 8),
                    r.addAttribute("aUV", this._5682._7328, 2, !1, c.vK6.FLOAT, 20, 12),
                    r.addIndex(this._5682._4289),
                    this._6876 = new c.Kj0(r,o),
                    this._9998 = Ot.mesh_gen_orb_shadow_get_info_buffer(),
                    Ot.mesh_gen_orb_shadow_setup()
                }
                _7251() {
                    const t = Q.ORB_SHADOW_INTENSITY._7142() / 100;
                    let _ = 0;
                    for (const e of re._3661) {
                        if (_ >= 1365)
                            break;
                        if (e._6334 !== A._3277)
                            continue;
                        const s = 4 * _;
                        this._9998[s] = e._4563,
                        this._9998[s + 1] = e._2266,
                        this._9998[s + 2] = e._4464,
                        this._9998[s + 3] = e._3923 * t,
                        _++
                    }
                    Ot.mesh_gen_orb_shadow_update_buffers(_),
                    this._5682._7328.update(Ot.mesh_gen_orb_shadow_get_vertices_buffer()),
                    this._5682._4289.update(Ot.mesh_gen_orb_shadow_get_indices_buffer())
                }
                _1591() {
                    this._6823._7707[0] = J_._5130._4563,
                    this._6823._7707[1] = J_._5130._2266,
                    this._6823._3217[0] = J_._5266 / (q_._5578 / 2),
                    this._6823._3217[1] = -J_._5266 / (q_._1264 / 2)
                }
                _6813() {
                    Q.ORB_SHADOW._7142() ? (1 !== this._7402.children.length && this._7402.addChild(this._6876),
                    this._7251(),
                    this._1591()) : 0 !== this._7402.children.length && this._7402.removeChildren()
                }
            }
            ;
            class u_ {
                _4563;
                _2266;
                _4464;
                constructor(t, _, e) {
                    this._4563 = t,
                    this._2266 = _,
                    this._4464 = e
                }
            }
            class d_ {
                _4563;
                _2266;
                _4464;
                _6334;
                _8955;
                _2562;
                _4543;
                _2839;
                constructor(t, _, e, s, i, n, o, r) {
                    this._4563 = t,
                    this._2266 = _,
                    this._4464 = e,
                    this._6334 = s,
                    this._8955 = i,
                    this._2562 = n,
                    this._4543 = o,
                    this._2839 = r
                }
            }
            const m_ = class {
                _7996;
                _4494;
                _7155;
                constructor(t) {
                    const _ = new ArrayBuffer(t);
                    this._7996 = new DataView(_),
                    this._4494 = 0,
                    this._7155 = t
                }
                _5423(t) {
                    this._7996.setUint8(this._4494, t),
                    this._4494 += 1
                }
                _6250(t) {
                    this._7996.setInt8(this._4494, t),
                    this._4494 += 1
                }
                _1541(t) {
                    this._7996.setUint16(this._4494, t, !0),
                    this._4494 += 2
                }
                _1604(t) {
                    this._7996.setInt16(this._4494, t, !0),
                    this._4494 += 2
                }
                _5778(t) {
                    this._7996.setUint32(this._4494, t, !0),
                    this._4494 += 4
                }
                _7448(t) {
                    this._7996.setInt32(this._4494, t, !0),
                    this._4494 += 4
                }
                _7295(t) {
                    this._7996.setFloat32(this._4494, t, !0),
                    this._4494 += 4
                }
                _1648(t) {
                    this._7996.setFloat64(this._4494, t, !0),
                    this._4494 += 8
                }
                _4885(t) {
                    const _ = t.length;
                    this._5423(_);
                    for (let e = 0; e < _; e++) {
                        const _ = t.charCodeAt(e);
                        this._5423(_)
                    }
                }
                _4886(t) {
                    const _ = t.length;
                    this._1541(_);
                    for (let e = 0; e < _; e++) {
                        const _ = t.charCodeAt(e);
                        this._5423(_)
                    }
                }
                _8575(t) {
                    const _ = t.length;
                    this._5423(_);
                    for (let e = 0; e < _; e++) {
                        const _ = t.charCodeAt(e);
                        this._1541(_)
                    }
                }
                _4237(t) {
                    const _ = t.length;
                    this._1541(_);
                    for (let e = 0; e < _; e++) {
                        const _ = t.charCodeAt(e);
                        this._1541(_)
                    }
                }
                _4518() {
                    this._4494 = 0
                }
                get _1508() {
                    return this._4494 < this._7155 ? this._7996.buffer.slice(0, this._4494) : this._7996.buffer
                }
            }
              , f_ = new m_(131072)
              , p_ = class {
                _1203;
                _5380;
                _4405;
                _9662;
                _8745;
                _2890;
                _1724;
                constructor() {
                    this._1203 = 0,
                    this._5380 = 0,
                    this._4405 = new g,
                    this._9662 = new Set,
                    this._8745 = new Map,
                    this._2890 = new Map,
                    this._1724 = new Map
                }
                _3433(t) {
                    this._1203 = t
                }
                get _5643() {
                    return this._1203
                }
                _9389(t) {
                    this._5380 = t
                }
                get _2880() {
                    return this._5380
                }
                _9459(t, _) {
                    this._4405._8193(t, _)
                }
                get _8229() {
                    return this._4405
                }
                _7242(t) {
                    this._9662.add(t)
                }
                _5790(t, _) {
                    this._8745.set(_, t)
                }
                _7329(t, _, e, s) {
                    const i = new u_(_,e,s);
                    this._2890.set(t, i)
                }
                _3591(t, _, e, s, i, n, o, r, h) {
                    const a = new d_(_,e,s,i,n,o,r,h);
                    this._1724.set(t, a)
                }
                _1993(t) {
                    this._3433(t._5643),
                    this._9389(t._2880),
                    this._9459(t._8229._4563, t._8229._2266);
                    for (const _ of t._9662)
                        this._1724.delete(_);
                    for (const _ of t._8745.keys())
                        this._1724.delete(_);
                    for (const [_,e] of t._2890) {
                        const t = this._1724.get(_);
                        t._4563 = e._4563,
                        t._2266 = e._2266,
                        t._4464 = e._4464
                    }
                    for (const [_,e] of t._1724)
                        this._1724.set(_, e)
                }
                _6732(t) {
                    f_._4518(),
                    f_._5778(this._5643),
                    f_._1541(this._2880),
                    f_._1541(this._8229._4563),
                    f_._1541(this._8229._2266),
                    f_._1541(this._9662.size);
                    for (const t of this._9662)
                        f_._1541(t);
                    f_._1541(this._8745.size);
                    for (const [t,_] of this._8745)
                        f_._1541(_),
                        f_._1541(t);
                    f_._1541(this._2890.size);
                    for (const [t,_] of this._2890)
                        f_._1541(t),
                        f_._1541(_._4563),
                        f_._1541(_._2266),
                        f_._1541(_._4464);
                    f_._1541(this._1724.size);
                    for (const [_,e] of this._1724)
                        if (f_._1541(_),
                        f_._1541(e._4563),
                        f_._1541(e._2266),
                        f_._1541(e._4464),
                        f_._5423(e._6334),
                        1 === e._6334) {
                            const _ = t._7049(e._2562)
                              , s = t._7049(e._4543)
                              , i = t._7049(e._2839);
                            f_._5423((16711680 & e._8955) >>> 16),
                            f_._5423((65280 & e._8955) >>> 8),
                            f_._5423((255 & e._8955) >>> 0),
                            f_._1541(_),
                            f_._1541(s),
                            f_._1541(i)
                        } else
                            2 === e._6334 && (f_._5423((16711680 & e._8955) >>> 16),
                            f_._5423((65280 & e._8955) >>> 8),
                            f_._5423((255 & e._8955) >>> 0));
                    return f_._1508
                }
            }
              , g_ = class {
                _1706;
                _3976;
                constructor() {
                    this._1706 = [],
                    this._3976 = 2
                }
                _7049(t) {
                    const _ = this._1706.indexOf(t);
                    return _ < 0 ? (this._3976 += 2 * t.length + 1,
                    this._1706.push(t) - 1) : _
                }
                _4518() {
                    this._1706 = [],
                    this._3976 = 2
                }
                _6732() {
                    if (this._1706.length > 0) {
                        const t = new m_(this._3976 + 9);
                        t._1541(this._1706.length),
                        t._4885("string16");
                        for (const _ of this._1706)
                            t._8575(_);
                        return t._1508
                    }
                    {
                        const t = new m_(this._3976);
                        return t._1541(0),
                        t._1508
                    }
                }
            }
            ;
            class E_ extends i {
                _6808;
                _7800;
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
                      , r = _t.ZP.createElement("div", {
                        className: "gl-entry"
                    }, _t.ZP.createElement("div", {
                        className: "gl-entry-main"
                    }, _t.ZP.createElement("i", {
                        className: `gl-entry-main-type iconfont iconfont-${n}`,
                        style: o
                    }), _t.ZP.createElement("div", {
                        className: "gl-entry-main-info"
                    }, s, _t.ZP.createElement("br", null), "Duration: ", i)), _t.ZP.createElement("div", {
                        className: "gl-entry-buttons"
                    }, _t.ZP.createElement("i", {
                        className: "gl-entry-button iconfont iconfont-play",
                        onClick: ()=>{
                            this._8079("play")
                        }
                    }), _t.ZP.createElement("i", {
                        className: "gl-entry-button iconfont iconfont-save",
                        onClick: ()=>{
                            this._8079("save")
                        }
                    }), _t.ZP.createElement("i", {
                        className: "gl-entry-button iconfont iconfont-delete",
                        onClick: ()=>{
                            this._8079("delete")
                        }
                    })));
                    this._6808 = t,
                    this._7800 = r
                }
            }
            const w_ = new class {
                _5953;
                _9142;
                _7953;
                _7911;
                constructor() {
                    const t = document.getElementById("gl-alert")
                      , _ = document.getElementById("gl-alert-message")
                      , e = document.getElementById("gl-alert-yes")
                      , s = document.getElementById("gl-alert-cancel");
                    e.addEventListener("click", (()=>{
                        null !== this._7911 && this._7911(),
                        this._9758()
                    }
                    )),
                    s.addEventListener("click", (()=>{
                        this._9758()
                    }
                    )),
                    this._5953 = r._2624(t),
                    this._9142 = r._2624(_),
                    this._7953 = !1,
                    this._7911 = null
                }
                _7705(t, _) {
                    this._7953 || (this._5953._9798("display", "flex"),
                    this._7953 = !0),
                    this._9142._7917 = t,
                    this._7911 = _
                }
                _9758() {
                    this._7953 && (this._5953._9798("display", "none"),
                    this._7953 = !1),
                    this._7911 = null
                }
            }
              , y_ = new class extends h {
                _7402;
                _4255;
                _1238;
                constructor() {
                    super("gallery"),
                    this._7402 = document.getElementById("gl-container"),
                    this._4255 = new Map,
                    this._1238 = new J(document.querySelector(".gl-container-wrapper"))
                }
                _6468() {
                    const t = document.getElementById("gl-back-button");
                    t.addEventListener("click", (()=>{
                        this._5779(),
                        a._3040(a._9611)
                    }
                    )),
                    t.addEventListener("mouseenter", a._3040.bind(a, a._5781)),
                    this._6967(),
                    this._1238._6468()
                }
                _6967() {
                    const t = indexedDB.open("Gallery", 1);
                    t.addEventListener("success", (()=>{
                        const _ = t.result.transaction("clips", "readonly").objectStore("clips").getAllKeys();
                        _.addEventListener("success", (()=>{
                            for (const t of _.result)
                                this._1724(t.toString())
                        }
                        )),
                        _.addEventListener("error", (()=>{
                            console.error(_.error),
                            u._7225("Gallery", "Failed to load the clip from the database.")
                        }
                        ))
                    }
                    )),
                    t.addEventListener("error", (()=>{
                        console.error(t.error),
                        u._7225("Gallery", "Failed to load the clip from the database.")
                    }
                    )),
                    t.addEventListener("upgradeneeded", (_=>{
                        0 === _.oldVersion && t.result.createObjectStore("clips")
                    }
                    ))
                }
                _1724(t) {
                    const _ = new E_(t);
                    if (_._9070("play", (()=>{
                        this._8460(t)
                    }
                    )),
                    _._9070("save", (()=>{
                        this._5611(t)
                    }
                    )),
                    _._9070("delete", (()=>{
                        this._7269(t)
                    }
                    )),
                    this._7402.children.length > 0) {
                        const t = this._7402.firstChild;
                        this._7402.insertBefore(_._7800, t)
                    } else
                        this._7402.appendChild(_._7800);
                    this._4255.set(t, _),
                    this._1238._6813()
                }
                _5002(t, _) {
                    const e = indexedDB.open("Gallery", 1);
                    e.addEventListener("success", (()=>{
                        const s = e.result.transaction("clips", "readwrite").objectStore("clips").put(_, t);
                        s.addEventListener("success", (()=>{
                            this._1724(t)
                        }
                        )),
                        s.addEventListener("error", (()=>{
                            console.error(s.error),
                            u._7225("Gallery", "Failed to save the clip.")
                        }
                        ))
                    }
                    )),
                    e.addEventListener("error", (()=>{
                        console.error(e.error),
                        u._7225("Gallery", "Failed to save the clip.")
                    }
                    ))
                }
                _8460(t) {
                    const _ = ()=>{
                        const _ = indexedDB.open("Gallery", 1);
                        _.addEventListener("success", (()=>{
                            const e = _.result.transaction("clips", "readonly").objectStore("clips").get(t);
                            e.addEventListener("success", (()=>{
                                const t = e.result;
                                te._5702(t),
                                ns._2006(),
                                ns._2006()
                            }
                            )),
                            e.addEventListener("error", (()=>{
                                console.error(e.error),
                                u._7225("Gallery", "Failed to play the clip.")
                            }
                            ))
                        }
                        )),
                        _.addEventListener("error", (()=>{
                            console.error(_.error),
                            u._7225("Gallery", "Failed to play the clip.")
                        }
                        ))
                    }
                    ;
                    Pe._5914 ? w_._7705("Are you sure you want to play this clip? You will be disconnected from the game server.", _) : _()
                }
                _5611(t) {
                    const _ = "https://ryuten.io/converter#" + encodeURI(t)
                      , e = window.open(_, "_blank");
                    null !== e && e.focus()
                }
                _7269(t) {
                    const _ = t.replace(/[~ :]/g, "_").toLowerCase();
                    w_._7705(`Are you sure you want to delete the clip ${_}?`, (()=>{
                        const _ = indexedDB.open("Gallery", 1);
                        _.addEventListener("success", (()=>{
                            const e = _.result.transaction("clips", "readwrite").objectStore("clips").delete(t);
                            e.addEventListener("success", (()=>{
                                const _ = this._4255.get(t);
                                this._7402.removeChild(_._7800),
                                this._4255.delete(t),
                                this._1238._6813()
                            }
                            )),
                            e.addEventListener("error", (()=>{
                                console.error(e.error),
                                u._7225("Gallery", "Failed to delete the clip.")
                            }
                            ))
                        }
                        )),
                        _.addEventListener("error", (()=>{
                            console.error(_.error),
                            u._7225("Gallery", "Failed to delete the clip.")
                        }
                        ))
                    }
                    ))
                }
                _5779() {
                    ns._2006()
                }
            }
              , v_ = new class extends i {
                _6512;
                _9812;
                constructor() {
                    super(),
                    this._6512 = [],
                    this._9812 = new g_
                }
                _8500() {
                    if (this._6512.length < 2)
                        u._7225("Instant replay", "Not enough frames to create a replay.");
                    else {
                        let t = 0;
                        const _ = [];
                        for (const e of this._6512) {
                            const s = e._6732(this._9812);
                            _.push(s),
                            t += s.byteLength
                        }
                        const e = this._9812._6732()
                          , s = this._7401(e, _, e.byteLength + t)
                          , i = this._6512[0]._5643
                          , n = this._6512[this._6512.length - 1]._5643
                          , o = Math.floor((n - i) / 1e3)
                          , r = Math.floor(Date.now() - (n - i))
                          , h = this._1469("replay", r, o);
                        y_._5002(h, s),
                        u._7225("Instant replay", "Saved to gallery.")
                    }
                    this._9812._4518(),
                    this._6512 = []
                }
                _7401(t, _, e) {
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
                _1469(t, _, e) {
                    const s = new Date(_).toString().substring(4, 24)
                      , i = Math.floor(e / 3600).toString().padStart(2, "0")
                      , n = Math.floor(e % 3600 / 60).toString().padStart(2, "0")
                      , o = (e % 60).toString().padStart(2, "0");
                    return `${Date.now()}~${t}~${s}~${i}:${n}:${o}`
                }
                _7714(t) {
                    if (!Q.INSTANT_REPLAY._7142())
                        return void (this._6512.length > 0 && (this._6512 = [],
                        this._9812._4518()));
                    const _ = new p_;
                    _._3433(n._4081),
                    _._9389(re._7185),
                    _._9459(J_._5130._4563, J_._5130._2266),
                    t._3139(4),
                    t._7249() && (t._7249() === z._1728 ? t._3139(11) : t._3139(4));
                    const e = t._4067();
                    for (let s = 0; s < e; s++) {
                        const e = t._4067();
                        _._7242(e)
                    }
                    const s = t._4067();
                    for (let e = 0; e < s; e++) {
                        const e = t._4067()
                          , s = t._4067();
                        _._5790(e, s)
                    }
                    const i = t._4067();
                    for (let e = 0; e < i; e++) {
                        const e = t._4067()
                          , s = re._8032(e)
                          , i = t._4067()
                          , n = t._4067()
                          , o = s._6334 === A._6064 ? t._7249() : t._4067();
                        _._7329(e, i, n, o)
                    }
                    const o = t._4067();
                    for (let e = 0; e < o; e++) {
                        const e = t._4067()
                          , s = t._7249()
                          , i = t._4067()
                          , n = t._4067()
                          , o = s === A._6064 ? t._7249() : t._4067();
                        if (s === A._3277) {
                            const r = t._4067()
                              , h = re._8994(r)
                              , a = Me._4543.length + Me._1754.length > 0 && re._6617.has(r)
                              , c = h._3636._6310
                              , l = h._8955._9783
                              , u = h._3636._2562
                              , d = h._3636._4543
                              , m = a || c ? h._1633 : "";
                            _._3591(e, i, n, o, s, l, u, d, m)
                        } else if (s === A._5555) {
                            const r = t._4067()
                              , h = re._8994(r);
                            _._3591(e, i, n, o, s, h._8955._9783, "", "", "")
                        } else
                            _._3591(e, i, n, o, s, 0, "", "", "")
                    }
                    this._4710(_)
                }
                _4710(t) {
                    this._6512.length < 1 && (t = this._7506()),
                    this._6512.push(t);
                    const _ = 1e3 * Q.INSTANT_REPLAY_LENGTH._7142()
                      , e = this._6512[0];
                    let s = this._6512[this._6512.length - 1];
                    for (; this._6512.length > 1 && s._5643 - e._5643 > _; ) {
                        const t = this._6512[1];
                        e._1993(t),
                        this._6512[1] = this._6512[0],
                        this._6512.shift(),
                        s = this._6512[this._6512.length - 1]
                    }
                }
                _7506() {
                    const t = new p_;
                    t._3433(n._4081),
                    t._9389(re._7185),
                    t._9459(J_._5130._4563, J_._5130._2266);
                    for (const _ of re._4764.values()) {
                        if (_._8845)
                            continue;
                        const e = _._6334 === A._3277 && Me._4543.length + Me._1754.length > 0 && re._6617.has(_._9087._6808)
                          , s = _._6334 === A._3277 && _._9087._3636._6310
                          , {_6808: i, _3078: n, _6805: o, _6530: r, _6334: h} = _;
                        if (h === A._6064)
                            t._3591(i, n, o, r, h, 0, "", "", "");
                        else if (h === A._3277) {
                            const a = _._9087._8955._9783
                              , c = _._9087._3636._2562
                              , l = _._9087._3636._4543
                              , u = e || s ? _._9087._1633 : "";
                            t._3591(i, n, o, r, h, a, c, l, u)
                        } else if (h === A._5555) {
                            const e = _._8955._9783;
                            t._3591(i, n, o, r, h, e, "", "", "")
                        } else
                            h === A._2830 && t._3591(i, n, o, r, h, 0, "", "", "")
                    }
                    return t
                }
                _6360() {
                    this._9812._4518(),
                    this._6512 = []
                }
            }
              , C_ = new class {
                _2672;
                constructor() {
                    this._2672 = null
                }
                _6468() {
                    const t = document.getElementById("context-menu");
                    this._2672 = r._2624(t)
                }
                _7705(t) {
                    const _ = document.createDocumentFragment();
                    for (const e of t) {
                        const t = _t.ZP.createElement("div", {
                            class: "come-option",
                            onClick: e._3350
                        }, _t.ZP.createElement("i", {
                            class: ["come-option-icon", "iconfont", `iconfont-${e._5138}`]
                        }), _t.ZP.createElement("div", {
                            class: "come-option-text"
                        }, e._7917));
                        _.appendChild(t)
                    }
                    this._2672._9798("visibility", "visible"),
                    this._2672._9798("opacity", "1"),
                    this._2672._9798("transform", "translateY(0px)");
                    const e = q._7899 / 100
                      , s = (12 + 1 * e) * t.length + .4 * e + 2;
                    Z_._1745._2266 + s < q._7899 ? (this._2672._9798("top", `${Z_._1745._2266}px`),
                    this._2672._9798("bottom", "auto"),
                    this._2672._9798("left", `${Z_._1745._4563}px`)) : (this._2672._9798("top", "auto"),
                    this._2672._9798("bottom", q._7899 - Z_._1745._2266 + "px"),
                    this._2672._9798("left", `${Z_._1745._4563}px`)),
                    o._3851((()=>{
                        this._2672._7800.appendChild(_)
                    }
                    )),
                    window.addEventListener("mouseup", this._8601.bind(this), {
                        once: !0
                    })
                }
                _8601() {
                    this._2672._9798("visibility", "collapse"),
                    this._2672._9798("opacity", "0"),
                    this._2672._9798("transform", "translateY(-50px)"),
                    o._3851((()=>{
                        this._2672._7800.innerHTML = ""
                    }
                    ))
                }
            }
              , b_ = new class {
                _8848;
                _1281;
                _6361;
                _8503;
                constructor() {
                    this._8848 = null,
                    this._1281 = null,
                    this._6361 = null,
                    this._8503 = !1
                }
                _4905() {
                    return this._8503
                }
                _6468() {
                    const t = document.getElementById("chbx-body")
                      , _ = document.getElementById("chbx-body-content");
                    t.addEventListener("mouseenter", (()=>{
                        this._8503 = !0
                    }
                    )),
                    t.addEventListener("mouseleave", (()=>{
                        this._8503 = !1
                    }
                    )),
                    this._8848 = r._2624(t),
                    this._1281 = r._2624(_),
                    this._6361 = new J(t),
                    this._6361._6468()
                }
                _9978(t) {
                    o._3851((()=>{
                        this._1281._7800.appendChild(t._7800)
                    }
                    ))
                }
                _5099(t) {
                    o._3851((()=>{
                        this._1281._7800.removeChild(t._7800)
                    }
                    ))
                }
                _9885() {
                    this._8848._9798("flex", "0 0 calc(130px + 15vh)"),
                    b_._6361._9837()
                }
                _1751() {
                    this._8848._9798("flex", "0 0 calc(65px + 7.5vh)"),
                    b_._6361._6813(),
                    b_._6361._9837()
                }
                _2793(t) {
                    this._8848._9798("opacity", t.toString())
                }
                _7156(t) {
                    const _ = this._1281._7800.querySelectorAll(".chbx-message-time");
                    for (const e of _)
                        e.style.display = t ? "none" : "inline-block"
                }
            }
              , S_ = new class {
                _7359;
                constructor() {
                    this._7359 = !0
                }
                _6468() {
                    const t = document.getElementById("chbx-resize")
                      , _ = r._2624(t);
                    t.onclick = ()=>{
                        this._7359 ? (_._9798("transform", "rotate(180deg)"),
                        b_._1751(),
                        localStorage.setItem("chatbox-shrink", "yes")) : (_._9798("transform", "rotate(0deg)"),
                        b_._9885(),
                        localStorage.removeItem("chatbox-shrink")),
                        this._7359 = !this._7359
                    }
                    ,
                    null !== localStorage.getItem("chatbox-shrink") && t.click()
                }
            }
              , A_ = new class {
                _5953;
                constructor() {
                    this._5953 = null
                }
                _6468() {
                    const t = document.getElementById("chbx-channel-close");
                    this._5953 = r._2624(t),
                    this._5953._7800.onclick = ()=>{
                        B_._8738(B_._3758)
                    }
                }
                _7705() {
                    this._5953._9798("display", "inline")
                }
                _8601() {
                    this._5953._9798("display", "none")
                }
            }
            ;
            class T_ {
                _7800;
                _5953;
                _9542;
                constructor() {
                    this._7800 = _t.ZP.createElement("div", {
                        class: "chbx-body-channel"
                    }),
                    this._5953 = r._2624(this._7800),
                    this._9542 = []
                }
                _9978(t) {
                    o._3851((()=>{
                        if (this._7800.appendChild(t._7800),
                        this._9542.length > 30) {
                            const t = this._9542.shift();
                            void 0 !== t && this._7800.removeChild(t._7800)
                        }
                        b_._6361._6813(),
                        b_._6361._9837()
                    }
                    )),
                    this._9542.push(t)
                }
                _7705() {
                    this._5953._9798("display", "block"),
                    o._3658((()=>{
                        b_._6361._6813(),
                        b_._6361._9837()
                    }
                    ))
                }
                _8601() {
                    this._5953._9798("display", "none"),
                    o._3658((()=>{
                        b_._6361._6813()
                    }
                    ))
                }
                _7193() {
                    const t = [];
                    for (const _ of this._9542)
                        t.push(_._2908());
                    return t.join("\n")
                }
            }
            class I_ {
                _6808;
                _2866;
                _5617;
                _8691;
                _9270;
                _4736;
                constructor(t, _) {
                    this._6808 = t,
                    this._2866 = _,
                    this._5617 = new T_,
                    this._8691 = new L_(t),
                    this._9270 = !1,
                    this._4736 = !1
                }
                get _9559() {
                    return this._9270
                }
                set _9559(t) {
                    this._9270 = t,
                    t ? this._8691._7168() : this._8691._5131()
                }
                _2673(t, _) {
                    const e = new O_(t,_);
                    this._5617._9978(e),
                    this._4736 || (this._9559 = !0)
                }
                _9860() {
                    this._4736 || (this._5617._7705(),
                    this._9559 = !1,
                    this._4736 = !0)
                }
                _3127() {
                    this._4736 && (this._5617._8601(),
                    this._4736 = !1)
                }
            }
            class O_ {
                _7800;
                _1203;
                _7796;
                _8653;
                constructor(t, _) {
                    const e = this._7001()
                      , s = [{
                        _5138: "copy",
                        _7917: "Copy message",
                        _3350: ()=>{
                            const t = this._2908();
                            navigator.clipboard.writeText(t).catch(console.error)
                        }
                    }, {
                        _5138: "copy-all",
                        _7917: "Copy all",
                        _3350: ()=>{
                            const t = B_._9935._5617._7193();
                            navigator.clipboard.writeText(t).catch(console.error)
                        }
                    }];
                    Me._2562 !== t && s.push({
                        _5138: "mute",
                        _7917: `Mute ${t}`,
                        _3350: ()=>{
                            M_._9978(t)
                        }
                    }, {
                        _5138: "chat-bubble",
                        _7917: `Message ${t}`,
                        _3350: ()=>{
                            const _ = `[DM] ${t}`;
                            B_._6413(_),
                            B_._1171(_)
                        }
                    });
                    const i = x_._3667.HIDE_TIMESTAMPS
                      , n = _t.ZP.createElement("div", {
                        class: "chbx-message",
                        onContextMenu: ()=>{
                            C_._7705(s)
                        }
                    }, _t.ZP.createElement("div", {
                        class: "chbx-message-time",
                        style: {
                            display: i ? "none" : "inline-block"
                        }
                    }, e), _t.ZP.createElement("div", {
                        class: "chbx-message-sender"
                    }, t), _t.ZP.createElement("div", {
                        class: "chbx-message-content"
                    }, _));
                    this._7800 = n,
                    this._1203 = e,
                    this._7796 = t,
                    this._8653 = _
                }
                _7001() {
                    const t = new Date;
                    return `${`0${t.getHours()}`.slice(-2)}:${`0${t.getMinutes()}`.slice(-2)}`
                }
                _2908() {
                    return `(${this._1203}) ${this._7796}: ${this._8653}`
                }
            }
            class L_ {
                _6808;
                _7800;
                _9867;
                constructor(t) {
                    const _ = _t.ZP.createElement("i", {
                        class: "iconfont iconfont-circle chbx-dropup-unread"
                    })
                      , e = _t.ZP.createElement("div", {
                        class: "chbx-dropup-list-item"
                    }, _, t);
                    this._6808 = t,
                    this._7800 = e,
                    this._9867 = r._2624(_)
                }
                _7168() {
                    this._9867._9798("display", "inline")
                }
                _5131() {
                    this._9867._9798("display", "none")
                }
            }
            const P_ = new class {
                _7202;
                _8653;
                _1238;
                _7973;
                constructor() {
                    this._7202 = null,
                    this._8653 = null,
                    this._1238 = null,
                    this._7973 = !1
                }
                _6468() {
                    const t = document.getElementById("chbx-dropup-list")
                      , _ = document.getElementById("chbx-dropup-list-content");
                    this._7202 = r._2624(t),
                    this._8653 = _,
                    this._1238 = new J(t),
                    this._1238._6468()
                }
                _9978(t) {
                    o._3851((()=>{
                        this._8653.appendChild(t._7800),
                        this._1238._6813()
                    }
                    ))
                }
                _5099(t) {
                    o._3851((()=>{
                        this._8653.removeChild(t._7800),
                        this._1238._6813()
                    }
                    ))
                }
                _7705() {
                    this._7973 || (this._7202._9798("transform", "translateY(-100%) rotateX(0deg)"),
                    this._7973 = !0)
                }
                _8601() {
                    this._7973 && (this._7202._9798("transform", "translateY(-100%) rotateX(90deg)"),
                    this._7973 = !1)
                }
            }
              , N_ = new class {
                _9744;
                _9867;
                _2262;
                constructor() {
                    this._9744 = null,
                    this._9867 = null,
                    this._2262 = null
                }
                _6468() {
                    const t = document.getElementById("chbx-dropup-selected")
                      , _ = document.getElementById("chbx-dropup-unread")
                      , e = document.getElementById("chbx-dropup-arrow");
                    this._9744 = r._2624(t),
                    this._9867 = r._2624(_),
                    this._2262 = r._2624(e),
                    document.getElementById("chbx-dropup").onclick = ()=>{
                        P_._7973 ? this._5764() : this._2531()
                    }
                }
                _2531() {
                    P_._7705(),
                    this._2262._9798("transform", "rotate(180deg)")
                }
                _5764() {
                    P_._8601(),
                    this._2262._9798("transform", "rotate(0deg)")
                }
                _7168() {
                    this._9867._9798("display", "inline")
                }
                _5131() {
                    this._9867._9798("display", "none")
                }
                _4205(t) {
                    this._9744._7917 = t._6808
                }
            }
              , M_ = new class {
                _3569;
                _5434;
                _8653;
                _1238;
                _5953;
                _7953;
                _8503;
                constructor() {
                    this._3569 = "chatbox-mute-list",
                    this._5434 = [],
                    this._8653 = null,
                    this._1238 = null,
                    this._5953 = null,
                    this._7953 = !1,
                    this._8503 = !1
                }
                _4905() {
                    return this._8503
                }
                _6468() {
                    const t = document.getElementById("chatbox-mute-list")
                      , _ = document.getElementById("chbxml-body")
                      , e = document.getElementById("chbxml-body-content")
                      , s = document.getElementById("chbxml-close");
                    this._8653 = e,
                    this._1238 = new J(_),
                    this._1238._6468(),
                    this._5953 = r._2624(t),
                    this._6967(),
                    this._2391(),
                    s.onclick = ()=>{
                        this._8601()
                    }
                    ,
                    t.addEventListener("mouseenter", (()=>{
                        this._8503 = !0
                    }
                    )),
                    t.addEventListener("mouseleave", (()=>{
                        this._8503 = !1
                    }
                    ))
                }
                _9978(t) {
                    t !== Me._2562 ? this._5434.indexOf(t) < 0 ? (this._5434.push(t),
                    this._2579(),
                    this._2391(),
                    u._7225("Chat", `${t} has been muted.`)) : u._7225("Chat", `${t} is already muted.`) : u._7225("Chat", "You cannot mute yourself.")
                }
                _5099(t) {
                    const _ = this._5434.indexOf(t);
                    _ >= 0 ? (this._5434.splice(_, 1),
                    this._2579(),
                    this._2391(),
                    u._7225("Chat", `${t} has been unmuted.`)) : u._7225("Chat", `${t} is already unmuted.`)
                }
                _7705() {
                    this._7953 || (this._5953._9798("visibility", "visible"),
                    this._5953._9798("opacity", "1"),
                    this._5953._9798("transform", "translate(-50%,-50%)"),
                    this._7953 = !0)
                }
                _8601() {
                    this._7953 && (this._5953._9798("visibility", "hidden"),
                    this._5953._9798("opacity", "0"),
                    this._5953._9798("transform", "translate(-50%,-40%)"),
                    this._7953 = !1)
                }
                _2775() {
                    this._7953 ? this._8601() : this._7705()
                }
                _6186(t) {
                    return this._5434.includes(t)
                }
                _2579() {
                    const t = /^Guest\d{4}$/
                      , _ = this._5434.filter((_=>!t.test(_)));
                    0 === _.length ? localStorage.removeItem(this._3569) : localStorage.setItem(this._3569, _.join("\n"))
                }
                _6967() {
                    const t = localStorage.getItem(this._3569);
                    null !== t && (this._5434 = t.split("\n"))
                }
                _2391() {
                    o._3851((()=>{
                        this._8653.innerHTML = "";
                        for (const t of this._5434) {
                            const _ = ()=>{
                                this._5099(t)
                            }
                              , e = _t.ZP.createElement("div", {
                                class: "chbxml-entry"
                            }, _t.ZP.createElement("div", {
                                class: "chbxml-entry-name"
                            }, t), _t.ZP.createElement("i", {
                                class: "iconfont iconfont-delete chbxml-entry-remove",
                                onClick: _
                            }));
                            this._8653.appendChild(e),
                            this._1238._6813()
                        }
                    }
                    ))
                }
            }
              , R_ = new class {
                _6468() {
                    document.getElementById("chbx-mute-list").onclick = ()=>{
                        M_._2775()
                    }
                }
            }
              , k_ = new class {
                _6468() {
                    document.getElementById("chbx-settings").onclick = ()=>{
                        x_._2775()
                    }
                }
            }
              , x_ = new class {
                _3569;
                _5953;
                _7953;
                _3667;
                constructor() {
                    this._3569 = "chatbox-settings",
                    this._5953 = null,
                    this._7953 = !1,
                    this._3667 = {
                        HIDE_TIMESTAMPS: !1,
                        AUTO_DIM_CHATROOM: !0
                    }
                }
                _6468() {
                    this._6967();
                    const t = document.getElementById("chbx-settings-menu")
                      , _ = document.getElementById("chbxsm-hide-timestamps")
                      , e = r._2624(_);
                    e._8307(this._3667.HIDE_TIMESTAMPS ? "iconfont-checkbox" : "iconfont-checkbox-outline"),
                    _.onclick = ()=>{
                        this._3667.HIDE_TIMESTAMPS = !this._3667.HIDE_TIMESTAMPS,
                        this._3667.HIDE_TIMESTAMPS ? (e._8307("iconfont-checkbox"),
                        e._4748("iconfont-checkbox-outline")) : (e._8307("iconfont-checkbox-outline"),
                        e._4748("iconfont-checkbox")),
                        b_._7156(this._3667.HIDE_TIMESTAMPS),
                        this._2579()
                    }
                    ;
                    const s = document.getElementById("chbxsm-dim-when-inactive")
                      , i = r._2624(s);
                    i._8307(this._3667.AUTO_DIM_CHATROOM ? "iconfont-checkbox" : "iconfont-checkbox-outline"),
                    s.onclick = ()=>{
                        this._3667.AUTO_DIM_CHATROOM = !this._3667.AUTO_DIM_CHATROOM,
                        this._3667.AUTO_DIM_CHATROOM ? (i._8307("iconfont-checkbox"),
                        i._4748("iconfont-checkbox-outline")) : (i._8307("iconfont-checkbox-outline"),
                        i._4748("iconfont-checkbox")),
                        this._2579()
                    }
                    ,
                    document.getElementById("chbxsm-close").onclick = ()=>{
                        this._8601()
                    }
                    ,
                    this._5953 = r._2624(t)
                }
                _7705() {
                    this._7953 || (this._5953._9798("visibility", "visible"),
                    this._5953._9798("opacity", "1"),
                    this._5953._9798("transform", "translate(-50%,-50%)"),
                    this._7953 = !0)
                }
                _8601() {
                    this._7953 && (this._5953._9798("visibility", "hidden"),
                    this._5953._9798("opacity", "0"),
                    this._5953._9798("transform", "translate(-50%,-40%)"),
                    this._7953 = !1)
                }
                _2775() {
                    this._7953 ? this._8601() : this._7705()
                }
                _6967() {
                    const t = localStorage.getItem(this._3569);
                    if (null !== t) {
                        const _ = t.replace("_2CL8CFE783F3DEA", "ALLOW_MESSAGE_FROM_GUESTS").replace("_2CLCD98CA41AEF2", "HIDE_TIMESTAMPS").replace("_2CL60EF6FBFBC67", "AUTO_DIM_CHATROOM");
                        try {
                            const t = JSON.parse(_);
                            if ("object" == typeof t) {
                                const _ = t
                                  , e = Object.getOwnPropertyNames(_);
                                for (const t of e)
                                    Object.prototype.hasOwnProperty.call(this._3667, t) && "boolean" == typeof _[t] && Object.defineProperty(this._3667, t, {
                                        value: _[t]
                                    })
                            }
                        } catch (t) {
                            console.error("Corrupt chatbox settings."),
                            localStorage.removeItem(this._3569)
                        }
                    }
                }
                _2579() {
                    localStorage.setItem(this._3569, JSON.stringify(this._3667))
                }
            }
              , B_ = new class {
                _5953;
                _2124;
                _3758;
                _1507;
                _9424;
                _9695;
                _8503;
                _3639;
                constructor() {
                    this._5953 = null,
                    this._2124 = new Map,
                    this._3758 = "",
                    this._1507 = 0,
                    this._9424 = !0,
                    this._9695 = 0,
                    this._8503 = !1,
                    this._3639 = !1
                }
                _6468() {
                    b_._6468(),
                    S_._6468(),
                    A_._6468(),
                    N_._6468(),
                    P_._6468(),
                    M_._6468(),
                    R_._6468(),
                    x_._6468(),
                    k_._6468(),
                    this._6413("GLOBAL", !0),
                    this._6413("TEAM", !0),
                    this._1171("GLOBAL");
                    const t = document.getElementById("chatbox");
                    this._5953 = r._2624(t),
                    t.addEventListener("mouseenter", (()=>{
                        this._8503 = !0
                    }
                    )),
                    t.addEventListener("mouseleave", (()=>{
                        this._8503 = !1,
                        this._9695 = n._4081
                    }
                    ))
                }
                get _5864() {
                    return this._1507
                }
                set _5864(t) {
                    this._1507 = t,
                    t > 0 ? N_._7168() : N_._5131()
                }
                get _9935() {
                    return this._2124.get(this._3758)
                }
                _6813() {
                    const t = "show" === Q.SHOW_CHATBOX._7142();
                    if (this._9424 !== t && (this._5953._9798("display", t ? "flex" : "none"),
                    this._9424 = t),
                    t) {
                        const t = x_._3667.AUTO_DIM_CHATROOM && n._4081 - this._9695 > 1e4 && !this._8503;
                        this._3639 ? t || (b_._2793(1),
                        this._3639 = !1) : t && (b_._2793(.1),
                        this._3639 = !0)
                    }
                }
                _2673(t, _, e) {
                    if (M_._6186(_))
                        return;
                    const s = this._2124.get(t) || this._6413(t);
                    s._9559 && this._5864--,
                    s._2673(_, e),
                    s._9559 && this._5864++,
                    this._9695 = n._4081
                }
                _6413(t, _=!1) {
                    if (this._2124.has(t))
                        return this._2124.get(t);
                    const e = new I_(t,_);
                    return this._2124.set(t, e),
                    b_._9978(e._5617),
                    P_._9978(e._8691),
                    e._8691._7800.addEventListener("click", (()=>{
                        this._1171(e._6808)
                    }
                    )),
                    e
                }
                _8738(t, _=!1) {
                    const e = this._2124.get(t);
                    if (void 0 === e)
                        throw new Error("Channel is undefined");
                    if (e._2866 && !_)
                        throw new Error("Channel is permanent");
                    if (b_._5099(e._5617),
                    P_._5099(e._8691),
                    this._2124.delete(t),
                    e._4736) {
                        const t = [...this._2124.values()][0];
                        this._1171(t._6808)
                    }
                }
                _1171(t) {
                    for (const _ of this._2124.values())
                        _._6808 === t ? (_._9559 && this._5864--,
                        _._9860(),
                        N_._4205(_._8691),
                        this._3758 = t,
                        _._2866 ? A_._8601() : A_._7705()) : _._3127();
                    N_._5764()
                }
                _8401() {
                    for (const t of this._2124.keys())
                        t.startsWith("[DM] ") && this._8738(t)
                }
            }
              , H_ = [10, 20, 31, 42, 54, 67, 80, 94, 109, 125, 142, 160, 179, 199, 220, 243, 267, 292, 319, 348, 378, 410, 444, 480, 518, 558, 601, 646, 694, 745, 799, 856, 917, 982, 1050, 1123, 1200, 1281, 1367, 1459, 1556, 1659, 1768, 1884, 2007, 2137, 2275, 2421, 2576, 2740, 2914, 3098, 3293, 3500, 3719, 3952, 4199, 4460, 4737, 5031, 5342, 5672, 6022, 6393, 6786, 7202, 7643, 8111, 8607, 9133, 9690, 10281, 10907, 11571, 12275, 13021, 13812, 14650, 15538, 16480, 17478, 18536, 19657, 20846, 22106, 23442, 24858, 26359, 27950, 29636, 31423, 33318, 35326, 37455, 39712, 42104, 44639, 47327, 50176, 53196]
              , U_ = new class {
                _5228;
                _3597;
                _9752;
                _6909;
                constructor() {
                    this._5228 = !1,
                    this._3597 = "Guest0000",
                    this._9752 = 0,
                    this._6909 = {
                        _6559: 0,
                        _6593: 0
                    }
                }
                _5766(t) {
                    t ? this._5228 = !0 : (this._5228 = !1,
                    this._3597 = "Guest0000",
                    this._9752 = 0,
                    this._6909._6559 = 0,
                    this._6909._6593 = 0)
                }
                _5252() {
                    return this._5228
                }
                _6749(t) {
                    this._3597 = t
                }
                _2301() {
                    return this._3597
                }
                _8607(t) {
                    this._9752 = t;
                    const _ = function(t) {
                        let _ = 1;
                        for (let e = 0; e < H_.length; e++) {
                            const s = H_[e];
                            t >= s && (t -= s,
                            _++)
                        }
                        return _ > 100 && (_ = 100),
                        {
                            _9352: t,
                            _1823: H_[_ - 1],
                            _4474: _
                        }
                    }(t);
                    De._4204(_._9352, _._1823, _._4474)
                }
                _6376() {
                    return this._9752
                }
                _4314(t, _) {
                    switch (t) {
                    case "rp":
                        this._6909._6559 = _;
                        break;
                    case "rc":
                        this._6909._6593 = _
                    }
                }
                _7024(t) {
                    switch (t) {
                    case "rp":
                        return this._6909._6559;
                    case "rc":
                        return this._6909._6593
                    }
                }
            }
              , D_ = new class {
                _5125;
                _8411;
                _9550;
                constructor() {
                    this._5125 = {
                        _1895: !1,
                        _1595: 0
                    },
                    this._8411 = !1,
                    this._9550 = 0
                }
                get _6790() {
                    return this._8411
                }
                _6468() {
                    Me._9070("active-player-change", ((t,_)=>{
                        this._5125._1895 && (Ne._4011(_, !1),
                        Ne._4011(t, !0),
                        this._5125._1595 = t)
                    }
                    ))
                }
                _3040() {
                    Me._4540 ? es._1390 && ns._2006() : Ne._1406(Me._3335)
                }
                _3504() {
                    const t = Me._3335;
                    if (Me._4536[t]) {
                        const _ = n._6032 - Me._8298[t];
                        _ < 1e3 ? u._7225("Respawn", "Spam control. Respawn failed") : _ > 1e4 ? u._7225("Respawn", "Active player unit has been alive for more than 10 seconds. Respawn failed.") : (Ne._3504(t),
                        J_._1919 = z._1626)
                    }
                }
                _5683() {
                    Me._4540 && Ne._5683(Me._3335)
                }
                _4011(t) {
                    t !== this._5125._1895 && (t && !Me._4540 || (this._5125._1895 = t,
                    this._5125._1595 = Me._3335,
                    Ne._4011(Me._3335, t)))
                }
                _3577(t=1) {
                    Me._4540 && Ne._3577(Me._3335, t)
                }
                _1745() {
                    if (this._8411)
                        return;
                    const t = ns._1130 && (Q.STOP_MOVEMENT_ON_MENU_OPEN._7142() || !Me._4540) || this._8411;
                    if (t && !Me._4540)
                        return;
                    const _ = Q.RESOLUTION._7142() / 100
                      , e = window.devicePixelRatio
                      , s = t ? Me._8870[Me._3335]._4563 : (Z_._1745._4563 - q._2357 / 2) * _ * e / J_._5266 + J_._5130._4563
                      , i = t ? Me._8870[Me._3335]._2266 : (Z_._1745._2266 - q._7899 / 2) * _ * e / J_._5266 + J_._5130._2266;
                    Me._4540 ? Ne._1745(Me._3335, s, i) : Ne._4245(s, i)
                }
                _1097() {
                    if (!Me._4540 || Me._7522 < 2)
                        return;
                    const t = (Me._3335 + 1) % Me._7522;
                    Me._3335 = t,
                    this._1745(),
                    Me._4536[t] || Ne._1406(t)
                }
                _9234() {
                    this._8411 = !this._8411;
                    for (let t = 0; t < 2; t++)
                        Ne._9358(t, this._8411)
                }
                _3494() {
                    Me._4540 || (J_._1919 === z._1626 || J_._1919 === z._1728 ? Ne._4991() : Ne._2249())
                }
                _6277(t) {
                    const _ = n._6032;
                    if (_ - this._9550 < 500)
                        return void u._7225("Quick chat", "Slow down, you are sending messages too fast.");
                    if (t.length < 1)
                        return;
                    const e = B_._3758;
                    if (e.startsWith("[DM] ")) {
                        const _ = e.substring(5);
                        let s = -1;
                        for (const [t,e] of re._9822)
                            if (e._2562 === _) {
                                s = t;
                                break
                            }
                        -1 !== s ? Ne._5209(s, t) : u._7225("Direct message failed", "The user seems to be disconnected.")
                    } else
                        "GLOBAL" === B_._3758 ? U_._5252() ? Ne._3425(100, t) : u._7225("In game chat", "Please login to chat globally.") : 0 === Me._4543.length ? u._7225("In game chat", "Please join a team to chat in the team channel.") : Ne._3425(1, t);
                    this._9550 = _
                }
                _8369(t) {
                    J_._3166 = t
                }
                _2404() {
                    const t = Q.RESOLUTION._7142() / 100
                      , _ = window.devicePixelRatio
                      , e = (Z_._1745._4563 - q._2357 / 2) * t * _ / J_._5266 + J_._5130._4563
                      , s = (Z_._1745._2266 - q._7899 / 2) * t * _ / J_._5266 + J_._5130._2266;
                    Ne._2404(e, s)
                }
                _5647() {
                    Q.INSTANT_REPLAY._7142() && v_._8500()
                }
                _4871() {
                    const t = Q.RESOLUTION._7142() / 100
                      , _ = window.devicePixelRatio
                      , e = (Z_._1745._4563 - q._2357 / 2) * t * _ / J_._5266 + J_._5130._4563
                      , s = (Z_._1745._2266 - q._7899 / 2) * t * _ / J_._5266 + J_._5130._2266;
                    let i = Number.MAX_SAFE_INTEGER
                      , n = null;
                    for (const t of re._4764.values())
                        if (t._6334 === A._3277) {
                            const _ = Math.abs(e - t._4563)
                              , o = Math.abs(s - t._2266)
                              , r = Math.sqrt(_ ** 2 + o ** 2);
                            r < t._4464 && r < i && (n = t,
                            i = r)
                        }
                    null !== n && Ne._3069(n._9087._3636._6808)
                }
            }
              , W_ = new class {
                _2672;
                _5953;
                _9424;
                _8503;
                _1389;
                constructor() {
                    this._2672 = document.getElementById("chat-input"),
                    this._5953 = r._2624(this._2672),
                    this._9424 = !1,
                    this._8503 = !1,
                    this._1389 = 0
                }
                get _4905() {
                    return this._8503
                }
                _6468() {
                    this._2672.addEventListener("focus", (()=>{
                        this._8503 = !0
                    }
                    )),
                    this._2672.addEventListener("blur", (()=>{
                        this._8503 = !1
                    }
                    ))
                }
                _7383() {
                    const t = n._6032;
                    if (t - this._1389 < 500)
                        return u._7225("Chat", "Slow down, you are sending messages too fast."),
                        this._3614(!0),
                        setTimeout((()=>{
                            this._3614(!1)
                        }
                        ), 1e3),
                        !1;
                    const _ = this._2672.value.substring(0, 75);
                    if (_.length < 1)
                        return !0;
                    const e = B_._3758;
                    if (e.startsWith("[DM] ")) {
                        const t = e.substring(5);
                        let s = -1;
                        for (const [_,e] of re._9822)
                            if (e._2562 === t) {
                                s = _;
                                break
                            }
                        -1 !== s ? Ne._5209(s, _) : u._7225("Direct message failed", "The user seems to be disconnected.")
                    } else
                        "GLOBAL" === B_._3758 ? U_._5252() ? Ne._3425(100, _) : u._7225("In game chat", "Please login to chat globally.") : 0 === Me._4543.length ? u._7225("In game chat", "Please join a team to chat in the team channel.") : Ne._3425(1, _);
                    return this._2672.value = "",
                    this._1389 = t,
                    this._3614(!1),
                    !0
                }
                _7705() {
                    this._9424 || (this._2672.style.display = "block",
                    this._9424 = !0),
                    this._8503 || this._2672.focus()
                }
                _8601() {
                    this._9424 && (this._2672.style.display = "none",
                    this._9424 = !1),
                    this._8503 && window.focus()
                }
                _3614(t) {
                    t ? (this._5953._9798("animation", "chat_input_shake 100ms linear infinite"),
                    this._5953._9798("border-color", "red")) : (this._5953._9798("animation", "none"),
                    this._5953._9798("border-color", "transparent"))
                }
            }
              , G_ = new class {
                _5953;
                _8969;
                _9238;
                _2057;
                _9896;
                _8925;
                _9424;
                _9612;
                _1440;
                _2118;
                constructor() {
                    this._5953 = null,
                    this._8969 = null,
                    this._9238 = null,
                    this._2057 = null,
                    this._9896 = null,
                    this._8925 = null,
                    this._9424 = !1,
                    this._9612 = 0,
                    this._1440 = !1,
                    this._2118 = !1
                }
                _6468() {
                    const t = document.getElementById("playback-bar")
                      , _ = document.getElementById("playback-play")
                      , e = document.getElementById("playback-pause")
                      , s = document.getElementById("playback-progress")
                      , i = document.getElementById("playback-progress-text")
                      , n = document.getElementById("playback-speed")
                      , o = document.getElementById("playback-speed-text");
                    _.addEventListener("click", (()=>{
                        te._3040()
                    }
                    )),
                    e.addEventListener("click", (()=>{
                        te._3507()
                    }
                    )),
                    n.addEventListener("input", (()=>{
                        const t = 2 ** parseInt(n.value);
                        this._8925._7917 = t.toFixed(2) + "x"
                    }
                    )),
                    n.addEventListener("change", (()=>{
                        const t = parseInt(n.value);
                        te._4418 = 2 ** t
                    }
                    )),
                    s.addEventListener("input", (()=>{
                        this._1440 = !0
                    }
                    )),
                    s.addEventListener("change", (()=>{
                        const t = parseInt(s.value);
                        te._6833 = t,
                        this._1440 = !1
                    }
                    )),
                    te._9070("play", (()=>{
                        this._8969._9798("display", "none"),
                        this._9238._9798("display", "block")
                    }
                    )),
                    te._9070("pause", (()=>{
                        this._9238._9798("display", "none"),
                        this._8969._9798("display", "block")
                    }
                    )),
                    this._5953 = r._2624(t),
                    this._8969 = r._2624(_),
                    this._9238 = r._2624(e),
                    this._2057 = s,
                    this._9896 = r._2624(i),
                    this._8925 = r._2624(o)
                }
                _6813() {
                    if (!this._9424)
                        return;
                    if (ns._1130 ? this._2118 && this._3578() : this._2118 || this._2342(),
                    this._1440)
                        return;
                    this._2057.value = te._6833.toString();
                    const t = Math.floor((te._7010 - this._9612) / 1e3)
                      , _ = Math.floor(t / 3600).toString().padStart(2, "0")
                      , e = Math.floor(t % 3600 / 60).toString().padStart(2, "0")
                      , s = (t % 60).toString().padStart(2, "0");
                    this._9896._7917 = `${_}:${e}:${s}`
                }
                _7705(t, _) {
                    this._9612 = t,
                    this._2057.max = _.toString(),
                    this._2057.value = "0",
                    this._5953._9798("display", "flex"),
                    this._9424 = !0
                }
                _8601() {
                    this._5953._9798("display", "none"),
                    this._9424 = !1
                }
                _2342() {
                    this._2118 = !0,
                    this._5953._9798("opacity", "1")
                }
                _3578() {
                    this._2118 = !1,
                    this._5953._9798("opacity", "0")
                }
                _5688() {
                    "hidden" === this._5953._7630("visibility") ? this._5953._9798("visibility", "visible") : this._5953._9798("visibility", "hidden")
                }
            }
              , K_ = new class {
                _7402;
                _3295;
                constructor() {
                    const t = document.getElementById("tr-result-table")
                      , _ = document.getElementById("tr-result-table-scrollbar-slider");
                    t.addEventListener("scroll", this._6813.bind(this)),
                    t.addEventListener("mouseenter", this._6813.bind(this), {
                        once: !0
                    }),
                    q._9070("resize", this._6813.bind(this));
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
                    this._7402 = t,
                    this._3295 = r._2624(_)
                }
                _6813() {
                    const t = this._7402.scrollHeight
                      , _ = this._7402.offsetHeight
                      , e = _ * (_ / t)
                      , s = this._7402.scrollTop * (_ / t);
                    this._3295._9798("height", `${e.toFixed(0)}px`),
                    this._3295._9798("top", `${s.toFixed(0)}px`)
                }
            }
              , F_ = new class {
                _7178;
                _4128;
                _9194;
                _4255;
                _9424;
                constructor() {
                    this._7178 = null,
                    this._4128 = "players",
                    this._9194 = "tp",
                    this._4255 = [],
                    this._9424 = !1
                }
                get _1390() {
                    return this._9424
                }
                _6468() {
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
                        this._4128 = "players",
                        this._2391()
                    }
                    )),
                    s.addEventListener("click", (()=>{
                        _.style.opacity = "0.5",
                        e.style.opacity = "0",
                        s.style.opacity = "1",
                        i.style.opacity = "1",
                        this._4128 = "teams",
                        this._2391()
                    }
                    ));
                    const n = [document.getElementById("tr-result-sort-tp"), document.getElementById("tr-result-sort-end-energy"), document.getElementById("tr-result-sort-avg-energy"), document.getElementById("tr-result-sort-sp")];
                    for (const t of n)
                        t.addEventListener("click", (()=>{
                            for (const t of n)
                                t.querySelector("i").style.display = "none";
                            t.querySelector("i").style.display = "block",
                            this._9194 = t.id.substring(15),
                            this._2391()
                        }
                        ));
                    this._7178 = r._2624(t)
                }
                _7705(t) {
                    t.length < 1 || (this._4255 = t,
                    this._2391(),
                    this._7178._9798("display", "flex"),
                    this._9424 = !0)
                }
                _8601() {
                    this._7178._9798("display", "none"),
                    this._9424 = !1
                }
                _2391() {
                    const t = new Map;
                    for (const _ of this._4255) {
                        const e = "players" === this._4128 ? "" : _._4543 + "\0" + _._1754;
                        t.has(e) || t.set(e, []),
                        t.get(e).push(_)
                    }
                    for (const _ of t.values())
                        "tp" === this._9194 ? _.sort(((t,_)=>_._4495 - t._4495)) : "end-energy" === this._9194 ? _.sort(((t,_)=>_._7825 - t._7825)) : "avg-energy" === this._9194 && _.sort(((t,_)=>_._5136 - t._5136));
                    const _ = [];
                    for (const [e,s] of t) {
                        const t = {
                            _4087: e.split("\0")[0],
                            _2102: s,
                            _4495: 0,
                            _7825: 0,
                            _5136: 0,
                            _5879: 0
                        };
                        for (const _ of s)
                            t._4495 += _._4495,
                            t._7825 += _._7825,
                            t._5136 += _._5136,
                            t._5879 += _._5879;
                        _.push(t)
                    }
                    "tp" === this._9194 ? _.sort(((t,_)=>_._4495 - t._4495)) : "end-energy" === this._9194 ? _.sort(((t,_)=>_._7825 - t._7825)) : "avg-energy" === this._9194 ? _.sort(((t,_)=>_._5136 - t._5136)) : "sp" === this._9194 && _.sort(((t,_)=>_._5879 - t._5879));
                    const e = document.getElementById("tr-result-table");
                    e.innerHTML = "";
                    for (let t = 0; t < _.length; t++) {
                        const s = _[t];
                        if (t > 0) {
                            const t = _t.ZP.createElement("div", {
                                class: "tr-result-spacer"
                            });
                            e.appendChild(t)
                        }
                        if (s._4087.length > 0) {
                            const _ = (t + 1).toString().padStart(2, "0")
                              , i = _t.ZP.createElement("div", {
                                class: "tr-result-row tr-result-row-team"
                            }, _t.ZP.createElement("div", {
                                class: "tr-result-column tr-result-column-name"
                            }, _, ". ", s._4087), _t.ZP.createElement("div", {
                                class: "tr-result-column"
                            }, s._4495), _t.ZP.createElement("div", {
                                class: "tr-result-column"
                            }, s._7825), _t.ZP.createElement("div", {
                                class: "tr-result-column"
                            }, s._5136), _t.ZP.createElement("div", {
                                class: "tr-result-column"
                            }, s._5879));
                            e.appendChild(i)
                        }
                        for (let t = 0; t < s._2102.length; t++) {
                            const _ = s._2102[t]
                              , i = (t + 1).toString().padStart(2, "0")
                              , n = _t.ZP.createElement("div", {
                                class: "tr-result-row"
                            }, _t.ZP.createElement("div", {
                                class: "tr-result-column tr-result-column-name"
                            }, i, ". ", _._4087), _t.ZP.createElement("div", {
                                class: "tr-result-column"
                            }, _._4495), _t.ZP.createElement("div", {
                                class: "tr-result-column"
                            }, _._7825), _t.ZP.createElement("div", {
                                class: "tr-result-column"
                            }, _._5136), _t.ZP.createElement("div", {
                                class: "tr-result-column"
                            }, _._5879));
                            e.appendChild(n)
                        }
                    }
                    K_._6813()
                }
            }
              , Z_ = new class {
                _4225;
                _1745;
                constructor() {
                    this._4225 = new ut(this._7608.bind(this)),
                    this._1745 = new mt(this._5498.bind(this))
                }
                _6468() {
                    this._4225._6468(),
                    this._1745._6468();
                    const t = Object.getOwnPropertyNames(Q);
                    for (const _ of t) {
                        const t = Q[_];
                        t instanceof M && t._9070("change", this._7849.bind(this, t))
                    }
                    setInterval(D_._1745.bind(D_), 40)
                }
                _7608(t, _, e) {
                    switch (_) {
                    case "keydown":
                        this._8354(t, e);
                        break;
                    case "keyup":
                        this._4792(t, e)
                    }
                }
                _5498(t, _, e) {
                    switch (_) {
                    case "mousedown":
                        this._9131(t, e);
                        break;
                    case "mouseup":
                        this._1341(t, e);
                        break;
                    case "contextmenu":
                        this._3720(t);
                        break;
                    case "mousescroll":
                        this._5571(t)
                    }
                }
                _8354(t, _) {
                    if (!b_._4905() || "CTRL+C" !== _) {
                        if (null !== document.activeElement && "INPUT" === document.activeElement.nodeName || t.preventDefault(),
                        "ESC" === _) {
                            if (!F_._1390)
                                return ns._1130 ? void ns._2006() : W_._4905 ? void W_._8601() : void ns._5626(es);
                            F_._8601()
                        }
                        if ("ENTER" !== _ || ns._1130)
                            "H" === _ && te._2026 && G_._5688(),
                            "SPACE" === _ && te._2026 && (te._1246 ? te._3507() : te._3040()),
                            this._3038(_, 0);
                        else {
                            if (W_._4905)
                                return void (W_._7383() && W_._8601());
                            W_._7705()
                        }
                    }
                }
                _4792(t, _) {
                    this._9214(_, 0)
                }
                _9131(t, _) {
                    if (null !== t.target) {
                        if (t.target instanceof HTMLInputElement && "chat-input" === t.target.id)
                            return;
                        if (t.target instanceof HTMLDivElement && "chat-box-channel" === t.target.className)
                            return
                    }
                    this._3038(_, 1)
                }
                _1341(t, _) {
                    this._9214(_, 1)
                }
                _3720(t) {}
                _5571(t) {
                    ns._1130 || F_._1390 || b_._4905() || M_._4905() || (t.deltaY < 0 ? J_._3422() : J_._3698())
                }
                _3038(t, _) {
                    if (ns._1130 || W_._4905)
                        return;
                    const e = Q;
                    switch (t) {
                    case e.HK_SPLIT._7142()[_]:
                        D_._3577(1);
                        break;
                    case e.HK_SPLIT_2X._7142()[_]:
                        D_._3577(2);
                        break;
                    case e.HK_SPLIT_3X._7142()[_]:
                        D_._3577(3);
                        break;
                    case e.HK_SPLIT_4X._7142()[_]:
                        D_._3577(4);
                        break;
                    case e.HK_SPLIT_6X._7142()[_]:
                        D_._3577(6);
                        break;
                    case e.HK_EJECT._7142()[_]:
                        D_._5683();
                        break;
                    case e.HK_COMMANDER._7142()[_]:
                        D_._2404();
                        break;
                    case e.HK_RESPAWN._7142()[_]:
                        D_._3504();
                        break;
                    case e.HK_MACRO_EJECT._7142()[_]:
                        D_._4011(!0);
                        break;
                    case e.HK_SWITCH_ACTIVE_PLAYER_UNIT._7142()[_]:
                        D_._1097();
                        break;
                    case e.HK_STOP_MOVEMENT._7142()[_]:
                        D_._9234();
                        break;
                    case e.HK_SAVE_INSTANT_REPLAY._7142()[_]:
                        D_._5647();
                        break;
                    case e.HK_TOGGLE_OWN_USERNAME._7142()[_]:
                        Q.SHOW_OWN_USERNAME._1866(!Q.SHOW_OWN_USERNAME._7142());
                        break;
                    case e.HK_TOGGLE_ENEMY_USERNAME._7142()[_]:
                        Q.SHOW_ENEMY_USERNAME._1866(!Q.SHOW_ENEMY_USERNAME._7142());
                        break;
                    case e.HK_TOGGLE_OWN_ENERGY._7142()[_]:
                        Q.SHOW_OWN_ENERGY._1866(!Q.SHOW_OWN_ENERGY._7142());
                        break;
                    case e.HK_TOGGLE_ENEMY_ENERGY._7142()[_]:
                        Q.SHOW_ENEMY_ENERGY._1866(!Q.SHOW_ENEMY_ENERGY._7142());
                        break;
                    case e.HK_TOGGLE_CUSTOM_SKINS._7142()[_]:
                        Q.SHOW_CUSTOM_SKINS._1866(!Q.SHOW_CUSTOM_SKINS._7142());
                        break;
                    case e.HK_TOGGLE_OWN_CUSTOM_SKINS._7142()[_]:
                        Q.SHOW_OWN_CUSTOM_SKINS._1866(!Q.SHOW_OWN_CUSTOM_SKINS._7142());
                        break;
                    case e.HK_CHATROOM_SWITCH_TO_GLOBAL._7142()[_]:
                        B_._1171("GLOBAL");
                        break;
                    case e.HK_CHATROOM_SWITCH_TO_TEAM._7142()[_]:
                        B_._1171("TEAM");
                        break;
                    case e.HK_QUICK_CHAT_1._7142()[_]:
                        D_._6277(Q.QUICK_CHAT_1_MESSAGE._7142());
                        break;
                    case e.HK_QUICK_CHAT_2._7142()[_]:
                        D_._6277(Q.QUICK_CHAT_2_MESSAGE._7142());
                        break;
                    case e.HK_QUICK_CHAT_3._7142()[_]:
                        D_._6277(Q.QUICK_CHAT_3_MESSAGE._7142());
                        break;
                    case e.HK_QUICK_CHAT_4._7142()[_]:
                        D_._6277(Q.QUICK_CHAT_4_MESSAGE._7142());
                        break;
                    case e.HK_QUICK_CHAT_5._7142()[_]:
                        D_._6277(Q.QUICK_CHAT_5_MESSAGE._7142());
                        break;
                    case e.HK_QUICK_CHAT_6._7142()[_]:
                        D_._6277(Q.QUICK_CHAT_6_MESSAGE._7142());
                        break;
                    case e.HK_QUICK_CHAT_7._7142()[_]:
                        D_._6277(Q.QUICK_CHAT_7_MESSAGE._7142());
                        break;
                    case e.HK_QUICK_CHAT_8._7142()[_]:
                        D_._6277(Q.QUICK_CHAT_8_MESSAGE._7142());
                        break;
                    case e.HK_QUICK_CHAT_9._7142()[_]:
                        D_._6277(Q.QUICK_CHAT_9_MESSAGE._7142());
                        break;
                    case e.HK_QUICK_CHAT_10._7142()[_]:
                        D_._6277(Q.QUICK_CHAT_10_MESSAGE._7142());
                        break;
                    case e.HK_ZOOM_LEVEL_1._7142()[_]:
                        D_._8369(.5);
                        break;
                    case e.HK_ZOOM_LEVEL_2._7142()[_]:
                        D_._8369(.25);
                        break;
                    case e.HK_ZOOM_LEVEL_3._7142()[_]:
                        D_._8369(.125);
                        break;
                    case e.HK_ZOOM_LEVEL_4._7142()[_]:
                        D_._8369(.0625);
                        break;
                    case e.HK_ZOOM_LEVEL_5._7142()[_]:
                        D_._8369(.04)
                    }
                    switch (t) {
                    case e.HK_SELECT_PLAYER_FOR_SPECTATING._7142()[_]:
                        D_._4871();
                        break;
                    case e.HK_CHANGE_SPECTATE_MODE._7142()[_]:
                        D_._3494()
                    }
                }
                _9214(t, _) {
                    ns._1130 || W_._4905 || t === Q.HK_MACRO_EJECT._7142()[_] && D_._4011(!1)
                }
                _7849(t) {
                    const _ = t._7142()
                      , e = Object.getOwnPropertyNames(Q);
                    for (const s of e) {
                        const e = Q[s];
                        if (e !== t && e instanceof M && e._3857 === t._3857) {
                            const t = e._7142();
                            "NONE" !== _[0] && t[0] === _[0] && e._1866(["NONE", t[1]]),
                            "NONE" !== _[1] && t[1] === _[1] && e._1866([t[0], "NONE"])
                        }
                    }
                }
            }
              , $_ = new class extends At {
                _7402;
                _8353;
                constructor() {
                    super(),
                    this._7402 = null,
                    this._8353 = []
                }
                _8274() {
                    return this._7402
                }
                _6468() {
                    this._7402 = new c.W20
                }
                _6813() {
                    if (this._7402.removeChildren(),
                    !Q.CURSOR_LINES._7142() || !Me._4540)
                        return;
                    const t = [...Me._3636._2102.values()][Me._3335];
                    if (void 0 === t)
                        return void console.warn("Player doesn't exist.");
                    let _ = 0;
                    const e = Q.CURSOR_LINE_THICKNESS._7142()
                      , s = Q.CURSOR_LINE_COLOR._7142()
                      , i = Q.RESOLUTION._7142() / 100
                      , n = window.devicePixelRatio
                      , o = (Z_._1745._4563 - q._2357 / 2) * i * n / J_._5266 + J_._5130._4563
                      , r = (Z_._1745._2266 - q._7899 / 2) * i * n / J_._5266 + J_._5130._2266;
                    for (const i of t._4764.values()) {
                        const t = o - i._4563
                          , n = r - i._2266
                          , h = Math.sqrt(t * t + n * n)
                          , a = Math.atan(t / n)
                          , c = this._8353[_++] || this._9167();
                        c.position.set(o, r),
                        c.width = e,
                        c.height = h,
                        c.rotation = (r < i._2266 ? 0 : Math.PI) - a,
                        c.alpha = i._3923,
                        c.tint = s,
                        this._7402.addChild(c)
                    }
                }
                _9167() {
                    const t = new c.jyi(c.xEZ.WHITE);
                    return t.anchor.x = .5,
                    this._8353.push(t),
                    t
                }
            }
              , Y_ = new class extends At {
                _7402;
                _1141;
                _8353;
                _7843;
                constructor() {
                    super(),
                    this._7402 = null,
                    this._1141 = new Set,
                    this._8353 = [],
                    this._7843 = null
                }
                _8274() {
                    return this._7402
                }
                _6468() {
                    this._7402 = new c.W20;
                    const t = Rt._4104("TEXTURE/H3D/COMMANDER")
                      , _ = new c.VL4(t)
                      , e = new c.xEZ(_);
                    this._7843 = e
                }
                _9978(t, _, e) {
                    const s = {
                        _4563: t,
                        _2266: _,
                        _8955: e,
                        _3082: n._4081
                    };
                    this._1141.add(s)
                }
                _6813() {
                    if (this._7402.removeChildren(),
                    !Q.COMMANDER._7142())
                        return;
                    let t = 0;
                    for (const _ of this._1141) {
                        const e = n._4081 - _._3082;
                        if (e > 1e3 || 0 === e) {
                            this._1141.delete(_);
                            continue
                        }
                        const s = Math.pow(e / 1e3, .5)
                          , i = 2e3 * s
                          , o = s > .6 ? 1 - (s - .6) / .4 : 1
                          , r = this._8353[t++] || this._4376();
                        this._5698(r, i, _._4563, _._2266, _._8955, o)
                    }
                }
                _4376() {
                    const t = [];
                    for (let _ = 0; _ < 4; ++_) {
                        const _ = new c.jyi(this._7843);
                        _.anchor.set(1, 1),
                        t.push(_)
                    }
                    return this._8353.push(t),
                    t
                }
                _5698(t, _, e, s, i, n) {
                    for (let o = 0; o < 4; o++) {
                        const r = t[o];
                        r.width = _ / 2,
                        r.height = _ / 2,
                        r.position.set(e, s),
                        r.tint = i,
                        r.alpha = n,
                        r.rotation = Math.PI / 2 * o,
                        this._7402.addChild(r)
                    }
                }
            }
              , Q_ = new class extends At {
                _7402;
                _8353;
                _4494;
                _7843;
                constructor() {
                    super(),
                    this._7402 = null,
                    this._8353 = [],
                    this._4494 = 0,
                    this._7843 = null
                }
                _8274() {
                    return this._7402
                }
                _6468() {
                    this._7402 = new c.W20;
                    const t = Rt._4104("TEXTURE/H3D/OVERLAP_HELPER")
                      , _ = new c.VL4(t)
                      , e = new c.xEZ(_);
                    this._7843 = e
                }
                _6813() {
                    this._7402.removeChildren(),
                    this._4494 = 0;
                    const t = Q.ORB_OVERLAP_HIGHLIGHTING._7142();
                    if (te._2026 || "off" === t)
                        return;
                    const _ = [];
                    for (const e of re._4764.values())
                        e._6334 === A._3277 && (e._8845 || "auto" === t && e._8445 < 1e4 || _.push(e));
                    const e = new Set;
                    for (let t = 0; t < _.length; t++) {
                        const s = _[t];
                        for (let i = t; i < _.length; i++) {
                            const t = _[i];
                            if (s._9087 === t._9087)
                                continue;
                            const n = s._4563 - t._4563
                              , o = s._2266 - t._2266;
                            Math.sqrt(n * n + o * o) >= s._4464 + t._4464 || e.add(s._4464 < t._4464 ? s : t)
                        }
                    }
                    for (const t of e)
                        this._1861(t)
                }
                _1861(t) {
                    const _ = t._9087._3636._6310
                      , e = Q.OWN_ORB_COLORING._7142();
                    let s = 16777215;
                    s = _ ? "custom" === e ? Q.CUSTOM_OWN_ORB_COLOR._7142() : "multibox" !== e || 2 !== Me._3636._2102.size || te._2026 ? t._9087._8955._9783 : t._9087._8212 === Me._3335 ? Q.ACTIVE_PLAYER_UNIT_ACCENT_COLOR._7142() : Q.INACTIVE_PLAYER_UNIT_ACCENT_COLOR._7142() : "tint" === Q.ORB_COLORING._7142() ? t._3163._9783 : t._9087._8955._9783;
                    const i = this._8353[this._4494++] || this._5401()
                      , n = this._8353[this._4494++] || this._5401()
                      , o = this._8353[this._4494++] || this._5401()
                      , r = this._8353[this._4494++] || this._5401();
                    if (i.width = i.height = t._4464,
                    i.position.set(t._4563 - t._4464, t._2266 - t._4464),
                    i.rotation = 0,
                    i.tint = s,
                    this._7402.addChild(i),
                    n.width = n.height = t._4464,
                    n.position.set(t._4563 + t._4464, t._2266 - t._4464),
                    n.rotation = Math.PI / 2,
                    n.tint = s,
                    this._7402.addChild(n),
                    o.width = o.height = t._4464,
                    o.position.set(t._4563 - t._4464, t._2266 + t._4464),
                    o.rotation = 1.5 * Math.PI,
                    o.tint = s,
                    this._7402.addChild(o),
                    r.width = r.height = t._4464,
                    r.position.set(t._4563 + t._4464, t._2266 + t._4464),
                    r.rotation = Math.PI,
                    r.tint = s,
                    this._7402.addChild(r),
                    t._4464 / 3 * J_._5266 > 8 && (_ && Q.SHOW_OWN_ENERGY._7142() || !_ && Q.SHOW_ENEMY_ENERGY._7142())) {
                        const _ = Ut._6194(t._8445.toFixed(0))
                          , e = t._4464 / 3 / 128 * .8;
                        _.scale.set(e, e);
                        const s = t._1664._2562
                          , i = t._1664._4543
                          , n = t._4464 / 30;
                        _.position.set(t._4563, t._2266 + .5 * s + n + (i > 0 ? i + n : 0) + _.height / 2),
                        _.alpha = .7,
                        this._7402.addChild(_)
                    }
                }
                _5401() {
                    const t = new c.jyi(this._7843);
                    return this._8353.push(t),
                    t
                }
            }
              , V_ = new class extends At {
                _7402;
                _8353;
                _4494;
                constructor() {
                    super(),
                    this._7402 = null,
                    this._8353 = [],
                    this._4494 = 0
                }
                _8274() {
                    return this._7402
                }
                _6468() {
                    this._7402 = new c.W20
                }
                _6813() {
                    if (this._7402.removeChildren(),
                    this._4494 = 0,
                    Me._4540 || te._2026 || ns._1130)
                        return;
                    const t = Q.HK_SELECT_PLAYER_FOR_SPECTATING._7142();
                    if ("NONE" === t[0] && "NONE" === t[1])
                        return;
                    const _ = Q.RESOLUTION._7142() / 100
                      , e = window.devicePixelRatio
                      , s = (Z_._1745._4563 - q._2357 / 2) * _ * e / J_._5266 + J_._5130._4563
                      , i = (Z_._1745._2266 - q._7899 / 2) * _ * e / J_._5266 + J_._5130._2266;
                    let n = Number.MAX_SAFE_INTEGER
                      , o = null;
                    for (const t of re._4764.values())
                        if (t._6334 === A._3277) {
                            const _ = Math.abs(s - t._4563)
                              , e = Math.abs(i - t._2266)
                              , r = Math.sqrt(_ ** 2 + e ** 2);
                            r < t._4464 && r < n && (o = t,
                            n = r)
                        }
                    if (null !== o)
                        for (const t of o._9087._3636._2102.values())
                            for (const _ of t._4764.values())
                                this._1861(_)
                }
                _1861(t) {
                    const _ = this._8353[this._4494++] || this._5401();
                    _.width = _.height = 2 * t._4464,
                    _.position.set(t._4563, t._2266),
                    this._7402.addChild(_)
                }
                _5401() {
                    const t = new c.jyi(kt._3651._5638);
                    return t.anchor.set(.5, .5),
                    t.alpha = .15,
                    this._8353.push(t),
                    t
                }
            }
              , j_ = new class extends At {
                _7402;
                _2089;
                _9185;
                _6807;
                _5726;
                _3312;
                _5729;
                _6500;
                constructor() {
                    super(),
                    this._7402 = null,
                    this._2089 = [],
                    this._9185 = [],
                    this._6807 = [],
                    this._5726 = !1,
                    this._3312 = 0,
                    this._5729 = 0,
                    this._6500 = []
                }
                _8274() {
                    return this._7402
                }
                _7055(t) {
                    this._5726 !== t && (this._5726 = t,
                    this._3312 = n._4081)
                }
                _6882() {
                    this._5729 = Math.min(1, (n._4081 - this._3312) / 1e4),
                    this._5726 || (this._5729 = 1 - this._5729)
                }
                _6468() {
                    this._7402 = new c.W20;
                    const t = Rt._4104("TEXTURE/SSS/P1")
                      , _ = new c.xEZ(new c.VL4(t));
                    for (let t = 0; t < 37; t++) {
                        const t = new c.jyi(_);
                        t.anchor.set(.5),
                        this._2089.push(t),
                        this._9185.push(1e4 * Math.random())
                    }
                    const e = Rt._4104("TEXTURE/SSS/P2")
                      , s = e.naturalWidth / 32
                      , i = new c.VL4(e);
                    for (let t = 0; t < 32; t++) {
                        const _ = [];
                        this._6500.push([]);
                        for (let e = 0; e < 32; e++) {
                            const n = new c.AeJ(s * e,s * t,s,s)
                              , o = new c.xEZ(i,n)
                              , r = new c.jyi(o)
                              , h = this._8182(t, e);
                            _.push(r),
                            this._6500[t].push(h)
                        }
                        this._6807.push(_)
                    }
                }
                _6813() {
                    if (this._7402.removeChildren(),
                    this._6882(),
                    this._5729 <= 0)
                        return;
                    const t = Math.pow(n._4081 % 1e4 / 1e4, .8)
                      , _ = 1.2 * re._7185 * t
                      , e = .4 * (t > .7 ? 1 - (t - .7) / .3 : 1);
                    this._3188(_, e),
                    this._8739();
                    for (const t of this._7402.children)
                        t.alpha *= this._5729
                }
                _8349(t) {
                    const _ = (n._4081 + t) % 1e4;
                    return _ < 5e3 ? _ / 5e3 : 1 - (_ - 5e3) / 5e3
                }
                _8739() {
                    const t = 3800
                      , _ = .3;
                    for (let e = 0; e < 1; e++) {
                        const s = this._2089[e];
                        s.x = 32767.5,
                        s.y = 32767.5,
                        s.width = t,
                        s.height = t,
                        s.alpha = _ * this._8349(this._9185[e]),
                        this._7402.addChild(s)
                    }
                    for (let e = 1; e < 7; e++) {
                        const s = this._2089[e]
                          , i = 2 * Math.PI / 6 * (e - 1)
                          , n = Math.cos(i)
                          , o = Math.sin(i);
                        s.x = 32767.5 + 3500 * n,
                        s.y = 32767.5 + 3500 * o,
                        s.width = t,
                        s.height = t,
                        s.alpha = _ * this._8349(this._9185[e]),
                        this._7402.addChild(s)
                    }
                    for (let e = 7; e < 13; e++) {
                        const s = this._2089[e]
                          , i = 2 * Math.PI / 6 * (e - 7)
                          , n = Math.cos(i)
                          , o = Math.sin(i);
                        s.x = 32767.5 + 7e3 * n,
                        s.y = 32767.5 + 7e3 * o,
                        s.width = t,
                        s.height = t,
                        s.alpha = _ * this._8349(this._9185[e]),
                        this._7402.addChild(s)
                    }
                    for (let e = 13; e < 19; e++) {
                        const s = this._2089[e]
                          , i = 2 * Math.PI / 12 + 2 * Math.PI / 6 * (e - 13)
                          , n = Math.cos(i)
                          , o = Math.sin(i);
                        s.x = 32767.5 + 6e3 * n,
                        s.y = 32767.5 + 6e3 * o,
                        s.width = t,
                        s.height = t,
                        s.alpha = _ * this._8349(this._9185[e]),
                        this._7402.addChild(s)
                    }
                    for (let e = 19; e < 25; e++) {
                        const s = this._2089[e]
                          , i = 2 * Math.PI / 6 * (e - 19)
                          , n = Math.cos(i)
                          , o = Math.sin(i);
                        s.x = 32767.5 + 10500 * n,
                        s.y = 32767.5 + 10500 * o,
                        s.width = t,
                        s.height = t,
                        s.alpha = _ * this._8349(this._9185[e]),
                        this._7402.addChild(s)
                    }
                    for (let e = 25; e < 31; e++) {
                        const s = this._2089[e]
                          , i = 41 * Math.PI / 180 + 2 * Math.PI / 6 * (e - 25)
                          , n = Math.cos(i)
                          , o = Math.sin(i);
                        s.x = 32767.5 + 9250 * n,
                        s.y = 32767.5 + 9250 * o,
                        s.width = t,
                        s.height = t,
                        s.alpha = _ * this._8349(this._9185[e]),
                        this._7402.addChild(s)
                    }
                    for (let e = 31; e < 37; e++) {
                        const s = this._2089[e]
                          , i = 79 * Math.PI / 180 + 2 * Math.PI / 6 * (e - 31)
                          , n = Math.cos(i)
                          , o = Math.sin(i);
                        s.x = 32767.5 + 9250 * n,
                        s.y = 32767.5 + 9250 * o,
                        s.width = t,
                        s.height = t,
                        s.alpha = _ * this._8349(this._9185[e]),
                        this._7402.addChild(s)
                    }
                }
                _3188(t, _) {
                    const e = t / 32
                      , s = (re._7185 - t) / 2;
                    for (let t = 0; t < 32; t++)
                        for (let i = 0; i < 32; i++)
                            if (this._6500[t][i]) {
                                const n = this._6807[i][t];
                                n.width = e,
                                n.height = e,
                                n.x = re._3179._6149 + s + t * e,
                                n.y = re._3179._3185 + s + i * e,
                                n.alpha = _,
                                this._7402.addChild(n)
                            }
                }
                _8182(t, _) {
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
                _7402;
                _6791;
                _6876;
                _5682;
                _6823;
                _9998;
                _5988;
                constructor() {
                    super(),
                    this._7402 = null,
                    this._6791 = null,
                    this._6876 = null,
                    this._5682 = {
                        _7328: null,
                        _4289: null
                    },
                    this._6823 = {
                        _7707: new Float32Array(2),
                        _3217: new Float32Array(2),
                        _2836: null,
                        _1074: new Float32Array(4)
                    },
                    this._9998 = null,
                    this._5988 = 0
                }
                _8274() {
                    return this._7402
                }
                _6468() {
                    this._7402 = new c.W20;
                    const t = document.createElement("canvas");
                    this._6791 = t.getContext("2d"),
                    t.width = t.height = 16,
                    this._6791.beginPath(),
                    this._6791.arc(8, 8, 8, 0, 2 * Math.PI),
                    this._6791.closePath(),
                    this._6791.fillStyle = "#ffffff",
                    this._6791.fill(),
                    this._6823._2836 = new c.VL4(t);
                    const _ = e(125)
                      , s = e(518)
                      , i = new c.$rD(_,s,"aura-shader")
                      , n = new c.exe(i,{
                        uTranslate: this._6823._7707,
                        uScale: this._6823._3217,
                        uTexture: this._6823._2836,
                        uTint: this._6823._1074
                    });
                    this._5682._7328 = new c.lWr(new Float32Array(0),!1,!1),
                    this._5682._4289 = new c.lWr(new Uint16Array(0),!1,!0);
                    const o = new c.ZXM;
                    o.addAttribute("aPosition", this._5682._7328, 2, !1, c.vK6.FLOAT, 20, 0),
                    o.addAttribute("aAlpha", this._5682._7328, 1, !1, c.vK6.FLOAT, 20, 8),
                    o.addAttribute("aUV", this._5682._7328, 2, !1, c.vK6.FLOAT, 20, 12),
                    o.addIndex(this._5682._4289),
                    this._6876 = new c.Kj0(o,n),
                    this._7402.addChild(this._6876),
                    this._9998 = Ot.mesh_gen_aura_get_info_buffer(),
                    Ot.mesh_gen_aura_setup()
                }
                _2250() {
                    const t = te._2026 ? 1e3 / te._4418 : 1e3;
                    if (n._4081 - this._5988 < t)
                        return;
                    let _ = 0;
                    if (te._2026)
                        for (const t of re._4764.values()) {
                            if (_ >= 1536)
                                break;
                            t._6334 !== A._3277 || t._4483._2839.length < 1 || "assets/images/h3d/default-skin.webp" === t._4483._2839 || (this._9998[_++] = t._4563,
                            this._9998[_++] = t._2266,
                            this._9998[_++] = t._4464)
                        }
                    else
                        for (const t of re._4764.values()) {
                            if (_ >= 1536)
                                break;
                            const e = t._9087._3636._4557;
                            t._6334 === A._3277 && e.length > 0 && (this._9998[_++] = t._4563,
                            this._9998[_++] = t._2266,
                            this._9998[_++] = t._4464)
                        }
                    Ot.mesh_gen_aura_generate(_ / 3, n._4081, te._2026 ? te._4418 : 1),
                    this._5988 = n._4081
                }
                _7251() {
                    Ot.mesh_gen_aura_update(n._4081, te._2026 ? te._4418 : 1),
                    this._5682._7328.update(Ot.mesh_gen_aura_get_vertices_buffer()),
                    this._5682._4289.update(Ot.mesh_gen_aura_get_indices_buffer())
                }
                _1591() {
                    this._6823._7707[0] = J_._5130._4563,
                    this._6823._7707[1] = J_._5130._2266,
                    this._6823._3217[0] = J_._5266 / (q_._5578 / 2),
                    this._6823._3217[1] = -J_._5266 / (q_._1264 / 2)
                }
                _3278() {
                    this._6823._1074[0] = .998046875,
                    this._6823._1074[1] = .998046875,
                    this._6823._1074[2] = .998046875,
                    this._6823._1074[3] = 1
                }
                _6813() {
                    this._3278(),
                    this._2250(),
                    this._7251(),
                    this._1591()
                }
            }
            ;
            const X_ = new class {
                _7402;
                _2894;
                constructor() {
                    this._7402 = {},
                    this._2894 = []
                }
                get _1839() {
                    return this._7402
                }
                _6468() {
                    this._7402 = new c.W20,
                    this._2894 = [It, Lt, j_, Tt, l_, $_, c_, Q_, V_, Y_];
                    for (const t of this._2894) {
                        t._6468();
                        const _ = t._8274();
                        this._7402.addChild(_)
                    }
                }
                _6813() {
                    this._4783();
                    for (const t of this._2894)
                        t._6813()
                }
                _4783() {
                    const t = q_._5578 / 2 - J_._5130._4563 * J_._5266
                      , _ = q_._1264 / 2 - J_._5130._2266 * J_._5266;
                    this._7402.setTransform(t, _, J_._5266, J_._5266)
                }
            }
              , z_ = new class {
                _6468() {
                    kt._6468()
                }
                _6813() {
                    kt._6813()
                }
            }
              , q_ = new class extends i {
                _1519;
                _1677;
                _3301;
                _2208;
                _6496;
                constructor() {
                    super(),
                    this._1519 = null,
                    this._1677 = null,
                    this._3301 = null,
                    this._2208 = 1,
                    this._6496 = 1
                }
                _7262() {
                    switch (Q.TEXTURE_QUALITY._7142()) {
                    case "low":
                        return .5;
                    case "medium":
                    default:
                        return 1;
                    case "high":
                        return 2
                    }
                }
                get _5578() {
                    return this._2208
                }
                get _1264() {
                    return this._6496
                }
                _6468() {
                    const t = Q.ANTI_ALIASING._7142();
                    this._1519 = document.getElementById("main-canvas"),
                    this._1677 = new c.Thl({
                        width: 1,
                        height: 1,
                        view: this._1519,
                        antialias: "msaa" === t,
                        backgroundColor: 0,
                        powerPreference: "high-performance"
                    }),
                    this._3301 = new c.W20,
                    c.vB5.shared.stop(),
                    z_._6468(),
                    X_._6468(),
                    St._6468(),
                    this._3301.addChild(X_._1839),
                    this._3301.addChild(St._1839)
                }
                _2225() {
                    const t = Q.RESOLUTION._7142() / 100
                      , _ = window.devicePixelRatio
                      , e = Math.round(q._2357 * _ * t)
                      , s = Math.round(q._7899 * _ * t);
                    this._2208 === e && this._6496 === s || (this._1677.resize(e, s),
                    this._2208 = e,
                    this._6496 = s)
                }
                _2609() {
                    const t = Q.BACKGROUND_COLOR._7142();
                    this._1677.backgroundColor !== t && (this._1677.backgroundColor = t)
                }
                _6813() {
                    this._8079("frame-start"),
                    this._2225(),
                    this._2609(),
                    z_._6813(),
                    X_._6813(),
                    St._6813(),
                    this._1677.render(this._3301),
                    this._8079("frame-end")
                }
            }
              , J_ = new class {
                _5130;
                _3805;
                _5266;
                _3166;
                _5931;
                _1919;
                _4245;
                constructor() {
                    this._5130 = new g(32767.5,32767.5),
                    this._3805 = new j,
                    this._5266 = .1,
                    this._3166 = .1,
                    this._5931 = .5,
                    this._1919 = z._1626,
                    this._4245 = new g(32767.5,32767.5)
                }
                _4518() {
                    this._5130._8193(32767.5, 32767.5),
                    this._3166 = .1,
                    this._1919 = z._1626,
                    this._4245._8193(32767.5, 32767.5)
                }
                _6813() {
                    this._9423(),
                    this._9799(),
                    this._9217(),
                    this._5758()
                }
                _9423() {
                    if (!Me._4540)
                        return void (this._5931 = .5);
                    let t = 0;
                    for (const _ of Me._3636._2102.values())
                        for (const e of _._4764.values())
                            t += e._4464;
                    this._5931 = 1 / Math.max(t / 64, 1) ** .4
                }
                _9799() {
                    let t = Q.CAMERA_MOVEMENT_SPEED._7142();
                    te._2026 && (t /= te._4418),
                    Me._4540 ? (this._5130._4563 += (Me._6511._4563 - this._5130._4563) / t,
                    this._5130._2266 += (Me._6511._2266 - this._5130._2266) / t) : (this._5130._4563 += (this._4245._4563 - this._5130._4563) / Math.max(30, t),
                    this._5130._2266 += (this._4245._2266 - this._5130._2266) / Math.max(30, t))
                }
                _9217() {
                    const t = .5
                      , _ = Math.min(q_._5578, q_._1264) / (1.5 * re._7185);
                    if (this._3166 > t ? this._3166 = t : this._3166 < _ && (this._3166 = _),
                    Q.CAMERA_AUTO_ZOOM._7142() && Me._4540) {
                        let e = this._5931 * this._3166 * 2;
                        e > t ? e = t : e < _ && (e = _),
                        this._5266 += (e - this._5266) / 16
                    } else
                        this._5266 += (this._3166 - this._5266) / 8
                }
                _5758() {
                    const t = q_._5578 / 2 / this._5266
                      , _ = q_._1264 / 2 / this._5266;
                    this._3805._6149 = -t + this._5130._4563,
                    this._3805._7633 = t + this._5130._4563,
                    this._3805._3185 = -_ + this._5130._2266,
                    this._3805._2243 = _ + this._5130._2266
                }
                _3422() {
                    const t = 1 - Q.CAMERA_ZOOM_SPEED._7142() / 100;
                    this._3166 /= t
                }
                _3698() {
                    const t = 1 - Q.CAMERA_ZOOM_SPEED._7142() / 100;
                    this._3166 *= t
                }
            }
              , te = new class extends i {
                _3447;
                _3030;
                _3495;
                _7376;
                _9048;
                _3231;
                _9413;
                _1004;
                _5265;
                _7547;
                constructor() {
                    super(),
                    this._3447 = null,
                    this._3030 = [],
                    this._3495 = [],
                    this._7376 = 0,
                    this._9048 = 0,
                    this._3231 = 0,
                    this._9413 = 0,
                    this._1004 = 1,
                    this._5265 = !1,
                    this._7547 = !1
                }
                get _2026() {
                    return this._7547
                }
                set _4418(t) {
                    this._1004 = t,
                    this._7376 = n._4081,
                    this._9048 = this._6833
                }
                get _4418() {
                    return this._1004
                }
                set _6833(t) {
                    this._9679(t),
                    this._7376 = n._4081,
                    this._9048 = t
                }
                get _6833() {
                    return this._3231
                }
                get _7010() {
                    return this._9413
                }
                get _1246() {
                    return this._5265
                }
                get _6514() {
                    return this._3231 === this._3495.length - 1
                }
                _2405(t) {
                    const _ = this._3447._8212;
                    this._3447._8212 = this._3495[t];
                    const e = this._3447._8740();
                    return this._3447._8212 = _,
                    e
                }
                _3040() {
                    this._6514 || (this._5265 = !0,
                    this._7376 = n._4081,
                    this._9048 = this._3231,
                    this._8079("play"))
                }
                _3507() {
                    this._5265 = !1,
                    this._8079("pause")
                }
                _5702(t) {
                    Pe._9480(),
                    re._4518();
                    const _ = new V(t)
                      , e = []
                      , s = [];
                    let i = !1;
                    const n = _._4067();
                    if (n > 0) {
                        const t = _._7169();
                        "string16" === t ? i = !0 : _._8212 -= t.length + 1
                    }
                    for (let t = 0; t < n; t++) {
                        const t = i ? _._9746() : _._7169();
                        e.push(t)
                    }
                    for (; !_._6514; ) {
                        s.push(_._8212),
                        _._3139(10),
                        _._3139(2 * _._4067()),
                        _._3139(4 * _._4067()),
                        _._3139(8 * _._4067());
                        const t = _._4067();
                        for (let e = 0; e < t; e++) {
                            _._3139(8);
                            const t = _._7249();
                            1 === t ? _._3139(9) : 2 === t && _._3139(3)
                        }
                    }
                    _._8212 = s[0];
                    const o = _._8740();
                    this._3447 = _,
                    this._3030 = e,
                    this._3495 = s,
                    this._7376 = 0,
                    this._9048 = 0,
                    this._3231 = 0,
                    this._9413 = o,
                    this._5265 = !1,
                    this._7547 = !0,
                    this._6028(0),
                    G_._7705(o, this._3495.length - 1),
                    u._7225("Playback bar controls", "H - toggle playback bar visibility, SPACEBAR - Play / Pause")
                }
                _6400() {
                    re._4518(),
                    this._3447 = null,
                    this._7547 = !1,
                    G_._8601()
                }
                _6813() {
                    if (!this._7547 || !this._5265 || this._6514)
                        return;
                    const t = this._7376
                      , _ = (n._4081 - t) * this._1004
                      , e = this._9048
                      , s = this._3495[e]
                      , i = this._3447;
                    i._8212 = s;
                    const o = i._8740() + _;
                    let r = this._3231;
                    for (; r < this._3495.length - 1; ) {
                        const t = r + 1
                          , _ = this._3495[t];
                        if (i._8212 = _,
                        i._1584() > o)
                            break;
                        r++
                    }
                    this._9679(r)
                }
                _9679(t) {
                    if (this._3231 !== t) {
                        if (this._3231 < t)
                            for (let _ = this._3231 + 1; _ <= t; _++)
                                this._6028(_);
                        else {
                            re._4518();
                            for (let _ = 0; _ <= t; _++)
                                this._6028(_)
                        }
                        this._3231 = t,
                        this._9413 = this._2405(t),
                        this._6514 && this._3507()
                    }
                }
                _6028(t) {
                    const _ = this._3495[t]
                      , e = this._3447;
                    e._8212 = _ + 4;
                    const s = e._4067();
                    re._6340(s);
                    const i = e._4067()
                      , n = e._4067();
                    J_._4245._8193(i, n);
                    const o = e._4067();
                    for (let t = 0; t < o; t++) {
                        const t = e._4067();
                        re._5067(t)
                    }
                    const r = e._4067();
                    for (let t = 0; t < r; t++) {
                        const t = e._4067()
                          , _ = e._4067();
                        re._9934(t, _)
                    }
                    const h = e._4067();
                    for (let t = 0; t < h; t++) {
                        const t = e._4067()
                          , _ = e._4067()
                          , s = e._4067()
                          , i = e._4067();
                        re._8032(t)._6813(_, s, i)
                    }
                    const a = e._4067();
                    for (let t = 0; t < a; t++) {
                        const t = e._4067()
                          , _ = e._4067()
                          , s = e._4067()
                          , i = e._4067()
                          , n = e._7249()
                          , o = re._7352(t, _, s, i, n);
                        if (1 === n) {
                            o._8955._6813(e._7249(), e._7249(), e._7249());
                            const t = e._4067();
                            o._4483._2562 = this._3030[t];
                            const _ = e._4067();
                            o._4483._4543 = this._3030[_];
                            const s = e._4067();
                            o._4483._2839 = this._3030[s]
                        } else
                            2 === n && o._8955._6813(e._7249(), e._7249(), e._7249())
                    }
                }
            }
            ;
            class _e {
                _6808;
                _9087;
                _3078;
                _6805;
                _6530;
                _4563;
                _2266;
                _4464;
                _2904;
                _5029;
                _4766;
                _6334;
                _8955;
                _8845;
                _3082;
                _5194;
                _9157;
                _7399;
                _4483;
                _1664;
                constructor(t, _, e, s, i) {
                    this._6808 = t,
                    this._9087 = C,
                    this._3078 = _,
                    this._6805 = e,
                    this._6530 = s,
                    this._4563 = _,
                    this._2266 = e,
                    this._4464 = s,
                    this._2904 = _,
                    this._5029 = e,
                    this._4766 = s,
                    this._6334 = i,
                    this._8955 = new y,
                    this._8845 = !1,
                    this._3082 = n._4081,
                    this._5194 = 0,
                    this._9157 = 0,
                    this._7399 = {
                        _1884: Math.round(2e4 * (Math.random() - .5) + 5e4 * (Math.random() < .5 ? 1 : -1))
                    },
                    this._4483 = {
                        _2562: "",
                        _4543: "",
                        _2839: ""
                    },
                    this._1664 = {
                        _2562: 0,
                        _4543: 0,
                        _8445: 0
                    }
                }
                get _8445() {
                    return this._4464 * this._4464 / 100
                }
                get _7825() {
                    return this._6530 * this._6530 / 100
                }
                get _3923() {
                    const t = Q.ELEMENT_ANIMATION_SOFTENING._7142();
                    return this._8845 ? 1 - this._9157 : n._4081 - this._3082 < t ? (n._4081 - this._3082) / t : 1
                }
                get _3163() {
                    const t = te._2026 ? this._8955 : this._9087._8955;
                    let _ = 256;
                    _ = 255 !== t._6030 && 100 !== t._6030 ? t._6030 : 255 !== t._8293 && 100 !== t._8293 ? t._8293 : t._4434,
                    _ = 127 + (_ >>> 1);
                    const e = Q.ORB_TINT_COLOR._7142();
                    return new y(_ / 255 * ((16711680 & e) >>> 16) >>> 0,_ / 255 * ((65280 & e) >>> 8) >>> 0,_ / 255 * ((255 & e) >>> 0) >>> 0)
                }
                _6813(t, _, e) {
                    this._5756(),
                    this._2904 = this._4563,
                    this._5029 = this._2266,
                    this._4766 = this._4464,
                    this._3078 = t,
                    this._6805 = _,
                    this._6530 = e,
                    this._5194 = n._4081
                }
                _5756() {
                    let t = Q.ELEMENT_ANIMATION_SOFTENING._7142();
                    te._2026 && (t /= te._4418),
                    this._9157 = Math.min((n._4081 - this._5194) / t, 1),
                    this._4563 = this._2904 + (this._3078 - this._2904) * this._9157,
                    this._2266 = this._5029 + (this._6805 - this._5029) * this._9157,
                    this._4464 = this._4766 + (this._6530 - this._4766) * this._9157
                }
            }
            const ee = new _e(-1,32767.5,32767.5,1,A._3277)
              , se = _e;
            class ie {
                _6808;
                _9087;
                _1196;
                _8445;
                _3078;
                _6805;
                _4563;
                _2266;
                _2904;
                _5029;
                _5194;
                constructor(t, _) {
                    this._6808 = t,
                    this._9087 = _,
                    this._1196 = !1,
                    this._8445 = 0,
                    this._3078 = 32767.5,
                    this._6805 = 32767.5,
                    this._4563 = 32767.5,
                    this._2266 = 32767.5,
                    this._2904 = 32767.5,
                    this._5029 = 32767.5,
                    this._5194 = 0
                }
                _6813(t, _, e) {
                    this._5756(),
                    this._2904 = this._4563,
                    this._5029 = this._2266,
                    this._3078 = t,
                    this._6805 = _,
                    this._8445 = e,
                    this._5194 = n._4081
                }
                _5756() {
                    const t = Math.min((n._4081 - this._5194) / 1e3, 1);
                    this._4563 = this._2904 + (this._3078 - this._2904) * t,
                    this._2266 = this._5029 + (this._6805 - this._5029) * t
                }
            }
            const ne = new ie(-1,C)
              , oe = ie
              , re = new class {
                _9822;
                _2102;
                _4764;
                _6617;
                _3661;
                _7048;
                _7185;
                _3179;
                constructor() {
                    this._9822 = new Map,
                    this._2102 = new Map,
                    this._4764 = new Map,
                    this._6617 = new Map,
                    this._3661 = [],
                    this._7048 = [],
                    this._7185 = 14e3,
                    this._3179 = new j(25767.5,25767.5,39767.5,39767.5)
                }
                _4518() {
                    this._9822.clear(),
                    this._2102.clear(),
                    this._4764.clear(),
                    this._6617.clear(),
                    this._3661 = [],
                    this._7048 = []
                }
                _3329(t, _, e, s, i, n) {
                    const o = new p(t,_,e,s,i,n);
                    return t === Me._6646 && (o._6310 = !0,
                    Me._3636 = o),
                    this._9822.set(t, o),
                    o
                }
                _6600(t) {
                    const _ = this._9822.get(t);
                    return void 0 === _ ? (console.warn(`Client with id ${t} doesn't exist. Returning dummy instance...`),
                    f) : _
                }
                _8617(t) {
                    this._9822.delete(t) || console.warn(`Client with id ${t} doesn't exist.`)
                }
                _8376(t, _, e) {
                    const s = new b(t,_,e);
                    return this._2102.set(t, s),
                    s
                }
                _8994(t) {
                    const _ = this._2102.get(t);
                    return void 0 === _ ? (console.warn(`Player with id ${t} doesn't exist. Returning dummy instance...`),
                    C) : _
                }
                _3028(t) {
                    this._2102.delete(t) || console.warn(`Player with id ${t} doesn't exist.`)
                }
                _7352(t, _, e, s, i) {
                    const n = new se(t,_,e,s,i);
                    return this._4764.set(t, n),
                    n
                }
                _8032(t) {
                    const _ = this._4764.get(t);
                    return void 0 === _ ? (console.warn(`Element with id ${t} doesn't exist. Returning dummy instance...`),
                    ee) : _
                }
                _9934(t, _) {
                    const e = this._4764.get(t);
                    if (void 0 === e)
                        return void this._5067(_);
                    const s = this._4764.get(_);
                    void 0 !== s ? (s._6813(e._4563, e._2266, s._4464),
                    s._8845 = !0,
                    this._4764.delete(_),
                    this._4764.set(4294967296 + _, s)) : console.warn(`Absorbed element with id ${_} doesn't exist.`)
                }
                _5067(t) {
                    const _ = this._4764.get(t);
                    void 0 !== _ ? (_._6813(_._4563, _._2266, _._4464),
                    _._8845 = !0,
                    this._4764.delete(t),
                    this._4764.set(4294967296 + t, _)) : console.warn(`Element with id ${t} doesn't exist.`)
                }
                _2278(t, _) {
                    const e = new oe(t,_);
                    return this._6617.set(t, e),
                    e
                }
                _7622(t) {
                    const _ = this._6617.get(t);
                    return void 0 === _ ? (console.warn(`Teammate with id ${t} doesn't exist. Returning dummy instance...`),
                    ne) : _
                }
                _2320(t) {
                    this._6617.delete(t) || console.warn(`Teammate with id ${t} doesn't exist.`)
                }
                _5277(t, _) {
                    _._3636._6310 && 0 === _._4764.size && Me._4256(_._8212, !0),
                    _._4764.set(t._6808, t),
                    t._9087 = _
                }
                _4547(t) {
                    t._9087 === C ? console.warn("No parent player to detach.") : (t._9087._4764.delete(t._6808),
                    t._9087._3636._6310 && 0 === t._9087._4764.size && Me._4256(t._9087._8212, !1))
                }
                _3508(t, _) {
                    2 === _._2102.size && console.warn("Client already has 2 players."),
                    t._8212 = _._2102.size,
                    _._2102.set(t._6808, t),
                    t._3636 = _,
                    _._6310 && (Ne._1633(t._8212, Me._1876(t._8212)),
                    1 === _._2102.size && es._4302 && (es._4302 = !1),
                    2 !== _._2102.size || es._4302 || (es._4302 = !0))
                }
                _4842(t) {
                    t._3636 === f ? console.warn("No parent client to detach.") : (t._8212 = -1,
                    t._3636._2102.delete(t._6808))
                }
                _6813() {
                    this._3661 = [],
                    this._7048 = [];
                    for (const [t,_] of this._4764)
                        _._5756(),
                        _._8845 && 1 === _._9157 ? this._4764.delete(t) : this._6467(_) || (_._6334 === A._6064 ? this._7048.push(_) : this._3661.push(_));
                    this._3661.sort(this._7875.bind(this))
                }
                _7875(t, _) {
                    return t._4464 === _._4464 ? _._6808 - t._6808 : t._4464 - _._4464
                }
                _6467(t) {
                    return t._6808 < 0
                }
                _6340(t) {
                    const _ = (65535 - t) / 2;
                    this._3179._6149 = _,
                    this._3179._3185 = _,
                    this._3179._7633 = _ + t,
                    this._3179._2243 = _ + t,
                    this._7185 = t
                }
            }
            ;
            var he, ae;
            !function(t) {
                t[t._2060 = 10] = "_2060",
                t[t._8746 = 20] = "_8746",
                t[t._1164 = 21] = "_1164",
                t[t._8439 = 22] = "_8439",
                t[t._3284 = 23] = "_3284",
                t[t._8933 = 24] = "_8933",
                t[t._5580 = 25] = "_5580",
                t[t._4322 = 30] = "_4322",
                t[t._1312 = 31] = "_1312",
                t[t._5733 = 32] = "_5733",
                t[t._4927 = 33] = "_4927",
                t[t._7052 = 40] = "_7052",
                t[t._8677 = 41] = "_8677",
                t[t._7645 = 42] = "_7645",
                t[t._5844 = 43] = "_5844",
                t[t._6794 = 100] = "_6794",
                t[t._8926 = 101] = "_8926",
                t[t._8831 = 110] = "_8831",
                t[t._2739 = 111] = "_2739",
                t[t._5132 = 112] = "_5132",
                t[t._4444 = 113] = "_4444",
                t[t._5553 = 114] = "_5553"
            }(he || (he = {})),
            function(t) {
                t[t._5011 = 10] = "_5011",
                t[t._4354 = 11] = "_4354",
                t[t._7684 = 21] = "_7684",
                t[t._4008 = 22] = "_4008",
                t[t._3543 = 23] = "_3543",
                t[t._8058 = 24] = "_8058",
                t[t._6623 = 30] = "_6623",
                t[t._3662 = 31] = "_3662",
                t[t._9080 = 32] = "_9080",
                t[t._4549 = 33] = "_4549",
                t[t._4854 = 34] = "_4854",
                t[t._9312 = 40] = "_9312",
                t[t._1019 = 41] = "_1019",
                t[t._4407 = 42] = "_4407",
                t[t._4322 = 50] = "_4322",
                t[t._1312 = 51] = "_1312",
                t[t._8604 = 52] = "_8604",
                t[t._4927 = 53] = "_4927",
                t[t._2061 = 54] = "_2061",
                t[t._6327 = 55] = "_6327",
                t[t._5472 = 56] = "_5472",
                t[t._2340 = 57] = "_2340",
                t[t._9940 = 100] = "_9940"
            }(ae || (ae = {}));
            const ce = {
                _7986: he,
                _7947: ae
            };
            class le {
                _5953;
                _1177;
                _8066;
                _9740;
                _9994;
                _9424;
                constructor() {
                    const t = _t.ZP.createElement("div", {
                        className: "leaderboard-entry"
                    }, _t.ZP.createElement("div", {
                        className: "leaderboard-team"
                    }), _t.ZP.createElement("div", {
                        className: "leaderboard-nick"
                    }), _t.ZP.createElement("div", {
                        className: "leaderboard-energy"
                    }), _t.ZP.createElement("div", {
                        className: "leaderboard-team-color"
                    }));
                    this._5953 = r._2624(t),
                    this._1177 = r._2624(t.children[0]),
                    this._8066 = r._2624(t.children[1]),
                    this._9740 = r._2624(t.children[2]),
                    this._9994 = r._2624(t.children[3]),
                    this._9424 = !0
                }
                get _7800() {
                    return this._5953._7800
                }
                _6813(t, _, e, s) {
                    "ITS-BOT-TEAM" === (t = Wt._4311(t)) && (t = ""),
                    "ITS-BOT-TEAM" === t && (s = "transparent"),
                    t.length > 0 ? (this._1177._9798("display", "block"),
                    this._1177._7917 = `[${t}]`,
                    this._9994._9798("background-color", s)) : (this._1177._9798("display", "none"),
                    this._9994._9798("background-color", "transparent")),
                    this._8066._7917 = _ || "Unnamed player",
                    this._9740._7917 = e < 1e3 ? e.toString() : (e / 1e3).toFixed(1) + "k"
                }
                _7705() {
                    this._9424 || (this._5953._9798("opacity", "1"),
                    this._9424 = !0)
                }
                _8601() {
                    this._9424 && (this._5953._9798("opacity", "0"),
                    this._9424 = !1)
                }
            }
            const ue = new class {
                _5953;
                _5182;
                _9128;
                _7953;
                constructor() {
                    this._5953 = null,
                    this._5182 = [],
                    this._9128 = [],
                    this._7953 = !0
                }
                _6468() {
                    const t = document.getElementById("leaderboard");
                    for (let _ = 0; _ < 10; _++) {
                        const _ = new le;
                        this._5182.push(_),
                        t.appendChild(_._7800)
                    }
                    this._5953 = r._2624(t)
                }
                _6813() {
                    if ("show" === Q.SHOW_LEADERBOARD._7142()) {
                        this._7705();
                        for (let t = 0; t < 10; t++) {
                            const _ = this._5182[t];
                            if (t < this._9128.length) {
                                const e = this._9128[t];
                                _._6813(e[0], e[1], e[2], e[3]),
                                _._7705()
                            } else
                                _._8601()
                        }
                    } else
                        this._8601()
                }
                _9978(t, _, e) {
                    this._9128.push([t, _, e, d._6194(t)[0]])
                }
                _4518() {
                    this._9128 = []
                }
                _7705() {
                    this._7953 || (this._5953._9798("display", "flex"),
                    this._7953 = !0)
                }
                _8601() {
                    this._7953 && (this._5953._9798("display", "none"),
                    this._7953 = !1)
                }
            }
              , de = new class {
                _5953;
                _5770;
                _6334;
                _7953;
                constructor() {
                    this._5953 = null,
                    this._5770 = 0,
                    this._6334 = "XP",
                    this._7953 = !0
                }
                _6468() {
                    const t = document.getElementById("ryuten-points");
                    this._5953 = r._2624(t)
                }
                _6813() {
                    Math.random() < 0 ? (this._7705(),
                    this._5953._7917 = `${this._5770} ${this._6334}`) : this._8601()
                }
                _7705() {
                    this._7953 || (this._5953._9798("display", "block"),
                    this._7953 = !0)
                }
                _8601() {
                    this._7953 && (this._5953._9798("display", "none"),
                    this._7953 = !1)
                }
            }
              , me = ["SHIELD", "TITLE", "MISC"]
              , fe = new class extends h {
                _9631;
                _8250;
                _3285;
                _1238;
                constructor() {
                    super("shop-menu"),
                    this._9631 = new Map,
                    this._8250 = new Map,
                    this._3285 = "";
                    const t = document.getElementById("inventory-content");
                    this._1238 = new J(t)
                }
                _6468() {
                    const t = document.getElementById("shop-navbar");
                    for (const _ of me) {
                        const e = _t.ZP.createElement("div", {
                            class: "shop-nb-item"
                        }, _, _t.ZP.createElement("div", {
                            class: "shop-nb-item-decor"
                        }));
                        e.onclick = ()=>{
                            this._7874(_)
                        }
                        ,
                        t.appendChild(e),
                        this._9631.set(_, e)
                    }
                    this._7874(me[0]),
                    this._1444();
                    const _ = document.getElementById("shop-back");
                    _.addEventListener("click", (()=>{
                        ns._2006(),
                        a._3040(a._9611)
                    }
                    )),
                    _.addEventListener("mouseenter", a._3040.bind(a, a._5781))
                }
                _1444() {
                    const t = document.getElementById("shop-wait");
                    t.style.display = "none";
                    const _ = document.getElementById("shop-items");
                    _.innerHTML = "",
                    this._8250.clear();
                    const e = Object.getOwnPropertyNames(pe._2620)
                      , s = Object.getOwnPropertyNames(pe._5881);
                    for (const _ of e) {
                        if (s.includes(_))
                            continue;
                        const e = pe._2620[_]
                          , i = ()=>{
                            Pe._5914 ? (Ne._3959(_),
                            t.style.display = "flex") : u._7225("Error", "Please connect to a game server first.")
                        }
                          , n = _t.ZP.createElement("div", {
                            class: "shop-item"
                        }, _t.ZP.createElement("div", {
                            class: "shop-item-preview",
                            style: {
                                backgroundImage: `url(assets/images/UI/game-item-previews/${_}.webp)`
                            }
                        }, _t.ZP.createElement("div", {
                            class: "shop-item-name"
                        }, e.name)), _t.ZP.createElement("div", {
                            class: "shop-item-buy",
                            onClick: i
                        }, _t.ZP.createElement("i", {
                            class: "iconfont iconfont-coin"
                        }), " ", e.rp > 0 ? e.rp : "FREE"));
                        n.style.display = _.startsWith(`${this._3285}_`) ? "block" : "none",
                        this._8250.set(_, n)
                    }
                    const i = [...this._8250.values()].reverse();
                    for (const t of i)
                        _.appendChild(t);
                    this._1238._6813()
                }
                _7874(t) {
                    const _ = this._9631.get(t);
                    if (void 0 === _)
                        throw "Category button is undefined.";
                    for (const t of this._9631.values())
                        t.classList.remove("shop-nb-item-active");
                    _.classList.add("shop-nb-item-active");
                    for (const [_,e] of this._8250)
                        e.style.display = _.startsWith(`${t}_`) ? "block" : "none";
                    this._3285 = t,
                    this._1238._6813()
                }
                _2176(t, _) {
                    document.getElementById("shop-wallet-rp").textContent = t.toString(),
                    document.getElementById("shop-wallet-rc").textContent = _.toString()
                }
            }
              , pe = new class {
                _5714;
                _5228;
                _5881;
                _1404;
                _1058;
                _2620;
                constructor() {
                    this._5714 = {
                        _6760: document.getElementById("mame-trb-user-data-rank"),
                        _5770: document.getElementById("mame-trb-user-data-xp")
                    },
                    this._5228 = !1,
                    this._5881 = {},
                    this._1404 = {
                        shield: "",
                        title: ""
                    },
                    this._1058 = {
                        rp: 0,
                        rc: 0
                    },
                    this._2620 = {}
                }
                async _6194(t, _=!1) {
                    return new Promise((e=>{
                        const s = new XMLHttpRequest;
                        s.open("GET", "https://lancelot.ryuten.io" + t),
                        _ && (s.withCredentials = !0),
                        s.responseType = "json",
                        s.onloadend = ()=>{
                            const t = s.response;
                            e(t)
                        }
                        ,
                        s.send()
                    }
                    ))
                }
                async _8341(t, _, e) {
                    return new Promise((s=>{
                        const i = new XMLHttpRequest;
                        if (i.open("POST", "https://lancelot.ryuten.io" + t),
                        _ && (i.withCredentials = !0),
                        i.setRequestHeader("Content-Type", "application/json"),
                        i.responseType = "json",
                        i.onloadend = ()=>{
                            const t = i.response;
                            s(t)
                        }
                        ,
                        void 0 === e)
                            i.send();
                        else {
                            const t = JSON.stringify(e);
                            i.send(t)
                        }
                    }
                    ))
                }
                get _9119() {
                    return this._5228
                }
                _8267(t) {
                    this._5228 = t,
                    U_._5766(!0),
                    t || (this._5714._6760.textContent = "UNRANKED",
                    this._5714._5770.textContent = "0XP")
                }
                async _2584() {
                    Pt._2683("Connecting to Lancelot"),
                    await this._7740(),
                    this._5228
                }
                async _7740() {
                    const t = await this._6194("/api/auth/status", !0);
                    if (null === t || t.error)
                        return;
                    const _ = t.data;
                    if (!_.signedIn)
                        return;
                    if (!_.active)
                        try {
                            const t = await this._6194("/api/auth/refresh", !0);
                            if (null === t || t.error)
                                return
                        } catch (t) {
                            return void console.warn("Lancelot > refresh failed.")
                        }
                    const e = await this._6194("/api/account/info", !0);
                    if (null === e || e.error)
                        return;
                    const s = e.data;
                    this._8267(!0),
                    this._8649(_.till),
                    this._1058 = {
                        rp: s.rp,
                        rc: s.rc
                    };
                    const i = [this._8283(), this._9923(), this._8356()];
                    await Promise.all(i),
                    document.getElementById("mame-trb-user-data-username").textContent = s.username,
                    document.getElementById("mame-trb-user-data-rp").textContent = `${this._1058.rp} RP`,
                    document.getElementById("mame-trb-user-data-rc").textContent = `${this._1058.rc} RC`,
                    document.getElementById("login-button").style.display = "none",
                    fe._2176(this._1058.rp, this._1058.rc)
                }
                _8649(t) {
                    const _ = 0 === t ? 0 : Math.max(1e3 * t - Date.now());
                    window.setTimeout((()=>{
                        this._6194("/api/auth/refresh", !0),
                        window.setInterval((()=>{
                            this._6194("/api/auth/refresh", !0)
                        }
                        ), 36e5)
                    }
                    ), _)
                }
                async _8283() {
                    const t = await this._6194("/api/account/get-all-inventory-items", !0);
                    if (null !== t)
                        if (t.error)
                            console.error(t.error);
                        else
                            for (const {full_id: _, name: e, description: s} of t.data)
                                this._5881[_] = {
                                    name: e,
                                    desc: s
                                }
                }
                async _9923() {
                    const t = await this._6194("/api/account/get-active-inventory-items", !0);
                    if (null !== t)
                        if (t.error)
                            console.error(t.error);
                        else {
                            const _ = t.data;
                            this._1404.shield = _.shield_id,
                            this._1404.title = _.title_id
                        }
                }
                async _8356() {
                    const t = await this._6194("/api/game/get-all-shop-items");
                    if (null !== t)
                        if (t.error)
                            console.error(t.error);
                        else
                            for (const {full_id: _, name: e, description: s, cost_rp: i, cost_rc: n} of t.data)
                                this._2620[_] = {
                                    name: e,
                                    desc: s,
                                    rp: i,
                                    rc: n
                                }
                }
                async _1488(t) {
                    return await this._8341("/api/account/change-username", !0, {
                        username: t
                    })
                }
            }
              , ge = new class {
                _7402;
                _3295;
                _2424;
                constructor() {
                    const t = document.getElementById("ffar-players-container")
                      , _ = document.getElementById("ffar-players-scrollbar-slider")
                      , e = _.parentElement;
                    t.addEventListener("scroll", this._6813.bind(this));
                    let s = !1
                      , i = 0
                      , n = 0;
                    _.addEventListener("mousedown", (t=>{
                        s = !0,
                        i = t.clientY,
                        n = _.offsetTop,
                        this._2424 = !0
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
                        this._2424 = !1
                    }
                    )),
                    this._7402 = t,
                    this._3295 = r._2624(_),
                    this._2424 = !1
                }
                _6813() {
                    if (this._2424)
                        return;
                    const t = this._7402.scrollHeight
                      , _ = this._7402.offsetHeight
                      , e = _ / t * 100
                      , s = this._7402.scrollTop / t * _;
                    this._3295._9798("height", `${e.toFixed(0)}%`),
                    this._3295._9798("top", `${s.toFixed(0)}px`)
                }
            }
              , Ee = new class {
                _6129;
                _7402;
                _7953;
                _6469;
                _9128;
                constructor() {
                    this._6129 = null,
                    this._7402 = null,
                    this._7953 = !1,
                    this._9128 = {
                        _6710: [],
                        _4739: [],
                        _5538: [],
                        _2332: !1
                    },
                    this._6469 = !1
                }
                _6468() {
                    this._6129 = r._2624(document.getElementById("ffar-players")),
                    this._7402 = document.getElementById("ffar-players-container"),
                    document.getElementById("ffar-players-close").onclick = ()=>{
                        this._8601()
                    }
                }
                _4967(t, _, e, s) {
                    this._9128._6710 = t,
                    this._9128._4739 = _,
                    this._9128._5538 = e,
                    this._9128._2332 = s,
                    this._6469 = !0
                }
                _6813() {
                    if (!this._6469)
                        return;
                    if (!this._7953)
                        return;
                    const t = [];
                    if (this._9128._2332) {
                        const _ = this._4341("Ready");
                        t.push(_);
                        for (const _ of this._9128._4739) {
                            const e = re._6600(_);
                            t.push(this._9993(e._2562))
                        }
                        const e = this._4341("Not ready");
                        t.push(e);
                        for (const _ of this._9128._5538) {
                            const e = re._6600(_);
                            t.push(_t.ZP.createElement("div", {
                                class: "ffar-players-h2"
                            }, e._2562))
                        }
                    } else {
                        const _ = this._4341("In match");
                        t.push(_);
                        for (const _ of this._9128._6710) {
                            const e = re._6600(_);
                            t.push(this._9993(e._2562))
                        }
                        const e = this._4341("Waiting");
                        t.push(e);
                        for (const _ of this._9128._4739) {
                            const e = re._6600(_);
                            t.push(this._9993(e._2562))
                        }
                        for (const _ of this._9128._5538) {
                            const e = re._6600(_);
                            t.push(this._9993(e._2562))
                        }
                    }
                    o._3851((()=>{
                        this._7402.innerHTML = "";
                        for (const _ of t)
                            this._7402.appendChild(_);
                        ge._6813()
                    }
                    )),
                    this._6469 = !1
                }
                _7705() {
                    this._6129._9798("display", "flex"),
                    this._7953 = !0
                }
                _8601() {
                    this._6129._9798("display", "none"),
                    this._7953 = !1
                }
                _4341(t) {
                    return _t.ZP.createElement("div", {
                        class: "ffar-players-h1"
                    }, t, _t.ZP.createElement("i", {
                        class: "iconfont iconfont-arrow-down",
                        style: "margin-top: 4px; margin-left: 2px;"
                    }))
                }
                _9993(t) {
                    return _t.ZP.createElement("div", {
                        class: "ffar-players-h2"
                    }, t)
                }
            }
              , we = new class {
                _6129;
                _8276;
                _9677;
                _8085;
                _1099;
                _6503;
                _7953;
                _6469;
                _9128;
                constructor() {
                    this._6129 = null,
                    this._8276 = null,
                    this._9677 = null,
                    this._8085 = null,
                    this._1099 = {
                        _5811: null,
                        _5643: null,
                        _2102: null
                    },
                    this._6503 = !1,
                    this._7953 = !1,
                    this._9128 = {
                        _6710: 0,
                        _4739: 0,
                        _5538: 0,
                        _5643: 0,
                        _2332: !1,
                        _7890: !1
                    },
                    this._6469 = !1
                }
                get _7973() {
                    return this._7953
                }
                _6468() {
                    this._6129 = r._2624(document.getElementById("ffar-bar")),
                    this._8276 = r._2624(document.getElementById("ffar-bar-ready")),
                    this._8276._7800.onclick = ()=>{
                        pe._9119 ? (this._6503 = !this._6503,
                        Ne._8231(this._6503),
                        this._8276._7917 = this._6503 ? "READY" : "NOT READY",
                        this._8276._9798("background-color", this._6503 ? "rgba(111, 255, 84, 0.45)" : "rgba(255, 84, 84, 0.45)")) : u._7225("Error", "Please login first", 5e3)
                    }
                    ,
                    this._9677 = r._2624(document.getElementById("ffar-bar-freeroam")),
                    this._9677._7800.onclick = ()=>{
                        pe._9119 ? !Me._4540 && this._9128._2332 && Ne._1406(0) : u._7225("Error", "Please login first", 5e3)
                    }
                    ,
                    this._8085 = r._2624(document.getElementById("ffar-bar-spawn")),
                    this._8085._7800.onclick = ()=>{
                        pe._9119 ? Me._4540 || this._9128._2332 || this._9128._7890 || Ne._1406(0) : u._7225("Error", "Please login first", 5e3)
                    }
                    ,
                    this._1099 = {
                        _5811: r._2624(document.getElementById("ffar-bar-status")),
                        _5643: r._2624(document.getElementById("ffar-bar-time")),
                        _2102: r._2624(document.getElementById("ffar-bar-players-text"))
                    },
                    document.getElementById("ffar-bar-players").onclick = ()=>{
                        Ee._7705()
                    }
                }
                _4967(t, _, e, s, i, n) {
                    this._9128._6710 = t,
                    this._9128._4739 = _,
                    this._9128._5538 = e,
                    this._9128._5643 = s,
                    this._9128._2332 = i,
                    this._9128._7890 = n,
                    this._6469 = !0
                }
                _6813() {
                    if (!this._6469)
                        return;
                    if (!this._7953)
                        return;
                    this._9128._2332 ? this._1099._5811._7917 = "Waiting for players" : this._9128._7890 ? this._1099._5811._7917 = "Match ending, spawn disabled" : this._1099._5811._7917 = "Match in progress";
                    const t = (this._9128._5643 % 60).toString().padStart(2, "0")
                      , _ = Math.floor(this._9128._5643 / 60).toString().padStart(2, "0");
                    if (this._1099._5643._7917 = `${_}:${t}`,
                    this._9128._5643 <= 10 && a._3040(a._8962),
                    this._9128._2332) {
                        const t = this._9128._4739
                          , _ = this._9128._4739 + this._9128._5538;
                        this._1099._2102._7917 = `${t}/${_} players ready`
                    } else {
                        const t = this._9128._6710;
                        this._1099._2102._7917 = `${t} players left`
                    }
                    this._8276._9798("display", this._9128._2332 ? "block" : "none"),
                    this._9677._9798("display", this._9128._2332 ? "block" : "none"),
                    this._9128._2332 ? this._8085._9798("display", "none") : (this._8085._9798("display", "block"),
                    this._9128._7890 ? (this._8085._7917 = "Spawning is locked now.",
                    this._8085._9798("background-color", "rgba(255, 84, 84, 0.45)")) : (this._8085._7917 = "Spawn",
                    this._8085._9798("background-color", "rgba(111, 255, 84, 0.45)"))),
                    this._6469 = !1
                }
                _7705() {
                    this._6129._9798("display", "block"),
                    this._7953 = !0,
                    this._6503 && this._8276._7800.click()
                }
                _8601() {
                    this._6129._9798("display", "none"),
                    this._7953 = !1,
                    this._6503 && this._8276._7800.click()
                }
            }
              , ye = new class {
                _7402;
                _3295;
                _2424;
                constructor() {
                    const t = document.getElementById("ffar-results-container")
                      , _ = document.getElementById("ffar-results-scrollbar-slider")
                      , e = _.parentElement;
                    t.addEventListener("scroll", this._6813.bind(this));
                    let s = !1
                      , i = 0
                      , n = 0;
                    _.addEventListener("mousedown", (t=>{
                        s = !0,
                        i = t.clientY,
                        n = _.offsetTop,
                        this._2424 = !0
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
                        this._2424 = !1
                    }
                    )),
                    this._7402 = t,
                    this._3295 = r._2624(_),
                    this._2424 = !1
                }
                _6813() {
                    if (this._2424)
                        return;
                    const t = this._7402.scrollHeight
                      , _ = this._7402.offsetHeight
                      , e = _ / t * 100
                      , s = this._7402.scrollTop / t * _;
                    this._3295._9798("height", `${e.toFixed(0)}%`),
                    this._3295._9798("top", `${s.toFixed(0)}px`)
                }
            }
              , ve = new class {
                _6129;
                _7402;
                _7953;
                _6469;
                _9128;
                constructor() {
                    this._6129 = null,
                    this._7402 = null,
                    this._7953 = !1,
                    this._9128 = [],
                    this._6469 = !1
                }
                _6468() {
                    this._6129 = r._2624(document.getElementById("ffar-results")),
                    this._7402 = document.getElementById("ffar-results-container"),
                    document.getElementById("ffar-results-close").onclick = ()=>{
                        this._8601()
                    }
                }
                _4967(t) {
                    this._9128 = t,
                    this._6469 = !0
                }
                _6813() {
                    if (!this._6469)
                        return;
                    if (!this._7953)
                        return;
                    const t = [];
                    let _ = 1;
                    for (const e of this._9128) {
                        const s = (_++).toString().padStart(2, "0") + "."
                          , i = (e._4072 < 0 ? "-" : "+") + Math.abs(e._4072).toString()
                          , n = re._6600(e._1011)
                          , o = _t.ZP.createElement("div", {
                            class: "ffar-results-row"
                        }, _t.ZP.createElement("div", {
                            class: "ffar-results-rank"
                        }, s), _t.ZP.createElement("div", {
                            class: "ffar-results-username"
                        }, n._2562), _t.ZP.createElement("div", {
                            class: "ffar-results-points",
                            style: {
                                color: e._4072 < 0 ? "#ff0000" : "#00ff00"
                            }
                        }, e._2732, " (", i, ")"));
                        t.push(o)
                    }
                    o._3851((()=>{
                        this._7402.innerHTML = "";
                        for (const _ of t)
                            this._7402.appendChild(_);
                        ye._6813()
                    }
                    )),
                    this._6469 = !1
                }
                _7705() {
                    this._6129._9798("display", "flex"),
                    this._7953 = !0
                }
                _8601() {
                    this._6129._9798("display", "none"),
                    this._7953 = !1
                }
            }
              , Ce = new class {
                _5953;
                _7953;
                constructor() {
                    this._5953 = null,
                    this._7953 = !1
                }
                _6468() {
                    const t = document.getElementById("timer2");
                    this._5953 = r._2624(t)
                }
                _6813(t) {
                    this._5953._7917 = t
                }
                _7705() {
                    this._7953 || (this._5953._9798("display", "block"),
                    this._7953 = !0)
                }
                _8601() {
                    this._7953 && (this._5953._9798("display", "none"),
                    this._7953 = !1)
                }
            }
              , be = new class extends i {
                _6018;
                _3763;
                _9424;
                constructor() {
                    super();
                    const t = document.getElementById("inventory-rename-box")
                      , _ = document.getElementById("inventory-rename-input")
                      , e = document.getElementById("inventory-rename-box-close");
                    _.addEventListener("keydown", (t=>{
                        "Enter" === t.key && (this._8079("submit", [_.value]),
                        _.value = "",
                        this._8601())
                    }
                    )),
                    e.addEventListener("click", (()=>{
                        this._8601()
                    }
                    )),
                    this._6018 = r._2624(t),
                    this._3763 = r._2624(_),
                    this._9424 = !1
                }
                _7705() {
                    this._9424 || (this._6018._9798("display", "flex"),
                    this._9424 = !0,
                    o._3851((()=>{
                        this._3763._7800.focus()
                    }
                    )))
                }
                _8601() {
                    this._9424 && (this._6018._9798("display", "none"),
                    this._9424 = !1)
                }
                get _1390() {
                    return this._9424
                }
            }
              , Se = ["SHIELD", "TITLE", "MISC"]
              , Ae = new class extends h {
                _9631;
                _2756;
                _3285;
                _1238;
                constructor() {
                    super("inventory-menu"),
                    this._9631 = new Map,
                    this._2756 = new Map,
                    this._3285 = "";
                    const t = document.getElementById("inventory-content");
                    this._1238 = new J(t)
                }
                _6468() {
                    this._1238._6468();
                    const t = document.getElementById("inventory-navbar");
                    for (const _ of Se) {
                        const e = _t.ZP.createElement("div", {
                            class: "inventory-nb-item"
                        }, _, _t.ZP.createElement("div", {
                            class: "inventory-nb-item-decor"
                        }));
                        e.onclick = ()=>{
                            this._7874(_)
                        }
                        ,
                        t.appendChild(e),
                        this._9631.set(_, e)
                    }
                    this._7874(Se[0]),
                    this._1444();
                    const _ = document.getElementById("inventory-back");
                    _.addEventListener("click", (()=>{
                        ns._2006(),
                        a._3040(a._9611)
                    }
                    )),
                    _.addEventListener("mouseenter", a._3040.bind(a, a._5781));
                    const e = document.getElementById("inventory-wait");
                    be._9070("submit", (t=>{
                        e.style.display = "flex",
                        pe._1488(t).then((t=>{
                            null !== t ? t.error ? "invalid_username" === t.error ? u._7225("Username change failed", "The username is invalid.") : u._7225("Error", t.error) : (t.success && (u._7225("Info", "Username successfully changed."),
                            Ne._1488(),
                            delete pe._5881.MISC_RENAME_CARD,
                            this._1444(),
                            fe._1444()),
                            e.style.display = "none") : u._7225("Error", "Failed to change the username.")
                        }
                        )).catch((t=>{
                            console.error(t),
                            e.style.display = "none",
                            u._7225("Error", "Failed to change the username.")
                        }
                        ))
                    }
                    ))
                }
                _1444() {
                    document.getElementById("inventory-wait").style.display = "none";
                    const t = document.getElementById("inventory-items");
                    t.innerHTML = "",
                    this._2756.clear();
                    const _ = Object.getOwnPropertyNames(pe._5881);
                    for (const t of _) {
                        const _ = pe._5881[t]
                          , e = _t.ZP.createElement("div", {
                            class: "inventory-item"
                        }, _t.ZP.createElement("div", {
                            class: "inventory-item-preview",
                            style: {
                                backgroundImage: `url(assets/images/UI/game-item-previews/${t}.webp)`
                            }
                        }, _t.ZP.createElement("div", {
                            class: "inventory-item-name"
                        }, _.name)));
                        e.onclick = ()=>{
                            if (Pe._5914)
                                if (t.startsWith("SHIELD_"))
                                    if (pe._1404.shield === t)
                                        Ne._6566(""),
                                        e.classList.remove("inventory-item-active"),
                                        pe._1404.shield = "";
                                    else {
                                        Ne._6566(t);
                                        for (const [t,_] of this._2756)
                                            t.startsWith("SHIELD_") && _.classList.remove("inventory-item-active");
                                        e.classList.add("inventory-item-active"),
                                        pe._1404.shield = t
                                    }
                                else if (t.startsWith("TITLE_"))
                                    if (pe._1404.title === t)
                                        Ne._7068(""),
                                        e.classList.remove("inventory-item-active"),
                                        pe._1404.title = "";
                                    else {
                                        Ne._7068(t);
                                        for (const [t,_] of this._2756)
                                            t.startsWith("TITLE_") && _.classList.remove("inventory-item-active");
                                        e.classList.add("inventory-item-active"),
                                        pe._1404.title = t
                                    }
                                else
                                    "MISC_RENAME_CARD" === t && be._7705();
                            else
                                u._7225("Error", "Please connect to a game server first.")
                        }
                        ,
                        e.style.display = t.startsWith(`${this._3285}_`) ? "block" : "none",
                        t.startsWith("SHIELD_") && t === pe._1404.shield && e.classList.add("inventory-item-active"),
                        t.startsWith("TITLE_") && t === pe._1404.title && e.classList.add("inventory-item-active"),
                        this._2756.set(t, e)
                    }
                    const e = [...this._2756.values()].reverse();
                    for (const _ of e)
                        t.appendChild(_);
                    this._1238._6813()
                }
                _7874(t) {
                    const _ = this._9631.get(t);
                    if (void 0 === _)
                        throw "Category button is undefined.";
                    for (const t of this._9631.values())
                        t.classList.remove("inventory-nb-item-active");
                    _.classList.add("inventory-nb-item-active");
                    for (const [_,e] of this._2756)
                        e.style.display = _.startsWith(`${t}_`) ? "block" : "none";
                    this._3285 = t,
                    this._1238._6813()
                }
            }
              , Te = new class {
                _5953;
                _9424;
                _8660;
                constructor() {
                    this._5953 = null,
                    this._9424 = !1,
                    this._8660 = {
                        _6808: 0,
                        _1196: !1,
                        _8445: 0
                    }
                }
                _6468() {
                    const t = document.getElementById("spectate-info");
                    this._5953 = r._2624(t)
                }
                _6813() {
                    if (Me._4540)
                        this._9758();
                    else {
                        if (J_._1919 === z._1626)
                            this._5953._7917 = "Spectating #1";
                        else if (J_._1919 === z._9800)
                            this._5953._7917 = "Freeroam";
                        else {
                            const t = re._9822.get(this._8660._6808);
                            if (void 0 !== t)
                                if (this._8660._1196) {
                                    const _ = this._8660._8445 < 1e3 ? this._8660._8445 : (this._8660._8445 / 1e3).toFixed(1) + "k";
                                    this._5953._7917 = `Spectating: ${t._2562} (${_})`
                                } else
                                    this._5953._7917 = `Waiting for ${t._2562} to spawn...`;
                            else
                                this._5953._7917 = "Please wait..."
                        }
                        this._7490()
                    }
                }
                _7490() {
                    this._9424 || (this._5953._9798("display", "block"),
                    this._9424 = !0)
                }
                _9758() {
                    this._9424 && (this._5953._9798("display", "none"),
                    this._9424 = !1)
                }
            }
              , Ie = new class {
                _7402;
                _7953;
                _4255;
                _9542;
                constructor() {
                    this._7402 = null,
                    this._7953 = !0,
                    this._4255 = [],
                    this._9542 = {
                        95: ["completely cleared out", "took it all from", "completely wrecked", "completely wiped off"],
                        80: ["cleared out", "took out", "wrecked", "wiped off"],
                        50: ["is winning against", "is dominating", "is triumphing over", "is reigning supreme over"],
                        30: ["took some from", "had a little win against", "had a small win against", "had a partial win against"]
                    }
                }
                _6468() {
                    const t = document.getElementById("kill-feed");
                    this._7402 = t
                }
                _6813() {
                    if ("show" !== Q.SHOW_KILLFEED._7142())
                        return void this._8601();
                    this._7705();
                    const t = Date.now();
                    for (const _ of this._4255)
                        _._7973 && t - _._5643 > 7e3 && (_._7973 = !1,
                        _._7800.style.opacity = "0")
                }
                _7705() {
                    this._7953 || (this._7402.style.display = "flex",
                    this._7953 = !0)
                }
                _8601() {
                    this._7953 && (this._7402.style.display = "none",
                    this._7953 = !1)
                }
                _5289(t, _, e, s, i) {
                    if (!this._7953)
                        return;
                    let n = "is winning against";
                    s >= 95 ? n = this._9227(95) : s >= 80 ? n = this._9227(80) : s >= 50 ? n = this._9227(50) : s >= 30 && (n = this._9227(30));
                    const o = _t.ZP.createElement("div", {
                        className: "klfd-item"
                    }, _t.ZP.createElement("div", {
                        className: "klfd-row1"
                    }, _t.ZP.createElement("div", {
                        className: "klfd-gain"
                    }, "🠉", e, "% ", _t.ZP.createElement("div", {
                        className: "klfd-nick"
                    }, t._2562)), _t.ZP.createElement("div", {
                        className: "klfd-energy"
                    }, "🠈 (", (i / 1e3).toFixed(1), "k)"), _t.ZP.createElement("div", {
                        className: "klfd-loss"
                    }, _t.ZP.createElement("div", {
                        className: "klfd-nick"
                    }, _._2562), " 🠋", Math.min(100, s), "%")), _t.ZP.createElement("div", {
                        className: "klfd-row2"
                    }, _t.ZP.createElement("div", {
                        className: "klfd-nick"
                    }, t._2562), _t.ZP.createElement("div", {
                        className: "klfd-message"
                    }, n), _t.ZP.createElement("div", {
                        className: "klfd-nick"
                    }, _._2562)), _t.ZP.createElement("div", {
                        className: "klfd-hunter"
                    }));
                    if (this._7402.appendChild(o),
                    this._4255.push({
                        _7800: o,
                        _5643: Date.now(),
                        _7973: !0
                    }),
                    this._4255.length > 6) {
                        const t = this._4255.shift();
                        t && this._7402.removeChild(t._7800)
                    }
                }
                _9227(t) {
                    const _ = this._9542[t];
                    return _[Math.floor(Math.random() * _.length)]
                }
            }
              , Oe = new class {
                _5953;
                _7953;
                constructor() {
                    this._5953 = null,
                    this._7953 = !1
                }
                _6468() {
                    const t = document.getElementById("timer3");
                    this._5953 = r._2624(t)
                }
                _6813(t) {
                    this._5953._7917 = t
                }
                _7705() {
                    this._7953 || (this._5953._9798("display", "block"),
                    this._7953 = !0)
                }
                _8601() {
                    this._7953 && (this._5953._9798("display", "none"),
                    this._7953 = !1)
                }
            }
              , Le = new class {
                _2460(t) {
                    const _ = new V(t);
                    switch (_._7249()) {
                    case ce._7986._2060:
                        this._1017(_);
                        break;
                    case ce._7986._8746:
                        this._2482(_);
                        break;
                    case ce._7986._1164:
                        this._8200(_);
                        break;
                    case ce._7986._8439:
                        this._4129(_);
                        break;
                    case ce._7986._3284:
                        this._1228(_);
                        break;
                    case ce._7986._8933:
                        this._1666();
                        break;
                    case ce._7986._5580:
                        this._1483(_);
                        break;
                    case ce._7986._4322:
                        this._3806(_);
                        break;
                    case ce._7986._4927:
                        this._5185(_);
                        break;
                    case ce._7986._1312:
                        this._6844(_);
                        break;
                    case ce._7986._5733:
                        this._2156();
                        break;
                    case ce._7986._7052:
                        this._1190();
                        break;
                    case ce._7986._8677:
                        this._5287();
                        break;
                    case ce._7986._7645:
                        this._5784(_);
                        break;
                    case ce._7986._5844:
                        this._1048(_);
                        break;
                    case ce._7986._6794:
                        this._3761(_);
                        break;
                    case ce._7986._8926:
                        this._6291(_);
                        break;
                    case ce._7986._8831:
                        this._1033(_);
                        break;
                    case ce._7986._2739:
                        this._5689(_);
                        break;
                    case ce._7986._5132:
                        this._7959(_);
                        break;
                    case ce._7986._5553:
                        this._9862(_);
                        break;
                    case ce._7986._4444:
                        this._2614(_)
                    }
                }
                _1017(t) {
                    const _ = t._7169();
                    Me._6646 = t._4067(),
                    ["classic", "solo-tricks", "ultra-fission", "super-fission"].includes(_) ? (de._6334 = "XP",
                    we._8601(),
                    Ce._8601(),
                    Oe._8601()) : "classic-1v1-scrim" === _ ? (de._6334 = "RP",
                    we._7705(),
                    pe._9119 || u._7225("LOGIN REQUIRED", "This gamemode requires you to be logged in.", 1e4),
                    Ce._8601(),
                    Oe._8601()) : "tournament" === _ ? (de._6334 = "AE",
                    we._8601(),
                    Ce._7705(),
                    Oe._8601()) : "arena" === _ && (de._6334 = "AR",
                    we._8601(),
                    Ce._8601(),
                    Oe._7705()),
                    Ne._8337(),
                    Ne._4543(Me._4543),
                    Ne._1754(Me._1754)
                }
                _2482(t) {
                    const _ = t._4067();
                    for (let e = 0; e < _; e++) {
                        const _ = t._4067()
                          , e = re._8994(_);
                        re._4842(e),
                        re._3028(_)
                    }
                    const e = t._4067();
                    for (let _ = 0; _ < e; _++) {
                        const _ = t._4067();
                        re._8617(_)
                    }
                    const s = t._4067();
                    for (let _ = 0; _ < s; _++) {
                        const _ = t._4067()
                          , e = re._6600(_)
                          , s = t._7249();
                        if (1 & s && (e._2562 = t._9746(),
                        e._6310 && (Me._2562 = e._2562,
                        Ue._2562 = e._2562)),
                        2 & s && (e._4543 = t._9746(),
                        e._2919 = d._6194(e._4543)),
                        4 & s && (e._6760 = t._7249(),
                        e._6310) && (document.getElementById("mame-trb-user-data-rank").textContent = 0 === e._6760 ? "UNRANKED" : `RANK#${e._6760}`),
                        8 & s && (e._4935 = t._7169()),
                        16 & s) {
                            const _ = t._7169();
                            t._7249(),
                            e._4557 = _
                        }
                    }
                    const i = t._4067();
                    for (let _ = 0; _ < i; _++) {
                        const _ = t._4067()
                          , e = re._8994(_)
                          , s = t._7249();
                        if (1 & s) {
                            const _ = t._7249()
                              , s = t._7249()
                              , i = t._7249();
                            e._8955._6813(_, s, i)
                        }
                        if (2 & s) {
                            const _ = t._7249()
                              , s = t._7169();
                            e._1633 = 1 === _ ? `https://i.imgur.com/${s}.png` : ""
                        }
                    }
                    const n = t._4067();
                    for (let _ = 0; _ < n; _++) {
                        const _ = t._4067()
                          , e = t._9746()
                          , s = t._9746()
                          , i = t._7249()
                          , n = t._7169()
                          , o = t._7169()
                          , r = t._7249()
                          , h = re._3329(_, e, s, n, i, [o, r]);
                        h._6310 && (Me._2562 = h._2562,
                        Ue._2562 = h._2562,
                        document.getElementById("mame-trb-user-data-rank").textContent = 0 === h._6760 ? "UNRANKED" : `RANK#${h._6760}`)
                    }
                    const o = t._4067();
                    for (let _ = 0; _ < o; _++) {
                        const _ = t._4067()
                          , e = t._4067()
                          , s = t._7249()
                          , i = t._7249()
                          , n = t._7249()
                          , o = new y(s,i,n)
                          , r = t._7249()
                          , h = t._7169()
                          , a = 1 === r ? `https://i.imgur.com/${h}.png` : ""
                          , c = re._8376(_, o, a)
                          , l = re._6600(e);
                        re._3508(c, l)
                    }
                }
                _8200(t) {
                    const _ = t._4067();
                    re._6340(_);
                    const e = 0 !== t._7249();
                    if (j_._7055(e),
                    0 !== t._7249()) {
                        const _ = t._7249();
                        J_._1919 = _,
                        J_._4245._4563 = t._4067(),
                        J_._4245._2266 = t._4067(),
                        _ === z._1728 && (Te._8660._6808 = t._4067(),
                        Te._8660._1196 = 0 !== t._7249(),
                        Te._8660._8445 = t._8740())
                    }
                    const s = t._4067();
                    for (let _ = 0; _ < s; _++) {
                        const _ = t._4067()
                          , e = re._8032(_);
                        e._6334 === A._3277 && re._4547(e),
                        re._5067(_)
                    }
                    const i = t._4067();
                    for (let _ = 0; _ < i; _++) {
                        const _ = t._4067()
                          , e = t._4067()
                          , s = re._8032(e);
                        s._6334 === A._3277 && re._4547(s),
                        re._9934(_, e)
                    }
                    const n = t._4067();
                    for (let _ = 0; _ < n; _++) {
                        const _ = t._4067()
                          , e = re._8032(_)
                          , s = t._4067()
                          , i = t._4067()
                          , n = e._6334 === A._6064 ? t._7249() : t._4067();
                        e._6813(s, i, n)
                    }
                    const o = t._4067();
                    for (let _ = 0; _ < o; _++) {
                        const _ = t._4067()
                          , e = t._7249()
                          , s = t._4067()
                          , i = t._4067()
                          , n = e === A._6064 ? t._7249() : t._4067()
                          , o = re._7352(_, s, i, n, e);
                        if (e === A._3277) {
                            const _ = t._4067()
                              , e = re._8994(_);
                            re._5277(o, e)
                        } else if (e === A._5555) {
                            const _ = t._4067()
                              , e = re._8994(_);
                            o._8955._6813(e._8955._6030, e._8955._8293, e._8955._4434)
                        }
                    }
                    t._4518(),
                    v_._7714(t)
                }
                _4129(t) {
                    const _ = t._4067();
                    for (let e = 0; e < _; e++) {
                        const _ = t._4067();
                        re._2320(_)
                    }
                    const e = t._4067();
                    for (let _ = 0; _ < e; _++) {
                        const _ = t._4067()
                          , e = re._7622(_);
                        if (e._1196 = 0 !== t._7249(),
                        e._1196) {
                            const _ = t._4067()
                              , s = t._4067()
                              , i = t._8740();
                            e._6813(_, s, i)
                        }
                    }
                    const s = t._4067();
                    for (let _ = 0; _ < s; _++) {
                        const _ = t._4067()
                          , e = re._8994(_);
                        re._2278(_, e)
                    }
                }
                _1228(t) {
                    ue._4518();
                    const _ = t._4067();
                    for (let e = 0; e < _; e++) {
                        const _ = t._4067()
                          , e = t._8740()
                          , s = re._8994(_)
                          , i = s._3636._2562
                          , n = s._3636._4543;
                        ue._9978(n, i, e)
                    }
                    t._4067(),
                    t._8740();
                    const e = t._4067();
                    for (let _ = 0; _ < e; _++) {
                        const _ = t._4067()
                          , e = t._4067()
                          , s = t._4067()
                          , i = t._4067()
                          , n = t._2306()
                          , o = re._6600(_)
                          , r = re._6600(s);
                        n >= 2e3 && i > 30 && Ie._5289(o, r, e, i, n)
                    }
                }
                _3806(t) {
                    const _ = t._4067()
                      , e = t._7249()
                      , s = t._9746()
                      , i = re._6600(_);
                    switch (e) {
                    case 1:
                    case 2:
                        B_._2673("TEAM", i._2562, Wt._4311(s));
                        break;
                    case 100:
                        B_._2673("GLOBAL", i._2562, Wt._4311(s));
                        break;
                    case 101:
                        B_._2673("GLOBAL", "SYSTEM - ARENA", s)
                    }
                }
                _5185(t) {
                    const _ = t._4067()
                      , e = 0 !== t._7249()
                      , s = t._9746()
                      , i = re._6600(_);
                    if (i === f)
                        return void console.error("Direct message has unknown client.");
                    const n = `[DM] ${i._2562}`;
                    B_._2673(n, e ? Me._2562 : i._2562, s)
                }
                _6844(t) {
                    const _ = t._4067()
                      , e = (re._6600(_),
                    t._4067())
                      , s = t._4067();
                    Y_._9978(e, s, 16777215)
                }
                _2156() {
                    const t = n._6032;
                    Pe._9324 = t - Pe._7385
                }
                _1190() {
                    re._6617.clear()
                }
                _5287() {
                    u._7225("Server", "The server has ended."),
                    Pe._6007 = !0
                }
                _5784(t) {
                    const _ = []
                      , e = t._7249();
                    for (let s = 0; s < e; s++) {
                        const e = {
                            _4087: t._9746(),
                            _4543: t._9746(),
                            _1754: t._9746(),
                            _4495: 0,
                            _7825: t._8740(),
                            _5136: t._8740(),
                            _5879: t._1584()
                        };
                        e._4495 = Math.round(e._5136 / 1e3) + Math.round(e._7825 / 3e3),
                        _.push(e)
                    }
                    F_._7705(_)
                }
                _1048(t) {
                    const _ = t._7169()
                      , e = pe._2620[_];
                    0 !== t._7249() ? (u._7225("Shop", `${e.name} has been added to your inventory.`),
                    pe._5881[_] = {
                        name: e.name,
                        desc: e.desc
                    }) : u._7225("Shop", "Purchase failed."),
                    fe._1444(),
                    Ae._1444()
                }
                _3761(t) {
                    const _ = []
                      , e = t._4067();
                    for (let s = 0; s < e; s++)
                        _.push(t._4067());
                    const s = []
                      , i = t._4067();
                    for (let _ = 0; _ < i; _++)
                        s.push(t._4067());
                    const n = []
                      , o = t._4067();
                    for (let _ = 0; _ < o; _++)
                        n.push(t._4067());
                    const r = t._8740()
                      , h = 0 !== t._7249()
                      , a = 0 !== t._7249();
                    Ee._4967(_, s, n, h),
                    we._4967(_.length, s.length, n.length, r, h, a)
                }
                _6291(t) {
                    const _ = []
                      , e = t._4067();
                    for (let s = 0; s < e; s++) {
                        const e = {
                            _1011: t._4067(),
                            _2732: t._4067(),
                            _4072: t._9782()
                        };
                        _.push(e)
                    }
                    ve._4967(_),
                    Ee._8601(),
                    ve._7705()
                }
                _1033(t) {
                    const _ = t._8740();
                    if (!U_._5252())
                        throw new Error("Failed to set XP, not logged in.");
                    U_._8607(_)
                }
                _5689(t) {
                    const _ = t._8740();
                    de._5770 = _
                }
                _7959(t) {
                    const _ = 0 !== t._7249()
                      , e = t._4067()
                      , s = `${Math.floor(e / 3600).toFixed(0).padStart(2, "0")}:${Math.floor(e % 3600 / 60).toFixed(0).padStart(2, "0")}:${(e % 60).toFixed(0).padStart(2, "0")}`
                      , i = t._8740();
                    de._5770 = i,
                    _ ? Ce._6813(`Spawning in: ${s}`) : Ce._6813(`Match ends in: ${s}`)
                }
                _9862(t) {
                    const _ = t._7249()
                      , e = t._8740()
                      , s = Math.floor(e / 6e4)
                      , i = Math.floor(e % 6e4 / 1e3)
                      , n = `${s.toString().padStart(2, "0")}:${i.toString().padStart(2, "0")}`;
                    0 === _ ? 0 === e ? Oe._6813("Waiting for more players...") : Oe._6813(`Starting in ${n}`) : 1 === _ ? Oe._6813("Survive till the end to win.") : Oe._6813(`Restarting in ${n}`)
                }
                _2614(t) {
                    const _ = t._8740()
                      , e = t._8740();
                    We._6813(_, e),
                    fe._2176(_, e)
                }
                _1666() {
                    const t = [...re._4764];
                    for (const [_,e] of t)
                        e._6334 === A._3277 && re._4547(e),
                        re._5067(_)
                }
                _1483(t) {
                    0 !== t._7249() ? ns._1130 && ns._2006() : ns._1130 || we._7973 || (ns._5626(es),
                    Me._6511._8193(0, 0))
                }
            }
              , Pe = new class {
                _1044;
                _7936;
                _2100;
                _8558;
                _2891;
                _7385;
                _9324;
                _6007;
                _6044;
                constructor() {
                    this._1044 = "",
                    this._7936 = null,
                    this._2100 = "",
                    this._8558 = "",
                    this._2891 = !1,
                    this._7385 = 0,
                    this._9324 = 0,
                    this._6007 = !1,
                    this._6044 = {
                        _3428: -1,
                        _3469: -1
                    }
                }
                get _1549() {
                    return this._1044
                }
                get _7464() {
                    return this._2891
                }
                get _5914() {
                    return null !== this._7936 && this._7936.readyState === this._7936.OPEN
                }
                _8589(t, _, e="") {
                    (this._6044._3469 < 0 || this._6044._3428 < 0) && (this._6044._3469 = Ot._malloc(64),
                    this._6044._3428 = Ot._malloc(1024)),
                    te._2026 && te._6400(),
                    null !== this._7936 && this._9480();
                    const s = `${t}.ryuten.io/server-${_}/?${e}`
                      , i = "lh" === t ? new WebSocket("ws://localhost:8000") : new WebSocket(`wss://${s}`);
                    i.binaryType = "arraybuffer",
                    i.onopen = this._6029.bind(this),
                    i.onmessage = this._2093.bind(this),
                    i.onclose = this._5249.bind(this),
                    i.onerror = this._7332.bind(this),
                    this._1044 = s,
                    this._7936 = i,
                    this._2100 = t,
                    this._8558 = _,
                    fe._1444()
                }
                _9480() {
                    null !== this._7936 && (this._7936.close(),
                    this._5249()),
                    this._6007 = !1
                }
                _6435(t) {
                    if (null !== this._7936 && this._7936.readyState === this._7936.OPEN) {
                        const _ = new Uint8Array(t)
                          , e = _.byteLength
                          , s = Ot.HEAPU8.subarray(this._6044._3428, this._6044._3428 + e);
                        for (let t = 0; t < e; t++)
                            s[t] = _[t];
                        Ot.RCrypt.encrypt(this._6044._3428, e),
                        this._7936.send(s)
                    }
                }
                _6029() {
                    console.log(`Connected to server ${this._1044}`)
                }
                _2093(t) {
                    const _ = t.data;
                    if (this._2891)
                        Le._2460(_);
                    else {
                        const t = new Uint8Array(_)
                          , e = _.byteLength;
                        if (64 !== e)
                            throw "Invalid init packet size";
                        const s = Ot.HEAPU8.subarray(this._6044._3469, this._6044._3469 + e);
                        for (let _ = 0; _ < e; _++)
                            s[_] = t[_];
                        Ot.RCrypt.set_keys(this._6044._3469),
                        this._2891 = !0
                    }
                }
                _5249() {
                    console.log(`Connection to server ${this._1044} closed`),
                    this._6007 && setTimeout((()=>{
                        null === this._7936 && this._8589(this._2100, this._8558)
                    }
                    ), 2e3),
                    null === this._7936 ? console.warn("WebSocket was found null during close event.") : (this._7936.onopen = null,
                    this._7936.onmessage = null,
                    this._7936.onclose = null,
                    this._7936.onerror = null,
                    this._7936 = null),
                    this._2891 = !1,
                    this._1044 = "",
                    J_._4518(),
                    re._4518(),
                    Me._4518(),
                    v_._6360(),
                    B_._8401(),
                    j_._7055(!1)
                }
                _7332() {
                    console.log(`Connection to server ${this._1044} errored out`)
                }
            }
              , Ne = new class {
                _8024;
                _6848;
                constructor() {
                    this._8024 = {
                        _6890: 0,
                        _5198: ""
                    },
                    this._6848 = "hidden" === document.visibilityState,
                    document.addEventListener("visibilitychange", (()=>{
                        this._6848 = "hidden" === document.visibilityState,
                        this._8337()
                    }
                    ))
                }
                _7092(t) {
                    this._6848 || Pe._6435(t._1508)
                }
                _1406(t) {
                    if (!Pe._7464)
                        return;
                    const _ = new m_(2);
                    _._5423(ce._7947._5011),
                    _._5423(t),
                    this._7092(_)
                }
                _2249() {
                    if (!Pe._7464)
                        return;
                    const t = new m_(2);
                    t._5423(ce._7947._9312),
                    t._5423(z._1626),
                    this._7092(t)
                }
                _4991() {
                    if (!Pe._7464)
                        return;
                    const t = new m_(2);
                    t._5423(ce._7947._9312),
                    t._5423(z._9800),
                    this._7092(t)
                }
                _3069(t) {
                    if (!Pe._7464)
                        return;
                    const _ = new m_(4);
                    _._5423(ce._7947._9312),
                    _._5423(z._1728),
                    _._1541(t),
                    this._7092(_)
                }
                _3504(t) {
                    if (!Pe._7464)
                        return;
                    const _ = new m_(2);
                    _._5423(ce._7947._4354),
                    _._5423(t),
                    this._7092(_)
                }
                _4543(t) {
                    if (!Pe._7464)
                        return;
                    const _ = new m_(1 + 2 * (1 + t.length));
                    _._5423(ce._7947._7684),
                    _._8575(t),
                    this._7092(_)
                }
                _1754(t) {
                    if (!Pe._7464)
                        return;
                    const _ = new m_(1 + 2 * (1 + t.length));
                    _._5423(ce._7947._3543),
                    _._8575(t),
                    this._7092(_)
                }
                _1633(t, _) {
                    if (!Pe._7464)
                        return;
                    let e = 0
                      , s = "";
                    const i = /https:\/\/i\.imgur\.com\/([\w0-9]{7})\.(png|jpg)/.exec(_);
                    null !== i && (e = 1,
                    s = i[1]);
                    const n = new m_(3 + (1 + s.length));
                    n._5423(ce._7947._4008),
                    n._5423(t),
                    n._5423(e),
                    n._4885(s),
                    this._7092(n)
                }
                _1745(t, _, e) {
                    if (!Pe._7464)
                        return;
                    const s = new m_(6);
                    s._5423(ce._7947._6623),
                    s._5423(t),
                    s._1541(_ < 0 ? 0 : _ > 65535 ? 65535 : _),
                    s._1541(e < 0 ? 0 : e > 65535 ? 65535 : e),
                    this._7092(s)
                }
                _3577(t, _) {
                    if (!Pe._7464)
                        return;
                    const e = new m_(3);
                    e._5423(ce._7947._3662),
                    e._5423(t),
                    e._5423(_),
                    this._7092(e)
                }
                _5683(t) {
                    if (!Pe._7464)
                        return;
                    const _ = new m_(2);
                    _._5423(ce._7947._9080),
                    _._5423(t),
                    this._7092(_)
                }
                _4011(t, _) {
                    if (!Pe._7464)
                        return;
                    const e = new m_(3);
                    e._5423(ce._7947._4549),
                    e._5423(t),
                    e._5423(_ ? 1 : 0),
                    this._7092(e)
                }
                _4245(t, _) {
                    if (!Pe._7464)
                        return;
                    const e = new m_(5);
                    e._5423(ce._7947._1019),
                    e._1541(t < 0 ? 0 : t > 65535 ? 65535 : t),
                    e._1541(_ < 0 ? 0 : _ > 65535 ? 65535 : _),
                    this._7092(e)
                }
                _9358(t, _) {
                    if (!Pe._7464)
                        return;
                    const e = new m_(3);
                    e._5423(ce._7947._4854),
                    e._5423(t),
                    e._5423(_ ? 1 : 0),
                    this._7092(e)
                }
                _3425(t, _) {
                    if (!Pe._7464)
                        return;
                    if (t === this._8024._6890 && _ === this._8024._5198)
                        return void u._7225("Spam alert", "Duplicate message.");
                    const e = new m_(1 + 2 * _.length + 2);
                    e._5423(ce._7947._4322),
                    e._5423(t),
                    e._8575(_),
                    this._7092(e),
                    this._8024._6890 = t,
                    this._8024._5198 = _
                }
                _5209(t, _) {
                    if (!Pe._7464)
                        return;
                    const e = t << 8;
                    if (e === this._8024._6890 && _ === this._8024._5198)
                        return void u._7225("Spam alert", "Duplicate message.");
                    const s = new m_(1 + 2 * _.length + 3);
                    s._5423(ce._7947._4927),
                    s._1541(t),
                    s._8575(_),
                    this._7092(s),
                    this._8024._6890 = e,
                    this._8024._5198 = _
                }
                _2404(t, _) {
                    if (!Pe._7464)
                        return;
                    const e = new m_(5);
                    e._5423(ce._7947._1312),
                    e._1541(t),
                    e._1541(_),
                    this._7092(e)
                }
                _2224() {
                    if (!Pe._7464)
                        return;
                    const t = new m_(1);
                    t._5423(ce._7947._8604),
                    this._7092(t),
                    Pe._7385 = n._6032
                }
                _8231(t) {
                    if (!Pe._7464)
                        return;
                    const _ = new m_(2);
                    _._5423(ce._7947._9940),
                    _._5423(t ? 1 : 0),
                    this._7092(_)
                }
                _6566(t) {
                    if (!Pe._7464)
                        return;
                    const _ = new m_(300);
                    _._5423(ce._7947._2061),
                    _._4885(t),
                    this._7092(_)
                }
                _7068(t) {
                    if (!Pe._7464)
                        return;
                    const _ = new m_(300);
                    _._5423(ce._7947._2340),
                    _._4885(t),
                    this._7092(_)
                }
                _3959(t) {
                    if (!Pe._7464)
                        return;
                    const _ = new m_(300);
                    _._5423(ce._7947._6327),
                    _._4885(t),
                    this._7092(_)
                }
                _1488() {
                    if (!Pe._7464)
                        return;
                    const t = new m_(300);
                    t._5423(ce._7947._5472),
                    this._7092(t)
                }
                _8337() {
                    if (!Pe._7464)
                        return;
                    const t = new m_(2);
                    t._5423(ce._7947._4407),
                    t._5423(this._6848 ? 1 : 0),
                    Pe._6435(t._1508)
                }
            }
              , Me = new class extends i {
                _6646;
                _3636;
                _5966;
                _2139;
                _5503;
                _6758;
                _6193;
                _4540;
                _4536;
                _8298;
                _2989;
                _7813;
                _6511;
                _8870;
                _1531;
                _1973;
                constructor() {
                    super(),
                    this._6646 = -1,
                    this._3636 = f,
                    this._5966 = "",
                    this._2139 = "",
                    this._5503 = "",
                    this._6758 = ["", ""],
                    this._6193 = "",
                    this._4540 = !1,
                    this._4536 = [!1, !1],
                    this._8298 = [0, 0],
                    this._2989 = 0,
                    this._7813 = [0, 0],
                    this._6511 = new g,
                    this._8870 = [new g, new g],
                    this._1531 = 0,
                    this._1973 = 0
                }
                get _7522() {
                    return this._3636._2102.size
                }
                set _2562(t) {
                    this._5966 = t
                }
                get _2562() {
                    return this._5966
                }
                set _4543(t) {
                    this._5503 = t,
                    Ne._4543(t)
                }
                get _4543() {
                    return this._5503
                }
                set _1754(t) {
                    this._2139 = t,
                    Ne._1754(t)
                }
                get _1754() {
                    return this._2139
                }
                set _4935(t) {
                    t !== this._6193 && (this._6193 = t)
                }
                get _4935() {
                    return this._6193
                }
                get _3335() {
                    return this._1973
                }
                set _3335(t) {
                    this._8079("active-player-change", [t, this._1973]),
                    this._1973 = t
                }
                _5660(t, _) {
                    this._6758[t] = _,
                    t < this._7522 && Ne._1633(t, _)
                }
                _1876(t) {
                    return this._6758[t]
                }
                _4256(t, _) {
                    _ ? (this._3335 = t,
                    this._8298[t] = n._6032) : (t === this._3335 && Q.AUTO_SWITCH_ACTIVE_PLAYER_UNIT._7142() && (this._3335 = (this._3335 + 1) % this._7522),
                    this._8870[t]._8193(0, 0),
                    this._7813[t] = 0),
                    this._4536[t] = _;
                    const e = this._4536[0] || this._4536[1];
                    e !== this._4540 && (e ? this._8664() : this._7177(),
                    this._4540 = e)
                }
                _4518() {
                    this._6646 = -1,
                    this._3636 = f,
                    this._4540 = !1,
                    this._2989 = 0,
                    this._6511 = new g;
                    for (let t = 0; t < 2; t++)
                        this._4536[t] = !1,
                        this._7813[t] = 0,
                        this._8870[t]._8193(0, 0);
                    this._1531 = 0,
                    this._3335 = 0
                }
                _6813() {
                    if (!this._4540)
                        return;
                    let t = 0
                      , _ = 0
                      , e = 0;
                    this._2989 = 0;
                    for (const s of this._3636._2102.values()) {
                        if (!this._4536[s._8212])
                            continue;
                        const i = new j(re._3179._7633,re._3179._2243,re._3179._6149,re._3179._3185);
                        let n = 0;
                        for (const t of s._4764.values())
                            t._5756(),
                            t._4563 - t._4464 < i._6149 && (i._6149 = t._4563 - t._4464),
                            t._2266 - t._4464 < i._3185 && (i._3185 = t._2266 - t._4464),
                            t._4563 + t._4464 > i._7633 && (i._7633 = t._4563 + t._4464),
                            t._2266 + t._4464 > i._2243 && (i._2243 = t._2266 + t._4464),
                            n += t._8445;
                        const o = (i._6149 + i._7633) / 2
                          , r = (i._3185 + i._2243) / 2;
                        t += o,
                        _ += r,
                        e += 1,
                        this._2989 += n,
                        this._7813[s._8212] = n,
                        this._8870[s._8212]._8193(o, r)
                    }
                    this._6511._8193(t / e, _ / e),
                    this._1531 < this._2989 && (this._1531 = this._2989)
                }
                _8664() {}
                _7177() {
                    this._2989 = 0,
                    this._1531 = 0,
                    this._3335 = 1,
                    D_._4011(!1),
                    this._3335 = 0,
                    D_._4011(!1)
                }
            }
              , Re = {
                SHIELD_BASIC_RING: {
                    _9378: "assets/images/UI/main-menu/shields/SHIELD_BASIC_RING.webp",
                    _8686: .8
                },
                SHIELD_BASIC_RING_THIN: {
                    _9378: "assets/images/UI/main-menu/shields/SHIELD_BASIC_RING_THIN.webp",
                    _8686: .85
                },
                SHIELD_BASIC_RING_THICK: {
                    _9378: "assets/images/UI/main-menu/shields/SHIELD_BASIC_RING_THICK.webp",
                    _8686: .75
                },
                SHIELD_MESH_RING: {
                    _9378: "assets/images/UI/main-menu/shields/SHIELD_MESH_RING.webp",
                    _8686: .9
                },
                SHIELD_GREMORY_G3_R1: {
                    _9378: "assets/images/UI/main-menu/shields/SHIELD_GREMORY_G3_R1.webp",
                    _8686: .7
                },
                SHIELD_GREMORY_G3_R2: {
                    _9378: "assets/images/UI/main-menu/shields/SHIELD_GREMORY_G3_R1.webp",
                    _8686: .7
                },
                SHIELD_VALI: {
                    _9378: "assets/images/UI/main-menu/shields/SHIELD_VALI.webp",
                    _8686: .6
                },
                SHIELD_HSLO: {
                    _9378: "assets/images/UI/main-menu/shields/SHIELD_HSLO.webp",
                    _8686: .6
                },
                SHIELD_TRINITY_R1: {
                    _9378: "assets/images/UI/main-menu/shields/SHIELD_TRINITY_R1.webp",
                    _8686: .7
                },
                SHIELD_TRINITY_R2: {
                    _9378: "assets/images/UI/main-menu/shields/SHIELD_TRINITY_R2.webp",
                    _8686: .7
                },
                SHIELD_CERAMIC_SNOW: {
                    _9378: "assets/images/UI/main-menu/shields/SHIELD_CERAMIC_SNOW.webp",
                    _8686: .67
                },
                SHIELD_CRYSTAL_S: {
                    _9378: "assets/images/UI/main-menu/shields/SHIELD_CRYSTAL_S.webp",
                    _8686: .9
                }
            }
              , ke = new class {
                _1519;
                _1677;
                _1727;
                _3716;
                _9729;
                _2011;
                _9348;
                _1913;
                _6198;
                _4302;
                constructor() {
                    this._1519 = {},
                    this._1677 = {},
                    this._1727 = {},
                    this._3716 = {},
                    this._9729 = {},
                    this._2011 = {},
                    this._9348 = {},
                    this._1913 = {},
                    this._6198 = {
                        _4935: "",
                        _2598: "",
                        _1333: ""
                    },
                    this._4302 = !1
                }
                _6468() {
                    this._1519 = document.getElementById("orb-display"),
                    this._1677 = new c.Thl({
                        width: 360,
                        height: 360,
                        view: this._1519,
                        antialias: !0,
                        powerPreference: "high-performance",
                        backgroundAlpha: 0
                    }),
                    this._1727 = new c.W20,
                    this._3716 = document.createElement("canvas"),
                    this._3716.width = 1024,
                    this._3716.height = 1024,
                    this._9729 = new c.VL4(this._3716),
                    this._2011._4935 = new c.xEZ(this._9729,new c.AeJ(16,16,480,480)),
                    this._2011._2598 = new c.xEZ(this._9729,new c.AeJ(528,16,480,480)),
                    this._2011._1333 = new c.xEZ(this._9729,new c.AeJ(16,528,480,480)),
                    this._9348._4935 = c.jyi.from(this._2011._4935),
                    this._9348._4935.anchor.set(.5, .5),
                    this._9348._4935.position.set(180, 180),
                    this._9348._2598 = c.jyi.from(this._2011._2598),
                    this._9348._2598.anchor.set(.5, .5),
                    this._9348._2598.position.set(180, 180),
                    this._9348._1333 = c.jyi.from(this._2011._1333),
                    this._9348._1333.anchor.set(.5, .5),
                    this._9348._1333.position.set(180, 180),
                    this._1913._4935 = new Image,
                    this._1913._4935.crossOrigin = "anonymous",
                    this._1913._4935.addEventListener("load", this._6898.bind(this, !1)),
                    this._1913._2598 = new Image,
                    this._1913._2598.crossOrigin = "anonymous",
                    this._1913._2598.addEventListener("load", this._1972.bind(this, !1)),
                    this._1913._1333 = new Image,
                    this._1913._1333.crossOrigin = "anonymous",
                    this._1913._1333.addEventListener("load", this._2716.bind(this, !1)),
                    this._6898(!0),
                    this._1972(!0),
                    this._2716(!0)
                }
                _6813() {
                    const t = Re[pe._1404.shield];
                    this._6198._4935 = void 0 === t ? "" : location.origin + location.pathname + t._9378 + "?cb3",
                    this._1913._4935.src !== this._6198._4935 && (this._6898(!0),
                    this._1913._4935.src = this._6198._4935),
                    this._1913._2598.src !== this._6198._2598 && (this._1972(!0),
                    this._1913._2598.src = this._6198._2598),
                    this._1913._1333.src !== this._6198._1333 && (this._2716(!0),
                    this._1913._1333.src = this._6198._1333),
                    this._9348._4935.scale.set(.75),
                    this._9348._4935.rotation = 2 * Math.PI * (performance.now() % 9e4 / -9e4);
                    const _ = .75 * (void 0 === t ? .9 : t._8686);
                    this._9348._2598.scale.set(_),
                    this._9348._1333.scale.set(_),
                    this._1727.removeChildren(),
                    this._1727.addChild(this._9348._2598),
                    this._4302 && this._1727.addChild(this._9348._1333),
                    this._1727.addChild(this._9348._4935),
                    this._1677.render(this._1727)
                }
                _6898(t=!1) {
                    const _ = this._3716.getContext("2d");
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
                        const t = this._1913._4935;
                        _.save(),
                        _.imageSmoothingEnabled = !0,
                        _.imageSmoothingQuality = "high",
                        _.drawImage(t, 16, 16, 480, 480),
                        _.restore()
                    }
                    this._9729.update()
                }
                _1972(t=!1) {
                    const _ = this._3716.getContext("2d");
                    if (_.clearRect(512, 0, 512, 512),
                    _.save(),
                    _.beginPath(),
                    _.arc(768, 256, 240, 0, 2 * Math.PI),
                    _.closePath(),
                    _.clip(),
                    _.fillStyle = "#ffffff",
                    _.fill(),
                    !t) {
                        const t = this._1913._2598;
                        _.imageSmoothingEnabled = !0,
                        _.imageSmoothingQuality = "high",
                        _.drawImage(t, 528, 16, 480, 480)
                    }
                    _.restore(),
                    this._9729.update()
                }
                _2716(t=!1) {
                    const _ = this._3716.getContext("2d");
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
                        const t = this._1913._1333;
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
                    this._9729.update()
                }
            }
              , xe = new class extends i {
                _5953;
                _2044;
                _1357;
                _7953;
                _6503;
                constructor() {
                    super();
                    const t = document.getElementById("queue-status")
                      , _ = document.getElementById("queue-status-data")
                      , e = document.getElementById("queue-status-ready");
                    e.addEventListener("click", (()=>{
                        this._8079("readystatechange")
                    }
                    )),
                    this._5953 = r._2624(t),
                    this._2044 = r._2624(_),
                    this._1357 = r._2624(e),
                    this._7953 = !1,
                    this._6503 = !1
                }
                get _4739() {
                    return this._6503
                }
                set _4739(t) {
                    this._6503 = t,
                    this._1357._7917 = t ? "READY" : "NOT READY"
                }
                _6813(t) {
                    this._2044._7917 = t
                }
                _7705() {
                    this._7953 || (this._5953._9798("display", "flex"),
                    this._7953 = !0)
                }
                _8601() {
                    this._7953 && (this._5953._9798("display", "none"),
                    this._7953 = !1)
                }
            }
              , Be = new class extends i {
                _1833;
                _5147;
                _5572;
                _9620;
                _9984;
                constructor() {
                    super();
                    const t = document.getElementById("change-skin")
                      , _ = document.getElementById("change-skin-0")
                      , e = document.getElementById("change-skin-1")
                      , s = a._3040.bind(a, a._5781);
                    t.addEventListener("click", (()=>{
                        this._9620 = 0,
                        this._8079("change-skin"),
                        a._3040(a._9611)
                    }
                    )),
                    t.addEventListener("mouseenter", s),
                    _.addEventListener("click", (()=>{
                        this._9620 = 0,
                        this._8079("change-skin"),
                        a._3040(a._9611)
                    }
                    )),
                    _.addEventListener("mouseenter", s),
                    e.addEventListener("click", (()=>{
                        this._9620 = 1,
                        this._8079("change-skin"),
                        a._3040(a._9611)
                    }
                    )),
                    e.addEventListener("mouseenter", s),
                    this._1833 = r._2624(t),
                    this._5147 = r._2624(_),
                    this._5572 = r._2624(e),
                    this._9620 = 0,
                    this._9984 = !1
                }
                get _1595() {
                    return this._9620
                }
                set _4302(t) {
                    this._9984 !== t && (this._9984 = t,
                    t ? (this._5147._4748("disabled"),
                    this._5572._4748("disabled"),
                    this._1833._8307("disabled")) : (this._5147._8307("disabled"),
                    this._5572._8307("disabled"),
                    this._1833._4748("disabled")))
                }
                get _4302() {
                    return this._9984
                }
            }
              , He = /(\s|[\u2000-\u200f]|\u202f|\u2800|\u2063|[\x00-\x0f]|\x7f|\xad|\u17b5|\u202e|\u202d|\u3164|\uffa0)/g
              , Ue = new class extends i {
                _7444;
                _7612;
                _7889;
                _9515;
                _2139;
                _5503;
                _5966;
                constructor() {
                    super();
                    const t = document.getElementById("pin-input")
                      , _ = document.getElementById("team-input")
                      , e = document.getElementById("mame-trb-user-data-username")
                      , s = document.getElementById("mame-trb-user-data-level");
                    t.addEventListener("blur", (()=>{
                        if (Me._4540)
                            return t.value = this._2139,
                            void u._7225("Pin", "You cannot change pin when alive.");
                        const _ = t.value.replace(/\x00/g, "").trim();
                        t.value !== _ && (t.value = _),
                        this._2139 = _,
                        this._8079("pin-change")
                    }
                    )),
                    _.addEventListener("blur", (()=>{
                        if (Me._4540)
                            return _.value = this._5503,
                            void u._7225("Team", "You cannot change team when alive.");
                        const t = _.value.replace(He, "").trim();
                        _.value !== t && (_.value = t),
                        this._5503 = t,
                        this._8079("team-change")
                    }
                    )),
                    this._7444 = t,
                    this._7612 = _,
                    this._7889 = e,
                    this._9515 = s,
                    this._2139 = "",
                    this._5503 = "",
                    this._5966 = e.textContent || ""
                }
                get _1754() {
                    return this._2139
                }
                set _1754(t) {
                    this._2139 = t,
                    this._7444.value = t
                }
                get _4543() {
                    return this._5503
                }
                set _4543(t) {
                    this._5503 = t,
                    this._7612.value = t
                }
                get _2562() {
                    return this._5966
                }
                set _2562(t) {
                    this._5966 = t,
                    this._7889.textContent = t
                }
                _4204(t) {
                    this._9515.textContent = `LEVEL ${t}`
                }
            }
              , De = new class {
                _6018;
                _5727;
                _7545;
                _3806;
                _7575;
                _5005;
                _7953;
                constructor() {
                    this._6018 = document.getElementById("mame-trb-udl-box"),
                    this._5727 = document.getElementById("mame-trb-udl-info-xp"),
                    this._7545 = document.getElementById("mame-trb-udl-info-xp-bar-fill"),
                    this._3806 = document.getElementById("mame-trb-udl-message"),
                    this._7575 = document.getElementById("mame-trb-user-data-level"),
                    this._5005 = 0,
                    this._7953 = !1
                }
                _4204(t, _, e) {
                    const s = Math.floor(t / _ * 100);
                    this._5727.textContent = `${t} / ${_} XP`,
                    this._7545.style.width = `${s}%`,
                    this._3806.textContent = `Congratulations, you have reached Level ${e}!`,
                    0 !== this._5005 && 0 !== e && this._5005 < e && (this._3806.style.display = "block",
                    this._7705()),
                    this._5005 = e,
                    this._7575.textContent = `LEVEL ${e}`
                }
                _7705() {
                    this._6018.style.display = "flex",
                    this._7953 = !0
                }
                _8601() {
                    this._6018.style.display = "none",
                    this._3806.style.display = "none",
                    this._7953 = !1
                }
                _2775() {
                    this._7953 ? this._8601() : this._7705()
                }
            }
              , We = new class {
                _8139;
                _2287;
                constructor() {
                    this._2287 = document.getElementById("mame-trb-user-data-rc"),
                    this._8139 = document.getElementById("mame-trb-user-data-rp")
                }
                _6813(t, _) {
                    this._8139.textContent = `${t} RP`,
                    this._2287.textContent = `${_} RC`
                }
            }
            ;
            class Ge extends i {
                _7800;
                _1633;
                _6883;
                constructor(t) {
                    super();
                    const _ = ()=>{
                        a._3040(a._5781)
                    }
                      , e = _t.ZP.createElement("div", {
                        className: "csm-skin-selector"
                    }, _t.ZP.createElement("i", {
                        className: "iconfont iconfont-spinner csm-skin-selector-spinner"
                    }), _t.ZP.createElement("img", {
                        className: "csm-skin-selector-image",
                        crossOrigin: "anonymous"
                    }), _t.ZP.createElement("div", {
                        className: "csm-skin-selector-buttons"
                    }, _t.ZP.createElement("div", {
                        className: "csm-skin-selector-button",
                        onMouseEnter: _,
                        onClick: ()=>{
                            this._8079("select"),
                            a._3040(a._5104)
                        }
                    }, _t.ZP.createElement("i", {
                        className: "iconfont iconfont-check csm-skin-selector-button-icon"
                    }), "SELECT"), _t.ZP.createElement("div", {
                        className: "csm-skin-selector-button",
                        onMouseEnter: _,
                        onClick: ()=>{
                            this._8079("copy"),
                            a._3040(a._5104)
                        }
                    }, _t.ZP.createElement("i", {
                        className: "iconfont iconfont-link csm-skin-selector-button-icon"
                    }), "COPY URL"), _t.ZP.createElement("div", {
                        className: "csm-skin-selector-button",
                        onMouseEnter: _,
                        onClick: ()=>{
                            this._8079("delete"),
                            a._3040(a._5104)
                        }
                    }, _t.ZP.createElement("i", {
                        className: "iconfont iconfont-delete csm-skin-selector-button-icon"
                    }), "DELETE")))
                      , s = e.children[0]
                      , i = e.children[1];
                    i.addEventListener("load", (()=>{
                        o._3851((()=>{
                            i.style.opacity = "1",
                            s.style.display = "none"
                        }
                        ))
                    }
                    )),
                    this._7800 = e,
                    this._1633 = t,
                    this._6883 = !1,
                    Fe._9070("show", (()=>{
                        this._6883 || null === e.parentElement || (i.src = t,
                        this._6883 = !0)
                    }
                    ))
                }
            }
            const Ke = new class extends i {
                _6018;
                _3763;
                _8999;
                _9424;
                constructor() {
                    super();
                    const t = document.getElementById("csm-url-input-box")
                      , _ = document.getElementById("csm-url-input")
                      , e = document.getElementById("csm-url-input-close");
                    _.addEventListener("keydown", (t=>{
                        if ("Enter" === t.key) {
                            const t = /i\.imgur\.com\/\w{7}\.(?:jpg|png)/.exec(_.value);
                            null === t ? (this._3763._9798("color", "#ff0000"),
                            this._6018._9798("animation", "csm_url_input_box_shake 100ms infinite"),
                            setTimeout(this._6018._9798.bind(this._6018, "animation", ""), 300),
                            u._7225("Bad custom skin URL", "Use a valid imgur image URL.")) : (this._8999 = `https://${t[0]}`,
                            _.value = "",
                            this._8601(),
                            this._8079("submit"))
                        } else
                            "#ff0000" === this._3763._7630("color") && this._3763._9798("color", "#999999")
                    }
                    )),
                    e.addEventListener("click", (()=>{
                        this._8601()
                    }
                    )),
                    this._6018 = r._2624(t),
                    this._3763 = r._2624(_),
                    this._8999 = "",
                    this._9424 = !1
                }
                _7705() {
                    this._9424 || (this._6018._9798("display", "flex"),
                    this._9424 = !0,
                    o._3851((()=>{
                        this._3763._7800.focus()
                    }
                    )))
                }
                _8601() {
                    this._9424 && (this._6018._9798("display", "none"),
                    this._9424 = !1)
                }
                get _1390() {
                    return this._9424
                }
                get _3671() {
                    return this._8999
                }
            }
              , Fe = new class extends h {
                _8494;
                _1238;
                _4255;
                _1822;
                _7601;
                constructor() {
                    super("custom-skin-menu"),
                    this._8494 = document.getElementById("csm-container-content"),
                    this._1238 = new J(document.getElementById("csm-container")),
                    this._4255 = [],
                    this._1822 = "custom-skin-urls",
                    this._7601 = ""
                }
                get _3046() {
                    return this._7601
                }
                _6468() {
                    const t = document.getElementById("csm-back-button");
                    t.addEventListener("click", (()=>{
                        this._5779(),
                        a._3040(a._9611)
                    }
                    )),
                    t.addEventListener("mouseenter", a._3040.bind(a, a._5781));
                    const _ = document.getElementById("csm-skin-add");
                    _.addEventListener("click", (()=>{
                        this._7056(),
                        a._3040(a._9611)
                    }
                    )),
                    _.addEventListener("mouseenter", a._3040.bind(a, a._5781)),
                    Ke._9070("submit", (()=>{
                        this._2436(Ke._3671)
                    }
                    )),
                    this._9070("hidden", (()=>{
                        Ke._8601()
                    }
                    )),
                    this._9299(),
                    this._1238._6468()
                }
                _5779() {
                    ns._2006()
                }
                _7056() {
                    Ke._7705()
                }
                _2436(t) {
                    const _ = new Ge(t);
                    _._9070("select", (()=>{
                        this._7601 = t,
                        this._8079("select"),
                        ns._2006()
                    }
                    )),
                    _._9070("copy", (()=>{
                        navigator.clipboard.writeText(t).then((()=>{
                            u._7225("Custom skin", "URL copied to clipboard.")
                        }
                        )).catch(console.error)
                    }
                    )),
                    _._9070("delete", (()=>{
                        this._8494.removeChild(_._7800),
                        this._4255.splice(this._4255.indexOf(t), 1),
                        this._1238._6813(),
                        this._2699()
                    }
                    ));
                    const e = this._8494.firstChild;
                    null === e.nextSibling ? this._8494.appendChild(_._7800) : this._8494.insertBefore(_._7800, e.nextSibling),
                    this._4255.push(t),
                    this._1238._6813(),
                    this._2699()
                }
                _2699() {
                    localStorage.setItem(this._1822, JSON.stringify(this._4255))
                }
                _9299() {
                    try {
                        const t = localStorage.getItem(this._1822);
                        if (null !== t) {
                            const _ = JSON.parse(t);
                            if (!Array.isArray(_))
                                throw "Saved urls list is not an array";
                            for (let t = 0; t < _.length; t++) {
                                const e = _[t];
                                if ("string" != typeof e)
                                    throw "Url is not a string";
                                this._2436(e)
                            }
                        }
                    } catch (t) {
                        console.log("Corrupt saved custom skin Urls", t)
                    }
                    if (0 === this._4255.length) {
                        const t = ["https://i.imgur.com/aXE1qVV.jpg", "https://i.imgur.com/IxaIJVs.png", "https://i.imgur.com/PzkMI5S.jpg", "https://i.imgur.com/Du8bCMR.png"];
                        for (const _ of t)
                            this._2436(_)
                    }
                }
            }
              , Ze = new Map([["na", "North America"], ["eu", "Europe"], ["as", "Asia"]]);
            "localhost" === window.location.hostname && Ze.set("lh", "Localhost");
            const $e = new Map([["01", "War Training 1"], ["02", "War Training 2"], ["03", "Superfission"], ["04", "Ultrafission"], ["05", "Arena"]]);
            var Ye;
            !function(t) {
                t[t._7684 = 0] = "_7684",
                t[t._4780 = 1] = "_4780",
                t[t._6701 = 2] = "_6701",
                t[t._3410 = 3] = "_3410",
                t[t._4419 = 4] = "_4419",
                t[t._7153 = 5] = "_7153",
                t[t._3543 = 6] = "_3543"
            }(Ye || (Ye = {}));
            const Qe = Ye
              , Ve = new class extends i {
                _2672;
                _4807;
                constructor() {
                    super(),
                    this._2672 = null,
                    this._4807 = new Map
                }
                _6468() {
                    const t = document.getElementById("mame-ssb-region-selector");
                    this._2672 = t
                }
                _1933(t, _) {
                    const e = document.createDocumentFragment()
                      , s = new Map;
                    for (const [i,n] of t) {
                        const t = {
                            "mame-ssb-region-option": !0,
                            "mame-ssb-region-option-active": i === _
                        }
                          , o = _t.ZP.createElement("div", {
                            class: t
                        }, i.toUpperCase())
                          , h = r._2624(o);
                        e.appendChild(o),
                        s.set(i, h),
                        o.onclick = ()=>{
                            for (const t of s.values())
                                t._4748("mame-ssb-region-option-active");
                            h._8307("mame-ssb-region-option-active"),
                            this._8079("change", [i, n])
                        }
                    }
                    o._3851((()=>{
                        this._2672.innerHTML = "",
                        this._2672.appendChild(e)
                    }
                    )),
                    this._4807 = s
                }
                _3727(t) {
                    for (const [_,e] of this._4807)
                        _ === t ? e._8307("mame-ssb-region-option-active") : e._4748("mame-ssb-region-option-active")
                }
            }
            ;
            class je extends i {
                _2672;
                _3292;
                _7976;
                constructor(t="", _=0) {
                    super();
                    const e = _t.ZP.createElement("div", {
                        class: "mame-ssb-ms-item"
                    }, _t.ZP.createElement("div", {
                        class: "mame-ssb-ms-item-mode-name"
                    }, t), _t.ZP.createElement("div", {
                        class: "mame-ssb-ms-item-player-count"
                    }, _t.ZP.createElement("i", {
                        class: "iconfont iconfont-person"
                    }), _t.ZP.createElement("div", null, _)));
                    e.onclick = ()=>{
                        this._8079("click")
                    }
                    ,
                    this._2672 = e,
                    this._3292 = r._2624(e.children[0]),
                    this._7976 = r._2624(e.children[1].children[1])
                }
                _8032() {
                    return this._2672
                }
                _1364() {
                    return this._3292._7917
                }
                _3093(t) {
                    this._3292._7917 = t
                }
                _4683(t) {
                    this._7976._7917 = t.toString().padStart(2, "0")
                }
            }
            const Xe = new class extends i {
                _9744;
                _7202;
                _7970;
                _5880;
                _3171;
                constructor() {
                    super(),
                    this._9744 = null,
                    this._7202 = null,
                    this._7970 = new Map,
                    this._5880 = !1,
                    this._3171 = !1
                }
                _6468() {
                    const t = document.getElementById("mame-ssb-mode-selected")
                      , _ = document.getElementById("mame-ssb-ms-list");
                    this._9744 = r._2624(t),
                    this._7202 = r._2624(_),
                    t.onclick = ()=>{
                        this._6536()
                    }
                }
                _7211(t, _) {
                    const e = document.createDocumentFragment()
                      , s = new Map;
                    for (const [i,n] of t) {
                        const t = new je(n);
                        s.set(i, t),
                        t._9070("click", (()=>{
                            this._9744._7917 = n.toUpperCase(),
                            this._8079("change", [i, n])
                        }
                        )),
                        e.appendChild(t._8032()),
                        i === _ && (this._9744._7917 = n.toUpperCase())
                    }
                    this._7970 = s,
                    o._3851((()=>{
                        this._7202._7800.innerHTML = "",
                        this._7202._7800.appendChild(e)
                    }
                    ))
                }
                _1859(t) {
                    for (const [_,e] of t) {
                        const t = this._7970.get(_);
                        void 0 !== t && t._4683(e)
                    }
                }
                _3944(t) {
                    const _ = this._7970.get(t);
                    this._9744._7917 = void 0 === _ ? "UNKNOWN" : _._1364().toUpperCase()
                }
                _6536() {
                    this._5880 ? this._2293() : this._1877()
                }
                _1877() {
                    this._5880 || (this._7202._9798("opacity", "1"),
                    this._7202._9798("visibility", "visible"),
                    this._7202._9798("transform", "translateY(-100%)"),
                    this._5880 = !0,
                    o._3658((()=>{
                        this._5880 && !this._3171 && (window.addEventListener("click", this._6377),
                        this._3171 = !0)
                    }
                    )))
                }
                _2293() {
                    this._5880 && (this._7202._9798("opacity", "0"),
                    this._7202._9798("visibility", "collapse"),
                    this._7202._9798("transform", "translateY(-120%)"),
                    this._5880 = !1,
                    o._3658((()=>{
                        !this._5880 && this._3171 && (window.removeEventListener("click", this._6377),
                        this._3171 = !1)
                    }
                    )))
                }
                _6377 = t=>{
                    t.composedPath().includes(this._7202._7800) || this._2293()
                }
            }
              , ze = new class extends i {
                _5953;
                _7953;
                _4852;
                constructor() {
                    super(),
                    this._5953 = null,
                    this._7953 = !1,
                    this._4852 = !1
                }
                _6468() {
                    const t = document.getElementById("mame-server-settings-box");
                    this._5953 = r._2624(t),
                    Ve._6468(),
                    Ve._9070("change", ((t,_)=>{
                        this._8079("region-change", [t, _])
                    }
                    )),
                    Xe._6468(),
                    Xe._9070("change", ((t,_)=>{
                        this._8079("mode-change", [t, _])
                    }
                    ))
                }
                _2775() {
                    this._7953 ? this._9758() : this._7490()
                }
                _7490() {
                    this._7953 || (this._5953._9798("visibility", "visible"),
                    this._5953._9798("opacity", "1"),
                    this._5953._9798("transform", "translateY(-100%)"),
                    this._7953 = !0,
                    o._3658((()=>{
                        this._7953 && !this._4852 && (window.addEventListener("click", this._4372),
                        this._4852 = !0)
                    }
                    )),
                    this._8079("show"))
                }
                _9758() {
                    this._7953 && (this._5953._9798("visibility", "collapse"),
                    this._5953._9798("opacity", "0"),
                    this._5953._9798("transform", "translateY(-105%)"),
                    this._7953 = !1,
                    o._3658((()=>{
                        !this._7953 && this._4852 && (window.removeEventListener("click", this._4372),
                        this._4852 = !1)
                    }
                    )),
                    this._8079("hide"))
                }
                _4372 = t=>{
                    t.composedPath().includes(this._5953._7800) || this._9758()
                }
                ;
                _1933(t, _) {
                    Ve._1933(t, _)
                }
                _3727(t) {
                    Ve._3727(t)
                }
                _7211(t, _) {
                    Xe._7211(t, _)
                }
                _1859(t) {
                    Xe._1859(t)
                }
                _3944(t) {
                    Xe._3944(t)
                }
            }
              , qe = new class {
                _3152;
                _4867;
                _5455;
                _4818;
                constructor() {
                    this._3152 = null,
                    this._4867 = null,
                    this._5455 = null,
                    this._4818 = null
                }
                _6468() {
                    const t = document.getElementById("mame-server-info-box")
                      , _ = document.getElementById("mame-server-settings-box")
                      , e = document.getElementById("mame-sib-selected-region")
                      , s = document.getElementById("mame-sib-selected-mode")
                      , i = document.getElementById("mame-sib-players-info")
                      , n = document.getElementById("mame-sib-settings-btn");
                    this._3152 = r._2624(e),
                    this._4867 = r._2624(s),
                    this._5455 = r._2624(i),
                    this._4818 = r._2624(n),
                    t.onclick = t=>{
                        t.composedPath().includes(_) || ze._2775()
                    }
                    ,
                    ze._6468(),
                    ze._9070("show", (()=>{
                        this._4818._9798("transform", "rotate(90deg)")
                    }
                    )),
                    ze._9070("hide", (()=>{
                        this._4818._9798("transform", "rotate(0deg)")
                    }
                    ))
                }
                _7298(t) {
                    this._3152._7917 = t.toUpperCase()
                }
                _9568(t) {
                    this._4867._7917 = t.toUpperCase()
                }
                _8294(t, _) {
                    this._5455._7917 = `${t} PLAY | ${_} SPEC`
                }
            }
              , Je = new class {
                _7225;
                _4836;
                constructor() {
                    this._7225 = new Map,
                    this._4836 = 0
                }
                _6468() {
                    for (const t of Ze.keys()) {
                        if ("lh" === t)
                            continue;
                        const _ = new Map;
                        this._7225.set(t, _);
                        for (const t of $e.keys())
                            _.set(t, [0, 0])
                    }
                }
                _6194(t, _) {
                    const e = this._7225.get(t);
                    if (void 0 === e)
                        return [0, 0];
                    const s = e.get(_);
                    return void 0 === s ? [0, 0] : s
                }
                _6813() {
                    if (!ns._1130)
                        return;
                    const t = n._6032
                      , _ = performance.now() < 6e4 ? 5e3 : 1e4;
                    if (!(t - this._4836 < _)) {
                        this._4836 = t;
                        for (const [t,_] of this._7225)
                            for (const e of _.keys()) {
                                const s = `${t}.ryuten.io/server-${e}`
                                  , i = new XMLHttpRequest;
                                i.open("GET", `https://${s}/info`, !0),
                                i.responseType = "json",
                                i.onload = ()=>{
                                    const t = i.response;
                                    _.set(e, [t.players, t.alive || 0])
                                }
                                ,
                                i.onerror = console.error,
                                i.send()
                            }
                    }
                }
            }
            ;
            class ts {
                _5953;
                _2922;
                _5157;
                _4325;
                _9128;
                constructor() {
                    const t = _t.ZP.createElement("div", {
                        class: "mame-brb-team-player",
                        style: "display: none;"
                    }, _t.ZP.createElement("div", {
                        class: "mame-brb-team-player-username"
                    }), _t.ZP.createElement("div", {
                        class: "mame-brb-team-player-preview",
                        style: "display: none;"
                    }), _t.ZP.createElement("div", {
                        class: "mame-brb-team-player-preview",
                        style: "display: none;"
                    }));
                    this._5953 = r._2624(t),
                    this._2922 = r._2624(t.children[0]),
                    this._5157 = r._2624(t.children[1]),
                    this._4325 = r._2624(t.children[2]),
                    this._9128 = {
                        _3394: "",
                        _1333: "",
                        _5957: ""
                    }
                }
                _8032() {
                    return this._5953._7800
                }
                _6749(t) {
                    t !== this._9128._3394 && (this._2922._7917 = t,
                    this._9128._3394 = t,
                    this._2922._9798("display", t.length > 0 ? "block" : "none"))
                }
                _2161(t) {
                    t !== this._9128._1333 && (t.length > 0 ? (this._5157._9798("display", "block"),
                    this._5157._9798("background-image", `url(${t})`)) : this._5157._9798("display", "none"),
                    this._9128._1333 = t)
                }
                _3556(t) {
                    t !== this._9128._5957 && (t.length > 0 ? (this._4325._9798("display", "block"),
                    this._4325._9798("background-image", `url(${t})`)) : this._4325._9798("display", "none"),
                    this._9128._5957 = t)
                }
                _7705() {
                    this._5953._9798("display", "flex")
                }
                _8601() {
                    this._5953._9798("display", "none")
                }
            }
            const _s = new class {
                _7970;
                _9672;
                constructor() {
                    this._7970 = [],
                    this._9672 = ""
                }
                _6468() {
                    const t = document.getElementById("mame-brb-team-players");
                    for (let _ = 0; _ < 5; _++) {
                        const _ = new ts;
                        this._7970.push(_),
                        t.appendChild(_._8032())
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
                    this._9672 = _.toDataURL("image/png")
                }
                _6813(t, _) {
                    const e = t.length
                      , s = Math.min(5, e);
                    for (let e = 0; e < s; ++e) {
                        const s = t[e]
                          , i = this._7970[4 - e]
                          , n = [...s._2102.values()]
                          , o = n[0]
                          , r = n[1];
                        i._6749(s === _ ? "YOU" : s._2562),
                        void 0 !== o && i._2161(o._1633),
                        void 0 !== r && i._3556(r._1633),
                        i._7705()
                    }
                    if (e < 5) {
                        const t = 5 - e;
                        for (let _ = 0; _ < t; ++_) {
                            const t = this._7970[4 - (e + _)];
                            t._6749(""),
                            t._2161(this._9672),
                            t._3556(""),
                            t._7705()
                        }
                    } else if (e > 5) {
                        const t = this._7970[0];
                        t._6749(e - 5 + 1 + " MORE"),
                        t._2161(this._9672),
                        t._3556(""),
                        t._7705()
                    }
                }
            }
              , es = new class extends h {
                _9984;
                _4249;
                _1822;
                _7371;
                constructor() {
                    super("main-menu"),
                    this._9984 = !1,
                    this._4249 = ["", "", "https://i.imgur.com/PzkMI5S.jpg", "https://i.imgur.com/Du8bCMR.png", [...Ze.keys()][0] || "", [...$e.keys()][0] || "", ""],
                    this._1822 = "user-data",
                    this._7371 = 0
                }
                set _4302(t) {
                    this._9984 !== t && (this._9984 = t,
                    ke._4302 = t,
                    Be._4302 = t)
                }
                get _4302() {
                    return this._9984
                }
                _6468() {
                    qe._6468(),
                    _s._6468(),
                    this._7200(),
                    this._9070("transition", (()=>{
                        if (this._1390 && n._4081 - this._7371 > 1e3) {
                            const t = new Set;
                            for (const _ of re._6617.values())
                                t.add(_._9087._3636);
                            _s._6813([...t], Me._3636),
                            this._7371 = n._4081
                        }
                    }
                    ));
                    const t = a._3040.bind(a, a._5781)
                      , _ = document.getElementById("mame-play-btn");
                    _.addEventListener("mouseenter", t),
                    _.addEventListener("click", (()=>{
                        this._8460(),
                        a._3040(a._9611)
                    }
                    ));
                    const e = document.getElementById("mame-spectate-btn");
                    e.addEventListener("mouseenter", t),
                    e.addEventListener("click", (()=>{
                        this._6091(),
                        a._3040(a._9611)
                    }
                    ));
                    const s = document.getElementById("mame-trb-replays-btn");
                    s.addEventListener("mouseenter", t),
                    s.addEventListener("click", (()=>{
                        this._5257(),
                        a._3040(a._9611)
                    }
                    ));
                    const i = document.getElementById("mame-trb-settings-btn");
                    i.addEventListener("mouseenter", t),
                    i.addEventListener("click", (()=>{
                        this._5061(),
                        a._3040(a._9611)
                    }
                    ));
                    const o = document.getElementById("mame-trb-shop-btn");
                    o.addEventListener("mouseenter", t),
                    o.addEventListener("click", (()=>{
                        pe._9119 ? (ns._5626(fe),
                        a._3040(a._9611)) : u._7225("Shop", "Please login first.")
                    }
                    ));
                    const r = document.getElementById("mame-trb-inventory-btn");
                    r.addEventListener("mouseenter", t),
                    r.addEventListener("click", (()=>{
                        pe._9119 ? (ns._5626(Ae),
                        a._3040(a._9611)) : u._7225("Inventory", "Please login first.")
                    }
                    ));
                    const h = document.getElementById("mame-trb-user-data-level");
                    h.addEventListener("mouseenter", t),
                    h.addEventListener("click", (()=>{
                        pe._9119 ? (De._2775(),
                        a._3040(a._9611)) : u._7225("Leveling up", "Please login first.")
                    }
                    )),
                    Ue._1754 = this._4249[Qe._3543],
                    Me._1754 = this._4249[Qe._3543],
                    Ue._9070("pin-change", (()=>{
                        this._4249[Qe._3543] = Ue._1754,
                        Me._1754 = Ue._1754,
                        this._7597()
                    }
                    )),
                    Ue._4543 = this._4249[Qe._7684],
                    Me._4543 = this._4249[Qe._7684],
                    Ue._9070("team-change", (()=>{
                        this._4249[Qe._7684] = Ue._4543,
                        Me._4543 = Ue._4543,
                        this._7597()
                    }
                    ));
                    const c = this._4249[Qe._7153]
                      , l = ($e.get(c) || "Select game mode").toUpperCase();
                    qe._9568(l),
                    ze._7211($e, c || $e.keys().next().value),
                    ze._9070("mode-change", ((t,_)=>{
                        this._4249[Qe._7153] = t,
                        this._7597(),
                        Pe._8589(this._4249[Qe._4419], t),
                        qe._9568(_)
                    }
                    ));
                    const d = this._4249[Qe._4419]
                      , m = (Ze.get(d) || "select region").toUpperCase();
                    qe._7298(m),
                    ze._1933(Ze, d || Ze.keys().next().value),
                    ze._9070("region-change", ((t,_)=>{
                        this._4249[Qe._4419] = t,
                        this._7597(),
                        Pe._8589(t, this._4249[Qe._7153]),
                        qe._7298(_)
                    }
                    )),
                    ke._6468(),
                    this._9070("transition", (()=>{
                        this._1390 && ke._6813()
                    }
                    )),
                    Be._9070("change-skin", (()=>{
                        ns._5626(Fe)
                    }
                    )),
                    ke._6198._2598 = this._4249[Qe._6701],
                    ke._6198._1333 = this._4249[Qe._3410],
                    Me._5660(0, this._4249[Qe._6701]),
                    Me._5660(1, this._4249[Qe._3410]),
                    Fe._9070("select", (()=>{
                        const t = Be._1595
                          , _ = Fe._3046;
                        Me._5660(t, _),
                        0 === t ? (ke._6198._2598 = _,
                        this._4249[Qe._6701] = _) : 1 === t && (ke._6198._1333 = _,
                        this._4249[Qe._3410] = _),
                        Me._5660(t, _),
                        this._7597()
                    }
                    ));
                    const f = /^#(\w{2})(\d)-ts(\d)-([A-Z0-9]{5})$/;
                    if (f.test(location.hash)) {
                        const t = f.exec(location.hash)
                          , _ = t[1]
                          , e = `5${t[3]}`
                          , s = t[4];
                        Pe._8589(_, e, s),
                        qe._7298((Ze.get(_) || "None").toUpperCase()),
                        qe._9568("TOURNAMENT")
                    } else
                        Pe._8589(this._4249[Qe._4419], this._4249[Qe._7153]);
                    xe._9070("readystatechange", (()=>{
                        Me._4540 || (xe._4739 = !xe._4739,
                        Ne._8231(xe._4739))
                    }
                    )),
                    setInterval((()=>{
                        if (!this._1390)
                            return;
                        const t = this._4249[Qe._4419]
                          , _ = Je._7225.get(t);
                        if (void 0 === _)
                            return;
                        const e = this._4249[Qe._7153]
                          , s = _.get(e);
                        if (void 0 === s)
                            return;
                        const i = new Map;
                        for (const [t,e] of _)
                            i.set(t, e[0]);
                        ze._1859(i),
                        qe._8294(s[1], s[0] - s[1])
                    }
                    ), 2e3)
                }
                _8460() {
                    D_._3040()
                }
                _6091() {
                    ns._2006()
                }
                _5061() {
                    ns._5626(bt)
                }
                _5257() {
                    ns._5626(y_)
                }
                _7597() {
                    localStorage.setItem(this._1822, JSON.stringify(this._4249))
                }
                _7200() {
                    try {
                        const t = localStorage.getItem(this._1822);
                        if ("string" == typeof t) {
                            const _ = JSON.parse(t);
                            if (Array.isArray(_))
                                for (let t = 0; t < this._4249.length; t++) {
                                    const e = _[t];
                                    "string" == typeof e && e.length > 0 && (this._4249[t] = e)
                                }
                        }
                    } catch (t) {
                        console.warn("Corrupt user data: ", t),
                        localStorage.removeItem(this._1822)
                    }
                }
                _3831(t) {
                    const _ = document.getElementById("login-options")
                      , e = document.getElementById("logout");
                    t ? (_.style.display = "none",
                    e.style.display = "flex") : (_.style.display = "flex",
                    e.style.display = "none")
                }
            }
              , ss = new class extends h {
                constructor() {
                    super("in-game-menu")
                }
            }
              , is = new class extends h {
                _9410;
                _6336;
                _6422;
                constructor() {
                    super("selection-menu");
                    const t = document.getElementById("selection-menu-title")
                      , _ = document.getElementById("selection-menu-items")
                      , e = document.getElementById("selection-menu-back");
                    e.addEventListener("click", a._3040.bind(a, a._9611)),
                    e.addEventListener("mouseenter", a._3040.bind(a, a._5781)),
                    this._9410 = r._2624(t),
                    this._6336 = _,
                    this._6422 = e
                }
                _2624(t, _, e, s) {
                    const i = document.createDocumentFragment()
                      , n = [];
                    for (const [t,o] of _) {
                        const _ = document.createElement("div")
                          , r = ()=>{
                            for (const t of n)
                                t.removeEventListener("click", r);
                            void 0 !== s && this._6422.removeEventListener("click", s),
                            e(o, t),
                            a._3040(a._5104)
                        }
                        ;
                        _.classList.add("selection-menu-item");
                        const h = o.split("\n");
                        if (1 === h.length)
                            _.textContent = h[0];
                        else {
                            const t = _t.ZP.createElement("div", null, h[0])
                              , e = _t.ZP.createElement("div", {
                                className: "selection-menu-item-sub"
                            }, h[1]);
                            _.appendChild(t),
                            _.appendChild(e)
                        }
                        _.addEventListener("click", r),
                        _.addEventListener("mouseenter", a._3040.bind(a, a._5781)),
                        n.push(_),
                        i.appendChild(_)
                    }
                    this._9410._7917 = t.toUpperCase(),
                    this._6336.innerHTML = "",
                    this._6336.appendChild(i),
                    void 0 !== s && this._6422.addEventListener("click", s, {
                        once: !0
                    })
                }
            }
              , ns = new class {
                _5780;
                _7081;
                _7085;
                constructor() {
                    this._5780 = new Map,
                    this._7081 = [],
                    this._7085 = null
                }
                get _1130() {
                    return this._7081.length > 0
                }
                get _6856() {
                    return this._7081.length > 0 ? this._7081[this._7081.length - 1]._6808 : ""
                }
                _6468() {
                    es._6468(),
                    bt._6468(),
                    Fe._6468(),
                    y_._6468(),
                    fe._6468(),
                    Ae._6468(),
                    this._8393(es),
                    this._8393(ss),
                    this._8393(bt),
                    this._8393(is),
                    this._8393(Fe),
                    this._8393(y_),
                    this._8393(fe),
                    this._8393(Ae),
                    this._7085 = document.getElementById("arc-widget-container"),
                    this._7085 ? this._7085.style.setProperty("transition", "opacity 200ms") : setTimeout((()=>{
                        u._7225("Adblocker detected", "Please disable your adblocker to help support the game.", 3e4)
                    }
                    ), 5e3)
                }
                _6813() {
                    for (const t of this._5780.values())
                        t._4190()
                }
                _5626(t) {
                    this._7081.includes(t) ? console.error(`Layer <${t._6808}> is already present in the stack.`) : (this._7081.length > 0 && this._7081[this._7081.length - 1]._8601(),
                    this._7081.push(t),
                    t._7705(),
                    1 === this._7081.length && this._7085 && (this._7085.style.setProperty("opacity", "1", "important"),
                    this._7085.style.pointerEvents = "auto"))
                }
                _2006() {
                    this._7081.length < 1 ? console.error("Stack is empty. Failed to pop.") : (this._7081.pop()._8601(),
                    this._7081.length > 0 && this._7081[this._7081.length - 1]._7705(),
                    0 === this._7081.length && this._7085 && (this._7085.style.setProperty("opacity", "0", "important"),
                    this._7085.style.pointerEvents = "none"))
                }
                _4151() {
                    for (; this._7081.length > 0; )
                        this._7081.pop()._8601();
                    this._7085 && (this._7085.style.opacity = "0 !important",
                    this._7085.style.setProperty("opacity", "0", "important"),
                    this._7085.style.pointerEvents = "none")
                }
                _8393(t) {
                    this._5780.set(t._6808, t)
                }
            }
            ;
            class os {
                _5953;
                _9740;
                _8066;
                _9424;
                constructor() {
                    const t = _t.ZP.createElement("div", {
                        className: "team-info-entry"
                    }, _t.ZP.createElement("div", {
                        className: "team-info-energy"
                    }), _t.ZP.createElement("div", {
                        className: "team-info-nick"
                    }));
                    this._5953 = r._2624(t),
                    this._9740 = r._2624(t.children[0]),
                    this._8066 = r._2624(t.children[1]),
                    this._9424 = !0
                }
                get _7800() {
                    return this._5953._7800
                }
                _6813(t, _) {
                    this._9740._7917 = t < 1e3 ? t.toFixed(0) : (t / 1e3).toFixed(1) + "k",
                    this._8066._7917 = _ || "Unnamed player"
                }
                _7705() {
                    this._9424 || (this._5953._9798("opacity", "1"),
                    this._9424 = !0)
                }
                _8601() {
                    this._9424 && (this._5953._9798("opacity", "0"),
                    this._9424 = !1)
                }
            }
            const rs = new class {
                _5953;
                _5182;
                _7953;
                constructor() {
                    this._5953 = null,
                    this._5182 = [],
                    this._7953 = !0
                }
                _6468() {
                    const t = document.getElementById("team-info");
                    for (let _ = 0; _ < 8; _++) {
                        const _ = new os;
                        this._5182.push(_),
                        t.appendChild(_._7800)
                    }
                    this._5953 = r._2624(t)
                }
                _6813() {
                    if ("show" !== Q.SHOW_TEAM_LIST._7142())
                        return void this._8601();
                    this._7705();
                    let t = [];
                    for (const _ of re._6617.values())
                        _._1196 && _._9087._3636._6808 !== Me._6646 && t.push([_._8445, _._9087._3636._2562]);
                    t.sort(((t,_)=>_[0] - t[0])),
                    t = t.slice(0, 6);
                    for (let _ = 0; _ < 2; _++)
                        Me._4536[_] && t.push([Me._7813[_], Me._2562]);
                    for (let _ = 0; _ < 8; _++) {
                        const e = this._5182[_];
                        if (_ < t.length) {
                            const s = t[_];
                            e._6813(s[0], s[1]),
                            e._7705()
                        } else
                            e._8601()
                    }
                }
                _7705() {
                    this._7953 || (this._5953._9798("display", "flex"),
                    this._7953 = !0)
                }
                _8601() {
                    this._7953 && (this._5953._9798("display", "none"),
                    this._7953 = !1)
                }
            }
              , hs = new class {
                _5953;
                _1519;
                _6791;
                _6966;
                _7566;
                _7953;
                constructor() {
                    this._5953 = null,
                    this._1519 = document.getElementById("minimap"),
                    this._6791 = this._1519.getContext("2d"),
                    this._6966 = 180,
                    this._7566 = 2 * Math.PI,
                    this._7953 = !0
                }
                _6468() {
                    this._1519.width = this._6966,
                    this._1519.height = this._6966,
                    this._5953 = r._2624(this._1519)
                }
                _6813() {
                    "show" === Q.SHOW_MINIMAP._7142() ? (this._7705(),
                    this._6791.clearRect(0, 0, this._6966, this._6966),
                    this._1492(),
                    this._3299()) : this._8601()
                }
                _1492() {
                    const t = this._6791
                      , _ = re._7185
                      , e = (65535 - _) / 2;
                    t.textAlign = "center",
                    t.textBaseline = "bottom",
                    t.font = "600 12px 'Titillium Web'",
                    t.fillStyle = "#ffffff",
                    t.strokeStyle = "#000000",
                    t.lineWidth = 2,
                    t.beginPath();
                    for (const s of re._6617.values()) {
                        if (s._9087._3636._6808 === Me._6646)
                            continue;
                        if (!s._1196)
                            continue;
                        s._5756();
                        const i = (s._4563 - e) * (this._6966 / _) | 0
                          , n = (s._2266 - e) * (this._6966 / _) | 0
                          , o = 4
                          , r = s._9087._3636._2562 || "unnamed player";
                        t.moveTo(i + o, n),
                        t.arc(i, n, o, 0, this._7566, !0),
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
                _3299() {
                    const t = this._6791
                      , _ = re._7185
                      , e = (65535 - _) / 2;
                    t.beginPath();
                    for (let s = 0; s < 2; s++)
                        if (Me._4536[s]) {
                            const i = 4
                              , n = Me._8870[s]
                              , o = (n._4563 - e) * (this._6966 / _) | 0
                              , r = (n._2266 - e) * (this._6966 / _) | 0;
                            t.moveTo(o + i, r),
                            t.arc(o, r, i, 0, this._7566, !0)
                        }
                    if (!Me._4540) {
                        const s = 6
                          , i = (J_._5130._4563 - e) * (this._6966 / _) | 0
                          , n = (J_._5130._2266 - e) * (this._6966 / _) | 0;
                        t.moveTo(i + s, n),
                        t.arc(i, n, s, 0, this._7566, !0)
                    }
                    t.closePath(),
                    t.fillStyle = "#ffffff",
                    t.strokeStyle = "#000000",
                    t.lineWidth = 1,
                    t.fill(),
                    t.stroke()
                }
                _7705() {
                    this._7953 || (this._5953._9798("display", "block"),
                    this._7953 = !0)
                }
                _8601() {
                    this._7953 && (this._5953._9798("display", "none"),
                    this._7953 = !1)
                }
            }
              , as = new class {
                _5953;
                _4833;
                _7953;
                constructor() {
                    this._5953 = null,
                    this._4833 = 0,
                    this._7953 = !0
                }
                _6468() {
                    const t = document.getElementById("fps");
                    this._5953 = r._2624(t)
                }
                _4274() {
                    this._4833++
                }
                _6813() {
                    "show" === Q.SHOW_METRICS._7142() ? (this._7705(),
                    this._5953._7917 = `FPS: ${this._4833} | PING: ${Pe._9324 >>> 0}ms`,
                    this._4833 = 0) : this._8601()
                }
                _7705() {
                    this._7953 || (this._5953._9798("display", "block"),
                    this._7953 = !0)
                }
                _8601() {
                    this._7953 && (this._5953._9798("display", "none"),
                    this._7953 = !1)
                }
            }
              , cs = new class {
                _5953;
                _7953;
                _4617;
                _2567;
                _9671;
                constructor() {
                    this._5953 = null,
                    this._7953 = !1,
                    this._4617 = 0,
                    this._2567 = 0,
                    this._9671 = ""
                }
                _6468() {
                    const t = document.getElementById("timer");
                    this._5953 = r._2624(t)
                }
                _4251(t, _) {
                    this._4617 = t,
                    this._2567 = n._4081,
                    this._9671 = _,
                    this._7953 || this._7705()
                }
                _6813() {
                    if (!this._7953)
                        return;
                    const t = (n._4081 - this._2567) / 1e3
                      , _ = this._4617 - t
                      , e = (_ % 60 >>> 0).toFixed(0).padStart(2, "0")
                      , s = (_ % 3600 / 60 >>> 0).toFixed(0).padStart(2, "0")
                      , i = (_ % 86400 / 3600 >>> 0).toFixed(0).padStart(2, "0");
                    this._5953._7917 = `${this._9671} - ${i}:${s}:${e}`,
                    _ <= 0 && this._8601()
                }
                _7705() {
                    this._7953 || (this._5953._9798("display", "block"),
                    this._7953 = !0)
                }
                _8601() {
                    this._7953 && (this._5953._9798("display", "none"),
                    this._7953 = !1)
                }
            }
              , ls = new class {
                _5953;
                _9424;
                constructor() {
                    this._5953 = null,
                    this._9424 = !1
                }
                _6468() {
                    const t = document.getElementById("movement-stopped");
                    this._5953 = r._2624(t)
                }
                _6813() {
                    D_._6790 && (Me._4540 || J_._1919 === z._9800) ? this._7705() : this._8601()
                }
                _7705() {
                    this._9424 || (this._5953._9798("display", "block"),
                    this._9424 = !0)
                }
                _8601() {
                    this._9424 && (this._5953._9798("display", "none"),
                    this._9424 = !1)
                }
            }
              , us = new class {
                _5953;
                _8075;
                _9424;
                constructor() {
                    this._5953 = {},
                    this._8075 = 0,
                    this._9424 = !1
                }
                _6468() {
                    const t = document.getElementById("huds");
                    this._5953 = r._2624(t),
                    rs._6468(),
                    ue._6468(),
                    B_._6468(),
                    W_._6468(),
                    hs._6468(),
                    as._6468(),
                    cs._6468(),
                    Ce._6468(),
                    Oe._6468(),
                    de._6468(),
                    we._6468(),
                    Ee._6468(),
                    ve._6468(),
                    ls._6468(),
                    Te._6468(),
                    Ie._6468()
                }
                _6813() {
                    as._4274(),
                    ns._1130 || te._2026 ? this._9424 && this._9758() : this._9424 || this._7490(),
                    n._4081 - this._8075 > 1e3 && (rs._6813(),
                    ue._6813(),
                    as._6813(),
                    cs._6813(),
                    de._6813(),
                    this._8075 = n._4081),
                    B_._6813(),
                    hs._6813(),
                    we._6813(),
                    Ee._6813(),
                    ve._6813(),
                    ls._6813(),
                    Te._6813(),
                    Ie._6813()
                }
                _7490() {
                    this._5953._9798("opacity", "1"),
                    this._9424 = !0
                }
                _9758() {
                    this._5953._9798("opacity", "0"),
                    this._9424 = !1
                }
            }
              , ds = new class {
                _6468() {
                    C_._6468(),
                    u._6468(),
                    ns._6468(),
                    us._6468(),
                    F_._6468(),
                    G_._6468(),
                    a._6468()
                }
                _6813() {
                    ns._6813(),
                    us._6813(),
                    G_._6813()
                }
            }
              , ms = new class {
                async _6468() {
                    c.P6Y.skipHello(),
                    await pe._2584(),
                    Pt._2683("Starting up"),
                    q._6468(),
                    Z_._6468(),
                    D_._6468(),
                    Je._6468(),
                    await new Promise((t=>{
                        window.requestAnimationFrame((()=>{
                            ds._6468(),
                            t()
                        }
                        ))
                    }
                    )),
                    await new Promise((t=>{
                        window.requestAnimationFrame((()=>{
                            q_._6468(),
                            t()
                        }
                        ))
                    }
                    )),
                    setInterval((()=>{
                        Ne._2224()
                    }
                    ), 5e3),
                    setInterval((()=>{
                        Je._6813()
                    }
                    ), 1e3),
                    ns._5626(es)
                }
                _4251() {
                    window.requestAnimationFrame(this._4491.bind(this))
                }
                _4491() {
                    o._1081(),
                    n._6813(),
                    te._6813(),
                    Me._6813(),
                    J_._6813(),
                    re._6813(),
                    q_._6813(),
                    ds._6813(),
                    o._3065(),
                    window.requestAnimationFrame(this._4491.bind(this))
                }
            }
              , fs = new class {
                async _7548() {
                    this._2766(),
                    await this._4473(),
                    await this._2289()
                }
                _2766() {
                    "function" == typeof HTMLImageElement.prototype.decode || Mt._7705("image_decode_not_supported", "please try updating or changing your browser")
                }
                async _4473() {
                    const t = new Image;
                    t.src = "data:image/webp;base64,UklGRkAAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAIAAAAAAFZQOCAYAAAAMAEAnQEqAQABAAFAJiWkAANwAP79NmgA";
                    try {
                        await t.decode()
                    } catch (t) {
                        Mt._7705("webp_not_supported", "please try updating or changing your browser")
                    }
                }
                async _2289() {
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
              , ps = "AVWTLJGI0O"
              , gs = new class {
                async _1840(t) {
                    const _ = document.createElement("canvas").getContext("2d");
                    if (null === _)
                        return void console.warn("[font loader] > failed to create a Canvas2D context.");
                    const e = [];
                    for (const s of t)
                        for (const t of s._5703) {
                            const i = this._4839(_, s._1108, t);
                            e.push(i)
                        }
                    await Promise.all(e)
                }
                async _4839(t, _, e) {
                    const s = performance.now() + 3e4;
                    let i = !1;
                    for (; performance.now() < s; ) {
                        t.font = `${e} 36px "${_}", serif`;
                        const s = t.measureText(ps);
                        t.font = `${e} 36px serif`;
                        const n = t.measureText(ps);
                        if (i = s.width !== n.width,
                        i)
                            break;
                        await this._2514(1e3)
                    }
                    i || console.warn(`[font loader] > failed to load a font - ${_}:${e}`)
                }
                async _2514(t) {
                    return new Promise((_=>{
                        window.setTimeout(_, t)
                    }
                    ))
                }
            }
            ;
            function Es(t) {
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
                Pt._3114(5),
                await (async()=>{
                    try {
                        const t = await fetch(`version.json?timestamp=${Date.now()}`, {
                            cache: "no-store"
                        })
                          , {version: _} = await t.json();
                        if ("0.17.1" !== _) {
                            const {origin: t, pathname: _, search: e} = window.location
                              , s = new URLSearchParams(e)
                              , i = parseInt(s.get("update-try") ?? "1", 10);
                            if (5 === i)
                                return;
                            s.set("version", "0.17.1"),
                            s.set("update-try", `${i + 1}`),
                            window.location.href = `${t}${_}?${s.toString()}`
                        }
                    } catch (t) {
                        console.error(t)
                    }
                }
                )(),
                Pt._3114(7),
                await fs._7548(),
                Pt._3114(8),
                await Pt._6468(),
                Pt._3114(10),
                await Rt._1840(),
                Pt._3114(80),
                Pt._2683("Loading game fonts"),
                await gs._1840([{
                    _1108: "Titillium Web",
                    _5703: [400, 600]
                }]),
                Pt._3114(90),
                await ms._6468(),
                Pt._3114(100),
                await new Promise((t=>{
                    window.setTimeout(t, 500)
                }
                )),
                Pt._5099(),
                ms._4251(),
                window.addEventListener("beforeunload", Es)
            }
            )().catch(console.error),
            e.e(767).then(e.bind(e, 767))
        }
        ,
        518: t=>{
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
        ,
        503: ()=>{}
    }, s = {};
    function i(t) {
        var _ = s[t];
        if (void 0 !== _)
            return _.exports;
        var n = s[t] = {
            id: t,
            loaded: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i),
        n.loaded = !0,
        n.exports
    }
    i.m = e,
    t = [],
    i.O = (_,e,s,n)=>{
        if (!e) {
            var o = 1 / 0;
            for (c = 0; c < t.length; c++) {
                for (var [e,s,n] = t[c], r = !0, h = 0; h < e.length; h++)
                    (!1 & n || o >= n) && Object.keys(i.O).every((t=>i.O[t](e[h]))) ? e.splice(h--, 1) : (r = !1,
                    n < o && (o = n));
                if (r) {
                    t.splice(c--, 1);
                    var a = s();
                    void 0 !== a && (_ = a)
                }
            }
            return _
        }
        n = n || 0;
        for (var c = t.length; c > 0 && t[c - 1][2] > n; c--)
            t[c] = t[c - 1];
        t[c] = [e, s, n]
    }
    ,
    i.n = t=>{
        var _ = t && t.__esModule ? ()=>t.default : ()=>t;
        return i.d(_, {
            a: _
        }),
        _
    }
    ,
    i.d = (t,_)=>{
        for (var e in _)
            i.o(_, e) && !i.o(t, e) && Object.defineProperty(t, e, {
                enumerable: !0,
                get: _[e]
            })
    }
    ,
    i.f = {},
    i.e = t=>Promise.all(Object.keys(i.f).reduce(((_,e)=>(i.f[e](t, _),
    _)), [])),
    i.u = t=>"chunk-" + t + ".js?eb43296c",
    i.miniCssF = t=>"bundle." + t + ".css?17f2d472",
    i.o = (t,_)=>Object.prototype.hasOwnProperty.call(t, _),
    _ = {},
    i.l = (t,e,s,n)=>{
        if (_[t])
            _[t].push(e);
        else {
            var o, r;
            if (void 0 !== s)
                for (var h = document.getElementsByTagName("script"), a = 0; a < h.length; a++) {
                    var c = h[a];
                    if (c.getAttribute("src") == t) {
                        o = c;
                        break
                    }
                }
            o || (r = !0,
            (o = document.createElement("script")).charset = "utf-8",
            o.timeout = 120,
            i.nc && o.setAttribute("nonce", i.nc),
            o.src = t),
            _[t] = [e];
            var l = (e,s)=>{
                o.onerror = o.onload = null,
                clearTimeout(u);
                var i = _[t];
                if (delete _[t],
                o.parentNode && o.parentNode.removeChild(o),
                i && i.forEach((t=>t(s))),
                e)
                    return e(s)
            }
              , u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: o
            }), 12e4);
            o.onerror = l.bind(null, o.onerror),
            o.onload = l.bind(null, o.onload),
            r && document.head.appendChild(o)
        }
    }
    ,
    i.r = t=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    i.nmd = t=>(t.paths = [],
    t.children || (t.children = []),
    t),
    i.p = "",
    (()=>{
        if ("undefined" != typeof document) {
            var t = {
                937: 0
            };
            i.f.miniCss = (_,e)=>{
                t[_] ? e.push(t[_]) : 0 !== t[_] && {
                    767: 1
                }[_] && e.push(t[_] = (t=>new Promise(((_,e)=>{
                    var s = i.miniCssF(t)
                      , n = i.p + s;
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
                    )(s, n))
                        return _();
                    ((t,_,e,s,i)=>{
                        var n = document.createElement("link");
                        n.rel = "stylesheet",
                        n.type = "text/css",
                        n.onerror = n.onload = e=>{
                            if (n.onerror = n.onload = null,
                            "load" === e.type)
                                s();
                            else {
                                var o = e && ("load" === e.type ? "missing" : e.type)
                                  , r = e && e.target && e.target.href || _
                                  , h = new Error("Loading CSS chunk " + t + " failed.\n(" + r + ")");
                                h.code = "CSS_CHUNK_LOAD_FAILED",
                                h.type = o,
                                h.request = r,
                                n.parentNode && n.parentNode.removeChild(n),
                                i(h)
                            }
                        }
                        ,
                        n.href = _,
                        document.head.appendChild(n)
                    }
                    )(t, n, 0, _, e)
                }
                )))(_).then((()=>{
                    t[_] = 0
                }
                ), (e=>{
                    throw delete t[_],
                    e
                }
                )))
            }
        }
    }
    )(),
    (()=>{
        var t = {
            937: 0
        };
        i.f.j = (_,e)=>{
            var s = i.o(t, _) ? t[_] : void 0;
            if (0 !== s)
                if (s)
                    e.push(s[2]);
                else {
                    var n = new Promise(((e,i)=>s = t[_] = [e, i]));
                    e.push(s[2] = n);
                    var o = i.p + i.u(_)
                      , r = new Error;
                    i.l(o, (e=>{
                        if (i.o(t, _) && (0 !== (s = t[_]) && (t[_] = void 0),
                        s)) {
                            var n = e && ("load" === e.type ? "missing" : e.type)
                              , o = e && e.target && e.target.src;
                            r.message = "Loading chunk " + _ + " failed.\n(" + n + ": " + o + ")",
                            r.name = "ChunkLoadError",
                            r.type = n,
                            r.request = o,
                            s[1](r)
                        }
                    }
                    ), "chunk-" + _, _)
                }
        }
        ,
        i.O.j = _=>0 === t[_];
        var _ = (_,e)=>{
            var s, n, [o,r,h] = e, a = 0;
            if (o.some((_=>0 !== t[_]))) {
                for (s in r)
                    i.o(r, s) && (i.m[s] = r[s]);
                if (h)
                    var c = h(i)
            }
            for (_ && _(e); a < o.length; a++)
                n = o[a],
                i.o(t, n) && t[n] && t[n][0](),
                t[n] = 0;
            return i.O(c)
        }
          , e = self.webpackChunk = self.webpackChunk || [];
        e.forEach(_.bind(null, 0)),
        e.push = _.bind(null, e.push.bind(e))
    }
    )();
    var n = i.O(void 0, [216], (()=>i(770)));
    n = i.O(n)
}
)();
