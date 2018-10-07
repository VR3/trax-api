const mongoose = require('mongoose');

const CenterSchema = new mongoose.Schema({
  center: String,
  proportion: Number,
  needed: Number,
  needed_event: Number,
});

module.exports = mongoose.model('Center', CenterSchema);
