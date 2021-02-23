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

  makeMove(e) {
    if (this.state.currentMove === 'red') {
      e.target.className += ' red';
      this.setState({
        currentMove: 'black'
      })
    } else {
      e.target.className += ' black';
      this.setState({
        currentMove: 'red'
      })
    }
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