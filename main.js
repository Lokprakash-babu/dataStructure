import * as ds from './structures.mjs';

let linkedListNode=new ds.LinkedList(1);  //this will create a node with value of 1 and the next pointer with value of null by default

let linkedListNode2=new ds.LinkedList(2);

linkedListNode.addNext(linkedListNode2); //this will change the "next" pointer to point to the linkedListNode2

let node=linkedListNode;

while(node!=null){
    console.log(node.value);
    node=node.next;
}