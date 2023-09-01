class Hotel {
  quantReservas: number;

  constructor(quantidadeInicial: number) {
    // inicialização
    this.quantReservas = quantidadeInicial;
  }

  adicionarReserva(): void {
    this.quantReservas++;
  }
}

let hotel: Hotel = new Hotel(2);
console.log(hotel.quantReservas);
