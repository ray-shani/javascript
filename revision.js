// console.log("Hello world");

const { useCallback } = require("react");

// let age=25;
// let year=2019;
// console.log(age,year);

// age=30;
// console.log(age);

// const points=100;
// console.log(points);

// var score=75;
// console.log(score);

// //Strings
// console.log("Hello,world!");
// let email="jinja@gmail.com";

// //String concatenation

// let firstName="Brandon";
// let lastName="Macharia";
// console.log(firstName+""+lastName);

// //getting characters

// console.log(firstName[0]);

// //string length

// console.log(firstName.length);

// //string methods
// console.log(firstName.toUpperCase());

// let index=email.indexOf('@');

// // Strings are a series of letters numbers and chracters in quotes athat have propperties like .length and methods
// // Methods are specific functions that belong to a certain object type

// //Other methods commonly used are 
// let emails="thesupermario@gmail.com";
// let results=emails.lastIndexOf('m');

// results=emails.slice(0,12);
// console.log(results);

// results=email.substring(4,10);
// console.log(results);

// results=email.replace('m','s');
// console.log(results);


// // Working with numbers
// let radius=10;
// const pi=3.14;
// console.log(radius,pi);

// // Math operatos +,-,*,/
// console.log(10/2);
// let result=radius%3;
// console.log(result);

// result=pi*radius**2;
//  console.log(result);

// //  Order of operations
// // BIDMAS+>Brackets,Indices,Division,Addition,Subtraction

// let bodycount=30;
// bodycount+=10;//Shorthand for taking initial value plus the value added onto the other side
// console.log(bodycount);

// // NaN=not a number
// console.log(5*"Hello");

// // Working with arrays
// // Used to store a collection of things in
// let ninjas=["donatello","mickey","raphael"];
// ninjas[2]="arshley";
// console.log(ninjas[1]);

// let ages=[20,20,53,57,68];
// console.log(ages[1]);

// // Properties 
// console.log(ninjas.length);

// // Methods
// result=ninjas.join(",");
// console.log(result);

// result=ninjas.indexOf("arshley");
// console.log(result);

// let concatenation=ninjas.concat(["teenage","mutant"]);
// console.log(concatenation);

// result=ninjas.push('ken'); //This returns the length of the new array
// console.log(result);

// result=ninjas.pop('ken');
// console.log(result);


// // Working with null and undefined
// // Null is deliberate assignment of this to the variable
// // Undefined is the deliberate unassignment of a value
// let day;
// console.log(day);


// // Working with booleans
// // Booleans are used to check if statements are true or false'
// //.inludes() used to check if s certain character is in a string
// //Later letter s in the alphabet are greater than earlier letters in the alphabet
// // Lowercase letters are greater than uppercase letters
// //Abstract equality or loose equality is where a values type is not conisdered(==) when doing comparison
// let scores='100';
// scores=Number(score);
// console.log(scores*100);
// console.log(typeof scores);

// // When you try to make something words that are not numbers you will get NaN as the result.
// //Implicit type conversion you mannually change teh data type of something
// //Explicit type conversion javascript as a language changes the data itself in the background

// //Practice Exercises

// let myName="Ray Shani";
// console.log(myName);
// console.log(typeof myName);

// let myAge=23;
// console.log(myAge);
// console.log(typeof myAge);

// let isStudent=true;
// console.log(isStudent);
// console.log(typeof isStudent);

// isStudent=false;
// console.log(isStudent);
// console.log(typeof isStudent);

// let address={
//   "city":"Nairobi",
//   "country":"Kenya"
// }
// console.log(address);
// console.log(typeof address);

// let hobbies=["reading","walking","singing","dancing"];
// console.log(hobbies);
// console.log(typeof hobbies);

// let undefinedVariable;
// console.log(undefinedVariable);
// console.log(typeof undefinedVariable);

// let nullVariable=null;
// console.log(nullVariable);
// console.log(typeof nullVariable);

// // Calculating the year of birth
// let yourName=prompt("What is your name ? ");
// let yourAge=prompt("What is your age ? ");
// let currentYear=new Date().getFullYear();
// let yearOfBirth=currentYear-yourAge;
// alert(`Your name is ${yourName} and you were born in ${yearOfBirth} `);

// Working with loops and learning about them
//for loop
// for(let i=0;i<5;i++){
//   console.log(i);
// }
// console.log("Loop finshed");

// // How to loop through data
// const names=['shaun','mario','luigi'];
// for(let i=0;i<names.length;i++){//As long as i is less than the value within the array the loop will run
// console.log(names[i]);//So the loop will look at the value represented by the length of the log
// }
// console.log("The loop is finished") 
// //Everytime a codeblock is gone through that is an iteration

// // A while loop
// let i=0;
//  while(i<names.length){
//     console.log(names[i]);//So through every iteration the code block will move to the next value until it has satisfied the length of the value
//   i++;
//  }

//  //Conditional statements
//  //If and else statements using logical operators
//  const password="P@ssword";
//  if(password.length>=4&&password.includes('@')&&password[0]==password[0].toUpperCase()){
//   console.log("This is a mighty strong password")
//  }
//  else{
//   console.log("Kindly add @ or make the first character uppercase");
//  }

// //  Continue jumps out of the iteration that it has been told and continues to thenext iteration as the start
// //Scope is the area a value is relevant

// // Working with functions
// //Functions are a reusable block of code
// //Method is a small function that does something
// function greet(){
//   console.log("Hello,there !");
// }
// greet();//This is calling/invoking a function

// const speak=function(){
//   console.log("Speak if you want to !");
// };
// speak();

// // Arrow functions
// const calcArea=(radius)=>{return 3.14*radius**2};
// const area=calcArea(9);
// console.log(area);

// const message=()=>"hello";
// const givenMessage=message();
// console.log(givenMessage);

// // Working with arrays
// let fruits=["apple","bananas","grapes","oranges"];
// // for(let i=0;i<fruits.length;i++){
// //   console.log(fruits[i]); 
// // }

// //printing an array in reverse
// for(let i=fruits.length-1;i>=0;i--){
//   console.log(fruits[i]);
// }

// // Shorthand for loops
// fruits.sort().reverse();
// for(john of fruits){
  
//   console.log(john);
// } 

// // Advanced javascript features
// //Objects in javascript
// // they ome in key value pairs and  in curly braces
// //This can be used to pull other values within the object

// const myFirst={jina:'Bery',
//   occupation:"Nurse",
//   area:"Kijabe",
//   men:"alot",
//   age:20,
//   hobbies:["sleep","eat","bien"],
//   drink:{
//     morning:"coffee",
//     afternoon:"Iced tea",
//     evening:"latte",
//   },
//   job:function(){
// return `Time for ${this.drink.morning}`
//   }
// }
// console.log(myFirst.job());

// //Object overall
// const vehicle={ 
//   wheels:4,
//   engine:function(){
//     return "Vroom";
//   },
// }
// const car=Object.create(vehicle);
// car.doors=4;
// car.engine=function(){
//   return "Whooooosh";
// }
// console.log(car.engine);
// console.log(car.wheels);

// const tesla=Object.create(car);
// tesla.engine=function(){
//   return "Shhhhhh";
// };
// console.log(tesla.engine());

// // Working with the keys and the values of objects
// const band={
//   vocals:"Citam Ngong",
//   guitar:"Valentine",
//   bass:"Kisoo",
//   Drums:"Robert",
// }
// console.log(Object.keys(band));
// console.log(Object.values(band));

// //A loop used to go through objects for in

// for(let job in band){
//   console.log(job);//When you call it this way it will give you the keeys to the objects not the values
//   console.log(band[job]);//When you do this it will give you the value of the information
// }

// //Destructuring objects
// //Name variables as the same names in their keys
// const person={
//   names:"Anita Tonui",
//   age:25,
//   occupation:"Pharmacist"
// };
// const {names,age,occupation}=person;
// console.log(`Her name is ${names} who is ${age} years old and is a ${occupation}`);

// // Using the pop and shift method
// let array=[1,2,3,4,5,6];
// array.push(7);
// console.log(array);
// array.shift();
// console.log(array);

// //An array accepting numbers
// // Wrong implementation
// function filterEvenNumbers(...evenNumbers){
//   for(let i=0;i<evenNumbers.length;i++){
//     if(evenNumbers[i]%2===0){
//       return(evenNumbers[i]);
//     }
//   }
// }
// let filtered=filterEvenNumbers([1,2,3,4,66,7,88,22]);
// console.log(filtered);

// // Correct implementation of the code
// function filterEvenNumbers(number){
//   const evenNumbers=[];
//   for(let i=0;i<number.length;i++){
//     if(number[i]%2===0){
//       evenNumbers.push(number[i]);
//     }
//   }
//   return evenNumbers;
// }
// filterEvenNumbers([1,2,3,4,66,7,88,22]);

// // What are promises in javascript
// Objects that perform asynchronous functions
// function walkDog(){
//   setTimeout(()=>{
//     console.log("You walk the dog");
//     callback();
//   },1500);
// }
// function cleanKitchen(callback){
//   setTimeout(()=>{
//     console.log("You clean the kitchen");
//     callback();
//   },2500);
// }
// function takeOutTrash(callback){
//   setTimeout(()=>{
//     console.log("You take out the trash");
//     callback();
//   },500);
// }4

// walkDog(()=>{
//   cleanKitchen(()=>{
//     takeOutTrash(()=>console.log("You finished all the chores"));
//   });
// });


// Arrow functions
//Using ana rarray and arrow functions
//Map gets the element of each array and returns it as needed
//Map is a higher orer function that takes another function as its parameter
const num=[1,3,4,5,7,8,9];
const doubled=num.map(num=>num*2);
console.log("My first array", num);
console.log("Doubbled array : " ,doubled);

