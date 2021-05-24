const router = require("express").Router();

const breakfastCtrl = require("../controllers/breakfast");

router.get("/", breakfastCtrl.show);
router.get('/test', (req, res) => res.send('breakfast route testing!'));

module.exports = router;