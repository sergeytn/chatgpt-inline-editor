/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function () {
    'use strict';
    var b40918;
    function jbjh10(y2j77) {
        var i46w36 = 0x0;
        return function () {
            return i46w36 < y2j77['length'] ? {
                'done': !0x1,
                'value': y2j77[i46w36++]
            } : { 'done': !0x0 };
        };
    }
    var smzyz6z = 'function' == typeof Object['defineProperties'] ? Object['defineProperty'] : function (su1dd4h1z, b2150zcsp, iesz7) {
        if (su1dd4h1z == Array['prototype'] || su1dd4h1z == Object['prototype'])
            return su1dd4h1z;
        su1dd4h1z[b2150zcsp] = iesz7['value'];
        return su1dd4h1z;
    };
    function f4s155t(p5m6qf8) {
        p5m6qf8 = [
            'object' == typeof globalThis && globalThis,
            p5m6qf8,
            'object' == typeof window && window,
            'object' == typeof self && self,
            'object' == typeof global && global
        ];
        for (var yshu3 = 0x0; yshu3 < p5m6qf8['length']; ++yshu3) {
            var jwzr1 = p5m6qf8[yshu3];
            if (jwzr1 && jwzr1['Math'] == Math)
                return jwzr1;
        }
        throw Error('Cannot\x20find\x20global\x20object');
    }
    var yr7vj3d6q = f4s155t(this);
    function o371v5(ph7427, xy60u1) {
        if (xy60u1)
            hib7o: {
                var drgqzv0l = yr7vj3d6q;
                ph7427 = ph7427['split']('.');
                for (var n5tb161 = 0x0; n5tb161 < ph7427['length'] - 0x1; n5tb161++) {
                    var n3o442hnz = ph7427[n5tb161];
                    if (!(n3o442hnz in drgqzv0l))
                        break hib7o;
                    drgqzv0l = drgqzv0l[n3o442hnz];
                }
                ph7427 = ph7427[ph7427['length'] - 0x1];
                n5tb161 = drgqzv0l[ph7427];
                xy60u1 = xy60u1(n5tb161);
                xy60u1 != n5tb161 && null != xy60u1 && smzyz6z(drgqzv0l, ph7427, {
                    'configurable': !0x0,
                    'writable': !0x0,
                    'value': xy60u1
                });
            }
    }
    o371v5('Symbol', function (j54zhn6) {
        function q7q6xcq9(s32f5f) {
            if (this instanceof q7q6xcq9)
                throw new TypeError('Symbol\x20is\x20not\x20a\x20constructor');
            return new lspny('jscomp_symbol_' + (s32f5f || '') + '_' + p34p1lca++, s32f5f);
        }
        function lspny(ij244, da55l8a) {
            this['g'] = ij244;
            smzyz6z(this, 'description', {
                'configurable': !0x0,
                'writable': !0x0,
                'value': da55l8a
            });
        }
        if (j54zhn6)
            return j54zhn6;
        lspny['prototype']['toString'] = function () {
            return this['g'];
        };
        var p34p1lca = 0x0;
        return q7q6xcq9;
    });
    o371v5('Symbol.iterator', function (voj04m) {
        if (voj04m)
            return voj04m;
        voj04m = Symbol('Symbol.iterator');
        for (var lfs0vz8 = 'Array\x20Int8Array\x20Uint8Array\x20Uint8ClampedArray\x20Int16Array\x20Uint16Array\x20Int32Array\x20Uint32Array\x20Float32Array\x20Float64Array'['split']('\x20'), b2440 = 0x0; b2440 < lfs0vz8['length']; b2440++) {
            var z42do4 = yr7vj3d6q[lfs0vz8[b2440]];
            'function' === typeof z42do4 && 'function' != typeof z42do4['prototype'][voj04m] && smzyz6z(z42do4['prototype'], voj04m, {
                'configurable': !0x0,
                'writable': !0x0,
                'value': function () {
                    return yc023mqg(jbjh10(this));
                }
            });
        }
        return voj04m;
    });
    function yc023mqg(l2pt9zk4v) {
        l2pt9zk4v = { 'next': l2pt9zk4v };
        l2pt9zk4v[Symbol['iterator']] = function () {
            return this;
        };
        return l2pt9zk4v;
    }
    function y5jf9283(mg99852i) {
        var h1evhu19 = 'undefined' != typeof Symbol && Symbol['iterator'] && mg99852i[Symbol['iterator']];
        return h1evhu19 ? h1evhu19['call'](mg99852i) : { 'next': jbjh10(mg99852i) };
    }
    function v8f85q69(ww53rkk7) {
        if (!(ww53rkk7 instanceof Array)) {
            ww53rkk7 = y5jf9283(ww53rkk7);
            for (var r4t4343z8, l3919te20 = []; !(r4t4343z8 = ww53rkk7['next']())['done'];)
                l3919te20['push'](r4t4343z8['value']);
            ww53rkk7 = l3919te20;
        }
        return ww53rkk7;
    }
    var vj2u0m7;
    if ('function' == typeof Object['setPrototypeOf'])
        vj2u0m7 = Object['setPrototypeOf'];
    else {
        var uz2dn27;
        ouu8q: {
            var y114w4k = { 'a': !0x0 }, g96js = {};
            try {
                g96js['__proto__'] = y114w4k;
                uz2dn27 = g96js['a'];
                break ouu8q;
            } catch (lsa6sb7k3) {
            }
            uz2dn27 = !0x1;
        }
        vj2u0m7 = uz2dn27 ? function (i8522l7d, mby1t8v8) {
            i8522l7d['__proto__'] = mby1t8v8;
            if (i8522l7d['__proto__'] !== mby1t8v8)
                throw new TypeError(i8522l7d + '\x20is\x20not\x20extensible');
            return i8522l7d;
        } : null;
    }
    var d4yxt = vj2u0m7;
    function cdy56() {
        this['u'] = !0x1;
        this['h'] = null;
        this['Oa'] = void 0x0;
        this['g'] = 0x1;
        this['ea'] = 0x0;
        this['i'] = null;
    }
    function muf39e(s5w11sgm8) {
        if (s5w11sgm8['u'])
            throw new TypeError('Generator\x20is\x20already\x20running');
        s5w11sgm8['u'] = !0x0;
    }
    cdy56['prototype']['O'] = function (f465yuq4o) {
        this['Oa'] = f465yuq4o;
    };
    function tu7xte(rfs0b2, u0i29fx) {
        rfs0b2['i'] = {
            'ab': u0i29fx,
            'fb': !0x0
        };
        rfs0b2['g'] = rfs0b2['ea'];
    }
    cdy56['prototype']['return'] = function (wqhcu1x9) {
        this['i'] = { 'return': wqhcu1x9 };
        this['g'] = this['ea'];
    };
    function u44jy(d6g8m69oo, n119f49wl) {
        d6g8m69oo['g'] = 0x3;
        return { 'value': n119f49wl };
    }
    function v5abtc(bb85u3o7b) {
        this['g'] = new cdy56();
        this['h'] = bb85u3o7b;
    }
    function xho4n013(hh6o79deu, us37eu1h6) {
        muf39e(hh6o79deu['g']);
        var rm1ke068 = hh6o79deu['g']['h'];
        if (rm1ke068)
            return eo22bq2ph(hh6o79deu, 'return' in rm1ke068 ? rm1ke068['return'] : function (wr93dnzi) {
                return {
                    'value': wr93dnzi,
                    'done': !0x0
                };
            }, us37eu1h6, hh6o79deu['g']['return']);
        hh6o79deu['g']['return'](us37eu1h6);
        return aww81822r(hh6o79deu);
    }
    function eo22bq2ph(i9sth0066, mcudozt6, gd7o9, ql6e0i4x) {
        try {
            var j7v0ckx = mcudozt6['call'](i9sth0066['g']['h'], gd7o9);
            if (!(j7v0ckx instanceof Object))
                throw new TypeError('Iterator\x20result\x20' + j7v0ckx + '\x20is\x20not\x20an\x20object');
            if (!j7v0ckx['done'])
                return i9sth0066['g']['u'] = !0x1, j7v0ckx;
            var s890c = j7v0ckx['value'];
        } catch (xz61y2r6v) {
            return i9sth0066['g']['h'] = null, tu7xte(i9sth0066['g'], xz61y2r6v), aww81822r(i9sth0066);
        }
        i9sth0066['g']['h'] = null;
        ql6e0i4x['call'](i9sth0066['g'], s890c);
        return aww81822r(i9sth0066);
    }
    function aww81822r(f34w24e2) {
        for (; f34w24e2['g']['g'];)
            try {
                var wtf198z9l = f34w24e2['h'](f34w24e2['g']);
                if (wtf198z9l)
                    return f34w24e2['g']['u'] = !0x1, {
                        'value': wtf198z9l['value'],
                        'done': !0x1
                    };
            } catch (ugx36qlnv) {
                f34w24e2['g']['Oa'] = void 0x0, tu7xte(f34w24e2['g'], ugx36qlnv);
            }
        f34w24e2['g']['u'] = !0x1;
        if (f34w24e2['g']['i']) {
            wtf198z9l = f34w24e2['g']['i'];
            f34w24e2['g']['i'] = null;
            if (wtf198z9l['fb'])
                throw wtf198z9l['ab'];
            return {
                'value': wtf198z9l['return'],
                'done': !0x0
            };
        }
        return {
            'value': void 0x0,
            'done': !0x0
        };
    }
    function wy5qcj46(i29tuj) {
        this['next'] = function (iiu33fg) {
            muf39e(i29tuj['g']);
            i29tuj['g']['h'] ? iiu33fg = eo22bq2ph(i29tuj, i29tuj['g']['h']['next'], iiu33fg, i29tuj['g']['O']) : (i29tuj['g']['O'](iiu33fg), iiu33fg = aww81822r(i29tuj));
            return iiu33fg;
        };
        this['throw'] = function (b4b7wj5id) {
            muf39e(i29tuj['g']);
            i29tuj['g']['h'] ? b4b7wj5id = eo22bq2ph(i29tuj, i29tuj['g']['h']['throw'], b4b7wj5id, i29tuj['g']['O']) : (tu7xte(i29tuj['g'], b4b7wj5id), b4b7wj5id = aww81822r(i29tuj));
            return b4b7wj5id;
        };
        this['return'] = function (oi92fs) {
            return xho4n013(i29tuj, oi92fs);
        };
        this[Symbol['iterator']] = function () {
            return this;
        };
    }
    function z3fyiz(b7a68y6f, rd1g53) {
        rd1g53 = new wy5qcj46(new v5abtc(rd1g53));
        d4yxt && b7a68y6f['prototype'] && d4yxt(rd1g53, b7a68y6f['prototype']);
        return rd1g53;
    }
    Array['from'] || (Array['from'] = function (wao6e) {
        return []['slice']['call'](wao6e);
    });
    Object['assign'] || (Object['assign'] = function (e9xy6t4) {
        for (var h58584 = []['slice']['call'](arguments, 0x1), h123xy1 = 0x0, zsm92b34c; h123xy1 < h58584['length']; h123xy1++)
            if (zsm92b34c = h58584[h123xy1])
                for (var d9ye19j = e9xy6t4, tq9owguw = Object['keys'](zsm92b34c), z5384ii = 0x0; z5384ii < tq9owguw['length']; z5384ii++) {
                    var u4p5rwt = tq9owguw[z5384ii];
                    d9ye19j[u4p5rwt] = zsm92b34c[u4p5rwt];
                }
        return e9xy6t4;
    });
    var gh8sng070 = setTimeout;
    function y1j900b() {
    }
    function pifn38(ma75waq, q0xosq5c) {
        return function () {
            ma75waq['apply'](q0xosq5c, arguments);
        };
    }
    function l0252u(p87w0a) {
        if (!(this instanceof l0252u))
            throw new TypeError('Promises\x20must\x20be\x20constructed\x20via\x20new');
        if ('function' !== typeof p87w0a)
            throw new TypeError('not\x20a\x20function');
        this['N'] = 0x0;
        this['Ha'] = !0x1;
        this['I'] = void 0x0;
        this['ba'] = [];
        s6i9w(p87w0a, this);
    }
    function l245na3(vub1dpg, i7k128llo) {
        for (; 0x3 === vub1dpg['N'];)
            vub1dpg = vub1dpg['I'];
        0x0 === vub1dpg['N'] ? vub1dpg['ba']['push'](i7k128llo) : (vub1dpg['Ha'] = !0x0, dfa63(function () {
            var wj963 = 0x1 === vub1dpg['N'] ? i7k128llo['hb'] : i7k128llo['ib'];
            if (null === wj963)
                (0x1 === vub1dpg['N'] ? z5q23ef6g : oa36ph5)(i7k128llo['promise'], vub1dpg['I']);
            else {
                try {
                    var x0z0cci = wj963(vub1dpg['I']);
                } catch (m91z3b) {
                    oa36ph5(i7k128llo['promise'], m91z3b);
                    return;
                }
                z5q23ef6g(i7k128llo['promise'], x0z0cci);
            }
        }));
    }
    function z5q23ef6g(witq28ri, e0139) {
        try {
            if (e0139 === witq28ri)
                throw new TypeError('A\x20promise\x20cannot\x20be\x20resolved\x20with\x20itself.');
            if (e0139 && ('object' === typeof e0139 || 'function' === typeof e0139)) {
                var p09kdiy = e0139['then'];
                if (e0139 instanceof l0252u) {
                    witq28ri['N'] = 0x3;
                    witq28ri['I'] = e0139;
                    cgir46d(witq28ri);
                    return;
                }
                if ('function' === typeof p09kdiy) {
                    s6i9w(pifn38(p09kdiy, e0139), witq28ri);
                    return;
                }
            }
            witq28ri['N'] = 0x1;
            witq28ri['I'] = e0139;
            cgir46d(witq28ri);
        } catch (i88tr) {
            oa36ph5(witq28ri, i88tr);
        }
    }
    function oa36ph5(o5x527lkw, v7mtp4) {
        o5x527lkw['N'] = 0x2;
        o5x527lkw['I'] = v7mtp4;
        cgir46d(o5x527lkw);
    }
    function cgir46d(ipzlka) {
        0x2 === ipzlka['N'] && 0x0 === ipzlka['ba']['length'] && dfa63(function () {
            ipzlka['Ha'] || 'undefined' !== typeof console && console && console['warn']('Possible\x20Unhandled\x20Promise\x20Rejection:', ipzlka['I']);
        });
        for (var q39x2uo = 0x0, jaie035 = ipzlka['ba']['length']; q39x2uo < jaie035; q39x2uo++)
            l245na3(ipzlka, ipzlka['ba'][q39x2uo]);
        ipzlka['ba'] = null;
    }
    function l1948s3y(h2ubs58i, qshw5j2u, tg7kh315h) {
        this['hb'] = 'function' === typeof h2ubs58i ? h2ubs58i : null;
        this['ib'] = 'function' === typeof qshw5j2u ? qshw5j2u : null;
        this['promise'] = tg7kh315h;
    }
    function s6i9w(nlar0p0, y0y6dqm) {
        var u143z3wb = !0x1;
        try {
            nlar0p0(function (kc5j6xy8) {
                u143z3wb || (u143z3wb = !0x0, z5q23ef6g(y0y6dqm, kc5j6xy8));
            }, function (s31tc3o4) {
                u143z3wb || (u143z3wb = !0x0, oa36ph5(y0y6dqm, s31tc3o4));
            });
        } catch (m5kf2l4) {
            u143z3wb || (u143z3wb = !0x0, oa36ph5(y0y6dqm, m5kf2l4));
        }
    }
    l0252u['prototype']['catch'] = function (i1711dxc) {
        return this['then'](null, i1711dxc);
    };
    l0252u['prototype']['then'] = function (zm991o, x98jigf8) {
        var j137y = new this['constructor'](y1j900b);
        l245na3(this, new l1948s3y(zm991o, x98jigf8, j137y));
        return j137y;
    };
    l0252u['prototype']['finally'] = function (u441r) {
        var qggzr9x3g = this['constructor'];
        return this['then'](function (ez4818) {
            return qggzr9x3g['resolve'](u441r())['then'](function () {
                return ez4818;
            });
        }, function (an3bk4) {
            return qggzr9x3g['resolve'](u441r())['then'](function () {
                return qggzr9x3g['reject'](an3bk4);
            });
        });
    };
    function hc991wb80(n08w2) {
        return new l0252u(function (h58785k, rltjj) {
            function gn20fb(xnz9104s6, s402iqh3f) {
                try {
                    if (s402iqh3f && ('object' === typeof s402iqh3f || 'function' === typeof s402iqh3f)) {
                        var u0o1186r = s402iqh3f['then'];
                        if ('function' === typeof u0o1186r) {
                            u0o1186r['call'](s402iqh3f, function (noksj7pw7) {
                                gn20fb(xnz9104s6, noksj7pw7);
                            }, rltjj);
                            return;
                        }
                    }
                    xo484[xnz9104s6] = s402iqh3f;
                    0x0 === --fg8zx07c && h58785k(xo484);
                } catch (an3swk) {
                    rltjj(an3swk);
                }
            }
            if (!n08w2 || 'undefined' === typeof n08w2['length'])
                return rltjj(new TypeError('Promise.all\x20accepts\x20an\x20array'));
            var xo484 = Array['prototype']['slice']['call'](n08w2);
            if (0x0 === xo484['length'])
                return h58785k([]);
            for (var fg8zx07c = xo484['length'], a0k3ooa = 0x0; a0k3ooa < xo484['length']; a0k3ooa++)
                gn20fb(a0k3ooa, xo484[a0k3ooa]);
        });
    }
    function wrklwq(om399) {
        return om399 && 'object' === typeof om399 && om399['constructor'] === l0252u ? om399 : new l0252u(function (n479ev3g4) {
            n479ev3g4(om399);
        });
    }
    function m1w75r(n32x764) {
        return new l0252u(function (xx069, lta7gd793) {
            lta7gd793(n32x764);
        });
    }
    function vlx6l5(lo698pr) {
        return new l0252u(function (bt5n25789, mn47b5014) {
            if (!lo698pr || 'undefined' === typeof lo698pr['length'])
                return mn47b5014(new TypeError('Promise.race\x20accepts\x20an\x20array'));
            for (var pk404b = 0x0, ogn74t = lo698pr['length']; pk404b < ogn74t; pk404b++)
                wrklwq(lo698pr[pk404b])['then'](bt5n25789, mn47b5014);
        });
    }
    var dfa63 = 'function' === typeof setImmediate && function (wb3n43) {
        setImmediate(wb3n43);
    } || function (f15y2o6l1) {
        gh8sng070(f15y2o6l1, 0x0);
    };
    if (!window['Promise']) {
        window['Promise'] = l0252u;
        l0252u['prototype']['then'] = l0252u['prototype']['then'];
        l0252u['all'] = hc991wb80;
        l0252u['race'] = vlx6l5;
        l0252u['resolve'] = wrklwq;
        l0252u['reject'] = m1w75r;
        var jy568 = document['createTextNode'](''), n7p0m = [];
        new MutationObserver(function () {
            for (var y1cy00 = n7p0m['length'], mp1279 = 0x0; mp1279 < y1cy00; mp1279++)
                n7p0m[mp1279]();
            n7p0m['splice'](0x0, y1cy00);
        })['observe'](jy568, { 'characterData': !0x0 });
        dfa63 = function (uk097u49) {
            n7p0m['push'](uk097u49);
            jy568['textContent'] = 0x0 < jy568['textContent']['length'] ? '' : 'a';
        };
    }
    ;
    (function (l61kx5l, z79dcf2) {
        if (!(z79dcf2 in l61kx5l)) {
            var nc0c424jj = typeof global === typeof nc0c424jj ? window : global, in1606 = 0x0, m00lr4 = String(Math['random']()), x6d12ur3 = '__\x01symbol@@' + m00lr4, d5p1e = l61kx5l['getOwnPropertyNames'], v1ao6 = l61kx5l['getOwnPropertyDescriptor'], jxmxpzr = l61kx5l['create'], fe6hcdp = l61kx5l['keys'], x9yut4e = l61kx5l['freeze'] || l61kx5l, jnhlk7i7l = l61kx5l['defineProperty'], ao13v7g9 = l61kx5l['defineProperties'], uj46hm5g0 = v1ao6(l61kx5l, 'getOwnPropertyNames'), l596ha4 = l61kx5l['prototype'], j57l7 = l596ha4['hasOwnProperty'], nj5mefx3l = l596ha4['propertyIsEnumerable'], r5em5 = l596ha4['toString'], z099kn41 = function (dmtx03vei, ynq6v8, y054l5) {
                    j57l7['call'](dmtx03vei, x6d12ur3) || jnhlk7i7l(dmtx03vei, x6d12ur3, {
                        'enumerable': !0x1,
                        'configurable': !0x1,
                        'writable': !0x1,
                        'value': {}
                    });
                    dmtx03vei[x6d12ur3]['@@' + ynq6v8] = y054l5;
                }, s57l40 = function (i6n4z, robjngf) {
                    var fz9d4wlro = jxmxpzr(i6n4z);
                    d5p1e(robjngf)['forEach'](function (lvp7ko9) {
                        i0e4wqu['call'](robjngf, lvp7ko9) && ts302(fz9d4wlro, lvp7ko9, robjngf[lvp7ko9]);
                    });
                    return fz9d4wlro;
                }, oqzs4yhey = function () {
                }, rxtycw = function (u90fr961) {
                    return u90fr961 != x6d12ur3 && !j57l7['call'](zijje7i, u90fr961);
                }, ky8af0z70 = function (t13wdb5g) {
                    return t13wdb5g != x6d12ur3 && j57l7['call'](zijje7i, t13wdb5g);
                }, i0e4wqu = function (tu96bl) {
                    var eb96e2jj4 = String(tu96bl);
                    return ky8af0z70(eb96e2jj4) ? j57l7['call'](this, eb96e2jj4) && !!this[x6d12ur3] && this[x6d12ur3]['@@' + eb96e2jj4] : nj5mefx3l['call'](this, tu96bl);
                }, fm33mt50 = function (n28ii) {
                    jnhlk7i7l(l596ha4, n28ii, {
                        'enumerable': !0x1,
                        'configurable': !0x0,
                        'get': oqzs4yhey,
                        'set': function (t9k75227) {
                            n27xl(this, n28ii, {
                                'enumerable': !0x1,
                                'configurable': !0x0,
                                'writable': !0x0,
                                'value': t9k75227
                            });
                            z099kn41(this, n28ii, !0x0);
                        }
                    });
                    zijje7i[n28ii] = jnhlk7i7l(l61kx5l(n28ii), 'constructor', lng2u);
                    return x9yut4e(zijje7i[n28ii]);
                }, h691g = function yrs6on1(n4y139) {
                    if (this instanceof yrs6on1)
                        throw new TypeError('Symbol\x20is\x20not\x20a\x20constructor');
                    return fm33mt50('__\x01symbol:'['concat'](n4y139 || '', m00lr4, ++in1606));
                }, zijje7i = jxmxpzr(null), lng2u = { 'value': h691g }, hy81af = function (j56a2qg8j) {
                    return zijje7i[j56a2qg8j];
                }, ts302 = function (j4c44mo, w47non0m2, ccwx7) {
                    var cu56yi = String(w47non0m2);
                    if (ky8af0z70(cu56yi)) {
                        w47non0m2 = n27xl;
                        if (ccwx7['enumerable']) {
                            var xzg4bgwk5 = jxmxpzr(ccwx7);
                            xzg4bgwk5['enumerable'] = !0x1;
                        } else
                            xzg4bgwk5 = ccwx7;
                        w47non0m2(j4c44mo, cu56yi, xzg4bgwk5);
                        z099kn41(j4c44mo, cu56yi, !!ccwx7['enumerable']);
                    } else
                        jnhlk7i7l(j4c44mo, w47non0m2, ccwx7);
                    return j4c44mo;
                }, lsl58v = function (ix5ig) {
                    return d5p1e(ix5ig)['filter'](ky8af0z70)['map'](hy81af);
                };
            uj46hm5g0['value'] = ts302;
            jnhlk7i7l(l61kx5l, 'defineProperty', uj46hm5g0);
            uj46hm5g0['value'] = lsl58v;
            jnhlk7i7l(l61kx5l, z79dcf2, uj46hm5g0);
            uj46hm5g0['value'] = function (f193753) {
                return d5p1e(f193753)['filter'](rxtycw);
            };
            jnhlk7i7l(l61kx5l, 'getOwnPropertyNames', uj46hm5g0);
            uj46hm5g0['value'] = function (m287oe, l5h66) {
                var ouvx5ny = lsl58v(l5h66);
                ouvx5ny['length'] ? fe6hcdp(l5h66)['concat'](ouvx5ny)['forEach'](function (pa1dc6cd3) {
                    i0e4wqu['call'](l5h66, pa1dc6cd3) && ts302(m287oe, pa1dc6cd3, l5h66[pa1dc6cd3]);
                }) : ao13v7g9(m287oe, l5h66);
                return m287oe;
            };
            jnhlk7i7l(l61kx5l, 'defineProperties', uj46hm5g0);
            uj46hm5g0['value'] = i0e4wqu;
            jnhlk7i7l(l596ha4, 'propertyIsEnumerable', uj46hm5g0);
            uj46hm5g0['value'] = h691g;
            jnhlk7i7l(nc0c424jj, 'Symbol', uj46hm5g0);
            uj46hm5g0['value'] = function (s27ihb9m) {
                s27ihb9m = '__\x01symbol:'['concat']('__\x01symbol:', s27ihb9m, m00lr4);
                return s27ihb9m in l596ha4 ? zijje7i[s27ihb9m] : fm33mt50(s27ihb9m);
            };
            jnhlk7i7l(h691g, 'for', uj46hm5g0);
            uj46hm5g0['value'] = function (mw97mgnmy) {
                if (rxtycw(mw97mgnmy))
                    throw new TypeError(mw97mgnmy + '\x20is\x20not\x20a\x20symbol');
                if (j57l7['call'](zijje7i, mw97mgnmy) && (mw97mgnmy = mw97mgnmy['slice'](0xa), '__\x01symbol:' === mw97mgnmy['slice'](0x0, 0xa) && (mw97mgnmy = mw97mgnmy['slice'](0xa), mw97mgnmy !== m00lr4)))
                    return mw97mgnmy = mw97mgnmy['slice'](0x0, mw97mgnmy['length'] - m00lr4['length']), 0x0 < mw97mgnmy['length'] ? mw97mgnmy : void 0x0;
            };
            jnhlk7i7l(h691g, 'keyFor', uj46hm5g0);
            uj46hm5g0['value'] = function (g32yfywt, r5bxn4) {
                var q4d06sq = v1ao6(g32yfywt, r5bxn4);
                q4d06sq && ky8af0z70(r5bxn4) && (q4d06sq['enumerable'] = i0e4wqu['call'](g32yfywt, r5bxn4));
                return q4d06sq;
            };
            jnhlk7i7l(l61kx5l, 'getOwnPropertyDescriptor', uj46hm5g0);
            uj46hm5g0['value'] = function (m6p5d00i, y3fav) {
                return 0x1 === arguments['length'] || 'undefined' === typeof y3fav ? jxmxpzr(m6p5d00i) : s57l40(m6p5d00i, y3fav);
            };
            jnhlk7i7l(l61kx5l, 'create', uj46hm5g0);
            uj46hm5g0['value'] = function () {
                var lg559bje = r5em5['call'](this);
                return '[object\x20String]' === lg559bje && ky8af0z70(this) ? '[object\x20Symbol]' : lg559bje;
            };
            jnhlk7i7l(l596ha4, 'toString', uj46hm5g0);
            try {
                if (!0x0 === jxmxpzr(jnhlk7i7l({}, '__\x01symbol:', {
                        'get': function () {
                            return jnhlk7i7l(this, '__\x01symbol:', { 'value': !0x0 })['__\x01symbol:'];
                        }
                    }))['__\x01symbol:'])
                    var n27xl = jnhlk7i7l;
                else
                    throw 'IE11';
            } catch (v22g2s200) {
                n27xl = function (f5zeoa, f97y1zx, y4qm9cf6a) {
                    var zzj3g = v1ao6(l596ha4, f97y1zx);
                    delete l596ha4[f97y1zx];
                    jnhlk7i7l(f5zeoa, f97y1zx, y4qm9cf6a);
                    jnhlk7i7l(l596ha4, f97y1zx, zzj3g);
                };
            }
        }
    }(Object, 'getOwnPropertySymbols'));
    (function (l71c31, i78qfi) {
        var k3n7w = l71c31['defineProperty'], v4s2dz32 = l71c31['prototype'], k0du7i = v4s2dz32['toString'], zh90t1egn;
        'iterator\x20match\x20replace\x20search\x20split\x20hasInstance\x20isConcatSpreadable\x20unscopables\x20species\x20toPrimitive\x20toStringTag'['split']('\x20')['forEach'](function (m2w7b) {
            m2w7b in i78qfi || (k3n7w(i78qfi, m2w7b, { 'value': i78qfi(m2w7b) }), 'toStringTag' === m2w7b && (zh90t1egn = l71c31['getOwnPropertyDescriptor'](v4s2dz32, 'toString'), zh90t1egn['value'] = function () {
                var y2f2g901g = k0du7i['call'](this), gx2up0in = null == this ? this : this[i78qfi['toStringTag']];
                return null == gx2up0in ? y2f2g901g : '[object\x20' + gx2up0in + ']';
            }, k3n7w(v4s2dz32, 'toString', zh90t1egn)));
        });
    }(Object, Symbol));
    (function (ct0ukv, zki93, o1rzn) {
        function i9p2z94s() {
            return this;
        }
        zki93[ct0ukv] || (zki93[ct0ukv] = function () {
            var z100f6vi7 = 0x0, ym07vzk = this, q162e = {
                    'next': function () {
                        var bhfdl54v = ym07vzk['length'] <= z100f6vi7;
                        return bhfdl54v ? { 'done': bhfdl54v } : {
                            'done': bhfdl54v,
                            'value': ym07vzk[z100f6vi7++]
                        };
                    }
                };
            q162e[ct0ukv] = i9p2z94s;
            return q162e;
        });
        o1rzn[ct0ukv] || (o1rzn[ct0ukv] = function () {
            var r1t47260j = String['fromCodePoint'], yny88t631 = this, u7q892 = 0x0, d274s79 = yny88t631['length'], nyy0t7ugq = {
                    'next': function () {
                        var unv4fuw4 = d274s79 <= u7q892, gxsz87 = unv4fuw4 ? '' : r1t47260j(yny88t631['codePointAt'](u7q892));
                        u7q892 += gxsz87['length'];
                        return unv4fuw4 ? { 'done': unv4fuw4 } : {
                            'done': unv4fuw4,
                            'value': gxsz87
                        };
                    }
                };
            nyy0t7ugq[ct0ukv] = i9p2z94s;
            return nyy0t7ugq;
        });
    }(Symbol['iterator'], Array['prototype'], String['prototype']));
    var m22b543br = Object['prototype']['toString'];
    Object['prototype']['toString'] = function () {
        return void 0x0 === this ? '[object\x20Undefined]' : null === this ? '[object\x20Null]' : m22b543br['call'](this);
    };
    Object['keys'] = function (co98il) {
        return Object['getOwnPropertyNames'](co98il)['filter'](function (e3x8j0q0) {
            return (e3x8j0q0 = Object['getOwnPropertyDescriptor'](co98il, e3x8j0q0)) && e3x8j0q0['enumerable'];
        });
    };
    String['prototype'][Symbol['iterator']] && String['prototype']['codePointAt'] || (String['prototype'][Symbol['iterator']] = function m5g7de() {
        var i44eq, g08va8l = this;
        return z3fyiz(m5g7de, function (anfxp) {
            0x1 == anfxp['g'] && (i44eq = 0x0);
            if (0x3 != anfxp['g'])
                return i44eq < g08va8l['length'] ? anfxp = u44jy(anfxp, g08va8l[i44eq]) : (anfxp['g'] = 0x0, anfxp = void 0x0), anfxp;
            i44eq++;
            anfxp['g'] = 0x2;
        });
    });
    Set['prototype'][Symbol['iterator']] || (Set['prototype'][Symbol['iterator']] = function s9gw2dv4() {
        var qyyem93, z3s73h0 = this, io13436;
        return z3fyiz(s9gw2dv4, function (wm688r) {
            0x1 == wm688r['g'] && (qyyem93 = [], z3s73h0['forEach'](function (nal16r06) {
                qyyem93['push'](nal16r06);
            }), io13436 = 0x0);
            if (0x3 != wm688r['g'])
                return io13436 < qyyem93['length'] ? wm688r = u44jy(wm688r, qyyem93[io13436]) : (wm688r['g'] = 0x0, wm688r = void 0x0), wm688r;
            io13436++;
            wm688r['g'] = 0x2;
        });
    });
    Map['prototype'][Symbol['iterator']] || (Map['prototype'][Symbol['iterator']] = function qu6yl() {
        var m5eotl, zcgu3887 = this, kwy6l2;
        return z3fyiz(qu6yl, function (v1r04oh9r) {
            0x1 == v1r04oh9r['g'] && (m5eotl = [], zcgu3887['forEach'](function (lwz96r6u9, w3a0j) {
                m5eotl['push']([
                    w3a0j,
                    lwz96r6u9
                ]);
            }), kwy6l2 = 0x0);
            if (0x3 != v1r04oh9r['g'])
                return kwy6l2 < m5eotl['length'] ? v1r04oh9r = u44jy(v1r04oh9r, m5eotl[kwy6l2]) : (v1r04oh9r['g'] = 0x0, v1r04oh9r = void 0x0), v1r04oh9r;
            kwy6l2++;
            v1r04oh9r['g'] = 0x2;
        });
    });
    var a4wpi1w = document['createEvent']('Event');
    a4wpi1w['initEvent']('foo', !0x0, !0x0);
    a4wpi1w['preventDefault']();
    if (!a4wpi1w['defaultPrevented']) {
        var kuu5m9 = Event['prototype']['preventDefault'];
        Event['prototype']['preventDefault'] = function () {
            this['cancelable'] && (kuu5m9['call'](this), Object['defineProperty'](this, 'defaultPrevented', {
                'get': function () {
                    return !0x0;
                },
                'configurable': !0x0
            }));
        };
    }
    var ge21x33m = /Trident/['test'](navigator['userAgent']);
    if (!window['Event'] || ge21x33m && 'function' !== typeof window['Event']) {
        var ig5e5eu4z = window['Event'];
        window['Event'] = function (a8ll5m4, t1qcy89) {
            t1qcy89 = t1qcy89 || {};
            var k74976xo3 = document['createEvent']('Event');
            k74976xo3['initEvent'](a8ll5m4, !!t1qcy89['bubbles'], !!t1qcy89['cancelable']);
            return k74976xo3;
        };
        if (ig5e5eu4z) {
            for (var j398df4u in ig5e5eu4z)
                window['Event'][j398df4u] = ig5e5eu4z[j398df4u];
            window['Event']['prototype'] = ig5e5eu4z['prototype'];
        }
    }
    if (!window['CustomEvent'] || ge21x33m && 'function' !== typeof window['CustomEvent'])
        window['CustomEvent'] = function (xwvx7, x8w2y7488) {
            x8w2y7488 = x8w2y7488 || {};
            var m2xft = document['createEvent']('CustomEvent');
            m2xft['initCustomEvent'](xwvx7, !!x8w2y7488['bubbles'], !!x8w2y7488['cancelable'], x8w2y7488['detail']);
            return m2xft;
        }, window['CustomEvent']['prototype'] = window['Event']['prototype'];
    if (!window['MouseEvent'] || ge21x33m && 'function' !== typeof window['MouseEvent']) {
        var fk1k6u61 = window['MouseEvent'];
        window['MouseEvent'] = function (f2s8hw, lnb0sq) {
            lnb0sq = lnb0sq || {};
            var h5591w = document['createEvent']('MouseEvent');
            h5591w['initMouseEvent'](f2s8hw, !!lnb0sq['bubbles'], !!lnb0sq['cancelable'], lnb0sq['view'] || window, lnb0sq['detail'], lnb0sq['screenX'], lnb0sq['screenY'], lnb0sq['clientX'], lnb0sq['clientY'], lnb0sq['ctrlKey'], lnb0sq['altKey'], lnb0sq['shiftKey'], lnb0sq['metaKey'], lnb0sq['button'], lnb0sq['relatedTarget']);
            return h5591w;
        };
        if (fk1k6u61)
            for (var miv61u in fk1k6u61)
                window['MouseEvent'][miv61u] = fk1k6u61[miv61u];
        window['MouseEvent']['prototype'] = fk1k6u61['prototype'];
    }
    ;
    var lf6l3gy, h3d5oe = (function () {
            function dy814hc() {
                cx08306co++;
            }
            var t68982 = !0x1, dun818l88 = !0x1, pvnnyxqf = {
                    get 'capture'() {
                        return t68982 = !0x0;
                    },
                    get 'once'() {
                        return dun818l88 = !0x0;
                    }
                }, cx08306co = 0x0, e5ii3w = document['createElement']('div');
            e5ii3w['addEventListener']('click', dy814hc, pvnnyxqf);
            var h40ogc3e = t68982 && dun818l88;
            h40ogc3e && (e5ii3w['dispatchEvent'](new Event('click')), e5ii3w['dispatchEvent'](new Event('click')), h40ogc3e = 0x1 == cx08306co);
            e5ii3w['removeEventListener']('click', dy814hc, pvnnyxqf);
            return h40ogc3e;
        }()), n532d = null !== (lf6l3gy = window['EventTarget']) && void 0x0 !== lf6l3gy ? lf6l3gy : window['Node'];
    if (!h3d5oe && 'addEventListener' in n532d['prototype']) {
        var m8jy18 = function (ot8359jl) {
                if (!ot8359jl || 'object' !== typeof ot8359jl && 'function' !== typeof ot8359jl) {
                    var f32wk3430 = !!ot8359jl;
                    ot8359jl = !0x1;
                } else
                    f32wk3430 = !!ot8359jl['capture'], ot8359jl = !!ot8359jl['once'];
                return {
                    'capture': f32wk3430,
                    'once': ot8359jl
                };
            }, hxajh = n532d['prototype']['addEventListener'], tktv99xg = n532d['prototype']['removeEventListener'], d3m572 = new WeakMap(), f26vtof = new WeakMap(), t6f4190 = function (bp24sekk, f019te9, y579gv80t) {
                var bq8ug123 = y579gv80t ? d3m572 : f26vtof;
                y579gv80t = bq8ug123['get'](bp24sekk);
                void 0x0 === y579gv80t && bq8ug123['set'](bp24sekk, y579gv80t = new Map());
                bp24sekk = y579gv80t['get'](f019te9);
                void 0x0 === bp24sekk && y579gv80t['set'](f019te9, bp24sekk = new WeakMap());
                return bp24sekk;
            };
        n532d['prototype']['addEventListener'] = function (bo316n6, ju99wr67t, u5b5u0x) {
            var um4f7 = this;
            if (null != ju99wr67t) {
                u5b5u0x = m8jy18(u5b5u0x);
                var p3203v2g = u5b5u0x['capture'];
                u5b5u0x = u5b5u0x['once'];
                var y1401ny5 = t6f4190(this, bo316n6, p3203v2g);
                if (!y1401ny5['has'](ju99wr67t)) {
                    var z20ov9 = u5b5u0x ? function (x122i7) {
                        y1401ny5['delete'](ju99wr67t);
                        tktv99xg['call'](um4f7, bo316n6, z20ov9, p3203v2g);
                        if ('function' === typeof ju99wr67t)
                            return ju99wr67t['call'](um4f7, x122i7);
                        if ('function' === typeof (null === ju99wr67t || void 0x0 === ju99wr67t ? void 0x0 : ju99wr67t['handleEvent']))
                            return ju99wr67t['handleEvent'](x122i7);
                    } : null;
                    y1401ny5['set'](ju99wr67t, z20ov9);
                    hxajh['call'](this, bo316n6, null !== z20ov9 && void 0x0 !== z20ov9 ? z20ov9 : ju99wr67t, p3203v2g);
                }
            }
        };
        n532d['prototype']['removeEventListener'] = function (fsu66z1q, nqef8qd7l, kpk8e183) {
            if (null != nqef8qd7l) {
                kpk8e183 = m8jy18(kpk8e183)['capture'];
                var ccx218f = t6f4190(this, fsu66z1q, kpk8e183), c873sq3 = ccx218f['get'](nqef8qd7l);
                void 0x0 !== c873sq3 && (ccx218f['delete'](nqef8qd7l), tktv99xg['call'](this, fsu66z1q, null !== c873sq3 && void 0x0 !== c873sq3 ? c873sq3 : nqef8qd7l, kpk8e183));
            }
        };
    }
    ;
    Object['getOwnPropertyDescriptor'](Node['prototype'], 'baseURI') || Object['defineProperty'](Node['prototype'], 'baseURI', {
        'get': function () {
            var l9605 = (this['ownerDocument'] || this)['querySelector']('base[href]');
            return l9605 && l9605['href'] || window['location']['href'];
        },
        'configurable': !0x0,
        'enumerable': !0x0
    });
    var ts6t0j, g2139y8, d1vele53 = Element['prototype'], b1t6go = null !== (ts6t0j = Object['getOwnPropertyDescriptor'](d1vele53, 'attributes')) && void 0x0 !== ts6t0j ? ts6t0j : Object['getOwnPropertyDescriptor'](Node['prototype'], 'attributes'), d3s1lgcy = null !== (g2139y8 = null === b1t6go || void 0x0 === b1t6go ? void 0x0 : b1t6go['get']) && void 0x0 !== g2139y8 ? g2139y8 : function () {
            return this['attributes'];
        }, w43d768uv = Array['prototype']['map'];
    d1vele53['hasOwnProperty']('getAttributeNames') || (d1vele53['getAttributeNames'] = function () {
        return w43d768uv['call'](d3s1lgcy['call'](this), function (ogp36) {
            return ogp36['name'];
        });
    });
    var x3l13, iy1s6v = Element['prototype'];
    iy1s6v['hasOwnProperty']('matches') || (iy1s6v['matches'] = null !== (x3l13 = iy1s6v['webkitMatchesSelector']) && void 0x0 !== x3l13 ? x3l13 : iy1s6v['msMatchesSelector']);
    var h219c = Node['prototype']['appendChild'];
    function i61yx(z4rd22g0s) {
        z4rd22g0s = z4rd22g0s['prototype'];
        z4rd22g0s['hasOwnProperty']('append') || Object['defineProperty'](z4rd22g0s, 'append', {
            'configurable': !0x0,
            'enumerable': !0x0,
            'writable': !0x0,
            'value': function (nvk9ia) {
                for (var dns2728 = [], txdlx3v = 0x0; txdlx3v < arguments['length']; ++txdlx3v)
                    dns2728[txdlx3v] = arguments[txdlx3v];
                dns2728 = y5jf9283(dns2728);
                for (txdlx3v = dns2728['next'](); !txdlx3v['done']; txdlx3v = dns2728['next']())
                    txdlx3v = txdlx3v['value'], h219c['call'](this, 'string' === typeof txdlx3v ? document['createTextNode'](txdlx3v) : txdlx3v);
            }
        });
    }
    i61yx(Document);
    i61yx(DocumentFragment);
    i61yx(Element);
    var xj2c5g8r, h606y7n1, r86656 = Node['prototype']['insertBefore'], hghj191 = null !== (h606y7n1 = null === (xj2c5g8r = Object['getOwnPropertyDescriptor'](Node['prototype'], 'firstChild')) || void 0x0 === xj2c5g8r ? void 0x0 : xj2c5g8r['get']) && void 0x0 !== h606y7n1 ? h606y7n1 : function () {
            return this['firstChild'];
        };
    function rez6c0in3(wfqi3271n) {
        wfqi3271n = wfqi3271n['prototype'];
        wfqi3271n['hasOwnProperty']('prepend') || Object['defineProperty'](wfqi3271n, 'prepend', {
            'configurable': !0x0,
            'enumerable': !0x0,
            'writable': !0x0,
            'value': function (pqvx6x938) {
                for (var qh17920n = [], d7x75t4 = 0x0; d7x75t4 < arguments['length']; ++d7x75t4)
                    qh17920n[d7x75t4] = arguments[d7x75t4];
                d7x75t4 = hghj191['call'](this);
                qh17920n = y5jf9283(qh17920n);
                for (var x2ur16maw = qh17920n['next'](); !x2ur16maw['done']; x2ur16maw = qh17920n['next']())
                    x2ur16maw = x2ur16maw['value'], r86656['call'](this, 'string' === typeof x2ur16maw ? document['createTextNode'](x2ur16maw) : x2ur16maw, d7x75t4);
            }
        });
    }
    rez6c0in3(Document);
    rez6c0in3(DocumentFragment);
    rez6c0in3(Element);
    var o05lyhuq, te3630stq, yn44s = Node['prototype']['appendChild'], stfi63n31 = Node['prototype']['removeChild'], k20yo7s77 = null !== (te3630stq = null === (o05lyhuq = Object['getOwnPropertyDescriptor'](Node['prototype'], 'firstChild')) || void 0x0 === o05lyhuq ? void 0x0 : o05lyhuq['get']) && void 0x0 !== te3630stq ? te3630stq : function () {
            return this['firstChild'];
        };
    function i0e414g4q(inv13m) {
        inv13m = inv13m['prototype'];
        inv13m['hasOwnProperty']('replaceChildren') || Object['defineProperty'](inv13m, 'replaceChildren', {
            'configurable': !0x0,
            'enumerable': !0x0,
            'writable': !0x0,
            'value': function (njp8n) {
                for (var o8nxqc9 = [], eo60e2qji = 0x0; eo60e2qji < arguments['length']; ++eo60e2qji)
                    o8nxqc9[eo60e2qji] = arguments[eo60e2qji];
                for (; null !== (eo60e2qji = k20yo7s77['call'](this));)
                    stfi63n31['call'](this, eo60e2qji);
                o8nxqc9 = y5jf9283(o8nxqc9);
                for (eo60e2qji = o8nxqc9['next'](); !eo60e2qji['done']; eo60e2qji = o8nxqc9['next']())
                    eo60e2qji = eo60e2qji['value'], yn44s['call'](this, 'string' === typeof eo60e2qji ? document['createTextNode'](eo60e2qji) : eo60e2qji);
            }
        });
    }
    i0e414g4q(Document);
    i0e414g4q(DocumentFragment);
    i0e414g4q(Element);
    var dwlam, t3f8in, jrp173ny, s9r2j98u, m3l1u2n6e = Node['prototype']['insertBefore'], cdh911 = null !== (t3f8in = null === (dwlam = Object['getOwnPropertyDescriptor'](Node['prototype'], 'parentNode')) || void 0x0 === dwlam ? void 0x0 : dwlam['get']) && void 0x0 !== t3f8in ? t3f8in : function () {
            return this['parentNode'];
        }, ikpx18 = null !== (s9r2j98u = null === (jrp173ny = Object['getOwnPropertyDescriptor'](Node['prototype'], 'nextSibling')) || void 0x0 === jrp173ny ? void 0x0 : jrp173ny['get']) && void 0x0 !== s9r2j98u ? s9r2j98u : function () {
            return this['nextSibling'];
        };
    function fvd2y(ou92zwz) {
        ou92zwz = ou92zwz['prototype'];
        ou92zwz['hasOwnProperty']('after') || Object['defineProperty'](ou92zwz, 'after', {
            'configurable': !0x0,
            'enumerable': !0x0,
            'writable': !0x0,
            'value': function (r8rpdk61) {
                for (var ojquu9 = [], lwbwk0k = 0x0; lwbwk0k < arguments['length']; ++lwbwk0k)
                    ojquu9[lwbwk0k] = arguments[lwbwk0k];
                lwbwk0k = cdh911['call'](this);
                if (null !== lwbwk0k) {
                    var nq3t9r49 = ikpx18['call'](this);
                    ojquu9 = y5jf9283(ojquu9);
                    for (var r63l8z8 = ojquu9['next'](); !r63l8z8['done']; r63l8z8 = ojquu9['next']())
                        r63l8z8 = r63l8z8['value'], m3l1u2n6e['call'](lwbwk0k, 'string' === typeof r63l8z8 ? document['createTextNode'](r63l8z8) : r63l8z8, nq3t9r49);
                }
            }
        });
    }
    fvd2y(CharacterData);
    fvd2y(Element);
    var lwqag82, n23hjg, ui3c6pq = Node['prototype']['insertBefore'], t2slu5 = null !== (n23hjg = null === (lwqag82 = Object['getOwnPropertyDescriptor'](Node['prototype'], 'parentNode')) || void 0x0 === lwqag82 ? void 0x0 : lwqag82['get']) && void 0x0 !== n23hjg ? n23hjg : function () {
            return this['parentNode'];
        };
    function f6y3a451t(r25qry8z) {
        r25qry8z = r25qry8z['prototype'];
        r25qry8z['hasOwnProperty']('before') || Object['defineProperty'](r25qry8z, 'before', {
            'configurable': !0x0,
            'enumerable': !0x0,
            'writable': !0x0,
            'value': function (yb4vecx) {
                for (var p74od = [], r70we76 = 0x0; r70we76 < arguments['length']; ++r70we76)
                    p74od[r70we76] = arguments[r70we76];
                r70we76 = t2slu5['call'](this);
                if (null !== r70we76) {
                    p74od = y5jf9283(p74od);
                    for (var omlc8k = p74od['next'](); !omlc8k['done']; omlc8k = p74od['next']())
                        omlc8k = omlc8k['value'], ui3c6pq['call'](r70we76, 'string' === typeof omlc8k ? document['createTextNode'](omlc8k) : omlc8k, this);
                }
            }
        });
    }
    f6y3a451t(CharacterData);
    f6y3a451t(Element);
    var x0net, eegr22n77, knu88niku = Node['prototype']['removeChild'], dpi0e = null !== (eegr22n77 = null === (x0net = Object['getOwnPropertyDescriptor'](Node['prototype'], 'parentNode')) || void 0x0 === x0net ? void 0x0 : x0net['get']) && void 0x0 !== eegr22n77 ? eegr22n77 : function () {
            return this['parentNode'];
        };
    function no0yu(x7a9zii42) {
        x7a9zii42 = x7a9zii42['prototype'];
        x7a9zii42['hasOwnProperty']('remove') || Object['defineProperty'](x7a9zii42, 'remove', {
            'configurable': !0x0,
            'enumerable': !0x0,
            'writable': !0x0,
            'value': function () {
                var vzg30u3 = dpi0e['call'](this);
                vzg30u3 && knu88niku['call'](vzg30u3, this);
            }
        });
    }
    no0yu(CharacterData);
    no0yu(Element);
    var l4hb6hl, c858p2bh5, i75l070o = Node['prototype']['insertBefore'], n46gb78 = Node['prototype']['removeChild'], u9ej36mz2 = null !== (c858p2bh5 = null === (l4hb6hl = Object['getOwnPropertyDescriptor'](Node['prototype'], 'parentNode')) || void 0x0 === l4hb6hl ? void 0x0 : l4hb6hl['get']) && void 0x0 !== c858p2bh5 ? c858p2bh5 : function () {
            return this['parentNode'];
        };
    function j813nlxyp(m51aod) {
        m51aod = m51aod['prototype'];
        m51aod['hasOwnProperty']('replaceWith') || Object['defineProperty'](m51aod, 'replaceWith', {
            'configurable': !0x0,
            'enumerable': !0x0,
            'writable': !0x0,
            'value': function (stktu1rr) {
                for (var mk7ds = [], jg3c0cn9y = 0x0; jg3c0cn9y < arguments['length']; ++jg3c0cn9y)
                    mk7ds[jg3c0cn9y] = arguments[jg3c0cn9y];
                jg3c0cn9y = u9ej36mz2['call'](this);
                if (null !== jg3c0cn9y) {
                    mk7ds = y5jf9283(mk7ds);
                    for (var x8193281w = mk7ds['next'](); !x8193281w['done']; x8193281w = mk7ds['next']())
                        x8193281w = x8193281w['value'], i75l070o['call'](jg3c0cn9y, 'string' === typeof x8193281w ? document['createTextNode'](x8193281w) : x8193281w, this);
                    n46gb78['call'](jg3c0cn9y, this);
                }
            }
        });
    }
    j813nlxyp(CharacterData);
    j813nlxyp(Element);
    var bw14m4ji = window['Element']['prototype'], zfl0pu7 = window['HTMLElement']['prototype'], g952s4885 = window['SVGElement']['prototype'];
    !zfl0pu7['hasOwnProperty']('classList') || bw14m4ji['hasOwnProperty']('classList') || g952s4885['hasOwnProperty']('classList') || Object['defineProperty'](bw14m4ji, 'classList', Object['getOwnPropertyDescriptor'](zfl0pu7, 'classList'));
    var hjpzi42em = Element['prototype'], a4e647 = Element['prototype']['hasAttribute'], g91gwdw = Element['prototype']['setAttribute'], t47is4 = Element['prototype']['removeAttribute'];
    hjpzi42em['hasOwnProperty']('toggleAttribute') || (hjpzi42em['toggleAttribute'] = function (g72548, l90qj07) {
        if (void 0x0 === l90qj07) {
            if (a4e647['call'](this, g72548))
                return t47is4['call'](this, g72548), !0x1;
            g91gwdw['call'](this, g72548, '');
            return !0x0;
        }
        if (l90qj07)
            return a4e647['call'](this, g72548) || g91gwdw['call'](this, g72548, ''), !0x0;
        t47is4['call'](this, g72548);
        return !0x1;
    });
    var ca44se1 = document['createElement']('style');
    ca44se1['textContent'] = 'body\x20{transition:\x20opacity\x20ease-in\x200.2s;\x20}\x20\x0abody[unresolved]\x20{opacity:\x200;\x20display:\x20block;\x20overflow:\x20hidden;\x20position:\x20relative;\x20}\x20\x0a';
    var nb3p35q = document['querySelector']('head');
    nb3p35q['insertBefore'](ca44se1, nb3p35q['firstChild']);
    var nx674bdc = window;
    nx674bdc['WebComponents'] = nx674bdc['WebComponents'] || { 'flags': {} };
    var w5u8s52t = document['querySelector']('script[src*=\x22webcomponents-bundle\x22]'), z4hg5n6 = /wc-(.+)/, ba2qz1v = {};
    if (!ba2qz1v['noOpts']) {
        location['search']['slice'](0x1)['split']('&')['forEach'](function (dn04j66) {
            dn04j66 = dn04j66['split']('=');
            var v8276kc;
            dn04j66[0x0] && (v8276kc = dn04j66[0x0]['match'](z4hg5n6)) && (ba2qz1v[v8276kc[0x1]] = dn04j66[0x1] || !0x0);
        });
        if (w5u8s52t)
            for (var elh5j2 = 0x0, wve9lgzmm = void 0x0; wve9lgzmm = w5u8s52t['attributes'][elh5j2]; elh5j2++)
                'src' !== wve9lgzmm['name'] && (ba2qz1v[wve9lgzmm['name']] = wve9lgzmm['value'] || !0x0);
        var dxyw1 = {};
        ba2qz1v['log'] && ba2qz1v['log']['split'] && ba2qz1v['log']['split'](',')['forEach'](function (ae4di) {
            dxyw1[ae4di] = !0x0;
        });
        ba2qz1v['log'] = dxyw1;
    }
    nx674bdc['WebComponents']['flags'] = ba2qz1v;
    var qb6159s = ba2qz1v['shadydom'];
    if (qb6159s) {
        nx674bdc['ShadyDOM'] = nx674bdc['ShadyDOM'] || {};
        nx674bdc['ShadyDOM']['force'] = qb6159s;
        var pjx631 = ba2qz1v['noPatch'];
        nx674bdc['ShadyDOM']['noPatch'] = 'true' === pjx631 ? !0x0 : pjx631;
    }
    var ov5w16 = ba2qz1v['register'] || ba2qz1v['ce'];
    ov5w16 && window['customElements'] && (nx674bdc['customElements']['forcePolyfill'] = ov5w16);
    (function () {
        function d6nvhv() {
        }
        function tmlhxxng4(itg39, rlt51vp92) {
            if (!itg39['childNodes']['length'])
                return [];
            switch (itg39['nodeType']) {
            case Node['DOCUMENT_NODE']:
                return szafxn617['call'](itg39, rlt51vp92);
            case Node['DOCUMENT_FRAGMENT_NODE']:
                return nequq['call'](itg39, rlt51vp92);
            default:
                return t2u26['call'](itg39, rlt51vp92);
            }
        }
        var lt25rs6 = 'undefined' === typeof HTMLTemplateElement, v59chv7 = !(document['createDocumentFragment']()['cloneNode']() instanceof DocumentFragment), e9u2184i = !0x1;
        /Trident/['test'](navigator['userAgent']) && (function () {
            function gpdz2hl(u29xpp9b, o76ydvo) {
                if (u29xpp9b instanceof DocumentFragment)
                    for (var y7uo8q5r; y7uo8q5r = u29xpp9b['firstChild'];)
                        j8018['call'](this, y7uo8q5r, o76ydvo);
                else
                    j8018['call'](this, u29xpp9b, o76ydvo);
                return u29xpp9b;
            }
            e9u2184i = !0x0;
            var w01cc = Node['prototype']['cloneNode'];
            Node['prototype']['cloneNode'] = function (rsb73kbt) {
                rsb73kbt = w01cc['call'](this, rsb73kbt);
                this instanceof DocumentFragment && (rsb73kbt['__proto__'] = DocumentFragment['prototype']);
                return rsb73kbt;
            };
            DocumentFragment['prototype']['querySelectorAll'] = HTMLElement['prototype']['querySelectorAll'];
            DocumentFragment['prototype']['querySelector'] = HTMLElement['prototype']['querySelector'];
            Object['defineProperties'](DocumentFragment['prototype'], {
                'nodeType': {
                    'get': function () {
                        return Node['DOCUMENT_FRAGMENT_NODE'];
                    },
                    'configurable': !0x0
                },
                'localName': {
                    'get': function () {
                    },
                    'configurable': !0x0
                },
                'nodeName': {
                    'get': function () {
                        return '#document-fragment';
                    },
                    'configurable': !0x0
                }
            });
            var j8018 = Node['prototype']['insertBefore'];
            Node['prototype']['insertBefore'] = gpdz2hl;
            var y8ht7x = Node['prototype']['appendChild'];
            Node['prototype']['appendChild'] = function (x06ao) {
                x06ao instanceof DocumentFragment ? gpdz2hl['call'](this, x06ao, null) : y8ht7x['call'](this, x06ao);
                return x06ao;
            };
            var kaf83mi6 = Node['prototype']['removeChild'], h4l1t5 = Node['prototype']['replaceChild'];
            Node['prototype']['replaceChild'] = function (b4218en, a4b3qm0) {
                b4218en instanceof DocumentFragment ? (gpdz2hl['call'](this, b4218en, a4b3qm0), kaf83mi6['call'](this, a4b3qm0)) : h4l1t5['call'](this, b4218en, a4b3qm0);
                return a4b3qm0;
            };
            Document['prototype']['createDocumentFragment'] = function () {
                var ywdtb9 = this['createElement']('df');
                ywdtb9['__proto__'] = DocumentFragment['prototype'];
                return ywdtb9;
            };
            var jbz91h = Document['prototype']['importNode'];
            Document['prototype']['importNode'] = function (yz8f79209, i4i9d5) {
                i4i9d5 = jbz91h['call'](this, yz8f79209, i4i9d5 || !0x1);
                yz8f79209 instanceof DocumentFragment && (i4i9d5['__proto__'] = DocumentFragment['prototype']);
                return i4i9d5;
            };
        }());
        var y1g9pzv = Node['prototype']['cloneNode'], dp4am4 = Document['prototype']['createElement'], mg763uk7f = Document['prototype']['importNode'], qx8x3 = Node['prototype']['removeChild'], bx1221h1 = Node['prototype']['appendChild'], km2zbmo97 = Node['prototype']['replaceChild'], q7189t0mx = DOMParser['prototype']['parseFromString'], do411f = Object['getOwnPropertyDescriptor'](window['HTMLElement']['prototype'], 'innerHTML') || {
                'get': function () {
                    return this['innerHTML'];
                },
                'set': function (z3x13h758) {
                    this['innerHTML'] = z3x13h758;
                }
            }, or3kb17 = Object['getOwnPropertyDescriptor'](window['Node']['prototype'], 'childNodes') || {
                'get': function () {
                    return this['childNodes'];
                }
            }, t2u26 = Element['prototype']['querySelectorAll'], szafxn617 = Document['prototype']['querySelectorAll'], nequq = DocumentFragment['prototype']['querySelectorAll'], m44tch = (function () {
                if (!lt25rs6) {
                    var es5qm = document['createElement']('template'), jd2ppw = document['createElement']('template');
                    jd2ppw['content']['appendChild'](document['createElement']('div'));
                    es5qm['content']['appendChild'](jd2ppw);
                    es5qm = es5qm['cloneNode'](!0x0);
                    return 0x0 === es5qm['content']['childNodes']['length'] || 0x0 === es5qm['content']['firstChild']['content']['childNodes']['length'] || v59chv7;
                }
            }());
        if (lt25rs6) {
            var sy0kxbg = document['implementation']['createHTMLDocument']('template'), sp40f4z = !0x0, s38ug90i = document['createElement']('style');
            s38ug90i['textContent'] = 'template{display:none;}';
            var ig5e0o7gm = document['head'];
            ig5e0o7gm['insertBefore'](s38ug90i, ig5e0o7gm['firstElementChild']);
            d6nvhv['prototype'] = Object['create'](HTMLElement['prototype']);
            var o6lpj6 = !document['createElement']('div')['hasOwnProperty']('innerHTML');
            d6nvhv['Z'] = function (m35o9u7c) {
                if (!m35o9u7c['content'] && m35o9u7c['namespaceURI'] === document['documentElement']['namespaceURI']) {
                    m35o9u7c['content'] = sy0kxbg['createDocumentFragment']();
                    for (var z540q3hj; z540q3hj = m35o9u7c['firstChild'];)
                        bx1221h1['call'](m35o9u7c['content'], z540q3hj);
                    if (o6lpj6)
                        m35o9u7c['__proto__'] = d6nvhv['prototype'];
                    else if (m35o9u7c['cloneNode'] = function (x1ep07x59) {
                            return d6nvhv['va'](this, x1ep07x59);
                        }, sp40f4z)
                        try {
                            ks01908(m35o9u7c), cytntqr(m35o9u7c);
                        } catch (y49eao5q) {
                            sp40f4z = !0x1;
                        }
                    d6nvhv['bootstrap'](m35o9u7c['content']);
                }
            };
            var k2l89 = {
                    'option': ['select'],
                    'thead': ['table'],
                    'col': [
                        'colgroup',
                        'table'
                    ],
                    'tr': [
                        'tbody',
                        'table'
                    ],
                    'th': [
                        'tr',
                        'tbody',
                        'table'
                    ],
                    'td': [
                        'tr',
                        'tbody',
                        'table'
                    ]
                }, ks01908 = function (ahyrreef2) {
                    Object['defineProperty'](ahyrreef2, 'innerHTML', {
                        'get': function () {
                            return m783j(this);
                        },
                        'set': function (jo8e0u01g) {
                            var ias87rh0 = k2l89[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i['exec'](jo8e0u01g) || [
                                '',
                                ''
                            ])[0x1]['toLowerCase']()];
                            if (ias87rh0)
                                for (var j2508u = 0x0; j2508u < ias87rh0['length']; j2508u++)
                                    jo8e0u01g = '<' + ias87rh0[j2508u] + '>' + jo8e0u01g + '</' + ias87rh0[j2508u] + '>';
                            sy0kxbg['body']['innerHTML'] = jo8e0u01g;
                            for (d6nvhv['bootstrap'](sy0kxbg); this['content']['firstChild'];)
                                qx8x3['call'](this['content'], this['content']['firstChild']);
                            jo8e0u01g = sy0kxbg['body'];
                            if (ias87rh0)
                                for (j2508u = 0x0; j2508u < ias87rh0['length']; j2508u++)
                                    jo8e0u01g = jo8e0u01g['lastChild'];
                            for (; jo8e0u01g['firstChild'];)
                                bx1221h1['call'](this['content'], jo8e0u01g['firstChild']);
                        },
                        'configurable': !0x0
                    });
                }, cytntqr = function (u5jnxm0) {
                    Object['defineProperty'](u5jnxm0, 'outerHTML', {
                        'get': function () {
                            return '<template>' + this['innerHTML'] + '</template>';
                        },
                        'set': function (mn7chfo75) {
                            if (this['parentNode']) {
                                sy0kxbg['body']['innerHTML'] = mn7chfo75;
                                for (mn7chfo75 = this['ownerDocument']['createDocumentFragment'](); sy0kxbg['body']['firstChild'];)
                                    bx1221h1['call'](mn7chfo75, sy0kxbg['body']['firstChild']);
                                km2zbmo97['call'](this['parentNode'], mn7chfo75, this);
                            } else
                                throw Error('Failed\x20to\x20set\x20the\x20\x27outerHTML\x27\x20property\x20on\x20\x27Element\x27:\x20This\x20element\x20has\x20no\x20parent\x20node.');
                        },
                        'configurable': !0x0
                    });
                };
            ks01908(d6nvhv['prototype']);
            cytntqr(d6nvhv['prototype']);
            d6nvhv['bootstrap'] = function (symcj) {
                symcj = tmlhxxng4(symcj, 'template');
                for (var e2nc09134 = 0x0, fmst3 = symcj['length'], vaentk; e2nc09134 < fmst3 && (vaentk = symcj[e2nc09134]); e2nc09134++)
                    d6nvhv['Z'](vaentk);
            };
            document['addEventListener']('DOMContentLoaded', function () {
                d6nvhv['bootstrap'](document);
            });
            Document['prototype']['createElement'] = function () {
                var n493p77n5 = dp4am4['apply'](this, arguments);
                'template' === n493p77n5['localName'] && d6nvhv['Z'](n493p77n5);
                return n493p77n5;
            };
            DOMParser['prototype']['parseFromString'] = function () {
                var o0l62920 = q7189t0mx['apply'](this, arguments);
                d6nvhv['bootstrap'](o0l62920);
                return o0l62920;
            };
            Object['defineProperty'](HTMLElement['prototype'], 'innerHTML', {
                'get': function () {
                    return m783j(this);
                },
                'set': function (pg2p3) {
                    do411f['set']['call'](this, pg2p3);
                    d6nvhv['bootstrap'](this);
                },
                'configurable': !0x0,
                'enumerable': !0x0
            });
            var m92r2 = /[&\u00A0"]/g, u2p46 = /[&\u00A0<>]/g, h3ti118rb = function (wm36b21m) {
                    switch (wm36b21m) {
                    case '&':
                        return '&amp;';
                    case '<':
                        return '&lt;';
                    case '>':
                        return '&gt;';
                    case '\x22':
                        return '&quot;';
                    case '\u00a0':
                        return '&nbsp;';
                    }
                };
            s38ug90i = function (k6hmu2) {
                for (var wrvy9uxs = {}, twes7 = 0x0; twes7 < k6hmu2['length']; twes7++)
                    wrvy9uxs[k6hmu2[twes7]] = !0x0;
                return wrvy9uxs;
            };
            var g298i = s38ug90i('area\x20base\x20br\x20col\x20command\x20embed\x20hr\x20img\x20input\x20keygen\x20link\x20meta\x20param\x20source\x20track\x20wbr'['split']('\x20')), u089g9j = s38ug90i('style\x20script\x20xmp\x20iframe\x20noembed\x20noframes\x20plaintext\x20noscript'['split']('\x20')), m783j = function (n88a36b, al619) {
                    'template' === n88a36b['localName'] && (n88a36b = n88a36b['content']);
                    for (var o8ymi = '', lrb35v3l9 = al619 ? al619(n88a36b) : or3kb17['get']['call'](n88a36b), mo751a1o6 = 0x0, b5g9rt = lrb35v3l9['length'], n5yae4hf7; mo751a1o6 < b5g9rt && (n5yae4hf7 = lrb35v3l9[mo751a1o6]); mo751a1o6++) {
                        m656nl978: {
                            var g2k1w5trw = n5yae4hf7;
                            var i1rog4 = n88a36b;
                            var gss7fd = al619;
                            switch (g2k1w5trw['nodeType']) {
                            case Node['ELEMENT_NODE']:
                                for (var y5hkp5 = g2k1w5trw['localName'], qwk4l = '<' + y5hkp5, uu2uro95 = g2k1w5trw['attributes'], m0pxn628 = 0x0; i1rog4 = uu2uro95[m0pxn628]; m0pxn628++)
                                    qwk4l += '\x20' + i1rog4['name'] + '=\x22' + i1rog4['value']['replace'](m92r2, h3ti118rb) + '\x22';
                                qwk4l += '>';
                                g2k1w5trw = g298i[y5hkp5] ? qwk4l : qwk4l + m783j(g2k1w5trw, gss7fd) + '</' + y5hkp5 + '>';
                                break m656nl978;
                            case Node['TEXT_NODE']:
                                g2k1w5trw = g2k1w5trw['data'];
                                g2k1w5trw = i1rog4 && u089g9j[i1rog4['localName']] ? g2k1w5trw : g2k1w5trw['replace'](u2p46, h3ti118rb);
                                break m656nl978;
                            case Node['COMMENT_NODE']:
                                g2k1w5trw = '<!--' + g2k1w5trw['data'] + '-->';
                                break m656nl978;
                            default:
                                throw window['console']['error'](g2k1w5trw), Error('not\x20implemented');
                            }
                        }
                        o8ymi += g2k1w5trw;
                    }
                    return o8ymi;
                };
        }
        if (lt25rs6 || m44tch) {
            d6nvhv['va'] = function (w6r73, qg33rm) {
                var mrxs75a5 = y1g9pzv['call'](w6r73, !0x1);
                this['Z'] && this['Z'](mrxs75a5);
                qg33rm && (bx1221h1['call'](mrxs75a5['content'], y1g9pzv['call'](w6r73['content'], !0x0)), xm0be0064(mrxs75a5['content'], w6r73['content']));
                return mrxs75a5;
            };
            var xm0be0064 = function (y2qguj, f8336) {
                    if (f8336['querySelectorAll'] && (f8336 = tmlhxxng4(f8336, 'template'), 0x0 !== f8336['length'])) {
                        y2qguj = tmlhxxng4(y2qguj, 'template');
                        for (var omz9fa = 0x0, f913m02v = y2qguj['length'], smk351zmz, l203k8b; omz9fa < f913m02v; omz9fa++)
                            l203k8b = f8336[omz9fa], smk351zmz = y2qguj[omz9fa], d6nvhv && d6nvhv['Z'] && d6nvhv['Z'](l203k8b), km2zbmo97['call'](smk351zmz['parentNode'], ms8w9em['call'](l203k8b, !0x0), smk351zmz);
                    }
                }, ms8w9em = Node['prototype']['cloneNode'] = function (qr2tj) {
                    if (!e9u2184i && v59chv7 && this instanceof DocumentFragment)
                        if (qr2tj)
                            var klhmc194 = gfo0p['call'](this['ownerDocument'], this, !0x0);
                        else
                            return this['ownerDocument']['createDocumentFragment']();
                    else
                        this['nodeType'] === Node['ELEMENT_NODE'] && 'template' === this['localName'] && this['namespaceURI'] == document['documentElement']['namespaceURI'] ? klhmc194 = d6nvhv['va'](this, qr2tj) : klhmc194 = y1g9pzv['call'](this, qr2tj);
                    qr2tj && xm0be0064(klhmc194, this);
                    return klhmc194;
                }, gfo0p = Document['prototype']['importNode'] = function (z1z96xf7n, m6e1c) {
                    m6e1c = m6e1c || !0x1;
                    if ('template' === z1z96xf7n['localName'])
                        return d6nvhv['va'](z1z96xf7n, m6e1c);
                    var q2u6kct0y = mg763uk7f['call'](this, z1z96xf7n, m6e1c);
                    if (m6e1c) {
                        xm0be0064(q2u6kct0y, z1z96xf7n);
                        z1z96xf7n = tmlhxxng4(q2u6kct0y, 'script:not([type]),script[type=\x22application/javascript\x22],script[type=\x22text/javascript\x22]');
                        for (var v04neg, l982z7 = 0x0; l982z7 < z1z96xf7n['length']; l982z7++) {
                            v04neg = z1z96xf7n[l982z7];
                            m6e1c = dp4am4['call'](document, 'script');
                            m6e1c['textContent'] = v04neg['textContent'];
                            for (var hcquf6l = v04neg['attributes'], gbk0k39 = 0x0, hs3b50; gbk0k39 < hcquf6l['length']; gbk0k39++)
                                hs3b50 = hcquf6l[gbk0k39], m6e1c['setAttribute'](hs3b50['name'], hs3b50['value']);
                            km2zbmo97['call'](v04neg['parentNode'], m6e1c, v04neg);
                        }
                    }
                    return q2u6kct0y;
                };
        }
        lt25rs6 && (window['HTMLTemplateElement'] = d6nvhv);
    }());
    function dc9d7z() {
    }
    dc9d7z['prototype']['toJSON'] = function () {
        return {};
    };
    function f9ql21b75(e779t7sz0) {
        e779t7sz0['__shady'] || (e779t7sz0['__shady'] = new dc9d7z());
        return e779t7sz0['__shady'];
    }
    function h85gd70(is67934) {
        return is67934 && is67934['__shady'];
    }
    ;
    var b975n9s7 = window['ShadyDOM'] || {};
    b975n9s7['cb'] = !(!Element['prototype']['attachShadow'] || !Node['prototype']['getRootNode']);
    var j7s17cz1r = Object['getOwnPropertyDescriptor'](Node['prototype'], 'firstChild');
    b975n9s7['D'] = !!(j7s17cz1r && j7s17cz1r['configurable'] && j7s17cz1r['get']);
    b975n9s7['Ba'] = b975n9s7['force'] || !b975n9s7['cb'];
    b975n9s7['J'] = b975n9s7['noPatch'] || !0x1;
    b975n9s7['ha'] = b975n9s7['preferPerformance'];
    b975n9s7['Da'] = 'on-demand' === b975n9s7['J'];
    var g5j1c5;
    var qf4vw94 = b975n9s7['querySelectorImplementation'];
    g5j1c5 = -0x1 < [
        'native',
        'selectorEngine'
    ]['indexOf'](qf4vw94) ? qf4vw94 : void 0x0;
    b975n9s7['wb'] = g5j1c5;
    b975n9s7['Ra'] = navigator['userAgent']['match']('Trident');
    function uf2hhk0() {
        return Document['prototype']['msElementsFromPoint'] ? 'msElementsFromPoint' : 'elementsFromPoint';
    }
    function fyg9i419(yk3kw) {
        return (yk3kw = h85gd70(yk3kw)) && void 0x0 !== yk3kw['firstChild'];
    }
    function y34jicv(pj9u6) {
        return pj9u6 instanceof ShadowRoot;
    }
    function y432i41ep(x3217e) {
        return (x3217e = (x3217e = h85gd70(x3217e)) && x3217e['root']) && s6e28mt(x3217e);
    }
    var l5327r = Element['prototype'], ku8wv8 = l5327r['matches'] || l5327r['matchesSelector'] || l5327r['mozMatchesSelector'] || l5327r['msMatchesSelector'] || l5327r['oMatchesSelector'] || l5327r['webkitMatchesSelector'], p8472o2q = document['createTextNode'](''), q914g = 0x0, z7w06v2 = [];
    new MutationObserver(function () {
        for (; z7w06v2['length'];)
            try {
                z7w06v2['shift']()();
            } catch (ul97dr6l6) {
                throw p8472o2q['textContent'] = q914g++, ul97dr6l6;
            }
    })['observe'](p8472o2q, { 'characterData': !0x0 });
    function w9j3k(u6683m6) {
        z7w06v2['push'](u6683m6);
        p8472o2q['textContent'] = q914g++;
    }
    var iq781e048 = document['contains'] ? function (bbqr2n4, n51k2c5c) {
        return bbqr2n4['__shady_native_contains'](n51k2c5c);
    } : function (q56a4j, u3k9mj) {
        return q56a4j === u3k9mj || q56a4j['documentElement'] && q56a4j['documentElement']['__shady_native_contains'](u3k9mj);
    };
    function t4eau90l(y152n1, mg413of) {
        for (; mg413of;) {
            if (mg413of == y152n1)
                return !0x0;
            mg413of = mg413of['__shady_parentNode'];
        }
        return !0x1;
    }
    function k459io(zw358p6j) {
        for (var zh1r633ed = zw358p6j['length'] - 0x1; 0x0 <= zh1r633ed; zh1r633ed--) {
            var ij011 = zw358p6j[zh1r633ed], os996ah = ij011['getAttribute']('id') || ij011['getAttribute']('name');
            os996ah && 'length' !== os996ah && isNaN(os996ah) && (zw358p6j[os996ah] = ij011);
        }
        zw358p6j['item'] = function (ggt04e9) {
            return zw358p6j[ggt04e9];
        };
        zw358p6j['namedItem'] = function (r844f4) {
            if ('length' !== r844f4 && isNaN(r844f4) && zw358p6j[r844f4])
                return zw358p6j[r844f4];
            for (var dnn06493 = y5jf9283(zw358p6j), sz812wmrb = dnn06493['next'](); !sz812wmrb['done']; sz812wmrb = dnn06493['next']())
                if (sz812wmrb = sz812wmrb['value'], (sz812wmrb['getAttribute']('id') || sz812wmrb['getAttribute']('name')) == r844f4)
                    return sz812wmrb;
            return null;
        };
        return zw358p6j;
    }
    function x1yh1j(fx528) {
        var p7218 = [];
        for (fx528 = fx528['__shady_native_firstChild']; fx528; fx528 = fx528['__shady_native_nextSibling'])
            p7218['push'](fx528);
        return p7218;
    }
    function kvht8535(oz9710) {
        var qz6gda04z = [];
        for (oz9710 = oz9710['__shady_firstChild']; oz9710; oz9710 = oz9710['__shady_nextSibling'])
            qz6gda04z['push'](oz9710);
        return qz6gda04z;
    }
    function m00mp1wuh(r97xn, we7n8x, sq73195) {
        sq73195['configurable'] = !0x0;
        if (sq73195['value'])
            r97xn[we7n8x] = sq73195['value'];
        else
            try {
                Object['defineProperty'](r97xn, we7n8x, sq73195);
            } catch (xo9o486) {
            }
    }
    function pg0pd67z8(mndeipa, zf74v9ca1, rcn534, rgidcf) {
        rcn534 = void 0x0 === rcn534 ? '' : rcn534;
        for (var rfs23z in zf74v9ca1)
            rgidcf && 0x0 <= rgidcf['indexOf'](rfs23z) || m00mp1wuh(mndeipa, rcn534 + rfs23z, zf74v9ca1[rfs23z]);
    }
    function r0g6uh4(rz7wo7j74, zp9k1zh) {
        for (var m6s54 in zp9k1zh)
            m6s54 in rz7wo7j74 && m00mp1wuh(rz7wo7j74, m6s54, zp9k1zh[m6s54]);
    }
    function o1fls6d(y7rd7) {
        var x35cz9 = {};
        Object['getOwnPropertyNames'](y7rd7)['forEach'](function (is1kz5gy) {
            x35cz9[is1kz5gy] = Object['getOwnPropertyDescriptor'](y7rd7, is1kz5gy);
        });
        return x35cz9;
    }
    function zhgvkbw4z(g5q8p, vr117a) {
        for (var wib18835i = Object['getOwnPropertyNames'](vr117a), w7ief = 0x0, gyxj629wv; w7ief < wib18835i['length']; w7ief++)
            gyxj629wv = wib18835i[w7ief], g5q8p[gyxj629wv] = vr117a[gyxj629wv];
    }
    function ba5283(c117n) {
        return c117n instanceof Node ? c117n : document['createTextNode']('' + c117n);
    }
    function jq4rmkaa3(e698449) {
        for (var ana9on8 = [], il6h0b = 0x0; il6h0b < arguments['length']; ++il6h0b)
            ana9on8[il6h0b] = arguments[il6h0b];
        if (0x1 === ana9on8['length'])
            return ba5283(ana9on8[0x0]);
        il6h0b = document['createDocumentFragment']();
        ana9on8 = y5jf9283(ana9on8);
        for (var ba2jz2uy = ana9on8['next'](); !ba2jz2uy['done']; ba2jz2uy = ana9on8['next']())
            il6h0b['appendChild'](ba5283(ba2jz2uy['value']));
        return il6h0b;
    }
    function a7680(vct9ho) {
        var pj07m8;
        for (pj07m8 = void 0x0 === pj07m8 ? 0x1 : pj07m8; 0x0 < pj07m8; pj07m8--)
            vct9ho = vct9ho['reduce'](function (bae0939r, bcr7h) {
                Array['isArray'](bcr7h) ? bae0939r['push']['apply'](bae0939r, v8f85q69(bcr7h)) : bae0939r['push'](bcr7h);
                return bae0939r;
            }, []);
        return vct9ho;
    }
    function u6m2d45um(i8z28cd87) {
        var r19l2l79 = [], y0z3eyof = new Set();
        i8z28cd87 = y5jf9283(i8z28cd87);
        for (var cb5dq88e = i8z28cd87['next'](); !cb5dq88e['done']; cb5dq88e = i8z28cd87['next']())
            cb5dq88e = cb5dq88e['value'], y0z3eyof['has'](cb5dq88e) || (r19l2l79['push'](cb5dq88e), y0z3eyof['add'](cb5dq88e));
        return r19l2l79;
    }
    ;
    var tb2ka5 = [], fc2q2;
    function ah541m6(t559m07r2) {
        fc2q2 || (fc2q2 = !0x0, w9j3k(i6kiud));
        tb2ka5['push'](t559m07r2);
    }
    function i6kiud() {
        fc2q2 = !0x1;
        for (var jr50gg21 = !!tb2ka5['length']; tb2ka5['length'];)
            tb2ka5['shift']()();
        return jr50gg21;
    }
    i6kiud['list'] = tb2ka5;
    function jns4rim4() {
        this['g'] = !0x1;
        this['addedNodes'] = [];
        this['removedNodes'] = [];
        this['qa'] = new Set();
    }
    function a180m3(fv1756uq) {
        fv1756uq['g'] || (fv1756uq['g'] = !0x0, w9j3k(function () {
            fv1756uq['flush']();
        }));
    }
    jns4rim4['prototype']['flush'] = function () {
        if (this['g']) {
            this['g'] = !0x1;
            var na65b16hy = this['takeRecords']();
            na65b16hy['length'] && this['qa']['forEach'](function (mcm96393) {
                mcm96393(na65b16hy);
            });
        }
    };
    jns4rim4['prototype']['takeRecords'] = function () {
        if (this['addedNodes']['length'] || this['removedNodes']['length']) {
            var x29920 = [{
                    'addedNodes': this['addedNodes'],
                    'removedNodes': this['removedNodes']
                }];
            this['addedNodes'] = [];
            this['removedNodes'] = [];
            return x29920;
        }
        return [];
    };
    function jds96w(c7dgykzu, ac39sf90s) {
        var phof265fc = f9ql21b75(c7dgykzu);
        phof265fc['ga'] || (phof265fc['ga'] = new jns4rim4());
        phof265fc['ga']['qa']['add'](ac39sf90s);
        var g723xcfc = phof265fc['ga'];
        return {
            'Va': ac39sf90s,
            'X': g723xcfc,
            'Wa': c7dgykzu,
            'takeRecords': function () {
                return g723xcfc['takeRecords']();
            }
        };
    }
    function vt1c5(v4d887o) {
        var o5ta2pl = v4d887o && v4d887o['X'];
        o5ta2pl && (o5ta2pl['qa']['delete'](v4d887o['Va']), o5ta2pl['qa']['size'] || (f9ql21b75(v4d887o['Wa'])['ga'] = null));
    }
    function v1r4l9f(kgpuf1pqz, xc8ez3) {
        var ewcr4tt8q = xc8ez3['getRootNode']();
        return kgpuf1pqz['map'](function (mhc1jd) {
            var z7qy678q = ewcr4tt8q === mhc1jd['target']['getRootNode']();
            if (z7qy678q && mhc1jd['addedNodes']) {
                if (z7qy678q = []['slice']['call'](mhc1jd['addedNodes'])['filter'](function (i338j2ov) {
                        return ewcr4tt8q === i338j2ov['getRootNode']();
                    }), z7qy678q['length'])
                    return mhc1jd = Object['create'](mhc1jd), Object['defineProperty'](mhc1jd, 'addedNodes', {
                        'value': z7qy678q,
                        'configurable': !0x0
                    }), mhc1jd;
            } else if (z7qy678q)
                return mhc1jd;
        })['filter'](function (ctew5c) {
            return ctew5c;
        });
    }
    ;
    var dtj7z8 = /[&\u00A0"]/g, mp43i0l6 = /[&\u00A0<>]/g;
    function l8a9116i(h8chw1q) {
        switch (h8chw1q) {
        case '&':
            return '&amp;';
        case '<':
            return '&lt;';
        case '>':
            return '&gt;';
        case '\x22':
            return '&quot;';
        case '\u00a0':
            return '&nbsp;';
        }
    }
    function q341h65m0(ax8m462w2) {
        for (var g9y88i00 = {}, e01tqqp = 0x0; e01tqqp < ax8m462w2['length']; e01tqqp++)
            g9y88i00[ax8m462w2[e01tqqp]] = !0x0;
        return g9y88i00;
    }
    var gx52gh = q341h65m0('area\x20base\x20br\x20col\x20command\x20embed\x20hr\x20img\x20input\x20keygen\x20link\x20meta\x20param\x20source\x20track\x20wbr'['split']('\x20')), t93g13o4 = q341h65m0('style\x20script\x20xmp\x20iframe\x20noembed\x20noframes\x20plaintext\x20noscript'['split']('\x20'));
    function r16vou6fe(w5u9kb24, mu780j7s) {
        'template' === w5u9kb24['localName'] && (w5u9kb24 = w5u9kb24['content']);
        for (var l8843 = '', h9ovu5 = mu780j7s ? mu780j7s(w5u9kb24) : w5u9kb24['childNodes'], g6h830 = 0x0, u1f5dot = h9ovu5['length'], z6bej34d9 = void 0x0; g6h830 < u1f5dot && (z6bej34d9 = h9ovu5[g6h830]); g6h830++) {
            km0vdiv2h: {
                var qa14s = z6bej34d9;
                var b15k90s6x = w5u9kb24, u8dis58 = mu780j7s;
                switch (qa14s['nodeType']) {
                case Node['ELEMENT_NODE']:
                    b15k90s6x = qa14s['localName'];
                    for (var q7yk0 = '<' + b15k90s6x, y008561w5 = qa14s['attributes'], m53vtmz1 = 0x0, wqsuv229s; wqsuv229s = y008561w5[m53vtmz1]; m53vtmz1++)
                        q7yk0 += '\x20' + wqsuv229s['name'] + '=\x22' + wqsuv229s['value']['replace'](dtj7z8, l8a9116i) + '\x22';
                    q7yk0 += '>';
                    qa14s = gx52gh[b15k90s6x] ? q7yk0 : q7yk0 + r16vou6fe(qa14s, u8dis58) + '</' + b15k90s6x + '>';
                    break km0vdiv2h;
                case Node['TEXT_NODE']:
                    qa14s = qa14s['data'];
                    qa14s = b15k90s6x && t93g13o4[b15k90s6x['localName']] ? qa14s : qa14s['replace'](mp43i0l6, l8a9116i);
                    break km0vdiv2h;
                case Node['COMMENT_NODE']:
                    qa14s = '<!--' + qa14s['data'] + '-->';
                    break km0vdiv2h;
                default:
                    throw window['console']['error'](qa14s), Error('not\x20implemented');
                }
            }
            l8843 += qa14s;
        }
        return l8843;
    }
    ;
    var f773e = b975n9s7['D'], k2p15xf6i = {
            'querySelector': function (g4z7k) {
                return this['__shady_native_querySelector'](g4z7k);
            },
            'querySelectorAll': function (sxnw91wp) {
                return this['__shady_native_querySelectorAll'](sxnw91wp);
            }
        }, ef03738 = {};
    function oqk2fg35(e959v937) {
        ef03738[e959v937] = function (j9l2e9e8d) {
            return j9l2e9e8d['__shady_native_' + e959v937];
        };
    }
    function is396rqjl(j1i621, yge00s6) {
        pg0pd67z8(j1i621, yge00s6, '__shady_native_');
        for (var j2p7l338m in yge00s6)
            oqk2fg35(j2p7l338m);
    }
    function ndxdse(emmgn67u8, iz2ba) {
        iz2ba = void 0x0 === iz2ba ? [] : iz2ba;
        for (var a946r = 0x0; a946r < iz2ba['length']; a946r++) {
            var jk9m7 = iz2ba[a946r], x2cg38tm3 = Object['getOwnPropertyDescriptor'](emmgn67u8, jk9m7);
            x2cg38tm3 && (Object['defineProperty'](emmgn67u8, '__shady_native_' + jk9m7, x2cg38tm3), x2cg38tm3['value'] ? k2p15xf6i[jk9m7] || (k2p15xf6i[jk9m7] = x2cg38tm3['value']) : oqk2fg35(jk9m7));
        }
    }
    var w406l6z = document['createTreeWalker'](document, NodeFilter['SHOW_ALL'], null, !0x1), m2v4j0u72 = document['createTreeWalker'](document, NodeFilter['SHOW_ELEMENT'], null, !0x1), b83ps = document['implementation']['createHTMLDocument']('inert');
    function e7k6rh0(u1600yx7) {
        for (var gz10i76xu; gz10i76xu = u1600yx7['__shady_native_firstChild'];)
            u1600yx7['__shady_native_removeChild'](gz10i76xu);
    }
    var a9qxecty0 = [
            'firstElementChild',
            'lastElementChild',
            'children',
            'childElementCount'
        ], o33h8 = [
            'querySelector',
            'querySelectorAll',
            'append',
            'prepend',
            'replaceChildren'
        ];
    function wz2ud4r() {
        var xb4y6 = [
            'dispatchEvent',
            'addEventListener',
            'removeEventListener'
        ];
        window['EventTarget'] ? (ndxdse(window['EventTarget']['prototype'], xb4y6), void 0x0 === window['__shady_native_addEventListener'] && ndxdse(Window['prototype'], xb4y6)) : (ndxdse(Node['prototype'], xb4y6), ndxdse(Window['prototype'], xb4y6), ndxdse(XMLHttpRequest['prototype'], xb4y6));
        f773e ? ndxdse(Node['prototype'], 'parentNode\x20firstChild\x20lastChild\x20previousSibling\x20nextSibling\x20childNodes\x20parentElement\x20textContent'['split']('\x20')) : is396rqjl(Node['prototype'], {
            'parentNode': {
                'get': function () {
                    w406l6z['currentNode'] = this;
                    return w406l6z['parentNode']();
                }
            },
            'firstChild': {
                'get': function () {
                    w406l6z['currentNode'] = this;
                    return w406l6z['firstChild']();
                }
            },
            'lastChild': {
                'get': function () {
                    w406l6z['currentNode'] = this;
                    return w406l6z['lastChild']();
                }
            },
            'previousSibling': {
                'get': function () {
                    w406l6z['currentNode'] = this;
                    return w406l6z['previousSibling']();
                }
            },
            'nextSibling': {
                'get': function () {
                    w406l6z['currentNode'] = this;
                    return w406l6z['nextSibling']();
                }
            },
            'childNodes': {
                'get': function () {
                    var zrsqhj = [];
                    w406l6z['currentNode'] = this;
                    for (var s6su9 = w406l6z['firstChild'](); s6su9;)
                        zrsqhj['push'](s6su9), s6su9 = w406l6z['nextSibling']();
                    return zrsqhj;
                }
            },
            'parentElement': {
                'get': function () {
                    m2v4j0u72['currentNode'] = this;
                    return m2v4j0u72['parentNode']();
                }
            },
            'textContent': {
                'get': function () {
                    switch (this['nodeType']) {
                    case Node['ELEMENT_NODE']:
                    case Node['DOCUMENT_FRAGMENT_NODE']:
                        for (var aixgqm = document['createTreeWalker'](this, NodeFilter['SHOW_TEXT'], null, !0x1), i92y8k47c = '', v5503; v5503 = aixgqm['nextNode']();)
                            i92y8k47c += v5503['nodeValue'];
                        return i92y8k47c;
                    default:
                        return this['nodeValue'];
                    }
                },
                'set': function (z41mmis) {
                    if ('undefined' === typeof z41mmis || null === z41mmis)
                        z41mmis = '';
                    switch (this['nodeType']) {
                    case Node['ELEMENT_NODE']:
                    case Node['DOCUMENT_FRAGMENT_NODE']:
                        e7k6rh0(this);
                        (0x0 < z41mmis['length'] || this['nodeType'] === Node['ELEMENT_NODE']) && this['__shady_native_insertBefore'](document['createTextNode'](z41mmis), void 0x0);
                        break;
                    default:
                        this['nodeValue'] = z41mmis;
                    }
                }
            }
        });
        ndxdse(Node['prototype'], 'appendChild\x20insertBefore\x20removeChild\x20replaceChild\x20cloneNode\x20contains'['split']('\x20'));
        ndxdse(HTMLElement['prototype'], [
            'parentElement',
            'contains'
        ]);
        xb4y6 = {
            'firstElementChild': {
                'get': function () {
                    m2v4j0u72['currentNode'] = this;
                    return m2v4j0u72['firstChild']();
                }
            },
            'lastElementChild': {
                'get': function () {
                    m2v4j0u72['currentNode'] = this;
                    return m2v4j0u72['lastChild']();
                }
            },
            'children': {
                'get': function () {
                    var z9bvai = [];
                    m2v4j0u72['currentNode'] = this;
                    for (var rgq5sink4 = m2v4j0u72['firstChild'](); rgq5sink4;)
                        z9bvai['push'](rgq5sink4), rgq5sink4 = m2v4j0u72['nextSibling']();
                    return k459io(z9bvai);
                }
            },
            'childElementCount': {
                'get': function () {
                    return this['children'] ? this['children']['length'] : 0x0;
                }
            }
        };
        f773e ? (ndxdse(Element['prototype'], a9qxecty0), ndxdse(Element['prototype'], [
            'previousElementSibling',
            'nextElementSibling',
            'innerHTML',
            'className'
        ]), ndxdse(HTMLElement['prototype'], [
            'children',
            'innerHTML',
            'className'
        ])) : (is396rqjl(Element['prototype'], xb4y6), is396rqjl(Element['prototype'], {
            'previousElementSibling': {
                'get': function () {
                    m2v4j0u72['currentNode'] = this;
                    return m2v4j0u72['previousSibling']();
                }
            },
            'nextElementSibling': {
                'get': function () {
                    m2v4j0u72['currentNode'] = this;
                    return m2v4j0u72['nextSibling']();
                }
            },
            'innerHTML': {
                'get': function () {
                    return r16vou6fe(this, x1yh1j);
                },
                'set': function (r7xc1156) {
                    var s41h9k = 'template' === this['localName'] ? this['content'] : this;
                    e7k6rh0(s41h9k);
                    var jch92 = this['localName'] || 'div';
                    jch92 = this['namespaceURI'] && this['namespaceURI'] !== b83ps['namespaceURI'] ? b83ps['createElementNS'](this['namespaceURI'], jch92) : b83ps['createElement'](jch92);
                    jch92['innerHTML'] = r7xc1156;
                    for (r7xc1156 = 'template' === this['localName'] ? jch92['content'] : jch92; jch92 = r7xc1156['__shady_native_firstChild'];)
                        s41h9k['__shady_native_insertBefore'](jch92, void 0x0);
                }
            },
            'className': {
                'get': function () {
                    return this['getAttribute']('class') || '';
                },
                'set': function (i8a1u0v9y) {
                    this['setAttribute']('class', i8a1u0v9y);
                }
            }
        }));
        ndxdse(Element['prototype'], 'setAttribute\x20getAttribute\x20hasAttribute\x20removeAttribute\x20toggleAttribute\x20focus\x20blur'['split']('\x20'));
        ndxdse(Element['prototype'], o33h8);
        ndxdse(HTMLElement['prototype'], [
            'focus',
            'blur'
        ]);
        window['HTMLTemplateElement'] && ndxdse(window['HTMLTemplateElement']['prototype'], ['innerHTML']);
        f773e ? ndxdse(DocumentFragment['prototype'], a9qxecty0) : is396rqjl(DocumentFragment['prototype'], xb4y6);
        ndxdse(DocumentFragment['prototype'], o33h8);
        f773e ? (ndxdse(Document['prototype'], a9qxecty0), ndxdse(Document['prototype'], ['activeElement'])) : is396rqjl(Document['prototype'], xb4y6);
        ndxdse(Document['prototype'], [
            'importNode',
            'getElementById',
            'elementFromPoint',
            uf2hhk0()
        ]);
        ndxdse(Document['prototype'], o33h8);
    }
    ;
    var v10wk457b = o1fls6d({
            get 'childNodes'() {
                return this['__shady_childNodes'];
            },
            get 'firstChild'() {
                return this['__shady_firstChild'];
            },
            get 'lastChild'() {
                return this['__shady_lastChild'];
            },
            get 'childElementCount'() {
                return this['__shady_childElementCount'];
            },
            get 'children'() {
                return this['__shady_children'];
            },
            get 'firstElementChild'() {
                return this['__shady_firstElementChild'];
            },
            get 'lastElementChild'() {
                return this['__shady_lastElementChild'];
            },
            get 'shadowRoot'() {
                return this['__shady_shadowRoot'];
            }
        }), w5659 = o1fls6d({
            get 'textContent'() {
                return this['__shady_textContent'];
            },
            set 'textContent'(h30323) {
                this['__shady_textContent'] = h30323;
            },
            get 'innerHTML'() {
                return this['__shady_innerHTML'];
            },
            set 'innerHTML'(rx8ust) {
                this['__shady_innerHTML'] = rx8ust;
            }
        }), r75lm4u71 = o1fls6d({
            get 'parentElement'() {
                return this['__shady_parentElement'];
            },
            get 'parentNode'() {
                return this['__shady_parentNode'];
            },
            get 'nextSibling'() {
                return this['__shady_nextSibling'];
            },
            get 'previousSibling'() {
                return this['__shady_previousSibling'];
            },
            get 'nextElementSibling'() {
                return this['__shady_nextElementSibling'];
            },
            get 'previousElementSibling'() {
                return this['__shady_previousElementSibling'];
            },
            get 'className'() {
                return this['__shady_className'];
            },
            set 'className'(z90y4re) {
                this['__shady_className'] = z90y4re;
            }
        });
    function xur4y9(i3i53b9k) {
        for (var i9tz0sr in i3i53b9k) {
            var bwm9w8w4 = i3i53b9k[i9tz0sr];
            bwm9w8w4 && (bwm9w8w4['enumerable'] = !0x1);
        }
    }
    xur4y9(v10wk457b);
    xur4y9(w5659);
    xur4y9(r75lm4u71);
    var fn13i02wd = b975n9s7['D'] || !0x0 === b975n9s7['J'], yk68bzuj = fn13i02wd ? function () {
        } : function (rb75f1) {
            var byjv0 = f9ql21b75(rb75f1);
            byjv0['Ta'] || (byjv0['Ta'] = !0x0, r0g6uh4(rb75f1, r75lm4u71));
        }, f6a5531 = fn13i02wd ? function () {
        } : function (c73l952w) {
            var u35rxb = f9ql21b75(c73l952w);
            u35rxb['Sa'] || (u35rxb['Sa'] = !0x0, r0g6uh4(c73l952w, v10wk457b), window['customElements'] && window['customElements']['polyfillWrapFlushCallback'] && !b975n9s7['J'] || r0g6uh4(c73l952w, w5659));
        };
    var lsf65yc0 = '__eventWrappers' + Date['now'](), td7ha = (function () {
            var p1w02e5ct = Object['getOwnPropertyDescriptor'](Event['prototype'], 'composed');
            return p1w02e5ct ? function (iwlltd) {
                return p1w02e5ct['get']['call'](iwlltd);
            } : null;
        }()), dt0k06xet = (function () {
            function us612() {
            }
            var a5k8264od = !0x1, nw5428 = {
                    get 'capture'() {
                        a5k8264od = !0x0;
                        return !0x1;
                    }
                };
            window['addEventListener']('test', us612, nw5428);
            window['removeEventListener']('test', us612, nw5428);
            return a5k8264od;
        }());
    function z67161(rn77g) {
        if (null === rn77g || 'object' !== typeof rn77g && 'function' !== typeof rn77g) {
            var zmgr7m176 = !!rn77g;
            var k2270m67 = !0x1;
        } else {
            zmgr7m176 = !!rn77g['capture'];
            k2270m67 = !!rn77g['once'];
            var kd8n5 = rn77g['U'];
        }
        return {
            'Pa': kd8n5,
            'capture': zmgr7m176,
            'once': k2270m67,
            'Na': dt0k06xet ? rn77g : zmgr7m176
        };
    }
    var nw77y2fg = {
            'blur': !0x0,
            'focus': !0x0,
            'focusin': !0x0,
            'focusout': !0x0,
            'click': !0x0,
            'dblclick': !0x0,
            'mousedown': !0x0,
            'mouseenter': !0x0,
            'mouseleave': !0x0,
            'mousemove': !0x0,
            'mouseout': !0x0,
            'mouseover': !0x0,
            'mouseup': !0x0,
            'wheel': !0x0,
            'beforeinput': !0x0,
            'input': !0x0,
            'keydown': !0x0,
            'keyup': !0x0,
            'compositionstart': !0x0,
            'compositionupdate': !0x0,
            'compositionend': !0x0,
            'touchstart': !0x0,
            'touchend': !0x0,
            'touchmove': !0x0,
            'touchcancel': !0x0,
            'pointerover': !0x0,
            'pointerenter': !0x0,
            'pointerdown': !0x0,
            'pointermove': !0x0,
            'pointerup': !0x0,
            'pointercancel': !0x0,
            'pointerout': !0x0,
            'pointerleave': !0x0,
            'gotpointercapture': !0x0,
            'lostpointercapture': !0x0,
            'dragstart': !0x0,
            'drag': !0x0,
            'dragenter': !0x0,
            'dragleave': !0x0,
            'dragover': !0x0,
            'drop': !0x0,
            'dragend': !0x0,
            'DOMActivate': !0x0,
            'DOMFocusIn': !0x0,
            'DOMFocusOut': !0x0,
            'keypress': !0x0
        }, lac75lr11 = {
            'DOMAttrModified': !0x0,
            'DOMAttributeNameChanged': !0x0,
            'DOMCharacterDataModified': !0x0,
            'DOMElementNameChanged': !0x0,
            'DOMNodeInserted': !0x0,
            'DOMNodeInsertedIntoDocument': !0x0,
            'DOMNodeRemoved': !0x0,
            'DOMNodeRemovedFromDocument': !0x0,
            'DOMSubtreeModified': !0x0
        };
    function u5p1lr(k8k5e8lj) {
        return k8k5e8lj instanceof Node ? k8k5e8lj['__shady_getRootNode']() : k8k5e8lj;
    }
    function yr793mr98(sp1p0n6, aawwkpl2) {
        var pt5ors476 = [], fdsjr = sp1p0n6;
        for (sp1p0n6 = u5p1lr(sp1p0n6); fdsjr;)
            pt5ors476['push'](fdsjr), fdsjr = fdsjr['__shady_assignedSlot'] ? fdsjr['__shady_assignedSlot'] : fdsjr['nodeType'] === Node['DOCUMENT_FRAGMENT_NODE'] && fdsjr['host'] && (aawwkpl2 || fdsjr !== sp1p0n6) ? fdsjr['host'] : fdsjr['__shady_parentNode'];
        pt5ors476[pt5ors476['length'] - 0x1] === document && pt5ors476['push'](window);
        return pt5ors476;
    }
    function t276cfj(l88c1u62) {
        l88c1u62['__composedPath'] || (l88c1u62['__composedPath'] = yr793mr98(l88c1u62['target'], !0x0));
        return l88c1u62['__composedPath'];
    }
    function a943enql(gf5m07y, yyu9lb) {
        if (!y34jicv)
            return gf5m07y;
        gf5m07y = yr793mr98(gf5m07y, !0x0);
        for (var vkh4c039c = 0x0, drxy5pd, k4pg4zj = void 0x0, ddt3g, r7mi8w9z3 = void 0x0; vkh4c039c < yyu9lb['length']; vkh4c039c++)
            if (drxy5pd = yyu9lb[vkh4c039c], ddt3g = u5p1lr(drxy5pd), ddt3g !== k4pg4zj && (r7mi8w9z3 = gf5m07y['indexOf'](ddt3g), k4pg4zj = ddt3g), !y34jicv(ddt3g) || -0x1 < r7mi8w9z3)
                return drxy5pd;
    }
    var l4b76b1 = {
            get 'composed'() {
                void 0x0 === this['__composed'] && (td7ha ? this['__composed'] = 'focusin' === this['type'] || 'focusout' === this['type'] || td7ha(this) : !0x1 !== this['isTrusted'] && (this['__composed'] = nw77y2fg[this['type']]));
                return this['__composed'] || !0x1;
            },
            'composedPath': function () {
                this['__composedPath'] || (this['__composedPath'] = yr793mr98(this['__target'], this['composed']));
                return this['__composedPath'];
            },
            get 'target'() {
                return a943enql(this['currentTarget'] || this['__previousCurrentTarget'], this['composedPath']());
            },
            get 'relatedTarget'() {
                if (!this['__relatedTarget'])
                    return null;
                this['__relatedTargetComposedPath'] || (this['__relatedTargetComposedPath'] = yr793mr98(this['__relatedTarget'], !0x0));
                return a943enql(this['currentTarget'] || this['__previousCurrentTarget'], this['__relatedTargetComposedPath']);
            },
            'stopPropagation': function () {
                Event['prototype']['stopPropagation']['call'](this);
                this['ua'] = !0x0;
            },
            'stopImmediatePropagation': function () {
                Event['prototype']['stopImmediatePropagation']['call'](this);
                this['ua'] = this['__immediatePropagationStopped'] = !0x0;
            }
        }, o518y58q = b975n9s7['D'] && Object['getOwnPropertyDescriptor'](Event['prototype'], 'eventPhase');
    o518y58q && (Object['defineProperty'](l4b76b1, 'eventPhase', {
        'get': function () {
            return this['currentTarget'] === this['target'] ? Event['AT_TARGET'] : this['__shady_native_eventPhase'];
        },
        'enumerable': !0x0,
        'configurable': !0x0
    }), Object['defineProperty'](l4b76b1, '__shady_native_eventPhase', o518y58q));
    function vv78v4650(spfl92s45) {
        function vm5eezm3(a1n0h3j, sd493ma) {
            a1n0h3j = new spfl92s45(a1n0h3j, sd493ma);
            a1n0h3j['__composed'] = sd493ma && !!sd493ma['composed'];
            return a1n0h3j;
        }
        vm5eezm3['__proto__'] = spfl92s45;
        vm5eezm3['prototype'] = spfl92s45['prototype'];
        return vm5eezm3;
    }
    var s89tj2 = {
        'focus': !0x0,
        'blur': !0x0
    };
    function z18u2zbc4(sk22b) {
        return sk22b['__target'] !== sk22b['target'] || sk22b['__relatedTarget'] !== sk22b['relatedTarget'];
    }
    function sthzmw4i(s6lf362, p71cm, ezk058) {
        if (ezk058 = p71cm['__handlers'] && p71cm['__handlers'][s6lf362['type']] && p71cm['__handlers'][s6lf362['type']][ezk058])
            for (var c8os806az = 0x0, as9au; (as9au = ezk058[c8os806az]) && (!z18u2zbc4(s6lf362) || s6lf362['target'] !== s6lf362['relatedTarget']) && (as9au['call'](p71cm, s6lf362), !s6lf362['__immediatePropagationStopped']); c8os806az++);
    }
    var a3mnj1bd = new Event('e')['hasOwnProperty']('currentTarget');
    function t4zc9c(w6p8pc4) {
        w6p8pc4 = a3mnj1bd ? Object['create'](w6p8pc4) : w6p8pc4;
        var b5hw7 = w6p8pc4['composedPath'](), e89ugaw62 = b5hw7['map'](function (nxcqvazy0) {
                return a943enql(nxcqvazy0, b5hw7);
            }), y5s5l = w6p8pc4['bubbles'], s27kf2 = Object['getOwnPropertyDescriptor'](w6p8pc4, 'currentTarget');
        Object['defineProperty'](w6p8pc4, 'currentTarget', {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                return adu9fd7u;
            }
        });
        var q3ljd9n00 = Event['CAPTURING_PHASE'], k1026o = Object['getOwnPropertyDescriptor'](w6p8pc4, 'eventPhase');
        Object['defineProperty'](w6p8pc4, 'eventPhase', {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                return q3ljd9n00;
            }
        });
        try {
            for (var zzg9lt1 = b5hw7['length'] - 0x1; 0x0 <= zzg9lt1; zzg9lt1--) {
                var adu9fd7u = b5hw7[zzg9lt1];
                q3ljd9n00 = adu9fd7u === e89ugaw62[zzg9lt1] ? Event['AT_TARGET'] : Event['CAPTURING_PHASE'];
                sthzmw4i(w6p8pc4, adu9fd7u, 'capture');
                if (w6p8pc4['ua'])
                    return;
            }
            for (zzg9lt1 = 0x0; zzg9lt1 < b5hw7['length']; zzg9lt1++) {
                adu9fd7u = b5hw7[zzg9lt1];
                var j68by2 = adu9fd7u === e89ugaw62[zzg9lt1];
                if (j68by2 || y5s5l)
                    if (q3ljd9n00 = j68by2 ? Event['AT_TARGET'] : Event['BUBBLING_PHASE'], sthzmw4i(w6p8pc4, adu9fd7u, 'bubble'), w6p8pc4['ua'])
                        break;
            }
        } finally {
            a3mnj1bd || (s27kf2 ? Object['defineProperty'](w6p8pc4, 'currentTarget', s27kf2) : delete w6p8pc4['currentTarget'], k1026o ? Object['defineProperty'](w6p8pc4, 'eventPhase', k1026o) : delete w6p8pc4['eventPhase']);
        }
    }
    function flvy8(ljcg8x, wm0vx, fd17uu64w, u0jn5f) {
        for (var v284t5 = 0x0; v284t5 < ljcg8x['length']; v284t5++) {
            var o6sn0401 = ljcg8x[v284t5], a5me99 = o6sn0401['type'], ng1720pe = o6sn0401['capture'];
            if (wm0vx === o6sn0401['node'] && fd17uu64w === a5me99 && u0jn5f === ng1720pe)
                return v284t5;
        }
        return -0x1;
    }
    function m8g5kp(me0u4u8) {
        i6kiud();
        return !b975n9s7['ha'] && this instanceof Node && !iq781e048(document, this) ? (me0u4u8['__target'] || u45c79(me0u4u8, this), t4zc9c(me0u4u8)) : this['__shady_native_dispatchEvent'](me0u4u8);
    }
    function h6794vo0(q847v7n, kx3qx5, pqozlwu7) {
        var y83e6p0c = this, y3f8o = z67161(pqozlwu7), n1v6016a = y3f8o['capture'], de2z1b = y3f8o['once'], mak68t = y3f8o['Pa'];
        y3f8o = y3f8o['Na'];
        if (kx3qx5) {
            var e787n0gof = typeof kx3qx5;
            if ('function' === e787n0gof || 'object' === e787n0gof)
                if ('object' !== e787n0gof || kx3qx5['handleEvent'] && 'function' === typeof kx3qx5['handleEvent']) {
                    if (lac75lr11[q847v7n])
                        return this['__shady_native_addEventListener'](q847v7n, kx3qx5, y3f8o);
                    var m3884k7 = mak68t || this;
                    if (mak68t = kx3qx5[lsf65yc0]) {
                        if (-0x1 < flvy8(mak68t, m3884k7, q847v7n, n1v6016a))
                            return;
                    } else
                        kx3qx5[lsf65yc0] = [];
                    mak68t = function (t28z3l4p) {
                        de2z1b && y83e6p0c['__shady_removeEventListener'](q847v7n, kx3qx5, pqozlwu7);
                        t28z3l4p['__target'] || u45c79(t28z3l4p);
                        if (m3884k7 !== y83e6p0c) {
                            var c1g38b = Object['getOwnPropertyDescriptor'](t28z3l4p, 'currentTarget');
                            Object['defineProperty'](t28z3l4p, 'currentTarget', {
                                'get': function () {
                                    return m3884k7;
                                },
                                'configurable': !0x0
                            });
                            var bm77ny = Object['getOwnPropertyDescriptor'](t28z3l4p, 'eventPhase');
                            Object['defineProperty'](t28z3l4p, 'eventPhase', {
                                'configurable': !0x0,
                                'enumerable': !0x0,
                                'get': function () {
                                    return n1v6016a ? Event['CAPTURING_PHASE'] : Event['BUBBLING_PHASE'];
                                }
                            });
                        }
                        t28z3l4p['__previousCurrentTarget'] = t28z3l4p['currentTarget'];
                        if (!y34jicv(m3884k7) && 'slot' !== m3884k7['localName'] || -0x1 != t28z3l4p['composedPath']()['indexOf'](m3884k7))
                            if (t28z3l4p['composed'] || -0x1 < t28z3l4p['composedPath']()['indexOf'](m3884k7))
                                if (z18u2zbc4(t28z3l4p) && t28z3l4p['target'] === t28z3l4p['relatedTarget'])
                                    t28z3l4p['eventPhase'] === Event['BUBBLING_PHASE'] && t28z3l4p['stopImmediatePropagation']();
                                else if (t28z3l4p['eventPhase'] === Event['CAPTURING_PHASE'] || t28z3l4p['bubbles'] || t28z3l4p['target'] === m3884k7 || m3884k7 instanceof Window) {
                                    var jm5l2n129 = 'function' === e787n0gof ? kx3qx5['call'](m3884k7, t28z3l4p) : kx3qx5['handleEvent'] && kx3qx5['handleEvent'](t28z3l4p);
                                    m3884k7 !== y83e6p0c && (c1g38b ? (Object['defineProperty'](t28z3l4p, 'currentTarget', c1g38b), c1g38b = null) : delete t28z3l4p['currentTarget'], bm77ny ? (Object['defineProperty'](t28z3l4p, 'eventPhase', bm77ny), bm77ny = null) : delete t28z3l4p['eventPhase']);
                                    return jm5l2n129;
                                }
                    };
                    kx3qx5[lsf65yc0]['push']({
                        'node': m3884k7,
                        'type': q847v7n,
                        'capture': n1v6016a,
                        'ub': mak68t
                    });
                    this['__handlers'] = this['__handlers'] || {};
                    this['__handlers'][q847v7n] = this['__handlers'][q847v7n] || {
                        'capture': [],
                        'bubble': []
                    };
                    this['__handlers'][q847v7n][n1v6016a ? 'capture' : 'bubble']['push'](mak68t);
                    s89tj2[q847v7n] || this['__shady_native_addEventListener'](q847v7n, mak68t, y3f8o);
                }
        }
    }
    function sioh2942(l05p9ndy, l5d47, pwc64x5) {
        if (l5d47) {
            var p7npt9 = z67161(pwc64x5);
            pwc64x5 = p7npt9['capture'];
            var nc57s786q = p7npt9['Pa'];
            p7npt9 = p7npt9['Na'];
            if (lac75lr11[l05p9ndy])
                return this['__shady_native_removeEventListener'](l05p9ndy, l5d47, p7npt9);
            var k86fq = nc57s786q || this;
            nc57s786q = void 0x0;
            var lme3i = null;
            try {
                lme3i = l5d47[lsf65yc0];
            } catch (k860z9) {
            }
            lme3i && (k86fq = flvy8(lme3i, k86fq, l05p9ndy, pwc64x5), -0x1 < k86fq && (nc57s786q = lme3i['splice'](k86fq, 0x1)[0x0]['ub'], lme3i['length'] || (l5d47[lsf65yc0] = void 0x0)));
            this['__shady_native_removeEventListener'](l05p9ndy, nc57s786q || l5d47, p7npt9);
            nc57s786q && this['__handlers'] && this['__handlers'][l05p9ndy] && (l05p9ndy = this['__handlers'][l05p9ndy][pwc64x5 ? 'capture' : 'bubble'], l5d47 = l05p9ndy['indexOf'](nc57s786q), -0x1 < l5d47 && l05p9ndy['splice'](l5d47, 0x1));
        }
    }
    function akazp() {
        for (var w6i142 in s89tj2)
            window['__shady_native_addEventListener'](w6i142, function (i8j72) {
                i8j72['__target'] || (u45c79(i8j72), t4zc9c(i8j72));
            }, !0x0);
    }
    var k4bielme0 = o1fls6d(l4b76b1);
    function u45c79(u0m2ei81, sjpz85510) {
        sjpz85510 = void 0x0 === sjpz85510 ? u0m2ei81['target'] : sjpz85510;
        u0m2ei81['__target'] = sjpz85510;
        u0m2ei81['__relatedTarget'] = u0m2ei81['relatedTarget'];
        if (b975n9s7['D']) {
            sjpz85510 = Object['getPrototypeOf'](u0m2ei81);
            if (!sjpz85510['hasOwnProperty']('__shady_patchedProto')) {
                var n9d9v8 = Object['create'](sjpz85510);
                n9d9v8['__shady_sourceProto'] = sjpz85510;
                pg0pd67z8(n9d9v8, k4bielme0);
                sjpz85510['__shady_patchedProto'] = n9d9v8;
            }
            u0m2ei81['__proto__'] = sjpz85510['__shady_patchedProto'];
        } else
            pg0pd67z8(u0m2ei81, k4bielme0);
    }
    var i7w111ow3 = vv78v4650(Event), c1zos = vv78v4650(CustomEvent), x7ys1x = vv78v4650(MouseEvent);
    function i29w2r5gy() {
        if (!td7ha && Object['getOwnPropertyDescriptor'](Event['prototype'], 'isTrusted')) {
            var ubtk4 = function () {
                var pvi3v9 = new MouseEvent('click', {
                    'bubbles': !0x0,
                    'cancelable': !0x0,
                    'composed': !0x0
                });
                this['__shady_dispatchEvent'](pvi3v9);
            };
            Element['prototype']['click'] ? Element['prototype']['click'] = ubtk4 : HTMLElement['prototype']['click'] && (HTMLElement['prototype']['click'] = ubtk4);
        }
    }
    var y9456 = Object['getOwnPropertyNames'](Element['prototype'])['filter'](function (g7fs8) {
            return 'on' === g7fs8['substring'](0x0, 0x2);
        }), jsfm9 = Object['getOwnPropertyNames'](HTMLElement['prototype'])['filter'](function (f319k) {
            return 'on' === f319k['substring'](0x0, 0x2);
        });
    function ynw4h719(r7u6s47) {
        return {
            'set': function (yj72679) {
                var h806e3v8 = f9ql21b75(this), i79v86 = r7u6s47['substring'](0x2);
                h806e3v8['T'] || (h806e3v8['T'] = {});
                h806e3v8['T'][r7u6s47] && this['removeEventListener'](i79v86, h806e3v8['T'][r7u6s47]);
                this['__shady_addEventListener'](i79v86, yj72679);
                h806e3v8['T'][r7u6s47] = yj72679;
            },
            'get': function () {
                var q007x = h85gd70(this);
                return q007x && q007x['T'] && q007x['T'][r7u6s47];
            },
            'configurable': !0x0
        };
    }
    ;
    function r40u7ntx8(l3873s, j263w) {
        return {
            'index': l3873s,
            'ia': [],
            'pa': j263w
        };
    }
    function a4238(jyfl7i, z6w2dj, e40ex40o6, ye19fzq) {
        var t211sv8a = 0x0, ku576j3o = 0x0, e7y7r = 0x0, n98gthi02 = 0x0, c32jql3 = Math['min'](z6w2dj - t211sv8a, ye19fzq - ku576j3o);
        if (0x0 == t211sv8a && 0x0 == ku576j3o)
            c5zi0qe30: {
                for (e7y7r = 0x0; e7y7r < c32jql3; e7y7r++)
                    if (jyfl7i[e7y7r] !== e40ex40o6[e7y7r])
                        break c5zi0qe30;
                e7y7r = c32jql3;
            }
        if (z6w2dj == jyfl7i['length'] && ye19fzq == e40ex40o6['length']) {
            n98gthi02 = jyfl7i['length'];
            for (var c0f09 = e40ex40o6['length'], lmi4c0y47 = 0x0; lmi4c0y47 < c32jql3 - e7y7r && lki1zuxj(jyfl7i[--n98gthi02], e40ex40o6[--c0f09]);)
                lmi4c0y47++;
            n98gthi02 = lmi4c0y47;
        }
        t211sv8a += e7y7r;
        ku576j3o += e7y7r;
        z6w2dj -= n98gthi02;
        ye19fzq -= n98gthi02;
        if (0x0 == z6w2dj - t211sv8a && 0x0 == ye19fzq - ku576j3o)
            return [];
        if (t211sv8a == z6w2dj) {
            for (z6w2dj = r40u7ntx8(t211sv8a, 0x0); ku576j3o < ye19fzq;)
                z6w2dj['ia']['push'](e40ex40o6[ku576j3o++]);
            return [z6w2dj];
        }
        if (ku576j3o == ye19fzq)
            return [r40u7ntx8(t211sv8a, z6w2dj - t211sv8a)];
        c32jql3 = t211sv8a;
        e7y7r = ku576j3o;
        ye19fzq = ye19fzq - e7y7r + 0x1;
        n98gthi02 = z6w2dj - c32jql3 + 0x1;
        z6w2dj = Array(ye19fzq);
        for (c0f09 = 0x0; c0f09 < ye19fzq; c0f09++)
            z6w2dj[c0f09] = Array(n98gthi02), z6w2dj[c0f09][0x0] = c0f09;
        for (c0f09 = 0x0; c0f09 < n98gthi02; c0f09++)
            z6w2dj[0x0][c0f09] = c0f09;
        for (c0f09 = 0x1; c0f09 < ye19fzq; c0f09++)
            for (lmi4c0y47 = 0x1; lmi4c0y47 < n98gthi02; lmi4c0y47++)
                if (jyfl7i[c32jql3 + lmi4c0y47 - 0x1] === e40ex40o6[e7y7r + c0f09 - 0x1])
                    z6w2dj[c0f09][lmi4c0y47] = z6w2dj[c0f09 - 0x1][lmi4c0y47 - 0x1];
                else {
                    var se1tr = z6w2dj[c0f09 - 0x1][lmi4c0y47] + 0x1, f46qz = z6w2dj[c0f09][lmi4c0y47 - 0x1] + 0x1;
                    z6w2dj[c0f09][lmi4c0y47] = se1tr < f46qz ? se1tr : f46qz;
                }
        c32jql3 = z6w2dj['length'] - 0x1;
        e7y7r = z6w2dj[0x0]['length'] - 0x1;
        ye19fzq = z6w2dj[c32jql3][e7y7r];
        for (jyfl7i = []; 0x0 < c32jql3 || 0x0 < e7y7r;)
            0x0 == c32jql3 ? (jyfl7i['push'](0x2), e7y7r--) : 0x0 == e7y7r ? (jyfl7i['push'](0x3), c32jql3--) : (n98gthi02 = z6w2dj[c32jql3 - 0x1][e7y7r - 0x1], c0f09 = z6w2dj[c32jql3 - 0x1][e7y7r], lmi4c0y47 = z6w2dj[c32jql3][e7y7r - 0x1], se1tr = c0f09 < lmi4c0y47 ? c0f09 < n98gthi02 ? c0f09 : n98gthi02 : lmi4c0y47 < n98gthi02 ? lmi4c0y47 : n98gthi02, se1tr == n98gthi02 ? (n98gthi02 == ye19fzq ? jyfl7i['push'](0x0) : (jyfl7i['push'](0x1), ye19fzq = n98gthi02), c32jql3--, e7y7r--) : se1tr == c0f09 ? (jyfl7i['push'](0x3), c32jql3--, ye19fzq = c0f09) : (jyfl7i['push'](0x2), e7y7r--, ye19fzq = lmi4c0y47));
        jyfl7i['reverse']();
        z6w2dj = void 0x0;
        c32jql3 = [];
        for (e7y7r = 0x0; e7y7r < jyfl7i['length']; e7y7r++)
            switch (jyfl7i[e7y7r]) {
            case 0x0:
                z6w2dj && (c32jql3['push'](z6w2dj), z6w2dj = void 0x0);
                t211sv8a++;
                ku576j3o++;
                break;
            case 0x1:
                z6w2dj || (z6w2dj = r40u7ntx8(t211sv8a, 0x0));
                z6w2dj['pa']++;
                t211sv8a++;
                z6w2dj['ia']['push'](e40ex40o6[ku576j3o]);
                ku576j3o++;
                break;
            case 0x2:
                z6w2dj || (z6w2dj = r40u7ntx8(t211sv8a, 0x0));
                z6w2dj['pa']++;
                t211sv8a++;
                break;
            case 0x3:
                z6w2dj || (z6w2dj = r40u7ntx8(t211sv8a, 0x0)), z6w2dj['ia']['push'](e40ex40o6[ku576j3o]), ku576j3o++;
            }
        z6w2dj && c32jql3['push'](z6w2dj);
        return c32jql3;
    }
    function lki1zuxj(do1q2x2c, yy9875) {
        return do1q2x2c === yy9875;
    }
    ;
    var cd50t5 = o1fls6d({
        'dispatchEvent': m8g5kp,
        'addEventListener': h6794vo0,
        'removeEventListener': sioh2942
    });
    var dcqu1pb0e = null;
    function d5bvc9() {
        dcqu1pb0e || (dcqu1pb0e = window['ShadyCSS'] && window['ShadyCSS']['ScopingShim']);
        return dcqu1pb0e || null;
    }
    function kru7qg(z6096l7u, khszw63, r3em74m) {
        var z03l1c9j7 = d5bvc9();
        return z03l1c9j7 && 'class' === khszw63 ? (z03l1c9j7['setElementClass'](z6096l7u, r3em74m), !0x0) : !0x1;
    }
    function q5scrse(wdk475ut, o1t06x03) {
        var f70yi = d5bvc9();
        f70yi && f70yi['unscopeNode'](wdk475ut, o1t06x03);
    }
    function u8vsk2l(j109x, mq3c4) {
        var yoo24 = d5bvc9();
        if (!yoo24)
            return !0x0;
        if (j109x['nodeType'] === Node['DOCUMENT_FRAGMENT_NODE']) {
            yoo24 = !0x0;
            for (j109x = j109x['__shady_firstChild']; j109x; j109x = j109x['__shady_nextSibling'])
                yoo24 = yoo24 && u8vsk2l(j109x, mq3c4);
            return yoo24;
        }
        return j109x['nodeType'] !== Node['ELEMENT_NODE'] ? !0x0 : yoo24['currentScopeForNode'](j109x) === mq3c4;
    }
    function w40ch56(k0hcp) {
        if (k0hcp['nodeType'] !== Node['ELEMENT_NODE'])
            return '';
        var bpgx62583 = d5bvc9();
        return bpgx62583 ? bpgx62583['currentScopeForNode'](k0hcp) : '';
    }
    function t4q4aui(i6e9xoj, u2qn7) {
        if (i6e9xoj)
            for (i6e9xoj['nodeType'] === Node['ELEMENT_NODE'] && u2qn7(i6e9xoj), i6e9xoj = i6e9xoj['__shady_firstChild']; i6e9xoj; i6e9xoj = i6e9xoj['__shady_nextSibling'])
                i6e9xoj['nodeType'] === Node['ELEMENT_NODE'] && t4q4aui(i6e9xoj, u2qn7);
    }
    ;
    var mg5fuu = window['document'], u597g = b975n9s7['ha'], qq0624 = Object['getOwnPropertyDescriptor'](Node['prototype'], 'isConnected'), o03mm08f = qq0624 && qq0624['get'];
    function b75kar4(sj021sj9m) {
        for (var frc2y7p1; frc2y7p1 = sj021sj9m['__shady_firstChild'];)
            sj021sj9m['__shady_removeChild'](frc2y7p1);
    }
    function zcn47ot2t(vxwlvp) {
        var e00gu = h85gd70(vxwlvp);
        if (e00gu && void 0x0 !== e00gu['ta'])
            for (e00gu = vxwlvp['__shady_firstChild']; e00gu; e00gu = e00gu['__shady_nextSibling'])
                zcn47ot2t(e00gu);
        if (vxwlvp = h85gd70(vxwlvp))
            vxwlvp['ta'] = void 0x0;
    }
    function y18h43a(o2j50x1k) {
        var nxv93j = o2j50x1k;
        if (o2j50x1k && 'slot' === o2j50x1k['localName']) {
            var hp7zte = h85gd70(o2j50x1k);
            (hp7zte = hp7zte && hp7zte['aa']) && (nxv93j = hp7zte['length'] ? hp7zte[0x0] : y18h43a(o2j50x1k['__shady_nextSibling']));
        }
        return nxv93j;
    }
    function b279xi62o(c61v2vmpm, shi6ba, s1x4644ds) {
        if (c61v2vmpm = (c61v2vmpm = h85gd70(c61v2vmpm)) && c61v2vmpm['ga']) {
            if (shi6ba)
                if (shi6ba['nodeType'] === Node['DOCUMENT_FRAGMENT_NODE'])
                    for (var h6kenpk0 = 0x0, j95ks7or7 = shi6ba['childNodes']['length']; h6kenpk0 < j95ks7or7; h6kenpk0++)
                        c61v2vmpm['addedNodes']['push'](shi6ba['childNodes'][h6kenpk0]);
                else
                    c61v2vmpm['addedNodes']['push'](shi6ba);
            s1x4644ds && c61v2vmpm['removedNodes']['push'](s1x4644ds);
            a180m3(c61v2vmpm);
        }
    }
    var ls0t8zl = o1fls6d({
        get 'parentNode'() {
            var r97469x0u = h85gd70(this);
            r97469x0u = r97469x0u && r97469x0u['parentNode'];
            return void 0x0 !== r97469x0u ? r97469x0u : this['__shady_native_parentNode'];
        },
        get 'firstChild'() {
            var zajqe4r32 = h85gd70(this);
            zajqe4r32 = zajqe4r32 && zajqe4r32['firstChild'];
            return void 0x0 !== zajqe4r32 ? zajqe4r32 : this['__shady_native_firstChild'];
        },
        get 'lastChild'() {
            var j3zs06t4 = h85gd70(this);
            j3zs06t4 = j3zs06t4 && j3zs06t4['lastChild'];
            return void 0x0 !== j3zs06t4 ? j3zs06t4 : this['__shady_native_lastChild'];
        },
        get 'nextSibling'() {
            var vsz8048 = h85gd70(this);
            vsz8048 = vsz8048 && vsz8048['nextSibling'];
            return void 0x0 !== vsz8048 ? vsz8048 : this['__shady_native_nextSibling'];
        },
        get 'previousSibling'() {
            var v17ysw038 = h85gd70(this);
            v17ysw038 = v17ysw038 && v17ysw038['previousSibling'];
            return void 0x0 !== v17ysw038 ? v17ysw038 : this['__shady_native_previousSibling'];
        },
        get 'childNodes'() {
            if (fyg9i419(this)) {
                var xr856jy26 = h85gd70(this);
                if (!xr856jy26['childNodes']) {
                    xr856jy26['childNodes'] = [];
                    for (var s8pkdly94 = this['__shady_firstChild']; s8pkdly94; s8pkdly94 = s8pkdly94['__shady_nextSibling'])
                        xr856jy26['childNodes']['push'](s8pkdly94);
                }
                var ev6l1574 = xr856jy26['childNodes'];
            } else
                ev6l1574 = this['__shady_native_childNodes'];
            ev6l1574['item'] = function (wqixw2zi) {
                return ev6l1574[wqixw2zi];
            };
            return ev6l1574;
        },
        get 'parentElement'() {
            var c238i = h85gd70(this);
            (c238i = c238i && c238i['parentNode']) && c238i['nodeType'] !== Node['ELEMENT_NODE'] && (c238i = null);
            return void 0x0 !== c238i ? c238i : this['__shady_native_parentElement'];
        },
        get 'isConnected'() {
            if (o03mm08f && o03mm08f['call'](this))
                return !0x0;
            if (this['nodeType'] == Node['DOCUMENT_FRAGMENT_NODE'])
                return !0x1;
            var w4wiv = this['ownerDocument'];
            if (null === w4wiv || iq781e048(w4wiv, this))
                return !0x0;
            for (w4wiv = this; w4wiv && !(w4wiv instanceof Document);)
                w4wiv = w4wiv['__shady_parentNode'] || (y34jicv(w4wiv) ? w4wiv['host'] : void 0x0);
            return !!(w4wiv && w4wiv instanceof Document);
        },
        get 'textContent'() {
            if (fyg9i419(this)) {
                for (var o0e61g25l = [], r697ft5xb = this['__shady_firstChild']; r697ft5xb; r697ft5xb = r697ft5xb['__shady_nextSibling'])
                    r697ft5xb['nodeType'] !== Node['COMMENT_NODE'] && o0e61g25l['push'](r697ft5xb['__shady_textContent']);
                return o0e61g25l['join']('');
            }
            return this['__shady_native_textContent'];
        },
        set 'textContent'(w92y47) {
            if ('undefined' === typeof w92y47 || null === w92y47)
                w92y47 = '';
            switch (this['nodeType']) {
            case Node['ELEMENT_NODE']:
            case Node['DOCUMENT_FRAGMENT_NODE']:
                if (!fyg9i419(this) && b975n9s7['D']) {
                    var pn947 = this['__shady_firstChild'];
                    (pn947 != this['__shady_lastChild'] || pn947 && pn947['nodeType'] != Node['TEXT_NODE']) && b75kar4(this);
                    this['__shady_native_textContent'] = w92y47;
                } else
                    b75kar4(this), (0x0 < w92y47['length'] || this['nodeType'] === Node['ELEMENT_NODE']) && this['__shady_insertBefore'](document['createTextNode'](w92y47));
                break;
            default:
                this['nodeValue'] = w92y47;
            }
        },
        'insertBefore': function (rvg0zp3, hj4m1) {
            if (this['ownerDocument'] !== mg5fuu && rvg0zp3['ownerDocument'] !== mg5fuu)
                return this['__shady_native_insertBefore'](rvg0zp3, hj4m1), rvg0zp3;
            if (rvg0zp3 === this)
                throw Error('Failed\x20to\x20execute\x20\x27appendChild\x27\x20on\x20\x27Node\x27:\x20The\x20new\x20child\x20element\x20contains\x20the\x20parent.');
            if (hj4m1) {
                var k9t86m5a5 = h85gd70(hj4m1);
                k9t86m5a5 = k9t86m5a5 && k9t86m5a5['parentNode'];
                if (void 0x0 !== k9t86m5a5 && k9t86m5a5 !== this || void 0x0 === k9t86m5a5 && hj4m1['__shady_native_parentNode'] !== this)
                    throw Error('Failed\x20to\x20execute\x20\x27insertBefore\x27\x20on\x20\x27Node\x27:\x20The\x20node\x20before\x20which\x20the\x20new\x20node\x20is\x20to\x20be\x20inserted\x20is\x20not\x20a\x20child\x20of\x20this\x20node.');
            }
            if (hj4m1 === rvg0zp3)
                return rvg0zp3;
            b279xi62o(this, rvg0zp3);
            var ir293 = [], o43fpm = (k9t86m5a5 = gi634(this)) ? k9t86m5a5['host']['localName'] : w40ch56(this), l2h9368s = rvg0zp3['__shady_parentNode'];
            if (l2h9368s) {
                var lbsyn = w40ch56(rvg0zp3);
                var k85l39tq = !!k9t86m5a5 || !gi634(rvg0zp3) || u597g && void 0x0 !== this['__noInsertionPoint'];
                l2h9368s['__shady_removeChild'](rvg0zp3, k85l39tq);
            }
            l2h9368s = !0x0;
            var jl6efi22 = (!u597g || void 0x0 === rvg0zp3['__noInsertionPoint'] && void 0x0 === this['__noInsertionPoint']) && !u8vsk2l(rvg0zp3, o43fpm), cs85p62e = k9t86m5a5 && !rvg0zp3['__noInsertionPoint'] && (!u597g || rvg0zp3['nodeType'] === Node['DOCUMENT_FRAGMENT_NODE']);
            if (cs85p62e || jl6efi22)
                jl6efi22 && (lbsyn = lbsyn || w40ch56(rvg0zp3)), t4q4aui(rvg0zp3, function (e45qmu) {
                    cs85p62e && 'slot' === e45qmu['localName'] && ir293['push'](e45qmu);
                    if (jl6efi22) {
                        var uysbdnz6 = lbsyn;
                        d5bvc9() && (uysbdnz6 && q5scrse(e45qmu, uysbdnz6), (uysbdnz6 = d5bvc9()) && uysbdnz6['scopeNode'](e45qmu, o43fpm));
                    }
                });
            ir293['length'] && (e54248a2(k9t86m5a5), k9t86m5a5['i']['push']['apply'](k9t86m5a5['i'], v8f85q69(ir293)), cgw2z0(k9t86m5a5));
            fyg9i419(this) && (u7k7c95u(rvg0zp3, this, hj4m1), k85l39tq = h85gd70(this), k85l39tq['root'] ? (l2h9368s = !0x1, y432i41ep(this) && cgw2z0(k85l39tq['root'])) : k9t86m5a5 && 'slot' === this['localName'] && (l2h9368s = !0x1, cgw2z0(k9t86m5a5)));
            l2h9368s ? (k9t86m5a5 = y34jicv(this) ? this['host'] : this, hj4m1 ? (hj4m1 = y18h43a(hj4m1), k9t86m5a5['__shady_native_insertBefore'](rvg0zp3, hj4m1)) : k9t86m5a5['__shady_native_appendChild'](rvg0zp3)) : rvg0zp3['ownerDocument'] !== this['ownerDocument'] && this['ownerDocument']['adoptNode'](rvg0zp3);
            return rvg0zp3;
        },
        'appendChild': function (uuakt8) {
            if (this != uuakt8 || !y34jicv(uuakt8))
                return this['__shady_insertBefore'](uuakt8);
        },
        'removeChild': function (a7w229j1, uc36104l5) {
            uc36104l5 = void 0x0 === uc36104l5 ? !0x1 : uc36104l5;
            if (this['ownerDocument'] !== mg5fuu)
                return this['__shady_native_removeChild'](a7w229j1);
            if (a7w229j1['__shady_parentNode'] !== this)
                throw Error('The\x20node\x20to\x20be\x20removed\x20is\x20not\x20a\x20child\x20of\x20this\x20node:\x20' + a7w229j1);
            b279xi62o(this, null, a7w229j1);
            var a38276 = gi634(a7w229j1), j01e665 = a38276 && g893764tm(a38276, a7w229j1), fx1mkz99 = h85gd70(this);
            if (fyg9i419(this) && (s0b0nx(a7w229j1, this), y432i41ep(this))) {
                cgw2z0(fx1mkz99['root']);
                var r60d27 = !0x0;
            }
            if (d5bvc9() && !uc36104l5 && a38276 && a7w229j1['nodeType'] !== Node['TEXT_NODE']) {
                var o22v1k1 = w40ch56(a7w229j1);
                t4q4aui(a7w229j1, function (azqg40f3j) {
                    q5scrse(azqg40f3j, o22v1k1);
                });
            }
            zcn47ot2t(a7w229j1);
            a38276 && ((uc36104l5 = 'slot' === this['localName']) && (r60d27 = !0x0), (j01e665 || uc36104l5) && cgw2z0(a38276));
            r60d27 || (r60d27 = y34jicv(this) ? this['host'] : this, (!fx1mkz99['root'] && 'slot' !== a7w229j1['localName'] || r60d27 === a7w229j1['__shady_native_parentNode']) && r60d27['__shady_native_removeChild'](a7w229j1));
            return a7w229j1;
        },
        'replaceChild': function (m5t2ii, i2i9o3) {
            this['__shady_insertBefore'](m5t2ii, i2i9o3);
            this['__shady_removeChild'](i2i9o3);
            return m5t2ii;
        },
        'cloneNode': function (p39pif5) {
            if ('template' == this['localName'])
                return this['__shady_native_cloneNode'](p39pif5);
            var rmzn2o2z = this['__shady_native_cloneNode'](!0x1);
            if (p39pif5 && rmzn2o2z['nodeType'] !== Node['ATTRIBUTE_NODE']) {
                p39pif5 = this['__shady_firstChild'];
                for (var cjo58; p39pif5; p39pif5 = p39pif5['__shady_nextSibling'])
                    cjo58 = p39pif5['__shady_cloneNode'](!0x0), rmzn2o2z['__shady_appendChild'](cjo58);
            }
            return rmzn2o2z;
        },
        'getRootNode': function (b7rowp) {
            if (this && this['nodeType']) {
                var ytcn4 = f9ql21b75(this), k6ukq6 = ytcn4['ta'];
                void 0x0 === k6ukq6 && (y34jicv(this) ? (k6ukq6 = this, ytcn4['ta'] = k6ukq6) : (k6ukq6 = (k6ukq6 = this['__shady_parentNode']) ? k6ukq6['__shady_getRootNode'](b7rowp) : this, document['documentElement']['__shady_native_contains'](this) && (ytcn4['ta'] = k6ukq6)));
                return k6ukq6;
            }
        },
        'contains': function (j0580) {
            return t4eau90l(this, j0580);
        }
    });
    var kh17ru = o1fls6d({
        get 'assignedSlot'() {
            var b969tbv5f = this['__shady_parentNode'];
            (b969tbv5f = b969tbv5f && b969tbv5f['__shady_shadowRoot']) && ofzspju(b969tbv5f);
            return (b969tbv5f = h85gd70(this)) && b969tbv5f['assignedSlot'] || null;
        }
    });
    var w1hk70244 = new Map();
    [
        [
            '(',
            {
                'end': ')',
                'sa': !0x0
            }
        ],
        [
            '[',
            {
                'end': ']',
                'sa': !0x0
            }
        ],
        [
            '\x22',
            {
                'end': '\x22',
                'sa': !0x1
            }
        ],
        [
            '\x27',
            {
                'end': '\x27',
                'sa': !0x1
            }
        ]
    ]['forEach'](function (f10rje) {
        var i7djq5a8 = y5jf9283(f10rje);
        f10rje = i7djq5a8['next']()['value'];
        i7djq5a8 = i7djq5a8['next']()['value'];
        w1hk70244['set'](f10rje, i7djq5a8);
    });
    function s5a53e9dn(z08jd, cpsf98q6, cav92lah6, spi0m61) {
        for (spi0m61 = void 0x0 === spi0m61 ? !0x0 : spi0m61; cpsf98q6 < z08jd['length']; cpsf98q6++)
            if ('\x5c' === z08jd[cpsf98q6] && cpsf98q6 < z08jd['length'] - 0x1 && '\x0a' !== z08jd[cpsf98q6 + 0x1])
                cpsf98q6++;
            else {
                if (-0x1 !== cav92lah6['indexOf'](z08jd[cpsf98q6]))
                    return cpsf98q6;
                if (spi0m61 && w1hk70244['has'](z08jd[cpsf98q6])) {
                    var irxpukl = w1hk70244['get'](z08jd[cpsf98q6]);
                    cpsf98q6 = s5a53e9dn(z08jd, cpsf98q6 + 0x1, [irxpukl['end']], irxpukl['sa']);
                }
            }
        return z08jd['length'];
    }
    function ngjnkfaw1(cv81v8f6) {
        function l371l() {
            if (0x0 < e2151['length']) {
                for (; '\x20' === e2151[e2151['length'] - 0x1];)
                    e2151['pop']();
                g0rp8739['push']({
                    'La': e2151['filter'](function (i1dg07, wy3e40) {
                        return 0x0 === wy3e40 % 0x2;
                    }),
                    'Za': e2151['filter'](function (i955352on, l9v8a83) {
                        return 0x1 === l9v8a83 % 0x2;
                    })
                });
                e2151['length'] = 0x0;
            }
        }
        for (var g0rp8739 = [], e2151 = [], jdmm67 = 0x0; jdmm67 < cv81v8f6['length'];) {
            var ljm4549z0 = e2151[e2151['length'] - 0x1], y7301 = s5a53e9dn(cv81v8f6, jdmm67, [
                    ',',
                    '\x20',
                    '>',
                    '+',
                    '~'
                ]), am796x59l = y7301 === jdmm67 ? cv81v8f6[jdmm67] : cv81v8f6['substring'](jdmm67, y7301);
            if (',' === am796x59l)
                l371l();
            else if (-0x1 === [
                    void 0x0,
                    '\x20',
                    '>',
                    '+',
                    '~'
                ]['indexOf'](ljm4549z0) || '\x20' !== am796x59l)
                '\x20' === ljm4549z0 && -0x1 !== [
                    '>',
                    '+',
                    '~'
                ]['indexOf'](am796x59l) ? e2151[e2151['length'] - 0x1] = am796x59l : e2151['push'](am796x59l);
            jdmm67 = y7301 + (y7301 === jdmm67 ? 0x1 : 0x0);
        }
        l371l();
        return g0rp8739;
    }
    ;
    function x8d79tv(xn87p1, u5nmy86, wzdb523t5) {
        var w44281o = [];
        v37ki(xn87p1, u5nmy86, wzdb523t5, w44281o);
        return w44281o;
    }
    function v37ki(zm8uo7f1, qlrt56k, nlx853c9, ccbr8) {
        for (zm8uo7f1 = zm8uo7f1['__shady_firstChild']; zm8uo7f1; zm8uo7f1 = zm8uo7f1['__shady_nextSibling']) {
            var k8uaxtr2o;
            if (k8uaxtr2o = zm8uo7f1['nodeType'] === Node['ELEMENT_NODE']) {
                k8uaxtr2o = zm8uo7f1;
                var luu980 = qlrt56k, e90ay91 = nlx853c9, bxj0jr4o = ccbr8, o1boe = luu980(k8uaxtr2o);
                o1boe && bxj0jr4o['push'](k8uaxtr2o);
                e90ay91 && e90ay91(o1boe) ? k8uaxtr2o = o1boe : (v37ki(k8uaxtr2o, luu980, e90ay91, bxj0jr4o), k8uaxtr2o = void 0x0);
            }
            if (k8uaxtr2o)
                break;
        }
    }
    var e7h7mjlb = {
            get 'firstElementChild'() {
                var htobeg2 = h85gd70(this);
                if (htobeg2 && void 0x0 !== htobeg2['firstChild']) {
                    for (htobeg2 = this['__shady_firstChild']; htobeg2 && htobeg2['nodeType'] !== Node['ELEMENT_NODE'];)
                        htobeg2 = htobeg2['__shady_nextSibling'];
                    return htobeg2;
                }
                return this['__shady_native_firstElementChild'];
            },
            get 'lastElementChild'() {
                var v2x7i53 = h85gd70(this);
                if (v2x7i53 && void 0x0 !== v2x7i53['lastChild']) {
                    for (v2x7i53 = this['__shady_lastChild']; v2x7i53 && v2x7i53['nodeType'] !== Node['ELEMENT_NODE'];)
                        v2x7i53 = v2x7i53['__shady_previousSibling'];
                    return v2x7i53;
                }
                return this['__shady_native_lastElementChild'];
            },
            get 'children'() {
                return fyg9i419(this) ? k459io(Array['prototype']['filter']['call'](kvht8535(this), function (kdni1lvya) {
                    return kdni1lvya['nodeType'] === Node['ELEMENT_NODE'];
                })) : this['__shady_native_children'];
            },
            get 'childElementCount'() {
                var zvnm48j = this['__shady_children'];
                return zvnm48j ? zvnm48j['length'] : 0x0;
            }
        }, xg6yxtmc = o1fls6d((e7h7mjlb['append'] = function (xb9rv) {
            for (var em99dky07 = [], yk82810 = 0x0; yk82810 < arguments['length']; ++yk82810)
                em99dky07[yk82810] = arguments[yk82810];
            this['__shady_insertBefore'](jq4rmkaa3['apply'](null, v8f85q69(em99dky07)), null);
        }, e7h7mjlb['prepend'] = function (k091t8x) {
            for (var v8ki79cz = [], a4y346z7 = 0x0; a4y346z7 < arguments['length']; ++a4y346z7)
                v8ki79cz[a4y346z7] = arguments[a4y346z7];
            this['__shady_insertBefore'](jq4rmkaa3['apply'](null, v8f85q69(v8ki79cz)), this['__shady_firstChild']);
        }, e7h7mjlb['replaceChildren'] = function (d3zs9p55) {
            for (var m7n6610i0 = [], vl53b = 0x0; vl53b < arguments['length']; ++vl53b)
                m7n6610i0[vl53b] = arguments[vl53b];
            for (; null !== (vl53b = this['__shady_firstChild']);)
                this['__shady_removeChild'](vl53b);
            this['__shady_insertBefore'](jq4rmkaa3['apply'](null, v8f85q69(m7n6610i0)), null);
        }, e7h7mjlb));
    function m4a8vb(scs2e4b9, nm46057f) {
        function yen82cf1(n41f3m, e7y6b) {
            return (n41f3m === scs2e4b9 || -0x1 === e7y6b['indexOf'](':scope')) && ku8wv8['call'](n41f3m, e7y6b);
        }
        var koje0oxti = ngjnkfaw1(nm46057f);
        if (0x1 > koje0oxti['length'])
            return [];
        for (nm46057f = a7680(x8d79tv(scs2e4b9, function () {
                return !0x0;
            })['map'](function (sr9067) {
                return a7680(koje0oxti['map'](function (v241ilmxt) {
                    var q2pelezk8 = v241ilmxt['La'], o4lmoc7 = q2pelezk8['length'] - 0x1;
                    return yen82cf1(sr9067, q2pelezk8[o4lmoc7]) ? {
                        'target': sr9067,
                        'da': v241ilmxt,
                        'fa': sr9067,
                        'index': o4lmoc7
                    } : [];
                }));
            })); nm46057f['some'](function (v1zd108) {
                return 0x0 < v1zd108['index'];
            });)
            nm46057f = a7680(nm46057f['map'](function (kycqs5x7) {
                if (0x0 >= kycqs5x7['index'])
                    return kycqs5x7;
                var p67d800ov = kycqs5x7['target'], vi433ow = kycqs5x7['fa'], q3j4n0w = kycqs5x7['da'];
                kycqs5x7 = kycqs5x7['index'] - 0x1;
                var m9j633t = q3j4n0w['Za'][kycqs5x7], ugnc7d9 = q3j4n0w['La'][kycqs5x7];
                if ('\x20' === m9j633t) {
                    m9j633t = [];
                    for (vi433ow = vi433ow['__shady_parentElement']; vi433ow; vi433ow = vi433ow['__shady_parentElement'])
                        yen82cf1(vi433ow, ugnc7d9) && m9j633t['push']({
                            'target': p67d800ov,
                            'da': q3j4n0w,
                            'fa': vi433ow,
                            'index': kycqs5x7
                        });
                    return m9j633t;
                }
                if ('>' === m9j633t)
                    return vi433ow = vi433ow['__shady_parentElement'], yen82cf1(vi433ow, ugnc7d9) ? {
                        'target': p67d800ov,
                        'da': q3j4n0w,
                        'fa': vi433ow,
                        'index': kycqs5x7
                    } : [];
                if ('+' === m9j633t)
                    return (vi433ow = vi433ow['__shady_previousElementSibling']) && yen82cf1(vi433ow, ugnc7d9) ? {
                        'target': p67d800ov,
                        'da': q3j4n0w,
                        'fa': vi433ow,
                        'index': kycqs5x7
                    } : [];
                if ('~' === m9j633t) {
                    m9j633t = [];
                    for (vi433ow = vi433ow['__shady_previousElementSibling']; vi433ow; vi433ow = vi433ow['__shady_previousElementSibling'])
                        yen82cf1(vi433ow, ugnc7d9) && m9j633t['push']({
                            'target': p67d800ov,
                            'da': q3j4n0w,
                            'fa': vi433ow,
                            'index': kycqs5x7
                        });
                    return m9j633t;
                }
                throw Error('Unrecognized\x20combinator:\x20\x27' + m9j633t + '\x27.');
            }));
        return u6m2d45um(nm46057f['map'](function (gmeh47yu8) {
            return gmeh47yu8['target'];
        }));
    }
    var y87a9kv = b975n9s7['querySelectorImplementation'], bfog74cv9 = o1fls6d({
            'querySelector': function (f88vwze6k) {
                if ('native' === y87a9kv) {
                    var z6lgp = Array['prototype']['slice']['call']((this instanceof ShadowRoot ? this['host'] : this)['__shady_native_querySelectorAll'](f88vwze6k)), gy375i = this['__shady_getRootNode']();
                    z6lgp = y5jf9283(z6lgp);
                    for (var xj294k = z6lgp['next'](); !xj294k['done']; xj294k = z6lgp['next']())
                        if (xj294k = xj294k['value'], xj294k['__shady_getRootNode']() == gy375i)
                            return xj294k;
                    return null;
                }
                if ('selectorEngine' === y87a9kv)
                    return m4a8vb(this, f88vwze6k)[0x0] || null;
                if (void 0x0 === y87a9kv)
                    return x8d79tv(this, function (sl251) {
                        return ku8wv8['call'](sl251, f88vwze6k);
                    }, function (cw32760c) {
                        return !!cw32760c;
                    })[0x0] || null;
                throw Error('Unrecognized\x20value\x20of\x20ShadyDOM.querySelectorImplementation:\x20\x27' + (y87a9kv + '\x27'));
            },
            'querySelectorAll': function (i96o3, e65njyyb) {
                if (e65njyyb || 'native' === y87a9kv) {
                    e65njyyb = Array['prototype']['slice']['call']((this instanceof ShadowRoot ? this['host'] : this)['__shady_native_querySelectorAll'](i96o3));
                    var s6k6d1 = this['__shady_getRootNode']();
                    return k459io(e65njyyb['filter'](function (fzibs) {
                        return fzibs['__shady_getRootNode']() == s6k6d1;
                    }));
                }
                if ('selectorEngine' === y87a9kv)
                    return k459io(m4a8vb(this, i96o3));
                if (void 0x0 === y87a9kv)
                    return k459io(x8d79tv(this, function (wbx30p) {
                        return ku8wv8['call'](wbx30p, i96o3);
                    }));
                throw Error('Unrecognized\x20value\x20of\x20ShadyDOM.querySelectorImplementation:\x20\x27' + (y87a9kv + '\x27'));
            }
        }), c15922 = b975n9s7['ha'] && !b975n9s7['J'] ? zhgvkbw4z({}, xg6yxtmc) : xg6yxtmc;
    zhgvkbw4z(xg6yxtmc, bfog74cv9);
    var ng0pl = o1fls6d({
        'after': function (q8tx656sz) {
            for (var e015610 = [], lmhi83 = 0x0; lmhi83 < arguments['length']; ++lmhi83)
                e015610[lmhi83] = arguments[lmhi83];
            lmhi83 = this['__shady_parentNode'];
            if (null !== lmhi83) {
                var c62939g = this['__shady_nextSibling'];
                lmhi83['__shady_insertBefore'](jq4rmkaa3['apply'](null, v8f85q69(e015610)), c62939g);
            }
        },
        'before': function (tnc7134) {
            for (var ws5s34kog = [], t8p423k = 0x0; t8p423k < arguments['length']; ++t8p423k)
                ws5s34kog[t8p423k] = arguments[t8p423k];
            t8p423k = this['__shady_parentNode'];
            null !== t8p423k && t8p423k['__shady_insertBefore'](jq4rmkaa3['apply'](null, v8f85q69(ws5s34kog)), this);
        },
        'remove': function () {
            var g10citfn = this['__shady_parentNode'];
            null !== g10citfn && g10citfn['__shady_removeChild'](this);
        },
        'replaceWith': function (woj4c7a) {
            for (var e3qdsh7s = [], b526lc7b4 = 0x0; b526lc7b4 < arguments['length']; ++b526lc7b4)
                e3qdsh7s[b526lc7b4] = arguments[b526lc7b4];
            b526lc7b4 = this['__shady_parentNode'];
            if (null !== b526lc7b4) {
                var wf33y = this['__shady_nextSibling'];
                b526lc7b4['__shady_removeChild'](this);
                b526lc7b4['__shady_insertBefore'](jq4rmkaa3['apply'](null, v8f85q69(e3qdsh7s)), wf33y);
            }
        }
    });
    var fi18grl2 = window['document'];
    function j600h6(a341v, us0t84i5) {
        if ('slot' === us0t84i5)
            a341v = a341v['__shady_parentNode'], y432i41ep(a341v) && cgw2z0(h85gd70(a341v)['root']);
        else if ('slot' === a341v['localName'] && 'name' === us0t84i5 && (us0t84i5 = gi634(a341v))) {
            if (us0t84i5['g']) {
                v274y2h(us0t84i5);
                var bnw57 = a341v['Ua'], p4y46e = i7030pu(a341v);
                if (p4y46e !== bnw57) {
                    bnw57 = us0t84i5['h'][bnw57];
                    var mf90v2 = bnw57['indexOf'](a341v);
                    0x0 <= mf90v2 && bnw57['splice'](mf90v2, 0x1);
                    bnw57 = us0t84i5['h'][p4y46e] || (us0t84i5['h'][p4y46e] = []);
                    bnw57['push'](a341v);
                    0x1 < bnw57['length'] && (us0t84i5['h'][p4y46e] = n8155a02(bnw57));
                }
            }
            cgw2z0(us0t84i5);
        }
    }
    var ngu3y36a = o1fls6d({
        get 'previousElementSibling'() {
            var g1kh81fp = h85gd70(this);
            if (g1kh81fp && void 0x0 !== g1kh81fp['previousSibling']) {
                for (g1kh81fp = this['__shady_previousSibling']; g1kh81fp && g1kh81fp['nodeType'] !== Node['ELEMENT_NODE'];)
                    g1kh81fp = g1kh81fp['__shady_previousSibling'];
                return g1kh81fp;
            }
            return this['__shady_native_previousElementSibling'];
        },
        get 'nextElementSibling'() {
            var e0sm13062 = h85gd70(this);
            if (e0sm13062 && void 0x0 !== e0sm13062['nextSibling']) {
                for (e0sm13062 = this['__shady_nextSibling']; e0sm13062 && e0sm13062['nodeType'] !== Node['ELEMENT_NODE'];)
                    e0sm13062 = e0sm13062['__shady_nextSibling'];
                return e0sm13062;
            }
            return this['__shady_native_nextElementSibling'];
        },
        get 'slot'() {
            return this['getAttribute']('slot');
        },
        set 'slot'(thv13t) {
            this['__shady_setAttribute']('slot', thv13t);
        },
        get 'className'() {
            return this['getAttribute']('class') || '';
        },
        set 'className'(h86o8o) {
            this['__shady_setAttribute']('class', h86o8o);
        },
        'setAttribute': function (f457l3, fm18k5) {
            this['ownerDocument'] !== fi18grl2 ? this['__shady_native_setAttribute'](f457l3, fm18k5) : kru7qg(this, f457l3, fm18k5) || (this['__shady_native_setAttribute'](f457l3, fm18k5), j600h6(this, f457l3));
        },
        'removeAttribute': function (t6vp6o) {
            this['ownerDocument'] !== fi18grl2 ? this['__shady_native_removeAttribute'](t6vp6o) : kru7qg(this, t6vp6o, '') ? '' === this['getAttribute'](t6vp6o) && this['__shady_native_removeAttribute'](t6vp6o) : (this['__shady_native_removeAttribute'](t6vp6o), j600h6(this, t6vp6o));
        },
        'toggleAttribute': function (z22443, s8ns51u4) {
            if (this['ownerDocument'] !== fi18grl2)
                return this['__shady_native_toggleAttribute'](z22443, s8ns51u4);
            if (!kru7qg(this, z22443, ''))
                return s8ns51u4 = this['__shady_native_toggleAttribute'](z22443, s8ns51u4), j600h6(this, z22443), s8ns51u4;
            if ('' === this['getAttribute'](z22443) && !s8ns51u4)
                return this['__shady_native_toggleAttribute'](z22443, s8ns51u4);
        }
    });
    b975n9s7['ha'] || y9456['forEach'](function (f5077uth) {
        ngu3y36a[f5077uth] = ynw4h719(f5077uth);
    });
    var rg1l90 = o1fls6d({
        'attachShadow': function (cj38y421e) {
            if (!this)
                throw Error('Must\x20provide\x20a\x20host.');
            if (!cj38y421e)
                throw Error('Not\x20enough\x20arguments.');
            if (cj38y421e['shadyUpgradeFragment'] && !b975n9s7['Ra']) {
                var ljfz6 = cj38y421e['shadyUpgradeFragment'];
                ljfz6['__proto__'] = ShadowRoot['prototype'];
                n0856fj0e(ljfz6, this, cj38y421e);
                b7986(ljfz6, ljfz6);
                cj38y421e = ljfz6['__noInsertionPoint'] ? null : ljfz6['querySelectorAll']('slot');
                ljfz6['__noInsertionPoint'] = void 0x0;
                if (cj38y421e && cj38y421e['length']) {
                    var a2j3s = ljfz6;
                    e54248a2(a2j3s);
                    a2j3s['i']['push']['apply'](a2j3s['i'], v8f85q69(cj38y421e));
                    cgw2z0(ljfz6);
                }
                ljfz6['host']['__shady_native_appendChild'](ljfz6);
            } else
                ljfz6 = new tfq09(p46of8x5p, this, cj38y421e);
            return this['__CE_shadowRoot'] = ljfz6;
        },
        get 'shadowRoot'() {
            var n6ev87b = h85gd70(this);
            return n6ev87b && n6ev87b['lb'] || null;
        }
    });
    zhgvkbw4z(ngu3y36a, rg1l90);
    var b70l2507d = document['implementation']['createHTMLDocument']('inert'), i2vxa01we = o1fls6d({
            get 'innerHTML'() {
                return fyg9i419(this) ? r16vou6fe('template' === this['localName'] ? this['content'] : this, kvht8535) : this['__shady_native_innerHTML'];
            },
            set 'innerHTML'(m0b2y) {
                if ('template' === this['localName'])
                    this['__shady_native_innerHTML'] = m0b2y;
                else {
                    b75kar4(this);
                    var f18vz = this['localName'] || 'div';
                    f18vz = this['namespaceURI'] && this['namespaceURI'] !== b70l2507d['namespaceURI'] ? b70l2507d['createElementNS'](this['namespaceURI'], f18vz) : b70l2507d['createElement'](f18vz);
                    for (b975n9s7['D'] ? f18vz['__shady_native_innerHTML'] = m0b2y : f18vz['innerHTML'] = m0b2y; m0b2y = f18vz['__shady_firstChild'];)
                        this['__shady_insertBefore'](m0b2y);
                }
            }
        });
    var ig0fy6l6j = o1fls6d({
        'blur': function () {
            var m3wx8 = h85gd70(this);
            (m3wx8 = (m3wx8 = m3wx8 && m3wx8['root']) && m3wx8['activeElement']) ? m3wx8['__shady_blur']() : this['__shady_native_blur']();
        }
    });
    b975n9s7['ha'] || jsfm9['forEach'](function (ds6cum) {
        ig0fy6l6j[ds6cum] = ynw4h719(ds6cum);
    });
    var jw83e = o1fls6d({
        'assignedNodes': function (w5s937) {
            if ('slot' === this['localName']) {
                var u0y5py = this['__shady_getRootNode']();
                u0y5py && y34jicv(u0y5py) && ofzspju(u0y5py);
                return (u0y5py = h85gd70(this)) ? (w5s937 && w5s937['flatten'] ? u0y5py['aa'] : u0y5py['assignedNodes']) || [] : [];
            }
        },
        'addEventListener': function (hi6op, l149ba, z0y7a) {
            if ('slot' !== this['localName'] || 'slotchange' === hi6op)
                h6794vo0['call'](this, hi6op, l149ba, z0y7a);
            else {
                'object' !== typeof z0y7a && (z0y7a = { 'capture': !!z0y7a });
                var q05wqf64 = this['__shady_parentNode'];
                if (!q05wqf64)
                    throw Error('ShadyDOM\x20cannot\x20attach\x20event\x20to\x20slot\x20unless\x20it\x20has\x20a\x20`parentNode`');
                z0y7a['U'] = this;
                q05wqf64['__shady_addEventListener'](hi6op, l149ba, z0y7a);
            }
        },
        'removeEventListener': function (hcxk93, ww953, pzv66ur) {
            if ('slot' !== this['localName'] || 'slotchange' === hcxk93)
                sioh2942['call'](this, hcxk93, ww953, pzv66ur);
            else {
                'object' !== typeof pzv66ur && (pzv66ur = { 'capture': !!pzv66ur });
                var u383han = this['__shady_parentNode'];
                if (!u383han)
                    throw Error('ShadyDOM\x20cannot\x20attach\x20event\x20to\x20slot\x20unless\x20it\x20has\x20a\x20`parentNode`');
                pzv66ur['U'] = this;
                u383han['__shady_removeEventListener'](hcxk93, ww953, pzv66ur);
            }
        }
    });
    var vs36c040g = o1fls6d({
        'getElementById': function (aabk14213) {
            return '' === aabk14213 ? null : x8d79tv(this, function (u8zr523) {
                return u8zr523['id'] == aabk14213;
            }, function (h08k0sna) {
                return !!h08k0sna;
            })[0x0] || null;
        }
    });
    function ch1l348(wftbg40, w35r3r) {
        for (var t85sng4s0; w35r3r && !wftbg40['has'](t85sng4s0 = w35r3r['__shady_getRootNode']());)
            w35r3r = t85sng4s0['host'];
        return w35r3r;
    }
    function pxg930pr2(z9p448) {
        var e27q8s10b = new Set();
        for (e27q8s10b['add'](z9p448); y34jicv(z9p448) && z9p448['host'];)
            z9p448 = z9p448['host']['__shady_getRootNode'](), e27q8s10b['add'](z9p448);
        return e27q8s10b;
    }
    var y20lxbct = '__shady_native_' + uf2hhk0(), bsq81d = o1fls6d({
            get 'activeElement'() {
                var w249fh01 = b975n9s7['D'] ? document['__shady_native_activeElement'] : document['activeElement'];
                if (!w249fh01 || !w249fh01['nodeType'])
                    return null;
                var rj059 = !!y34jicv(this);
                if (!(this === document || rj059 && this['host'] !== w249fh01 && this['host']['__shady_native_contains'](w249fh01)))
                    return null;
                for (rj059 = gi634(w249fh01); rj059 && rj059 !== this;)
                    w249fh01 = rj059['host'], rj059 = gi634(w249fh01);
                return this === document ? rj059 ? null : w249fh01 : rj059 === this ? w249fh01 : null;
            },
            'elementsFromPoint': function (w4qzz, ka904b3g6) {
                w4qzz = document[y20lxbct](w4qzz, ka904b3g6);
                if (this === document && b975n9s7['useNativeDocumentEFP'])
                    return w4qzz;
                w4qzz = []['slice']['call'](w4qzz);
                ka904b3g6 = pxg930pr2(this);
                for (var k1r2j76 = new Set(), w56qeif = 0x0; w56qeif < w4qzz['length']; w56qeif++)
                    k1r2j76['add'](ch1l348(ka904b3g6, w4qzz[w56qeif]));
                var itris = [];
                k1r2j76['forEach'](function (upsqo43o) {
                    return itris['push'](upsqo43o);
                });
                return itris;
            },
            'elementFromPoint': function (vjxrcm85d, k1ze293i) {
                return this === document && b975n9s7['useNativeDocumentEFP'] ? this['__shady_native_elementFromPoint'](vjxrcm85d, k1ze293i) : this['__shady_elementsFromPoint'](vjxrcm85d, k1ze293i)[0x0] || null;
            }
        });
    var u9ljw3m4i = window['document'], e7c6q0 = o1fls6d({
            'importNode': function (b0ex54oh, cc4131c45) {
                if (b0ex54oh['ownerDocument'] !== u9ljw3m4i || 'template' === b0ex54oh['localName'])
                    return this['__shady_native_importNode'](b0ex54oh, cc4131c45);
                var q647epc = this['__shady_native_importNode'](b0ex54oh, !0x1);
                if (cc4131c45)
                    for (b0ex54oh = b0ex54oh['__shady_firstChild']; b0ex54oh; b0ex54oh = b0ex54oh['__shady_nextSibling'])
                        cc4131c45 = this['__shady_importNode'](b0ex54oh, !0x0), q647epc['__shady_appendChild'](cc4131c45);
                return q647epc;
            }
        });
    var v52913 = o1fls6d({
        'dispatchEvent': m8g5kp,
        'addEventListener': h6794vo0['bind'](window),
        'removeEventListener': sioh2942['bind'](window)
    });
    var s2xxx = {};
    Object['getOwnPropertyDescriptor'](HTMLElement['prototype'], 'parentElement') && (s2xxx['parentElement'] = ls0t8zl['parentElement']);
    Object['getOwnPropertyDescriptor'](HTMLElement['prototype'], 'contains') && (s2xxx['contains'] = ls0t8zl['contains']);
    Object['getOwnPropertyDescriptor'](HTMLElement['prototype'], 'children') && (s2xxx['children'] = xg6yxtmc['children']);
    Object['getOwnPropertyDescriptor'](HTMLElement['prototype'], 'innerHTML') && (s2xxx['innerHTML'] = i2vxa01we['innerHTML']);
    Object['getOwnPropertyDescriptor'](HTMLElement['prototype'], 'className') && (s2xxx['className'] = ngu3y36a['className']);
    var s4l565u = {
            'EventTarget': [cd50t5],
            'Node': [
                ls0t8zl,
                window['EventTarget'] ? null : cd50t5
            ],
            'Text': [kh17ru],
            'Comment': [kh17ru],
            'CDATASection': [kh17ru],
            'ProcessingInstruction': [kh17ru],
            'Element': [
                ngu3y36a,
                xg6yxtmc,
                ng0pl,
                kh17ru,
                !b975n9s7['D'] || 'innerHTML' in Element['prototype'] ? i2vxa01we : null,
                window['HTMLSlotElement'] ? null : jw83e
            ],
            'HTMLElement': [
                ig0fy6l6j,
                s2xxx
            ],
            'HTMLSlotElement': [jw83e],
            'DocumentFragment': [
                c15922,
                vs36c040g
            ],
            'Document': [
                e7c6q0,
                c15922,
                vs36c040g,
                bsq81d
            ],
            'Window': [v52913],
            'CharacterData': [ng0pl],
            'XMLHttpRequest': [window['EventTarget'] ? null : cd50t5]
        }, raedy6t47 = b975n9s7['D'] ? null : [
            'innerHTML',
            'textContent'
        ];
    function nnzud(r1e805, k54lf, r164d, w2931) {
        k54lf['forEach'](function (k1of548) {
            return r1e805 && k1of548 && pg0pd67z8(r1e805, k1of548, r164d, w2931);
        });
    }
    function xo23c3n3t(d321z0o0) {
        var dr9u249 = d321z0o0 ? null : raedy6t47, l06au7660;
        for (l06au7660 in s4l565u)
            nnzud(window[l06au7660] && window[l06au7660]['prototype'], s4l565u[l06au7660], d321z0o0, dr9u249);
    }
    [
        'Text',
        'Comment',
        'CDATASection',
        'ProcessingInstruction'
    ]['forEach'](function (itjdc6) {
        var w71x0 = window[itjdc6], neljg8976 = Object['create'](w71x0['prototype']);
        neljg8976['__shady_protoIsPatched'] = !0x0;
        nnzud(neljg8976, s4l565u['EventTarget']);
        nnzud(neljg8976, s4l565u['Node']);
        s4l565u[itjdc6] && nnzud(neljg8976, s4l565u[itjdc6]);
        w71x0['prototype']['__shady_patchedProto'] = neljg8976;
    });
    function ed19im94(da7our8c) {
        da7our8c['__shady_protoIsPatched'] = !0x0;
        nnzud(da7our8c, s4l565u['EventTarget']);
        nnzud(da7our8c, s4l565u['Node']);
        nnzud(da7our8c, s4l565u['Element']);
        nnzud(da7our8c, s4l565u['HTMLElement']);
        nnzud(da7our8c, s4l565u['HTMLSlotElement']);
        return da7our8c;
    }
    ;
    var v07j186nj = b975n9s7['Da'], e2568074 = b975n9s7['D'];
    function t7461gfx8(v4xrp9l7, fc35m5q) {
        if (v07j186nj && !v4xrp9l7['__shady_protoIsPatched'] && !y34jicv(v4xrp9l7)) {
            var u84sqv74v = Object['getPrototypeOf'](v4xrp9l7), uw61d46 = u84sqv74v['hasOwnProperty']('__shady_patchedProto') && u84sqv74v['__shady_patchedProto'];
            uw61d46 || (uw61d46 = Object['create'](u84sqv74v), ed19im94(uw61d46), u84sqv74v['__shady_patchedProto'] = uw61d46);
            Object['setPrototypeOf'](v4xrp9l7, uw61d46);
        }
        e2568074 || (0x1 === fc35m5q ? yk68bzuj(v4xrp9l7) : 0x2 === fc35m5q && f6a5531(v4xrp9l7));
    }
    function kd09t(c94ov, bc4u9675, mx2g2ko, umyn930) {
        t7461gfx8(c94ov, 0x1);
        umyn930 = umyn930 || null;
        var p82dc4hfa = f9ql21b75(c94ov), xx3o75x = umyn930 ? f9ql21b75(umyn930) : null;
        p82dc4hfa['previousSibling'] = umyn930 ? xx3o75x['previousSibling'] : bc4u9675['__shady_lastChild'];
        if (xx3o75x = h85gd70(p82dc4hfa['previousSibling']))
            xx3o75x['nextSibling'] = c94ov;
        if (xx3o75x = h85gd70(p82dc4hfa['nextSibling'] = umyn930))
            xx3o75x['previousSibling'] = c94ov;
        p82dc4hfa['parentNode'] = bc4u9675;
        umyn930 ? umyn930 === mx2g2ko['firstChild'] && (mx2g2ko['firstChild'] = c94ov) : (mx2g2ko['lastChild'] = c94ov, mx2g2ko['firstChild'] || (mx2g2ko['firstChild'] = c94ov));
        mx2g2ko['childNodes'] = null;
    }
    function u7k7c95u(grz1g53j, a0lne, gpv6z) {
        t7461gfx8(a0lne, 0x2);
        var we6t3 = f9ql21b75(a0lne);
        void 0x0 !== we6t3['firstChild'] && (we6t3['childNodes'] = null);
        if (grz1g53j['nodeType'] === Node['DOCUMENT_FRAGMENT_NODE'])
            for (grz1g53j = grz1g53j['__shady_native_firstChild']; grz1g53j; grz1g53j = grz1g53j['__shady_native_nextSibling'])
                kd09t(grz1g53j, a0lne, we6t3, gpv6z);
        else
            kd09t(grz1g53j, a0lne, we6t3, gpv6z);
    }
    function s0b0nx(h62es9odx, z52k3) {
        var uluc7 = f9ql21b75(h62es9odx);
        z52k3 = f9ql21b75(z52k3);
        h62es9odx === z52k3['firstChild'] && (z52k3['firstChild'] = uluc7['nextSibling']);
        h62es9odx === z52k3['lastChild'] && (z52k3['lastChild'] = uluc7['previousSibling']);
        h62es9odx = uluc7['previousSibling'];
        var cuhmf = uluc7['nextSibling'];
        h62es9odx && (f9ql21b75(h62es9odx)['nextSibling'] = cuhmf);
        cuhmf && (f9ql21b75(cuhmf)['previousSibling'] = h62es9odx);
        uluc7['parentNode'] = uluc7['previousSibling'] = uluc7['nextSibling'] = void 0x0;
        void 0x0 !== z52k3['childNodes'] && (z52k3['childNodes'] = null);
    }
    function b7986(u8u7ks, st1yo5) {
        var gohdvryow = f9ql21b75(u8u7ks);
        if (st1yo5 || void 0x0 === gohdvryow['firstChild']) {
            gohdvryow['childNodes'] = null;
            var rlt4aei = gohdvryow['firstChild'] = u8u7ks['__shady_native_firstChild'];
            gohdvryow['lastChild'] = u8u7ks['__shady_native_lastChild'];
            t7461gfx8(u8u7ks, 0x2);
            gohdvryow = rlt4aei;
            for (rlt4aei = void 0x0; gohdvryow; gohdvryow = gohdvryow['__shady_native_nextSibling']) {
                var t3r89 = f9ql21b75(gohdvryow);
                t3r89['parentNode'] = st1yo5 || u8u7ks;
                t3r89['nextSibling'] = gohdvryow['__shady_native_nextSibling'];
                t3r89['previousSibling'] = rlt4aei || null;
                rlt4aei = gohdvryow;
                t7461gfx8(gohdvryow, 0x1);
            }
        }
    }
    ;
    var ped7y = o1fls6d({
        'addEventListener': function (yw4wn89g, iqymb, jj8a57y69) {
            'object' !== typeof jj8a57y69 && (jj8a57y69 = { 'capture': !!jj8a57y69 });
            jj8a57y69['U'] = jj8a57y69['U'] || this;
            this['host']['__shady_addEventListener'](yw4wn89g, iqymb, jj8a57y69);
        },
        'removeEventListener': function (i38sqj144, y763z, rlv1gsj) {
            'object' !== typeof rlv1gsj && (rlv1gsj = { 'capture': !!rlv1gsj });
            rlv1gsj['U'] = rlv1gsj['U'] || this;
            this['host']['__shady_removeEventListener'](i38sqj144, y763z, rlv1gsj);
        }
    });
    function xsfgt(h8zbt, k447b) {
        pg0pd67z8(h8zbt, ped7y, k447b);
        pg0pd67z8(h8zbt, bsq81d, k447b);
        pg0pd67z8(h8zbt, i2vxa01we, k447b);
        pg0pd67z8(h8zbt, xg6yxtmc, k447b);
        b975n9s7['J'] && !k447b ? (pg0pd67z8(h8zbt, ls0t8zl, k447b), pg0pd67z8(h8zbt, vs36c040g, k447b)) : b975n9s7['D'] || (pg0pd67z8(h8zbt, r75lm4u71), pg0pd67z8(h8zbt, v10wk457b), pg0pd67z8(h8zbt, w5659));
    }
    ;
    var p46of8x5p = {}, faide5 = b975n9s7['deferConnectionCallbacks'] && 'loading' === document['readyState'], req616l;
    function cjo44mo9h(c6omjca) {
        var v9ljbu0l = [];
        do
            v9ljbu0l['unshift'](c6omjca);
        while (c6omjca = c6omjca['__shady_parentNode']);
        return v9ljbu0l;
    }
    function tfq09(h84ymu, l1l4o87j, a3j8ftr05) {
        if (h84ymu !== p46of8x5p)
            throw new TypeError('Illegal\x20constructor');
        this['g'] = null;
        n0856fj0e(this, l1l4o87j, a3j8ftr05);
    }
    function n0856fj0e(ibuyi, pe96j22, m5c08w) {
        ibuyi['host'] = pe96j22;
        ibuyi['mode'] = m5c08w && m5c08w['mode'];
        b7986(ibuyi['host']);
        pe96j22 = f9ql21b75(ibuyi['host']);
        pe96j22['root'] = ibuyi;
        pe96j22['lb'] = 'closed' !== ibuyi['mode'] ? ibuyi : null;
        pe96j22 = f9ql21b75(ibuyi);
        pe96j22['firstChild'] = pe96j22['lastChild'] = pe96j22['parentNode'] = pe96j22['nextSibling'] = pe96j22['previousSibling'] = null;
        if (b975n9s7['preferPerformance'])
            for (; pe96j22 = ibuyi['host']['__shady_native_firstChild'];)
                ibuyi['host']['__shady_native_removeChild'](pe96j22);
        else
            cgw2z0(ibuyi);
    }
    function cgw2z0(hwl467a2g) {
        hwl467a2g['Y'] || (hwl467a2g['Y'] = !0x0, ah541m6(function () {
            return ofzspju(hwl467a2g);
        }));
    }
    function ofzspju(kk0v0r8u) {
        var c4d877f4p;
        if (c4d877f4p = kk0v0r8u['Y']) {
            for (var zkbl1at18; kk0v0r8u;)
                u929i: {
                    kk0v0r8u['Y'] && (zkbl1at18 = kk0v0r8u), c4d877f4p = kk0v0r8u;
                    kk0v0r8u = c4d877f4p['host']['__shady_getRootNode']();
                    if (y34jicv(kk0v0r8u) && (c4d877f4p = h85gd70(c4d877f4p['host'])) && 0x0 < c4d877f4p['ka'])
                        break u929i;
                    kk0v0r8u = void 0x0;
                }
            c4d877f4p = zkbl1at18;
        }
        (zkbl1at18 = c4d877f4p) && zkbl1at18['_renderSelf']();
    }
    tfq09['prototype']['_renderSelf'] = function () {
        var l3e7y9y0 = faide5;
        faide5 = !0x0;
        this['Y'] = !0x1;
        if (this['g']) {
            v274y2h(this);
            for (var dz0k7v = 0x0, x99xt; dz0k7v < this['g']['length']; dz0k7v++) {
                x99xt = this['g'][dz0k7v];
                var gm9napu = h85gd70(x99xt), h1zr4 = gm9napu['assignedNodes'];
                gm9napu['assignedNodes'] = [];
                gm9napu['aa'] = [];
                if (gm9napu['Ja'] = h1zr4)
                    for (gm9napu = 0x0; gm9napu < h1zr4['length']; gm9napu++) {
                        var weqz8hn7 = h85gd70(h1zr4[gm9napu]);
                        weqz8hn7['xa'] = weqz8hn7['assignedSlot'];
                        weqz8hn7['assignedSlot'] === x99xt && (weqz8hn7['assignedSlot'] = null);
                    }
            }
            for (dz0k7v = this['host']['__shady_firstChild']; dz0k7v; dz0k7v = dz0k7v['__shady_nextSibling'])
                oialw(this, dz0k7v);
            for (dz0k7v = 0x0; dz0k7v < this['g']['length']; dz0k7v++) {
                x99xt = this['g'][dz0k7v];
                h1zr4 = h85gd70(x99xt);
                if (!h1zr4['assignedNodes']['length'])
                    for (gm9napu = x99xt['__shady_firstChild']; gm9napu; gm9napu = gm9napu['__shady_nextSibling'])
                        oialw(this, gm9napu, x99xt);
                (gm9napu = (gm9napu = h85gd70(x99xt['__shady_parentNode'])) && gm9napu['root']) && (s6e28mt(gm9napu) || gm9napu['Y']) && gm9napu['_renderSelf']();
                hfd0uq6z7(this, h1zr4['aa'], h1zr4['assignedNodes']);
                if (gm9napu = h1zr4['Ja']) {
                    for (weqz8hn7 = 0x0; weqz8hn7 < gm9napu['length']; weqz8hn7++)
                        h85gd70(gm9napu[weqz8hn7])['xa'] = null;
                    h1zr4['Ja'] = null;
                    gm9napu['length'] > h1zr4['assignedNodes']['length'] && (h1zr4['Aa'] = !0x0);
                }
                h1zr4['Aa'] && (h1zr4['Aa'] = !0x1, r629t6(this, x99xt));
            }
            x99xt = this['g'];
            dz0k7v = [];
            for (h1zr4 = 0x0; h1zr4 < x99xt['length']; h1zr4++)
                gm9napu = x99xt[h1zr4]['__shady_parentNode'], (weqz8hn7 = h85gd70(gm9napu)) && weqz8hn7['root'] || !(0x0 > dz0k7v['indexOf'](gm9napu)) || dz0k7v['push'](gm9napu);
            for (x99xt = 0x0; x99xt < dz0k7v['length']; x99xt++) {
                weqz8hn7 = dz0k7v[x99xt];
                h1zr4 = weqz8hn7 === this ? this['host'] : weqz8hn7;
                gm9napu = [];
                for (weqz8hn7 = weqz8hn7['__shady_firstChild']; weqz8hn7; weqz8hn7 = weqz8hn7['__shady_nextSibling'])
                    if ('slot' == weqz8hn7['localName'])
                        for (var x1vs0521 = h85gd70(weqz8hn7)['aa'], a3mo2 = 0x0; a3mo2 < x1vs0521['length']; a3mo2++)
                            gm9napu['push'](x1vs0521[a3mo2]);
                    else
                        gm9napu['push'](weqz8hn7);
                weqz8hn7 = x1yh1j(h1zr4);
                x1vs0521 = a4238(gm9napu, gm9napu['length'], weqz8hn7, weqz8hn7['length']);
                for (var a40zp2j4 = a3mo2 = 0x0, ar2m678 = void 0x0; a3mo2 < x1vs0521['length'] && (ar2m678 = x1vs0521[a3mo2]); a3mo2++) {
                    for (var u56t0b9 = 0x0, no26y06 = void 0x0; u56t0b9 < ar2m678['ia']['length'] && (no26y06 = ar2m678['ia'][u56t0b9]); u56t0b9++)
                        no26y06['__shady_native_parentNode'] === h1zr4 && h1zr4['__shady_native_removeChild'](no26y06), weqz8hn7['splice'](ar2m678['index'] + a40zp2j4, 0x1);
                    a40zp2j4 -= ar2m678['pa'];
                }
                a40zp2j4 = 0x0;
                for (ar2m678 = void 0x0; a40zp2j4 < x1vs0521['length'] && (ar2m678 = x1vs0521[a40zp2j4]); a40zp2j4++)
                    for (a3mo2 = weqz8hn7[ar2m678['index']], u56t0b9 = ar2m678['index']; u56t0b9 < ar2m678['index'] + ar2m678['pa']; u56t0b9++)
                        no26y06 = gm9napu[u56t0b9], h1zr4['__shady_native_insertBefore'](no26y06, a3mo2), weqz8hn7['splice'](u56t0b9, 0x0, no26y06);
            }
        }
        if (!b975n9s7['preferPerformance'] && !this['Ia'])
            for (dz0k7v = this['host']['__shady_firstChild']; dz0k7v; dz0k7v = dz0k7v['__shady_nextSibling'])
                x99xt = h85gd70(dz0k7v), dz0k7v['__shady_native_parentNode'] !== this['host'] || 'slot' !== dz0k7v['localName'] && x99xt['assignedSlot'] || this['host']['__shady_native_removeChild'](dz0k7v);
        this['Ia'] = !0x0;
        faide5 = l3e7y9y0;
        req616l && req616l();
    };
    function oialw(tn82649hw, xu8787r, xpwt977q) {
        var yx9fu4 = f9ql21b75(xu8787r), h6j8512r = yx9fu4['xa'];
        yx9fu4['xa'] = null;
        xpwt977q || (xpwt977q = (tn82649hw = tn82649hw['h'][xu8787r['__shady_slot'] || '__catchall']) && tn82649hw[0x0]);
        xpwt977q ? (f9ql21b75(xpwt977q)['assignedNodes']['push'](xu8787r), yx9fu4['assignedSlot'] = xpwt977q) : yx9fu4['assignedSlot'] = void 0x0;
        h6j8512r !== yx9fu4['assignedSlot'] && yx9fu4['assignedSlot'] && (f9ql21b75(yx9fu4['assignedSlot'])['Aa'] = !0x0);
    }
    function hfd0uq6z7(x07sx7m, sirib353f, a6b31s) {
        for (var o8z111b05 = 0x0, rkqnh8p0d = void 0x0; o8z111b05 < a6b31s['length'] && (rkqnh8p0d = a6b31s[o8z111b05]); o8z111b05++)
            if ('slot' == rkqnh8p0d['localName']) {
                var i014pn2 = h85gd70(rkqnh8p0d)['assignedNodes'];
                i014pn2 && i014pn2['length'] && hfd0uq6z7(x07sx7m, sirib353f, i014pn2);
            } else
                sirib353f['push'](a6b31s[o8z111b05]);
    }
    function r629t6(srokp, p428r) {
        p428r['__shady_native_dispatchEvent'](new Event('slotchange'));
        p428r = h85gd70(p428r);
        p428r['assignedSlot'] && r629t6(srokp, p428r['assignedSlot']);
    }
    function e54248a2(xq6hn) {
        xq6hn['i'] = xq6hn['i'] || [];
        xq6hn['g'] = xq6hn['g'] || [];
        xq6hn['h'] = xq6hn['h'] || {};
    }
    function v274y2h(by1a1p2wo) {
        if (by1a1p2wo['i'] && by1a1p2wo['i']['length']) {
            for (var m0qg6y6 = by1a1p2wo['i'], jn37no6, y7v7x = 0x0; y7v7x < m0qg6y6['length']; y7v7x++) {
                var z0i584rh5 = m0qg6y6[y7v7x];
                b7986(z0i584rh5);
                var swpjt673 = z0i584rh5['__shady_parentNode'];
                b7986(swpjt673);
                swpjt673 = h85gd70(swpjt673);
                swpjt673['ka'] = (swpjt673['ka'] || 0x0) + 0x1;
                swpjt673 = i7030pu(z0i584rh5);
                by1a1p2wo['h'][swpjt673] ? (jn37no6 = jn37no6 || {}, jn37no6[swpjt673] = !0x0, by1a1p2wo['h'][swpjt673]['push'](z0i584rh5)) : by1a1p2wo['h'][swpjt673] = [z0i584rh5];
                by1a1p2wo['g']['push'](z0i584rh5);
            }
            if (jn37no6)
                for (var qp5y0k2w3 in jn37no6)
                    by1a1p2wo['h'][qp5y0k2w3] = n8155a02(by1a1p2wo['h'][qp5y0k2w3]);
            by1a1p2wo['i'] = [];
        }
    }
    function i7030pu(vq0ud26) {
        var xd658 = vq0ud26['name'] || vq0ud26['getAttribute']('name') || '__catchall';
        return vq0ud26['Ua'] = xd658;
    }
    function n8155a02(r2v2k4) {
        return r2v2k4['sort'](function (ny025z, ii8suw0) {
            ny025z = cjo44mo9h(ny025z);
            for (var jst72s82 = cjo44mo9h(ii8suw0), v362f = 0x0; v362f < ny025z['length']; v362f++) {
                ii8suw0 = ny025z[v362f];
                var pph863x = jst72s82[v362f];
                if (ii8suw0 !== pph863x)
                    return ny025z = kvht8535(ii8suw0['__shady_parentNode']), ny025z['indexOf'](ii8suw0) - ny025z['indexOf'](pph863x);
            }
        });
    }
    function g893764tm(u19v8m3, kt18j) {
        if (u19v8m3['g']) {
            v274y2h(u19v8m3);
            var k4mgw68bv = u19v8m3['h'], zk15o5;
            for (zk15o5 in k4mgw68bv)
                for (var wh19pl9 = k4mgw68bv[zk15o5], kokm77bh = 0x0; kokm77bh < wh19pl9['length']; kokm77bh++) {
                    var z3v90 = wh19pl9[kokm77bh];
                    if (t4eau90l(kt18j, z3v90)) {
                        wh19pl9['splice'](kokm77bh, 0x1);
                        var b7zbxfop6 = u19v8m3['g']['indexOf'](z3v90);
                        0x0 <= b7zbxfop6 && (u19v8m3['g']['splice'](b7zbxfop6, 0x1), (b7zbxfop6 = h85gd70(z3v90['__shady_parentNode'])) && b7zbxfop6['ka'] && b7zbxfop6['ka']--);
                        kokm77bh--;
                        z3v90 = h85gd70(z3v90);
                        if (b7zbxfop6 = z3v90['aa'])
                            for (var ssfhm = 0x0; ssfhm < b7zbxfop6['length']; ssfhm++) {
                                var a03i83o = b7zbxfop6[ssfhm], x62my = a03i83o['__shady_native_parentNode'];
                                x62my && x62my['__shady_native_removeChild'](a03i83o);
                            }
                        z3v90['aa'] = [];
                        z3v90['assignedNodes'] = [];
                        b7zbxfop6 = !0x0;
                    }
                }
            return b7zbxfop6;
        }
    }
    function s6e28mt(t7jd466) {
        v274y2h(t7jd466);
        return !(!t7jd466['g'] || !t7jd466['g']['length']);
    }
    (function (o6776) {
        o6776['__proto__'] = DocumentFragment['prototype'];
        xsfgt(o6776, '__shady_');
        xsfgt(o6776);
        Object['defineProperties'](o6776, {
            'nodeType': {
                'value': Node['DOCUMENT_FRAGMENT_NODE'],
                'configurable': !0x0
            },
            'nodeName': {
                'value': '#document-fragment',
                'configurable': !0x0
            },
            'nodeValue': {
                'value': null,
                'configurable': !0x0
            }
        });
        [
            'localName',
            'namespaceURI',
            'prefix'
        ]['forEach'](function (hd4xk3) {
            Object['defineProperty'](o6776, hd4xk3, {
                'value': void 0x0,
                'configurable': !0x0
            });
        });
        [
            'ownerDocument',
            'baseURI',
            'isConnected'
        ]['forEach'](function (lgz8olwz) {
            Object['defineProperty'](o6776, lgz8olwz, {
                'get': function () {
                    return this['host'][lgz8olwz];
                },
                'configurable': !0x0
            });
        });
    }(tfq09['prototype']));
    if (window['customElements'] && window['customElements']['define'] && b975n9s7['Ba'] && !b975n9s7['preferPerformance']) {
        var kftu1 = new Map();
        req616l = function () {
            var p568s06 = [];
            kftu1['forEach'](function (j41t9ni, scowf) {
                p568s06['push']([
                    scowf,
                    j41t9ni
                ]);
            });
            kftu1['clear']();
            for (var w8e5pd1k = 0x0; w8e5pd1k < p568s06['length']; w8e5pd1k++) {
                var qyx0c66y = p568s06[w8e5pd1k][0x0];
                p568s06[w8e5pd1k][0x1] ? qyx0c66y['__shadydom_connectedCallback']() : qyx0c66y['__shadydom_disconnectedCallback']();
            }
        };
        faide5 && document['addEventListener']('readystatechange', function () {
            faide5 = !0x1;
            req616l();
        }, { 'once': !0x0 });
        var h07rtefh = function (z9qq54v, c54ew0, l45u6) {
                var ss28m29jd = 0x0, rr62pj31 = '__isConnected' + ss28m29jd++;
                if (c54ew0 || l45u6)
                    z9qq54v['prototype']['connectedCallback'] = z9qq54v['prototype']['__shadydom_connectedCallback'] = function () {
                        faide5 ? kftu1['set'](this, !0x0) : this[rr62pj31] || (this[rr62pj31] = !0x0, c54ew0 && c54ew0['call'](this));
                    }, z9qq54v['prototype']['disconnectedCallback'] = z9qq54v['prototype']['__shadydom_disconnectedCallback'] = function () {
                        faide5 ? this['isConnected'] || kftu1['set'](this, !0x1) : this[rr62pj31] && (this[rr62pj31] = !0x1, l45u6 && l45u6['call'](this));
                    };
                return z9qq54v;
            }, mdel785z9 = window['customElements']['define'], r2dcr2 = function (m1e87kpj8, w6d0xlcml) {
                var da1n35e5q = w6d0xlcml['prototype']['connectedCallback'], u9g9b0884 = w6d0xlcml['prototype']['disconnectedCallback'];
                mdel785z9['call'](window['customElements'], m1e87kpj8, h07rtefh(w6d0xlcml, da1n35e5q, u9g9b0884));
                w6d0xlcml['prototype']['connectedCallback'] = da1n35e5q;
                w6d0xlcml['prototype']['disconnectedCallback'] = u9g9b0884;
            };
        window['customElements']['define'] = r2dcr2;
        Object['defineProperty'](window['CustomElementRegistry']['prototype'], 'define', {
            'value': r2dcr2,
            'configurable': !0x0
        });
    }
    function gi634(ueb8f8l6) {
        ueb8f8l6 = ueb8f8l6['__shady_getRootNode']();
        if (y34jicv(ueb8f8l6))
            return ueb8f8l6;
    }
    ;
    function bh1p73rc(g261c) {
        this['node'] = g261c;
    }
    b40918 = bh1p73rc['prototype'];
    b40918['addEventListener'] = function (vkl95061, ck1zxp6, zu5r4lq5p) {
        return this['node']['__shady_addEventListener'](vkl95061, ck1zxp6, zu5r4lq5p);
    };
    b40918['removeEventListener'] = function (vu18n8tpa, jb7696f78, uq47j78d) {
        return this['node']['__shady_removeEventListener'](vu18n8tpa, jb7696f78, uq47j78d);
    };
    b40918['appendChild'] = function (n6j6e59hl) {
        return this['node']['__shady_appendChild'](n6j6e59hl);
    };
    b40918['insertBefore'] = function (t04bu73ee, k45ehb87) {
        return this['node']['__shady_insertBefore'](t04bu73ee, k45ehb87);
    };
    b40918['removeChild'] = function (kd4o3wfm) {
        return this['node']['__shady_removeChild'](kd4o3wfm);
    };
    b40918['replaceChild'] = function (shm13s77, i6u18g) {
        return this['node']['__shady_replaceChild'](shm13s77, i6u18g);
    };
    b40918['cloneNode'] = function (aeb57c) {
        return this['node']['__shady_cloneNode'](aeb57c);
    };
    b40918['getRootNode'] = function (y3366v) {
        return this['node']['__shady_getRootNode'](y3366v);
    };
    b40918['contains'] = function (avtxagm9) {
        return this['node']['__shady_contains'](avtxagm9);
    };
    b40918['dispatchEvent'] = function (pnlujc7) {
        return this['node']['__shady_dispatchEvent'](pnlujc7);
    };
    b40918['setAttribute'] = function (jhk7z4p72, x5f16) {
        this['node']['__shady_setAttribute'](jhk7z4p72, x5f16);
    };
    b40918['getAttribute'] = function (u5128831) {
        return this['node']['__shady_native_getAttribute'](u5128831);
    };
    b40918['hasAttribute'] = function (s2ul86) {
        return this['node']['__shady_native_hasAttribute'](s2ul86);
    };
    b40918['removeAttribute'] = function (rl3gz4p) {
        this['node']['__shady_removeAttribute'](rl3gz4p);
    };
    b40918['toggleAttribute'] = function (j0o4084s9, ojwtv) {
        return this['node']['__shady_toggleAttribute'](j0o4084s9, ojwtv);
    };
    b40918['attachShadow'] = function (qb71xil7) {
        return this['node']['__shady_attachShadow'](qb71xil7);
    };
    b40918['focus'] = function () {
        this['node']['__shady_native_focus']();
    };
    b40918['blur'] = function () {
        this['node']['__shady_blur']();
    };
    b40918['importNode'] = function (us5lelo4, o6s6l4g) {
        if (this['node']['nodeType'] === Node['DOCUMENT_NODE'])
            return this['node']['__shady_importNode'](us5lelo4, o6s6l4g);
    };
    b40918['getElementById'] = function (yuh459) {
        if (this['node']['nodeType'] === Node['DOCUMENT_NODE'])
            return this['node']['__shady_getElementById'](yuh459);
    };
    b40918['elementsFromPoint'] = function (r9c47ntg, ud996) {
        return this['node']['__shady_elementsFromPoint'](r9c47ntg, ud996);
    };
    b40918['elementFromPoint'] = function (r6cqw2z, f2lui9) {
        return this['node']['__shady_elementFromPoint'](r6cqw2z, f2lui9);
    };
    b40918['querySelector'] = function (im2oa10q) {
        return this['node']['__shady_querySelector'](im2oa10q);
    };
    b40918['querySelectorAll'] = function (z0w1c395, s2vx6o) {
        return this['node']['__shady_querySelectorAll'](z0w1c395, s2vx6o);
    };
    b40918['assignedNodes'] = function (jm40764) {
        if ('slot' === this['node']['localName'])
            return this['node']['__shady_assignedNodes'](jm40764);
    };
    b40918['append'] = function (ig2xc) {
        for (var sadq09x = [], sf5zy7kj = 0x0; sf5zy7kj < arguments['length']; ++sf5zy7kj)
            sadq09x[sf5zy7kj] = arguments[sf5zy7kj];
        return this['node']['__shady_append']['apply'](this['node'], v8f85q69(sadq09x));
    };
    b40918['prepend'] = function (k30d94) {
        for (var cp4g0c9 = [], jxmh8j5g = 0x0; jxmh8j5g < arguments['length']; ++jxmh8j5g)
            cp4g0c9[jxmh8j5g] = arguments[jxmh8j5g];
        return this['node']['__shady_prepend']['apply'](this['node'], v8f85q69(cp4g0c9));
    };
    b40918['after'] = function (jy0c9o) {
        for (var bodq072 = [], d1h9qu49 = 0x0; d1h9qu49 < arguments['length']; ++d1h9qu49)
            bodq072[d1h9qu49] = arguments[d1h9qu49];
        return this['node']['__shady_after']['apply'](this['node'], v8f85q69(bodq072));
    };
    b40918['before'] = function (z92u402jo) {
        for (var lhcmyu0r8 = [], zh9r2 = 0x0; zh9r2 < arguments['length']; ++zh9r2)
            lhcmyu0r8[zh9r2] = arguments[zh9r2];
        return this['node']['__shady_before']['apply'](this['node'], v8f85q69(lhcmyu0r8));
    };
    b40918['remove'] = function () {
        return this['node']['__shady_remove']();
    };
    b40918['replaceWith'] = function (pb565h3) {
        for (var l60h4a = [], olof8 = 0x0; olof8 < arguments['length']; ++olof8)
            l60h4a[olof8] = arguments[olof8];
        return this['node']['__shady_replaceWith']['apply'](this['node'], v8f85q69(l60h4a));
    };
    yr7vj3d6q['Object']['defineProperties'](bh1p73rc['prototype'], {
        'activeElement': {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                if (y34jicv(this['node']) || this['node']['nodeType'] === Node['DOCUMENT_NODE'])
                    return this['node']['__shady_activeElement'];
            }
        },
        '_activeElement': {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                return this['activeElement'];
            }
        },
        'host': {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                if (y34jicv(this['node']))
                    return this['node']['host'];
            }
        },
        'parentNode': {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                return this['node']['__shady_parentNode'];
            }
        },
        'firstChild': {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                return this['node']['__shady_firstChild'];
            }
        },
        'lastChild': {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                return this['node']['__shady_lastChild'];
            }
        },
        'nextSibling': {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                return this['node']['__shady_nextSibling'];
            }
        },
        'previousSibling': {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                return this['node']['__shady_previousSibling'];
            }
        },
        'childNodes': {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                return this['node']['__shady_childNodes'];
            }
        },
        'parentElement': {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                return this['node']['__shady_parentElement'];
            }
        },
        'firstElementChild': {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                return this['node']['__shady_firstElementChild'];
            }
        },
        'lastElementChild': {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                return this['node']['__shady_lastElementChild'];
            }
        },
        'nextElementSibling': {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                return this['node']['__shady_nextElementSibling'];
            }
        },
        'previousElementSibling': {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                return this['node']['__shady_previousElementSibling'];
            }
        },
        'children': {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                return this['node']['__shady_children'];
            }
        },
        'childElementCount': {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                return this['node']['__shady_childElementCount'];
            }
        },
        'shadowRoot': {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                return this['node']['__shady_shadowRoot'];
            }
        },
        'assignedSlot': {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                return this['node']['__shady_assignedSlot'];
            }
        },
        'isConnected': {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                return this['node']['__shady_isConnected'];
            }
        },
        'innerHTML': {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                return this['node']['__shady_innerHTML'];
            },
            'set': function (rgjbkc0gu) {
                this['node']['__shady_innerHTML'] = rgjbkc0gu;
            }
        },
        'textContent': {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                return this['node']['__shady_textContent'];
            },
            'set': function (a1oy4d4) {
                this['node']['__shady_textContent'] = a1oy4d4;
            }
        },
        'slot': {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                return this['node']['__shady_slot'];
            },
            'set': function (fiek52gch) {
                this['node']['__shady_slot'] = fiek52gch;
            }
        },
        'className': {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                return this['node']['__shady_className'];
            },
            'set': function (voe3m) {
                this['node']['__shady_className'] = voe3m;
            }
        }
    });
    function m05x5p4(gh8be43) {
        Object['defineProperty'](bh1p73rc['prototype'], gh8be43, {
            'get': function () {
                return this['node']['__shady_' + gh8be43];
            },
            'set': function (v3455bh38) {
                this['node']['__shady_' + gh8be43] = v3455bh38;
            },
            'configurable': !0x0
        });
    }
    y9456['forEach'](function (gt59kf3a2) {
        return m05x5p4(gt59kf3a2);
    });
    jsfm9['forEach'](function (j72967uc) {
        return m05x5p4(j72967uc);
    });
    var aa7110 = new WeakMap();
    function eiilmy(t0086) {
        if (y34jicv(t0086) || t0086 instanceof bh1p73rc)
            return t0086;
        var p1t2quj13 = aa7110['get'](t0086);
        p1t2quj13 || (p1t2quj13 = new bh1p73rc(t0086), aa7110['set'](t0086, p1t2quj13));
        return p1t2quj13;
    }
    ;
    if (b975n9s7['Ba']) {
        var v3uz1n = b975n9s7['D'] ? function (eor1l) {
                return eor1l;
            } : function (v3k4f57n1) {
                f6a5531(v3k4f57n1);
                yk68bzuj(v3k4f57n1);
                return v3k4f57n1;
            }, wt2nd3d = {
                'inUse': b975n9s7['Ba'],
                'patch': v3uz1n,
                'isShadyRoot': y34jicv,
                'enqueue': ah541m6,
                'flush': i6kiud,
                'flushInitial': function (ae3l43) {
                    !ae3l43['Ia'] && ae3l43['Y'] && ofzspju(ae3l43);
                },
                'settings': b975n9s7,
                'filterMutations': v1r4l9f,
                'observeChildren': jds96w,
                'unobserveChildren': vt1c5,
                'deferConnectionCallbacks': b975n9s7['deferConnectionCallbacks'],
                'preferPerformance': b975n9s7['preferPerformance'],
                'handlesDynamicScoping': !0x0,
                'wrap': b975n9s7['J'] ? eiilmy : v3uz1n,
                'wrapIfNeeded': !0x0 === b975n9s7['J'] ? eiilmy : function (uy84vye8e) {
                    return uy84vye8e;
                },
                'Wrapper': bh1p73rc,
                'composedPath': t276cfj,
                'noPatch': b975n9s7['J'],
                'patchOnDemand': b975n9s7['Da'],
                'nativeMethods': k2p15xf6i,
                'nativeTree': ef03738,
                'patchElementProto': ed19im94,
                'querySelectorImplementation': b975n9s7['querySelectorImplementation']
            };
        window['ShadyDOM'] = wt2nd3d;
        wz2ud4r();
        xo23c3n3t('__shady_');
        Object['defineProperty'](document, '_activeElement', bsq81d['activeElement']);
        pg0pd67z8(Window['prototype'], v52913, '__shady_');
        b975n9s7['J'] ? b975n9s7['Da'] && pg0pd67z8(Element['prototype'], rg1l90) : (xo23c3n3t(), i29w2r5gy());
        akazp();
        window['Event'] = i7w111ow3;
        window['CustomEvent'] = c1zos;
        window['MouseEvent'] = x7ys1x;
        window['ShadowRoot'] = tfq09;
    }
    ;
    var fy42q76j6 = window['Document']['prototype']['createElement'], p080q7 = window['Document']['prototype']['createElementNS'], sd1yp = window['Document']['prototype']['importNode'], g95yq76 = window['Document']['prototype']['prepend'], vs0541yl = window['Document']['prototype']['append'], v87fsw3 = window['DocumentFragment']['prototype']['prepend'], ngmn029 = window['DocumentFragment']['prototype']['append'], j4f0uo06a = window['Node']['prototype']['cloneNode'], pq6d6 = window['Node']['prototype']['appendChild'], j0yzlj = window['Node']['prototype']['insertBefore'], tzgxq = window['Node']['prototype']['removeChild'], r4l6v016q = window['Node']['prototype']['replaceChild'], ou3o1 = Object['getOwnPropertyDescriptor'](window['Node']['prototype'], 'textContent'), ax359 = window['Element']['prototype']['attachShadow'], j0y45 = Object['getOwnPropertyDescriptor'](window['Element']['prototype'], 'innerHTML'), a8p14 = window['Element']['prototype']['getAttribute'], e693l7cd8 = window['Element']['prototype']['setAttribute'], tl7atxv = window['Element']['prototype']['removeAttribute'], r13zst6 = window['Element']['prototype']['toggleAttribute'], n04m67c = window['Element']['prototype']['getAttributeNS'], lcuvp41xb = window['Element']['prototype']['setAttributeNS'], xsv53f4 = window['Element']['prototype']['removeAttributeNS'], h95nbug0n = window['Element']['prototype']['insertAdjacentElement'], jpdncr960 = window['Element']['prototype']['insertAdjacentHTML'], o48tf8 = window['Element']['prototype']['prepend'], x586v26 = window['Element']['prototype']['append'], xwc44 = window['Element']['prototype']['before'], sf86g = window['Element']['prototype']['after'], qyq17y3o = window['Element']['prototype']['replaceWith'], jaq427w = window['Element']['prototype']['remove'], nj7ce51v = window['HTMLElement'], qs92l = Object['getOwnPropertyDescriptor'](window['HTMLElement']['prototype'], 'innerHTML'), bz3jk = window['HTMLElement']['prototype']['insertAdjacentElement'], d1ly7q8 = window['HTMLElement']['prototype']['insertAdjacentHTML'];
    var dv6y9v1l = new Set();
    'annotation-xml\x20color-profile\x20font-face\x20font-face-src\x20font-face-uri\x20font-face-format\x20font-face-name\x20missing-glyph'['split']('\x20')['forEach'](function (s30et) {
        return dv6y9v1l['add'](s30et);
    });
    function g8p1nq32(x81k40) {
        var j1rg90zb3 = dv6y9v1l['has'](x81k40);
        x81k40 = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/['test'](x81k40);
        return !j1rg90zb3 && x81k40;
    }
    var g26c8366 = document['contains'] ? document['contains']['bind'](document) : document['documentElement']['contains']['bind'](document['documentElement']);
    function z08rm6423(iu3do28) {
        var e2294 = iu3do28['isConnected'];
        if (void 0x0 !== e2294)
            return e2294;
        if (g26c8366(iu3do28))
            return !0x0;
        for (; iu3do28 && !(iu3do28['__CE_isImportDocument'] || iu3do28 instanceof Document);)
            iu3do28 = iu3do28['parentNode'] || (window['ShadowRoot'] && iu3do28 instanceof ShadowRoot ? iu3do28['host'] : void 0x0);
        return !(!iu3do28 || !(iu3do28['__CE_isImportDocument'] || iu3do28 instanceof Document));
    }
    function v5b92e75(ral7q) {
        var a1i33 = ral7q['children'];
        if (a1i33)
            return Array['prototype']['slice']['call'](a1i33);
        a1i33 = [];
        for (ral7q = ral7q['firstChild']; ral7q; ral7q = ral7q['nextSibling'])
            ral7q['nodeType'] === Node['ELEMENT_NODE'] && a1i33['push'](ral7q);
        return a1i33;
    }
    function fdaci(x48c6, m1o9gf4) {
        for (; m1o9gf4 && m1o9gf4 !== x48c6 && !m1o9gf4['nextSibling'];)
            m1o9gf4 = m1o9gf4['parentNode'];
        return m1o9gf4 && m1o9gf4 !== x48c6 ? m1o9gf4['nextSibling'] : null;
    }
    function t6wmsf02r(m2bjr818z, br439a, puy8y0) {
        for (var k12q95p60 = m2bjr818z; k12q95p60;) {
            if (k12q95p60['nodeType'] === Node['ELEMENT_NODE']) {
                var b1607 = k12q95p60;
                br439a(b1607);
                var x3p366fk = b1607['localName'];
                if ('link' === x3p366fk && 'import' === b1607['getAttribute']('rel')) {
                    k12q95p60 = b1607['import'];
                    void 0x0 === puy8y0 && (puy8y0 = new Set());
                    if (k12q95p60 instanceof Node && !puy8y0['has'](k12q95p60))
                        for (puy8y0['add'](k12q95p60), k12q95p60 = k12q95p60['firstChild']; k12q95p60; k12q95p60 = k12q95p60['nextSibling'])
                            t6wmsf02r(k12q95p60, br439a, puy8y0);
                    k12q95p60 = fdaci(m2bjr818z, b1607);
                    continue;
                } else if ('template' === x3p366fk) {
                    k12q95p60 = fdaci(m2bjr818z, b1607);
                    continue;
                }
                if (b1607 = b1607['__CE_shadowRoot'])
                    for (b1607 = b1607['firstChild']; b1607; b1607 = b1607['nextSibling'])
                        t6wmsf02r(b1607, br439a, puy8y0);
            }
            k12q95p60 = k12q95p60['firstChild'] ? k12q95p60['firstChild'] : fdaci(m2bjr818z, k12q95p60);
        }
    }
    ;
    function k5l68() {
        var tsw9f2 = !(null === fyk2x || void 0x0 === fyk2x || !fyk2x['noDocumentConstructionObserver']), nq800q4 = !(null === fyk2x || void 0x0 === fyk2x || !fyk2x['shadyDomFastWalk']);
        this['ca'] = [];
        this['g'] = [];
        this['W'] = !0x1;
        this['shadyDomFastWalk'] = nq800q4;
        this['sb'] = !tsw9f2;
    }
    function ujal70zw(hs404, sud79, z041ta6, cds06p) {
        var xd9134l = window['ShadyDOM'];
        if (hs404['shadyDomFastWalk'] && xd9134l && xd9134l['inUse']) {
            if (sud79['nodeType'] === Node['ELEMENT_NODE'] && z041ta6(sud79), sud79['querySelectorAll'])
                for (hs404 = xd9134l['nativeMethods']['querySelectorAll']['call'](sud79, '*'), sud79 = 0x0; sud79 < hs404['length']; sud79++)
                    z041ta6(hs404[sud79]);
        } else
            t6wmsf02r(sud79, z041ta6, cds06p);
    }
    function f6eb9(a2ca32n4i, n187f) {
        a2ca32n4i['W'] = !0x0;
        a2ca32n4i['ca']['push'](n187f);
    }
    function i6la3e9(ft6e42wvf, phx5619) {
        ft6e42wvf['W'] = !0x0;
        ft6e42wvf['g']['push'](phx5619);
    }
    function igs367753(g15rv, op420858j) {
        g15rv['W'] && ujal70zw(g15rv, op420858j, function (g4273) {
            return o7d4919(g15rv, g4273);
        });
    }
    function o7d4919(a9e5w85, r79hgw0bh) {
        if (a9e5w85['W'] && !r79hgw0bh['__CE_patched']) {
            r79hgw0bh['__CE_patched'] = !0x0;
            for (var w87uei48z = 0x0; w87uei48z < a9e5w85['ca']['length']; w87uei48z++)
                a9e5w85['ca'][w87uei48z](r79hgw0bh);
            for (w87uei48z = 0x0; w87uei48z < a9e5w85['g']['length']; w87uei48z++)
                a9e5w85['g'][w87uei48z](r79hgw0bh);
        }
    }
    function w30j0j51u(pvv6v5w6, sgh9x1) {
        var k0dk1i = [];
        ujal70zw(pvv6v5w6, sgh9x1, function (re5m7r) {
            return k0dk1i['push'](re5m7r);
        });
        for (sgh9x1 = 0x0; sgh9x1 < k0dk1i['length']; sgh9x1++) {
            var go49595 = k0dk1i[sgh9x1];
            0x1 === go49595['__CE_state'] ? pvv6v5w6['connectedCallback'](go49595) : e7d5i8n(pvv6v5w6, go49595);
        }
    }
    function hw7y617(an3c8, cp0745b) {
        var e6r2e6xc = [];
        ujal70zw(an3c8, cp0745b, function (v1l2rzsp4) {
            return e6r2e6xc['push'](v1l2rzsp4);
        });
        for (cp0745b = 0x0; cp0745b < e6r2e6xc['length']; cp0745b++) {
            var te69u = e6r2e6xc[cp0745b];
            0x1 === te69u['__CE_state'] && an3c8['disconnectedCallback'](te69u);
        }
    }
    function kl2f3w(ovgq992l, m3a8zf, cgu487) {
        cgu487 = void 0x0 === cgu487 ? {} : cgu487;
        var r5ab30m2 = cgu487['tb'], iht3vl = cgu487['upgrade'] || function (yfh28s3) {
                return e7d5i8n(ovgq992l, yfh28s3);
            }, y0ziu = [];
        ujal70zw(ovgq992l, m3a8zf, function (m7mo3ipis) {
            ovgq992l['W'] && o7d4919(ovgq992l, m7mo3ipis);
            if ('link' === m7mo3ipis['localName'] && 'import' === m7mo3ipis['getAttribute']('rel')) {
                var fsq07cgvs = m7mo3ipis['import'];
                fsq07cgvs instanceof Node && (fsq07cgvs['__CE_isImportDocument'] = !0x0, fsq07cgvs['__CE_registry'] = document['__CE_registry']);
                fsq07cgvs && 'complete' === fsq07cgvs['readyState'] ? fsq07cgvs['__CE_documentLoadHandled'] = !0x0 : m7mo3ipis['addEventListener']('load', function () {
                    var f784va14 = m7mo3ipis['import'];
                    if (!f784va14['__CE_documentLoadHandled']) {
                        f784va14['__CE_documentLoadHandled'] = !0x0;
                        var m526v373g = new Set();
                        r5ab30m2 && (r5ab30m2['forEach'](function (c59b625r) {
                            return m526v373g['add'](c59b625r);
                        }), m526v373g['delete'](f784va14));
                        kl2f3w(ovgq992l, f784va14, {
                            'tb': m526v373g,
                            'upgrade': iht3vl
                        });
                    }
                });
            } else
                y0ziu['push'](m7mo3ipis);
        }, r5ab30m2);
        for (m3a8zf = 0x0; m3a8zf < y0ziu['length']; m3a8zf++)
            iht3vl(y0ziu[m3a8zf]);
    }
    function e7d5i8n(t5rufmu, oz0xrho53) {
        try {
            var hro5mzo = oz0xrho53['ownerDocument'], a41ht = hro5mzo['__CE_registry'];
            var fjxtud29 = a41ht && (hro5mzo['defaultView'] || hro5mzo['__CE_isImportDocument']) ? yrl0t(a41ht, oz0xrho53['localName']) : void 0x0;
            if (fjxtud29 && void 0x0 === oz0xrho53['__CE_state']) {
                fjxtud29['constructionStack']['push'](oz0xrho53);
                try {
                    try {
                        if (new fjxtud29['constructorFunction']() !== oz0xrho53)
                            throw Error('The\x20custom\x20element\x20constructor\x20did\x20not\x20produce\x20the\x20element\x20being\x20upgraded.');
                    } finally {
                        fjxtud29['constructionStack']['pop']();
                    }
                } catch (p4c21) {
                    throw oz0xrho53['__CE_state'] = 0x2, p4c21;
                }
                oz0xrho53['__CE_state'] = 0x1;
                oz0xrho53['__CE_definition'] = fjxtud29;
                if (fjxtud29['attributeChangedCallback'] && oz0xrho53['hasAttributes']()) {
                    var i89xg = fjxtud29['observedAttributes'];
                    for (fjxtud29 = 0x0; fjxtud29 < i89xg['length']; fjxtud29++) {
                        var we2x50 = i89xg[fjxtud29], rt0c43e = oz0xrho53['getAttribute'](we2x50);
                        null !== rt0c43e && t5rufmu['attributeChangedCallback'](oz0xrho53, we2x50, null, rt0c43e, null);
                    }
                }
                z08rm6423(oz0xrho53) && t5rufmu['connectedCallback'](oz0xrho53);
            }
        } catch (ft06egpt) {
            s9g9f13(ft06egpt);
        }
    }
    k5l68['prototype']['connectedCallback'] = function (e157gn8f) {
        var m5oh8 = e157gn8f['__CE_definition'];
        if (m5oh8['connectedCallback'])
            try {
                m5oh8['connectedCallback']['call'](e157gn8f);
            } catch (w7jws0) {
                s9g9f13(w7jws0);
            }
    };
    k5l68['prototype']['disconnectedCallback'] = function (x7jo11te) {
        var woj59f7s = x7jo11te['__CE_definition'];
        if (woj59f7s['disconnectedCallback'])
            try {
                woj59f7s['disconnectedCallback']['call'](x7jo11te);
            } catch (w2o5l4) {
                s9g9f13(w2o5l4);
            }
    };
    k5l68['prototype']['attributeChangedCallback'] = function (tvqh1bxt5, l75t9x7, b5dfy, v34e31kc7, bt2fgi6p) {
        var a2w0jhi = tvqh1bxt5['__CE_definition'];
        if (a2w0jhi['attributeChangedCallback'] && -0x1 < a2w0jhi['observedAttributes']['indexOf'](l75t9x7))
            try {
                a2w0jhi['attributeChangedCallback']['call'](tvqh1bxt5, l75t9x7, b5dfy, v34e31kc7, bt2fgi6p);
            } catch (owqtjf0) {
                s9g9f13(owqtjf0);
            }
    };
    function w7jje4ged(py1eqth, t40vj2, x661f978, jut6fx) {
        var tx7ja = t40vj2['__CE_registry'];
        if (tx7ja && (null === jut6fx || 'http://www.w3.org/1999/xhtml' === jut6fx) && (tx7ja = yrl0t(tx7ja, x661f978)))
            try {
                var cz8j0r = new tx7ja['constructorFunction']();
                if (void 0x0 === cz8j0r['__CE_state'] || void 0x0 === cz8j0r['__CE_definition'])
                    throw Error('Failed\x20to\x20construct\x20\x27' + x661f978 + '\x27:\x20The\x20returned\x20value\x20was\x20not\x20constructed\x20with\x20the\x20HTMLElement\x20constructor.');
                if ('http://www.w3.org/1999/xhtml' !== cz8j0r['namespaceURI'])
                    throw Error('Failed\x20to\x20construct\x20\x27' + x661f978 + '\x27:\x20The\x20constructed\x20element\x27s\x20namespace\x20must\x20be\x20the\x20HTML\x20namespace.');
                if (cz8j0r['hasAttributes']())
                    throw Error('Failed\x20to\x20construct\x20\x27' + x661f978 + '\x27:\x20The\x20constructed\x20element\x20must\x20not\x20have\x20any\x20attributes.');
                if (null !== cz8j0r['firstChild'])
                    throw Error('Failed\x20to\x20construct\x20\x27' + x661f978 + '\x27:\x20The\x20constructed\x20element\x20must\x20not\x20have\x20any\x20children.');
                if (null !== cz8j0r['parentNode'])
                    throw Error('Failed\x20to\x20construct\x20\x27' + x661f978 + '\x27:\x20The\x20constructed\x20element\x20must\x20not\x20have\x20a\x20parent\x20node.');
                if (cz8j0r['ownerDocument'] !== t40vj2)
                    throw Error('Failed\x20to\x20construct\x20\x27' + x661f978 + '\x27:\x20The\x20constructed\x20element\x27s\x20owner\x20document\x20is\x20incorrect.');
                if (cz8j0r['localName'] !== x661f978)
                    throw Error('Failed\x20to\x20construct\x20\x27' + x661f978 + '\x27:\x20The\x20constructed\x20element\x27s\x20local\x20name\x20is\x20incorrect.');
                return cz8j0r;
            } catch (urm5ae) {
                return s9g9f13(urm5ae), t40vj2 = null === jut6fx ? fy42q76j6['call'](t40vj2, x661f978) : p080q7['call'](t40vj2, jut6fx, x661f978), Object['setPrototypeOf'](t40vj2, HTMLUnknownElement['prototype']), t40vj2['__CE_state'] = 0x2, t40vj2['__CE_definition'] = void 0x0, o7d4919(py1eqth, t40vj2), t40vj2;
            }
        t40vj2 = null === jut6fx ? fy42q76j6['call'](t40vj2, x661f978) : p080q7['call'](t40vj2, jut6fx, x661f978);
        o7d4919(py1eqth, t40vj2);
        return t40vj2;
    }
    function s9g9f13(i23wb) {
        var y38yp = '', z96969w = '', eu7802312 = 0x0, m7396018 = 0x0;
        i23wb instanceof Error ? (y38yp = i23wb['message'], z96969w = i23wb['sourceURL'] || i23wb['fileName'] || '', eu7802312 = i23wb['line'] || i23wb['lineNumber'] || 0x0, m7396018 = i23wb['column'] || i23wb['columnNumber'] || 0x0) : y38yp = 'Uncaught\x20' + String(i23wb);
        var o6sbg = void 0x0;
        void 0x0 === ErrorEvent['prototype']['initErrorEvent'] ? o6sbg = new ErrorEvent('error', {
            'cancelable': !0x0,
            'message': y38yp,
            'filename': z96969w,
            'lineno': eu7802312,
            'colno': m7396018,
            'error': i23wb
        }) : (o6sbg = document['createEvent']('ErrorEvent'), o6sbg['initErrorEvent']('error', !0x1, !0x0, y38yp, z96969w, eu7802312), o6sbg['preventDefault'] = function () {
            Object['defineProperty'](this, 'defaultPrevented', {
                'configurable': !0x0,
                'get': function () {
                    return !0x0;
                }
            });
        });
        void 0x0 === o6sbg['error'] && Object['defineProperty'](o6sbg, 'error', {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                return i23wb;
            }
        });
        window['dispatchEvent'](o6sbg);
        o6sbg['defaultPrevented'] || console['error'](i23wb);
    }
    ;
    function b6fkz28() {
        var ltk91 = this;
        this['I'] = void 0x0;
        this['Ka'] = new Promise(function (tnppj9w) {
            ltk91['g'] = tnppj9w;
        });
    }
    b6fkz28['prototype']['resolve'] = function (s5tc01s5) {
        if (this['I'])
            throw Error('Already\x20resolved.');
        this['I'] = s5tc01s5;
        this['g'](s5tc01s5);
    };
    function i912x(m3540c1) {
        var vv27qy63l = document;
        this['X'] = void 0x0;
        this['S'] = m3540c1;
        this['g'] = vv27qy63l;
        kl2f3w(this['S'], this['g']);
        'loading' === this['g']['readyState'] && (this['X'] = new MutationObserver(this['h']['bind'](this)), this['X']['observe'](this['g'], {
            'childList': !0x0,
            'subtree': !0x0
        }));
    }
    function aw88k3(r9b52s) {
        r9b52s['X'] && r9b52s['X']['disconnect']();
    }
    i912x['prototype']['h'] = function (svsn56) {
        var fp625z = this['g']['readyState'];
        'interactive' !== fp625z && 'complete' !== fp625z || aw88k3(this);
        for (fp625z = 0x0; fp625z < svsn56['length']; fp625z++)
            for (var vel51 = svsn56[fp625z]['addedNodes'], u5va96p = 0x0; u5va96p < vel51['length']; u5va96p++)
                kl2f3w(this['S'], vel51[u5va96p]);
    };
    function ferknh(bzj2j5) {
        this['ma'] = new Map();
        this['na'] = new Map();
        this['Fa'] = new Map();
        this['wa'] = !0x1;
        this['za'] = new Map();
        this['la'] = function (m423v653) {
            return m423v653();
        };
        this['V'] = !0x1;
        this['oa'] = [];
        this['S'] = bzj2j5;
        this['Ga'] = bzj2j5['sb'] ? new i912x(bzj2j5) : void 0x0;
    }
    b40918 = ferknh['prototype'];
    b40918['jb'] = function (u6h830sb, kd524b08m) {
        var urg27 = this;
        if (!(kd524b08m instanceof Function))
            throw new TypeError('Custom\x20element\x20constructor\x20getters\x20must\x20be\x20functions.');
        p2xa5dbf(this, u6h830sb);
        this['ma']['set'](u6h830sb, kd524b08m);
        this['oa']['push'](u6h830sb);
        this['V'] || (this['V'] = !0x0, this['la'](function () {
            return b578n(urg27);
        }));
    };
    b40918['define'] = function (k3q750v, k196a) {
        var tnkl14 = this;
        if (!(k196a instanceof Function))
            throw new TypeError('Custom\x20element\x20constructors\x20must\x20be\x20functions.');
        p2xa5dbf(this, k3q750v);
        hc2j9l(this, k3q750v, k196a);
        this['oa']['push'](k3q750v);
        this['V'] || (this['V'] = !0x0, this['la'](function () {
            return b578n(tnkl14);
        }));
    };
    function p2xa5dbf(n5wi0xm, ra20338) {
        if (!g8p1nq32(ra20338))
            throw new SyntaxError('The\x20element\x20name\x20\x27' + ra20338 + '\x27\x20is\x20not\x20valid.');
        if (yrl0t(n5wi0xm, ra20338))
            throw Error('A\x20custom\x20element\x20with\x20name\x20\x27' + (ra20338 + '\x27\x20has\x20already\x20been\x20defined.'));
        if (n5wi0xm['wa'])
            throw Error('A\x20custom\x20element\x20is\x20already\x20being\x20defined.');
    }
    function hc2j9l(lb327468, ge9se31, y76h9) {
        lb327468['wa'] = !0x0;
        var acg3d7y9h;
        try {
            var fb205 = y76h9['prototype'];
            if (!(fb205 instanceof Object))
                throw new TypeError('The\x20custom\x20element\x20constructor\x27s\x20prototype\x20is\x20not\x20an\x20object.');
            var zlal7 = function (nc23a) {
                var igpfh84 = fb205[nc23a];
                if (void 0x0 !== igpfh84 && !(igpfh84 instanceof Function))
                    throw Error('The\x20\x27' + nc23a + '\x27\x20callback\x20must\x20be\x20a\x20function.');
                return igpfh84;
            };
            var r3072ano = zlal7('connectedCallback');
            var h7x330 = zlal7('disconnectedCallback');
            var vtc2ypak = zlal7('adoptedCallback');
            var n65wj4x0 = (acg3d7y9h = zlal7('attributeChangedCallback')) && y76h9['observedAttributes'] || [];
        } catch (odou697rt) {
            throw odou697rt;
        } finally {
            lb327468['wa'] = !0x1;
        }
        y76h9 = {
            'localName': ge9se31,
            'constructorFunction': y76h9,
            'connectedCallback': r3072ano,
            'disconnectedCallback': h7x330,
            'adoptedCallback': vtc2ypak,
            'attributeChangedCallback': acg3d7y9h,
            'observedAttributes': n65wj4x0,
            'constructionStack': []
        };
        lb327468['na']['set'](ge9se31, y76h9);
        lb327468['Fa']['set'](y76h9['constructorFunction'], y76h9);
        return y76h9;
    }
    b40918['upgrade'] = function (cnq3zu40) {
        kl2f3w(this['S'], cnq3zu40);
    };
    function b578n(u4951) {
        if (!0x1 !== u4951['V']) {
            u4951['V'] = !0x1;
            for (var noghm08 = [], u4h3xv = u4951['oa'], k4jq07 = new Map(), xn022mk3j = 0x0; xn022mk3j < u4h3xv['length']; xn022mk3j++)
                k4jq07['set'](u4h3xv[xn022mk3j], []);
            kl2f3w(u4951['S'], document, {
                'upgrade': function (vrenh3868) {
                    if (void 0x0 === vrenh3868['__CE_state']) {
                        var sk6nh7e35 = vrenh3868['localName'], tpm77 = k4jq07['get'](sk6nh7e35);
                        tpm77 ? tpm77['push'](vrenh3868) : u4951['na']['has'](sk6nh7e35) && noghm08['push'](vrenh3868);
                    }
                }
            });
            for (xn022mk3j = 0x0; xn022mk3j < noghm08['length']; xn022mk3j++)
                e7d5i8n(u4951['S'], noghm08[xn022mk3j]);
            for (xn022mk3j = 0x0; xn022mk3j < u4h3xv['length']; xn022mk3j++) {
                for (var f3l9264 = u4h3xv[xn022mk3j], x65md = k4jq07['get'](f3l9264), i5z1clj98 = 0x0; i5z1clj98 < x65md['length']; i5z1clj98++)
                    e7d5i8n(u4951['S'], x65md[i5z1clj98]);
                (f3l9264 = u4951['za']['get'](f3l9264)) && f3l9264['resolve'](void 0x0);
            }
            u4h3xv['length'] = 0x0;
        }
    }
    b40918['get'] = function (byn0v8el) {
        if (byn0v8el = yrl0t(this, byn0v8el))
            return byn0v8el['constructorFunction'];
    };
    b40918['whenDefined'] = function (t6mvq497e) {
        if (!g8p1nq32(t6mvq497e))
            return Promise['reject'](new SyntaxError('\x27' + t6mvq497e + '\x27\x20is\x20not\x20a\x20valid\x20custom\x20element\x20name.'));
        var ut77x4i49 = this['za']['get'](t6mvq497e);
        if (ut77x4i49)
            return ut77x4i49['Ka'];
        ut77x4i49 = new b6fkz28();
        this['za']['set'](t6mvq497e, ut77x4i49);
        var a7p8l919j = this['na']['has'](t6mvq497e) || this['ma']['has'](t6mvq497e);
        t6mvq497e = -0x1 === this['oa']['indexOf'](t6mvq497e);
        a7p8l919j && t6mvq497e && ut77x4i49['resolve'](void 0x0);
        return ut77x4i49['Ka'];
    };
    b40918['polyfillWrapFlushCallback'] = function (w5c7d7l) {
        this['Ga'] && aw88k3(this['Ga']);
        var nw92t = this['la'];
        this['la'] = function (x6x66) {
            return w5c7d7l(function () {
                return nw92t(x6x66);
            });
        };
    };
    function yrl0t(rvlsez, th27gk) {
        var x124ajr = rvlsez['na']['get'](th27gk);
        if (x124ajr)
            return x124ajr;
        if (x124ajr = rvlsez['ma']['get'](th27gk)) {
            rvlsez['ma']['delete'](th27gk);
            try {
                return hc2j9l(rvlsez, th27gk, x124ajr());
            } catch (s00ua) {
                s9g9f13(s00ua);
            }
        }
    }
    ferknh['prototype']['define'] = ferknh['prototype']['define'];
    ferknh['prototype']['upgrade'] = ferknh['prototype']['upgrade'];
    ferknh['prototype']['get'] = ferknh['prototype']['get'];
    ferknh['prototype']['whenDefined'] = ferknh['prototype']['whenDefined'];
    ferknh['prototype']['polyfillDefineLazy'] = ferknh['prototype']['jb'];
    ferknh['prototype']['polyfillWrapFlushCallback'] = ferknh['prototype']['polyfillWrapFlushCallback'];
    function v65y831z6(x4rxz, u2j2jqm8, p6wcir6) {
        function a8qmi3q(hm5980nu) {
            return function (qfns0ix53) {
                for (var l0pgdk = [], f02vvd = 0x0; f02vvd < arguments['length']; ++f02vvd)
                    l0pgdk[f02vvd] = arguments[f02vvd];
                f02vvd = [];
                for (var g5ncqzaf = [], y0b2546 = 0x0; y0b2546 < l0pgdk['length']; y0b2546++) {
                    var c5pdkc1j = l0pgdk[y0b2546];
                    c5pdkc1j instanceof Element && z08rm6423(c5pdkc1j) && g5ncqzaf['push'](c5pdkc1j);
                    if (c5pdkc1j instanceof DocumentFragment)
                        for (c5pdkc1j = c5pdkc1j['firstChild']; c5pdkc1j; c5pdkc1j = c5pdkc1j['nextSibling'])
                            f02vvd['push'](c5pdkc1j);
                    else
                        f02vvd['push'](c5pdkc1j);
                }
                hm5980nu['apply'](this, l0pgdk);
                for (l0pgdk = 0x0; l0pgdk < g5ncqzaf['length']; l0pgdk++)
                    hw7y617(x4rxz, g5ncqzaf[l0pgdk]);
                if (z08rm6423(this))
                    for (l0pgdk = 0x0; l0pgdk < f02vvd['length']; l0pgdk++)
                        g5ncqzaf = f02vvd[l0pgdk], g5ncqzaf instanceof Element && w30j0j51u(x4rxz, g5ncqzaf);
            };
        }
        void 0x0 !== p6wcir6['prepend'] && (u2j2jqm8['prepend'] = a8qmi3q(p6wcir6['prepend']));
        void 0x0 !== p6wcir6['append'] && (u2j2jqm8['append'] = a8qmi3q(p6wcir6['append']));
    }
    ;
    function zha7a66(q20clb0) {
        Document['prototype']['createElement'] = function (i577w1r8) {
            return w7jje4ged(q20clb0, this, i577w1r8, null);
        };
        Document['prototype']['importNode'] = function (t76jcj, x9lejn04) {
            t76jcj = sd1yp['call'](this, t76jcj, !!x9lejn04);
            this['__CE_registry'] ? kl2f3w(q20clb0, t76jcj) : igs367753(q20clb0, t76jcj);
            return t76jcj;
        };
        Document['prototype']['createElementNS'] = function (l9c3q6mtu, k1751zjs) {
            return w7jje4ged(q20clb0, this, k1751zjs, l9c3q6mtu);
        };
        v65y831z6(q20clb0, Document['prototype'], {
            'prepend': g95yq76,
            'append': vs0541yl
        });
    }
    ;
    function efw054du(n5mw65qu) {
        function p7z62(b9i6fs9aj) {
            return function (v7uln4) {
                for (var baslc65 = [], o24qx = 0x0; o24qx < arguments['length']; ++o24qx)
                    baslc65[o24qx] = arguments[o24qx];
                o24qx = [];
                for (var nh0d231 = [], j76pfhqd = 0x0; j76pfhqd < baslc65['length']; j76pfhqd++) {
                    var iez44 = baslc65[j76pfhqd];
                    iez44 instanceof Element && z08rm6423(iez44) && nh0d231['push'](iez44);
                    if (iez44 instanceof DocumentFragment)
                        for (iez44 = iez44['firstChild']; iez44; iez44 = iez44['nextSibling'])
                            o24qx['push'](iez44);
                    else
                        o24qx['push'](iez44);
                }
                b9i6fs9aj['apply'](this, baslc65);
                for (baslc65 = 0x0; baslc65 < nh0d231['length']; baslc65++)
                    hw7y617(n5mw65qu, nh0d231[baslc65]);
                if (z08rm6423(this))
                    for (baslc65 = 0x0; baslc65 < o24qx['length']; baslc65++)
                        nh0d231 = o24qx[baslc65], nh0d231 instanceof Element && w30j0j51u(n5mw65qu, nh0d231);
            };
        }
        var s3kdj = Element['prototype'];
        void 0x0 !== xwc44 && (s3kdj['before'] = p7z62(xwc44));
        void 0x0 !== sf86g && (s3kdj['after'] = p7z62(sf86g));
        void 0x0 !== qyq17y3o && (s3kdj['replaceWith'] = function (d39sz56f) {
            for (var u4271 = [], t466j7pn = 0x0; t466j7pn < arguments['length']; ++t466j7pn)
                u4271[t466j7pn] = arguments[t466j7pn];
            t466j7pn = [];
            for (var bm0xa = [], v159t380q = 0x0; v159t380q < u4271['length']; v159t380q++) {
                var yhe5hg561 = u4271[v159t380q];
                yhe5hg561 instanceof Element && z08rm6423(yhe5hg561) && bm0xa['push'](yhe5hg561);
                if (yhe5hg561 instanceof DocumentFragment)
                    for (yhe5hg561 = yhe5hg561['firstChild']; yhe5hg561; yhe5hg561 = yhe5hg561['nextSibling'])
                        t466j7pn['push'](yhe5hg561);
                else
                    t466j7pn['push'](yhe5hg561);
            }
            v159t380q = z08rm6423(this);
            qyq17y3o['apply'](this, u4271);
            for (u4271 = 0x0; u4271 < bm0xa['length']; u4271++)
                hw7y617(n5mw65qu, bm0xa[u4271]);
            if (v159t380q)
                for (hw7y617(n5mw65qu, this), u4271 = 0x0; u4271 < t466j7pn['length']; u4271++)
                    bm0xa = t466j7pn[u4271], bm0xa instanceof Element && w30j0j51u(n5mw65qu, bm0xa);
        });
        void 0x0 !== jaq427w && (s3kdj['remove'] = function () {
            var nlz112 = z08rm6423(this);
            jaq427w['call'](this);
            nlz112 && hw7y617(n5mw65qu, this);
        });
    }
    ;
    function c09jqj8b8(sew68v) {
        function n1s54(t7fpbb, k447d) {
            Object['defineProperty'](t7fpbb, 'innerHTML', {
                'enumerable': k447d['enumerable'],
                'configurable': !0x0,
                'get': k447d['get'],
                'set': function (x4a03k4) {
                    var t2n7eldi7 = this, i408a06m6 = void 0x0;
                    z08rm6423(this) && (i408a06m6 = [], ujal70zw(sew68v, this, function (nbgyh) {
                        nbgyh !== t2n7eldi7 && i408a06m6['push'](nbgyh);
                    }));
                    k447d['set']['call'](this, x4a03k4);
                    if (i408a06m6)
                        for (var sakb11td = 0x0; sakb11td < i408a06m6['length']; sakb11td++) {
                            var t767v = i408a06m6[sakb11td];
                            0x1 === t767v['__CE_state'] && sew68v['disconnectedCallback'](t767v);
                        }
                    this['ownerDocument']['__CE_registry'] ? kl2f3w(sew68v, this) : igs367753(sew68v, this);
                    return x4a03k4;
                }
            });
        }
        function j04d2x8t(gvm77g8, dny5ej) {
            gvm77g8['insertAdjacentElement'] = function (mbme24v, z85438) {
                var nsl0f = z08rm6423(z85438);
                mbme24v = dny5ej['call'](this, mbme24v, z85438);
                nsl0f && hw7y617(sew68v, z85438);
                z08rm6423(mbme24v) && w30j0j51u(sew68v, z85438);
                return mbme24v;
            };
        }
        function t65avmi(k45a5, at381oat) {
            function ch6xi(f0p6e988, f1185g) {
                for (var u5a1uyyic = []; f0p6e988 !== f1185g; f0p6e988 = f0p6e988['nextSibling'])
                    u5a1uyyic['push'](f0p6e988);
                for (f1185g = 0x0; f1185g < u5a1uyyic['length']; f1185g++)
                    kl2f3w(sew68v, u5a1uyyic[f1185g]);
            }
            k45a5['insertAdjacentHTML'] = function (f13o65, cl544b) {
                f13o65 = f13o65['toLowerCase']();
                if ('beforebegin' === f13o65) {
                    var vc2v28c = this['previousSibling'];
                    at381oat['call'](this, f13o65, cl544b);
                    ch6xi(vc2v28c || this['parentNode']['firstChild'], this);
                } else if ('afterbegin' === f13o65)
                    vc2v28c = this['firstChild'], at381oat['call'](this, f13o65, cl544b), ch6xi(this['firstChild'], vc2v28c);
                else if ('beforeend' === f13o65)
                    vc2v28c = this['lastChild'], at381oat['call'](this, f13o65, cl544b), ch6xi(vc2v28c || this['firstChild'], null);
                else if ('afterend' === f13o65)
                    vc2v28c = this['nextSibling'], at381oat['call'](this, f13o65, cl544b), ch6xi(this['nextSibling'], vc2v28c);
                else
                    throw new SyntaxError('The\x20value\x20provided\x20(' + String(f13o65) + ')\x20is\x20not\x20one\x20of\x20\x27beforebegin\x27,\x20\x27afterbegin\x27,\x20\x27beforeend\x27,\x20or\x20\x27afterend\x27.');
            };
        }
        ax359 && (Element['prototype']['attachShadow'] = function (v73k3vb) {
            v73k3vb = ax359['call'](this, v73k3vb);
            if (sew68v['W'] && !v73k3vb['__CE_patched']) {
                v73k3vb['__CE_patched'] = !0x0;
                for (var h72k5pe35 = 0x0; h72k5pe35 < sew68v['ca']['length']; h72k5pe35++)
                    sew68v['ca'][h72k5pe35](v73k3vb);
            }
            return this['__CE_shadowRoot'] = v73k3vb;
        });
        j0y45 && j0y45['get'] ? n1s54(Element['prototype'], j0y45) : qs92l && qs92l['get'] ? n1s54(HTMLElement['prototype'], qs92l) : i6la3e9(sew68v, function (sj50a) {
            n1s54(sj50a, {
                'enumerable': !0x0,
                'configurable': !0x0,
                'get': function () {
                    return j4f0uo06a['call'](this, !0x0)['innerHTML'];
                },
                'set': function (l4lwd) {
                    var cy9383 = 'template' === this['localName'], e3j6c = cy9383 ? this['content'] : this, g705j = p080q7['call'](document, this['namespaceURI'], this['localName']);
                    for (g705j['innerHTML'] = l4lwd; 0x0 < e3j6c['childNodes']['length'];)
                        tzgxq['call'](e3j6c, e3j6c['childNodes'][0x0]);
                    for (l4lwd = cy9383 ? g705j['content'] : g705j; 0x0 < l4lwd['childNodes']['length'];)
                        pq6d6['call'](e3j6c, l4lwd['childNodes'][0x0]);
                }
            });
        });
        Element['prototype']['setAttribute'] = function (v7d9c7z59, e99xtl4) {
            if (0x1 !== this['__CE_state'])
                return e693l7cd8['call'](this, v7d9c7z59, e99xtl4);
            var xmy1b9 = a8p14['call'](this, v7d9c7z59);
            e693l7cd8['call'](this, v7d9c7z59, e99xtl4);
            e99xtl4 = a8p14['call'](this, v7d9c7z59);
            sew68v['attributeChangedCallback'](this, v7d9c7z59, xmy1b9, e99xtl4, null);
        };
        Element['prototype']['setAttributeNS'] = function (u16r8bi12, bu7mjy881, b63jmn) {
            if (0x1 !== this['__CE_state'])
                return lcuvp41xb['call'](this, u16r8bi12, bu7mjy881, b63jmn);
            var v2e74ub = n04m67c['call'](this, u16r8bi12, bu7mjy881);
            lcuvp41xb['call'](this, u16r8bi12, bu7mjy881, b63jmn);
            b63jmn = n04m67c['call'](this, u16r8bi12, bu7mjy881);
            sew68v['attributeChangedCallback'](this, bu7mjy881, v2e74ub, b63jmn, u16r8bi12);
        };
        Element['prototype']['removeAttribute'] = function (r9fdcw5) {
            if (0x1 !== this['__CE_state'])
                return tl7atxv['call'](this, r9fdcw5);
            var kn1z1 = a8p14['call'](this, r9fdcw5);
            tl7atxv['call'](this, r9fdcw5);
            null !== kn1z1 && sew68v['attributeChangedCallback'](this, r9fdcw5, kn1z1, null, null);
        };
        r13zst6 && (Element['prototype']['toggleAttribute'] = function (gy6f6r, otx308) {
            if (0x1 !== this['__CE_state'])
                return r13zst6['call'](this, gy6f6r, otx308);
            var g00ri = a8p14['call'](this, gy6f6r), p6ouq = null !== g00ri;
            otx308 = r13zst6['call'](this, gy6f6r, otx308);
            p6ouq !== otx308 && sew68v['attributeChangedCallback'](this, gy6f6r, g00ri, otx308 ? '' : null, null);
            return otx308;
        });
        Element['prototype']['removeAttributeNS'] = function (bt5o295, ef74o5) {
            if (0x1 !== this['__CE_state'])
                return xsv53f4['call'](this, bt5o295, ef74o5);
            var uy3x07 = n04m67c['call'](this, bt5o295, ef74o5);
            xsv53f4['call'](this, bt5o295, ef74o5);
            var r62y0fz0 = n04m67c['call'](this, bt5o295, ef74o5);
            uy3x07 !== r62y0fz0 && sew68v['attributeChangedCallback'](this, ef74o5, uy3x07, r62y0fz0, bt5o295);
        };
        bz3jk ? j04d2x8t(HTMLElement['prototype'], bz3jk) : h95nbug0n && j04d2x8t(Element['prototype'], h95nbug0n);
        d1ly7q8 ? t65avmi(HTMLElement['prototype'], d1ly7q8) : jpdncr960 && t65avmi(Element['prototype'], jpdncr960);
        v65y831z6(sew68v, Element['prototype'], {
            'prepend': o48tf8,
            'append': x586v26
        });
        efw054du(sew68v);
    }
    ;
    var bjb6t = {};
    function wtqx0h(w0y8c7g78) {
        function s6ja8() {
            var t2bo6dvo = this['constructor'];
            var jxrpe633 = document['__CE_registry']['Fa']['get'](t2bo6dvo);
            if (!jxrpe633)
                throw Error('Failed\x20to\x20construct\x20a\x20custom\x20element:\x20The\x20constructor\x20was\x20not\x20registered\x20with\x20`customElements`.');
            var idgoq00 = jxrpe633['constructionStack'];
            if (0x0 === idgoq00['length'])
                return idgoq00 = fy42q76j6['call'](document, jxrpe633['localName']), Object['setPrototypeOf'](idgoq00, t2bo6dvo['prototype']), idgoq00['__CE_state'] = 0x1, idgoq00['__CE_definition'] = jxrpe633, o7d4919(w0y8c7g78, idgoq00), idgoq00;
            var p8i1k18 = idgoq00['length'] - 0x1, q456c5c = idgoq00[p8i1k18];
            if (q456c5c === bjb6t)
                throw Error('Failed\x20to\x20construct\x20\x27' + jxrpe633['localName'] + '\x27:\x20This\x20element\x20was\x20already\x20constructed.');
            idgoq00[p8i1k18] = bjb6t;
            Object['setPrototypeOf'](q456c5c, t2bo6dvo['prototype']);
            o7d4919(w0y8c7g78, q456c5c);
            return q456c5c;
        }
        s6ja8['prototype'] = nj7ce51v['prototype'];
        Object['defineProperty'](HTMLElement['prototype'], 'constructor', {
            'writable': !0x0,
            'configurable': !0x0,
            'enumerable': !0x1,
            'value': s6ja8
        });
        window['HTMLElement'] = s6ja8;
    }
    ;
    function mau988(o25noa0) {
        function xf7ew(nol8cm35f, g93yz0) {
            Object['defineProperty'](nol8cm35f, 'textContent', {
                'enumerable': g93yz0['enumerable'],
                'configurable': !0x0,
                'get': g93yz0['get'],
                'set': function (jsx1dz218) {
                    if (this['nodeType'] === Node['TEXT_NODE'])
                        g93yz0['set']['call'](this, jsx1dz218);
                    else {
                        var pz16h4p = void 0x0;
                        if (this['firstChild']) {
                            var t47locw = this['childNodes'], y7q1hd = t47locw['length'];
                            if (0x0 < y7q1hd && z08rm6423(this)) {
                                pz16h4p = Array(y7q1hd);
                                for (var xul0r93 = 0x0; xul0r93 < y7q1hd; xul0r93++)
                                    pz16h4p[xul0r93] = t47locw[xul0r93];
                            }
                        }
                        g93yz0['set']['call'](this, jsx1dz218);
                        if (pz16h4p)
                            for (jsx1dz218 = 0x0; jsx1dz218 < pz16h4p['length']; jsx1dz218++)
                                hw7y617(o25noa0, pz16h4p[jsx1dz218]);
                    }
                }
            });
        }
        Node['prototype']['insertBefore'] = function (ty4641, c342j) {
            if (ty4641 instanceof DocumentFragment) {
                var y9l1j4qo3 = v5b92e75(ty4641);
                ty4641 = j0yzlj['call'](this, ty4641, c342j);
                if (z08rm6423(this))
                    for (c342j = 0x0; c342j < y9l1j4qo3['length']; c342j++)
                        w30j0j51u(o25noa0, y9l1j4qo3[c342j]);
                return ty4641;
            }
            y9l1j4qo3 = ty4641 instanceof Element && z08rm6423(ty4641);
            c342j = j0yzlj['call'](this, ty4641, c342j);
            y9l1j4qo3 && hw7y617(o25noa0, ty4641);
            z08rm6423(this) && w30j0j51u(o25noa0, ty4641);
            return c342j;
        };
        Node['prototype']['appendChild'] = function (y1hkx) {
            if (y1hkx instanceof DocumentFragment) {
                var z55z8j = v5b92e75(y1hkx);
                y1hkx = pq6d6['call'](this, y1hkx);
                if (z08rm6423(this))
                    for (var m5s2kx17 = 0x0; m5s2kx17 < z55z8j['length']; m5s2kx17++)
                        w30j0j51u(o25noa0, z55z8j[m5s2kx17]);
                return y1hkx;
            }
            z55z8j = y1hkx instanceof Element && z08rm6423(y1hkx);
            m5s2kx17 = pq6d6['call'](this, y1hkx);
            z55z8j && hw7y617(o25noa0, y1hkx);
            z08rm6423(this) && w30j0j51u(o25noa0, y1hkx);
            return m5s2kx17;
        };
        Node['prototype']['cloneNode'] = function (v7u4bq5m4) {
            v7u4bq5m4 = j4f0uo06a['call'](this, !!v7u4bq5m4);
            this['ownerDocument']['__CE_registry'] ? kl2f3w(o25noa0, v7u4bq5m4) : igs367753(o25noa0, v7u4bq5m4);
            return v7u4bq5m4;
        };
        Node['prototype']['removeChild'] = function (fzlapn93t) {
            var s466hk1 = fzlapn93t instanceof Element && z08rm6423(fzlapn93t), x40hz = tzgxq['call'](this, fzlapn93t);
            s466hk1 && hw7y617(o25noa0, fzlapn93t);
            return x40hz;
        };
        Node['prototype']['replaceChild'] = function (y888988, gts9pz3i) {
            if (y888988 instanceof DocumentFragment) {
                var jzq4t = v5b92e75(y888988);
                y888988 = r4l6v016q['call'](this, y888988, gts9pz3i);
                if (z08rm6423(this))
                    for (hw7y617(o25noa0, gts9pz3i), gts9pz3i = 0x0; gts9pz3i < jzq4t['length']; gts9pz3i++)
                        w30j0j51u(o25noa0, jzq4t[gts9pz3i]);
                return y888988;
            }
            jzq4t = y888988 instanceof Element && z08rm6423(y888988);
            var ml30o5v = r4l6v016q['call'](this, y888988, gts9pz3i), l5n5r9 = z08rm6423(this);
            l5n5r9 && hw7y617(o25noa0, gts9pz3i);
            jzq4t && hw7y617(o25noa0, y888988);
            l5n5r9 && w30j0j51u(o25noa0, y888988);
            return ml30o5v;
        };
        ou3o1 && ou3o1['get'] ? xf7ew(Node['prototype'], ou3o1) : f6eb9(o25noa0, function (n73k4) {
            xf7ew(n73k4, {
                'enumerable': !0x0,
                'configurable': !0x0,
                'get': function () {
                    for (var e393tn = [], me0rw = this['firstChild']; me0rw; me0rw = me0rw['nextSibling'])
                        me0rw['nodeType'] !== Node['COMMENT_NODE'] && e393tn['push'](me0rw['textContent']);
                    return e393tn['join']('');
                },
                'set': function (hk48ff) {
                    for (; this['firstChild'];)
                        tzgxq['call'](this, this['firstChild']);
                    null != hk48ff && '' !== hk48ff && pq6d6['call'](this, document['createTextNode'](hk48ff));
                }
            });
        });
    }
    ;
    var fyk2x = window['customElements'];
    function uctgk326() {
        var c7vz25my4 = new k5l68();
        wtqx0h(c7vz25my4);
        zha7a66(c7vz25my4);
        v65y831z6(c7vz25my4, DocumentFragment['prototype'], {
            'prepend': v87fsw3,
            'append': ngmn029
        });
        mau988(c7vz25my4);
        c09jqj8b8(c7vz25my4);
        window['CustomElementRegistry'] = ferknh;
        c7vz25my4 = new ferknh(c7vz25my4);
        document['__CE_registry'] = c7vz25my4;
        Object['defineProperty'](window, 'customElements', {
            'configurable': !0x0,
            'enumerable': !0x0,
            'value': c7vz25my4
        });
    }
    fyk2x && !fyk2x['forcePolyfill'] && 'function' == typeof fyk2x['define'] && 'function' == typeof fyk2x['get'] || uctgk326();
    window['__CE_installPolyfill'] = uctgk326;
    function a57os9o() {
        this['end'] = this['start'] = 0x0;
        this['rules'] = this['parent'] = this['previous'] = null;
        this['cssText'] = this['parsedCssText'] = '';
        this['atRule'] = !0x1;
        this['type'] = 0x0;
        this['parsedSelector'] = this['selector'] = this['keyframesName'] = '';
    }
    function h3z4fp104(hxa01pewr) {
        var qp4mq49 = hxa01pewr = hxa01pewr['replace'](c743856, '')['replace'](wn7bn4, ''), g8oda5ym = new a57os9o();
        g8oda5ym['start'] = 0x0;
        g8oda5ym['end'] = qp4mq49['length'];
        for (var e0x40y = g8oda5ym, r8fh0bp83 = 0x0, hum3i571 = qp4mq49['length']; r8fh0bp83 < hum3i571; r8fh0bp83++)
            if ('{' === qp4mq49[r8fh0bp83]) {
                e0x40y['rules'] || (e0x40y['rules'] = []);
                var oz7u46 = e0x40y, x83b0 = oz7u46['rules'][oz7u46['rules']['length'] - 0x1] || null;
                e0x40y = new a57os9o();
                e0x40y['start'] = r8fh0bp83 + 0x1;
                e0x40y['parent'] = oz7u46;
                e0x40y['previous'] = x83b0;
                oz7u46['rules']['push'](e0x40y);
            } else
                '}' === qp4mq49[r8fh0bp83] && (e0x40y['end'] = r8fh0bp83 + 0x1, e0x40y = e0x40y['parent'] || g8oda5ym);
        return xi5esh8(g8oda5ym, hxa01pewr);
    }
    function xi5esh8(wtppj4e9d, w03w1m6) {
        var oklwm6 = w03w1m6['substring'](wtppj4e9d['start'], wtppj4e9d['end'] - 0x1);
        wtppj4e9d['parsedCssText'] = wtppj4e9d['cssText'] = oklwm6['trim']();
        wtppj4e9d['parent'] && (oklwm6 = w03w1m6['substring'](wtppj4e9d['previous'] ? wtppj4e9d['previous']['end'] : wtppj4e9d['parent']['start'], wtppj4e9d['start'] - 0x1), oklwm6 = bga0t(oklwm6), oklwm6 = oklwm6['replace'](fu8vx, '\x20'), oklwm6 = oklwm6['substring'](oklwm6['lastIndexOf'](';') + 0x1), oklwm6 = wtppj4e9d['parsedSelector'] = wtppj4e9d['selector'] = oklwm6['trim'](), wtppj4e9d['atRule'] = 0x0 === oklwm6['indexOf']('@'), wtppj4e9d['atRule'] ? 0x0 === oklwm6['indexOf']('@media') ? wtppj4e9d['type'] = c1320v2 : oklwm6['match'](j51pl) && (wtppj4e9d['type'] = n2y1j, wtppj4e9d['keyframesName'] = wtppj4e9d['selector']['split'](fu8vx)['pop']()) : wtppj4e9d['type'] = 0x0 === oklwm6['indexOf']('--') ? bt7d9a : frcg7);
        if (oklwm6 = wtppj4e9d['rules'])
            for (var eiv09 = 0x0, x1l6412n4 = oklwm6['length'], v9zsy41 = void 0x0; eiv09 < x1l6412n4 && (v9zsy41 = oklwm6[eiv09]); eiv09++)
                xi5esh8(v9zsy41, w03w1m6);
        return wtppj4e9d;
    }
    function bga0t(shsg4) {
        return shsg4['replace'](/\\([0-9a-f]{1,6})\s/gi, function (dlmzf5, zotxd587) {
            dlmzf5 = zotxd587;
            for (zotxd587 = 0x6 - dlmzf5['length']; zotxd587--;)
                dlmzf5 = '0' + dlmzf5;
            return '\x5c' + dlmzf5;
        });
    }
    function u310830v(y9wh010vt, i013u, qq369d5) {
        qq369d5 = void 0x0 === qq369d5 ? '' : qq369d5;
        var bvrrk21m3 = '';
        if (y9wh010vt['cssText'] || y9wh010vt['rules']) {
            var f9cn5 = y9wh010vt['rules'], yudwu;
            if (yudwu = f9cn5)
                yudwu = f9cn5[0x0], yudwu = !(yudwu && yudwu['selector'] && 0x0 === yudwu['selector']['indexOf']('--'));
            if (yudwu) {
                yudwu = 0x0;
                for (var q3m83e0 = f9cn5['length'], l8s4t7199 = void 0x0; yudwu < q3m83e0 && (l8s4t7199 = f9cn5[yudwu]); yudwu++)
                    bvrrk21m3 = u310830v(l8s4t7199, i013u, bvrrk21m3);
            } else
                i013u ? i013u = y9wh010vt['cssText'] : (i013u = y9wh010vt['cssText'], i013u = i013u['replace'](qld2t98, '')['replace'](g0l275q1, ''), i013u = i013u['replace'](gx7x451, '')['replace'](rifz6m, '')), (bvrrk21m3 = i013u['trim']()) && (bvrrk21m3 = '\x20\x20' + bvrrk21m3 + '\x0a');
        }
        bvrrk21m3 && (y9wh010vt['selector'] && (qq369d5 += y9wh010vt['selector'] + '\x20{\x0a'), qq369d5 += bvrrk21m3, y9wh010vt['selector'] && (qq369d5 += '}\x0a\x0a'));
        return qq369d5;
    }
    var frcg7 = 0x1, n2y1j = 0x7, c1320v2 = 0x4, bt7d9a = 0x3e8, c743856 = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim, wn7bn4 = /@import[^;]*;/gim, qld2t98 = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim, g0l275q1 = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim, gx7x451 = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim, rifz6m = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim, j51pl = /^@[^\s]*keyframes/, fu8vx = /\s+/g;
    var qhly11 = !(window['ShadyDOM'] && window['ShadyDOM']['inUse']), j174g6zn;
    function i5mkb65c(v0g296) {
        j174g6zn = v0g296 && v0g296['shimcssproperties'] ? !0x1 : qhly11 || !(navigator['userAgent']['match'](/AppleWebKit\/601|Edge\/15/) || !window['CSS'] || !CSS['supports'] || !CSS['supports']('box-shadow', '0\x200\x200\x20var(--foo)'));
    }
    var gwh3d1kjs;
    window['ShadyCSS'] && void 0x0 !== window['ShadyCSS']['cssBuild'] && (gwh3d1kjs = window['ShadyCSS']['cssBuild']);
    var qh3828i = !(!window['ShadyCSS'] || !window['ShadyCSS']['disableRuntime']);
    window['ShadyCSS'] && void 0x0 !== window['ShadyCSS']['nativeCss'] ? j174g6zn = window['ShadyCSS']['nativeCss'] : window['ShadyCSS'] ? (i5mkb65c(window['ShadyCSS']), window['ShadyCSS'] = void 0x0) : i5mkb65c(window['WebComponents'] && window['WebComponents']['flags']);
    var y1qv553 = j174g6zn;
    var zp923m = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi, i9e1537m = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi, w974aum = /(--[\w-]+)\s*([:,;)]|$)/gi, ux944 = /(animation\s*:)|(animation-name\s*:)/, a18vc342 = /@media\s(.*)/, cg5e6fm = /\{[^}]*\}/g;
    var um625 = new Set();
    function kwuh6(i51244x48, b60l8cl) {
        if (!i51244x48)
            return '';
        'string' === typeof i51244x48 && (i51244x48 = h3z4fp104(i51244x48));
        b60l8cl && ukhf6yzrh(i51244x48, b60l8cl);
        return u310830v(i51244x48, y1qv553);
    }
    function clzr918e5(oib56) {
        !oib56['__cssRules'] && oib56['textContent'] && (oib56['__cssRules'] = h3z4fp104(oib56['textContent']));
        return oib56['__cssRules'] || null;
    }
    function v74b2n8p5(zl739z) {
        return !!zl739z['parent'] && zl739z['parent']['type'] === n2y1j;
    }
    function ukhf6yzrh(drb4w03z0, vbe7t, hk1794x3w, cu3d32bx4) {
        if (drb4w03z0) {
            var h669hv0b = !0x1, l3d21i4f3 = drb4w03z0['type'];
            if (cu3d32bx4 && l3d21i4f3 === c1320v2) {
                var i46ba = drb4w03z0['selector']['match'](a18vc342);
                i46ba && (window['matchMedia'](i46ba[0x1])['matches'] || (h669hv0b = !0x0));
            }
            l3d21i4f3 === frcg7 ? vbe7t(drb4w03z0) : hk1794x3w && l3d21i4f3 === n2y1j ? hk1794x3w(drb4w03z0) : l3d21i4f3 === bt7d9a && (h669hv0b = !0x0);
            if ((drb4w03z0 = drb4w03z0['rules']) && !h669hv0b)
                for (h669hv0b = 0x0, l3d21i4f3 = drb4w03z0['length'], i46ba = void 0x0; h669hv0b < l3d21i4f3 && (i46ba = drb4w03z0[h669hv0b]); h669hv0b++)
                    ukhf6yzrh(i46ba, vbe7t, hk1794x3w, cu3d32bx4);
        }
    }
    function gyvaoyr24(nwhhi786c, r1ie733, s1x822105, b3oefj) {
        var wd64s = document['createElement']('style');
        r1ie733 && wd64s['setAttribute']('scope', r1ie733);
        wd64s['textContent'] = nwhhi786c;
        h1c3gr(wd64s, s1x822105, b3oefj);
        return wd64s;
    }
    var w882js5f = null;
    function i6z3nhx4(w56dpn843) {
        w56dpn843 = document['createComment']('\x20Shady\x20DOM\x20styles\x20for\x20' + w56dpn843 + '\x20');
        var t1d5e81a3 = document['head'];
        t1d5e81a3['insertBefore'](w56dpn843, (w882js5f ? w882js5f['nextSibling'] : null) || t1d5e81a3['firstChild']);
        return w882js5f = w56dpn843;
    }
    function h1c3gr(p8ev5w81, o72335, hk8o5cz5h) {
        o72335 = o72335 || document['head'];
        o72335['insertBefore'](p8ev5w81, hk8o5cz5h && hk8o5cz5h['nextSibling'] || o72335['firstChild']);
        w882js5f ? p8ev5w81['compareDocumentPosition'](w882js5f) === Node['DOCUMENT_POSITION_PRECEDING'] && (w882js5f = p8ev5w81) : w882js5f = p8ev5w81;
    }
    function mn0w2rjb(ydx9o, r2gjt5g55) {
        for (var s02hk3r7 = 0x0, cy13j0 = ydx9o['length']; r2gjt5g55 < cy13j0; r2gjt5g55++)
            if ('(' === ydx9o[r2gjt5g55])
                s02hk3r7++;
            else if (')' === ydx9o[r2gjt5g55] && 0x0 === --s02hk3r7)
                return r2gjt5g55;
        return -0x1;
    }
    function z7u6y(qz9865m, kdzh13) {
        var j238qhn = qz9865m['indexOf']('var(');
        if (-0x1 === j238qhn)
            return kdzh13(qz9865m, '', '', '');
        var ivopnpr = mn0w2rjb(qz9865m, j238qhn + 0x3), brg5s0t33 = qz9865m['substring'](j238qhn + 0x4, ivopnpr);
        j238qhn = qz9865m['substring'](0x0, j238qhn);
        qz9865m = z7u6y(qz9865m['substring'](ivopnpr + 0x1), kdzh13);
        ivopnpr = brg5s0t33['indexOf'](',');
        return -0x1 === ivopnpr ? kdzh13(j238qhn, brg5s0t33['trim'](), '', qz9865m) : kdzh13(j238qhn, brg5s0t33['substring'](0x0, ivopnpr)['trim'](), brg5s0t33['substring'](ivopnpr + 0x1)['trim'](), qz9865m);
    }
    function o1448c(r8j47u3o, apf49och8) {
        qhly11 ? r8j47u3o['setAttribute']('class', apf49och8) : window['ShadyDOM']['nativeMethods']['setAttribute']['call'](r8j47u3o, 'class', apf49och8);
    }
    var ft3ipj1u1 = window['ShadyDOM'] && window['ShadyDOM']['wrap'] || function (l3419) {
        return l3419;
    };
    function uipc8yq(ep03m23s) {
        var cplr5t162 = ep03m23s['localName'], w01gy = '';
        cplr5t162 ? -0x1 < cplr5t162['indexOf']('-') || (w01gy = cplr5t162, cplr5t162 = ep03m23s['getAttribute'] && ep03m23s['getAttribute']('is') || '') : (cplr5t162 = ep03m23s['is'], w01gy = ep03m23s['extends']);
        return {
            'is': cplr5t162,
            'ja': w01gy
        };
    }
    function ajs82i0je(ria89f) {
        for (var z9bgrg0u = [], w78vb = '', dx81nk = 0x0; 0x0 <= dx81nk && dx81nk < ria89f['length']; dx81nk++)
            if ('(' === ria89f[dx81nk]) {
                var b610e5u52 = mn0w2rjb(ria89f, dx81nk);
                w78vb += ria89f['slice'](dx81nk, b610e5u52 + 0x1);
                dx81nk = b610e5u52;
            } else
                ',' === ria89f[dx81nk] ? (z9bgrg0u['push'](w78vb), w78vb = '') : w78vb += ria89f[dx81nk];
        w78vb && z9bgrg0u['push'](w78vb);
        return z9bgrg0u;
    }
    function b88u649m(vz6vtu) {
        if (void 0x0 !== gwh3d1kjs)
            return gwh3d1kjs;
        if (void 0x0 === vz6vtu['__cssBuild']) {
            var x0d543l6 = vz6vtu['getAttribute']('css-build');
            if (x0d543l6)
                vz6vtu['__cssBuild'] = x0d543l6;
            else {
                yfeqy: {
                    x0d543l6 = 'template' === vz6vtu['localName'] ? vz6vtu['content']['firstChild'] : vz6vtu['firstChild'];
                    if (x0d543l6 instanceof Comment && (x0d543l6 = x0d543l6['textContent']['trim']()['split'](':'), 'css-build' === x0d543l6[0x0])) {
                        x0d543l6 = x0d543l6[0x1];
                        break yfeqy;
                    }
                    x0d543l6 = '';
                }
                if ('' !== x0d543l6) {
                    var l3tfn6 = 'template' === vz6vtu['localName'] ? vz6vtu['content']['firstChild'] : vz6vtu['firstChild'];
                    l3tfn6['parentNode']['removeChild'](l3tfn6);
                }
                vz6vtu['__cssBuild'] = x0d543l6;
            }
        }
        return vz6vtu['__cssBuild'] || '';
    }
    function k663d(tos4a8ha6) {
        tos4a8ha6 = void 0x0 === tos4a8ha6 ? '' : tos4a8ha6;
        return '' !== tos4a8ha6 && y1qv553 ? qhly11 ? 'shadow' === tos4a8ha6 : 'shady' === tos4a8ha6 : !0x1;
    }
    ;
    function xa91l() {
    }
    function v7jg58(ecpw0x30, obh2o64d) {
        p036aabcb(w53s6t09i, ecpw0x30, function (y6xjhti0s) {
            y87iq1(y6xjhti0s, obh2o64d || '');
        });
    }
    function p036aabcb(l0f0sv5g9, xa56602qe, oagtm) {
        xa56602qe['nodeType'] === Node['ELEMENT_NODE'] && oagtm(xa56602qe);
        var u7j87gk9;
        'template' === xa56602qe['localName'] ? u7j87gk9 = (xa56602qe['content'] || xa56602qe['_content'] || xa56602qe)['childNodes'] : u7j87gk9 = xa56602qe['children'] || xa56602qe['childNodes'];
        if (u7j87gk9)
            for (xa56602qe = 0x0; xa56602qe < u7j87gk9['length']; xa56602qe++)
                p036aabcb(l0f0sv5g9, u7j87gk9[xa56602qe], oagtm);
    }
    function y87iq1(o4820n77, xy3l7, tl3r35) {
        if (xy3l7)
            if (o4820n77['classList'])
                tl3r35 ? (o4820n77['classList']['remove']('style-scope'), o4820n77['classList']['remove'](xy3l7)) : (o4820n77['classList']['add']('style-scope'), o4820n77['classList']['add'](xy3l7));
            else if (o4820n77['getAttribute']) {
                var f8q0j = o4820n77['getAttribute']('class');
                tl3r35 ? f8q0j && (xy3l7 = f8q0j['replace']('style-scope', '')['replace'](xy3l7, ''), o1448c(o4820n77, xy3l7)) : o1448c(o4820n77, (f8q0j ? f8q0j + '\x20' : '') + 'style-scope\x20' + xy3l7);
            }
    }
    function le93lo0t(jf15s8vp, s8j93m2, i3579p74) {
        p036aabcb(w53s6t09i, jf15s8vp, function (lw13j) {
            y87iq1(lw13j, s8j93m2, !0x0);
            y87iq1(lw13j, i3579p74);
        });
    }
    function p09f2u(rb88eab, t1h16bi) {
        p036aabcb(w53s6t09i, rb88eab, function (l40a2j) {
            y87iq1(l40a2j, t1h16bi || '', !0x0);
        });
    }
    function av8ov9lu(het7tj, l7ebz42c, h3gqxw44n, e6v8db0f2, r76k7d397) {
        var okso2ah = w53s6t09i;
        r76k7d397 = void 0x0 === r76k7d397 ? '' : r76k7d397;
        '' === r76k7d397 && (qhly11 || 'shady' === (void 0x0 === e6v8db0f2 ? '' : e6v8db0f2) ? r76k7d397 = kwuh6(l7ebz42c, h3gqxw44n) : (het7tj = uipc8yq(het7tj), r76k7d397 = urv287(okso2ah, l7ebz42c, het7tj['is'], het7tj['ja'], h3gqxw44n) + '\x0a\x0a'));
        return r76k7d397['trim']();
    }
    function urv287(c9s9s, q2t0ufsp3, ez28dn1, b501c27, aj99919) {
        var p17e39 = p5s17(ez28dn1, b501c27);
        ez28dn1 = ez28dn1 ? '.' + ez28dn1 : '';
        return kwuh6(q2t0ufsp3, function (oed5340) {
            oed5340['i'] || (oed5340['selector'] = oed5340['G'] = bkw4bx7y(c9s9s, oed5340, c9s9s['h'], ez28dn1, p17e39), oed5340['i'] = !0x0);
            aj99919 && aj99919(oed5340, ez28dn1, p17e39);
        });
    }
    function p5s17(rdgd6nc, x6jku) {
        return x6jku ? '[is=' + rdgd6nc + ']' : rdgd6nc;
    }
    function bkw4bx7y(m367m9d, khl8l, g15nwy, o59o2w4, q9ek77k) {
        var f78x944w = ajs82i0je(khl8l['selector']);
        if (!v74b2n8p5(khl8l)) {
            khl8l = 0x0;
            for (var sb5x2 = f78x944w['length'], p0x2o274u = void 0x0; khl8l < sb5x2 && (p0x2o274u = f78x944w[khl8l]); khl8l++)
                f78x944w[khl8l] = g15nwy['call'](m367m9d, p0x2o274u, o59o2w4, q9ek77k);
        }
        return f78x944w['filter'](function (a8j7qq) {
            return !!a8j7qq;
        })['join'](',');
    }
    function o9es5cj(xf37b) {
        return xf37b['replace'](da2706p5, function (j65v6b0d0, cjm215, f51w3z) {
            -0x1 < f51w3z['indexOf']('+') ? f51w3z = f51w3z['replace'](/\+/g, '___') : -0x1 < f51w3z['indexOf']('___') && (f51w3z = f51w3z['replace'](/___/g, '+'));
            return ':' + cjm215 + '(' + f51w3z + ')';
        });
    }
    function c4lj7rd(a794u9) {
        for (var j48473 = [], d4m0h9vv; d4m0h9vv = a794u9['match'](r65ge5);) {
            var ko5oap7 = d4m0h9vv['index'], yf8bbq = mn0w2rjb(a794u9, ko5oap7);
            if (-0x1 === yf8bbq)
                throw Error(d4m0h9vv['input'] + '\x20selector\x20missing\x20\x27)\x27');
            d4m0h9vv = a794u9['slice'](ko5oap7, yf8bbq + 0x1);
            a794u9 = a794u9['replace'](d4m0h9vv, '');
            j48473['push'](d4m0h9vv);
        }
        return {
            'Ea': a794u9,
            'matches': j48473
        };
    }
    function gpchj6643(fs210it, e4hms00yf) {
        var v5o56078v = fs210it['split']('');
        return e4hms00yf['reduce'](function (i65n8z7a, vr1mfz1g, dnq5g) {
            return i65n8z7a + vr1mfz1g + v5o56078v[dnq5g + 0x1];
        }, v5o56078v[0x0]);
    }
    xa91l['prototype']['h'] = function (c099t16, c55j29, a62law7) {
        var z9dotl = !0x1;
        c099t16 = c099t16['trim']();
        var sh24f3y4c = da2706p5['test'](c099t16);
        sh24f3y4c && (c099t16 = c099t16['replace'](da2706p5, function (vh4sfo997, i45xh6m4i, n72e2v61) {
            return ':' + i45xh6m4i + '(' + n72e2v61['replace'](/\s/g, '') + ')';
        }), c099t16 = o9es5cj(c099t16));
        var bm3j02n35 = r65ge5['test'](c099t16);
        if (bm3j02n35) {
            var i9vh3 = c4lj7rd(c099t16);
            c099t16 = i9vh3['Ea'];
            i9vh3 = i9vh3['matches'];
        }
        c099t16 = c099t16['replace'](c9lp9dd1h, ':host\x20$1');
        c099t16 = c099t16['replace'](ot243, function (l6ucvo8, h5ue6, rik579) {
            z9dotl || (l6ucvo8 = mxe52bdsu(rik579, h5ue6, c55j29, a62law7), z9dotl = z9dotl || l6ucvo8['stop'], h5ue6 = l6ucvo8['Ya'], rik579 = l6ucvo8['value']);
            return h5ue6 + rik579;
        });
        bm3j02n35 && (c099t16 = gpchj6643(c099t16, i9vh3));
        sh24f3y4c && (c099t16 = o9es5cj(c099t16));
        return c099t16 = c099t16['replace'](r64186p, function (z25li8, fi9r3s6, ei4zg, k552d16n4) {
            return '[dir=\x22' + ei4zg + '\x22]\x20' + fi9r3s6 + k552d16n4 + ',\x20' + fi9r3s6 + '[dir=\x22' + ei4zg + '\x22]' + k552d16n4;
        });
    };
    function mxe52bdsu(lid0767, c623luky, n14re3ak, k7603) {
        var g2f5w2j = lid0767['indexOf']('::slotted');
        0x0 <= lid0767['indexOf'](':host') ? lid0767 = fxiz3q(lid0767, k7603) : 0x0 !== g2f5w2j && (lid0767 = n14re3ak ? b4h3537e2(lid0767, n14re3ak) : lid0767);
        n14re3ak = !0x1;
        0x0 <= g2f5w2j && (c623luky = '', n14re3ak = !0x0);
        if (n14re3ak) {
            var j875a2a4 = !0x0;
            n14re3ak && (lid0767 = lid0767['replace'](wvi8ap, function (s8q32k, rolq320jq) {
                return '\x20>\x20' + rolq320jq;
            }));
        }
        return {
            'value': lid0767,
            'Ya': c623luky,
            'stop': j875a2a4
        };
    }
    function b4h3537e2(s4t8w983x, u07xrm961) {
        s4t8w983x = s4t8w983x['split'](/(\[.+?\])/);
        for (var s1x7v = [], z7ekc4v3 = 0x0; z7ekc4v3 < s4t8w983x['length']; z7ekc4v3++)
            if (0x1 === z7ekc4v3 % 0x2)
                s1x7v['push'](s4t8w983x[z7ekc4v3]);
            else {
                var eumi68 = s4t8w983x[z7ekc4v3];
                if ('' !== eumi68 || z7ekc4v3 !== s4t8w983x['length'] - 0x1)
                    eumi68 = eumi68['split'](':'), eumi68[0x0] += u07xrm961, s1x7v['push'](eumi68['join'](':'));
            }
        return s1x7v['join']('');
    }
    function fxiz3q(dnl69, vm3046sa1) {
        var u713na = dnl69['match'](t3t5v262x);
        return (u713na = u713na && u713na[0x2]['trim']() || '') ? u713na[0x0]['match'](o435c66uh) ? dnl69['replace'](t3t5v262x, function (w7o13b47, rth4la, ch1761d) {
            return vm3046sa1 + ch1761d;
        }) : u713na['split'](o435c66uh)[0x0] === vm3046sa1 ? u713na : 'should_not_match' : dnl69['replace'](':host', vm3046sa1);
    }
    function c777375(f8r04wm) {
        ':root' === f8r04wm['selector'] && (f8r04wm['selector'] = 'html');
    }
    xa91l['prototype']['i'] = function (n82l8fhdb) {
        return n82l8fhdb['match'](':host') ? '' : n82l8fhdb['match']('::slotted') ? this['h'](n82l8fhdb, ':not(.style-scope)') : b4h3537e2(n82l8fhdb['trim'](), ':not(.style-scope)');
    };
    yr7vj3d6q['Object']['defineProperties'](xa91l['prototype'], {
        'g': {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                return 'style-scope';
            }
        }
    });
    var da2706p5 = /:(nth[-\w]+)\(([^)]+)\)/, ot243 = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g, o435c66uh = /[[.:#*]/, c9lp9dd1h = /^(::slotted)/, t3t5v262x = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/, wvi8ap = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/, r64186p = /(.*):dir\((?:(ltr|rtl))\)(.*)/, r65ge5 = /:(?:matches|any|-(?:webkit|moz)-any)/, w53s6t09i = new xa91l();
    function h671z49(ms29p, l064m, a86n9b7z, wm1zv, b33j41s) {
        this['M'] = ms29p || null;
        this['h'] = l064m || null;
        this['Ca'] = a86n9b7z || [];
        this['K'] = null;
        this['cssBuild'] = b33j41s || '';
        this['ja'] = wm1zv || '';
        this['g'] = this['L'] = this['R'] = null;
    }
    function a60k394(a13v3uc4) {
        return a13v3uc4 ? a13v3uc4['__styleInfo'] : null;
    }
    function b65sas6(qfyaa8, joi4ia2) {
        return qfyaa8['__styleInfo'] = joi4ia2;
    }
    h671z49['prototype']['i'] = function () {
        return this['M'];
    };
    h671z49['prototype']['_getStyleRules'] = h671z49['prototype']['i'];
    function m389wg7(nj8kf5xx5) {
        var hl6c8 = this['matches'] || this['matchesSelector'] || this['mozMatchesSelector'] || this['msMatchesSelector'] || this['oMatchesSelector'] || this['webkitMatchesSelector'];
        return hl6c8 && hl6c8['call'](this, nj8kf5xx5);
    }
    var mjc323y1 = /:host\s*>\s*/, b382e7x50 = navigator['userAgent']['match']('Trident');
    function yuw55so9() {
    }
    function o0atq2(je620nwx5) {
        var q669x8 = {}, roln2 = [], t0484j8t = 0x0;
        ukhf6yzrh(je620nwx5, function (ih0lvjc18) {
            rdytm132(ih0lvjc18);
            ih0lvjc18['index'] = t0484j8t++;
            ih0lvjc18 = ih0lvjc18['F']['cssText'];
            for (var nxk91x5t9; nxk91x5t9 = w974aum['exec'](ih0lvjc18);) {
                var nroi51tl = nxk91x5t9[0x1];
                ':' !== nxk91x5t9[0x2] && (q669x8[nroi51tl] = !0x0);
            }
        }, function (d5nn75z4d) {
            roln2['push'](d5nn75z4d);
        });
        je620nwx5['h'] = roln2;
        je620nwx5 = [];
        for (var j75cw in q669x8)
            je620nwx5['push'](j75cw);
        return je620nwx5;
    }
    function rdytm132(m7uw7grp) {
        if (!m7uw7grp['F']) {
            var e9wl0 = {}, ddzigvl3f = {};
            k4875(m7uw7grp, ddzigvl3f) && (e9wl0['P'] = ddzigvl3f, m7uw7grp['rules'] = null);
            e9wl0['cssText'] = m7uw7grp['parsedCssText']['replace'](cg5e6fm, '')['replace'](zp923m, '');
            m7uw7grp['F'] = e9wl0;
        }
    }
    function k4875(qq66wq17, g257w58ax) {
        var dmk6m64 = qq66wq17['F'];
        if (dmk6m64) {
            if (dmk6m64['P'])
                return Object['assign'](g257w58ax, dmk6m64['P']), !0x0;
        } else {
            dmk6m64 = qq66wq17['parsedCssText'];
            for (var f2l10ff; qq66wq17 = zp923m['exec'](dmk6m64);) {
                f2l10ff = (qq66wq17[0x2] || qq66wq17[0x3])['trim']();
                if ('inherit' !== f2l10ff || 'unset' !== f2l10ff)
                    g257w58ax[qq66wq17[0x1]['trim']()] = f2l10ff;
                f2l10ff = !0x0;
            }
            return f2l10ff;
        }
    }
    function s6bukl(c908br71, iev66115, dqr79s2q) {
        iev66115 && (iev66115 = 0x0 <= iev66115['indexOf'](';') ? pypst7ob(c908br71, iev66115, dqr79s2q) : z7u6y(iev66115, function (bdbe8, dw159y, j94ng, c97352) {
            if (!dw159y)
                return bdbe8 + c97352;
            (dw159y = s6bukl(c908br71, dqr79s2q[dw159y], dqr79s2q)) && 'initial' !== dw159y ? 'apply-shim-inherit' === dw159y && (dw159y = 'inherit') : dw159y = s6bukl(c908br71, dqr79s2q[j94ng] || j94ng, dqr79s2q) || j94ng;
            return bdbe8 + (dw159y || '') + c97352;
        }));
        return iev66115 && iev66115['trim']() || '';
    }
    function pypst7ob(mg795z, j18yxcwgy, sk571g3) {
        j18yxcwgy = j18yxcwgy['split'](';');
        for (var doyt6c = 0x0, ap747c8t4, iy3nbl1; doyt6c < j18yxcwgy['length']; doyt6c++)
            if (ap747c8t4 = j18yxcwgy[doyt6c]) {
                i9e1537m['lastIndex'] = 0x0;
                if (iy3nbl1 = i9e1537m['exec'](ap747c8t4))
                    ap747c8t4 = s6bukl(mg795z, sk571g3[iy3nbl1[0x1]], sk571g3);
                else if (iy3nbl1 = ap747c8t4['indexOf'](':'), -0x1 !== iy3nbl1) {
                    var i2o66 = ap747c8t4['substring'](iy3nbl1);
                    i2o66 = i2o66['trim']();
                    i2o66 = s6bukl(mg795z, i2o66, sk571g3) || i2o66;
                    ap747c8t4 = ap747c8t4['substring'](0x0, iy3nbl1) + i2o66;
                }
                j18yxcwgy[doyt6c] = ap747c8t4 && ap747c8t4['lastIndexOf'](';') === ap747c8t4['length'] - 0x1 ? ap747c8t4['slice'](0x0, -0x1) : ap747c8t4 || '';
            }
        return j18yxcwgy['join'](';');
    }
    function uo2l0d631(ctsmha, tq8bx6) {
        var x3lge6f1 = {}, lmwm0d6m = [];
        ukhf6yzrh(ctsmha, function (x69d3n9) {
            x69d3n9['F'] || rdytm132(x69d3n9);
            var b280t1nwh = x69d3n9['G'] || x69d3n9['parsedSelector'];
            tq8bx6 && x69d3n9['F']['P'] && b280t1nwh && m389wg7['call'](tq8bx6, b280t1nwh) && (k4875(x69d3n9, x3lge6f1), x69d3n9 = x69d3n9['index'], b280t1nwh = parseInt(x69d3n9 / 0x20, 0xa), lmwm0d6m[b280t1nwh] = (lmwm0d6m[b280t1nwh] || 0x0) | 0x1 << x69d3n9 % 0x20);
        }, null, !0x0);
        return {
            'P': x3lge6f1,
            'key': lmwm0d6m
        };
    }
    function am827r6v1(vs0ro, d4a3z4, xizi6, v780u8) {
        d4a3z4['F'] || rdytm132(d4a3z4);
        if (d4a3z4['F']['P']) {
            var qpso0 = uipc8yq(vs0ro);
            vs0ro = qpso0['is'];
            qpso0 = qpso0['ja'];
            qpso0 = vs0ro ? p5s17(vs0ro, qpso0) : 'html';
            var b5227 = d4a3z4['parsedSelector'];
            var vcud62 = !!b5227['match'](mjc323y1) || 'html' === qpso0 && -0x1 < b5227['indexOf']('html');
            var u2n39 = 0x0 === b5227['indexOf'](':host') && !vcud62;
            'shady' === xizi6 && (vcud62 = b5227 === qpso0 + '\x20>\x20*.' + qpso0 || -0x1 !== b5227['indexOf']('html'), u2n39 = !vcud62 && 0x0 === b5227['indexOf'](qpso0));
            if (vcud62 || u2n39)
                xizi6 = qpso0, u2n39 && (d4a3z4['G'] || (d4a3z4['G'] = bkw4bx7y(w53s6t09i, d4a3z4, w53s6t09i['h'], vs0ro ? '.' + vs0ro : '', qpso0)), xizi6 = d4a3z4['G'] || qpso0), vcud62 && 'html' === qpso0 && (xizi6 = d4a3z4['G'] || d4a3z4['O']), v780u8({
                    'Ea': xizi6,
                    'gb': u2n39,
                    'vb': vcud62
                });
        }
    }
    function g1wut(w2fo7p78v, i6x25, g19vc1) {
        var t7p3c2 = {}, ak88rcj = {};
        ukhf6yzrh(i6x25, function (jchqngmen) {
            am827r6v1(w2fo7p78v, jchqngmen, g19vc1, function (f45c2vcm7) {
                m389wg7['call'](w2fo7p78v['_element'] || w2fo7p78v, f45c2vcm7['Ea']) && (f45c2vcm7['gb'] ? k4875(jchqngmen, t7p3c2) : k4875(jchqngmen, ak88rcj));
            });
        }, null, !0x0);
        return {
            'mb': ak88rcj,
            'eb': t7p3c2
        };
    }
    function inq3p8ll(guh24, d8xi458r, g813923, vp0x4q) {
        var x4c571 = uipc8yq(d8xi458r), gekbqbq1 = p5s17(x4c571['is'], x4c571['ja']), ylb91fw = new RegExp('(?:^|[^.#[:])' + (d8xi458r['extends'] ? '\x5c' + gekbqbq1['slice'](0x0, -0x1) + '\x5c]' : gekbqbq1) + '($|[.:[\x5cs>+~])'), y3ei247cl = a60k394(d8xi458r);
        x4c571 = y3ei247cl['M'];
        y3ei247cl = y3ei247cl['cssBuild'];
        var y3z7rdsd7 = h4944(x4c571, vp0x4q);
        return av8ov9lu(d8xi458r, x4c571, function (unp25) {
            var wawq6xfm = '';
            unp25['F'] || rdytm132(unp25);
            unp25['F']['cssText'] && (wawq6xfm = pypst7ob(guh24, unp25['F']['cssText'], g813923));
            unp25['cssText'] = wawq6xfm;
            if (!qhly11 && !v74b2n8p5(unp25) && unp25['cssText']) {
                var ecdtw = wawq6xfm = unp25['cssText'];
                null == unp25['Ma'] && (unp25['Ma'] = ux944['test'](wawq6xfm));
                if (unp25['Ma'])
                    if (null == unp25['ra']) {
                        unp25['ra'] = [];
                        for (var b0e81w3 in y3z7rdsd7)
                            ecdtw = y3z7rdsd7[b0e81w3], ecdtw = ecdtw(wawq6xfm), wawq6xfm !== ecdtw && (wawq6xfm = ecdtw, unp25['ra']['push'](b0e81w3));
                    } else {
                        for (b0e81w3 = 0x0; b0e81w3 < unp25['ra']['length']; ++b0e81w3)
                            ecdtw = y3z7rdsd7[unp25['ra'][b0e81w3]], wawq6xfm = ecdtw(wawq6xfm);
                        ecdtw = wawq6xfm;
                    }
                unp25['cssText'] = ecdtw;
                unp25['G'] = unp25['G'] || unp25['selector'];
                wawq6xfm = '.' + vp0x4q;
                b0e81w3 = ajs82i0je(unp25['G']);
                ecdtw = 0x0;
                for (var m8t0fy = b0e81w3['length'], wa71xt7cs = void 0x0; ecdtw < m8t0fy && (wa71xt7cs = b0e81w3[ecdtw]); ecdtw++)
                    b0e81w3[ecdtw] = wa71xt7cs['match'](ylb91fw) ? wa71xt7cs['replace'](gekbqbq1, wawq6xfm) : wawq6xfm + '\x20' + wa71xt7cs;
                unp25['selector'] = b0e81w3['join'](',');
            }
        }, y3ei247cl);
    }
    function h4944(bztkm7, v9f232th) {
        bztkm7 = bztkm7['h'];
        var gz9q9839 = {};
        if (!qhly11 && bztkm7)
            for (var f87262 = 0x0, tn1353g = bztkm7[f87262]; f87262 < bztkm7['length']; tn1353g = bztkm7[++f87262]) {
                var q7h61w7 = tn1353g, wk5kk8 = v9f232th;
                q7h61w7['u'] = new RegExp('\x5cb' + q7h61w7['keyframesName'] + '(?!\x5cB|-)', 'g');
                q7h61w7['g'] = q7h61w7['keyframesName'] + '-' + wk5kk8;
                q7h61w7['G'] = q7h61w7['G'] || q7h61w7['selector'];
                q7h61w7['selector'] = q7h61w7['G']['replace'](q7h61w7['keyframesName'], q7h61w7['g']);
                gz9q9839[tn1353g['keyframesName']] = mpx5t90(tn1353g);
            }
        return gz9q9839;
    }
    function mpx5t90(xag985u) {
        return function (rr5ns1) {
            return rr5ns1['replace'](xag985u['u'], xag985u['g']);
        };
    }
    function prbnax63(ep1vw2n8, sjmz05v87) {
        var s401af4 = fkt2h, obvgv0krh = clzr918e5(ep1vw2n8);
        ep1vw2n8['textContent'] = kwuh6(obvgv0krh, function (f3m77v0) {
            var ug8ay = f3m77v0['cssText'] = f3m77v0['parsedCssText'];
            f3m77v0['F'] && f3m77v0['F']['cssText'] && (ug8ay = ug8ay['replace'](qld2t98, '')['replace'](g0l275q1, ''), f3m77v0['cssText'] = pypst7ob(s401af4, ug8ay, sjmz05v87));
        });
    }
    yr7vj3d6q['Object']['defineProperties'](yuw55so9['prototype'], {
        'g': {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get': function () {
                return 'x-scope';
            }
        }
    });
    var fkt2h = new yuw55so9();
    var d6d65fx = {}, o2qz96tg = window['customElements'];
    if (o2qz96tg && !qhly11 && !qh3828i) {
        var z88ad0y = o2qz96tg['define'];
        o2qz96tg['define'] = function (f11u8l6a9, fjkj4pk80, uem65po6) {
            d6d65fx[f11u8l6a9] || (d6d65fx[f11u8l6a9] = i6z3nhx4(f11u8l6a9));
            z88ad0y['call'](o2qz96tg, f11u8l6a9, fjkj4pk80, uem65po6);
        };
    }
    ;
    function gs6wen48e() {
        this['cache'] = {};
    }
    gs6wen48e['prototype']['store'] = function (ae7jyo8q, jgg92a, fcxl8, fmi5na48) {
        var dgp2uics = this['cache'][ae7jyo8q] || [];
        dgp2uics['push']({
            'P': jgg92a,
            'styleElement': fcxl8,
            'L': fmi5na48
        });
        0x64 < dgp2uics['length'] && dgp2uics['shift']();
        this['cache'][ae7jyo8q] = dgp2uics;
    };
    function vwsx45mjy() {
    }
    var vl3219rw = new RegExp(w53s6t09i['g'] + '\x5cs*([^\x5cs]*)');
    function awcn9t(koe15v9) {
        return (koe15v9 = (koe15v9['classList'] && koe15v9['classList']['value'] ? koe15v9['classList']['value'] : koe15v9['getAttribute']('class') || '')['match'](vl3219rw)) ? koe15v9[0x1] : '';
    }
    function o2k332oe(d2825) {
        var ur1985 = ft3ipj1u1(d2825)['getRootNode']();
        return ur1985 === d2825 || ur1985 === d2825['ownerDocument'] ? '' : (d2825 = ur1985['host']) ? uipc8yq(d2825)['is'] : '';
    }
    function fng0a2ei1(hjsqf) {
        for (var oumy568q = 0x0; oumy568q < hjsqf['length']; oumy568q++) {
            var gv02z82 = hjsqf[oumy568q];
            if (gv02z82['target'] !== document['documentElement'] && gv02z82['target'] !== document['head'])
                for (var vzny4 = 0x0; vzny4 < gv02z82['addedNodes']['length']; vzny4++) {
                    var l3p3shxq = gv02z82['addedNodes'][vzny4];
                    if (l3p3shxq['nodeType'] === Node['ELEMENT_NODE']) {
                        var pn1bb0w = l3p3shxq['getRootNode'](), pdvent4 = awcn9t(l3p3shxq);
                        if (pdvent4 && pn1bb0w === l3p3shxq['ownerDocument'] && ('style' !== l3p3shxq['localName'] && 'template' !== l3p3shxq['localName'] || '' === b88u649m(l3p3shxq)))
                            p09f2u(l3p3shxq, pdvent4);
                        else if (pn1bb0w instanceof ShadowRoot)
                            for (pn1bb0w = o2k332oe(l3p3shxq), pn1bb0w !== pdvent4 && le93lo0t(l3p3shxq, pdvent4, pn1bb0w), l3p3shxq = window['ShadyDOM']['nativeMethods']['querySelectorAll']['call'](l3p3shxq, ':not(.' + w53s6t09i['g'] + ')'), pdvent4 = 0x0; pdvent4 < l3p3shxq['length']; pdvent4++) {
                                pn1bb0w = l3p3shxq[pdvent4];
                                var xpo273v5b = o2k332oe(pn1bb0w);
                                xpo273v5b && y87iq1(pn1bb0w, xpo273v5b);
                            }
                    }
                }
        }
    }
    if (!(qhly11 || window['ShadyDOM'] && window['ShadyDOM']['handlesDynamicScoping'])) {
        var s44rc9qab = new MutationObserver(fng0a2ei1), l56oyia2s = function (bs2j1e36) {
                s44rc9qab['observe'](bs2j1e36, {
                    'childList': !0x0,
                    'subtree': !0x0
                });
            };
        if (window['customElements'] && !window['customElements']['polyfillWrapFlushCallback'])
            l56oyia2s(document);
        else {
            var njg4s = function () {
                l56oyia2s(document['body']);
            };
            window['HTMLImports'] ? window['HTMLImports']['whenReady'](njg4s) : requestAnimationFrame(function () {
                if ('loading' === document['readyState']) {
                    var x433a = function () {
                        njg4s();
                        document['removeEventListener']('readystatechange', x433a);
                    };
                    document['addEventListener']('readystatechange', x433a);
                } else
                    njg4s();
            });
        }
        vwsx45mjy = function () {
            fng0a2ei1(s44rc9qab['takeRecords']());
        };
    }
    ;
    var az66tk = {};
    var zwyqqu9 = Promise['resolve']();
    function v9unp(d53c1go2) {
        if (d53c1go2 = az66tk[d53c1go2])
            d53c1go2['_applyShimCurrentVersion'] = d53c1go2['_applyShimCurrentVersion'] || 0x0, d53c1go2['_applyShimValidatingVersion'] = d53c1go2['_applyShimValidatingVersion'] || 0x0, d53c1go2['_applyShimNextVersion'] = (d53c1go2['_applyShimNextVersion'] || 0x0) + 0x1;
    }
    function qzem2sj(gr4jvb) {
        return gr4jvb['_applyShimCurrentVersion'] === gr4jvb['_applyShimNextVersion'];
    }
    function htssikh(u892s52) {
        u892s52['_applyShimValidatingVersion'] = u892s52['_applyShimNextVersion'];
        u892s52['_validating'] || (u892s52['_validating'] = !0x0, zwyqqu9['then'](function () {
            u892s52['_applyShimCurrentVersion'] = u892s52['_applyShimNextVersion'];
            u892s52['_validating'] = !0x1;
        }));
    }
    ;
    var i75gr3 = {}, jowtkp7on = new gs6wen48e();
    function gmn080q() {
        this['ea'] = {};
        this['i'] = document['documentElement'];
        var f8f5b8x2 = new a57os9o();
        f8f5b8x2['rules'] = [];
        this['u'] = b65sas6(this['i'], new h671z49(f8f5b8x2));
        this['O'] = !0x1;
        this['g'] = this['h'] = null;
    }
    b40918 = gmn080q['prototype'];
    b40918['flush'] = function () {
        vwsx45mjy();
    };
    b40918['bb'] = function (kom4i) {
        return clzr918e5(kom4i);
    };
    b40918['qb'] = function (s2b92) {
        return kwuh6(s2b92);
    };
    b40918['prepareTemplate'] = function (yl2944pu, l9lx2gh, g2hzh3) {
        this['prepareTemplateDom'](yl2944pu, l9lx2gh);
        this['prepareTemplateStyles'](yl2944pu, l9lx2gh, g2hzh3);
    };
    b40918['prepareTemplateStyles'] = function (dwnn59w6, n9755kyq, h3i06zx) {
        if (!dwnn59w6['_prepared'] && !qh3828i) {
            qhly11 || d6d65fx[n9755kyq] || (d6d65fx[n9755kyq] = i6z3nhx4(n9755kyq));
            dwnn59w6['_prepared'] = !0x0;
            dwnn59w6['name'] = n9755kyq;
            dwnn59w6['extends'] = h3i06zx;
            az66tk[n9755kyq] = dwnn59w6;
            var yi24pd = b88u649m(dwnn59w6), r2jyo = k663d(yi24pd);
            h3i06zx = {
                'is': n9755kyq,
                'extends': h3i06zx
            };
            for (var o90cu = [], mzdj9hr9 = dwnn59w6['content']['querySelectorAll']('style'), e49h2 = 0x0; e49h2 < mzdj9hr9['length']; e49h2++) {
                var qy0vm = mzdj9hr9[e49h2];
                if (qy0vm['hasAttribute']('shady-unscoped')) {
                    if (!qhly11) {
                        var j1uzj33 = qy0vm['textContent'];
                        if (!um625['has'](j1uzj33)) {
                            um625['add'](j1uzj33);
                            var p5x89 = document['createElement']('style');
                            p5x89['setAttribute']('shady-unscoped', '');
                            p5x89['textContent'] = j1uzj33;
                            document['head']['appendChild'](p5x89);
                        }
                        qy0vm['parentNode']['removeChild'](qy0vm);
                    }
                } else
                    o90cu['push'](qy0vm['textContent']), qy0vm['parentNode']['removeChild'](qy0vm);
            }
            o90cu = o90cu['join']('')['trim']() + (i75gr3[n9755kyq] || '');
            a681s(this);
            if (!r2jyo) {
                if (mzdj9hr9 = !yi24pd)
                    mzdj9hr9 = i9e1537m['test'](o90cu) || zp923m['test'](o90cu), i9e1537m['lastIndex'] = 0x0, zp923m['lastIndex'] = 0x0;
                e49h2 = h3z4fp104(o90cu);
                mzdj9hr9 && y1qv553 && this['h'] && this['h']['transformRules'](e49h2, n9755kyq);
                dwnn59w6['_styleAst'] = e49h2;
            }
            mzdj9hr9 = [];
            y1qv553 || (mzdj9hr9 = o0atq2(dwnn59w6['_styleAst']));
            if (!mzdj9hr9['length'] || y1qv553)
                e49h2 = qhly11 ? dwnn59w6['content'] : null, n9755kyq = d6d65fx[n9755kyq] || null, yi24pd = av8ov9lu(h3i06zx, dwnn59w6['_styleAst'], null, yi24pd, r2jyo ? o90cu : ''), yi24pd = yi24pd['length'] ? gyvaoyr24(yi24pd, h3i06zx['is'], e49h2, n9755kyq) : null, dwnn59w6['_style'] = yi24pd;
            dwnn59w6['g'] = mzdj9hr9;
        }
    };
    b40918['kb'] = function (q9y21, fc22o6) {
        i75gr3[fc22o6] = q9y21['join']('\x20');
    };
    b40918['prepareTemplateDom'] = function (bsurq2frf, j44dpaz) {
        if (!qh3828i) {
            var x419x4n54 = b88u649m(bsurq2frf);
            qhly11 || 'shady' === x419x4n54 || bsurq2frf['_domPrepared'] || (bsurq2frf['_domPrepared'] = !0x0, v7jg58(bsurq2frf['content'], j44dpaz));
        }
    };
    function gk40i8b33(zo6wav) {
        var p92plm5 = uipc8yq(zo6wav), pw8f3t = p92plm5['is'];
        p92plm5 = p92plm5['ja'];
        var w19s0 = d6d65fx[pw8f3t] || null, lj0q5 = az66tk[pw8f3t];
        if (lj0q5) {
            pw8f3t = lj0q5['_styleAst'];
            var ru8qmm4z7 = lj0q5['g'];
            lj0q5 = b88u649m(lj0q5);
            p92plm5 = new h671z49(pw8f3t, w19s0, ru8qmm4z7, p92plm5, lj0q5);
            b65sas6(zo6wav, p92plm5);
            return p92plm5;
        }
    }
    function o9c1n9(ld1tz0a0) {
        !ld1tz0a0['g'] && window['ShadyCSS'] && window['ShadyCSS']['CustomStyleInterface'] && (ld1tz0a0['g'] = window['ShadyCSS']['CustomStyleInterface'], ld1tz0a0['g']['transformCallback'] = function (v2wl7my) {
            ld1tz0a0['Qa'](v2wl7my);
        }, ld1tz0a0['g']['validateCallback'] = function () {
            requestAnimationFrame(function () {
                (ld1tz0a0['g']['enqueued'] || ld1tz0a0['O']) && ld1tz0a0['flushCustomStyles']();
            });
        });
    }
    function a681s(o4rv29d5x) {
        if (!o4rv29d5x['h'] && window['ShadyCSS'] && window['ShadyCSS']['ApplyShim']) {
            o4rv29d5x['h'] = window['ShadyCSS']['ApplyShim'];
            o4rv29d5x['h']['invalidCallback'] = v9unp;
            var i68h02u84 = !0x0;
        } else
            i68h02u84 = !0x1;
        o9c1n9(o4rv29d5x);
        return i68h02u84;
    }
    b40918['flushCustomStyles'] = function () {
        if (!qh3828i) {
            var h1788g5cl = a681s(this);
            if (this['g']) {
                var fv788c = this['g']['processStyles']();
                if ((h1788g5cl || this['g']['enqueued']) && !k663d(this['u']['cssBuild'])) {
                    if (y1qv553) {
                        if (!this['u']['cssBuild'])
                            for (h1788g5cl = 0x0; h1788g5cl < fv788c['length']; h1788g5cl++) {
                                var o4k87h = this['g']['getStyleForCustomStyle'](fv788c[h1788g5cl]);
                                if (o4k87h && y1qv553 && this['h']) {
                                    var z852z = clzr918e5(o4k87h);
                                    a681s(this);
                                    this['h']['transformRules'](z852z);
                                    o4k87h['textContent'] = kwuh6(z852z);
                                }
                            }
                    } else {
                        fbtxhpb(this, fv788c);
                        a22wx(this, this['i'], this['u']);
                        for (h1788g5cl = 0x0; h1788g5cl < fv788c['length']; h1788g5cl++)
                            (o4k87h = this['g']['getStyleForCustomStyle'](fv788c[h1788g5cl])) && prbnax63(o4k87h, this['u']['R']);
                        this['O'] && this['styleDocument']();
                    }
                    this['g']['enqueued'] = !0x1;
                }
            }
        }
    };
    function fbtxhpb(jv1k711lg, u9u9n) {
        u9u9n = u9u9n['map'](function (r1t4pcua) {
            return jv1k711lg['g']['getStyleForCustomStyle'](r1t4pcua);
        })['filter'](function (s1jq07h9h) {
            return !!s1jq07h9h;
        });
        u9u9n['sort'](function (pt60s, htpvuth) {
            pt60s = htpvuth['compareDocumentPosition'](pt60s);
            return pt60s & Node['DOCUMENT_POSITION_FOLLOWING'] ? 0x1 : pt60s & Node['DOCUMENT_POSITION_PRECEDING'] ? -0x1 : 0x0;
        });
        jv1k711lg['u']['M']['rules'] = u9u9n['map'](function (d417jya) {
            return clzr918e5(d417jya);
        });
    }
    b40918['styleElement'] = function (a439228h, j565k4) {
        if (qh3828i) {
            if (j565k4) {
                a60k394(a439228h) || b65sas6(a439228h, new h671z49(null));
                var uvnu04 = a60k394(a439228h);
                uvnu04['K'] = uvnu04['K'] || {};
                Object['assign'](uvnu04['K'], j565k4);
                loa33130(this, a439228h, uvnu04);
            }
        } else if (uvnu04 = a60k394(a439228h) || gk40i8b33(a439228h))
            if (a439228h !== this['i'] && (this['O'] = !0x0), j565k4 && (uvnu04['K'] = uvnu04['K'] || {}, Object['assign'](uvnu04['K'], j565k4)), y1qv553)
                loa33130(this, a439228h, uvnu04);
            else if (this['flush'](), a22wx(this, a439228h, uvnu04), uvnu04['Ca'] && uvnu04['Ca']['length']) {
                j565k4 = uipc8yq(a439228h)['is'];
                var bj3q2p12;
                grstc4u: {
                    if (bj3q2p12 = jowtkp7on['cache'][j565k4])
                        for (var x1235c = bj3q2p12['length'] - 0x1; 0x0 <= x1235c; x1235c--) {
                            var j15c0 = bj3q2p12[x1235c];
                            q90j6cw: {
                                var zx42dkg9 = uvnu04['Ca'];
                                for (var b9vc19bkp = 0x0; b9vc19bkp < zx42dkg9['length']; b9vc19bkp++) {
                                    var nsfj1 = zx42dkg9[b9vc19bkp];
                                    if (j15c0['P'][nsfj1] !== uvnu04['R'][nsfj1]) {
                                        zx42dkg9 = !0x1;
                                        break q90j6cw;
                                    }
                                }
                                zx42dkg9 = !0x0;
                            }
                            if (zx42dkg9) {
                                bj3q2p12 = j15c0;
                                break grstc4u;
                            }
                        }
                    bj3q2p12 = void 0x0;
                }
                zx42dkg9 = bj3q2p12 ? bj3q2p12['styleElement'] : null;
                x1235c = uvnu04['L'];
                (j15c0 = bj3q2p12 && bj3q2p12['L']) || (j15c0 = this['ea'][j565k4] = (this['ea'][j565k4] || 0x0) + 0x1, j15c0 = j565k4 + '-' + j15c0);
                uvnu04['L'] = j15c0;
                j15c0 = uvnu04['L'];
                b9vc19bkp = fkt2h;
                b9vc19bkp = zx42dkg9 ? zx42dkg9['textContent'] || '' : inq3p8ll(b9vc19bkp, a439228h, uvnu04['R'], j15c0);
                nsfj1 = a60k394(a439228h);
                var pa88s9 = nsfj1['g'];
                pa88s9 && !qhly11 && pa88s9 !== zx42dkg9 && (pa88s9['_useCount']--, 0x0 >= pa88s9['_useCount'] && pa88s9['parentNode'] && pa88s9['parentNode']['removeChild'](pa88s9));
                qhly11 ? nsfj1['g'] ? (nsfj1['g']['textContent'] = b9vc19bkp, zx42dkg9 = nsfj1['g']) : b9vc19bkp && (zx42dkg9 = gyvaoyr24(b9vc19bkp, j15c0, a439228h['shadowRoot'], nsfj1['h'])) : zx42dkg9 ? zx42dkg9['parentNode'] || (b382e7x50 && -0x1 < b9vc19bkp['indexOf']('@media') && (zx42dkg9['textContent'] = b9vc19bkp), h1c3gr(zx42dkg9, null, nsfj1['h'])) : b9vc19bkp && (zx42dkg9 = gyvaoyr24(b9vc19bkp, j15c0, null, nsfj1['h']));
                zx42dkg9 && (zx42dkg9['_useCount'] = zx42dkg9['_useCount'] || 0x0, nsfj1['g'] != zx42dkg9 && zx42dkg9['_useCount']++, nsfj1['g'] = zx42dkg9);
                j15c0 = zx42dkg9;
                qhly11 || (zx42dkg9 = uvnu04['L'], nsfj1 = b9vc19bkp = a439228h['getAttribute']('class') || '', x1235c && (nsfj1 = b9vc19bkp['replace'](new RegExp('\x5cs*x-scope\x5cs*' + x1235c + '\x5cs*', 'g'), '\x20')), nsfj1 += (nsfj1 ? '\x20' : '') + 'x-scope\x20' + zx42dkg9, b9vc19bkp !== nsfj1 && o1448c(a439228h, nsfj1));
                bj3q2p12 || jowtkp7on['store'](j565k4, uvnu04['R'], j15c0, uvnu04['L']);
            }
    };
    function loa33130(l032c4, t4i226, r5vbf8c2s) {
        var j7l446e5 = uipc8yq(t4i226)['is'];
        if (r5vbf8c2s['K']) {
            var axh5psx = r5vbf8c2s['K'], str3k67eu;
            for (str3k67eu in axh5psx)
                null === str3k67eu ? t4i226['style']['removeProperty'](str3k67eu) : t4i226['style']['setProperty'](str3k67eu, axh5psx[str3k67eu]);
        }
        axh5psx = az66tk[j7l446e5];
        if (!(!axh5psx && t4i226 !== l032c4['i'] || axh5psx && '' !== b88u649m(axh5psx)) && axh5psx && axh5psx['_style'] && !qzem2sj(axh5psx)) {
            if (qzem2sj(axh5psx) || axh5psx['_applyShimValidatingVersion'] !== axh5psx['_applyShimNextVersion'])
                a681s(l032c4), l032c4['h'] && l032c4['h']['transformRules'](axh5psx['_styleAst'], j7l446e5), axh5psx['_style']['textContent'] = av8ov9lu(t4i226, r5vbf8c2s['M']), htssikh(axh5psx);
            qhly11 && (l032c4 = t4i226['shadowRoot']) && (l032c4 = l032c4['querySelector']('style')) && (l032c4['textContent'] = av8ov9lu(t4i226, r5vbf8c2s['M']));
            r5vbf8c2s['M'] = axh5psx['_styleAst'];
        }
    }
    function ot997k(vdz73, up380w1qf) {
        return (up380w1qf = ft3ipj1u1(up380w1qf)['getRootNode']()['host']) ? a60k394(up380w1qf) || gk40i8b33(up380w1qf) ? up380w1qf : ot997k(vdz73, up380w1qf) : vdz73['i'];
    }
    function a22wx(r66cj, rb9p168rh, w6qcmd76z) {
        var rmvdl7w = ot997k(r66cj, rb9p168rh), t62e1 = a60k394(rmvdl7w), p77dki8fe = t62e1['R'];
        rmvdl7w === r66cj['i'] || p77dki8fe || (a22wx(r66cj, rmvdl7w, t62e1), p77dki8fe = t62e1['R']);
        r66cj = Object['create'](p77dki8fe || null);
        rmvdl7w = g1wut(rb9p168rh, w6qcmd76z['M'], w6qcmd76z['cssBuild']);
        rb9p168rh = uo2l0d631(t62e1['M'], rb9p168rh)['P'];
        Object['assign'](r66cj, rmvdl7w['eb'], rb9p168rh, rmvdl7w['mb']);
        rb9p168rh = w6qcmd76z['K'];
        for (var fhjlo in rb9p168rh)
            if ((t62e1 = rb9p168rh[fhjlo]) || 0x0 === t62e1)
                r66cj[fhjlo] = t62e1;
        fhjlo = fkt2h;
        rb9p168rh = Object['getOwnPropertyNames'](r66cj);
        for (t62e1 = 0x0; t62e1 < rb9p168rh['length']; t62e1++)
            rmvdl7w = rb9p168rh[t62e1], r66cj[rmvdl7w] = s6bukl(fhjlo, r66cj[rmvdl7w], r66cj);
        w6qcmd76z['R'] = r66cj;
    }
    b40918['styleDocument'] = function (ugmiz3t43) {
        this['styleSubtree'](this['i'], ugmiz3t43);
    };
    b40918['styleSubtree'] = function (m987gnk9, y0q8j16) {
        var t1tdl5k = ft3ipj1u1(m987gnk9), o12w613j = t1tdl5k['shadowRoot'], ic942p = m987gnk9 === this['i'];
        (o12w613j || ic942p) && this['styleElement'](m987gnk9, y0q8j16);
        if (m987gnk9 = ic942p ? t1tdl5k : o12w613j)
            for (m987gnk9 = Array['from'](m987gnk9['querySelectorAll']('*'))['filter'](function (d9ref7o4) {
                    return ft3ipj1u1(d9ref7o4)['shadowRoot'];
                }), y0q8j16 = 0x0; y0q8j16 < m987gnk9['length']; y0q8j16++)
                this['styleSubtree'](m987gnk9[y0q8j16]);
    };
    b40918['Qa'] = function (ij714mrdk) {
        var q21e1 = this, a3matz = b88u649m(ij714mrdk);
        a3matz !== this['u']['cssBuild'] && (this['u']['cssBuild'] = a3matz);
        if (!k663d(a3matz)) {
            var c0z5u92 = clzr918e5(ij714mrdk);
            ukhf6yzrh(c0z5u92, function (lmo6bw3o6) {
                if (qhly11)
                    c777375(lmo6bw3o6);
                else {
                    var tj438 = w53s6t09i;
                    lmo6bw3o6['selector'] = lmo6bw3o6['parsedSelector'];
                    c777375(lmo6bw3o6);
                    lmo6bw3o6['selector'] = lmo6bw3o6['G'] = bkw4bx7y(tj438, lmo6bw3o6, tj438['i'], void 0x0, void 0x0);
                }
                y1qv553 && '' === a3matz && (a681s(q21e1), q21e1['h'] && q21e1['h']['transformRule'](lmo6bw3o6));
            });
            y1qv553 ? ij714mrdk['textContent'] = kwuh6(c0z5u92) : this['u']['M']['rules']['push'](c0z5u92);
        }
    };
    b40918['getComputedStyleValue'] = function (z05aq91, kqz7y2) {
        var iz48infh;
        y1qv553 || (iz48infh = (a60k394(z05aq91) || a60k394(ot997k(this, z05aq91)))['R'][kqz7y2]);
        return (iz48infh = iz48infh || window['getComputedStyle'](z05aq91)['getPropertyValue'](kqz7y2)) ? iz48infh['trim']() : '';
    };
    b40918['pb'] = function (fnhxacb, vvbjh1j) {
        var j609b24h = ft3ipj1u1(fnhxacb)['getRootNode']();
        vvbjh1j = vvbjh1j ? ('string' === typeof vvbjh1j ? vvbjh1j : String(vvbjh1j))['split'](/\s/) : [];
        j609b24h = j609b24h['host'] && j609b24h['host']['localName'];
        if (!j609b24h) {
            var j80xe0xc = fnhxacb['getAttribute']('class');
            if (j80xe0xc) {
                j80xe0xc = j80xe0xc['split'](/\s/);
                for (var td92b = 0x0; td92b < j80xe0xc['length']; td92b++)
                    if (j80xe0xc[td92b] === w53s6t09i['g']) {
                        j609b24h = j80xe0xc[td92b + 0x1];
                        break;
                    }
            }
        }
        j609b24h && vvbjh1j['push'](w53s6t09i['g'], j609b24h);
        y1qv553 || (j609b24h = a60k394(fnhxacb)) && j609b24h['L'] && vvbjh1j['push'](fkt2h['g'], j609b24h['L']);
        o1448c(fnhxacb, vvbjh1j['join']('\x20'));
    };
    b40918['Xa'] = function (ff8m8m) {
        return a60k394(ff8m8m);
    };
    b40918['ob'] = function (bp043a5, u2oyw) {
        y87iq1(bp043a5, u2oyw);
    };
    b40918['rb'] = function (ltwq82, ju513r6) {
        y87iq1(ltwq82, ju513r6, !0x0);
    };
    b40918['nb'] = function (b4u49es6r) {
        return o2k332oe(b4u49es6r);
    };
    b40918['$a'] = function (pr0v3v) {
        return awcn9t(pr0v3v);
    };
    gmn080q['prototype']['flush'] = gmn080q['prototype']['flush'];
    gmn080q['prototype']['prepareTemplate'] = gmn080q['prototype']['prepareTemplate'];
    gmn080q['prototype']['styleElement'] = gmn080q['prototype']['styleElement'];
    gmn080q['prototype']['styleDocument'] = gmn080q['prototype']['styleDocument'];
    gmn080q['prototype']['styleSubtree'] = gmn080q['prototype']['styleSubtree'];
    gmn080q['prototype']['getComputedStyleValue'] = gmn080q['prototype']['getComputedStyleValue'];
    gmn080q['prototype']['setElementClass'] = gmn080q['prototype']['pb'];
    gmn080q['prototype']['_styleInfoForNode'] = gmn080q['prototype']['Xa'];
    gmn080q['prototype']['transformCustomStyleForDocument'] = gmn080q['prototype']['Qa'];
    gmn080q['prototype']['getStyleAst'] = gmn080q['prototype']['bb'];
    gmn080q['prototype']['styleAstToString'] = gmn080q['prototype']['qb'];
    gmn080q['prototype']['flushCustomStyles'] = gmn080q['prototype']['flushCustomStyles'];
    gmn080q['prototype']['scopeNode'] = gmn080q['prototype']['ob'];
    gmn080q['prototype']['unscopeNode'] = gmn080q['prototype']['rb'];
    gmn080q['prototype']['scopeForNode'] = gmn080q['prototype']['nb'];
    gmn080q['prototype']['currentScopeForNode'] = gmn080q['prototype']['$a'];
    gmn080q['prototype']['prepareAdoptedCssText'] = gmn080q['prototype']['kb'];
    Object['defineProperties'](gmn080q['prototype'], {
        'nativeShadow': {
            'get': function () {
                return qhly11;
            }
        },
        'nativeCss': {
            'get': function () {
                return y1qv553;
            }
        }
    });
    var u72s1 = new gmn080q(), jd03uv9, l7a5p2;
    window['ShadyCSS'] && (jd03uv9 = window['ShadyCSS']['ApplyShim'], l7a5p2 = window['ShadyCSS']['CustomStyleInterface']);
    window['ShadyCSS'] = {
        'ScopingShim': u72s1,
        'prepareTemplate': function (j8r6gf8, ce536fv, i6h2qvwcy) {
            u72s1['flushCustomStyles']();
            u72s1['prepareTemplate'](j8r6gf8, ce536fv, i6h2qvwcy);
        },
        'prepareTemplateDom': function (e592662jn, nt88q) {
            u72s1['prepareTemplateDom'](e592662jn, nt88q);
        },
        'prepareTemplateStyles': function (c87092, dz4128, p21126165) {
            u72s1['flushCustomStyles']();
            u72s1['prepareTemplateStyles'](c87092, dz4128, p21126165);
        },
        'styleSubtree': function (lk0a0f1xg, t404n) {
            u72s1['flushCustomStyles']();
            u72s1['styleSubtree'](lk0a0f1xg, t404n);
        },
        'styleElement': function (f3v2k7i55) {
            u72s1['flushCustomStyles']();
            u72s1['styleElement'](f3v2k7i55);
        },
        'styleDocument': function (f37ldg) {
            u72s1['flushCustomStyles']();
            u72s1['styleDocument'](f37ldg);
        },
        'flushCustomStyles': function () {
            u72s1['flushCustomStyles']();
        },
        'getComputedStyleValue': function (a69y37, h39k4) {
            return u72s1['getComputedStyleValue'](a69y37, h39k4);
        },
        'nativeCss': y1qv553,
        'nativeShadow': qhly11,
        'cssBuild': gwh3d1kjs,
        'disableRuntime': qh3828i
    };
    jd03uv9 && (window['ShadyCSS']['ApplyShim'] = jd03uv9);
    l7a5p2 && (window['ShadyCSS']['CustomStyleInterface'] = l7a5p2);
    (function (vzgc1rt67) {
        function l01a7(y0n4p74s) {
            '' == y0n4p74s && (aa1njps9['call'](this), this['m'] = !0x0);
            return y0n4p74s['toLowerCase']();
        }
        function ap19ds(j6p517) {
            var l91e1m3 = j6p517['charCodeAt'](0x0);
            return 0x20 < l91e1m3 && 0x7f > l91e1m3 && -0x1 == [
                0x22,
                0x23,
                0x3c,
                0x3e,
                0x3f,
                0x60
            ]['indexOf'](l91e1m3) ? j6p517 : encodeURIComponent(j6p517);
        }
        function t27h47b(kdb6r8729) {
            var u5zu53 = kdb6r8729['charCodeAt'](0x0);
            return 0x20 < u5zu53 && 0x7f > u5zu53 && -0x1 == [
                0x22,
                0x23,
                0x3c,
                0x3e,
                0x60
            ]['indexOf'](u5zu53) ? kdb6r8729 : encodeURIComponent(kdb6r8729);
        }
        function p00z9806e(mtyfg08u1, jqbk598, w4nre06b0) {
            function o7pzm(a2vfjq57) {
                l6884bo['push'](a2vfjq57);
            }
            var pa3z3si = jqbk598 || 'scheme\x20start', p1v396b = 0x0, hkv1k5j66 = '', l67rw3bbv = !0x1, q2150d1 = !0x1, l6884bo = [];
            ctb998z8:
                for (; (void 0x0 != mtyfg08u1[p1v396b - 0x1] || 0x0 == p1v396b) && !this['m'];) {
                    var hkkws1s = mtyfg08u1[p1v396b];
                    switch (pa3z3si) {
                    case 'scheme\x20start':
                        if (hkkws1s && v0a4mwp['test'](hkkws1s))
                            hkv1k5j66 += hkkws1s['toLowerCase'](), pa3z3si = 'scheme';
                        else if (jqbk598) {
                            o7pzm('Invalid\x20scheme.');
                            break ctb998z8;
                        } else {
                            hkv1k5j66 = '';
                            pa3z3si = 'no\x20scheme';
                            continue;
                        }
                        break;
                    case 'scheme':
                        if (hkkws1s && q4ubnht9['test'](hkkws1s))
                            hkv1k5j66 += hkkws1s['toLowerCase']();
                        else if (':' == hkkws1s) {
                            this['l'] = hkv1k5j66;
                            hkv1k5j66 = '';
                            if (jqbk598)
                                break ctb998z8;
                            void 0x0 !== phmmq8[this['l']] && (this['H'] = !0x0);
                            pa3z3si = 'file' == this['l'] ? 'relative' : this['H'] && w4nre06b0 && w4nre06b0['l'] == this['l'] ? 'relative\x20or\x20authority' : this['H'] ? 'authority\x20first\x20slash' : 'scheme\x20data';
                        } else if (jqbk598) {
                            void 0x0 != hkkws1s && o7pzm('Code\x20point\x20not\x20allowed\x20in\x20scheme:\x20' + hkkws1s);
                            break ctb998z8;
                        } else {
                            hkv1k5j66 = '';
                            p1v396b = 0x0;
                            pa3z3si = 'no\x20scheme';
                            continue;
                        }
                        break;
                    case 'scheme\x20data':
                        '?' == hkkws1s ? (this['A'] = '?', pa3z3si = 'query') : '#' == hkkws1s ? (this['C'] = '#', pa3z3si = 'fragment') : void 0x0 != hkkws1s && '\x09' != hkkws1s && '\x0a' != hkkws1s && '\x0d' != hkkws1s && (this['ya'] += ap19ds(hkkws1s));
                        break;
                    case 'no\x20scheme':
                        if (w4nre06b0 && void 0x0 !== phmmq8[w4nre06b0['l']]) {
                            pa3z3si = 'relative';
                            continue;
                        } else
                            o7pzm('Missing\x20scheme.'), aa1njps9['call'](this), this['m'] = !0x0;
                        break;
                    case 'relative\x20or\x20authority':
                        if ('/' == hkkws1s && '/' == mtyfg08u1[p1v396b + 0x1])
                            pa3z3si = 'authority\x20ignore\x20slashes';
                        else {
                            o7pzm('Expected\x20/,\x20got:\x20' + hkkws1s);
                            pa3z3si = 'relative';
                            continue;
                        }
                        break;
                    case 'relative':
                        this['H'] = !0x0;
                        'file' != this['l'] && (this['l'] = w4nre06b0['l']);
                        if (void 0x0 == hkkws1s) {
                            this['o'] = w4nre06b0['o'];
                            this['v'] = w4nre06b0['v'];
                            this['s'] = w4nre06b0['s']['slice']();
                            this['A'] = w4nre06b0['A'];
                            this['B'] = w4nre06b0['B'];
                            this['j'] = w4nre06b0['j'];
                            break ctb998z8;
                        } else if ('/' == hkkws1s || '\x5c' == hkkws1s)
                            '\x5c' == hkkws1s && o7pzm('\x5c\x20is\x20an\x20invalid\x20code\x20point.'), pa3z3si = 'relative\x20slash';
                        else if ('?' == hkkws1s)
                            this['o'] = w4nre06b0['o'], this['v'] = w4nre06b0['v'], this['s'] = w4nre06b0['s']['slice'](), this['A'] = '?', this['B'] = w4nre06b0['B'], this['j'] = w4nre06b0['j'], pa3z3si = 'query';
                        else if ('#' == hkkws1s)
                            this['o'] = w4nre06b0['o'], this['v'] = w4nre06b0['v'], this['s'] = w4nre06b0['s']['slice'](), this['A'] = w4nre06b0['A'], this['C'] = '#', this['B'] = w4nre06b0['B'], this['j'] = w4nre06b0['j'], pa3z3si = 'fragment';
                        else {
                            pa3z3si = mtyfg08u1[p1v396b + 0x1];
                            var mx6p9 = mtyfg08u1[p1v396b + 0x2];
                            if ('file' != this['l'] || !v0a4mwp['test'](hkkws1s) || ':' != pa3z3si && '|' != pa3z3si || void 0x0 != mx6p9 && '/' != mx6p9 && '\x5c' != mx6p9 && '?' != mx6p9 && '#' != mx6p9)
                                this['o'] = w4nre06b0['o'], this['v'] = w4nre06b0['v'], this['B'] = w4nre06b0['B'], this['j'] = w4nre06b0['j'], this['s'] = w4nre06b0['s']['slice'](), this['s']['pop']();
                            pa3z3si = 'relative\x20path';
                            continue;
                        }
                        break;
                    case 'relative\x20slash':
                        if ('/' == hkkws1s || '\x5c' == hkkws1s)
                            '\x5c' == hkkws1s && o7pzm('\x5c\x20is\x20an\x20invalid\x20code\x20point.'), pa3z3si = 'file' == this['l'] ? 'file\x20host' : 'authority\x20ignore\x20slashes';
                        else {
                            'file' != this['l'] && (this['o'] = w4nre06b0['o'], this['v'] = w4nre06b0['v'], this['B'] = w4nre06b0['B'], this['j'] = w4nre06b0['j']);
                            pa3z3si = 'relative\x20path';
                            continue;
                        }
                        break;
                    case 'authority\x20first\x20slash':
                        if ('/' == hkkws1s)
                            pa3z3si = 'authority\x20second\x20slash';
                        else {
                            o7pzm('Expected\x20\x27/\x27,\x20got:\x20' + hkkws1s);
                            pa3z3si = 'authority\x20ignore\x20slashes';
                            continue;
                        }
                        break;
                    case 'authority\x20second\x20slash':
                        pa3z3si = 'authority\x20ignore\x20slashes';
                        if ('/' != hkkws1s) {
                            o7pzm('Expected\x20\x27/\x27,\x20got:\x20' + hkkws1s);
                            continue;
                        }
                        break;
                    case 'authority\x20ignore\x20slashes':
                        if ('/' != hkkws1s && '\x5c' != hkkws1s) {
                            pa3z3si = 'authority';
                            continue;
                        } else
                            o7pzm('Expected\x20authority,\x20got:\x20' + hkkws1s);
                        break;
                    case 'authority':
                        if ('@' == hkkws1s) {
                            l67rw3bbv && (o7pzm('@\x20already\x20seen.'), hkv1k5j66 += '%40');
                            l67rw3bbv = !0x0;
                            for (hkkws1s = 0x0; hkkws1s < hkv1k5j66['length']; hkkws1s++)
                                mx6p9 = hkv1k5j66[hkkws1s], '\x09' == mx6p9 || '\x0a' == mx6p9 || '\x0d' == mx6p9 ? o7pzm('Invalid\x20whitespace\x20in\x20authority.') : ':' == mx6p9 && null === this['j'] ? this['j'] = '' : (mx6p9 = ap19ds(mx6p9), null !== this['j'] ? this['j'] += mx6p9 : this['B'] += mx6p9);
                            hkv1k5j66 = '';
                        } else if (void 0x0 == hkkws1s || '/' == hkkws1s || '\x5c' == hkkws1s || '?' == hkkws1s || '#' == hkkws1s) {
                            p1v396b -= hkv1k5j66['length'];
                            hkv1k5j66 = '';
                            pa3z3si = 'host';
                            continue;
                        } else
                            hkv1k5j66 += hkkws1s;
                        break;
                    case 'file\x20host':
                        if (void 0x0 == hkkws1s || '/' == hkkws1s || '\x5c' == hkkws1s || '?' == hkkws1s || '#' == hkkws1s) {
                            0x2 != hkv1k5j66['length'] || !v0a4mwp['test'](hkv1k5j66[0x0]) || ':' != hkv1k5j66[0x1] && '|' != hkv1k5j66[0x1] ? (0x0 != hkv1k5j66['length'] && (this['o'] = l01a7['call'](this, hkv1k5j66), hkv1k5j66 = ''), pa3z3si = 'relative\x20path\x20start') : pa3z3si = 'relative\x20path';
                            continue;
                        } else
                            '\x09' == hkkws1s || '\x0a' == hkkws1s || '\x0d' == hkkws1s ? o7pzm('Invalid\x20whitespace\x20in\x20file\x20host.') : hkv1k5j66 += hkkws1s;
                        break;
                    case 'host':
                    case 'hostname':
                        if (':' != hkkws1s || q2150d1)
                            if (void 0x0 == hkkws1s || '/' == hkkws1s || '\x5c' == hkkws1s || '?' == hkkws1s || '#' == hkkws1s) {
                                this['o'] = l01a7['call'](this, hkv1k5j66);
                                hkv1k5j66 = '';
                                pa3z3si = 'relative\x20path\x20start';
                                if (jqbk598)
                                    break ctb998z8;
                                continue;
                            } else
                                '\x09' != hkkws1s && '\x0a' != hkkws1s && '\x0d' != hkkws1s ? ('[' == hkkws1s ? q2150d1 = !0x0 : ']' == hkkws1s && (q2150d1 = !0x1), hkv1k5j66 += hkkws1s) : o7pzm('Invalid\x20code\x20point\x20in\x20host/hostname:\x20' + hkkws1s);
                        else if (this['o'] = l01a7['call'](this, hkv1k5j66), hkv1k5j66 = '', pa3z3si = 'port', 'hostname' == jqbk598)
                            break ctb998z8;
                        break;
                    case 'port':
                        if (/[0-9]/['test'](hkkws1s))
                            hkv1k5j66 += hkkws1s;
                        else if (void 0x0 == hkkws1s || '/' == hkkws1s || '\x5c' == hkkws1s || '?' == hkkws1s || '#' == hkkws1s || jqbk598) {
                            '' != hkv1k5j66 && (hkv1k5j66 = parseInt(hkv1k5j66, 0xa), hkv1k5j66 != phmmq8[this['l']] && (this['v'] = hkv1k5j66 + ''), hkv1k5j66 = '');
                            if (jqbk598)
                                break ctb998z8;
                            pa3z3si = 'relative\x20path\x20start';
                            continue;
                        } else
                            '\x09' == hkkws1s || '\x0a' == hkkws1s || '\x0d' == hkkws1s ? o7pzm('Invalid\x20code\x20point\x20in\x20port:\x20' + hkkws1s) : (aa1njps9['call'](this), this['m'] = !0x0);
                        break;
                    case 'relative\x20path\x20start':
                        '\x5c' == hkkws1s && o7pzm('\x27\x5c\x27\x20not\x20allowed\x20in\x20path.');
                        pa3z3si = 'relative\x20path';
                        if ('/' != hkkws1s && '\x5c' != hkkws1s)
                            continue;
                        break;
                    case 'relative\x20path':
                        if (void 0x0 != hkkws1s && '/' != hkkws1s && '\x5c' != hkkws1s && (jqbk598 || '?' != hkkws1s && '#' != hkkws1s))
                            '\x09' != hkkws1s && '\x0a' != hkkws1s && '\x0d' != hkkws1s && (hkv1k5j66 += ap19ds(hkkws1s));
                        else {
                            '\x5c' == hkkws1s && o7pzm('\x5c\x20not\x20allowed\x20in\x20relative\x20path.');
                            if (mx6p9 = msxe2apae[hkv1k5j66['toLowerCase']()])
                                hkv1k5j66 = mx6p9;
                            '..' == hkv1k5j66 ? (this['s']['pop'](), '/' != hkkws1s && '\x5c' != hkkws1s && this['s']['push']('')) : '.' == hkv1k5j66 && '/' != hkkws1s && '\x5c' != hkkws1s ? this['s']['push']('') : '.' != hkv1k5j66 && ('file' == this['l'] && 0x0 == this['s']['length'] && 0x2 == hkv1k5j66['length'] && v0a4mwp['test'](hkv1k5j66[0x0]) && '|' == hkv1k5j66[0x1] && (hkv1k5j66 = hkv1k5j66[0x0] + ':'), this['s']['push'](hkv1k5j66));
                            hkv1k5j66 = '';
                            '?' == hkkws1s ? (this['A'] = '?', pa3z3si = 'query') : '#' == hkkws1s && (this['C'] = '#', pa3z3si = 'fragment');
                        }
                        break;
                    case 'query':
                        jqbk598 || '#' != hkkws1s ? void 0x0 != hkkws1s && '\x09' != hkkws1s && '\x0a' != hkkws1s && '\x0d' != hkkws1s && (this['A'] += t27h47b(hkkws1s)) : (this['C'] = '#', pa3z3si = 'fragment');
                        break;
                    case 'fragment':
                        void 0x0 != hkkws1s && '\x09' != hkkws1s && '\x0a' != hkkws1s && '\x0d' != hkkws1s && (this['C'] += hkkws1s);
                    }
                    p1v396b++;
                }
        }
        function aa1njps9() {
            this['B'] = this['ya'] = this['l'] = '';
            this['j'] = null;
            this['v'] = this['o'] = '';
            this['s'] = [];
            this['C'] = this['A'] = '';
            this['H'] = this['m'] = !0x1;
        }
        function p7dy0p48(si4cr34, gb0v8u) {
            void 0x0 === gb0v8u || gb0v8u instanceof p7dy0p48 || (gb0v8u = new p7dy0p48(String(gb0v8u)));
            this['g'] = si4cr34;
            aa1njps9['call'](this);
            p00z9806e['call'](this, this['g']['replace'](/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, ''), null, gb0v8u);
        }
        var jy7xx9u06 = !0x1;
        try {
            var mz6y84d = new URL('b', 'http://a');
            mz6y84d['pathname'] = 'c%20d';
            jy7xx9u06 = 'http://a/c%20d' === mz6y84d['href'];
        } catch (j05pf80) {
        }
        if (!jy7xx9u06) {
            var phmmq8 = Object['create'](null);
            phmmq8['ftp'] = 0x15;
            phmmq8['file'] = 0x0;
            phmmq8['gopher'] = 0x46;
            phmmq8['http'] = 0x50;
            phmmq8['https'] = 0x1bb;
            phmmq8['ws'] = 0x50;
            phmmq8['wss'] = 0x1bb;
            var msxe2apae = Object['create'](null);
            msxe2apae['%2e'] = '.';
            msxe2apae['.%2e'] = '..';
            msxe2apae['%2e.'] = '..';
            msxe2apae['%2e%2e'] = '..';
            var v0a4mwp = /[a-zA-Z]/, q4ubnht9 = /[a-zA-Z0-9+\-.]/;
            p7dy0p48['prototype'] = {
                'toString': function () {
                    return this['href'];
                },
                get 'href'() {
                    if (this['m'])
                        return this['g'];
                    var p8z3p = '';
                    if ('' != this['B'] || null != this['j'])
                        p8z3p = this['B'] + (null != this['j'] ? ':' + this['j'] : '') + '@';
                    return this['protocol'] + (this['H'] ? '//' + p8z3p + this['host'] : '') + this['pathname'] + this['A'] + this['C'];
                },
                set 'href'(p6qvw7f2r) {
                    aa1njps9['call'](this);
                    p00z9806e['call'](this, p6qvw7f2r);
                },
                get 'protocol'() {
                    return this['l'] + ':';
                },
                set 'protocol'(n9a93b) {
                    this['m'] || p00z9806e['call'](this, n9a93b + ':', 'scheme\x20start');
                },
                get 'host'() {
                    return this['m'] ? '' : this['v'] ? this['o'] + ':' + this['v'] : this['o'];
                },
                set 'host'(rm306ey) {
                    !this['m'] && this['H'] && p00z9806e['call'](this, rm306ey, 'host');
                },
                get 'hostname'() {
                    return this['o'];
                },
                set 'hostname'(fdg655) {
                    !this['m'] && this['H'] && p00z9806e['call'](this, fdg655, 'hostname');
                },
                get 'port'() {
                    return this['v'];
                },
                set 'port'(mh776a9d2) {
                    !this['m'] && this['H'] && p00z9806e['call'](this, mh776a9d2, 'port');
                },
                get 'pathname'() {
                    return this['m'] ? '' : this['H'] ? '/' + this['s']['join']('/') : this['ya'];
                },
                set 'pathname'(jq6u6nk0e) {
                    !this['m'] && this['H'] && (this['s'] = [], p00z9806e['call'](this, jq6u6nk0e, 'relative\x20path\x20start'));
                },
                get 'search'() {
                    return this['m'] || !this['A'] || '?' == this['A'] ? '' : this['A'];
                },
                set 'search'(xm859u2) {
                    !this['m'] && this['H'] && (this['A'] = '?', '?' == xm859u2[0x0] && (xm859u2 = xm859u2['slice'](0x1)), p00z9806e['call'](this, xm859u2, 'query'));
                },
                get 'hash'() {
                    return this['m'] || !this['C'] || '#' == this['C'] ? '' : this['C'];
                },
                set 'hash'(srw6i4) {
                    this['m'] || (srw6i4 ? (this['C'] = '#', '#' == srw6i4[0x0] && (srw6i4 = srw6i4['slice'](0x1)), p00z9806e['call'](this, srw6i4, 'fragment')) : this['C'] = '');
                },
                get 'origin'() {
                    var wj0h153;
                    if (this['m'] || !this['l'])
                        return '';
                    switch (this['l']) {
                    case 'data':
                    case 'file':
                    case 'javascript':
                    case 'mailto':
                        return 'null';
                    }
                    return (wj0h153 = this['host']) ? this['l'] + '://' + wj0h153 : '';
                }
            };
            var vw3x904 = vzgc1rt67['URL'];
            vw3x904 && (p7dy0p48['createObjectURL'] = function (l8d655g) {
                return vw3x904['createObjectURL']['apply'](vw3x904, arguments);
            }, p7dy0p48['revokeObjectURL'] = function (pfjbixfv) {
                vw3x904['revokeObjectURL'](pfjbixfv);
            });
            vzgc1rt67['URL'] = p7dy0p48;
        }
    }(window));
    var m5415b = window['customElements'], c181s236 = !0x1, uwk20v6w = null;
    m5415b['polyfillWrapFlushCallback'] && m5415b['polyfillWrapFlushCallback'](function (o6w94ye7) {
        uwk20v6w = o6w94ye7;
        c181s236 && o6w94ye7();
    });
    function lkr1jh() {
        window['HTMLTemplateElement']['bootstrap'] && window['HTMLTemplateElement']['bootstrap'](window['document']);
        uwk20v6w && uwk20v6w();
        c181s236 = !0x0;
        window['WebComponents']['ready'] = !0x0;
        document['dispatchEvent'](new CustomEvent('WebComponentsReady', { 'bubbles': !0x0 }));
    }
    'complete' !== document['readyState'] ? (window['addEventListener']('load', lkr1jh), window['addEventListener']('DOMContentLoaded', function () {
        window['removeEventListener']('load', lkr1jh);
        lkr1jh();
    })) : lkr1jh();
}['call'](this));
(function eg5my3p(sw686, amqdmu) {
    if (typeof exports === 'object' && typeof module === 'object')
        module['exports'] = amqdmu();
    else if (typeof define === 'function' && define['amd'])
        define([], amqdmu);
    else if (typeof exports === 'object')
        exports['Pusher'] = amqdmu();
    else
        sw686['Pusher'] = amqdmu();
}(window, function () {
    return function (x4lni) {
        var t988195f = {};
        function u18193ex(n0cm12ec) {
            if (t988195f[n0cm12ec]) {
                return t988195f[n0cm12ec]['exports'];
            }
            var o9q75hla = t988195f[n0cm12ec] = {
                'i': n0cm12ec,
                'l': ![],
                'exports': {}
            };
            x4lni[n0cm12ec]['call'](o9q75hla['exports'], o9q75hla, o9q75hla['exports'], u18193ex);
            o9q75hla['l'] = !![];
            return o9q75hla['exports'];
        }
        u18193ex['m'] = x4lni;
        u18193ex['c'] = t988195f;
        u18193ex['d'] = function (x17k1rg, nwlod, r8097) {
            if (!u18193ex['o'](x17k1rg, nwlod)) {
                Object['defineProperty'](x17k1rg, nwlod, {
                    'enumerable': !![],
                    'get': r8097
                });
            }
        };
        u18193ex['r'] = function (i5mmk) {
            if (typeof Symbol !== 'undefined' && Symbol['toStringTag']) {
                Object['defineProperty'](i5mmk, Symbol['toStringTag'], { 'value': 'Module' });
            }
            Object['defineProperty'](i5mmk, '__esModule', { 'value': !![] });
        };
        u18193ex['t'] = function (c5gx1y, ffps0) {
            if (ffps0 & 0x1)
                c5gx1y = u18193ex(c5gx1y);
            if (ffps0 & 0x8)
                return c5gx1y;
            if (ffps0 & 0x4 && typeof c5gx1y === 'object' && c5gx1y && c5gx1y['__esModule'])
                return c5gx1y;
            var sh370u2 = Object['create'](null);
            u18193ex['r'](sh370u2);
            Object['defineProperty'](sh370u2, 'default', {
                'enumerable': !![],
                'value': c5gx1y
            });
            if (ffps0 & 0x2 && typeof c5gx1y != 'string')
                for (var dbh558k in c5gx1y)
                    u18193ex['d'](sh370u2, dbh558k, function (kvm6y2sim) {
                        return c5gx1y[kvm6y2sim];
                    }['bind'](null, dbh558k));
            return sh370u2;
        };
        u18193ex['n'] = function (vml5r4) {
            var u0wqfu = vml5r4 && vml5r4['__esModule'] ? function y3910t() {
                return vml5r4['default'];
            } : function q729pp3aq() {
                return vml5r4;
            };
            u18193ex['d'](u0wqfu, 'a', u0wqfu);
            return u0wqfu;
        };
        u18193ex['o'] = function (o63811, c37m6vv) {
            return Object['prototype']['hasOwnProperty']['call'](o63811, c37m6vv);
        };
        u18193ex['p'] = '';
        return u18193ex(u18193ex['s'] = 0x2);
    }([
        function (c0gxdvx52, mtrrp0tl, f4z2e6bo) {
            'use strict';
            var p3uk8hu = this && this['__extends'] || (function () {
                var qa2z3 = function (gz6cz7azv, lh0sw8m4h) {
                    qa2z3 = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (wwzey84xx, hhazx) {
                        wwzey84xx['__proto__'] = hhazx;
                    } || function (s01vuy8m3, qsgu00176) {
                        for (var bphlrct in qsgu00176)
                            if (qsgu00176['hasOwnProperty'](bphlrct))
                                s01vuy8m3[bphlrct] = qsgu00176[bphlrct];
                    };
                    return qa2z3(gz6cz7azv, lh0sw8m4h);
                };
                return function (yx6qpc, x351x) {
                    qa2z3(yx6qpc, x351x);
                    function i68cah() {
                        this['constructor'] = yx6qpc;
                    }
                    yx6qpc['prototype'] = x351x === null ? Object['create'](x351x) : (i68cah['prototype'] = x351x['prototype'], new i68cah());
                };
            }());
            Object['defineProperty'](mtrrp0tl, '__esModule', { 'value': !![] });
            var j0jabn52 = 0x100;
            var v35szl = (function () {
                function i96u97pm4(joc6152) {
                    if (joc6152 === void 0x0) {
                        joc6152 = '=';
                    }
                    this['_paddingCharacter'] = joc6152;
                }
                i96u97pm4['prototype']['encodedLength'] = function (a9s278) {
                    if (!this['_paddingCharacter']) {
                        return (a9s278 * 0x8 + 0x5) / 0x6 | 0x0;
                    }
                    return (a9s278 + 0x2) / 0x3 * 0x4 | 0x0;
                };
                i96u97pm4['prototype']['encode'] = function (ih048) {
                    var ecs84 = '';
                    var d75g9 = 0x0;
                    for (; d75g9 < ih048['length'] - 0x2; d75g9 += 0x3) {
                        var sy281i78f = ih048[d75g9] << 0x10 | ih048[d75g9 + 0x1] << 0x8 | ih048[d75g9 + 0x2];
                        ecs84 += this['_encodeByte'](sy281i78f >>> 0x3 * 0x6 & 0x3f);
                        ecs84 += this['_encodeByte'](sy281i78f >>> 0x2 * 0x6 & 0x3f);
                        ecs84 += this['_encodeByte'](sy281i78f >>> 0x1 * 0x6 & 0x3f);
                        ecs84 += this['_encodeByte'](sy281i78f >>> 0x0 * 0x6 & 0x3f);
                    }
                    var vipk6 = ih048['length'] - d75g9;
                    if (vipk6 > 0x0) {
                        var sy281i78f = ih048[d75g9] << 0x10 | (vipk6 === 0x2 ? ih048[d75g9 + 0x1] << 0x8 : 0x0);
                        ecs84 += this['_encodeByte'](sy281i78f >>> 0x3 * 0x6 & 0x3f);
                        ecs84 += this['_encodeByte'](sy281i78f >>> 0x2 * 0x6 & 0x3f);
                        if (vipk6 === 0x2) {
                            ecs84 += this['_encodeByte'](sy281i78f >>> 0x1 * 0x6 & 0x3f);
                        } else {
                            ecs84 += this['_paddingCharacter'] || '';
                        }
                        ecs84 += this['_paddingCharacter'] || '';
                    }
                    return ecs84;
                };
                i96u97pm4['prototype']['maxDecodedLength'] = function (v7545yj9) {
                    if (!this['_paddingCharacter']) {
                        return (v7545yj9 * 0x6 + 0x7) / 0x8 | 0x0;
                    }
                    return v7545yj9 / 0x4 * 0x3 | 0x0;
                };
                i96u97pm4['prototype']['decodedLength'] = function (cju47) {
                    return this['maxDecodedLength'](cju47['length'] - this['_getPaddingLength'](cju47));
                };
                i96u97pm4['prototype']['decode'] = function (y3a3z5) {
                    if (y3a3z5['length'] === 0x0) {
                        return new Uint8Array(0x0);
                    }
                    var d120x75u8 = this['_getPaddingLength'](y3a3z5);
                    var kov61n2hn = y3a3z5['length'] - d120x75u8;
                    var iyxh1z = new Uint8Array(this['maxDecodedLength'](kov61n2hn));
                    var a79w9a301 = 0x0;
                    var u36wq93 = 0x0;
                    var yaxb6 = 0x0;
                    var pn470g1 = 0x0, j154m2s4 = 0x0, biy6437 = 0x0, h7lh3 = 0x0;
                    for (; u36wq93 < kov61n2hn - 0x4; u36wq93 += 0x4) {
                        pn470g1 = this['_decodeChar'](y3a3z5['charCodeAt'](u36wq93 + 0x0));
                        j154m2s4 = this['_decodeChar'](y3a3z5['charCodeAt'](u36wq93 + 0x1));
                        biy6437 = this['_decodeChar'](y3a3z5['charCodeAt'](u36wq93 + 0x2));
                        h7lh3 = this['_decodeChar'](y3a3z5['charCodeAt'](u36wq93 + 0x3));
                        iyxh1z[a79w9a301++] = pn470g1 << 0x2 | j154m2s4 >>> 0x4;
                        iyxh1z[a79w9a301++] = j154m2s4 << 0x4 | biy6437 >>> 0x2;
                        iyxh1z[a79w9a301++] = biy6437 << 0x6 | h7lh3;
                        yaxb6 |= pn470g1 & j0jabn52;
                        yaxb6 |= j154m2s4 & j0jabn52;
                        yaxb6 |= biy6437 & j0jabn52;
                        yaxb6 |= h7lh3 & j0jabn52;
                    }
                    if (u36wq93 < kov61n2hn - 0x1) {
                        pn470g1 = this['_decodeChar'](y3a3z5['charCodeAt'](u36wq93));
                        j154m2s4 = this['_decodeChar'](y3a3z5['charCodeAt'](u36wq93 + 0x1));
                        iyxh1z[a79w9a301++] = pn470g1 << 0x2 | j154m2s4 >>> 0x4;
                        yaxb6 |= pn470g1 & j0jabn52;
                        yaxb6 |= j154m2s4 & j0jabn52;
                    }
                    if (u36wq93 < kov61n2hn - 0x2) {
                        biy6437 = this['_decodeChar'](y3a3z5['charCodeAt'](u36wq93 + 0x2));
                        iyxh1z[a79w9a301++] = j154m2s4 << 0x4 | biy6437 >>> 0x2;
                        yaxb6 |= biy6437 & j0jabn52;
                    }
                    if (u36wq93 < kov61n2hn - 0x3) {
                        h7lh3 = this['_decodeChar'](y3a3z5['charCodeAt'](u36wq93 + 0x3));
                        iyxh1z[a79w9a301++] = biy6437 << 0x6 | h7lh3;
                        yaxb6 |= h7lh3 & j0jabn52;
                    }
                    if (yaxb6 !== 0x0) {
                        throw new Error('Base64Coder:\x20incorrect\x20characters\x20for\x20decoding');
                    }
                    return iyxh1z;
                };
                i96u97pm4['prototype']['_encodeByte'] = function (w7gd02) {
                    var e09dembl7 = w7gd02;
                    e09dembl7 += 0x41;
                    e09dembl7 += 0x19 - w7gd02 >>> 0x8 & 0x0 - 0x41 - 0x1a + 0x61;
                    e09dembl7 += 0x33 - w7gd02 >>> 0x8 & 0x1a - 0x61 - 0x34 + 0x30;
                    e09dembl7 += 0x3d - w7gd02 >>> 0x8 & 0x34 - 0x30 - 0x3e + 0x2b;
                    e09dembl7 += 0x3e - w7gd02 >>> 0x8 & 0x3e - 0x2b - 0x3f + 0x2f;
                    return String['fromCharCode'](e09dembl7);
                };
                i96u97pm4['prototype']['_decodeChar'] = function (hgi632f) {
                    var s98fq4r = j0jabn52;
                    s98fq4r += (0x2a - hgi632f & hgi632f - 0x2c) >>> 0x8 & -j0jabn52 + hgi632f - 0x2b + 0x3e;
                    s98fq4r += (0x2e - hgi632f & hgi632f - 0x30) >>> 0x8 & -j0jabn52 + hgi632f - 0x2f + 0x3f;
                    s98fq4r += (0x2f - hgi632f & hgi632f - 0x3a) >>> 0x8 & -j0jabn52 + hgi632f - 0x30 + 0x34;
                    s98fq4r += (0x40 - hgi632f & hgi632f - 0x5b) >>> 0x8 & -j0jabn52 + hgi632f - 0x41 + 0x0;
                    s98fq4r += (0x60 - hgi632f & hgi632f - 0x7b) >>> 0x8 & -j0jabn52 + hgi632f - 0x61 + 0x1a;
                    return s98fq4r;
                };
                i96u97pm4['prototype']['_getPaddingLength'] = function (eo7sa) {
                    var c3z5ur9x4 = 0x0;
                    if (this['_paddingCharacter']) {
                        for (var w6nn144 = eo7sa['length'] - 0x1; w6nn144 >= 0x0; w6nn144--) {
                            if (eo7sa[w6nn144] !== this['_paddingCharacter']) {
                                break;
                            }
                            c3z5ur9x4++;
                        }
                        if (eo7sa['length'] < 0x4 || c3z5ur9x4 > 0x2) {
                            throw new Error('Base64Coder:\x20incorrect\x20padding');
                        }
                    }
                    return c3z5ur9x4;
                };
                return i96u97pm4;
            }());
            mtrrp0tl['Coder'] = v35szl;
            var m1cshmz = new v35szl();
            function dc0lr7(oiza2o8i) {
                return m1cshmz['encode'](oiza2o8i);
            }
            mtrrp0tl['encode'] = dc0lr7;
            function dp14nau0(e1jjny) {
                return m1cshmz['decode'](e1jjny);
            }
            mtrrp0tl['decode'] = dp14nau0;
            var z2mt01 = function (hjr922m) {
                p3uk8hu(t8wuhj3u, hjr922m);
                function t8wuhj3u() {
                    return hjr922m !== null && hjr922m['apply'](this, arguments) || this;
                }
                t8wuhj3u['prototype']['_encodeByte'] = function (v1kp98q) {
                    var qexur66s = v1kp98q;
                    qexur66s += 0x41;
                    qexur66s += 0x19 - v1kp98q >>> 0x8 & 0x0 - 0x41 - 0x1a + 0x61;
                    qexur66s += 0x33 - v1kp98q >>> 0x8 & 0x1a - 0x61 - 0x34 + 0x30;
                    qexur66s += 0x3d - v1kp98q >>> 0x8 & 0x34 - 0x30 - 0x3e + 0x2d;
                    qexur66s += 0x3e - v1kp98q >>> 0x8 & 0x3e - 0x2d - 0x3f + 0x5f;
                    return String['fromCharCode'](qexur66s);
                };
                t8wuhj3u['prototype']['_decodeChar'] = function (e53576) {
                    var kw98k739 = j0jabn52;
                    kw98k739 += (0x2c - e53576 & e53576 - 0x2e) >>> 0x8 & -j0jabn52 + e53576 - 0x2d + 0x3e;
                    kw98k739 += (0x5e - e53576 & e53576 - 0x60) >>> 0x8 & -j0jabn52 + e53576 - 0x5f + 0x3f;
                    kw98k739 += (0x2f - e53576 & e53576 - 0x3a) >>> 0x8 & -j0jabn52 + e53576 - 0x30 + 0x34;
                    kw98k739 += (0x40 - e53576 & e53576 - 0x5b) >>> 0x8 & -j0jabn52 + e53576 - 0x41 + 0x0;
                    kw98k739 += (0x60 - e53576 & e53576 - 0x7b) >>> 0x8 & -j0jabn52 + e53576 - 0x61 + 0x1a;
                    return kw98k739;
                };
                return t8wuhj3u;
            }(v35szl);
            mtrrp0tl['URLSafeCoder'] = z2mt01;
            var yz88f5 = new z2mt01();
            function x2e3y(fn9p3) {
                return yz88f5['encode'](fn9p3);
            }
            mtrrp0tl['encodeURLSafe'] = x2e3y;
            function u2otbzv(qow058974) {
                return yz88f5['decode'](qow058974);
            }
            mtrrp0tl['decodeURLSafe'] = u2otbzv;
            mtrrp0tl['encodedLength'] = function (ki4z0g6q) {
                return m1cshmz['encodedLength'](ki4z0g6q);
            };
            mtrrp0tl['maxDecodedLength'] = function (lh4296a2) {
                return m1cshmz['maxDecodedLength'](lh4296a2);
            };
            mtrrp0tl['decodedLength'] = function (l3auu3) {
                return m1cshmz['decodedLength'](l3auu3);
            };
        },
        function (o34q6, p5f6p9574, m219o1) {
            'use strict';
            Object['defineProperty'](p5f6p9574, '__esModule', { 'value': !![] });
            var qjre4t = 'utf8:\x20invalid\x20string';
            var u7nbr6ss = 'utf8:\x20invalid\x20source\x20encoding';
            function l5r4h8j(xcii9) {
                var l3370c3g2 = new Uint8Array(r18n9g(xcii9));
                var ic3uqrfcg = 0x0;
                for (var wz6gq1 = 0x0; wz6gq1 < xcii9['length']; wz6gq1++) {
                    var cou80v = xcii9['charCodeAt'](wz6gq1);
                    if (cou80v < 0x80) {
                        l3370c3g2[ic3uqrfcg++] = cou80v;
                    } else if (cou80v < 0x800) {
                        l3370c3g2[ic3uqrfcg++] = 0xc0 | cou80v >> 0x6;
                        l3370c3g2[ic3uqrfcg++] = 0x80 | cou80v & 0x3f;
                    } else if (cou80v < 0xd800) {
                        l3370c3g2[ic3uqrfcg++] = 0xe0 | cou80v >> 0xc;
                        l3370c3g2[ic3uqrfcg++] = 0x80 | cou80v >> 0x6 & 0x3f;
                        l3370c3g2[ic3uqrfcg++] = 0x80 | cou80v & 0x3f;
                    } else {
                        wz6gq1++;
                        cou80v = (cou80v & 0x3ff) << 0xa;
                        cou80v |= xcii9['charCodeAt'](wz6gq1) & 0x3ff;
                        cou80v += 0x10000;
                        l3370c3g2[ic3uqrfcg++] = 0xf0 | cou80v >> 0x12;
                        l3370c3g2[ic3uqrfcg++] = 0x80 | cou80v >> 0xc & 0x3f;
                        l3370c3g2[ic3uqrfcg++] = 0x80 | cou80v >> 0x6 & 0x3f;
                        l3370c3g2[ic3uqrfcg++] = 0x80 | cou80v & 0x3f;
                    }
                }
                return l3370c3g2;
            }
            p5f6p9574['encode'] = l5r4h8j;
            function r18n9g(n3208o631) {
                var of9jfs2z = 0x0;
                for (var u81m2s = 0x0; u81m2s < n3208o631['length']; u81m2s++) {
                    var xwriu1w = n3208o631['charCodeAt'](u81m2s);
                    if (xwriu1w < 0x80) {
                        of9jfs2z += 0x1;
                    } else if (xwriu1w < 0x800) {
                        of9jfs2z += 0x2;
                    } else if (xwriu1w < 0xd800) {
                        of9jfs2z += 0x3;
                    } else if (xwriu1w <= 0xdfff) {
                        if (u81m2s >= n3208o631['length'] - 0x1) {
                            throw new Error(qjre4t);
                        }
                        u81m2s++;
                        of9jfs2z += 0x4;
                    } else {
                        throw new Error(qjre4t);
                    }
                }
                return of9jfs2z;
            }
            p5f6p9574['encodedLength'] = r18n9g;
            function fp6t8p(f031rr6) {
                var ddvb2 = [];
                for (var bdso0w = 0x0; bdso0w < f031rr6['length']; bdso0w++) {
                    var pets7 = f031rr6[bdso0w];
                    if (pets7 & 0x80) {
                        var po1307wb = void 0x0;
                        if (pets7 < 0xe0) {
                            if (bdso0w >= f031rr6['length']) {
                                throw new Error(u7nbr6ss);
                            }
                            var cdm34r = f031rr6[++bdso0w];
                            if ((cdm34r & 0xc0) !== 0x80) {
                                throw new Error(u7nbr6ss);
                            }
                            pets7 = (pets7 & 0x1f) << 0x6 | cdm34r & 0x3f;
                            po1307wb = 0x80;
                        } else if (pets7 < 0xf0) {
                            if (bdso0w >= f031rr6['length'] - 0x1) {
                                throw new Error(u7nbr6ss);
                            }
                            var cdm34r = f031rr6[++bdso0w];
                            var xmk1o505 = f031rr6[++bdso0w];
                            if ((cdm34r & 0xc0) !== 0x80 || (xmk1o505 & 0xc0) !== 0x80) {
                                throw new Error(u7nbr6ss);
                            }
                            pets7 = (pets7 & 0xf) << 0xc | (cdm34r & 0x3f) << 0x6 | xmk1o505 & 0x3f;
                            po1307wb = 0x800;
                        } else if (pets7 < 0xf8) {
                            if (bdso0w >= f031rr6['length'] - 0x2) {
                                throw new Error(u7nbr6ss);
                            }
                            var cdm34r = f031rr6[++bdso0w];
                            var xmk1o505 = f031rr6[++bdso0w];
                            var ej9rg5q = f031rr6[++bdso0w];
                            if ((cdm34r & 0xc0) !== 0x80 || (xmk1o505 & 0xc0) !== 0x80 || (ej9rg5q & 0xc0) !== 0x80) {
                                throw new Error(u7nbr6ss);
                            }
                            pets7 = (pets7 & 0xf) << 0x12 | (cdm34r & 0x3f) << 0xc | (xmk1o505 & 0x3f) << 0x6 | ej9rg5q & 0x3f;
                            po1307wb = 0x10000;
                        } else {
                            throw new Error(u7nbr6ss);
                        }
                        if (pets7 < po1307wb || pets7 >= 0xd800 && pets7 <= 0xdfff) {
                            throw new Error(u7nbr6ss);
                        }
                        if (pets7 >= 0x10000) {
                            if (pets7 > 0x10ffff) {
                                throw new Error(u7nbr6ss);
                            }
                            pets7 -= 0x10000;
                            ddvb2['push'](String['fromCharCode'](0xd800 | pets7 >> 0xa));
                            pets7 = 0xdc00 | pets7 & 0x3ff;
                        }
                    }
                    ddvb2['push'](String['fromCharCode'](pets7));
                }
                return ddvb2['join']('');
            }
            p5f6p9574['decode'] = fp6t8p;
        },
        function (h7rl29abf, m93bx6, rp3u7tvz3) {
            h7rl29abf['exports'] = rp3u7tvz3(0x3)['default'];
        },
        function (v7xi8, ucgbl045, k4t97a01q) {
            'use strict';
            k4t97a01q['r'](ucgbl045);
            var iczhp = (function () {
                function v043l(ld21y, a0p4c3c9r) {
                    this['lastId'] = 0x0;
                    this['prefix'] = ld21y;
                    this['name'] = a0p4c3c9r;
                }
                v043l['prototype']['create'] = function (n1qcpn) {
                    this['lastId']++;
                    var k92d2 = this['lastId'];
                    var vnzt1xnu6 = this['prefix'] + k92d2;
                    var lfq76x5 = this['name'] + '[' + k92d2 + ']';
                    var fy0kxylb = ![];
                    var wqfq4i9j = function () {
                        if (!fy0kxylb) {
                            n1qcpn['apply'](null, arguments);
                            fy0kxylb = !![];
                        }
                    };
                    this[k92d2] = wqfq4i9j;
                    return {
                        'number': k92d2,
                        'id': vnzt1xnu6,
                        'name': lfq76x5,
                        'callback': wqfq4i9j
                    };
                };
                v043l['prototype']['remove'] = function (oans89m) {
                    delete this[oans89m['number']];
                };
                return v043l;
            }());
            var v2e9d = new iczhp('_pusher_script_', 'Pusher.ScriptReceivers');
            var m5g9812 = {
                'VERSION': '7.0.6',
                'PROTOCOL': 0x7,
                'wsPort': 0x50,
                'wssPort': 0x1bb,
                'wsPath': '',
                'httpHost': 'sockjs.pusher.com',
                'httpPort': 0x50,
                'httpsPort': 0x1bb,
                'httpPath': '/pusher',
                'stats_host': 'stats.pusher.com',
                'authEndpoint': '/pusher/auth',
                'authTransport': 'ajax',
                'activityTimeout': 0x1d4c0,
                'pongTimeout': 0x7530,
                'unavailableTimeout': 0x2710,
                'cluster': 'mt1',
                'cdn_http': 'http://js.pusher.com',
                'cdn_https': 'https://js.pusher.com',
                'dependency_suffix': ''
            };
            var ii151h17 = m5g9812;
            var k9b9g9j9 = (function () {
                function p1v9f(n59vysh3) {
                    this['options'] = n59vysh3;
                    this['receivers'] = n59vysh3['receivers'] || v2e9d;
                    this['loading'] = {};
                }
                p1v9f['prototype']['load'] = function (n63n46, y45w43, psdb3) {
                    var uyde2n = this;
                    if (uyde2n['loading'][n63n46] && uyde2n['loading'][n63n46]['length'] > 0x0) {
                        uyde2n['loading'][n63n46]['push'](psdb3);
                    } else {
                        uyde2n['loading'][n63n46] = [psdb3];
                        var l52vkj3s8 = xbxyl5wj['createScriptRequest'](uyde2n['getPath'](n63n46, y45w43));
                        var x16eck15 = uyde2n['receivers']['create'](function (xn0h1) {
                            uyde2n['receivers']['remove'](x16eck15);
                            if (uyde2n['loading'][n63n46]) {
                                var qt725 = uyde2n['loading'][n63n46];
                                delete uyde2n['loading'][n63n46];
                                var g62szo066 = function (w5jn52yv) {
                                    if (!w5jn52yv) {
                                        l52vkj3s8['cleanup']();
                                    }
                                };
                                for (var so2366b = 0x0; so2366b < qt725['length']; so2366b++) {
                                    qt725[so2366b](xn0h1, g62szo066);
                                }
                            }
                        });
                        l52vkj3s8['send'](x16eck15);
                    }
                };
                p1v9f['prototype']['getRoot'] = function (bl2h4i1) {
                    var f82y268a7;
                    var sq52j5dz9 = xbxyl5wj['getDocument']()['location']['protocol'];
                    if (bl2h4i1 && bl2h4i1['useTLS'] || sq52j5dz9 === 'https:') {
                        f82y268a7 = this['options']['cdn_https'];
                    } else {
                        f82y268a7 = this['options']['cdn_http'];
                    }
                    return f82y268a7['replace'](/\/*$/, '') + '/' + this['options']['version'];
                };
                p1v9f['prototype']['getPath'] = function (j8460, af5w78540) {
                    return this['getRoot'](af5w78540) + '/' + j8460 + this['options']['suffix'] + '.js';
                };
                return p1v9f;
            }());
            var k89d2pee = k9b9g9j9;
            var l7yjiby4 = new iczhp('_pusher_dependencies', 'Pusher.DependenciesReceivers');
            var igmf6 = new k89d2pee({
                'cdn_http': ii151h17['cdn_http'],
                'cdn_https': ii151h17['cdn_https'],
                'version': ii151h17['VERSION'],
                'suffix': ii151h17['dependency_suffix'],
                'receivers': l7yjiby4
            });
            var t64bk = {
                'baseUrl': 'https://pusher.com',
                'urls': {
                    'authenticationEndpoint': { 'path': '/docs/authenticating_users' },
                    'javascriptQuickStart': { 'path': '/docs/javascript_quick_start' },
                    'triggeringClientEvents': { 'path': '/docs/client_api_guide/client_events#trigger-events' },
                    'encryptedChannelSupport': { 'fullUrl': 'https://github.com/pusher/pusher-js/tree/cc491015371a4bde5743d1c87a0fbac0feb53195#encrypted-channel-support' }
                }
            };
            var cgu65h7i = function (z1kp0) {
                var syt999xgr = 'See:';
                var d4q28q4 = t64bk['urls'][z1kp0];
                if (!d4q28q4)
                    return '';
                var j753xy;
                if (d4q28q4['fullUrl']) {
                    j753xy = d4q28q4['fullUrl'];
                } else if (d4q28q4['path']) {
                    j753xy = t64bk['baseUrl'] + d4q28q4['path'];
                }
                if (!j753xy)
                    return '';
                return syt999xgr + '\x20' + j753xy;
            };
            var fn4cno89 = { 'buildLogSuffix': cgu65h7i };
            var f8z293p5p = undefined && undefined['__extends'] || (function () {
                var pp1o4230x = function (ax9s6ky, y3775fbf) {
                    pp1o4230x = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (r2we5vx30, rmch1) {
                        r2we5vx30['__proto__'] = rmch1;
                    } || function (kv6318j99, b5zxpd8ty) {
                        for (var nba9w891i in b5zxpd8ty)
                            if (b5zxpd8ty['hasOwnProperty'](nba9w891i))
                                kv6318j99[nba9w891i] = b5zxpd8ty[nba9w891i];
                    };
                    return pp1o4230x(ax9s6ky, y3775fbf);
                };
                return function (i7gfsz, i71lybs89) {
                    pp1o4230x(i7gfsz, i71lybs89);
                    function tvztpq2d() {
                        this['constructor'] = i7gfsz;
                    }
                    i7gfsz['prototype'] = i71lybs89 === null ? Object['create'](i71lybs89) : (tvztpq2d['prototype'] = i71lybs89['prototype'], new tvztpq2d());
                };
            }());
            var y6h7uuvf0 = function (i932b) {
                f8z293p5p(ld24ko, i932b);
                function ld24ko(onw9ymju) {
                    var r773x97p = this['constructor'];
                    var y8wa885oy = i932b['call'](this, onw9ymju) || this;
                    Object['setPrototypeOf'](y8wa885oy, r773x97p['prototype']);
                    return y8wa885oy;
                }
                return ld24ko;
            }(Error);
            var l2gf9 = function (kt0te2g8) {
                f8z293p5p(hw23r63kn, kt0te2g8);
                function hw23r63kn(b15cy0x) {
                    var w9o88 = this['constructor'];
                    var i33x83 = kt0te2g8['call'](this, b15cy0x) || this;
                    Object['setPrototypeOf'](i33x83, w9o88['prototype']);
                    return i33x83;
                }
                return hw23r63kn;
            }(Error);
            var g0ect = function (jx4yp) {
                f8z293p5p(ri7eknszv, jx4yp);
                function ri7eknszv(r8a90) {
                    var w8wohvp = this['constructor'];
                    var gj2z97o4 = jx4yp['call'](this, r8a90) || this;
                    Object['setPrototypeOf'](gj2z97o4, w8wohvp['prototype']);
                    return gj2z97o4;
                }
                return ri7eknszv;
            }(Error);
            var mn5j9371 = function (fj171yb) {
                f8z293p5p(j3d68k9, fj171yb);
                function j3d68k9(cxae9p) {
                    var p69j718 = this['constructor'];
                    var pl88u = fj171yb['call'](this, cxae9p) || this;
                    Object['setPrototypeOf'](pl88u, p69j718['prototype']);
                    return pl88u;
                }
                return j3d68k9;
            }(Error);
            var w5a9m1c = function (pz5170) {
                f8z293p5p(az03v5e51, pz5170);
                function az03v5e51(l73nkz) {
                    var r75rfx2xp = this['constructor'];
                    var j0gln48 = pz5170['call'](this, l73nkz) || this;
                    Object['setPrototypeOf'](j0gln48, r75rfx2xp['prototype']);
                    return j0gln48;
                }
                return az03v5e51;
            }(Error);
            var udjs64u = function (sze6z6t) {
                f8z293p5p(v6yl5pkz1, sze6z6t);
                function v6yl5pkz1(f3j076) {
                    var qyc4j56gz = this['constructor'];
                    var a1l1e96l = sze6z6t['call'](this, f3j076) || this;
                    Object['setPrototypeOf'](a1l1e96l, qyc4j56gz['prototype']);
                    return a1l1e96l;
                }
                return v6yl5pkz1;
            }(Error);
            var u2tw3s1 = function (p1l5h1n88) {
                f8z293p5p(s1bw1l4g, p1l5h1n88);
                function s1bw1l4g(mb356) {
                    var m452f6l = this['constructor'];
                    var k72hi82z = p1l5h1n88['call'](this, mb356) || this;
                    Object['setPrototypeOf'](k72hi82z, m452f6l['prototype']);
                    return k72hi82z;
                }
                return s1bw1l4g;
            }(Error);
            var kq64ye9v8 = function (t61w2) {
                f8z293p5p(g2rk6a, t61w2);
                function g2rk6a(kw451cx, oeeax9797) {
                    var ays56w5 = this['constructor'];
                    var d8hs9wo3 = t61w2['call'](this, oeeax9797) || this;
                    d8hs9wo3['status'] = kw451cx;
                    Object['setPrototypeOf'](d8hs9wo3, ays56w5['prototype']);
                    return d8hs9wo3;
                }
                return g2rk6a;
            }(Error);
            var wa579zj = function (km5q072mp, v5o2vx4w, g8nyax1in) {
                var tz5cx027 = this, j66z4;
                j66z4 = xbxyl5wj['createXHR']();
                j66z4['open']('POST', tz5cx027['options']['authEndpoint'], !![]);
                j66z4['setRequestHeader']('Content-Type', 'application/x-www-form-urlencoded');
                for (var p7a150 in this['authOptions']['headers']) {
                    j66z4['setRequestHeader'](p7a150, this['authOptions']['headers'][p7a150]);
                }
                j66z4['onreadystatechange'] = function () {
                    if (j66z4['readyState'] === 0x4) {
                        if (j66z4['status'] === 0xc8) {
                            var i07287s = void 0x0;
                            var rd0rm43 = ![];
                            try {
                                i07287s = JSON['parse'](j66z4['responseText']);
                                rd0rm43 = !![];
                            } catch (m0wlua) {
                                g8nyax1in(new kq64ye9v8(0xc8, 'JSON\x20returned\x20from\x20auth\x20endpoint\x20was\x20invalid,\x20yet\x20status\x20code\x20was\x20200.\x20Data\x20was:\x20' + j66z4['responseText']), { 'auth': '' });
                            }
                            if (rd0rm43) {
                                g8nyax1in(null, i07287s);
                            }
                        } else {
                            var v7qhn0n9 = fn4cno89['buildLogSuffix']('authenticationEndpoint');
                            g8nyax1in(new kq64ye9v8(j66z4['status'], 'Unable\x20to\x20retrieve\x20auth\x20string\x20from\x20auth\x20endpoint\x20-\x20' + ('received\x20status:\x20' + j66z4['status'] + '\x20from\x20' + tz5cx027['options']['authEndpoint'] + '.\x20') + ('Clients\x20must\x20be\x20authenticated\x20to\x20join\x20private\x20or\x20presence\x20channels.\x20' + v7qhn0n9)), { 'auth': '' });
                        }
                    }
                };
                j66z4['send'](this['composeQuery'](v5o2vx4w));
                return j66z4;
            };
            var b7oscuhnj = wa579zj;
            function ftulk9(c128u16qj) {
                return mm4c1mrv5(fnip64o(c128u16qj));
            }
            var ck2b6m3pf = String['fromCharCode'];
            var sjbei5778 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
            var dl42j0 = {};
            for (var un516934 = 0x0, rpm0c3p = sjbei5778['length']; un516934 < rpm0c3p; un516934++) {
                dl42j0[sjbei5778['charAt'](un516934)] = un516934;
            }
            var azxcx = function (a69g78h8) {
                var lm3251 = a69g78h8['charCodeAt'](0x0);
                return lm3251 < 0x80 ? a69g78h8 : lm3251 < 0x800 ? ck2b6m3pf(0xc0 | lm3251 >>> 0x6) + ck2b6m3pf(0x80 | lm3251 & 0x3f) : ck2b6m3pf(0xe0 | lm3251 >>> 0xc & 0xf) + ck2b6m3pf(0x80 | lm3251 >>> 0x6 & 0x3f) + ck2b6m3pf(0x80 | lm3251 & 0x3f);
            };
            var fnip64o = function (eibr1) {
                return eibr1['replace'](/[^\x00-\x7F]/g, azxcx);
            };
            var v6817863 = function (qehr3q13) {
                var h87r2769 = [
                    0x0,
                    0x2,
                    0x1
                ][qehr3q13['length'] % 0x3];
                var k7kr94x5f = qehr3q13['charCodeAt'](0x0) << 0x10 | (qehr3q13['length'] > 0x1 ? qehr3q13['charCodeAt'](0x1) : 0x0) << 0x8 | (qehr3q13['length'] > 0x2 ? qehr3q13['charCodeAt'](0x2) : 0x0);
                var mj2xq = [
                    sjbei5778['charAt'](k7kr94x5f >>> 0x12),
                    sjbei5778['charAt'](k7kr94x5f >>> 0xc & 0x3f),
                    h87r2769 >= 0x2 ? '=' : sjbei5778['charAt'](k7kr94x5f >>> 0x6 & 0x3f),
                    h87r2769 >= 0x1 ? '=' : sjbei5778['charAt'](k7kr94x5f & 0x3f)
                ];
                return mj2xq['join']('');
            };
            var mm4c1mrv5 = window['btoa'] || function (yvlv14dv) {
                return yvlv14dv['replace'](/[\s\S]{1,3}/g, v6817863);
            };
            var hvb0u1 = (function () {
                function zs77krv58(kzv329, weuns5, ls0oh, ff3li2h) {
                    var u0vx364cc = this;
                    this['clear'] = weuns5;
                    this['timer'] = kzv329(function () {
                        if (u0vx364cc['timer']) {
                            u0vx364cc['timer'] = ff3li2h(u0vx364cc['timer']);
                        }
                    }, ls0oh);
                }
                zs77krv58['prototype']['isRunning'] = function () {
                    return this['timer'] !== null;
                };
                zs77krv58['prototype']['ensureAborted'] = function () {
                    if (this['timer']) {
                        this['clear'](this['timer']);
                        this['timer'] = null;
                    }
                };
                return zs77krv58;
            }());
            var isf95 = hvb0u1;
            var u9ywv = undefined && undefined['__extends'] || (function () {
                var jfw92vjn = function (l4o4zb8j, in15j) {
                    jfw92vjn = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (pd1t4q, h01vp1d5) {
                        pd1t4q['__proto__'] = h01vp1d5;
                    } || function (k3w3re, ye18yn064) {
                        for (var p74p3i in ye18yn064)
                            if (ye18yn064['hasOwnProperty'](p74p3i))
                                k3w3re[p74p3i] = ye18yn064[p74p3i];
                    };
                    return jfw92vjn(l4o4zb8j, in15j);
                };
                return function (a1lbu, qsy1892e) {
                    jfw92vjn(a1lbu, qsy1892e);
                    function o9x66() {
                        this['constructor'] = a1lbu;
                    }
                    a1lbu['prototype'] = qsy1892e === null ? Object['create'](qsy1892e) : (o9x66['prototype'] = qsy1892e['prototype'], new o9x66());
                };
            }());
            function uuwxq32wk(a92u0on) {
                window['clearTimeout'](a92u0on);
            }
            function ri147z(cobu8h) {
                window['clearInterval'](cobu8h);
            }
            var j4p2e0 = function (h40d8) {
                u9ywv(nj9u12a2e, h40d8);
                function nj9u12a2e(n6j98, rxv42u8z) {
                    return h40d8['call'](this, setTimeout, uuwxq32wk, n6j98, function (dx0jwh) {
                        rxv42u8z();
                        return null;
                    }) || this;
                }
                return nj9u12a2e;
            }(isf95);
            var w617583 = function (g73wad) {
                u9ywv(v186r, g73wad);
                function v186r(v222901o, r4myx743c) {
                    return g73wad['call'](this, setInterval, ri147z, v222901o, function (p4g3j68k) {
                        r4myx743c();
                        return p4g3j68k;
                    }) || this;
                }
                return v186r;
            }(isf95);
            var dd9tf3f3b = {
                'now': function () {
                    if (Date['now']) {
                        return Date['now']();
                    } else {
                        return new Date()['valueOf']();
                    }
                },
                'defer': function (i8jttao84) {
                    return new j4p2e0(0x0, i8jttao84);
                },
                'method': function (g3263d41) {
                    var ogl031wq9 = [];
                    for (var u40065v = 0x1; u40065v < arguments['length']; u40065v++) {
                        ogl031wq9[u40065v - 0x1] = arguments[u40065v];
                    }
                    var g3v592 = Array['prototype']['slice']['call'](arguments, 0x1);
                    return function (rocngze6z) {
                        return rocngze6z[g3263d41]['apply'](rocngze6z, g3v592['concat'](arguments));
                    };
                }
            };
            var drdfz5 = dd9tf3f3b;
            function qw69vny2b(m2o75) {
                var on86069l5 = [];
                for (var g23tv3bov = 0x1; g23tv3bov < arguments['length']; g23tv3bov++) {
                    on86069l5[g23tv3bov - 0x1] = arguments[g23tv3bov];
                }
                for (var p22b41245 = 0x0; p22b41245 < on86069l5['length']; p22b41245++) {
                    var u455v = on86069l5[p22b41245];
                    for (var sbfvp5to in u455v) {
                        if (u455v[sbfvp5to] && u455v[sbfvp5to]['constructor'] && u455v[sbfvp5to]['constructor'] === Object) {
                            m2o75[sbfvp5to] = qw69vny2b(m2o75[sbfvp5to] || {}, u455v[sbfvp5to]);
                        } else {
                            m2o75[sbfvp5to] = u455v[sbfvp5to];
                        }
                    }
                }
                return m2o75;
            }
            function avk4a() {
                var f8e141d = ['Pusher'];
                for (var qx6li = 0x0; qx6li < arguments['length']; qx6li++) {
                    if (typeof arguments[qx6li] === 'string') {
                        f8e141d['push'](arguments[qx6li]);
                    } else {
                        f8e141d['push'](f8fz1dr(arguments[qx6li]));
                    }
                }
                return f8e141d['join']('\x20:\x20');
            }
            function l3f4jjw(x2u22ch, jb2c3f) {
                var c1jrq0 = Array['prototype']['indexOf'];
                if (x2u22ch === null) {
                    return -0x1;
                }
                if (c1jrq0 && x2u22ch['indexOf'] === c1jrq0) {
                    return x2u22ch['indexOf'](jb2c3f);
                }
                for (var x000f6y = 0x0, ett3610 = x2u22ch['length']; x000f6y < ett3610; x000f6y++) {
                    if (x2u22ch[x000f6y] === jb2c3f) {
                        return x000f6y;
                    }
                }
                return -0x1;
            }
            function si4uw(fi497r0i1, jklm9i61) {
                for (var a7h92x5s1 in fi497r0i1) {
                    if (Object['prototype']['hasOwnProperty']['call'](fi497r0i1, a7h92x5s1)) {
                        jklm9i61(fi497r0i1[a7h92x5s1], a7h92x5s1, fi497r0i1);
                    }
                }
            }
            function njq3739ra(xf6k39kv) {
                var w1636j75 = [];
                si4uw(xf6k39kv, function (iawem7k, p9g0r0w9) {
                    w1636j75['push'](p9g0r0w9);
                });
                return w1636j75;
            }
            function m5ru5e8h6(fvb2tj) {
                var f37i3ne4 = [];
                si4uw(fvb2tj, function (s276g4o48) {
                    f37i3ne4['push'](s276g4o48);
                });
                return f37i3ne4;
            }
            function kxn34w3(q71o0, r6zux, is20u923) {
                for (var oohy624 = 0x0; oohy624 < q71o0['length']; oohy624++) {
                    r6zux['call'](is20u923 || window, q71o0[oohy624], oohy624, q71o0);
                }
            }
            function xdr821592(co7u411d, t5jkt27) {
                var kk009qrn6 = [];
                for (var awzia94b = 0x0; awzia94b < co7u411d['length']; awzia94b++) {
                    kk009qrn6['push'](t5jkt27(co7u411d[awzia94b], awzia94b, co7u411d, kk009qrn6));
                }
                return kk009qrn6;
            }
            function c6534q(t7586440m, cd7a38684) {
                var s43ilu6w7 = {};
                si4uw(t7586440m, function (c7a43kf, ma486luj) {
                    s43ilu6w7[ma486luj] = cd7a38684(c7a43kf);
                });
                return s43ilu6w7;
            }
            function e3up9bbd(z0n123, mpkjk4) {
                mpkjk4 = mpkjk4 || function (kzqp4s0f) {
                    return !!kzqp4s0f;
                };
                var e29t8b = [];
                for (var t7j2t = 0x0; t7j2t < z0n123['length']; t7j2t++) {
                    if (mpkjk4(z0n123[t7j2t], t7j2t, z0n123, e29t8b)) {
                        e29t8b['push'](z0n123[t7j2t]);
                    }
                }
                return e29t8b;
            }
            function opq38t6(i6he4z, llhb51) {
                var x7140 = {};
                si4uw(i6he4z, function (uh0w7849, dj51v) {
                    if (llhb51 && llhb51(uh0w7849, dj51v, i6he4z, x7140) || Boolean(uh0w7849)) {
                        x7140[dj51v] = uh0w7849;
                    }
                });
                return x7140;
            }
            function yjc145j9c(xu3rom) {
                var oqi5j3 = [];
                si4uw(xu3rom, function (c6k48, i73sqb) {
                    oqi5j3['push']([
                        i73sqb,
                        c6k48
                    ]);
                });
                return oqi5j3;
            }
            function g8658v712(mqan14068, kn6qge) {
                for (var ke4u61 = 0x0; ke4u61 < mqan14068['length']; ke4u61++) {
                    if (kn6qge(mqan14068[ke4u61], ke4u61, mqan14068)) {
                        return !![];
                    }
                }
                return ![];
            }
            function t2bzt(wg4mw, w1rb52) {
                for (var p59c2fnfl = 0x0; p59c2fnfl < wg4mw['length']; p59c2fnfl++) {
                    if (!w1rb52(wg4mw[p59c2fnfl], p59c2fnfl, wg4mw)) {
                        return ![];
                    }
                }
                return !![];
            }
            function p42q27mvf(wx9sz7sh) {
                return c6534q(wx9sz7sh, function (k9e1z02v) {
                    if (typeof k9e1z02v === 'object') {
                        k9e1z02v = f8fz1dr(k9e1z02v);
                    }
                    return encodeURIComponent(ftulk9(k9e1z02v['toString']()));
                });
            }
            function u2m17(h60o61u) {
                var vg4gd = opq38t6(h60o61u, function (x7874c273) {
                    return x7874c273 !== undefined;
                });
                var h01u393e2 = xdr821592(yjc145j9c(p42q27mvf(vg4gd)), drdfz5['method']('join', '='))['join']('&');
                return h01u393e2;
            }
            function c0510(l65468) {
                var c945em6py = [], yg5ji = [];
                return function bsumwqfo(qy42ik, r25uycxq) {
                    var n07gy, ndh69, qwr0m86;
                    switch (typeof qy42ik) {
                    case 'object':
                        if (!qy42ik) {
                            return null;
                        }
                        for (n07gy = 0x0; n07gy < c945em6py['length']; n07gy += 0x1) {
                            if (c945em6py[n07gy] === qy42ik) {
                                return { '$ref': yg5ji[n07gy] };
                            }
                        }
                        c945em6py['push'](qy42ik);
                        yg5ji['push'](r25uycxq);
                        if (Object['prototype']['toString']['apply'](qy42ik) === '[object\x20Array]') {
                            qwr0m86 = [];
                            for (n07gy = 0x0; n07gy < qy42ik['length']; n07gy += 0x1) {
                                qwr0m86[n07gy] = bsumwqfo(qy42ik[n07gy], r25uycxq + '[' + n07gy + ']');
                            }
                        } else {
                            qwr0m86 = {};
                            for (ndh69 in qy42ik) {
                                if (Object['prototype']['hasOwnProperty']['call'](qy42ik, ndh69)) {
                                    qwr0m86[ndh69] = bsumwqfo(qy42ik[ndh69], r25uycxq + '[' + JSON['stringify'](ndh69) + ']');
                                }
                            }
                        }
                        return qwr0m86;
                    case 'number':
                    case 'string':
                    case 'boolean':
                        return qy42ik;
                    }
                }(l65468, '$');
            }
            function f8fz1dr(su6divo) {
                try {
                    return JSON['stringify'](su6divo);
                } catch (pdq5b5) {
                    return JSON['stringify'](c0510(su6divo));
                }
            }
            var t8osv = (function () {
                function dzf508j() {
                    this['globalLog'] = function (gke0w7) {
                        if (window['console'] && window['console']['log']) {
                            window['console']['log'](gke0w7);
                        }
                    };
                }
                dzf508j['prototype']['debug'] = function () {
                    var u8584 = [];
                    for (var llcdi044 = 0x0; llcdi044 < arguments['length']; llcdi044++) {
                        u8584[llcdi044] = arguments[llcdi044];
                    }
                    this['log'](this['globalLog'], u8584);
                };
                dzf508j['prototype']['warn'] = function () {
                    var nl592x3t0 = [];
                    for (var n683xb2 = 0x0; n683xb2 < arguments['length']; n683xb2++) {
                        nl592x3t0[n683xb2] = arguments[n683xb2];
                    }
                    this['log'](this['globalLogWarn'], nl592x3t0);
                };
                dzf508j['prototype']['error'] = function () {
                    var j55ono9s = [];
                    for (var h10w5wc = 0x0; h10w5wc < arguments['length']; h10w5wc++) {
                        j55ono9s[h10w5wc] = arguments[h10w5wc];
                    }
                    this['log'](this['globalLogError'], j55ono9s);
                };
                dzf508j['prototype']['globalLogWarn'] = function (zk9m3) {
                    if (window['console'] && window['console']['warn']) {
                        window['console']['warn'](zk9m3);
                    } else {
                        this['globalLog'](zk9m3);
                    }
                };
                dzf508j['prototype']['globalLogError'] = function (c61ke54n) {
                    if (window['console'] && window['console']['error']) {
                        window['console']['error'](c61ke54n);
                    } else {
                        this['globalLogWarn'](c61ke54n);
                    }
                };
                dzf508j['prototype']['log'] = function (v48dh) {
                    var w5w99rrt2 = [];
                    for (var zrb74s1z = 0x1; zrb74s1z < arguments['length']; zrb74s1z++) {
                        w5w99rrt2[zrb74s1z - 0x1] = arguments[zrb74s1z];
                    }
                    var eo0p44l3 = avk4a['apply'](this, arguments);
                    if (l8048a5le['log']) {
                        l8048a5le['log'](eo0p44l3);
                    } else if (l8048a5le['logToConsole']) {
                        var e8w7x3g4 = v48dh['bind'](this);
                        e8w7x3g4(eo0p44l3);
                    }
                };
                return dzf508j;
            }());
            var b2c4hn = new t8osv();
            var y97gh49b = function (u43fbz, cj8g8s, bvfe52z) {
                if (this['authOptions']['headers'] !== undefined) {
                    b2c4hn['warn']('To\x20send\x20headers\x20with\x20the\x20auth\x20request,\x20you\x20must\x20use\x20AJAX,\x20rather\x20than\x20JSONP.');
                }
                var gb605wo61 = u43fbz['nextAuthCallbackID']['toString']();
                u43fbz['nextAuthCallbackID']++;
                var uon3js0 = u43fbz['getDocument']();
                var h27h58 = uon3js0['createElement']('script');
                u43fbz['auth_callbacks'][gb605wo61] = function (ga58ox) {
                    bvfe52z(null, ga58ox);
                };
                var nr626x57 = 'Pusher.auth_callbacks[\x27' + gb605wo61 + '\x27]';
                h27h58['src'] = this['options']['authEndpoint'] + '?callback=' + encodeURIComponent(nr626x57) + '&' + this['composeQuery'](cj8g8s);
                var lf7xvoz5 = uon3js0['getElementsByTagName']('head')[0x0] || uon3js0['documentElement'];
                lf7xvoz5['insertBefore'](h27h58, lf7xvoz5['firstChild']);
            };
            var epl2o635m = y97gh49b;
            var cr5z9 = (function () {
                function neioh63(bu2xvo05t) {
                    this['src'] = bu2xvo05t;
                }
                neioh63['prototype']['send'] = function (x7k7vp) {
                    var o331e5h2 = this;
                    var wabdcu75 = 'Error\x20loading\x20' + o331e5h2['src'];
                    o331e5h2['script'] = document['createElement']('script');
                    o331e5h2['script']['id'] = x7k7vp['id'];
                    o331e5h2['script']['src'] = o331e5h2['src'];
                    o331e5h2['script']['type'] = 'text/javascript';
                    o331e5h2['script']['charset'] = 'UTF-8';
                    if (o331e5h2['script']['addEventListener']) {
                        o331e5h2['script']['onerror'] = function () {
                            x7k7vp['callback'](wabdcu75);
                        };
                        o331e5h2['script']['onload'] = function () {
                            x7k7vp['callback'](null);
                        };
                    } else {
                        o331e5h2['script']['onreadystatechange'] = function () {
                            if (o331e5h2['script']['readyState'] === 'loaded' || o331e5h2['script']['readyState'] === 'complete') {
                                x7k7vp['callback'](null);
                            }
                        };
                    }
                    if (o331e5h2['script']['async'] === undefined && document['attachEvent'] && /opera/i['test'](navigator['userAgent'])) {
                        o331e5h2['errorScript'] = document['createElement']('script');
                        o331e5h2['errorScript']['id'] = x7k7vp['id'] + '_error';
                        o331e5h2['errorScript']['text'] = x7k7vp['name'] + '(\x27' + wabdcu75 + '\x27);';
                        o331e5h2['script']['async'] = o331e5h2['errorScript']['async'] = ![];
                    } else {
                        o331e5h2['script']['async'] = !![];
                    }
                    var sn4w1uu = document['getElementsByTagName']('head')[0x0];
                    sn4w1uu['insertBefore'](o331e5h2['script'], sn4w1uu['firstChild']);
                    if (o331e5h2['errorScript']) {
                        sn4w1uu['insertBefore'](o331e5h2['errorScript'], o331e5h2['script']['nextSibling']);
                    }
                };
                neioh63['prototype']['cleanup'] = function () {
                    if (this['script']) {
                        this['script']['onload'] = this['script']['onerror'] = null;
                        this['script']['onreadystatechange'] = null;
                    }
                    if (this['script'] && this['script']['parentNode']) {
                        this['script']['parentNode']['removeChild'](this['script']);
                    }
                    if (this['errorScript'] && this['errorScript']['parentNode']) {
                        this['errorScript']['parentNode']['removeChild'](this['errorScript']);
                    }
                    this['script'] = null;
                    this['errorScript'] = null;
                };
                return neioh63;
            }());
            var t2175p = cr5z9;
            var zu5961 = (function () {
                function lhb20(usbz87f3, c7xvw) {
                    this['url'] = usbz87f3;
                    this['data'] = c7xvw;
                }
                lhb20['prototype']['send'] = function (s2a99hem3) {
                    if (this['request']) {
                        return;
                    }
                    var aqae9r = u2m17(this['data']);
                    var c1agr = this['url'] + '/' + s2a99hem3['number'] + '?' + aqae9r;
                    this['request'] = xbxyl5wj['createScriptRequest'](c1agr);
                    this['request']['send'](s2a99hem3);
                };
                lhb20['prototype']['cleanup'] = function () {
                    if (this['request']) {
                        this['request']['cleanup']();
                    }
                };
                return lhb20;
            }());
            var wn16g9ia = zu5961;
            var ngpv637e0 = function (o26a9p6c, j6r8zjp1) {
                return function (nom36a830, i5xu5bxo) {
                    var o1o44aw9 = 'http' + (j6r8zjp1 ? 's' : '') + '://';
                    var z230to71 = o1o44aw9 + (o26a9p6c['host'] || o26a9p6c['options']['host']) + o26a9p6c['options']['path'];
                    var u660nwhp = xbxyl5wj['createJSONPRequest'](z230to71, nom36a830);
                    var gn9z3 = xbxyl5wj['ScriptReceivers']['create'](function (wl26y9, f4t2hf883) {
                        v2e9d['remove'](gn9z3);
                        u660nwhp['cleanup']();
                        if (f4t2hf883 && f4t2hf883['host']) {
                            o26a9p6c['host'] = f4t2hf883['host'];
                        }
                        if (i5xu5bxo) {
                            i5xu5bxo(wl26y9, f4t2hf883);
                        }
                    });
                    u660nwhp['send'](gn9z3);
                };
            };
            var pf93yb7 = {
                'name': 'jsonp',
                'getAgent': ngpv637e0
            };
            var waku02uq = pf93yb7;
            function z53y5cp(ph58z94c, g1266v84f, ulx2h) {
                var wdoxrmgsc = ph58z94c + (g1266v84f['useTLS'] ? 's' : '');
                var zc86iv478 = g1266v84f['useTLS'] ? g1266v84f['hostTLS'] : g1266v84f['hostNonTLS'];
                return wdoxrmgsc + '://' + zc86iv478 + ulx2h;
            }
            function azeix85ms(rwxtggc, v4xa2) {
                var r4jmy23 = '/app/' + rwxtggc;
                var awp01s663 = '?protocol=' + ii151h17['PROTOCOL'] + '&client=js' + '&version=' + ii151h17['VERSION'] + (v4xa2 ? '&' + v4xa2 : '');
                return r4jmy23 + awp01s663;
            }
            var eekl2 = {
                'getInitial': function (b537t, vagob290k) {
                    var t7yz9rzgv = (vagob290k['httpPath'] || '') + azeix85ms(b537t, 'flash=false');
                    return z53y5cp('ws', vagob290k, t7yz9rzgv);
                }
            };
            var v7cgo = {
                'getInitial': function (w7g920, e57jj86j) {
                    var zr299e = (e57jj86j['httpPath'] || '/pusher') + azeix85ms(w7g920);
                    return z53y5cp('http', e57jj86j, zr299e);
                }
            };
            var g22w5h54 = {
                'getInitial': function (r0kw9, w71w0) {
                    return z53y5cp('http', w71w0, w71w0['httpPath'] || '/pusher');
                },
                'getPath': function (i94jbd515, dn290z1) {
                    return azeix85ms(i94jbd515);
                }
            };
            var e698m2 = (function () {
                function d2xo24ik1() {
                    this['_callbacks'] = {};
                }
                d2xo24ik1['prototype']['get'] = function (vcda7y25f) {
                    return this['_callbacks'][i40if7(vcda7y25f)];
                };
                d2xo24ik1['prototype']['add'] = function (lk4446ib, ebt26yu1n, q6d28bczn) {
                    var k6gk2d = i40if7(lk4446ib);
                    this['_callbacks'][k6gk2d] = this['_callbacks'][k6gk2d] || [];
                    this['_callbacks'][k6gk2d]['push']({
                        'fn': ebt26yu1n,
                        'context': q6d28bczn
                    });
                };
                d2xo24ik1['prototype']['remove'] = function (hu361, j425qr67, i6822) {
                    if (!hu361 && !j425qr67 && !i6822) {
                        this['_callbacks'] = {};
                        return;
                    }
                    var o8211h07 = hu361 ? [i40if7(hu361)] : njq3739ra(this['_callbacks']);
                    if (j425qr67 || i6822) {
                        this['removeCallback'](o8211h07, j425qr67, i6822);
                    } else {
                        this['removeAllCallbacks'](o8211h07);
                    }
                };
                d2xo24ik1['prototype']['removeCallback'] = function (sfg06, cg3vz0k, a2b5sd) {
                    kxn34w3(sfg06, function (iun4tk) {
                        this['_callbacks'][iun4tk] = e3up9bbd(this['_callbacks'][iun4tk] || [], function (lv5r10d) {
                            return cg3vz0k && cg3vz0k !== lv5r10d['fn'] || a2b5sd && a2b5sd !== lv5r10d['context'];
                        });
                        if (this['_callbacks'][iun4tk]['length'] === 0x0) {
                            delete this['_callbacks'][iun4tk];
                        }
                    }, this);
                };
                d2xo24ik1['prototype']['removeAllCallbacks'] = function (zels3jc) {
                    kxn34w3(zels3jc, function (g7ef8cx) {
                        delete this['_callbacks'][g7ef8cx];
                    }, this);
                };
                return d2xo24ik1;
            }());
            var er7jbs = e698m2;
            function i40if7(m834s56) {
                return '_' + m834s56;
            }
            var orforg2g = (function () {
                function tvx94c(a02wz3f6z) {
                    this['callbacks'] = new er7jbs();
                    this['global_callbacks'] = [];
                    this['failThrough'] = a02wz3f6z;
                }
                tvx94c['prototype']['bind'] = function (xr55x4w4u, o4l34x9b7, tam4735lj) {
                    this['callbacks']['add'](xr55x4w4u, o4l34x9b7, tam4735lj);
                    return this;
                };
                tvx94c['prototype']['bind_global'] = function (zh0su19) {
                    this['global_callbacks']['push'](zh0su19);
                    return this;
                };
                tvx94c['prototype']['unbind'] = function (o7qag96xn, fpt2mbvq, wvjos2) {
                    this['callbacks']['remove'](o7qag96xn, fpt2mbvq, wvjos2);
                    return this;
                };
                tvx94c['prototype']['unbind_global'] = function (g6la79) {
                    if (!g6la79) {
                        this['global_callbacks'] = [];
                        return this;
                    }
                    this['global_callbacks'] = e3up9bbd(this['global_callbacks'] || [], function (u0din) {
                        return u0din !== g6la79;
                    });
                    return this;
                };
                tvx94c['prototype']['unbind_all'] = function () {
                    this['unbind']();
                    this['unbind_global']();
                    return this;
                };
                tvx94c['prototype']['emit'] = function (g2u52i62, o939033, ua1x2nmbw) {
                    for (var h0vf9r9n = 0x0; h0vf9r9n < this['global_callbacks']['length']; h0vf9r9n++) {
                        this['global_callbacks'][h0vf9r9n](g2u52i62, o939033);
                    }
                    var id0xsj = this['callbacks']['get'](g2u52i62);
                    var n69qunyv = [];
                    if (ua1x2nmbw) {
                        n69qunyv['push'](o939033, ua1x2nmbw);
                    } else if (o939033) {
                        n69qunyv['push'](o939033);
                    }
                    if (id0xsj && id0xsj['length'] > 0x0) {
                        for (var h0vf9r9n = 0x0; h0vf9r9n < id0xsj['length']; h0vf9r9n++) {
                            id0xsj[h0vf9r9n]['fn']['apply'](id0xsj[h0vf9r9n]['context'] || window, n69qunyv);
                        }
                    } else if (this['failThrough']) {
                        this['failThrough'](g2u52i62, o939033);
                    }
                    return this;
                };
                return tvx94c;
            }());
            var cpmt51ku8 = orforg2g;
            var t7y8ps411 = undefined && undefined['__extends'] || (function () {
                var c4go49g = function (t5x24, rnj75jm3) {
                    c4go49g = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (kmee9, d8859k8c) {
                        kmee9['__proto__'] = d8859k8c;
                    } || function (jdc051dv, ifow8) {
                        for (var crudjvn in ifow8)
                            if (ifow8['hasOwnProperty'](crudjvn))
                                jdc051dv[crudjvn] = ifow8[crudjvn];
                    };
                    return c4go49g(t5x24, rnj75jm3);
                };
                return function (by43a8v, c7ewgw) {
                    c4go49g(by43a8v, c7ewgw);
                    function f262st8e() {
                        this['constructor'] = by43a8v;
                    }
                    by43a8v['prototype'] = c7ewgw === null ? Object['create'](c7ewgw) : (f262st8e['prototype'] = c7ewgw['prototype'], new f262st8e());
                };
            }());
            var eda9d = function (tvu3t0) {
                t7y8ps411(o97l5tre, tvu3t0);
                function o97l5tre(i9pzwkw62, v99131444, n69ljnded, t06o59f, t2hd8c1o) {
                    var fcf7xq = tvu3t0['call'](this) || this;
                    fcf7xq['initialize'] = xbxyl5wj['transportConnectionInitializer'];
                    fcf7xq['hooks'] = i9pzwkw62;
                    fcf7xq['name'] = v99131444;
                    fcf7xq['priority'] = n69ljnded;
                    fcf7xq['key'] = t06o59f;
                    fcf7xq['options'] = t2hd8c1o;
                    fcf7xq['state'] = 'new';
                    fcf7xq['timeline'] = t2hd8c1o['timeline'];
                    fcf7xq['activityTimeout'] = t2hd8c1o['activityTimeout'];
                    fcf7xq['id'] = fcf7xq['timeline']['generateUniqueID']();
                    return fcf7xq;
                }
                o97l5tre['prototype']['handlesActivityChecks'] = function () {
                    return Boolean(this['hooks']['handlesActivityChecks']);
                };
                o97l5tre['prototype']['supportsPing'] = function () {
                    return Boolean(this['hooks']['supportsPing']);
                };
                o97l5tre['prototype']['connect'] = function () {
                    var hb89evt = this;
                    if (this['socket'] || this['state'] !== 'initialized') {
                        return ![];
                    }
                    var agtf88 = this['hooks']['urls']['getInitial'](this['key'], this['options']);
                    try {
                        this['socket'] = this['hooks']['getSocket'](agtf88, this['options']);
                    } catch (a846z2240) {
                        drdfz5['defer'](function () {
                            hb89evt['onError'](a846z2240);
                            hb89evt['changeState']('closed');
                        });
                        return ![];
                    }
                    this['bindListeners']();
                    b2c4hn['debug']('Connecting', {
                        'transport': this['name'],
                        'url': agtf88
                    });
                    this['changeState']('connecting');
                    return !![];
                };
                o97l5tre['prototype']['close'] = function () {
                    if (this['socket']) {
                        this['socket']['close']();
                        return !![];
                    } else {
                        return ![];
                    }
                };
                o97l5tre['prototype']['send'] = function (j1226) {
                    var skef3g = this;
                    if (this['state'] === 'open') {
                        drdfz5['defer'](function () {
                            if (skef3g['socket']) {
                                skef3g['socket']['send'](j1226);
                            }
                        });
                        return !![];
                    } else {
                        return ![];
                    }
                };
                o97l5tre['prototype']['ping'] = function () {
                    if (this['state'] === 'open' && this['supportsPing']()) {
                        this['socket']['ping']();
                    }
                };
                o97l5tre['prototype']['onOpen'] = function () {
                    if (this['hooks']['beforeOpen']) {
                        this['hooks']['beforeOpen'](this['socket'], this['hooks']['urls']['getPath'](this['key'], this['options']));
                    }
                    this['changeState']('open');
                    this['socket']['onopen'] = undefined;
                };
                o97l5tre['prototype']['onError'] = function (jv0uz6) {
                    this['emit']('error', {
                        'type': 'WebSocketError',
                        'error': jv0uz6
                    });
                    this['timeline']['error'](this['buildTimelineMessage']({ 'error': jv0uz6['toString']() }));
                };
                o97l5tre['prototype']['onClose'] = function (q7i02489e) {
                    if (q7i02489e) {
                        this['changeState']('closed', {
                            'code': q7i02489e['code'],
                            'reason': q7i02489e['reason'],
                            'wasClean': q7i02489e['wasClean']
                        });
                    } else {
                        this['changeState']('closed');
                    }
                    this['unbindListeners']();
                    this['socket'] = undefined;
                };
                o97l5tre['prototype']['onMessage'] = function (bw80cux4g) {
                    this['emit']('message', bw80cux4g);
                };
                o97l5tre['prototype']['onActivity'] = function () {
                    this['emit']('activity');
                };
                o97l5tre['prototype']['bindListeners'] = function () {
                    var p4wdx37 = this;
                    this['socket']['onopen'] = function () {
                        p4wdx37['onOpen']();
                    };
                    this['socket']['onerror'] = function (wx987) {
                        p4wdx37['onError'](wx987);
                    };
                    this['socket']['onclose'] = function (wsq8140) {
                        p4wdx37['onClose'](wsq8140);
                    };
                    this['socket']['onmessage'] = function (rrqv26z) {
                        p4wdx37['onMessage'](rrqv26z);
                    };
                    if (this['supportsPing']()) {
                        this['socket']['onactivity'] = function () {
                            p4wdx37['onActivity']();
                        };
                    }
                };
                o97l5tre['prototype']['unbindListeners'] = function () {
                    if (this['socket']) {
                        this['socket']['onopen'] = undefined;
                        this['socket']['onerror'] = undefined;
                        this['socket']['onclose'] = undefined;
                        this['socket']['onmessage'] = undefined;
                        if (this['supportsPing']()) {
                            this['socket']['onactivity'] = undefined;
                        }
                    }
                };
                o97l5tre['prototype']['changeState'] = function (b1ok52, v01t656m) {
                    this['state'] = b1ok52;
                    this['timeline']['info'](this['buildTimelineMessage']({
                        'state': b1ok52,
                        'params': v01t656m
                    }));
                    this['emit'](b1ok52, v01t656m);
                };
                o97l5tre['prototype']['buildTimelineMessage'] = function (e18xj7) {
                    return qw69vny2b({ 'cid': this['id'] }, e18xj7);
                };
                return o97l5tre;
            }(cpmt51ku8);
            var si0f3k9x5 = eda9d;
            var lzq66fa2h = (function () {
                function np2k13(nvnr8z1) {
                    this['hooks'] = nvnr8z1;
                }
                np2k13['prototype']['isSupported'] = function (z601luk4i) {
                    return this['hooks']['isSupported'](z601luk4i);
                };
                np2k13['prototype']['createConnection'] = function (ry967, lv40d, vw5n6de5, w99h2j1s) {
                    return new si0f3k9x5(this['hooks'], ry967, lv40d, vw5n6de5, w99h2j1s);
                };
                return np2k13;
            }());
            var di6s71s1 = lzq66fa2h;
            var t85pu4l = new di6s71s1({
                'urls': eekl2,
                'handlesActivityChecks': ![],
                'supportsPing': ![],
                'isInitialized': function () {
                    return Boolean(xbxyl5wj['getWebSocketAPI']());
                },
                'isSupported': function () {
                    return Boolean(xbxyl5wj['getWebSocketAPI']());
                },
                'getSocket': function (fs60eo) {
                    return xbxyl5wj['createWebSocket'](fs60eo);
                }
            });
            var hk8bo7pt = {
                'urls': v7cgo,
                'handlesActivityChecks': ![],
                'supportsPing': !![],
                'isInitialized': function () {
                    return !![];
                }
            };
            var qre8ar0 = qw69vny2b({
                'getSocket': function (lfl48m) {
                    return xbxyl5wj['HTTPFactory']['createStreamingSocket'](lfl48m);
                }
            }, hk8bo7pt);
            var e3poy7c = qw69vny2b({
                'getSocket': function (z2337vebg) {
                    return xbxyl5wj['HTTPFactory']['createPollingSocket'](z2337vebg);
                }
            }, hk8bo7pt);
            var i1pawli92 = {
                'isSupported': function () {
                    return xbxyl5wj['isXHRSupported']();
                }
            };
            var m82qlc = new di6s71s1(qw69vny2b({}, qre8ar0, i1pawli92));
            var u1op2qy = new di6s71s1(qw69vny2b({}, e3poy7c, i1pawli92));
            var n19w9 = {
                'ws': t85pu4l,
                'xhr_streaming': m82qlc,
                'xhr_polling': u1op2qy
            };
            var l1zzxd12 = n19w9;
            var m8ls30 = new di6s71s1({
                'file': 'sockjs',
                'urls': g22w5h54,
                'handlesActivityChecks': !![],
                'supportsPing': ![],
                'isSupported': function () {
                    return !![];
                },
                'isInitialized': function () {
                    return window['SockJS'] !== undefined;
                },
                'getSocket': function (t67v9, fl2516s) {
                    return new window['SockJS'](t67v9, null, {
                        'js_path': igmf6['getPath']('sockjs', { 'useTLS': fl2516s['useTLS'] }),
                        'ignore_null_origin': fl2516s['ignoreNullOrigin']
                    });
                },
                'beforeOpen': function (ty1e6rln, pmrx1azf) {
                    ty1e6rln['send'](JSON['stringify']({ 'path': pmrx1azf }));
                }
            });
            var a954a51a = {
                'isSupported': function (jivi6) {
                    var zew3p9 = xbxyl5wj['isXDRSupported'](jivi6['useTLS']);
                    return zew3p9;
                }
            };
            var qpc36 = new di6s71s1(qw69vny2b({}, qre8ar0, a954a51a));
            var k7w2jx7 = new di6s71s1(qw69vny2b({}, e3poy7c, a954a51a));
            l1zzxd12['xdr_streaming'] = qpc36;
            l1zzxd12['xdr_polling'] = k7w2jx7;
            l1zzxd12['sockjs'] = m8ls30;
            var b99r47be = l1zzxd12;
            var vo8y4u = undefined && undefined['__extends'] || (function () {
                var f3emkw = function (vdt96641, tu7691v24) {
                    f3emkw = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (ti38v6e7b, z2k214) {
                        ti38v6e7b['__proto__'] = z2k214;
                    } || function (t39s24z8, nwu1mu1n) {
                        for (var w1c33sk4 in nwu1mu1n)
                            if (nwu1mu1n['hasOwnProperty'](w1c33sk4))
                                t39s24z8[w1c33sk4] = nwu1mu1n[w1c33sk4];
                    };
                    return f3emkw(vdt96641, tu7691v24);
                };
                return function (w106u4ei3, uq573) {
                    f3emkw(w106u4ei3, uq573);
                    function vx3gcm() {
                        this['constructor'] = w106u4ei3;
                    }
                    w106u4ei3['prototype'] = uq573 === null ? Object['create'](uq573) : (vx3gcm['prototype'] = uq573['prototype'], new vx3gcm());
                };
            }());
            var k052euw9 = function (n0taz) {
                vo8y4u(f8g48f7, n0taz);
                function f8g48f7() {
                    var rf5dj = n0taz['call'](this) || this;
                    var u486n4l = rf5dj;
                    if (window['addEventListener'] !== undefined) {
                        window['addEventListener']('online', function () {
                            u486n4l['emit']('online');
                        }, ![]);
                        window['addEventListener']('offline', function () {
                            u486n4l['emit']('offline');
                        }, ![]);
                    }
                    return rf5dj;
                }
                f8g48f7['prototype']['isOnline'] = function () {
                    if (window['navigator']['onLine'] === undefined) {
                        return !![];
                    } else {
                        return window['navigator']['onLine'];
                    }
                };
                return f8g48f7;
            }(cpmt51ku8);
            var ge8036326 = new k052euw9();
            var tc377a = (function () {
                function fv17y5tj(dlx6y, o1618, u94nhk4) {
                    this['manager'] = dlx6y;
                    this['transport'] = o1618;
                    this['minPingDelay'] = u94nhk4['minPingDelay'];
                    this['maxPingDelay'] = u94nhk4['maxPingDelay'];
                    this['pingDelay'] = undefined;
                }
                fv17y5tj['prototype']['createConnection'] = function (c86fr1, wrvp39m4, w19h7eb, tz8y625l) {
                    var r5gkp326y = this;
                    tz8y625l = qw69vny2b({}, tz8y625l, { 'activityTimeout': this['pingDelay'] });
                    var i6o30ibu = this['transport']['createConnection'](c86fr1, wrvp39m4, w19h7eb, tz8y625l);
                    var q65885 = null;
                    var be7cgj = function () {
                        i6o30ibu['unbind']('open', be7cgj);
                        i6o30ibu['bind']('closed', ohyjf5g3);
                        q65885 = drdfz5['now']();
                    };
                    var ohyjf5g3 = function (lky06o8l3) {
                        i6o30ibu['unbind']('closed', ohyjf5g3);
                        if (lky06o8l3['code'] === 0x3ea || lky06o8l3['code'] === 0x3eb) {
                            r5gkp326y['manager']['reportDeath']();
                        } else if (!lky06o8l3['wasClean'] && q65885) {
                            var n9i77 = drdfz5['now']() - q65885;
                            if (n9i77 < 0x2 * r5gkp326y['maxPingDelay']) {
                                r5gkp326y['manager']['reportDeath']();
                                r5gkp326y['pingDelay'] = Math['max'](n9i77 / 0x2, r5gkp326y['minPingDelay']);
                            }
                        }
                    };
                    i6o30ibu['bind']('open', be7cgj);
                    return i6o30ibu;
                };
                fv17y5tj['prototype']['isSupported'] = function (wtikym) {
                    return this['manager']['isAlive']() && this['transport']['isSupported'](wtikym);
                };
                return fv17y5tj;
            }());
            var g9vb52 = tc377a;
            var gz37k9cg8 = {
                'decodeMessage': function (x1dcmp9r) {
                    try {
                        var ja45l5 = JSON['parse'](x1dcmp9r['data']);
                        var sv2rjr34 = ja45l5['data'];
                        if (typeof sv2rjr34 === 'string') {
                            try {
                                sv2rjr34 = JSON['parse'](ja45l5['data']);
                            } catch (yx409scfb) {
                            }
                        }
                        var bqf87 = {
                            'event': ja45l5['event'],
                            'channel': ja45l5['channel'],
                            'data': sv2rjr34
                        };
                        if (ja45l5['user_id']) {
                            bqf87['user_id'] = ja45l5['user_id'];
                        }
                        return bqf87;
                    } catch (d312v) {
                        throw {
                            'type': 'MessageParseError',
                            'error': d312v,
                            'data': x1dcmp9r['data']
                        };
                    }
                },
                'encodeMessage': function (sm474x5l) {
                    return JSON['stringify'](sm474x5l);
                },
                'processHandshake': function (b26rg8a) {
                    var p530r3 = gz37k9cg8['decodeMessage'](b26rg8a);
                    if (p530r3['event'] === 'pusher:connection_established') {
                        if (!p530r3['data']['activity_timeout']) {
                            throw 'No\x20activity\x20timeout\x20specified\x20in\x20handshake';
                        }
                        return {
                            'action': 'connected',
                            'id': p530r3['data']['socket_id'],
                            'activityTimeout': p530r3['data']['activity_timeout'] * 0x3e8
                        };
                    } else if (p530r3['event'] === 'pusher:error') {
                        return {
                            'action': this['getCloseAction'](p530r3['data']),
                            'error': this['getCloseError'](p530r3['data'])
                        };
                    } else {
                        throw 'Invalid\x20handshake';
                    }
                },
                'getCloseAction': function (l49d2pl) {
                    if (l49d2pl['code'] < 0xfa0) {
                        if (l49d2pl['code'] >= 0x3ea && l49d2pl['code'] <= 0x3ec) {
                            return 'backoff';
                        } else {
                            return null;
                        }
                    } else if (l49d2pl['code'] === 0xfa0) {
                        return 'tls_only';
                    } else if (l49d2pl['code'] < 0x1004) {
                        return 'refused';
                    } else if (l49d2pl['code'] < 0x1068) {
                        return 'backoff';
                    } else if (l49d2pl['code'] < 0x10cc) {
                        return 'retry';
                    } else {
                        return 'refused';
                    }
                },
                'getCloseError': function (i0n32) {
                    if (i0n32['code'] !== 0x3e8 && i0n32['code'] !== 0x3e9) {
                        return {
                            'type': 'PusherError',
                            'data': {
                                'code': i0n32['code'],
                                'message': i0n32['reason'] || i0n32['message']
                            }
                        };
                    } else {
                        return null;
                    }
                }
            };
            var z889k3e4i = gz37k9cg8;
            var bl3ld8l0a = undefined && undefined['__extends'] || (function () {
                var otx98dp59 = function (ecwi5, re541c) {
                    otx98dp59 = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (bm48sft90, g825wer9) {
                        bm48sft90['__proto__'] = g825wer9;
                    } || function (tm77s, r6737) {
                        for (var ww768c in r6737)
                            if (r6737['hasOwnProperty'](ww768c))
                                tm77s[ww768c] = r6737[ww768c];
                    };
                    return otx98dp59(ecwi5, re541c);
                };
                return function (sh495vl, v6x99) {
                    otx98dp59(sh495vl, v6x99);
                    function v2org99() {
                        this['constructor'] = sh495vl;
                    }
                    sh495vl['prototype'] = v6x99 === null ? Object['create'](v6x99) : (v2org99['prototype'] = v6x99['prototype'], new v2org99());
                };
            }());
            var o5735i = function (jcj4c) {
                bl3ld8l0a(udkxxy7, jcj4c);
                function udkxxy7(ya28h9r, gq2i26tm1) {
                    var hrv4a3f23 = jcj4c['call'](this) || this;
                    hrv4a3f23['id'] = ya28h9r;
                    hrv4a3f23['transport'] = gq2i26tm1;
                    hrv4a3f23['activityTimeout'] = gq2i26tm1['activityTimeout'];
                    hrv4a3f23['bindListeners']();
                    return hrv4a3f23;
                }
                udkxxy7['prototype']['handlesActivityChecks'] = function () {
                    return this['transport']['handlesActivityChecks']();
                };
                udkxxy7['prototype']['send'] = function (u8b7r) {
                    return this['transport']['send'](u8b7r);
                };
                udkxxy7['prototype']['send_event'] = function (y953k, z76174428, x47x4kb92) {
                    var l6v4188kv = {
                        'event': y953k,
                        'data': z76174428
                    };
                    if (x47x4kb92) {
                        l6v4188kv['channel'] = x47x4kb92;
                    }
                    b2c4hn['debug']('Event\x20sent', l6v4188kv);
                    return this['send'](z889k3e4i['encodeMessage'](l6v4188kv));
                };
                udkxxy7['prototype']['ping'] = function () {
                    if (this['transport']['supportsPing']()) {
                        this['transport']['ping']();
                    } else {
                        this['send_event']('pusher:ping', {});
                    }
                };
                udkxxy7['prototype']['close'] = function () {
                    this['transport']['close']();
                };
                udkxxy7['prototype']['bindListeners'] = function () {
                    var gp82exjs = this;
                    var t6xm6rn = {
                        'message': function (t31bwe4) {
                            var p60ek8;
                            try {
                                p60ek8 = z889k3e4i['decodeMessage'](t31bwe4);
                            } catch (q41ns4) {
                                gp82exjs['emit']('error', {
                                    'type': 'MessageParseError',
                                    'error': q41ns4,
                                    'data': t31bwe4['data']
                                });
                            }
                            if (p60ek8 !== undefined) {
                                b2c4hn['debug']('Event\x20recd', p60ek8);
                                switch (p60ek8['event']) {
                                case 'pusher:error':
                                    gp82exjs['emit']('error', {
                                        'type': 'PusherError',
                                        'data': p60ek8['data']
                                    });
                                    break;
                                case 'pusher:ping':
                                    gp82exjs['emit']('ping');
                                    break;
                                case 'pusher:pong':
                                    gp82exjs['emit']('pong');
                                    break;
                                }
                                gp82exjs['emit']('message', p60ek8);
                            }
                        },
                        'activity': function () {
                            gp82exjs['emit']('activity');
                        },
                        'error': function (t8b84) {
                            gp82exjs['emit']('error', t8b84);
                        },
                        'closed': function (b1o7vs7) {
                            vda48659();
                            if (b1o7vs7 && b1o7vs7['code']) {
                                gp82exjs['handleCloseEvent'](b1o7vs7);
                            }
                            gp82exjs['transport'] = null;
                            gp82exjs['emit']('closed');
                        }
                    };
                    var vda48659 = function () {
                        si4uw(t6xm6rn, function (g8051, gv5k76) {
                            gp82exjs['transport']['unbind'](gv5k76, g8051);
                        });
                    };
                    si4uw(t6xm6rn, function (h2n2j, e9036j8) {
                        gp82exjs['transport']['bind'](e9036j8, h2n2j);
                    });
                };
                udkxxy7['prototype']['handleCloseEvent'] = function (p6b1v) {
                    var tnwh0132 = z889k3e4i['getCloseAction'](p6b1v);
                    var n47sph = z889k3e4i['getCloseError'](p6b1v);
                    if (n47sph) {
                        this['emit']('error', n47sph);
                    }
                    if (tnwh0132) {
                        this['emit'](tnwh0132, {
                            'action': tnwh0132,
                            'error': n47sph
                        });
                    }
                };
                return udkxxy7;
            }(cpmt51ku8);
            var b6145xov = o5735i;
            var ma0y6 = (function () {
                function lkgu69h1(xuff7, eur8zivn) {
                    this['transport'] = xuff7;
                    this['callback'] = eur8zivn;
                    this['bindListeners']();
                }
                lkgu69h1['prototype']['close'] = function () {
                    this['unbindListeners']();
                    this['transport']['close']();
                };
                lkgu69h1['prototype']['bindListeners'] = function () {
                    var h5883m3e = this;
                    this['onMessage'] = function (ve26oh1z8) {
                        h5883m3e['unbindListeners']();
                        var x8144;
                        try {
                            x8144 = z889k3e4i['processHandshake'](ve26oh1z8);
                        } catch (qfi1v256) {
                            h5883m3e['finish']('error', { 'error': qfi1v256 });
                            h5883m3e['transport']['close']();
                            return;
                        }
                        if (x8144['action'] === 'connected') {
                            h5883m3e['finish']('connected', {
                                'connection': new b6145xov(x8144['id'], h5883m3e['transport']),
                                'activityTimeout': x8144['activityTimeout']
                            });
                        } else {
                            h5883m3e['finish'](x8144['action'], { 'error': x8144['error'] });
                            h5883m3e['transport']['close']();
                        }
                    };
                    this['onClosed'] = function (p13bex) {
                        h5883m3e['unbindListeners']();
                        var x0q3xe = z889k3e4i['getCloseAction'](p13bex) || 'backoff';
                        var b8346y = z889k3e4i['getCloseError'](p13bex);
                        h5883m3e['finish'](x0q3xe, { 'error': b8346y });
                    };
                    this['transport']['bind']('message', this['onMessage']);
                    this['transport']['bind']('closed', this['onClosed']);
                };
                lkgu69h1['prototype']['unbindListeners'] = function () {
                    this['transport']['unbind']('message', this['onMessage']);
                    this['transport']['unbind']('closed', this['onClosed']);
                };
                lkgu69h1['prototype']['finish'] = function (wp279, op9390bgu) {
                    this['callback'](qw69vny2b({
                        'transport': this['transport'],
                        'action': wp279
                    }, op9390bgu));
                };
                return lkgu69h1;
            }());
            var xyp8u = ma0y6;
            var ktua3y = (function () {
                function h93vz7(rw777j, j8zd1i5l) {
                    this['channel'] = rw777j;
                    var xqqwqs61 = j8zd1i5l['authTransport'];
                    if (typeof xbxyl5wj['getAuthorizers']()[xqqwqs61] === 'undefined') {
                        throw '\x27' + xqqwqs61 + '\x27\x20is\x20not\x20a\x20recognized\x20auth\x20transport';
                    }
                    this['type'] = xqqwqs61;
                    this['options'] = j8zd1i5l;
                    this['authOptions'] = j8zd1i5l['auth'] || {};
                }
                h93vz7['prototype']['composeQuery'] = function (ew5b7) {
                    var kosegk = 'socket_id=' + encodeURIComponent(ew5b7) + '&channel_name=' + encodeURIComponent(this['channel']['name']);
                    for (var dr66g6x0 in this['authOptions']['params']) {
                        kosegk += '&' + encodeURIComponent(dr66g6x0) + '=' + encodeURIComponent(this['authOptions']['params'][dr66g6x0]);
                    }
                    return kosegk;
                };
                h93vz7['prototype']['authorize'] = function (w9h9j8, lj2rh9) {
                    h93vz7['authorizers'] = h93vz7['authorizers'] || xbxyl5wj['getAuthorizers']();
                    h93vz7['authorizers'][this['type']]['call'](this, xbxyl5wj, w9h9j8, lj2rh9);
                };
                return h93vz7;
            }());
            var nd5u3 = ktua3y;
            var qaip0r850 = (function () {
                function b584f875(lqh93c6, ki3av) {
                    this['timeline'] = lqh93c6;
                    this['options'] = ki3av || {};
                }
                b584f875['prototype']['send'] = function (zm48ga, g61v153) {
                    if (this['timeline']['isEmpty']()) {
                        return;
                    }
                    this['timeline']['send'](xbxyl5wj['TimelineTransport']['getAgent'](this, zm48ga), g61v153);
                };
                return b584f875;
            }());
            var w1z56z = qaip0r850;
            var g97842583 = undefined && undefined['__extends'] || (function () {
                var b1y49 = function (qzh2q, q5f74) {
                    b1y49 = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (zh89h0, pcqfnxxh) {
                        zh89h0['__proto__'] = pcqfnxxh;
                    } || function (uo38981, q1jpp73) {
                        for (var mi43fs54x in q1jpp73)
                            if (q1jpp73['hasOwnProperty'](mi43fs54x))
                                uo38981[mi43fs54x] = q1jpp73[mi43fs54x];
                    };
                    return b1y49(qzh2q, q5f74);
                };
                return function (w11pfx, j75x951) {
                    b1y49(w11pfx, j75x951);
                    function w6j70x() {
                        this['constructor'] = w11pfx;
                    }
                    w11pfx['prototype'] = j75x951 === null ? Object['create'](j75x951) : (w6j70x['prototype'] = j75x951['prototype'], new w6j70x());
                };
            }());
            var o754bmg40 = function (v20u07068) {
                g97842583(ypmb5tv, v20u07068);
                function ypmb5tv(p70uz99, geqpjq3r) {
                    var ed91n7 = v20u07068['call'](this, function (hk1i58n3, yjk3l86x6) {
                        b2c4hn['debug']('No\x20callbacks\x20on\x20' + p70uz99 + '\x20for\x20' + hk1i58n3);
                    }) || this;
                    ed91n7['name'] = p70uz99;
                    ed91n7['pusher'] = geqpjq3r;
                    ed91n7['subscribed'] = ![];
                    ed91n7['subscriptionPending'] = ![];
                    ed91n7['subscriptionCancelled'] = ![];
                    return ed91n7;
                }
                ypmb5tv['prototype']['authorize'] = function (s536r28, xdn4r) {
                    return xdn4r(null, { 'auth': '' });
                };
                ypmb5tv['prototype']['trigger'] = function (a1h1m, upy66e) {
                    if (a1h1m['indexOf']('client-') !== 0x0) {
                        throw new y6h7uuvf0('Event\x20\x27' + a1h1m + '\x27\x20does\x20not\x20start\x20with\x20\x27client-\x27');
                    }
                    if (!this['subscribed']) {
                        var bc1h0d9z = fn4cno89['buildLogSuffix']('triggeringClientEvents');
                        b2c4hn['warn']('Client\x20event\x20triggered\x20before\x20channel\x20\x27subscription_succeeded\x27\x20event\x20.\x20' + bc1h0d9z);
                    }
                    return this['pusher']['send_event'](a1h1m, upy66e, this['name']);
                };
                ypmb5tv['prototype']['disconnect'] = function () {
                    this['subscribed'] = ![];
                    this['subscriptionPending'] = ![];
                };
                ypmb5tv['prototype']['handleEvent'] = function (sjm5y) {
                    var h5au83g89 = sjm5y['event'];
                    var vx9a9c3t6 = sjm5y['data'];
                    if (h5au83g89 === 'pusher_internal:subscription_succeeded') {
                        this['handleSubscriptionSucceededEvent'](sjm5y);
                    } else if (h5au83g89['indexOf']('pusher_internal:') !== 0x0) {
                        var un96x = {};
                        this['emit'](h5au83g89, vx9a9c3t6, un96x);
                    }
                };
                ypmb5tv['prototype']['handleSubscriptionSucceededEvent'] = function (cf76757) {
                    this['subscriptionPending'] = ![];
                    this['subscribed'] = !![];
                    if (this['subscriptionCancelled']) {
                        this['pusher']['unsubscribe'](this['name']);
                    } else {
                        this['emit']('pusher:subscription_succeeded', cf76757['data']);
                    }
                };
                ypmb5tv['prototype']['subscribe'] = function () {
                    var t3dbx3ta = this;
                    if (this['subscribed']) {
                        return;
                    }
                    this['subscriptionPending'] = !![];
                    this['subscriptionCancelled'] = ![];
                    this['authorize'](this['pusher']['connection']['socket_id'], function (kxc621, aln286) {
                        if (kxc621) {
                            t3dbx3ta['subscriptionPending'] = ![];
                            b2c4hn['error'](kxc621['toString']());
                            t3dbx3ta['emit']('pusher:subscription_error', Object['assign']({}, {
                                'type': 'AuthError',
                                'error': kxc621['message']
                            }, kxc621 instanceof kq64ye9v8 ? { 'status': kxc621['status'] } : {}));
                        } else {
                            t3dbx3ta['pusher']['send_event']('pusher:subscribe', {
                                'auth': aln286['auth'],
                                'channel_data': aln286['channel_data'],
                                'channel': t3dbx3ta['name']
                            });
                        }
                    });
                };
                ypmb5tv['prototype']['unsubscribe'] = function () {
                    this['subscribed'] = ![];
                    this['pusher']['send_event']('pusher:unsubscribe', { 'channel': this['name'] });
                };
                ypmb5tv['prototype']['cancelSubscription'] = function () {
                    this['subscriptionCancelled'] = !![];
                };
                ypmb5tv['prototype']['reinstateSubscription'] = function () {
                    this['subscriptionCancelled'] = ![];
                };
                return ypmb5tv;
            }(cpmt51ku8);
            var c1vp13a1 = o754bmg40;
            var r9uj5293s = undefined && undefined['__extends'] || (function () {
                var x15ry9381 = function (y915l8, x9atx) {
                    x15ry9381 = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (x4h8yl13l, s89n474) {
                        x4h8yl13l['__proto__'] = s89n474;
                    } || function (y7cs00, rzrnj7) {
                        for (var unyms5 in rzrnj7)
                            if (rzrnj7['hasOwnProperty'](unyms5))
                                y7cs00[unyms5] = rzrnj7[unyms5];
                    };
                    return x15ry9381(y915l8, x9atx);
                };
                return function (a58q7uh, c806hgp) {
                    x15ry9381(a58q7uh, c806hgp);
                    function brizf() {
                        this['constructor'] = a58q7uh;
                    }
                    a58q7uh['prototype'] = c806hgp === null ? Object['create'](c806hgp) : (brizf['prototype'] = c806hgp['prototype'], new brizf());
                };
            }());
            var y75a9 = function (c532p7) {
                r9uj5293s(m2439, c532p7);
                function m2439() {
                    return c532p7 !== null && c532p7['apply'](this, arguments) || this;
                }
                m2439['prototype']['authorize'] = function (gg355g52t, g01u7) {
                    var k56h3 = vey382x['createAuthorizer'](this, this['pusher']['config']);
                    return k56h3['authorize'](gg355g52t, g01u7);
                };
                return m2439;
            }(c1vp13a1);
            var kf6ou53 = y75a9;
            var bhop7 = (function () {
                function x5w6617() {
                    this['reset']();
                }
                x5w6617['prototype']['get'] = function (k2h42d) {
                    if (Object['prototype']['hasOwnProperty']['call'](this['members'], k2h42d)) {
                        return {
                            'id': k2h42d,
                            'info': this['members'][k2h42d]
                        };
                    } else {
                        return null;
                    }
                };
                x5w6617['prototype']['each'] = function (ese5mjd5) {
                    var fy5v0iy = this;
                    si4uw(this['members'], function (wsgnf3r4, qi0ue9) {
                        ese5mjd5(fy5v0iy['get'](qi0ue9));
                    });
                };
                x5w6617['prototype']['setMyID'] = function (n39uw) {
                    this['myID'] = n39uw;
                };
                x5w6617['prototype']['onSubscription'] = function (k773msnq) {
                    this['members'] = k773msnq['presence']['hash'];
                    this['count'] = k773msnq['presence']['count'];
                    this['me'] = this['get'](this['myID']);
                };
                x5w6617['prototype']['addMember'] = function (t2hoz6y) {
                    if (this['get'](t2hoz6y['user_id']) === null) {
                        this['count']++;
                    }
                    this['members'][t2hoz6y['user_id']] = t2hoz6y['user_info'];
                    return this['get'](t2hoz6y['user_id']);
                };
                x5w6617['prototype']['removeMember'] = function (aq804vu5) {
                    var cm4lv064g = this['get'](aq804vu5['user_id']);
                    if (cm4lv064g) {
                        delete this['members'][aq804vu5['user_id']];
                        this['count']--;
                    }
                    return cm4lv064g;
                };
                x5w6617['prototype']['reset'] = function () {
                    this['members'] = {};
                    this['count'] = 0x0;
                    this['myID'] = null;
                    this['me'] = null;
                };
                return x5w6617;
            }());
            var netm8lgx = bhop7;
            var zcxb6t = undefined && undefined['__extends'] || (function () {
                var a52bl99g = function (lja6h9, o339o) {
                    a52bl99g = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (po5hl, f8r16w26) {
                        po5hl['__proto__'] = f8r16w26;
                    } || function (a0p9ir, ua9764646) {
                        for (var x106c830 in ua9764646)
                            if (ua9764646['hasOwnProperty'](x106c830))
                                a0p9ir[x106c830] = ua9764646[x106c830];
                    };
                    return a52bl99g(lja6h9, o339o);
                };
                return function (h80i6, o8w169m87) {
                    a52bl99g(h80i6, o8w169m87);
                    function aw0t2() {
                        this['constructor'] = h80i6;
                    }
                    h80i6['prototype'] = o8w169m87 === null ? Object['create'](o8w169m87) : (aw0t2['prototype'] = o8w169m87['prototype'], new aw0t2());
                };
            }());
            var lb4262oy = function (zg20yoj) {
                zcxb6t(ad6y387, zg20yoj);
                function ad6y387(d56kb5x5, vv80rvri) {
                    var m1b0l19 = zg20yoj['call'](this, d56kb5x5, vv80rvri) || this;
                    m1b0l19['members'] = new netm8lgx();
                    return m1b0l19;
                }
                ad6y387['prototype']['authorize'] = function (eolos2, wd7pk5) {
                    var aip3e0 = this;
                    zg20yoj['prototype']['authorize']['call'](this, eolos2, function (vb1wo9s9y, z3p48w) {
                        if (!vb1wo9s9y) {
                            z3p48w = z3p48w;
                            if (z3p48w['channel_data'] === undefined) {
                                var g0k01490a = fn4cno89['buildLogSuffix']('authenticationEndpoint');
                                b2c4hn['error']('Invalid\x20auth\x20response\x20for\x20channel\x20\x27' + aip3e0['name'] + '\x27,' + ('expected\x20\x27channel_data\x27\x20field.\x20' + g0k01490a));
                                wd7pk5('Invalid\x20auth\x20response');
                                return;
                            }
                            var p8it51lh6 = JSON['parse'](z3p48w['channel_data']);
                            aip3e0['members']['setMyID'](p8it51lh6['user_id']);
                        }
                        wd7pk5(vb1wo9s9y, z3p48w);
                    });
                };
                ad6y387['prototype']['handleEvent'] = function (p32yy49) {
                    var t881qm8 = p32yy49['event'];
                    if (t881qm8['indexOf']('pusher_internal:') === 0x0) {
                        this['handleInternalEvent'](p32yy49);
                    } else {
                        var k9185qf41 = p32yy49['data'];
                        var t8lb686 = {};
                        if (p32yy49['user_id']) {
                            t8lb686['user_id'] = p32yy49['user_id'];
                        }
                        this['emit'](t881qm8, k9185qf41, t8lb686);
                    }
                };
                ad6y387['prototype']['handleInternalEvent'] = function (ce0bkd1) {
                    var i52j0qo = ce0bkd1['event'];
                    var em1syrsi2 = ce0bkd1['data'];
                    switch (i52j0qo) {
                    case 'pusher_internal:subscription_succeeded':
                        this['handleSubscriptionSucceededEvent'](ce0bkd1);
                        break;
                    case 'pusher_internal:member_added':
                        var deu0q79 = this['members']['addMember'](em1syrsi2);
                        this['emit']('pusher:member_added', deu0q79);
                        break;
                    case 'pusher_internal:member_removed':
                        var oj6kyz64d = this['members']['removeMember'](em1syrsi2);
                        if (oj6kyz64d) {
                            this['emit']('pusher:member_removed', oj6kyz64d);
                        }
                        break;
                    }
                };
                ad6y387['prototype']['handleSubscriptionSucceededEvent'] = function (h8vk43d2) {
                    this['subscriptionPending'] = ![];
                    this['subscribed'] = !![];
                    if (this['subscriptionCancelled']) {
                        this['pusher']['unsubscribe'](this['name']);
                    } else {
                        this['members']['onSubscription'](h8vk43d2['data']);
                        this['emit']('pusher:subscription_succeeded', this['members']);
                    }
                };
                ad6y387['prototype']['disconnect'] = function () {
                    this['members']['reset']();
                    zg20yoj['prototype']['disconnect']['call'](this);
                };
                return ad6y387;
            }(kf6ou53);
            var edd401p4 = lb4262oy;
            var o4og5jp = k4t97a01q(0x1);
            var m3vvj8 = k4t97a01q(0x0);
            var k6srb = undefined && undefined['__extends'] || (function () {
                var n4hduk6 = function (w2tdl9hz, d1qod7o36) {
                    n4hduk6 = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (r9t60zcfh, ynj22n) {
                        r9t60zcfh['__proto__'] = ynj22n;
                    } || function (qq83ic807, fs3xhqd) {
                        for (var bw4348gh0 in fs3xhqd)
                            if (fs3xhqd['hasOwnProperty'](bw4348gh0))
                                qq83ic807[bw4348gh0] = fs3xhqd[bw4348gh0];
                    };
                    return n4hduk6(w2tdl9hz, d1qod7o36);
                };
                return function (l46b5o8y3, w32zv1) {
                    n4hduk6(l46b5o8y3, w32zv1);
                    function a5grm0() {
                        this['constructor'] = l46b5o8y3;
                    }
                    l46b5o8y3['prototype'] = w32zv1 === null ? Object['create'](w32zv1) : (a5grm0['prototype'] = w32zv1['prototype'], new a5grm0());
                };
            }());
            var ce44p5 = function (s5i9li49) {
                k6srb(cvwn4z, s5i9li49);
                function cvwn4z(kn1j4x, e4y936, dpg4bl4n) {
                    var v2il7 = s5i9li49['call'](this, kn1j4x, e4y936) || this;
                    v2il7['key'] = null;
                    v2il7['nacl'] = dpg4bl4n;
                    return v2il7;
                }
                cvwn4z['prototype']['authorize'] = function (w360f9pi3, l022ot) {
                    var r3r5mf2kp = this;
                    s5i9li49['prototype']['authorize']['call'](this, w360f9pi3, function (gjnf5a, pd59i78w1) {
                        if (gjnf5a) {
                            l022ot(gjnf5a, pd59i78w1);
                            return;
                        }
                        var inmm6ja0w = pd59i78w1['shared_secret'];
                        if (!inmm6ja0w) {
                            l022ot(new Error('No\x20shared_secret\x20key\x20in\x20auth\x20payload\x20for\x20encrypted\x20channel:\x20' + r3r5mf2kp['name']), null);
                            return;
                        }
                        r3r5mf2kp['key'] = Object(m3vvj8['decode'])(inmm6ja0w);
                        delete pd59i78w1['shared_secret'];
                        l022ot(null, pd59i78w1);
                    });
                };
                cvwn4z['prototype']['trigger'] = function (qt9mh, nbk7n) {
                    throw new w5a9m1c('Client\x20events\x20are\x20not\x20currently\x20supported\x20for\x20encrypted\x20channels');
                };
                cvwn4z['prototype']['handleEvent'] = function (h0l3023) {
                    var b6e16acm = h0l3023['event'];
                    var uscr85 = h0l3023['data'];
                    if (b6e16acm['indexOf']('pusher_internal:') === 0x0 || b6e16acm['indexOf']('pusher:') === 0x0) {
                        s5i9li49['prototype']['handleEvent']['call'](this, h0l3023);
                        return;
                    }
                    this['handleEncryptedEvent'](b6e16acm, uscr85);
                };
                cvwn4z['prototype']['handleEncryptedEvent'] = function (pz05k992, je0c2o) {
                    var q094lbxbg = this;
                    if (!this['key']) {
                        b2c4hn['debug']('Received\x20encrypted\x20event\x20before\x20key\x20has\x20been\x20retrieved\x20from\x20the\x20authEndpoint');
                        return;
                    }
                    if (!je0c2o['ciphertext'] || !je0c2o['nonce']) {
                        b2c4hn['error']('Unexpected\x20format\x20for\x20encrypted\x20event,\x20expected\x20object\x20with\x20`ciphertext`\x20and\x20`nonce`\x20fields,\x20got:\x20' + je0c2o);
                        return;
                    }
                    var mxj3ab = Object(m3vvj8['decode'])(je0c2o['ciphertext']);
                    if (mxj3ab['length'] < this['nacl']['secretbox']['overheadLength']) {
                        b2c4hn['error']('Expected\x20encrypted\x20event\x20ciphertext\x20length\x20to\x20be\x20' + this['nacl']['secretbox']['overheadLength'] + ',\x20got:\x20' + mxj3ab['length']);
                        return;
                    }
                    var sht8hp30f = Object(m3vvj8['decode'])(je0c2o['nonce']);
                    if (sht8hp30f['length'] < this['nacl']['secretbox']['nonceLength']) {
                        b2c4hn['error']('Expected\x20encrypted\x20event\x20nonce\x20length\x20to\x20be\x20' + this['nacl']['secretbox']['nonceLength'] + ',\x20got:\x20' + sht8hp30f['length']);
                        return;
                    }
                    var z8mf1tx = this['nacl']['secretbox']['open'](mxj3ab, sht8hp30f, this['key']);
                    if (z8mf1tx === null) {
                        b2c4hn['debug']('Failed\x20to\x20decrypt\x20an\x20event,\x20probably\x20because\x20it\x20was\x20encrypted\x20with\x20a\x20different\x20key.\x20Fetching\x20a\x20new\x20key\x20from\x20the\x20authEndpoint...');
                        this['authorize'](this['pusher']['connection']['socket_id'], function (po3z5, vcvlhi) {
                            if (po3z5) {
                                b2c4hn['error']('Failed\x20to\x20make\x20a\x20request\x20to\x20the\x20authEndpoint:\x20' + vcvlhi + '.\x20Unable\x20to\x20fetch\x20new\x20key,\x20so\x20dropping\x20encrypted\x20event');
                                return;
                            }
                            z8mf1tx = q094lbxbg['nacl']['secretbox']['open'](mxj3ab, sht8hp30f, q094lbxbg['key']);
                            if (z8mf1tx === null) {
                                b2c4hn['error']('Failed\x20to\x20decrypt\x20event\x20with\x20new\x20key.\x20Dropping\x20encrypted\x20event');
                                return;
                            }
                            q094lbxbg['emit'](pz05k992, q094lbxbg['getDataToEmit'](z8mf1tx));
                            return;
                        });
                        return;
                    }
                    this['emit'](pz05k992, this['getDataToEmit'](z8mf1tx));
                };
                cvwn4z['prototype']['getDataToEmit'] = function (e7s7d6) {
                    var a17kdqdu3 = Object(o4og5jp['decode'])(e7s7d6);
                    try {
                        return JSON['parse'](a17kdqdu3);
                    } catch (xqti9f) {
                        return a17kdqdu3;
                    }
                };
                return cvwn4z;
            }(kf6ou53);
            var vwt99 = ce44p5;
            var gpc47 = undefined && undefined['__extends'] || (function () {
                var icw88l = function (m2otv, wp6jq0q5u) {
                    icw88l = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (y351b188, b3a79f7xq) {
                        y351b188['__proto__'] = b3a79f7xq;
                    } || function (k12ut93, e41d70) {
                        for (var qx9zn3r in e41d70)
                            if (e41d70['hasOwnProperty'](qx9zn3r))
                                k12ut93[qx9zn3r] = e41d70[qx9zn3r];
                    };
                    return icw88l(m2otv, wp6jq0q5u);
                };
                return function (rbt5859h7, c1kkj) {
                    icw88l(rbt5859h7, c1kkj);
                    function klacj3() {
                        this['constructor'] = rbt5859h7;
                    }
                    rbt5859h7['prototype'] = c1kkj === null ? Object['create'](c1kkj) : (klacj3['prototype'] = c1kkj['prototype'], new klacj3());
                };
            }());
            var w64x5 = function (v556s2) {
                gpc47(a63h54w, v556s2);
                function a63h54w(dfex3y996, n915bn) {
                    var hk8pxfq = v556s2['call'](this) || this;
                    hk8pxfq['state'] = 'initialized';
                    hk8pxfq['connection'] = null;
                    hk8pxfq['key'] = dfex3y996;
                    hk8pxfq['options'] = n915bn;
                    hk8pxfq['timeline'] = hk8pxfq['options']['timeline'];
                    hk8pxfq['usingTLS'] = hk8pxfq['options']['useTLS'];
                    hk8pxfq['errorCallbacks'] = hk8pxfq['buildErrorCallbacks']();
                    hk8pxfq['connectionCallbacks'] = hk8pxfq['buildConnectionCallbacks'](hk8pxfq['errorCallbacks']);
                    hk8pxfq['handshakeCallbacks'] = hk8pxfq['buildHandshakeCallbacks'](hk8pxfq['errorCallbacks']);
                    var s5u40l6bt = xbxyl5wj['getNetwork']();
                    s5u40l6bt['bind']('online', function () {
                        hk8pxfq['timeline']['info']({ 'netinfo': 'online' });
                        if (hk8pxfq['state'] === 'connecting' || hk8pxfq['state'] === 'unavailable') {
                            hk8pxfq['retryIn'](0x0);
                        }
                    });
                    s5u40l6bt['bind']('offline', function () {
                        hk8pxfq['timeline']['info']({ 'netinfo': 'offline' });
                        if (hk8pxfq['connection']) {
                            hk8pxfq['sendActivityCheck']();
                        }
                    });
                    hk8pxfq['updateStrategy']();
                    return hk8pxfq;
                }
                a63h54w['prototype']['connect'] = function () {
                    if (this['connection'] || this['runner']) {
                        return;
                    }
                    if (!this['strategy']['isSupported']()) {
                        this['updateState']('failed');
                        return;
                    }
                    this['updateState']('connecting');
                    this['startConnecting']();
                    this['setUnavailableTimer']();
                };
                a63h54w['prototype']['send'] = function (gn4402) {
                    if (this['connection']) {
                        return this['connection']['send'](gn4402);
                    } else {
                        return ![];
                    }
                };
                a63h54w['prototype']['send_event'] = function (n0c6u241, wqc3hef5b, h76bvw) {
                    if (this['connection']) {
                        return this['connection']['send_event'](n0c6u241, wqc3hef5b, h76bvw);
                    } else {
                        return ![];
                    }
                };
                a63h54w['prototype']['disconnect'] = function () {
                    this['disconnectInternally']();
                    this['updateState']('disconnected');
                };
                a63h54w['prototype']['isUsingTLS'] = function () {
                    return this['usingTLS'];
                };
                a63h54w['prototype']['startConnecting'] = function () {
                    var g36i6334 = this;
                    var uje73 = function (f4xu6c17, vqemm12kt) {
                        if (f4xu6c17) {
                            g36i6334['runner'] = g36i6334['strategy']['connect'](0x0, uje73);
                        } else {
                            if (vqemm12kt['action'] === 'error') {
                                g36i6334['emit']('error', {
                                    'type': 'HandshakeError',
                                    'error': vqemm12kt['error']
                                });
                                g36i6334['timeline']['error']({ 'handshakeError': vqemm12kt['error'] });
                            } else {
                                g36i6334['abortConnecting']();
                                g36i6334['handshakeCallbacks'][vqemm12kt['action']](vqemm12kt);
                            }
                        }
                    };
                    this['runner'] = this['strategy']['connect'](0x0, uje73);
                };
                a63h54w['prototype']['abortConnecting'] = function () {
                    if (this['runner']) {
                        this['runner']['abort']();
                        this['runner'] = null;
                    }
                };
                a63h54w['prototype']['disconnectInternally'] = function () {
                    this['abortConnecting']();
                    this['clearRetryTimer']();
                    this['clearUnavailableTimer']();
                    if (this['connection']) {
                        var gg5h0g1g = this['abandonConnection']();
                        gg5h0g1g['close']();
                    }
                };
                a63h54w['prototype']['updateStrategy'] = function () {
                    this['strategy'] = this['options']['getStrategy']({
                        'key': this['key'],
                        'timeline': this['timeline'],
                        'useTLS': this['usingTLS']
                    });
                };
                a63h54w['prototype']['retryIn'] = function (fo6pe) {
                    var k83z2l80j = this;
                    this['timeline']['info']({
                        'action': 'retry',
                        'delay': fo6pe
                    });
                    if (fo6pe > 0x0) {
                        this['emit']('connecting_in', Math['round'](fo6pe / 0x3e8));
                    }
                    this['retryTimer'] = new j4p2e0(fo6pe || 0x0, function () {
                        k83z2l80j['disconnectInternally']();
                        k83z2l80j['connect']();
                    });
                };
                a63h54w['prototype']['clearRetryTimer'] = function () {
                    if (this['retryTimer']) {
                        this['retryTimer']['ensureAborted']();
                        this['retryTimer'] = null;
                    }
                };
                a63h54w['prototype']['setUnavailableTimer'] = function () {
                    var kwf2333h = this;
                    this['unavailableTimer'] = new j4p2e0(this['options']['unavailableTimeout'], function () {
                        kwf2333h['updateState']('unavailable');
                    });
                };
                a63h54w['prototype']['clearUnavailableTimer'] = function () {
                    if (this['unavailableTimer']) {
                        this['unavailableTimer']['ensureAborted']();
                    }
                };
                a63h54w['prototype']['sendActivityCheck'] = function () {
                    var qev6t4j = this;
                    this['stopActivityCheck']();
                    this['connection']['ping']();
                    this['activityTimer'] = new j4p2e0(this['options']['pongTimeout'], function () {
                        qev6t4j['timeline']['error']({ 'pong_timed_out': qev6t4j['options']['pongTimeout'] });
                        qev6t4j['retryIn'](0x0);
                    });
                };
                a63h54w['prototype']['resetActivityCheck'] = function () {
                    var dg2mbkf4 = this;
                    this['stopActivityCheck']();
                    if (this['connection'] && !this['connection']['handlesActivityChecks']()) {
                        this['activityTimer'] = new j4p2e0(this['activityTimeout'], function () {
                            dg2mbkf4['sendActivityCheck']();
                        });
                    }
                };
                a63h54w['prototype']['stopActivityCheck'] = function () {
                    if (this['activityTimer']) {
                        this['activityTimer']['ensureAborted']();
                    }
                };
                a63h54w['prototype']['buildConnectionCallbacks'] = function (w933335n1) {
                    var tukasr = this;
                    return qw69vny2b({}, w933335n1, {
                        'message': function (l4o89) {
                            tukasr['resetActivityCheck']();
                            tukasr['emit']('message', l4o89);
                        },
                        'ping': function () {
                            tukasr['send_event']('pusher:pong', {});
                        },
                        'activity': function () {
                            tukasr['resetActivityCheck']();
                        },
                        'error': function (fg13365) {
                            tukasr['emit']('error', fg13365);
                        },
                        'closed': function () {
                            tukasr['abandonConnection']();
                            if (tukasr['shouldRetry']()) {
                                tukasr['retryIn'](0x3e8);
                            }
                        }
                    });
                };
                a63h54w['prototype']['buildHandshakeCallbacks'] = function (zp47516) {
                    var fjmetd5 = this;
                    return qw69vny2b({}, zp47516, {
                        'connected': function (mcysau9) {
                            fjmetd5['activityTimeout'] = Math['min'](fjmetd5['options']['activityTimeout'], mcysau9['activityTimeout'], mcysau9['connection']['activityTimeout'] || Infinity);
                            fjmetd5['clearUnavailableTimer']();
                            fjmetd5['setConnection'](mcysau9['connection']);
                            fjmetd5['socket_id'] = fjmetd5['connection']['id'];
                            fjmetd5['updateState']('connected', { 'socket_id': fjmetd5['socket_id'] });
                        }
                    });
                };
                a63h54w['prototype']['buildErrorCallbacks'] = function () {
                    var xtfd0r8 = this;
                    var wjfnw = function (n7961s5) {
                        return function (nc4eak913) {
                            if (nc4eak913['error']) {
                                xtfd0r8['emit']('error', {
                                    'type': 'WebSocketError',
                                    'error': nc4eak913['error']
                                });
                            }
                            n7961s5(nc4eak913);
                        };
                    };
                    return {
                        'tls_only': wjfnw(function () {
                            xtfd0r8['usingTLS'] = !![];
                            xtfd0r8['updateStrategy']();
                            xtfd0r8['retryIn'](0x0);
                        }),
                        'refused': wjfnw(function () {
                            xtfd0r8['disconnect']();
                        }),
                        'backoff': wjfnw(function () {
                            xtfd0r8['retryIn'](0x3e8);
                        }),
                        'retry': wjfnw(function () {
                            xtfd0r8['retryIn'](0x0);
                        })
                    };
                };
                a63h54w['prototype']['setConnection'] = function (r96te) {
                    this['connection'] = r96te;
                    for (var k3hj07493 in this['connectionCallbacks']) {
                        this['connection']['bind'](k3hj07493, this['connectionCallbacks'][k3hj07493]);
                    }
                    this['resetActivityCheck']();
                };
                a63h54w['prototype']['abandonConnection'] = function () {
                    if (!this['connection']) {
                        return;
                    }
                    this['stopActivityCheck']();
                    for (var u152ly7 in this['connectionCallbacks']) {
                        this['connection']['unbind'](u152ly7, this['connectionCallbacks'][u152ly7]);
                    }
                    var s7gbx = this['connection'];
                    this['connection'] = null;
                    return s7gbx;
                };
                a63h54w['prototype']['updateState'] = function (i6rogu0ea, fd0830zk) {
                    var ft480 = this['state'];
                    this['state'] = i6rogu0ea;
                    if (ft480 !== i6rogu0ea) {
                        var i7633 = i6rogu0ea;
                        if (i7633 === 'connected') {
                            i7633 += '\x20with\x20new\x20socket\x20ID\x20' + fd0830zk['socket_id'];
                        }
                        b2c4hn['debug']('State\x20changed', ft480 + '\x20->\x20' + i7633);
                        this['timeline']['info']({
                            'state': i6rogu0ea,
                            'params': fd0830zk
                        });
                        this['emit']('state_change', {
                            'previous': ft480,
                            'current': i6rogu0ea
                        });
                        this['emit'](i6rogu0ea, fd0830zk);
                    }
                };
                a63h54w['prototype']['shouldRetry'] = function () {
                    return this['state'] === 'connecting' || this['state'] === 'connected';
                };
                return a63h54w;
            }(cpmt51ku8);
            var m84c511 = w64x5;
            var o82r24w = (function () {
                function br61wy6() {
                    this['channels'] = {};
                }
                br61wy6['prototype']['add'] = function (b82435a6, u6pfrc9) {
                    if (!this['channels'][b82435a6]) {
                        this['channels'][b82435a6] = ty2w3(b82435a6, u6pfrc9);
                    }
                    return this['channels'][b82435a6];
                };
                br61wy6['prototype']['all'] = function () {
                    return m5ru5e8h6(this['channels']);
                };
                br61wy6['prototype']['find'] = function (u2w2pd) {
                    return this['channels'][u2w2pd];
                };
                br61wy6['prototype']['remove'] = function (ibx1u) {
                    var s15n36 = this['channels'][ibx1u];
                    delete this['channels'][ibx1u];
                    return s15n36;
                };
                br61wy6['prototype']['disconnect'] = function () {
                    si4uw(this['channels'], function (q5t8sc) {
                        q5t8sc['disconnect']();
                    });
                };
                return br61wy6;
            }());
            var ig9868 = o82r24w;
            function ty2w3(ay1rp95po, hfe8f6e1) {
                if (ay1rp95po['indexOf']('private-encrypted-') === 0x0) {
                    if (hfe8f6e1['config']['nacl']) {
                        return vey382x['createEncryptedChannel'](ay1rp95po, hfe8f6e1, hfe8f6e1['config']['nacl']);
                    }
                    var sx4k721lb = 'Tried\x20to\x20subscribe\x20to\x20a\x20private-encrypted-\x20channel\x20but\x20no\x20nacl\x20implementation\x20available';
                    var i1fb192v = fn4cno89['buildLogSuffix']('encryptedChannelSupport');
                    throw new w5a9m1c(sx4k721lb + '.\x20' + i1fb192v);
                } else if (ay1rp95po['indexOf']('private-') === 0x0) {
                    return vey382x['createPrivateChannel'](ay1rp95po, hfe8f6e1);
                } else if (ay1rp95po['indexOf']('presence-') === 0x0) {
                    return vey382x['createPresenceChannel'](ay1rp95po, hfe8f6e1);
                } else {
                    return vey382x['createChannel'](ay1rp95po, hfe8f6e1);
                }
            }
            var y028eza = {
                'createChannels': function () {
                    return new ig9868();
                },
                'createConnectionManager': function (jt533, j98v4043c) {
                    return new m84c511(jt533, j98v4043c);
                },
                'createChannel': function (q2742, rmjg7) {
                    return new c1vp13a1(q2742, rmjg7);
                },
                'createPrivateChannel': function (xmi46i73, hea9iw) {
                    return new kf6ou53(xmi46i73, hea9iw);
                },
                'createPresenceChannel': function (vm1ebs6, o4mz1w3) {
                    return new edd401p4(vm1ebs6, o4mz1w3);
                },
                'createEncryptedChannel': function (a4i8hn, ouit8, j0ve07) {
                    return new vwt99(a4i8hn, ouit8, j0ve07);
                },
                'createTimelineSender': function (hys3vt, p0eywu) {
                    return new w1z56z(hys3vt, p0eywu);
                },
                'createAuthorizer': function (hi8of3, e451c) {
                    if (e451c['authorizer']) {
                        return e451c['authorizer'](hi8of3, e451c);
                    }
                    return new nd5u3(hi8of3, e451c);
                },
                'createHandshake': function (ux6941zo2, quf6udv0) {
                    return new xyp8u(ux6941zo2, quf6udv0);
                },
                'createAssistantToTheTransportManager': function (ea86a622, i77257u, dlac1777m) {
                    return new g9vb52(ea86a622, i77257u, dlac1777m);
                }
            };
            var vey382x = y028eza;
            var vtmg0r59a = (function () {
                function e1f7e(a747p) {
                    this['options'] = a747p || {};
                    this['livesLeft'] = this['options']['lives'] || Infinity;
                }
                e1f7e['prototype']['getAssistant'] = function (g9s4raev) {
                    return vey382x['createAssistantToTheTransportManager'](this, g9s4raev, {
                        'minPingDelay': this['options']['minPingDelay'],
                        'maxPingDelay': this['options']['maxPingDelay']
                    });
                };
                e1f7e['prototype']['isAlive'] = function () {
                    return this['livesLeft'] > 0x0;
                };
                e1f7e['prototype']['reportDeath'] = function () {
                    this['livesLeft'] -= 0x1;
                };
                return e1f7e;
            }());
            var iyclxp36 = vtmg0r59a;
            var kshk112je = (function () {
                function n07645(ye6074lz7, q78959r7j) {
                    this['strategies'] = ye6074lz7;
                    this['loop'] = Boolean(q78959r7j['loop']);
                    this['failFast'] = Boolean(q78959r7j['failFast']);
                    this['timeout'] = q78959r7j['timeout'];
                    this['timeoutLimit'] = q78959r7j['timeoutLimit'];
                }
                n07645['prototype']['isSupported'] = function () {
                    return g8658v712(this['strategies'], drdfz5['method']('isSupported'));
                };
                n07645['prototype']['connect'] = function (qqv9vxe, m7x3d044) {
                    var l1d67fb6 = this;
                    var jcv56v0 = this['strategies'];
                    var t45o08wj = 0x0;
                    var ndus5jr88 = this['timeout'];
                    var z7b3479v = null;
                    var ww32p = function (n51s80, vmfg544k) {
                        if (vmfg544k) {
                            m7x3d044(null, vmfg544k);
                        } else {
                            t45o08wj = t45o08wj + 0x1;
                            if (l1d67fb6['loop']) {
                                t45o08wj = t45o08wj % jcv56v0['length'];
                            }
                            if (t45o08wj < jcv56v0['length']) {
                                if (ndus5jr88) {
                                    ndus5jr88 = ndus5jr88 * 0x2;
                                    if (l1d67fb6['timeoutLimit']) {
                                        ndus5jr88 = Math['min'](ndus5jr88, l1d67fb6['timeoutLimit']);
                                    }
                                }
                                z7b3479v = l1d67fb6['tryStrategy'](jcv56v0[t45o08wj], qqv9vxe, {
                                    'timeout': ndus5jr88,
                                    'failFast': l1d67fb6['failFast']
                                }, ww32p);
                            } else {
                                m7x3d044(!![]);
                            }
                        }
                    };
                    z7b3479v = this['tryStrategy'](jcv56v0[t45o08wj], qqv9vxe, {
                        'timeout': ndus5jr88,
                        'failFast': this['failFast']
                    }, ww32p);
                    return {
                        'abort': function () {
                            z7b3479v['abort']();
                        },
                        'forceMinPriority': function (n4ogv89) {
                            qqv9vxe = n4ogv89;
                            if (z7b3479v) {
                                z7b3479v['forceMinPriority'](n4ogv89);
                            }
                        }
                    };
                };
                n07645['prototype']['tryStrategy'] = function (ooz64d, zaa9d94sb, jpnvev34, o94x9uvgw) {
                    var jr28od = null;
                    var ji73i1 = null;
                    if (jpnvev34['timeout'] > 0x0) {
                        jr28od = new j4p2e0(jpnvev34['timeout'], function () {
                            ji73i1['abort']();
                            o94x9uvgw(!![]);
                        });
                    }
                    ji73i1 = ooz64d['connect'](zaa9d94sb, function (pd4l362l6, u6glovs) {
                        if (pd4l362l6 && jr28od && jr28od['isRunning']() && !jpnvev34['failFast']) {
                            return;
                        }
                        if (jr28od) {
                            jr28od['ensureAborted']();
                        }
                        o94x9uvgw(pd4l362l6, u6glovs);
                    });
                    return {
                        'abort': function () {
                            if (jr28od) {
                                jr28od['ensureAborted']();
                            }
                            ji73i1['abort']();
                        },
                        'forceMinPriority': function (kav9w8) {
                            ji73i1['forceMinPriority'](kav9w8);
                        }
                    };
                };
                return n07645;
            }());
            var x14obv3it = kshk112je;
            var z2w3pn4 = (function () {
                function d895p82(l7or7i0g6) {
                    this['strategies'] = l7or7i0g6;
                }
                d895p82['prototype']['isSupported'] = function () {
                    return g8658v712(this['strategies'], drdfz5['method']('isSupported'));
                };
                d895p82['prototype']['connect'] = function (bjnsj1h, g3pi50) {
                    return y927igb2c(this['strategies'], bjnsj1h, function (c3o6o1vb, z16pl55q) {
                        return function (s344g369z, c70hh87) {
                            z16pl55q[c3o6o1vb]['error'] = s344g369z;
                            if (s344g369z) {
                                if (c2584p(z16pl55q)) {
                                    g3pi50(!![]);
                                }
                                return;
                            }
                            kxn34w3(z16pl55q, function (s6d5j) {
                                s6d5j['forceMinPriority'](c70hh87['transport']['priority']);
                            });
                            g3pi50(null, c70hh87);
                        };
                    });
                };
                return d895p82;
            }());
            var lsz988q = z2w3pn4;
            function y927igb2c(p6i6ed, d0s4ef4, x5ksr65yy) {
                var wl01e = xdr821592(p6i6ed, function (u8t7d484, g1l9jr, j9dobtaua, p4izs4c5l) {
                    return u8t7d484['connect'](d0s4ef4, x5ksr65yy(g1l9jr, p4izs4c5l));
                });
                return {
                    'abort': function () {
                        kxn34w3(wl01e, hux92);
                    },
                    'forceMinPriority': function (e4tp65) {
                        kxn34w3(wl01e, function (acs9t9u02) {
                            acs9t9u02['forceMinPriority'](e4tp65);
                        });
                    }
                };
            }
            function c2584p(oi9019d) {
                return t2bzt(oi9019d, function (r3zep) {
                    return Boolean(r3zep['error']);
                });
            }
            function hux92(d4yx2) {
                if (!d4yx2['error'] && !d4yx2['aborted']) {
                    d4yx2['abort']();
                    d4yx2['aborted'] = !![];
                }
            }
            var pfplzn = (function () {
                function tbn78p3(h268cp8b9, p80z8p, k3408t) {
                    this['strategy'] = h268cp8b9;
                    this['transports'] = p80z8p;
                    this['ttl'] = k3408t['ttl'] || 0x708 * 0x3e8;
                    this['usingTLS'] = k3408t['useTLS'];
                    this['timeline'] = k3408t['timeline'];
                }
                tbn78p3['prototype']['isSupported'] = function () {
                    return this['strategy']['isSupported']();
                };
                tbn78p3['prototype']['connect'] = function (j72vgz5, s3h1p) {
                    var q6nndz7x9 = this['usingTLS'];
                    var aaf29h5bj = rhq1ee666(q6nndz7x9);
                    var enj7w095 = [this['strategy']];
                    if (aaf29h5bj && aaf29h5bj['timestamp'] + this['ttl'] >= drdfz5['now']()) {
                        var t1j6kj2l = this['transports'][aaf29h5bj['transport']];
                        if (t1j6kj2l) {
                            this['timeline']['info']({
                                'cached': !![],
                                'transport': aaf29h5bj['transport'],
                                'latency': aaf29h5bj['latency']
                            });
                            enj7w095['push'](new x14obv3it([t1j6kj2l], {
                                'timeout': aaf29h5bj['latency'] * 0x2 + 0x3e8,
                                'failFast': !![]
                            }));
                        }
                    }
                    var d2j2b70z6 = drdfz5['now']();
                    var e4p19cv = enj7w095['pop']()['connect'](j72vgz5, function v6yfqy9m2(s154u6, cp646) {
                        if (s154u6) {
                            vqmugv0t5(q6nndz7x9);
                            if (enj7w095['length'] > 0x0) {
                                d2j2b70z6 = drdfz5['now']();
                                e4p19cv = enj7w095['pop']()['connect'](j72vgz5, v6yfqy9m2);
                            } else {
                                s3h1p(s154u6);
                            }
                        } else {
                            kq1yw54(q6nndz7x9, cp646['transport']['name'], drdfz5['now']() - d2j2b70z6);
                            s3h1p(null, cp646);
                        }
                    });
                    return {
                        'abort': function () {
                            e4p19cv['abort']();
                        },
                        'forceMinPriority': function (lp3g808t) {
                            j72vgz5 = lp3g808t;
                            if (e4p19cv) {
                                e4p19cv['forceMinPriority'](lp3g808t);
                            }
                        }
                    };
                };
                return tbn78p3;
            }());
            var s1dv1ei4 = pfplzn;
            function zz2tv1u2(r7v2qjbn) {
                return 'pusherTransport' + (r7v2qjbn ? 'TLS' : 'NonTLS');
            }
            function rhq1ee666(a1591c8rw) {
                var v103f9j = xbxyl5wj['getLocalStorage']();
                if (v103f9j) {
                    try {
                        var g7u06mf = v103f9j[zz2tv1u2(a1591c8rw)];
                        if (g7u06mf) {
                            return JSON['parse'](g7u06mf);
                        }
                    } catch (b322956od) {
                        vqmugv0t5(a1591c8rw);
                    }
                }
                return null;
            }
            function kq1yw54(n3tscr6w, uwji259b, jslmy155) {
                var py7h11773 = xbxyl5wj['getLocalStorage']();
                if (py7h11773) {
                    try {
                        py7h11773[zz2tv1u2(n3tscr6w)] = f8fz1dr({
                            'timestamp': drdfz5['now'](),
                            'transport': uwji259b,
                            'latency': jslmy155
                        });
                    } catch (igj48) {
                    }
                }
            }
            function vqmugv0t5(n0878s9n) {
                var d1uoe9cct = xbxyl5wj['getLocalStorage']();
                if (d1uoe9cct) {
                    try {
                        delete d1uoe9cct[zz2tv1u2(n0878s9n)];
                    } catch (xfeof19yb) {
                    }
                }
            }
            var xwi9l13 = (function () {
                function bbe767(a8iy268, y542j9t6) {
                    var lk3001t = y542j9t6['delay'];
                    this['strategy'] = a8iy268;
                    this['options'] = { 'delay': lk3001t };
                }
                bbe767['prototype']['isSupported'] = function () {
                    return this['strategy']['isSupported']();
                };
                bbe767['prototype']['connect'] = function (sh6ec7, x5fuw72) {
                    var ap535 = this['strategy'];
                    var b79sl;
                    var uw749gj3 = new j4p2e0(this['options']['delay'], function () {
                        b79sl = ap535['connect'](sh6ec7, x5fuw72);
                    });
                    return {
                        'abort': function () {
                            uw749gj3['ensureAborted']();
                            if (b79sl) {
                                b79sl['abort']();
                            }
                        },
                        'forceMinPriority': function (hoicui) {
                            sh6ec7 = hoicui;
                            if (b79sl) {
                                b79sl['forceMinPriority'](hoicui);
                            }
                        }
                    };
                };
                return bbe767;
            }());
            var g57p66 = xwi9l13;
            var t5izax = (function () {
                function priwg797(o4754o, o59qc97e, g914j749) {
                    this['test'] = o4754o;
                    this['trueBranch'] = o59qc97e;
                    this['falseBranch'] = g914j749;
                }
                priwg797['prototype']['isSupported'] = function () {
                    var rqpa1 = this['test']() ? this['trueBranch'] : this['falseBranch'];
                    return rqpa1['isSupported']();
                };
                priwg797['prototype']['connect'] = function (f15e2, jm71sn) {
                    var my9uq3nrx = this['test']() ? this['trueBranch'] : this['falseBranch'];
                    return my9uq3nrx['connect'](f15e2, jm71sn);
                };
                return priwg797;
            }());
            var ww5nas = t5izax;
            var s5g5x = (function () {
                function p8zedgafo(g2m8cr7on) {
                    this['strategy'] = g2m8cr7on;
                }
                p8zedgafo['prototype']['isSupported'] = function () {
                    return this['strategy']['isSupported']();
                };
                p8zedgafo['prototype']['connect'] = function (m35oe99h, nm6y13k) {
                    var xh1duix0 = this['strategy']['connect'](m35oe99h, function (j691s18j, eyc13s7r) {
                        if (eyc13s7r) {
                            xh1duix0['abort']();
                        }
                        nm6y13k(j691s18j, eyc13s7r);
                    });
                    return xh1duix0;
                };
                return p8zedgafo;
            }());
            var bda687436 = s5g5x;
            function j7367j(ldp4lo) {
                return function () {
                    return ldp4lo['isSupported']();
                };
            }
            var udp5wh0n0 = function (f137n4698, qc4pa1e0y, r65n1) {
                var d8zvzt = {};
                function agu8gquh(e106a34, qy2sx8e10, vr406xemt, e90l7, p8l270q9y) {
                    var jhf04i = r65n1(f137n4698, e106a34, qy2sx8e10, vr406xemt, e90l7, p8l270q9y);
                    d8zvzt[e106a34] = jhf04i;
                    return jhf04i;
                }
                var d9p05n9 = Object['assign']({}, qc4pa1e0y, {
                    'hostNonTLS': f137n4698['wsHost'] + ':' + f137n4698['wsPort'],
                    'hostTLS': f137n4698['wsHost'] + ':' + f137n4698['wssPort'],
                    'httpPath': f137n4698['wsPath']
                });
                var ih5eq15 = Object['assign']({}, d9p05n9, { 'useTLS': !![] });
                var v29n6d1vf = Object['assign']({}, qc4pa1e0y, {
                    'hostNonTLS': f137n4698['httpHost'] + ':' + f137n4698['httpPort'],
                    'hostTLS': f137n4698['httpHost'] + ':' + f137n4698['httpsPort'],
                    'httpPath': f137n4698['httpPath']
                });
                var p6usro3f5 = {
                    'loop': !![],
                    'timeout': 0x3a98,
                    'timeoutLimit': 0xea60
                };
                var w8d9c83gt = new iyclxp36({
                    'lives': 0x2,
                    'minPingDelay': 0x2710,
                    'maxPingDelay': f137n4698['activityTimeout']
                });
                var g309y = new iyclxp36({
                    'lives': 0x2,
                    'minPingDelay': 0x2710,
                    'maxPingDelay': f137n4698['activityTimeout']
                });
                var gsw5e = agu8gquh('ws', 'ws', 0x3, d9p05n9, w8d9c83gt);
                var tbl02tfe9 = agu8gquh('wss', 'ws', 0x3, ih5eq15, w8d9c83gt);
                var aikws914 = agu8gquh('sockjs', 'sockjs', 0x1, v29n6d1vf);
                var vvh2494 = agu8gquh('xhr_streaming', 'xhr_streaming', 0x1, v29n6d1vf, g309y);
                var bfduxj = agu8gquh('xdr_streaming', 'xdr_streaming', 0x1, v29n6d1vf, g309y);
                var yhs94 = agu8gquh('xhr_polling', 'xhr_polling', 0x1, v29n6d1vf);
                var lc6jw6u = agu8gquh('xdr_polling', 'xdr_polling', 0x1, v29n6d1vf);
                var ghng6i55 = new x14obv3it([gsw5e], p6usro3f5);
                var n7vqi = new x14obv3it([tbl02tfe9], p6usro3f5);
                var y6dribe = new x14obv3it([aikws914], p6usro3f5);
                var cqjssj3i = new x14obv3it([new ww5nas(j7367j(vvh2494), vvh2494, bfduxj)], p6usro3f5);
                var yrv8m3u79 = new x14obv3it([new ww5nas(j7367j(yhs94), yhs94, lc6jw6u)], p6usro3f5);
                var fwsp9j2dr = new x14obv3it([new ww5nas(j7367j(cqjssj3i), new lsz988q([
                        cqjssj3i,
                        new g57p66(yrv8m3u79, { 'delay': 0xfa0 })
                    ]), yrv8m3u79)], p6usro3f5);
                var ex6gs9 = new ww5nas(j7367j(fwsp9j2dr), fwsp9j2dr, y6dribe);
                var nk32f716i;
                if (qc4pa1e0y['useTLS']) {
                    nk32f716i = new lsz988q([
                        ghng6i55,
                        new g57p66(ex6gs9, { 'delay': 0x7d0 })
                    ]);
                } else {
                    nk32f716i = new lsz988q([
                        ghng6i55,
                        new g57p66(n7vqi, { 'delay': 0x7d0 }),
                        new g57p66(ex6gs9, { 'delay': 0x1388 })
                    ]);
                }
                return new s1dv1ei4(new bda687436(new ww5nas(j7367j(gsw5e), nk32f716i, ex6gs9)), d8zvzt, {
                    'ttl': 0x1b7740,
                    'timeline': qc4pa1e0y['timeline'],
                    'useTLS': qc4pa1e0y['useTLS']
                });
            };
            var v0ep578rl = udp5wh0n0;
            var e4barlw9i = function () {
                var xizqt = this;
                xizqt['timeline']['info'](xizqt['buildTimelineMessage']({ 'transport': xizqt['name'] + (xizqt['options']['useTLS'] ? 's' : '') }));
                if (xizqt['hooks']['isInitialized']()) {
                    xizqt['changeState']('initialized');
                } else if (xizqt['hooks']['file']) {
                    xizqt['changeState']('initializing');
                    igmf6['load'](xizqt['hooks']['file'], { 'useTLS': xizqt['options']['useTLS'] }, function (o9g88, xx4rp74b) {
                        if (xizqt['hooks']['isInitialized']()) {
                            xizqt['changeState']('initialized');
                            xx4rp74b(!![]);
                        } else {
                            if (o9g88) {
                                xizqt['onError'](o9g88);
                            }
                            xizqt['onClose']();
                            xx4rp74b(![]);
                        }
                    });
                } else {
                    xizqt['onClose']();
                }
            };
            var tbyh1c = {
                'getRequest': function (r8516g) {
                    var m6c210w = new window['XDomainRequest']();
                    m6c210w['ontimeout'] = function () {
                        r8516g['emit']('error', new l2gf9());
                        r8516g['close']();
                    };
                    m6c210w['onerror'] = function (sh9d42m5) {
                        r8516g['emit']('error', sh9d42m5);
                        r8516g['close']();
                    };
                    m6c210w['onprogress'] = function () {
                        if (m6c210w['responseText'] && m6c210w['responseText']['length'] > 0x0) {
                            r8516g['onChunk'](0xc8, m6c210w['responseText']);
                        }
                    };
                    m6c210w['onload'] = function () {
                        if (m6c210w['responseText'] && m6c210w['responseText']['length'] > 0x0) {
                            r8516g['onChunk'](0xc8, m6c210w['responseText']);
                        }
                        r8516g['emit']('finished', 0xc8);
                        r8516g['close']();
                    };
                    return m6c210w;
                },
                'abortRequest': function (jh947) {
                    jh947['ontimeout'] = jh947['onerror'] = jh947['onprogress'] = jh947['onload'] = null;
                    jh947['abort']();
                }
            };
            var j9674wys = tbyh1c;
            var di84go0 = undefined && undefined['__extends'] || (function () {
                var g42971 = function (dwh3q70h, xiq7n3) {
                    g42971 = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (r8dx5, brj4ld548) {
                        r8dx5['__proto__'] = brj4ld548;
                    } || function (vpcu3, g203d6) {
                        for (var obov50 in g203d6)
                            if (g203d6['hasOwnProperty'](obov50))
                                vpcu3[obov50] = g203d6[obov50];
                    };
                    return g42971(dwh3q70h, xiq7n3);
                };
                return function (aa40da, x9pm89v) {
                    g42971(aa40da, x9pm89v);
                    function l5ut35() {
                        this['constructor'] = aa40da;
                    }
                    aa40da['prototype'] = x9pm89v === null ? Object['create'](x9pm89v) : (l5ut35['prototype'] = x9pm89v['prototype'], new l5ut35());
                };
            }());
            var x1s2ew7l = 0x100 * 0x400;
            var clfznm3ev = function (s48k2940) {
                di84go0(fi6sc9g, s48k2940);
                function fi6sc9g(v7l20sc, l91mi9w1, ef4ku) {
                    var khd0qa4x = s48k2940['call'](this) || this;
                    khd0qa4x['hooks'] = v7l20sc;
                    khd0qa4x['method'] = l91mi9w1;
                    khd0qa4x['url'] = ef4ku;
                    return khd0qa4x;
                }
                fi6sc9g['prototype']['start'] = function (zcg0h) {
                    var fv128c = this;
                    this['position'] = 0x0;
                    this['xhr'] = this['hooks']['getRequest'](this);
                    this['unloader'] = function () {
                        fv128c['close']();
                    };
                    this['xhr']['open'](this['method'], this['url'], !![]);
                    if (this['xhr']['setRequestHeader']) {
                        this['xhr']['setRequestHeader']('Content-Type', 'application/json');
                    }
                    this['xhr']['send'](zcg0h);
                };
                fi6sc9g['prototype']['close'] = function () {
                    if (this['unloader']) {
                        xbxyl5wj['removeUnloadListener'](this['unloader']);
                        this['unloader'] = null;
                    }
                    if (this['xhr']) {
                        this['hooks']['abortRequest'](this['xhr']);
                        this['xhr'] = null;
                    }
                };
                fi6sc9g['prototype']['onChunk'] = function (n5h9ll, p9125or4) {
                    while (!![]) {
                        var l41976d0 = this['advanceBuffer'](p9125or4);
                        if (l41976d0) {
                            this['emit']('chunk', {
                                'status': n5h9ll,
                                'data': l41976d0
                            });
                        } else {
                            break;
                        }
                    }
                    if (this['isBufferTooLong'](p9125or4)) {
                        this['emit']('buffer_too_long');
                    }
                };
                fi6sc9g['prototype']['advanceBuffer'] = function (ms1y1) {
                    var kj261c8vj = ms1y1['slice'](this['position']);
                    var dfrc1e7 = kj261c8vj['indexOf']('\x0a');
                    if (dfrc1e7 !== -0x1) {
                        this['position'] += dfrc1e7 + 0x1;
                        return kj261c8vj['slice'](0x0, dfrc1e7);
                    } else {
                        return null;
                    }
                };
                fi6sc9g['prototype']['isBufferTooLong'] = function (gf9w16p8) {
                    return this['position'] === gf9w16p8['length'] && gf9w16p8['length'] > x1s2ew7l;
                };
                return fi6sc9g;
            }(cpmt51ku8);
            var m97ld = clfznm3ev;
            var oaa0z2;
            (function (t321j) {
                t321j[t321j['CONNECTING'] = 0x0] = 'CONNECTING';
                t321j[t321j['OPEN'] = 0x1] = 'OPEN';
                t321j[t321j['CLOSED'] = 0x3] = 'CLOSED';
            }(oaa0z2 || (oaa0z2 = {})));
            var u86mlpfx = oaa0z2;
            var hj6605bfi = 0x1;
            var t2c7d7lor = (function () {
                function g66cb(iwnh9l6, fv3z8n568) {
                    this['hooks'] = iwnh9l6;
                    this['session'] = mxcq4(0x3e8) + '/' + kr398rx9z(0x8);
                    this['location'] = q618vt(fv3z8n568);
                    this['readyState'] = u86mlpfx['CONNECTING'];
                    this['openStream']();
                }
                g66cb['prototype']['send'] = function (n0300yh) {
                    return this['sendRaw'](JSON['stringify']([n0300yh]));
                };
                g66cb['prototype']['ping'] = function () {
                    this['hooks']['sendHeartbeat'](this);
                };
                g66cb['prototype']['close'] = function (al42292, w9j25s3k6) {
                    this['onClose'](al42292, w9j25s3k6, !![]);
                };
                g66cb['prototype']['sendRaw'] = function (c7se0) {
                    if (this['readyState'] === u86mlpfx['OPEN']) {
                        try {
                            xbxyl5wj['createSocketRequest']('POST', v9lh8p(goyba71(this['location'], this['session'])))['start'](c7se0);
                            return !![];
                        } catch (t1kt74nti) {
                            return ![];
                        }
                    } else {
                        return ![];
                    }
                };
                g66cb['prototype']['reconnect'] = function () {
                    this['closeStream']();
                    this['openStream']();
                };
                g66cb['prototype']['onClose'] = function (c53f1e1t, b2616z8, sd178n) {
                    this['closeStream']();
                    this['readyState'] = u86mlpfx['CLOSED'];
                    if (this['onclose']) {
                        this['onclose']({
                            'code': c53f1e1t,
                            'reason': b2616z8,
                            'wasClean': sd178n
                        });
                    }
                };
                g66cb['prototype']['onChunk'] = function (b7mvc) {
                    if (b7mvc['status'] !== 0xc8) {
                        return;
                    }
                    if (this['readyState'] === u86mlpfx['OPEN']) {
                        this['onActivity']();
                    }
                    var oh6vqj2ll;
                    var gif74hzs1 = b7mvc['data']['slice'](0x0, 0x1);
                    switch (gif74hzs1) {
                    case 'o':
                        oh6vqj2ll = JSON['parse'](b7mvc['data']['slice'](0x1) || '{}');
                        this['onOpen'](oh6vqj2ll);
                        break;
                    case 'a':
                        oh6vqj2ll = JSON['parse'](b7mvc['data']['slice'](0x1) || '[]');
                        for (var m28701t8 = 0x0; m28701t8 < oh6vqj2ll['length']; m28701t8++) {
                            this['onEvent'](oh6vqj2ll[m28701t8]);
                        }
                        break;
                    case 'm':
                        oh6vqj2ll = JSON['parse'](b7mvc['data']['slice'](0x1) || 'null');
                        this['onEvent'](oh6vqj2ll);
                        break;
                    case 'h':
                        this['hooks']['onHeartbeat'](this);
                        break;
                    case 'c':
                        oh6vqj2ll = JSON['parse'](b7mvc['data']['slice'](0x1) || '[]');
                        this['onClose'](oh6vqj2ll[0x0], oh6vqj2ll[0x1], !![]);
                        break;
                    }
                };
                g66cb['prototype']['onOpen'] = function (qj358) {
                    if (this['readyState'] === u86mlpfx['CONNECTING']) {
                        if (qj358 && qj358['hostname']) {
                            this['location']['base'] = b9mbd49za(this['location']['base'], qj358['hostname']);
                        }
                        this['readyState'] = u86mlpfx['OPEN'];
                        if (this['onopen']) {
                            this['onopen']();
                        }
                    } else {
                        this['onClose'](0x3ee, 'Server\x20lost\x20session', !![]);
                    }
                };
                g66cb['prototype']['onEvent'] = function (n73kqj1) {
                    if (this['readyState'] === u86mlpfx['OPEN'] && this['onmessage']) {
                        this['onmessage']({ 'data': n73kqj1 });
                    }
                };
                g66cb['prototype']['onActivity'] = function () {
                    if (this['onactivity']) {
                        this['onactivity']();
                    }
                };
                g66cb['prototype']['onError'] = function (aq8q9) {
                    if (this['onerror']) {
                        this['onerror'](aq8q9);
                    }
                };
                g66cb['prototype']['openStream'] = function () {
                    var jf6pifqw = this;
                    this['stream'] = xbxyl5wj['createSocketRequest']('POST', v9lh8p(this['hooks']['getReceiveURL'](this['location'], this['session'])));
                    this['stream']['bind']('chunk', function (u1041o76y) {
                        jf6pifqw['onChunk'](u1041o76y);
                    });
                    this['stream']['bind']('finished', function (n8akz9y2) {
                        jf6pifqw['hooks']['onFinished'](jf6pifqw, n8akz9y2);
                    });
                    this['stream']['bind']('buffer_too_long', function () {
                        jf6pifqw['reconnect']();
                    });
                    try {
                        this['stream']['start']();
                    } catch (zr316i) {
                        drdfz5['defer'](function () {
                            jf6pifqw['onError'](zr316i);
                            jf6pifqw['onClose'](0x3ee, 'Could\x20not\x20start\x20streaming', ![]);
                        });
                    }
                };
                g66cb['prototype']['closeStream'] = function () {
                    if (this['stream']) {
                        this['stream']['unbind_all']();
                        this['stream']['close']();
                        this['stream'] = null;
                    }
                };
                return g66cb;
            }());
            function q618vt(a27x3jr) {
                var vv743 = /([^\?]*)\/*(\??.*)/['exec'](a27x3jr);
                return {
                    'base': vv743[0x1],
                    'queryString': vv743[0x2]
                };
            }
            function goyba71(nr178914, xfy8t9) {
                return nr178914['base'] + '/' + xfy8t9 + '/xhr_send';
            }
            function v9lh8p(c73056w) {
                var vz3g931 = c73056w['indexOf']('?') === -0x1 ? '?' : '&';
                return c73056w + vz3g931 + 't=' + +new Date() + '&n=' + hj6605bfi++;
            }
            function b9mbd49za(md25ey25, vn8p2qcz) {
                var d61668 = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/['exec'](md25ey25);
                return d61668[0x1] + vn8p2qcz + d61668[0x3];
            }
            function mxcq4(jpk642ay) {
                return Math['floor'](Math['random']() * jpk642ay);
            }
            function kr398rx9z(kd587) {
                var j7861pg = [];
                for (var ea0uj = 0x0; ea0uj < kd587; ea0uj++) {
                    j7861pg['push'](mxcq4(0x20)['toString'](0x20));
                }
                return j7861pg['join']('');
            }
            var m1o7g65o3 = t2c7d7lor;
            var lnkyc7793 = {
                'getReceiveURL': function (vac17t, z974kvh5) {
                    return vac17t['base'] + '/' + z974kvh5 + '/xhr_streaming' + vac17t['queryString'];
                },
                'onHeartbeat': function (o264a0a) {
                    o264a0a['sendRaw']('[]');
                },
                'sendHeartbeat': function (qfmre) {
                    qfmre['sendRaw']('[]');
                },
                'onFinished': function (bs1v3q, p995s68au) {
                    bs1v3q['onClose'](0x3ee, 'Connection\x20interrupted\x20(' + p995s68au + ')', ![]);
                }
            };
            var qc2pl93ol = lnkyc7793;
            var emngk = {
                'getReceiveURL': function (w7drc5a5, cd14p) {
                    return w7drc5a5['base'] + '/' + cd14p + '/xhr' + w7drc5a5['queryString'];
                },
                'onHeartbeat': function () {
                },
                'sendHeartbeat': function (u827s7) {
                    u827s7['sendRaw']('[]');
                },
                'onFinished': function (it8378c, b17z2i) {
                    if (b17z2i === 0xc8) {
                        it8378c['reconnect']();
                    } else {
                        it8378c['onClose'](0x3ee, 'Connection\x20interrupted\x20(' + b17z2i + ')', ![]);
                    }
                }
            };
            var yln17 = emngk;
            var fwwl9p3 = {
                'getRequest': function (n0fy9) {
                    var g866d62 = xbxyl5wj['getXHRAPI']();
                    var b1o89m425 = new g866d62();
                    b1o89m425['onreadystatechange'] = b1o89m425['onprogress'] = function () {
                        switch (b1o89m425['readyState']) {
                        case 0x3:
                            if (b1o89m425['responseText'] && b1o89m425['responseText']['length'] > 0x0) {
                                n0fy9['onChunk'](b1o89m425['status'], b1o89m425['responseText']);
                            }
                            break;
                        case 0x4:
                            if (b1o89m425['responseText'] && b1o89m425['responseText']['length'] > 0x0) {
                                n0fy9['onChunk'](b1o89m425['status'], b1o89m425['responseText']);
                            }
                            n0fy9['emit']('finished', b1o89m425['status']);
                            n0fy9['close']();
                            break;
                        }
                    };
                    return b1o89m425;
                },
                'abortRequest': function (d854r38t) {
                    d854r38t['onreadystatechange'] = null;
                    d854r38t['abort']();
                }
            };
            var ye1mzff = fwwl9p3;
            var z9j80 = {
                'createStreamingSocket': function (pq0k42) {
                    return this['createSocket'](qc2pl93ol, pq0k42);
                },
                'createPollingSocket': function (bih332y) {
                    return this['createSocket'](yln17, bih332y);
                },
                'createSocket': function (s3tu956m, b21af0u1q) {
                    return new m1o7g65o3(s3tu956m, b21af0u1q);
                },
                'createXHR': function (f4z5s, m6w6654v3) {
                    return this['createRequest'](ye1mzff, f4z5s, m6w6654v3);
                },
                'createRequest': function (ow0vjx57t, y7ex8, ah2346) {
                    return new m97ld(ow0vjx57t, y7ex8, ah2346);
                }
            };
            var bu240z2 = z9j80;
            bu240z2['createXDR'] = function (e934i, e94x82r) {
                return this['createRequest'](j9674wys, e934i, e94x82r);
            };
            var sdyh02f = bu240z2;
            var ec3k389 = {
                'nextAuthCallbackID': 0x1,
                'auth_callbacks': {},
                'ScriptReceivers': v2e9d,
                'DependenciesReceivers': l7yjiby4,
                'getDefaultStrategy': v0ep578rl,
                'Transports': b99r47be,
                'transportConnectionInitializer': e4barlw9i,
                'HTTPFactory': sdyh02f,
                'TimelineTransport': waku02uq,
                'getXHRAPI': function () {
                    return window['XMLHttpRequest'];
                },
                'getWebSocketAPI': function () {
                    return window['WebSocket'] || window['MozWebSocket'];
                },
                'setup': function (s674aq0) {
                    var el644 = this;
                    window['Pusher'] = s674aq0;
                    var w5o8o7u4 = function () {
                        el644['onDocumentBody'](s674aq0['ready']);
                    };
                    if (!window['JSON']) {
                        igmf6['load']('json2', {}, w5o8o7u4);
                    } else {
                        w5o8o7u4();
                    }
                },
                'getDocument': function () {
                    return document;
                },
                'getProtocol': function () {
                    return this['getDocument']()['location']['protocol'];
                },
                'getAuthorizers': function () {
                    return {
                        'ajax': b7oscuhnj,
                        'jsonp': epl2o635m
                    };
                },
                'onDocumentBody': function (aii7q6860) {
                    var b59f654 = this;
                    if (document['body']) {
                        aii7q6860();
                    } else {
                        setTimeout(function () {
                            b59f654['onDocumentBody'](aii7q6860);
                        }, 0x0);
                    }
                },
                'createJSONPRequest': function (mh05m3z, g78z7iu) {
                    return new wn16g9ia(mh05m3z, g78z7iu);
                },
                'createScriptRequest': function (mcm1j) {
                    return new t2175p(mcm1j);
                },
                'getLocalStorage': function () {
                    try {
                        return window['localStorage'];
                    } catch (rf3p54vb) {
                        return undefined;
                    }
                },
                'createXHR': function () {
                    if (this['getXHRAPI']()) {
                        return this['createXMLHttpRequest']();
                    } else {
                        return this['createMicrosoftXHR']();
                    }
                },
                'createXMLHttpRequest': function () {
                    var c1vypz = this['getXHRAPI']();
                    return new c1vypz();
                },
                'createMicrosoftXHR': function () {
                    return new ActiveXObject('Microsoft.XMLHTTP');
                },
                'getNetwork': function () {
                    return ge8036326;
                },
                'createWebSocket': function (esb9t3) {
                    var fuxmd7 = this['getWebSocketAPI']();
                    return new fuxmd7(esb9t3);
                },
                'createSocketRequest': function (ukv98256d, b0o90ou) {
                    if (this['isXHRSupported']()) {
                        return this['HTTPFactory']['createXHR'](ukv98256d, b0o90ou);
                    } else if (this['isXDRSupported'](b0o90ou['indexOf']('https:') === 0x0)) {
                        return this['HTTPFactory']['createXDR'](ukv98256d, b0o90ou);
                    } else {
                        throw 'Cross-origin\x20HTTP\x20requests\x20are\x20not\x20supported';
                    }
                },
                'isXHRSupported': function () {
                    var i37250j = this['getXHRAPI']();
                    return Boolean(i37250j) && new i37250j()['withCredentials'] !== undefined;
                },
                'isXDRSupported': function (s353929oe) {
                    var w49i5eg1 = s353929oe ? 'https:' : 'http:';
                    var y606eb6 = this['getProtocol']();
                    return Boolean(window['XDomainRequest']) && y606eb6 === w49i5eg1;
                },
                'addUnloadListener': function (ish1e67rk) {
                },
                'removeUnloadListener': function (lh24ku9) {
                    if (window['addEventListener'] !== undefined) {
                        window['removeEventListener']('unload', lh24ku9, ![]);
                    } else if (window['detachEvent'] !== undefined) {
                        window['detachEvent']('onunload', lh24ku9);
                    }
                }
            };
            var xbxyl5wj = ec3k389;
            var rc7ih56;
            (function (nf0hq8) {
                nf0hq8[nf0hq8['ERROR'] = 0x3] = 'ERROR';
                nf0hq8[nf0hq8['INFO'] = 0x6] = 'INFO';
                nf0hq8[nf0hq8['DEBUG'] = 0x7] = 'DEBUG';
            }(rc7ih56 || (rc7ih56 = {})));
            var ton7dci = rc7ih56;
            var p00v7j = (function () {
                function mpb6r350x(twlx5, n45m9u0r, u2tss1q10) {
                    this['key'] = twlx5;
                    this['session'] = n45m9u0r;
                    this['events'] = [];
                    this['options'] = u2tss1q10 || {};
                    this['sent'] = 0x0;
                    this['uniqueID'] = 0x0;
                }
                mpb6r350x['prototype']['log'] = function (sn51507, drv4v89fw) {
                    if (sn51507 <= this['options']['level']) {
                        this['events']['push'](qw69vny2b({}, drv4v89fw, { 'timestamp': drdfz5['now']() }));
                        if (this['options']['limit'] && this['events']['length'] > this['options']['limit']) {
                            this['events']['shift']();
                        }
                    }
                };
                mpb6r350x['prototype']['error'] = function (uix473) {
                    this['log'](ton7dci['ERROR'], uix473);
                };
                mpb6r350x['prototype']['info'] = function (o4pen8o) {
                    this['log'](ton7dci['INFO'], o4pen8o);
                };
                mpb6r350x['prototype']['debug'] = function (s95mmbl) {
                    this['log'](ton7dci['DEBUG'], s95mmbl);
                };
                mpb6r350x['prototype']['isEmpty'] = function () {
                    return this['events']['length'] === 0x0;
                };
                mpb6r350x['prototype']['send'] = function (fnc9rn9b, klg8665) {
                    var i59lh0dt1 = this;
                    var it4d8xj8z = qw69vny2b({
                        'session': this['session'],
                        'bundle': this['sent'] + 0x1,
                        'key': this['key'],
                        'lib': 'js',
                        'version': this['options']['version'],
                        'cluster': this['options']['cluster'],
                        'features': this['options']['features'],
                        'timeline': this['events']
                    }, this['options']['params']);
                    this['events'] = [];
                    fnc9rn9b(it4d8xj8z, function (g4s3q1u, gsvl9e099) {
                        if (!g4s3q1u) {
                            i59lh0dt1['sent']++;
                        }
                        if (klg8665) {
                            klg8665(g4s3q1u, gsvl9e099);
                        }
                    });
                    return !![];
                };
                mpb6r350x['prototype']['generateUniqueID'] = function () {
                    this['uniqueID']++;
                    return this['uniqueID'];
                };
                return mpb6r350x;
            }());
            var bi4lpuy = p00v7j;
            var ftmc1 = (function () {
                function f8j28(oufaxb, r8zah, dtz3z5j, yfm6q) {
                    this['name'] = oufaxb;
                    this['priority'] = r8zah;
                    this['transport'] = dtz3z5j;
                    this['options'] = yfm6q || {};
                }
                f8j28['prototype']['isSupported'] = function () {
                    return this['transport']['isSupported']({ 'useTLS': this['options']['useTLS'] });
                };
                f8j28['prototype']['connect'] = function (k4pfut27, hzzxz68c) {
                    var u5h0263q = this;
                    if (!this['isSupported']()) {
                        return h4yn659vm(new u2tw3s1(), hzzxz68c);
                    } else if (this['priority'] < k4pfut27) {
                        return h4yn659vm(new g0ect(), hzzxz68c);
                    }
                    var l4615o0c2 = ![];
                    var ekgi0 = this['transport']['createConnection'](this['name'], this['priority'], this['options']['key'], this['options']);
                    var i1s55t3n = null;
                    var f7ns766ob = function () {
                        ekgi0['unbind']('initialized', f7ns766ob);
                        ekgi0['connect']();
                    };
                    var g8gw5upk9 = function () {
                        i1s55t3n = vey382x['createHandshake'](ekgi0, function (y2xz0256y) {
                            l4615o0c2 = !![];
                            p089f881();
                            hzzxz68c(null, y2xz0256y);
                        });
                    };
                    var g9v9t2 = function (h345y0) {
                        p089f881();
                        hzzxz68c(h345y0);
                    };
                    var zag58f = function () {
                        p089f881();
                        var v16395tb6;
                        v16395tb6 = f8fz1dr(ekgi0);
                        hzzxz68c(new mn5j9371(v16395tb6));
                    };
                    var p089f881 = function () {
                        ekgi0['unbind']('initialized', f7ns766ob);
                        ekgi0['unbind']('open', g8gw5upk9);
                        ekgi0['unbind']('error', g9v9t2);
                        ekgi0['unbind']('closed', zag58f);
                    };
                    ekgi0['bind']('initialized', f7ns766ob);
                    ekgi0['bind']('open', g8gw5upk9);
                    ekgi0['bind']('error', g9v9t2);
                    ekgi0['bind']('closed', zag58f);
                    ekgi0['initialize']();
                    return {
                        'abort': function () {
                            if (l4615o0c2) {
                                return;
                            }
                            p089f881();
                            if (i1s55t3n) {
                                i1s55t3n['close']();
                            } else {
                                ekgi0['close']();
                            }
                        },
                        'forceMinPriority': function (k530r) {
                            if (l4615o0c2) {
                                return;
                            }
                            if (u5h0263q['priority'] < k530r) {
                                if (i1s55t3n) {
                                    i1s55t3n['close']();
                                } else {
                                    ekgi0['close']();
                                }
                            }
                        }
                    };
                };
                return f8j28;
            }());
            var h6u3pgk6 = ftmc1;
            function h4yn659vm(nyts4z7, wi3891) {
                drdfz5['defer'](function () {
                    wi3891(nyts4z7);
                });
                return {
                    'abort': function () {
                    },
                    'forceMinPriority': function () {
                    }
                };
            }
            var bs1i9 = xbxyl5wj['Transports'];
            var lo0rng = function (t066237pd, vse03d, nb88s6d6, e2mlynch, r8wc6, icn957tr) {
                var g037ug3 = bs1i9[nb88s6d6];
                if (!g037ug3) {
                    throw new udjs64u(nb88s6d6);
                }
                var j28f53540 = (!t066237pd['enabledTransports'] || l3f4jjw(t066237pd['enabledTransports'], vse03d) !== -0x1) && (!t066237pd['disabledTransports'] || l3f4jjw(t066237pd['disabledTransports'], vse03d) === -0x1);
                var tapwxjk92;
                if (j28f53540) {
                    r8wc6 = Object['assign']({ 'ignoreNullOrigin': t066237pd['ignoreNullOrigin'] }, r8wc6);
                    tapwxjk92 = new h6u3pgk6(vse03d, e2mlynch, icn957tr ? icn957tr['getAssistant'](g037ug3) : g037ug3, r8wc6);
                } else {
                    tapwxjk92 = v5c51u;
                }
                return tapwxjk92;
            };
            var v5c51u = {
                'isSupported': function () {
                    return ![];
                },
                'connect': function (f1sy6fgu, ts5f64h7) {
                    var oio0y2 = drdfz5['defer'](function () {
                        ts5f64h7(new u2tw3s1());
                    });
                    return {
                        'abort': function () {
                            oio0y2['ensureAborted']();
                        },
                        'forceMinPriority': function () {
                        }
                    };
                }
            };
            function r6s6z84z(oyge70z7) {
                var lm332m0 = {
                    'activityTimeout': oyge70z7['activityTimeout'] || ii151h17['activityTimeout'],
                    'authEndpoint': oyge70z7['authEndpoint'] || ii151h17['authEndpoint'],
                    'authTransport': oyge70z7['authTransport'] || ii151h17['authTransport'],
                    'cluster': oyge70z7['cluster'] || ii151h17['cluster'],
                    'httpPath': oyge70z7['httpPath'] || ii151h17['httpPath'],
                    'httpPort': oyge70z7['httpPort'] || ii151h17['httpPort'],
                    'httpsPort': oyge70z7['httpsPort'] || ii151h17['httpsPort'],
                    'pongTimeout': oyge70z7['pongTimeout'] || ii151h17['pongTimeout'],
                    'statsHost': oyge70z7['statsHost'] || ii151h17['stats_host'],
                    'unavailableTimeout': oyge70z7['unavailableTimeout'] || ii151h17['unavailableTimeout'],
                    'wsPath': oyge70z7['wsPath'] || ii151h17['wsPath'],
                    'wsPort': oyge70z7['wsPort'] || ii151h17['wsPort'],
                    'wssPort': oyge70z7['wssPort'] || ii151h17['wssPort'],
                    'enableStats': u7k8x(oyge70z7),
                    'httpHost': hm6cm(oyge70z7),
                    'useTLS': unf0jh(oyge70z7),
                    'wsHost': yi5hm49(oyge70z7)
                };
                if ('auth' in oyge70z7)
                    lm332m0['auth'] = oyge70z7['auth'];
                if ('authorizer' in oyge70z7)
                    lm332m0['authorizer'] = oyge70z7['authorizer'];
                if ('disabledTransports' in oyge70z7)
                    lm332m0['disabledTransports'] = oyge70z7['disabledTransports'];
                if ('enabledTransports' in oyge70z7)
                    lm332m0['enabledTransports'] = oyge70z7['enabledTransports'];
                if ('ignoreNullOrigin' in oyge70z7)
                    lm332m0['ignoreNullOrigin'] = oyge70z7['ignoreNullOrigin'];
                if ('timelineParams' in oyge70z7)
                    lm332m0['timelineParams'] = oyge70z7['timelineParams'];
                if ('nacl' in oyge70z7) {
                    lm332m0['nacl'] = oyge70z7['nacl'];
                }
                return lm332m0;
            }
            function hm6cm(m758xx6) {
                if (m758xx6['httpHost']) {
                    return m758xx6['httpHost'];
                }
                if (m758xx6['cluster']) {
                    return 'sockjs-' + m758xx6['cluster'] + '.pusher.com';
                }
                return ii151h17['httpHost'];
            }
            function yi5hm49(k5r996v5) {
                if (k5r996v5['wsHost']) {
                    return k5r996v5['wsHost'];
                }
                if (k5r996v5['cluster']) {
                    return j4vzk04(k5r996v5['cluster']);
                }
                return j4vzk04(ii151h17['cluster']);
            }
            function j4vzk04(knq8mx8) {
                return 'ws-' + knq8mx8 + '.pusher.com';
            }
            function unf0jh(l013c06f) {
                if (xbxyl5wj['getProtocol']() === 'https:') {
                    return !![];
                } else if (l013c06f['forceTLS'] === ![]) {
                    return ![];
                }
                return !![];
            }
            function u7k8x(q43ml95z) {
                if ('enableStats' in q43ml95z) {
                    return q43ml95z['enableStats'];
                }
                if ('disableStats' in q43ml95z) {
                    return !q43ml95z['disableStats'];
                }
                return ![];
            }
            var kr3t1 = (function () {
                function xz0bg2s(x30z7n2q, p7soylf) {
                    var p2e0tzdy5 = this;
                    ep3aw72m(x30z7n2q);
                    p7soylf = p7soylf || {};
                    if (!p7soylf['cluster'] && !(p7soylf['wsHost'] || p7soylf['httpHost'])) {
                        var w1077485l = fn4cno89['buildLogSuffix']('javascriptQuickStart');
                        b2c4hn['warn']('You\x20should\x20always\x20specify\x20a\x20cluster\x20when\x20connecting.\x20' + w1077485l);
                    }
                    if ('disableStats' in p7soylf) {
                        b2c4hn['warn']('The\x20disableStats\x20option\x20is\x20deprecated\x20in\x20favor\x20of\x20enableStats');
                    }
                    this['key'] = x30z7n2q;
                    this['config'] = r6s6z84z(p7soylf);
                    this['channels'] = vey382x['createChannels']();
                    this['global_emitter'] = new cpmt51ku8();
                    this['sessionID'] = Math['floor'](Math['random']() * 0x3b9aca00);
                    this['timeline'] = new bi4lpuy(this['key'], this['sessionID'], {
                        'cluster': this['config']['cluster'],
                        'features': xz0bg2s['getClientFeatures'](),
                        'params': this['config']['timelineParams'] || {},
                        'limit': 0x32,
                        'level': ton7dci['INFO'],
                        'version': ii151h17['VERSION']
                    });
                    if (this['config']['enableStats']) {
                        this['timelineSender'] = vey382x['createTimelineSender'](this['timeline'], {
                            'host': this['config']['statsHost'],
                            'path': '/timeline/v2/' + xbxyl5wj['TimelineTransport']['name']
                        });
                    }
                    var xqe1zia = function (nco72551) {
                        return xbxyl5wj['getDefaultStrategy'](p2e0tzdy5['config'], nco72551, lo0rng);
                    };
                    this['connection'] = vey382x['createConnectionManager'](this['key'], {
                        'getStrategy': xqe1zia,
                        'timeline': this['timeline'],
                        'activityTimeout': this['config']['activityTimeout'],
                        'pongTimeout': this['config']['pongTimeout'],
                        'unavailableTimeout': this['config']['unavailableTimeout'],
                        'useTLS': Boolean(this['config']['useTLS'])
                    });
                    this['connection']['bind']('connected', function () {
                        p2e0tzdy5['subscribeAll']();
                        if (p2e0tzdy5['timelineSender']) {
                            p2e0tzdy5['timelineSender']['send'](p2e0tzdy5['connection']['isUsingTLS']());
                        }
                    });
                    this['connection']['bind']('message', function (l3m3n9gmw) {
                        var h1w10 = l3m3n9gmw['event'];
                        var eo5328h0o = h1w10['indexOf']('pusher_internal:') === 0x0;
                        if (l3m3n9gmw['channel']) {
                            var ce4170 = p2e0tzdy5['channel'](l3m3n9gmw['channel']);
                            if (ce4170) {
                                ce4170['handleEvent'](l3m3n9gmw);
                            }
                        }
                        if (!eo5328h0o) {
                            p2e0tzdy5['global_emitter']['emit'](l3m3n9gmw['event'], l3m3n9gmw['data']);
                        }
                    });
                    this['connection']['bind']('connecting', function () {
                        p2e0tzdy5['channels']['disconnect']();
                    });
                    this['connection']['bind']('disconnected', function () {
                        p2e0tzdy5['channels']['disconnect']();
                    });
                    this['connection']['bind']('error', function (nl000e9) {
                        b2c4hn['warn'](nl000e9);
                    });
                    xz0bg2s['instances']['push'](this);
                    this['timeline']['info']({ 'instances': xz0bg2s['instances']['length'] });
                    if (xz0bg2s['isReady']) {
                        this['connect']();
                    }
                }
                xz0bg2s['ready'] = function () {
                    xz0bg2s['isReady'] = !![];
                    for (var h0k7f8279 = 0x0, jrn7o = xz0bg2s['instances']['length']; h0k7f8279 < jrn7o; h0k7f8279++) {
                        xz0bg2s['instances'][h0k7f8279]['connect']();
                    }
                };
                xz0bg2s['getClientFeatures'] = function () {
                    return njq3739ra(opq38t6({ 'ws': xbxyl5wj['Transports']['ws'] }, function (o1fh0r) {
                        return o1fh0r['isSupported']({});
                    }));
                };
                xz0bg2s['prototype']['channel'] = function (kf63g01cn) {
                    return this['channels']['find'](kf63g01cn);
                };
                xz0bg2s['prototype']['allChannels'] = function () {
                    return this['channels']['all']();
                };
                xz0bg2s['prototype']['connect'] = function () {
                    this['connection']['connect']();
                    if (this['timelineSender']) {
                        if (!this['timelineSenderTimer']) {
                            var cdj6pk9ix = this['connection']['isUsingTLS']();
                            var w3743o = this['timelineSender'];
                            this['timelineSenderTimer'] = new w617583(0xea60, function () {
                                w3743o['send'](cdj6pk9ix);
                            });
                        }
                    }
                };
                xz0bg2s['prototype']['disconnect'] = function () {
                    this['connection']['disconnect']();
                    if (this['timelineSenderTimer']) {
                        this['timelineSenderTimer']['ensureAborted']();
                        this['timelineSenderTimer'] = null;
                    }
                };
                xz0bg2s['prototype']['bind'] = function (ae57m9tj, u3k7bt, s69yf) {
                    this['global_emitter']['bind'](ae57m9tj, u3k7bt, s69yf);
                    return this;
                };
                xz0bg2s['prototype']['unbind'] = function (z1789, y164l, t8mw3j91) {
                    this['global_emitter']['unbind'](z1789, y164l, t8mw3j91);
                    return this;
                };
                xz0bg2s['prototype']['bind_global'] = function (k98a7lp) {
                    this['global_emitter']['bind_global'](k98a7lp);
                    return this;
                };
                xz0bg2s['prototype']['unbind_global'] = function (xo856z) {
                    this['global_emitter']['unbind_global'](xo856z);
                    return this;
                };
                xz0bg2s['prototype']['unbind_all'] = function (r2yq98370) {
                    this['global_emitter']['unbind_all']();
                    return this;
                };
                xz0bg2s['prototype']['subscribeAll'] = function () {
                    var rks33;
                    for (rks33 in this['channels']['channels']) {
                        if (this['channels']['channels']['hasOwnProperty'](rks33)) {
                            this['subscribe'](rks33);
                        }
                    }
                };
                xz0bg2s['prototype']['subscribe'] = function (m74kv) {
                    var shcsk5 = this['channels']['add'](m74kv, this);
                    if (shcsk5['subscriptionPending'] && shcsk5['subscriptionCancelled']) {
                        shcsk5['reinstateSubscription']();
                    } else if (!shcsk5['subscriptionPending'] && this['connection']['state'] === 'connected') {
                        shcsk5['subscribe']();
                    }
                    return shcsk5;
                };
                xz0bg2s['prototype']['unsubscribe'] = function (jmk64) {
                    var dqhq9 = this['channels']['find'](jmk64);
                    if (dqhq9 && dqhq9['subscriptionPending']) {
                        dqhq9['cancelSubscription']();
                    } else {
                        dqhq9 = this['channels']['remove'](jmk64);
                        if (dqhq9 && dqhq9['subscribed']) {
                            dqhq9['unsubscribe']();
                        }
                    }
                };
                xz0bg2s['prototype']['send_event'] = function (r0z9t0b6, yka50f, gq0vu9174) {
                    return this['connection']['send_event'](r0z9t0b6, yka50f, gq0vu9174);
                };
                xz0bg2s['prototype']['shouldUseTLS'] = function () {
                    return this['config']['useTLS'];
                };
                xz0bg2s['instances'] = [];
                xz0bg2s['isReady'] = ![];
                xz0bg2s['logToConsole'] = ![];
                xz0bg2s['Runtime'] = xbxyl5wj;
                xz0bg2s['ScriptReceivers'] = xbxyl5wj['ScriptReceivers'];
                xz0bg2s['DependenciesReceivers'] = xbxyl5wj['DependenciesReceivers'];
                xz0bg2s['auth_callbacks'] = xbxyl5wj['auth_callbacks'];
                return xz0bg2s;
            }());
            var l8048a5le = ucgbl045['default'] = kr3t1;
            function ep3aw72m(vqta3z) {
                if (vqta3z === null || vqta3z === undefined) {
                    throw 'You\x20must\x20pass\x20your\x20app\x20key\x20when\x20you\x20instantiate\x20Pusher.';
                }
            }
            xbxyl5wj['setup'](kr3t1);
        }
    ]);
}));
class xs36753 {
    constructor() {
        this['appKey'] = '65fb93a197e68b969671';
        this['config'] = {
            'appId': '1718384',
            'secret': '9d0789c40ed201a253ef',
            'cluster': 'eu'
        };
        this['timeout'] = 0x5a * 0x3e8;
        this['timeoutId'] = null;
        this['pusher'] = null;
        this['callbacks'] = {};
        this['userId'] = djsa85;
    }
    async ['connect']() {
        if (this['pusher'] !== null) {
            this['setDisconnectTimeout']();
            return;
        }
        this['pusher'] = new Pusher(this['appKey'], this['config']);
        const tk219wc0 = this['pusher']['subscribe']('gramma_' + this['userId']);
        tk219wc0['bind']('client-new_message', i31dq08 => {
            if (i31dq08['hasOwnProperty']('rid')) {
                const ts2lcvdp3 = this['getCallback'](i31dq08['rid']);
                if (ts2lcvdp3)
                    ts2lcvdp3(i31dq08);
            }
            this['setDisconnectTimeout']();
        });
        this['setDisconnectTimeout']();
    }
    ['setDisconnectTimeout']() {
        clearTimeout(this['timeoutId']);
        this['timeoutId'] = setTimeout(() => {
            this['disconnect']();
        }, this['timeout']);
    }
    ['disconnect']() {
        if (!this['pusher'])
            return;
        this['pusher']['disconnect']();
        this['pusher'] = null;
    }
    ['removeAllCallbacks']() {
        this['callbacks'] = {};
        return !![];
    }
    ['getCallback'](j892d1y) {
        if (!this['callbacks']['hasOwnProperty'](j892d1y))
            return null;
        return this['callbacks'][j892d1y];
    }
    ['addCallback'](gr6n8, je29xdqnj) {
        const e2j4u = this['getCallback'](gr6n8);
        if (e2j4u)
            return ![];
        this['callbacks'][gr6n8] = je29xdqnj;
        return !![];
    }
    ['removeCallback'](b73cpn4) {
        delete this['callbacks'][b73cpn4];
        return !![];
    }
}
let hhd5x = null;
function c4g435r() {
    hhd5x = new xs36753();
}
function bjx3m(i39131, r7q34 = {}) {
    const yn7ub5h2n = document['createElement'](i39131);
    for (let s614p in r7q34) {
        yn7ub5h2n['style'][s614p] = r7q34[s614p];
    }
    return yn7ub5h2n;
}
function l17c01o3() {
    return ([0x989680] + -0x3e8 + -0xfa0 + -0x1f40 + -0x174876e800)['replace'](/[018]/g, vo3sf3 => (vo3sf3 ^ crypto['getRandomValues'](new Uint8Array(0x1))[0x0] & 0xf >> vo3sf3 / 0x4)['toString'](0x10));
}
function dso5018(lpgv6lk) {
    return chrome['runtime']['getURL'](lpgv6lk);
}
async function sou2n93() {
    const baxkf9x = await chrome['storage']['sync']['get'](['userId']);
    return 'userId' in baxkf9x ? baxkf9x['userId'] : null;
}
class b2j0cl {
    constructor(j3oj8gi) {
        this['pageService'] = j3oj8gi;
        this['tagName'] = 'wordsuperb-button';
        this['template'] = new c9869();
        this['eventService'] = new m77b17();
        this['userId'] = djsa85;
        this['analyticsService'] = new o7f6md5ih();
        this['create']();
        this['initListeners']();
        this['show']();
    }
    ['define']() {
        if (customElements['get'](this['tagName']) !== undefined)
            return;
        customElements['define'](this['tagName'], class extends HTMLElement {
            ['connectedCallback']() {
            }
        });
    }
    async ['create']() {
        this['define']();
        this['wrapper'] = bjx3m(this['tagName'], {
            'display': 'none',
            'position': 'fixed',
            'z-index': 0x2724
        });
        this['shadow'] = this['wrapper']['attachShadow']({ 'mode': 'closed' });
        this['shadow']['innerHTML'] += '<style>' + this['template']['style'] + '</style>' + this['template']['html'];
        document['body']['appendChild'](this['wrapper']);
        this['initElements']();
    }
    ['initElements']() {
        this['btn'] = this['shadow']['querySelector']('[data-btn]');
    }
    ['destroy']() {
        this['terminateListeners']();
        this['wrapper']['remove']();
    }
    ['initListeners']() {
        this['eventService']['add']({
            'event': 'mousedown',
            'element': this['shadow'],
            'handler': xf509l7 => {
            }
        });
        this['eventService']['add']({
            'event': 'mousedown',
            'element': this['btn'],
            'handler': due5ha => {
                this['analyticsService']['sendEvent'](this['userId'], 'action_show_button');
                this['destroy']();
                this['pageService']['createMenu']();
            }
        });
    }
    ['terminateListeners']() {
        this['eventService']['removeAll']();
    }
    ['show']() {
        this['setPosition'](this['pageService']['buttonCoords']);
        this['wrapper']['style']['display'] = 'block';
    }
    ['hide']() {
        this['wrapper']['style']['display'] = 'none';
    }
    ['setPosition'](x6p0fns) {
        if (!x6p0fns)
            return;
        this['wrapper']['style']['top'] = x6p0fns['top'] + 'px';
        this['wrapper']['style']['left'] = x6p0fns['left'] + 'px';
    }
}
class c9869 {
    constructor() {
        this['style'] = '\x0a\x20\x20\x20\x20:host\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20Arial,\x20Helvetica;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20visibility:\x20visible!important;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20:host\x20*\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-user-select:\x20none;\x20/*\x20Safari\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20-ms-user-select:\x20none;\x20/*\x20IE\x2010\x20and\x20IE\x2011\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20user-select:\x20none;\x20/*\x20Standard\x20syntax\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20normal;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_show-button\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20flex-start;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20rgba(26,\x2028,\x2038,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20\x20rgba(196,\x20203,\x20235,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(240,\x20243,\x20255,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20Arial;\x0a\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x207px\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200px\x204px\x2010px\x200px\x20rgba(129,\x20142,\x20211,\x200.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_show-button\x20svg\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-right:\x207px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20';
        this['html'] = '<button\x20class=\x22wsb2_show-button\x22\x20data-btn>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20viewBox=\x220\x200\x2016\x2016\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M4.99998\x203.73337L3.33331\x204.66671L4.26664\x203.00004L3.33331\x201.33337L4.99998\x202.26671L6.66664\x201.33337L5.73331\x203.00004L6.66664\x204.66671L4.99998\x203.73337ZM13\x2010.2667L14.6666\x209.33337L13.7333\x2011L14.6666\x2012.6667L13\x2011.7334L11.3333\x2012.6667L12.2666\x2011L11.3333\x209.33337L13\x2010.2667ZM14.6666\x201.33337L13.7333\x203.00004L14.6666\x204.66671L13\x203.73337L11.3333\x204.66671L12.2666\x203.00004L11.3333\x201.33337L13\x202.26671L14.6666\x201.33337ZM8.89331\x208.52004L10.52\x206.89337L9.10664\x205.48004L7.47998\x207.10671L8.89331\x208.52004ZM9.57998\x204.86004L11.14\x206.42004C11.4\x206.66671\x2011.4\x207.10004\x2011.14\x207.36004L3.35998\x2015.14C3.09998\x2015.4\x202.66664\x2015.4\x202.41998\x2015.14L0.859978\x2013.58C0.599978\x2013.3334\x200.599978\x2012.9\x200.859978\x2012.64L8.63998\x204.86004C8.89998\x204.60004\x209.33331\x204.60004\x209.57998\x204.86004Z\x22\x20fill=\x22#8288C3\x22/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span>Improve\x20with\x20AI</span><!--lc#improve_with_ai_btn-->\x0a\x20\x20\x20\x20</button>';
    }
}
class dpuy0hz2m {
    constructor(ld2utd) {
        this['pageService'] = ld2utd;
        this['tagName'] = 'wordsuperb-menu';
        this['template'] = new uah41();
        this['eventService'] = new m77b17();
        this['userId'] = djsa85;
        this['analyticsService'] = new o7f6md5ih();
        this['create']();
        this['pageService']['lockSelection']();
        this['initListeners']();
        this['show']();
    }
    ['define']() {
        if (customElements['get'](this['tagName']) !== undefined)
            return;
        customElements['define'](this['tagName'], class extends HTMLElement {
            ['connectedCallback']() {
            }
        });
    }
    async ['create']() {
        this['define']();
        this['wrapper'] = bjx3m(this['tagName'], {
            'display': 'none',
            'position': 'fixed',
            'z-index': 0x2724
        });
        this['shadow'] = this['wrapper']['attachShadow']({ 'mode': 'closed' });
        this['shadow']['innerHTML'] += '<style>' + this['template']['style'] + '</style>' + this['template']['html'];
        document['body']['appendChild'](this['wrapper']);
        await this['initElements']();
    }
    async ['initElements']() {
        this['btnClose'] = this['shadow']['querySelectorAll']('[data-btn_close]');
        this['btnAction'] = this['shadow']['querySelectorAll']('[data-btn_action]');
        this['btnTranslate'] = this['shadow']['querySelector']('[data-btn_translate]');
        this['langBlock'] = this['shadow']['querySelector']('[data-lang_dropdown]');
        const b5apq17 = await this['getLanguageList']();
        this['langDropdown'] = new SearchDropdown(this['langBlock'], b5apq17, {
            'onChange': b0sa33ea => {
                chrome['runtime']['sendMessage']({
                    'action': 'setLanguage',
                    'language': b0sa33ea['value']
                });
            }
        });
        const g012e = await this['getSelectedLanguage']();
        if (g012e)
            this['langDropdown']['selectItemByValue'](g012e, ![]);
    }
    ['destroy'](a7c7i = ![]) {
        this['terminateListeners']();
        this['wrapper']['remove']();
        this['pageService']['unlockSelection']();
        if (a7c7i)
            this['pageService']['doRestoreSelection']();
    }
    ['initListeners']() {
        this['eventService']['add']({
            'event': 'mousedown',
            'element': this['shadow'],
            'occlude': ![],
            'handler': f9e64 => {
                try {
                    if (f9e64['target']['dataset']['hasOwnProperty']('non_oclude'))
                        return;
                } catch (e2j72eh63) {
                }
                f9e64['stopPropagation']();
                f9e64['preventDefault']();
            }
        });
        this['eventService']['add']({
            'event': 'mousedown',
            'element': this['btnClose'],
            'handler': n184c7l81 => {
                this['destroy'](!![]);
            }
        });
        this['eventService']['add']({
            'event': 'mousedown',
            'element': this['btnAction'],
            'handler': up9z7m => {
                const hcl4r = up9z7m['currentTarget'];
                try {
                    if (!hcl4r || !hcl4r['hasAttribute']('data-btn_action'))
                        return;
                } catch (vp900) {
                    return;
                }
                this['destroy'](!![]);
                const fm2w2 = hcl4r['dataset']['btn_action'];
                this['analyticsService']['sendEvent'](this['userId'], 'action_' + fm2w2);
                this['pageService']['responseMenuComponent'] = new xzgf56984(this['pageService'], fm2w2);
            },
            'useCapture': ![]
        });
        this['eventService']['add']({
            'event': 'mousedown',
            'element': this['btnTranslate'],
            'handler': s7io40t2n => {
                const tfhh42 = this['langDropdown']['getSelectedItem']();
                if (!tfhh42['value'])
                    return;
                this['destroy'](!![]);
                const p1g2h525 = 'translate_' + tfhh42['value'];
                this['analyticsService']['sendEvent'](this['userId'], p1g2h525);
                this['pageService']['createResponseMenu'](p1g2h525);
                this['pageService']['responseMenuComponent']['disableHighlight']();
            }
        });
    }
    ['terminateListeners']() {
        this['eventService']['removeAll']();
    }
    ['show']() {
        this['wrapper']['style']['display'] = 'block';
        this['setPosition']();
    }
    ['hide']() {
        this['wrapper']['style']['display'] = 'none';
    }
    ['setPosition']() {
        const o46fg = this['pageService']['menuCoords']['bottom']['top'] + this['wrapper']['offsetHeight'];
        const vk8hg = o46fg - window['innerHeight'];
        const p6yd5293 = vk8hg > 0x32 ? 'top' : 'bottom';
        let p67l17a = this['pageService']['menuCoords'][p6yd5293]['top'];
        let wvc32 = this['pageService']['menuCoords'][p6yd5293]['left'];
        const wukv2v = this['pageService']['menuCoords']['bottom']['left'] + this['wrapper']['offsetWidth'];
        const e7my1 = wukv2v - window['innerWidth'];
        wvc32 = e7my1 > 0x0 ? wvc32 - e7my1 : wvc32;
        if (p6yd5293 === 'top') {
            const n1um3 = -(this['pageService']['menuCoords']['top']['top'] - this['wrapper']['offsetHeight']);
            p67l17a = n1um3 > 0x0 ? p67l17a + n1um3 : p67l17a;
            this['setPositionTop']({
                'left': wvc32,
                'top': p67l17a
            });
        } else if (p6yd5293 === 'bottom') {
            p67l17a = vk8hg > 0x0 ? p67l17a - vk8hg : p67l17a;
            this['setPositionBottom']({
                'left': wvc32,
                'top': p67l17a
            });
        }
    }
    ['setPositionBottom'](hqxsn) {
        if (!hqxsn)
            return;
        this['wrapper']['style']['top'] = hqxsn['top'] + 'px';
        this['wrapper']['style']['left'] = hqxsn['left'] + 'px';
    }
    ['setPositionTop'](y6rnrw1) {
        if (!y6rnrw1)
            return;
        this['wrapper']['style']['top'] = y6rnrw1['top'] - this['wrapper']['offsetHeight'] + 'px';
        this['wrapper']['style']['left'] = y6rnrw1['left'] + 'px';
    }
    async ['getLanguageList']() {
        const mk924x2x = await chrome['storage']['local']['get'](['languageList']);
        const zc06j897 = mk924x2x['languageList'];
        const ilzjr = [];
        zc06j897['forEach'](c10u5 => {
            ilzjr['push']({
                'value': c10u5['code'],
                'name': c10u5['name']
            });
        });
        return ilzjr;
    }
    async ['getSelectedLanguage']() {
        const a16sb4n5 = await chrome['storage']['local']['get'](['language']);
        const c8sx8g37 = a16sb4n5['language'];
        return c8sx8g37;
    }
}
class uah41 {
    constructor() {
        this['style'] = '\x0a\x20\x20\x20\x20:host\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20Arial,\x20Helvetica;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20visibility:\x20visible!important;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20:host\x20*\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-user-select:\x20none;\x20/*\x20Safari\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20-ms-user-select:\x20none;\x20/*\x20IE\x2010\x20and\x20IE\x2011\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20user-select:\x20none;\x20/*\x20Standard\x20syntax\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20normal;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_menu\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20240px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(255,\x20255,\x20255,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20rgba(230,\x20235,\x20255,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200px\x204px\x2010px\x200px\x20rgba(129,\x20142,\x20211,\x200.3);\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_menu\x20.wsb2_header\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20rgba(100,\x20102,\x20114,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(249,\x20250,\x20255,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-top-left-radius:\x207px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-top-right-radius:\x207px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x201px\x20solid\x20rgba(230,\x20235,\x20255,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x208px\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20400;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_menu\x20.wsb2_header\x20.wsb2_close\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transition:\x200.3s;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_menu\x20.wsb2_header\x20.wsb2_close\x20svg\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x2010px;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_menu\x20.wsb2_list\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20flex-start;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x207px\x207px\x2012px\x207px;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_menu\x20.wsb2_list\x20.wsb2_item\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20row;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x207px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20400;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20rgba(26,\x2028,\x2038,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20transition:\x200.3s;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_menu\x20.wsb2_list\x20.wsb2_item\x20svg\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-right:\x207px;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_menu\x20.wsb2_list\x20.wsb2_item:hover,\x0a\x20\x20\x20\x20.wsb2_menu\x20.wsb2_list\x20.wsb2_item.active\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(240,\x20243,\x20255,\x201);\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_menu\x20.wsb2_list\x20.wsb2_separator\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x201px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(230,\x20235,\x20255,\x201);\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_dropdown-list\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20calc(100%\x20-\x2014px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200px\x207px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.wsb2_dropdown-list\x20.wsb2_searchg-icon\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x207px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(-50%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.wsb2_dropdown-list\x20.wsb2_searchg-icon\x20svg\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_dropdown-list\x20.wsb2_search-input\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding-left:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20rgba(196,\x20203,\x20235,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#000000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20outline:\x20none;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_dropdown-list\x20.wsb2_cross-icon\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20visibility:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20right:\x2025px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(-50%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x2020px;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_dropdown-list\x20.wsb2_cross-icon.visible\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20visibility:\x20visible;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_dropdown-list\x20.wsb2_arrow-icon\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20right:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(-50%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_dropdown-list\x20.wsb2_list\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x207px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20240px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x20calc(100%\x20+\x206px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(255,\x20255,\x20255,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20rgba(230,\x20235,\x20255,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x206px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x20150px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow-y:\x20auto;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_dropdown-list\x20.wsb2_list::-webkit-scrollbar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x207px;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_dropdown-list\x20.wsb2_list::-webkit-scrollbar-track\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(249,\x20250,\x20255,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x20100px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20.wsb2_dropdown-list\x20.wsb2_list::-webkit-scrollbar-thumb\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(130,\x20136,\x20195,\x200.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x20100px;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_dropdown-list\x20.wsb2_list::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(130,\x20136,\x20195,\x200.5);\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_dropdown-list\x20.wsb2_list.visible\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_dropdown-list\x20.wsb2_list\x20.wsb2_list-item\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x2031px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200px\x207px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20left;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transition:\x200.3s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_dropdown-list\x20.wsb2_list\x20.wsb2_list-item\x20+\x20.wsb2_list-item\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x201px;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_dropdown-list\x20.wsb2_list\x20.wsb2_list-item:not(.hidden)\x20+\x20.wsb2_list-item::before\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20content:\x20\x22\x22;\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x20-1px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x201px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(230,\x20235,\x20255,\x201);\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_dropdown-list\x20.wsb2_list\x20.wsb2_list-item:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(240,\x20243,\x20255,\x201);\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_dropdown-list\x20.wsb2_list\x20.wsb2_list-item.hidden\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20';
        this['html'] = '<div\x20class=\x22wsb2_menu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wsb2_header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>' + chrome['i18n']['getMessage']('menu_title') + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22wsb2_close\x22\x20data-btn_close>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20viewBox=\x220\x200\x2010\x2010\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M10\x201.00714L8.99286\x200L5\x203.99286L1.00714\x200L0\x201.00714L3.99286\x205L0\x208.99286L1.00714\x2010L5\x206.00714L8.99286\x2010L10\x208.99286L6.00714\x205L10\x201.00714Z\x22\x20fill=\x22#8288C3\x22/></svg>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wsb2_list\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22wsb2_item\x22\x20data-btn_action=\x22fix_grammar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20viewBox=\x220\x200\x2016\x2016\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M14\x203.33331L6\x2011.3333L2.33333\x207.66664L3.27333\x206.72664L6\x209.44664L13.06\x202.39331L14\x203.33331ZM2\x2014V12.6666H14V14H2Z\x22\x20fill=\x22#8288C3\x22/></svg>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>' + chrome['i18n']['getMessage']('fix_spell_and_grammar_btn') + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22wsb2_item\x22\x20data-btn_action=\x22improve_writing\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2016\x2016\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M4.99998\x203.73337L3.33331\x204.66671L4.26664\x203.00004L3.33331\x201.33337L4.99998\x202.26671L6.66664\x201.33337L5.73331\x203.00004L6.66664\x204.66671L4.99998\x203.73337ZM13\x2010.2667L14.6666\x209.33337L13.7333\x2011L14.6666\x2012.6667L13\x2011.7334L11.3333\x2012.6667L12.2666\x2011L11.3333\x209.33337L13\x2010.2667ZM14.6666\x201.33337L13.7333\x203.00004L14.6666\x204.66671L13\x203.73337L11.3333\x204.66671L12.2666\x203.00004L11.3333\x201.33337L13\x202.26671L14.6666\x201.33337ZM8.89331\x208.52004L10.52\x206.89337L9.10664\x205.48004L7.47998\x207.10671L8.89331\x208.52004ZM9.57998\x204.86004L11.14\x206.42004C11.4\x206.66671\x2011.4\x207.10004\x2011.14\x207.36004L3.35998\x2015.14C3.09998\x2015.4\x202.66664\x2015.4\x202.41998\x2015.14L0.859978\x2013.58C0.599978\x2013.3334\x200.599978\x2012.9\x200.859978\x2012.64L8.63998\x204.86004C8.89998\x204.60004\x209.33331\x204.60004\x209.57998\x204.86004Z\x22\x20fill=\x22#8288C3\x22/></svg>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>' + chrome['i18n']['getMessage']('improve_writing_btn') + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22wsb2_item\x22\x20data-btn_action=\x22make_shorter\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2016\x2016\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M2.66669\x206H13.3334V7.33333H2.66669V6ZM2.66669\x208.66667H9.33335V10H2.66669V8.66667Z\x22\x20fill=\x22#8288C3\x22/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>' + chrome['i18n']['getMessage']('make_shorter_btn') + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22wsb2_item\x22\x20data-btn_action=\x22make_longer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2016\x2016\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M2.66669\x203.33337H13.3334V4.66671H2.66669V3.33337ZM2.66669\x206.00004H13.3334V7.33337H2.66669V6.00004ZM2.66669\x208.66671H13.3334V10H2.66669V8.66671ZM2.66669\x2011.3334H9.33335V12.6667H2.66669V11.3334Z\x22\x20fill=\x22#8288C3\x22/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>' + chrome['i18n']['getMessage']('make_longer_btn') + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22wsb2_item\x22\x20data-btn_action=\x22change_tone_professional\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2016\x2016\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><circle\x20cx=\x227.665\x22\x20cy=\x227.665\x22\x20r=\x226.665\x22\x20fill=\x22#9297CA\x22/><path\x20d=\x22M9.66718\x206.7013C9.66718\x206.49842\x209.69674\x206.32619\x209.75588\x206.1846C9.81502\x206.0409\x209.88999\x205.9215\x209.98081\x205.8264C10.0737\x205.73131\x2010.1751\x205.65734\x2010.2849\x205.60451C10.3969\x205.54956\x2010.5046\x205.50836\x2010.6081\x205.48088C10.7137\x205.45341\x2010.8087\x205.4365\x2010.8932\x205.43016C10.9777\x205.42382\x2011.04\x205.42065\x2011.0801\x205.42065H11.1878C11.228\x205.42065\x2011.2903\x205.42382\x2011.3747\x205.43016C11.4592\x205.4365\x2011.5532\x205.45341\x2011.6567\x205.48088C11.7602\x205.50836\x2011.8668\x205.54956\x2011.9767\x205.60451C12.0886\x205.65734\x2012.1889\x205.73131\x2012.2776\x205.8264C12.3684\x205.9215\x2012.4424\x206.0409\x2012.4994\x206.1846C12.5585\x206.32619\x2012.5881\x206.49842\x2012.5881\x206.7013V8.5969C12.5881\x208.80611\x2012.5585\x208.98363\x2012.4994\x209.12944C12.4424\x209.27526\x2012.3684\x209.39677\x2012.2776\x209.49398C12.1889\x209.59119\x2012.0886\x209.66833\x2011.9767\x209.72539C11.8668\x209.78033\x2011.7602\x209.82154\x2011.6567\x209.84901C11.5532\x209.87648\x2011.4592\x209.89339\x2011.3747\x209.89973C11.2903\x209.90607\x2011.228\x209.90924\x2011.1878\x209.90924H11.0801C11.04\x209.90924\x2010.9777\x209.90607\x2010.8932\x209.89973C10.8087\x209.89339\x2010.7137\x209.87648\x2010.6081\x209.84901C10.5046\x209.82154\x2010.3969\x209.78033\x2010.2849\x209.72539C10.1751\x209.66833\x2010.0737\x209.59119\x209.98081\x209.49398C9.88999\x209.39677\x209.81502\x209.27526\x209.75588\x209.12944C9.69674\x208.98363\x209.66718\x208.80611\x209.66718\x208.5969V6.7013ZM10.719\x208.71736C10.7232\x208.79555\x2010.7411\x208.86423\x2010.7728\x208.9234C10.8003\x208.97623\x2010.8415\x209.02378\x2010.8964\x209.06605C10.9534\x209.10831\x2011.0337\x209.12944\x2011.1371\x209.12944C11.2385\x209.12944\x2011.3167\x209.10831\x2011.3716\x209.06605C11.4265\x209.02378\x2011.4677\x208.97623\x2011.4951\x208.9234C11.5247\x208.86423\x2011.5426\x208.79555\x2011.549\x208.71736V6.65058C11.5426\x206.5745\x2011.5247\x206.50582\x2011.4951\x206.44453C11.4677\x206.39382\x2011.4265\x206.34732\x2011.3716\x206.30506C11.3167\x206.26068\x2011.2385\x206.23849\x2011.1371\x206.23849C11.0337\x206.23849\x2010.9534\x206.26068\x2010.8964\x206.30506C10.8415\x206.34732\x2010.8003\x206.39382\x2010.7728\x206.44453C10.7411\x206.50582\x2010.7232\x206.5745\x2010.719\x206.65058V8.71736Z\x22\x20fill=\x22white\x22/><path\x20d=\x22M6.16968\x206.16878C6.16968\x206.07791\x206.17179\x205.98916\x206.17601\x205.90251C6.18235\x205.81587\x206.2003\x205.73873\x206.22987\x205.67111C6.25944\x205.60348\x206.3059\x205.5496\x206.36926\x205.50944C6.43474\x205.46718\x206.52661\x205.44604\x206.64488\x205.44604H7.69033C7.95011\x205.45872\x208.18243\x205.51367\x208.3873\x205.61088C8.47389\x205.65315\x208.55837\x205.70598\x208.64074\x205.76938C8.72522\x205.83066\x208.8002\x205.90779\x208.86567\x206.00078C8.93114\x206.09165\x208.98394\x206.19943\x209.02407\x206.32411C9.0642\x206.44879\x209.08426\x206.59355\x209.08426\x206.75839C9.08426\x206.7922\x209.08109\x206.83763\x209.07476\x206.89469C9.06842\x206.94964\x209.05469\x207.01092\x209.03357\x207.07855C9.01245\x207.14406\x208.98394\x207.21274\x208.94804\x207.28459C8.91213\x207.35644\x208.86461\x207.42512\x208.80548\x207.49063C8.74634\x207.55615\x208.67347\x207.61637\x208.58688\x207.67132C8.5024\x207.72626\x208.40208\x207.77064\x208.28592\x207.80445C8.35984\x207.83404\x208.43482\x207.87314\x208.51085\x207.92174C8.58688\x207.96823\x208.65552\x208.02846\x208.71677\x208.10243C8.77802\x208.17639\x208.82765\x208.26515\x208.86567\x208.3687C8.9058\x208.47225\x208.92586\x208.5927\x208.92586\x208.73007V9.18019C8.92586\x209.20555\x208.9322\x209.22669\x208.94487\x209.24359C8.95754\x209.2605\x208.97021\x209.27529\x208.98288\x209.28797C9.03357\x209.33869\x209.06314\x209.38307\x209.07159\x209.42111C9.08004\x209.45703\x209.08426\x209.48662\x209.08426\x209.50986C9.08426\x209.58383\x209.06948\x209.64617\x209.03991\x209.69689C9.01034\x209.74761\x208.97127\x209.78882\x208.92269\x209.82051C8.87623\x209.85221\x208.82237\x209.8744\x208.76112\x209.88708C8.70199\x209.90188\x208.64074\x209.90927\x208.57738\x209.90927C8.50768\x209.90927\x208.43693\x209.89871\x208.36512\x209.87757C8.29331\x209.85433\x208.22784\x209.82157\x208.1687\x209.7793C8.10957\x209.73704\x208.06099\x209.68421\x208.02297\x209.62081C7.98707\x209.55741\x207.96912\x209.4845\x207.96912\x209.40209V8.73007C7.96912\x208.63708\x207.96278\x208.5515\x207.95011\x208.4733C7.93744\x208.39511\x207.91315\x208.32749\x207.87724\x208.27043C7.84134\x208.21337\x207.79171\x208.16899\x207.72835\x208.13729C7.66499\x208.1056\x207.58262\x208.08975\x207.48124\x208.08975H7.12642V9.14849C7.12642\x209.24148\x207.12325\x209.33235\x207.11692\x209.42111C7.11269\x209.50986\x207.0958\x209.58911\x207.06623\x209.65885C7.03666\x209.72647\x206.98914\x209.78142\x206.92367\x209.82368C6.8582\x209.86384\x206.76527\x209.88391\x206.64488\x209.88391C6.52661\x209.88391\x206.43474\x209.86384\x206.36926\x209.82368C6.3059\x209.78142\x206.25944\x209.72647\x206.22987\x209.65885C6.2003\x209.58911\x206.18235\x209.50986\x206.17601\x209.42111C6.17179\x209.33235\x206.16968\x209.24148\x206.16968\x209.14849V6.16878ZM7.55727\x207.37969C7.66287\x207.37546\x207.75791\x207.3501\x207.8424\x207.30361C7.8783\x207.28459\x207.91315\x207.26029\x207.94694\x207.2307C7.98073\x207.20112\x208.01136\x207.16413\x208.03881\x207.11975C8.06627\x207.07538\x208.08739\x207.0236\x208.10217\x206.96443C8.11907\x206.90526\x208.12752\x206.83658\x208.12752\x206.75839C8.12752\x206.68865\x208.11907\x206.62736\x208.10217\x206.57453C8.08739\x206.51959\x208.06733\x206.47204\x208.04198\x206.43189C8.01664\x206.39173\x207.98707\x206.35792\x207.95328\x206.33045C7.9216\x206.30298\x207.88886\x206.28079\x207.85507\x206.26388C7.77481\x206.22373\x207.68399\x206.20048\x207.58262\x206.19414H7.12642V7.37969H7.55727Z\x22\x20fill=\x22white\x22/><path\x20d=\x22M3.70496\x208.13412V9.16117C3.70496\x209.25204\x203.70179\x209.3408\x203.69546\x209.42745C3.69123\x209.51409\x203.67328\x209.59122\x203.6416\x209.65885C3.61203\x209.72647\x203.56451\x209.78142\x203.49904\x209.82368C3.43357\x209.86384\x203.33958\x209.88391\x203.21709\x209.88391C3.09881\x209.88391\x203.00694\x209.86384\x202.94147\x209.82368C2.87811\x209.78142\x202.83164\x209.72647\x202.80207\x209.65885C2.77251\x209.59122\x202.75455\x209.51409\x202.74822\x209.42745C2.74399\x209.3408\x202.74188\x209.25204\x202.74188\x209.16117V6.16878C2.74188\x206.07791\x202.74399\x205.98916\x202.74822\x205.90251C2.75455\x205.81587\x202.77251\x205.73873\x202.80207\x205.67111C2.83164\x205.60348\x202.87811\x205.5496\x202.94147\x205.50944C3.00694\x205.46718\x203.09881\x205.44604\x203.21709\x205.44604H4.26253C4.52442\x205.45872\x204.75886\x205.51367\x204.96584\x205.61088C5.05454\x205.65315\x205.14008\x205.70598\x205.22245\x205.76938C5.30693\x205.83277\x205.3819\x205.91096\x205.44738\x206.00395C5.51496\x206.09482\x205.56882\x206.20365\x205.60895\x206.33045C5.64907\x206.45513\x205.66914\x206.59989\x205.66914\x206.76473C5.66914\x206.99085\x205.63323\x207.18949\x205.56143\x207.36067C5.49173\x207.52973\x205.3893\x207.67237\x205.25413\x207.7886C5.12107\x207.90272\x204.95739\x207.98937\x204.76308\x208.04854C4.57089\x208.1056\x204.35335\x208.13412\x204.11047\x208.13412H3.70496ZM4.13581\x207.37969C4.24141\x207.37335\x204.33646\x207.34799\x204.42094\x207.30361C4.45684\x207.28459\x204.49169\x207.26029\x204.52548\x207.2307C4.55927\x207.20112\x204.5899\x207.16519\x204.61735\x207.12292C4.64481\x207.07855\x204.66593\x207.02677\x204.68071\x206.9676C4.69761\x206.90843\x204.70606\x206.8408\x204.70606\x206.76473C4.70606\x206.69287\x204.69761\x206.63053\x204.68071\x206.5777C4.66593\x206.52276\x204.64587\x206.47626\x204.62052\x206.43823C4.59518\x206.39807\x204.56667\x206.36426\x204.53498\x206.33679C4.5033\x206.30932\x204.47057\x206.28607\x204.43678\x206.26705C4.35652\x206.2269\x204.26676\x206.2026\x204.16749\x206.19414H3.70496V7.37969H4.13581Z\x22\x20fill=\x22white\x22/></svg>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>' + chrome['i18n']['getMessage']('change_tone_professional_btn') + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22wsb2_item\x22\x20data-btn_action=\x22change_tone_friendly\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2216\x22\x20height=\x2217\x22\x20viewBox=\x220\x200\x2016\x2017\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M7.99998\x201.66333C4.31331\x201.66333\x201.33331\x204.66333\x201.33331\x208.33C1.33331\x2010.0981\x202.03569\x2011.7938\x203.28593\x2013.044C3.90499\x2013.6631\x204.63992\x2014.1542\x205.44876\x2014.4892C6.25759\x2014.8242\x207.1245\x2014.9967\x207.99998\x2014.9967C9.76809\x2014.9967\x2011.4638\x2014.2943\x2012.714\x2013.044C13.9643\x2011.7938\x2014.6666\x2010.0981\x2014.6666\x208.33C14.6666\x207.45452\x2014.4942\x206.58761\x2014.1592\x205.77877C13.8241\x204.96994\x2013.3331\x204.23501\x2012.714\x203.61595C12.095\x202.99689\x2011.36\x202.50583\x2010.5512\x202.1708C9.74236\x201.83577\x208.87546\x201.66333\x207.99998\x201.66333ZM6.49998\x205.54333C7.07998\x205.54333\x207.63331\x205.81666\x207.99998\x206.24333C8.36665\x205.81666\x208.91998\x205.54333\x209.49998\x205.54333C10.5266\x205.54333\x2011.3333\x206.35\x2011.3333\x207.37666C11.3333\x208.63666\x2010.2\x209.66333\x208.47998\x2011.2233L7.99998\x2011.6633L7.51998\x2011.2233C5.79998\x209.66333\x204.66665\x208.63666\x204.66665\x207.37666C4.66665\x206.35\x205.47331\x205.54333\x206.49998\x205.54333Z\x22\x20fill=\x22#9297CA\x22/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>' + chrome['i18n']['getMessage']('change_tone_friendly_btn') + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22wsb2_item\x22\x20data-btn_action=\x22simplify_language\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2016\x2016\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><g\x20clip-path=\x22url(#clip0_2015_142)\x22><path\x20d=\x22M12.6667\x200.666626L11.8267\x202.49996L10\x203.33329L11.8267\x204.17329L12.6667\x205.99996L13.5\x204.17329L15.3334\x203.33329L13.5\x202.49996M6.00002\x202.66663L4.33335\x206.33329L0.666687\x207.99996L4.33335\x209.66663L6.00002\x2013.3333L7.66669\x209.66663L11.3334\x207.99996L7.66669\x206.33329M12.6667\x209.99996L11.8267\x2011.8266L10\x2012.6666L11.8267\x2013.5L12.6667\x2015.3333L13.5\x2013.5L15.3334\x2012.6666L13.5\x2011.8266\x22\x20fill=\x22#8288C3\x22/></g><defs><clipPath\x20id=\x22clip0_2015_142\x22><rect\x20width=\x2216\x22\x20height=\x2216\x22\x20fill=\x22white\x22/></clipPath></defs></svg>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>' + chrome['i18n']['getMessage']('simplify_language_btn') + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22wsb2_item\x22\x20data-btn_action=\x22continue_writing\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2016\x2016\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M9.39998\x206.00004L9.99998\x206.60004L3.93331\x2012.6667H3.33331V12.0667L9.39998\x206.00004ZM11.8\x202.00004C11.6666\x202.00004\x2011.4666\x202.06671\x2011.3333\x202.20004L10.1333\x203.40004L12.6\x205.93337L13.8\x204.66671C14.0666\x204.40004\x2014.0666\x204.00004\x2013.8\x203.73337L12.2666\x202.20004C12.1333\x202.06671\x2011.9333\x202.00004\x2011.8\x202.00004ZM9.39998\x204.13337L1.99998\x2011.4667V14H4.53331L11.8666\x206.60004L9.39998\x204.13337ZM4.66665\x201.33337V3.33337H6.66665V4.66671H4.66665V6.66671H3.33331V4.66671H1.33331V3.33337H3.33331V1.33337H4.66665Z\x22\x20fill=\x22#8288C3\x22/></svg>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>' + chrome['i18n']['getMessage']('continue_writing_btn') + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22wsb2_item\x22\x20data-btn_translate\x20style=\x22display:\x20none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2216\x22\x20height=\x2217\x22\x20viewBox=\x220\x200\x2016\x2017\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M8.58002\x2010.3767L6.88669\x208.70333L6.90669\x208.68333C8.06669\x207.39\x208.89335\x205.90333\x209.38002\x204.33H11.3334V2.99666H6.66669V1.66333H5.33335V2.99666H0.666687V4.33H8.11335C7.66669\x205.61\x206.96002\x206.83\x206.00002\x207.89666C5.38002\x207.21\x204.86669\x206.45666\x204.46002\x205.66333H3.12669C3.61335\x206.75\x204.28002\x207.77666\x205.11335\x208.70333L1.72002\x2012.05L2.66669\x2012.9967L6.00002\x209.66333L8.07335\x2011.7367L8.58002\x2010.3767ZM12.3334\x206.99666H11L8.00002\x2014.9967H9.33335L10.08\x2012.9967H13.2467L14\x2014.9967H15.3334L12.3334\x206.99666ZM10.5867\x2011.6633L11.6667\x208.77666L12.7467\x2011.6633H10.5867Z\x22\x20fill=\x22#9297CA\x22/></svg>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>' + chrome['i18n']['getMessage']('translate_btn') + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wsb2_dropdown-list\x22\x20data-lang_dropdown\x20style=\x22display:\x20none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wsb2_searchg-icon\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2212\x22\x20height=\x2212\x22\x20viewBox=\x220\x200\x2012\x2012\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M8.33333\x207.33333L11.6667\x2010.6667L10.6667\x2011.6667L7.33333\x208.33333V7.80667L7.15333\x207.62C6.39333\x208.27333\x205.40667\x208.66667\x204.33333\x208.66667C3.18406\x208.66667\x202.08186\x208.21012\x201.2692\x207.39746C0.456546\x206.58481\x200\x205.4826\x200\x204.33333C0\x203.18406\x200.456546\x202.08186\x201.2692\x201.2692C2.08186\x200.456546\x203.18406\x200\x204.33333\x200C5.4826\x200\x206.58481\x200.456546\x207.39746\x201.2692C8.21012\x202.08186\x208.66667\x203.18406\x208.66667\x204.33333C8.66667\x205.40667\x208.27333\x206.39333\x207.62\x207.15333L7.80667\x207.33333H8.33333ZM4.33333\x207.33333C6\x207.33333\x207.33333\x206\x207.33333\x204.33333C7.33333\x202.66667\x206\x201.33333\x204.33333\x201.33333C2.66667\x201.33333\x201.33333\x202.66667\x201.33333\x204.33333C1.33333\x206\x202.66667\x207.33333\x204.33333\x207.33333Z\x22\x20fill=\x22#8288C3\x22/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20class=\x22wsb2_search-input\x22\x20placeholder=\x22Language\x22\x20data-non_oclude\x20data-dropdown_input\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wsb2_cross-icon\x22\x20data-dropdown_cross>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2210\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2010\x2011\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M9.66668\x201.6878L8.72668\x200.747803L5.00001\x204.47447L1.27334\x200.747803L0.333344\x201.6878L4.06001\x205.41447L0.333344\x209.14114L1.27334\x2010.0811L5.00001\x206.35447L8.72668\x2010.0811L9.66668\x209.14114L5.94001\x205.41447L9.66668\x201.6878Z\x22\x20fill=\x22#8288C3\x22/></svg>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wsb2_arrow-icon\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x226\x22\x20height=\x223\x22\x20viewBox=\x220\x200\x206\x203\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M3\x203L0.401923\x20-1.25623e-08L5.59808\x204.417e-07L3\x203Z\x22\x20fill=\x22#9297CB\x22/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wsb2_list\x22\x20data-dropdown_list></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>';
    }
}
class xzgf56984 {
    constructor(lxy059j, kk6d05t) {
        this['pageService'] = lxy059j;
        this['tagName'] = 'wordsuperb-response-menu';
        this['template'] = new j0875627();
        this['eventService'] = new m77b17();
        this['userId'] = djsa85;
        this['analyticsService'] = new o7f6md5ih();
        this['textPrepared'] = ![];
        this['text'] = '';
        this['html'] = '';
        this['action'] = kk6d05t;
        this['position'] = '';
        this['requestService'] = new g7foo2imh();
        this['responseService'] = new pk787n79();
        this['pusherService'] = hhd5x;
        this['appendInterval'] = null;
        this['appendProcess'] = ![];
        if (this['pageService']['editor'] instanceof ya61wub) {
            this['lineBreak'] = '<br>';
        } else if (this['pageService']['editor'] instanceof t461abm) {
            this['lineBreak'] = '\x0a';
        }
        this['mode'] = 'normal';
        this['highlightEnabled'] = !![];
        this['textCompareService'] = new cnk2364l();
        this['create']();
        this['initListeners']();
        this['show']();
        this['sendRequest'](kk6d05t);
    }
    ['define']() {
        if (customElements['get'](this['tagName']) !== undefined)
            return;
        customElements['define'](this['tagName'], class extends HTMLElement {
            ['connectedCallback']() {
            }
        });
    }
    async ['create']() {
        this['define']();
        this['wrapper'] = bjx3m(this['tagName'], {
            'display': 'none',
            'position': 'fixed',
            'z-index': 0x2724
        });
        this['shadow'] = this['wrapper']['attachShadow']({ 'mode': 'closed' });
        this['shadow']['innerHTML'] += '<style>' + this['template']['style'] + '</style>' + this['template']['html'];
        document['body']['appendChild'](this['wrapper']);
        this['initElements']();
    }
    ['destroy'](r0k4d) {
        console['log']('destroy', r0k4d);
        this['wrapper']['remove']();
        this['clearAppendInterval']();
    }
    ['initElements']() {
        this['btnClose'] = this['shadow']['querySelectorAll']('[data-btn_close]');
        this['btnReplace'] = this['shadow']['querySelector']('[data-btn_replace]');
        this['btnInsertBelow'] = this['shadow']['querySelector']('[data-btn_insert_below]');
        this['btnAction'] = this['shadow']['querySelectorAll']('[data-btn_action]');
        this['btnTryAgain'] = this['shadow']['querySelectorAll']('[data-btn_try_again]');
        this['resultText'] = this['shadow']['querySelector']('[data-result_text]');
        this['highlightText'] = this['shadow']['querySelector']('[data-highlight_text]');
        this['btnHighlight'] = this['shadow']['querySelector']('[data-btn_highlight]');
        this['btnCopy'] = this['shadow']['querySelector']('[data-btn_copy]');
        this['menu'] = this['shadow']['querySelector']('[data-menu]');
    }
    ['initListeners']() {
        this['eventService']['add']({
            'event': 'mousedown',
            'element': this['shadow'],
            'handler': v77u4j90 => {
            }
        });
        this['eventService']['add']({
            'event': 'mousedown',
            'element': this['btnClose'],
            'handler': d2a58 => {
                this['destroy'](0x1);
            }
        });
        this['eventService']['add']({
            'event': 'mousedown',
            'element': this['btnReplace'],
            'handler': rv4x20d => {
                this['analyticsService']['sendEvent'](this['userId'], 'action_replace');
                this['replaceText']();
            }
        });
        this['eventService']['add']({
            'event': 'mousedown',
            'element': this['btnHighlight'],
            'handler': gpyk34t0w => {
                this['toggleHighlight']();
            }
        });
        this['eventService']['add']({
            'event': 'mousedown',
            'element': this['btnCopy'],
            'handler': buws6 => {
                this['copyResult']();
            }
        });
        this['eventService']['add']({
            'event': 'mousedown',
            'element': this['btnInsertBelow'],
            'handler': o921g => {
                this['analyticsService']['sendEvent'](this['userId'], 'action_insert_below');
                this['insertBelow']();
            }
        });
    }
    ['show']() {
        this['wrapper']['style']['display'] = 'block';
        this['setPosition']();
    }
    ['hide']() {
        this['wrapper']['style']['display'] = 'none';
    }
    ['setPosition']() {
        const q04184bc = this['pageService']['menuCoords']['bottom']['top'] + this['wrapper']['offsetHeight'];
        const t7m3e5 = q04184bc - window['innerHeight'];
        const p251e61v1 = t7m3e5 > 0x0 ? 'top' : 'bottom';
        let p4p16cx = this['pageService']['menuCoords'][p251e61v1]['top'];
        let q86wpn = this['pageService']['menuCoords'][p251e61v1]['left'];
        const uwzw43a9 = this['pageService']['menuCoords']['bottom']['left'] + this['wrapper']['offsetWidth'];
        const mja24 = uwzw43a9 - window['innerWidth'];
        q86wpn = mja24 > 0x0 ? this['pageService']['menuCoords']['bottom']['left'] - mja24 - 0xa : q86wpn;
        if (p251e61v1 === 'top') {
            this['setPositionTop']({
                'left': q86wpn,
                'top': p4p16cx
            });
        } else if (p251e61v1 === 'bottom') {
            this['setPositionBottom']({
                'left': q86wpn,
                'top': p4p16cx
            });
        }
    }
    ['setPositionBottom'](t6pw3op55) {
        if (!t6pw3op55)
            return;
        this['position'] = 'bottom';
        this['wrapper']['style']['top'] = t6pw3op55['top'] + 'px';
        this['wrapper']['style']['left'] = t6pw3op55['left'] + 'px';
        this['setNormal']();
    }
    ['setPositionTop'](as57pib50) {
        if (!as57pib50)
            return;
        this['position'] = 'top';
        this['wrapper']['style']['top'] = as57pib50['top'] - this['wrapper']['offsetHeight'] + 'px';
        this['wrapper']['style']['left'] = as57pib50['left'] + 'px';
        this['setReverse']();
    }
    ['resetPosition']() {
        this['setPosition']();
    }
    ['setNormal']() {
        this['menu']['classList']['remove']('reverse');
    }
    ['setReverse']() {
        this['menu']['classList']['add']('reverse');
    }
    ['setError']() {
        this['menu']['classList']['add']('error');
        this['shadow']['querySelectorAll']('[data-hide_on_error]')['forEach'](dx4cg646g => {
            dx4cg646g['classList']['add']('hidden');
        });
    }
    ['resetError']() {
        this['menu']['classList']['remove']('error');
        this['shadow']['querySelectorAll']('[data-hide_on_error]')['forEach'](q12uq => {
            q12uq['classList']['remove']('hidden');
        });
    }
    ['toggleHighlight']() {
        if (!this['highlightEnabled'])
            return ![];
        if (this['mode'] === 'normal') {
            this['showHighlight']();
        } else if (this['mode'] === 'highlight') {
            this['hideHighlight']();
        }
    }
    ['showHighlight']() {
        this['mode'] = 'highlight';
        this['menu']['classList']['add']('highlight');
    }
    ['hideHighlight']() {
        this['mode'] = 'normal';
        this['menu']['classList']['remove']('highlight');
    }
    ['showHighlightButton']() {
        this['btnHighlight']['classList']['remove']('hidden');
    }
    ['hideHighlightButton']() {
        this['btnHighlight']['classList']['add']('hidden');
    }
    ['enableHighlight']() {
        this['highlightEnabled'] = !![];
        this['showHighlightButton']();
    }
    ['disableHighlight']() {
        this['highlightEnabled'] = ![];
        this['hideHighlightButton']();
        this['hideHighlight']();
        this['resetHighlightText']();
    }
    ['copyResult']() {
        navigator['clipboard']['writeText'](this['text'])['then'](() => {
            console['log']('copied');
        })['catch'](t9l12c9 => {
            console['log'](t9l12c9);
        });
    }
    ['prepareHTML'](n03h9t0u, ajajds = '<br>') {
        return n03h9t0u['replaceAll']('\x0a', ajajds);
    }
    ['resetHighlightText']() {
        this['highlightText']['innerHTML'] = '';
    }
    ['createBrElement']() {
        return document['createElement']('br');
    }
    ['createSingleHighlightElement'](j94lc233, i0es50j) {
        const g8788927 = document['createElement']('span');
        g8788927['classList']['add']('highlight-text');
        g8788927['innerHTML'] = j94lc233;
        if (!j94lc233['length']) {
            g8788927['classList']['add']('empty');
            return g8788927;
        }
        if (i0es50j === -0x1) {
            g8788927['classList']['add']('red');
        } else if (i0es50j === 0x1) {
            g8788927['classList']['add']('green');
        }
        return g8788927;
    }
    ['splitLines'](y68o248d2) {
        let ovv7mw = y68o248d2;
        const y75s1 = [];
        let tyb58t = ovv7mw['indexOf']('\x0a');
        while (tyb58t !== -0x1) {
            const n17q6 = ovv7mw['substring'](0x0, tyb58t);
            y75s1['push'](n17q6);
            ovv7mw = ovv7mw['substring'](tyb58t + 0x1);
            tyb58t = ovv7mw['indexOf']('\x0a');
        }
    }
    ['createHighlightElements'](lyh6957) {
        const w54e92 = lyh6957[0x0];
        let kv19f879 = lyh6957[0x1]['replaceAll']('\x0d', '');
        const m2384 = [];
        let jlr1j = kv19f879['indexOf']('\x0a');
        while (jlr1j !== -0x1) {
            const b0jy5646 = kv19f879['substring'](0x0, jlr1j);
            const s0028 = this['createSingleHighlightElement'](b0jy5646, w54e92);
            if (s0028)
                m2384['push'](s0028);
            const kjww779m = this['createBrElement']();
            m2384['push'](kjww779m);
            kv19f879 = kv19f879['substring'](jlr1j + 0x1);
            jlr1j = kv19f879['indexOf']('\x0a');
        }
        const fp1398k4g = this['createSingleHighlightElement'](kv19f879, w54e92);
        if (fp1398k4g)
            m2384['push'](fp1398k4g);
        return m2384;
    }
    ['updateHighlightText']() {
        if (!this['highlightEnabled'])
            return;
        this['resetHighlightText']();
        const qb8dd = this['textCompareService']['compare'](this['pageService']['text'], this['text']);
        const makxio77 = [];
        qb8dd['map'](xr852 => {
            const kxz28 = this['createHighlightElements'](xr852);
            kxz28['map'](v91r1 => makxio77['push'](v91r1));
        });
        makxio77['map'](vy1kn => {
            this['highlightText']['appendChild'](vy1kn);
        });
        return !![];
    }
    async ['appendText'](h0f4n0z8k, ek88e8 = 0xf) {
        this['hideCursor']();
        this['textPrepared'] = !![];
        this['text'] += h0f4n0z8k;
        this['html'] += this['prepareHTML'](h0f4n0z8k);
        return new Promise(o09e344 => {
            let s378bu1v = 0x0;
            this['appendInterval'] = setInterval(() => {
                const c3v579 = h0f4n0z8k['substring'](s378bu1v, s378bu1v + 0x1);
                this['resultText']['innerHTML'] += this['prepareHTML'](c3v579);
                this['updateHighlightText']();
                s378bu1v++;
                if (s378bu1v === h0f4n0z8k['length']) {
                    this['clearAppendInterval']();
                    this['resetPosition']();
                    o09e344(!![]);
                }
            }, ek88e8);
        });
    }
    ['clearAppendInterval']() {
        clearInterval(this['appendInterval']);
        this['appendInterval'] = null;
    }
    ['resetText']() {
        this['textPrepared'] = ![];
        this['text'] = '';
        this['html'] = '';
        this['resultText']['innerHTML'] = '';
    }
    ['reset']() {
        this['clearAppendInterval']();
        this['resetError']();
        this['resetText']();
        this['resetHighlightText']();
        this['pusherService']['removeAllCallbacks']();
        this['resetPosition']();
    }
    ['showCursor']() {
        this['resultText']['classList']['add']('show-cursor');
    }
    ['hideCursor']() {
        this['resultText']['classList']['remove']('show-cursor');
    }
    ['sendRequest'](q9v185yp, ew65r2suz = ![]) {
        if (ew65r2suz)
            this['reset']();
        this['showCursor']();
        const qsev2y = new nt71n7u9({
            'item': async em2bg0215 => {
                await this['appendText'](em2bg0215['text']);
            },
            'end': () => {
                this['toggleHighlight']();
                this['showInsertButtons']();
            }
        });
        this['requestService']['sendRequest']({
            'text': this['pageService']['text'],
            'action': q9v185yp,
            'before': ubimr81 => {
                this['pusherService']['connect']();
                this['pusherService']['addCallback'](ubimr81, gh49xrss1 => {
                    qsev2y['push'](gh49xrss1['data'], gh49xrss1['ord'], gh49xrss1['end']);
                });
            },
            'callback': e2pp1 => {
            },
            'fail': async l2kfp5 => {
                const vgwdsr = this['responseService']['getErrorText'](l2kfp5);
                this['setError']();
                this['appendText'](vgwdsr);
            }
        });
    }
    ['replaceText']() {
        if (!this['textPrepared'])
            return;
        document['execCommand']('insertHTML', ![], this['html']);
    }
    ['insertBelow']() {
        if (!this['textPrepared'])
            return;
        let jy453qn = '';
        if (this['pageService']['editor'] instanceof ya61wub) {
            jy453qn = this['prepareHTML'](this['pageService']['text']);
        } else if (this['pageService']['editor'] instanceof t461abm) {
            jy453qn = this['pageService']['text'];
        }
        const se724a9t9 = jy453qn + this['lineBreak'] + this['html'];
        document['execCommand']('insertHTML', ![], se724a9t9);
    }
    ['showInsertButtons']() {
        this['btnReplace']['classList']['remove']('hidden');
        this['btnInsertBelow']['classList']['remove']('hidden');
    }
}
class j0875627 {
    constructor() {
        this['style'] = '\x0a\x20\x20\x20\x20:host\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20Arial,\x20Helvetica;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20visibility:\x20visible!important;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20:host\x20*\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-user-select:\x20none;\x20/*\x20Safari\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20-ms-user-select:\x20none;\x20/*\x20IE\x2010\x20and\x20IE\x2011\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20user-select:\x20none;\x20/*\x20Standard\x20syntax\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20normal;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20flex-start;\x0a\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu.reverse\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column-reverse;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu\x20.wsb2_result\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20800px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(255,\x20255,\x20255,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20rgba(230,\x20235,\x20255,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200px\x204px\x2010px\x200px\x20rgba(129,\x20142,\x20211,\x200.3);\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu.reverse\x20.wsb2_result\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x209px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20.wsb2_response-menu\x20.wsb2_result\x20.wsb2_header\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20rgba(100,\x20102,\x20114,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(249,\x20250,\x20255,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-top-left-radius:\x207px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-top-right-radius:\x207px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x201px\x20solid\x20rgba(230,\x20235,\x20255,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x208px\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20400;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20.wsb2_response-menu\x20.wsb2_result\x20.wsb2_header\x20.wsb2_close\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transition:\x200.3s;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu\x20.wsb2_result\x20.wsb2_header\x20.wsb2_close\x20svg\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x2010px;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20@keyframes\x20blink_anim\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x20opacity:\x201\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x2049%\x20{\x20opacity:\x201\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x2050%\x20{\x20opacity:\x200\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x2099%\x20{\x20opacity:\x200\x20}\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu\x20.wsb2_result\x20.wsb2_body\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20flex-start;\x0a\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20rgba(0,\x200,\x200,\x201);\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu\x20.wsb2_result\x20.wsb2_result-text\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding-left:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x2016px;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu.error\x20.wsb2_result\x20.wsb2_result-text\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#DA9000;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu.highlight\x20.wsb2_result\x20.wsb2_result-text\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu\x20.wsb2_result\x20.wsb2_result-text:after\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20content:\x20\x22\x22;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#3F3EED;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-left:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20blink_anim\x201s\x20infinite;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu\x20.wsb2_result\x20.wsb2_result-text.show-cursor:after\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-left:\x20-8px;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu\x20.wsb2_result\x20.wsb2_highlight-text\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x201.6;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding-left:\x208px;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu.highlight\x20.wsb2_result\x20.wsb2_highlight-text\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu\x20.wsb2_result\x20.wsb2_highlight-text\x20.highlight-text\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x202px\x200px;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu.highlight\x20.wsb2_result\x20.wsb2_highlight-text\x20.highlight-text.empty\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200px;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu.highlight\x20.wsb2_result\x20.wsb2_highlight-text\x20.highlight-text.red\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(255,\x2061,\x2061,\x200.45);\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x202px\x201px;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu.highlight\x20.wsb2_result\x20.wsb2_highlight-text\x20.highlight-text.green\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(0,\x20201,\x2076,\x200.4);\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x202px\x201px;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu\x20.wsb2_result\x20.wsb2_result-controls\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2010px;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu\x20.wsb2_result\x20.wsb2_result-controls\x20.wsb2_result-btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#3F3EED;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x205px\x207px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20outline:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transition:\x200.3s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu\x20.wsb2_result\x20.wsb2_result-controls\x20.wsb2_result-btn:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(240,\x20243,\x20255,\x201);\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu\x20.wsb2_result\x20.wsb2_result-controls\x20.wsb2_result-btn\x20span\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-left:\x205px;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu\x20.wsb2_menu\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20240px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(255,\x20255,\x20255,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20rgba(230,\x20235,\x20255,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200px\x204px\x2010px\x200px\x20rgba(129,\x20142,\x20211,\x200.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x209px;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu.reverse\x20.wsb2_menu\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x200px;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu\x20.wsb2_menu\x20.wsb2_header\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20rgba(100,\x20102,\x20114,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(249,\x20250,\x20255,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-top-left-radius:\x207px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-top-right-radius:\x207px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x201px\x20solid\x20rgba(230,\x20235,\x20255,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x208px\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20400;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu\x20.wsb2_menu\x20.wsb2_list\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20flex-start;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x207px;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu\x20.wsb2_menu\x20.wsb2_list\x20.wsb2_item\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20row;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x207px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20400;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20rgba(26,\x2028,\x2038,\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20transition:\x200.3s;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu\x20.wsb2_menu\x20.wsb2_list\x20.wsb2_item.hidden\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu\x20.wsb2_menu\x20.wsb2_list\x20.wsb2_item\x20svg\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-right:\x207px;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu\x20.wsb2_menu\x20.wsb2_list\x20.wsb2_item:hover,\x0a\x20\x20\x20\x20.wsb2_response-menu\x20.wsb2_menu\x20.wsb2_list\x20.wsb2_item.active\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(240,\x20243,\x20255,\x201);\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu\x20.wsb2_menu\x20.wsb2_list\x20.wsb2_separator\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x201px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(230,\x20235,\x20255,\x201);\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu\x20.wsb2_menu\x20.wsb2_list\x20.wsb2_item.hidden\x20+\x20.wsb2_separator\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu.error\x20.wsb2_item.hidden,\x0a\x20\x20\x20\x20.wsb2_response-menu.error\x20.wsb2_separator.hidden\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.wsb2_response-menu\x20.wsb2_result\x20.wsb2_result-controls\x20.wsb2_result-btn.hidden\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20';
        this['html'] = '<div\x20class=\x22wsb2_response-menu\x22\x20data-menu>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wsb2_result\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wsb2_header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>' + chrome['i18n']['getMessage']('ai_response') + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22wsb2_close\x22\x20data-btn_close>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20viewBox=\x220\x200\x2010\x2010\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M10\x201.00714L8.99286\x200L5\x203.99286L1.00714\x200L0\x201.00714L3.99286\x205L0\x208.99286L1.00714\x2010L5\x206.00714L8.99286\x2010L10\x208.99286L6.00714\x205L10\x201.00714Z\x22\x20fill=\x22#8288C3\x22/></svg>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wsb2_body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wsb2_result-text\x22\x20data-result_text></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wsb2_highlight-text\x22\x20data-highlight_text></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wsb2_result-controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22wsb2_result-btn\x22\x20data-btn_highlight>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2216\x22\x20height=\x2217\x22\x20viewBox=\x220\x200\x2016\x2017\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M0.666656\x207.74797H2.66666V9.0813H0.666656V7.74797ZM12.7333\x202.74797L11.3333\x204.14797L12.2667\x205.0813L13.6667\x203.6813L12.7333\x202.74797ZM7.33332\x201.0813H8.66666V3.0813H7.33332V1.0813ZM3.26666\x202.74797L2.33332\x203.6813L3.73332\x205.0813L4.66666\x204.14797L3.26666\x202.74797ZM6.66666\x2015.0813C6.66666\x2015.4813\x206.93332\x2015.748\x207.33332\x2015.748H8.66666C9.06666\x2015.748\x209.33332\x2015.4813\x209.33332\x2015.0813V14.4146H6.66666V15.0813ZM7.99999\x204.41463C5.79999\x204.41463\x203.99999\x206.21463\x203.99999\x208.41463C3.99999\x209.8813\x204.79999\x2011.2146\x205.99999\x2011.8813V13.0813C5.99999\x2013.4813\x206.26666\x2013.748\x206.66666\x2013.748H9.33332C9.73332\x2013.748\x209.99999\x2013.4813\x209.99999\x2013.0813V11.8813C11.2\x2011.2146\x2012\x209.8813\x2012\x208.41463C12\x206.21463\x2010.2\x204.41463\x207.99999\x204.41463ZM8.66666\x2011.0146V11.748H7.33332V11.0146C6.19999\x2010.748\x205.33332\x209.6813\x205.33332\x208.41463C5.33332\x206.94797\x206.53332\x205.74797\x207.99999\x205.74797C9.46666\x205.74797\x2010.6667\x206.94797\x2010.6667\x208.41463C10.6667\x209.6813\x209.79999\x2010.6813\x208.66666\x2011.0146ZM13.3333\x207.74797H15.3333V9.0813H13.3333V7.74797Z\x22\x20fill=\x22#9297CA\x22/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>' + chrome['i18n']['getMessage']('highlight_changes') + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22wsb2_result-btn\x22\x20data-btn_copy>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width=\x2213\x22\x20height=\x2215\x22\x20viewBox=\x220\x200\x2013\x2015\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M11.6667\x2013.4146H4.33333V4.0813H11.6667M11.6667\x202.74797H4.33333C3.97971\x202.74797\x203.64057\x202.88844\x203.39052\x203.13849C3.14047\x203.38854\x202.99999\x203.72768\x202.99999\x204.0813V13.4146C2.99999\x2013.7683\x203.14047\x2014.1074\x203.39052\x2014.3574C3.64057\x2014.6075\x203.97971\x2014.748\x204.33333\x2014.748H11.6667C12.0203\x2014.748\x2012.3594\x2014.6075\x2012.6095\x2014.3574C12.8595\x2014.1074\x2013\x2013.7683\x2013\x2013.4146V4.0813C13\x203.72768\x2012.8595\x203.38854\x2012.6095\x203.13849C12.3594\x202.88844\x2012.0203\x202.74797\x2011.6667\x202.74797ZM9.66666\x200.0812988H1.66666C1.31304\x200.0812988\x200.973901\x200.221775\x200.723852\x200.471823C0.473804\x200.721872\x200.333328\x201.06101\x200.333328\x201.41463V10.748H1.66666V1.41463H9.66666V0.0812988Z\x22\x20fill=\x22#9297CA\x22/></svg>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>' + chrome['i18n']['getMessage']('copy_text') + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wsb2_menu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wsb2_list\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22wsb2_item\x20hidden\x22\x20data-hide_on_error\x20data-btn_replace>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20viewBox=\x220\x200\x2016\x2016\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M13.3333\x207.99998C13.3333\x209.41447\x2012.7714\x2010.771\x2011.7712\x2011.7712C10.771\x2012.7714\x209.41447\x2013.3333\x207.99998\x2013.3333C6.58549\x2013.3333\x205.22894\x2012.7714\x204.22874\x2011.7712C3.22855\x2010.771\x202.66665\x209.41447\x202.66665\x207.99998C2.66665\x206.58549\x203.22855\x205.22894\x204.22874\x204.22874C5.22894\x203.22855\x206.58549\x202.66665\x207.99998\x202.66665C8.50665\x202.66665\x208.99998\x202.73998\x209.46665\x202.87331L10.5133\x201.82665C9.73998\x201.50665\x208.89331\x201.33331\x207.99998\x201.33331C7.1245\x201.33331\x206.25759\x201.50575\x205.44876\x201.84078C4.63992\x202.17581\x203.90499\x202.66688\x203.28593\x203.28593C2.03569\x204.53618\x201.33331\x206.23187\x201.33331\x207.99998C1.33331\x209.76809\x202.03569\x2011.4638\x203.28593\x2012.714C3.90499\x2013.3331\x204.63992\x2013.8241\x205.44876\x2014.1592C6.25759\x2014.4942\x207.1245\x2014.6666\x207.99998\x2014.6666C9.76809\x2014.6666\x2011.4638\x2013.9643\x2012.714\x2012.714C13.9643\x2011.4638\x2014.6666\x209.76809\x2014.6666\x207.99998M5.27331\x206.71998L4.33331\x207.66665L7.33331\x2010.6666L14\x203.99998L13.06\x203.05331L7.33331\x208.77998L5.27331\x206.71998Z\x22\x20fill=\x22#8288C3\x22/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>' + chrome['i18n']['getMessage']('replace_selection_btn') + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22wsb2_item\x20hidden\x22\x20data-hide_on_error\x20data-btn_insert_below>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20viewBox=\x220\x200\x2016\x2016\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M11.3333\x209.33333H12.6667V11.3333H14.6667V12.6667H12.6667V14.6667H11.3333V12.6667H9.33333V11.3333H11.3333V9.33333ZM3.33333\x202H12.6667C13.4067\x202\x2014\x202.59333\x2014\x203.33333V8.53333C13.5933\x208.3\x2013.1467\x208.13333\x2012.6667\x208.05333V3.33333H3.33333V12.6667H8.05333C8.13333\x2013.1467\x208.3\x2013.5933\x208.53333\x2014H3.33333C2.59333\x2014\x202\x2013.4067\x202\x2012.6667V3.33333C2\x202.59333\x202.59333\x202\x203.33333\x202ZM4.66667\x204.66667H11.3333V6H4.66667V4.66667ZM4.66667\x207.33333H11.3333V8.05333C10.7667\x208.14667\x2010.2467\x208.36\x209.78667\x208.66667H4.66667V7.33333ZM4.66667\x2010H8V11.3333H4.66667V10Z\x22\x20fill=\x22#8288C3\x22/></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>' + chrome['i18n']['getMessage']('insert_below_btn') + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wsb2_separator\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22wsb2_item\x22\x20data-btn_close>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20viewBox=\x220\x200\x2016\x2016\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M12.6666\x204.27334L11.7266\x203.33334L7.99998\x207.06001L4.27331\x203.33334L3.33331\x204.27334L7.05998\x208.00001L3.33331\x2011.7267L4.27331\x2012.6667L7.99998\x208.94001L11.7266\x2012.6667L12.6666\x2011.7267L8.93998\x208.00001L12.6666\x204.27334Z\x22\x20fill=\x22#9FA0B1\x22/></svg>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>' + chrome['i18n']['getMessage']('cancel_btn') + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>';
    }
}
class tj2u8bcf {
    constructor(mo36y5) {
        this['pageService'] = mo36y5;
        this['tagName'] = 'wordsuperb-reflection';
        this['template'] = new vb2x24h60();
        this['eventService'] = new m77b17();
        this['selectionStart'] = 0x0;
        this['selectionEnd'] = 0x0;
        this['mirrorStyleProps'] = [
            'margin',
            'box-sizing',
            'border',
            'border-width',
            'border-radius',
            'width',
            'height',
            'padding',
            'font',
            'font-size',
            'font-family',
            'direction',
            'text-align',
            'text-shadow',
            'text-indent',
            'letter-spacing',
            'word-break',
            'overflow-wrap',
            'word-spacing',
            'writing-mode',
            'white-space',
            'vertical-align',
            'overflow',
            'line-height'
        ];
        this['create']();
    }
    ['define']() {
        if (customElements['get'](this['tagName']) !== undefined)
            return;
        customElements['define'](this['tagName'], class extends HTMLElement {
            ['connectedCallback']() {
            }
        });
    }
    async ['create']() {
        this['define']();
        this['wrapper'] = bjx3m(this['tagName'], {
            'position': 'fixed',
            'left': '-10000px',
            'top': '0',
            'pointer-events': 'none',
            'opacity': 0x0,
            'z-index': -0x2710
        });
        this['shadow'] = this['wrapper']['attachShadow']({ 'mode': 'closed' });
        this['shadow']['innerHTML'] += '<style>' + this['template']['style'] + '</style>' + this['template']['html'];
        document['body']['appendChild'](this['wrapper']);
        this['initElements']();
    }
    ['destroy']() {
        this['wrapper']['remove']();
    }
    ['initElements']() {
        this['reflection'] = this['shadow']['querySelector']('[data-reflection]');
    }
    ['clone'](hc04uz) {
        if (!(hc04uz instanceof t461abm))
            return ![];
        const tj27y1 = window['getComputedStyle'](hc04uz['element']);
        for (let sa97rl of this['mirrorStyleProps']) {
            this['reflection']['style'][sa97rl] = tj27y1[sa97rl];
        }
        const ji4684 = hc04uz['element']['value'];
        const eg66g7e3 = ji4684['substring'](0x0, this['selectionStart']);
        const w5u4q65 = ji4684['substring'](this['selectionStart'], this['selectionEnd']);
        const k5q3kj04 = w5u4q65['replaceAll']('\x0a', '<br>');
        const kcgbs = ji4684['substring'](this['selectionEnd']);
        this['reflection']['innerHTML'] = eg66g7e3 + '<span\x20data-selection\x20style=\x22background-color:\x20red;\x22>' + k5q3kj04 + '</span>' + kcgbs;
        return !![];
    }
    ['getSelectionElement']() {
        const ww2sauqc = this['reflection']['querySelector']('[data-selection]');
        return ww2sauqc;
    }
    ['getSelectionRect'](un37swh86) {
        const w2241047 = un37swh86['element']['selectionStart'];
        const n6jnc = un37swh86['element']['selectionEnd'];
        if (n6jnc - w2241047 <= 0x0) {
            this['selectionStart'] = 0x0;
            this['selectionEnd'] = 0x0;
            return;
        }
        this['selectionStart'] = w2241047;
        this['selectionEnd'] = n6jnc;
        this['clone'](un37swh86);
        const ch38tw = this['getSelectionElement']();
        const z590zr79 = ch38tw['getBoundingClientRect']();
        const gn6f6egho = this['wrapper']['getBoundingClientRect']();
        const cd18gq6f = un37swh86['element']['getBoundingClientRect']();
        const vp5p4y = {
            'top': z590zr79['top'] - gn6f6egho['top'],
            'left': z590zr79['left'] - gn6f6egho['left']
        };
        const s75xzx77p = {
            'top': cd18gq6f['top'] + vp5p4y['top'],
            'left': cd18gq6f['left'] + vp5p4y['left'],
            'height': z590zr79['height'],
            'width': z590zr79['width']
        };
        s75xzx77p['y'] = s75xzx77p['top'];
        s75xzx77p['x'] = s75xzx77p['left'];
        return s75xzx77p;
    }
}
class vb2x24h60 {
    constructor() {
        this['style'] = '';
        this['html'] = '<div\x20class=\x22reflection\x22\x20data-reflection></div>';
    }
}
class t6kcu46 {
    constructor(v36vi7d5f) {
        this['pageService'] = v36vi7d5f;
        this['editorService'] = new e51k7je3o();
        this['collection'] = [];
    }
    ['init']() {
        const x4u6ds = this['editorService']['selectAll']();
        x4u6ds['forEach'](pja69 => {
            const v7oh49y = this['editorService']['extract'](pja69);
            this['collection']['push'](new InformerComponent(this['pageService'], v7oh49y));
        });
    }
    ['destroy']() {
        this['collection']['forEach'](ulvtgw60 => {
            ulvtgw60['destroy']();
        });
        this['collection'] = [];
    }
}
class q21ch123d {
    constructor(s6yj2) {
        this['element'] = s6yj2;
    }
    ['selectAll']() {
        this['element']['focus']();
        document['execCommand']('selectAll', ![], null);
    }
}
class t461abm extends q21ch123d {
    constructor(ukp7y066) {
        super(ukp7y066);
    }
}
class ya61wub extends q21ch123d {
    constructor(fdn5f14) {
        super(fdn5f14);
    }
}
class h0900pv06 {
    constructor() {
    }
    ['restore']() {
    }
}
class ey237d extends h0900pv06 {
    constructor(tp4429, sc3rz47c3, y9i19q7, p4gn7ab4) {
        super();
        this['start'] = tp4429;
        this['end'] = sc3rz47c3;
        this['startContainer'] = y9i19q7;
        this['endContainer'] = p4gn7ab4;
    }
    ['restore']() {
        if (!this['startContainer'] || !this['endContainer'])
            return;
        const km67ygh = new Range();
        km67ygh['setStart'](this['startContainer'], this['start']);
        km67ygh['setEnd'](this['endContainer'], this['end']);
        document['getSelection']()['removeAllRanges']();
        document['getSelection']()['addRange'](km67ygh);
    }
}
class wbaapjv37 extends h0900pv06 {
    constructor(e58i1k10, nv1ah, thjgz) {
        super();
        this['start'] = e58i1k10;
        this['end'] = nv1ah;
        this['textarea'] = thjgz;
    }
    ['restore']() {
        if (!this['textarea'])
            return;
        this['textarea']['focus']();
        this['textarea']['selectionStart'] = this['start'];
        this['textarea']['selectionEnd'] = this['end'];
    }
}
class b1z7h8uj {
    constructor(l06nps) {
        this['selector'] = l06nps;
    }
    ['select'](jxnf3a2m2 = document) {
        const sa1462lc = jxnf3a2m2['querySelectorAll'](this['selector']);
        const oir1626 = [];
        for (let g8g7s of sa1462lc) {
            if (this['filter'](g8g7s))
                oir1626['push'](g8g7s);
        }
        return oir1626;
    }
    ['filter'](eg1tq3rbr) {
        const y4592df0 = window['getComputedStyle'](eg1tq3rbr);
        if (y4592df0['width'] === 0x0)
            return ![];
        if (y4592df0['height'] === 0x0)
            return ![];
        if (y4592df0['visibility'] === 'hidden')
            return ![];
        if (y4592df0['display'] === 'none')
            return ![];
        return !![];
    }
}
class yslt49f extends b1z7h8uj {
    constructor() {
        super('*[contenteditable=\x22true\x22],*[contenteditable=\x22\x22]');
    }
}
class we5j2cn3x extends b1z7h8uj {
    constructor() {
        super('textarea');
    }
}
class c29d9f35o {
    constructor() {
    }
    ['extract'](b9465h0) {
        const ft675o = b9465h0['closest']('[contenteditable],\x20[contenteditable=\x22true\x22]');
        if (ft675o)
            return new ya61wub(ft675o);
        return null;
    }
}
class nxx8xq772 {
    constructor() {
    }
    ['extract'](w35j22w) {
        const vc0jnq97 = w35j22w['tagName']['toLowerCase']();
        if (vc0jnq97 === 'textarea')
            return new t461abm(w35j22w);
        const pw91feo5n = w35j22w['querySelector']('textarea');
        if (pw91feo5n)
            return new t461abm(pw91feo5n);
        return null;
    }
}
class nt71n7u9 {
    constructor(h45k7 = {
        'item': async () => {
        },
        'end': async () => {
        }
    }) {
        this['queue'] = {};
        this['current'] = 0x1;
        this['handlers'] = h45k7;
        this['endHandler'] = this['walkProcess'] = ![];
    }
    ['push'](c3eixwx, rwu2uj4, jsmp80031 = ![]) {
        this['queue'][rwu2uj4] = {
            'text': c3eixwx,
            'end': jsmp80031
        };
        if (this['current'] === rwu2uj4)
            this['walk']();
    }
    async ['walk']() {
        if (this['walkProcess'])
            return;
        this['walkProcess'] = !![];
        while (this['walkProcess']) {
            if (!this['queue']['hasOwnProperty'](this['current'])) {
                this['walkProcess'] = ![];
                break;
            }
            const iz4e2f = this['queue'][this['current']];
            if (iz4e2f['end'] === ![]) {
                await this['handlers']['item']({ 'text': iz4e2f['text'] });
            } else {
                this['handlers']['end']();
                this['walkProcess'] = ![];
                break;
            }
            this['current']++;
        }
        this['stop']();
    }
    ['stop']() {
        this['walkProcess'] = ![];
    }
}
class g7foo2imh {
    constructor() {
        this['apiUrl'] = 'https://aiwordchecker.online/api/v3/corrections';
        this['userId'] = djsa85;
    }
    async ['sendRequest'](t7dujr00) {
        const i07927 = l17c01o3();
        const k31ads443 = {
            'rid': i07927,
            'action': t7dujr00['action'],
            'v': 0x3,
            'text': t7dujr00['text'],
            'visitorId': this['userId'],
            'lang': 'en-us',
            'enhancement_level': 0x1
        };
        if (t7dujr00['hasOwnProperty']('before'))
            await t7dujr00['before'](i07927);
        try {
            const k8b2woioy = await fetch(this['apiUrl'], {
                'method': 'POST',
                'cache': 'no-cache',
                'headers': { 'Content-Type': 'application/json' },
                'body': JSON['stringify'](k31ads443)
            });
            const f73nm84 = await k8b2woioy['json']();
            if (f73nm84['hasOwnProperty']('error')) {
                t7dujr00['fail'] && t7dujr00['fail'](f73nm84['error']);
                return;
            }
            t7dujr00['callback'] && t7dujr00['callback'](k8b2woioy);
        } catch (y0tet) {
            t7dujr00['fail'] && t7dujr00['fail']();
        }
    }
}
class pk787n79 {
    constructor() {
        this['errors'] = {
            'local_limit': {
                'tip': chrome['i18n']['getMessage']('status_tip_local_limit'),
                'notice': {
                    'title': chrome['i18n']['getMessage']('status_notice_title_local_limit'),
                    'text': chrome['i18n']['getMessage']('status_notice_text_local_limit')
                },
                'color': '#FF9E00'
            },
            'unsupported_site': {
                'tip': chrome['i18n']['getMessage']('status_tip_unsupported_site'),
                'notice': {
                    'title': chrome['i18n']['getMessage']('status_notice_title_unsupported_site'),
                    'text': chrome['i18n']['getMessage']('status_notice_text_unsupported_site')
                },
                'color': '#C8C8C8'
            },
            'plugin_disabled': {
                'tip': chrome['i18n']['getMessage']('status_tip_plugin_disabled'),
                'notice': {
                    'title': chrome['i18n']['getMessage']('status_notice_title_plugin_disabled'),
                    'text': chrome['i18n']['getMessage']('status_notice_text_plugin_disabled')
                },
                'color': '#C8C8C8'
            },
            'no_backend_answer': {
                'tip': chrome['i18n']['getMessage']('status_tip_no_backend_answer'),
                'notice': {
                    'title': chrome['i18n']['getMessage']('status_notice_title_backend_answer'),
                    'text': chrome['i18n']['getMessage']('status_notice_text_backend_answer')
                },
                'color': '#FF9E00'
            },
            'unsupported_language': {
                'tip': chrome['i18n']['getMessage']('status_tip_unsupported_language'),
                'notice': {
                    'title': chrome['i18n']['getMessage']('status_notice_title_unsupported_language'),
                    'text': chrome['i18n']['getMessage']('status_notice_text_unsupported_language')
                },
                'color': '#C8C8C8'
            },
            'daily_limit_reached': {
                'tip': chrome['i18n']['getMessage']('status_tip_daily_limit_reached'),
                'notice': {
                    'title': chrome['i18n']['getMessage']('status_notice_title_daily_limit_reached'),
                    'text': chrome['i18n']['getMessage']('status_notice_text_daily_limit_reached')
                },
                'color': '#FEC800'
            },
            'monthly_limit_reached': {
                'tip': chrome['i18n']['getMessage']('status_tip_monthly_limit_reached'),
                'notice': {
                    'title': chrome['i18n']['getMessage']('status_notice_title_monthly_limit_reached'),
                    'text': chrome['i18n']['getMessage']('status_notice_text_monthly_limit_reached')
                },
                'color': '#FEC800'
            },
            'overall_limit_reached': {
                'tip': chrome['i18n']['getMessage']('status_tip_overall_limit_reached'),
                'notice': {
                    'title': chrome['i18n']['getMessage']('status_notice_title_overall_limit_reached'),
                    'text': chrome['i18n']['getMessage']('status_notice_text_overall_limit_reached')
                },
                'color': '#FEC800'
            },
            'not_required_version': {
                'tip': chrome['i18n']['getMessage']('status_tip_not_required_version'),
                'notice': {
                    'title': chrome['i18n']['getMessage']('status_notice_title_not_required_version'),
                    'text': chrome['i18n']['getMessage']('status_notice_text_not_required_version')
                },
                'color': '#FF9E00'
            },
            'user_disabled': {
                'tip': chrome['i18n']['getMessage']('status_tip_user_disabled'),
                'notice': {
                    'title': chrome['i18n']['getMessage']('status_notice_title_user_disabled'),
                    'text': chrome['i18n']['getMessage']('status_notice_text_user_disabled')
                },
                'color': '#FF9E00'
            },
            'min_text_limit': {
                'tip': chrome['i18n']['getMessage']('status_tip_min_text_limit'),
                'notice': {
                    'title': chrome['i18n']['getMessage']('status_notice_title_min_text_limit'),
                    'text': chrome['i18n']['getMessage']('status_notice_text_min_text_limit')
                },
                'color': '#FF9E00'
            },
            'max_text_limit': {
                'tip': chrome['i18n']['getMessage']('status_tip_max_text_limit'),
                'notice': {
                    'title': chrome['i18n']['getMessage']('status_notice_title_max_text_limit'),
                    'text': chrome['i18n']['getMessage']('status_notice_text_max_text_limit')
                },
                'color': '#FF9E00'
            }
        };
    }
    ['getErrorText'](nvovu05 = '') {
        if (!this['errors']['hasOwnProperty'](nvovu05)) {
            return this['errors']['no_backend_answer']['notice']['title'];
        }
        return this['errors'][nvovu05]['notice']['title'];
    }
}
class zjb5t32 {
    constructor() {
        this['eventService'] = new m77b17();
        this['editor'] = null;
        this['editorService'] = new e51k7je3o(this);
        this['reflectionComponent'] = new tj2u8bcf(this);
        this['informerCollection'] = new t6kcu46(this);
        this['_selectionLock'] = ![];
        this['restoreSelection'] = null;
        this['showButtonComponent'] = null;
        this['menuComponent'] = null;
        this['responseMenuComponent'] = null;
        this['userId'] = djsa85;
        this['processAction'] = new Map();
        this['processAction']['set']('button', () => this['createButton']());
        this['processAction']['set']('menu', () => this['createMenu']());
    }
    ['enable']() {
        this['initListeners']();
    }
    ['disable']() {
        this['terminateListeners']();
        this['destroyButton']();
        this['destroyMenu']();
        this['destroyResponseMenu']();
        this['informerCollection']['destroy']();
    }
    ['initMutationObserver']() {
        const uq037yf8 = window['MutationObserver'] || window['WebKitMutationObserver'];
        if (!uq037yf8)
            return;
        this['mutationObserver'] = new uq037yf8(() => {
            this['resetPosition']();
        });
        this['mutationObserver']['observe'](document['body'], {
            'childList': !![],
            'subtree': !![]
        });
    }
    ['disconnectMutationObserver']() {
        if (!this['mutationObserver'])
            return;
        this['mutationObserver']['disconnect']();
    }
    ['initListeners']() {
        this['eventService']['add']({
            'event': 'selectionchange',
            'element': document,
            'handler': cu8z12zen => {
                if (this['_selectionLock'])
                    return;
                this['processSelection']();
            }
        });
        this['eventService']['add']({
            'event': 'scroll',
            'element': document,
            'handler': v8p7lp => {
            },
            'useCapture': !![]
        });
    }
    ['lockSelection']() {
        this['_selectionLock'] = !![];
    }
    ['unlockSelection']() {
        this['_selectionLock'] = ![];
    }
    ['doRestoreSelection']() {
        if (!this['restoreSelection'])
            return;
        const bhko56277 = !this['_selectionLock'] ? !![] : ![];
        bhko56277 && this['lockSelection']();
        this['restoreSelection']['restore']();
        bhko56277 && setTimeout(() => {
            this['unlockSelection']();
        });
    }
    ['terminateListeners']() {
        this['eventService']['removeAll']();
    }
    ['getSelectionRange'](e2pqf22j) {
        const yy117ho = e2pqf22j['getRangeAt'](0x0);
        return yy117ho;
    }
    ['destroyButton']() {
        if (!this['showButtonComponent'])
            return;
        this['showButtonComponent']['destroy']();
        this['showButtonComponent'] = null;
    }
    ['destroyMenu']() {
        if (!this['menuComponent'])
            return;
        this['menuComponent']['hide']();
        this['menuComponent']['destroy']();
    }
    ['destroyResponseMenu']() {
        if (!this['responseMenuComponent'])
            return;
        this['responseMenuComponent']['hide']();
        this['responseMenuComponent']['destroy']();
    }
    ['destroySelectionComponents']() {
        this['destroyButton']();
        this['destroyMenu']();
        this['destroyResponseMenu']();
    }
    ['createButton']() {
        this['showButtonComponent'] = new b2j0cl(this);
    }
    ['createMenu']() {
        this['menuComponent'] = new dpuy0hz2m(this);
    }
    ['createResponseMenu'](r63v1) {
        this['responseMenuComponent'] = new xzgf56984(this, r63v1);
    }
    ['getEditor'](q7ii241) {
        try {
            const k418ds9p = q7ii241['closest']('[contenteditable],\x20[contenteditable=\x22true\x22]');
            if (k418ds9p)
                return new ya61wub(k418ds9p);
            c9r3pbj;
            const c9r3pbj = q7ii241['querySelector']('textarea');
            if (c9r3pbj)
                return new t461abm(c9r3pbj);
        } catch (vq41o6) {
            console['log'](vq41o6);
            return ![];
        }
        return null;
    }
    ['getSelectionRect']() {
        if (!this['selection'])
            return null;
        let hpc1a8s = null;
        if (this['editor'] instanceof ya61wub) {
            const h4a532b6g = this['getSelectionRange'](this['selection']);
            this['restoreSelection'] = new ey237d(h4a532b6g['startOffset'], h4a532b6g['endOffset'], h4a532b6g['startContainer'], h4a532b6g['endContainer']);
            hpc1a8s = h4a532b6g['getBoundingClientRect']();
        } else if (this['editor'] instanceof t461abm) {
            this['restoreSelection'] = new wbaapjv37(this['editor']['element']['selectionStart'], this['editor']['element']['selectionEnd'], this['editor']['element']);
            hpc1a8s = this['reflectionComponent']['getSelectionRect'](this['editor']);
        }
        return hpc1a8s;
    }
    ['calcMenuCoords']() {
        let c506g8f = this['getSelectionRect']();
        if (!c506g8f)
            return;
        this['buttonCoords'] = {
            'left': c506g8f['x'],
            'top': c506g8f['y'] - 0x2f
        };
        this['menuCoords'] = {
            'top': {
                'left': c506g8f['x'],
                'top': c506g8f['y'] - 0xa
            },
            'bottom': {
                'left': c506g8f['x'],
                'top': c506g8f['y'] + c506g8f['height'] + 0xa
            }
        };
    }
    ['resetPosition']() {
        console['log']('resetPosition');
        this['calcMenuCoords']();
        this['doRestoreSelection']();
        if (this['showButtonComponent'])
            this['showButtonComponent']['show']();
        if (this['menuComponent'])
            this['menuComponent']['show']();
        if (this['responseMenuComponent'])
            this['responseMenuComponent']['show']();
    }
    ['processSelection'](ru41m3t2 = 'button') {
        this['selection'] = null;
        this['restoreSelection'] = null;
        this['destroySelectionComponents']();
        const o0h93 = window['getSelection']();
        let d68e0vr = o0h93['toString']();
        if (!d68e0vr['length'])
            return;
        this['selection'] = o0h93;
        let wzcv3r5 = null;
        try {
            wzcv3r5 = this['selection']['baseNode']['nodeType'] === 0x1 ? this['selection']['baseNode'] : this['selection']['baseNode']['parentNode'];
        } catch (n065x4) {
            console['log'](n065x4);
            return;
        }
        const oc42dah = this['editorService']['extract'](wzcv3r5);
        if (!oc42dah)
            return;
        this['editor'] = oc42dah;
        this['text'] = this['selection']['toString']();
        this['calcMenuCoords']();
        const v4gkhgbqs = this['processAction']['get'](ru41m3t2);
        v4gkhgbqs && v4gkhgbqs();
    }
}
class m77b17 {
    constructor() {
        this['events'] = {};
    }
    ['add'](rmdz95emn) {
        let {
            event: gv6kg,
            element: a0lhszn,
            handler: xsdzqek0,
            type: type = 'event',
            useCapture: useCapture = ![],
            occlude: occlude = !![]
        } = rmdz95emn;
        let z152q1 = [];
        if (Array['isArray'](a0lhszn)) {
            z152q1 = a0lhszn;
        } else if (a0lhszn instanceof NodeList) {
            z152q1 = Array['from'](a0lhszn);
        } else {
            z152q1 = [a0lhszn];
        }
        const er4704 = !occlude ? xsdzqek0 : r017tvjx0 => {
            r017tvjx0['stopPropagation']();
            r017tvjx0['preventDefault']();
            xsdzqek0(r017tvjx0);
        };
        z152q1['forEach'](i724b => {
            try {
                i724b['addEventListener'](gv6kg, er4704, useCapture);
            } catch (t90rm) {
                console['log'](t90rm);
            }
        });
        const ss791 = l17c01o3();
        this['events'][ss791] = {
            'event': gv6kg,
            'handler': er4704,
            'elements': z152q1
        };
        return ss791;
    }
    ['remove'](o9d5l1xn) {
        if (!(o9d5l1xn in this['events']))
            return !![];
        const lifso0t = this['events'][o9d5l1xn];
        lifso0t['elements']['forEach'](y33il0u => {
            try {
                y33il0u['removeEventListener'](lifso0t['event'], lifso0t['handler']);
            } catch (sa9iw) {
                console['log'](sa9iw);
            }
        });
        delete this['events'][o9d5l1xn];
        return !![];
    }
    ['removeAll']() {
        for (let r867848 of Object['keys'](this['events'])) {
            this['remove'](r867848);
        }
    }
}
class ab8o114qf {
    constructor() {
    }
    ['sendContentMessage'](zo382k4) {
        chrome['tabs']['query']({}, laa33487t => {
            for (let b0wvqu of laa33487t) {
                chrome['tabs']['sendMessage'](b0wvqu['id'], zo382k4);
            }
        });
    }
    async ['setState'](eatp4) {
        if (eatp4 === 'on') {
            await chrome['storage']['local']['set']({ 'enabled': !![] });
            this['sendContentMessage']({ 'action': 'enable' });
        } else {
            await chrome['storage']['local']['set']({ 'enabled': ![] });
            this['sendContentMessage']({ 'action': 'disable' });
        }
    }
    async ['getState']() {
        const rtwq60f = await chrome['storage']['local']['get'](['enabled']);
        return await rtwq60f['enabled'];
    }
}
const zjyqnk = new ab8o114qf();
class o7f6md5ih {
    constructor() {
        this['apiKey'] = '1a5d63183f7885977e49427de0b4e883';
        this['apiUrl'] = 'https://api2.amplitude.com/2/httpapi';
    }
    async ['sendEvent'](z1f53nc, zq6azf31) {
        const do91z2 = {
            'api_key': this['apiKey'],
            'events': [{
                    'user_id': z1f53nc,
                    'event_type': zq6azf31
                }]
        };
        let h20apsu = await fetch(this['apiUrl'], {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': '*/*'
            },
            'body': JSON['stringify'](do91z2)
        });
        return h20apsu;
    }
}
function s51425z() {
    function sxv6ki51(etyps5) {
        var etyps5 = etyps5 || {};
        this['Timeout'] = etyps5['timeout'] || 0x1;
        this['EditCost'] = etyps5['editCost'] || 0x4;
    }
    var ro1mv = -0x1;
    var dux8tp6b = 0x1;
    var sba35 = 0x0;
    sxv6ki51['Diff'];
    sxv6ki51['prototype']['main'] = function (y23mk8ps, bj9l14097, ujyc24, p0urc) {
        if (typeof p0urc == 'undefined') {
            if (this['Timeout'] <= 0x0) {
                p0urc = Number['MAX_VALUE'];
            } else {
                p0urc = new Date()['getTime']() + this['Timeout'] * 0x3e8;
            }
        }
        var o1kv6q = p0urc;
        if (y23mk8ps == null || bj9l14097 == null) {
            throw new Error('Null\x20input.\x20(diff_main)');
        }
        if (y23mk8ps == bj9l14097) {
            if (y23mk8ps) {
                return [[
                        sba35,
                        y23mk8ps
                    ]];
            }
            return [];
        }
        if (typeof ujyc24 == 'undefined') {
            ujyc24 = !![];
        }
        var u6866m377 = ujyc24;
        var i8ioq = this['commonPrefix'](y23mk8ps, bj9l14097);
        var o5c4e97a7 = y23mk8ps['substring'](0x0, i8ioq);
        y23mk8ps = y23mk8ps['substring'](i8ioq);
        bj9l14097 = bj9l14097['substring'](i8ioq);
        i8ioq = this['commonSuffix'](y23mk8ps, bj9l14097);
        var j9vszj = y23mk8ps['substring'](y23mk8ps['length'] - i8ioq);
        y23mk8ps = y23mk8ps['substring'](0x0, y23mk8ps['length'] - i8ioq);
        bj9l14097 = bj9l14097['substring'](0x0, bj9l14097['length'] - i8ioq);
        var ykknm2 = this['compute_'](y23mk8ps, bj9l14097, u6866m377, o1kv6q);
        if (o5c4e97a7) {
            ykknm2['unshift']([
                sba35,
                o5c4e97a7
            ]);
        }
        if (j9vszj) {
            ykknm2['push']([
                sba35,
                j9vszj
            ]);
        }
        this['cleanupMerge'](ykknm2);
        return ykknm2;
    };
    sxv6ki51['prototype']['compute_'] = function (mc7c5, ngoy47ny1, p1vbdf33, lbu6ht) {
        var luwj0yzjh;
        if (!mc7c5) {
            return [[
                    dux8tp6b,
                    ngoy47ny1
                ]];
        }
        if (!ngoy47ny1) {
            return [[
                    ro1mv,
                    mc7c5
                ]];
        }
        var d65zfozv6 = mc7c5['length'] > ngoy47ny1['length'] ? mc7c5 : ngoy47ny1;
        var jm32i = mc7c5['length'] > ngoy47ny1['length'] ? ngoy47ny1 : mc7c5;
        var ai04s1o = d65zfozv6['indexOf'](jm32i);
        if (ai04s1o != -0x1) {
            luwj0yzjh = [
                [
                    dux8tp6b,
                    d65zfozv6['substring'](0x0, ai04s1o)
                ],
                [
                    sba35,
                    jm32i
                ],
                [
                    dux8tp6b,
                    d65zfozv6['substring'](ai04s1o + jm32i['length'])
                ]
            ];
            if (mc7c5['length'] > ngoy47ny1['length']) {
                luwj0yzjh[0x0][0x0] = luwj0yzjh[0x2][0x0] = ro1mv;
            }
            return luwj0yzjh;
        }
        if (jm32i['length'] == 0x1) {
            return [
                [
                    ro1mv,
                    mc7c5
                ],
                [
                    dux8tp6b,
                    ngoy47ny1
                ]
            ];
        }
        var jwpt8 = this['halfMatch_'](mc7c5, ngoy47ny1);
        if (jwpt8) {
            var hyl632c7 = jwpt8[0x0];
            var to1ww2127 = jwpt8[0x1];
            var x4486hatm = jwpt8[0x2];
            var n682o7 = jwpt8[0x3];
            var x5k0y3blv = jwpt8[0x4];
            var hs7z83 = this['main'](hyl632c7, x4486hatm, p1vbdf33, lbu6ht);
            var p7k54 = this['main'](to1ww2127, n682o7, p1vbdf33, lbu6ht);
            return hs7z83['concat']([[
                    sba35,
                    x5k0y3blv
                ]], p7k54);
        }
        if (p1vbdf33 && mc7c5['length'] > 0x64 && ngoy47ny1['length'] > 0x64) {
            return this['lineMode_'](mc7c5, ngoy47ny1, lbu6ht);
        }
        return this['bisect_'](mc7c5, ngoy47ny1, lbu6ht);
    };
    sxv6ki51['prototype']['lineMode_'] = function (d537ifs, lbil0kgkq, x58k40yr) {
        var ia863 = this['linesToChars_'](d537ifs, lbil0kgkq);
        d537ifs = ia863['chars1'];
        lbil0kgkq = ia863['chars2'];
        var bk6l6ha = ia863['lineArray'];
        var jtqz255 = this['main'](d537ifs, lbil0kgkq, ![], x58k40yr);
        this['charsToLines_'](jtqz255, bk6l6ha);
        this['cleanupSemantic'](jtqz255);
        jtqz255['push']([
            sba35,
            ''
        ]);
        var e7nozk39t = 0x0;
        var j2591794z = 0x0;
        var snlrsnad = 0x0;
        var tdehxah0 = '';
        var y1qd8 = '';
        while (e7nozk39t < jtqz255['length']) {
            switch (jtqz255[e7nozk39t][0x0]) {
            case dux8tp6b:
                snlrsnad++;
                y1qd8 += jtqz255[e7nozk39t][0x1];
                break;
            case ro1mv:
                j2591794z++;
                tdehxah0 += jtqz255[e7nozk39t][0x1];
                break;
            case sba35:
                if (j2591794z >= 0x1 && snlrsnad >= 0x1) {
                    jtqz255['splice'](e7nozk39t - j2591794z - snlrsnad, j2591794z + snlrsnad);
                    e7nozk39t = e7nozk39t - j2591794z - snlrsnad;
                    var ia863 = this['main'](tdehxah0, y1qd8, ![], x58k40yr);
                    for (var d5p3i4k3 = ia863['length'] - 0x1; d5p3i4k3 >= 0x0; d5p3i4k3--) {
                        jtqz255['splice'](e7nozk39t, 0x0, ia863[d5p3i4k3]);
                    }
                    e7nozk39t = e7nozk39t + ia863['length'];
                }
                snlrsnad = 0x0;
                j2591794z = 0x0;
                tdehxah0 = '';
                y1qd8 = '';
                break;
            }
            e7nozk39t++;
        }
        jtqz255['pop']();
        return jtqz255;
    };
    sxv6ki51['prototype']['bisect_'] = function (deqd2e43, canwo65ry, u10jn7a) {
        var b8324 = deqd2e43['length'];
        var y99d1 = canwo65ry['length'];
        var k897zye6 = Math['ceil']((b8324 + y99d1) / 0x2);
        var j0256yrw = k897zye6;
        var ekqo37mf = 0x2 * k897zye6;
        var i8414678m = new Array(ekqo37mf);
        var ugvxwd7w6 = new Array(ekqo37mf);
        for (var er3k5gt3 = 0x0; er3k5gt3 < ekqo37mf; er3k5gt3++) {
            i8414678m[er3k5gt3] = -0x1;
            ugvxwd7w6[er3k5gt3] = -0x1;
        }
        i8414678m[j0256yrw + 0x1] = 0x0;
        ugvxwd7w6[j0256yrw + 0x1] = 0x0;
        var l0g08q72y = b8324 - y99d1;
        var hx749ecu = l0g08q72y % 0x2 != 0x0;
        var g97ptb = 0x0;
        var p524hp9 = 0x0;
        var qx350t = 0x0;
        var dwsp3x = 0x0;
        for (var y4223ze = 0x0; y4223ze < k897zye6; y4223ze++) {
            if (new Date()['getTime']() > u10jn7a) {
                break;
            }
            for (var gx8o9366i = -y4223ze + g97ptb; gx8o9366i <= y4223ze - p524hp9; gx8o9366i += 0x2) {
                var io2i84 = j0256yrw + gx8o9366i;
                var a15k6j7;
                if (gx8o9366i == -y4223ze || gx8o9366i != y4223ze && i8414678m[io2i84 - 0x1] < i8414678m[io2i84 + 0x1]) {
                    a15k6j7 = i8414678m[io2i84 + 0x1];
                } else {
                    a15k6j7 = i8414678m[io2i84 - 0x1] + 0x1;
                }
                var fqe0h = a15k6j7 - gx8o9366i;
                while (a15k6j7 < b8324 && fqe0h < y99d1 && deqd2e43['charAt'](a15k6j7) == canwo65ry['charAt'](fqe0h)) {
                    a15k6j7++;
                    fqe0h++;
                }
                i8414678m[io2i84] = a15k6j7;
                if (a15k6j7 > b8324) {
                    p524hp9 += 0x2;
                } else if (fqe0h > y99d1) {
                    g97ptb += 0x2;
                } else if (hx749ecu) {
                    var nvakh = j0256yrw + l0g08q72y - gx8o9366i;
                    if (nvakh >= 0x0 && nvakh < ekqo37mf && ugvxwd7w6[nvakh] != -0x1) {
                        var hcwmg1e = b8324 - ugvxwd7w6[nvakh];
                        if (a15k6j7 >= hcwmg1e) {
                            return this['bisectSplit_'](deqd2e43, canwo65ry, a15k6j7, fqe0h, u10jn7a);
                        }
                    }
                }
            }
            for (var khn4y4 = -y4223ze + qx350t; khn4y4 <= y4223ze - dwsp3x; khn4y4 += 0x2) {
                var nvakh = j0256yrw + khn4y4;
                var hcwmg1e;
                if (khn4y4 == -y4223ze || khn4y4 != y4223ze && ugvxwd7w6[nvakh - 0x1] < ugvxwd7w6[nvakh + 0x1]) {
                    hcwmg1e = ugvxwd7w6[nvakh + 0x1];
                } else {
                    hcwmg1e = ugvxwd7w6[nvakh - 0x1] + 0x1;
                }
                var x7h6ypuxt = hcwmg1e - khn4y4;
                while (hcwmg1e < b8324 && x7h6ypuxt < y99d1 && deqd2e43['charAt'](b8324 - hcwmg1e - 0x1) == canwo65ry['charAt'](y99d1 - x7h6ypuxt - 0x1)) {
                    hcwmg1e++;
                    x7h6ypuxt++;
                }
                ugvxwd7w6[nvakh] = hcwmg1e;
                if (hcwmg1e > b8324) {
                    dwsp3x += 0x2;
                } else if (x7h6ypuxt > y99d1) {
                    qx350t += 0x2;
                } else if (!hx749ecu) {
                    var io2i84 = j0256yrw + l0g08q72y - khn4y4;
                    if (io2i84 >= 0x0 && io2i84 < ekqo37mf && i8414678m[io2i84] != -0x1) {
                        var a15k6j7 = i8414678m[io2i84];
                        var fqe0h = j0256yrw + a15k6j7 - io2i84;
                        hcwmg1e = b8324 - hcwmg1e;
                        if (a15k6j7 >= hcwmg1e) {
                            return this['bisectSplit_'](deqd2e43, canwo65ry, a15k6j7, fqe0h, u10jn7a);
                        }
                    }
                }
            }
        }
        return [
            [
                ro1mv,
                deqd2e43
            ],
            [
                dux8tp6b,
                canwo65ry
            ]
        ];
    };
    sxv6ki51['prototype']['bisectSplit_'] = function (z0v0p, d5a3ane, ne676, lymra757, c850n50) {
        var iwl86 = z0v0p['substring'](0x0, ne676);
        var c82c24 = d5a3ane['substring'](0x0, lymra757);
        var h4837wdk = z0v0p['substring'](ne676);
        var z75488o7 = d5a3ane['substring'](lymra757);
        var ihn76j = this['main'](iwl86, c82c24, ![], c850n50);
        var hw85xara6 = this['main'](h4837wdk, z75488o7, ![], c850n50);
        return ihn76j['concat'](hw85xara6);
    };
    sxv6ki51['prototype']['linesToChars_'] = function (kzsi0z3m, cryv8) {
        var q6313 = [];
        var j1hu27 = {};
        q6313[0x0] = '';
        function k1dx80w(n6y87) {
            var h36q89b6 = '';
            var pq6i3bw0 = 0x0;
            var z097olxg = -0x1;
            var d9u7ia5d = q6313['length'];
            while (z097olxg < n6y87['length'] - 0x1) {
                z097olxg = n6y87['indexOf']('\x0a', pq6i3bw0);
                if (z097olxg == -0x1) {
                    z097olxg = n6y87['length'] - 0x1;
                }
                var y1u8u = n6y87['substring'](pq6i3bw0, z097olxg + 0x1);
                pq6i3bw0 = z097olxg + 0x1;
                if (j1hu27['hasOwnProperty'] ? j1hu27['hasOwnProperty'](y1u8u) : j1hu27[y1u8u] !== undefined) {
                    h36q89b6 += String['fromCharCode'](j1hu27[y1u8u]);
                } else {
                    h36q89b6 += String['fromCharCode'](d9u7ia5d);
                    j1hu27[y1u8u] = d9u7ia5d;
                    q6313[d9u7ia5d++] = y1u8u;
                }
            }
            return h36q89b6;
        }
        var a0982t166 = k1dx80w(kzsi0z3m);
        var vd82mk = k1dx80w(cryv8);
        return {
            'chars1': a0982t166,
            'chars2': vd82mk,
            'lineArray': q6313
        };
    };
    sxv6ki51['prototype']['charsToLines_'] = function (pjypkri, b6pa099) {
        for (var i8a315ljz = 0x0; i8a315ljz < pjypkri['length']; i8a315ljz++) {
            var l18a2a09 = pjypkri[i8a315ljz][0x1];
            var yfo4q41 = [];
            for (var dr0578h7 = 0x0; dr0578h7 < l18a2a09['length']; dr0578h7++) {
                yfo4q41[dr0578h7] = b6pa099[l18a2a09['charCodeAt'](dr0578h7)];
            }
            pjypkri[i8a315ljz][0x1] = yfo4q41['join']('');
        }
    };
    sxv6ki51['prototype']['commonPrefix'] = function (b54j58t, o9mcd) {
        if (!b54j58t || !o9mcd || b54j58t['charAt'](0x0) != o9mcd['charAt'](0x0)) {
            return 0x0;
        }
        var pb36r = 0x0;
        var mt70k0 = Math['min'](b54j58t['length'], o9mcd['length']);
        var k76c97 = mt70k0;
        var f87nzu9j9 = 0x0;
        while (pb36r < k76c97) {
            if (b54j58t['substring'](f87nzu9j9, k76c97) == o9mcd['substring'](f87nzu9j9, k76c97)) {
                pb36r = k76c97;
                f87nzu9j9 = pb36r;
            } else {
                mt70k0 = k76c97;
            }
            k76c97 = Math['floor']((mt70k0 - pb36r) / 0x2 + pb36r);
        }
        return k76c97;
    };
    sxv6ki51['prototype']['commonSuffix'] = function (t6278, e213x6l34) {
        if (!t6278 || !e213x6l34 || t6278['charAt'](t6278['length'] - 0x1) != e213x6l34['charAt'](e213x6l34['length'] - 0x1)) {
            return 0x0;
        }
        var kv3w1y0 = 0x0;
        var jj4t6 = Math['min'](t6278['length'], e213x6l34['length']);
        var p7z171 = jj4t6;
        var amwqd3sd = 0x0;
        while (kv3w1y0 < p7z171) {
            if (t6278['substring'](t6278['length'] - p7z171, t6278['length'] - amwqd3sd) == e213x6l34['substring'](e213x6l34['length'] - p7z171, e213x6l34['length'] - amwqd3sd)) {
                kv3w1y0 = p7z171;
                amwqd3sd = kv3w1y0;
            } else {
                jj4t6 = p7z171;
            }
            p7z171 = Math['floor']((jj4t6 - kv3w1y0) / 0x2 + kv3w1y0);
        }
        return p7z171;
    };
    sxv6ki51['prototype']['commonOverlap_'] = function (n436y, reib9dsm) {
        var xh736g = n436y['length'];
        var eg12y3319 = reib9dsm['length'];
        if (xh736g == 0x0 || eg12y3319 == 0x0) {
            return 0x0;
        }
        if (xh736g > eg12y3319) {
            n436y = n436y['substring'](xh736g - eg12y3319);
        } else if (xh736g < eg12y3319) {
            reib9dsm = reib9dsm['substring'](0x0, xh736g);
        }
        var yyo8ts1y = Math['min'](xh736g, eg12y3319);
        if (n436y == reib9dsm) {
            return yyo8ts1y;
        }
        var o18x80 = 0x0;
        var d0d80gp = 0x1;
        while (!![]) {
            var s357q = n436y['substring'](yyo8ts1y - d0d80gp);
            var e4710sp1 = reib9dsm['indexOf'](s357q);
            if (e4710sp1 == -0x1) {
                return o18x80;
            }
            d0d80gp += e4710sp1;
            if (e4710sp1 == 0x0 || n436y['substring'](yyo8ts1y - d0d80gp) == reib9dsm['substring'](0x0, d0d80gp)) {
                o18x80 = d0d80gp;
                d0d80gp++;
            }
        }
    };
    sxv6ki51['prototype']['halfMatch_'] = function (f0gkj, rs29d) {
        if (this['Timeout'] <= 0x0) {
            return null;
        }
        var oz6tsn94u = f0gkj['length'] > rs29d['length'] ? f0gkj : rs29d;
        var gde2pps = f0gkj['length'] > rs29d['length'] ? rs29d : f0gkj;
        if (oz6tsn94u['length'] < 0x4 || gde2pps['length'] * 0x2 < oz6tsn94u['length']) {
            return null;
        }
        var u089z6p = this;
        function skbt540(bu9o82y2, gcu2c, ulycwbf5) {
            var p5um6bos0 = bu9o82y2['substring'](ulycwbf5, ulycwbf5 + Math['floor'](bu9o82y2['length'] / 0x4));
            var vik6y89v = -0x1;
            var flou5gb2t = '';
            var z6746f1c, k09f94, g88prid, aae83;
            while ((vik6y89v = gcu2c['indexOf'](p5um6bos0, vik6y89v + 0x1)) != -0x1) {
                var nqy18 = u089z6p['commonPrefix'](bu9o82y2['substring'](ulycwbf5), gcu2c['substring'](vik6y89v));
                var bn9c37 = u089z6p['commonSuffix'](bu9o82y2['substring'](0x0, ulycwbf5), gcu2c['substring'](0x0, vik6y89v));
                if (flou5gb2t['length'] < bn9c37 + nqy18) {
                    flou5gb2t = gcu2c['substring'](vik6y89v - bn9c37, vik6y89v) + gcu2c['substring'](vik6y89v, vik6y89v + nqy18);
                    z6746f1c = bu9o82y2['substring'](0x0, ulycwbf5 - bn9c37);
                    k09f94 = bu9o82y2['substring'](ulycwbf5 + nqy18);
                    g88prid = gcu2c['substring'](0x0, vik6y89v - bn9c37);
                    aae83 = gcu2c['substring'](vik6y89v + nqy18);
                }
            }
            if (flou5gb2t['length'] * 0x2 >= bu9o82y2['length']) {
                return [
                    z6746f1c,
                    k09f94,
                    g88prid,
                    aae83,
                    flou5gb2t
                ];
            } else {
                return null;
            }
        }
        var m88jmt30 = skbt540(oz6tsn94u, gde2pps, Math['ceil'](oz6tsn94u['length'] / 0x4));
        var j7n1coa = skbt540(oz6tsn94u, gde2pps, Math['ceil'](oz6tsn94u['length'] / 0x2));
        var xo7a64fd;
        if (!m88jmt30 && !j7n1coa) {
            return null;
        } else if (!j7n1coa) {
            xo7a64fd = m88jmt30;
        } else if (!m88jmt30) {
            xo7a64fd = j7n1coa;
        } else {
            xo7a64fd = m88jmt30[0x4]['length'] > j7n1coa[0x4]['length'] ? m88jmt30 : j7n1coa;
        }
        var ce1305ao1, c7m41i, k33i3, yy554rw;
        if (f0gkj['length'] > rs29d['length']) {
            ce1305ao1 = xo7a64fd[0x0];
            c7m41i = xo7a64fd[0x1];
            k33i3 = xo7a64fd[0x2];
            yy554rw = xo7a64fd[0x3];
        } else {
            k33i3 = xo7a64fd[0x0];
            yy554rw = xo7a64fd[0x1];
            ce1305ao1 = xo7a64fd[0x2];
            c7m41i = xo7a64fd[0x3];
        }
        var o6oj9 = xo7a64fd[0x4];
        return [
            ce1305ao1,
            c7m41i,
            k33i3,
            yy554rw,
            o6oj9
        ];
    };
    sxv6ki51['prototype']['cleanupSemantic'] = function (le85j0) {
        var gk8q7p3 = ![];
        var qp10b6 = [];
        var xyd38601 = 0x0;
        var xlii91 = null;
        var yx71l = 0x0;
        var t64p2 = 0x0;
        var b75mm82qb = 0x0;
        var t6ejzf = 0x0;
        var npt9xro = 0x0;
        while (yx71l < le85j0['length']) {
            if (le85j0[yx71l][0x0] == sba35) {
                qp10b6[xyd38601++] = yx71l;
                t64p2 = t6ejzf;
                b75mm82qb = npt9xro;
                t6ejzf = 0x0;
                npt9xro = 0x0;
                xlii91 = le85j0[yx71l][0x1];
            } else {
                if (le85j0[yx71l][0x0] == dux8tp6b) {
                    t6ejzf += le85j0[yx71l][0x1]['length'];
                } else {
                    npt9xro += le85j0[yx71l][0x1]['length'];
                }
                if (xlii91 && xlii91['length'] <= Math['max'](t64p2, b75mm82qb) && xlii91['length'] <= Math['max'](t6ejzf, npt9xro)) {
                    le85j0['splice'](qp10b6[xyd38601 - 0x1], 0x0, [
                        ro1mv,
                        xlii91
                    ]);
                    le85j0[qp10b6[xyd38601 - 0x1] + 0x1][0x0] = dux8tp6b;
                    xyd38601--;
                    xyd38601--;
                    yx71l = xyd38601 > 0x0 ? qp10b6[xyd38601 - 0x1] : -0x1;
                    t64p2 = 0x0;
                    b75mm82qb = 0x0;
                    t6ejzf = 0x0;
                    npt9xro = 0x0;
                    xlii91 = null;
                    gk8q7p3 = !![];
                }
            }
            yx71l++;
        }
        if (gk8q7p3) {
            this['cleanupMerge'](le85j0);
        }
        this['cleanupSemanticLossless'](le85j0);
        yx71l = 0x1;
        while (yx71l < le85j0['length']) {
            if (le85j0[yx71l - 0x1][0x0] == ro1mv && le85j0[yx71l][0x0] == dux8tp6b) {
                var v81s152 = le85j0[yx71l - 0x1][0x1];
                var mc311i = le85j0[yx71l][0x1];
                var q5itocol = this['commonOverlap_'](v81s152, mc311i);
                var wi99vy52 = this['commonOverlap_'](mc311i, v81s152);
                if (q5itocol >= wi99vy52) {
                    if (q5itocol >= v81s152['length'] / 0x2 || q5itocol >= mc311i['length'] / 0x2) {
                        le85j0['splice'](yx71l, 0x0, [
                            sba35,
                            mc311i['substring'](0x0, q5itocol)
                        ]);
                        le85j0[yx71l - 0x1][0x1] = v81s152['substring'](0x0, v81s152['length'] - q5itocol);
                        le85j0[yx71l + 0x1][0x1] = mc311i['substring'](q5itocol);
                        yx71l++;
                    }
                } else {
                    if (wi99vy52 >= v81s152['length'] / 0x2 || wi99vy52 >= mc311i['length'] / 0x2) {
                        le85j0['splice'](yx71l, 0x0, [
                            sba35,
                            v81s152['substring'](0x0, wi99vy52)
                        ]);
                        le85j0[yx71l - 0x1][0x0] = dux8tp6b;
                        le85j0[yx71l - 0x1][0x1] = mc311i['substring'](0x0, mc311i['length'] - wi99vy52);
                        le85j0[yx71l + 0x1][0x0] = ro1mv;
                        le85j0[yx71l + 0x1][0x1] = v81s152['substring'](wi99vy52);
                        yx71l++;
                    }
                }
                yx71l++;
            }
            yx71l++;
        }
    };
    sxv6ki51['prototype']['cleanupSemanticLossless'] = function (ka28gzh) {
        function bl2e72(t60529039, uz6b12t) {
            if (!t60529039 || !uz6b12t) {
                return 0x6;
            }
            var eu733si = t60529039['charAt'](t60529039['length'] - 0x1);
            var kmeac7c9 = uz6b12t['charAt'](0x0);
            var ea94e2 = eu733si['match'](sxv6ki51['nonAlphaNumericRegex_']);
            var x0o62 = kmeac7c9['match'](sxv6ki51['nonAlphaNumericRegex_']);
            var wn2oxf201 = ea94e2 && eu733si['match'](sxv6ki51['whitespaceRegex_']);
            var cfhfawlo = x0o62 && kmeac7c9['match'](sxv6ki51['whitespaceRegex_']);
            var o1ansm = wn2oxf201 && eu733si['match'](sxv6ki51['linebreakRegex_']);
            var d01os = cfhfawlo && kmeac7c9['match'](sxv6ki51['linebreakRegex_']);
            var g8337rz96 = o1ansm && t60529039['match'](sxv6ki51['blanklineEndRegex_']);
            var om471hsqx = d01os && uz6b12t['match'](sxv6ki51['blanklineStartRegex_']);
            if (g8337rz96 || om471hsqx) {
                return 0x5;
            } else if (o1ansm || d01os) {
                return 0x4;
            } else if (ea94e2 && !wn2oxf201 && cfhfawlo) {
                return 0x3;
            } else if (wn2oxf201 || cfhfawlo) {
                return 0x2;
            } else if (ea94e2 || x0o62) {
                return 0x1;
            }
            return 0x0;
        }
        var ti9p910 = 0x1;
        while (ti9p910 < ka28gzh['length'] - 0x1) {
            if (ka28gzh[ti9p910 - 0x1][0x0] == sba35 && ka28gzh[ti9p910 + 0x1][0x0] == sba35) {
                var icv0h2ih0 = ka28gzh[ti9p910 - 0x1][0x1];
                var ulh8w4f = ka28gzh[ti9p910][0x1];
                var if9mbp = ka28gzh[ti9p910 + 0x1][0x1];
                var p631cesa = this['commonSuffix'](icv0h2ih0, ulh8w4f);
                if (p631cesa) {
                    var kqf1hc = ulh8w4f['substring'](ulh8w4f['length'] - p631cesa);
                    icv0h2ih0 = icv0h2ih0['substring'](0x0, icv0h2ih0['length'] - p631cesa);
                    ulh8w4f = kqf1hc + ulh8w4f['substring'](0x0, ulh8w4f['length'] - p631cesa);
                    if9mbp = kqf1hc + if9mbp;
                }
                var nr868105 = icv0h2ih0;
                var b0y146 = ulh8w4f;
                var ow02eq3g2 = if9mbp;
                var db8qt = bl2e72(icv0h2ih0, ulh8w4f) + bl2e72(ulh8w4f, if9mbp);
                while (ulh8w4f['charAt'](0x0) === if9mbp['charAt'](0x0)) {
                    icv0h2ih0 += ulh8w4f['charAt'](0x0);
                    ulh8w4f = ulh8w4f['substring'](0x1) + if9mbp['charAt'](0x0);
                    if9mbp = if9mbp['substring'](0x1);
                    var yxv6227 = bl2e72(icv0h2ih0, ulh8w4f) + bl2e72(ulh8w4f, if9mbp);
                    if (yxv6227 >= db8qt) {
                        db8qt = yxv6227;
                        nr868105 = icv0h2ih0;
                        b0y146 = ulh8w4f;
                        ow02eq3g2 = if9mbp;
                    }
                }
                if (ka28gzh[ti9p910 - 0x1][0x1] != nr868105) {
                    if (nr868105) {
                        ka28gzh[ti9p910 - 0x1][0x1] = nr868105;
                    } else {
                        ka28gzh['splice'](ti9p910 - 0x1, 0x1);
                        ti9p910--;
                    }
                    ka28gzh[ti9p910][0x1] = b0y146;
                    if (ow02eq3g2) {
                        ka28gzh[ti9p910 + 0x1][0x1] = ow02eq3g2;
                    } else {
                        ka28gzh['splice'](ti9p910 + 0x1, 0x1);
                        ti9p910--;
                    }
                }
            }
            ti9p910++;
        }
    };
    sxv6ki51['nonAlphaNumericRegex_'] = /[^a-zA-Z0-9]/;
    sxv6ki51['whitespaceRegex_'] = /\s/;
    sxv6ki51['linebreakRegex_'] = /[\r\n]/;
    sxv6ki51['blanklineEndRegex_'] = /\n\r?\n$/;
    sxv6ki51['blanklineStartRegex_'] = /^\r?\n\r?\n/;
    sxv6ki51['prototype']['cleanupEfficiency'] = function (bgb7i) {
        var bf4o6q70 = ![];
        var wr8rz8s3 = [];
        var e35d7vj3 = 0x0;
        var h19fwzvl = null;
        var o2vre8h22 = 0x0;
        var lg4hrm = ![];
        var ummv21g = ![];
        var t37zuv3 = ![];
        var x2iyl = ![];
        while (o2vre8h22 < bgb7i['length']) {
            if (bgb7i[o2vre8h22][0x0] == sba35) {
                if (bgb7i[o2vre8h22][0x1]['length'] < this['EditCost'] && (t37zuv3 || x2iyl)) {
                    wr8rz8s3[e35d7vj3++] = o2vre8h22;
                    lg4hrm = t37zuv3;
                    ummv21g = x2iyl;
                    h19fwzvl = bgb7i[o2vre8h22][0x1];
                } else {
                    e35d7vj3 = 0x0;
                    h19fwzvl = null;
                }
                t37zuv3 = x2iyl = ![];
            } else {
                if (bgb7i[o2vre8h22][0x0] == ro1mv) {
                    x2iyl = !![];
                } else {
                    t37zuv3 = !![];
                }
                if (h19fwzvl && (lg4hrm && ummv21g && t37zuv3 && x2iyl || h19fwzvl['length'] < this['EditCost'] / 0x2 && lg4hrm + ummv21g + t37zuv3 + x2iyl == 0x3)) {
                    bgb7i['splice'](wr8rz8s3[e35d7vj3 - 0x1], 0x0, [
                        ro1mv,
                        h19fwzvl
                    ]);
                    bgb7i[wr8rz8s3[e35d7vj3 - 0x1] + 0x1][0x0] = dux8tp6b;
                    e35d7vj3--;
                    h19fwzvl = null;
                    if (lg4hrm && ummv21g) {
                        t37zuv3 = x2iyl = !![];
                        e35d7vj3 = 0x0;
                    } else {
                        e35d7vj3--;
                        o2vre8h22 = e35d7vj3 > 0x0 ? wr8rz8s3[e35d7vj3 - 0x1] : -0x1;
                        t37zuv3 = x2iyl = ![];
                    }
                    bf4o6q70 = !![];
                }
            }
            o2vre8h22++;
        }
        if (bf4o6q70) {
            this['cleanupMerge'](bgb7i);
        }
    };
    sxv6ki51['prototype']['cleanupMerge'] = function (sc3yzb) {
        sc3yzb['push']([
            sba35,
            ''
        ]);
        var t960064ts = 0x0;
        var nxt386 = 0x0;
        var j157ubz4 = 0x0;
        var yw017 = '';
        var b169l3 = '';
        var p25gh6w;
        while (t960064ts < sc3yzb['length']) {
            switch (sc3yzb[t960064ts][0x0]) {
            case dux8tp6b:
                j157ubz4++;
                b169l3 += sc3yzb[t960064ts][0x1];
                t960064ts++;
                break;
            case ro1mv:
                nxt386++;
                yw017 += sc3yzb[t960064ts][0x1];
                t960064ts++;
                break;
            case sba35:
                if (nxt386 + j157ubz4 > 0x1) {
                    if (nxt386 !== 0x0 && j157ubz4 !== 0x0) {
                        p25gh6w = this['commonPrefix'](b169l3, yw017);
                        if (p25gh6w !== 0x0) {
                            if (t960064ts - nxt386 - j157ubz4 > 0x0 && sc3yzb[t960064ts - nxt386 - j157ubz4 - 0x1][0x0] == sba35) {
                                sc3yzb[t960064ts - nxt386 - j157ubz4 - 0x1][0x1] += b169l3['substring'](0x0, p25gh6w);
                            } else {
                                sc3yzb['splice'](0x0, 0x0, [
                                    sba35,
                                    b169l3['substring'](0x0, p25gh6w)
                                ]);
                                t960064ts++;
                            }
                            b169l3 = b169l3['substring'](p25gh6w);
                            yw017 = yw017['substring'](p25gh6w);
                        }
                        p25gh6w = this['commonSuffix'](b169l3, yw017);
                        if (p25gh6w !== 0x0) {
                            sc3yzb[t960064ts][0x1] = b169l3['substring'](b169l3['length'] - p25gh6w) + sc3yzb[t960064ts][0x1];
                            b169l3 = b169l3['substring'](0x0, b169l3['length'] - p25gh6w);
                            yw017 = yw017['substring'](0x0, yw017['length'] - p25gh6w);
                        }
                    }
                    if (nxt386 === 0x0) {
                        sc3yzb['splice'](t960064ts - j157ubz4, nxt386 + j157ubz4, [
                            dux8tp6b,
                            b169l3
                        ]);
                    } else if (j157ubz4 === 0x0) {
                        sc3yzb['splice'](t960064ts - nxt386, nxt386 + j157ubz4, [
                            ro1mv,
                            yw017
                        ]);
                    } else {
                        sc3yzb['splice'](t960064ts - nxt386 - j157ubz4, nxt386 + j157ubz4, [
                            ro1mv,
                            yw017
                        ], [
                            dux8tp6b,
                            b169l3
                        ]);
                    }
                    t960064ts = t960064ts - nxt386 - j157ubz4 + (nxt386 ? 0x1 : 0x0) + (j157ubz4 ? 0x1 : 0x0) + 0x1;
                } else if (t960064ts !== 0x0 && sc3yzb[t960064ts - 0x1][0x0] == sba35) {
                    sc3yzb[t960064ts - 0x1][0x1] += sc3yzb[t960064ts][0x1];
                    sc3yzb['splice'](t960064ts, 0x1);
                } else {
                    t960064ts++;
                }
                j157ubz4 = 0x0;
                nxt386 = 0x0;
                yw017 = '';
                b169l3 = '';
                break;
            }
        }
        if (sc3yzb[sc3yzb['length'] - 0x1][0x1] === '') {
            sc3yzb['pop']();
        }
        var v4ng882 = ![];
        t960064ts = 0x1;
        while (t960064ts < sc3yzb['length'] - 0x1) {
            if (sc3yzb[t960064ts - 0x1][0x0] == sba35 && sc3yzb[t960064ts + 0x1][0x0] == sba35) {
                if (sc3yzb[t960064ts][0x1]['substring'](sc3yzb[t960064ts][0x1]['length'] - sc3yzb[t960064ts - 0x1][0x1]['length']) == sc3yzb[t960064ts - 0x1][0x1]) {
                    sc3yzb[t960064ts][0x1] = sc3yzb[t960064ts - 0x1][0x1] + sc3yzb[t960064ts][0x1]['substring'](0x0, sc3yzb[t960064ts][0x1]['length'] - sc3yzb[t960064ts - 0x1][0x1]['length']);
                    sc3yzb[t960064ts + 0x1][0x1] = sc3yzb[t960064ts - 0x1][0x1] + sc3yzb[t960064ts + 0x1][0x1];
                    sc3yzb['splice'](t960064ts - 0x1, 0x1);
                    v4ng882 = !![];
                } else if (sc3yzb[t960064ts][0x1]['substring'](0x0, sc3yzb[t960064ts + 0x1][0x1]['length']) == sc3yzb[t960064ts + 0x1][0x1]) {
                    sc3yzb[t960064ts - 0x1][0x1] += sc3yzb[t960064ts + 0x1][0x1];
                    sc3yzb[t960064ts][0x1] = sc3yzb[t960064ts][0x1]['substring'](sc3yzb[t960064ts + 0x1][0x1]['length']) + sc3yzb[t960064ts + 0x1][0x1];
                    sc3yzb['splice'](t960064ts + 0x1, 0x1);
                    v4ng882 = !![];
                }
            }
            t960064ts++;
        }
        if (v4ng882) {
            this['cleanupMerge'](sc3yzb);
        }
    };
    sxv6ki51['prototype']['xIndex'] = function (b6xmx, f1g8h4j5i) {
        var u5ykqr3l = 0x0;
        var flj8mr = 0x0;
        var rq707ne0 = 0x0;
        var nn06it8c = 0x0;
        var nbd4w9;
        for (nbd4w9 = 0x0; nbd4w9 < b6xmx['length']; nbd4w9++) {
            if (b6xmx[nbd4w9][0x0] !== dux8tp6b) {
                u5ykqr3l += b6xmx[nbd4w9][0x1]['length'];
            }
            if (b6xmx[nbd4w9][0x0] !== ro1mv) {
                flj8mr += b6xmx[nbd4w9][0x1]['length'];
            }
            if (u5ykqr3l > f1g8h4j5i) {
                break;
            }
            rq707ne0 = u5ykqr3l;
            nn06it8c = flj8mr;
        }
        if (b6xmx['length'] != nbd4w9 && b6xmx[nbd4w9][0x0] === ro1mv) {
            return nn06it8c;
        }
        return nn06it8c + (f1g8h4j5i - rq707ne0);
    };
    sxv6ki51['prototype']['prettyHtml'] = function (c8l78h2wt) {
        var aaf42u6 = [];
        var iwuz0zk = /&/g;
        var app4p = /</g;
        var mxpe65ux = />/g;
        var h02kh5s6 = /\n/g;
        for (var fqr201pw = 0x0; fqr201pw < c8l78h2wt['length']; fqr201pw++) {
            var njf80m3 = c8l78h2wt[fqr201pw][0x0];
            var b539o4x = c8l78h2wt[fqr201pw][0x1];
            var p4gt1 = b539o4x['replace'](iwuz0zk, '&amp;')['replace'](app4p, '&lt;')['replace'](mxpe65ux, '&gt;')['replace'](h02kh5s6, '<br/>');
            switch (njf80m3) {
            case dux8tp6b:
                aaf42u6[fqr201pw] = '<ins>' + p4gt1 + '</ins>';
                break;
            case ro1mv:
                aaf42u6[fqr201pw] = '<del>' + p4gt1 + '</del>';
                break;
            case sba35:
                aaf42u6[fqr201pw] = '<span>' + p4gt1 + '</span>';
                break;
            }
        }
        return aaf42u6['join']('');
    };
    sxv6ki51['prototype']['text1'] = function (oe3r2dfwi) {
        var nw77b = [];
        for (var t2j31f = 0x0; t2j31f < oe3r2dfwi['length']; t2j31f++) {
            if (oe3r2dfwi[t2j31f][0x0] !== dux8tp6b) {
                nw77b[t2j31f] = oe3r2dfwi[t2j31f][0x1];
            }
        }
        return nw77b['join']('');
    };
    sxv6ki51['prototype']['text2'] = function (tk2r1qudr) {
        var d86obn = [];
        for (var y0jkjhe = 0x0; y0jkjhe < tk2r1qudr['length']; y0jkjhe++) {
            if (tk2r1qudr[y0jkjhe][0x0] !== ro1mv) {
                d86obn[y0jkjhe] = tk2r1qudr[y0jkjhe][0x1];
            }
        }
        return d86obn['join']('');
    };
    sxv6ki51['prototype']['levenshtein'] = function (fa8e5z71x) {
        var d3756 = 0x0;
        var jkz96245 = 0x0;
        var uj58v = 0x0;
        for (var my4q9x9 = 0x0; my4q9x9 < fa8e5z71x['length']; my4q9x9++) {
            var w0vo9 = fa8e5z71x[my4q9x9][0x0];
            var d69v507o = fa8e5z71x[my4q9x9][0x1];
            switch (w0vo9) {
            case dux8tp6b:
                jkz96245 += d69v507o['length'];
                break;
            case ro1mv:
                uj58v += d69v507o['length'];
                break;
            case sba35:
                d3756 += Math['max'](jkz96245, uj58v);
                jkz96245 = 0x0;
                uj58v = 0x0;
                break;
            }
        }
        d3756 += Math['max'](jkz96245, uj58v);
        return d3756;
    };
    sxv6ki51['prototype']['toDelta'] = function (kjc0br) {
        var hwx6o = [];
        for (var hikv2 = 0x0; hikv2 < kjc0br['length']; hikv2++) {
            switch (kjc0br[hikv2][0x0]) {
            case dux8tp6b:
                hwx6o[hikv2] = '+' + encodeURI(kjc0br[hikv2][0x1]);
                break;
            case ro1mv:
                hwx6o[hikv2] = '-' + kjc0br[hikv2][0x1]['length'];
                break;
            case sba35:
                hwx6o[hikv2] = '=' + kjc0br[hikv2][0x1]['length'];
                break;
            }
        }
        return hwx6o['join']('\x09')['replace'](/%20/g, '\x20');
    };
    sxv6ki51['prototype']['fromDelta'] = function (nagmu9c, qc9uu3z4u) {
        var pilu9ia8 = [];
        var qpd7c = 0x0;
        var y4c52a9ku = 0x0;
        var wgus12w3 = qc9uu3z4u['split'](/\t/g);
        for (var xji22 = 0x0; xji22 < wgus12w3['length']; xji22++) {
            var ge16kp = wgus12w3[xji22]['substring'](0x1);
            switch (wgus12w3[xji22]['charAt'](0x0)) {
            case '+':
                try {
                    pilu9ia8[qpd7c++] = [
                        dux8tp6b,
                        decodeURI(ge16kp)
                    ];
                } catch (bo06vo) {
                    throw new Error('Illegal\x20escape\x20in\x20diff_fromDelta:\x20' + ge16kp);
                }
                break;
            case '-':
            case '=':
                var h5s64z = parseInt(ge16kp, 0xa);
                if (isNaN(h5s64z) || h5s64z < 0x0) {
                    throw new Error('Invalid\x20number\x20in\x20diff_fromDelta:\x20' + ge16kp);
                }
                var hl9xosq2p = nagmu9c['substring'](y4c52a9ku, y4c52a9ku += h5s64z);
                if (wgus12w3[xji22]['charAt'](0x0) == '=') {
                    pilu9ia8[qpd7c++] = [
                        sba35,
                        hl9xosq2p
                    ];
                } else {
                    pilu9ia8[qpd7c++] = [
                        ro1mv,
                        hl9xosq2p
                    ];
                }
                break;
            default:
                if (wgus12w3[xji22]) {
                    throw new Error('Invalid\x20diff\x20operation\x20in\x20diff_fromDelta:\x20' + wgus12w3[xji22]);
                }
            }
        }
        if (y4c52a9ku != nagmu9c['length']) {
            throw new Error('Delta\x20length\x20(' + y4c52a9ku + ')\x20does\x20not\x20equal\x20source\x20text\x20length\x20(' + nagmu9c['length'] + ').');
        }
        return pilu9ia8;
    };
    this['diff'] = sxv6ki51;
    this['DIFF_DELETE'] = ro1mv;
    this['DIFF_INSERT'] = dux8tp6b;
    this['DIFF_EQUAL'] = sba35;
    return sxv6ki51;
}
class cnk2364l {
    constructor() {
    }
    ['splitSubarray'](g7g90e791) {
        let g01dt89w3 = [];
        g7g90e791['forEach'](function (ldy3h892) {
            let h8vmw8m = ldy3h892[0x0];
            let msxh9g = ldy3h892[0x1];
            let ot6ct63v7 = msxh9g['split']('\x0a');
            for (let lxnp2507w = 0x0; lxnp2507w < ot6ct63v7['length']; lxnp2507w++) {
                if (lxnp2507w === 0x0) {
                    g01dt89w3['push']([
                        h8vmw8m,
                        ot6ct63v7[lxnp2507w]
                    ]);
                } else {
                    g01dt89w3['push']([
                        h8vmw8m,
                        '\x0a' + ot6ct63v7[lxnp2507w]
                    ]);
                }
            }
        });
        return g01dt89w3;
    }
    ['compare'](wa712y, sgnb23) {
        let k250v01v = [];
        const fvjwl = s51425z();
        const i7p3elv1q = new fvjwl();
        k250v01v = i7p3elv1q['main'](wa712y, sgnb23);
        i7p3elv1q['cleanupSemantic'](k250v01v);
        k250v01v = this['splitSubarray'](k250v01v);
        return k250v01v;
    }
}
class e51k7je3o {
    constructor() {
        this['selectors'] = new Map();
        this['selectors']['set']('contenteditable', new yslt49f());
        this['selectors']['set']('textarea', new we5j2cn3x());
        this['extractors'] = new Map();
        this['extractors']['set']('contenteditable', new c29d9f35o());
        this['extractors']['set']('textarea', new nxx8xq772());
    }
    ['extract'](bc1pg0) {
        try {
            const uqj627a03 = Array['from'](this['extractors']['keys']());
            for (let hoz49pq of uqj627a03) {
                const o273hdf0t = this['extractors']['get'](hoz49pq);
                const dwuwb6e = o273hdf0t['extract'](bc1pg0);
                if (dwuwb6e)
                    return dwuwb6e;
            }
        } catch (cxnn2eu) {
            console['log'](cxnn2eu);
            return ![];
        }
        return null;
    }
    ['selectAll']() {
        let mr853s37 = [];
        this['selectors']['forEach'](function (e83779kl, rnu85nj) {
            const gc9f2l = e83779kl['select']();
            mr853s37 = mr853s37['concat'](gc9f2l);
        });
        return mr853s37;
    }
}
let djsa85 = null;
const vehms = new zjb5t32();
async function bn214() {
    const ppjud4 = await ff903kjv0();
    if (ppjud4 === !![])
        return;
    djsa85 = await sou2n93();
    c4g435r();
    vehms['enable']();
}
function th621b52() {
    if (document['readyState'] === 'complete') {
        bn214();
        return;
    }
    const vktub = () => {
        bn214();
        window['removeEventListener']('load', vktub, ![]);
    };
    window['addEventListener']('load', vktub);
}
function x0fon() {
    vehms['disable']();
}
async function ff903kjv0() {
    const n2ce4 = await chrome['storage']['local']['get'](['siteSupport']);
    if (!('siteSupport' in n2ce4))
        return ![];
    const ccd31gp7r = window['location']['host'];
    for (let k18t801 of n2ce4['siteSupport']['unavailable']) {
        if (ccd31gp7r['indexOf'](k18t801['domain']) === -0x1)
            continue;
        return !![];
    }
    ;
    return ![];
}
async function xfcgr0l3() {
    const f9673k = await chrome['storage']['local']['get'](['siteSupport']);
    if (!('siteSupport' in f9673k))
        return ![];
    const jlwv7 = window['location']['host'];
    for (let y4vb28dz0 of f9673k['siteSupport']['available']) {
        if (jlwv7['indexOf'](y4vb28dz0['domain']) === -0x1)
            continue;
        return !![];
    }
    ;
    return ![];
}
async function o549k4() {
    chrome['runtime']['onMessage']['addListener']((lteku0k7, h4z90ev3p, ycg1vc) => {
        switch (lteku0k7['action']) {
        case 'enable':
            th621b52();
            break;
        case 'disable':
            x0fon();
            break;
        }
    });
    const o707248 = await chrome['storage']['local']['get'](['enabled']);
    const g90w404g = o707248['enabled'];
    if (g90w404g)
        th621b52();
}
o549k4();