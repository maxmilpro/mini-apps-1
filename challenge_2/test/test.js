var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
var buildCSV = require('../csv-builder');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      buildCSV();
      expect([1, 2, 3].indexOf(4)).to.equal(-1);
    });
  });
});

// should transform JSON into correct format

// should receive JSON from a client

// should send csv back to client