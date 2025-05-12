class Node {
  constructor(value) {
    this.value = value || null;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  size() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.nextNode;
    }
    return temp;
  }

  pop() {
    let temp = this.head;
    let pre = null;

    while (temp.nextNode != null) {
      pre = temp;
      temp = temp.nextNode;
    }
    pre.nextNode = null;
    this.tail = pre;
    this.length--;
  }

  contains(value) {
    let temp = this.head;

    while (temp != null) {
      if (temp.value === value) return true;
      temp = temp.nextNode;
    }

    return false;
  }

  find(value) {
    let temp = this.head;
    let index = 0;

    while (temp != null) {
      if (temp.value === value) return index;
      temp = temp.nextNode;
      index++;
    }
    return null;
  }
}
