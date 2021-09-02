import { ProxyState } from "../AppState.js";
import { Item } from "../Models/Item.js";


export function saveState(){
    localStorage.setItem('Muggs', JSON.stringify({
        items: ProxyState.items,
    }))
}

export function loadState(){
    let data = JSON.parse(localStorage.getItem('Muggs'))
    console.log('load state', data)
    if (data != null){
        ProxyState.items = data.items.map(f => new Item(f))
    }
    console.log('loaded state')
}