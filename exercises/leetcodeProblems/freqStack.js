var FreqStack = function() {
    this.storage = [null, []];
    this.counter = {};
};

/** 
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
    this.counter[x] = this.counter[x] + 1 || 1;
    if (this.storage.length < this.counter[x] + 1) {
        this.storage.push([x]);
    } else {
        this.storage[this.counter[x]].push(x);
    }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    let result = this.storage[this.storage.length - 1].pop();
    this.counter[result]--;
    if (this.storage[this.storage.length - 1].length === 0) {
        this.storage.pop();
    }
    return result;
};