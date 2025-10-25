// Predict and explain first...
// This code should return a percentage value but there are errors in the code wo it wil not work.

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber= 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// The error is the parameter "decimalNumber" has been redeclared as a variable which cause a naming conflict. 
//Because the code redeclares a new constant with the same name as the parameter, the argument passed to the function is ignored.
// Next error is  is the console.log(decimalNumber), In here you cannot acces a declaredvariale inside a local frame from a global frame


// Finally, correct the code to fix the problem

// function convertToPercentage(decimalNumber) {
//const percentage = `${decimalNumber * 100}%`;
//return percentage;
//}
//Cons result = convertToPercentage(0.5)

//console.log(result);
