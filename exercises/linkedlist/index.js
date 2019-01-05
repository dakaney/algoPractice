// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }
    size() {
        let count = 0;
        let cur = this.head;
        while(cur) {
            count += 1;
            cur = cur.next;
        }
        return count;
    }
    getFirst() {
        return this.head;
    }
    getLast() {
        let cur = this.head;
        while (cur) {
            if (!cur.next) return cur;
            cur = cur.next;
        }
    }
    clear() {
        this.head = null;
    }
    removeFirst() {
        this.head = this.head.next;
    }
    removeLast() {
        if (this.size() <= 1) {
            this.head = null;
            return;
        }
        let prev = null;
        let cur = this.head;
        while(cur){
            if (!cur.next) prev.next = null;
            prev = cur;
            cur = cur.next;
        }
    }
    insertLast(value) {
        const node = new Node(value);
        let lastNode = this.getLast();
        if (!lastNode) {
            this.head = node;
        } else {
            lastNode.next = node;
        }
    }
    getAt(n) {
        let cur = this.head;
        while (cur) {
            if (n === 0) {
                return cur;
            }
            n--;
            cur = cur.next;
        }
        return null;
    }
    removeAt(n) {
        if (n === 0) {
            this.head = this.head? this.head.next : null;
        }
        let prev = this.getAt(n-1);
        if (prev) {
            prev.next = prev.next ? prev.next.next : null;
        }
        return null;
    }
    insertAt(value, n) {
        const node = new Node(value);
        if (n === 0) {
            node.next = this.head;
            this.head = node;
        }
        let prev = this.getAt(n-1);
        if (!prev) {
            let last = this.getLast();
            last.next = node;
        } else {
            node.next = prev.next;
            prev.next = node;
        }
    }
    forEach(fn) {
        let cur = this.head;
        while(cur) {
            fn(cur);
            cur = cur.next;
        }
    }
    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
          yield node;
          node = node.next;
        }
      }
}

module.exports = { Node, LinkedList };
