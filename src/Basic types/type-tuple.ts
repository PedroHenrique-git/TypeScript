const dadosCliente: readonly [number, string?] = [1, "Luiz"];
const dadosCliente2: [number, string?, string?] = [1, "Luiz"];
const dadosCliente3: [number, string?, string?, ...string[]] = [
  1,
  "Luiz",
  "Mirando",
  "Pedro",
  "Joao",
];

console.log(dadosCliente);
console.log(dadosCliente2);
console.log(dadosCliente3);

const array1: readonly string[] = ["Luiz", "otavio"];
const array2: ReadonlyArray<string> = ["Luiz", "otavio"];

console.log(array1, array2);
