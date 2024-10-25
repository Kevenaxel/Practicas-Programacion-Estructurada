// Metodo get y set
class Persona{
    constructor(nombre, apellido){
        //Propiedades Privadas
        this._nombre = nombre;
        this._apellido = apellido;
    }

    //Metodo get para obtener el nombre completo
    get nombreCompleto(){
        return `${this._nombre} ${this._apellido}`
    }
}

const persona = new Persona("Kevin", "Flores")
console.log(`Nombre Completo: ${persona.nombreCompleto}`)