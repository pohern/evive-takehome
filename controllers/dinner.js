module.exports = {
    show
}

function show(req,res){
    const items = req.body.items.split(",");
    const counts = {};
    for (let i = 0; i < items.length; i++) {
      const num = items[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    if (counts[4] == null){
        res.send({"Unable to proccess": "Dessert is misisng"})
    }
    res.send({
      "Steak": 1,
      "Potatoes": 1,
      "Wine": 1,
      "Drink": "Water",
      "Dessert": 1
    });
}