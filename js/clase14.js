// setTimeout()  es una funcion

// setTimeout(callback, valorDelTiempo) -> con dos parametros

// sintaxis

// setTimeout(() => {
    
// }, timeout);

// setTimeout(()=> {
//     alert("Soy una alerta que tarda 2 segundos")
// }, 2000)  // en ms, cada 1000 es un 1 seg


// let btnAlerta = document.getElementById('btnAlerta')

// function cargarDatos() {
//     setTimeout(()=> {
//     let datos = document.createElement('h3')
//     datos.innerHTML = `Soy un evento asincrono y tardo dos segundos en mostrarme`
//     document.body.prepend(datos)
// }, 2000)  // en ms, cada 1000 es un 1 seg
// }

// // primero va la funcion, despues se convoca al addEventListener
// btnAlerta.addEventListener('click', cargarDatos)


// console.log("sincronica")
// setTimeout(()=> {
//     console.log("Soy una alerta que tarda 2 segundos")
// }, 0)  // en ms, cada 1000 es un 1 seg
// console.log("segundo sincronica")

// const hola = ["H", "O", "L", "A"]

// for (const info of hola) {
//     setTimeout(()=> {
//         let datos = document.createElement('h3')
//         datos.innerHTML = `Mostrar el array ${info}`
//         document.body.appendChild(datos)
//     }, 2000)  // en ms, cada 1000 es un 1 seg
// }

// let borrarInfo = clearTimeout()

// function borrar(borrar){
//     return `${borrar}`
// }

// borrar(borrarInfo)

// btnAlerta.addEventListener('click', borrarInfo)


// setInterval()  <- es una linea de tiempo que espera a un metodo para hacer un (clearInterval), misma sintaxis que setTimeout()

// sintaxis

// setInterval(() => {
    
// }, interval);

// setInterval(() => {
//     console.log("tic")
// }, 1000);

// setInterval(() => {
//     console.log("tac")
// }, 1500);


// const hola = ["H", "O", "L", "A"]

// for (const info of hola) {
//     setInterval(()=> {
//         let datos = document.createElement('h3')
//         datos.innerHTML = `Mostrar el array ${info}`
//         document.body.appendChild(datos)
//     }, 1500)  // en ms, cada 1000 es un 1 seg
// }

// for (let index = 0; index < hola.length; index++) {
//     // const element = array[index];
//     setInterval(()=> {
//         let datos = document.createElement('h3')
//         datos.innerHTML = `Mostrar el array ${hola[index]}`
//         document.body.appendChild(datos)
//     }, 1500)  // en ms, cada 1000 es un 1 seg
// }

// hola.forEach(element => {
//     setInterval(()=> {
//         let datos = document.createElement('h3')
//         datos.innerHTML = `Mostrar el array ${element}`
//         document.body.appendChild(datos)
//     }, 1500)  // en ms, cada 1000 es un 1 seg
// });

// el setInterval se puede programar para que el usuario imprima algo y despues lo borre

// let contador = 0
// const intervalo = setInterval(()=> {
//     contador++
//         let datos = document.createElement('h3')
//         datos.innerHTML = `incrementa ${contador}`
//         document.body.appendChild(datos)

//         if (contador >= 10) {
//             // funcion limpiar el intervalo
//             clearInterval(intervalo)
//             let fin = document.createElement('h3')
//             fin.innerHTML = `Fin del conteo`
//             document.body.appendChild(fin)
//         }
// }, 1000)


// promesas -> algo que debiera ejecutarse en un futuro no lejano
// todas las promesas -> van a destiempo -> asincronas
// las promesas son un objeto -> new Promise -> representan un evento
// las promesas tienen 3 estados :
// pending -> pendiente
// fulfilled -> realizado
// rejected -> rechazado

//sintaxis

// new Promise((resolve,reject)=>{
//     //aca adentro va el codigo a ejecutar
// })

let btnAlerta = document.getElementById('btnAlerta')

const eventoAFuturo = (pendiente) => {
    return  new Promise((resolve,reject)=>{
            // if (pendiente === true) {
            //     resolve("Promesa cumplida")
            // }else{
            //     reject("Promesa rechazada")
            // }
            setTimeout(()=> {
                pendiente ? resolve("Promesa cumplida") : reject("Promesa rechazada")
                //              true                                false
            }, 1000)
        })
}

// console.log(eventoAFuturo(true))
// console.log(eventoAFuturo(false))

eventoAFuturo()
    .then((respuesta) => {
        console.log('Resolvi la peticion')
    })
    .catch((error) => {
        console.log('Ooooops promesa rechazada')
    })
    .finally((info) =>{
        console.log('Sin datos')
    })
// btnAlerta.addEventListener('click', cargarDatos)

// la funcion retorna una promesa, entonces esta promesa puede concatenar el contenido que se espera a partir de si la promesa fue aceptada o rechazada 

// 3 metodos 

// .then() ok -> si la promesa es resuelta, entonces mostra el valor que se debiera otorgar
// .catch() error -> si la promesa fue rechazada, mostrar el error de porque se rechazo ej: no trae los cafe de la api (tardamos en comunicarnos con el servidor, no se puede traer el objeto pedido)
// .finally() default -> finaliza la ejecucion en el caso de no entrar en then o catch

