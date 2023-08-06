// Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const pairOdd = (array) => {
    // Control. Parameter must be an array.
    if (Array.isArray(array)) {
        console.log("Parameter correct");
        const arrayPair = [];
        const arrayOdd = [];

        array.forEach(element => {
            if(!isNaN(element)) {
                if (element % 2 === 0 || element === 0) arrayPair.push(element);
                else arrayOdd.push(element);
            } else {
                console.error("Wrong parameter into array detected.");
                return -1;
            }           
        });

        return {pares: arrayPair, impares: arrayOdd};

    } else {
        console.error("Parameter is not an array");
        return -1;
    }
};

const example23 = pairOdd([1,2,3,4,5,6,7,8,9,0]);
console.info(example23);

// Se debería haber usado el metodo filter.
// Los metodos mas usados de manera reactiva son map, reduce y filter.