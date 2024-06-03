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

- An Anagram is a word or phrase formed by rearranging the latters of a different word or phrase , using all the originsls letters exactly once .

- Input : (s = "anagram"),(t = "nagaram") --> Output :true;
- Input : ( s = "rat"),(t="car") --> Output :false;

## 1st Approach :-

```js
const isAnagram =  (s,t) => {

    s = s.split("").sort().join("")
    
    t = t.split("").sort().join("")
    
    return s === t

}

let s1 = "anagram";
let t1 = "nagaram";

let s2 = "rat"
let t2 = "car"

console.log(isAnagram(s1 , t1));
console.log(isAnagram(s2 , t2));

```

## 2nd Approach :-

```js

```

## Q.4 Two Sum :-

- Given an array of integers nums and an integer target ,

- return indices of the two numbers such that they add up to target .

- Input : nums = [2,7,11,15] , target = 9 ;

- Output : [0 ,1] 

- (Because nums[0] + nums[1] == 9 , we return [0, 1])

- Input: nums = [3, 2, 4], target = 6

- Output : [1 , 2]

## Q.5 Best Time to Buy and Sell Stocks 

- You are given an array prices where prices[i] is the price of a given stock on the ith day

- You want to maximize your profit by choosing a single day to buy one stock .

- and choosing a different day in the future to sell that stock .

- Return the maximum profit , If you cannot achieve any profit , return 0 .

- Input : prices = [7,1,5,3,6,4] ; ---> output : 5;
- Input: prices = [7,6,4,3,1] ; Output: 0;

## Brute Force Solution :-

