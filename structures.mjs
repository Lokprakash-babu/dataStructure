
export class binaryTree{

    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }

    addLeft=(node)=>{
        if(node instanceof BST){
            this.left=node;
        }
        else{
            throw 'Data type mismatch'
        }

    }

    addRight=(node)=>{
        if(node instanceof BST){
            this.right=node;
        }
        else{
            throw 'Data type mismatch'
        }
    }
}

export class stack{
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

