# Search Algorithms :-

- Linear Search

- Binary Search

- Recursive binary search

## The Approach :-

- Problem statement

- Pause the video and try solving the problem

- Implement the solution together

- Determine the Big-O time complexity of the solution .

### Linear Search :-

- Problem - Given an array of `n` elements and a target element `t` , find the index of `t` in the array . Return -1 if the target element is not found .

```css

- arr = [-5 , 2 , 10 , 4 , 6]

* t = 10 , should return 2

* arr = [-5 , 2 ,10 , 4 , 6]

* t = 6 , should return 4

* arr = [-5 , 2 ,10 , 4 , 6]

* t = 20 , should return -1

```

# Linear Search pseudocode :-

- Start at the first element in the array and move towards the last . 

- At each element though , check if the element is equal to the target element .

- If element found , return the index of the element .

- If element not found , return -1 .

```js

function linearSearch(arr,target){
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element===target) return i;
    }
    return -1
}

console.log(linearSearch([-5 , 2 , 10 , 4 , 6],10 ));
console.log(linearSearch([-5 , 2 , 10 , 4 , 6],6 ));
console.log(linearSearch([-5 , 2 , 10 , 4 , 6],20 ));

```

## Binary search :-

* Problem - 

- Given a sorted array of `n` elements and a target `t` , find the index of `t` in the array . Return -1 if the target element is not found .

```css 
arr = [-5 , 2 , 4 , 6, 10] ,

t = 10 , should return 4 .

arr = [-5 , 2 , 4 , 6, 10] ,

t = 6 , should return 3 .

arr = [-5 , 2 , 4 , 6, 10] ,

t = 20 , should return -1 .


```

## Binary Search pseudocode :-
```css

- If the array is empty return -1 as the element cannot be found .

- If the array has elements , find the middle element in the array If the target is equal to the middle element , return the middle element index .

- If target is less than the middle element , binary search left half of the array . 

- If target is greater than middle element , binary search right half of the array . 



```
## Binary Search visualisation :-

```css

 left             right

| -5 | 2 | 4 | 6 | 10 |         target = 6
   ^                ^
   |                |           left = 0
   |                |           right = 4


left    middle   right

| -5 | 2 | 4 | 6 | 10 |         target = 6
   ^       ^        ^
   |       |        |           left = 0
   |       |        |           right = 4
                                mid = 2

left  right

| 6 | 10 |                 target = 6
   ^   ^        
   |   |                   left = 3
   |   |                   right = 4
   

left  right
/mid
| 6 | 10 |         target = 6
 ^^   ^        
 ||   |                   left = 3
 ||   |                   right = 4
                            mid = 3
   


```

## Solutions

```js

function binarySearch(arr , target){
    let leftIndex = 0 ;
    let rightIndex = arr.length ;
    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2 );
        if(target=== arr[middleIndex]) return middleIndex
        if (target < arr[middleIndex]){
            rightIndex = middleIndex -1
        }else{
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

console.log(binarySearch([-5,2,4,6,10],10));
console.log(binarySearch([-5,2,4,6,10],6));
console.log(binarySearch([-5,2,4,6,10],20));

// - Big-(O) - O(logn)

```




## 18 - Recursive Binary Search :-

### Recursive binary search :-

* Problem - Given a sorted array of `n` elements and a target element `t` , find the index of `t` in the array . Return -1 if the target element is not found .


```css 

arr = [-5 , 2 , 4 , 6, 10] ,

t = 10 , should return 4 .

arr = [-5 , 2 , 4 , 6, 10] ,

t = 6 , should return 3 .

arr = [-5 , 2 , 4 , 6, 10] ,

t = 20 , should return -1 .

```

## Tips for recursive solutions :-

Figure out how to break down the problem into smaller versions of the same problem Identify the base case for recursion .

## Binary search pseudocode :-
```css
- If the array is empty return -1 as the element cannot be found .
            
- If the array has elements , find the middle element in the array If the target is equal to the middle element , return the middle element index .
            
- If target is less than the middle element , binary search left half of the array . 
            
- If target is greater than middle element , binary search right half of the array . 
            
```

```js
function recursiveBinarySearch(arr,target) {
    return search(arr , target , 0 , arr.length- 1)
}

function search(arr, target , leftIndex , rightIndex){
    if(leftIndex > rightIndex){
        return -1
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if(target === arr[middleIndex]){
        return middleIndex
    }
    if(target < arr[middleIndex]){
        return search(arr , target , leftIndex , middleIndex - 1 )
    }else{
        return search(arr , target , middleIndex+1 , rightIndex )
    }
}

console.log(recursiveBinarySearch([-5,2,4,6,10],10));
console.log(recursiveBinarySearch([-5,2,4,6,10],6));
console.log(recursiveBinarySearch([-5,2,4,6,10],20));


// Big - O - O(log(n))




```