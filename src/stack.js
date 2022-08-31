const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.arr = [];
  }

  push(element) {
    this.arr.push(element);
    return Stack;
  }

  pop() {
    this.head = this.arr[this.arr.length - 1];
    this.arr.pop();
    return this.head;
  }

  peek() {
    this.head = this.arr[this.arr.length - 1];
    return this.head;
  }
}

module.exports = {
  Stack
};
