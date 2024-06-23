#  Recursion :-

## What ?

- Recursion is a Peroblem solving technique where the solutions depend on solutions to smaller instances of the same problem .

- Recursion is when a function calls itself .

## Why ?

- A great technique to simplify your solution .

- If you find yourself breaking down your problem into smaller versions of the same problem , recursion is very useful .


## Analogy :-

                    ----Principle---- 200
                    |       |       |
                    |       |       |
                    |       |       |
      Professor A <-|---------------|-> Professor B
            ^     100               100     |
            |                               |
            |                               |
            |                               |
    ----------------                ----------------
    |       |       |               |       |      |       |       |       |               |       |      |
    |       |       |               |       |      |
    |       |       |               |       |      |
Teacher A   |   Teacher B       Teacher C   |    Teacher D
            |                               |
            |                               |
            |                          45-------55
    50 ----------- 50


## A Few Points about recursion :-

- Every recursive solution need to have a base case - a condition to terminate the recursion .

- Recursion might simplify solving a problem but it does not always translate a faster solution .

- A recursive solution may be worsed compared to an iterative solution .

- Recursion is a topic that is not the most straight forward to understand ,

- do not give up if you struggle with the concept .

# Recursive Fibonnacci sequence :-

## Problem :-

* Give a number `n` , find the nth element of the Fibonacci sequence .

* In Mathmatics , the Fibonaccci sequence in which each number is the sum of the two preceding ones .

* The first two numbers in the sequence are 0 and 1 .

* ( 0 , 1 , 1, 2 , 3 , 5 , 8 .... )

* recursiveFibonacci(0) = 0

* recursiveFibonacci(1) = 1

* recursiveFibonacci(8) = 8

## tips for recursive solutions :-

* figure out how to break down the problem into smaller versions of the same problem Identify the base case for recursion .

## Recursive Fibonacci sequence contd.

* The fibonacci sequence is a sequence in which each number is the sum of the two proceding ones  .

* If F represents a function to calculate the fibonacci number , then 

* Fn = Fn-1 + Fn-2

* F0 = 0 and F1 = 1

```css

F2 = F1 + F0

F2 = 1 + 0

F2 = 1

```

```js
function recursiveFibonacc(n) {
    if(n<=1) return n
    return recursiveFibonacc(n-1) + recursiveFibonacc(n-2)
}

console.log(recursiveFibonacc(0));
console.log(recursiveFibonacc(1));
console.log(recursiveFibonacc(6));

// O(n) - Iterative

// O(2^n) - Recursive

```

```css
                    -------| F7 |------------           
                    |                       |
                    |                       |
 ---| F6 |----------            ---------------|F5|  2^1
 |        |                     |               |
 |        |                     |               |
|F5|    |F4|                  |F4|            |F3|   2^2
  |       |                     |               |
  |       |                     |               |
  |       |                     |               |
-----  -------              --------        ---------
|    | |     |              |       |       |       |
|    | |     |              |       |       |       |
|    | |     |              |       |       |       |
F4  F3 F3   F2              F3      F2      F2      F1  2^3


                                            2^4  2^5 2^6...
            16  ,   32  ,   64  ....

```

## Recursive factorial of a number 

* Problem :- 

- Give an integer `n` denoted  n! , is the product of all positive integers less than or equal to `n` .

- Factorial of zero is 1 .

- factorial(4) = 4*3*2*1    =   24

- factorial(5) = 5*4*3*2*1    =   120

## Tips for recursive solutions :-

* figure out how to break down the problem into smaller versions of the same problem Identify the base for recursion .
```css

- 5! = 5*4*3*2*1            5*4!
- 4! = 4*3*2*1              4*3!
- 3! = 3*2*1                3*2!
- 2! = 2*1                  2*1!
- 1! = 1*1                  1*0!
- 0! = 1                    

*   n!      = n * (n-1)!

```

```js

function recursiveFactorial(n) {
    if(n==0) return 1
    return n * recursiveFactorial(n-1)
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(4));
console.log(recursiveFactorial(5));



```
