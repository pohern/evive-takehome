const router = require("express").Router();

const lunchCtrl = require("../controllers/breakfast");

router.get("/lunch", lunchCtrl.show);
