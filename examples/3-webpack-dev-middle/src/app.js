import hello from './hello'

function component() {
    var element = document.createElement('div');
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