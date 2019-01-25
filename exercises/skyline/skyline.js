/*
given an array of array of l, r, h. 
l = left most wall of building
r = right most wall of building
h = height of building

input example : [[1, 5, 10], [3, 7, 8], [7, 15, 12]]

how can you find the geometric outline of the skyline created by these buildings
output example : [[1,10], [5,8], [7,12], [15,0]]
*/

var getSkyline = function(buildings) {
    let buildingBreakdown = [];
    let result = [];
    let curHeights = [0];
    for (let building of buildings) {
        buildingBreakdown.push([building[0], building[2], 'start']);
        buildingBreakdown.push([building[1], building[2], 'end']);
    }
    buildingBreakdown = sortStartAndEnd(buildingBreakdown);
    for (let i = 0; i < buildingBreakdown.length; i++) {
        let curMax = Math.max(...curHeights);
        if (buildingBreakdown[i][2] === 'start') {
            curHeights.push(buildingBreakdown[i][1])
            if (curMax < buildingBreakdown[i][1]) {
                result.push([buildingBreakdown[i][0], buildingBreakdown[i][1]])
            }
        } else {
            curHeights[curHeights.indexOf(buildingBreakdown[i][1])] = curHeights[curHeights.length - 1];
            curHeights.pop();
            let newMax = Math.max(...curHeights);
            if (curMax !== newMax) {
                result.push([buildingBreakdown[i][0], newMax]);
            }
        }
    }
    return result;
};

let sortStartAndEnd = (arr) => {
    if (arr.length <= 1) return arr;
    let result = [];
    let middle = Math.floor(arr.length / 2);
    let stack1 = sortStartAndEnd(arr.slice(0, middle)) || [];
    let stack2 = sortStartAndEnd(arr.slice(middle)) || [];
    while(stack1.length > 0 || stack2.length > 0) {
      if (stack1.length === 0) {
        result.push(stack2.shift());
      } else if (stack2.length === 0) {
        result.push(stack1.shift());
      } else {
        if (stack1[0][0] === stack2[0][0]) {
          if (stack1[0][2] === 'start' && stack2[0][2] === 'start') {
            if (stack1[0][1] > stack2[0][1]) {
              result.push(stack1.shift());
            } else {
              result.push(stack2.shift());
            }
          } else if (stack1[0][2] === 'end' && stack2[0][2] === 'end') {
            if (stack1[0][1] > stack2[0][1]) {
              result.push(stack2.shift());
            } else {
              result.push(stack1.shift());
            }
          } else {
            if (stack1[0][2] === 'start') {
              result.push(stack1.shift());
            } else {
              result.push(stack2.shift());
            }
          }
        } else if (stack1[0][0] < stack2[0][0]) {
          result.push(stack1.shift());
        } else {
          result.push(stack2.shift())
        }
      }
    }
    return result;
};