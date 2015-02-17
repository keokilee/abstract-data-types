var LinkedList = require('./LinkedList');
var Node = require('./Node');
module.exports = Stack;

function Stack() {}

// TODO: Extend LinkedList
Stack.prototype = new LinkedList();

/**
 * Pushes the value onto the top of the stack
 * @param  value The value to add to the stack
 */
Stack.prototype.push = function (value) {
        var node = new Node(value);
        node.setNext(this.head);
        this.head = node;
        this.length++;
};

/**
 * Pops the value on top of the stack
 * @throws {Error} – Thrown when the stack is empty
 * @return The value on top of the stack
 */
Stack.prototype.pop = function () {
        if (this.length === 0) {
                throw new Error('The stack is empty');
        }

        var value = this.head.value;
        this.head = this.head.getNext();
        this.length--;
        return value;
};

/**
 * Peek at the value on top of the stack
 * @throws {Error} – Thrown when the stack is empty
 * @return The value on top of the stack
 */
Stack.prototype.peek = function () {
        if (this.length === 0) {
                throw new Error('The stack is empty');
        }

        return this.head.value;
}