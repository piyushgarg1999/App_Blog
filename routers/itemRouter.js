const router = require("express").Router();
router.route("/item/get").get((req, res) => {
  res.send("items available here");
});

module.exports = router;
