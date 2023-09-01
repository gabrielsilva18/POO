//Crie uma função que recebe como parâmetro um número e retorna true se o
//número for par e false se for ímpar.

var numero = 10; // Adicionando tipo 'number'
var resultado = verifica_par_impar(numero); // Adicionando tipo 'boolean'
console.log(resultado);

function verifica_par_impar(num) {
  // Adicionando tipos de parâmetros e retorno
  return num % 2 === 0;
}
