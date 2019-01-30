var countBits = function(num) {
    let result = [0];
    let i = 1;
    while (i <= num) {
        if (i % 2 === 0) {
            result.push(result[Math.floor(i / 2)])
        } else {
            result.push(result[Math.floor(i / 2)] + 1)
        }
        i++;
    }
    return result;
};