const boton = document.getElementById("boton")
const nuevoDiv = document.getElementsByClassName("respuesta")

const pregunta = () =>{
    let dato = parseFloat(prompt("dame un numero por favor"))
    if (!isNaN(dato)){
        console.log("numero correcto")
        cuenta(dato)
    }
    else{
        console.log("numero incorrecto")
    }
}

function cuenta(dato){
    for (i=dato; i<=100; i++){
        console.log(i)
    }
}

boton.addEventListener("click", pregunta)