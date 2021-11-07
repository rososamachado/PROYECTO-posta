const router = require("express").Router();

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
