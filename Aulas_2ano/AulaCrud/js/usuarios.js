// Inicializar Firebase (modo compatível com o HTML)
const firebaseConfig = {
  apiKey: "AIzaSyDRkutm63TyGsiG0h48gBLABrHJfBVymgk",
  authDomain: "crud-33c09.firebaseapp.com",
  databaseURL: "https://crud-33c09-default-rtdb.firebaseio.com",
  projectId: "crud-33c09",
  storageBucket: "crud-33c09.appspot.com",
  messagingSenderId: "924461320087",
  appId: "1:924461320087:web:2beba380ddd7d207b266d2",
  measurementId: "G-J2Y6JMB6QH"
};

firebase.initializeApp(firebaseConfig);

// Referência ao nó "usuarios"
const db = firebase.database().ref("usuarios");

// Carregar usuários na tabela
function carregarUsuarios() {
  db.on("value", (snapshot) => {
    const tbody = $("#tabelaUsuarios");
    tbody.empty();

    const data = snapshot.val();
    if (data) {
      for (let key in data) {
        const user = data[key];
        tbody.append(`
          <tr>
            <td>${user.nome}</td>
            <td>${user.email}</td>
            <td>
              <button class="btn btn-warning btn-sm edit-btn" data-id="${key}">Editar</button>
              <button class="btn btn-danger btn-sm delete-btn" data-id="${key}">Excluir</button>
            </td>
          </tr>
        `);
      }
    } else {
      tbody.append("<tr><td colspan='3' class='text-center'>Nenhum usuário cadastrado.</td></tr>");
    }
  });
}

// Salvar usuário (criar ou atualizar)
$("#formUsuario").submit(function (e) {
  e.preventDefault();

  const id = $("#id").val();
  const nome = $("#txtnome").val();
  const email = $("#txtemail").val();

  if (id) {
    db.child(id).update({ nome, email });
  } else {
    db.push({ nome, email });
  }

  this.reset();
  $("#id").val("");
});

// Editar usuário
$(document).on("click", ".edit-btn", function () {
  const id = $(this).data("id");

  db.child(id).once("value").then((snapshot) => {
    const user = snapshot.val();
    if (user) {
      $("#id").val(id);
      $("#txtnome").val(user.nome);
      $("#txtemail").val(user.email);
    }
  });
});

// Excluir usuário
$(document).on("click", ".delete-btn", function () {
  const id = $(this).data("id");
  if (confirm("Tem certeza que deseja excluir este usuário?")) {
    db.child(id).remove();
  }
});

// Inicializar a lista ao carregar a página
carregarUsuarios();