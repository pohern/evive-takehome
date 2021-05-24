const router = require("express").Router();

const lunchCtrl = require("../controllers/lunch");

router.get("/", lunchCtrl.show);

module.exports = router;