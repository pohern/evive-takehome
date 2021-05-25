module.exports = {
  show,
};
function show(req, res) {
  const items = req.body.items.split(",");
  const counts = {}
  for (let i=0; i<items.length; i++){
      const num = items[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1
  }
//   console.log(keys(count))
  //take item and turn into propertie of an object
  //check if propertie exists 
  //if it does iterate value of propertie 
  //if it doesn't create new propertie
  //iterate through items forEach


  //Check if something was submitted muiltiple times
  //check if order for drink id:3
  //Go through JSON and get data with final ids
  if (counts[1] == null) {
    res.send({ "Unable to process": "Main is missing" });
  }
  if (counts[2] == null) {
    res.send({ "Unable to process": "Side is missing" });
  }
  res.json(
    {
        "Eggs": 1,
        "Toast": 1,
        "Coffee": counts[3] ? (counts[3]) : null,
        "Drink": counts[3] ? null : "Water"
    }
  );
}
