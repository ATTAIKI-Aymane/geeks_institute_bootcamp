// ===== Exercise 1 
// ===== Part I ==========================================
const people = ["Greg", "Mary", "Devon", "James"];

// ===== 1

people.shift();

// ===== 2
people[people.indexOf("James")] = "Jason";

// ===== 3
people.push("Aymane");

// ===== 4
console.log(people.indexOf("Mary"));

// ===== 5
const peopleCopy = people.slice(1, 3);
console.log(peopleCopy);

// ===== 6
console.log(people.indexOf("Foo"));
//Because "Foo" is not in the array, indexOf() returns -1.

// ===== 7
const last = people[people.length - 1];
//The index of the last element is always array.length - 1
console.log(last);
// ===== Part II ==========================================
// ===== 1
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// ===== 2
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") {
    break;
  }
}



// ===== Exercise 2
// ===== part I ==========================================
// ===== 1
const colors = ["blue", "red", "green", "black", "white"];
// ===== 2
for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}
// ===== 3
const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}

// ===== Exercise 3
let number;

do {
  number = prompt("Enter a number");
  console.log(typeof number); 
  number = Number(number);    
} while (number < 10);

// ===== Exercise 4
const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

//  Number of floors
console.log(building.numberOfFloors);

//  Apartments on floor 1 and 3
console.log(
  building.numberOfAptByFloor.firstFloor +
  building.numberOfAptByFloor.thirdFloor
);

//  Second tenant name + number of rooms
const secondTenant = building.nameOfTenants[1];
const rooms = building.numberOfRoomsAndRent.dan[0];

console.log(secondTenant, rooms);

//  Check rents and update Dan’s rent if needed
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
}

console.log(building.numberOfRoomsAndRent.dan);

// ===== Exercise 5
const family = {
  father: "Ahmed",
  mother: "Fatima",
  sister: "Sara",
  brother: "Youssef"
};

// Log the keys
for (let key in family) {
  console.log(key);
}

// Log the values
for (let key in family) {
  console.log(family[key]);
}
// ===== Exercise 6