/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
string: = serie di caratteri racchiusi tra appici singoli e doppi

//let auto1 = "panda"
  let auto2 ='twingo'

  number: numeri Float
  // let numneroIntero = 42
  console.log(nemeroIntero)

  // let numeroVirgolaMobile = 3.14
  console.log(numeroVirgolaMobile)

  // let somma = numneroIntero + numeroVirgolaMobile
  console.log(somma) => 45.14

  Boolean: rappresenta un valore "vero" o "falso"
  // let età = 18 
  // let età >= 18 
  console.log("Benvenuto nel sito");
  // else ("Spiacente non hai l'età pe raccedere")
Null: utilizzato per indicare che una variabile ha un valore di “nessun oggetto”:
Undefined: variabile dichiarata ma non ha ancora un valore assegnato;

  

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/


Un oggetto è una raccolta di coppie chiave-valore. Un oggetto può rappresentare quualsiasi cosa, delle 
informazioni di una persona ( come nome e età ), ai dati di un gioco (come il punteggio o il livello)

let persona = {
    nome : "Mario" ; 
    età : "30" ; 
    sesso : "Maschio" ;
    
    }
    
 Per accedere ai valori di un oggetto, si può utilizzare la notazione a punti (.) o le quadre ([]) come questo:
    
    Copy code
    console.log(persona.nome);  // stampa "Mario"
    console.log(persona["età"]);  // stampa 30




/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

Per effettuare un'adizione (una somma) dei numeri 12 e 20 
let num1 = 12; //dichiarando la variabile 
let num2 = 20;  //dichiaro la variabile
le somma =  num1; + num2; 
console.log(somma); //somma 32





/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

Per creare una variabile una variabile in javascript e assegnare un valore, si può utilizzare 
le parole chiavi "let" seguita dal nome della variabile e del simbolo " = "

Es:
let x = 15;



/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

Per creare una variabile una variabile in javascript e assegnare un valore, si può utilizzare 
le parole chiavi "let" seguita dal nome della variabile e del simbolo " = "

let name = "Maxim";
console.log(name;) //stampa Maxim



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let x = 15; 
let y = 4;
let differenza = y; - x; // dichiaro la terza variabile ( differenza tra i 2 numeri)
console.log(differenza;) // stampa -8



/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia divers da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

Per creare due variabili e assegnare dei valori, utilizziamo let seguita dal nome delle variabili 
e dal simbolo di assegnazione " = ".

let name1 = "john"; //Dichiarazione variabile 
let name2 = "John"; //Dichiarazione variabile 

Per verificare che name1 sia diversa dal name2, si può utilizzare l'operazione di disugualianza(!=)

console.log(name1 != name2); // stampa True 



