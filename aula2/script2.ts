function CalculoIMC(peso: number, altura: number): number {

    let imc = peso / (altura * altura)

    return parseFloat(imc.toFixed(2))
}

// console.log(CalculoIMC(83, 1.76))

const resultadoIMCA = CalculoIMC(83, 1.76)

function mostrarResultadoIMCA(): string | undefined {
    if (resultadoIMCA < 18.5) {
        return(`Seu IMC é ${resultadoIMCA} e você está abaixo do peso.`) 
    } else if (resultadoIMCA >= 18.5 && resultadoIMCA < 24.9) {
        return(`Seu IMC é ${resultadoIMCA} e você está com o peso normal.`)
    } else if (resultadoIMCA >= 25 && resultadoIMCA < 29.9) {
        return(`Seu IMC é ${resultadoIMCA} e você está com sobrepeso.`)
    } else if (resultadoIMCA >= 30 && resultadoIMCA < 34.9) {
        return  (`Seu IMC é ${resultadoIMCA} e você está com obesidade grau 1.`)
    }
}
