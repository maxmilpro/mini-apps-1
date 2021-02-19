const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express();

const port = 3000;

// TO DO: add route to static
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('/', (req, res) => {
  res.send('test test test')
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
});



