//Aqui estamos chamando os arquivos necessários para o funcionamneto desse trecho
const musicas = require("./musicas.json")
const Musica = require("../../models/Musica")

//Função responsável por adicionar novos objetos que forem cadastrados
const carregarMusicas = (()=>{
	const lista = []
	for(i in musicas){
		lista.push(new Musica(musicas[i]))
	}
	return lista
})()

//Aqui estamos exportando a função carregarProdutos para ser utilizada em outro arquivo
module.exports = {
	carregarMusicas
}