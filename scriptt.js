let edad = 33
let nombre = "Esteban"
let profesor = true
console.log("Hola")
//alert("Hola Mundo") // este te sirve en internet, no aca
// and && or ||
// > < =< => == != === !==

//objetos literales, de lo mas importante de js...
let profesorObjeto = {
    nombre: "Esteban",
    edad: 33,
    PI: 3.14,
    profesor:true,
}
console.log(profesorObjeto.nombre)

// https://estebanpiazza.github.io/indexitba/

// while no lo usamos, usamos for, pq es para una pagina web

//reduce en zapatillas en mercado libre

function saludar (){
    console.log("Hola")
}

function saludar(nombre){
    console.log("Hola ", nombre)
}

saludar("perdida")

function sumar(num1, num2){
    console.log(num1+num2)
}

//arrow functions
let restar = (a,b) => a-b
console.log(restar(3,1))

//las fucniones las puedo invocar antes de descalarlas pq js es un lenguaje compilador es diferente a python por ejemplo que lee en orden
//en las funciones flecha no podes hacer eso que dije arriba...

//CRUD
//Create, read, update, delete
//create, update y delete son post y read es get

//const es para ctes, mo podes cambiar e valor, en cambio con let si
//en python si que te deja por ejemplo
//si tenes una lista si podes modificar los valores adentro pero no podes transformar la lista en otra cosa...