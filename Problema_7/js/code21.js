// Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const arrayx2 = (array) => ( array.map( (element) => ( element * element ) ) );

const example21 = arrayx2([1, 4, 5]);
// Control. Parameter must be an array.
if (Array.isArray(example21)) {
    console.log("Parameter correct");
    console.log(example21);
} else {
    console.error("Parameter is not an array")
}