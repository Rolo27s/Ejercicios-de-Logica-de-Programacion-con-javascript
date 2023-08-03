// Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const countWord = (str = "", wTS = "") => {
    let rStr = str.trim();
    let rWTS = wTS.trim();
    if(rStr === "") {
        console.warn("Text not found");
    } else if (/\d+/.test(rStr)) {
        console.error("Only alphanumeric characters");
    } else if (rWTS == "") {
        console.warn("Word to search not found")
    } else {
        console.log(`Text validated: ${rStr}`);
        let arr = rStr.split(" ");
        let count = 0;
        arr.forEach(element => {
            if (element === rWTS) count++;
        });
        count === 1
        ? console.info(`The word ${rWTS} was found ${count} time`)
        : console.info(`The word ${rWTS} was found ${count} times`)
    }   
}

countWord("Hola mundo adios mundo", "mundo");