function decorator(classPrototype: any, nome: string | symbol): any {
  let valorProperty: any;

  return {
    get: () => valorProperty,
    set: (valor: any) => {
      if (typeof valor === "string") {
        valorProperty = valor.split("").reverse().join("");
        return;
      }
      valorProperty = valor;
    },
  };
}
export class UmaPessoa {
  @decorator
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get NomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(" ");
  }
}

const pessoa = new UmaPessoa("Luiz", "otávio", 30);
const metodo = pessoa.metodo("Olá mundo");

console.log(metodo);
