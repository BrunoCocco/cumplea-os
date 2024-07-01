/* aloohamora */

const fecha = new Date()

console.log(fecha)

let dia = fecha.getDate();
let mes = fecha.getMonth();
let anio = fecha.getFullYear();

console.log(dia)
console.log(mes)
console.log(anio)

const diaPreguntado = parseInt(prompt("dime tu dia de nacimiento"))
const mesPreguntado = parseInt(prompt("dime tu mes de nacimiento"))
const anioPreguntado = parseInt(prompt("dime tu año de nacimiento"))

if( diaPreguntado == dia && mesPreguntado == mes && anioPreguntado == anio ) {
    console.log ("hoy es tu cumpleaños cara de pija")
    console.log("son iguales")
}
    else {
        console.log("segui participando salame")
        console.log("no son iguales")
    }

    console.log(diaPreguntado)
    console.log(mesPreguntado)
    console.log(anioPreguntado)