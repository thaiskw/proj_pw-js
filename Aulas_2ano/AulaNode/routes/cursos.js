const express = require("express");
const router = express.Router();

//listar curso
router.get("/", async (req, res)=> {
    res.render("base", {
        title: "Listar Cursos",
        view: "cursos/show",
    });
});

//form edit curso
router.get("/edit", async (req, res)=> {
    res.render("base", {
        title: "Editar Curso",
        view: "categorias/edit",
    });
});

//form add curso
router.get("/add", async (req, res)=> {
    res.render("base", {
        title: "Adicionar Curso",
        view: "categorias/add",
    });
});

module.exports = router;