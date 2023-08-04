// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const rand = () => {
    let n = Math.floor((Math.random() * 100) + 501);
    console.log(n);
    return n;
}

rand();