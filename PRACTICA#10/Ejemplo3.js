//Clase con Propiedades Estáticas
class CuentaBancaria {
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo
    }

    // Metodo estatico
    static tipoDeCuenta(){
        return 'Cuenta de Ahorros';
    }

    imprimirInfo(){
        console.log(`Titular: ${this.titular}, Saldo: $${this.saldo}`);
    }
}

// Creacion de un objeto
const cuenta1 = new CuentaBancaria('KevinFlores', 1000000);
cuenta1.imprimirInfo(); // Imprime Titular: KEvinFlores Saldo: 1000000
console.log(CuentaBancaria.tipoDeCuenta()); // Imprime: Cuenta de Ahorros