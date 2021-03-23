// # Use spread to copy array items

const townsCZ = ["Praha", "Plzeň", "Kladno", "Vlašim", "Olomouc"]; 
const townsSK = ["Bratislava", "Martin", "Košice"]; 

const placesSK = [...townsSK]; // ["Bratislava", "Martin", "Košice"]
const townsAll = [...townsSK, ...townsCZ]; // ["Bratislava", "Martin", "Košice", "Praha", "Plzeň", "Kladno", "Vlašim", "Olomouc"]

const myTrips = [...townsSK, "Berlin", "London"]; // ["Bratislava", "Martin", "Košice", "Berlin", "London"]; 