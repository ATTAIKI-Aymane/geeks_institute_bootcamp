// ===== Exercise 1 ===========================================================================================================

// Generate random number
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log("Random Number:", randomNum);

// Loop even numbers
for (let i = 0; i <= randomNum; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// ===== Exercise 2 ===========================================================================================================

function capitalize(str) {

  let evenCap = ""; // even indexes capital
  let oddCap = "";  // odd indexes capital

  for (let i = 0; i < str.length; i++) {

    // Even index
    if (i % 2 === 0) {
      evenCap += str[i].toUpperCase();
      oddCap  += str[i].toLowerCase();
    } 
    
    // Odd index
    else {
      evenCap += str[i].toLowerCase();
      oddCap  += str[i].toUpperCase();
    }

  }

  return [evenCap, oddCap];
}

// ===== Exercise 3 ===========================================================================================================

function isPalindrome(str) {

  // reverse the string
  let reversed = str.split("").reverse().join("");

  // compare
  if (str === reversed) {
    return true;
  } else {
    return false;
  }

}


// ===== Exercise 4 ===========================================================================================================

function biggestNumberInArray(arrayNumber) {

  // إذا كان array خاوي
  if (arrayNumber.length === 0) {
    return 0;
  }

  let biggest = -Infinity; // أصغر قيمة ممكنة

  for (let i = 0; i < arrayNumber.length; i++) {

    // نتحقق واش element رقم
    if (typeof arrayNumber[i] === "number") {

      if (arrayNumber[i] > biggest) {
        biggest = arrayNumber[i];
      }

    }

  }

  return biggest === -Infinity ? 0 : biggest;
}


// ===== Exercise 5 ===========================================================================================================

function getUnique(arr) {

  let newList = [];

  for (let i = 0; i < arr.length; i++) {

    // إلا ماكانش element ف newList نضيفوه
    if (!newList.includes(arr[i])) {
      newList.push(arr[i]);
    }

  }

  return newList;
}
