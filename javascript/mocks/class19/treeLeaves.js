function countTree(root) {
  // Base Case
  if (root == null) return 0;

  // isLeaf === Both children are null
  if (root.left == null && root.right == null)
    return 1;
  
  //recursive call
  const left = countTree(root.left);
  const right = countTree(root.right);

  // function logic
  return left + right;
}

function compareTrees(a, b) {
  return countTree(a) === countTree(b);
}

