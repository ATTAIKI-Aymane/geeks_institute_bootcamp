// ===== Exercise 1
const person1 = {
  fullName: "Aymane Attaiki",
  mass: 75,      // بالكيلوغرام
  height: 1.75,  // بالمتر
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  }
};

const person2 = {
  fullName: "Ahmed Benali",
  mass: 85,
  height: 1.8,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  }
};

function compareBMI(p1, p2) {
  const bmi1 = p1.calcBMI();
  const bmi2 = p2.calcBMI();

  if (bmi1 > bmi2) {
    console.log(p1.fullName + " has the higher BMI");
  } else if (bmi2 > bmi1) {
    console.log(p2.fullName + " has the higher BMI");
  } else {
    console.log("Both have the same BMI");
  }
}

compareBMI(person1, person2);


// ===== Exercise 2
// 1️⃣ Function ديال حساب المتوسط فقط
function calculateAverage(gradesList) {
  let sum = 0;
  for (let i = 0; i < gradesList.length; i++) {
    sum += gradesList[i];
  }
  return sum / gradesList.length;
}

// 2️⃣ Function ديال decision
function findAvg(gradesList) {
  const average = calculateAverage(gradesList);

  if (average >= 65) {
    console.log("Passed with an average of " + average);
  } else {
    console.log("Failed with an average of " + average + ", must repeat the course");
  }
}

const studentGrades1 = [80, 77, 88, 95, 68];
const studentGrades2 = [50, 60, 58, 62, 47];

findAvg(studentGrades1);
findAvg(studentGrades2);



