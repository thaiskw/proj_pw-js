const express = require("express");
const router = express.Router();

// Página equipe
router.get("/", async (req, res) => {
    res.render("base", {
        title: "Equipe",
        view: "equipe",
    });
});

module.exports = router;