let idAula;
let aula;

function ingresarAula() {
    console.log("Ingrese cantidad de estudiantes: ")
    console.log("1- De 1 a 20 estudiantes")
    console.log("2- De 21 a 30 estudiantes")
    console.log("3- De 31 a 40 estudiantes")

    aula = Number (prompt());


    switch (aula) {
        case 1:
            console.log("(1- aula 501, 2-aula 502) escoge una opcion");
            idAula = Number (prompt());
            switch (idAula) {
                case 1:
                    console.log("aula asignada 501");
                    break;
                case 2:
                    console.log("aula asignada 502");
                    break;
                default:
                    console.log("opcion no valida");
            }

            break;
        case 2:
            console.log("1- aula 503, 2-aula 504) escoge una opcion");
            idAula = Number (prompt());
            switch (idAula) {
                case 1:
                    console.log("aula asignada 503");
                    break;
                case 2:
                    console.log("aula asignada 504");
                    break;
                default:
                    console.log("opcion no valida");
            }

            break;
        case 3:
            console.log("1- aula 505, 2-aula 506) escoge una opcion");
            idAula = Number (prompt());
            switch (idAula) {
                case 1:
                    console.log("aula asignada 505");
                    break;
                case 2:
                    console.log("aula asignada 506");
                    break;
                default:
                    console.log("opcion no valida");
            }


            break;

        default:
            console.log("opcion no valida");

    }
}

ingresarAula();