let cadena = "";
const vocales = "aeiouAEIOU";
let numVocales = 0;
let numDigitos = 0;


while (cadena === "") {
    cadena = prompt("Por favor, ingresa una cadena de texto:");
}


for (let i = 0; i < cadena.length; i++) {
    let caracter = cadena[i];

    if (vocales.includes(caracter)) {
        numVocales++;
    } else if (!isNaN(caracter) && caracter !== " ") {
        numDigitos++;
    }
}

console.log("Número de vocales: " + numVocales);
console.log("Número de dígitos: " + numDigitos);
