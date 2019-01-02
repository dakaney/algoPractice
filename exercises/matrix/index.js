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
    let grid = [];
    for (let i = 0; i < n; i++) {
        grid.push([]);
    }
    let row = 0;
    let col = 0;
    let direction = 1;
    let start = 0;
    let end = n;
    let i = 1;
    while (i < n*n) {
        grid[row][col] = i;
        if (col < end - 1 && direction === 1) {
            col++;
        } else if (row < end - 1 && direction === 1) {
            row++;
        } else if (direction === 1) {
            direction = -1;
        }
        if (col > start && direction === -1) {
            col--;
        } else if (row > start + 1 && direction === -1) {
            row--;
        } else if (direction === -1){
            direction = 1;
            end -= 1;
            start += 1;
            i--;
        }
        i++;
    }
    grid[row][col] = i;
    return grid;
}

module.exports = matrix;
