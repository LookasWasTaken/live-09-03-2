/* Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
Sulla pagina html deve apparire “Ciao <nome>”, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito */

// const / let
// prompt
// getElementById / QuerySelector
// if/else if/else

const userName = prompt("Inserisci il tuo nome")
const userGender = prompt("Inserisci il tuo genere")

document.querySelector("h1").innerHTML = `Ciao, ${userName}`

if (userGender == "m"){
    document.querySelector("h1").style.color = "blue"
} else {
    document.querySelector("h1").style.color = "pink"
}