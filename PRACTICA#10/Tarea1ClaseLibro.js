class Libro {
    constructor(titulo, autor, ano){
      this.titulo = titulo;
      this.autor = autor;
      this.ano = ano;

    }

    imprimirInfo(){
        console.log(`Titulo ${this.titulo}, Autor: ${this.autor}, Ano: ${this.ano} `);
    }
}

const libro1 = new Libro('El Amor Hacia Ti cuando nunca tuve nada mas interesante en este mundo que solo ati..', 'CarlosDeArmando', '14 de febrero del 2015' )

libro1.imprimirInfo();
