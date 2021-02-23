const checkRows = (board) => {
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
        console.log('true')
        return true;
      }
    }
  }
  console.log('false')
  return false;
}

const checkColumns = (board) => {
  let counter = 1;
  // var boardCopy = this.state.board.slice();
  // iterate across the columns
  for (var i = 0; i < 7; i++) {
    // iterate down the current column
    for (var j = 0; j < 5; j++) {
      // if the current element is equal to the next element and the current element is not null
      if (board[j][i] !== null && board[j][i] === board[j + 1][i]) {
        // increase counter by 1
        counter++;
        // otherwise
      } else {
        // reset the counter
        counter = 1;
      }
      // if the counter is 4
      if (counter === 4) {
        // return true
        console.log('true');
        return true;
      }
    }
  }
  // return false
  console.log('false')
  return false;
}

const checkDiagnols = () => {

}

export {checkRows, checkColumns, checkDiagnols};

