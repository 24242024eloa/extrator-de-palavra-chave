const botaoMostraPalavras= documento.querySelector("#botao-palavrachave");
botaoMostraPalavra.addEventListener("click",mostraPalavraChave);
function mostraPalavraChave(){
    const texto= documento.querySelector("#entrada-de-texto").valeu;
    const campoResultado = documento.querySelector("#resultado-palavrachave");
    const palavraChave = processaTexto(texto);
    campoResultado.texContent = palavraChave.join(".");
}
