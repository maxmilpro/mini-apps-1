module.exports.checkRows = (board) => {
  let counter = 1;
  // var boardCopy = this.state.board.slice();
  for (var i = 0; i < board.length; i++) {
    var currentRow = board[i];
    for (var j = 0; j < currentRow.length; j++) {
      if (currentRow[j] !== null && currentRow[j] === currentRow[j + 1]) {
        counter++;
      } else {
        counter = 1;
      }
      if (counter === 4) {
        return true;
      }
    }
  }
  return false;
}

module.exports.checkColumns = (board) => {
  let counter = 1;
  for (var i = 0; i < 7; i++) {
    for (var j = 0; j < 5; j++) {
      if (board[j][i] !== null && board[j][i] === board[j + 1][i]) {
        counter++;
      } else {
        counter = 1;
      }
      if (counter === 4) {
        return true;
      }
    }
  }
  return false;
}

module.exports.checkDiagnols = (board, row, col, piece) => {
  if (board[row][col] === piece && board[row + 1][col + 1] === piece && board[row + 2][col + 2] === piece && board[row + 3][col + 3] === piece) {
    return true;
  };
  if (board[row][col] === piece && board[row + 1][col - 1] === piece && board[row + 2][col - 2] === piece && board[row + 3][col - 3] === piece) {
    return true;
  };

  return false;
}

module.exports.checkForTie = (board) => {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (board[i][j] === null) {
        return false;
      }
    }
  }
  return true;
}
