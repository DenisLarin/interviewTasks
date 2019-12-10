/*
* Реализуйте функцию isPrime(), которая возвращает true или false, указывая, является ли переданное ей число простым.
* */

const isPrime = (number) => {
    if (number === 0 || number === 1) {
        return false;
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
const fib = number => {
    if (number === 0) {
        return [0, 1];
    }
    const [previous, next] = fib(number - 1);
    return [next, previous + next];
};
console.log(fib(0)[0]);
console.log(fib(1)[0]);
console.log(fib(10)[0]);
console.log(fib(20)[0]);

/*
* Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.
* */
const isSorted = array => {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
};
console.log(isSorted([]));
console.log(isSorted([-Infinity, -5, 0, 3, 9]));
console.log(isSorted([3, 9, -3, 10]));


/*
* Создайте собственную реализацию функции filter().
* */
const filter = (array, callback) => {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
};
console.log(filter([1, 2, 3, 4], n => n < 3));

/*
* Создайте собственную реализацию функции reduce()
* */

const reduce = (array, callback) => {
    let value = array[0];
    for (let i = 1; i < array.length; i++) {
        value = callback(value, array[i]);
    }
    return value;
};

console.log(reduce([1, 2, 3, 4], (a, b) => a + b));


/*
* Реализуйте функцию reverse(), которая обращает порядок следования символов переданной ей строки. Не пользуйтесь встроенной функцией reverse().
* */
const reverse = string => {
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
};
console.log(reverse(''));
console.log(reverse('abcdef'));


/*
* Создайте собственную реализацию функции indexOf() для массивов.
* */
const indexOf = (array, value) => {
    let returnedIndex = -1;
    array.some((item,index)=>{
        if (item === value){
            returnedIndex = index;
            return true;
        }
    });
    return returnedIndex;
};
console.log(indexOf([1, 2, 3], 1));
console.log(indexOf([1, 2, 3], 4));
