//nao consegui arrumar a mensagemd erro (throw err;)
class Atributos {
    constructor (
        public _produto: string,
        public _preço: number,
        public _quantidade: number,
    ) {}


    get produto() {
        return this._produto
    }

    set produto(produto: string) {
        if(!produto) {
            throw new Error('inválido')
        }
        this._produto = produto
    }
    get preço() {
        return this._preço;
    }


    set preço(preço: number) {
        if(preço <= 0) {

            throw new Error('inválido')
        }
        this._preço = preço
    }

    get quantidade() {
        return this._quantidade;
    }

    set quantidade(quantidade: number) {
        if(quantidade <= 0) {

            throw new Error('inválido')
        }
        this._quantidade = quantidade
    }


    compraDesconto() {
        if(this.quantidade <= 10) {
            return 0
        } else if (this.quantidade <= 20) {
            return this._preço * this.quantidade * 0.1
        } 
        else if (this.quantidade <= 50) 
        {
            return this._preço * this.quantidade * 0.2
        } 
        else {
            return this._preço * this.quantidade * 0.25
        }

    }
    compraTotal()
    {
        return this.quantidade * this.preço - this.compraDesconto()
    } 

}
 
const produto1 = new Atributos ('Comida do Alek', 500, 50)
console.log(`O Produto ${produto1.produto} de preço ${produto1.preço}, quantidade qauntidade ${produto1.quantidade}  o desconto total foi de ${produto1.compraDesconto()} o valor pago foi ${produto1.compraTotal()}`);

 try {
    produto1.produto = 'alek';
    produto1.preço = 500;
    produto1.quantidade = 50;


} 
catch (err) {
    console.log(err.message);
} 

