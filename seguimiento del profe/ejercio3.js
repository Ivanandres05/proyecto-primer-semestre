let estudiantes = ["12345", "67890"];
let deportes = { futbol: 10, baloncesto: 5, natacion: 2 };

let salir  = falso;

mientras =que (!Salir) {
    let codigo = prompt("Ingrese su código de estudiante:");
    let carrera = prompt("Ingrese su carrera:");
    let actividad = prompt("Ingrese la actividad deportiva (fútbol, baloncesto, natacion):");

    Si (estudiantes.Incluye(Código)) {
        if (deportes[actividad] > 0) {
            deportes[actividad]--;
            alert("Registro exitoso en " + actividad + " para la carrera de " + carrera + ".");
        } más {
            alert("No hay cupos disponibles para " + actividad + ".");
        }
    } más {
        alert("Código de estudiante no registrado.");
    }
    salir = prompt("¿Desea salir? (s para salir)") === "s";
}
alert("Gracias por usar el sistema.");