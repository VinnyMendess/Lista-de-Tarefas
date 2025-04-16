function mostraTexto(){

  const texto = document.getElementById('entradaTarefa').value


  if (texto.trim() !== "") {
    const novaMensage = document.createElement('div');
    novaMensage.classList.add('mensagem');
    novaMensage.textContent = texto;

    document.getElementById('exibicaoTexto').appendChild(novaMensage)
  }
}
