// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let storage = [root, 's'];
    let result = [0];
    while(storage.length > 1) {
        let currentNode = storage.shift();
        if (currentNode === 's') {
            result.push(0);
            storage.push('s');
        } else {
            result[result.length-1] += 1;
            storage.push(...currentNode.children);
        }
    }
    return result;
}

module.exports = levelWidth;

// function levelWidth(root) {
//     if (root === null) return [];
//     let curLevel = [root];
//     let nextLevel = [];
//     let result = [1];
//     while (curLevel.length) {
//         let currentNode = curLevel.shift();
//         nextLevel.push(...currentNode.children);
//         if (curLevel.length === 0) {
//             if (nextLevel.length === 0) return result;
//             result.push(nextLevel.length);
//             curLevel.push(...nextLevel);
//             nextLevel = [];
//         }
//     }
// }