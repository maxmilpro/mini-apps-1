var request = require('request');
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

describe('Server', function() {
  it('should serve up an index.html file and its assests', function() {
    // make a get request to server
    request('http://localhost:3000/', function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      expect(res.headers).to.not.be.null;
      expect(body).to.not.be.null;
    })
  });

  it('should handle post requests', function() {
    request.post('http://localhost:3000/', function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      expect(res.headers).to.not.be.null;
      expect(body).to.not.be.null;
    });
  });
});

// should transform JSON into correct format

// should receive JSON from a client

// should send csv back to client