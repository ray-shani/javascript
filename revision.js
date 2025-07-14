console.log("Hello world");

let age=25;
let year=2019;
console.log(age,year);

age=30;
console.log(age);

const points=100;
console.log(points);

var score=75;
console.log(score);

//Strings
console.log("Hello,world!");
let email="jinja@gmail.com";

//String concatenation

let firstName="Brandon";
let lastName="Macharia";
console.log(firstName+""+lastName);

//getting characters

console.log(firstName[0]);

//string length

console.log(firstName.length);

//string methods
console.log(firstName.toUpperCase());

let index=email.indexOf('@');

// Strings are a series of letters numbers and chracters in quotes athat have propperties like .length and methods
// Methods are specific functions that belong to a certain object type

//Other methods commonly used are 
let emails="thesupermario@gmail.com";
let results=emails.lastIndexOf('m');

results=emails.slice(0,12);
console.log(results);

results=email.substring(4,10);
console.log(results);

results=email.replace('m','s');
console.log(results);


// Working with numbers
let radius=10;
const pi=3.14;
console.log(radius,pi);

// Math operatos +,-,*,/
console.log(10/2);
let result=radius%3;
console.log(result);

result=pi*radius**2;
 console.log(result);

//  Order of operations
// BIDMAS+>Brackets,Indices,Division,Addition,Subtraction

let bodycount=30;
bodycount+=10;//Shorthand for taking initial value plus the value added onto the other side
console.log(bodycount);

// NaN=not a number
console.log(5*"Hello");
