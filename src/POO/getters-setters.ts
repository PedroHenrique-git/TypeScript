export class Pessoa {
  private name: string;
  private surname: string;
  private tels: string[] = [];

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  set Name(name: string) {
    console.log("SETTER CHAMADO");
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

const pessoa = new Pessoa("pedro", "henrique");
console.log(pessoa.Name);
