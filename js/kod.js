var szamlalo = 1;

window.addEventListener("load", anothaQuote());

function anothaQuote() {
    document.getElementById("quoteParagraph").innerHTML = "Teszt " + szamlalo;
    szamlalo = szamlalo + 1;
}