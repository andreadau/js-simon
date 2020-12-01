/*
Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
*/

// Array vuoto per numeri random
var numRandom = [];
// for per mostrare 5 volte un numero casuale e registrarlo nell'array vuoto
for (var i=0 ; i < 5; i++) {
    var x = Math.floor((Math.random() * 100) + 1);
    // Ripetere 5 volte l'allert
    alert(" il numero è : " + x); 
    numRandom.push(x);
}

/*
setTimeout(function(){ 
    alert("Ti Attendono Interminabili 30 secondi"); 
}, 30000);
console.log(numeriUtente);
*/

/*
// Dichiarazione array vuoto per numeri utente
var numeriUtente = [];
// Richiesta  5 numeri all'utente
for (var i=0 ; i < 5; i++) {
    numeriUtente.push(Number(prompt("Inserisci 5 numeri")));
}
*/