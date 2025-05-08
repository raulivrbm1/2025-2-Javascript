// Clase 3: Lógica con Condicionales
const { ask } = require('../helpers/input');

async function main() {
  const number = Number(await ask("Ingresa un número:"));

  const multiplo5 = number % 5 === 0;
  const multiplo3 = number % 3 === 0;
  const multiploAmbos = multiplo5 && multiplo3;

}

main();