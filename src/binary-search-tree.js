const { NotImplementedError, checkForThrowingErrors } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.list = null;
  }

  root() {
    return this.list === null ? null : this.list;
  }

  add(data) {
    let node = new Node(data);

    if (this.list === null) {
      this.list = node;
      return this.list;
    };

    this.current = this.list;
    do {
      if (this.current.data === data) break;

      if (data < this.current.data) {
        if (this.current.left === null) {
          this.current.left = node;
          break;
        } else {
          this.current = this.current.left;
        };
      };

      if (this.current.data < data) {
        if (this.current.right === null) {
          this.current.right = node;
          break;
        } else {
          this.current = this.current.right;
        };
      };
    } while (true);

    return this.list;
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    if (this.list === null) return null;

    this.current = this.list;
    do {
      if (this.current.data === data) return this.current;

      if (data < this.current.data) {
        if (this.current.left === null) {
          return null;
        } else {
          this.current = this.current.left;
        };
      };

      if (this.current.data < data) {
        if (this.current.right === null) {
          return null;
        } else {
          this.current = this.current.right;
        };
      };
    } while (true);
  }

  minNode(node) {
    if (node.left === null)
      return node;
    else
      return this.minNode(node.left);
  }

  remove(data) {
    this.list = this.removeNode(this.list, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      let newNode = this.minNode(node.right);
      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      return node;
    };
  }

  min() {
    if (this.list === null) return null;

    this.current = this.list;
    do {
      if (this.current.left === null) {
        return this.current.data;
      } else {
        this.current = this.current.left;
      };
    } while (true);
  }

  max() {
    if (this.list === null) return null;

    this.current = this.list;
    do {
      if (this.current.right === null) {
        return this.current.data;
      } else {
        this.current = this.current.right;
      };
    } while (true);
  }
}

module.exports = {
  BinarySearchTree
};