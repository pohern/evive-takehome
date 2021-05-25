const router = require("express").Router();

const lunchCtrl = require("../controllers/lunch");

router.post("/", lunchCtrl.show);

module.exports = router;