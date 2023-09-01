//Crie uma função que recebe como parâmetro um número e retorna true se o
//número for par e false se for ímpar.

const numero: number = 10; // Adicionando tipo 'number'
const resultado: boolean = verifica_par_impar(numero); // Adicionando tipo 'boolean'
console.log(resultado);

function verifica_par_impar(num: number): boolean {
  // Adicionando tipos de parâmetros e retorno
  return num % 2 === 0;
}
