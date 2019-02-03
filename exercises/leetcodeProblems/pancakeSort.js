var pancakeSort = function(A) {
    let i = A.length - 1;
    let result = [];
    while (i > 0) {
      if (A[i] !== i+1) {
        let max = A.indexOf(i+1) + 1;
        result.push(max, i + 1)
        A = [...A.slice(0, max).reverse(), ...A.slice(max)];
        A = [...A.slice(0, i+1).reverse(), ...A.slice(i + 1)]
      }
      i--;
    }
    return result;
  }