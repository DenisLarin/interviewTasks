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
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(6));