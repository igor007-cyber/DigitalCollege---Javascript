 
 const botao = document.getElementById('butao');
// const paragrafo = document.getElementById('mudar');

// botao.addEventListener('click', () => {
//     paragrafo.textContent = 'O texto foi alterado!';
// });

console.log('Script carregado com sucesso!');

const titulo = document.getElementById('titulo')
console.log(titulo.innerText);

function mudarTexto() {
    titulo.innerText = 'Texto alterado pelo JavaScript!';
}

botao.addEventListener('click', mudarTexto);