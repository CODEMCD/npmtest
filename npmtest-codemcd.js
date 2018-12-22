// (function () {
//     var q = function () {
        
//     };

//     exports = module.exports = q;

//     var enq = _enqueue(dataStore, element) {
//         dataStore.push(element);
//     };
//     q.enqueue = function(dataStore, element) {
//         _enqueue(dataStore, element);
//     };
// }());

exports = module.exports = q;
var q = function() {
    this.dataStore = [];
    this.enqueue = _enqueue;
    this.dequeue = _dequeue;
    this.front = _front;
    this.back = _back;
    this.toString = _toString;
    this.empty = _empty;
    this.size = _size;
}

function _enqueue(element) {
    this.dataStore.push(element);
}

q.enqueue = function(element) {
    _enqueue(element);
}

function _dequeue() {
    return this.dataStore.shift();
}

q.dequeue = function() {
    return _dequeue();
}

function _front() {
    return this.dataStore[0];
}

q.front = function() {
    return _front();
}

function _back() {
    return this.dataStore[this.dataStore.length-1];
}

q.back = function() {
    return _back();
}

function _toString() {
    var retStr = "";
    for(var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }

    return retStr;
}

q.toString = function() {
    return _toString();
}

function _empty() {
    if(this.dataStroe.length == 0) {
        return true;
    }
    else{
        return false;
    }
}

q.empty = function() {
    return _empty();
}

function _size() {
    return this.dataStore.length;
}

q.size = function() {
    return _size();
}