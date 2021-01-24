export function add(a: unknown, b: unknown): string | number {
  // type guard
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return `${a} ${b}`;
  }
}

console.log(add(1, 10));
console.log(add("a", "b"));

type Pessoa = { tipo: "pessoa"; nome: string };
type Animal = { tipo: "animal"; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: "pessoa" = "pessoa";
  constructor(public nome: string) {}
}

function mostraNome(objeto: PessoaOuAnimal): void {
  // if('nome' in objeto) console.log(objeto.nome);
  //if (objeto instanceof Aluno) {
  //console.log(objeto.nome);
  //}
  switch (objeto.tipo) {
    case "pessoa":
      console.log(objeto.nome);
      break;
    case "animal":
      console.log(objeto.cor);
      break;
    default:
      console.log(objeto);
      break;
  }
}
const pessoa = new Aluno("Pedro");
mostraNome(pessoa);
mostraNome({ tipo: "animal", cor: "Rosa" });
