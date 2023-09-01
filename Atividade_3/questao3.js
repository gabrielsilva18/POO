var nome = "Gabriel";
var pronome = "Sr";
saudacao(nome, pronome);
function saudacao(Nome, Pronome) {
  if (Pronome === void 0) {
    Pronome = "Sr";
  }
  //uso o Void quando a função não for returnar nenhum valor!
  console.log("".concat(pronome, ". ").concat(nome));
}
