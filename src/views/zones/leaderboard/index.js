import megabillboardElement from './index.html';
import './index.css';

let elements = [];
let body;

export function leaderboard(publisher, channel, platform) {
    let firstVisit = true;
    let head = document.getElementsByTagName('head')[0];

    function defineSlot() {
        var s = document.createElement('script');
        var code = `
            window.googletag = window.googletag || {cmd: []};
    
            googletag.cmd.push(function () {googletag.defineSlot('/253109699/${publisher}${platform}/${channel}', [[300,250],[320,100],[336,280]], 'div-gpt-ad-leaderboard')
            .setTargeting('pos', ['Leaderboard'])
            .addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();}); 
        `;
        try {
            s.appendChild(document.createTextNode(code));
            head.appendChild(s);
        } catch (e) {
            s.text = code;
            head.appendChild(s);
            k
        }
    }

    function displaySlot() {
        var s = document.createElement('script');
        var code = `googletag.cmd.push(function () {googletag.display('div-gpt-ad-leaderboard');});`;
        try {
            s.appendChild(document.createTextNode(code));
            head.appendChild(s);
        } catch (e) {
            s.text = code;
            head.appendChild(s);
            k
        }
    }

    function backToDefault() {
        document.getElementById("div-gpt-ad-leaderboard").classList.remove("leaderboard-container")
    }

    function scrollFunction() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            if (firstVisit) {
                document.getElementById("div-gpt-ad-leaderboard").classList.add("leaderboard-container")
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

    defineSlot();
    document.getElementById('leaderboard').innerHTML = megabillboardElement;
    setTimeout(displaySlot, 500)
    document.getElementById("btn-close").addEventListener('click', function () {
        var T = document.getElementById("header");
        T.style.display = "none";
    });
}