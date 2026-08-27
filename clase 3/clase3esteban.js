/* console.log("hola mundo")
let nombre = prompt("ingres su nombre")
let titulo = document.getElementById("titulo")
titulo.textContent = `Hola ${nombre}` */

let botonCalcular = document.querySelector("#calcular")

console.log(botonCalcular)
botonCalcular.addEventListener("click", 
    function(){
        let textoInput = document.querySelector("#datoImportante").value
        let parrafoVacio = document.querySelector("#textoAAgregar")
        parrafoVacio.innerText = textoInput
    }
)