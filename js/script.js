const listaPalavras = ["banana", "pera", "manga", "jabuticaba"];

let palavraEscolhida;
let exibicaoPalavra;
let letrasChutadas;

function iniciarJogo() {
    
    palavraEscolhida = listaPalavras[Math.floor(Math.random()*listaPalavras.length)];
    exibicaoPalavra = Array(palavraEscolhida.length).fill('_');

    letrasChutadas = [];

    atualizarExibicao();
}

function atualizarExibicao(){

    document.getElementById('exibicao-palavra').innerText = exibicaoPalavra.join(' ');
    document.getElementById('letras-chutadas').innerText = `${letrasChutadas.join(', ')}`;
    document.getElementById('mensagem').innerText = '';

    if(letrasChutadas.length === 4){

        document.getElementById('mensagem').innerText = `Você esgotou seu número de tentativas! A palavra certa era ${palavraEscolhida}!`;
        document.getElementById('entrada-letra').disabled = true;
        document.getElementById('btn-verificar').disabled = true;

    } else if (!exibicaoPalavra.includes('_')) {

        document.getElementById('mensagem').innerText = 'Parabéns! Você venceu!';
        document.getElementById('entrada-letra').disabled = true;
        document.getElementById('btn-verificar').disabled = true;
    
    }
    
}

function verificarLetra(){
    const entradaLetra = document.getElementById('entrada-letra');
    const letra = entradaLetra.value.toLowerCase();

    if(!letra.match(/[a-zà-ùç]/i)){
        alert('Por favor, insira uma letra válida!');
        return;
    }

    if (letrasChutadas.includes(letra)){
        alert('Você já tentou esta letra, tente outra!');
        return;
    }

    if (palavraEscolhida.includes(letra)){

        for (let i = 0; i < palavraEscolhida.length; i++){
            if(palavraEscolhida[i] === letra) {
                exibicaoPalavra[i] = letra;
            }
        }

    } else {
        letrasChutadas.push(letra);
    }

    entradaLetra.value = '';

    atualizarExibicao();
}

function reiniciarJogo(){

    window.location.reload();

}

window.load = iniciarJogo();