var findDuplicates = function(nums) {
    let result = [];
    let i = 0;
    while (i < nums.length) {
      let index = Math.abs(nums[i]) - 1
      if (nums[index] < 0) {
        result.push(index + 1);
      } else {
        nums[index] *= -1;
      }
      i++;
    }
    return result
};