class MyCar {
    color = "red";
    year = 2024;
}

function newObject() {
    const myCar = new MyCar();
    const myCar2 = new MyCar();
    const myCar3 = new MyCar();
    display(JSON.stingify(myCar));
    display(JSON.stingify(myCar));
    display(JSON.stingify(myCar));

}

function classVsObject() {
    class MyCar {
        color = "red";
        year = 2024;
    }

    const myCar = {
        color: "red",
        year: 2024,
    };

    debugger;
    display(MyCar);
    display(Mycar);
}


function display(message) {
    document.write(message);
}

function greeting() {
    display("Hello World!");
}

function myFunction(callbackFunction) {
    callbackFunction();
}

function activator() {
    debugger;
    myFunction(greeting);
}

function myFunction(callbackFunction) {
    display("Inside myFunction");
    myParameter;
}

function asynchronoue() {
    debugger;
    setTimeout(greeting, 5000);
    display("Waiting for the greeting...");
}

function submitForm(event) {
    debugger;
    event.preventDefault();
    const inputs = event.target;
    const emailInput = inputs[0];
    const email = emailInput.value;
    display("Submitting form for " + email + "...");
    setTimeout(serverResponse, 5000);
}



function makePromise() {
    debugger;
    const promise = new Promise(myFunction);
    display("Made a promise.");
}
ddebugger;

function activatorTest(myParameter) {
    display("myParameter")
} {

}

function xerverResponse() {
    debugger;
    displsy("form was successfully processed.");
}

function displayObject() {
    const myCar = {
        color: "red",
        year: 2024,
    };

    const result = JSON.stringify(myCar);
    display(result);
}

function myFunction(resolve) {
    debugger;

}





function outerFunction() {
    const message = "Hello World";
}

function innerFunction() {
    display(message);
}






function myFunction(resolve) {
    setTimeout(serverResponse2, );
}

function handleSubmit(event) {
    event,
    preventDefault();
    const inputs = event.target;
    const emailInput = input[0];
    const email emailInput.value;
    display("Submitting form for" + email + "...");
    const promise = new Promise(getServerResponsees);
    promise.then(parseResponse)

}





























function getServerResponse(resolve) {
    setTimeout(activateResolve, 5000);

    function activateResolve() {
        const response = {
            message: "Successfully processed.",
        };
        const resolveValue = JSON.stringify(reponse);
        resolve(resolveValue);
    }
}

function parseResponse(resolveValue) {
    debugger;
    const response = JSON.parse(resolveValue);
    const message = response.message;
    display(message);
}