
function findPlate(plates, plate) {
    if (typeof plate !== 'string') {
        throw new Error("Plate must be a string.");
    }

    // Validar que plate no es una cadena vacía
    if (plate.trim() === '') {
        throw new Error("Plate cannot be an empty string.");
        }

        // Buscar la matrícula en el array de matrículas
    const platePattern = /^[A-Z]{3}\d{4}$/;
    if (!platePattern.test(plate)) {
        throw new Error("Plate is not in a valid format.");
    }   
        return plates.includes(plate);
}

// Ejemplo de uso
const platesArray = ["ABC1234", "XYZ7890", "LMN4567"];

try {
    console.log(findPlate(platesArray, "XYZ7890")); // true
    console.log(findPlate(platesArray, "ABC0000")); // false
    console.log(findPlate(platesArray, ""));        // Lanza error: Plate cannot be an empty string.
    console.log(findPlate(platesArray, 123456));    // Lanza error: Plate must be a string.
    console.log(findPlate(platesArray, "INVALID@PLATE")); // Lanza error: Plate is not in a valid format.
} catch (error) {
    console.error("An error occurred:", error.message);
}
