const form = document.getElementById('formContato');
const tbody = document.getElementById('tabelaContatos').querySelector('tbody');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = form.nome.value.trim();
    const telefone = form.telefone.value.trim();

    if (!nome || !telefone) {
        alert('Por favor, preencha ambos os campos.');
        return;
    }

    const novaLinha = document.createElement('tr');
    const tdNome = document.createElement('td');
    tdNome.textContent = nome;
    const tdTelefone = document.createElement('td');
    tdTelefone.textContent = telefone;

    novaLinha.appendChild(tdNome);
    novaLinha.appendChild(tdTelefone);

    tbody.appendChild(novaLinha);

    form.reset();

    form.nome.focus();
});