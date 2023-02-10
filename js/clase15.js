// ajax y fetch 

// fetch 

// sintaxis

// async function getData(url) {
//     const response = await fetch(url);
  
//     return response.json();
// }
  
let lista = document.getElementById('lista')

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((resp)=> resp.json())
//     .then((dato)=> {
//         dato.forEach(info => {
//             const datosAMostrar = document.createElement('li')
//             datosAMostrar.innerHTML = `
//                 <h3>${info.name}</h3>
//                 <h5>${info.phone}</h5>
//                 <p>${info.email}</p>
//                 <p>${info.website}</p>
//             `
//             lista.appendChild(datosAMostrar)
//         });
//     })
//     .catch((error)=> console.log(('error inesperado, decime que paso', error)))


// https://swapi.dev/api/people/
// https://swapi.dev/api/planets/1/
// https://randomuser.me/
// https://jsonplaceholder.typicode.com/


// enviar datos POST

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method:'POST',
//     body: JSON.stringify({
//         title: 'Formulario entregado',
//         body: 'bla bla bla bla',
//         userId: 1,
//       }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((resp)=> resp.json())
//     .then((dato)=> console.log(dato))
//     .catch((error)=> console.log(('error inesperado, decime que paso', error)))

