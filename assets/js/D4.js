/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2){
    return l1 * l2;
}

console.log(area)

let l1 = 2
let l2 = 4

console.log(area (l1, l2))


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let intero1 = 3
let intero2 = 7

function crazySum(intero1, intero2){
    if(intero1 === intero2){
        return (intero1+intero2)*3;
    }
    else{
        return intero1+intero2;
    }
}

console.log(crazySum(intero1, intero2));


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 7;

function crazyDiff(num1){
    if(num1 > 19){
        return Math.abs(num1-19)*3;
    }
    else{
        return Math.abs(num1-19);
    }
}

console.log(crazyDiff(num1));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n = 2;

function boundary(n){
    if (n>20 && n<100){
        console.log('True');
    }
    else{
        console.log('False');
    }
}

console.log(boundary(n));


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let stringa1 = 'school';

function epify(stringa1){
    if(stringa1.startsWith('EPICODE')){
        return stringa1;
    }
    else{
        return 'EPICODE ' + stringa1;
    }
}

console.log(epify(stringa1));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let parametro1 = 21;

let a = 3;
let b = 7;

function check3and7(parametro1){
    if( parametro1 % a === 0 && parametro1% b === 0){
        return parametro1 + ' è sia multiplo di 3 che di 7';
    }
    else if(parametro1 % a === 0){
        return parametro1 + ' è un multiplo di 3.';
    }
    else if(parametro1 % b === 0){
        return parametro1 + ' è multiplo di 7.';
    }
    else{
        return 'Il numero non è multiplo di 3 e nemeno di 7.';
    }
}

console.log(check3and7(parametro1));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const str2 = 'EPICODE'

function reverseString(str2){
    return str2.split(' ').reverse().join();
}

console.log(reverseString(str2));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const str3 = ['giallo verde blu nero bianco viola'];

function upperFirst(str3) {
    let newstr = str3[0].split(' ');
    
    for (let i = 0; i < newstr.length; i++) {
      newstr[i] = newstr[i].charAt(0).toUpperCase() + newstr[i].slice(1);
    }
    return newstr.join(' ');
}
  
console.log(upperFirst(str3));


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let str4 = 'Calcio';

function cutString(str4){
    return str4.slice(1,-1);
}

console.log(cutString(str4));


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */



function giveMeRandom(n){
    let numeriRandom = [];
    for (let i = 0; i < n; i ++){
        numeriRandom.push(Math.floor(Math.random()*11));
    }
    return numeriRandom;
}

console.log(giveMeRandom(n));
