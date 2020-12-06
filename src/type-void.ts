function semRetorno(...args: string[]): void {
  console.log(args.join(" "));
}

const pessoa: { nome: string; sobrenome: string; exibirNome(): void } = {
  nome: "Luiz",
  sobrenome: "Henrique",

  exibirNome(): void {
    console.log(this.nome + " " + this.sobrenome);
  },
};

semRetorno("Pedro", "Henrique");
pessoa.exibirNome();

export { pessoa };
