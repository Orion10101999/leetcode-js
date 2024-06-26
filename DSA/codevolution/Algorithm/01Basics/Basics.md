# About the Course

- An Introduction to the fundamentals of algorithms

- A practical take on algorithms with JavaScript

- Part one of a two part (Algoritms + Data Structures) Course

- (Algorithms on trees and graphs will part of the next course)

## Course Topics 

- Algorithms 

- Measuring performance 

- Time & Space complexity

- Big O notation

- Math algorithms

- Sort

- Search

- Misc. algorithms and problem solving

## Prerequisites :-

- Modern Javascript

    * JavaScript fundamentals crash course
    * Advanced JavaScript crash course
    * ES2015 topics

## Before we begin :-

- It might seem hard and that is because it is hard

- Have a pen and paper and trace the excution of code with a sample input .

- Code along with me and do not rush through the videos .

## Q.1. What is an Algorithm ?

- An algorithm is a set of well - defined instructions to solve a particular problem 


### Recipe Analogy :-

- An algorithm is a set of well-defined instrictions to solve a particular problem .

- Ingredients --> Recipe --> Tasty dish

- Cup of noodles Taste maker water --->

1. Boil Water
2. Pour water into cup
3. Add taste maker 
4. Close lid and wait 4 minutes 

- ---> Tasty noodles 

## Programming :-

- Algorithm to add two numbers 

- Inputs --> Algorithm --> Output

- Two numbers 'a' and 'b' --> 

1. Add numbers using '+'
2. Return the value

- --> Sum of 'a' and 'b'

* An algorithm is a set of well-defined instructions to solve a particular problem .

## Characteristics :-

- Well defined inputs and outputs 

- Each step should be clear and unambiguous .

- Language independent 

- Two numbers 'a' and 'b' -->

1. Add numbers using '+'
2. Return the value

--> Sum of 'a' and 'b'

## Why Algorithms ?

- As a devloper , you're going to come across problems that you need to solve

- Learning algorithms translates to learning different techniques to efficiently solve those problems .

- One problem can be solved in many ways using different algorithms

- Every algorithm comes with its own tradeoffs when it comes to performance .

## Algorithm analysis :-

- There are multiple ways to solve one problem 

- Ex: There are multiple algorithms to sort a list of numbers .

- How do we analyse which one of them is the most efficient algorithm ?

- Generally , when we talk about performance , we use an absolute measure 

- If I can run 100 meters in 12 seconds , I,m faster than someone who takes 15 seconds .

## Algorithm analysis contd .

- The absolute running time of an algorithm cannot be predicted , since it depends on a number of factors 

- Programming language used to implement the algorithm 

- The computer the program runs on 

- others programs running at the same time 

- Quality of the operating system 

- We evalute the performance of an algorithm in terms of its input size 

* Time Complexity :- Amount of time taken by an algorithm to run , as a function of input size 

* Space Complexity :- amount of memory taken by an algorithm to run , as a function of input size .

- By evaluating against the input size , the analysis is not only machine independent but the comparision is also more appropriate .

- There is no one solution that works every single time . It is always good to known multiple ways to solve the problem and use the best solution  , given your constraints . 

- If your app needs to be very quick and has plenty of memory to work with , you don't have to worry about space complexity .

- If you have very little memory to work with , you should pick a solution that is relatively slower but needs less space

## How to represent complexity ?

- Asymptotic notations 

- Mathmatical tools to represent time and space complexity .

1. Big - O Notation (O - notation) - Worst case complexity 

2. Omega Notation (omega - notation) - Best Case Complexity

3. Theta Notation (theta - notation) - Avarage Case Complexity


## Big-O Notation :-

- The worst case complexity 

- Big O notation describes the complexity of an algorithm using algebraic terms 

- It has two important characteristics :-

    * It is expressed in terms of the input .

    * It focus on the bigger picture without getting caught up in the minute details .

## Big - O Time complexity :-

```javascript

function summation(n){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += i
    }
    return sum;
}

```

- Example :- 

- summation(4) = 10

- 1+2+3+4 = 10 

- count the number of times a statement executes based on input size 


function summation(n){-------------------------------> n= 4
    let sum = 0; ------------------------------------> 1
    for (let i = 0; i < array.length; i++) {        
        sum += i; -----------------------------------> 4
    }
    return sum; -------------------------------------> 1
}


n+2

- It is expressed in terms of the input

## Big - O Time complexity contd .

- It focuses on the bigger picture without getting caught up in the minute details .

-    n + 2   -->     n

-   n = 100         100 + 2
-   n = 1000        1000 + 2
-   n = 10000       10000 + 2

        .
        .
        .
        .
        .

-   n = 100000000   100000000 + 2


## Big - O Time Complexity :-

```javascript

function summation(n){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += i
    }
    return sum;
}

```

- Time Complexity => O(n) - Linear

## Big - O Calculation :-


```javascript

function summation(n){
    
    return (n * (n + 1)) / 2;
}

```

- Time Complexity => O(1) - Constant

## Big - O Calculation contd.

```javascript

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        
        }   
}

```

- Time Complexity => O(n^2) - Quadratic

- 3n^2 + 5n + 1

```javaScript

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        for (let k = 0; k < array.length; k++) {
            
            }
    }
}

```

- Time Complexity => O(n^3) - Cubic


- Input size reduces by half every iteration 
- Time Complexity => O(logn) - Logarithmic

## Space Complexity :-

- O(1) - Constant

- O(n) - Linear

- O(logn) - Logarithmic

## Big O trend :-

- Excellent --> O(1)

- Good      --> O(log(n))

- Fair      --> O(n)

- Bad       --> O( n log n )

- Horrible  --> O(n!) , O(2^n) , O(n^2)

## Few points to note :-

- Multiple algorithms exists for the same problem and there is no one right solution . Different algorithms work well under different constraints .

- The same algorithm with the same programming language can be implemented in different ways .

- When writting programs at work , don't lose sight of the big picture . Rather than writing clever code , write code that is simple to read and maintain .

## Objects - Big - O

- An object is a collection of key value pairs

- Insert - O(1)
- Remove - O(1)
- Access - O(1)
- Search - O(n)
- Object.keys() - O(n)
- Object.values() - O(n)
- Object.entries() - O(n)

```javascript

const person = {
    firstName : 'Bruce' ,
    lastName : 'Wayne'
}

```

## Array - Big - O

- An array is an ordered collection of values .

- Insert / Remove at end - O(1)
- Insert / Remove at beginning - O(n)
- Access - O(1)
- Search - O(n)
- Push / pop - O(n)
- Shift / unshift / concat / slice / splice - O(n)
- forEach / map / filter / reduce - O(n)

```javascript

const odd = [ 1 , 3 , 5 , 7 , 9 ]

```