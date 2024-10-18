// Clase con metodos adicionales
class Coche {
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    
    }

    arrancar(){
        console.log(`${this.marca} ${this.modelo} esta arrancando.`);
    }

    detener(){
        console.log(`${this.marca} ${this.modelo} se ha detenido`)
    }
}

// Creacion de un objeto
const coche1 = new Coche('Toyota', 'Corolla');
coche1.arrancar();
coche1.detener();