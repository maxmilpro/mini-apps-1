import React from 'react';
import $ from 'jquery';

var Square = function({x, y, makeMove}) {
  return <div className="square" onClick={makeMove}></div>
}

export default Square;