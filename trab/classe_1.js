"use strict";
//getters e setters
var Pessoa = /** @class */ (function () {
    function Pessoa(_nome, _sexo, _idade) {
        this._nome = _nome;
        this._sexo = _sexo;
        this._idade = _idade;
    }
    Object.defineProperty(Pessoa.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            if (!nome) {
                throw new Error('inválido');
            }
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "sexo", {
        get: function () {
            return this._sexo.toUpperCase();
        },
        set: function (sexo) {
            this._sexo = sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (idade) {
            if (idade > 18) {
                throw new Error('valor maior que 18 anos');
            }
            this._idade = idade;
        },
        enumerable: false,
        configurable: true
    });
    Pessoa.prototype.imprNome = function () {
        return "Humano " + this._nome + " do sexo " + this._sexo;
    };
    Pessoa.prototype.verificarIdade = function () {
        if (this._idade == 0) {
            console.log("inválido");
        }
        else if (this._idade >= 18) {
            console.log("maior de idade");
        }
        else {
            console.log("nemor de idade");
        }
    };
    return Pessoa;
}());
var pessoa1 = new Pessoa('', '', 18);
console.log(pessoa1.nome);
try {
    pessoa1._nome = 'Alek';
    pessoa1._sexo = 'Feminino';
    pessoa1._idade = 12;
    console.log(pessoa1);
    console.log(pessoa1.imprNome());
    console.log(pessoa1.verificarIdade());
}
catch (err) {
    console.log(err.message);
}
