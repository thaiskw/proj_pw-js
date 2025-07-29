const express = require("express");
const router = express.Router();

//listar alunos
router.get("/", async (req, res)=> {
    res.render("base", {
        title: "Listar Aluno",
        view: "alunos/show",
    });
});

//form edit alunos
router.get("/edit", async (req, res)=> {
    res.render("base", {
        title: "Editar Aluno",
        view: "alunos/edit",
    });
});

//form add alunos
router.get("/add", async (req, res)=> {
    res.render("base", {
        title: "Adicionar Aluno",
        view: "alunos/add",
    });
});

module.exports = router;