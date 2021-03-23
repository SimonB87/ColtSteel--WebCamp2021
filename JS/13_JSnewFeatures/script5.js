// # Rest operator - similar to Spread operator

// - Normally we have to state the function arguments in their definition space.

function sum() {
  return arguments.reduce((total, el) => total + el);
} // Produces and Error.

function add(...nums) {
  return nums.reduce((total, el) => total + el);
} // This works.

add(1,2,3,4,5); // returns 15

// # Examples with state and various arguments:

function raceResults(gold, silver, bronze, ...allTheRest) {
  console.log(`First is: ${gold}`);
  console.log(`Second is: ${silver}`);
  console.log(`Thirds is: ${bronze}`);
  console.log(`Also these people took part: ${allTheRest}`);
}