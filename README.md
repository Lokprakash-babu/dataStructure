# @lokprakash/datastructure

This package helps you in adding data structures like binary tree, stack and many more(in future updates). You can import this package in any JS file and start building complex data structures. Documentation will be released soon. 

Recent update: Added Queue and Linked list. 

Available data structures(As of now): 

Binary tree

Stack

Queue

Linked list

<a href="https://github.com/Lokprakash-babu/dataStructure/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/Lokprakash-babu/dataStructure"></a>  <a href="https://github.com/Lokprakash-babu/dataStructure/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/Lokprakash-babu/dataStructure"></a> 

Official documentation will be released soon . . .

Install the package using NPM ( npm install @lokprakash/datastructures )

Import the package in your JS file

Eg, 

import * as ds from '@lokprakash/datastructures';


//Binary tree

let binaryTreeNode1=new ds.binaryTree(5); //create a node with value of 5. Attributes are value, left, right.
let binaryTreeNode2=new ds.binaryTree(4);
let binaryTreeNode3=new ds.binaryTree(10);

binaryTreeNode1.addLeft(binaryTreeNode2); //This will add a node to the left 
binaryTreeNode1.addRight(binaryTreeNode3); //This will add a node to the right

console.log('value of node 1', binaryTreeNode1.value);
console.log('left node of node 1', binaryTreeNode1.left);
console.log('right node of node 1', binaryTreeNode1.right);


//Stack

let stack=new ds.Stack();

stack.pushValue(1); //this will push value 1 into the stack
stack.pushValue(2);
stack.pushValue(3); 


console.log('top value of stack', stack.getTop());
console.log('Length of the stack', stack.getLength());
console.log('Pop the top value of the stack and return it', stack.popValue());

//Queue

let queue=new ds.Queue();

queue.pushValue(1);
queue.pushValue(2);
queue.pushValue(3); //adds a value into the queue

console.log(queue.popValue()); //pop the first value in the queue and returns it
console.log(queue.getLength()); //get the current length of the queue
console.log(queue.getTop()); //returns the first value of the queue but won't pop it out

//Linked List

let linkedListNode=new ds.LinkedList(1);  //this will create a node with value of 1 and the next pointer with value of null by default

let linkedListNode2=new ds.LinkedList(2);

linkedListNode.addNext(linkedListNode2); //this will change the "next" pointer to point to the linkedListNode2

let node=linkedListNode;

while(node!=null){
    console.log(node.value); //prints the node value
    node=node.next; //increment the node pointer 
}


