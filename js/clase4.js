// funciones 

// algoritmo de calculadora 
// que tiene una calculadora como requisito basico?
// 4 operaciones basicas -> + - * /
// voy a dividir la calculadora en 4 subalgoritmo 
// sumar, restar, multiplicar y restar
// por que?
// funcion son un conjunto de instrucciones para realizar algo

// normal
// let n1, n2, resultado

// n1 = Number(prompt("Ingresa un numero."))
// n2 = Number(prompt("Ingresa otro numero."))

// resultado = n1 + n2
// console.log(resultado)

// subfuncion suma sintaxis

// function name(params) {
    //sentencia
// }

// function saludar() {
//     alert("Hola soy una funcion que saluda.")
// }

// saludar()

// solo va a corer cuando la funcion es llamada
// sintaxis la llamada por () y asi si funciona
// saludar()
// callback

// parametros

// let n1, n2, resultado

// n1 = Number(prompt("Ingresa un numero."))
// n2 = Number(prompt("Ingresa otro numero."))

// resultado = n1 + n2
// console.log(resultado)

// es un valor ( como si fueran variables ) para pasarle informacion a la funcion

// la funcion esta programada para retornar valor

// el algoritmo lee de arriba hacia abajo y de izq a der

// function sumar (n1, n2, n3) {
//     let resultado = n1 + n2 + n3
    // console.log(resultado) // alert prompt
    // es lo ultimo que vamos a programar el retorno
//     return resultado <- return es lo ulitmo de todo = break
// }

// let n1, n2, n3

// n1 = Number(prompt("Ingresa un numero."))
// n2 = Number(prompt("Ingresa otro numero."))
// n3 = Number(prompt("Ingresa otro numero."))
// let datos = sumar (n1, n2, n3)
// console.log(datos)

// valor1 = Number(prompt("Ingresa un numero."))
// valor2 = Number(prompt("Ingresa otro numero."))
// valor3 = Number(prompt("Ingresa otro numero."))

// let valor1, valor2, valor3
// let datos2 = sumar (valor1, valor2, valor3)
// console.log(datos2)

// function calculadora(n1, n2, operador) {
//     switch (operador) {
//         case "+":
//             return n1 + n2
//         case "-":
//             return n1 - n2 
//         case "*":
//            return n1 * n2
//         case "/":
//             return n1 / n2   
    
//         default:
//             return 0
//     }
// }

// let n1 = Number(prompt("Ingresa el primer valor."))
// let n2 = Number(prompt("Ingresa el segundo valor."))
// let operacion = Number(prompt("Ingresa el operador a utilizar \n + para sumar \n - para restar \n * para multiplicar \n / para dividir"))

// alert(calculadora(n1, n2, operacion))

// que hace un scope
// scope -> alcance, ambito, amplitud
// variable local, quiere decir que solo viven dentro de los {} o sea el bloque de codigo

// function saludarAJuan(params) {
    // todo con parentesis y llaves
    // sentencia a ejecutar
    // el alcance que tiene el dato que esta adentro de las llaves
//     let nombre = "juan"
//     return nombre
// }

// saludarAJuan()

// bloquea la informacion -> {}

// variables globales
// let resultado
// function suma(valor1, valor2) {
//     resultado = valor1 + valor2
// }
// suma(3,5)
// console.log(resultado)

// funciones anonimas

// funcion anonima
// const saludar = function() {
//     let nombre = "Juan"
//     let alerta = alert("Hola saludame " + nombre)
//     return alerta
// }

// saludar()


// funcion flecha arrow function
// => token que si pasamos un solo parametro o si estamos haciendo un calculo matematico de 2 parametros, podemos suprimir () , {} y return

// const saludar = (nombre) => { return "Hola mi nombre es " + nombre}
// alert(saludar("Juan"))

const saludar = nombre => "Hola mi nombre es " + nombre
alert(saludar("Juan"))