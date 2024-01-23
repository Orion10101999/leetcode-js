/*
let factorial = (num,cache={}) =>{
    if (num==0) return 1;
    if (cache[num]){
        console.log(cache,'cache');
        return cache[num]
    }else{
        cache[num]=num
        console.log(cache,'regular');
        return cache[num] = cache[num]*factorial(num-1)
    }
    
}

console.log(factorial(4));
*/
function arugs(...args){
    return args.toString()
}

let x = arugs(10,'a','b')
console.log(x);
/*

function fibonacci(num, cache = {}) {
    if(cache[num]) return cache[num]
    if (num === 0) return 0;
    if (num === 1 || num === 2) return 1;
    return cache[num] = fibonacci(num-2) + fibonacci(num-1)
}

console.log(fibonacci(6));


*/