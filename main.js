const prompt = require("prompt-sync")({ sigint: true });
const Meals = require("./meals.js");
//  order = breakfast 1,2,3
//node script takeOrder meal name, item name
// meal : breakfast lunch dinner
// items I.e 1=main, 2= side Array of items
// object called breakfast, lunch CLASS
//Validate function
// const takeOrder = (meal, items) => {
//items is an array of ids



//Return message from API call based on data
// };

//Output Section
//TODO Write assert tests for each scenario given

//Todo Mock data:

const meal = prompt(
  "What would you like to order Breakfast, Lunch or Dinner?  "
);
const mealCased = meal.toLowerCase();
console.log(mealCased);
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
