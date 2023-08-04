// Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const cap = (number) => {
    // Solo se admiten numeros y almenos debe haber uno
    const regExp = /^\d+$/
    if (regExp.test(number)) {
        console.log("Status 200. All good.");
        let nRev = number.toString();
        nRev = nRev.split("").reverse().join("");
        nRev = parseInt(nRev);
        
        number === nRev ? console.log(true) : console.log(false)

    } else {
        console.error("Status 400. Bad request.");
    }
}

cap(2002);