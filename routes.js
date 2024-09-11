const express = require('express');
const IndexRoute = require('./routes/IndexRoute');
const MusicaRoute = require('./routes/MusicaRoute');
const routerApi = express.Router(); // Define um novo router para as rotas da API

const loadRoutes = (app) => {
   IndexRoute(routerApi); // Carrega rota do Index
   MusicaRoute(routerApi); // Carrega rotas da Musica
   app.use('/api', routerApi); // Define o prefixo '/api' para as rotas carregadas
}

module.exports = {
   loadRoutes
}