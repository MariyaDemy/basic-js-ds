//const { NotImplementedError } = require('../extensions/index.js');
// const { ListNode } = require('../extensions/list-node.js');

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

// Implement the Queue with a given interface via linked list (use ListNode extension above).

class Queue {

  constructor(){
  this.firstElem = null;
  }

  getUnderlyingList() {
    return this.firstElem;
  }

  enqueue(value) {
    let currentNode = this.firstElem;
    if(currentNode === null){
      this.firstElem = new ListNode(value);
    } else {
      while(currentNode.next !== null){ //finds the last element
        currentNode = currentNode.next;
      }
      currentNode.next = new ListNode(value); //last element.next = newly added element
    }
  }

  dequeue() {
    let currentNode = this.firstElem;
    let removedValue = currentNode.value;

    this.firstElem = currentNode.next;
    currentNode = this.firstElem;

    return removedValue;
  }
}

// @example
/*
const queue = new Queue();
queue.enqueue(1); // adds the element to the queue
queue.enqueue(3); // adds the element to the queue
queue.dequeue(); // returns the top element from queue and deletes it, returns 1
console.log(queue.getUnderlyingList()) // returns { value: 3, next: null }
*/

module.exports = {
  Queue
};