// colecciones o array es un objeto que representa una lista, dentro de esta lista podemos guardar strings, number, boolean, object and array

// cursos para full stack

// desarrollo web, JS, React, Backend

// let dw, js, react, back;

// dw = "curso de HTML y CSS"
// js = "curso de Javascript"
// react = "curso de React JS"
// back = "curso de Back end"

// una lista para agrupar distintos tipos de datos

// declarativa del array
// array puros porque no mezclamos
// el dejar espacios en blanco puede pasar pero ocupa espacio en la memoria
// no se TOCAN los objetos, quedan asi y listo, se puede hacer pero esta mal 


// const numeros = [213,1234,3452435,12453463,467645,4123412]

// const booleanos = [true, false, true, false, true, false]

// array mixto -> no son mala practica, puede pasar

// const datosRandom = [ "Juan", "Pedro", 1234, true, "Papa", {producto: "Papa", precio: 500} [true, false, true, false, true, false] ]

// cosas a tener en cuenta en el array
// las posiciones que hay ocpupadas en el array -> indice longitud, tiene 4 pocisiones, con 4 valores 
// los elementos que ocupan esas pocisiones

// const listaDeCursos = ["DW", "JS",     , "React", "Backend"]
       // indice        0      1           2/3        3/4

// console.log(listaDeCursos[2])
// console.log(listaDeCursos)
// listaDeCursos[2] = "Vue" // <- esto esta MAL
// listaDeCursos[3] = "Angular" // <- esta tambien esta MAL
// console.log(listaDeCursos)
// console.log(numeros)
// console.log(booleanos)
// console.log(datosRandom)


// recordatorio el const se define y no se debe cambiar mas! no se declara de nuevo

// array vacio <- se llena con metodos y propiedades
// const arrayVacio = [];

// const listaDeCursos = ["DW", "JS", "Angular", "React", "Backend"]

// console.log(listaDeCursos[0])
// console.log(listaDeCursos[1])
// console.log(listaDeCursos[2])
// console.log(listaDeCursos[3])
// console.log(listaDeCursos[4])
// console.log(listaDeCursos[5])

// for (let index = 0; index < listaDeCursos.length; index++) {
//     const element = listaDeCursos[index];
//     console.log(element)
// }

//se puede hacer asi
// for (let index = 0; index < listaDeCursos.length; index++) {
//     console.log(listaDeCursos)
// }


// let nombre = "Carolina"
// console.log(nombre.length)

//itera durante toda la longitud de la lista -> por eso esta el length

// length -> propiedad para contar la longitud de las cosas

// metodos
// sintaxis .elnombreDelMetodo()

// . push() ->

// const arrayVacio = []

// console.log(arrayVacio)
// arrayVacio.push("Este nuevo dato.")

// console.log(arrayVacio)

// arrayVacio.push("Este otro dato", "y este otro dato")  // con las , se puede enviar varios
// console.log(arrayVacio)

// push es clave


// const diasDeLaSemana = ["lunes", "martes", "miercoles", "jueves", "viernes"]
// console.log(diasDeLaSemana)  //   <- nos va a faltar sabado y doming

// diasDeLaSemana.push("sabado")   //   <- le agrego el sabado
// console.log(diasDeLaSemana)

// envia los datos a la primera posicion y mueve todas las demas posiciones <- ojo con esto
// unshift()

// diasDeLaSemana.unshift("domingo")
// console.log(diasDeLaSemana)


// dos metodos que eliminan el PRIMER elemento o el ÚLTIMO elemento

// diasDeLaSemana.shift() //   <- con esto borro uno
// console.log(diasDeLaSemana)
// diasDeLaSemana.shift() //   <- con este al que sigue
// console.log(diasDeLaSemana)


// el metodo para eliminar el ultimo ingreso del array = pop

// diasDeLaSemana.pop()
// console.log(diasDeLaSemana)

// const diasDeLaSemana = ["lunes", "martes", "miercoles", "jueves", "viernes"]
// console.log(diasDeLaSemana)

// diasDeLaSemana.splice( 2, 1 ) -> eliminar posiciones del indice
// console.log(diasDeLaSemana)

// splice -> permite eliminar uno o varios elementos de un array en cualquier posicion y/o agregar elementos al array en cualquier posicion   (dificil)   (este suplanta a todos pero es recomendable no usarlo)

// const diasDeLaSemana = ["lunes", "martes", "jueves", "viernes"]
// diasDeLaSemana.splice(2, 0, "miercoles")
// console.log(diasDeLaSemana)

// diasDeLaSemana.splice( 2, 3 )
// console.log(diasDeLaSemana)


// concat -> concatenar
// puedo concatenar arrays y hacer un monstruo

// const america = ["arg", "bra", "col", "uru"]
// const europa = ["esp", "fran", "port", "ale"]
// const asia = ["AS", "japon", "CDS", "rus", "qatar"]

// const paisesQueVanAlMundial = america.concat(europa,asia)
// console.log(paisesQueVanAlMundial)

// indexOF -> indice de un elemento  dentro del array y si el elemento no estan nos devuelve -1  (es key sensitve, mucho cuidado) (es para saber la posicion)

// const america = ["arg", "bra", "col", "uru"]
// const europa = ["esp", "fran", "port", "ale"]
// const asia = ["AS", "japon", "CDS", "rus", "qatar"]

// const paisesQueVanAlMundial = america.concat(europa,asia)

// console.log(paisesQueVanAlMundial.indexOf("fran"))

// includes -> si el elemento esta incluido en el array de manera boolean (nos devuelve true or false)

// console.log(paisesQueVanAlMundial.includes("esp"))     // <- true
// console.log(paisesQueVanAlMundial.includes("chile"))   // <- false


// ejemplo: declarar un array vacio

// const jugadoresParaElMundial = []

// let cantidad = 5
// podria no poner la cantidad de jugadores y a la vez poner en donde esta la let cantidad sea 5 y listo


// do {
//     // que me pregunte los nombres de los jugadores
//     let jugadores = prompt("Ingresa la lista de los jugadores.")
//     jugadoresParaElMundial.push(jugadores)
//     console.log(jugadoresParaElMundial)
// } while (jugadoresParaElMundial.length != cantidad)


// class Producto {
//     constructor(id, nombre, precio) {
//         this.id = id
//         this.nombre = nombre.toUpperCase()
//         this.precio = Number(precio)
//     } 
//     sumarIva() {
//         this.precio = this.precio * 1.21
//         // this.precio *= 1.21
//     }
// }

// esto no
// const productos = [
//     {producto:"Papa", precio: 300},
//     {producto:"Huevo", precio: 800},
//     {producto:"Harina", precio: 500},
// ]

// const productos = []
// let cantidad = 3

// do {
//     let id = prompt("Ingresa el id.")
//     let prod = prompt("Ingresa el producto.")
//     let precio = prompt("Ingresa el precio.")
//     productos.push(new Producto(id, prod, precio))

// } while (productos.length != cantidad)


// asi se pushean los datos de una (engorroso)
// productos.push(new Producto(1, "Papa", 500), new Producto(2, "Huevo", 800), new Producto (3, "Harina", 600))

// console.log(productos)

// for ... of -> sirve para recorrer array de objetos

// para que funcione el metodo sumarIva tengo que primero llamar y despues imprimir
// for (const prod of productos) {
//     prod.sumarIva()
//     console.log(prod)
// }