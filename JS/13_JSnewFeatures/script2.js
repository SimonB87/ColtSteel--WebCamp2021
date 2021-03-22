// # Spread operator
// - spreads array into individual items for functions call



const maximum = Math.max(2,45,6,40,38,35,21); 
maximum; // returns 45

const numbers = [2,45,6,40,38,35,21];
const maximum1 = Math.max(numbers); // throws Error

const numbers2 = [2,45,6,40,38,35,21];
const maximum2 = Math.max(...numbers); 
const maximum2; // returns 45
