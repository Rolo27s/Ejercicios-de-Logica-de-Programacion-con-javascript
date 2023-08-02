// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
const regExp = /^[A-Za-z ]+$/;

export function validarCadena() {
  const cadena = prompt("1) Dame una cadena de texto");
  console.log(cadena);

  if (regExp.test(cadena) && cadena != null) {
    console.log("Cadena validada correctamente");
    alert(`El texto ingresado mide ${cadena.length} caracteres`);
    return cadena; // Devolver la cadena si es válida
  } else {
    console.error("El texto ingresado no es correcto. Solo puede contener letras");
    alert("Prompt incorrecto. Solo puede contener letras y espacios.");
    return null; // Devolver null si la cadena no es válida
  }
}
