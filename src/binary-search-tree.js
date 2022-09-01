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
    this.current = this.find(data);
    if (this.current === null) return false;

    // implement 3 cases here

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