import React from 'react';
import $ from 'jquery';
import Square from './square.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
      ],
      currentMove: 'red'
    }
    this.makeMove = this.makeMove.bind(this);
  }

  makeMove(x, y, e) {
    var boardCopy = this.state.board.slice();
    if (this.state.currentMove === 'red') {
      boardCopy[y][x] = 'red';
      e.target.className += ' red';
      this.setState({
        board: boardCopy,
        currentMove: 'black'
      })
    } else {
      boardCopy[y][x] = 'black';
      e.target.className += ' black';
      this.setState({
        board: boardCopy,
        currentMove: 'red'
      })
    }
    this.checkRows();
    this.checkColumns();
  }

  checkForWinner() {

  }

  checkRows() {
    let counter = 1;
    var boardCopy = this.state.board.slice();
    for (var i = 0; i < boardCopy.length; i++) {
      var currentRow = boardCopy[i];
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

  checkColumns() {
    let counter = 1;
    var boardCopy = this.state.board.slice();
    // iterate across the columns
    for (var i = 0; i < 7; i++) {
      // iterate down the current column
      for (var j = 0; j < 5; j++) {
        // if the current element is equal to the next element and the current element is not null
        if (boardCopy[j][i] !== null && boardCopy[j][i] === boardCopy[j + 1][i]) {
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

  checkDiagnols() {

  }

  render() {
    var row = [0, 1, 2, 3, 4, 5, 6];
    return (
      <div>
        <h1>Connect Four</h1>
        <div>
          {row.map((x) => {
            return <Square x={x} y={0} makeMove={this.makeMove}/>
          })}
        </div>
        <div>
          {row.map((x) => {
            return <Square x={x} y={1} makeMove={this.makeMove}/>
          })}
        </div>
        <div>
          {row.map((x) => {
            return <Square x={x} y={2} makeMove={this.makeMove}/>
          })}
        </div>
        <div>
          {row.map((x) => {
            return <Square x={x} y={3} makeMove={this.makeMove}/>
          })}
        </div>
        <div>
          {row.map((x) => {
            return <Square x={x} y={4} makeMove={this.makeMove}/>
          })}
        </div>
        <div>
          {row.map((x) => {
            return <Square x={x} y={5} makeMove={this.makeMove}/>
          })}
        </div>
      </div>
    )
  }
}

export default App;