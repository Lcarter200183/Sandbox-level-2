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
    document.write(message;
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