const clientes = require("./clientes");
const express = require("express");
const app = express();

app.get("/", (require, response) => {
  response.send("<a href='/bancoClientes'>bancoClientes</a> <span>&#x1F448;</span>");
});

app.get("/bancoClientes", (require, response) => {
  const bancoClientesJSON = JSON.stringify(clientes.bancoClientes);
  response.send(bancoClientesJSON);
});

let porta = 3333;

app.listen(porta);