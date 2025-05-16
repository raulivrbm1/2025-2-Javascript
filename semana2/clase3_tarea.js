// 🏠 Práctica para casa:
// Contar cuántos de una lista de edades pueden votar
//
// Instrucciones:
// Crea un arreglo de edades (pedirlo al usuario).
//
// Recorre el arreglo.
//
// Cuenta cuántos tienen 18 años o más.
//
// Muestra el total.
const { ask } = require('../helpers/input');

async function main() {
    let personas = (await ask("¿Cual es tu nombre?"));
    let edad = Number(await ask("¿Cuantos años tienes?"));
    if (edad >= 18) {
        console.log(`Puedes votar!`);
      } else {
        console.log('Eres menor de edad, no puedes votar');
      }    
      let listaDepersonas = personas;
      personas.push;
      console.log(listaDepersonas);
      
  

}
main();