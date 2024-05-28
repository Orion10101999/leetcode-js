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

## fibonacci sequence :-

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

## Big - O Guide 

- Calculation not dependent on input size - O(1)

1. loop - O(n)
2. nested loops - O(n^2)

- Input size reduced by half - O(logn)

