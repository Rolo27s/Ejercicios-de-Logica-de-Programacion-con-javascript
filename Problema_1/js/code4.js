// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
const repetirFrase = (frase, num) => {
    for(let i = 0; i < num; i++) {
        console.log(frase);
    }
};

repetirFrase("Hola mundo", 3);
repetirFrase("Hola mundo", 33);