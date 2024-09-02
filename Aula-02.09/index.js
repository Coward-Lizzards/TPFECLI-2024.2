const tentativas = 0

numAleatorio = Math.random()
const ganhou = 0

function checkNum(param1,param2){
    if param1 = param2{
        console.log("Você venceu") 
        ganhou ++  
    }else if param1 > param2{
        console.log("seu número foi mais alto")
    }else if param1 < param2{
        console.log("seu número foi menor")
    }
}

while (tentativas <= 5){
    const userGuess = prompt("insira um numero")
    console.log(checkNum(userGuess,numAleatorio))

}
