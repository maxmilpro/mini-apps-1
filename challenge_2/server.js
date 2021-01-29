const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static(path.join(__dirname, 'client')));

app.get('/file', function(req, res) {
  res.send('getting the files for you');
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})

