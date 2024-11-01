class Coche {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
      this._velocidad = 0; 
    }
  
    // Método para acelerar
    acelerar(incremento) {
      if (incremento > 0) {
        this._velocidad += incremento;
        console.log(`La velocidad ha aumentado. Velocidad actual: ${this._velocidad} km/h`);
      } else {
        console.log('El incremento debe ser un valor positivo.');
      }
    }
  
    // Método para frenar
    frenar(decremento) {
      if (decremento > 0 && decremento <= this._velocidad) {
        this._velocidad -= decremento;
        console.log(`La velocidad ha disminuido. Velocidad actual: ${this._velocidad} km/h`);
      } else if (decremento > this._velocidad) {
        console.log('El decremento excede la velocidad actual. No se puede frenar tanto.');
      } else {
        console.log('El decremento debe ser un valor positivo.');
      }
    }
  
    // Getter para la velocidad
    get velocidad() {
      return this._velocidad;
    }
  
    // Método para mostrar la información del coche
    mostrarInformacion() {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Velocidad actual: ${this._velocidad} km/h`);
    }
  }
  
  // Instancia y uso de la clase Coche
  const miCoche = new Coche('Toyota', 'Corolla');
  miCoche.mostrarInformacion();
  miCoche.acelerar(50);
  miCoche.mostrarInformacion();
  miCoche.frenar(20);
  miCoche.mostrarInformacion();
  miCoche.frenar(40);