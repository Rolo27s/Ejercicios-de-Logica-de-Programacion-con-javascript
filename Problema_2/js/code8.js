// Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. 
// miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá "1, 2, 3, 4 y 5.

const removeString = (p = "", sTR = "") => {
    let rP = p.trim();
    let rSTR = sTR.trim();
    if(rP === "") {
        console.warn("Text not found");
    } else if (rSTR === "") {
        console.warn("Text to remove not found")
    }  
    else {
        console.log(`Text validated: ${rP}`);
        let newText = rP.replace(new RegExp(rSTR, "g"), "");
        console.info(`Phrase refactored: ${newText}`);
        return newText;
    }   
    return 1;
}

removeString("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");