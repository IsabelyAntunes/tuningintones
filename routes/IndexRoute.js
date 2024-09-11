module.exports = (router) => {
   router.get('/', (req, res) => {
      res.json({msg: 'API RESTFul Musicas by: Isabely', version: '1.0.0'});
   });
}