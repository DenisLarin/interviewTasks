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


const uniq = array =>{
    return new Set(array);
};

console.log("________________________________");
console.log(uniq([]));
console.log(uniq([1, 4, 2, 2, 3, 4, 8]));