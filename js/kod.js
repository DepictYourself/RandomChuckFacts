var chuckApi = "https://api.chucknorris.io/jokes/random";
var httpRequest = new XMLHttpRequest();

window.addEventListener("load", request());

function request(){
    httpRequest.open("GET", "https://api.chucknorris.io/jokes/random");
    httpRequest.onload = function(){
        var chuckJson = JSON.parse(httpRequest.responseText);
        console.log(chuckJson);
    };
    
};