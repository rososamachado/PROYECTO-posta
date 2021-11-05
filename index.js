const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

const routes = require("./routers/routes");
console.log(path.join(__dirname, "./PROYECTO-POSTA"));
app.use(express.static(path.join(__dirname)));

app.use(routes);

app.listen(3000, function () {
    console.log("App corriendo en el puerto 3000")
});

app.set("PORT", 3000);
app.set("cabecinhapuntocom", path.join(__dirname, "/PROYECTO-POSTA"));

