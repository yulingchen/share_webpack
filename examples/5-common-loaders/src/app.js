import hello from './hello'

import './style.css'
import webpackLogo from './webpack.jpeg';

function component() {
    var element = document.createElement('div');

    var logo = new Image();
    logo.src = webpackLogo;
    logo.width = 200
    element.appendChild(logo);

    var btn = document.createElement('button');
    btn.innerHTML = 'Click me';
    btn.onclick = hello;
    element.appendChild(btn);

    return element;
}

let element = component();
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept()
    module.hot.dispose(function () {
        document.body.removeChild(element);
    });
}