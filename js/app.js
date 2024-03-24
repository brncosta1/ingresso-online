function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (tipoIngresso.value === 'pista') {
        comprarPista(quantidade);
    } else if (tipoIngresso.value === 'superior') {
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }
}

function comprarPista(quantidade) {
    let quantidadeDisponivel = parseInt(document.getElementById('qtd-pista').textContent);
    
    if (quantidade > quantidadeDisponivel) {
        alert('Quantidade indisponível para o tipo "pista".');
    } else {
        quantidadeDisponivel -= quantidade;
        document.getElementById('qtd-pista').textContent = quantidadeDisponivel;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(quantidade) {
    let quantidadeDisponivel = parseInt(document.getElementById('qtd-superior').textContent);
    
    if (quantidade > quantidadeDisponivel) {
        alert('Quantidade indisponível para o tipo "Superior".');
    } else {
        quantidadeDisponivel -= quantidade;
        document.getElementById('qtd-superior').textContent = quantidadeDisponivel;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(quantidade) {
    let quantidadeDisponivel = parseInt(document.getElementById('qtd-inferior').textContent);
    
    if (quantidade > quantidadeDisponivel) {
        alert('Quantidade indisponível para o tipo "Inferior".');
    } else {
        quantidadeDisponivel -= quantidade;
        document.getElementById('qtd-inferior').textContent = quantidadeDisponivel;
        alert('Compra realizada com sucesso!');
    }
}