class Jogador {
  forca: number;
  nivel: number;
  pontos: number;

  constructor(forca: number, nivel: number, pontos: number) {
    this.forca = forca;
    this.nivel = nivel;
    this.pontos = pontos;
  }

  calcularAtaque(): number {
    return this.forca * this.nivel;
  }

  atacar(atacado: Jogador): void {
    if (atacado.estaVivo()) {
      const dano = this.calcularAtaque();
      atacado.pontos -= dano;
      console.log(`Ataque bem-sucedido! Dano causado: ${dano}`);
    } else {
      console.log("O jogador atacado não está mais vivo.");
    }
  }

  estaVivo(): boolean {
    return this.pontos > 0;
  }

  toString(): string {
    return `Jogador (Força: ${this.forca}, Nível: ${this.nivel}, Pontos: ${this.pontos})`;
  }
}

// Teste com dois jogadores
const jogador1 = new Jogador(10, 5, 100);
const jogador2 = new Jogador(8, 4, 120);

console.log(jogador1.toString()); // Saída: Jogador (Força: 10, Nível: 5, Pontos: 100)
console.log(jogador2.toString()); // Saída: Jogador (Força: 8, Nível: 4, Pontos: 120)

jogador1.atacar(jogador2); // Saída: Ataque bem-sucedido! Dano causado: 50
jogador2.atacar(jogador1); // Saída: Ataque bem-sucedido! Dano causado: 40

console.log(jogador1.toString()); // Saída: Jogador (Força: 10, Nível: 5, Pontos: 60)
console.log(jogador2.toString()); // Saída: Jogador (Força: 8, Nível: 4, Pontos: 70)

if (jogador1.estaVivo() && jogador2.estaVivo()) {
  if (jogador1.pontos > jogador2.pontos) {
    console.log("Jogador 1 tem mais pontos.");
  } else if (jogador2.pontos > jogador1.pontos) {
    console.log("Jogador 2 tem mais pontos.");
  } else {
    console.log("Ambos os jogadores têm a mesma quantidade de pontos.");
  }
}
