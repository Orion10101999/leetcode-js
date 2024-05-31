class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0
        this.rear = -1
        this.front = -1
    }

    isFull() {
        return this.currentLength === this.capacity
    }

    isEmpty() {
        return this.currentLength === 0
    }
    
    /*
        enqueue(element){
            this.items[this.rear] = element
            this.rear++
        }
    
        dequeue(){
            const item = this.items[this.front]
            delete this.items[this.front]
            this.front++
            return item
        }
    
        peek(){
            return this.items[this.front]      
        }
        
        size(){
            return this.rear - this.front
        }
    
        print() {
            console.log(this.items);
        }
    */
}

const queue = new CircularQueue()

console.log(queue.isFull());
console.log(queue.isEmpty());

/*
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.size());
queue.print()

console.log(queue.dequeue());
console.log(queue.peek());
*/
