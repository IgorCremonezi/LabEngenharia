function exercicio1() {

    document.getElementById('exercicio-container').classList.remove('d-none');
}

function atualizarListaOrdenada() {
    
    const listaOrdenada = document.getElementById('listaOrdenada');
    listaOrdenada.innerHTML = '';

    itensArray.forEach(function (item) {
        let li = document.createElement('li');
        li.textContent = item;
        li.className = "list-group-item";
        listaOrdenada.appendChild(li);
    });
}

let itensArray = [];

document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();

    let novoItem = document.getElementById('item').value.trim();

    if (novoItem !== "") {
        itensArray.push(novoItem);

        itensArray.sort(function(a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        });

        document.getElementById('item').value = "";

        atualizarListaOrdenada();
    }
});