module.exports = class Musica{
	constructor({id, titulo, artista, genero, composicao, ano_lancamento, img_capa}){
		this.id = id || Math.floor(+new Date() / 1000);
		this.titulo = titulo;
		this.artista = artista;
    this.genero = genero;
		this.compositor = composicao;
		this.ano_lancamento = ano_lancamento;
		this.img_capa = img_capa;
	}	
}
