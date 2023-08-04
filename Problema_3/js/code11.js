// Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (n) => {
    // Solo se admiten numeros y almenos debe haber uno
    const regExp = /^\d+$/

    if (regExp.test(n) && n > 0) {
        console.log("Status: 200");
        let result = 1;
        for ( let i = 1 ; i <= n ; i++) {
            result *= i;
        }
        console.info(result);
        return result;
    }

    else if (n === 0) {
        console.info(0);
        return 0;
    }
    
    else {
        console.error("Status: 400");
        console.info(-1)
        return -1;
    }
}

factorial(5);
