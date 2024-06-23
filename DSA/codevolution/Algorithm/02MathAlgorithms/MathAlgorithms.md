## Math Algorithms :-

1. Fibonacci sequence 
2. Factorial of a number 
3. Prime number
4. Power of two 
5. Recursion 
6. Fibonacci sequence with recursion 
7. Factorial of a number with recursion

- The Approach

* Problem statement 
* Pause the video and try solving together
* Implement the solution together
* Determine the Big - O of the solution

## 1. fibonacci sequence :-

- Problem :- Give a number `n`   , find the first `n` elements of the Fibonacci sequence 

- In Mathmatics , the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones .

- The first two numbers in the sequence are 0 and 1 .

- fibonacci (2) = [ 0 , 1 ]
- fibonacci (3) = [ 0 , 1 , 1 ]
- fibonacci (7) = [ 0 , 1 , 1 , 2 , 3 , 5 , 8 ]

```javascript

function fibonacci(n) {
    let fib = [0, 1]
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2])
    }
    return fib
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));

```

- Big - O --> O(n) 

```css
## Big - O Guide 

- Calculation not dependent on input size - O(1)

1. loop - O(n)
2. nested loops - O(n^2)

- Input size reduced by half - O(logn)

```

## 2. Factorial of a number :-

- Problem :- Given an integer `n` , find the factorial of that integer

- In mathmatics , the factorial of a non-negative integer `n` , denoted n! , is the product of all positive integers less than or equal to `n` .

- Factorial of zero is 1.

- factorial(4) = 4*3*2*1 = 24
- factorial(5) = 5*4*3*2*1 = 120

```javascript

function factorial(n) {
    let fact = 1
    for (let i = 2; i <= n; i++) {
        fact = fact * i
    }
    return fact
}

console.log(factorial(0));
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(5));

```

- Big - O --> O(n) 

```css
## Big - O Guide 

- Calculation not dependent on input size - O(1)

1. loop - O(n)
2. nested loops - O(n^2)

- Input size reduced by half - O(logn)

```

## 3. Prime Number :-

- Problem - Give a natural number `n` , determine if the number is prime or not .

- A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers .

- isPrime(5) = true (1*5 or 5*1)
- isPrime(4) = false(1*4 or 2*2 or 4*1)

```JS
function isPrime(n){
    if(n<2) return false
    for (let i= 2; i<n; i++) {
        if(n%i===0) {
            return false
        }
    }
    return true
}

console.log(isPrime(2));
console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));

// Big-O - O(n)


```
```css
## Big - O Guide 

- Calculation not dependent on input size - O(1)

1. loop - O(n)
2. nested loops - O(n^2)

- Input size reduced by half - O(logn)

```



### Optimized Primality Test :- 

- Integers larger than the square root do not need to be checked becaude , whenever ` n = a * b ` , one of the two factors `a` and `b` is less than or equal to the square root of `n` .

* n = 24 , a = 4 and b = 6

    - The square root of 24 is 4.89 
    - 4 is less than 4.89
    - a is less than the square root of n

* n = 35 , a = 5 and b = 7 

    - The square root of 35 is 5.91
    -  5 is less than 5.91
    -  a is less than the square root of n

```JS

function isPrime(n){
    if(n<2) return false
    for (let i= 2; i<= Math.sqrt(n); i++) {
        if(n%i===0) {
            return false
        }
    }
    return true
}

console.log(isPrime(2));
console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));

// Big-O - O(sqrt(n))

```
```css
## Big - O Guide 

- Calculation not dependent on input size - O(1)

1. loop - O(n)
2. nested loops - O(n^2)

- Input size reduced by half - O(logn)

```

### Q.4. Power of Two 

- Problem -  Give  a positive integer `n` , determine if the number is a power of 2 or not .

- An integer is power of two if there exists an integer `x` such that `n` === 2 .

isPowerOfTwo(1) = true(2^0)
isPowerOfTwo(2) = true(2^1)
isPowerOfTwo(5) = false

### Power of two - Pseudocode

- n = 8

- 8 / 2 = 4 ( reminder 0)
- 4 / 2 = 2 ( reminder 0)
- 2 / 2 = 1 ( reminder 0)

- if reminder is not 0 in any step , `n` is not a power of two .

- if reminder is 0 and `n` comes down to 1 eventually , n is a power of two .

```JS
function isPowerOfTwo(n){
    if(n<1) {
        return false
    }
    while (n > 1){
        if(n%2 !==0) {
            return false
        }
        n = n/2
    }
    return false
}

console.log(isPowerOfTwo(1))    // true
console.log(isPowerOfTwo(2))    // true
console.log(isPowerOfTwo(5))    // false


// Big-O - O(logn)

```

```css

## Big - O Guide 

- Calculation not dependent on input size - O(1)

1. loop - O(n)
2. nested loops - O(n^2)

- Input size reduced by half - O(logn)

```

### Bitwise Power of Two :-

1 -> 1

2 -> 10

3 -> 100

4 -> 1000

1 - 0001        2-0010      3-0100      4-1000

0 - 0000        1-0001      2-0010      3-0100      

.........       .......     .......     ........

0 - 0000        0-0000      0-0000      0-0000

```Js

function isPowerOfTwoBitWise(n){
    if(n<1) {
        return false
    }
    
    return (n & (n-1) === 0)

}

console.log(isPowerOfTwoBitWise(1))    // true
console.log(isPowerOfTwoBitWise(2))    // true
console.log(isPowerOfTwoBitWise(5))    // false


// Big-O - O(1)



```