const prompt = require("prompt-sync")({ sigint: true });
const Meals = require("./meals.js");

const meal = prompt(
  "What would you like to order Breakfast, Lunch or Dinner?  "
);
const mealCased = meal.toLowerCase();
if (mealCased === "breakfast") {
  var items = prompt(
    "What would you like to order 1: Main, 2: Side 3: Drink? Please enter these seperated with a comma.  "
  );
} else if (mealCased === "lunch") {
  var items = prompt(
    "What would you like to order 1: Main, 2: Side 3: Drink? Please enter these seperated with a comma.  "
  );
}
 else if (mealCased === "dinner") {
  var items = prompt(
    "What would you like to order 1: Main, 2: Side 3: Wine 4: Dessert? Please enter these seperated with a comma.  "
  );
} else {
  console.log("Hmm lets try that again");
}
let order = new Meals(mealCased, items);
order.submitOrder();
