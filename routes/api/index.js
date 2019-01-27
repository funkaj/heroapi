const router = require("express").Router();
const heroRoutes = require("./heros");

// hero routes
router.use("/heros", heroRoutes);

module.exports = router;
