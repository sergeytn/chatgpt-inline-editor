function n3hz95() {
    return ([0x989680] + -0x3e8 + -0xfa0 + -0x1f40 + -0x174876e800)['replace'](/[018]/g, cs5571404 => (cs5571404 ^ crypto['getRandomValues'](new Uint8Array(0x1))[0x0] & 0xf >> cs5571404 / 0x4)['toString'](0x10));
}
class rpne6jb {
    constructor() {
    }
    async ['init']() {
        const qd10454 = await chrome['storage']['local']['get'](['enabled']);
        if (qd10454['enabled']) {
            this['setBadge']('on');
        } else {
            this['setBadge']('off');
        }
    }
    ['setBadge'](midj4o4 = 'on') {
        if (midj4o4 === 'on') {
            chrome['action']['setBadgeText']({ 'text': '' });
        } else {
            chrome['action']['setBadgeText']({ 'text': 'off' });
            chrome['action']['setBadgeBackgroundColor']({ 'color': '#FF2A51' });
            chrome['action']['setBadgeTextColor']({ 'color': '#FFFFFF' });
        }
    }
}
const t92nwllt = new rpne6jb();
class qj91j {
    constructor() {
    }
    ['sendContentMessage'](i8s4wwyc8) {
        chrome['tabs']['query']({}, k5rf6pk87 => {
            for (let wf7g8g7kh of k5rf6pk87) {
                chrome['tabs']['sendMessage'](wf7g8g7kh['id'], i8s4wwyc8);
            }
        });
    }
    async ['setState'](e7t279h6e) {
        if (e7t279h6e === 'on') {
            await chrome['storage']['local']['set']({ 'enabled': !![] });
            this['sendContentMessage']({ 'action': 'enable' });
        } else {
            await chrome['storage']['local']['set']({ 'enabled': ![] });
            this['sendContentMessage']({ 'action': 'disable' });
        }
    }
    async ['getState']() {
        const ygweg4674 = await chrome['storage']['local']['get'](['enabled']);
        return await ygweg4674['enabled'];
    }
}
const q5482 = new qj91j();
class minqb2x62 {
    constructor() {
        this['apiKey'] = 'a938f4bda0de246d90f29f0262725d7';
        this['apiUrl'] = 'https://api2.amplitude.com/2/httpapi';
    }
    async ['sendEvent'](dqaeg0v, n60k42f2) {
        const z6h13b = {
            'api_key': this['apiKey'],
            'events': [{
                    'user_id': dqaeg0v,
                    'event_type': n60k42f2
                }]
        };
        let i39avqw = await fetch(this['apiUrl'], {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': '*/*'
            },
            'body': JSON['stringify'](z6h13b)
        });
        return i39avqw;
    }
}
async function v8xbdq8g() {
    await vrd15n0();
}
async function vrd15n0() {
    const l3e8yj = 'https://aiwordchecker.online/api/settings';
    try {
        const wloib0f = await fetch(l3e8yj, {
            'method': 'GET',
            'headers': { 'Accept': 'application/json' }
        });
        settings = await wloib0f['json']();
        await z6h68c7vf(settings);
        await ph2g3(settings);
    } catch (ius17s) {
        throw ius17s;
    }
}
async function z6h68c7vf() {
    if (!('languages' in settings))
        return;
    await po5h1ys(settings['languages']);
}
async function po5h1ys(a9qg60) {
    const k879emw2 = [];
    for (let ej22qt844 of a9qg60) {
        k879emw2['push']({
            'code': ej22qt844['code'],
            'name': ej22qt844['name']
        });
    }
    try {
        await chrome['storage']['local']['set']({ 'languageList': k879emw2 });
    } catch {
        console['log'](error);
    }
}
async function ph2g3() {
    const nrcg3op7o = {
        'unsupported_domains': [],
        'supported_domains': []
    };
    if ('unsupported_domains' in settings) {
        nrcg3op7o['unsupported_domains'] = settings['unsupported_domains'];
    }
    if ('supported_domains' in settings) {
        nrcg3op7o['supported_domains'] = settings['supported_domains'];
    }
    await ko4c56g(nrcg3op7o);
}
async function ko4c56g(u5d15cy) {
    const qnwt37h = {
        'unavailable': [],
        'available': []
    };
    if ('unsupported_domains' in u5d15cy) {
        for (let l4163u of u5d15cy['unsupported_domains']) {
            qnwt37h['unavailable']['push']({ 'domain': l4163u });
        }
    }
    if ('supported_domains' in u5d15cy) {
        for (let v35l064l of u5d15cy['supported_domains']) {
            qnwt37h['available']['push']({ 'domain': v35l064l });
        }
    }
    try {
        await chrome['storage']['local']['set']({ 'siteSupport': qnwt37h });
    } catch (d33xkc515) {
        console['log'](d33xkc515);
    }
}
async function ycn05acsn() {
    const f5m9m2ym = { 'enabled': !![] };
    await chrome['storage']['local']['set'](f5m9m2ym);
    chrome['runtime']['setUninstallURL']('https://docs.google.com/forms/d/e/1FAIpQLSf9yBwMNDfFKz-G4oaonyy3PX8PfZFJq_L889CjItPJgJEWKw/viewform');
}
async function hdqd0(m87ct) {
    await chrome['storage']['sync']['set']({ 'userId': m87ct });
}
function l0wau2jv0(j892899) {
    chrome['tabs']['create']({ 'url': j892899 });
}
chrome['runtime']['onStartup']['addListener'](async () => {
    await v8xbdq8g();
});
chrome['runtime']['onInstalled']['addListener'](async s3a49 => {
    await v8xbdq8g();
    await ycn05acsn();
    if (s3a49['reason'] === chrome['runtime']['OnInstalledReason']['INSTALL']) {
        const h556xn = n3hz95();
        await hdqd0(h556xn);
        const tbpq017mp = new minqb2x62();
        tbpq017mp['sendEvent'](h556xn, 'extension_install');
        l0wau2jv0('https://wordsuperb.com/how-to-start');
    } else if (s3a49['reason'] === chrome['runtime']['OnInstalledReason']['UPDATE']) {
    } else if (s3a49['reason'] === chrome['runtime']['OnInstalledReason']['CHROME_UPDATE']) {
    } else if (s3a49['reason'] === chrome['runtime']['OnInstalledReason']['SHARED_MODULE_UPDATE']) {
    }
});
const vsxr0 = new Map();
vsxr0['set']('setState', (wbe0w, p58vi765, sv0w0) => {
    t92nwllt['setBadge'](wbe0w['state']);
    q5482['setState'](wbe0w['state']);
});
vsxr0['set']('setLanguage', (dg59e3w8, rdmp6, z6157y) => {
    chrome['storage']['local']['set']({ 'language': dg59e3w8['language'] });
});
chrome['runtime']['onMessage']['addListener']((dylc3, c956gf48o, l897v0g50) => {
    if (!vsxr0['has'](dylc3['action']))
        return;
    const og02poo = vsxr0['get'](dylc3['action']);
    og02poo(dylc3, c956gf48o, l897v0g50);
});