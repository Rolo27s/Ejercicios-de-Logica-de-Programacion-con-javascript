// Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
console.log("\n-----------------------------------------\n\n");

const validateText = (text) => {
    const regExp = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;
    const validation = regExp.test(text);
    return console.log(validation);
};

validateText("Jonathan MirCha");