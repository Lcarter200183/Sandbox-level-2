class MyCar {
    color = "red";
    year = 2024;
}

function newObject() {
    const myCar = new MyCar();
    const myCar2 = new MyCar();
    const myCar3 = new MyCar();

    myCar2.color = "white";
    myCar3.year = 2025;

    display(JSON.stingify(myCar));
    display(JSON.stingify(myCar));
    display(JSON.stingify(myCar));

}

function classVsObject() {
    class MyCar {
        color = "red";
        year = 2024;
    }
}

const myCar = {
    color: "red",
    year: 2024,
};

function classVsObject() {
    class MyCar {
        color = "red";
        year = 2024;
    }
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
    myFunction(greeting);
}

function delayedGreeting() {
    setTimeout(greeting, 5000);
}

function asychronous() {
    setTimeout(greeting, 5000);
    display("Waiting for a greeting...");
}

function submitForm(event) {
    const form = event.target;
    const emailInput = input[0];
    const email = emailInput.value;
    display("submitting form for" + email);
    setTimeout(serverResponse, 5000);
}

function serverResponse() {
    display("Form was successfully processed.");
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
    setTimeout(serverResponse2, 5000);
    display("Inside my myFunction");

    function serverResponse2() {
        display("Form was successfully processed.");
        resolve("The promise is fulfilled");
    }
}

function makePromise() {
    debugger;
    const promise = new Promise(myFunction);
    promise.then(getMessage);
    display("Made a promise.");
}

function getMessage(resolveValue) {
    display(resolveValue);
}

function activatorTest(myParameter) {
    debugger;
    display("myParameter");
}

function outerFunction() {
    const message = "Message from the outerFunction";
    innerFunction();

    function innerFunction() {
        display(message);
    }
}

function handleSubmit(event) {
    debugger;
    event.preventDefault();
    const inputs = event.target;
    const emailInput = Input[0];
    const email = emailInput.value;
    display("Submitting form for" + email + "...");
    const promise = makeRequest("getServerResponse");
    promise.then(parseResponse);

}

function getServerResponse(resolve) {
    setTimeout(activateResolve, 5000);

    function activateResolve(resolve) {

        //SIMULATE A SERVER BY SENDING A STRINGIFIED OBJECT
        const response = {
            message: "Successfully processed.",
        };
        const resolveValue = JSON.stringify(response);
        resolve(resolveValue);
    }
}

function parseResponse(resolveValue) {
    debugger;
    const response = JSON.parse(resolveValue);
    const message = response.message;
    display(message);
}

function myPromise() {
    const promise = new Promise(getServerResponse);
    return promise;
}