// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
const separarString = (cadena, separador) => {
    let arr = cadena.split(separador);
    return arr;
};

console.log(separarString("Hola que tal estas", " "));
console.log(separarString("Hola que tal estas, bien", ","));
