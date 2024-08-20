# Q.1

## Programming Questions :- Longest Word in a String :-

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




### Write a function generateHash to accomplish this task .

```js

console.log(generateHash("my name is thapa technical"))

// o/p = "#MyNameIsThapaTechnical

```

### Solution - 1 :-

```js

function generateHash(str) {
    if(str.length > 280 || str === '') return false
    let result = ''
    for (let i = 0; i < str.length; i++) {
        let element = str[i].toUpperCase()
        if(str[i]!==' '){
            if(str[i-1] !== " " && i !== 0){
                element = str[i].toLowerCase()
            }
            result += element
        }
    }
    return '#' + result

}
  
console.log(generateHash("my name is thapa technical"))


```
### solution - 2


```js

function generateHash(str) {
    if(str.length > 280 || str === '') return false
    let arr = str.split(' ')
    let newArr = arr.map(word => word.replace(word[0] , word[0].toUpperCase()));
    return '#' + newArr.join('')
  }
  
  
console.log(generateHash("my name is thapa technical"))


```

```js
function generateHash(str) {
    if(str.length > 280 || str === '') return false
    let arr = str.split(' ')
    let newArr = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    return "#" + newArr.join('');
  }
  
  
  
console.log(generateHash("my name is thapa technical"))


```
### Ans :-

```css
[Running] node "c:\leetcodeJs\InterviewJS\index.js"
#MyNameIsThapaTechnical

[Done] exited with code=0 in 0.403 seconds

```

# Q.3.

## Interview Question : Count Occurrences of Character :-

### Task :-



