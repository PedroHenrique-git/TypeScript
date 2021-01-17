export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtosInseridos: Produto[]): void {
    produtosInseridos.forEach((produto) => {
      this.produtos.push(produto);
    });
  }

  quantidade(): number {
    return this.produtos.length;
  }

  total(): number {
    const total: number = this.produtos.reduce((ac, produto) => {
      return ac + produto.preco;
    }, 0);

    return total;
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto("Camiseta", 49.9);
const produto2 = new Produto("Calça", 49.9);
const produto3 = new Produto("Carro", 49.9);
const produto4 = new Produto("Celular", 49.9);

const carrinho = new CarrinhoDeCompras();
carrinho.inserirProdutos(produto1, produto2, produto3, produto4);

console.log(produto1.nome);

console.log(carrinho);
console.log("Quantidade: ", carrinho.quantidade());
console.log("Preço: ", carrinho.total());
