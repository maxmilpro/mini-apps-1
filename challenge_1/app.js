var currentMove = 'X';

var makeMove = function(element) {
  if (element.innerHTML === 'O' || element.innerHTML === 'X') {
    return;
  }

  element.innerHTML = currentMove;
  if (currentMove === 'X') {
    currentMove = 'O';
  } else {
    currentMove = 'X';
  }
  checkForWinner();
  checkForTie();
}

var checkForWinner = function() {
  var rows = document.getElementsByClassName('row');

  for (row of rows) {
    if (row.children[0].innerHTML === row.children[1].innerHTML && row.children[1].innerHTML === row.children[2].innerHTML) {
      if (row.children[0].innerHTML === 'X') {
        alert('Player One wins the game!')
      } else if (row.children[0].innerHTML === 'O') {
        alert('Player Two wins the game!')
      }
    }
  }

  for (var i = 0; i < 3; i++) {
    if (rows[0].children[i].innerHTML === rows[1].children[i].innerHTML && rows[1].children[i].innerHTML === rows[2].children[i].innerHTML) {
      if (rows[0].children[i].innerHTML === 'X') {
        alert('Player One wins the game!')
      } else if (rows[0].children[i].innerHTML === 'O') {
        alert('Player Two wins the game!')
      }
    }
  }

  if (rows[0].children[0].innerHTML === rows[1].children[1].innerHTML && rows[1].children[1].innerHTML === rows[2].children[2].innerHTML) {
    if (rows[0].children[0].innerHTML === 'X') {
      alert('Player One wins the game!')
    } else if (rows[0].children[0].innerHTML === 'O') {
      alert('Player Two wins the game!')
    }
  }

  if (rows[0].children[2].innerHTML === rows[1].children[1].innerHTML && rows[1].children[1].innerHTML === rows[2].children[0].innerHTML) {
    if (rows[0].children[2].innerHTML === 'X') {
      alert('Player One wins the game!')
    } else if (rows[0].children[2].innerHTML === 'O') {
      alert('Player Two wins the game!')
    }
  }
}

var checkForTie = function() {
  var squares = document.getElementsByClassName('square');
  var itsATie = true;
  for (var i = 0; i < squares.length; i++) {
    if (squares[i].innerHTML === '-') {
      itsATie = false;
    }
  }

  if (itsATie) {
    alert('We have a tie game!');
  }
}

var clearBoard = function() {
  var squares = document.getElementsByClassName('square');

  for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = '-';
  }

  currentMove = 'X';
}

document.body.addEventListener('click', event => {
  if (event.target.className === 'square') {
    makeMove(event.target);
  }

  if (event.target.className === 'new-game') {
    clearBoard();
  }
});


