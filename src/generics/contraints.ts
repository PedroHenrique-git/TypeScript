interface obterChaveFn {
  <T, U extends keyof T>(obejto: T, key: U): T[U];
}

type ObterChave = <T, U extends keyof T>(obejto: T, key: U) => T[U];

const obterChave: obterChaveFn = (objeto, chave) => objeto[chave];

const obterChave2: ObterChave = (objeto, chave) => objeto[chave];

const animal = {
  idade: 20,
  nome: "Cachorro",
  vacinas: ["vacina 1", "vacia 2"],
};

console.log(obterChave(animal, "idade"));
console.log(obterChave2(animal, "vacinas"));
