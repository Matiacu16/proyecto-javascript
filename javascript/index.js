//CICLOS / ITERACIONES

//for (let index = 0; index < 10; index++) {
//    console.log(index);    
//}


//let numero = 10
//for (let index = 1; index < 12; index++) {
//    let resultado = numero * index
//    console.log('Resultado: ' + index + ' - ' + resultado);
//}


//for (let index = 0; index < 20; index++) {
//    if(index == 10){
//        break
//    }
//    console.log(index);
//}

let entrada =prompt ('Ingresa tu contraseña')
while (entrada != 'Hola123') { switch (entrada) {
case "Hola124": alert ("Casi") 
break;
case "Hola1234": alert ("Contraseña Vieja")
break;
default: 
alert ("Contraseña Incorrecta") }
entrada = prompt ("Ingresar un nombre") }


// function saludar() {
//     console.log('Bienvenido A Automotora Solar');
// }

// saludar()

// function solicitarnombre() {
//     let nombreingresado = prompt('Ingrasar Nombre')
//     alert('Nombre Ingresado: ' + nombreingresado)
// }

// solicitarnombre()
// const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
// addToShoppingCartButtons.forEach((addToCartButton) => {
//     addToCartButton.addEventListener('click', addToCartClicked);
// });

// const comprarButton = document.querySelector('.comprarButton');
// comprarButton.addEventListener('click', comprarButtonClicked);

// const shoppingCartItemsContainer = document.querySelector(
//     '.shoppingCartItemsContainer'
// );

// function addToCartClicked(event) {
//     const button = event.target;
//     const item = button.closest('.item');

//     const itemTitle = item.querySelector('.item-title').textContent;
//     const itemPrice = item.querySelector('.item-price').textContent;
//     const itemImage = item.querySelector('.item-image').src;

//     addItemToShoppingCart(itemTitle, itemPrice, itemImage);
// }

// function sumar(parametroA,parametroB){
//     let resultado = parametroA + parametroB
//     console.log('resultado es: '+resultado)
//     return resultado
// }

// sumar(26000,46)

// function calcular(numeroA,numeroB,operacion) {
//     switch (operacion) {
//         case '+':
//             return sumar(numeroA,numeroB)
//             break;
    
//         default:
//             return 0;
//             break;
//     }
// }