// Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const offer = (price, discount) => {
    // Control de entrada numerico
    const regExp = /^-?\d+(\.\d+)?$/
    // En lugar de usar una regExp como esta, puedo usar typeof price === "number"

    if (regExp.test(price) && price > 0) {
        console.info(`Correct Price: ${price}`);
    } else {
        console.error(`Price ${price} error`);
        return -1;
    }

    if (regExp.test(discount) && discount >= 0 && discount <= 100) {
        console.info(`Correct discount: ${discount}`);
    } else {
        console.error(`Discount ${discount} error`);
        return -1;
    }

    let solution = price - (price * discount/100);
    console.info(`The final price is ${solution}`);
    return solution;
}

offer(1000,20);

// Deberia repasar el typeof para tener mas claro que opciones tengo
/* 
typeof
Type	    Result
Undefined	"undefined"
Null	    "object" (reason)
Boolean	    "boolean"
Number	    "number"
BigInt	    "bigint"
String	    "string"
Symbol	    "symbol"
Function    (implements [[Call]] in ECMA-262 terms; classes are functions as well)	"function"
Any other object	"object"
*/