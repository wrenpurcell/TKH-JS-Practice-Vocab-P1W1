//Complete the instructions for each numbered problem. Each numbered problem is worth 10 points

//1. data types built-in methods, variables

//a. define a variable and give it a string value
const variable1 = "Wednesday";

//b. define a variable and give it a number value
let variable2 = 56

//c. define a variable and give it a boolean value
const variable3 = false

//2. if else, ternary
//a. define a variable 'metrocard' and give it a value of 5
let metrocard = 5;

//b. write an if statement that has a condition to check if the value of metro card is greater than 2.75, and display the message "you have enough to ride the train", if the condition is true
if(metrocard > 2.75) {
  console.log("you have enough to ride the train");
}
//c.write an else statement that displays the message "you do not have enough to pay fare sorry"
else{
 console.log("you do not have enough to pay fare sorry");
}

//d. write the above if/else statement again as a ternary
metrocard > 2.75 ? console.log("you have enough to ride the train") : console.log("you do not have enough to pay fare sorry");
//3. conditionals 2 (1 pt)
//a.  complete this codecademy project: https://www.codecademy.com/courses/introduction-to-javascript/projects/magic-eight-ball-1
//add a screenshot showing your completion of this project to the root folder of this repo

//4. functions
//a. write a function named helloWorld that returns the value 'Hello World!'
function helloWorld() {
return 'Hello World!';
}
//b. console log the value returned from running the function helloWorld
console.log(helloWorld());
//5. arrays
//a. define a variable myArray and assign it to a value of an array. Give the array at least 5 elements
let myArray = ["element1", "element2", "element3", "element4", "element4", "element5"]
//b. an array's index starts at:
// index[0]

//6. loops
//a. write a for loop that console logs even numbers starting at 10 and decrementing to 0
for (i=10; i>=0; i--)
 if(i % 2 == 0){
 console.log(i);
 }
//7. objects
//a. define a variable named 'bike'
let bike;
//b. assign an object to bike
let bike = {};
//c. give the object 3 properties: handlebars, color, wheels
let bike = {
 handlebars:
 color:
 wheels:
}
 
//d. give each property a value
let bike = {
 handlebars: 'alluminium' ,
 color: 'red',
 wheels : 'hard rubber'
}
//8. Chessboard
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
