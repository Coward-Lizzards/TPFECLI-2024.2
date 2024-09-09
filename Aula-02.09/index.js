function randomNum(inicio,fim){
    return Math.floor(Math.random() * (inicio-fim)) + inicio;
}

function checkNum(userGuess,randomNumero){
    if (userGuess < randomNumero){
        return "seu número foi menor"
    } else if (userGuess > randomNumero){
        return "seu número foi maior"
    } else{
        return "Venceu"
    }
}

let tentativas = 0

let randomNumero = randomNum(0,1024)
let ganhou = checkNum(userGuess,randomNumero)
const numCerto = randomNum(0,1024);


while (tentativasMax > 0) {
    let userGuess = parseInt(prompt("Adivinhe o número (entre 1 e 100):"));
    let result = checkGuess(userGuess, numCerto);

    console.log(result);

    if (result === "Parabéns! Você adivinhou o número!") {
        break;
    }

    tentativas += 1;
    if (tentativas === 10) {
        console.log("Você perdeu! O número era " + correctNumber);
    }
}
