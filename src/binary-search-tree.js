const { NotImplementedError } = require('../extensions/index.js');

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

    // return !!this.find(data);//!!! verify this

    if (this.list === null) return false;

    this.current = this.list;
    do {
      if (this.current.data === data) return true;

      if (data < this.current.data) {
        if (this.current.left === null) {
          return false;
        } else {
          this.current = this.current.left;
        };
      };

      if (this.current.data < data) {
        if (this.current.right === null) {
          return false;
        } else {
          this.current = this.current.right;
        };
      };
    } while (true);
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

  remove(data) {
    let currentLeft = false, currentRight = false;
    if (this.list === null) return false;

    if (this.list.data === data) {
      if (this.list.left === null && this.list.right === null) this.list = null;
      if (this.list.left === null && this.list.right !== null) this.list = this.list.right;
      if (this.list.left !== null && this.list.right === null) this.list = this.list.left;
    };

    this.current = this.list;

    do {
      if (data < this.current.data) {
        if (this.current.left && this.current.left.data === data) {
          this.delNode = this.current.left;
          currentLeft = true;
          break;
        };

        if (this.current.left === null) {
          return false;
        } else {
          this.current = this.current.left;
        };
      };

      if (this.current.data < data) {
        if (this.current.right && this.current.right.data === data) {
          this.delNode = this.current.right;
          currentRight = true;
          break;
        };

        if (this.current.right === null) {
          return false;
        } else {
          this.current = this.current.right;
        };
      };
    } while (true);

    // if (currentLeft && this.current.left.left === null && this.current.left.right === null) this.current.left = null;
    // if (currentRight && this.current.right.left === null && this.current.right.right === null) this.current.right = null;

    // if (currentLeft && this.current.left.left && this.current.left.right === null) this.current.left = this.current.left.left;
    // if (currentLeft && this.current.left.left === null && this.current.left.right) this.current.left = this.current.left.right;

    // if (currentRight && this.current.right.left && this.current.right.right === null) this.current.right = this.current.right.left;
    // if (currentRight && this.current.right.left === null && this.current.right.right) this.current.right = this.current.right.right;

    if (currentLeft && this.delNode.left === null && this.delNode.right === null) this.current.left = null;
    if (currentRight && this.delNode.left === null && this.delNode.right === null) this.current.right = null;

    if (currentLeft && this.delNode.left && this.delNode.right === null) this.current.left = this.delNode.left;
    if (currentLeft && this.delNode.left === null && this.delNode.right) this.current.left = this.delNode.right;

    if (currentRight && this.delNode.left && this.delNode.right === null) this.current.right = this.delNode.left;
    if (currentRight && this.delNode.left === null && this.delNode.right) this.current.right = this.delNode.right;


    if (this.delNode.right.left === null) {
      if (currentLeft) this.current.left = this.delNode.right;
      if (currentRight) this.current.right = this.delNode.right;
    };


    this.curNode = this.delNode;

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