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

function analizarCalificaciones(numeros) {
  let calificacionesDeEstudiantes = numeros (0 -100);
  let aprobados = 0;
  let reprobados = 0;
  for(let i = 0; i <= 100; i++);
  if (numeros[i] >= 70) {
 aprobados = numeros[i]
  }else{
    reprobados = numeros[i];
  }
}

async function main() {
    const calificaciones = [50, 75, 46, 100, 85, 90];

    console.log(`Los aprobados son: ${aprobados}`);
}

