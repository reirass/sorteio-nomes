const listaAmigos = []; 
const lista = document.getElementById('listaAmigos');
const nomeInserido = document.getElementById('amigo');
const resultadoSorteio = document.getElementById('resultado');



function adicionarAmigo() {
    const nomeAmigo = nomeInserido.value.trim(); 

    if (!nomeAmigo) {
        alert('Por favor, informe um nome!');
        return;
    }

    if (listaAmigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado!');
        return;
    }
    
    listaAmigos.push(nomeAmigo);
    atualizarLista();
    nomeInserido.value = ""; 
}
function atualizarLista() { 
    lista.innerHTML = listaAmigos.map(amigo => `<li>${amigo}</li>`).join('');
    };

function sortearAmigo() {
    if (listaAmigos.length < 2 ) {
        alert("Adicione no mínimo dois nomes para sortear.");
        return;
    }

    let nomeSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    resultadoSorteio.innerHTML = `<li>nome sorteado é: <strong>${nomeSorteado}</strong></li>`;
}

function refazerSorteio() {
    listaAmigos.length = 0;
    atualizarLista();
    resultadoSorteio.innerHTML = "";
}

nomeInserido.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        event.preventDefault();
        adicionarAmigo();
    }
});
