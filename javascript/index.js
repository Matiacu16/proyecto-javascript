//BODY APARTADO TIENDA

//PRACTICA CONSOLA Y VARIABLES TIENDA

// console.log('addToShoppingCartButtons', addToShoppingCartButtons)
// console.log('addToCartClicked -> button', button);
// console.log('addToCartClicked -> item', item);

//FUNCION DE FUSION DE PRUEBA

// console.log('addToCartClicked -> itemTitle', itemTitle, itemPrice, itemImagen);

// VALORES CORRECTOS DE LOS ITEMS
// console.log(itemTitle, itemPrice, itemImagen);

//CONSOLA DEL SHOPPING PRECIO
//console.log('updateShopingCartTotal -> shoppingCartTotal', shoppingCartTotal);
//console.log('updateShoppingCartTotal -> shoppingCartItems', shoppingCartItems);
//console.log('updateShoppingCartTotal -> shoppingCartItemPrice',shoppingCartItemPrice);

let addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked);
});

//VARIABLE GLOBAL SHOPPING
let shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');


function addToCartClicked(event) {
    let button = event.target;
    let item = button.closest('.item');

    let itemTitle = item.querySelector('.item-title').textContent;
    let itemPrice = item.querySelector('.item-price').textContent;
    let itemImagen = item.querySelector('.item-imagen').src;
    
addItemToShoppingCart(itemTitle, itemPrice, itemImagen);
}

//INTERACCION CON HTML APARTADO SHOPPING CART

function addItemToShoppingCart(itemTitle, itemPrice, itemImagen){
    let shoppingCartRow = document.createElement('div');
    let shoppingCartContent = `
    <div class="row shoppingCartItem">
            <div class="col-6">
                <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                    <img src=${itemImagen} class="shopping-cart-image">
                    <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}}</h6>
                </div>
            </div>
            <div class="col-2">
                <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                    <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
                </div>
            </div>
            <div class="col-4">
                <div
                    class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                    <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
    
    //CONSOLA DEL AUTO SELECCIONADO 
    console.log('Auto Seleccionado', itemTitle, itemPrice, itemImagen)
    
    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);
    
    shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', () => console.log('clicked'))
    
    
    updateShoppingCartTotal();
}

//FUNCION DE UPDATE DEL CARRO DE COMPRAS
function updateShoppingCartTotal(){
    let total = 0;
    let shoppingCartTotal = document.querySelector('.shoppingCartTotal');
    
    let shoppingCartItems = document.querySelectorAll('.shoppingCartItem');
    
    shoppingCartItems.forEach(shoppingCartItem => {
    let shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice');
    
    let shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('U$S', ''));
    
    let shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity');
    
    let shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);
    
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
    
    console.log('updateShoppingCartTotal -> shoppingCartItemPrice',shoppingCartItemPrice.toFixed(3));
    
    });
    
    shoppingCartTotal.innerHTML = `${total.toFixed(3)}U$S`
}


//CREAR UN REMOVE PARA EL SHOPPING CART ITEM!! TRABAJAR EN EL BOTON DE COMPRA PENDIENTE
//EMPEZAR A CREAR PAG DE CONTACTO 