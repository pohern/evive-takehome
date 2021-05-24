//Import .json after created
const Breakfast = require('../breakfast.json');

module.exports = {
  show
};

function show(req, res) {
  res.send(Breakfast);
}

