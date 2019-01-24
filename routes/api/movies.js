const router = require("express").Router();
const booksController = require("../../controllers/movieController");

// Matches with "/api/books"
router.route("/")
  .get(movieController.findAll)
  .post(movieController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(movieController.findById)

module.exports = router;
