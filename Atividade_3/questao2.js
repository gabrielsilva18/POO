var numeero2 = 10; // Adicionando tipo 'number'
var resultado2 = eh_primo(numero); // Adicionando tipo 'boolean'
console.log(resultado);
function eh_primo(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
