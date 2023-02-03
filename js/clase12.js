// desestructuring -> desestructuracion de un objeto o un array

// si nosotros queremos acceder a una propiedad de un objeto, la podemos almacenar en una variable

// const usuario = {
//     nombre : "Juan",
//     edad: 15,
//     mail: "juan@mail.com",
//     telefono: {
//         cel: {
//             claro: 123124214,
//             movistar: 1231234451,
//         },
//         casa:98231763128,
//         trabajo: 21389021739821,
//         fax:1287637821
//     }
// }

// console.log(usuario.mail)
// let mail = usuario.mail
// console.log(mail)

// podemos desarmarlo suguiendo la sintaxis del objeto
//const {dato1, dato2} = obj
// son los nombres de las variables que tienen que coincidir EXACTAMENTE CON LOS NOMBRES DE LAS PROPIEDADES

// const { nombre, edad, mail, telefono:{cel:{claro,movistar}} } = usuario

// let dato = document.getElementById('dato')

// let datoAImprimir = document.createElement('p')
// datoAImprimir.innerHTML = `Mi numero de claro es ${claro}`
// dato.appendChild(datoAImprimir)


// dato.innerHTML = `Mi numero de claro es ${claro}`
// console.log(usuario.nombre)
// console.log(nombre)
// console.log(claro)
// console.log(movistar)

// const diasDeLaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

// a partir del indice de la posicion del array

// const [ , , a, , , , b] = diasDeLaSemana // asi se omiten las posiciones que no quiero desestructurar

// console.log(a)
// console.log(b)

// const diasDeLaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

// spread operation (...)

// for (const dato of diasDeLaSemana) {   // asi antes
//     console.log(dato)
// }

// console.log(...diasDeLaSemana)


// const num = [6,8,7,9,1,45,9,89,59,4,687,6,87,68,486,8,7,768,46,6]


let dato = document.getElementById('dato')
// dato.innerHTML = Math.max(6,8,7,9,1,45,9,89,59,4,687,6,87,68,486,8,7,768,46,6)
// dato.innerHTML = Math.min(6,8,7,9,1,45,9,89,59,4,687,6,87,68,486,8,7,768,46,6)

// dato.innerHTML = Math.max(...num)
// dato.innerHTML = Math.min(...num)

// const diasDeDelivery = ['Domingo', 'Lunes', 'Martes', 'Miercoles']

// const diasNuevos = ["Jueves", "Viernes", "Sabado"]

// diasDeDelivery.push(...diasNuevos) // asi pusheamos uno por uno y no falla metiendo array dentro de array
// dato.innerHTML = diasDeDelivery
// console.log(diasDeDelivery)


// const usuario1 = {
//     nombre : "Juan",
//     edad: 15,
//     mail: "juan@mail.com",
//     telefono: {
//         cel: {
//             claro: 123124214,
//             movistar: 1231234451,
//         },
//         casa:98231763128,
//         trabajo: 21389021739821,
//         fax:1287637821
//     }
// }


// const usuario2 = {
//     ...usuario1
// }

// console.log(usuario2)

// const { nombre, edad, mail, telefono:{cel:{claro,movistar}} } = usuario2

// dato.innerHTML = `El nombre del usuario es ${nombre} y el telefono es ${claro}`

