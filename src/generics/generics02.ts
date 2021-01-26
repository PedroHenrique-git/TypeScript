type meuTipo = number | 10;

const arrayNumeros: Array<meuTipo> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayNumeros);

async function promiseAsync() {
  return 1;
}

function minhaPromise(): Promise<meuTipo> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((resp) => console.log(resp + 1));
minhaPromise().then((resp) => console.log(resp + 1));
