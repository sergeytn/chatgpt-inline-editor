class c7k2leh71 {
    constructor(h1911, i89es = () => {
    }, dvqvtjm) {
        this['block'] = h1911;
        this['closeCallback'] = i89es;
        this['init']();
        this['userId'] = dvqvtjm;
    }
    ['init']() {
        this['form'] = this['block']['querySelector']('[data-feedback_form]');
        this['emailBlock'] = this['form']['querySelector']('[data-email_block]');
        this['emailInput'] = this['form']['querySelector']('[data-email]');
        this['messageBlock'] = this['form']['querySelector']('[data-message_block]');
        this['messageInput'] = this['form']['querySelector']('[data-message]');
        this['successMsg'] = this['form']['querySelector']('[data-success_message]');
        this['submitHandler'] = v2xnep => {
            this['submit'](v2xnep);
        };
        this['form']['addEventListener']('submit', this['submitHandler']);
    }
    ['reset']() {
        this['emailBlock']['classList']['remove']('-frogtool-error');
        this['messageBlock']['classList']['remove']('-frogtool-error');
        this['emailBlock']['querySelectorAll']('[data-error]')['forEach'](e2wyq => e2wyq['remove']());
        this['messageBlock']['querySelectorAll']('[data-error]')['forEach'](tc4188h15 => tc4188h15['remove']());
        this['successMsg']['classList']['remove']('is-show');
    }
    ['clear']() {
        this['emailInput']['value'] = '';
        this['messageInput']['value'] = '';
    }
    async ['submit'](r6683mu1) {
        r6683mu1['preventDefault']();
        this['reset']();
        let ls6bxfp = this['emailInput']['value'];
        let h1meyj3 = this['messageInput']['value'];
        const vy2sb5r = new q572373q();
        let p30z97cy = ![];
        if (!ls6bxfp || !ls6bxfp['length']) {
            this['emailBlock']['classList']['add']('-frogtool-error');
            const anq262 = '<div\x20class=\x22-frogtool-input__error\x22\x20data-error>Email\x20is\x20empty</div>';
            this['emailBlock']['insertAdjacentHTML']('beforeend', anq262);
            p30z97cy = !![];
        } else if (!vy2sb5r['validateEmail'](ls6bxfp)) {
            this['emailBlock']['classList']['add']('-frogtool-error');
            const b7x6w = '<div\x20class=\x22-frogtool-input__error\x22\x20data-error>Email\x20is\x20incorrect</div>';
            this['emailBlock']['insertAdjacentHTML']('beforeend', b7x6w);
            p30z97cy = !![];
        }
        if (!h1meyj3 || !h1meyj3['length']) {
            this['messageBlock']['classList']['add']('-frogtool-error');
            const w178d4sr = '<div\x20class=\x22-frogtool-input__error\x22\x20data-error>Message\x20is\x20empty</div>';
            this['messageBlock']['insertAdjacentHTML']('beforeend', w178d4sr);
            p30z97cy = !![];
        }
        if (p30z97cy)
            return;
        const u56zk77a = 'https://aiwordchecker.online/api/reviews';
        const awc4kgird = new FormData();
        awc4kgird['append']('email', ls6bxfp);
        awc4kgird['append']('visitorId', this['userId']);
        awc4kgird['append']('body', h1meyj3);
        const gzu0017 = await fetch(u56zk77a, {
            'method': 'POST',
            'headers': { 'Accept': 'application/json' },
            'body': awc4kgird
        });
        const lt8kbm3 = await gzu0017['json']();
        this['successMsg']['classList']['add']('is-show');
        this['clear']();
        setTimeout(() => {
            if (this['closeCallback'])
                this['closeCallback']();
            setTimeout(() => {
                this['successMsg']['classList']['remove']('is-show');
            }, 0x3e8);
        }, 0x7d0);
    }
    ['destroy']() {
        this['form']['removeEventListener']('submit', this['submitHandler']);
        this['block']['remove']();
    }
}
class n2b365m09 {
    constructor(j7000, qltt25 = () => {
    }, qt13itx5 = () => {
    }) {
        this['block'] = j7000;
        this['lowRateCallback'] = qltt25;
        this['highRateCallback'] = qt13itx5;
        this['maxRate'] = 0x5;
        this['init']();
    }
    ['init']() {
        this['stars'] = this['block']['querySelectorAll']('[data-rate_star]');
        this['mouseOverHandler'] = zaify => {
            const r505j1a = parseInt(zaify['target']['dataset']['rate_star'], 0xa);
            this['unsetClass']('hover');
            this['unsetClass']('unhover');
            this['setClass'](r505j1a, 'hover', 'unhover');
        };
        this['mouseOutHandler'] = gzf8804c => {
            this['unsetClass']('hover');
            this['unsetClass']('unhover');
        };
        this['clickHandler'] = grnd8oq5 => {
            const fg1e92v6 = parseInt(grnd8oq5['target']['dataset']['rate_star'], 0xa);
            this['unsetClass']('active');
            this['setClass'](fg1e92v6, 'active');
            this['rateAction'](fg1e92v6);
        };
        this['stars']['forEach'](ch5gy => {
            ch5gy['addEventListener']('mouseover', this['mouseOverHandler']);
            ch5gy['addEventListener']('mouseout', this['mouseOutHandler']);
            ch5gy['addEventListener']('click', this['clickHandler']);
        });
        this['setClass'](this['maxRate'], 'active');
    }
    ['unsetClass'](hf5hpe3) {
        this['stars']['forEach'](ah3bia8 => {
            ah3bia8['classList']['remove'](hf5hpe3);
        });
    }
    ['setClass'](kb32cs, sc6g4, wspu04wu = null) {
        for (let s17ef4g = 0x1; s17ef4g <= kb32cs; s17ef4g++) {
            const h1887z7it = this['block']['querySelector']('[data-rate_star=\x22' + s17ef4g + '\x22]');
            if (!h1887z7it)
                continue;
            h1887z7it['classList']['add'](sc6g4);
        }
        if (!wspu04wu)
            return;
        for (let f89fw72e = kb32cs + 0x1; f89fw72e <= this['maxRate']; f89fw72e++) {
            const yvs8pj = this['block']['querySelector']('[data-rate_star=\x22' + f89fw72e + '\x22]');
            if (!yvs8pj)
                continue;
            yvs8pj['classList']['add'](wspu04wu);
        }
    }
    ['rateAction'](so74x) {
        if (so74x >= 0x4) {
            this['highRateCallback'] && this['highRateCallback']();
        } else {
            this['lowRateCallback'] && this['lowRateCallback']();
        }
    }
    ['destroy']() {
        this['stars']['forEach'](zhavon7 => {
            zhavon7['removeEventListener']('mouseover', this['mouseOverHandler']);
            zhavon7['removeEventListener']('mouseout', this['mouseOutHandler']);
            zhavon7['removeEventListener']('click', this['clickHandler']);
            this['block']['remove']();
        });
    }
}
function ws44i3h1(i4l592e) {
    return chrome['runtime']['getURL'](i4l592e);
}
function bon4918() {
    return ([0x989680] + -0x3e8 + -0xfa0 + -0x1f40 + -0x174876e800)['replace'](/[018]/g, z700f30 => (z700f30 ^ crypto['getRandomValues'](new Uint8Array(0x1))[0x0] & 0xf >> z700f30 / 0x4)['toString'](0x10));
}
async function p38nqg3a() {
    const eo0qy = await chrome['storage']['sync']['get'](['userId']);
    return 'userId' in eo0qy ? eo0qy['userId'] : null;
}
class uuozjj {
    constructor() {
    }
    ['sendContentMessage'](dem81a45) {
        chrome['tabs']['query']({}, p633fqdx => {
            for (let m12vl8 of p633fqdx) {
                chrome['tabs']['sendMessage'](m12vl8['id'], dem81a45);
            }
        });
    }
    async ['setState'](um5b45o3) {
        if (um5b45o3 === 'on') {
            await chrome['storage']['local']['set']({ 'enabled': !![] });
            this['sendContentMessage']({ 'action': 'enable' });
        } else {
            await chrome['storage']['local']['set']({ 'enabled': ![] });
            this['sendContentMessage']({ 'action': 'disable' });
        }
    }
    async ['getState']() {
        const ye73p4bm = await chrome['storage']['local']['get'](['enabled']);
        return await ye73p4bm['enabled'];
    }
}
const x42pz2ea6 = new uuozjj();
class q572373q {
    constructor() {
    }
    ['validateEmail'](w7c785wg1) {
        return w7c785wg1['match'](/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }
}
class p0k5266 {
    constructor() {
        this['events'] = {};
    }
    ['add'](xj65s) {
        let {
            event: la1uw1z9j,
            element: xl0ud,
            handler: cle65,
            type: type = 'event',
            useCapture: useCapture = ![],
            occlude: occlude = !![]
        } = xj65s;
        let h48rl7 = [];
        if (Array['isArray'](xl0ud)) {
            h48rl7 = xl0ud;
        } else if (xl0ud instanceof NodeList) {
            h48rl7 = Array['from'](xl0ud);
        } else {
            h48rl7 = [xl0ud];
        }
        const t630b1 = !occlude ? cle65 : xuixo8r => {
            xuixo8r['stopPropagation']();
            xuixo8r['preventDefault']();
            cle65(xuixo8r);
        };
        h48rl7['forEach'](xjrple => {
            try {
                xjrple['addEventListener'](la1uw1z9j, t630b1, useCapture);
            } catch (g91at8fk) {
                console['log'](g91at8fk);
            }
        });
        const k7h4673 = bon4918();
        this['events'][k7h4673] = {
            'event': la1uw1z9j,
            'handler': t630b1,
            'elements': h48rl7
        };
        return k7h4673;
    }
    ['remove'](h32c2q) {
        if (!(h32c2q in this['events']))
            return !![];
        const z0ta3 = this['events'][h32c2q];
        z0ta3['elements']['forEach'](m254jfx67 => {
            try {
                m254jfx67['removeEventListener'](z0ta3['event'], z0ta3['handler']);
            } catch (m7p158) {
                console['log'](m7p158);
            }
        });
        delete this['events'][h32c2q];
        return !![];
    }
    ['removeAll']() {
        for (let f38fz of Object['keys'](this['events'])) {
            this['remove'](f38fz);
        }
    }
}
async function ht9081nh() {
    const je1340376 = await x42pz2ea6['getState']();
    document['querySelector']('[data-state_switch]')['checked'] = je1340376;
    document['querySelector']('[data-state_switch]')['addEventListener']('change', async k4a3s0u0 => {
        if (k4a3s0u0['target']['checked']) {
            chrome['runtime']['sendMessage']({
                'action': 'setState',
                'state': 'on'
            });
        } else {
            chrome['runtime']['sendMessage']({
                'action': 'setState',
                'state': 'off'
            });
        }
    });
}
function tig1he8() {
    const zzp169k7e = document['querySelectorAll']('[data-localize]');
    for (let ndp7qfi7 of zzp169k7e) {
        const o4bf6n3 = ndp7qfi7['dataset']['localize'];
        ndp7qfi7['innerHTML'] = chrome['i18n']['getMessage'](o4bf6n3);
    }
}
function dbz0v9(i348z47k) {
    chrome['tabs']['create']({ 'url': i348z47k });
}
function p342qu4() {
    const n5abso = document['querySelectorAll']('[data-open_editor_btn]');
    n5abso['forEach'](tyq5ci53 => {
        tyq5ci53['addEventListener']('click', () => {
            const jtabf = 'https://wordsuperb.com/app-editor';
            dbz0v9(jtabf);
        });
    });
}
async function fsv126() {
    let du69ngz9 = {
        'active': !![],
        'lastFocusedWindow': !![]
    };
    let [f9285] = await chrome['tabs']['query'](du69ngz9);
    return f9285;
}
async function w3s85g() {
    const ndo7m7n55 = await chrome['storage']['local']['get'](['siteSupport']);
    if (!('siteSupport' in ndo7m7n55))
        return !![];
    const jb0ef606 = await fsv126();
    if (!(jb0ef606 && 'url' in jb0ef606))
        return !![];
    for (let a816frl of ndo7m7n55['siteSupport']['unavailable']) {
        if (jb0ef606['url']['indexOf'](a816frl['domain']) === -0x1)
            continue;
        return !![];
    }
    ;
    return ![];
}
async function oic3v188() {
    const sa51jw = await chrome['storage']['local']['get'](['siteSupport']);
    if (!('siteSupport' in sa51jw))
        return ![];
    const d95c8z = await fsv126();
    if (!(d95c8z && 'url' in d95c8z))
        return ![];
    for (let tn6q0g618 of sa51jw['siteSupport']['available']) {
        if (d95c8z['url']['indexOf'](tn6q0g618['domain']) === -0x1)
            continue;
        return !![];
    }
    ;
    return ![];
}
async function p75083m5() {
    const qji96w6l = await w3s85g();
    if (!qji96w6l)
        return;
    const ipncjkwf = document['querySelector']('[data-unsupported_notice]');
    ipncjkwf['classList']['add']('visible');
    const uc4h0m = document['querySelectorAll']('[data-unsupported_hide]');
    uc4h0m['forEach'](cn0umdga => {
        cn0umdga['classList']['add']('hidden');
    });
}
function n7ul02d() {
    const b6ux1l = document['querySelector']('[data-feedback_modal]');
    b6ux1l['classList']['remove']('-frogtool-modal--open');
    const f12mibfnt = document['querySelector']('[data-main_modal]');
    f12mibfnt['classList']['remove']('hidden');
}
function zq6ng901(po7cw6we) {
    n7ul02d();
    switch (po7cw6we) {
    case 'feedback':
        const h9oo065a = document['querySelector']('[data-main_modal]');
        h9oo065a['classList']['add']('hidden');
        const za8r9wx55 = document['querySelector']('[data-feedback_modal]');
        za8r9wx55['classList']['add']('-frogtool-modal--open');
        break;
    case 'share':
        break;
    }
}
function omfyx() {
    const w941fd3d = document['querySelector']('[data-feedback_open_btn]');
    w941fd3d['addEventListener']('click', () => {
        dbz0v9('https://docs.google.com/forms/d/e/1FAIpQLSf9yBwMNDfFKz-G4oaonyy3PX8PfZFJq_L889CjItPJgJEWKw/viewform');
    });
    const c1p5gf = document['querySelectorAll']('[data-close]');
    c1p5gf['forEach'](f4of6q2f2 => {
        f4of6q2f2['addEventListener']('click', () => {
            n7ul02d();
        });
    });
}
async function u1kz3k() {
    ht9081nh();
    p342qu4();
    tig1he8();
    omfyx();
    const n5r7f700m = new n2b365m09(document['querySelector']('[data-rate_block]'), () => {
        dbz0v9('https://docs.google.com/forms/d/e/1FAIpQLSf9yBwMNDfFKz-G4oaonyy3PX8PfZFJq_L889CjItPJgJEWKw/viewform');
    }, () => {
        dbz0v9('https://chrome.google.com/webstore/detail/grammar-check/hbffkehliekjohgiklfhbeoecbplbhdb/reviews');
    });
    let crhl08wy = await p38nqg3a();
    console['log'](crhl08wy);
}
u1kz3k();