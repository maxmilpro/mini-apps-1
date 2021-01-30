const fs = require('fs');
const path = require('path');

module.exports = function(data, callback) {
  var parsed = JSON.parse(data);
  var converted = convertJSONToString(parsed);
  fs.writeFile(path.join(__dirname, 'test.csv'), converted, function(err, result) {
    if (err) {console.log('could not write the file')};
    callback(null, path.join(__dirname, 'test.csv'));
  })
}

var convertJSONToString = function(obj, str) {
  str = str || `firstName,lastName,county,city,role,sales\n`;
  str += `${obj.firstName},${obj.lastName},${obj.county},${obj.city},${obj.role},${obj.sales}\n`;

  if (obj.children.length !== 0) {
    for (var i = 0; i < obj.children.length; i++) {
      str = convertJSONToString(obj.children[i], str);
    }
  }

  return str;
}

/**
 * Inputs - JSON object containing nested objects
 * Outputs - csv file with formatted data
 * Constraints -
 * Edge Cases
 *
 *
 *
 *
 *
 */

 //