import { generateId } from "../Utils/generateId.js";


export class Item{
  constructor(itemData){
      this.id = itemData.id || generateId()
      this.name = itemData.name
      this.quantity = itemData.quantity
      this.description = itemData.description
      this.size = itemData.size
      this.price = itemData.price
      this.img = itemData.img
  }
  get Template(){
    return /*html*/`
    <div class="card" style="width: 18rem;">
    <img src="${this.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${this.name}</h5>
      <h4 class="">$${this.price}</h4>
      <p class="card-text">${this.description}</p>
      <a href="#" class="btn btn-dark text-light" onclick="app.cartsController.addCart('${this.id}')">Add to cart</a>
      <i class="fas fa-trash selectable ${this.quantity}" onclick="app.itemsController.deleteItem('${this.id}')"></i>
    </div>
  </div>

    `
  }
}