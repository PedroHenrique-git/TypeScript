const y = 10;
// eslint-disable-next-line prefer-const
let a = 100 as const;

const person = {
  name: "Luiz" as const,
  lastName: "Miranda",
};

function escolhaCor(cor: "Vermelho" | "Amarelo" | "Azul") {
  return cor;
}
console.log(escolhaCor(""));

export const x = 10;
