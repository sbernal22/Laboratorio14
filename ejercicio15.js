class Usuario{
    constructor(nombre, email){
        this.nombre=nombre;
        this.email=email;
    }
    mostrarInfo(){
        return "Nombre: "+this.nombre+" Email: "+this.email;
    }
}
class Cliente extends Usuario{
    constructor(nombre, email, nivelDeFidelidad){
        super(nombre, email);
        this.nivelDeFidelidad=nivelDeFidelidad;
    }
    mostrarInfo(){
        return "Cliente: "+super()+" nivelDeFidelidad"+this.nivelDeFidelidad;
    }
}
class Administrador extends Usuario{
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
const listaUsuarios =[new Cliente("Sebas", "a@gmail.com", 4), 
    new Cliente("Jeral", "b@gmail.com", 4), 
    new Administrador("Luis", "c@gmail.com", true, false, true)
];
for(let usuario of listaUsuarios){
    console.log(usuario.mostrarInfo());
}