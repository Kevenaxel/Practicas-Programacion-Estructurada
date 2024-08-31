//Esta funcion toma dos argumentos: una cadena de texto que representa la fecha y hora del recordatorio (fechaHoraRecordatorio) y un mensaje (mensaje) que se mostrara cuando llegue el momento.
function establecerRecordatorio(fechaHoraRecordatorio, mensaje) {

    //Obtener la fecha y hora actuales
    const ahora = new Date()

    //Convertir el texto de fecha y hora del recordatorio en un objeto Date
    const horaRecordatorio = new Date(fechaHoraRecordatorio)

    //Calcular la diferencia en milisegundos entre la hora actual y la hora del recordatorio
    const diferenciaTiempo = horaRecordatorio.getTime() - ahora.getTime()

    //Si la diferencia es positiva, significa que el recordatorio es para el futuro
    if (diferenciaTiempo > 0) {
        //Configurar un temporizador para mostrar el mensaje despues del tiempo calculado
        setTimeout(()=>{
            //Obtener y mostrar la fecha y hora del recordatorio
            const anio = horaRecordatorio.getFullYear()
            //Recordem0s que se inicializa en 0, por lo que se suma 1
            const mes = horaRecordatorio.getMonth() + 1
            const dia = horaRecordatorio.getDate()
            const horas = horaRecordatorio.getHours()
            const minutos = horaRecordatorio.getMinutes()
            const segundos = horaRecordatorio.getSeconds()

            // Mostra el mensaje de recordatorio en la consola con la fecha y hora formateadas
            console.log(`Recordatorio para${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos}: ${mensaje}`)
         }, diferenciaTiempo)
    } else {
        //Si la diferencia es negativa o cero, la fecha y hora ya han pasado
        //Mostrar un mensaje informado al usuario que no se puede configurar el recordatorio
        console.log("La fecha y hora ya han pasado.")
    }
}

// Ejemplo de uso: Establecer un recordatoriopara una fecha y hora especifica
// En este caso, se establece un recordatorio para el 30 de agosto 2024 a las 9:35:00 
establecerRecordatorio("2024-08-30T09:35:00", "¡Es hora de la practica!")