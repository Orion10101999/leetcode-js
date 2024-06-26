# Misc problems :-

1. Cartesian product

2. Climbing staircase

3. Tower of Hanoi

## 1 . Cartesian product :-

* Problem :-

* Given two finite non-empty sets , find their Cartesian Product .

* In mathmatics , specifically set theory , the Cartesian product sets A and B , denoted A*B , is the set of all ordered pairs ( a, b ) where a is in A and b is in B 

* const A = [1,2]

* const B = [3,4]

A * B = [[ 1 , 3 ],[ 1 , 4 ],[ 2 , 3 ],[ 2 , 4 ]]

const C = [1 ,2]

const D = [3 , 4 , 5]

C*D = [[ 1 , 3 ],[ 1 , 4 ],[ 1 , 5 ],[ 2 , 4 ],[ 2 , 4 ],[ 2 , 5 ]]


### Cartesian product idea :-

* Traverse each array and pair each element in the first array with each element in the second array .


### Climbing staircase :-

* Problem :- Given a staircase of `n` steps . count the number of distinct ways to climb to the top .

* You can either climb 1 step or 2 steps at a time .

```css

n = 1 , climbingStaircase(1) = 1

| (1)

n = 2 , climbingStaircase(2) = 2

| (1,1) and (2)

n = 3 , climbingStaircase(3) = 3

| (1,1,1) (1,2) and (2,1)

n = 4 , climbingStaircase(4) = 5

| (1,1,1,1) (1,1,2) (2,1,1) and (2,2)


```

### Climbing staircase idea :-

* At any given time , you can climb either 1 step or 2 steps .

* If you have to climb `n` , we can only climb from steps and add the two .

* climbingStaircase(n) = climbingStaircase(n-1) + climbingStaircase(n-2)

## Tower of Hanoi :-

* The objective of the puzzle is to move the entire stack to the last rod , obeying the following rules :

* Only one disk may be moved at a time .

* Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod , And lastly ,

* No disk may be placed on top of a disk that is smaller .


### Tower of Hanoi examole 1 :-

```css

    |               |               |
    |               |               |
    |               |               |
  -----             |               |
---------           |               |
____________________________________________________
    A               B               C


    |               |               |
    |               |               |
    |               |               |
    |               |               |
---------       ----------          |
____________________________________________________
    A               B               C


    |               |               |
    |               |               |
    |               |               |
    |               |               |
    |           ----------     -----------
____________________________________________________
    A               B               C


    |               |               |
    |               |               |
    |               |               |
    |               |            -------
    |               |          -----------
____________________________________________________
    A               B               C



```

* Shift `n-1` disks from `A` to `B` , using `C` (when required)

* Shift last disk from `A` to `C`

* Shift `n-1` disks from `B` to `C` , using `A` ( when required )


### Tower of Hanoi examole 2 :-

```css




```css

    |               |               |
    |               |               |
    |               |               |
   ---              |               |
  -----             |               |
---------           |               |
____________________________________________________
    A               B               C


    |               |               |
    |               |               |
    |               |               |
    |               |               |
  -----             |               |
---------           |             -----
____________________________________________________
    A               B               C


    |               |               |
    |               |               |
    |               |               |
    |               |               |
    |               |               |
 --------        -------          -----
____________________________________________________
    A               B               C

```
```css

    |               |               |
    |               |               |
    |               |               |
    |              ---              |
---------        -------            |
____________________________________________________
    A               B               C


    |               |               |
    |               |               |
    |               |               |
    |              ---              |
    |            -------       -----------
____________________________________________________
    A               B               C


    |               |               |
    |               |               |
    |               |               |
    |               |               |
   ---           -------       -----------
____________________________________________________
    A               B               C


    |               |               |
    |               |               |
    |               |               |
    |               |            -------
   ---              |          -----------
____________________________________________________
    A               B               C


    |               |               |
    |               |               |
    |               |              ---
    |               |            -------
    |               |          -----------
____________________________________________________
    A               B               C



```

* Shift `n-1` disks from `A` to `B` , using `C` (when required)

* Shift last disk from `A` to `C`

* Shift `n-1` disks from `B` to `C` , using `A` ( when required )




###  Recap :-

* Math 

* Search 

* Sorting

### Algorithm design techniques :-

* Bruce force - Simple and exhaustive technique that evalutes every possible outcome to find the best solution 

EX:- Linear Search