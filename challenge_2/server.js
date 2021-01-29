const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

const buildCSV = require('./csv-builder');


app.use(express.urlencoded({ extended: false}));
app.use('/', express.static(path.join(__dirname, 'client')));

app.post('/', function(req, res) {
  // console.log(req.body['sales-data']);
  res.end();
  buildCSV(req.body['sales-data'], (err, result) => {

  })
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})

