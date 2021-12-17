const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const PORT = 3000;
const { Client } = require("pg");
if (process.env.ENV !== "production") {
    require("dotenv").config();
}

const { resolve } = require("path");
const { config } = require("dotenv");
config({ path: resolve(__dirname, "./.env") }); 

/*/
const objeto = require("./routers/objeto");
/*/

const routes = require("./routers/routes");
const { response } = require("express");
console.log(path.join(__dirname, "./PROYECTO-POSTA"));

app.use(express.static(path.join(__dirname)));

app.use(routes);

app.get ("/test", async (req, res, next) => {
    try {
        const client = new Client();
        client.connect ();

        client.query ("Select $1::text as message", ["Hola, Mundo"], (err, res) => {
            if (err) {
                console.error(err.stack);
                response.send("Error: " + err.stack);
            } else {
                console.log(res.rows[0].message); 
                response.send(res.rows[0].message);
            }
            client.end();
        });
    } catch (error) {
        return next(error)
    }
});

/*/
app.use(cors());

app.use("/objeto, objeto");
/*/

app.listen(3000, function () {
    console.log("App corriendo en el puerto 3000")
});

app.set("PORT", 3000);
app.set("cabecinhapuntocom", path.join(__dirname, "/PROYECTO-POSTA"));

