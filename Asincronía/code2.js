// Callback básico
console.log("CallBack básico");

// Función que simula una operación asincrónica
function realizarOperacion(valor, callback) {
  console.log(`Realizando operación con ${valor}`);
  setTimeout(() => {
    const resultado = valor * 2;
    callback(resultado);
  }, 1000);
}

// Función callback que se ejecutará después de la operación
function callbackResultado(resultado) {
  console.log(`El resultado es: ${resultado}`);
}

// Llamando a la función principal con el callback
realizarOperacion(5, callbackResultado);
