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
// 1️⃣ Function ديال decision: checks pass/fail
function checkPassFail(average) {
    if (average >= 65) {
        return `Passed with an average of ${average}`;
    } else {
        return `Failed with an average of ${average}, must repeat the course`;
    }
}

function findAvg(gradesList) {
    let sum = 0;

    gradesList.forEach(grade => sum += grade);

    const average = sum / gradesList.length;

    // call checkPassFail function
    const resultMessage = checkPassFail(average);

    console.log(resultMessage);
}

// Test data
const studentGrades1 = [80, 77, 88, 95, 68];
const studentGrades2 = [50, 60, 58, 62, 47];

// Call function
findAvg(studentGrades1);
findAvg(studentGrades2);


