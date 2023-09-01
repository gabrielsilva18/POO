/* rest parameter é denotado por três pontos consecutivos (...) seguidos de um nome de parâmetro.
O rest parameter permite que você trate uma quantidade variável de argumentos como um único array dentro da função
. Isso é especialmente útil quando você não sabe com antecedência quantos argumentos serão passados para a função.*/
function mostrar() {
    var letras = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        letras[_i] = arguments[_i];
    }
    var resultado = "";
    letras.forEach(function (letra) {
        resultado += letra;
    });
    return resultado;
}
console.log(mostrar("a", "b", "c", "d")); // Saída: "abcd"
