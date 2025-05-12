class Node {
  constructor(value) {
    this.value = value || null;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);

    this.head = newNode;
    this.tail = this.head;
    if (!this.head.value) {
      this.length = 0;
    } else {
      this.length = 1;
    }
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head.value) {
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

    if (!this.head.value) {
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

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
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
}

// let myLinkedList = new LinkedList(7);
// myLinkedList.append(4);
