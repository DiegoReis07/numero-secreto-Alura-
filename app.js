let listaDeNumeros = [];
let limiteDaLista = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let contador = 1;

console.log(numeroAleatorio);

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Digite um número entre 1 e 10: ');
}

mensagemInicial();

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
    console.log(numeroAleatorio === chute);

    if (chute === numeroAleatorio) {
        exibirTexto('h1', 'Acertou');
        let palavraTentativa = contador > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${contador} ${palavraTentativa}!!`;
        exibirTexto('p', mensagemTentativas);
        habilitarBotaoNovoJogo();
    } else {
        if (chute > numeroAleatorio) {
            exibirTexto('p', 'O número secreto é menor, tente novamente!!');
        }   else {
            exibirTexto('p', 'O número secreto é maior, tente novamente!!');
        }   contador++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteDaLista + 1);    
    let quantidadeNumerosLista = listaDeNumeros.length;

    if (quantidadeNumerosLista == limiteDaLista) {
        listaDeNumeros = [];
    }

    if (listaDeNumeros.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeros.push(numeroEscolhido);
        return numeroEscolhido;
    }
    console.log(listaDeNumeros);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function habilitarBotaoNovoJogo() {
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    contador = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}