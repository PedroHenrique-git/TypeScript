export class Calculadora {
  constructor(public numero: number) {}

  add(n: number): this {
    this.numero += n;
    return this;
  }

  sub(n: number): this {
    this.numero -= n;
    return this;
  }

  div(n: number): this {
    this.numero /= n;
    return this;
  }

  mul(n: number): this {
    this.numero *= n;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  pow(n: number): this {
    this.numero **= n;
    return this;
  }
}

const calc = new Calculadora(10);
const subCalc = new SubCalculadora(10);

console.log(calc.add(10));
console.log(calc.sub(5));
console.log(calc.div(3));
console.log(calc.mul(3));
console.log(subCalc.pow(5));

// Builder - GoF

export class RequestBuilder {
  private method: "get" | "post" | null = null;
  private url: string | null = null;

  setMethod(method: "get" | "post"): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const requestBuilder = new RequestBuilder();
requestBuilder.setUrl("http://localhost:8080").setMethod("post").send();
