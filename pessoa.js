"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    return Pessoa;
}());
exports.default = Pessoa;
var p1 = new Pessoa('Vitória', 17);
console.log("Nome: " + p1.nome + ", Idade: " + p1.idade);
