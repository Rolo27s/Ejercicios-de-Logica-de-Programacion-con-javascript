// Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

// Function that return the first and the last element. max, min.
const seeMinMax = (array) => {
    // Control. Parameter must be an array.
    if (Array.isArray(array)) {
        console.log("Parameter correct")
    } else {
        console.error("Parameter is not an array")
        return -1;
    }

    // To sort the array asc
    array.sort((a, b) => a - b);

    const min = array[0];
    const max = array[array.length - 1];

    return [max, min];
};

// const example22 = sort([1, 4, 99, -60]);
// console.log(example22);

const example22 = seeMinMax([1, 4, 99, -60]);
console.log(example22);