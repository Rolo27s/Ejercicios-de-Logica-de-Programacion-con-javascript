// Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. Formula: (0 °C × 9 / 5) + 32 = 32 °F

const TempConv = (degrees, Scale) => {
    const regExp = /^-?\d+(\.\d+)?$/
    Scale = Scale.toUpperCase();
    // Scale only must be "C" or "F"
    if (Scale != "C" && Scale != "F") {
        console.error("Scale not found. You must type 'C' or 'F'");
        return null;
    } else {
        console.info("Scale correct");
    }
    

    if (regExp.test(degrees)) {
        console.info("Degrees correct")
    } else {
        console.error("Degrees format not correct. You must type a number.")
        return null;
    }

    if (Scale === "C") {
        let CelsiusToFarenheit = (degrees * 9 / 5) + 32;
        CelsiusToFarenheit = CelsiusToFarenheit.toFixed(2);
        console.info(`${degrees}ºC = ${CelsiusToFarenheit}ºF`);
        return (CelsiusToFarenheit)+"ºF";
    } else {
        let FarenheitToCelsius = (degrees - 32) * 5 / 9;
        FarenheitToCelsius = FarenheitToCelsius.toFixed(2);
        console.info(`${degrees}ºF = ${FarenheitToCelsius}ºC`);
        return (FarenheitToCelsius)+"ºC";
    }
    
};


TempConv(82.4, "C");
console.log(TempConv(7, "F"));