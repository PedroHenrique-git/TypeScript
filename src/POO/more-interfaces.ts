interface Pessoa {
  nome: string;
  readonly idade?: number;
}

interface Pessoa {
  readonly sobreNome: string;
}

interface Pessoa {
  readonly enderecos: string[];
}

export const pessoa: Pessoa = {
  idade: 19,
  nome: "Pedro",
  sobreNome: "Henrique",
  enderecos: ["Brasil", "Argentina", "Itália"],
};

pessoa.enderecos.push("Argelia");
console.log(pessoa);
