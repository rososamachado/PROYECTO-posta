const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const PORT = 3000;

const objeto = require("../routers/objeto");

const routes = require("./routers/routes");
console.log(path.join(__dirname, "./PROYECTO-POSTA"));
app.use(express.static(path.join(__dirname)));

app.use(routes);
app.use(cors());

app.use("/objeto, objeto");

app.listen(3000, function () {
    console.log("App corriendo en el puerto 3000")
});

app.set("PORT", 3000);
app.set("cabecinhapuntocom", path.join(__dirname, "/PROYECTO-POSTA"));

