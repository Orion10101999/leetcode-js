## Quesn 1 - Palindrome Number 

- An integer is a palindrome when it reads the same forward and backward .

// Input : X = 121  ----->>>>> Output : true 
// Input : X = 10  ----->>>>> Output : false 

```javaScript

function palingdrome(x){
    return x < 0 ? false : x === +x.toString().split("").reverse().join("")
}

const res = palingdrome(121)
const res1 = palingdrome(10)

console.log(res);   // true
console.log(res1);  // false

// 121 => "121" => ["1", "2" , "1"] => "121"

```

## Q.2 - Fibonacci Number 

- Fibonacci Series -> 0 , 1 , 1 , 2 , 3 , 5 , 8 , 13 , 21 , 34 , 55 , 89 , 144 , 233 ...

- F(0) = 0 , F(1) = 1

- F(n) = F(n - 1) + F(n - 2) , for n > 1

- Input : n = 3 -------> Output : 2

```js

function fibonacci(n){
    if (n===0) return 0
    if (n===1) return 1
    return fibonacci(n-1) + fibonacci(n-2)
}

const res = fibonacci(3)

console.log(res);

```

```js
const fib =(n) => (n<=1 ? n : fib(n-1) + fib(n-2)) 

console.log(fib(3));
console.log(fib(2));

```

## Q.3 - Valid Anagram 

- 