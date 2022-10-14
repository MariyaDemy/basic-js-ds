//const { NotImplementedError } = require('../extensions/index.js');
//const { Node } = require('../extensions/list-tree.js');

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class BinarySearchTree {

  constructor(){
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  _findExistingNode(data){
      if(this.rootNode === null){
        return null;
      }
      let currentNode = this.rootNode;
      while(true){
        if(data === currentNode.data){
          return currentNode;
        }
        let nextNode;
        if(data < currentNode.data){
          nextNode = currentNode.left;
        } else {
          nextNode = currentNode.right;
        }
        if(nextNode === null){
          return currentNode;
        }
        currentNode = nextNode;
      }
  }

  add(data) {
    let node = this._findExistingNode(data)
    if(node === null){
      this.rootNode = new Node(data)
      return;
    }
    if(node.data === data){
      return;
    }
    if(data < node.data){
      node.left = new Node(data);
      node.left.parent = node;
    } else {
      node.right = new Node(data);
      node.right.parent = node;
    }
  }

  has(data) {
    const node = this._findExistingNode(data);
    return node === null ? false : node.data === data ? true : false;
  }

  find(data) {
    const node = this._findExistingNode(data);
    return node === null ? null : node.data === data ? node : null;
  }

  remove(data) {
    let node = this._findExistingNode(data);
    if(node){
      this._removeNode(node);
    }
  }

  _removeNode(node){ //to remove a node need to replace it with the smallest of the node.right children
    if(node.left === null && node.right === null){ //if node is a leaf (has no children)
      if(node.parent.data > node.data){
        node.parent.left = null;
      } else {
        node.parent.right = null;
      }
      return;
    }

    if(node.right === null || node.left  === null){ //if node has only left child
      if(node.parent.data > node.data){
        node.left ? node.left.parent = node.parent : node.right.parent = node.parent
        node.left ? node.parent.left = node.left : node.parent.left = node.right
      } else {
        node.left ? node.left.parent = node.parent : node.right.parent = node.parent
        node.left ? node.parent.right = node.left : node.parent.right = node.right
      }
    } else { // if node has two children
      let replacer = node.right;
      while(replacer.left !== null){
        replacer = replacer.left;
      }
      node.data = replacer.data;
      this._removeNode(replacer);
    }
  }

  min() {
    if(this.rootNode === null){
      return null;
    }
    let node = this.rootNode;
    while(node.left !== null){
      node = node.left;
    }
    return node.data;
  }

  max() {
    if(this.rootNode === null){
      return null;
    }
    let node = this.rootNode;
    while(node.right !== null){
      node = node.right;
    }
    return node.data;
  }
}

// let tree = new BinarySearchTree()
// tree.add(10)
// tree.add(5)
// tree.add(9)
// tree.add(6)
// tree.add(8)
// tree.add(4)
// tree.remove(5)
// console.log(tree)

module.exports = {
  BinarySearchTree
};