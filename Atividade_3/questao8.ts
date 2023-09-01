const array_numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = array_numeros.filter((numero) => numero % 2 === 0);

console.log(numerosPares); // Saída: [2, 4, 6, 8, 10]
