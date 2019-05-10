const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const Rental = require('./models/rental');
const FakeDb = require('./fake-db');
const rentalRoutes=require('./routes/rentals');

mongoose.connect(config.DB_URI).then(() => {
  const fakeDb = new FakeDb();
  console.log("inside connection trying......");
  fakeDb.seedDb();
}).catch(err => {
  console.error('App starting error:', err.stack);
  process.exit(1);
});

const app = express();
app.use('/app/v1/rentals', rentalRoutes);


// app.get('/rentals', function (req, res) {
//   res.json({
//     'success': true
//   });
// });
const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
  console.log("me listening");
})
