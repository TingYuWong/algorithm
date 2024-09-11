class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }
    traverse() {
        if(!this.head) return this
        let curr = this.head
        while(curr) {
            console.log(curr.val)
            curr = curr.next
        }
    }
    push(val) {
        const node = new Node(val)

        if(this.length === 0) {
            this.head = this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }

        this.length++
        return this
    }
    pop() {
        if(this.length === 0) return undefined
        if(this.length === 1) {
            const popped = this.head
            this.head = this.tail = null
            this.length--
            return popped
        }

        // fast & slow pointer
        let slow = this.head
        let fast = slow.next

        while(fast.next) {
            slow = slow.next
            fast = fast.next
        }

        const popped = slow.next
        slow.next = null
        this.tail = slow
        this.length--

        return popped
    }
    shift() { // O(1) -> In array, shift is a O(n) operation.
        if(this.length === 0) return undefined
        if(this.length === 1) {
            const popped = this.head
            this.head = this.tail = null
            return popped
        }

        const popped = this.head
        this.head = this.head.next
        this.length--
        return popped
    }
    unshift(val) { // O(1) -> In array, shift is a O(n) operation.
        const node = new Node(val)
        if(this.length === 0) {
            this.head = this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }

        this.length++
        return this
    }
    get(idx) {
        if(idx < 0 || idx > this.length - 1) return null
        if(idx === this.length - 1) return this.tail

        let curr = this.head
        for(let i = 0; i < idx; i++) {
            curr = curr.next
        }

        return curr
    }
    set(idx, val) {
        if(idx < 0 || idx > this.length - 1) return false

        const node = this.get(idx)
        node.val = val
        return true
    }
    insert(idx, val) {
        if(idx < 0 || idx > this.length) return false
        if(idx === 0) return Boolean(this.unshift(val))
        if(idx === this.length) return Boolean(this.push(val))

        const newNode = new Node(val)
        const changedNode = this.get(idx - 1)

        newNode.next = changedNode.next
        changedNode.next = newNode
        this.length++

        return true
    }
    remove(idx) {
        if(idx < 0 || idx > this.length - 1) return undefined
        if(idx === 0) return this.shift()
        if(idx === this.length - 1) return this.pop()

        const prev = this.get(idx - 1)
        const curr = prev.next
        prev.next = curr.next
        curr.next = null

        this.length--
        return curr
    }
    reverse() {
        if(this.length === 0) return this

        let prev = null
        let curr = this.head

        // this.head = this.tail
        // this.tail = curr

        while(curr) {
            let next = curr.next
            let tempCurr = curr
            tempCurr.next = prev
            prev = curr
            curr = next
        }

        return prev
        // return this
    }
}

const single = new SinglyLinkedList()
single.push(2)
single.unshift(1)
single.push(3)
single.push(4)
single.push(5)
single.push(6)
single.push(7)