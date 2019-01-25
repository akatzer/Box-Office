const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create a schema
const ratingSchema = new Schema({
  // You may need to add other fields like owner
  addedOn: String,
  Rating: String,
});
const Rating = mongoose.model('Rating', ratingSchema);
module.exports = Rating;