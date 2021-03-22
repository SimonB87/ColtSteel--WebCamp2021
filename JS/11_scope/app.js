/*
let radius = 8;

if (radius > 0) {
  const pi = 3.14159;
  let message = "Hi there!"; 
}

console.log(pi);*/

/*
function higherOrder(func) {
  func();
  func();
}

function shout(){
  console.log("Hey!");
  console.log("Hey!");
  console.log("Hey!");
}

higherOrder(shout);*/

/*
function between (min, max) {
  return function (num) {
    return ( num > min && num < max );
  }
}

const isKid = between(0,17);
isKid(7); // return true
*/
/*
let square = {
  pi: 3.14159,
  area(num){
    return num * num;
  },
  perimeter(num){
    return 4* num;
  }
}

const output = square.area(10);
console.log(output);*/
/*
const cat = {
  name: "Pižmo",
  shout(){
    console.log(`${this.name} says mňau.`);
  }
}

const sound = cat.shout;

name = "René";

sound();
*/

const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg(){
      this.eggCount++;
      return "EGG";
  }
}
hen.layAnEgg();
console.log(hen.eggCount);