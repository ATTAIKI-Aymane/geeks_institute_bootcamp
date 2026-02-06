// ====== Daily Challenge 1
// to checking this exercise please check out this link "https://github.com/ATTAIKI-Aymane/geeks_institute_bootcamp/tree/main/week_1/day_2/daily_challenge/Planets"


// ====== Daily Challenge 2

// 1️⃣ Prompt user
const input = prompt("Enter words separated by commas:");

// 2️⃣ Convert to array
const words = input.split(",").map(word => word.trim());

// 3️⃣ Find longest word length
let maxLength = 0;

for (let word of words) {
  if (word.length > maxLength) {
    maxLength = word.length;
  }
}

// 4️⃣ Create top/bottom frame
const frame = "*".repeat(maxLength + 4);

// Print top border
console.log(frame);

// 5️⃣ Print words inside frame
for (let word of words) {

  // spaces to complete rectangle
  const spaces = " ".repeat(maxLength - word.length);

  console.log(`* ${word}${spaces} *`);
}

// Print bottom border
console.log(frame);



// ====== Daily Challenge 3
