const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

const buildCSV = require('./csv-builder');


app.use(express.urlencoded({ extended: false}));
app.use('/', express.static(path.join(__dirname, 'client')));

app.post('/', function(req, res) {
  buildCSV(req, (err, result) => { res.sendFile(result) });
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})

