export default class Pessoa {
   nome: string;
   idade: number;

   constructor(nome: string, idade: number) {
      this.nome = nome;
      this.idade = idade;
   }
}

let p1 = new Pessoa('Vitória', 17);

console.log(`Nome: ${p1.nome}, Idade: ${p1.idade}`);