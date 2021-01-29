

module.exports = function(data, callback) {
  var parsed = JSON.parse(data);
  var converted = convertJSONToString(parsed);
  console.log(converted);
}

var convertJSONToString = function(obj, str) {
  str = str || `firstName,lastName,county,city,role,sales/n`;
  str += `${obj.firstName},${obj.lastName},${obj.county},${obj.city},${obj.role},${obj.sales}/n`;

  if (obj.children) {
    for (var i = 0; i < obj.children.length; i++) {
      return convertJSONToString(obj.children[i], str);
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