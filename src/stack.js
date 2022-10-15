//const { NotImplementedError } = require('../extensions/index.js');

/*
 * Implement the Stack with a given interface via array. *
 */

class Stack {
  constructor(){
    this.stackArr = [];
  }
  push(elem) {
    this.stackArr.unshift(elem);
  }

  pop() {
    return this.stackArr.shift(this.stackArr[0]);
  }

  peek() {
    return this.stackArr[0];
  }
}

// @example
/*
const stack = new Stack();
stack.push(1); // adds the element to the stack
stack.push(5);
stack.peek(); // returns the peek, but doesn't delete it, returns 1
stack.pop(); // returns the top element from stack and deletes it, returns 1
stack.pop(); // undefined
console.log(stack)
*/

module.exports = {
 Stack
};
