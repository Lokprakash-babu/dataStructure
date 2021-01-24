# @lokprakash/datastructure

This package helps you in adding data structures like binary tree, stack and many more(in future updates). You can import this package in any JS file and start building complex data structures. Documentation will be released soon. 

Recent update: Added Queue and Linked list. 

Available data structures(As of now): 

Binary tree

Stack

Queue

Linked list

Heap (Max Heap)

<a href="https://github.com/Lokprakash-babu/dataStructure/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/Lokprakash-babu/dataStructure"></a>  <a href="https://github.com/Lokprakash-babu/dataStructure/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/Lokprakash-babu/dataStructure"></a> 

Official documentation will be released soon . . .

Install the package using NPM ( npm install @lokprakash/datastructures )

Import the package in your JS file

Eg, 

import * as ds from '@lokprakash/datastructure';


//Binary tree

//create a node with value of 5. Attributes are value, left, right.
let binaryTreeNode1=new ds.BinaryTree(5); 
let binaryTreeNode2=new ds.BinaryTree(4);
let binaryTreeNode3=new ds.BinaryTree(10);

//This will add a node to the left 
binaryTreeNode1.addLeft(binaryTreeNode2); 

//This will add a node to the right
binaryTreeNode1.addRight(binaryTreeNode3); 

console.log('value of node 1', binaryTreeNode1.value);
console.log('left node of node 1', binaryTreeNode1.left);
console.log('right node of node 1', binaryTreeNode1.right);


//Stack

let stack=new ds.Stack();

//this will push value 1 into the stack
stack.pushValue(1); 
stack.pushValue(2);
stack.pushValue(3); 


console.log('top value of stack', stack.getTop());
console.log('Length of the stack', stack.getLength());
console.log('Pop the top value of the stack and return it', stack.popValue());

//Queue

let queue=new ds.Queue();

//adds a value into the queue

queue.pushValue(1);
queue.pushValue(2);
queue.pushValue(3); 

//pop the first value in the queue and returns it
console.log(queue.popValue()); 

//get the current length of the queue
console.log(queue.getLength()); 

//returns the first value of the queue but won't pop it out
console.log(queue.getTop()); 

//Linked List

//this will create a node with value of 1 and the next pointer with value of null by default
let linkedListNode=new ds.LinkedList(1);  

let linkedListNode2=new ds.LinkedList(2);

//this will change the "next" pointer to point to the linkedListNode2
linkedListNode.addNext(linkedListNode2); 

let node=linkedListNode;

while(node!=null){
    //prints the node value
    console.log(node.value); 

    //increment the node pointer
    node=node.next;  
}


//Max heap

let heap=new ds.Heap();


//Insert 10 to the heap;
heap.addElement(10); 

//Insert 20 to the heap;
heap.addElement(20);

//get the root value of the heap
let val=heap.removeElement();

//get the size of the heap
console.log('heap size', heap.size());