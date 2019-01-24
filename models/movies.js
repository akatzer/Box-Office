const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieReview = new Schema({
  title: { type: String, required: true },
  review: { type: Boolean, required: true },
});

const Movie = mongoose.model("Movie", movieReview);

module.exports = Movie;

