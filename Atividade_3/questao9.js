var numeros_array = [1, 2, 3, 4, 5];
// Usando map() para dobrar os elementos
var dobrados = numeros_array.map(function (numero) { return numero * 2; });
console.log(dobrados); // Saída: [2, 4, 6, 8, 10]
// Usando reduce() para totalizar a soma dos elementos
var somaTotal = numeros_array.reduce(function (acumulador, numero) { return acumulador + numero; }, 0); //0 ois o acumulador deve começar em 0
console.log(somaTotal); // Saída: 15
