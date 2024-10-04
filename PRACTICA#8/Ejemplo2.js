// Requerimos el modulo radline para manejar la entrada y salida de la consola
const readline = require('readline');

// Creamos la interfaz de readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let letra = '', veces = 0, cadena = '';

function preguntarLetra(){
    rl.question("Que letra desea. X o Z? ", (inputLetra) => {
        letra = inputLetra.toUpperCase(); // Convertimos la letra a mayuscula para facilitar la comparacion
        if  (letra == 'X' || letra == 'Z') {
            preguntarVeces();
        }else {
            console.log("Debes elegir entre la letra X o Z.");
            preguntarLetra();
        }
    });
}

function preguntarVeces() {
    rl.question("Cuantas repeticiones (1-15. ", (inputVeces) => {
        veces = parseInt(inputVeces);
        if (veces >= 1 && veces <= 15){
            generaCadena();
        }else {
            console.log("El numero de repeticiones  debe estar entre 1 y 15.");
            preguntarVeces();
        }
    })
}

function generaCadena(){
    while (veces > 0) {
        cadena += letra;
        veces--;
    }
    console.log("Resultados: " + cadena);
    rl.close(); // Cerramos la interfaz despues de generar la cadena
}

// Iniciamos el programa
preguntarLetra();