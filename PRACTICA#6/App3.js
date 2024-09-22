
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa tu edad: ', (input) => {
  const edad = parseInt(input); 

  if (edad >= 0 && edad <= 12) {
    console.log('Eres un niño.');
  } else if (edad >= 13 && edad <= 17) {
    console.log('Eres un adolescente.');
  } else if (edad >= 18 && edad <= 35) {
    console.log('Eres un adulto joven.');
  } else if (edad >= 36 && edad <= 59) {
    console.log('Eres un adulto.');
  } else {
    console.log('Eres un adulto mayor.');
  }

  rl.close();
});
