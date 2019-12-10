/*
* Реализуйте функцию permute(), которая возвращает массив строк, содержащий все пермутации заданной строки.
* */
const permute = string => {
    if (string.length < 2) {
        return string;
    }
    const returnedValue = [];
    for (let i = 0; i < string.length; i++) {
        const symbol = string[i];
        if (string.indexOf(symbol) !== i) {
            continue;
        }
        const tempString = string.slice(0, i) + string.slice(i + 1, string.length);
        for (let temp of permute(tempString)) {
            returnedValue.push(symbol + temp);
        }
    }
    return returnedValue;
};

console.log("________________________________");
console.log(permute(''));
console.log(permute('abc'));


/*
* Создайте самостоятельную реализацию функции debounce().
* */

const debounce = (fn, delay) => {
    let delayTimer = null;
    return function (...args) {
        const tempHandler = () => {
            fn(args);
            delayTimer = null;
        };
        if (delayTimer){
            clearTimeout(delayTimer);
        }
        delayTimer = setTimeout(tempHandler, delay);
    }
};
let a = () => console.log('foo');
let b = debounce(a, 100);
b();
b();
b();