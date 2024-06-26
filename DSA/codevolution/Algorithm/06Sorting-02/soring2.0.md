## Merge sort :-

* Problem :-

* Given an array of integers , sort the array .

* const arr = [ -6 , 20 , 8 , -2 , 4]

* mergeSort(arr) => Should return [-6 , -2 , 4 , 8 , 20 ]

### Merge sort idea :-

* Devide the array into sub arrays to produce , each containing only one element ( An array with one element is considered sorted )

* Repeatedly merge the sub arrays until there is only one sub array remaining . That will be sorted array .

### Merge Sort Example :-

```css

                | -6 | 20 | 8 | -2 | 4 |
                

          | -6 | 20 |           | 8 | -2 | 4 |
          
          
    | -6 |  | 20 |        | 8 |         | -2 | 4 |


    | -6 |  | 20 |        | 8 |         | -2 |   | 4 |


          | -6 | 20 |     | 8 |     | -2 | 4 |


          | -6 | 20 |         | -2 | 4 | 8 |


                | -6 | 20 | 8 | -2 | 4 |


```

```css

          | -6 | 20 |           | 8 | -2 | 4 |

[-6]    [20]    =>  []

* Left & right are not empty . -6 < 20>

[]    [20]    =>  [-6]

* Left is empty . Push right array .

[]  []  => [-6 , 20]



    | -6 |  | 20 |        | 8 |         | -2 | 4 |



[8]     [-2 , 4] => []

* Left & right are not empty .  -2 < 8

[8] [4]     =>      [-2]    

* Left & right are not empty . 4 < 8

[8] []  =>     [-2 , 4]

* Right is empty . Push left array 

[]  []  =>  [ -2 , 4 , 8 ]



            | -6 | 20 |         | -2 | 4 | 8 |


[ -6 , 20 ]         [ -2 , 4 , 8 ] => []

* Left & right are not empty . -6 < -2

[  20 ]         [ -2 , 4 , 8 ] => [ -6 ]

* Left & right are not empty .  -2 < 20

[  20 ]         [ 4 , 8 ] => [ -6 , -2 ]

* Left & right are not empty .  4 < 20

[  20 ]         [  8 ] => [ -6 , -2 , 4]

* Left & right are not empty .  8 < 20

[  20 ]         [   ] => [ -6 , -2 , 4 , 8]

[   ]         [   ] => [ -6 , -2 , 4 , 8 , 20]

```

