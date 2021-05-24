//Move to own class file
//Validate in here
const fetch = require("node-fetch");
class Meals {
  constructor(name, items) {
    this.name = name;
    this.items = items;
  }
  submitOrder() {
    //API call
    //Switch case based off of this.name
    switch (this.name) {
      case "breakfast":
        fetch("http://localhost:3001/breakfast/")
          .then((res) => res.json())
          .then((json) => console.log(json));
        break;
      case "lunch":
        fetch("http://localhost:3001/lunch/")
          .then((res) => res.json())
          .then((json) => console.log(json));
        break;
      case "dinner":
        fetch("http://localhost:3001/dinner/")
          .then((res) => res.json())
          .then((json) => console.log(json));
        break;
      default:
          console.log('Looks like you entered something else, lets try again!')
        break;
    }

  }
}
// let order = new Meals("breakfast", [1, 2, 3]);
// order.submitOrder();

module.exports = Meals