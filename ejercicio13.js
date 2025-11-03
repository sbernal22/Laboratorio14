class Figura{
    area(){
        return 0;
    }
    perimetro(){
        return 0;
    }
}
class Cuadrado extends Figura{
    constructor(lado){
        super();
        this.lado=lado;
    }
    area(){
        return this.lado*this.lado;
    }
    perimetro(){
        return this.lado*4;
    }
}
class Triangulo extends Figura{
    constructor(base, altura){
        super();
        this.base=base;
        this.altura=altura;
    }
    area(){
        return this.base*this.altura;
    }
    perimetro(){
        let hipotenusa=Math.sqrt(Math.pow(this.base, 2)+Math.pow(this.altura, 2))
        return hipotenusa+this.base+this.altura;
    }
}