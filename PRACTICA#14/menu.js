const readline = require('readline');

const create = require('./create');
const AddVehicle = require('./add');
const read = require('./read');
const modify = require('./modify');
const deleteVehicle = require('./delete')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function showMEnu(){
    console.log('\n---Menu---');
    console.log('1. Crear archivo JSON')
    console.log('2. Leer archivo JSON')
    console.log('3. Agregar vehiculo')
    console.log('4. Modificar vehiculo')
    console.log('5. Eliminar vehiculo')
    console.log('6. Salir')
   
}

function handleMenuOption(option){
    switch (option) {
        case '1':
            create();
            break;
        case '2':
            read();
            break
        case '3':
            AddVehicle();
            break;
        case '4':
            modify();
            break;
        case '5':
            deleteVehicle();
            break;
        case '6':
            console.log('Saliendo del programa')
            rl.close();
            return;
        default:
            console.log('Opcion no valida. Intente de nuevo.')
            break;
    }
    setTimeout(promptMenu, 1000);
}

function promptMenu(){
    showMEnu();
    rl.question('Seleccione una opcion:', handleMenuOption)
}

promptMenu();