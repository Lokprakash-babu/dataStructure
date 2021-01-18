function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export class BinaryTree {
  constructor(value) {
    _defineProperty(this, "addLeft", node => {
      if (node instanceof BinaryTree) {
        this.left = node;
      } else {
        throw 'Data type mismatch';
      }
    });

    _defineProperty(this, "addRight", node => {
      if (node instanceof BinaryTree) {
        this.right = node;
      } else {
        throw 'Data type mismatch';
      }
    });

    this.value = value;
    this.left = null;
    this.right = null;
  }

}
export class Stack {
  constructor() {
    _defineProperty(this, "pushValue", val => {
      this.elements.push(val);
      this.top = this.elements[this.elements.length - 1];
    });

    _defineProperty(this, "popValue", () => {
      let value = this.elements.pop();

      if (this.elements.length == 0) {
        this.top = null;
      } else {
        this.top = this.elements[this.elements.length - 1];
      }

      return value;
    });

    _defineProperty(this, "getTop", () => {
      return this.top;
    });

    _defineProperty(this, "getLength", () => {
      return this.elements.length;
    });

    this.elements = [];
    this.top = null;
  }

}
export class Queue {
  constructor() {
    _defineProperty(this, "pushValue", value => {
      this.elements.push(value);
    });

    _defineProperty(this, "popValue", () => {
      let value = this.elements[0];
      this.elements.shift();
      return value;
    });

    _defineProperty(this, "getTop", () => {
      return this.elements[0];
    });

    _defineProperty(this, "getLength", () => {
      return this.elements.length;
    });

    this.elements = [];
    this.top = null;
  }

}
export class LinkedList {
  constructor(value) {
    _defineProperty(this, "addNext", node => {
      if (node instanceof LinkedList) {
        this.next = node;
      } else {
        throw "Data type mismatch";
      }
    });

    this.value = value;
  }

}