//Import .json after created
const Breakfast = require("../breakfast.json");

module.exports = {
  show,
};

function show(req, res) {
  console.log(req.query, 'here');
  res.send({
    Breakfast,
    //   "Eggs": req.query.main,
    //   "Toast": req.query.side
  });
}
