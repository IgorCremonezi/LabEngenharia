class Tarefa {
    constructor(nome, descricao) {
      this.nome = nome;
      this.descricao = descricao;
      this.status = 'Pendente';
    }
  
    concluir() {
      this.status = 'Concluída';
    }
  
    detalhes() {
      return `Nome: ${this.nome}\nDescrição: ${this.descricao}\nStatus: ${this.status}`;
    }
  }
  
  class GerenciadorDeTarefas {
    constructor() {
      this._tarefas = [];
    }
  
    adicionarTarefa(tarefa) {
      this._tarefas.push(tarefa);
      this.listarTarefas();
    }
  
    listarTarefas() {
      const lista = document.getElementById('listaTarefas');
      lista.innerHTML = '';
      this._tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        li.classList.toggle('completed', tarefa.status === 'Concluída');
        li.innerHTML = `
          ${tarefa.nome}
          <div>
            <button onclick="gerenciador.visualizarDetalhes(${index})">Detalhes</button>
            <button onclick="gerenciador.marcarComoConcluida(${index})">Concluir</button>
            <button onclick="gerenciador.removerTarefa(${index})">Remover</button>
          </div>
        `;
        lista.appendChild(li);
      });
    }
  
    marcarComoConcluida(index) {
      this._tarefas[index].concluir();
      this.listarTarefas();
    }
  
    removerTarefa(index) {
      this._tarefas.splice(index, 1);
      this.listarTarefas();
    }
  
    visualizarDetalhes(index) {
      const modal = document.getElementById('modal');
      const detalhesTarefa = document.getElementById('detalhesTarefa');
      detalhesTarefa.textContent = this._tarefas[index].detalhes();
      modal.style.display = 'block';
    }
  }
  
  const gerenciador = new GerenciadorDeTarefas();
  
  document.getElementById('tarefaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nomeTarefa').value;
    const descricao = document.getElementById('descricaoTarefa').value;
    const novaTarefa = new Tarefa(nome, descricao);
    gerenciador.adicionarTarefa(novaTarefa);
    this.reset();
  });
  
  document.getElementById('closeModal').onclick = function() {
    document.getElementById('modal').style.display = 'none';
  }
  
  window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
  