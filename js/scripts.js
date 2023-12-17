
// nome repo: js-simon

// Descrizione: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno: * Pensate prima in italiano. * Dividete in piccoli problemi la consegna.
// Individuate gli elementi di cui avete bisogno per realizzare il programma.

const numbersInDoc = document.getElementById('numbers');

function generateRandomNumber(min, max) {
  const randNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return randNum;
}

const randomNumbers = [];

for (let i = 0; i < 5; i++) {

  // Genero un numero casuale
  let random = generateRandomNumber(1, 100);
  console.log(random);

  // Controllo se questo numero appena generato è già presente nell'array
  let foundInArray = randomNumbers.includes(random);

  while (foundInArray == true) {
    bomb = generateRandomNumber(1, 100);
    
    foundInArray = randomNumbers.includes(random);
  }

  randomNumbers.push(random);

  console.log(randomNumbers);
}
//scrivo le istruzioni che l'utente vedrà al caricamento della pagina
numbersInDoc.innerHTML = `Memorizza questi numeri:  ${randomNumbers}
poi successivamente inseriscili nella finestra che si apre in alto nel sito. Scopri quante te ne ricordi!
Buon divertimento!`;

//imposto un timeout dopo il quale il contenuto della pagina si cancella
setTimeout(function(){
    numbersInDoc.innerHTML = "";
}, 10000);

//imposto una funzione che, con un ciclo for, fa inserire all'utente tramite prompt un numero, se è giusto aumenta il contatore
//e lo inserisce nell'harray dei numeri indovinati, alla fine della funzione stampo in pagina i numeri indovinati e il punteggio
//dell'utente
setTimeout(function () {
    let userInput = 0; 
    let userNumbers = [];
    let counter = 0;
    let numeriVincenti = [];
  for (let i = 0; i < 5; i++) {
    userInput =prompt("Inserisci qui il numero");
    userNumbers.push(userInput);
    console.log(userNumbers);
    if(randomNumbers.includes(Number(userInput))){
        counter++;
        numeriVincenti.push(userInput);
    };
}
    numbersInDoc.innerHTML = `I numeri che hai indovinato sono: ${numeriVincenti}, il tuo punteggio è: ${counter}`;
}, 10500);
