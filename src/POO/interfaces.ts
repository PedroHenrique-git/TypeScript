type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
};

type Numero = number | string;

interface TipoNome {
  nome: string;
}

type TipoPessoa2 = TipoPessoa;

const pessoaObj: TipoNome = {
  nome: "Pedro",
};

export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}
  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa("Luiz", "Miranda");
console.log(pessoa.nomeCompleto());
console.log(pessoaObj);
