// Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

// validacion de array de numeros
export const validation = (array) => {
    if (array instanceof Array) {
        if (array.length === 0) {
            console.warn("Array empty");
            return false;
        }
        
        for (let num of array) {
            if (typeof num !== "number") {
                console.error(`The value ${num} is not a number`);
                return false;
            }
        };

        console.log("Parameter check");
        return true;

    } else {
        console.error("Parameter is not an array");
        return false;
    }
}

// Comprobacion de que el parametro de entrada cumpla los requisitos
validation([7,5,7,8,6]);

const order = (array) => {
    if (validation(array)) {
        const asc = array.slice().sort((a, b) => a - b);
        const desc = array.slice().sort((a, b) => b - a);
        return console.info({asc: asc, desc: desc});
    } else {
        return -1;
    }
};

// Funcion de orden
order([7,5,7,8,6]);
