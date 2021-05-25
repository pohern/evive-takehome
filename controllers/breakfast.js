//Import .json after created
const Breakfast = require('../breakfast.json');

module.exports = {
  show
};

function show(req, res) {
const arr = req.query
console.log(arr)
  res.send({
      Breakfast
    //   "Eggs": req.query.main,
    //   "Toast": req.query.side
  });
}

