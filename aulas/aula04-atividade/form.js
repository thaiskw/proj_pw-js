let proximoId = 1

function adicionarLinha(){
    //Entrada de valores do formulário
    const produto = document.getElementById("produto").value;
    const marca = document.getElementById("marca").value;
    const segmento = document.getElementById("segmento").value;
    const valor = document.getElementById("valor").value;
    const data_venda = document.getElementById("data-venda").value;

    //Se for preenchido vazio
    if(produto === '' || marca === '' || segmento === '' || valor === '' || data_venda === ''){
        alert("Preencha os valores do formulário!")
    } else{
        
    //Cria uma linha da tabela se não existir
    const tabela = document.getElementById("tabelaDados").getElementsByTagName('tbody') [0];

    //Inserindo uma nova linha
    const novaLinha = tabela.insertRow();

    //Inserindo os valores da linha
    const celId = novaLinha.insertCell(0);
    const celProduto = novaLinha.insertCell(1);
    const celMarca = novaLinha.insertCell(2);
    const celSegmento = novaLinha.insertCell(3);
    const celValor = novaLinha.insertCell(4);
    const celData_venda = novaLinha.insertCell(5);

    //Inserindo os valores dentro das celulas
    celId.innerHTML = proximoId;
    celProduto.innerHTML = produto;
    celMarca.innerHTML = marca;
    celSegmento.innerHTML = segmento;
    celValor.innerHTML = valor;
    celData_venda.innerHTML = data_venda;

    proximoId++

    //Limpar Formulário
    document.getElementById("linhaForm").reset();
    }

}
