/*
* Реализуйте функцию fib2(). Она похожа на функцию fib() из предыдущей группы заданий, но поддерживает числа вплоть до 50. Подсказка: используйте мемоизацию.
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
console.log(fib(50)[0]);