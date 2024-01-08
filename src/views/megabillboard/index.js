import megabillboardElement from './index.html';
import ampElement from './amp/index.html';
import './index.css';

let elements = [];
let body;

export function megabillboard(params) {
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementsByClassName("image_header").style.width = "100px";
        } else {
            document.getElementsByClassName("image_header").style.width = "300px"
        }
    }

    document.getElementsByClassName('megabillboard')[0].innerHTML = megabillboardElement;
}

export function amp(params) {
    document.getElementsByClassName('megabillboard')[0].innerHTML = ampElement;
}