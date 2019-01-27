const router = require("express").Router();
const herosController = require("../../controllers/herosController");

// Matches with "/api/heros"
router.route("/")
  .get(herosController.findAll)
  .post(herosController.create);

// Matches with "/api/heros/:id"
router
  .route("/:id")
  .get(herosController.findById)
  .put(herosController.update)
  .delete(herosController.remove);

module.exports = router;
