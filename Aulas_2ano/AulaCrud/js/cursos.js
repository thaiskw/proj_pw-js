const firebaseConfig = { /* ...mesmo config... */ };
firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref("cursos");

function carregarCursos() {
  db.on("value", (snapshot) => {
    const tbody = $("#tabelaCursos");
    tbody.empty();
    snapshot.forEach((child) => {
      const curso = child.val();
      const key = child.key;
      tbody.append(`
        <tr>
          <td>${key}</td>
          <td>${curso.nome}</td>
          <td>
            <button class="btn btn-warning btn-sm edit-btn" data-id="${key}">Editar</button>
            <button class="btn btn-danger btn-sm delete-btn" data-id="${key}">Excluir</button>
          </td>
        </tr>
      `);
    });
  });
}

$("#formCursos").submit(function (e) {
  e.preventDefault();
  const id = $("#id").val();
  const nome = $("#txtnome").val();

  if (id) {
    db.child(id).update({ nome });
  } else {
    db.push({ nome });
  }

  this.reset();
  $("#id").val("");
});

$(document).on("click", ".edit-btn", function () {
  const id = $(this).data("id");
  db.child(id).once("value").then((snapshot) => {
    const curso = snapshot.val();
    $("#id").val(id);
    $("#txtnome").val(curso.nome);
  });
});

$(document).on("click", ".delete-btn", function () {
  const id = $(this).data("id");
  if (confirm("Tem certeza que deseja excluir?")) {
    db.child(id).remove();
  }
});

carregarCursos();
