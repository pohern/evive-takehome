module.exports = {
  show,
};

function show(req, res) {
  const items = req.body.items.split(",");
  const counts = {};
  for (let i = 0; i < items.length; i++) {
    const num = items[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  if (counts[1] == null && counts[2] == null) {
    res.send({ "Unable to process": "Main and side are missing" });
  }
  if (counts[1] == null) {
    res.send({ "Unable to process": "Main is missing" });
  }
  if (counts[1] > 1) {
    res.send({ "Unable to process": "Salad ccannot be ordered more than once" });
  }
  if (counts[2] == null) {
    res.send({ "Unable to process": "Side is missing" });
  }
  res.send({
    Salad: 1,
    Chips: counts[2],
    Soda: counts[3] ? counts[3] : null,
    Drink: counts[3] ? null : "Water",
  });
}
