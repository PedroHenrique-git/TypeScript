// eslint-disable-next-line @typescript-eslint/no-namespace
namespace MeuNamespace {
  console.log(111111);
  export const nome = "Luiz";

  for (let i = 0; i < 10; i++) {
    console.log(i);
  }

  export class PessoaDoNamespace {
    constructor(public name: string, public idade: number) {}
  }

  const pessoa = new PessoaDoNamespace("Pedro", 19);
  console.log(pessoa);
}

const p3 = new MeuNamespace.PessoaDoNamespace("Luiz", 25);
console.log(p3);
console.log(MeuNamespace.nome);
