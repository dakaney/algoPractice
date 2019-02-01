var spiralMatrixIII = function(R, C, r0, c0) {
    let result = [];
    let count = 2;
    let curCount = 1;
    let horizontal = 1;
    let vertical = 0; 
    let currentPos = [r0, c0];
    while (result.length < R * C) {
        console.log(currentPos, horizontal, vertical, result)
        console.log(currentPos[0] < R, currentPos[1] < C, currentPos[0] >= 0,currentPos[1] >= 0)
        if (currentPos[0] < R && currentPos[1] < C && currentPos[0] >= 0 && currentPos[1] >= 0) {
            result.push(currentPos);
        }
        currentPos = [currentPos[0] + vertical, currentPos[1] + horizontal];
        horizontal = Math.abs(horizontal);
        vertical = Math.abs(vertical);
        if (curCount < count) {
          curCount += 1;
          if (curCount > count / 2) {
            vertical = 1;
            horizontal = 0;
          }
        } else {
          vertical = 0;
          horizontal = 1;
          curCount = 1;
          count += 2;
        }
        
        if (count % 4 === 0) {
            horizontal *= -1;
            vertical *= -1;
        }
    }
    return result;
};