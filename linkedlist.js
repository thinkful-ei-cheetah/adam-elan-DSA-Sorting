'use strict';
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  } 
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    // Create a new _Node and point the head to the new node
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if(this.head == null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    // We start at the head
    let currNode = this.head;
    if(!this.head) return null;

    while(currNode.value !== item) {
      if (currNode.next === null) return null;
      else currNode = currNode.next;
    }
    return currNode;
  }
  
  remove(item) {
    if(!this.head) return null;
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    // Keep track of the previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode = currNode.next;
  }
}

module.exports = LinkedList;