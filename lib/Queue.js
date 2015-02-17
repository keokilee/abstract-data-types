var LinkedList = require('./LinkedList');
var Node = require('./Node');
module.exports = Queue;

function Queue() {}

// TODO: Extend LinkedList
Queue.prototype = new LinkedList();

/**
 * Enqueues the value at the beginning of the queue
 * @param  value The value to add to the queue
 */
Queue.prototype.enqueue = function (value) {
  var node = new Node(value);
  node.setNext(this.head);
  this.head = node;
  this.length++;
};

/**
 * Dequeues the value at the end of the queue
 * @throws {Error} – Thrown when the queue is empty
 * @return The value at the end of the queue
 */
Queue.prototype.dequeue = function () {
  if (this.length === 0) {
    throw new Error('The queue is empty');
  }
  else if (this.length === 1) {
    var value = this.head.value;
    this.head = null;
    this.length = 0;
    return value;
  }

  var prev = this.head;
  var current = this.head.getNext();

  while (current.getNext() !== null) {
    prev = current;
    current = current.getNext();
  }

  prev.setNext(null);
  return current.value;
};
