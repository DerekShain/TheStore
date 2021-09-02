import { CartsController } from "./Controllers/CartsController.js";
import { ItemsController } from "./Controllers/ItemsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { loadState } from "./Utils/LocalStorage.js";

class App {
  valuesController = new ValuesController();

  itemsController = new ItemsController();
  cartsController = new CartsController();
}
loadState()
window["app"] = new App();
