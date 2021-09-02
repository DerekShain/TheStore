import { ProxyState } from "../AppState.js"
import { Item } from "../Models/Item.js"
import { saveState } from "../Utils/LocalStorage.js"



class ItemsService{
    constructor(){
        console.log('this is the items service')
        ProxyState.on('items', saveState)
    }
    createItem(itemData){
        ProxyState.items = [...ProxyState.items, new Item(itemData)]
        console.log('Something Something nice', ProxyState.items)
    }

    deleteItem(itemId){
        console.log('Item Deleted', itemId)
        ProxyState.items = ProxyState.items.filter(i => i.id !== itemId)
    }
}

export const itemsService = new ItemsService();