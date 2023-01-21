// los eventos se basan en acciones y reacciones (peticiones esperando una respuesta)

// 3 maneras de crear eventos (la tercera es mala practica, muy comun, muchos sitios que la tienen y es la manera mas agil de hacerlo)


// click // dobleClick // mouse // change // submit

// 1er manera de crear un evento 
// el evento que escucha (metodo clasico -> vanilla) -> .addEventListener("el evento". la funcion que se desencadenar)  ->  permite definir que evento escucha sobre el nodo seleccionado
// vanilla -> sintaxis pura de JS, no hay cascada porque es la clasica
// la funcion que nombremos no va a tener que estar con () porque sino la llamamos y se desactiva

// const funcionClick = () => alert("Hola soy un evento a partir del metodo que escucha")


// buena practica del vanilla, traemos el dom, despues creo eventos y despues creo las funciones

// 1)
// let boton = document.getElementById("btn")
// let texto = document.getElementById("texto")
// al nodo le asignamos el evento

// 2)
// boton.addEventListener("click", funcionClick)
// texto.addEventListener("dblclick", mostrarComentario) 

// 3)
// function funcionClick (){
//     alert("Hola soy un evento a partir del metodo que escucha")
// }
// function mostrarComentario(){
//     console.log("Si el doble click se lanzo")
// }




// 2da manera de crear eventos

// a partir del prefijo on


// let boton = document.getElementById("btn")

// boton.onclick = () => console.log("Segundo evento el prefijo on") -> estas funciones son definidas como argumentos, en react o angular es obligatorio hacerla asi

// boton.ondblclick = function(){
//     console.log("Segundo evento el prefijo on")
// }



// 3era manera de hacerlo (malisimamente mala) -> es meter el JS en HTML
{/* <button onclick="alert('Esto es una mala practica')">Click de la mala practica</button>
<button onclick="funcionClick()">Click de la mala practica</button> */}


// otros tipos de eventos

//mouse 
// click, dlclick
// mousedown  mouseup -> oprime y suelta el boton (van juntos)
// mouseover  mouseout -> el puntero del mouse se mueve adentro del nodo o sale del nodo (elemento)
// mousemove -> sigue el movimiento del mouse sobre el elemento y se activa ("tipo hover")

// let texto = document.getElementById("texto")

// no funciona el celu, hay que usar el mousemove para eso
// texto.onmousedown = () => console.log("Oprime")
// texto.onmouseup = () => console.log("Suelta")

// similar al hover
// texto.onmouseover = () => console.log("Oprime")
// texto.onmouseout = () => console.log("Suelta")

// mousemove se dispara cuando entra y sale
// texto.onmousemove = () => console.log("Me muevo por sobre el elemento.")





// change -> nos permite ver el valor seleccionado


// let opciones = document.getElementById("idiomas")
// let imprimir = document.getElementById("mostrarIdioma")

// opciones.addEventListener("change", elegirIdioma)

// function elegirIdioma(){
//     let respuesta = document.getElementById("idiomas").value;
    // document.getElementById("mostrarIdioma").innerHTML = `El idiota que eligio fue ${respuesta}`
//     let mostrarInfo = document.createElement("p")
//     mostrarInfo.innerHTML = `El idiota que eligio fue ${respuesta}`
//     imprimir.appendChild(mostrarInfo)
    
// }


// submit -> enviar (obligatoria para el ecomerce) -> login

// let form = document.getElementById("form")
// console.log(form)
// form.addEventListener("submit", enviarDatos)

// tiene un metodo y dos propiedades que la acompañan (no es excluyente el metodo)
// preventDefault() <- es para evitar el submit en los form

// function enviarDatos(e){
//     e.preventDefault()
//     console.log("El formulario anda.")
// }

// function enviarDatos(e){
//     e.preventDefault()
    // obtener los datos de los input
    // let nombre = e.target
    // let contra = e.target
    // tener en cuenta los hijos, pensarlo como array
//     console.log(nombre.children[0].value === nombre)
//     console.log(contra.children[1].value === contra)
// }



