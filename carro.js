"use strict";
var Carro = /** @class */ (function () {
    function Carro(cor, ano, valor) {
        this.cor = cor;
        this.ano = ano;
        this.valor = valor;
    }
    Carro.prototype.getValor = function () {
        return this.valor;
    };
    Carro.prototype.setValor = function (valor) {
        this.valor = valor;
    };
    return Carro;
}());
var carro = new Carro('vermelho', 2021, 60000);
carro.setValor(10000);
console.log(carro.getValor());
