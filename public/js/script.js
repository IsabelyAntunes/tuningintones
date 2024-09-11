function mostrarMusicas(musicas){
	const galeriaMusicas = document.querySelector(".mostrarMusicas")
	musicas.shuffle();
	
	for(let i= 0; i < musicas.length; i++){
		const linkMusica = document.createElement("a");
		const imgMusica = document.createElement("img")
    const divartista = document.createElement("div")
    divartista.innerHTML = "<h3>"+ musicas[i].titulo+"</h3><p>"+ musicas[i].artista+"</p><p>"+ musicas[i].genero+"</p><p>"+ musicas[i].compositor+"</p><p>"+ musicas[i].ano_lancamento+"</p>";
    
        linkMusica.href = 'api/musicas/'+ musicas[i].id;
        linkMusica.title = musicas[i].titulo;
		    imgMusica.src = musicas[i].img_capa;
        imgMusica.alt = musicas[i].titulo;
		imgMusica.className = "musicas"
    linkMusica.className = "linkMusica"
    divartista.className = "artista"
    linkMusica.append(imgMusica);
    linkMusica.append(divartista);
		galeriaMusicas.append(linkMusica)
	}
}

Array.prototype.shuffle = function() {
    for (let i = this.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this[i], this[j]] = [this[j], this[i]];
    }
}
	
listarMusicasService()
async function listarMusicasService(){
    const resposta = await fetch('api/musicas');
    const musicas = await resposta.json();
    mostrarMusicas(musicas);
}

