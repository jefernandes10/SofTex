function calculadora(){

    let numero1 = Number(prompt("Digite o número 1:"))
    let numero2 = Number(prompt("Digite o número 2:"))
    let operador = prompt("Digite o operador(+,-,*, /): ")

    try {
        if((numero1 && numero2) != Number) throw "Você não digitou um número!"
        if(operador != '+' && operador != '-' && operador != '*' && operador != '/') throw "Operador invalido"
    } catch (error) {
        alert(error)
        calculadora()
    }

    if(operador == '+'){
        let result = numero1 + numero2
        return result
    } else if(operador == '-'){
        let result = numero1 - numero2
        return result
    } else if(operador == '*'){
        let result = numero1 * numero2
        return result
    } else if(operador == '/'){
        let resultDiv = numero1 / numero2
        let resultdoResto = numero1 % numero2
        
        if(resultdoResto != 0){
            return `O resultado é: ${resultDiv} O resto é: ${resultdoResto}`
            //Poderiamos utilizar: return 'O resultado é: ' + resultDiv + ' O resto é: ' + resultdoResto
        }else{
            return `O resultado é: ${resultDiv}`
        } 
 
    }
}

calculadora()