class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //method to add a node to the queue (at the end)
  enqueue(val) {
    //create new node
    let newNode = new Node(val);

    //if the list is empty and this is the very first item...
    if (!this.first) {
      this.first = newNode; //make new node the first
      this.last = newNode; //make it be the last too
    } else {
      //if there are nodes already...
      this.last.next = newNode; //set current last to point to new node
      this.last = newNode; //set last to be the new node
    }

    return ++this.size; //increment size and return it
  }

  //method to remove the very first node of the queue
  dequeue() {
    //if list is empty...
    if (!this.first) return null;

    let oldFirst = this.first; //grab reference to first node

    //if only one node in queue...
    if (this.size === 1) {
      //make last be null
      this.last = null;
    }

    //make first be the node after (if it is null, we set it to null so that 
    //both last and first are null)
    this.first = this.first.next;

    this.size--; //decrement size

    return oldFirst.val; //return the value of node that was popped
  }
}