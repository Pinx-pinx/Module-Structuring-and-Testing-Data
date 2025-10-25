// Predict and explain first...
//  This code should return a value of adding a and b but this code has an error

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// The function sum takes 2 parameter
//return; was used as statement without  a value so the return is undefined.
//a+b; will not run because it comes after return
// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`); using th function as a template literal will give you undefined since 10+32 was never executed

// // Finally, correct the code to fix the problem

// function sum(a,b){

//  return a+b
// }
 // console.log(`The sum of 10 and 32 is ${sum(10, 32)}`)