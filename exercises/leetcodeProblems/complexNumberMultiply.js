var complexNumberMultiply = function(a, b) {
    let parts = [a.split('+'), b.split('+')];
    parts[0][1] = parts[0][1].substring(0, parts[0][1].length - 1);
    parts[1][1] = parts[1][1].substring(0, parts[1][1].length - 1);
    let result = [];
    result.push(((Number(parts[0][0]) * Number(parts[1][0])) + ((Number(parts[0][1]) * Number(parts[1][1])) * -1)).toString());
    result.push(((Number(parts[0][0]) * Number(parts[1][1])) + (Number(parts[0][1]) * Number(parts[1][0]))).toString() + 'i');
    return result.join('+')
};