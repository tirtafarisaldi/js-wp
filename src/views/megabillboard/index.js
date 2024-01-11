import megabillboardElement from './index.html';
import ampElement from './amp/index.html';
import './index.css';

let elements = [];
let body;

function useState(defaultValue) {
    let value = defaultValue;

    function getValue() {
        return value;
    }

    function setValue(newValue) {
        value = newValue;
        render();
    }
    return [getValue, setValue];
}

export function megabillboard(params) {
    let firstVisit = true;

    let head = document.getElementsByTagName('head')[0];
    var s = document.createElement('script');
    var code = `
        window.googletag = window.googletag || {cmd: []};

        googletag.cmd.push(function () {googletag.defineSlot('/253109699/IDNTimesMobile/Homepage', [[320, 480]], 'div-gpt-ad-mega_billboard')
        .setTargeting('pos', ['mega_billboard'])
        .addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();}); 
        
        googletag.cmd.push(function () {googletag.display('div-gpt-ad-mega_billboard');});
    `;
    try {
        s.appendChild(document.createTextNode(code));
        head.appendChild(s);
    } catch (e) {
        s.text = code;
        head.appendChild(s);
        k
    }


    function backToDefault() {
        document.getElementById("header").classList.remove("ad-mega_billboard-container")
        document.getElementById("div-gpt-ad-mega_billboard").classList.remove("ad-mega_billboard")
    }

    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            if (firstVisit) {
                document.getElementById("header").classList.add("ad-mega_billboard-container")
                document.getElementById("div-gpt-ad-mega_billboard").classList.add("ad-mega_billboard")
                setTimeout(backToDefault, 3000);
                firstVisit = false;
            }
        } else {
            backToDefault();
        }
    }

    window.onscroll = function () {
        scrollFunction()
    };

    document.getElementsByClassName('megabillboard')[0].innerHTML = megabillboardElement;

}

export function amp(params) {
    document.getElementsByClassName('megabillboard')[0].innerHTML = ampElement;
}