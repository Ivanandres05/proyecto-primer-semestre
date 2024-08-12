let calculardias= prompt ("dias") 
let calcularcosto= prompt ("costo") 

    let costo;
    if (dias === 15) {
        costo = 18000;
    } else if (dias === 30) {
        costo = 35000;
    } else if (dias === 90) {
        costo = 86000;
    } else {
        console.log("Número de días no válido");
        costo = 0;

    }
    
    console.log(`El costo de la mensualidad es ${costo}`);
