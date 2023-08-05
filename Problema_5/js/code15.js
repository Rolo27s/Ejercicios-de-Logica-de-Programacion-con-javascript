// Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const conversor = (n,b) => {
    const regExp = /^\d+$/
    if (regExp.test(n) && (b === 2 || b === 10)) {
        console.log("Status: 200");
    } else {
        console.error("Status: 400");
        return -1;
    }

    // Conversion de binario a decimal
    const regExpBin = /^[01]+$/
    if (b === 2 && regExpBin.test(n)) {
        console.info("Binary number detected");
        let array = n.toString().split("").reverse();
        let newArray = [];
        let result = 0;
        for ( let i = 0 ; i < array.length ; i++) {
            newArray[i] = array[i] * Math.pow(b, i);
            result += newArray[i]
        }

        console.info(`El numero binario ${n} es en decimal el numero ${result}`);
        return result;

    // Conversion de decimal a binario
    } else if (b === 10) {
        if (n === 0) {
            console.info(`El numero decimal ${n} es en binario el numero ${0}`)
            return 0;
        }
        let result = "";
        let number = n;
        while (n >= 1) {
            let rest = n % 2 
            result = rest.toString().concat(result.toString());
            n = Math.floor(n/2);
        }
        console.info(`El numero decimal ${number} es en binario el numero ${result}`)
        return result;

    } else {
        console.error("Incorrect binary number");
        return -1;
    }

    
}

// De binario a decimal
conversor(101110, 2)

// De decimal a binario
conversor(10, 10);

// Tarde muchísimo en terminar esta prueba. Debería repetirla.
// Buaah trucazo. El metodo parseInt tiene dos posibles entradas, el primero es el numero a convertir y el segundo es la base a la cual se quiere convertir. Fin en 2 segundos.