// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
import { validarCadena } from './code1.js';

const cadenaValida = validarCadena();
const regExp = /^[1-9][0-9]*$/

if (cadenaValida !== null) {
  let arr = cadenaValida.split(" ");
  console.log(arr);
  let longitud = prompt("Dame la longitud de la palabra que quieres ver");
  if(regExp.test(longitud)) {
    arr.forEach(element => {
       if(element.length == longitud) {
        console.log(element);
       } 
    });
  } else {
    console.error("La longitud ingresada no es correcta")
  }

} else {
  console.log('La cadena ingresada no es válida.');
}
