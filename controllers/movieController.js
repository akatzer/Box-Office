const db = require("../models");

// Defining methods for the MoviesController
module.exports = {
    findById: function(req, res) {
    db.Movie
      .findById(req.params.title)
      .then(boxofficedb => res.json(boxofficedb))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Movie
      .create(req.body)
      .then(boxofficedb => res.json(boxofficedb))
      .catch(err => res.status(422).json(err));
  }
};
