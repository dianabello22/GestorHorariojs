function seleccionarMateria() {
    let opcion = Number(prompt(
        "Seleccione una materia:\n1. Gestion de Base de Datos\n2. Programación de Aplicaciones Móviles 1\n3. Programacion para la WEB 1\nIngrese el número de la opción:"
    ));

    if (opcion === 1) {
        console.log("Opción 1: Gestion de Base de Datos");
    } else if (opcion === 2) {
        console.log("Opción 2: Programación de Aplicaciones Móviles 1");
    } else if (opcion === 3) {
        console.log("Opción 3: Programacion para la WEB 1");
    } else {
        console.log("Opción inválida");
    }
} 

seleccionarMateria();