const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');

router.get('', function (req, res) {
  Rental.find({}, function (err, foundRentals) {
    console.log(res);
    res.json(foundRentals);
  });
});

router.get('/:id', function (req, res) {
  const rentalId = req.params.id;
  Rental.findById(rentalId, function (err, foundRental) {
    if (err) {
      res.status(422).send({
        error: [{
          title: 'rental error',
          detail: 'id could not be found'
        }]
      });
    }
    res.json(foundRental);
  });
});

module.exports = router;
