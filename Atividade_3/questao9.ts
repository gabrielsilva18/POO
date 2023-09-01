const numeros_array: number[] = [1, 2, 3, 4, 5];

// Usando map() para dobrar os elementos
const dobrados: number[] = numeros_array.map((numero) => numero * 2);

console.log(dobrados); // Saída: [2, 4, 6, 8, 10]

// Usando reduce() para totalizar a soma dos elementos
const somaTotal: number = numeros_array.reduce(
  (acumulador, numero) => acumulador + numero,
  0
); //0 ois o acumulador deve começar em 0

console.log(somaTotal); // Saída: 15
