type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};
type CorRGB = "Vermelho" | "Verde" | "Azul";
type CorCMYK = "Ciano" | "Magenta" | "Amarelo" | "Preto";
type CorPreferida = CorRGB | CorCMYK;

export const idade: Idade = 10;
const pessoa: Pessoa = {
  nome: "Pedro",
  idade: 10,
  salario: 1000.0,
};

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida) {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, "Verde"));
