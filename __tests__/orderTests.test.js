const assert = require("assert"); //import function  from main.js
const Meals = require("../meals.js");

describe("testing", function () {
  context("submitOrder", function () {
    it("should return an object with submitOrder method", function (done) {
      let order = new Meals('breakfast', '1,2,3');
      order.submitOrder();
      assert.ok(order.submitOrder, "order should have a submitOrder method");
      done();
    });
  });
});
