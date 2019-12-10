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