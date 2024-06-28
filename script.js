//  Answer to the qs no : 1
let carName = "Volvo";

//  Answer to the qs no : 2
// So What Will Be The 1st Variable Name, Then 2nd Variable Values & 
// 3rd Variable Name And Values Both! 

let firstName = "John";  // write variable name
let lastName = "Doe" //write variable values 
let age = 35 ; // write variable name and values both 

//  Answer to the qs no : 3

let x = 10;
let y = 5;

x*=y;

console.log(x);

//  Answer to the qs no : 4

// Use comments to describe the correct data type of the following variables:

let length = 16; // Number type.
let last_Name = "Johnson"; // string type. 

const _x = {
  firstName: "John",  
  lastName: "Doe"
};    // object type.

//  Answer to the qs no : 5

// Execute the function named myFunction.
// call the function and see the output 
 
 function myFunction() {
  alert("Hello World!");
}

//myFunction();

//  Answer to the qs no : 6

// Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").

const person = {
    name:"John",
    age : 50
}
//alert(`${person.name} is ${person.age}`);

//  Answer to the qs no : 7

// const button = document.getElementById('myButton');

// button.addEventListener('click', ()=>{
//   alert('Button has been clicked!');
// });

//  Answer to the qs no : 8
// Array Related Question

const cars = ["Volvo", "Jeep", "Mercedes"];
//alert(cars.length);

// for (let i = 0; i < cars.length; i++) {
//     alert(cars[i]);
// }

// Change the first item of Brand to "Ford".

	const Brand = ["Volvo", "Jeep", "Mercedes"];

  Brand[0] = "Ford";

  console.log(Brand);

  //  Answer to the qs no : 9

  // Use the correct Math method to create a random number.

  const randomNumber = Math.random()*10;
  console.log(randomNumber);

  // Use the correct Math method to return the largest number of 10 and 20.

  const largestNumber = Math.max(10,20);
  console.log(largestNumber);

  // Use the correct Math method to get the square root of 9.

 const SquareRoot = Math.sqrt(9);
 console.log(SquareRoot);

//  Answer to the qs no : 10
//  comparison operator related problems!

// 1. Choose the correct comparison operator to alert true, when x is greater than y. 
x = 10;
y = 5;

//alert(x > y);

// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

// const Age = 16;
// alert(Age <18 ? "Too young": "Old enough");

console.log('Hellow world');