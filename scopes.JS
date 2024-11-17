//Variable SCOPE
//september 5, 2024 hour 3 

//GLOBAL SCOPE
//DECLARE VARIABLES OUTDIDE OF CURLY BRACES
//ANY CODE IN THE SAME FILE HAS ACCESS TO THE VARIABLE
const PI = 3.13;
const globalVariable = "I'm in the global scope!";


//FUNCTION SCOPE (AKA LOCAL SCOPE)
//DECLARE VARIABLE IN A FUNCTION
//ONLY THE FUNCTION HAS ACCESS TO THE VARIABLE
function myFunction() {
    const myVariable = 5;
    const localVaroable = "I'm in the function scope!";

}


//BLOCK SCOPE
//DECLARE VARIABLE IN CURLY BRACES []
//ONLY THE CODE BLOCK HAS ACCESS TO THE VARIABLES
while (false) {
    const x = 5;
}

do {
    const x = 7;
    document.write(x);
} while _(false);

if (true) {
    const x = 10;
} else {
    const x = 10;
}

{
    let x = "x";
    document.write(x); //DISPLAY "x"
}
document.write(x); //UNDEFINED
{
    let x = 555;
    document.write(x); //DISPLAYS 555)
}