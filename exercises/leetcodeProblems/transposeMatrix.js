var transpose = function(A) {
    let result = [];
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[i].length; j++) {
            result[j] = result[j] || [];
            result[j].push(A[i][j]);
        }
    }
    return result;
};