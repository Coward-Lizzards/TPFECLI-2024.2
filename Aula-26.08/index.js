let operator = "*"


function calc(num1,num2){
    let result
    switch (operator){
        case '+':
            result = num1 + num2
            break

        case '-':
            result = num1 - num2
            break
 
        case '*':
            result = num1 * num2
            break
        
        case '/':
            result = num1 / num2
            break

        default:
            console.log("invalido")
    }
    return result
}

console.log(calc(2,4))