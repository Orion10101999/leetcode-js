

# Programming Questions :-

# Q.1

## Longest Word in a String :-

### Q.1 Write a function FindLongestWord that takes a string as input and returns the longest words in the string . If there are multiple longest words , return the first encontered .

### Constraints :-

*  The input string may contain alphabetic characters , digits , spaces , and puctuation .

* The input string is non-empty .

* The input string may contain multiple words separated by spaces .

### Note :-

* If the input string is empty or contains only whitespace , the function should return an false 

    
* The function should ignore leading and trailing whitespace when determining the longest should ignore leading and trailing whitespace when determining .


### Solution - 1

```js
const FindLongestStringLength = (str) => {
    
    let splitStrArr = str.split(" ")

    let result = ""
    for (let i = 0; i < splitStrArr.length; i++) {
        if(result.length<=splitStrArr[i].length){
            result = splitStrArr[i]            
        }
        
    }
    return result ? result : false
}


let string = "I Love JavaScript with my whole Mind but ArtificialIntelligence . "
let str = "   "
console.log(FindLongestStringLength(string));


```

### Solution - 2


```js
const FindLongestStringLength = (str) => {
    if(str.trim().length === 0) return false
    let words = str.split(" ")
    words = words.sort((a,b) => b.length - a.length)
    return words[0]
    
}


const string = "I Love JavaScript with my whole Mind but ArtificialIntelligence . "
const str = "   "
console.log(FindLongestStringLength(string));
console.log(FindLongestStringLength(str));
```

### Solution - 3


```js

const FindLongestStringLength = (str) => {
    if(str.trim().length === 0) return false
    let words = str.split(" ")
    // words = words.sort((a,b) => b.length - a.length)
    return words.reduce((accum,currword) => (currword.length > accum.length ? currword : accum))    
}


const string = "I Love JavaScript with my whole Mind but ArtificialIntelligence . "
const str = "   "
console.log(FindLongestStringLength(string));
console.log(FindLongestStringLength(str));

```

```css

[Running] node "c:\leetcodeJs\InterviewJS\thapaTechnical\index.js"
ArtificialIntelligence
false

[Done] exited with code=0 in 0.497 seconds

```


# Q.2.

## Programming Questions : Hash Tag Generator 



* You are required to implement a function generateHash that generates a hash tag from a given input string .
* The input string should be converted to a hash tag format , where each word is capitalized and concatenated together without spaces .
* If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespaces , the function should return false . 
* Otherwise , the function should return the generated hash tag prefixed with #




### Write a function 
