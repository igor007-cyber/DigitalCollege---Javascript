// const titulo1 = document.getElementById("titulo1");
// const botao1 = titulo1.nextElementSibling;

// function mudarTexto1() {
//     titulo1.innerText = "Texto alterado pelo JavaScript!";
// }

// botao1.addEventListener("click", mudarTexto1);

// const titulo2 = document.getElementById("titulo2");
// const botao2 = document.getElementById("mudarCor");

// function mudarCorTitulo() {
//     titulo2.style.color = titulo2.style.color === "red" ? "black" : "red";
// }

// botao2.addEventListener("click", mudarCorTitulo);

// const botaoFundo = document.getElementById("mudarFundo");

// function mudarFundo() {
//     document.body.style.backgroundColor = document.body.style.backgroundColor === "black" ? "white" : "black";
// }

// botaoFundo.addEventListener("click", mudarFundo);

// const paragrafo4 = document.getElementById("paragrafo4");
// const botaoTrocar = document.getElementById("trocarTexto");

// function trocarTextoParagrafo() {
//     paragrafo4.innerText = "O texto do parágrafo foi alterado!";
// }

// botaoTrocar.addEventListener("click", trocarTextoParagrafo);

// const elemento5 = document.getElementById("elemento5");
// const botaoEsconder = document.getElementById("esconder");
// const botaoMostrar = document.getElementById("mostrar");

// function esconderElemento() {
//     elemento5.style.display = "none";
// }

// function mostrarElemento() {
//     elemento5.style.display = "block";
// }

// botaoEsconder.addEventListener("click", esconderElemento);
// botaoMostrar.addEventListener("click", mostrarElemento);

// const texto6 = document.getElementById("texto6");
// const botaoAumentar = document.getElementById("aumentar");
// const botaoDiminuir = document.getElementById("diminuir");

// function aumentarTexto() {
//     let tamanhoAtual = parseInt(window.getComputedStyle(texto6).fontSize);
//     texto6.style.fontSize = (tamanhoAtual + 2) + "px";
// }

// function diminuirTexto() {
//     let tamanhoAtual = parseInt(window.getComputedStyle(texto6).fontSize);
//     texto6.style.fontSize = (tamanhoAtual - 2) + "px";
// }

// botaoAumentar.addEventListener("click", aumentarTexto);
// botaoDiminuir.addEventListener("click", diminuirTexto);

// console.log('Script carregado com sucesso!');

let titulo1 = document.querySelector('#titulo1').innerHTML;

function mudarTexto() {
    titulo1 = 'Texto alterado pelo JavaScript!';
}