type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: "Documento 1",
  texto: "Este é o ducumento 1",
  data: new Date(),
};

console.log(documento.data?.toDateString() ?? "ixi, não existe data");
console.log(undefined ?? "ixi, não existe data");
console.log(null ?? "ixi, não existe data");
console.log(false ?? "ixi, não existe data");
console.log(0 ?? "ixi, não existe data");
console.log("" ?? "ixi, não existe data");
