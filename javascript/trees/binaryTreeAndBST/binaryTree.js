'use strict';

console.log("Hello world!"); // because sometimes a greeting is all it takes

class BinaryTree{
  constructor(root) {
    this.root = root;
  }

  preOrder() {
    
    //this is a recursive version of the solution --we will not be discussing recursion formally for a few lessons yet

    let traversal = [];  // this array is for housing the nodes
    traversal.push(this.value); //root

    if (this.left) { // IF we have a left node
      let leftTraversal = this.left.preOrder();  
      traversal = traversal.concat(leftTraversal);
    }

    if (this.right) {  // IF we have a right node
      let rightTraversal = this.right.preOrder();  
      traversal = traversal.concat(rightTraversal);
    }

    return traversal;
  }

  // post-order  -left right root -we are supposed to write this one
  postOrder() {  
    let traversal = [];

    if (this.left) { // IF we have a left node
      let leftTraversal = this.left.postOrder();  
      traversal = traversal.concat(leftTraversal);
    }

    if (this.right) {  // IF we have a right node
      let rightTraversal = this.right.postOrder();  
      traversal = traversal.concat(rightTraversal);
    }
    traversal.push(this.value); //root

    return traversal;
  }


  inOrder() {     // in-order  LEFT >>  ROOT  >>  RIGHT  
    let traversal = [];
     if (this.left) { // IF we have a left node
      let leftTraversal = this.left.inOrder();  
      traversal = traversal.concat(leftTraversal);
     }
    
    traversal.push(this.value);  //root

    if (this.right) {  // IF we have a right node
      let rightTraversal = this.right.inOrder();  
      traversal = traversal.concat(rightTraversal);
    }
  }
}

// class BSTNode extends Node {

  add(number) {
    if (number === this.value) {
      // put it in the garbage
      return
    } else if (number > this.value) {
      // check right
      if (!this.right) {
        this.right = new BSTNode(number)
      } else {
        this.right.add(number)
      }
    } else if (number < this.value) {
      if (!this.left) {
        this.left = new BSTNode(number)
      } else {
        this.left.add(number)
      }
    }
  }
  
  // both have 2 children, BST has to have numeric values stored lower left and higher right
  // add and contains
  // no replication of values

//   contains(number) {
//     if (number === this.value) {
//       return true;
//     } else if (number > this.value) {
//       if (this.right) {
//         this.right.contains(number)
//       } else {
//         return false
//       }
//     } else if (number < this.value) {
//       if (this.left) {
//         this.left.contains(number)
//       } return false
//     }
//   }
// }

// module.export =  BinaryTree ;