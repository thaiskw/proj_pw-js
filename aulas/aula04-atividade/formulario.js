let idCounter = 1;

function adicionarLinha() {
    // Captura os valores dos campos do formulário
    const produto = document.getElementById('produto').value;
    const marca = document.getElementById('marca').value;
    const segmento = document.getElementById('segmento').value;
    const valor = document.getElementById('valor').value;
    const dataVenda = document.getElementById('data-venda').value;

    // Verifica se todos os campos foram preenchidos
    if (!produto || !marca || !segmento || !valor || !dataVenda) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Cria uma nova linha na tabela
    const tabelaBody = document.getElementById('tabelaDados').querySelector('tbody');
    const novaLinha = document.createElement('tr');

    // Cria as células da nova linha
    novaLinha.innerHTML = `
        <td>${idCounter}</td>
        <td>${produto}</td>
        <td>${marca}</td>
        <td>${segmento}</td>
        <td>${valor}</td>
        <td>${dataVenda}</td>
    `;

    // Adiciona a nova linha ao corpo da tabela
    tabelaBody.appendChild(novaLinha);

    // Incrementa o contador de IDs
    idCounter++;

    // Limpa os campos do formulário todo
    document.getElementById('linhaForm').reset();
}