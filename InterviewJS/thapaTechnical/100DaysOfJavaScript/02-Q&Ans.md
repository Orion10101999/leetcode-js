# Q.3 

## Interview Question : Count Occcurence of Character 

### Task :-

* Write a function called countChar that takes two parameters : a string and a character to count . The function should return the number of times the specified character appears in the string .

```js

console.log(countChar("MissIssippi","I")) // output : 4

```

### todo constraints :-

* The function should be case-sensitive .

* The function should handle both lowercase and upppercase characters .

* The Characters parameters can be any principle ASCII character (the function should accept any character that is part of the ASCII character set and is printible ).


# Q.4 Interview Question :-

* Write a function called checkTriangleType that takes three parameters represting the lengths of the sides of a triangle / the function should return a string indicating the type of triangle : "equilateral" , "isosceles" , "scalene".

```css

console.log(checkTriangleType(3 , 3 , 3))
console.log(checkTriangleType(3 , 4 , 3))
console.log(checkTriangleType(5 , 8 , 6))

```

### todo the function should adhere to the the following rules :

* If all three sides are of equal length , return  "equilateral" .

* If only two sides are of equal length , return "isosceles" .

* If all three sides have different lengths , return "scalene" .

# Q.5 Programming Questions : Sort an Array 

## Write a function to sort an array of numners in an ascending order .

* Example usage :-

```js
console.log(sortAscending([5,3,1,8]))   // output : [ 1 , 3 , 5 , 8 ]
console.log(sortAscending([5,3,10,8]))   // output : [ 3 , 5 , 8 , 10 ]
console.log(typeof sortAscending([2]))   

```

### todo requirements :-

* The function should take an array of numbers as input .

* It should return a new array with the numbers sorted in ascending order .

* The original array should remain unchanged .

* You are not allowed to use the built-in-sort() method .

# Q.6.

## Write a function to determine whether a given string is a palingdrome or not . A palindrome is a word , phrase , number , or other sequence of characters that reads the same forward and backward , ignoring spaces , punctuation , and capitalization .


```js

console.log(isPalindrome("A man , a plan , a canal , Panama"))  // output : true 

console.log(isPalindrome("racecar")) // Output : true 

console.log(isPalindrome("hello")) / // Output : false 

```


### Constraints :-

* The input string may contain letters , digits , spaces , punctuation , and special characters .

* The function should be case-insensitive , meaning "Racecar" and "racecar" should be considred the same .

* Ignore spaces , punctuation , and special charaters when determining if a string is a palindrome .

* The function should return true if thr input string is a palindrome and false otherwise .

