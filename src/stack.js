//const { NotImplementedError } = require('../extensions/index.js');

/*
 * Implement the Stack with a given interface via array. *
 */

class Stack {
  constructor(){
    this.stackArr = [];
  }
  push(elem) {
    this.stackArr.push(elem);
  }

  pop() {
    return this.stackArr.pop();
  }

  peek() {
    return this.stackArr[this.stackArr.length - 1];
  }
}

// @example

const stack = new Stack();
console.log(stack);

stack.push(1); // adds the element to the stack
stack.push(5);
console.log(stack.peek(), 'stack peek'); // returns the peek, but doesn't delete it, returns 5
stack.pop(); // returns the top element from stack and deletes it, returns 5
console.log(stack.pop()); // 1
console.log(stack.pop()); // undefined

module.exports = {
 Stack
};
