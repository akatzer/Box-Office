import axios from "axios";

export default {

  // Gets the movie rating with the given id
  getReviews: function(title) {
    return axios.get("/api/movies/" + title);
  },
  // Saves a review to the database
  saveReview: function(movieReview) {
    return axios.post("/api/", movieReview);
  }
};
