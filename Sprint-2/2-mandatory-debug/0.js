// Predict and explain first...

// In this code we are supposed to have a result of multiplying a and b value but there are errors in tthis code.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// This function takes 2 parameters and logs the product of a * b inside the function.
// console.log(a * b) will print the product immediately inside the function, 
// but it does not return a value to the caller. 
// Therefore, using multiply(10, 32) inside a template literal shows undefined, 
// because the function must return a value for the template literal to display it.
/
/ Finally, correct the code to fix the problem
 // function multiply (a,b){
 
  //  return a*b;
  // }

  // console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);