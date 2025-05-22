// 📝 Instrucciones:
// Crea un arreglo llamado alumnos.
//
// Usa un bucle while para permitir al usuario agregar objetos alumno al arreglo.
// Cada alumno debe tener:
//
// nombre
// edad
// calificacion
//
// Pregunta al usuario si desea seguir agregando más alumnos.
// Después de salir del ciclo, muestra:
// Cuántos alumnos tienen calificación aprobatoria (≥ 70).
// Cuántos pueden votar (edad ≥ 18).
// El promedio general de calificaciones.
// La calificación mayor.
// La calificación menor.
const { ask } = require('../helpers/input');

const alumnos = {
    nombre: "Rodrigo",
    edad: 35,
    calificacion:90,
}

async function main(){
    let opcion = 0;

    while (opcion !== 3){
        opcion = Number (ask(`Selecciona la opcion deseada n1: Agregar alumno: n2: Mostrar resultados: n3: Salir`));
        if(opcion===1){
            const nombre = ask(`Introduce el nombre del alumno`);
            const edad = Number (ask(`Introduce la edad del alumno`));
            const calificacion = Number (ask (`Introduce la calificacion del alumno`));
            alumnos.push({nombre,edad,califiacion})
        }else if (opcion===2){

        }
    }
}