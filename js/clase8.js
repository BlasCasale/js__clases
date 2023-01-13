// clase 8 y manipulacion del dom (html)

// creamos una hoja cuando llamamos al HTML para este lado -> es conocida como DOM (documento del objeto a modelar)


// un nodo es el unico punto de acceso del arbol de nodos, el arbol del dom son las etiquetas de html

// con document llamamos a la hoja para interactuar con el html

// let nombre = "Carolina"

// document.write(nombre)

// console.log(document.body)  <- consultando a body por sus etiquetas

// definicion de etiquetas -> cuando las etiquetas pasan a js cambian de ser etiquetas a elementos, tambien tienen padres e hijos y tienen detalles muy especificos

// como se hace para llegar de !DOCTYPE para llegar hasta el li de un nav

//tipos de nodos en el DOM -> hay 12 tipos de nodos, vamos a ver solo los 5 clasicos



// logica de nodos
{/* <ul>
    <li>
        <a href="#index.html">Inicio</a>
    </li>
    <li>
        <a href="#proctudos.html">Producto</a>
    </li>
    <li>
        <a href="#sobreNosotros.html">Sobre nosotros</a>
    </li>
    <li>
        <a href="#contactos.html">Contactos</a>
    </li>
</ul> */}

// mamuscha 
// document -> nodo raiz donde derivan todos los elementos de HTML
// element -> representan cada de las etiquetas de HTML que pueden tener atributos y derivar en otros nodos
// atributos -> definen la accion del elemento -> atributo = valor (ejemplo, sin src no hay imagenes)
// text -> el nodo que contiene el texto
// comment -> representa el nodo de los comentarios dentro de HTML



// para acceder a los nodos tenemos 3 metodos

// js vanilla

// metodo -> getElementById

// let lista = document.getElementById("menu")
// console.log(lista)


// metodo -> getElementsClassName()

// let liMenu = document.getElementsByClassName("lista")
// console.log(liMenu)
// liMenu[2].remove()


// liMenu.forEach(element => console.log(element));

// for (const info of liMenu) {
//     console.log(info)
// }


// metodo por etiqueta -> getElementByTagName (es la buena practica)

// let parrafo = document.getElementsByTagName("p")
// let titulo = document.getElementsByTagName("h1")

// console.log(parrafo)
// console.log(titulo)


// innerHTML

// let nombre = "Carolina"

// let nombreAImprimir = document.getElementById("nombre")

// nombreAImprimir.innerHTML = nombre



// crear nuestras propias etiquetas de HTML (la mejor practica)

// 3 reglas para crear elementos

// paso 1 crear el nodo del tipo del elemento

// let parrafo = document.createElement("p")

// // paso 2 le vamos a insertar el contenido al elemento creado

// parrafo.innerHTML = "Hola soy un parrafo creado desde JS"

// // paso 3 le tenemos que avisar al HTML que le creamos un elemento
// // le vamos al vamos a decir al padre (body), que le creamos un hijo (p) -> .append() || .appendChild()

// document.body.appendChild(parrafo)


// // para que sirve esto?

// const frutas = ["Naranja", "Pera", "Banana", "Mandarina"]

// let arrayFrutas = document.getElementById("arrayFrutas")
// // arrayFrutas.style.backgroundColor = "#000"  <- asi se le pone estilos al HTML desde JS

// for (const fruta of frutas) {
//     // paso 1 creamos
//     let li = document.createElement("li")
//     // paso 2 imprimimos
//     li.innerHTML = fruta
//     // paso 3 le decimos al padre que le creamos un hijo
//     arrayFrutas.appendChild(li)
// }

// let titulo = document.getElementsByID("titulo")

// titulo.remove()


// input
// let nombreImput = document.getElementById("nombre").value

// console.log(nombreImput)


//plantillas literales    template literals

// let prod = {id: 1, nombre: "Arroz", precio: 300}
// let template = `<h3> el id es : </h3>
//                 <strong> ${prod.id} </strong>
//                 <h3> tiene por nombre </h3>
//                 <strong> ${prod.nombre} </strong>
//                 <h3> y por precio </h3>
//                 <strong> ${prod.precio} </strong>`


// let imprimir = "El id es " +  prod.id + ", el nombre del prod es " + prod.nombre + " y el precio es " + prod.precio + "."

// console.log(imprimir)


// query selector

// let parrafo = document.querySelector("#contenedor .texto")

// let contenedor = document.querySelector("#contenedor")

// let radioBoton = document.querySelector("btn:radio")