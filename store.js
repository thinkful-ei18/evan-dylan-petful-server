'use strict';

const catData = require('./scratch-data/catdata');
const dogData = require('./scratch-data/dogdata');

class _QueueNode {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    let node = new _QueueNode(value);
    if (this.head === null) {
      this.head = node;
    }
    if (this.tail) {
      node.next = this.tail;
      this.tail.prev = node;
    }
    this.tail = node;
  }

  dequeue() {
    if (this.head === null) return null;
    let returnNode = this.head;
    this.head = returnNode.prev;
    if (returnNode === this.tail) {
      this.tail = null;
    }
    return returnNode.value;
  }
}

let catQueue = new Queue();
catData.forEach(item => {
  catQueue.enqueue(item);
});

let dogQueue = new Queue();
dogData.forEach(item => {
  dogQueue.enqueue(item);
});

const store = {
  catData: catQueue,
  dogData: dogQueue,
  getDog: function() {
    return this.dogQueue.head.value;
  },
  getCat: function() {
    return this.catQueue.head.value;
  },
  deleteDog: function() {
    let temp = this.dogQueue.dequeue();
    this.dogQueue.enqueue(temp);
  },
  deleteCat: function() {
    let temp = this.catQueue.dequeue();
    this.catQueue.enqueue(temp);
  }
};

module.exports = store;