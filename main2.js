const boton = document.getElementById("boton")

const pregunta = () =>{
    let dato = parseFloat(prompt("dame un numero por favor"))
    if (!isNaN(dato)){
        console.log("numero correcto")
    }
    else{
        console.log("numero incorrecto")
    }
}

boton.addEventListener("click", pregunta)

