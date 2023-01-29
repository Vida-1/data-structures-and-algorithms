# Challenge Summary
* Node: Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
* Binary Tree: Create a Binary Tree class
* Define a method for each of the depth first traversals:
  * pre order
  * in order
  * post order
  _Each depth first traversal method should return an array of values, ordered appropriately._

* Binary Search Tree: Create a Binary Search Tree class
  * This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
  * Add:  Arguments: value; Return: nothing
* Adds a new node with that value in the correct location in the binary search tree.
Contains
Argument: value
Returns: boolean indicating whether or not the value is in the tree at least once.

## Whiteboard Process
<!-- Embedded whiteboard image -->

## Approach & Efficiency
Time: O(height);
Space: O(1);

## Solution
* run the code: node index.js
* run the tests: npm test

## Notes
The height of the tree dictates the Big O Space complexity of a recursive tree solution (the max height of things on the stack at any given time);
[BST Values Rules Graphic by Vida](/javascript/trees/binaryTreeAndBST/BSTRules.jpg)