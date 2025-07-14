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

// Working with arrays
// Used to store a collection of things in
let ninjas=["donatello","mickey","raphael"];
ninjas[2]="arshley";
console.log(ninjas[1]);

let ages=[20,20,53,57,68];
console.log(ages[1]);

// Properties 
console.log(ninjas.length);

// Methods
result=ninjas.join(",");
console.log(result);

result=ninjas.indexOf("arshley");
console.log(result);

let concatenation=ninjas.concat(["teenage","mutant"]);
console.log(concatenation);

result=ninjas.push('ken'); //This returns the length of the new array
console.log(result);

result=ninjas.pop('ken');
console.log(result);


// Working with null and undefined
// Null is deliberate assignment of this to the variable
// Undefined is the deliberate unassignment of a value
let day;
console.log(day);


// Working with booleans
// Booleans are used to check if statements are true or false'
//.inludes() used to check if s certain character is in a string
//Later letter s in the alphabet are greater than earlier letters in the alphabet
// Lowercase letters are greater than uppercase letters
//Abstract equality or loose equality is where a values type is not conisdered(==) when doing comparison
let scores='100';
scores=Number(score);
console.log(scores*100);
console.log(typeof scores);

// When you try to make something words that are not numbers you will get NaN as the result.
//Implicit type conversion you mannually change teh data type of something
//Explicit type conversion javascript as a language changes the data itself in the background

//Practice Exercises

let myName="Ray Shani";
console.log(myName);
console.log(typeof myName);

let myAge=23;
console.log(myAge);
console.log(typeof myAge);

let isStudent=true;
console.log(isStudent);
console.log(typeof isStudent);

isStudent=false;
console.log(isStudent);
console.log(typeof isStudent);

let address={
  "city":"Nairobi",
  "country":"Kenya"
}
console.log(address);
console.log(typeof address);

let hobbies=["reading","walking","singing","dancing"];
console.log(hobbies);
console.log(typeof hobbies);

let undefinedVariable;
console.log(undefinedVariable);
console.log(typeof undefinedVariable);

let nullVariable=null;
console.log(nullVariable);
console.log(typeof nullVariable);

// Calculating the year of birth
let yourName=prompt("What is your name ? ");
let yourAge=prompt("What is your age ? ");
let currentYear=new Date().getFullYear();
let yearOfBirth=currentYear-yourAge;
alert(`Your name is ${yourName} and you were born in ${yearOfBirth} `);



