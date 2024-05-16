//    ESERCIZIO 1 ///////////////////////////////////////////////

/////////////////////////////////////////////////////////////////

// Creo una funzione che mi permetta di capire se una parola e' palindroma

function isPalindrome(word) {
    let reverseWord = word.split('').reverse().join('');
    if (word === reverseWord) {
        return " la parola e' palindroma";
    } else {
        return " la parola non e' palindroma";
    }
}

/////////////////////////////////////////////////////////////////

let userWord = prompt("inserisci una parola palindroma: ")

// richiamo la funzione isPalindorme

alert(isPalindrome (userWord));


/////////////////////////////////////////////////////////////////


//    ESERCIZIO 2 ///////////////////////////////////////////////


// Creo una funzione che mi permetta di generare un numero random tra un minimo e un massimo

function getRandomInt(min, max) {
    const randomNumber = Math.floor( Math.random()* (max - min + 1) ) + min;
    return randomNumber;
}

/////////////////////////////////////////////////////////////////

// Creo due prompt con cui l'utente andra' ad interagire

// Primo prompt: l'user scelga se vuole che il risultato dell'operazione sia pari o dispari

let userChoice = prompt("Scegli! Pari o dispari?")
userChoice = userChoice.toLowerCase();

////////////////////////////////////////////////////////////////

// Secondo prompt: l'user inserisca un numero da 1 a 5 (se il valore e' errato rispetto alla richiesta: verra' richiesto nuovamente il numero)
let userNumber = 0;

do { 
    userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

    if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
        alert("Numero inserito non valido! Inserosci un numero da 1 a 5");
    }
} while (isNaN(userNumber) || userNumber < 1 || userNumber > 5);


////////////////////////////////////////////////////////////////

// Affido al "computer" un numero randomico tra 1 e 5 tramite la funzione creata in precedenza

let computerNumber = getRandomInt(1,5)

console.log("Il tuo numero: " + userNumber + " Il numero del computer: " + computerNumber)

////////////////////////////////////////////////////////////////

// Creo una funzione che permetta di stabilire se la somma dei due numeri e' pari o dispari

function oddOrEven (numberOne, numberTwo){
    let sum = numberOne + numberTwo;
    if (sum % 2 === 0 ){
        return "pari"
    } else {
        return "dispari"
    }
}

// Richiamo la funzione oddOrEven

const pariODispari = oddOrEven(userNumber, computerNumber);

console.log(pariODispari)

/////////////////////////////////////////////////////////////////

// Definisco un vincitore

if (pariODispari === userChoice){
    alert("Hai vinto!")
}else alert("Il computer Vince!")