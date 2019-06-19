const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const Rental = require('./models/rental');
const FakeDb = require('./fake-db');
const rentalRoutes = require('./routes/rentals');

mongoose.connect(config.DB_URI).then(() => {
  const fakeDb = new FakeDb();
  fakeDb.seedDb();
}).catch(err => {
  process.exit(1);
});

const app = express();
app.use('/api/v1/rentals', rentalRoutes);


const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
  console.log("me listening");
})
