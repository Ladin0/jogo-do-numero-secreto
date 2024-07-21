//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'jogo do numero secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'tente adivinhar o numero secretro, adinhe o numero entre 1 e 10';
let listaDeNumeroSorteados = [];
let numeroLimite = 10
let numeroSecreto = numeroAleatorio();
let tentativas  = 1;

function exibirTextonatela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function menssagemInicial() {
    exibirTextonatela('h1', 'jogo do numero secreto'); 
    exibirTextonatela('p','adivinhe o numero entre 1 e 10');
}

menssagemInicial(); 





function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    console.log(numeroSecreto);

    if (chute == numeroSecreto) {
        exibirTextonatela('h1', 'acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let menssagemTentativas = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextonatela('p', menssagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextonatela('p', 'o numero secreto e menor');
        } else {
            exibirTextonatela('p', 'o numero secreto e maior');
        }
        //tentativas = tentativas + 1;
        tentativas++;
        limparCampo();

            
            
            
        
    }
}

function numeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementos = listaDeNumeroSorteados.length;
    if (quantidadeDeElementos == numeroLimite) {
        listaDeNumeroSorteados = [];
    }
    if (listaDeNumeroSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    } else {
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    menssagemInicial();
    document.getElementById('reiniciar').setAttribute('disable', true);

}


