//Funcion que simula una solicitud de datos 
function solicitarDatosDelServidor(){
    return new Promise((resolve, reject) =>{
        let exito = true; //Simula si la solicitud es exitosa o no

        setTimeout(() => {
            if(exito){
                // Si la solicitud tiene exito, se resuelve con los datos
                resolve({
                    id: 1,
                    nombre: "Kevin Flores",
                    edad: 19,
                });
            } else {
                // Si la solicitud falla, se rechaza con un mensaje de error 
                reject("Error al obtener los datos del servidor");
            }
        }, 2000);
    });
}

// Consumo de la promesa
solicitarDatosDelServidor()
.then((datos) => {
    console.log("Datos recibidos:", datos); // Mostrara los datos si la solicitud tiene exito
})
.catch((error) => {
    console.error(error); // Mostrar el error si la solicitud falla
})
