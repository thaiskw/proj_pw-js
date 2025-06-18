const firebaseConfig = { /* ...mesmo config... */ };
firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref("alunos");

function carregarAlunos() {
  db.on("value", (snapshot) => {
    const tbody = $("#tabelaAlunos");
    tbody.empty();
    snapshot.forEach((child) => {
      const aluno = child.val();
      const key = child.key;
      tbody.append(`
        <tr>
          <td>${key}</td>
          <td>${aluno.nome}</td>
          <td>${aluno.email}</td>
          <td>${aluno.telefone}</td>
          <td>
            <button class="btn btn-warning btn-sm edit-btn" data-id="${key}">Editar</button>
            <button class="btn btn-danger btn-sm delete-btn" data-id="${key}">Excluir</button>
          </td>
        </tr>
      `);
    });
  });
}

$("#formAluno").submit(function (e) {
  e.preventDefault();

  const id = $("#id").val();
  const nome = $("#txtnome").val();
  const email = $("#txtemail").val();
  const telefone = $("#txttelefone").val();

  if (id) {
    db.child(id).update({ nome, email, telefone });
  } else {
    db.push({ nome, email, telefone });
  }

  this.reset();
  $("#id").val("");
});

$(document).on("click", ".edit-btn", function () {
  const id = $(this).data("id");
  db.child(id).once("value").then((snapshot) => {
    const aluno = snapshot.val();
    $("#id").val(id);
    $("#txtnome").val(aluno.nome);
    $("#txtemail").val(aluno.email);
    $("#txttelefone").val(aluno.telefone);
  });
});

$(document).on("click", ".delete-btn", function () {
  const id = $(this).data("id");
  if (confirm("Tem certeza que deseja excluir?")) {
    db.child(id).remove();
  }
});

carregarAlunos();
