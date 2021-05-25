const router = require("express").Router();

const breakfastCtrl = require("../controllers/breakfast");

router.post("/", breakfastCtrl.show);

module.exports = router;