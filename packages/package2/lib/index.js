"use strict";

const { calculateSum } = require("package1");
function package2() {
  const sum = calculateSum([1, 2, 3]);
  console.log("Sum is ", sum);
}

console.log("Hello from package2");
package2();
module.exports = package2;
