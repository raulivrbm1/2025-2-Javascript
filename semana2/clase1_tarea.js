// Práctica para casa:
// Imprimir números pares del 1 al 100
const { ask } = require('../helpers/input');

async function main() {

    
  const num = Number (await ask("numeros pares (1-100)"));
  

    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
        console.log (i);
}
}
}
main();
