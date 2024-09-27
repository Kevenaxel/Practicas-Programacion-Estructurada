// Inicializamos la variable suma en 0
let suma =0;

// Variable para contar el numero de interacciones
let interaciones = 0;

// Creamos un bucle while que se ejecutara mientras la suma sea menor a 1000
while (suma < 1000) {
    // Generamos un numero aleatorio entre 1 y 100
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

    //Sumamos el numero aleatorio a la variable suma
    suma += numeroAleatorio;

    // Aumentamos el contador de interaciones
    interaciones++;

    // Imprimimos en la consola el resultado de la suma tras cada interacion
    console.log(`Interacion ${interaciones}: Se anadio ${numeroAleatorio}, suma actual: ${suma}`);
}

// Una vez el bucle ha terminado, imprimos el resultado final
console.log(`Proceso completado en ${interaciones} interaciones. Suma total: ${suma}`);