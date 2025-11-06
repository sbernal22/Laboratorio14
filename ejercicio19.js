class Notification{
    constructor(mensaje){
        this.mensaje=mensaje;
    }
    enviar(){
        return "Mensaje: "+this.mensaje;
    }
}
class Email extends Notification{
    constructor(mensaje){
        super(mensaje);
    }
    enviar(){
        return "Enviando email... "+super.enviar();
    }
}
class SMS extends Notification{
    constructor(mensaje){
        super(mensaje);
    }  
    enviar(){
        return "Enviando SMS... "+super.enviar();
    }
}
class Push extends Notification{
    constructor(mensaje){
        super(mensaje);
    }  
    enviar(){
        return "Enviando notificación Push... "+super.enviar();
    }
}
function procesarNotificaciones(notificaciones){
    for(let notificacion of notificaciones){
        console.log(notificacion.enviar());
    }
}
const listaNotificaciones=[
    new Email("Convocatoria UDEEG"),   
    new SMS("En Bitel te damos megas gratis"),
    new Push("Nueva actualización disponible")
];
procesarNotificaciones(listaNotificaciones);