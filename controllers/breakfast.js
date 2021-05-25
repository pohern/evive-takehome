//Import .json after created
const Breakfast = require("../breakfast.json");

module.exports = {
  show,
};

// In: Breakfast 1,2,3
// Out: Eggs, Toast, Coffee array
// could be req.body { "1": 1,'2':1, "3":3} items count: could sus this out in Meals class
// go through and display final message

function show(req, res) {
  console.log(req.body);
  const items = req.body.items.split(",");
  console.log(items)
  const breakfast = items.forEach(e => console.log(e))
  //take item and turn into propertie of an object
  //check if propertie exists 
  //if it does iterate value of propertie 
  //if it doesn't create new propertie
  //iterate through items forEach


  //Check if something was submitted muiltiple times
  //check if order for drink id:3
  //Go through JSON and get data with final ids
  res.json(
    Breakfast
  );
}
