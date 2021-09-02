import { ProxyState } from "../AppState.js"
import { Cart } from "../Models/Cart.js"


function _drawCarts(){
    let template=''
    ProxyState.carts.forEach(c => template += c.cartTemplate)
    document.getElementById('carts').innerHTML = template
}
export class CartsController{
    constructor(){
        console.log('this is the Carts Controller')
    }
    addCart(){
        event.preventDefault()
        console.log('This is in the cart!')
        const form = event.target
        const cartData ={
            name: form.name.value,
            quantity: form.quantity.value,
            price: form.price.value
        }
        form.reset()
    }
    showCart(){
        _drawCarts()
        document.getElementById('carts').innerHTML = Cart;
    
    }
}