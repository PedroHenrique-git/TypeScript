// Array<T> - T[]
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => {
    return ac * valor;
  }, 1);
}

export function concatenaStrigns(...args: string[]): string {
  return args.reduce((ac, valor) => ac + " " + valor, "");
}

export function upperStrigns(...args: string[]): string[] {
  return args.map((string) => string.toUpperCase());
}

console.log(multiplicaArgs(1, 2, 3));
console.log(concatenaStrigns("Pedro", "henrique", "Da", "Silva"));
console.log(upperStrigns("a", "b", "c"));
