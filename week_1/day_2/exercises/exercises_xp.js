// ===== Exercise 1 ========================================================================================================
function displayNumbersDivisible(divisor) {
  let sum = 0;

  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      console.log(i);
      sum += i;
    }
  }

  console.log("Sum :", sum);
}

displayNumbersDivisible(23);

// ===== Exercise 2 ========================================================================================================
const stock = { 
  banana: 6, 
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1
};  

const prices = {    
  banana: 4, 
  apple: 2, 
  pear: 1,
  orange: 1.5,
  blueberry: 10
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let total = 0;

  for (let item of shoppingList) {
    if (item in stock && stock[item] > 0) {
      total += prices[item];
      stock[item]--; // Bonus: decrease stock
    }
  }

  return total;
}

console.log(myBill());
console.log(stock);
// ===== Exercise 3 ========================================================================================================
function changeEnough(itemPrice, amountOfChange) {
  let total =
    amountOfChange[0] * 0.25 + // quarters
    amountOfChange[1] * 0.10 + // dimes
    amountOfChange[2] * 0.05 + // nickels
    amountOfChange[3] * 0.01;  // pennies

  return total >= itemPrice;
}

output = changeEnough(4.25, [25, 20, 5, 0]) ;
console.log (output) ;
// ===== Exercise 4 ========================================================================================================
function hotelCost() {
  let nights;

  do {
    nights = prompt("How many nights would you like to stay?");
  } while (isNaN(nights) || nights === "" || nights === null);

  return nights * 140;
}

function planeRideCost() {
  let destination;

  do {
    destination = prompt("What is your destination?");
  } while (!destination || typeof destination !== "string");

  destination = destination.toLowerCase();

  if (destination === "london") {
    return 183;
  } else if (destination === "paris") {
    return 220;
  } else {
    return 300;
  }
}


function rentalCarCost() {
  let days;

  do {
    days = prompt("How many days would you like to rent the car?");
  } while (isNaN(days) || days === "" || days === null);

  let cost = days * 40;

  if (days > 10) {
    cost *= 0.95; // 5% discount
  }

  return cost;
}

function totalVacationCost() {
  let hotel = hotelCost();
  let plane = planeRideCost();
  let car = rentalCarCost();

  let total = hotel + plane + car;

  console.log(
    `The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}`
  );
  consol.log (total);
  return total;
}

totalVacationCost();

// BONUS:+++++++++++++++++++++++++++++++
function hotelCost(nights) {
  return nights * 140;
}
function planeRideCost(destination) {
  destination = destination.toLowerCase();

  if (destination === "london") return 183;
  if (destination === "paris") return 220;
  return 300;
}
function rentalCarCost(days) {
  let cost = days * 40;
  if (days > 10) cost *= 0.95;
  return cost;
}
function totalVacationCost() {
  let nights, days, destination;

  do {
    nights = prompt("How many nights?");
  } while (isNaN(nights) || nights === "");

  do {
    days = prompt("How many car rental days?");
  } while (isNaN(days) || days === "");

  do {
    destination = prompt("What is your destination?");
  } while (!destination);

  let hotel = hotelCost(Number(nights));
  let car = rentalCarCost(Number(days));
  let plane = planeRideCost(destination);

  let total = hotel + car + plane;

  console.log(
    `The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}`
  );

  console.log(`Total vacation cost: $${total}`);
}

totalVacationCost();



// ===== Exercise 5 ========================================================================================================

//to checking this exercise please check out this link "https://github.com/ATTAIKI-Aymane/geeks_institute_bootcamp/blob/main/week_1/day_2/exercises/ex_5_xp.html"

// ===== Exercise 6 ========================================================================================================
//to checking this exercise please check out this link "https://github.com/ATTAIKI-Aymane/geeks_institute_bootcamp/blob/main/week_1/day_2/exercises/ex_6_xp.html"
// ===== Exercise 7 ========================================================================================================
//to checking this exercise please check out this link "https://github.com/ATTAIKI-Aymane/geeks_institute_bootcamp/blob/main/week_1/day_2/exercises/ex_7_xp.html"