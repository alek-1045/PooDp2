"use strict";
//nao consegui arrumar a mensagemd erro (throw err;)
var Atributos = /** @class */ (function () {
    function Atributos(_produto, _preço, _quantidade) {
        this._produto = _produto;
        this._preço = _preço;
        this._quantidade = _quantidade;
    }
    Object.defineProperty(Atributos.prototype, "produto", {
        get: function () {
            return this._produto;
        },
        set: function (produto) {
            if (!produto) {
                throw new Error('inválido');
            }
            this._produto = produto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Atributos.prototype, "pre\u00E7o", {
        get: function () {
            return this._preço;
        },
        set: function (preço) {
            if (preço <= 0) {
                throw new Error('inválido');
            }
            this._preço = preço;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Atributos.prototype, "quantidade", {
        get: function () {
            return this._quantidade;
        },
        set: function (quantidade) {
            if (quantidade <= 0) {
                throw new Error('inválido');
            }
            this._quantidade = quantidade;
        },
        enumerable: false,
        configurable: true
    });
    Atributos.prototype.compraDesconto = function () {
        if (this.quantidade <= 10) {
            return 0;
        }
        else if (this.quantidade <= 20) {
            return this._preço * this.quantidade * 0.1;
        }
        else if (this.quantidade <= 50) {
            return this._preço * this.quantidade * 0.2;
        }
        else {
            return this._preço * this.quantidade * 0.25;
        }
    };
    Atributos.prototype.compraTotal = function () {
        return this.quantidade * this.preço - this.compraDesconto();
    };
    return Atributos;
}());
var produto1 = new Atributos('Comida do Alek', 500, 50);
console.log("O Produto " + produto1.produto + " de pre\u00E7o " + produto1.preço + ", quantidade qauntidade " + produto1.quantidade + "  o desconto total foi de " + produto1.compraDesconto() + " o valor pago foi " + produto1.compraTotal());
try {
    produto1.produto = 'alek';
    produto1.preço = 500;
    produto1.quantidade = 50;
}
catch (err) {
    console.log(err.message);
}
