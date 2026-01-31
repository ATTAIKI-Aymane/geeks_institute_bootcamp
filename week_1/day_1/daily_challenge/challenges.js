// ====== Daily Challenge Not Bad ===================================================
let sentence = "This movie is not very very bad for me";

let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  let result =
    sentence.slice(0, wordNot) +
    "good" +
    sentence.slice(wordBad + "bad".length);

  console.log(result);
} else {
  console.log(sentence);
}


// ====== Daily Challenge 2

// ====== Daily Challenge 3
