// # JavaScript Array reduce() Method

// ## Algorytmicaly pull all item values into one.


// * Sum example

const numbers = [175, 50, 25];

const sumArrayNumbers = numbers.reduce((accumulator, currentVal) => {
  return accumulator + currentVal;
})

sumArrayNumbers; // - returns 250


// * Subtract example

let myNumbers = [165, 55, 30];

function reduceFunction(total, num) {
  return total - num;
} 

let subtractArrayNumbers = myNumbers.reduce(reduceFunction);

subtractArrayNumbers; // returns 80


// * Find maximum

const values = [10, 22, 13, 18, 34, 26, 37, 12, 25, 18];

const maximum = values.reduce((maximum, current) =>{
  if (maximum < current) {
    return current;
  } 
  return maximum;
})

maximum; // returns 37

// ## We can use a starting argument value

const scores = [2,3,4,5,1,3,4,2];

const output = scores.reduce((sum, num) => sum + num, 100);

output; // returns 124