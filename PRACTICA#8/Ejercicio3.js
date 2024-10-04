// requerimos el modulo readline para manejar la entrada y salida  en la consola
const readline = require('readline');

// Creamos la interfaz de readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Definimos la contrasena correcta
const contrasenaCorrecta= "1234";

// Funcion para pedir la contrasena al usuario
function pedirContrasena() {
    rl.question("Introduce la contrasena: ", (contrasenaIntroducida) =>{
        if (contrasenaIntroducida !== contrasenaCorrecta) {
            conmsole.console.log("Contrasena Incorrecta. Intentalo de nuevo.");
            pedirContrasena(); // Volvemos a pedir la contrasena
        }else {
            console.log("Bienvenido! Has introducido la contrasena correcta.");
            rl.close();
        }
    })
}

// Llamamos a la funcion para iniciar el bucle
pedirContrasena();