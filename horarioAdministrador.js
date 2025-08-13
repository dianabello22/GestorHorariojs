let idHorario;
let fechaInicio;
let horaInicio;
let horaFin;
let inicioPeriodo;
let finPeriodo;
let recurrenciaDia;
let materia;
let sede;
let aula;
let identificacionPersona;


function ingresarHorario() {
    console.log("Ingresa el horario del profesor: ");
    console.log("________________________");
    

    do {
        idHorario = Number(prompt("Ingrese el Id del Horario: "));
    } while (isNaN(idHorario));
    
    fechaInicio = prompt("Ingrese la Fecha de Inicio: ");
    
    horaInicio = prompt("Ingrese la Hora de Inicio: ");
    
    horaFin = prompt("Ingrese la Hora de Fin: ");
    
    inicioPeriodo = prompt("Ingrese el Inicio del Periodo: ");
    
    finPeriodo = prompt("Ingrese el Fin del Periodo: ");
    
    recurrenciaDia = prompt("Ingrese la Recurrencia del Dia: ");
    
    materia = prompt("Ingrese la Materia: ");
    
    sede = prompt("Ingrese la Sede: ");
    
    aula = prompt("Ingrese el Aula: ");
    
    identificacionPersona = prompt("Ingrese la Identificacion de la Persona: ");
    
    console.log("Horario ingresado correctamente.");
    
   
    console.log("\n DATOS DEL HORARIO INGRESADO ");
    console.log("ID Horario: " + idHorario);
    console.log("Fecha Inicio: " + fechaInicio);
    console.log("Hora Inicio: " + horaInicio);
    console.log("Hora Fin: " + horaFin);
    console.log("Inicio Periodo: " + inicioPeriodo);
    console.log("Fin Periodo: " + finPeriodo);
    console.log("Recurrencia Dia: " + recurrenciaDia);
    console.log("Materia: " + materia);
    console.log("Sede: " + sede);
    console.log("Aula: " + aula);
    console.log("Identificacion Persona: " + identificacionPersona);
}




function administrarHorarios() {
    let opcion;
    
    do {
        console.log("\n MENU GESTOR ADMINISTRADOR");
        console.log("1. Ingresar Horario");
        console.log("2. Salir");
        
        opcion =  Number(prompt("Seleccione una opción: "));
        
        
        if (opcion === 1) {
            ingresarHorario();
        } else if (opcion === 2) {
            console.log("Saliendo del programa...");
        } else {
            console.log("Opción no válida. Intente nuevamente.");
        }
        
    } while (opcion !== 2);
}


administrarHorarios();