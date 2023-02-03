"use strict";

class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // Root Left Right
  // time - O(n)
  // space - O(h)

  preOrder() {
    let result = [];
    
    let _walk = (node) => {

      //process the node in some way
      result.push(node.value);

      // check the left side
      if (node.left) _walk(node.left)

      // check the right side
      if (node.right) _walk(node.right)

      return;
    };

    // call walk on the very first root node
    _walk(this.root);
    return result;
  }

  inOrder() {
    let result = [];
    
    let _walk = (node) => {
   
      // check the left side
      if (node.left) _walk(node.left)

      //process the node in some way
      result.push(node.value);

      // check the right side
      if (node.right) _walk(node.right)
      return;
    };

      _walk(this.root);
      return result;
      }
  }
  

    postOrder() {
    let result = [];
    
  let _walk = (node) => {
    //process the node in some way
    result.push(node.value);

    // check the left side
    if (node.left) _walk(node.left)

    // check the right side
    if (node.right) _walk(node.right)
    return;
  };

    // call walk on the very first root node
    _walk(this.root);
    return result;
  }


class BST extends BinaryTree {
  constructor(root) {
    super(root);
  }

  add(number) {
    let newNode = new Node(number);
    if (!this.root) {
      this.root = newNode;
    } else {
      //traverse BST - currentNode, newNode

      _walk(this.root, newMode);

      function _walk(current, newNode) {
        if (neweNode.value < current.value) {
          //if we have a left check that node value
          if (current.left) _walk(current.left, newNode);
          // if not put the node there
          else current.left = newNode;
        }
        if (newNode.value > current.value) {
          // if we have a right check the right
          if (current.right) _walk(current.right, newNode);
          // if not the new node is our new right node
          else current.right = newNode;

        }
        return;
      }
      
    }
    
    if (number === this.value) {
      // put it in the garbage
      return;
    } else if (number > this.value) {
      // check right
      if (this.right) {
        this.right = new Node(number);
      } else {
        this.right.add(number);
      }
    } else if (number < this.value) {
      if (this.left) {
        this.left = new Node(number);
      } else {
        this.left.add(number);
      }
    }
  }
}