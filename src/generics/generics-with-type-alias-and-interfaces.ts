interface PessoaProtocolo<T, U> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type ProtocolPerson<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const pessoa1: PessoaProtocolo<string, number> = {
  nome: "Pedro",
  sobrenome: "Henrique",
  idade: 10,
};

const pessoa2: ProtocolPerson = {
  nome: "Pedro",
  sobrenome: "Henrique",
  idade: 60,
};

console.log(pessoa1, pessoa2);
