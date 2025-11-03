class Producto{
    #nombre;
    #precio;
    #stock;
    set precio(precio){
        if(precio<=0){
            console.log("Precio invalido");
            return;
        }
        else
            this.#precio=precio;
    }
    set stock(stock){
        if(stock<=0){
            console.log("Stock invalido");
            return;
        }
        else
            this.#stock=stock;
    }
}