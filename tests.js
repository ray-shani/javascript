// // // Dom manipulation
// // let paragraph=document.querySelector('p');
// // paragraph.textContent="Welcome to the testing of this content and new practices";

// // let newParagraph=document.createElement('p');
// // newParagraph.textContent="This is a new pargraph that i have created";
// // newParagraph.style.cssText="color:red;";
// // paragraph.appendChild(newParagraph);

// // let newHeading=document.createElement('h3');
// // newHeading.textContent="I am a h3 heading";
// // newHeading.style.cssText="color:blue;";
// // paragraph.appendChild(newHeading);


// // // Nesting in a new element
// // // let newDiv=document.createElement('div');
// // // newDiv.className="container";

// // // let divHeading=document.createElement('h1');
// // // divHeading.textContent="Im in a div";

// // // let newParagraph=document.createElement('p');
// // // newParagraph.textContent="ME TOO";

// // // newDiv.appendChild(h1InDiv);
// // // newDiv.appendChild(pInDiv);
// // // paragraph.appendChild(newDiv);


// // // Working with buttons

// // let buttonEvent=document.querySelector('button');
// // function clickedButton(){
// //   alert("You have clicked this button!!")
// // }
// // buttonEvent.addEventListener('click',clickedButton);

// // Working with arrays
// // Finding even numbers
// // function sumOfTrippledEvens(array){
// //   let sum=onabort;
// //   for(let i=0;i<array.length;i++){
// //     if(array[i]%2===0){
// //       const tripleEvenNumber=array[i]*3;
// //       sum=sum+tripleEvenNumber;
// //     }
// //   }
// // return sum;
// // }

// // Creating a function that doubles an array.

// // function multiply(num){
// //   return num*num;
// // }
// // const arr=[1,2,3,4,5,5,6,8];
// // const mappedArray=arr.map(multiply);
// // console.log(mappedArray);

// // Create a function that returns values that are odd in an array

// // function isOdd(number){
// //   return number%2!==0;
// // }
// // const newArray=[1,2,3,4,5,6,7,8];
// // const oddNumbers=newArray.filter(isOdd);
// // console.log(newArray);
// // console.log(oddNumbers);

// // // Creating a function that multiplies against itself
// // const newArray2=[2,3,4,5,6,7,8];
// // function productOfArray(total,currentItem){
// //   return total*currentItem;
// // }
// // const product=newArray2.reduce(productOfArray,1);
// // console.log(product);

// // // A loop that returns a string multiple times
// // function repeatString(string,num){
// //   let newString="";
// //   for( let i=0;i<num;I++){
// //     newString=newString+string;
// //   }
// //   return newString;
// // };

// // // Using a function to reverse a string
// // function reverse(strings){
// //   let reversed="";
// //   for(let i=strings.length-1;i>=0;i--){
// //     reversed=reversed+strings[i];
// //   }
// // }
// // let getReversed=reverse("cookie");
// // console.log(getReversed);

// // //Corrected version
// // let string="cookie";
// // let reverse="";
// // for(let i = string.length - 1; i >= 0; i--){
// //   reverse=reverse+string[i];
// // }
// // console.log(reverse);

// // // Trying to use a function to reverse a striing
// // function reversing(xstring){
// //   let reverser="";
// //   for(let i=xstring.length-1;i>=0;i--){
// //     reverser=reverser+xstring[i];
// //   }
// //   return reverser;
// // }
// // let word=reversing("John");
// // console.log(word);

// // working with the for of loop
// let scores=[50,70,80,100,60];
// for (scores of scores) {
//   console.log(scores);
// }

// // How to sort out an array
// let scored=[50,70,80,100,60];
// scored.sort(function(a,b){
//   return a-b;
// }
// )
// console.log(scored);
// console.log(scored[1]);


// // Printing even and odd numbers
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) { // If the number is even...
//     // continue; // ...skip this iteration and go to the next value of i
//     console.log(i);
//   }
// }
// //   else{
// //     return "Not an even number";
// //   }
// //   // console.log(i); // Logs 1, 3, 5, 7, 9
// // }
// // console.log(i);

// // Working on fizzbuzz
// function fizzBuzz() {
//   for (let i = 1; i <= 100; i++) {
//     // Must check for the most specific condition first!
//     if (i % 3 === 0 && i % 5 === 0) { // or (i % 15 === 0)
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz();

// //Calculating the factorials of a number
// function factorial(num){
//   let result=1;
//   for(let i=num;i>0;i--){
//     result=result+i;
//   }
//   return result;
// }

// let test=factorial(10);
// console.log(test);

// //An example of a switch statement
// let day="Monday";
// let message="";
// switch(day){
//   case "Monday":
//     message="Arise and shine and give God the glory glory";
//     break;
//   case "Tuesday":
//     message="Tuesday recovery mode battery low";
//     break;
//   case "Wednesday":
//     message="Almost there";
//     break;
//   case "Thursday":
//     message="One more day";
//     break;
//   case "Friday":
//     message="Its a Friday Go home";
//     break;
//     default:
//       message="What a day";
// }
// console.log(message);

// //Working with Objects
// let user={
//   jina:'Ray',
//   age:23,
//   email:'giza@gmail.com',
//   location:'Kisumu',
// };

// console.log(user.email);
// user.age=90;
// console.log(user.age);

// // Using methods
// let numArrays=[2,6,7,8,3];
// numArrays=numArrays.sort().reverse();
// console.log(numArrays[1]);


// // Working with objects
// const object={
//   alive:true,
//   answer:42,
//   hobbies:["eating","sleeping","working"],
//   beverage:{
//     morning:"Coffee",
//     afternoon:"sweets"
//   },
//   snack:" JavaBiscuits",
//   work:function(){
//     return "Lets get up and work!"
//   }
// }

// console.log(object.work());
 