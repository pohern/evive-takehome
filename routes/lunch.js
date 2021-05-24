const router = require("express").Router();

const lunchCtrl = require("../controllers/breakfast");

router.get("/", lunchCtrl.show);

module.exports = router;