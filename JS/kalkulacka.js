const eltlPlus = document.querySelector("#tlPlus")
const eltlMinus = document.querySelector("#tlMinus") 
const eltlKrat = document.querySelector("#tlKrat") 
const eltlDeleno = document.querySelector("#tlDeleno") 
const elcislo1 = document.querySelector("#vstup1") 
const elcislo2 = document.querySelector("#vstup2") 
const elVysledek = document.querySelector("#vysledek")

let vysledek = 0;
let cislo1 = 0;
let cislo2 = 0;

function aktualizujVysledek() {
    elVysledek.innerText = vysledek;
}

elcislo1.addEventListener("change", function(event) {
    let vstup = parseInt(event.target.value, 10);
    cislo1 = vstup;
    if (isNaN(cislo1)) {
        console.log("Zadal jsi blbost: " + cislo1);
    }});

elcislo2.addEventListener("change", function(event) {
    let vstup = parseInt(event.target.value, 10);
    cislo2 = vstup;
    if (isNaN(cislo2)) {
        console.log("Zadal jsi blbost: " + cislo2);
    }});

eltlPlus.addEventListener("click", function plus() {
    vysledek = cislo1 + cislo2;
    aktualizujVysledek();
});

eltlMinus.addEventListener("click", function minus() {
    console.log(cislo1)
    vysledek = cislo1 - cislo2;
    aktualizujVysledek();
});

eltlKrat.addEventListener("click", function krat() {
    vysledek = cislo1 * cislo2;
    aktualizujVysledek();
});

eltlDeleno.addEventListener("click", function minus() {
    if (cislo2 == 0) {
        vysledek = "error";
    } else {
    vysledek = cislo1 / cislo2;}
    aktualizujVysledek();
});