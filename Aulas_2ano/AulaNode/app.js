const express = require("express"); 

const path = require("path"); 

const app = express(); 

// Configurar pasta de arquivos estáticos (ex: public)
app.use(express.static(path.join(__dirname, "public")));

// Configuração do EJS como view engine 

app.set("views", path.join(__dirname, "views")); 

app.set("view engine", "ejs"); 

// Rota principal 

const indexRouter = require("./routes/index"); 

app.use("/", indexRouter); 

// Rotas para categorias e produtos 

const categoriaRouter = require("./routes/categorias"); 

app.use("/categorias", categoriaRouter); 

// Rotas para alunos
const alunoRouter = require("./routes/alunos"); 

app.use("/alunos", alunoRouter); 

// Rotas para cursos
const cursoRouter = require("./routes/cursos"); 

app.use("/cursos", cursoRouter); 

//Rotas para equipes
const equipeRouter = require("./routes/equipe"); 

app.use("/equipe", equipeRouter); 

// Iniciar o servidor e sincronizar com o banco de dados 

app.listen(3000, () => { 

  console.log("Servidor em execução na porta 3000"); 

}); 