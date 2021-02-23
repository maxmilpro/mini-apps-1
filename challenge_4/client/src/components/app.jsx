import React from 'react';
import Square from './square.jsx';

// var App = function(props) {
//   return (
//     <div>
//       <h1>Connect Four</h1>
//       <div>
//         {for (var i = 0; i <= 7; i++) {
//           return <Square/>
//         }}
//       </div>
//     </div>
//   )
// }

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
      ]
    }
  }

  createBoard() {
    var row = [];
    for (var i = 0; i <= 7; i++) {
      row.push(<Square/>);
    }

    return row;
  }

  render() {
    return (
      <div>
        <h1>Connect Four</h1>
        <div>
          <Square/><Square/><Square/><Square/><Square/><Square/><Square/>
        </div>
        <div>
          <Square/><Square/><Square/><Square/><Square/><Square/><Square/>
        </div>
        <div>
          <Square/><Square/><Square/><Square/><Square/><Square/><Square/>
        </div>
        <div>
          <Square/><Square/><Square/><Square/><Square/><Square/><Square/>
        </div>
        <div>
          <Square/><Square/><Square/><Square/><Square/><Square/><Square/>
        </div>
        <div>
          <Square/><Square/><Square/><Square/><Square/><Square/><Square/>
        </div>
      </div>
    )
  }
}

export default App;