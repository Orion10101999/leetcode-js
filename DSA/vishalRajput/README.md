### Question 1: Sum of all natural numbers from 1 to n


```javascript
function sumOfNaturalNumber(num){
    let sum = 0;
    for(let i=1; i<=num; i++){
        sum = sum + i;
    }
    return sum;
}

console.log(sumOfNaturalNumber(5)); // 15
console.log(sumOfNaturalNumber(10)); // 55
console.log(sumOfNaturalNumber(8)); // 36
```

### Question 2: Sum of digits of a number

```javascript
function sumOfDigits(num){
    let sum = 0;
    while(num > 0){
        sum += num%10;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(sumOfDigits(1287)); // 18
```

### Question 3: Count the number of digits of a number

```javascript
function countDigits(num){
    num = Math.abs(num);
    let count = 0;
    do {
        count++;
        num = Math.floor(num / 10);
    } while (num > 0);
    return count;
}

console.log(countDigits(121)); // 3
console.log(countDigits(-1211413131)); // 10
```
### Question 4: Check if a number is palindrome

```javascript
let isPalindrome = function(x) {
    let copyNum = x, reverseNum = 0;

    while(copyNum > 0){
        const lastDigit = copyNum % 10;
        reverseNum = reverseNum * 10 + lastDigit;
        copyNum = Math.floor(copyNum / 10);
    }

    return x === reverseNum;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(1234)); // false
```

### Question 5: Find nth Fibonacci number
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, 
such that each number is the sum of the two preceding ones, starting from 0 and 1.

```javascript
let fib = function(n) {
    if(n < 2){
        return n;
    }

    let prev = 0, curr = 1, next;
    for(let i=2; i<= n; i++){
        next = prev + curr;
        prev = curr;
        curr = next;
    }
    return next;
};

// Fibonacci Sequence: 0 1 1 2 3 5 8...
console.log(fib(5)); // 5
console.log(fib(10)); // 55
```

### Question 6: Missing Number in an Array
Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.
```javascript
let missingNumber = function(nums) {
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        sum += nums[i];
    }
    return nums.length*(nums.length+1)/2 - sum;
};

// One Line Solution: 
let missingNumber = (nums) => nums.length*(nums.length+1)/2 - nums.reduce((acc, num) => num + acc);

console.log(missingNumber([3,0,1])); // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // 8
```



### Q.7.  How do you create an empty array in JavaScript?
```javascript

const arr = [1, 2, 3, 4, "Hello", {name: "Vishal"}, [1,2,3], 4];

// const arr2 = new Array();
console.log(arr);
```

### Q.8.  How do you access the first and last elements of an array?

```javascript
const firstElement = arr[0]; // O(1)
const arrLength = arr.length;
const lastElement = arr[arrLength - 1];
console.log(firstElement, arrLength, lastElement);
```


### Q.9.  How do you remove the last element from an array?
```javascript
const lastElement1 = arr.pop(); // O(1)
console.log(arr, lastElement1);
```


### Q.10.  How do you add an element to the end of an array?
```javascript
arr.push(5); // O(1)
console.log(arr);
```

### Q.11.  How do you add an element to the start of an array?
```javascript
arr.unshift(0); // O(N)
console.log(arr);
```

### Q.12.  How do you remove the first element from an array?
```javascript
arr.shift(); // O(N)
console.log(arr);
```

### Q.13.  How do you loop through an array in JavaScript?

```javascript
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

arr.forEach((x, i) => {
    console.log(x);
});

for (let x of arr){
    console.log(x);
}
```

### Question 14 : How do you check if an element exists in an array?
```javascript
const findElement = (arr, target) => {
    for (let x of arr){
        if (x === target){
            return true;
        }
    }
    return false;
}

    
const arr = [ 1,2,3,4,'Hello',{name:'Vishal'},[1,2,3],5]

console.log(findElement(arr, "Hello"));
console.log(findElement(arr, "H"));
console.log(arr.includes("Hello"));
```

### Question 15 : How do you find the index of an element in an array?
```javascript
const findElementIndex = (arr, target) => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target){
            return i;
        }
    }
    return -1;
}

const arr = [ 1,2,3,4,'Hello',{name:'Vishal'},[1,2,3],5]

console.log(findElementIndex(arr, "Hello"));
console.log(arr.indexOf("Hello"));
```

### Q.16.  How to delete, add & update elements from a specific index?

```javascript
const arr = [ 1,2,3,4,'Hello',{name:'Vishal'},[1,2,3],5]

console.log(arr);
arr.splice(1, 3);
console.log(arr);
arr.splice(1, 0, 2, 3, 4, 5, 6);
console.log(arr);
arr.splice(1, 3, 6, 7, 8);
console.log(arr);


```

### Q.17. `splice()` vs `slice()`
```javascript
const arr = [ 1,2,3,4,'Hello',{name:'Vishal'},[1,2,3],5]
const subArr = arr.slice(1, 4); // [start, end) 
console.log(subArr);
```

### Q.18. Shallow Copy of Array
```javascript
const arr = [ 1,2,3,4,'Hello',{name:'Vishal'},[1,2,3],5]
const arrB = arr;
arrB.splice(1, 4);
console.log(arrB, arr);
```

### Q.19. Deep Copy of Array
```javascript
const arr = [ 1,2,3,4,'Hello',{name:'Vishal'},[1,2,3],5]
const arrC = [...arr];
const arrD = Array.from(arr);
const arrE = arr.concat();
arrC.splice(1, 4);
arrD.splice(1, 4);
arrE.splice(1, 3);
console.log(arrC, arrD, arrE, arr);
```

### Q.20. How to concatenate two arrays in JavaScript?
```javascript
const newArr = [...arr, ...arrE];
const newArr2 = arr.concat(arrE);
console.log(newArr, newArr2);
```

### Question 21 : How can you check if two arrays are equal?
```javascript
const isArrayEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length){
        return false;
    }

    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;

    // One Line solution
    // return arr1.length === arr2.length && arr1.every((ele, i) => arr1[i] === arr2[i]);
}

console.log(isArrayEqual([1, 2, 3], [1, 2, 3]));
```
### Question 22 : How to sort an array in ascending and descending order?
```javascript
const x = [1, 4, 6, 0, -9, -5];
x.sort(); // O(NlogN)
console.log(x);

x.sort((a, b) => b - a);
console.log(x);
```

### Question 23 : How to reverse an array?
```javascript
x.reverse();
console.log(x);
```


### Q.24.  Map, Filter & Reduce
```javascript
const newMapArr = x.map((ele, i) => ele * ele);
console.log(newMapArr);

const positiveNumbers = x.filter((ele, i) => ele > 0);
console.log(positiveNumbers);

const sumOFArr = positiveNumbers.reduce((acc, ele) => acc + ele);
console.log(sumOFArr);
```
### Q.25.  Flat: [1, 2, 4, 5, 6, 7, 8, 9]
```javascript
const y = [1, 2, [4, 5, [6, 7]], 8, 9];
const flattedArray = y.flat(2);
console.log(flattedArray);
```
### Q.26.  `filter()` vs `find()`
```javascript
const positiveNumber = x.find((ele, i) => ele > 0);
console.log(positiveNumber);
```
### Q.27.   Map in JavaScript

```javascript
const employees = [
    { name: 'John', age: 32 },
    { name: 'Sarah', age: 28 },
    { name: 'Michael', age: 40 },
];

const employeesName = employees.map(employee => employee.name);
console.log(myEmployeesName); // ["John", "Sarah", "Michael"]
```
### Q.28.  Polyfill of map()

```javascript
if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (callback) {
        const result = [];
        for (let i = 0; i < this.length; i++) {
            result.push(callback(this[i], i, this));
        }
        return result;
    };
}

const myEmployeesName = employees.myMap(employee => employee.name);

console.log(myEmployeesName); // ["John", "Sarah", "Michael"]
```
### Q.29.  Filter In JavaScript

```javascript
const products = [
    { name: 'iPhone', price: 999, inStock: true },
    { name: 'Samsung Galaxy', price: 899, inStock: false },
    { name: 'Google Pixel', price: 799, inStock: true },
];

const availableProducts = products.filter(product => product.inStock);
// [
//     { name: 'iPhone', price: 999, inStock: true },
//     { name: 'Google Pixel', price: 799, inStock: true },
// ]
```

### Q.30.  Polyfill of filter()

```javascript
if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = (callback) => {
        const result = [];
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                result.push(this[i]);
            }
        }
        return result;
    };
}

const myAvailableProducts = products.myFilter(product => product.inStock);

console.log(availableProducts); 
// [
//     { name: 'iPhone', price: 999, inStock: true },
//     { name: 'Google Pixel', price: 799, inStock: true },
// ]
```



### Q.31. Reduce in JavaScript

```javascript
const orders = [
    { product: 'iPhone', price: 999, quantity: 2 },
    { product: 'Samsung Galaxy', price: 899, quantity: 1 },
    { product: 'Google Pixel', price: 799, quantity: 3 },
];

const totalAmount = orders.reduce(function (accumulator, order) {
    return accumulator + order.price * order.quantity;
}, 0);

console.log(totalAmount); // 5294
```

### Q.32.  Polyfill of reduce()

```javascript
if (!Array.prototype.myFilter) {
    Array.prototype.myReduce = (callback, initialValue) => {
        let accumulator = initialValue === undefined ? this[0] : initialValue;
        for (let i = initialValue === undefined ? 1 : 0; i < this.length; i++) {
            accumulator = callback(accumulator, this[i], i, this);
        }
        return accumulator;
    };
}

const myTotalAmount = orders.myReduce(function (accumulator, order) {
    return accumulator + order.price * order.quantity;
}, 0);

console.log(totalAmount); // 5294
```
### Question 33 : Find the longest word length

```javascript
const words = ['apple', 'banana', 'cherry', 'dragonfruit', 'elderberry'];

const longestWordLength = words.reduce((maxLength, word) => {
    const currentLength = word.length;
    return currentLength > maxLength ? currentLength : maxLength;
}, 0);

console.log(longestWordLength); // Output: 11
```

### Question 34 : Find the longest word

```javascript
const longestWord = words.reduce((longestWord, word) => {
    return word.length > longestWord.length ? word : longestWord;
}, "");

console.log(longestWord); // Output: 'dragonfruit'
```

### Q.35.  Length of a String
```javascript
let firstName = "Vaishali";
console.log(firstName.length);
```

### Q.36.  Access String Element
```javascript

let firstName = "Vaishali";
console.log(firstName.charAt(2)); // i
console.log(firstName[2]); // i
console.log(firstName.charCodeAt(2)); // 115 (Ascii Code)

```

### Q.37.  Check Presence of Character

```javascript

let firstName = "Vaishali";
console.log(firstName.includes("r")); // false (& if present it return true)
console.log(firstName.indexOf("i")); // 2 (& if not present it return -1)
console.log(firstName.lastIndexOf("i")); // 7 

```

### Q.38.  Compare Two Strings

```javascript

let firstName = "Vaishali";
let anotherName = "Vishal";

console.log(firstName.localeCompare(anotherName)); // -1 (& if strings are equal it return 0)

```

### Q.39.  Replace Substring

```javascript

const str = "Vishal is Best Frontend Developer. Vishal is Best Developer. ";

console.log(str.replace("Vishal", "Sujit")); // "Sujit is Best Frontend Developer. Vishal is Best Developer. "
console.log(str.replaceAll("Vishal", "Sujit")); // "Sujit is Best Frontend Developer. Sujit is Best Developer. "
```


### Q.40.  Substring of a String
```javascript

const str = "Vishal is Best Frontend Developer. Vishal is Best Developer. ";

console.log(str.substring(6, 30)); 
console.log(str.slice(-10, -1));
```

### Q.41.  Split and Join

```javascript

const str = "Vishal is Best Frontend Developer. Vishal is Best Developer. ";

console.log(str.split(""));
const subString = str.split(" ");
console.log(subString.join(" "));
```

### Q.42.  String Start and End

```javascript

const str = "Vishal is Best Frontend Developer. Vishal is Best Developer. ";

console.log(str.startsWith("Vishal")); // true
console.log(str.endsWith("Developer")); // true

```


### Q.43.  Trim and Case Conversion
```javascript
const trimStr = str.trim();
const trimStrStart = str.trimStart();
const trimStrEnd = str.trimEnd();
console.log(trimStr, trimStr.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
```

### Q.44.  Convert Number and Object to String
```javascript
const num = 123;
console.log(num, num.toString());

const obj = {
    name: "Vishal",
    course: "DSA with Vishal"
};
console.log(obj, JSON.stringify(obj));
```

### Q.45.   Concatenate Strings

```javascript

const lastName = "Rajput";
console.log(firstName + lastName);
console.log(`${firstName} ${lastName} is a Best Developer`);
console.log(firstName.concat(lastName, " is a", " Best"));

```

# Recursion in JavaScript


### Q.46.  Factorial of a Number

```javascript
function factorial(n){
    if(n === 0)
        return 1;
    return n * factorial(n - 1);
}

console.log(factorial(8));
```

### Q.47.  Sum of Array

```javascript
function sumOfArrays(arr, n){
    if(n === 0){
        return 0;
    }

    return arr[n - 1] + sumOfArrays(arr, n - 1);
}

console.log(sumOfArrays([1, 2, 3, 4, 5], 5));
```
### Q.48.  Fibonacci Number

```javascript
function fibo(n){
    if(n < 2){
        return n;
    }
    return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(5));
```

## Q.49. Practice Questions (solve using recursion):

- Check whether a string is palindrome or not
- Create pow(x, n) function which returns x^n
- Create a function which returns the sum of digits of a number (e.g., sumOfDigits(453) is 12)
- Create a function which returns the number of digits in a number (e.g., countDigits(453) is 3)
- Create a function to find the LCM of two numbers
- Create a function to find the GCD of two numbers
- Create a function to reverse a string

# Searching in JavaScript

### Q.50.   Linear Search in JavaScript

```javascript
const arr = [1, 2, 6, 9, 0, -5];

const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(arr, 8));
console.log(arr.includes(9));
console.log(arr.indexOf(9));
console.log(arr.find((num) => num > 0));
console.log(arr.findIndex((num) => num < 0));
```

### Q.51.  Binary Search In JavaScript

```javascript
const BinarySearch = (arr, target) => {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        else if (arr[mid] > target) {
            end = mid - 1;
        }

        else {
            start = mid + 1;
        }
    }

    return -1;
}

console.log(BinarySearch([1, 4, 6, 9, 12, 15], 8));
```

### Q.52.  Find floor and ceil value of X in an array 

```javascript
const floorCeil = (arr, target) => {
    let start = 0, end = arr.length;
    let floor = -1, ceil = -1;
    while(start <= end){
        let mid = Math.floor((start + end)/2);

        if(arr[mid] === target){
            floor = mid;
            ceil = mid;
            return [ceil, mid]
        }

        else if(arr[mid] > target){
            ceil = mid;
            end = mid - 1;
        }

        else {
            floor = mid;
            start = mid + 1;
        }
    }

    return [ceil, floor]
}
```


