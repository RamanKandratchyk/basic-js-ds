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

    // if (this.list === null) return false;

    // this.current = this.list;
    // do {
    //   if (this.current.data === data) return true;

    //   if (data < this.current.data) {
    //     if (this.current.left === null) {
    //       return false;
    //     } else {
    //       this.current = this.current.left;
    //     };
    //   };

    //   if (this.current.data < data) {
    //     if (this.current.right === null) {
    //       return false;
    //     } else {
    //       this.current = this.current.right;
    //     };
    //   };
    // } while (true);
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
    this.currentLeft = false;
    this.currentRight = false;
    if (this.list === null) return false;

    if (this.list.data === data) {
      if (this.list.left === null && this.list.right === null) this.list = null;
      if (this.list.left === null && this.list.right !== null) this.list = this.list.right;
      if (this.list.left !== null && this.list.right === null) this.list = this.list.left;
      if (this.list.left !== null && this.list.right !== null) {
        this.det = this.list.right.left;

        if (this.det === null) {
          this.list.right.left = this.list.left;
          this.list = this.list.right;
          // return this.list;
        };

        if (this.det !== null) {
          if (this.det.left === null) {
            this.list.right.left = this.list.right.left.right;
            let node = new Node(this.det.data);
            node.left = this.list.left;
            node.right = this.list.right;
            this.list = node;
          };

          if (this.det.left !== null) {
            do {
              if (this.det.left === null) {
                break;
              } else {
                this.det = this.det.left;
              };
            } while (true);

            let node = new Node(this.det.data);
            node.left = this.list.left;
            node.right = this.list.right;

            this.remove(this.det.data);
            this.list = node;
          };
        };
      };
    };

    this.current = this.list;
    do {
      if (this.current.data === data) break;

      if (data < this.current.data) {
        if (this.current.left && this.current.left.data === data) {
          this.delNode = this.current.left;
          this.currentLeft = true;
          break;
        };

        if (this.current.left === null) {
          // break;
          return false;
        } else {
          this.current = this.current.left;
        };
      };

      if (this.current.data < data) {
        if (this.current.right && this.current.right.data === data) {
          this.delNode = this.current.right;
          this.currentRight = true;
          break;
        };

        if (this.current.right === null) {
          // break;
          return false;
        } else {
          this.current = this.current.right;
        };
      };
    } while (true);


    // if (this.currentLeft && this.current.left.left === null && this.current.left.right === null) this.current.left = null;
    // if (this.currentRight && this.current.right.left === null && this.current.right.right === null) this.current.right = null;

    // if (this.currentLeft && this.current.left.left && this.current.left.right === null) this.current.left = this.current.left.left;
    // if (this.currentLeft && this.current.left.left === null && this.current.left.right) this.current.left = this.current.left.right;

    // if (this.currentRight && this.current.right.left && this.current.right.right === null) this.current.right = this.current.right.left;
    // if (this.currentRight && this.current.right.left === null && this.current.right.right) this.current.right = this.current.right.right;

    if (this.currentLeft && this.delNode.left === null && this.delNode.right === null) this.current.left = null;
    if (this.currentRight && this.delNode.left === null && this.delNode.right === null) this.current.right = null;

    if (this.currentLeft && this.delNode.left && this.delNode.right === null) this.current.left = this.delNode.left;
    if (this.currentLeft && this.delNode.left === null && this.delNode.right) this.current.left = this.delNode.right;

    if (this.currentRight && this.delNode.left && this.delNode.right === null) this.current.right = this.delNode.left;
    if (this.currentRight && this.delNode.left === null && this.delNode.right) this.current.right = this.delNode.right;


    if (this.delNode.left && this.delNode.right && this.delNode.right.left === null) {
      if (this.currentLeft) {
        this.current.left = this.delNode.right;
        this.current.left.left = this.delNode.left;
      }

      if (this.currentRight) {
        this.current.right = this.delNode.right;
        this.current.right.left = this.delNode.left;
      }
    };


    if (this.delNode.left && this.delNode.right && this.delNode.right.left !== null) {
      this.curNode = this.delNode.right.left;

      if (this.curNode.left === null) {
        if (this.currentLeft) {
          // this.current.left = this.curNode;
          // this.current.left.left = this.delNode.left;
          // this.current.left.right = this.delNode.right;
          // this.curNode = null;
        };

        if (this.currentRight) {
          // this.current.right = this.curNode;
          // this.current.right.left = this.delNode.left;
          // this.current.right.right = this.delNode.right;
          // this.curNode = null;
        };
      } //else {
      //   do {
      //     if (this.curNode.left.left === null) {
      //       break;
      //     } else {
      //       this.curNode = this.curNode.left;
      //     };
      //   } while (true);

      //   if (this.currentLeft) {
      //     this.current.left = this.curNode.left;
      //     this.current.left.left = this.delNode.left;
      //     this.current.left.right = this.delNode.right;
      //     this.curNode.left = null;
      //   };

      //   if (this.currentRight) {
      //     this.current.right = this.curNode.left;
      //     this.current.right.left = this.delNode.left;
      //     this.current.right.right = this.delNode.right;
      //     this.curNode.left = null;
      //   };
      // };
    };

    return this.list;
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