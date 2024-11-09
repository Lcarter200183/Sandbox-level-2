//GLOBAL SCOPE

//FUNCTION SCOPE
//DECLARE VARIABLE IN A FUNCTION
//ONLY THE FUNCTION HAS ACCESS TO THE VARIABLE
function myFunction() {

}


//BLOCK SCOPE
//DECLARE VARIABLE IN CURLY BRACES []
//ONLY THE CODE BLOCK HAS ACCESS TO THE VARIABLES
while (false) {
    const x = 5;
}

do {


}

if (true) {
    const x = 10; {
        else {
            const x = 10;
        }

    }