import assert from "assert";
//import function  from main.js 
//import takeOrder from 'main.js'
// In: Breakfast 1,2,3
// Out: Eggs, Toast, Coffee

assert(takeOrder('breakfast', [1,2,3]) === ['Eggs', 'Toast', 'Coffee'], 'Output should have been ["Eggs", "Toast", "Coffee"]')