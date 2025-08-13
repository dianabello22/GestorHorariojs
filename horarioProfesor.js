let idHorarioProfesor;
let materiaProfesor;
let fechaInicioProfesor;
let fechaFinalizacionProfesor;
let horaInicioProfesor;
let horaFinProfesor;
let instituto;
let recurrenciaDiaProfesor;
let identificacionPersona;

function crearHorario() {

    console.log("Ingrese su horario: ")

    do {
        idHorarioProfesor = Number(prompt("Ingrese el id Horario: "));

    } while (isNaN(idHorarioProfesor));

    materiaProfesor = prompt("Ingrese la materia: ");

    fechaInicioProfesor = prompt("Ingrese la fecha de inicio (YYYY-MM-DD): ");

    fechaFinalizacionProfesor = prompt("Ingrese la fecha de finalización (YYYY-MM-DD): ");

    horaInicioProfesor = prompt("Ingrese la hora inicial (HH:mm): ");

    horaFinProfesor = prompt("Ingrese la hora fin (HH:mm): ");

    instituto = prompt("Ingrese el instituto: ");

    recurrenciaDiaProfesor = prompt("Ingrese la recurrencia: ");

    identificacionPersona = prompt("Ingrese la identificación de la persona: ");

    console.log("horario creado")
}

function mostrarHorario(){
    console.log("El ID Horario es: " + idHorarioProfesor);
    console.log("La materia es: " + materiaProfesor);
    console.log("La fecha inicial es: " + fechaInicioProfesor);
    console.log("La hora inicial: " + horaInicioProfesor);
    console.log("La hora final es: " + horaFinProfesor);
    console.log("El instituto es: " + instituto);
    console.log("La recurrencia: " + recurrenciaDiaProfesor);
    console.log("Identificacion Persona: " + identificacionPersona);
}

crearHorario();
mostrarHorario();
