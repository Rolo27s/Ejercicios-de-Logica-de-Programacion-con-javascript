// Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

// validacion de array de elementos
const validation2 = (array) => {
    if (array instanceof Array) {
        if (array.length === 0) {
            console.warn("Array empty");
            return false;
        }

        if (array.length === 1) {
            console.warn("Array should be aleast 2 elements");
            return false;
        }

        console.log("Parameter check");
        return true;

    } else {
        console.error("Parameter is not an array");
        return false;
    }
}

validation2(["x", 10, "x", 2, "10", 10, true, true]);

// Filtro elementos
const notDuplicate = (array) => {
    if (validation2(array)) {
        const arraySolution = array.filter((value, index, self) => self.indexOf(value) === index);

        console.info({
            original: array,
            sinDuplicados: arraySolution
        });

        return arraySolution;

    } else -1;
};

// Ejemplo
notDuplicate(["x", 10, "x", 2, "10", 10, true, true])


// Filtro elementos usando el tipo de elemento SET
const notDuplicateSET = (array) => {
    if (validation2(array)) {
        // El objeto Set genera un nuevo objeto donde recibe un parametro iterable. Su característica principal es que no admite elementos duplicados.
        const arraySolution = [... new Set(array)];

        console.info({
            original: array,
            sinDuplicados: arraySolution
        });

        return arraySolution;

    } else -1;
};

// Ejemplo
notDuplicateSET(["x", 10, "x", 2, "10", 10, true, true])