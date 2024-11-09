function display(message) {
    debugger;
    document.write(message);
}

function outputessage(message) {
    outputTag.innerHtml = message;
}

function myProcessForm(event) {
    document.write("Form Processed");


    event.prevent(); // this prevent page from refreshing after submitting a form.

    const form = event.target;
    const input = form[0];
    const value = input.value;
    output(`Your password is${value}.<br>`)
}


function myProcessForm(event) {
    document.write("Form Processed");


    const form = event.target;
    const passwordInput = form[0];
    const firstnameInput = form[1];
    const lastnameInput = form[2];
    const firstname = firstnameInput.value;
    output(`Your first name is ${firstname}.<br>`)

}