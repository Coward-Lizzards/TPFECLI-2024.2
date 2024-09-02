function randomNum(inicio,fim){
    return Math.random(inicio,fim)
}

function checkNum(param1,param2){
    if (param1 < param2){
        return "seu número foi menor"
    } else if (param1 > param2){
        return "seu número foi maior"
    } else{
        return "Venceu"
    }
}

let tentativas = 0
let userGuess = prompt("insira um numero")
let randomNumero = randomNum(0,1024)
let ganhou = checkNum(userGuess,randomNumero)


while (tentativas < 10 && ganhou === "Venceu"){
    tentativas ++
    
}
