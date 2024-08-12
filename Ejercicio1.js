let nombre = prompt ("ingrese su nombre")
let horas = prompt ("ingrese su numero de horas")
    let salario;
    if (horas <= 10) {
        salario = horas * 30000;
    } else {
        salario = (10 * 30000) + ((horas - 10) * 33000);
    }
    console.log(`Señor(a) ${nombre}, el número de horas es ${horas} y su salario equivale a ${salario}`);

    //bueno//