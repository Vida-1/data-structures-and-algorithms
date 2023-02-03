# Challenge Summary
Write the following method for the Binary Tree class:
    * find max value
        * Args: none
        * Returns: number
Find the max value stored in the tree. Assume the stored values
to be numeric.

Input: BinaryTree
Output: Integer

## Whiteboard Process
[WhiteboardDraft1](/cchall16Whiteboard1stDraft.jpg)

## Approach & Efficiency
Space: O(4)
Time: Not sure yet, will revisit this

## Solution
right now my solution involves working from the bottom of the tree upwards comparing each node and children to it's parents on up to root, retaining the largest value found on root.right branch and on the root.left branch and then ulimately comparing the two and returning the largest of the final comparison.