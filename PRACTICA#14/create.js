const fs = require ('fs');
const fileName = 'vehiculos.json'

function create(){
    const vehiculos= [
        {id: 1, marca: 'Toyota', modelo: 'corolla', ano: 2020},
        {id: 2, marca: 'Honda', modelo: 'Civic', ano: 2019},
        {id: 3, marca: 'Ford', modelo: 'Focus', ano: 2021},
    ]
    
    fs.writeFile(fileName, JSON.stringify(vehiculos, null, 2), (err)=>{
        if(err){
            console.error('Error al crear el archivo JSON:', err);
        }else{
            console.log('Archivo JSON creado exitosamente con tres vehiculos iniciales');
        }
    })
}

module.exports = create;