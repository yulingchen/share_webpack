// ES6模块生效
export function hello() {
    console.log([1, 4, -5, 10].find((n) => n < 0))

    let fun = () => {

    }

    new Promise(() => {

    })

    alert('hello webpack-base')
}

export function greet() {
    alert('welcome')
}


// commonJs模块不生效
// exports.hello = function () {
//     alert('hello webpack-base')
// }

// exports.greet = function () {
//     alert('welcome')
// }