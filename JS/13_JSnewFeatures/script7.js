// # Destructuring objects

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

const { firstName, lastName, age, eyeColor : colorOfEyes, job = "Unknown" } = person;

firstName; // "John"
lastName; // "Doe"
age; // 50

colorOfEyes; // returns "blue"
job; // returns "Unknown" since we did ot defined it in the original object.

// # Destructuring objects parameters

function fullName(object) {
  return `${object.firstName} ${object.lastName}`;
}

fullName(person); // returns "John Doe"

function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

getFullName(person); // "John Doe"

// * Example destructuring objects parameters

const movies = [
  {title: "Pelíšky", year: 2001, score: 91},
  {title: "Román pro muže", year: 2010, score: 75},
  {title: "Amerika", year: 1992, score: 85}
];

const results = movies.map(({ title, score, year }) => {
  return `${title} (${year}) has score of ${score}/100.`;
});

results; // ["Pelíšky (2001) has score of 91/100.", "Román pro muže (2010) has score of 75/100.", "Amerika (1992) has score of 85/100."]