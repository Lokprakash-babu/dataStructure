
export class BinaryTree{

    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
    addLeft=(node)=>{
        if(node instanceof BinaryTree){
            this.left=node;
        }
        else{
            throw 'Data type mismatch'
        }
    }
    addRight=(node)=>{
        if(node instanceof BinaryTree){
            this.right=node;
        }
        else{
            throw 'Data type mismatch'
        }
    }
}

export class Stack{
    constructor(){
        this.elements=[];
        this.top=null;
    }

    pushValue=(val)=>{
        this.elements.push(val);
        this.top=this.elements[this.elements.length-1];
    }

    popValue=()=>{
        let value = this.elements.pop();
        if(this.elements.length==0){
            this.top=null;
        }
        else{
            this.top=this.elements[this.elements.length-1];
        }
        return value;
    }

    getTop=()=>{
        return this.top;
    }

    getLength=()=>{
        return this.elements.length;
    }
}

export class Queue{
    constructor(){
        this.elements=[];
        this.top=null;
    }

    pushValue=(value)=>{
        this.elements.push(value);
    }

    popValue=()=>{
        let value=this.elements[0];
        this.elements.shift();
        return value;
    }

    getTop=()=>{
        return this.elements[0];
    }

    getLength=()=>{
        return this.elements.length;
    }
}

export class LinkedList{
    constructor(value){
        this.value=value;
        
    }



    addNext=(node)=>{
        if(node instanceof LinkedList){
            this.next=node;
        }
        else{
            throw "Data type mismatch";
        }
    }
}

