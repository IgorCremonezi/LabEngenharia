function exercicio1() {

    let numero;

    while (true) {
        numero = prompt("Informe um número inteiro positivo: ");
        numero = Number(numero);

        if (numero >= 0 && Number.isInteger(numero)) {
            break;
        } else {
            alert("Informe um valor válido!");
        }
    }

    if (numero % 2 == 0) {
        alert("O número informado é par!");
    } else {
        alert("O número informado é ímpar!")
    }
}

function exercicio2() {
    
    let numero;

    while (true) {
        numero = prompt("Informe um número inteiro positivo: ");
        numero = Number(numero);

        if (numero >= 0 && Number.isInteger(numero)) {
            break;
        } else {
            alert("Informe um valor válido!");
        }
    }
}