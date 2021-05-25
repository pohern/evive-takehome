//Move to own class file
//Validate in here
const fetch = require("node-fetch");
const regex = new RegExp(`^[1-3](?:,[1-3])*$`);
const regex2 = new RegExp(`^[1-4](?:,[1-4])*$`);

class Meals {
  constructor(name, items) {
    this.name = name;
    this.items = items;
  }
  submitOrder() {
    switch (this.name) {
      case "breakfast":
        if (this.items.match(regex) !== null) {
          if (this.items.length === 0) {
            array = new Array();
          } else {
            this.array = this.items
              .replace(/, +/g, ",")
              .split(",")
              .map(Number)
              .sort((a, b) => a - b);
            console.log(this.array, "here");
          }
        } else {
            console.log(
              "Looks like something got entered wrong, try ordering again"
            );
            break;
        }
        fetch(`http://localhost:3001/${this.name}/`)
          .then((res) => res.json())
          .then((json) => console.log(json));
        break;
      case "lunch":
        if (this.items.match(regex) !== null) {
          if (this.items.length === 0) {
            array = new Array();
          } else {
            this.array = this.items
              .replace(/, +/g, ",")
              .split(",")
              .map(Number)
              .sort((a, b) => a - b);
            console.log(this.array, "here");
          }
        } else {
           console.log(
             "Looks like something got entered wrong, try ordering again"
           ); 
           break;
        }
        fetch(`http://localhost:3001/${this.name}/?=${this.array}`)
          .then((res) => res.json())
          .then((json) => console.log(json));
        break;
      case "dinner":
        if (this.items.match(regex2) !== null) {
          if (this.items.length === 0) {
            array = new Array();
          } else {
            this.array = this.items
              .replace(/, +/g, ",")
              .split(",")
              .map(Number)
              .sort((a, b) => a - b);
            console.log(this.array, "here dinner");
          }
        } else {
            console.log(
              "Looks like something got entered wrong, try ordering again"
            );
            break;
        }
        fetch(`http://localhost:3001/${this.name}/`)
          .then((res) => res.json())
          .then((json) => console.log(json));
        break;
      default:
        console.log("Looks like you entered something else, lets try again!");
        break;
    }
  }
}

module.exports = Meals;
