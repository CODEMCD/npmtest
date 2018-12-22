var dataStore = [];
var q = function () {
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.size = size;
}

exports = module.exports = q;

function _enqueue(element) {
    dataStore.push(element);
}

q.enqueue = function (element) {
    _enqueue(element);
}

function _dequeue() {
    return dataStore.shift();
}

q.dequeue = function () {
    return _dequeue();
}

function _front() {
    return dataStore[0];
}

q.front = function () {
    return _front();
}

function _back() {
    return dataStore[dataStore.length - 1];
}

q.back = function () {
    return _back();
}

function _toString() {
    var retStr = "";
    for (var i = 0; i < dataStore.length; ++i) {
        retStr += dataStore[i] + "\n";
    }

    return retStr;
}

q.toString = function () {
    return _toString();
}

function _empty() {
    if (dataStroe.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

q.empty = function () {
    return _empty();
}

function _size() {
    return dataStore.length;
}

q.size = function () {
    return _size();
}