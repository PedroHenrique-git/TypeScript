export class Escritor {
  private _ferramenta: Ferramenta | null = null;
  constructor(private _nome: string) {}

  set nome(nome: string) {
    this._nome = nome;
  }

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta) {
    this._ferramenta = ferramenta;
  }

  escrever(): void {
    if (this._ferramenta) {
      console.log(`Escrevendo com uma ${this._ferramenta.nome}`);
    }
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}

  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando`);
  }
}

const escritor = new Escritor("luiz");
const caneta = new Caneta("Bic");
const maquinaEscrever = new MaquinaEscrever("Maquina escrever");

console.log(escritor.nome);
escritor.ferramenta = caneta;
escritor.escrever();

console.log(caneta.nome);
console.log(maquinaEscrever.nome);
