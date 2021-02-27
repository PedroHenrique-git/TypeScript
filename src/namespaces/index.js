// eslint-disable-next-line @typescript-eslint/no-namespace
var MeuNamespace;
(function (MeuNamespace) {
  console.log(111111);
  MeuNamespace.nome = "Luiz";
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  var PessoaDoNamespace = /** @class */ (function () {
    function PessoaDoNamespace(name, idade) {
      this.name = name;
      this.idade = idade;
    }
    return PessoaDoNamespace;
  })();
  MeuNamespace.PessoaDoNamespace = PessoaDoNamespace;
  var pessoa = new PessoaDoNamespace("Pedro", 19);
  console.log(pessoa);
})(MeuNamespace || (MeuNamespace = {}));
var p3 = new MeuNamespace.PessoaDoNamespace("Luiz", 25);
console.log(p3);
console.log(MeuNamespace.nome);
