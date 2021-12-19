const router = require("express").Router();
const db = require("../db");

router.get("/", (req, res) => {
    res.send({
        objeto: ilustraciones,
    });
});

router.post("/", (req, res) => {
    const titulo = req.body.titulo;
    const estilo = req.body.estilo;

    const ilustracionUno = {
        titulo: titulo,
        estilo: estilo,
        autor: "Cabecinha",
    };
    ilustraciones.push(ilustracionUno);

    res.send({
        objeto: ilustraciones,
        ilustracionUno: ilustracionUno,
    });
});

const ilustracionesBd = await db.query("Select * from ilustraciones where artista = $1", [
    req.body.artista,
]);

const ilustraciones = [
    {
        titulo: "Prueba 1",
        estilo: "estilo-uno",
        autor: "Cabecinha",
    },
    {
        titulo: "Prueba 2",
        estilo: "estilo-dos",
        autor: "Cabecinha",
    },
];
module.exports = router;
