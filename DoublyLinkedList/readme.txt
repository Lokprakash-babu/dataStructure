This is the details of how one canuse the functions of DoublyLinkedList class

class Name : - DoublyLinkedList
Node structure : -     {val , next , prev , tail}

constructor definiation :- The constructor use a tail varaible for mainting the tail of the DoublyLinkedList , when we are Initializing the DoublyLinkedList for the first time , tail will be "null" , and in constructor we will check that is "tail" is null , this means that its the initialization step and make the head and tail both equal beause only one node is present.
  constructor(value,tail){
        this.val = value;
        this.next = null;
        this.prev = null;
        if(tail == null)this.tail = this;
        else this.tail =tail;
    }

Initializing the DoublyLinedList:-
  let head = new DoublyLinkedList(val);
  The above statement creates the head of the linked list.


Menthods of the "DoublyLinkedList" class :-

1) push_front(val) :- 
   a) Defination : The method inserts the new value at the front of the DoublyLinedList and so the head changes but the tail remains the same .

   b) How to use : The syntax of using the push_front(val) method is as follows "head = head.push_front(val , this.tail)".

   c) Time Complexity :- O(1).

2) push_back(val) :-
   a) Defination :- The method inserts the new value at the end of the DoublyLinedList ,tail changes but here head does not changes  .

   b) How to use : The syntax of using the push_back(val) method is as follows "head.push_back(val)".

   c) Time Complexity :- O(1) ,  beacuse we have a pointer at tail.

3) pop_front():-
   a) Defination :- The method removes the node from the front of the DoublyLinkedList .

   b) How to use :- The syntax of using the pop_front() method is as follows "head = head.pop_front()" , beacuse the head changes we have to reassign the head .

   c) Time Complexity :- O(1).

4)  pop_back() :-
    a) Defination :- The method removes the node from the back of the DoublyLinkedList.

    b) How to use :- The syntax of using the pop_back() method is as follows "head.pop_back()".
    
    c)Time Complexity :- O(1).

5)  print():-
    a) Defination :-  For printing the DoublyLinkedList.
    b) How to use :- " head.print() ".
    c) Time Complexity :- O(n).

6)  print_reverse():-
    a) Defination :-  For printing the DoublyLinkedList in reverse.
    b) How to use :- " head.print_reverse() ".
    c) Time Complexity :- O(n).
    