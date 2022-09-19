//Complete the instructions for each numbered problem. Each numbered problem is worth 10 points


//1. data types built-in methods, variables

//a. define a variable and give it a string value
let name = "Isaac";

//b. define a variable and give it a number value
let age = 25;

//c. define a variable and give it a boolean value
let isProgrammer = true;
console.log(isProgrammer);

//2. if else, ternary
//a. define a variable 'metrocard' and give it a value of 5
let metrocard = 5;

//b. write an if statement that has a condition to check if the value of metro card is greater than 2.75, and display the message "you have enough to ride the train", if the condition is true
if (metrocard > 2.75) {
  console.log("You have enough to ride the train");
}

//c.write an else statement that displays the message "you do not have enough to pay fare sorry"
else {
  console.log("You do not have enough to pay fare sorry");
}

//d. write the above if/else statement again as a ternary

metrocard > 2.75
  ? console.log("You have enough to ride the train")
  : console.log("You do not have enough to pay fare sorry");


//3. conditionals 2 (1 pt)
//a.  complete this codecademy project: https://www.codecademy.com/courses/introduction-to-javascript/projects/magic-eight-ball-1
//add a screenshot showing your completion of this project to the root folder of this repo

//4. functions
//a. write a function named helloWorld that returns the value 'Hello World!'

function helloWorld() {
  return "Hello World!";
}

//b. console log the value returned from running the function helloWorld
console.log(helloWorld());


//3. arrays
//a. define a variable myArray and assign it to a value of an array. Give the array at least 5 elements
const myArray = [1, 2, 3, 4, 5];

//b. an array's index starts at:
// 0

//4. loops
//a. write a for loop that console logs even numbers starting at 10 and decrementing to 0
for (let i = 10; i >= 0; i--) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//5. objects
//a. define a variable named 'bike'
let bike;

//b. assign an object to bike
bike = [];

//c. give the object 3 properties: handlebars, color, wheels
//d. give each property a value

bike.handlebars = "curved";
bike.color = "green";
bike.wheels = "28 inches";
console.log(bike);

//6. Chessboard
/*Write a function that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8. 
**You do not need to accept user input this differs from Eloquent JS's directions 

read and refer to https://eloquentjavascript.net/02_program_structure.html  there are hints at the bottom of the page 
*/

// Uses 8 as default value when parameter is not entered
function createGrid(width = 8, height = 8) {
  // define grid
  let grid = "";
  // Create for loop to create each row (row #)
  for (let i = 0; i < height; i++) {
    // Create for loop for each space in each row (col #)
    for (let j = 0; j < width; j++) {
      // if the sum of col # && row # is even, add a space
      if ((j + i) % 2 === 0) {
        grid += " ";
      }
      // else add a "#"
      else {
        grid += "#";
      }
    }
    // now that the row is complete add a newLine
    grid += "\n";
  }
  // after grid is complete return the grid
  return grid;
}

console.log(createGrid(8, 8));
console.log(createGrid(21, 3));

// for (let j = 0; j < width; j++) {
//     // if the col # is even and row # is even add a space
//     if (j % 2 === 0 && i % 2 === 0) {
//       grid += " ";
//     }
//     // if the col # is odd and row # is even add a #
//     else if (j % 2 === 1 && i % 2 === 0) {
//       grid += "#";
//     }
//     // if the column # is odd and row # is even add a #
//     else if (j % 2 === 1 && i % 2 === 1) {
//       grid += " ";
//     }
//     // else add "#"
//     else {
//       grid += "#";
//     }
//   }

