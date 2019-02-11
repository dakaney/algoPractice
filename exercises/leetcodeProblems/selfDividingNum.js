var selfDividingNumbers = function(left, right) {
    let result = [];
    for (let i = left; i <= right; i++) {
        if (isDivisible(i)) result.push(i);
    }
    return result;
};

let isDivisible = (num) => {
    let str = num.toString();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') return false;
        if (num % Number(str[i]) !== 0) return false;
    }
    return true;
}