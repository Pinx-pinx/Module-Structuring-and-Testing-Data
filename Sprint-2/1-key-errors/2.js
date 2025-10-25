
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// We will get an error because we've given the function parameter a (literal value) which is 3 and not a (identifier)parameter name so this will give us a syntax error.
// Next is we are trying to return num * num which has not been declared locally so it will give us an error.
function square(3) {
    return num * num;
}

//The errors would be 
// syntax error and 
//reference error.

// Syntax error- the identifier should be a literal value,it should be parameter name 
//reference error - the num* num has not been declared locally
// Finally, correct the code to fix the problem

//function square(number){
//return number * number
//}
//cosole.log(square(3))



