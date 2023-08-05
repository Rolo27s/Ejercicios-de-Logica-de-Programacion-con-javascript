// Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

console.log("\n-----------------------------------------\n\n");

const validateEmail = (email) => {
    const regExp = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/
    const valid = regExp.test(email);
    return console.log(valid);
};

validateEmail("jonmircha@gmail.com");

// regExp de Jon para el email
// /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i

// regExp de email de chatGPT
// /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/