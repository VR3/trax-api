const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
  date: String,
  hour: Number,
  amount: Number,
});

module.exports = mongoose.model('Donation', DonationSchema);
