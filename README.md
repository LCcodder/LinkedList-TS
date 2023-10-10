# Static/dynamic typed Linked List realization on TypeScript
### **Simple D/S realization made with TS. Includes only base Linked List methods such as `append`, `prepend`, `to array`, etc**
___
## *Node structure:*
```Typescript
interface ListNode <TVal extends Exclude<any, undefined | never | null>> {
    value: TVal,
    next: ListNode<TVal> | null
}
```
* Generic type completion `TVal` extends `any` type w/o `undefined`, `never` and `null` in order to avoid unrealistic value use cases
##  `IList` *interface:*
```TypeScript
interface IList<TVal> {
    getHead(): ListNode<TVal> | null,
    getTail(): ListNode<TVal> | null,
    addToTail(dataset: TVal): void,
    addToHead(dataset: TVal): void,
    toArray(callback?: (array: Array<TVal>) => void): Array<TVal>,
    replace(oldValue: TVal, newValue: TVal, instancesCount?: number, callback?: (replacedNode: ListNode<TVal>) => void ): number,
    remove(value: TVal, instancesCount?: number, callback?: (removedNode: ListNode<TVal>) => void ): number
}
```

## **Can be used with fixed type of value or each-node-changing type:**
### Dynamic implementation:
```TypeScript
let ll = new LinkedList.List()
ll.addToTail({prop: "str"})
ll.addToTail(10)
ll.addToHead("string")
```
### Static implementation:
```TypeScript
let ll = new LinkedList.List<number>()
ll.addToTail(1)
ll.addToTail(10)
ll.addToHead(100)
```
---
## Dependencies: 
+ `typescript` (save-dev): `^5.2.2`
+ `node`: `v18.17.1`