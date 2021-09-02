export function getItemFormTemplate(){
    console.log('this is the form')
    return/*html*/`
    <form class="visually-hidden" onsubmit="app.itemsController.addItem()" id="item-form">
        <div class="form-group">
            <h4> This is the item forms</h4>
                <div class="form-group">
                    <label for="name" class="">Name:</label>
                    <input type="name" class="form-control" name="name" id="name">
                </div>
                <div class="form-group">
                    <label for="quantity" class="">Quantity:</label>
                    <input type="quantity" class="form-control" name="quantity" id="quantity">
                </div>
                <div class="form-group">
                    <label for="description" class="">description:</label>
                    <input type="description" class="form-control" name="description" id="description">
                </div>
                <div class="form-group">
                    <label for="size" class="">size:</label>
                    <input type="size" class="form-control" name="size" id="size">
                </div>
                <div class="form-group">
                    <label for="price" class="">price:</label>
                    <input type="price" class="form-control" name="price" id="price">
                </div>
                <div class="form-group">
                    <label for="img" class="">img:</label>
                    <input type="img" class="form-control" name="img" id="img">
                </div>
                
                
                <button type="reset" class="btn btn-dark text-light">Clear</button>
                 <button type="submit" class="btn btn-dark text-light">Submit</button>
    </div>
    </form>
    `

}