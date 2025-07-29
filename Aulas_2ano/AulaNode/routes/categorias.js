const express = require("express");
const router = express.Router();

//listar categoria
router.get("/", async (req, res)=> {
    res.render("base", {
        title: "Listar Categorias",
        view: "categorias/show",
    });
});

//form edit categoria
router.get("/edit", async (req, res)=> {
    res.render("base", {
        title: "Editar Categoria",
        view: "categorias/edit",
    });
});

//form add categoria
router.get("/add", async (req, res)=> {
    res.render("base", {
        title: "Adicionar Categoria",
        view: "categorias/add",
    });
});

module.exports = router;