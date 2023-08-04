// Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const offer = (price, discount) => {
    // Control de entrada numerico
    const regExp = /^-?\d+(\.\d+)?$/

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