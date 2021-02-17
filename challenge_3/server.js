const path = require('path');
const db = require('./database/index.js');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// POST /checkout
app.post('/checkout', function(req, res) {
  db.insert()
  .then((result) => {
    res.send(result);
  })
});

// POST /account
app.post('/account', function(req, res) {

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

