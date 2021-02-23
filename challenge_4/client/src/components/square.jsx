import React from 'react';
import $ from 'jquery';

var Square = function({x, y, makeMove}) {
  return <div className="square" onClick={(e) => makeMove(x, y, e)}></div>
}

export default Square;