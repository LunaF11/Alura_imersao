function jogar(){
rodada = 1
while(rodada <= 3){ //while é uma estrutura de repetição(loop)
    console.log("Rodada: " + rodada) //exibe o valor atual da rodada


    escolhajogador = parseInt(prompt("Nivel: "  + rodada + " Escolha um vidro de (1,2 ou 3) ?"))
    pisoquebrado = Math.floor(Math.random()*3) + 1; // o número será aleatório
  
  if(escolhajogador === 1 || escolhajogador === 2 || escolhajogador === 3)
    //se a escolha for válida, verifica se o jogador quebrou o vidro


if(escolhajogador == pisoquebrado){
    //escolheu o vidro que estava quebrado
    alert("VIDRO QUEBROU ! O JOGO ACABOU")
    rodada = 1000;} //força a saída do loop
  
else{
    alert("O PISO QUEBRADO ESTAVA NA PONTE: " + pisoquebrado)
}
else{
    alert("ESCOLHA INVÁLIDA ! DIGITE APENAS 1, 2 OU 3,");
    continue; //continua para a próxima iteração do loop
}

    rodada = rodada + 1 //incrementa "Rodada" em 1 a cada repetição

}

if(rodada == 4){
    alert("VOCÊ VENCEU ! PARABÉNS !!!")
}}