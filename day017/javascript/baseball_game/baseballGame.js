/**
 * @param {string[]} ops - List of operations
 * @return {number} - Sum of scores after performing all operations
 */
var calPoints = function (ops) {
  var result = null;
  var temp = [];
  ops.map((iter) => {
    // console.log("Operation: ", iter);
    // An if for each command else for a number
    if (iter === "D") {
      // Doubles the las element
      temp.push(temp.at(-1) * 2);
    } else if (iter === "C") {
      // Delete the last element
      temp.pop();
    } else if (iter === "+") {
        // Sum the last two elements
      temp.push(temp.at(-1) + temp.at(-2));
    } else {
        // Insert the number
      temp.push(parseInt(iter));
    }
    // console.log("Array: ", temp);
    // console.log("Testing... ", temp.at(-1));
  });
  temp.map((elem) => (result += elem));
  return result;
};

var ops = "5 2 C D +";

console.log("ops: ", ops);
console.log(calPoints(ops.split(" ")));

ops = "5 -2 4 C D 9 + +";

console.log("ops: ", ops);
console.log(calPoints(ops.split(" ")));
