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
/****************************************************************************************** */
// if root is nil: return empty array
// else: initialize a queue with the root
// initialize an empty array to store result
//
// loop until the queue is empty:
//   initialize empty array to hold numbers for current layer
//   initialize empty array to hold nodes for processing on next iteration
//
//   iterate over queue:
//     push node value onto numbers array
//     push each node's left and right nodes onto node array unless null/nil
//
//   set queue to node array
//
// return result
/****************************************************************************************** */

// And a written explanation of your solution
/****************************************************************************************** */
// We can solve this problem by using a queue. Each time we process a node, we puts its left
// and right nodes into the queue for future processing. So starting at the root, we put it
// in the queue. We iterate over the queue: each numerical value is placed in an array, which 
// will be pushed onto the result array (which will be returned) after the iteration. We can
// also push each node's left and right nodes onto another array. This array will then be
// stored as the queue, so it can be processed on the next iteration. This ensures that we 
// process each layer of the tree from left to right, one layer at a time.
/****************************************************************************************** */
