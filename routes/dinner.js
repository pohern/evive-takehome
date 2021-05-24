const router = require("express").Router();

const dinnerCtrl = require("../controllers/breakfast");

router.get("/", dinnerCtrl.show);

module.exports = router;