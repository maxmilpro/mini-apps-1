const mongoose = require('mongoose');

// connect to the db
mongoose.connect('mongodb://localhost/purchases', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// test our connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('We are connected!');
});

// define schema
const purchaseSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address: {
    line1: String,
    line2: String,
    city: String,
    state: String,
    zipCode: String,
    phoneNumber: String
  },
  billing: {
    cc: String,
    expiryDate: Date,
    cvv: String,
    zipCode: String
  },
  complete: Boolean
});

// compile schema into model
const Purchase = mongoose.model('Purchase', purchaseSchema);

// insert record
const insert = async function() {
  var newPurchase = new Purchase();
  var result = await newPurchase.save();
  return result;
}

// update record

