"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(tipo, nome, idade) {
        this.tipo = tipo;
        this.nome = nome;
        this.idade = idade;
    }
    Animal.prototype.comunicar = function () {
        console.log('Método da classe mãe');
    };
    return Animal;
}());
exports.default = Animal;
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(tipo, nome, idade, raça) {
        var _this = _super.call(this, tipo, nome, idade) || this;
        _this.raça = raça;
        return _this;
    }
    Cachorro.prototype.comunicar = function () {
        console.log('Auau');
    };
    return Cachorro;
}(Animal));
var Pessoa = /** @class */ (function (_super) {
    __extends(Pessoa, _super);
    function Pessoa(tipo, nome, idade, etnia) {
        var _this = _super.call(this, tipo, nome, idade) || this;
        _this.etnia = etnia;
        return _this;
    }
    Pessoa.prototype.comunicar = function () {
        console.log('Bom dia');
    };
    return Pessoa;
}(Animal));
var cachorro = new Cachorro('cachorro', 'Quatro', 4, 'pug');
cachorro.comunicar();
var pessoa = new Pessoa('humano', 'Vitor', 17, 'pardo');
pessoa.comunicar();
