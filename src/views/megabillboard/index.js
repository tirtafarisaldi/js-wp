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