/* eslint-disable */
// Tipos básicos
let nome:string = "Luiz";
let idade:number = 30;
let adulto:boolean = true;
let simbolo:symbol = Symbol('Qualquer symbol');
//let big: bigint = 10n;

// Arrays
let arrayDeNumeros: Array<Number> = [];
let arrayDeStrings: string[] = ['a','b','c'];

// objetos
let pessoa: {nome:string, idade:number,adulto?:boolean} = {nome: 'Pedro', idade: 10, adulto};

// funções

function soma(x: number,y: number): number {
  return x + y;
}
const result = soma(2,2);
console.log(result);

const soma2: (x: number,y: number) => number = function(x: number,y: number){
  return x + y;
}
