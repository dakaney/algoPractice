var countBattleships = function(board) {
    let shipCount = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 'X') {
                if ((!board[i-1] || (board[i-1] && board[i-1][j] === '.')) && board[i][j-1] !== 'X') {
                    shipCount += 1;
                }
            }
        }
    }
    return shipCount;
};