const db = require("../models");

// Defining methods for the MoviesController
module.exports = {
  findAll: function(req, res) {
    db.Movie
      .find(req.query)
      .then(blockbusterdb => res.json(blockbusterdb))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Movie
      .findById(req.params.id)
      .then(blockbusterdb => res.json(blockbusterdb))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Movie
      .create(req.body)
      .then(blockbusterdb => res.json(blockbusterdb))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Movie
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(blockbusterdb => res.json(blockbusterdb))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Movie
      .findById({ _id: req.params.id })
      .then(blockbusterdb => blockbusterdb.remove())
      .then(blockbusterdb => res.json(blockbusterdb))
      .catch(err => res.status(422).json(err));
  }
};
