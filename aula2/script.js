const peso = document.getElementById('peso').value
const altura = document.getElementById('altura').value
const botao = document.getElementById('botao')
const resultado = document.getElementById('imc-resultado')
const classificacao = document.getElementById('imc-classificacao')


function CalculoIMC(peso, altura) {

    let imc = peso / (altura * altura)

    return imc.toFixed(2)
}

// console.log(CalculoIMC(83, 1.76))

const resultadoIMC = CalculoIMC(83, 1.76)

function mostrarResultadoIMC() {  
    if (resultadoIMC < 18.5) {
        return(`Seu IMC é ${resultadoIMC } e você está abaixo do peso.`)
    } else if (resultadoIMC >= 18.5 && resultadoIMC < 24.9) {
        return(`Seu IMC é ${resultadoIMC} e você está com o peso normal.`)
    } else if (resultadoIMC >= 25 && resultadoIMC < 29.9) {
        return(`Seu IMC é ${resultadoIMC} e você está com sobrepeso.`)
    } else if (resultadoIMC >= 30 && resultadoIMC < 34.9) {
        return  (`Seu IMC é ${resultadoIMC} e você está com obesidade grau 1.`)
    }
}
