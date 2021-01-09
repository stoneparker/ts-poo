export default class Animal {
   tipo: string;
   nome: string;
   idade: number;

   constructor(tipo: string, nome: string, idade: number) {
      this.tipo = tipo;
      this.nome = nome;
      this.idade = idade;
   }

   public comunicar(): void {
      console.log('Método da classe mãe');
   }
}

class Cachorro extends Animal {
   raça: string;

   constructor(tipo: string, nome: string, idade: number, raça: string) {
      super(tipo, nome, idade);
      this.raça = raça;
   }  

   public comunicar(): void {
      console.log('Auau');
   }
}

class Pessoa extends Animal {
   etnia: string;

   constructor(tipo: string, nome: string, idade: number, etnia: string) {
      super(tipo, nome, idade);
      this.etnia = etnia;
   }

   public comunicar(): void {
      console.log('Bom dia');
   }
}

let cachorro = new Cachorro('cachorro', 'Quatro', 4, 'pug');
cachorro.comunicar();

let pessoa = new Pessoa('humano', 'Vitor', 17, 'pardo');
pessoa.comunicar();