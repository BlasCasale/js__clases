// librerias JS

// const img = './img/camaro.jpg'

// let btn = document.getElementById('btn')

// btn.addEventListener("click", alerta)


// function alerta () {
//     // swal('Soy una alerta linda', 'Este es un segundo parrafo', success)
//     swal({
//         title: 'Productos agregado al carrito de compras',
//         text: 'Producto 1',
//         // icon: 'success',
//         icon: img,
//         iconwidth: 200,
//         iconheight: 100,
//         button: 'Ingresa a la tienda'
        


//     }) // es mas amigable para ver pero mas tedioso de escribir
// }


// hay 4 botonoes predefinidos : "warning" "success" "info" "error"



// Toastify

// let btn = document.getElementById('btn')

// btn.addEventListener("click", alerta)

// function alerta () {
//     // esto es para el carrito de compra y el agregado de productos
//     Toastify ({
//         text: "Agregado al carrito de compras",
//         duration: 1500, //mc en milesimas de segundos
//         gravity: "bottom" , // top o bottom
//         // position: "right" , // left, center, right
//         offset: {
//             x:50,
//             y:10,
//         },
//         style: {
//             background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
//             color: "white",
//             borderRadius: "40px",
//             border: "solid 3px black"
//         },                
//         destination: "./pages/contacto.html",
//         newWindow: true,
//         close: true,
//         stopOnFocus: true,
//         // podemos tirar un link a otro lugar
//         onclick : () => {
//             Toastify ({
//                 text: "Soy otro boton apartir de la alerta",
//                 duration: 1500, //mc en milesimas de segundos
//                 gravity: "bottom" , // top o bottom
//                 // position: "right" , // left, center, right
//                 offset: {
//                     x:50,
//                     y:10,
//                 },
//                 destination: "./pages/contacto.html",
//                 newWindow: true,
//                 close: true,
//                 stopOnFocus: true,
//             }).showToast();
//         }
//     }).showToast()
// }


const productos = [
    {id:1, nombre:"Arroz", precio:500},
    {id:2, nombre:"Papa", precio:300},
    {id:3, nombre:"Huevo", precio:200}
]

const fechaDeHoy = new Date
const cumple = new Date("August 12, 1993")

let dato = document.createElement("h3")
dato.innerHTML = cumple
document.body.appendChild(dato)

const enviarDatosAlStorage = (clave, valor) => {
    localStorage.setItem(clave, valor)
}

// for (const prod of productos) {
//     enviarDatosAlStorage(prod.id, JSON.stringify(prod))
// }

enviarDatosAlStorage("listaDeProd", JSON.stringify(productos))

class Producto {
    constructor (literal){
        this.nombre = literal.nombre.toUpperCase();
        this.precio = Number(literal.precio);
    }
    sumarIva(){
        this.precio = this.precio * 1.21
    }
}

// nos traemos los datos del storage

const datosTraidosDelStorage = JSON.parse(localStorage.getItem('listaDeProd'))

const datosProd = []

// iteramos la variable que nos trae el array de objetos

for (const obj of datosTraidosDelStorage) {
    datosProd.push(new Producto(obj, obj))
    console.log(obj)
}

// ahora a los productos que estan almacenados en el array nuevo le sumamos el iva
for (const prodConIva of datosProd) {
    prodConIva.sumarIva()
}