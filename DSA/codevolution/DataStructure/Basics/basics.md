## Before we begin :-

- This course is a continuation of the JavaScript Algorithm series

- Different programming languages have different data structures . Our choice of language will be javaScript .

- It is possible to implement a data structure in a few different ways .

- Please do not memorize the implementation .

## What is data structure ?

- A data structure is a way to store and organise data so that it can be used efficiently .

- A data structure is a collection of data values , the relationship among them , and the functions or operations that can be applied to that data .

## Why learn data structures ?

- Almost every application we build involves data that is modelled in a certain way .

- To efficiently manage that data , you need data structures .

- Imagine walking into a library only to find out there is no efficient organization of the books and they are stored randomly .

## Why learn data structures ? contd .

- The difference between a function taking a few milliseconds vs a few seconds or even minutes comes down to the selection of the right data structure .

- Data structures help you solve problems in more efficient way , both in terms of time and memory 

- Learning about data structures also help you gain a more profound understanding of things you are already aware of 

* DOM - Tree data structure 

* Browser back and forward - Stack data structure 

* OS job scheduling - Queue data structure 

## Course Overview :-

- Built in data structures 

* Arrays 

* Objects 

* Sets

* Maps

- Custom data structures 

* Stacks 

* Queues 

* Circular queues 

* Linked lists

* Hash tables 

* Trees

* Graphs

- Prerequisites :- 

* Modern JavaScript

* JavaScript Algorithms

## Array :-

- An array is a data structure that can hold a collection of values .

- Arrays can contain a mix of different data types . You can store strings , booleans , numbers or even objects all in the same array .

- Array are resizable . You don't have to declare the size of an array before creating it .

- JavaScript arrays are zero-indexed and the insertion order is maintained .

- Arrays are iterables . The can be used with a for of loop .


```javascript

const arr = [ 1 ,2, 3, 'Vishwas']

arr.push(4)
arr.unshift(0)
arr.pop()
arr.shift()

for (const item of arr) {
    console.log(item);
}

// map , filter , reduce , concat , slice and splice



```

## Array - Big-O time complexity :-

- Insert / remove from end - O(1)

- Insert / remove from begining - O(n)

- Access - O(1)

- Search - O(n)

- Push / pop - O(1)

- Shift / unshift / concat / slice / splice - O(n)

- forEach / map / filter / reduce - O(n)


## Object :-

- An object is an unordered collection of key-value pairs . The key must either be a string or symbol data type where as the value can be of any data type .

- To retrieve a value , you can use the the corresponding key . This can be achieved using the dot notation or bracket notation .

- An object is not an iterable .

- You can not use it with a for of loop .

```javascript

const obj = {
    name : 'Heisonberg',
    age : 25 ,
    "key-theree" : true ,
    sayMyName : function () {
        console.log(this.name)
    }
}
obj.hobby = "football"
delete obj.hobby

console.log(obj.name);
console.log(obj['age']);
console.log(obj['key-three']);
console.log(obj);
obj.sayMyName()


// Object.keys() .values() .entries()


```

## Object - Big-O time complexity 

- Insert - O(1)

- Remove - O(1)

- Access - O(1)

- Search - O(n)

- Object.keys() - O(n)

- Object.values() - O(n)

- Object.entries() - O(n)


## Set :-

- A set is a data structure that can hold a collection of values . The values however must be uniue .

- Set can contain a mix of different data types . You can store strings , booleans , numbers or even objects all in the same set .

- Sets are dynamically sized . You don't have to declare the size of a set before creating it .

- Sets do not maintain an insertion order .

- sets are iterables . They can be used with a for of loop

## Set vs Array :-

- Arrays can contain dublicate values whereas Sets cannot .

- Insertion order is maintained in arrays but it is not the case with sets .

- Searching and deleting an element in the set is faster compared to arrays .


```javascript

const set = new Set([1,2,3])

set.add(4)
console.log(set.has(4));
set.delete(3)
console.log(set.size);
set.clear()

for (const item of set) {
    console.log(item);
}

```

## Map :-

- A map is an unordered collection of key - value pairs . Both keys and values can be of any data type .

- To retrive a value , you can use the corresponding key .

- Maps are iterables . They can be used with a for of loop .

## Object vs Map :-

- Objects are unordered whereas maps are ordered .

- Keys in objects can only be string or symbol type whereas in maps , they can be any type .

- An object has a prototype and may contain a few default keys which may collide with your own keys if you are not careful . A map on the hand does not contain any keys by default .

- Objects are not iterables where as maps are iterables .

- The number of items in an object must be determined manually where as it is readily available with size property in a map .

- Apart from storing data , you can attach functionality to an object where as maps are restricted to just storing data .

- 


```javascript

const map = new Map([['a',1],['b',2]])

map.set('c', 3)
map.delete('c')
console.log(map.has('a'));
console.log(map.size);
map.clear()
for (const [key , value] of map) {
    console.log(`${key}: ${value}`);
}

  
```

## Stack :-

- The stack data structure is a sequential collections of elements that follows the principle of Last In First Out (LIFO)

- The last element inserted into the stack is first element to be removed .

- A stack of plates . The plate placed on top of the stack is also the first plate removed from from the stack .

- Stack is an abstract data type .

- It is defined by its behavior rather than being a mathmatical model .

- The Stack data structure supports two main operations 

    * Push , which adds an element to the collection
    * Pop , which removes the most recently added from the collection .

## Stack Usage :-

- Browser history tracking 

- Undo operation when typing 

- Expression conversions 

- Call stack in JavaScript runtime .


## Queue :-

- The queue data structure is a sequential collection of elements that follows the principle of First In First Out (FIFO)

- The first element inserted into the queue is first element to be removed .

- A queue of people . People enter the queue at one end (rear/tail) and leave the queue from the other end (front/head)

- Queue is an abstract data type . It is defined by its behavior rather than being a mathmatical model .

- The Queue data structure supports two main operations .

    * Enqueue , which adds an element to the rear / tail of the collection
    * Dequeue , which removes an element from the front/head of the collection .

- Queue Usage :-

    * Printers
    * CPU task scheduling
    * Callbck queue in JavaScript runtime .

## Queue Implementaion :-

- enqueue(element) - add an element to the queue

- dequeue() - remove the oldest element from the queue

- peek() - get the value of the element at the front of the queue without removing it

- isEmpty() - check if the queue is empty 

- size() - get the number of elements in the queue 

- print() - visualize the elements inthe queue 


## Queue Implementation :-

```javaScript

class Queue {
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        return this.items.shift()
    }

    isEmpty(){
        return this.items.length === 0
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }
    
    size(){
        return this.items.length
    }

    print() {
        console.log(this.items.toString());
    }
}

const queue = new Queue()
console.log(queue.isEmpty());

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.size());
queue.print()

console.log(queue.dequeue());
console.log(queue.peek());


```


## Queue Implementation Optimised :-

