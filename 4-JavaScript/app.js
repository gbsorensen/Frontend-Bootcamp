// let score = parseInt(prompt('Enter the score:'));
// let grade;

// if (score >= 90) {
//   grade = 'A';
// } else if (score >= 80) {
//   grade = 'B';
// } else if (score >= 70) {
//   grade = 'C';
// } else if (score >= 60) {
//   grade = 'D';
// } else {
//   grade = 'F';
// }

let numString = "7";
let num = 5;

let sum = num + numString;

console.log("Sum is ", sum);
console.log(typeof sum);

let sunny = true;
let warm = false;

console.log("Is it sunny and warm:", sunny && warm);
console.log("Is it sunny or warm:", sunny || warm);
console.log("Is it not sunny:", !sunny)

//Function call expressions
function myFunction(parameter1, parameter2) {
    console.log(parameter1 + parameter2)
}

myFunction(10, 20)

let day = "Monday"

switch(day) {
    case "Saturday":
        console.log("Saturday is a weekend")
        break
    case "Sunday":
        console.log("Sunday is a weekend")
        break
    default:
        console.log(`${day} is not a weekend`);
}
