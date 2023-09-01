var array_numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numerosPares = array_numeros.filter(function (numero) { return numero % 2 === 0; });
console.log(numerosPares); // Saída: [2, 4, 6, 8, 10]
