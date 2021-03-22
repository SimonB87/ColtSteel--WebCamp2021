// # Factory functions

// - returns a function definition

function makeBetweenFunc(min, max) {
  return function(num){
    return num >= min && num <= max;
  }
}

const isChild = makeBetweenFunc(0,18); // returns a function
isChild(10); // returns true
isChild(21); // returns false
