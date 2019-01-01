// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push([]);
    }
    let row = 0;
    let col = 0;
    let incR = 0;
    let incC = 1;
    for (let i = 1; i <= n * n; i++) {
        matrix[row][col] = i;
        if ()
        row = row + incR;
        col = col + incC;

    }
}

module.exports = matrix;
