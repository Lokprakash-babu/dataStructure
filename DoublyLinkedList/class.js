
class DoublyLinkedList{

    //static #tail=null;
    constructor(value,tail){
        this.val = value;
        this.next = null;
        this.prev = null;
        if(tail == null)this.tail = this;
        else this.tail =tail;
    }
    
    //O(1)
    push_front(val){
        let new_node = new DoublyLinkedList(val,this.tail);
        let t = this;
        new_node.next = t;
        t.prev = new_node;
        return new_node;
    }
    //O(1)
    push_back(val){
        let new_node = new DoublyLinkedList(val);
        let t = this.tail;
        t.next = new_node;
        this.tail = new_node;
        new_node.prev = t;

    }

    pop_front(){
        let t = this;
        if(t==null){
            console.error(" The list is already empty ");
        }
        if(t.next==null){
            // the linked list became empty
            this.tail=null;
            return null;
        }
        else{
            // the tail will not change
           let new_head = t.next;
           new_head.prev=null;
           return new_head;
        }
    }

    pop_back(){
        let t = this;
        if(t==null){
            console.error(" The list is already empty ");
        }
        if(t.next==null){
            this.tail = null;
            return null;
        }
        else{
            // the head will not change
            let new_tail = this.tail.prev;
            new_tail.next=null;
            this.tail = new_tail;
        }
    }

    print(){
        let t = this;
        while(t){
            console.log(t.val);
            t=t.next;
        }
    }
    print_reverse(){
        let t = this.tail;
        while(t){
            console.log(t.val);
            t=t.prev;
        }
    }
}

// let head = new DoublyLinkedList(1);

// head.push_back(1);
// head.push_back(2);
// head.push_back(3);
// head.push_back(4);

// head.print();
// console.log(" printing the reverse ");
// head.print_reverse();

// head.pop_back();
// console.log("printing the reverse again");
// head.print_reverse();
