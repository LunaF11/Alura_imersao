//preciso criar uma lista com 3 jogadores
personagem = ["","",""]

viloes = ["","",""]

forcapersonagem = 0 
forcaviloes = 0

alert("O array Personagem contém: " + personagem)

for(let i=0; i<3; i++){
    escolhapersonagem = prompt("Digite o nome do seu personagem" + (i + 1))
    personagem[i] = escolhapersonagem
//Calcular a força de cada jogador, e depois somar pra saber a força do time

forcapersonagem =forcapersonagem + Math.floor(Math.random()* 10) + 1
forcapersonagem += Math.floor(Math.random()* 10) + 1 //maneira mais avançada de fazer a mesma coisa

}
console.log("Agora, o Array Perosonagem contém: " + personagem)

console.log("Inicio Violoes:" + viloes)
for(let i=0; i<3; i++){
    indicealeatorio = Math.floor(Math.random() *7)
    viloespossiveis = ["Coringa", "Bluezao","alek","NaldoCanal","Bibi perigosa","Lula","Bolsonaro"]
    viloes[i] = viloespossiveis[indicealeatorio]
    forcaviloes = forcaviloes + Math.floor(Math.random()* 10) + 1
    //calcular a força de cada jogador do time do computador
}
console.log("Final Viloes: " + viloes)

//comparar os dois times para saber quem venceu

if(forcapersonagem > forcaviloes){
    alert("VOCÊ VENCEU, SEU TIME É MUITO FORTE, SUA FORÇA FOI:" + forcapersonagem)
}
else{
    if(forcapersonagem < forcaviloes){
        alert("VOCÊ PERDEU, O COMPUTADOR VENCEU, A FORÇA DO COMPUTADOR FOI:")
    }
    else{
        alert("OS DOIS TIME TEM A MESMA FORÇA ! HOUVE UM EMPATE")
    }
}