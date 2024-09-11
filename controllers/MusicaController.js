const Musica = require('../models/Musica');
const musicas = require('../database/data').carregarMusicas || [];

exports.get = (req, res) => {
   const { titulo } = req.query;
   if(titulo){
      return res.json(
         musicas.filter(musica =>musica.titulo.toLowerCase()
            .includes(titulo.toLowerCase()))
      );
   }
   res.json(musicas);
};