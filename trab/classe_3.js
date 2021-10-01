"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ImpostoDeRenda = /** @class */ (function () {
    function ImpostoDeRenda(nome, rendaAnual) {
        this.nome = nome;
        this.rendaAnual = rendaAnual;
    }
    Object.defineProperty(ImpostoDeRenda.prototype, "nomes", {
        get: function () {
            return this.nome;
        },
        set: function (nome) {
            if (!nome) {
                throw new Error('inválido');
            }
            this.nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImpostoDeRenda.prototype, "RendaAnual", {
        get: function () {
            return this.rendaAnual;
        },
        set: function (rendaAnual) {
            if (rendaAnual < 0) {
                throw new Error('renda inválida');
            }
            this.rendaAnual = rendaAnual;
        },
        enumerable: false,
        configurable: true
    });
    return ImpostoDeRenda;
}());
var PessoasFísicas = /** @class */ (function (_super) {
    __extends(PessoasFísicas, _super);
    function PessoasFísicas(nome, rendaAnual, saude) {
        var _this = _super.call(this, nome, rendaAnual) || this;
        _this.saúde = saude;
        return _this;
    }
    Object.defineProperty(PessoasFísicas.prototype, "Saude", {
        get: function () {
            return this.saúde;
        },
        set: function (saúde) {
            if (saúde < 0) {
                throw new Error('gasto negativo');
            }
            this.saúde = saúde;
        },
        enumerable: false,
        configurable: true
    });
    PessoasFísicas.prototype.calculoImposto = function () {
        if (this.rendaAnual < 20000 && this.saúde) {
            return this.rendaAnual * 0.15;
        }
    };
    return PessoasFísicas;
}(ImpostoDeRenda));
var pessoafísica = new PessoasFísicas('alek', 50000, 2000);
console.log("valor do imposto Humano: " + pessoafísica.calculoImposto());
var PessoaJuridica = /** @class */ (function (_super) {
    __extends(PessoaJuridica, _super);
    function PessoaJuridica(nome, rendaAnual, funcionario) {
        var _this = _super.call(this, nome, rendaAnual) || this;
        _this.funcionario = funcionario;
        return _this;
    }
    Object.defineProperty(PessoaJuridica.prototype, "Funcionario", {
        get: function () {
            return this.funcionario;
        },
        set: function (funcionario) {
            if (funcionario < 0) {
                throw new Error('quantidade inválida');
            }
            this.funcionario = funcionario;
        },
        enumerable: false,
        configurable: true
    });
    PessoaJuridica.prototype.calculoImposto = function () {
        if (this.funcionario < 10) {
            return this.rendaAnual * 0.16;
        }
        else {
            return this.rendaAnual * 0.14;
        }
    };
    return PessoaJuridica;
}(ImpostoDeRenda));
var pessoajuridica = new PessoaJuridica('HUmano', 500000, 25);
console.log(pessoajuridica);
console.log('imposto  da pessoa jurídica: ' + pessoajuridica.calculoImposto());
try {
    pessoajuridica.nome = 'HUmano';
    pessoajuridica.funcionario = 100;
    pessoajuridica.rendaAnual = 80000;
}
catch (err) {
    console.log(err.messege);
}
console.log(pessoajuridica);
try {
    pessoafísica.nome = 'HUmano';
    pessoafísica.rendaAnual = 100000;
}
catch (err) {
    console.log(err.message);
}
