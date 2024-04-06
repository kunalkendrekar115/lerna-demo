"use strict";
const _ = require("lodash");

function calculateSum(arr) {
  return _.sum(arr);
}
console.log("Hello from package1");

module.exports = { calculateSum };
