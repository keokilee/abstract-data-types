var Node = require('./Node');
module.exports = LinkedList;

/**
 * A collection of Node objects.
 * @property {Node} head – The first Node object, defaults to `null`.
 * @property {Number} length - The length of the LinkedList, defaults to 0.
 */
function LinkedList () {
  this.head = null;
  this.length = 0;
}

/**
 * Appends the Node object to the end of the linked list.
 * @param  {[type]} node [description]
 * @throws {TypeError} – Should only accept other Node objects.
 * @return {[type]}      [description]
 */
LinkedList.prototype.add = function (node) {
  if (!(node instanceof Node)) {
    throw new Error();
  }

  if (this.head) {
    var current = this.head.getNext();
    var prev = this.head;
    while (current) {
      prev = current;
      current = prev.getNext();
    }

    prev.setNext(node);
  }
  else {
    this.head = node;
  }

  this.length++;
  return this;
};

/**
 * Returns the n-th Node at the provided index.
 * @param  {Number} index – The index of the Node object.
 * @return {Node}       The Node object.
 */
LinkedList.prototype.get = function (index) {
  var current = this.head;

  while (index > 0) {
    current = current.getNext();
    index--;
  }

  return current;
};

/**
 * Removes the n-th Node at the provided index.
 * @param  {Number} index – The index of the Node object.
 */
LinkedList.prototype.remove = function (index) {
  var prev = this.head;

  // Handle case where we are chopping off the head.
  if (index === 0) {
    this.head = this.head.getNext();
  }
  else {
    var current = this.head.getNext();
    // Decrement this as it is one iteration setting the current.
    index--;

    while (index > 0) {
      prev = current;
      current = current.getNext();
      index--;
    }

    var next = current ? current.getNext() : null;
    prev.setNext(next);
  }

  this.length--;
  return prev;
};
