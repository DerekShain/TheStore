import { ProxyState } from "../AppState.js"
import { saveState } from "../Utils/LocalStorage.js"



class CartsService{
    constructor(){
        console.log('this is the cart')
        ProxyState.on('carts', saveState)
    }
}

export const cartsService = new CartsService();