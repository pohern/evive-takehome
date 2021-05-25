const router = require("express").Router();

const breakfastCtrl = require("../controllers/breakfast");

router.post("/", breakfastCtrl.show);
// router.post("/", (req, res) => console.log(req.body));
router.get('/test', (req, res) => res.send('breakfast route testing!'));

module.exports = router;