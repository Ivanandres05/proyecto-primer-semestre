let tipo = prompt ("ingrese el tipo de lavadora (1 o 2)") 
let horas = prompt("igrese las horas")
let cantidad = prompt("ingrese la cantidad de lavadoras")
    if (tipo === "1") {
        costoHora = 4000;
    } else if (tipo === "2") {
        costoHora = 3000;
    } else {
        console.log("Tipo de lavadora no válido")
        
    }
    
    let costoTotal = horas * costoHora;
    if (cantidad > 3) {
        costoTotal *= 0.97; 
    }
    
    console.log(`El costo total es ${costoTotal}`);

//buena//

