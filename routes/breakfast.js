const router = require("express").Router();

const breakfastCtrl = require("../controllers/breakfast");

router.get("/", breakfastCtrl.show);

module.exports = router;