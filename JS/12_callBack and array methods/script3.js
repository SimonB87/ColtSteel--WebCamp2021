// # Some & Every

// - Boolean methods: rturn true/false based on the output

// ## Every
// - Returns true if all items in Array pass condition, otherwise false

// ## Some
// - Returns true if at least one item in Array passes the condition

const testScores = [72, 55, 91, 81, 56, 82, 76, 70, 85];

const didEveryonePass = testScores.every(score => (score >=90)); // returns false

const didAtlEastOneStudentPass = testScores.some(score => (score >=90)); // returns true

const allStudentsWhoPass = testScores.filter(score => (score >=90)); //returns [91]