/*
function compose(arr){
    return function(x){
        for (const fn of arr.reverse())
        {
            x = fn(x)
        }
        return x ;
    }
}
const fn = compose([x => x+1 , x => 2*x])
console.log(fn(4));
*/

function compose1(arr){
    return function(x){
        const fn = (acc , f) => f(acc); 
        return arr.reduceRight(fn ,x)
    }
}

const fn1 = compose1([x => x+1 , x => 2*x])
console.log(fn1(4));

/*

const fn1 = x => x + 1
const fn2 = x => x * 2

console.log(fn1(fn2(2)));

*/


function add(a,b){
    return a+b
}

function multiply(args){
    return args[0]*args[1]
}

/*
function multiply(...args){
    return args.reduce((a,b) => a*b , 1)
}
console.log(multiply(2,2,2,2));
function multiply(val1,val2){
    return val1*val2
}
*/
function square(val){
    return val*val
}

// Q.1. first add two number then square the result :-
/*

// Case - 1 :-

function addTwoAndSquare (a,b) {
    return square(add(a,b))
}
console.log(addTwoAndSquare(2,3));

const addResult = add(2,3)
console.log(addResult);
console.log(square(addResult));

// Case - 2 :-
console.log("Function Composition");
function composeTwoFunction(fn1,fn2) {
    return function (a,b) {
        return fn2(fn1(a,b))
    }
}
let task = composeTwoFunction(multiply,square)
console.log(task(2,3));

// Case - 3 (Modern Javascript ES 6)

const c2f = (fn1,fn2) => (a,b) => fn2(fn1(a,b))

let mytask = c2f(add,square)

console.log(mytask(2,3));

*/
// Case - 4 ( Unlimited Function Composition ) 
/*
function compose(...fns){
    return function(...value){
        return fns.reduce((a,b) => b(a) , value)
    }
}
const task1 = compose(multiply,square)
console.log(task1(2,3));
*/
 
/*

let composeAll = (...fns) => (...val) => fns.reduce((a,b) => b(a) , val)

const task = composeAll(multiply,square)
const task1 = composeAll(multiply,square,(val) => val+1)
console.log((task(2,3)));
console.log((task1(2,3)));
*/

