const titulo = document.getElementById('titulo')

const nombre = localStorage.getItem('nombre')

titulo.innerText = `Bienvenido ${nombre}`

const listaUsuarios = document.getElementById('listaUsuarios')

const usuariosJSON = localStorage.getItem('usuarios')
const usuarios = JSON.parse(usuariosJSON)

console.log(usuarios)

usuarios.forEach((user) => {
    const li = document.createElement('li')
    li.innerHTML = `
        <h4> Nombre: ${user.nombre}</h4>
        <p> Curso: ${user.curso}</h4>
    `

    listaUsuarios.append(li)
})

const btnVaciar = document.getElementById('btnVaciar')

btnVaciar.addEventListener('click', () => {
    localStorage.removeItem('usuarios')
    listaUsuarios.innerHTML = 'Se borro la lista de usuarios'
})