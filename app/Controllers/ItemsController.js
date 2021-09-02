import { ProxyState } from "../AppState.js"
import { itemsService } from "../Services/ItemsService.js"
import {getItemFormTemplate } from "../Forms/itemform.js"

function _drawItems(){
    let template = ''
    ProxyState.items.forEach(i => template += i.Template)
    document.getElementById('mugs').innerHTML = template
}

export class ItemsController{

    constructor(){
        ProxyState.on('items',_drawItems)
        console.log('this is the items controller')
    }

    addItem(){
        event.preventDefault()
        const form = event.target
        const itemData={
            name: form.name.value,
            quantity: form.quantity.value,
            description: form.description.value,
            size: form.size.value,
            price: form.price.value,
            img: form.img.value

        }
        try{
            itemsService.createItem(itemData)
        }catch (e){
            form.make.classList.add('border-danger')
            console.error("uh oh something happened")
            return
        }
        form.reset()
    }

    showItem(){
        _drawItems()
        document.getElementById('controls').innerHTML=/*html*/`
        <button class="btn btn-dark text-light" onclick="app.itemsController.toggleItemForm()">Add Item</button>
        `
        document.getElementById('forms').innerHTML = getItemFormTemplate()
    }

    buyItem(){
        _drawItems()
        document.getElementById('forms').innerHTML=getItemFormTemplate()
    }
    toggleItemForm(){
        document.getElementById('item-form').classList.toggle('visually-hidden')
    }

    deleteItem(itemId){
        itemsService.deleteItem(itemId)
        
    }
}