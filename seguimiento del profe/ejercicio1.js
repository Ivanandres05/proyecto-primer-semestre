let nombre = prompt("ingrese su nombre de usuario")
let edad = prompt("ingrese su edad usuario")
let membresia = 80000
let cuotas = 0

if (edad < 18) {
    alert("usted es menor de edad no puede ingresar al gimnasio")
    
} else if(edad >= 18) {
    alert("bienvenido usuario nuevo")
}

 let suscripcion = prompt("ingrese el tipo de suscripcion que desea, trimestral, anual o mensual")

 if (suscripcion == "trimestral") {
    cuotas = 4
    alert(`eligio ${suscripcion} su total a pagar es ${membresia * 3} el numero de cuotas que lo debe pagar es ${cuotas}`)
    
 } else if(suscripcion == "anual") {
    cuotas = 24
    alert(`eligio ${suscripcion} el total a pagar sera de ${membresia * 12} y su numero total de cuotas sera de ${cuotas}`)
 }
