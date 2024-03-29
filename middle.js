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


/*
* Реализуйте функцию isBalanced2(). Она похожа на функцию isBalanced() из предыдущей группы заданий, но поддерживает три типа скобок: фигурные {}, квадратные [], и круглые (). При передаче функции строки, в которой имеются неправильные скобочные последовательности, функция должна возвращать false.
* */
const isBalanced = string => {
    string = string.replace(/\s/g, '');
    let brace = [0, 0];
    let parenthesis = [0, 0];
    let square = [0, 0];
    for (let i = 0; i < string.length; i++) {
        switch (string[i]) {
            case '{':
                brace[0]++;
                break;
            case '(':
                parenthesis[0]++;
                break;
            case '[':
                square[0]++;
                break;
            case '}':
                brace[1]++;
                break;
            case ')':
                parenthesis[1]++;
                break;
            case ']':
                square[1]++;
                break;
            default:
                continue;
        }
    }

    if (!(brace[0] - brace[1]) && !(parenthesis[0] - parenthesis[1]) && !(square[0] - square[1])) {
        return true;
    }
    return false;
};
console.log(isBalanced('(foo { bar (baz) [boo] })'));
console.log(isBalanced('foo { bar { baz }'));
console.log(isBalanced('foo { (bar [baz] } )'));


/*
* Реализуйте функцию uniq(), которая принимает массив чисел и возвращает уникальные числа, найденные в нём. Может ли функция решить эту задачу за время O(N)?
* */


const uniq = array => {
    return [...new Set(array)];
};

console.log(uniq([]));
console.log(uniq([1, 4, 2, 2, 3, 4, 8]));


/*
* Реализуйте функцию intersection(), которая принимает два массива и возвращает их пересечение. Можете ли вы добиться того, чтобы функция решала эту задачу за время O(M+N), где M и N — длины массивов?
* */

const intersection = (array1, array2) => {
    return [...new Set(array1)].filter(item => new Set(array2).has(item));
};

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]));
console.log(intersection([1, 5, 4, 2], [7, 12]));

/*
* Создайте реализацию функции sort(), которая сортирует числовой массив за время O(N×log(N))
* */

function sort(array) {
    return array.sort()
}


console.log(sort([]));
console.log(sort([-4, 1, Infinity, 3, 3, 0]));


/*
*Реализуйте функцию includes(), которая возвращает true или false в зависимости от того, встречается ли переданное ей число в переданном ей отсортированном массиве. Может ли функция решить эту задачу за время O(log(N))?
* */


const includes = (array, number) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            return true;
        }
    }
    return false;
};
console.log(includes([1, 3, 8, 10], 8));
console.log(includes([1, 3, 8, 8, 15], 15));
console.log(includes([1, 3, 8, 10, 15], 9));


/*
* Реализуйте функцию assignDeep(), которая похожа на Object.assign(), но выполняет глубокое объединение объектов. Для того, чтобы не усложнять задачу, можно исходить из допущения, что объекты могут содержать только числа и другие объекты (в них не может быть массивов, строк, и так далее).
* */






/*
* Реализуйте функцию reduceAsync(), которая похожа на функцию reduce() из группы простых заданий, но работает с функциями, возвращающими promise-объекты, каждый из которых должен быть разрешён до перехода к следующему.
* */
async function reduceAsync(promisesArray,func, params){
    await Promise.all([promisesArray[0](), promisesArray[1](), promisesArray[2]()]).then(value => {
        console.log(func(value, ...params));
    })
}

let a = () => Promise.resolve('a');
let b = () => Promise.resolve('b');
let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100));
reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d']);



/*
* Реализуйте функцию seq(), пользуясь тем же подходом, что и при работе над функцией reduceAsync(). Эта функция должна принимать массив функций, которые возвращают promise-объекты, и разрешать их один за другим.
* */

async function seq(promisesArray){
    await Promise.all([promisesArray[0](), promisesArray[1](), promisesArray[2]()]).then(value => {
       console.log(value);
    });
}


console.log("________________________________");
let a1 = () => Promise.resolve('a');
let b1 = () => Promise.resolve('b');
let c1 = () => Promise.resolve('c');
seq([a1, b1, c1]);
seq([a1, c1, b1]);