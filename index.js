// Variaveis de configuração do express.
const express = require('express');
const app = express();
const routes = require('./routes')

//Especificando o diretório público de arquivos onde serão adicionados html, css e js.
app.use("/", express.static(__dirname + '/public'));
app.use(express.json())
routes.loadRoutes(app)

//Especificando a porta que será utilizada para rodar a aplicação.
app.listen(8080);
console.log("rodando")
