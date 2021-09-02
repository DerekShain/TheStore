import { generateId } from "../Utils/generateId.js";


export class Cart{
    constructor(cartData){
        this.id = cartData.id || generateId()
        this.name = cartData.name
        this.price = cartData.price
        this.quantity = cartData.quantity
    }

    get cartTemplate(){
        return /*html*/`
        <div class="cart-card" style="width: 18rem;">
            <div class="card-header">
                Cart
            </div>
         <ul class="list-group list-group-flush">
            <li class="list-group-item">${this.name}</li>
            <li class="list-group-item">$${this.price}</li>
            <li class="list-group-item">${this.quantity}</li>
         </ul>
</div>
        `
    }
}