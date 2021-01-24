


function BinaryTree(value) {
    var _this = this;


    this.addLeft = function (node) {
        if (node instanceof BinaryTree) {
            _this.left = node;
        } else {
            throw 'Data type mismatch';
        }
    };

    this.addRight = function (node) {
        if (node instanceof BinaryTree) {
            _this.right = node;
        } else {
            throw 'Data type mismatch';
        }
    };

    this.value = value;
    this.left = null;
    this.right = null;
};

function Stack() {
    var _this2 = this;


    this.pushValue = function (val) {
        _this2.elements.push(val);
        _this2.top = _this2.elements[_this2.elements.length - 1];
    };

    this.popValue = function () {
        var value = _this2.elements.pop();
        if (_this2.elements.length == 0) {
            _this2.top = null;
        } else {
            _this2.top = _this2.elements[_this2.elements.length - 1];
        }
        return value;
    };

    this.getTop = function () {
        return _this2.top;
    };

    this.getLength = function () {
        return _this2.elements.length;
    };

    this.elements = [];
    this.top = null;
};

function Queue() {
    var _this3 = this;



    this.pushValue = function (value) {
        _this3.elements.push(value);
    };

    this.popValue = function () {
        var value = _this3.elements[0];
        _this3.elements.shift();
        return value;
    };

    this.getTop = function () {
        return _this3.elements[0];
    };

    this.getLength = function () {
        return _this3.elements.length;
    };

    this.elements = [];
    this.top = null;
};

function LinkedList(value) {
    var _this4 = this;

    

    this.addNext = function (node) {
        if (node instanceof LinkedList) {
            _this4.next = node;
        } else {
            throw "Data type mismatch";
        }
    };

    this.value = value;
};



function Heap() {
    var _this = this;
    this.addElement = function (value) {
        _this.elements.push(value);
        heapify(_this.elements, false);
    };

    this.removeElement = function () {
        if (_this.elements.length === 1) {
            return -1;
        }
        var value = _this.elements[1];
        heapify(_this.elements, true);
        return value;
    };

    this.size = function () {
        return _this.elements.length - 1;
    };

    this.elements = [0];
};

function heapify(elements, isDeleted){
    if(isDeleted){
        let val=elements[elements.length-1];
        elements[elements.length-1]=elements[1];
        elements[1]=val;
        elements.pop();
        modifyHeap(elements, 1);
    }
    else{
        constructHeap(elements, elements.length-1);
    }
}

function constructHeap(elements, index){
    let parent=Math.floor(index/2);
    if(elements[parent]<elements[index] && parent!=0){
        let val=elements[parent];
        elements[parent]=elements[index];
        elements[index]=val;
        constructHeap(elements, parent);
    }
    else{
        return;
    }
}

function modifyHeap(elements, index){

    let left=2*index;
    let right=2*index+1;

    if(left<elements.length){
        if(right<elements.length){
            if(elements[left]>=elements[index] && elements[right]<=elements[left]){
                swap(elements, left, index);
                modifyHeap(elements, left);
            }
            else if( elements[right]>=elements[index] && elements[left]<=elements[right]){
                swap(elements, right, index);
                modifyHeap(elements, right);
            }
        }
        else{
            if(elements[left]>elements[index]){
                swap(elements, left, index);
                modifyHeap(elements, left);
            }
        }
    }
}

function swap(elements, i, j){
    let val=elements[i];
    elements[i]=elements[j];
    elements[j]=val;
}


module.exports={
    BinaryTree: BinaryTree,
    Stack: Stack,
    Queue: Queue,
    LinkedList: LinkedList,
    Heap:Heap
};