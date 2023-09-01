class Equipamento {
  private ligado: boolean;

  constructor() {
    this.ligado = false;
  }

  liga(): void {
    if (!this.estaLigado()) {
      this.ligado = true;
      console.log("Equipamento ligado.");
    } else {
      console.log("O equipamento já está ligado.");
    }
  }

  desliga(): void {
    if (this.estaLigado()) {
      this.ligado = false;
      console.log("Equipamento desligado.");
    } else {
      console.log("O equipamento já está desligado.");
    }
  }

  inverte(): void {
    if (this.estaLigado()) {
      this.desliga();
    } else {
      this.liga();
    }
  }

  estaLigado(): boolean {
    return this.ligado;
  }
}

const equipamento1 = new Equipamento();

console.log(equipamento1.estaLigado()); // Saída: false

equipamento1.liga(); // Saída: Equipamento ligado.
console.log(equipamento1.estaLigado()); // Saída: true

equipamento1.liga(); // Saída: O equipamento já está ligado.

equipamento1.inverte(); // Saída: Equipamento desligado.
console.log(equipamento1.estaLigado()); // Saída: false

equipamento1.desliga(); // Saída: O equipamento já está desligado.
