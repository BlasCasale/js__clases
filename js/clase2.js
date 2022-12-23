// numeros
// parsetInt -> pasar a enteros
// parseFloat -> pasar a flotante

// let n1, n2, resultado;

// n1 = Number (prompt("Ingresa un numero"))
// n2 = Number (prompt("Ingresa tu numero"))

// resultado = n1 + n2

// console.log (resultado)

//constructor Number

// Number

// variables simbols -> + - * / ,



// incrementador o el decrementador

// ++ de a 1 
// -- de a 1 

// vida + 1;
// vida = vida + 1;
// let vida = 3
// vida--
// vida++
// console.log(vida)

// esta es la manera de que la consola comprenda las operaciones matematicas
// let monedas = 100
// monedas = monedas * 3
// monedas %= 14 -> manera de hacer calculos matematicos
// console.log(monedas)
// monedas **= 3 -> manera de elevar al cuadrado


// boolean -> variables logicas => true or false

// como resultado nos da true or false

// el operador AND && "y"
// si ambas son verdaderas, da true, si una es false, ya es suficiente para que de false
// si hay una falsa, es falsa

// valor1 && valor2 = valor3
// lluvia && paraguas = resultado 
// verdadero && verdadero = verdadero
// falso && verdadero = falso
// verdadero && falso = falso
// falso && falso = falso


// let tengoHambre = true;
// let tengoComida = true;

// let comoComida = tengoHambre && tengoComida

// console.log(comoComida)

// el operador OR || "o"

// valor1 || valor2 = valor3

//  si la primer variable es verdadera || la segunda variable es verdadera = resultado (verdadero)
// si una de las dos es verdadera, resultado verdadero, si no hay ninguna verdadera, es falso
// tren || colectivo (para ir a trabajar)
// falso || verdadero = verdadero
// verdadero || falso = verdadero
// falso || falso = falso

// let tren = false
// let colectivo = false

// let llegoAlTrabajo = tren || colectivo

// console.log(llegoAlTrabajo)


// operador NOT ! (negacion)

// let meGustaEstudiar = !true

// console.log(meGustaEstudiar)

// funciona como la heladera, el boton se activa cuando uno la abre y cuando se cierra deja de dar luz, en cuestion se le pone !true para que se apague y despues cuando accionas la heladera se hace true y termina dando luz
// tal cual el boton modo oscuro, porque siempre es true pero se lo niega de cuajo

// operadores logicos 
//  < menor
// <= menor o igual
// > mayor
// >= mayor o igual

// 5 > 4 : true
// 5 < 4 : false

// let n1, n2, resultado;

// n1 = 7;

// n2 = 7;

// resultado = n1 === n2;

// console.log(resultado)

// if -> si condicionado 

// estructura de control IF

// sintaxis
// si - condicion -> tiene que ser verdadera para que el bloque de codigo se ejecute

// if(condicion) {
//     //entonces
//     //bloque de codigo a ejecutar
// 

// if(false) <- siempre debe ser true para que se pueda activar la alerta {
//     alert("Soy verdadero")
// }

// if(!false) <- puedo negarlo y listo, funciona {
//     alert("Soy verdadero")
// }

// if ... else 

// if(false) {
//     alert("Soy verdadero.")
// }else {
//     alert("Es falso.")
// }

// algoritmo
// let edadParaVentaDeAlcohol = 18
// let edad = Number(prompt("Ingresa tu edad"))

// if (edad >= edadParaVentaDeAlcohol) {
//     alert("Estas habilitado para comprar alcohol.")
// } else {
//     alert("No estas habilitado para comprar alcohol.")
// }

// let ingresaUnNum = Number(prompt("Ingresa un numero para ganar la loteria."))

// if (ingresaUnNum == 35) {
//     alert("Ganaste la quiniela.")
// }else{
//     alert("No ganaste la quiniela.")
// }

// let nombreDeUsuario = prompt("Ingresa el nombre de tu usuario.")

// if (nombreDeUsuario == "") {
//     alert("No ingresaste nada, vuelva a intentar.")
// } else {
//     alert("El nombre ingresado es " + nombreDeUsuario)
// }

// algoritmo login

// let usuario = "juan@mail.com"
// let contrasenia = "1234"

// let login = prompt("Ingresa tu mail.")
// let password = prompt("Ingresa tu contraseña.")

// importante distributiva de matematicas 
// if ( ("juan@mail.com" == login || "JUAN@MAIL.COM" == login) && (contrasenia == password) ) {
//     alert("Bienvenido a tu sesión.")
// } else {
//     alert("O el usuario o contraseña no coinciden.")
// }

// if anidado -> si if es afirmativo a la primera para el algoritmo y ejecuta la opcion

// let usuario = Number(prompt("Ingresa el monto."))

// if (usuario <= 100) {
//     alert("Recibe un prestamos de 100.")
// } else if (usuario <= 1000) {
//     alert("Recibe un prestamo de 1000.") 
// }else if (usuario <= 10000) {
//     alert("Recibe un prestamo de 10000.")
// }else{
//     alert("No cumple con los requisitos para el prestamo.")
// }