// Ejemplo que determina el nivel de calificacion de un estudiante basado en su puntuaje
let puntaje = 85;
let calificacion = "";

// Verificamos el puntaje y asignamos una calificacion
if (puntaje >= 90){
    calificacion = "A";
}else if (puntaje >= 80){
    calificacion = "B";
}else if (puntaje >= 70){
    calificacion = "C"
}else if (puntaje >= 60){
    calificacion = "D"
}else {
    calificacion = "F"
}

console.log(`La calificacion del estudiante es: ${calificacion}`);
// Salida esperada: La calificacion del estudiante es: B