// localStorage.setItem(clave, valor a almacenar)


// la info queda guardada aunque comente el script, para sacarla tengo que borrarla del navegador, dependiendo de el tipo de storage que use

// localStorage.setItem("profesor", "Conrado Lanusse")
// localStorage.setItem("tutor 1", "Lautaro") //<- no puede haber dos claves igual sino se pisan, como obejtos
// localStorage.setItem("tutor 2", "Agustin")
// localStorage.setItem('curso', 1234)  // <- aunque ponga numeros o boolean, entra como string, se ve reflejado en la consola de abajo, todo entra en string

// la clave es como las propiedades del objeto


// vamos a leer el storage

// localStorage.getItem(clave) <- asi se lee el localStorage

// const profesor = localStorage.getItem("profesor") // <- recupero los datos por medio de la clave y despues chequeo por console.log lo que paso 
// console.log(profesor)

// const tutor = localStorage.getItem('tutor 1')

// console.log(tutor)

// const curso = localStorage.getItem('curso')

// console.log(typeof curso)


// ejemplo practico 

const titulo = document.getElementById('titulo')
const btnNombre = document.getElementById('btnNombre')

let nombre = ''
let nombreLS = localStorage.getItem('nombre')

if (nombreLS) {
    nombre = nombreLS
} else {
    nombre = prompt('Ingrese su nombre')
    localStorage.setItem('nombre', nombre)
    titulo.innerText = `Bienvenido ${nombre}`
}

btnNombre.addEventListener('click', () => {
    localStorage.removeItem('nombre')
    window.location.reload()
    // window es el navegador, padre del document
})

// btnNombre.addEventListener('click', () => {
//     nombre = prompt('Ingrese su nombre')
//     localStorage.setItem('nombre', nombre)
//     titulo.innerText = `Bienvenido ${nombre}`
// })


// const usuarios = [
//     {
//         id: 1,
//         nombre: 'Conrado Lanusse',
//         curso: 'JavaScript'
//     },
//     {
//         id: 2,
//         nombre: 'Agustin Garcia',
//         curso: 'Desarrollo Web'
//     },
//     {
//         id: 1,
//         nombre: 'Conrado Lanusse',
//         curso: 'React JS'
//     }

// ]
// console.log(usuarios.toString())  // <- esto es para pasar todo a objetos
// localStorage.setItem('usuarios', usuarios)

// json es un string que tiene un formato que representa objetos de JS en strings

// const usuariosJSON = JSON.stringify(usuarios)
// console.log(usuarios)
// console.log(usuariosJSON)

// localStorage.setItem('usuarios', usuariosJSON)


let usuarios = []
const usuariosLS = JSON.parse(localStorage.getItem('usuarios'))

if (usuariosLS) {
    usuarios = usuariosLS
}

const inputNombre = document.getElementById('inputNombre')
const selectCurso = document.getElementById('selectCurso')
const btnAgregar = document.getElementById('btnAgregar')

btnAgregar.addEventListener('click', () => {
    const nombre = inputNombre.value
    const curso = selectCurso.value

    if (nombre === '') return

    const user = {
        id: usuarios.length + 1,
        nombre: nombre,
        curso: curso
    }

    usuarios.push(user)

    inputNombre.value = ''

    const usuariosJSON = JSON.stringify(usuarios)
    localStorage.setItem('usuarios', usuariosJSON)
})

