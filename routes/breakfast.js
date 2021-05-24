const router = require("express").Router();

const breakfastCtrl = require("../controllers/breakfast");

router.get("/breakfast", breakfastCtrl.show);
