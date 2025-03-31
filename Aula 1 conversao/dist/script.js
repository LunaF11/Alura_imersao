//uso da função, para ativar conversor
function conversor(){
//pede um valor ao usuario
let valordollar = prompt("Digite um valor em Dollar");
//converter a entrada para número
valordollar = parseFloat(valordollar)

//verificar se o usuário digitou um número válido
if (isNaN(valordollar)) {
  alert("Por favor, insira um número válido."); //Mensagem de erro inválido
} else {
  let umdollar = 5.70; //taxa de conversão 1 dollar equivalente a 5.70 BRL
  let resultado = valordollar * umdollar; //multiplicação para converter
      // Formata o número como moeda brasileira (ex: "R$ 57,00")
    let resultadoFormatado = resultado.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    // Exibe o resultado formatado
    alert("O seu resultado será: " + resultadoFormatado);
    console.log("Valor formatado:", resultadoFormatado);
}}