const addProduct = () => {
    const productFied = document.getElementById('product-name');
    const quantityFied = document.getElementById('product-quantity');
    const product = productFied.value;
    const quantity = quantityFied.value;

    productFied.value = '';
    quantityFied.value = '';

    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity);

    console.log(product + ' : ' + quantity)
}

const displayProduct = (product, quantity) =>{
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`
    ul.appendChild(li);
}
const getSavedShoppingCart = () =>{
    let cart = {};
    const shopingCart = localStorage.getItem('cart');
    if(shopingCart){
        cart = JSON.parse(shopingCart);
    }
    return cart;
}
const saveProductToLocalStorage = (product, quantity) => {
    const cart = getSavedShoppingCart();
    cart[product] = quantity;
    const stringifyCart = JSON.stringify(cart);
    localStorage.setItem('cart', stringifyCart);
}
const displayProductFromLocalStorage = () => {
    const savedCart = getSavedShoppingCart();
    for(const product in savedCart){
        const quantity = savedCart[product];
        displayProduct(product, quantity);
    }
}
displayProductFromLocalStorage();