export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

console.log(isNumber("pedro"));
console.log(isNumber(123));

export function soma<T>(...args: T[]): number | null {
  const retorno = args.reduce((ac, val) => {
    if (isNumber(ac) && isNumber(val)) {
      return (ac += val);
    }
    return ac;
  }, 0);

  return retorno;
}

console.log(soma(...[1, 2, 3, "a", "b", "c", 1]));
