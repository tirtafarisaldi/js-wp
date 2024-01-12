import {
    idntimes
} from './views/publishers/IDNTimes'

function app(window) {

    let configurations = {
        someDefaultConfiguration: false
    };
    let globalObject = window[window['IDNADS']];
    let queue = globalObject.q;

    let head = document.getElementsByTagName('head')[0];
    let script = document.createElement('script');
    script.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";

    head.appendChild(script);

    globalObject = apiHandler(queue[0][0], queue[0][1], queue[0][2]);
}

function apiHandler(publisher, channel, platform) {
    switch (publisher) {
        case 'IDNTimes':
            idntimes(channel, platform);
            break;
        default:
            console.warn(`No handler defined for Publisher`);
    }
}

function extendObject(a, b) {
    for (var key in b)
        if (b.hasOwnProperty(key))
            a[key] = b[key];
    return a;
}

app(window);