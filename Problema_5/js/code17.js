// Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

// const x = new Date(1984,4,23);
// const y = new Date(Date.now());
// console.log(x, y, Math.floor((y-x)/(60*60*24*365.25*1000)));

const age = (born) => console.log(Math.floor(( Date.now() - born ) / ( 60*60*24*365.25*1000 )) + ' años');

age(new Date(1984,4,23));