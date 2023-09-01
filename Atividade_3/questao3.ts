const nome: string = "Gabriel";
const pronome: string = "Sr";
saudacao(nome, pronome);

function saudacao(Nome: string, Pronome: string = "Sr"): void {
  //uso o Void quando a função não for returnar nenhum valor!
  console.log(`${pronome}. ${nome}`);
}
