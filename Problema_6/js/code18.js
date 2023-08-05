// Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const des = (phrase) => {
    // Regular expression that only allow text
    const regExp = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;

    if (regExp.test(phrase)) {
        console.log ("Parameter allowed");
        // Code here
        const V = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'u', 'ü'];
        const S = [' ', '\n', '\t'];
        let counterV = 0;
        let counterC = 0;
        phrase = phrase.toLowerCase();
        const array = phrase.split("");
        array.forEach(element => {
            if (V.includes(element)) counterV++;
            else if (!S.includes(element)) counterC++;
        });
        console.log(`Number of vowels: ${counterV}`);
        console.log(`Number of consonants: ${counterC}`);
        return 0;
    } else {
        console.error ("Parameter NOT allowed");
        return -1;
    }
}

des("Hola pendejo");