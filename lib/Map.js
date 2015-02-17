var crypto = require('crypto');
module.exports = Map;

// For advanced students.
var LinkedList = require('./LinkedList');
var Node = require('./Node');

var MAP_CAPACITY = 100;

/**
 * A simple map implementation that uses an array for storage.
 * @property storage – An array where we will store the data.
 */
function Map() {
  this.storage = [];
}

/**
 * Set the value at the provided key.
 * If you're doing the advanced tests, you will probably need a LinkedList.
 * Also, if you're doing the advanced tests, you will probably want to store
 * both the key and the value for the get implementation.
 * @param key – The key for the item we are storing.
 * @param value - The value that we are associating with the key.
 */
Map.prototype.set = function(key, value) {
  var index = this._hashFunction(key);

  if (this.storage[index]) {
    // Need to check if we already have something with this key.
    var current = this.storage[index].head;
    while (current) {
      if (current.value.key === key) {
        current.value.value = value;
        break;
      }

      current = current.getNext();
    }

    // Else, we just add it.
    // This is so inefficient. Should've kept a last pointer.
    this.storage[index].add(new Node({key: key, value: value}));
  }
  else {
    // Create a new linked list here.
    var list = new LinkedList();
    list.add(new Node({key: key, value: value}));
    this.storage[index] = list;
  }
}

/**
 * Get the value at the provided key.
 * If you're doing the advanced tests, you need to find the item matching your
 * key.
 * @param key – The key for the item.
 * @return The value associated with the key or null if it does not exist.
 */
Map.prototype.get = function(key) {
  var index = this._hashFunction(key);
  var list = this.storage[index];

  if (!list) {
    return null;
  }

  var current = list.head;

  while (current) {
    console.log(current);
    if (current.value.key === key) {
      return current.value.value;
    }

    current = current.getNext();
  }

  return null;
}

/**
 * Remove the value at the provided key.
 * If you're doing the advanced tests, you need to find the item matching your
 * key.
 * @param key – The key for the item we are removing.
 * @throws Error if the key does not map to a value.
 * @return The value associated with the key.
 */
Map.prototype.remove = function(key) {

}

/**
 * Helper function for computing an array index with a key.
 * Note, this should not be public, but it's public so I can stub it.
 * @param key - The key for the map
 * @return An array index to be used to insert into an array.
 */
Map.prototype._hashFunction = function(key) {
  // No need to be fancy. This isn't a password
  var shasum = crypto.createHash('md5');
  shasum.update(key.toString());
  return parseInt(shasum.digest('hex'), 16) % MAP_CAPACITY;
}
