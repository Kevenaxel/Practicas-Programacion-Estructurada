const numeroCorrecto = Math.floor(Math.random() * 100) + 1;

let intentos = 0;
let adivinado = false;

do {
    const numeroUsuario = parseInt(prompt("Adivina el número (entre 1 y 100):"));

    if (isNaN(numeroUsuario)) {
        alert("Por favor, ingresa un número válido.");
    } else {
        intentos++;

        if (numeroUsuario === numeroCorrecto) {
            adivinado = true;
            alert(`¡Correcto! Adivinaste el número en ${intentos} intentos.`);
        } else if (numeroUsuario < numeroCorrecto) {
            alert("El número es mayor. Sigue intentando.");
        } else {
            alert("El número es menor. Sigue intentando.");
        }
    }
} while (!adivinado);

