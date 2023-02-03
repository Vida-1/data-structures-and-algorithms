const { BinaryTree, btNode } = require('./binaryTree');
// const btNode = require('./node');

//const expect = require('jest');
// const { test } = require("jest");

class BinaryTree{
  constructor(root) {
    this.root = root;
  }

  //pre-order:     ROOT >> LEFT >> RIGHT        //(left first is the way)
  
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


// Attribution: this tree code was shared by Sara but I can't figure it out structurally so I'm not using it just yet.
// const tree = new BinaryTree(new Node(1, new Node(7, new Node(2), new Node(6, new Node(3), new Node(11))), new Node(9, undefined, new Node(9, new Node(5)))));

// myTree.preOrder(myTree.root);
// console.log(myTree);

class btNode{
  constructor (value, left, right) {  // function btNode
  this.value = value;
  this.left = left;
  this.right = right;
  }
}

describe('my binary tree methods', () => {
 
  let myTree = new BinaryTree(null); // Attribution: this tree is based on code shared by Gaz
    myTree.root = new btNode(70);
    myTree.root.left = new btNode(60);
    myTree.root.right = new btNode(80);
    myTree.root.left.left = new btNode(50);
    myTree.root.left.right = new btNode(65);
    myTree.root.right.left = new btNode(75);
    myTree.root.right.right = new btNode(90);
  
  test('can do a pre-order traversal', () => {
    expect(myTree.preOrder()).toEqual([70, 60, 50, 65, 80, 75, 90]);
  });

  test('can do an in-order traversal', () => {
    expect(myTree.inOrder()).toEqual([50, 60, 65, 70, 75, 80, 90]);
  });

  test('can do a post-order traversal', () => {
    expect(myTree.postOrder()).toEqual([50, 65, 60, 75, 90, 80, 70]);
  });
})