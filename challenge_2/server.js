const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static(path.join(__dirname, 'client')));

app.post('/', function(req, res) {
  console.log(req);
  res.send('getting the files for you');
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})

