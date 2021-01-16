export class Pessoa {
  static valor = "Pessoa";
  constructor(
    public readonly nome: string,
    public readonly sobreNome: string,
    public readonly idade: number,
    public readonly cpf: string,
  ) {}

  static falaoi(): void {
    console.log("oi");
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, 0, "111.111.111-11");
  }
}

const pessoa = new Pessoa("Pedro", "Henrique", 19, "000.000.000-11");
console.log(pessoa);
console.log(Pessoa.valor);
Pessoa.falaoi();
const pessoa2 = Pessoa.criaPessoa("Luiz", "Macedo");
console.log(pessoa2);
