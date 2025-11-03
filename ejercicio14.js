class Usuario{
    constructor(nombre, email){
        this.nombre=nombre;
        this.email=email;
    }
    mostrarInfo(){
        return "Nombre: "+this.nombre+" Email: "+this.email;
    }
}
class Cliente{
    constructor(nombre, email, nivelDeFidelidad){
        super(nombre, email);
        this.nivelDeFidelidad=nivelDeFidelidad;
    }
    mostrarInfo(){
        return "Cliente: "+super()+" nivelDeFidelidad"+this.nivelDeFidelidad;
    }
}
class Administrador{
    constructor(nombre, email, crear, editar, eliminar){
        super(nombre, email);
        this.crear=crear;
        this.eliminar=eliminar;
        this.editar=editar;
    }
    mostrarInfo(){
        return "Administrador: "+super()+" Crear "+this.crear+" Eliminar "+this.eliminar+" Editar "+this.editar;
    }
}