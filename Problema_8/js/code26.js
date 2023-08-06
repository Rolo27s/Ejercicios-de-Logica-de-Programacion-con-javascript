// Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
import { validation } from './code24.js';

const avg = (array) => {
    if (validation(array)) {
        const initialValue = 0;
        const sumWithInitial = array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
        const solution = sumWithInitial/array.length;
        console.log(solution);
        return solution;
    } else {
        return -1;
    }
};

avg([9,8,7,6,5,4,3,2,1,0]);

/** En en ejemplo resuelto, reduce se usa asi
 * array.reduce((total, num, index, array) => {
 * 
 * })
 * total controla el total y se va sumando
 * num detecta cada numero del array
 * index es el indice y controla el bucle para saber cuando salir
 * array es el array
 */

// Debería repasar mas los metodos map, filter y reduce.