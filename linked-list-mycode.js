class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

// Traverse through linked list

function printLinkedList(head) {
    let current = head;
    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
    return;
}

printLinkedList(a);

// Same as above but coded recursively

function printLinkedList(head) {
    let current = head;
    if (current === null) {
        return;
    }
    console.log(current.val);
    printLinkedList(current.next);
}

printLinkedList(a);

// Add values of linked list to empty array in same order as linked list 

function addLinkedListToArray(head) {
    const values = [];
    let current = head;
    while (current != null) {
        values.push(current.val);
        current = current.next;
    }
    return values;
}

console.log(addLinkedListToArray(a));

// Same as immediately above except coded recursively

const values = [];

function addLinkedListToArray(head) {
	let current = head;
    if (current === null) {
        return;
    }
    values.push(current.val);
    addLinkedListToArray(current.next);
    return values;
}

console.log(addLinkedListToArray(a));
