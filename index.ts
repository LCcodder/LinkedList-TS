export namespace LinkedList {

    export interface ListNode <TVal extends Exclude<any, undefined | never | null>> {
        value: TVal,
        next: ListNode<TVal> | null
    }

    export interface IList<TVal> {
        getHead(): ListNode<TVal> | null,
        getTail(): ListNode<TVal> | null,
        addToTail(dataset: TVal): void,
        addToHead(dataset: TVal): void,
        toArray(callback?: (array: Array<TVal>) => void): Array<TVal>,
        replace(oldValue: TVal, newValue: TVal, instancesCount?: number, callback?: (replacedNode: ListNode<TVal>) => void ): number,
        remove(value: TVal, instancesCount?: number, callback?: (removedNode: ListNode<TVal>) => void ): number
    }

    export class List<TVal> implements IList<TVal> {
        private _head: ListNode<TVal> | null
        private _tail: ListNode<TVal> | null

        constructor (head?: ListNode<TVal> | null) {
            !head ? this._head = null : this._head = head
            this._tail = null
        }

        public getHead() {
            return this._head
        }

        public getTail() {
            return this._tail
        }

        public addToTail(dataset: TVal): void {
            const node: ListNode<TVal> = {value: dataset, next: null} as const
            if (this._tail) this._tail.next = node
            if (!this._head) this._head = node
            this._tail = node
        }

        public addToHead(dataset: TVal): void {
            const node: ListNode<TVal> = {value: dataset, next: this._head} as const
            this._head = node
            if (!this._tail) this._tail = node
        }

        public toArray(callback?: (array: Array<TVal>) => void): Array<TVal>{

            let array: Array<TVal> = []
            if (!this._head) return array

            // O(n) alg. difficulty
            let currentNode = this._head
            let isEnded = false
            while (!isEnded) {
                if (!currentNode.next) {
                    array.push(currentNode.value)
                    isEnded = true
                    continue
                }
                array.push(currentNode.value)
                currentNode = currentNode.next
            }

            if (callback) callback(array)
            return array
        }

        public replace(oldValue: TVal, newValue: TVal, instancesCount?: number, callback?: (replacedNode: ListNode<TVal>) => void ): number {
            if (this._head == null) return 0
            if (!instancesCount) instancesCount = 1
            let completedInstances = 0

            let currentNode = this._head
            let isEnded = false

            // O(n) alg. difficulty
            while (!isEnded) {
                if (completedInstances === instancesCount) return completedInstances
                if (currentNode.value === oldValue) {
                    currentNode.value = newValue
                    if (callback) callback(currentNode)
                    completedInstances++
                }
                if (!currentNode.next) {
                    isEnded = true
                    continue
                }
                currentNode = currentNode.next
            }

            return completedInstances
        }
        
        public remove(value: TVal, instancesCount?: number, callback?: (removedNode: ListNode<TVal>) => void ): number {
            if (this._head == null) return 0
            if (!instancesCount) instancesCount = 1

            let completedInstances = 0

            let currentNode = this._head
            let isEnded = false

            // O(n) alg. difficulty
            while (!isEnded) {
                if (completedInstances === instancesCount) return completedInstances
                if (currentNode.next && currentNode.next.value === value) {
                    currentNode.next = currentNode.next.next
                    if (callback) callback(currentNode)
                    completedInstances++
                    continue
                }
                if (!currentNode.next) {
                    isEnded = true
                    continue
                }
                currentNode = currentNode.next
            }
            if (this._tail?.value === value) this._tail = currentNode
            
            return completedInstances
        }

    }
    


}