// Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
import { revStr } from './code5.js';

const isPal = (str = "") => {
    let revString = revStr(str);
    revString = revString.toLowerCase();
    let string = str.toLowerCase();

    string == revString
    ? console.info(`The word or phrase ${string} is a palindrome`)
    : console.info(`The word or phrase ${string} is not a palindrome`);
}

isPal("Salas salas");