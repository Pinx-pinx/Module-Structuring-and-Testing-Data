// Predict and explain first...

// Predict the output of the following code:
// In this code we are supposed to get the last digit of the given argument but it will give an error
//because the variable was declared constant so it will ignore the argument given and also the function getLastDigit was not given a parameter so it will not take any argument 
// return num.toString().slice(-1); - .slice works on strings and arrays, so here we convert the number to a string so that .slice(-1) works
//the output you will always get is 
//The last digit of 42 is 3
//The last digit of 105 is 3
//The last digit of 806 is 3

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// I run the code and the output is the same as my prediction 
// the   output you will always get is 
//The last digit of 42 is 3
//The last digit of 105 is 3
//The last digit of 806 is 3
// Explain why the output is the way it is
// The output is the way it is because first there was a costant variable declared which 103
// Then also the function was not give a parameter name so it will not take any argumentt.
// Finally, correct the code to fix the problem
//  function getLastDigit(num) {
//  return num.toString().slice(-1);
//  }

//console.log(`The last digit of 42 is ${getLastDigit(42)}`);
//console.log(`The last digit of 105 is ${getLastDigit(105)}`);
//console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
