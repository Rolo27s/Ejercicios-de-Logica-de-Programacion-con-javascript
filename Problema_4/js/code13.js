// Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const Pair = (n) => {
    // Expresion regular que controla que el parametro de entrada sea un numero entero cualquiera
    const regExp = /^-?\d+$/

    if (regExp.test(n) && n != 0) {
        console.log("Status: 200");

        if ( n % 2 === 0 ) {
            console.info(`El numero ${n} es Par`);
            return ("Par");
        } else {
            console.info(`El numero ${n} es Impar`);
            return ("Impar");
        }
    }

    else if (n === 0) {
        console.info("El 0 es un numero par");
        return ("Par");
    }

    else {
        console.warn("This function only accept a number")
        console.error("Status: 400");
        return -1;
    }
}

Pair(29);