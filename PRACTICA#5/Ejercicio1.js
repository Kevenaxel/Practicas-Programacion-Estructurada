let LetraCalificacion = 'B'

switch (LetraCalificacion) {
    case 'A':
        console.log('Excelente trabajo.')
        break;
    case 'B':
        console.log('Buen trabajo')
        break;
    case 'C':
        console.log('Es suficiente')
        break;
    case 'D':
        console.log('Necesitas mejorar')
        break;
    case 'F':
        console.log('Reprobado')
        break;
    default:
        console.log('Calificacion no valida')
        break;
}