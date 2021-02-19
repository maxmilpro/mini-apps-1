var path = require('path');
var express = require('express');
var app = express();

const port = 3000;

// TO DO: add route to static
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  }
  console.log(`Listening on https://localhost/${port}`)
});



