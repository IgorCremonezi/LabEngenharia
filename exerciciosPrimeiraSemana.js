function ValidacaoNumero() {

    let numero;

    while (true) {
        numero = prompt("Informe um número inteiro positivo: ");
        numero = Number(numero);

        if (numero >= 0 && Number.isInteger(numero)) {
            return numero;
        } else {
            alert("Informe um valor válido!");
        }
    }
}

function exercicio1() {

    let numero = ValidacaoNumero();

    if (numero % 2 == 0) {
        alert("O número informado é par!");
    } else {
        alert("O número informado é ímpar!")
    }
}

function numeroPrimo(numero) {

    if (numero <= 1) return false;
    
    if (numero <= 3) return true;

    if (numero % 2 === 0 || numero % 3 === 0) return false;

    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
    }

    return true;
}

function exercicio2() {
    
    let numero = ValidacaoNumero();

    if (numeroPrimo(numero)) {
        alert("O número " + numero + " é um número primo!");
    } else {
        alert("O número " + numero + " não é um número primo!");
    }
}

function exercicio3() {

    let numero = ValidacaoNumero();
    let fatorial = 1;

    for (let i = numero; i >= 2; --i) {
        fatorial *= i;
    }

    alert("O fatorial de " + numero + " é: " + fatorial);
}

function exercicio4() {

    let dado = prompt("Informe um dado: ");

    let numeroConvertido = Number(dado);
    let booleanoConvertido = (dado.toLowerCase() === "true" || dado.toLowerCase() === "false");

    let tipoReal;

    if (!isNaN(numeroConvertido) && dado.trim() !== "") {
        tipoReal = "Number";
    } else if (booleanoConvertido) {
        tipoReal = "Boolean";
    } else {
        tipoReal = "String";
    }

    let verificarTipoDado = confirm("Deseja verificar o tipo do dado?");

    let insercaoHTML = '';

    if (verificarTipoDado) {
        insercaoHTML += '<h3 class="mt-5">O tipo do dado informado é: ' + tipoReal + '</h3>';
    } else {
        insercaoHTML += '<h3 class="mt-5">Obrigado por visitar está página.</h3>';
    }

    let substituirTexto = document.getElementById("exerc4");
    substituirTexto.innerHTML = insercaoHTML;
}