// for ( let i  = 1; i < 6; i++) {
    
//     if (i == 1 ) {
//         alert("Tengo " + i + " oveja.")
//     }
//     else {
//         alert("Tengo " + i + " ovejas.")
//     console.log(i)
//     }
    
// }

// ejemlo de login con break hasta con decrementor de intentos

// const user = "admin";
// const pass = "pass1234";

// let intentos = 3 ;
// for ( let i = 0 ; i < 3 ; i++) {
    
//     let u = prompt("Ingrese su usuario.")
//     let p = prompt("Ingrese su contraseña.")

//     if ( !u || !p ) {
//         alert("Ingresa los datos solicitados.")
//     }else{
//         if ( u == user && p == pass ) {
//             alert("Bienvenido admin.");
//             break;
//         }
//         alert ("Usuario o contraseña incorrectos. Te quedan " + intentos + " intentos")
//     }
//     intentos -- ;
// }

// if (intentos <= 0) {
//     alert("Tu usuario ha sido bloqueado.")
// }


// ejemplo de login con break y while con decrementor de intentos

// const user = "admin";
// const pass = "pass1234";

// let intentos = 3 ;
// while (intentos > 0) {
    
//     let u = prompt("Ingrese su usuario.")
//     let p = prompt("Ingrese su contraseña.")

//     if ( !u || !p ) {
//         alert("Ingresa los datos solicitados.")
//     }else{
//         if ( u == user && p == pass ) {
//             alert("Bienvenido admin.");
//             break;
//         }
//         alert ("Usuario o contraseña incorrectos. Te quedan " + intentos + " intentos")
//     }
//     intentos -- ;
// }

// if (intentos <= 0) {
//     alert("Tu usuario ha sido bloqueado.")
// }

// estructura switch es como un if pero mas ordenado

// calculadora con if y switch

// let num1 = parseInt(prompt("Ingrese un numero."));
// let operacion = prompt("Indique una operacion + , - , * , /")
// let num2 = parseInt(prompt("Ingrese otro numero."))

// let flag = true ;

// if (isNaN (num1) || isNaN(num2)) {
//     alert("Debes ingresar numeros enteros.")
//     flag = false
// }

// if (flag) {
//     if (operacion) {
//        let resultado;
//        switch (operacion) {
//         case "+":
//             resultado = num1 + num2 ;
//             break;
//         case "-":
//             resultado = num1 + num2 ;
//             break;
//         case "*":
//             resultado = num1 + num2 ;
//             break;
//         case "/":
//             resultado = num1 + num2 ;
//             break;

//         default :
//         alert("No ingresaste una operación valida.")
//        } 
//        alert("El resultado de la operación es: " + resultado)
//     }else {
//         alert("Debes indicar el tipo de operación.")
//     }
// }