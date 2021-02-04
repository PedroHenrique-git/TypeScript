function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
  console.log("Sou o decorator e recebi", target);
  return class extends target {
    private cor: string;
    private nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.reverseString(args[0]);
      this.cor = this.reverseString(args[1]);
    }

    reverseString(stringReceived: string): string {
      return stringReceived.split("").reverse().join("");
    }
  };
}

@inverteNomeECor
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log("Sou a classe");
  }
}

const animal = new Animal("pedro", "yellow");
console.log(animal);

/*
const AnimalDecorated = decorator(Animal);
console.log(AnimalDecorated);
*/
