type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

type AB = "A" | "B";
type AC = "A" | "C";
type Intersecao = AB & AC;

export const pessoa: Pessoa = {
  nome: "Pedro",
  sobrenome: "Henrique",
  idade: 20,
};

console.log(pessoa);
