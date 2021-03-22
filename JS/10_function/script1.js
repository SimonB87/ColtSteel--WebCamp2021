// Arrow functions

const square = (x) => {
  return x *x;
}

const shout = () => {
  return "Aaah!";
}

// reduced versions
const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
}

const rollDieReduced = () => (
  Math.floor(Math.random() * 6) + 1
);

const add = (a, b) => a + b;