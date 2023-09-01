class saudacao {
  texto: string;
  destinatario: string;

  constructor(texto: string, destinatario: string) {
    this.texto = texto;
    this.destinatario = destinatario;
  }

  obtersaudacao(): string {
    return `${this.texto}, ${this.destinatario}`;
  }
}

const saudacao1 = new saudacao("Boa tarde!", "Gabriel");

console.log(saudacao1.obtersaudacao());
