export class Pessoa {
  public readonly nome: string;
  public readonly sobrenome: string;
  protected idade: number;
  protected cpf: string;

  constructor(nome: string, sobrenome: string, idade: number, cpf: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.cpf = cpf;
  }

  public getIdade(): number {
    return this.idade;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public readonly matricula: string,
  ) {
    super(nome, sobrenome, idade, cpf);
    this.matricula = matricula;
  }
  public nomeCompleto(): string {
    return (
      `${this.nome} ${this.sobrenome} ${this.matricula}` +
      " " +
      super.nomeCompleto()
    );
  }
}

const aluno = new Aluno("Pedro", "Henrique", 19, "000.000.000-11", "1990TING");
console.log(aluno.nomeCompleto());
console.log(aluno);
