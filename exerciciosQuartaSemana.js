function Pessoa() {
    var nome, email, dataNascimento, telefoneFixo, telefoneCelular;

    this.setNome = function (vNome) {
        this.nome = vNome;
    }

    this.getNome = function () {
        return this.nome;
    }

    this.setEmail = function (vEmail) {
        this.email = vEmail;
    }

    this.getEmail = function () {
        return this.email;
    }

    this.setDataNascimento = function (vDataNascimento) {
        this.dataNascimento = vDataNascimento;
    }

    this.getDataNascimento = function () {
        return this.dataNascimento;
    }

    this.setTelefoneFixo = function (vTelefoneFixo) {
        this.telefoneFixo = vTelefoneFixo;
    }

    this.getTelefoneFixo = function () {
        return this.telefoneFixo;
    }

    this.setTelefoneCelular = function (vTelefoneCelular) {
        this.telefoneCelular = vTelefoneCelular;
    }

    this.getTelefoneCelular = function () {
        return this.telefoneCelular;
    }
}

function Aluno() {
    Pessoa.call(this);
    var matricula;

    this.setMatricula = function (vMatricula) {
        this.matricula = vMatricula;
    }

    this.getMatricula = function () {
        return this.matricula;
    }
}

function Professor() {
    Pessoa.call(this);
    var matriculaProfessor;

    this.setMatriculaProfessor = function (vMatriculaProfessor) {
        this.matriculaProfessor = vMatriculaProfessor;
    }

    this.getMatriculaProfessor = function () {
        return this.matriculaProfessor;
    }
}

function toggleFormFields() {
    const alunoFields1 = document.getElementById('alunoFields1');
    const alunoFields2 = document.getElementById('alunoFields2');
    const professorFields1 = document.getElementById('ocultProf1');
    const professorFields2 = document.getElementById('ocultProf2');
    const lattesGroup = document.getElementById('lattes-group');

    const isAluno = document.querySelector('input[name="profissao"]:checked').value === "Aluno";

    if (isAluno) {
        alunoFields1.style.display = 'block';
        alunoFields2.style.display = 'block';
        professorFields1.style.display = 'none';
        professorFields2.style.display = 'none';
        lattesGroup.style.display = 'none';
    } else {
        alunoFields1.style.display = 'none';
        alunoFields2.style.display = 'none';
        professorFields1.style.display = 'flex';
        professorFields2.style.display = 'flex';
        lattesGroup.style.display = 'block';
    }
}

document.querySelectorAll('input[name="profissao"]').forEach(function (input) {
    input.addEventListener('change', toggleFormFields);
});

document.addEventListener('DOMContentLoaded', toggleFormFields);

function validarCampo(event) {
    var campo = event.target;
    var valor = campo.value;
    var tipo = campo.dataset.tipo;
    var erro = '';

    switch (tipo) {
        case 'nome':
            if (!/^[a-zA-Z]+\s[a-zA-Z]+$/.test(valor)) {
                erro = 'Nome inválido. Insira nome e sobrenome.';
            }
            break;
        case 'email':
            if (!/^\S+@\S+\.\S+$/.test(valor)) {
                erro = 'Email inválido.';
            }
            break;
        case 'data':
            if (!/^\d{4}-\d{2}-\d{2}$/.test(valor)) {
                erro = 'Data de nascimento inválida.';
            }
            break;
        case 'telefone':
            if (!/^\(\d{2}\)\d{4}-\d{4}$/.test(valor)) {
                erro = 'Telefone fixo inválido.';
            }
            break;
        case 'celular':
            if (!/^\(\d{2}\)\d{5}-\d{4}$/.test(valor)) {
                erro = 'Telefone celular inválido.';
            }
            break;
        case 'matriculaAluno':
            if (!/^\d{10}$/.test(valor)) {
                erro = 'Matrícula de aluno deve ter 10 dígitos.';
            }
            break;
        case 'matriculaProfessor':
            if (!/^\d{5}$/.test(valor)) {
                erro = 'Matrícula de professor deve ter 5 dígitos.';
            }
            break;
    }

    var erroDiv = campo.nextElementSibling;
    if (erro) {
        erroDiv.textContent = erro;
        erroDiv.style.color = 'red';
    } else {
        erroDiv.textContent = '';
    }
}

document.querySelectorAll('input').forEach(function (input) {
    input.addEventListener('blur', validarCampo);
});

function salvarDados() {
    const isAluno = document.querySelector('input[name="profissao"]:checked').value === "Aluno";

    if (isAluno) {
        var aluno = new Aluno();
        aluno.setNome(document.getElementById('nome').value);
        aluno.setEmail(document.getElementById('email').value);
        aluno.setDataNascimento(document.getElementById('dataNascimento').value);
        aluno.setTelefoneFixo(document.getElementById('telefoneFixo').value);
        aluno.setTelefoneCelular(document.getElementById('telefoneCelular').value);
        aluno.setMatricula(document.getElementById('matriculaAluno').value);

        alert(
            "Dados do Aluno:\n" +
            "Nome: " + aluno.getNome() + "\n" +
            "Email: " + aluno.getEmail() + "\n" +
            "Data de Nascimento: " + aluno.getDataNascimento() + "\n" +
            "Telefone Fixo: " + aluno.getTelefoneFixo() + "\n" +
            "Telefone Celular: " + aluno.getTelefoneCelular() + "\n" +
            "Matrícula: " + aluno.getMatricula()
        );
        
    } else {
        var professor = new Professor();
        professor.setNome(document.getElementById('nome').value);
        professor.setEmail(document.getElementById('email').value);
        professor.setDataNascimento(document.getElementById('dataNascimento').value);
        professor.setTelefoneFixo(document.getElementById('telefoneFixo').value);
        professor.setTelefoneCelular(document.getElementById('telefoneCelular').value);
        professor.setMatriculaProfessor(document.getElementById('matriculaProfessor').value);

        alert(
            "Dados do Professor:\n" +
            "Nome: " + professor.getNome() + "\n" +
            "Email: " + professor.getEmail() + "\n" +
            "Data de Nascimento: " + professor.getDataNascimento() + "\n" +
            "Telefone Fixo: " + professor.getTelefoneFixo() + "\n" +
            "Telefone Celular: " + professor.getTelefoneCelular() + "\n" +
            "Matrícula Professor: " + professor.getMatriculaProfessor()
        );
        
    }
}
