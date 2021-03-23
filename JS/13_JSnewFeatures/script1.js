// # Default Params

function rollDie(numSides) {
  return Math.floor(Math.random() * numSides) + 1;
}

// - in the rollDie we have to provide a parameter


function rollBetterDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

// - in the rollBetterDie the default value is 6.