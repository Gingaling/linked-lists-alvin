class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(7);

a.next = b;
b.next = c;
c.next = d;

// Adding the values of the nodes of a linked list

function sumLinkedListValues(head) {
    sum = 0;
    current = head
    while (current !== null) {
        sum += current.val;
        current = current.next;
    }
    return sum;
}

console.log(sumLinkedListValues(a));

// Same as above except coded recursively

function sumLinkedListValues(head) {
    if (head === null) return 0;
    return head.val + sumLinkedListValues(head.next);
}

console.log(sumLinkedListValues(a));

// Returns true or false if given target is a value found in the linked list

function targetInLinkedList(head, target) {
	let current = head;
	while (current !== null) {
		if (current.val === target) {
			return true;
		} else current = current.next;
	}
	return false;
}

console.log(targetInLinkedList(a, 9));

// Same as above except coded recursively

function targetInLinkedList(head, target) {
	if (head === null) return false;
	if (head.val === target) return true;
	return targetInLinkedList(head.next, target);
}

console.log(targetInLinkedList(a, 7));

// Given an index, return the value of the linked list at index (head is at index 0)

function getValueAtIndex(head, index) {
	let current = head;
	let count = 0;
	while (current !== null) {
		if (count === index) return current.val;
        else {
            current = current.next;
            count += 1;
        }
	}
    return null
}

function getValueAtIndex(head, index) {
	let current = head;
	let count = 0;
	while (current !== null) {
		if (count === index) return current.val;
        count += 1;
        current = current.next;
    }
	return null;
}

console.log(getValueAtIndex(a, 2));

// Same as above except coded recursively

function getValueAtIndex(head, index) {
	let count = 0;
	let current = head;
	if (count === index) return current.val;
	getValueAtIndex(head.next, index -1);
}

// Given a linked list, reverse the order of the nodes and return the new head of the linked list (COMMON INTERVIEW PROB)

function reverseLinkedList(head) {
	let prev = null;
	let current = head;
	while (current !== null) {
		const next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}
	return prev.val;
}
console.log(reverseLinkedList(a));

// Same as above except coded recursively

function reverseLinkedList(head, prev = null) {
    if (head === null) return prev.val;
    const next = head.next;
    head.next = prev;
    return reverseLinkedList(next, head);
}

console.log(reverseLinkedList(a));

// Given two linked lists, alternate nodes of each linked list resulting in a single linked list

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(7);

a.next = b;
b.next = c;
c.next = d;

const e = new Node(2);
const f = new Node(8);
const g = new Node(3);
const h = new Node(7);
const i = new Node(2);
const j = new Node(8);
const k = new Node(3);
const l = new Node(7);

e.next = f;
f.next = g;
g.next = h;
h.next = i;
i.next = j;
j.next = k;
k.next = l;

function zipperList(head1, head2) {
    tail = head1;
    let current1 = head1.next;
    let current2 = head2;
    count = 0
    while (current1 !== null && current2 !== null) {
        if (count % 2 === 0) {
            tail.next = current2;
            current2 = current2.next
        }
        else {
            tail.next = current1;
            current1 = head1.next;
        }
        tail = tail.next;
        count += 1;
    }
    if (current1 === null) {
        tail.next = current2;
    }
    else tail.next = current1;
    return head1.val;

}
