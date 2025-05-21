//📘 Tarea: Análisis de calificaciones
//🎯 Objetivo:
//Aplicar funciones, bucles y lógica condicional para procesar un arreglo de números.
//
//📝 Instrucciones:
//Crea una función llamada analizarCalificaciones que reciba un arreglo de números (enteros del 0 al 100) que representan calificaciones de estudiantes. La función debe devolver un objeto con la siguiente información:
//
//Cantidad de aprobados (calificaciones ≥ 70)
//
//Cantidad de reprobados (calificaciones < 70)
//
//Promedio general
//
//La calificación más alta y la más baja
const { ask } = require('../helpers/input');

function listaAprobados(numeros) {
  let aprobados = [];
  for(let i = 0; i < numeros.length; i++){
  if (numeros[i] >= 70) {
  aprobados.push(numeros[i]);
  }
}

return aprobados;
}

function listaReprobados(numeros) {
    let reprobados = [];
    for(let i = 0; i < numeros.length; i++){
    if (numeros[i] < 70) {
    reprobados.push(numeros[i]);
    }
  }
  return reprobados;
}

function obtenerPromedio(numeros) {
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
      total = total + numeros[i];
    }
    const promedio = total / numeros.length;
  
    return promedio;
  }

  function calificacionMasAlta(numeros) {
    let masAlta = numeros[0];
    for (let i = 0; i < numeros.length; i++){
       if (numeros[i] > masAlta) {
        masAlta = numeros[i];
       }
    }
    return masAlta;
  }

  function calificacionMasBaja(numeros) {
    let masBaja = numeros[0];
    for(let i = 0; i < numeros.length; i++){
        if(numeros [i] < masBaja){
        masBaja = numeros[i];
        }
    }
    return masBaja;
  }



async function main() {
    const calificaciones = [50, 75, 46, 96, 85, 90, 70];

    console.log(`La lista de aprobados es: ${listaAprobados(calificaciones)}`);
    console.log(`La lista de reprobados es: ${listaReprobados(calificaciones)}`);
    console.log(`El promedio general es: ${obtenerPromedio(calificaciones)}`);
    console.log(`la calificacion mas alta es: ${calificacionMasAlta(calificaciones)}`);
    console.log(`la calificacion mas baja es: ${calificacionMasBaja(calificaciones)}`);
}

main();
