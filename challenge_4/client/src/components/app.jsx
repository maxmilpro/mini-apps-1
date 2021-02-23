import React from 'react';
import $ from 'jquery';
import Square from './square.jsx';
import {checkRows, checkColumns, checkDiagnols} from '../helpers.js';

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
    checkRows(this.state.board);
    checkColumns(this.state.board);
  }

  checkForWinner() {

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