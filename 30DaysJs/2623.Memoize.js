// Q.1. Write a Function to Memoise Functions With Varying Arguments :-

// Memosation :- 

/*
Defination :- An optimization technique used primarily 
to speed up computer programs by storing the results of 
expensive function calls and returning the cached result
when the same inputs occur again

*/

/*

// example 1 :-

let cache = {}
function add(num) {
    if (cache[num]) {
        console.log("Cache",cache);
        return cache[num]
    }
    else{
        console.log("Regular",cache);
        cache[num] = num+10
        return cache[num]
    }
}

console.log(add(20));
console.log(add(20));
console.log(add(40));
console.log(add(10));
console.log(add(10));

*/

// fabannico series :-
/*

function fibonacci(num, cache = {}) {
    if(cache[num]) return cache[num]
    if (num === 0) return 0;
    if (num === 1 || num === 2) return 1;
    return cache[num] = fibonacci(num-2) + fibonacci(num-1)
}

console.log(fibonacci(6));

*/
// 0 1 2 3 4 5 6
// 0 1 1 2 3 5 8

/*

let sum = 0 
const calc = (n) => {
    for (let i = 0; i <= n; i++) {
        sum +=i        
    }
    return sum
}

console.time()
console.log(calc(5));
console.timeEnd()

*/

/*

let sum = 0 
const calc = (n) => {
    for (let i = 0; i <= n; i++) {
        sum +=i        
    }
    return sum
}


const memoize = (fun) =>{
    let cache = {}
    return function(...arg){
        let n = arg[0]
        if(n in cache){
            console.log("cache");
            console.log(cache);
            return cache[n];
        }else{
            console.log("calculting firsttime");
            let result = fun(n)
            cache[n] = result
            return result
        }
    }
}

console.time()
const efficient = memoize(calc)
console.log(efficient(5));
console.timeEnd()

*/