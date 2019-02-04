var customSortString = function(S, T) {
    let result = [];
    let storage = {};
    for (let i = 0; i < S.length; i++) {
        storage[S[i]] = i + 1;
        result[i] = '';
    }
    for (let j = 0; j < T.length; j++) {
        if (storage[T[j]]) {
            result[storage[T[j]] - 1] += T[j]
        } else {
            result.push(T[j]);
        }
    }
    return result.join('');
};