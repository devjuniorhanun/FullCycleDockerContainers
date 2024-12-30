const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
const message = process.env.MESSAGE || "Hello World!"

// Criando a conexão com o MongoDB
mongoose
.connect("mongodb://db:27017/nodeapi", {})
.then(() => {
    console.log("MongoDB Conectado");
}).catch((err) => {
    console.log("Erro ao conectar com o MongoDB: " + err);
});

app.get("/",(req,res) => {
    res.send(message);
});

app.listen(port,() => {
    console.log(`Server Rodando na porta ${port}\n`);
})