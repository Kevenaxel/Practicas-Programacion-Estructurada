// Importar el modulo express
const express = require('express');

//Crear una instancia de la aplicacion express
const app = express();

//Definir el puerto en el que se escuchara el servidor
const PORT = process.env.PORT || 3000;

//Configuracion de rutas
//Ruta principal (root) que responde con un mensaje
app.get('/', (req, res)=>{
    res.send('Hola Mundo? Este es mi servidor Express.');
});

//Iniciar el servidor y escuchar en el puerto especificado
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})