class Empleado{
    constructor(nombre, sueldoBase){
        this.nombre=nombre;
        this.sueldoBase=sueldoBase;
    }
}
class Programador extends Empleado{
    constructor(nombre, sueldoBase, lenguaje){
        super(nombre, sueldoBase);
        this.lenguaje=lenguaje;
    }
    calcularSueldo(){
        return this.sueldoBase*1.1;
    }
}
class ProgramadorSenior extends Programador{
    constructor(nombre, sueldoBase, lenguaje){
        super(nombre, sueldoBase, lenguaje);
    }
    calcularSueldo(){
        return super.calcularSueldo()+this.sueldoBase*0.15;
    }
}