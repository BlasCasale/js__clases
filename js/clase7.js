// funciones de orden superior

// for (let index = 0; index < 10; index++) {     <- itera
//     const element = index;
//     console.log(element)
// }

// if (condition) {    <- si pasa esto, hace esto
    
// }

// while (condition) {    <- mientras pase esto, hace esto
    
// }

// function suma(n1,n2){
//     return resultado = n1 + n2
// }

// console.log(suma(30,10))   <- simplifica escribir mucho codigo


// la abstraccion tiene que ver con que sabemos que hace, pero no sabemos que hay por detras, todas las palabras reservadas estan todas abstraidas, solo aprendemos a usarlas

// function name(params) {
//     <- forma pura
// }

// function = (params) => {}  <- forma abreviada

// vanilla en js es puro, la manera clasica


// js vanilla ES6 nuevos metodos con mejoras en su abstraccion, incorporacion soluciones a problemas recurrentes en menos lineas de codigo

// las funciones nos permiten abstrear acciones y no solo valores

// .push("agrega valor a la array en la ultima posicion") <- pre programado

// puedo tener programado una funcion y/o el input -> metodo de orden superior para ejeccutar mi algoritmo y voy a tener como resultado un output u otra funcion


// function operador(op) {
//     if (op == "sumar") {
//         return (a, b) => a + b
//     }else if (op == "restar"){
//         return (a, b) => a - b
//     }
// }

// let suma = operador("sumar")
// console.log(suma(4,6))


// const datos = ["Uno", "Dos", "Tres"]

// function recorrerElArray(array, index) {
//     for (const valor of array ) {
//         index(valor)
//     }
// }
// console.log(recorrerElArray(datos, console.log))




// for (let index = 0; index < datos.length; index++) {
//     const element = datos[index];
//     console.log(element)
// }


// const duplicados = []

// const datosADuplicar = (para) => {
//     return para * 2
// }

// console.log(datosADuplicar(5))


// metodo forEach() <- para recorrer array

// const datos = ["Uno", "Dos", "Tres", "Cuatro", "Cinco"]  <- array a recorrer

// datos.forEach(element => console.log(element))  <- asi es mas facil

// datos.forEach(function(element) {
//     return element
// })   <- los metodos de orden superior se hacen por la clasica


// fin -> por comparacion va a entrar al array y si el valor es true lo devuelve, sino tira false

// class Producto {
//     constructor(id, nombre, precio) {
//         this.id = id
//         this.nombre = nombre.toUpperCase()
//         this.precio = Number(precio)
//     } 
//     sumarIva() {
//         this.precio *= 1.21
//     }
// }


// const productos = [
//     {producto:"Papa", precio: 300},
//     {producto:"Huevo", precio: 800},
//     {producto:"Harina", precio: 500},
// ]

// const info = productos.find((element) => element.producto === "Harina" )

// console.log(info)

// metodo filter 

// const producto = productos.filter( (element)=> element.producto.includes("Harina"))

// const productoss = productos.filter( (element)=> element.precio >= 500)
// console.log(productoss)



// reduce()

// para mi ecommerce
// let saldoAnterior = 600

// const saldos = [1000, 5000, 7000, 9000, 500]

// const precioAPagar = saldos.reduce((acumulador, element)=> acumulador + element, saldoAnterior, saldoAnterior)

// console.log(precioAPagar)


// map() -> crea un NUEVO del array original a partir de las modificaciones que le pedimos

// const prod = [
//     {nombre: "Arroz", precio: 500}, 
//     {nombre: "Harina", precio: 300},
//     {nombre: "Papa", precio: 800},
//     {nombre: "Harina", precio: 1000},
//     {nombre: "Harina", precio: 20000},
//     {nombre: "Harina", precio: 650},
//     {nombre: "Harina", precio: 980},
// ]

// const nombre = prod.map((element)=> element.nombre )

// console.log(nombre)

// const cursos = [
//     {nombre: 'Javascript', precio: 15000},
//     {nombre: 'ReactJS', precio: 22000},
//     {nombre: 'AngularJS', precio: 22000},
//     {nombre: 'Desarrollo Web', precio: 16000},
// ]

// const nombre = cursos.map((element)=> element.nombre )

// console.log(nombre)

// console.log(cursos)

// const prod = [
//     {nombre: "Arroz", precio: 500}, 
//     {nombre: "Harina", precio: 300},
//     {nombre: "Papa", precio: 800},
//     {nombre: "Harina", precio: 1000},
//     {nombre: "Harina", precio: 20000},
//     {nombre: "Harina", precio: 650},
//     {nombre: "Harina", precio: 980},
// ]

// console.log(prod)

// const preciosConIvaYProdEnMay = prod.map((element)=> {
//     return {
//         nombre: element.nombre.toUpperCase(),
//         precio: element.precio * 1.21
//     }
// })

// console.log(preciosConIvaYProdEnMay)


// Math

// const pi = Math.PI

// console.log(pi)

// que pasa si tengo un mega array de numeros

// const datos = [1,5,7,89,342,4,6,678,5432,2,6,7,312,56,563,2,423,4]

// let valorMAX = Math.max(...datos)
// let valorMin = Math.min(...datos)
// console.log(valorMAX)
// console.log(valorMin)

// let num = 5.7
// console.log(Math.floor(num))  <- para abajo
// console.log(Math.ceil(num))   <- para arriba
// console.log(Math.round(num))  <- redondeando como en matematica



// clases con las fechas -> new Nombre
// constructores -> crea objetos Date con fechas diferentes

// console.log(new Date())

// const anioNuevo = new Date ("December 31, 2022 23:59:59")   <- tiene que estar en ingles y creamos nosotros las fechas

// orden -> año, mes, dia, hora, minutos, segundos, milesimas (number e ingles)

// console.log(anioNuevo)