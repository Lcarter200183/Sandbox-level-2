function handleClick(event) {
    const promise = fetch("https://opentdb.com/api.php?amount=1");
    promise.then(parseResponse);
}

function parseResponse(resolveValue) {
    //THE RESOLVE VALUE WILL BE A FETCH OBJECT
    //THE TEXT METHOD EXTRACTS THE STRINGIFIED OBJECT
    const promise = resolveValue.text();
    promise.then(viewResponse);
}

function viewResponse(resolveValue) {
    debugger;
    //THE RESOLVE VALUE WILL BE A STRINGIFIED OBJECT
    //THE PARSE METHOD GENERATES AN OBJECT FROM THE STRING
    const response = JSON.parse(resolveValue);
    const results = response.results;
    const item = results[0];
    const question = item.question;
    const answer = item.correct_answer;
    const incorrects = item.incorrect_answers;

    const trivia = `<div>${question}</div>
    <ol type="a">
       <li>${incorrects[0]}</li>
       <li>${incorrects[1]}</li>
       <li>${incorrects[2]}</li>
       <li>${answer}</li>
    </ol>`
    output(trivia);
}



function handleQuoteOfTheDay() {
    debugger;
    const proxy = "https://thingproxy.freeboard.io/fetch/";
    const baseUrl = "https://favqs.com/api";
    const endpoint = "/qotd";
    const Url = proxy + baseUrl + endpoint;
    const promise = fetch();
    promise.then(extractResponse);
}

function extractResponse(resolveValue) {
    debugger;
    const promise = resolveValue.text();
    promise.then(parseQotdResponse);
}

function parseQotdResponse(resolveValue) {
    debugger;
    const response = JSON.parse(resolveValue);

}

function handleQuotes() {
    const proxy = "https://thingproxy.freeboard.io/fetch/";
    const baseUrl = "https://favqs.com/api";
    const endpoint = "/quotes";
    const url = proxy + baseUrl + endpoint;

    const key = "d934c59df436530c936c2d18a13205be";

    const options = {
        header: {
            Authorization: `Token token="${key}"`,
        },
    };

    const promise = fetch(url, options);
    promise.then(extractResponse);
}