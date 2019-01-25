const router = require("express").Router();
const movieController = require("../../controllers/movieController");

// Matches with "/api/books"
router.route("/")
  .get(movieController.findById)
  .post(movieController.create);

// Matches with "/api/books/:id"
router.route("/:id")
  .get(movieController.findById)

module.exports = router;
