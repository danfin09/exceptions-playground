

const fs = require('fs');

/** NO PODEMOS MODIFICAR LA FUNCIÓN, NO ES NUESTRA */
function readAndDisplayJSON(filename) {
    // Leer el archivo de manera sincrónica
    const data = fs.readFileSync(filename, 'utf8');

    // Intentar parsear el JSON
    const people = JSON.parse(data);

    // Mostrar los nombres y correos electrónicos
    people.forEach(person => {
        console.log(`Name: ${person.name}, Email: ${person.email}`);
    });

}

// Ejecutar la función con el nombre del archivo
try {
    readAndDisplayJSON('people1.json');
} catch (error) {
    console.error(`Error reading people1.json: ${error.message}`);
}

// Este fichero falla. Usar try...catch para gestionar el error
try {
    readAndDisplayJSON('people1_bad.json');
} catch (error) {
    console.error(`Error reading people1_bad.json: ${error.message}`);
}