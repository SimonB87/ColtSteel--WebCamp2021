// # forEach method

const numbers = [1,2,3,4,5,6,7];

/*
function print(element){
  console.log(element);
}

numbers.forEach(print); // prints all the numbers in array
*/

numbers.forEach( function (elem) {
  console.log(elem);
});

// alternatively
for (let el of numbers){
  console.log(el);
}

// for loop
for (let x = 0; x < numbers.length; x++) {
  let num = numbers[x];
  console.log(num);
}