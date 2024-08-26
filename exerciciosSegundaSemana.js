function exercicio1() {

    const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    const dataAtual = new Date();
    const diaSemana = diasSemana[dataAtual.getDay()];
    const dia = dataAtual.getDate();
    const mes = meses[dataAtual.getMonth()];
    const ano = dataAtual.getFullYear();

    const dataFormatada = `${diaSemana}, ${dia} de ${mes} de ${ano}`;

    alert(dataFormatada);
}

function iniciarRelogio() {

    exercicio2();
    setInterval(exercicio2, 1000);
}

function exercicio2() {

    const dataAtual = new Date();
    const horas = dataAtual.getHours().toString().padStart(2, '0');
    const minutos = dataAtual.getMinutes().toString().padStart(2, '0');
    const segundos = dataAtual.getSeconds().toString().padStart(2, '0');

    const horarioFormatado = `${horas}:${minutos}:${segundos}`;
    document.getElementById("relogio").textContent = horarioFormatado;
}

function exercicio3() {

    let textoOriginal;

    while (true) {
        textoOriginal = prompt("Informe uma palavra ou uma frase: ")

        if (textoOriginal && textoOriginal.trim() && /[a-zA-Z]/.test(textoOriginal)) {
            break;
        } else {
            alert("Informe uma palavra ou frase válida!");
        }
    }
    
    const textoFormatado = textoOriginal.toLowerCase().replace(/[\W_]/g, '');
    const Palindromo = textoFormatado === textoFormatado.split('').reverse().join('');

    if (Palindromo) {
        alert(`"${textoOriginal}" é um palíndromo!`);
    } else {
        alert(`"${textoOriginal}" não é um palíndromo.`);
    }
}