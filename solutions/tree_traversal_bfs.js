class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function levelOrderTraversal(root) {
  let queue = root !== null ? [root] : [];
  const result = [];

  while (queue.length) {
    let nodeLayer = [];
    let numbers = [];

    queue.forEach(node => {
      numbers.push(node.value);
      
      if (node.left) {
        nodeLayer.push(node.left);
      }

      if (node.right) {
        nodeLayer.push(node.right);
      }
    });

    result.push(numbers);
    queue = nodeLayer;
  }

  return result;
}

if (require.main === module) {
  let root = new Node(1, new Node(2), new Node(3));
  // add your own tests in here
  console.log("Expecting: [[1], [2, 3]]");
  console.log(levelOrderTraversal(root));

  console.log("");

  root = new Node(10, new Node(20, new Node(9), new Node(22)), new Node(30));

  console.log("Expecting: [[10], [20, 30], [9, 22]]");
  console.log(levelOrderTraversal(root));

  console.log("");

  root = null;

  console.log("Expecting: []");
  console.log(levelOrderTraversal(root));

  console.log("");

  root = new Node(10);
  
  console.log("Expecting: [[10]]");
  console.log(levelOrderTraversal(root));

  console.log("");

  root = new Node(10, new Node(9, new Node(8, new Node(7, new Node(32)), new Node(6, null, new Node(33))), new Node(12, new Node(11), new Node(40))), new Node(11, new Node(20, new Node(4), new Node(90)), new Node(30, new Node(9), new Node(89, null, new Node(90, null, new Node(34))))));
  
  console.log("Expecting: [[10], [9, 11], [8, 12, 20, 30], [7, 6, 11, 40, 4, 90, 9, 89], [32, 33, 90], [34]]");
  console.log(levelOrderTraversal(root));

  console.log("");

  root = new Node(10, null, new Node(11, null, new Node(12, null, new Node(12))));
  
  console.log("Expecting: [[10], [11], [12], [12]]");
  console.log(levelOrderTraversal(root));
}

module.exports = levelOrderTraversal;

// Please add your pseudocode to this file
// And a written explanation of your solution
