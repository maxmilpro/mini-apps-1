const path = require('path');
const cors = require('cors');
const db = require('./database/index.js');
const express = require('express');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

// POST /checkout
app.get('/checkout', function(req, res) {
  console.log('creating a new record')
  db.insert()
  .then((result) => {
    res.send(result);
  })
});

// POST /account
app.post('/checkout', function(req, res) {
  console.log('updating a record')
  db.update(req.body)
  .then(() => {
    res.end()
  });
});

// POST /address
app.post('/address', function(req, res) {

});

// POST /payment
app.post('/payment', function(req, res) {

});

// POST /purchase
app.post('/purchase', function(req, res) {

});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

