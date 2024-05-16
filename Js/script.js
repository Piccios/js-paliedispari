// Creo una funzione che mi permetta di generare un numero random tra un minimo e un massimo

function getRandomInt(min, max) {
    const randomNumber = Math.floor( Math.random()* (max - min + 1) ) + min;
    return randomNumber;
}

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
