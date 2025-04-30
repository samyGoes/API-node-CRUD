// Defina a URL base da WebAPI (ajuste conforme necessário)
const API_BASE_URL = 'http://localhost:3000/funcionarios';

// Função para listar usuários (GET)
function listarUsuarios() {
    fetch(API_BASE_URL)
    .then(response => response.json())
    .then(data => {
        document.getElementById('get-result').innerHTML =
        `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => {
        document.getElementById('get-result').innerText = `Erro: ${error}`;
    });
}

// Função para listar usuários peli ID (GET)
function listarUsuariosPeloId() {
    const id = document.getElementById('get-id').value;

    fetch(`${API_BASE_URL}/${id}`, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('get-result-id').innerHTML =
        `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => {
        document.getElementById('get-result-id').innerText = `Erro: ${error}`;
    });
}


// Função para criar um usuário (POST)
function criarUsuario() {
    const nome = document.getElementById('nome').value;
    const cargo = document.getElementById('cargo').value;
    const salario = document.getElementById('salario').value;

    fetch(API_BASE_URL, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome: nome, cargo: cargo, salario: salario })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('post-result').innerHTML =
            `<pre>${JSON.stringify(data, null, 2)}</pre>`;
            listarUsuarios(); // Atualiza a lista após inserção
    })
    .catch(error => {
        document.getElementById('post-result').innerText = `Erro: ${error}`;
    });
}

// Função para atualizar um usuário (PUT)
function atualizarUsuario() {
    const id = document.getElementById('put-id').value;
    const nome = document.getElementById('put-nome').value;
    const cargo = document.getElementById('put-cargo').value;
    const salario = document.getElementById('put-salario').value;

    fetch(`${API_BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome: nome, cargo: cargo, salario: salario })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('put-result').innerHTML =
            `<pre>${JSON.stringify(data, null, 2)}</pre>`;
            listarUsuarios(); // Atualiza a lista após atualização
    })
    .catch(error => {
        document.getElementById('put-result').innerText = `Erro: ${error}`;
    });
}

// Função para remover um usuário (DELETE)
function removerUsuario() {
    const id = document.getElementById('delete-id').value;

    fetch(`${API_BASE_URL}/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('delete-result').innerHTML =
        `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        listarUsuarios(); // Atualiza a lista após remoção
    })
    .catch(error => {
        document.getElementById('delete-result').innerText = `Erro: ${error}`;
    });
}