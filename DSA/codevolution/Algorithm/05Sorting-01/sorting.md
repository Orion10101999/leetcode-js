# Sorting algorithms :-

### Bubble sort

### Insertion sort

### Quick sort

## The approach :-

* Problem statement

* Pause the video and try solving the problem

* Impement the solution together

* Determine th Big-O time Complexity


## Bubble sort :-

*  Problem :- Given an array of integers , sort the array .

* const arr = [ -6 , 20 , 8 , -2 , 4 ]

* bubbleSort(arr) => Should return [-6 , -2 , 4 , 8 , 20]

## Bubble sort idea :-

* Compare adjacent elements in the array and swap the positions if they are not in the intended order .

* Repeat the instructions as you step through each element in the array .

* Once you step through the whole array with no swaps , the array is sorted .

```css

[-6 20 8 -2 4]
  ^  ^
  |  |
  |  |

  
```

```css

[-6 20 8 -2 4]  -->  [-6 8 20 -2 4]     Swap since 20 > 8
    ^  ^                 ^  ^
    |  |                 |  |
    |  |                 |  |


[-6 8 20 -2 4]  -->  [-6 8 -2 20 4]     Swap since 20 > -2
       ^  ^                 ^  ^
       |  |                 |  |
       |  |                 |  |


[-6 8 -2 20 4]  -->  [-6 8 -2 4 20]     Swap since 20 > 4
       ^  ^                   ^  ^
       |  |                   |  |
       |  |                   |  |

End of array . Elements swapped ? Yes ? Repeat the comparision .



```

```css

[-6 8 -2 4 20]
  ^ ^
  | |
  | | 


[-6 8 -2 4 20]  -->  [-6 -2  8 4 20]     Swap since  8 > -2
    ^  ^                  ^  ^
    |  |                  |  |
    |  |                  |  |


[-6 -2  8  4 20]  -->  [-6 -2 4  8 20]   Swap since 8 > 4
        ^  ^                  ^  ^
        |  |                  |  |
        |  |                  |  |


[ -6 -2 4  8 20 ] 
           ^  ^                   
           |  |                   
           |  |                   

End of array . Element swapped ? Yes ? Repeat the comparision .

```
```css

* [ -6 -2 4  8 20 ] 
     ^  ^                   
     |  |                   
     |  |                   


* [ -6 -2 4  8 20 ] 
        ^  ^                   
        |  |                   
        |  |                   

* [ -6 -2 4  8 20 ] 
          ^  ^                   
          |  |                   
          |  |                   


* [ -6 -2 4  8 20 ] 
             ^  ^                   
             |  |                   
             |  |                   


End of array . Elements swapped ? No ? Array is sorted .

```

```js

function bubbleSort(arr){
    let swapped 
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]>arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    } while (swapped);
}

const arr = [8 , 20 , -2 , 4 , -6 ]
bubbleSort(arr)
console.log(arr);
```

## Insertion sort :-
                
*  Problem :- Given an array of integers , sort the array .
                
* const arr = [ -6 , 20 , 8 , -2 , 4 ]      

* insertionSort(arr) => Should return [ -6,-2,4,8,20 ]


### Insertion sort idea :-

```css

* virtually split the array into a sorted and an unsorted part .

* Assume that the first element is already sorted and remaining elements are unsorted .

* Select an unsorted element and compare with all elements in sorted part .

* If the elements in the sorted part is smaller than the selected element , proceed to the next elementt in the unsorted part . Else , shift larger elements in the sorted part towards the right . 

* Insert the selected element at the right index .

* Repeat till all the unsorted elements are placed in the right order .


```

* NTI --> Number To Insert
* SE --> Sorted Element

1. 
```css

[-6 , 20 , 8 , -2 , 4 ]     NTI = 20    SE = -6
       ^
       |
       |

* -6 > 20 ? No , Place 20 to the right of -6 . 

```

2.  

```css

[-6 , 20 , 8 , -2 , 4 ]     NTI = 8    SE = 20
           ^
           |
           |

* 20 > 8 ? yes , Shift 20 to the right.

```

3. 

```css

[-6 , 20 , 20 , -2 , 4 ]     NTI = 8    SE = -6
           
           
* -6 > 8 ? No , Place 8 to the right of -6 .

```

4. 

```css

[-6 , 8 , 20 , -2 , 4 ]     NTI = -2    SE = 20
                ^    
                |
                |

* 20 > -2 ? yes , Shift 20 to the right

```

5. 

```css

[-6 , 8 , 20 , 20 , 4 ]     NTI = -2    SE = 8
                    
* 8 > -2 ? yes , Shift 8 to the right

```

6. 

```css

[-6 , 8 , 8 , 20 , 4 ]     NTI = -2    SE = -6
                    
* -6 > -2 ? No , Place -2 to the right of -6

```

7. 

```css

[-6 , -2 , 8 , 20 , 4]  NTI = 4     SE = 20
                    ^
                    |
                    |

* 20 > 4 ? Yes . Shift 20 to the right .

```

8. 

```css

[-6 , -2 , 8 , 20 , 20]  NTI = 4     SE = 8

* 8 > 4 > Yes , Shift 8 to the right .

```

9. 

```css 

[-6 , -2 , 8 , 8 , 20]  NTI = 4     SE = -2

* -2 > 4 > No , Place -4 to the right of -2

```

10. 

```css

[-6 , -2 , 4 , 8 , 20]  

* Reached end of array . Array is Sorted .

```

