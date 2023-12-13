import {
    megabillboard
} from './views/megabillboard/megabillboard'
import { amp } from './views/megabillboard/megabillboard';

const supportedAPI = ['megabillboard', 'amp']; // enlist all methods supported by API (e.g. `mw('event', 'user-login');`)

function app(window) {

    let configurations = {
        someDefaultConfiguration: false
    };
    let globalObject = window[window['IDNADS']];
    let queue = globalObject.q;

    globalObject = apiHandler(queue[0][0], queue[0][1]);
}

function apiHandler(api, params) {
    if (!api) throw Error('API method required');
    api = api.toLowerCase();

    if (supportedAPI.indexOf(api) === -1) throw Error(`Method ${api} is not supported`);

    console.log(`Handling API call ${api}`, params);

    switch (api) {
        case 'megabillboard':
            megabillboard(params);
            break;
        case 'amp':
            amp(params);
            break;
        default:
            console.warn(`No handler defined for ${api}`);
    }
}

function extendObject(a, b) {
    for (var key in b)
        if (b.hasOwnProperty(key))
            a[key] = b[key];
    return a;
}

app(window);