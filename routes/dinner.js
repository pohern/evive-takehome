const router = require("express").Router();

const dinnerCtrl = require("../controllers/dinner");

router.get("/", dinnerCtrl.show);

module.exports = router;