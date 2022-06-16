//BODY APARTADO TIENDA
// console.log(document)

console.dir(document)

//TITULO STYLE

let titulo = document.getElementById('title')

const title = document.getElementsByClassName(titulo)

for (const elemento of title) {
    elemento.className = "black"
    console.log(elemento)
}

const lista = document.getElementsByClassName('item_title');

//console.dir(lista)

for (const elemento of lista) {
    console.log(elemento.innerHTML)
}

//Todos Los H3
let elemento = document.querySelectorAll('#contenedor h3')

console.log(elemento)

//Lista Automoviles

const objetos = [
    {Nombre:"Mercedes-Benz Clase A KIT AMG",Precio:"U$S 56990"},
    {Nombre:"Audi A3 Full",Precio:"U$S 32000"},
    {Nombre:"Audi A1 1.4",Precio:"U$S 26000"},
    {Nombre:"Volkswagen Nivus Highline",Precio:"U$S 26990"},
    {Nombre:"Volkswagen Gol Highline",Precio:"U$S 21500"},
    {Nombre:"Renault Oroch 2022",Precio:"U$S 20990"},
]

objetos.map((value)=>{
    console.log(value)
})