// objetos -> son variables que agrupan bajo el mismo criterio distintos de valores

// tipos de datos -> string, number, null, undefined, boolean, objetos y function



// propiedad : valor
// nombre = tipoDeValor

// constructor celular
// se puede hacer en una linea o asi

// la utilidad es almacenar distintos tipodes de valores en una sola "variable"
// la ultima no necesita , porque cierra el { }
// objeto literal -> cuando se lo crea, no se toca mas!
// no cambiar valores dentro del objeto, se podria agregar, pero no alterar

// const imei_01 = { 
//     marca: "Samsung", 
//     modelo: "A51", 
//     color: "Blanco", 
//     codBarra: 12345, 
//     precio: 50000, 
//     tieneInfrarrojo: false
// }

// console.log(imei_01)
// console.log(imei_01.color)

// como llamar al objeto
// vamos a utilizar la notacion del (.) (Recomendable usar esta de abajo)
// console.log(imei_01.marca, imei_01.modelo)

// corchetes [ ] (es un re quilombo llamar las cosas asi, lpm)
// console.log(imei_01["marca"])

// esta mal dejar propiedades por fuera del objeto

// imei_01.pixeles = 18;
// imei_01.color = "Negro"
// console.log(imei_01.pixeles)
// console.log(imei_01.color)



// asi hacemos que se vea para el usuario
// document.write(imei_01.marca, imei_01.modelo)


// construir un objeto

// un objeto constructor es la creacion de la base para replicar muchas copias fieles

// sintaxis ES5 function
// la mayuscula es para los constructores <- obligatorio

// this -> "este" solo la utilizamos en los constructores
// this -> vuelve las variables a globales, se comparta como quiere

// el constructor se define con la sintaxis de una funcion, se le asignan parametros y luego esos parametros se tienen que convertir en propiedades globales usando this

// luego se usa new para crear a partir del constructor orginal las copias infinitas con las mismas propiedades del constructor original

// function Persona (nombre, apellido, edad, dni) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//     this.dni = dni;
//     this.hablar = function () {alert("Hola mi nombre es " + this.nombre)}

//     // this.Parametro1 = nombre <- se puede pero es mejor practica lo de arriba
// }

// const estudiante = new String; <- se usa en TypeScrypt

// function Celular (marca, precio, color, peso){
//     this.marca = marca;
//     this.precio = precio;
//     this.color = color;
//     this.peso = peso;
// }

// new 

// const estudiante1 = new Persona("Blas", "Casale", 25, 40714259)
// estudiante1.hablar()

// // for..in <- se utiliza para iterar dentro del constructor
// for (const propiedades in estudiante1) {
//     console.log(estudiante1[propiedades])
        
// }



// const imei_01 = new Celular("Samsung", 50000, "Gris", 500)

// console.log(imei_01)
// console.log("El estudiante se llama " + estudiante1.nombre + ", su apellido es " + estudiante1.apellido + ", su edad es " + estudiante1.edad + " y su dni es N°" + estudiante1.dni + ".")

// los objetos tienen funcionalidades
// la funcion dentro del constructor esta limitada por el constructor mismo -> pasa a ser metodo del constructor

// los metodos son acciones pre-definidas (tecnicamente son funciones) solo que se limitan a hacer la accion programada (no pueden ser llamadas de otras partes del codigo porque la limita el objeto constructor)

// sintaxis de los metodos

// .nombreDelMetodo ()    <- asi se hace
// .toUpperCase()
// .toLowerCase()

// let nombre = prompt("Ingresa un nombre.").toLowerCase()
// let nombre1 = prompt("Ingresa un nombre.").toUpperCase()
// alert ("Hola " + nombre + ".")
// alert ("Hola " + nombre1 + ".")

// metodo -> pre-programado para transformar el string en mayusculas o minisculas

// viejo lo de arriba

// ES6 class <- mejora de sintaxis

// function Persona (nombre, apellido, edad, dni) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//     this.dni = dni;
//     this.hablar = function () {alert("Hola mi nombre es " + this.nombre)}

//     // this.Parametro1 = nombre <- se puede pero es mejor practica lo de arriba
// }

// class Persona {
//     constructor(nombre, apellido, edad, dni) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.edad = edad;
//         this.dni = dni;
//     }
//     hablar () {
//         alert("Hola mi nombre es " + this.nombre)
//     }
// }

// const estudiante1 = new Persona("Blas", "Casale", 25, 40714259)

// console.log(estudiante1.hablar())

// constructor productos

// class Producto {
//     constructor(nombre, precio) { 
//         this.nombre = nombre.toUpperCase();
//         this.precio = Number(precio)
//     }
//     sumarIva() {
//         this.precio = this.precio * 1.21
//         // this.precio *= 1.21
//     }
// }

// const prod1 = new Producto(prompt("Ingresa el nombre del producto."), prompt("Ingresa el precio del producto."))
// console.log(prod1)
// prod1.sumarIva()
// console.log(prod1)
