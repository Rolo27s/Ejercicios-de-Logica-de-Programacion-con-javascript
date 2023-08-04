// Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const Pn = (n) => {
    const regExp = /^\d+$/;

    if ( regExp.test(n) && n > 1 ) {
        console.log ("Status: 200");
        let count = 0;
        for ( let i = 2 ; i <= n ; i++ ) {
            if ( n % i == 0) count++;
        }

        if (count === 1) 
            {
                console.info(`El numero ${n} es primo`) 
                return true;
            };

        if (count > 1) {
            console.info(`El numero ${n} no es primo`);
            return false;
        }
    }

    else if ( n === 1) {
        console.info("El numero 1 es primo");
        return true;
    }

    else {
        console.log("Status: 400");
        return -1;
    }
};

Pn(5);