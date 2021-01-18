


export function BinaryTree(value) {
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

export function Stack() {
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

export function Queue() {
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

export function LinkedList(value) {
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

