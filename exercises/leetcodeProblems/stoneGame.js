var stoneGame = function(piles) {
    let result = [0,0];
    let helper = (piles) => {
      if (piles.length === 2) {
        result[0] += Math.max(piles[0], piles[1]);
        result[1] += Math.min(piles[0], piles[1]);
      } else {
        let left = piles.shift();
        let right = piles.pop();
        result[0] += Math.max(left, right);
        result[1] += Math.min(left, right);
        helper(piles);
      }
    }
    helper(piles.slice());
    return result[0] > result[1];
  };