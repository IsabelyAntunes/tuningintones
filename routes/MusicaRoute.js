const MusicaController = require('../controllers/MusicaController');

module.exports = (router) => {
   router.get('/musicas', MusicaController.get);
}