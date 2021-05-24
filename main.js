const prompt = require("prompt-sync")({ sigint: true });
//!!!Build takeOrder function
const Meals = require('./meals.js')
//  order = breakfast 1,2,3 
//node script takeOrder meal name, item name 
// meal : breakfast lunch dinner
// items I.e 1=main, 2= side Array of items
// object called breakfast, lunch CLASS
//Validate function
// const takeOrder = (meal, items) => {
  //items is an array of ids
  //items.sort((a, b) => a - b) to make sure its in ascending order
  //Make sure items are all numbers: typeOfItems items.forEach(typeOfItems = number)
  //meal is a string
  //Validate meal.toLowerCase() if not 'breakfast', 'lunch', 'dinner' error
  //Decide where fetch call goes
  //API Call fetch makes an HTTP Request: GET(meal)
  //Return message from API call based on data
// };

//Output Section
//TODO Write assert tests for each scenario given


//Todo Mock data: 





const meal = prompt("What would you like to order Breakfast, Lunch or Dinner?  ");
const mealCased = meal.toLowerCase()
const items = prompt("What would you like to order 1: Main, 2: Side 3: Drink? Please enter these seperated with a comma.  "
);
if (items.length === 0) {
  array = new Array();
} else {
  array = items.replace(/, +/g, ",").split(",").map(Number);
};
let itemArr = array.sort((a, b) => a - b)
let order = new Meals(mealCased, itemArr);
order.submitOrder();