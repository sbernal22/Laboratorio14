class Producto{
    constructor(nombre, precio){
        this.nombre=nombre;
        this.precio=precio;
    }
}
class Carrito{
    #productos=[];
    agregarProducto(producto){
        this.#productos.push(producto);
    }
    calcularTotal(){
        let total=0;
        for(let producto of this.#productos){
            total+=producto.precio;
        }
        return total;
    }
    mostrarResumen(){
        let resumen="Productos en el carrito:\n";
        for(let producto of this.#productos){
            resumen+="-"+producto.nombre+": "+producto.precio;
        }
        resumen+=" Total: "+this.calcularTotal();
        return resumen;
    }
}