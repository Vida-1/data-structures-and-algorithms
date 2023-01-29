// Attribution: this tree code was shared by Sara
const tree = new BinaryTree(new Node(1, new Node(7, new Node(2), new Node(6, new Node(3), new Node(11))), new Node(9, undefined, new Node(9, new Node(5)))));

// Attribution: this tree code was shared by Gaz
let gazTree = new BinaryTree();
gazTree.root = new Node(5);
gazTree.root.left = new Node(3);
gazTree.root.right = new Node(7);
gazTree.root.left.left = new Node(2);
gazTree.root.left.right = new Node(4);
gazTree.root.right.left = new Node(6);
gazTree.root.right.right = new Node(8);
gazTree.preOrder(gazTree.root);
console.log(gazTree);

