class Producto{
    #nombre;
    #precio;
    #stock;
    set precio(precio){
        precio=Number(precio);
        if(precio<=0){
            console.log("Precio invalido");
            return;
        }
        else
            this.#precio=precio;
    }
    get precio(){
        return "$"+ this.#precio.toFixed(2);
    }
    set stock(stock){
        if(stock<=0){
            console.log("Stock invalido");
            return;
        }
        this.#stock=stock;
    }
    vender(cantidad){
        if(this.#stock-cantidad<0)
            return;
        this.#stock-=cantidad;
    }
}