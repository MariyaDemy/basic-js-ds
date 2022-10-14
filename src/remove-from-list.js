//const { NotImplementedError } = require('../extensions/index.js');
//const { ListNode } = require('../extensions/list-node.js');

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 */

function removeKFromList(l, k) {
  let currentNode = l;
  let prevNode = null;
  while(currentNode !== null){
    if(currentNode.value === k){
      if(prevNode){
        prevNode.next = currentNode.next;
        currentNode = prevNode.next;
      } else {
        l = currentNode.next;
        currentNode = l;
      }
    } else {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }
  return l;
}

module.exports = {
 removeKFromList
};
