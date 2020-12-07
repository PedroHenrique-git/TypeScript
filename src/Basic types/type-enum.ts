enum Cores {
  VERMELHO,
  AZUL,
  AMARELO,
  ROXO = "ROXO",
}

enum Cores {
  PRETO = 0,
  BRANCO,
  RED,
  YELLOW = "ROXO",
}

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.PRETO);
console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores.AZUL);
console.log(Cores.AMARELO);
console.log(Cores[0]);
console.log(Cores[1]);
console.log(Cores[2]);
console.log(Cores["ROXO"]);
