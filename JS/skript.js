// ============================================================
// ÚVOD DO JAVASCRIPTU - Gymnázium
// ============================================================
// Společně naprogramujeme jednoduché počítadlo s hodinami
// ============================================================

// 1. PROMĚNNÉ
// TODO: vytvořit proměnnou pro počítadlo
let pocitadlo = 0;
const KROK = 1;
let jmeno = "semianr 2025/2026";
const pi = 3.14159;

// 2. VÝPIS DO KONZOLE
// TODO: vyzkoušet console.log()
//alert("Vítejte" + jmeno);
console.log("Hodnota pi je přibližně: " + pi);

// 3. PŘÍSTUP K PRVKŮM NA STRÁNCE
// TODO: najít prvky pomocí document.querySelector()
const elNadpis = document.querySelector("h1")
const elPocitadlo = document.querySelector("#pocitadlo")
const eltlPlus = document.querySelector("#tlPricti")
const eltlMinus = document.querySelector("#tlOdecti")
const eltlReset = document.querySelector("#tlReset")
const elCas = document.querySelector("#cas")
const elVstup = document.querySelector("#vstup")

// 4. FUNKCE
// TODO: napsat funkci pro aktualizaci zobrazení
function zobrazCas() {
    let ted = new Date();
    elCas.innerText = ted.toLocaleTimeString();
    elCas.style.color = "#8f540c"; 
}

function aktualizujPocitadlo() {
    elPocitadlo.innerText = pocitadlo;
    if (pocitadlo > 0) {
        elPocitadlo.style.color = "green";
    } else if (pocitadlo < 0) {
        elPocitadlo.style.color = "red";
    } else {
        elPocitadlo.style.color = "black";
    }
}

function plusPocitadlo() {
    pocitadlo = pocitadlo + KROK;
    aktualizujPocitadlo();
}



// 5. UDÁLOSTI
// TODO: přidat reakce na kliknutí tlačítek
eltlPlus.addEventListener("click", plusPocitadlo);

eltlMinus.addEventListener("click", function minusPocitadlo() {
    pocitadlo = pocitadlo - KROK;
    aktualizujPocitadlo();
});

eltlReset.addEventListener("click", function resetPocitadlo() {
    pocitadlo = 0;
    aktualizujPocitadlo();
});

elVstup.addEventListener("change", function(event) {
    let vstup = parseInt(event.target.value, 10);
    if (isNaN(vstup)) {
        console.log("Zadal jsi blbost: " + vstup);
    } else {
    pocitadlo = vstup
    aktualizujPocitadlo()
    event.target.value = ""
}});

let puvodniHodnota = "";

elNadpis.addEventListener("mouseover", function() {
    puvodniHodnota = elNadpis.innerText;
    elNadpis.style.textDecoration = "underline";
    elNadpis.innerText = "Ahoj";
})

elNadpis.addEventListener("mouseout", function() {
    elNadpis.style.textDecoration = "none";
    elNadpis.innerText = puvodniHodnota;
})

// 6. ČASOVAČ
// TODO: zobrazit aktuální čas
setInterval(zobrazCas,1000)

// 7. Volání

zobrazCas();