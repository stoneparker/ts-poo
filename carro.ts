class Carro {
   private cor: string;
   private ano: number;
   private valor: number;

   constructor(cor: string, ano: number, valor: number) {
      this.cor = cor;
      this.ano = ano;
      this.valor = valor;
   }

   public getValor() {
      return this.valor;
   }

   public setValor(valor: number) {
      this.valor = valor;
   }
}

let carro = new Carro('vermelho', 2021, 60000);

carro.setValor(10000);
console.log(carro.getValor());