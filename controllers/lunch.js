//Import .json after created
const Lunch = require('../lunch.json');

module.exports = {
  show,
};

function show(req, res) {
    console.log(req.query, "here");
  res.send(Lunch);
}
