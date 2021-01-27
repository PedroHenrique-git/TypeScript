export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

const pessoa1 = new Pessoa<string, number>("Pedro", 20);
const pessoa2 = new Pessoa("Luiz", 30);
const pessoa3 = new Pessoa(["Luiz"], 30);

console.log(pessoa1, pessoa2, pessoa3);

export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador += 1;
  }

  estaVazia(): boolean {
    return this.contador === 0;
  }

  pop(): T | null {
    if (!this.estaVazia()) {
      this.contador -= 1;
      const elemento = this.elementos[this.contador];
      delete this.elementos[this.contador];
      return elemento;
    }
    return null;
  }

  tamanho(): number {
    return this.contador;
  }

  mostrarPilha(): void {
    for (const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }
}

const pilha = new Pilha();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.mostrarPilha();
const elemento1 = pilha.pop();
console.log(elemento1);

while (!pilha.estaVazia()) {
  console.log(pilha.pop());
}
