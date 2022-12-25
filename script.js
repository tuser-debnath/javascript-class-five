// JavaScript Ternary Operator

// If Else Common Operator
let age = 15;
if (age >= 12) {
  console.log("You are full age");
} else {
  console.log("You are not full age");
}

// Ternary Opetor Example One
age >= 12
  ? console.log("You are full age")
  : console.log("You are not full age");

// Ternary Opetor Example Two

let food;
if (age > 12) {
  food = "Chicken";
} else {
  food = "Ice Cream";
}
console.log(`He likes to eat ${food}`);

// age >= 12
//   ? console.log(`He likes to eat ${food}`)
//   : console.log(`He likes to eat ${food}`);

console.log(`He likes to eat ${age > 12 ? "Chicken" : "Ice Cream"}`);

// JavaScript Function
// Example One
function showText() {
  console.log("Some Text!");
}
showText();
showText();

// Example Two
function showName(name) {
  console.log(name);
}
showName("Ritom Debnath");
showName("Pritom Debnath");

// Example Three
function calculateNumber(n1, n2) {
  console.log(n1 + n2);
  console.log(n1 - n2);
}
calculateNumber(15, 5);

// Example Four
// function averageMark(n1, n2, n3, n4, n5) {
//   console.log((n1 + n2 + n3 + n4 + n5) / 5);
// }
// averageMark(75, 80, 90, 85, 82);

function averageMark(n1, n2, n3, n4, n5) {
  const average = (n1 + n2 + n3 + n4 + n5) / 5;
  return average;
}
// console.log(averageMark(75, 80, 90, 85, 82));

// aAverageMark
const aAverageMark = averageMark(75, 80, 90, 85, 82);
console.log(aAverageMark);

// cAverageMark
const bAverageMark = averageMark(85, 89, 70, 85, 92);
console.log(bAverageMark);

// cAverageMark
const cAverageMark = averageMark(95, 79, 73, 95, 90);
console.log(cAverageMark);
