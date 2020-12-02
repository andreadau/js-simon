/*
Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
*/

// Dichiarazione array vuoto numeri generati
var numRandom = [];
// Dichiarazione array vuoto numeri utente
var numeriUtente = [];
var controllo;
// Ciclo per numeri random e inserimento nell'array
for (var i = 0; i < 5; i++) {
    var numero = randomNumberFromTo(1, 100);
    numRandom.push(numero);
 };
// Avviso all'utente
console.log(numRandom);   
alert("Ricorda bene questi numeri: " + numRandom + "\nTra 30 secondi ti verranno richiesti !");
// TIMER DI 30 SECONDI
setTimeout(function() {
    // Ciclo per inserire i numeri 
    for (var i=0; i < 5; i++) {
      numeroUtente = Number(prompt("Inserisci i numeri precedenti"));
      if (!numeriUtente.includes(numeroUtente)) {
        numeriUtente.push(numeroUtente);
      }
    }
    // Ciclo inserire numeri corretti in array
    var indovinati = [];
        for (var i=0; i < numeriUtente.length; i++) {
            if (numRandom.includes(numeriUtente[i])) {
                indovinati.push(numeriUtente[i]);
            }
    }
    // alert score e numeri indovinati
    alert("I numeri da indovinare erano : " + numRandom + "\nIl tuo score è : " + indovinati.length + "\nI numeri da te indovinati sono : " + indovinati)
    console.log(indovinati)
}, 3000);
// FINE TIMER DI 30 SECONDI

// FUNZIONE numeri random
  function randomNumberFromTo(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };