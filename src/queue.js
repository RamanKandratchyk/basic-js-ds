const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.list = null;
  }

  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
    let node = new ListNode(value);

    if (this.list === null) {
      this.list = node;
      return this.list;
    };

    this.current = this.list;
    do {
      if (this.current.next === null) {
        this.current.next = node;
        break;
      } else {
        this.current = this.current.next;
      };
    } while (true);

    return this.list;
  }

  dequeue() {
    if (this.list === null) return this.list;

    if (this.list.next === null) {
      this.head = this.list.value;
      this.list = null;
      return this.head;
    };

    this.head = this.list.value;
    this.list = this.list.next;

    return this.head;
  }
}

module.exports = {
  Queue
};
