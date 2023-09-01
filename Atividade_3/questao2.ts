const numeero2: number = 10; // Adicionando tipo 'number'
const resultado2: boolean = eh_primo(numero); // Adicionando tipo 'boolean'
console.log(resultado);

function eh_primo(num: number): boolean {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
