//Import .json after created
const Lunch = require('../lunch.json');

module.exports = {
  show,
};

function show(req, res) {
    console.log(req.query, "here");
    // array = req.query
    //   .replace(/, +/g, ",")
    //   .split(",")
    //   .map(Number)
    //   .sort((a, b) => a - b);
    // console.log(array, "here dinner");
  res.send(Lunch);
}
