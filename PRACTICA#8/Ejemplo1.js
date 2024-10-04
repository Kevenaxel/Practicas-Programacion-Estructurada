// requerimos el modulo readline para manejar la entrada y salida  en la consola
const readline = require('readline');

// Creamos la interfaz de readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Funcion que muestra el menu
function mostrarMenu() {
    rl.question("1.- Escribir\n2.- Leer\n3.- Salir\nEscoge una opcion: ", (opcion) =>{
        switch (opcion) {
            case '1':
                console.log("Opcion 1: Eliges Escribir");
                mostrarMenu(); // Repetimos el menu para que el usuario pueda seguir eligiendo
                break;
            case '2':
                console.log("Opcion 2: Eliges leer");
                mostrarMenu(); // Repetimos el menu
                break;
            case '3':
                console.log("Fin del programa");
                rl.close(); // Cerramos la interfaz para terminar el prograa
                break;
            default:
                console.log("Debes elegir una de las opciones validas");
                mostrarMenu(); // Repetimos el menu si la opcion es invalida
        }
    })
}

// Iniciamos el menu
mostrarMenu();