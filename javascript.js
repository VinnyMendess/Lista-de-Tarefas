let contador = 0;
let contadorConcluido = 0;

function mostraTexto(){

  const texto = document.getElementById('entradaTarefa').value


  if (texto.trim() !== "") {
    const novaMensage = document.createElement('div');
    novaMensage.classList.add('mensagem');
    

    const textoSpan = document.createElement('span');
    textoSpan.textContent = texto;
    

    const lixeira = document.createElement('div');
    lixeira.classList.add('lixeira');
    lixeira.innerHTML = '<i class="fa-solid fa-trash"></i>';

    const caixaStatus = document.createElement('div');
    caixaStatus.classList.add('caixaStatus')

    caixaStatus.onclick = function () {
      caixaStatus.classList.toggle('ativo')
  
      if (caixaStatus.classList.contains('ativo')) {
        contadorConcluido++;
        atualizaContadorConcluido();
        } else {
          contadorConcluido--;
          atualizaContadorConcluido();
        }
    }

    
    lixeira.onclick = function () {
      novaMensage.remove();
      contador--;
      atualizaContador();
      contadorConcluido--;
      atualizaContadorConcluido();
    }

    
    novaMensage.appendChild(caixaStatus);
    novaMensage.appendChild(textoSpan);
    novaMensage.appendChild(lixeira);
    document.getElementById('exibicaoTexto').appendChild(novaMensage);

    contador++;
    atualizaContador();
  
  }
}

function atualizaContador(){
  document.getElementById('contadorTarefas').textContent = contador;
}
function atualizaContadorConcluido(){
  document.getElementById('contadorConcluido').textContent = contadorConcluido;
}



