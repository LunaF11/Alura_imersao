function jogar(){
  let idade =parseInt(prompt("Quantos anos você tem ?")) //variavél onde iremos guardar o prompt
  if(idade < 18){                //utilizamos o if para sabermos se o jogador poderá ou não jogar
    alert("Você não pode jogar JOKENPO") //mensagem de alerta, caso seja permitido -18 e possa jogar
    return;  //sai da função para impedir a continuação do jogo
  }
  // linha ignorada: alert("Vamos começar a jogar !")
  let escolhajogador = parseInt(prompt("1: PEDRA, 2: PAPEL OU 3: TESOURA ?")); // prompt para que seja selecionada uma opção
  let escolhacomputador = Math.floor(Math.random() * 3) + 1; // escolha aleatória do computador
  
  alert("A escolha do Computador foi:" + escolhacomputador) //escolha do computador
  
  //jogador pedra, computador pedra === EMPATE !
  //jogador tesoura, computador tesoura === EMPATE !
  //jogador papel, computador papel === EMPATE !
  
  if(escolhajogador == escolhacomputador){
    alert("EMPATE!")
  } /// o "=" é utilizado para atribuir um valor a primeira variavél
  
  //jogador pedra, computador tesoura === JOGADOR VENCE
  //jogador pedra, computador papel === COMPUTADOR VENCE
  
  //jogador tesoura, computador pedra === COMPUTADOR VENCE
  //jogador tesoura, computador papel === JOGADOR VENCE
  
  //jogador papel, computador pedra === COMPUTADOR VENCE
  //jogador papel, computador tesoura === COMPUTADOR VENCE
  
  
  alert("A escolha do Computador foi:" + escolhacomputador)
  
  //Lógica do jogo
  if(escolhajogador === escolhacomputador){
    alert("EMPATE!");
  } else if ((escolhajogador === 1 && escolhacomputador === 3) || 
  (escolhajogador === 2 && escolhacomputador === 1) || 
  (escolhajogador === 3 && escolhacomputador === 2)) {
    alert("VOCÊ VENCEU !");
  } else{
    alert("COMPUTADOR VENCEU !");
  }
  }