// ===== Exercise 1 =======================================================================================================
function isBlank(str) {
  return str.length === 0;
}

// Tests
console.log(isBlank(''));      // true
console.log(isBlank('abc'));   // false

// ===== Exercise 2 =======================================================================================================
function abbrevName(name) {
  const parts = name.split(" "); 
  return parts[0] + " " + parts[1][0] + ".";
}

// Test
console.log(abbrevName("Robin Singh")); // "Robin S."

// ===== Exercise 3 =======================================================================================================
function swapCase(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }

  return result;
}

// Test
console.log(swapCase("The Quick Brown Fox"));
// tHE qUICK bROWN fOX

// ===== Exercise 4 =======================================================================================================
    function isOmnipresent(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].includes(value)) {
      return false;
    }
  }
  return true;
}

// Tests
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); // true
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); // false

// ===== Exercise 5 =======================================================================================================


// to checking this exercise please check out this link"https://github.com/ATTAIKI-Aymane/geeks_institute_bootcamp/blob/main/week_1/day_2/exercises/ex_5_xp_gold.html"