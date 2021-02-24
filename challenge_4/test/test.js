var expect  = require('chai').expect;
var helpers = require('../client/src/helpers.js');

describe('checkForWinner', function() {
  it('should find a horizontal winner', function() {
    var board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      ['red', 'red', 'red', 'red', null, null, null]
    ];
    expect(helpers.checkRows(board)).to.be.true;

    var board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      ['red', 'red', 'red', '', null, null, null]
    ];
    expect(helpers.checkRows(board)).to.not.be.true;

    var board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      ['red', 'red', 'red', 'black', 'black', 'black', 'black']
    ];
    expect(helpers.checkRows(board)).to.be.true;
  });

  it('should find a vertical winner', function() {
    var board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      ['red', null, null, null, null, null, null],
      ['red', null, null, null, null, null, null],
      ['red', null, null, null, null, null, null],
      ['red', null, null, null, null, null, null]
    ];
    expect(helpers.checkColumns(board)).to.be.true;

    var board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, 'red', null, null, null],
      [null, null, null, 'red', null, null, null],
      [null, null, null, 'red', 'black', null, null],
      [null, 'red', 'black', 'red', 'black', null, null]
    ];
    expect(helpers.checkColumns(board)).to.be.true;
  });

  xit('should find a diagnol winner', function() {
    var board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      ['red', null, null, null, null, null, null],
      [null, 'red', null, null, null, null, null],
      [null, null, 'red', null, null, null, null],
      [null, null, null, 'red', null, null, null]
    ];
    expect(helpers.checkDiagnols(board)).to.be.true;

    var board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null]
    ];
    expect(helpers.checkDiagnols(board)).to.not.be.true;
  });

  it('should find a tie', function() {
    var board = [
      ['black', 'red', 'black', 'red', 'black', 'red', 'black'],
      ['black', 'red', 'black', 'red', 'black', 'red', 'black'],
      ['red', 'black', 'red', 'black', 'red', 'black', 'red'],
      ['red', 'black', 'red', 'black', 'red', 'black', 'red'],
      ['black', 'red', 'black', 'red', 'black', 'red', 'black'],
      ['black', 'red', 'black', 'red', 'black', 'red', 'black']
    ];
    expect(helpers.checkRows(board)).to.not.be.true;
    expect(helpers.checkColumns(board)).to.not.be.true;
    expect(helpers.checkDiagnols(board)).to.not.be.true;
    expect(helpers.checkForTie(board)).to.be.true;
  })
});