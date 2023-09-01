function formatarArray(array: number[]): string {
  let resultado: string = ""; // Inicializa a string que armazenará o resultado formatado

  array.forEach((numero, indice) => {
    // numero e indice são parametros do foreach, que ja vem prontos para serem utilizados
    if (indice > 0) {
      resultado += "-"; // Adiciona um traço antes de cada número, exceto o primeiro
    }
    resultado += numero.toString(); // Converte o número para string e adiciona ao resultado
  });

  return resultado; // Retorna a string final formatada
}

const numeros: number[] = [10, 20, 30, 40, 50]; // Array de números de exemplo
const resultadoFormatado: string = formatarArray(numeros); // Chama a função com o array e obtém o resultado formatado
console.log(resultadoFormatado); // Saída: "10-20-30-40-50" - Imprime o resultado formatado no console
