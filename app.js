/*
Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
*/

// Dichiarazione array vuoto numeri generati
var numRandom = [];
// Dichiarazione array vuoto numeri utente
var numeriUtente = [];
  
for (var i = 0; i < 5; i++) {
    var x = randomNumberFromTo(1, 900);
    numRandom.push(x);
 };
// Avviso all'utente
console.log(numRandom);   
alert("I tuoi numeri sono : " + numRandom);


// FUNZIONE NUMERI RANDOM
  function randomNumberFromTo(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };