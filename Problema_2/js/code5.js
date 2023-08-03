// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

export const revStr = (str = "") => {
    let rStr = str.trim();
    if(rStr === "") {
        console.warn("Text not found");
    } else if (/\d+/.test(rStr)) {
        console.error("Only alphanumeric characters");
    } else {
        console.log(`Text validated: ${rStr}`);
        let revStrSolution = "";
        for(let i = rStr.length - 1 ; i >= 0 ; i--) {
            revStrSolution += rStr[i];
        }
        console.info(`  Reverse text: ${revStrSolution}`);
        return revStrSolution;
    }   
    return 1;
}

revStr("Hola Mundo");
