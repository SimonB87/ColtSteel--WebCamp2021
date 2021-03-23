// # Use spread operator to copy object properties

const mercedes = {fuel: "petrol", wheels: 4};

const audi = {material: "metal", passengers: 4, color: "black"};

const porsche = {...mercedes};

const passat = {...porsche, ...audi};