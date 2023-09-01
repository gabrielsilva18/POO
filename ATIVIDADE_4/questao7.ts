class Triangulo {
  a: number;
  b: number;
  c: number;

  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  formaTriangulo(): boolean {
    return Math.abs(this.b - this.c) < this.a && this.a < this.b + this.c;
  }

  ehIsosceles(): boolean {
    if (!this.formaTriangulo()) {
      return false;
    }
    return this.a === this.b || this.a === this.c || this.b === this.c;
  }

  ehEquilatero(): boolean {
    if (!this.formaTriangulo()) {
      return false;
    }
    return this.a === this.b && this.a === this.c;
  }

  ehEscaleno(): boolean {
    if (!this.formaTriangulo()) {
      return false;
    }
    return this.a !== this.b && this.a !== this.c && this.b !== this.c;
  }
}

const triangulo1 = new Triangulo(3, 4, 5);
console.log(triangulo1.ehIsosceles()); // Saída: false
console.log(triangulo1.ehEquilatero()); // Saída: false
console.log(triangulo1.ehEscaleno()); // Saída: true

const triangulo2 = new Triangulo(5, 5, 5);
console.log(triangulo2.ehIsosceles()); // Saída: true
console.log(triangulo2.ehEquilatero()); // Saída: true
console.log(triangulo2.ehEscaleno()); // Saída: false

const triangulo3 = new Triangulo(1, 2, 3);
console.log(triangulo3.ehIsosceles()); // Saída: false
console.log(triangulo3.ehEquilatero()); // Saída: false
console.log(triangulo3.ehEscaleno()); // Saída: false
