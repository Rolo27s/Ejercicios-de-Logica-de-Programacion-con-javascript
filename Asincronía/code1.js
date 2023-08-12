// Promise para elevar un numero al cuadrado
function cuadradoPromise(value) {
  if (typeof value !== "number") {
    return Promise.reject(
      `Error, el valor " ${value} " ingresado no es un número`
    );
  }

  // reject no se esta usando, pero lo dejo aqui para recordar que Promise va con resolve y reject
  return new Promise((resolve, reject) => {
    // El setTimeout esta emulando el consumo de una API. En este caso está configurado que tarde de 0.1s a 1s
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, (Math.random() * 100) | (Math.random() * 1000));
  });
}

const funcionAsincronaExpresada = async () => {
  try {
    console.log("Inicio Async Function");
    let obj;

    for ( let i = 0 ; i <= 10 ; i++ ) {
        obj = await cuadradoPromise(i);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
    }
   
    console.log("Fin Async Function");
  } catch (err) {
    console.error(err);
  }
};

// Ejecuto tras 2 segundos para darle tiempo al callback primero (code2.js)
setTimeout(()=> {
    funcionAsincronaExpresada()
}, 2000);
