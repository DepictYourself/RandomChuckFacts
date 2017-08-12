/*
Hardcoded chucknorris.io API url.
We receive our random jokes from this servers
*/
var chuckApi = "https://api.chucknorris.io/jokes/random";

/*
We request a joke from the server first time when the page loads.
This is done by eventlistener and the loadJoke function.
*/
window.addEventListener("load", loadJoke());

/*
This function sends a http request to the api
When we get the requested joke we put in on the page.
*/
function loadJoke() {
    //We will make a http request with this new XMLHttpRequest object.
    var xhttp = new XMLHttpRequest();

    /*
    onreadystatechange stores a callback function
    and executes it every time its state changes.
    We are using an if statement so the function only executes when the readystate is 4
    which means the request is processed and the response is ready.
    http response code 200 means OK.
    */
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //Assign the JSON to a variable so we can parse it
            chuckJson = this.responseText;
            //basically converting JSON to regular Javasciprt Object.
            chuckObject = JSON.parse(chuckJson);
            //If I want to see the whole response I can in the console.
            console.log("received JSON object from the API: " + chuckJson);
            /*
            Finally we assign the joke to the html p tag
            The jokes is stored in chuckObject.value
            */
            document.getElementById("quoteParagraph").innerHTML = chuckObject.value;
        }
    };
    /*
    Specifying the type of http request. GET method will retrieve data from the server.
    The API's url is stored in the chuckApi variable.
    true switch means it is working asynchronously. So the code won't stop and wait
    The response can arrive and we can start processing it after it arrived.
    Actually this is why we need the if statement in the callback function.
    */
    xhttp.open("GET", chuckApi, true);
    //Actually sending the request.
    xhttp.send();
}