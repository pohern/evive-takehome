const router = require("express").Router();

const dinnerCtrl = require("../controllers/breakfast");

router.get("/dinner", dinnerCtrl.show);
