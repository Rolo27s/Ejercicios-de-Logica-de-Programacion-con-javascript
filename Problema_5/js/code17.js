// Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

// const x = new Date(1984,4,23);
// const y = new Date(Date.now());
// console.log(x, y, Math.floor((y-x)/(60*60*24*365.25*1000)));

// const age = (born) => console.log(Math.floor(( Date.now() - born ) / ( 60*60*24*365.25*1000 )) + ' años');

// age(new Date(1984,4,23));
// age(new Date(2784,4,23));

// Se podría haber usado el metodo getTime() que devuelve el timeStamp en ms (Fecha ref: 1/1/1970)

// Para validar fechas se utiliza instanceof https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof. La comprobación sería algo tipo (fecha instanceof Date), que quiere decir algo asi como: La fecha que te paso esta instanciada en el objeto Date? y nos responde con true or false.

const age = (dateParam) => {
    
    if (dateParam instanceof Date) {
        // Code here
        // Fecha de nacimiento en ms
        const dateDiff = Date.now() - dateParam.getTime();
        const dateDiffYears = Math.abs ( Math.floor ( dateDiff / ( 60*60*24*365.25*1000 )));

        if (dateDiff > 0) {
            console.info(`Han pasado ${dateDiffYears} años`);
        } else {
            console.info(`Faltan ${dateDiffYears} años`);
        }
    } else {
        console.error("The parameter must be a Date")
    }
};

age(new Date(1984,4,23));
age(new Date(2070,4,23));