## Linked List :-

- A linked list is a linear data structure that includes a series of connected nodes 

- Each node consists of a data value and a pointer that points to the next node 

- The list elements can be easily inserted or removed without reallocation or reorganization of the entire structure .

- Random access of elements is not feasible and accessing an element has linear time complexity .

- the linked list data structure supports three main operations 

    * Insertons :- to add an element at the beggining , end or at a given index in the list
    
    * Deletion :- to remove an item given its index or value .

    * Search :- to find an element given its value

## Linked List Usages :-

- All applications of both stacks and queues are applications of linked lists 

- Image viewer

##  Linked List Class :-

```javaScript


class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }
}

const list = new LinkedList()
console.log('List is empty',list.isEmpty());
console.log('List size', list.getSize());

```

##  Linked List Prepend :-


