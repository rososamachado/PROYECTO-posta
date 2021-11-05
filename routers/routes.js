const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res,) => {
    res.sendFile(path.join(__dirname + "/../cabecinhapuntocom.html"));
});

router.get("/contacto", (req, res,) => {
    res.sendFile(path.join(__dirname + "/../formulariodecontacto.html"));
});

router.get("/ilustraciones", (req, res,) => {
    res.sendFile(path.join(__dirname + "/../ilustraciones.html"));
});

router.get("/ups", (req, res,) => {
    res.sendFile(path.join(__dirname + "/../paginaendesarrollo.html"));
});

module.exports = router