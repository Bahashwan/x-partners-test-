const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  filename: String,
  path: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
 },

});

module.exports = mongoose.model('Photo', photoSchema); 