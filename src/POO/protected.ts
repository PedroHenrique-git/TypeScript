export class Pessoa {
  private name: string;
  private surname: string;
  private tels: string[] = [];

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  set Name(name: string) {
    this.name = name;
  }

  get Name(): string {
    return this.name;
  }

  set SurName(surname: string) {
    this.surname = surname;
  }

  get SurName(): string {
    return this.surname;
  }

  SetTel(tel: string) {
    this.tels.push(tel);
  }

  completName(): string {
    return `${this.name} ${this.surname}`;
  }
}

const pessoa: Pessoa = new Pessoa("Pedro", "Henrique");
pessoa.Name = "Luiz";
pessoa.SurName = "Macedo";

pessoa.SetTel("123123123123");
pessoa.SetTel("123123123123");
pessoa.SetTel("123123123123");
pessoa.SetTel("123123123123");

console.log(pessoa);
console.log("--------------");

export class Empresa {
  public readonly name: string;
  public readonly cnpj: string;
  protected readonly coloboradores: Coloborador[] = [];

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  setColaborador(...colaboradores: Coloborador[]): void {
    colaboradores.forEach((colaborador) => {
      this.coloboradores.push(colaborador);
    });
  }

  showEmployers(): void {
    this.coloboradores.forEach((colaborador, index) => {
      console.log(`${index + 1} - ${colaborador.name} ${colaborador.surname}`);
    });
  }
}

export class Coloborador {
  constructor(public readonly name: string, public readonly surname: string) {}
}

export class Udemy extends Empresa {
  constructor() {
    super("Udemy", "111.111.111/0001-11");
  }
  popColaborador(): Coloborador | null {
    const colaborador = this.coloboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

const empresa = new Udemy();
const coloborador1 = new Coloborador("Pedro", "Henrique");
const coloborador2 = new Coloborador("luiz", "Henrique");
const coloborador3 = new Coloborador("Paulo", "Henrique");
const coloborador4 = new Coloborador("Geraldo", "Henrique");
empresa.setColaborador(coloborador1, coloborador2, coloborador3, coloborador4);
empresa.showEmployers();
const colaboradorRemovido = empresa.popColaborador();
console.log(colaboradorRemovido);
//console.log(empresa);
