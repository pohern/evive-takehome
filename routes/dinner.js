const router = require("express").Router();

const dinnerCtrl = require("../controllers/dinner");

router.post("/", dinnerCtrl.show);

module.exports = router;