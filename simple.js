/*
* Реализуйте функцию isPrime(), которая возвращает true или false, указывая, является ли переданное ей число простым.
* */

const isPrime = (number) => {
    if (number === 0 || number === 1){
        return  false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};
console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(17));
console.log(isPrime(10000000000000));

/*
* Реализуйте функцию factorial(), которая возвращает факториал переданного ей числа
* */
const factorial = number => {
    let factorial = 1;
    while (number > 1) {
        factorial *= number;
        number--;
    }
    return factorial;
};
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(6));

/*
* Реализуйте функцию fib(), возвращающую n-ное число Фибоначчи.
* */
const fib = number =>{
    if (number === 0){
        return [0,1];
    }
    const [previous, next] = fib(number-1);
    return [next, previous+next];
};
console.log(fib(0)[0]);
console.log(fib(1)[0]);
console.log(fib(10)[0]);
console.log(fib(20)[0]);

/*
* Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.
* */
const isSorted = array =>{
    for (let i = 0; i < array.length-1; i++) {
        if (array[i] > array[i+1]){
            return false;
        }
    }
    return true;
};
console.log(isSorted([]));
console.log(isSorted([-Infinity, -5, 0, 3, 9]));
console.log(isSorted([3,9,-3,10]));