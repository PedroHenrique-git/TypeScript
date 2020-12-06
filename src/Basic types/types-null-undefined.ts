let x;
if (typeof x === "undefined") x = 20;
console.log(x * 2);

export function createPerson(
  firstname: string,
  lastname?: string,
): { firstname: string; lastname?: string } {
  return { firstname, lastname };
}

export function squareOf(x: any) {
  if (typeof x === "number") return x * x;
  return null;
}

console.log(createPerson("Pedro", "Henrique"));
console.log(squareOf(2));
if (squareOf("") === null) {
  console.log("Conta invalida");
}
