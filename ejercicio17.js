class Cuenta{
    #saldo;
    constructor(saldoInicial){
        this.#saldo = saldoInicial;
    }
    depositar(monto){
        if(monto <= 0){
            return false;
        }
        this.#saldo += monto;
        return true;
    }

    retirar(monto){
        if(monto <=0||monto > this.#saldo) {
            return false;
        }
        this.#saldo -= monto;
        return true;
    }
    transferir(monto, cuentaDestino){
        if(this.retirar(monto)){
            cuentaDestino.depositar(monto);
            return true;
        }
        return false;
    }

}
class CuentaAhorro extends Cuenta{
    constructor(saldoInicial){
        super(saldoInicial);
    }
    retirar(monto){
        if(monto > 1000){
            return false;
        }
        return super.retirar(monto);
    }
}
class CuentaCorriente extends Cuenta{
    constructor(saldoInicial){
        super(saldoInicial);
    }
    retirar(monto){
        if(monto > 5000){
            return false;
        }  
        return super.retirar(monto);
    }
}