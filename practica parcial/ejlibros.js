let libros = [];



/*libros.push("hola");
console.log(libros)
*/

function agregarLibro(titulo, autor, año, genero, leido = false) {
    libros.push({
        titulo: titulo,
        autor: autor,
        año: año,
        genero: genero,
        leido: leido
    })
    leidoono = if(leido) $$ true then
    return `Titulo: ${titulo}, Autor: ${autor}, Año: ${año}, Género: ${genero}, Leído: ${leido}`;
}
// revisar todo esto, basicamente quiero hacer que si leido es true, me devuelva "Leído: Sí" y si es false, me devuelva "Leído: No", pero no se como hacer eso en js, en python lo haria con un if else, pero aca no se como hacerlo

//Objetos es:
//let perfil = {
//    nombre: "Esteban",
//    edad: 33,
//    PI: 3.14,
//    profesor:true,
//} por ejemplo entoences









/*
function eliminarLibro(id) {}
function marcarComoLeido(id) {}
function obtenerLibros() {}
function filtrarPorGenero(genero) {}
function obtenerEstadisticas() {} */