const ObjetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: "Valor A",
  chaveB: "Valor B",
};

ObjetoA.chaveB = "Outro valor B";
ObjetoA.chaveC = "Outro valor C";
ObjetoA.chaveD = "Outro valor D";

console.log(ObjetoA);
